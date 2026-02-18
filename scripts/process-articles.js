// ═══════════════════════════════════════════════════════════════
// process-articles.js - Claude API로 기사 분석 및 구조화
// ═══════════════════════════════════════════════════════════════

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const client = new Anthropic();  // ANTHROPIC_API_KEY 환경변수 자동 사용

const SYSTEM_PROMPT = `You are a maritime news analyst. Given a news article, extract structured data for a maritime events map.

Return ONLY valid JSON (no markdown, no backticks) with this exact structure:
{
  "type": "accident" | "news" | "event",
  "title": "English title, concise (max 80 chars)",
  "source": "Source name",
  "sourceMeta": "source domain · Mon DD, YYYY",
  "content": "<p>1-2 sentence summary in English. Use <strong> for key names/vessels.</p>",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "link": "original article URL",
  "coords": [longitude, latitude],
  "location": "City or Sea area name",
  "date": "YYYY-MM-DD"
}

Rules:
- "type": Use "accident" for collisions, groundings, fires, sinkings, spills, casualties. Use "event" for conferences, expos, forums. Use "news" for everything else.
- "coords": [longitude, latitude] - Be as accurate as possible. For sea incidents, estimate the coordinates. For port incidents, use port coordinates.
- "tags": 2-4 relevant tags like ["Collision","Tanker","Mediterranean"] or ["Autonomous","AI","Regulation"]
- "content": Brief HTML summary, 1-2 sentences. Highlight vessel names and key facts with <strong>.
- If you cannot determine location, use [0, 0] and location "Unknown".
- "date": Use the article publication date in YYYY-MM-DD format.

If the article is not relevant to maritime/shipping, return: {"skip": true}`;

async function processArticles() {
  const raw = JSON.parse(fs.readFileSync('scripts/raw-articles.json', 'utf8'));
  const processed = [];

  for (const article of raw) {
    try {
      console.log(`🤖 Processing: ${article.title.slice(0, 60)}...`);

      const userMsg = `Feed: ${article.feedName}
Default category: ${article.defaultCategory}
Title: ${article.title}
URL: ${article.link}
Date: ${article.pubDate}
Content: ${article.snippet || article.content}`;

      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',  // 가장 저렴한 모델
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMsg }]
      });

      const text = response.content[0].text.trim();
      const parsed = JSON.parse(text);

      if (parsed.skip) {
        console.log(`   ⏭️ Skipped (not relevant)`);
        continue;
      }

      // 검증
      if (!parsed.type || !parsed.title || !parsed.coords) {
        console.warn(`   ⚠️ Invalid structure, skipping`);
        continue;
      }

      processed.push(parsed);
      console.log(`   ✅ ${parsed.type}: ${parsed.title}`);

      // API rate limit 방지 (1초 대기)
      await new Promise(r => setTimeout(r, 1000));

    } catch (err) {
      console.warn(`   ❌ Failed: ${err.message}`);
    }
  }

  console.log(`\n📊 Processed: ${processed.length} articles`);
  fs.writeFileSync('scripts/processed-articles.json', JSON.stringify(processed, null, 2));
  console.log('💾 Saved to scripts/processed-articles.json');
}

processArticles().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
