// ═══════════════════════════════════════════════════════════════
// process-articles.js v2.0 - Claude API 분석 (강화 버전)
// 원문 텍스트 기반 + 한영 혼합 전문 리포트
// ═══════════════════════════════════════════════════════════════

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const client = new Anthropic();

function extractJSON(text) {
  const jsonBlock = text.match(/```json\s*([\s\S]*?)```/);
  if (jsonBlock) return jsonBlock[1].trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start !== -1 && end !== -1) return text.slice(start, end + 1);
  throw new Error('No JSON object found');
}

const SYSTEM_PROMPT = `You are a maritime industry analyst. Analyze the article and output TWO parts.

PART 1: Structured JSON in a \`\`\`json code block.
Type classification:
- "accident": maritime accidents, collisions, groundings, fires, sinkings, oil spills, casualties, investigation reports
- "news": autonomous ships, AI navigation, shipping tech, industry news, regulations, naval/defense
- "event": ONLY exhibitions, trade shows, conferences, expos, boat shows. General news is NOT event!

Output this JSON in a \`\`\`json code block:
{
  "type": "accident|news|event",
  "title": "English title (concise and clear)",
  "source": "Source site name",
  "sourceMeta": "source domain · YYYY-MM-DD",
  "tags": ["Tag1", "Tag2", "Tag3", "Tag4"],
  "link": "original article URL",
  "coords": [longitude, latitude],
  "location": "City or sea area name",
  "date": "YYYY-MM-DD"
}

Coordinate rules:
- Specific incident/event location: use those coordinates
- Country-level: use capital city coordinates
- Global/unclear: use [0, 0]

If not maritime/autonomous/AI/robotics related:
\`\`\`json
{"skip": true}
\`\`\`

PART 2: Expert Report (Korean-English mixed) AFTER the JSON block:

## Executive Summary
5-6 sentences in Korean summarizing key facts, vessels/organizations involved, and outcomes.

## Key Quotes
2-3 important sentences quoted in original English with Korean meaning in parentheses.
- "English original quote" (한글 해석)

## Technical Insights
3-4 sentences in Korean about autonomous shipping/COLREG/IMO/industry implications from an expert perspective. Provide insights useful for maritime engineers.`;

async function processArticles() {
  const raw = JSON.parse(
    fs.readFileSync('scripts/raw-articles.json', 'utf8')
  );

  const processed = [];

  for (const article of raw) {
    try {
      console.log(`🤖 Processing: ${article.title.slice(0, 60)}...`);

      const contentLength = (article.content || '').length;
      const label = contentLength > 1000 ? '(Full text)' : '(RSS snippet)';
      console.log(`   📝 Input: ${contentLength} chars ${label}`);

      const userMsg = [
        'Feed: ' + article.feedName,
        'Category hint: ' + article.defaultCategory,
        'Title: ' + article.title,
        'URL: ' + article.link,
        'Date: ' + article.pubDate,
        '',
        'Article Content:',
        article.content || article.snippet || '(No content available)'
      ].join('\n');

      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMsg }]
      });

      const text = response.content[0].text.trim();

      let parsed;
      try {
        parsed = JSON.parse(extractJSON(text));
      } catch (parseErr) {
        console.warn('   ⚠️ JSON parse failed — skipped');
        continue;
      }

      if (parsed.skip) {
        console.log('   ⏭️ Skipped (not relevant)');
        continue;
      }

      if (!parsed.type || !parsed.title || !parsed.coords) {
        console.warn('   ⚠️ Invalid structure — skipped');
        continue;
      }

      // 리포트 본문 추출 (JSON 블록 이후)
      let reportBody = text.replace(/```json[\s\S]*?```/, '').trim();

      // 마크다운 → HTML 변환
      reportBody = reportBody
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        .replace(/^- "(.+)$/gm, '<li>"$1</li>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/\n{2,}/g, '</p><p>')
        .replace(/\n/g, '<br>');

      reportBody = '<p>' + reportBody + '</p>';
      reportBody = reportBody
        .replace(/<p><h3>/g, '<h3>')
        .replace(/<\/h3><\/p>/g, '</h3>')
        .replace(/<p><\/p>/g, '');

      parsed.content = '<div style="font-weight:300; line-height:1.8;">' + reportBody + '</div>';

      if (!parsed.link && article.link) parsed.link = article.link;

      processed.push(parsed);
      console.log(`   ✅ [${parsed.type}] ${parsed.title} [${parsed.location}]`);

      await new Promise(r => setTimeout(r, 1000));

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
