#!/usr/bin/env node
// Separate/manual workflow: ingest Slack channel links and append data.js entries.

const fs = require('fs');
const path = require('path');

const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');
const DEFAULT_LIMIT = 30;

function usage() {
  console.log(`Usage:
  node scripts/slack-to-datajs.js [--dry-run] [--limit=30] [--fixture=path/to/messages.json]

Required env (live mode):
  SLACK_BOT_TOKEN     xoxb-...
  SLACK_CHANNEL_ID    C0123456789

Message format (recommended):
  [accident] https://www.bbc.com/korean/articles/c3rjrdzyz8zo
  title: 신안 좌초 여객선 운항 과실로 가닥
  date: 2025-11-19
  update: 2025-11-20
  location: Shinan, South Korea
  coords: 126.10,34.67
  tags: Grounding,Ferry,South Korea

- date/title/link are mandatory to auto-append.
- This script is independent from RSS automation scripts.
`);
}

function arg(name, fallback = null) {
  const raw = process.argv.find(a => a.startsWith(`--${name}=`));
  if (!raw) return fallback;
  return raw.slice(name.length + 3);
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function parseDateFlexible(text) {
  if (!text) return null;
  const iso = text.match(/\b(20\d{2})[-./](\d{1,2})[-./](\d{1,2})\b/);
  if (iso) {
    const [, y, m, d] = iso;
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  const kr = text.match(/(20\d{2})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일/);
  if (kr) {
    const [, y, m, d] = kr;
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  }
  return null;
}

function parseMessage(text) {
  if (!text) return null;

  const linkMatch = text.match(/https?:\/\/[^\s>]+/i);
  if (!linkMatch) return null;
  const link = linkMatch[0];

  const lines = text.split('\n').map(s => s.trim()).filter(Boolean);
  const joined = lines.join(' ');

  const titleLine = lines.find(l => /^title\s*:/i.test(l));
  const dateLine = lines.find(l => /^date\s*:/i.test(l));
  const updateLine = lines.find(l => /^update\s*:/i.test(l));
  const locationLine = lines.find(l => /^location\s*:/i.test(l));
  const coordsLine = lines.find(l => /^coords\s*:/i.test(l));
  const tagsLine = lines.find(l => /^tags\s*:/i.test(l));

  const bracketType = (joined.match(/\[(accident|news|event)\]/i) || [])[1];

  const title = titleLine ? titleLine.replace(/^title\s*:/i, '').trim() : null;
  const dateRaw = dateLine ? dateLine.replace(/^date\s*:/i, '').trim() : joined;
  const date = parseDateFlexible(dateRaw);
  const update = updateLine ? parseDateFlexible(updateLine.replace(/^update\s*:/i, '').trim()) : null;
  const location = locationLine ? locationLine.replace(/^location\s*:/i, '').trim() : 'Unknown';

  let coords = [0, 0];
  if (coordsLine) {
    const raw = coordsLine.replace(/^coords\s*:/i, '').trim();
    const m = raw.match(/(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/);
    if (m) coords = [Number(m[1]), Number(m[2])];
  }

  const tags = tagsLine
    ? tagsLine.replace(/^tags\s*:/i, '').split(',').map(t => t.trim()).filter(Boolean)
    : [];

  const source = /bbc\.com/i.test(link) ? 'BBC Korean' : 'Slack Manual';
  const sourceMeta = update
    ? `slack manual · ${date || 'date-missing'} (Updated ${update})`
    : `slack manual · ${date || 'date-missing'}`;

  if (!title || !date) return { skip: true, reason: 'Missing title or date', link };

  return {
    date,
    entry: {
      type: bracketType ? bracketType.toLowerCase() : 'news',
      title,
      source,
      sourceMeta,
      content: '<p>Manually ingested from Slack channel.</p>',
      tags,
      link,
      coords,
      location,
    },
  };
}

async function slackApi(method, params, token) {
  const url = `https://slack.com/api/${method}`;
  const body = new URLSearchParams(params);
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`${method} failed: ${json.error}`);
  return json;
}

async function readMessages({ token, channel, limit, fixture }) {
  if (fixture) {
    const raw = JSON.parse(fs.readFileSync(fixture, 'utf8'));
    return raw.messages || raw;
  }
  const result = await slackApi('conversations.history', { channel, limit }, token);
  return result.messages || [];
}

function buildBlock(byDate) {
  const dates = Object.keys(byDate).sort();
  const blocks = dates.map((date) => {
    const items = byDate[date].map((a) => {
      return `    {\n      type: "${esc(a.type)}",\n      title: "${esc(a.title)}",\n      source: "${esc(a.source)}",\n      sourceMeta: "${esc(a.sourceMeta)}",\n      content: \`${a.content}\`,\n      tags: ${JSON.stringify(a.tags || [])},\n      link: "${esc(a.link)}",\n      coords: ${JSON.stringify(a.coords || [0, 0])},\n      location: "${esc(a.location)}"\n    }`;
    }).join(',\n\n');

    return `addEvents({\n  "${date}": [\n${items}\n  ]\n});`;
  });

  return `\n\n// ── Slack Manual Updates (Independent) ──\n${blocks.join('\n\n')}\n`;
}

function esc(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');
}

async function main() {
  if (hasFlag('help')) return usage();

  const dryRun = hasFlag('dry-run');
  const limit = Number(arg('limit', DEFAULT_LIMIT));
  const fixture = arg('fixture');
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;

  if (!fixture && (!token || !channel)) {
    usage();
    process.exit(1);
  }

  const messages = await readMessages({ token, channel, limit, fixture });
  const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');

  const existingLinks = new Set();
  const linkRegex = /link:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = linkRegex.exec(dataJs)) !== null) existingLinks.add(m[1]);

  const byDate = {};
  const skipped = [];

  for (const msg of messages) {
    const parsed = parseMessage(msg.text || '');
    if (!parsed) continue;
    if (parsed.skip) {
      skipped.push(parsed);
      continue;
    }

    if (existingLinks.has(parsed.entry.link)) {
      skipped.push({ link: parsed.entry.link, reason: 'Already exists' });
      continue;
    }

    if (!byDate[parsed.date]) byDate[parsed.date] = [];
    byDate[parsed.date].push(parsed.entry);
    existingLinks.add(parsed.entry.link);
  }

  const total = Object.values(byDate).reduce((n, arr) => n + arr.length, 0);
  console.log(`Prepared ${total} new entries from Slack messages.`);
  if (skipped.length) console.log(`Skipped ${skipped.length} messages.`);

  if (total === 0) return;

  const block = buildBlock(byDate);
  if (dryRun) {
    console.log('--- DRY RUN BLOCK START ---');
    console.log(block);
    console.log('--- DRY RUN BLOCK END ---');
    return;
  }

  fs.writeFileSync(DATA_JS_PATH, dataJs.trimEnd() + block);
  console.log(`✅ Updated ${DATA_JS_PATH}`);
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
