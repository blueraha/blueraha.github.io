// ═══════════════════════════════════════════════════════════════
// process-articles.js - Claude API로 기사 분석 및 구조화 (FINAL)
// ═══════════════════════════════════════════════════════════════

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const client = new Anthropic();

/* ─────────────────────────────
   JSON 추출 안정화 함수
───────────────────────────── */
function extractJSON(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start !== -1 && end !== -1) {
    return text.slice(start, end + 1);
  }
  throw new Error("No JSON object found");
}

const SYSTEM_PROMPT = `You are a maritime news analyst. Given a news article, extract structured data for a maritime events map.

IMPORTANT - Type classification rules:
- "accident": Maritime accidents, collisions, groundings, fires, sinkings, capsizes, oil spills, rescues, casualties, investigation reports
- "news": Autonomous ship technology, AI navigation, unmanned vessels, smart ship developments, industry technology news
- "event": ONLY for exhibitions, trade shows, conferences, expos, boat shows, summits, forums, workshops (e.g. CES, METSTRADE, SMM, Nor-Shipping, AI/robotics expos). Do NOT use "event" for general news articles.

Return ONLY valid JSON with this structure:
{
  "type": "accident" | "news" | "event",
  "title": "English title",
  "source": "Source name",
  "sourceMeta": "source domain · Mon DD, YYYY",
  "content": "<p>1-2 sentence summary.</p>",
  "tags": ["Tag1","Tag2"],
  "link": "original article URL",
  "coords": [longitude, latitude],
  "location": "City or Sea area name",
  "date": "YYYY-MM-DD"
}

If not maritime/autonomous/AI/robotics related:
{"skip": true}
`;

async function processArticles() {
  const raw = JSON.parse(
    fs.readFileSync('scripts/raw-articles.json', 'utf8')
  );

  const processed = [];

  for (const article of raw) {
    try {
      console.log(`🤖 Processing: ${article.title.slice(0, 60)}...`);

      const userMsg = `Feed: ${article.feedName}
Title: ${article.title}
URL: ${article.link}
Date: ${article.pubDate}
Content: ${article.snippet || article.content}`;

      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMsg }]
      });

      const text = response.content[0].text.trim();

      let parsed;
      try {
        parsed = JSON.parse(extractJSON(text));
      } catch (parseErr) {
        console.warn("   ⚠️ JSON parse failed — skipped");
        continue;
      }

      if (parsed.skip) {
        console.log("   ⏭️ Skipped (not relevant)");
        continue;
      }

      if (!parsed.type || !parsed.title || !parsed.coords) {
        console.warn("   ⚠️ Invalid structure — skipped");
        continue;
      }

      processed.push(parsed);
      console.log(`   ✅ ${parsed.type}: ${parsed.title}`);

      // rate-limit 보호
      await new Promise(r => setTimeout(r, 800));

    } catch (err) {
      console.warn(`   ❌ Failed: ${err.message}`);
    }
  }

  console.log(`\n📊 Processed: ${processed.length} articles`);

  fs.writeFileSync(
    'scripts/processed-articles.json',
    JSON.stringify(processed, null, 2)
  );

  console.log('💾 Saved to scripts/processed-articles.json');
}

processArticles().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
