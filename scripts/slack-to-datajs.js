#!/usr/bin/env node
// Auto-ingest Slack channel links: automatically fetches title and assigns today's date!

const fs = require('fs');
const path = require('path');

const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');
const DEFAULT_LIMIT = 30;

// URL에서 웹페이지 제목(Title)을 자동으로 긁어오는 함수
async function fetchTitleFromUrl(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36' },
      signal: AbortSignal.timeout(5000) // 5초 안에 못 가져오면 포기
    });
    if (res.ok) {
      const html = await res.text();
      const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (match && match[1]) {
        return match[1].trim()
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>');
      }
    }
  } catch (e) {
    console.log(`⚠️ 자동 제목 수집 실패 (${url}): ${e.message}`);
  }
  return 'Maritime News Article (Auto)'; // 실패 시 기본 제목
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
  return null;
}

// 비동기 파싱으로 변경 (제목을 웹에서 긁어와야 하므로)
async function parseMessage(text) {
  if (!text) return null;

  // 슬랙은 링크를 <http...> 형태로 감싸거나 | 뒤에 텍스트를 붙이므로 깔끔하게 URL만 추출
  const linkMatch = text.match(/https?:\/\/[^\s>|]+/i);
  if (!linkMatch) return null; // 링크가 아예 없으면 무시
  const link = linkMatch[0];

  const lines = text.split('\n').map(s => s.trim()).filter(Boolean);
  const joined = lines.join(' ');

  const titleLine = lines.find(l => /^title\s*:/i.test(l));
  const dateLine = lines.find(l => /^date\s*:/i.test(l));
  const locationLine = lines.find(l => /^location\s*:/i.test(l));

  // [태그]가 없으면 기본으로 'news' 할당
  const bracketType = (joined.match(/\[(accident|news|event)\]/i) || [])[1] || 'news';

  // 사용자가 적어준 제목/날짜가 있는지 확인
  let title = titleLine ? titleLine.replace(/^title\s*:/i, '').trim() : null;
  let dateRaw = dateLine ? dateLine.replace(/^date\s*:/i, '').trim() : null;

  // 🔥 마법 1: 제목이 없으면 URL에 접속해서 긁어온다!
  if (!title) {
    console.log(`Fetching title for: ${link}`);
    title = await fetchTitleFromUrl(link);
  }

  // 🔥 마법 2: 날짜가 없으면 오늘 날짜(UTC 기준)로 자동 입력한다!
  if (!dateRaw) {
    const today = new Date();
    dateRaw = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  }

  const date = parseDateFlexible(dateRaw) || dateRaw;
  const location = locationLine ? locationLine.replace(/^location\s*:/i, '').trim() : 'Global';

  const source = /bbc\.com/i.test(link) ? 'BBC' : (/gcaptain\.com/i.test(link) ? 'gCaptain' : 'Slack Feed');
  const sourceMeta = `slack auto · ${date}`;

  return {
    date,
    entry: {
      type: bracketType.toLowerCase(),
      title,
      source,
      sourceMeta,
      content: '<p>Shared from Maritime Hub Slack.</p>',
      tags: ['Slack'],
      link,
      coords: [0, 0],
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

async function readMessages({ token, channel, limit }) {
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
  return `\n\n// ── Slack Live Updates ──\n${blocks.join('\n\n')}\n`;
}

function esc(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');
}

async function main() {
  const dryRun = hasFlag('dry-run');
  const limit = Number(arg('limit', DEFAULT_LIMIT));
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;

  if (!token || !channel) {
    console.error("Missing SLACK_BOT_TOKEN or SLACK_CHANNEL_ID");
    process.exit(1);
  }

  const messages = await readMessages({ token, channel, limit });
  const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');

  // 중복 링크 확인
  const existingLinks = new Set();
  const linkRegex = /link:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = linkRegex.exec(dataJs)) !== null) existingLinks.add(m[1]);

  const byDate = {};
  const skipped = [];

  for (const msg of messages) {
    const parsed = await parseMessage(msg.text || ''); // 비동기로 제목 추출 대기
    if (!parsed) continue;

    if (existingLinks.has(parsed.entry.link)) {
      skipped.push({ link: parsed.entry.link, reason: 'Already exists in data.js' });
      continue;
    }

    if (!byDate[parsed.date]) byDate[parsed.date] = [];
    byDate[parsed.date].push(parsed.entry);
    existingLinks.add(parsed.entry.link);
  }

  const total = Object.values(byDate).reduce((n, arr) => n + arr.length, 0);
  console.log(`\n✅ 준비된 새 기사: ${total}개`);
  if (skipped.length) console.log(`⏭️ 건너뛴 중복 기사: ${skipped.length}개`);

  if (total === 0) return;

  const block = buildBlock(byDate);
  if (dryRun) {
    console.log(block);
    return;
  }

  fs.writeFileSync(DATA_JS_PATH, dataJs.trimEnd() + block);
  console.log(`\n🚀 [성공] ${DATA_JS_PATH} 파일이 업데이트되었습니다.`);
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});