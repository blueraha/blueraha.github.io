#!/usr/bin/env node
/**
 * Maritime Hub AI Secretary v2.0
 * ─────────────────────────────
 * 변경사항:
 *   1. 해시태그 기반 분류 (#accident, #news, #event)
 *   2. 추가 해시태그를 tags에 반영 (#collision, #korea 등)
 *   3. AI에게 type을 사전 지정하여 분류 오류 방지
 *   4. 해시태그 없으면 기존처럼 AI 자동 분류 (fallback)
 *   5. 좌표/위치도 AI가 추출하도록 개선
 */

const fs = require('fs');
const path = require('path');

const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// ── 해시태그 파싱 ──────────────────────────────────────────────

const TYPE_HASHTAGS = new Set(['#accident', '#news', '#event']);

function parseHashtags(text) {
  if (!text) return { type: null, tags: [], cleanText: text };

  const hashtags = text.match(/#[\w가-힣]+/g) || [];

  // type 결정: 명시적 해시태그 우선
  let type = null;
  for (const tag of hashtags) {
    if (TYPE_HASHTAGS.has(tag.toLowerCase())) {
      type = tag.toLowerCase().replace('#', '');
      break;
    }
  }

  // 추가 태그 수집 (type 해시태그 제외)
  const extraTags = hashtags
    .filter(t => !TYPE_HASHTAGS.has(t.toLowerCase()))
    .map(t => t.replace('#', ''));

  // 해시태그 제거한 깨끗한 텍스트 (URL 추출용)
  const cleanText = text.replace(/#[\w가-힣]+/g, '').trim();

  return { type, tags: extraTags, cleanText };
}

// ── Claude API 호출 ────────────────────────────────────────────

async function askAI(url, presetType, extraTags) {
  if (!ANTHROPIC_API_KEY) {
    console.error("❌ ANTHROPIC_API_KEY가 설정되지 않았습니다.");
    return null;
  }

  const typeInstruction = presetType
    ? `이 기사의 type은 "${presetType}"로 이미 결정되었습니다. 반드시 이 type을 사용하세요.`
    : `type을 다음 기준으로 분류하세요:
       - "accident": 해양 사고, 충돌, 좌초, 화재, 침몰, 기름유출, 인명피해
       - "news": 자율운항 선박, AI 항해, 해운 기술, 산업 뉴스, 규제/정책
       - "event": 전시회, 박람회, 컨퍼런스, 세미나, 보트쇼만 해당`;

  const tagInstruction = extraTags.length > 0
    ? `사용자가 지정한 추가 태그: [${extraTags.join(', ')}]. 이 태그들을 tags 배열에 반드시 포함하고, 필요하면 추가 태그도 넣으세요.`
    : `관련 태그를 3~6개 생성하세요.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2000,
        messages: [{
          role: "user",
          content: `너는 해양 산업 기술 분석가이자 유능한 비서야. 아래 URL의 기사를 분석해서 2가지를 출력해줘.

URL: ${url}

═══ PART 1: 구조화 데이터 (JSON) ═══
다음 JSON을 정확히 출력해. 반드시 \`\`\`json 코드블록으로 감싸줘.

${typeInstruction}
${tagInstruction}

\`\`\`json
{
  "type": "accident|news|event",
  "title": "영문 제목 (간결하고 명확하게)",
  "source": "출처 사이트명",
  "sourceMeta": "출처도메인 · Mon DD, YYYY",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "link": "${url}",
  "coords": [경도(longitude), 위도(latitude)],
  "location": "도시명 또는 해역명",
  "date": "YYYY-MM-DD"
}
\`\`\`

좌표 규칙:
- 구체적 사고/이벤트 위치가 있으면 해당 좌표
- 특정 국가 관련이면 수도 좌표
- 글로벌/불분명하면 [0, 0]

═══ PART 2: 전문 리포트 (한영 혼합) ═══
1. Executive Summary: 기사 전체 내용을 5~6문장 한글 요약
2. Key English Quotes: 원문에서 중요한 문장 2~3개를 영어 그대로 + (한글 의미) 괄호 첨부
3. Technical Insights: 자율운항/COLREG/산업적 시사점을 전문가 관점에서 한글로 기술`
        }]
      })
    });

    const data = await response.json();
    if (!data.content || data.content.length === 0) throw new Error("AI 응답 내용이 없습니다.");

    const text = data.content[0].text;

    // JSON 추출
    const jsonMatch = text.match(/```json\s*([\s\S]*?)```/);
    if (!jsonMatch) throw new Error("JSON 블록을 찾을 수 없습니다.");

    const meta = JSON.parse(jsonMatch[1].trim());

    // 리포트 본문 추출 (JSON 블록 이후 부분)
    let reportBody = text.replace(/```json[\s\S]*?```/, '').trim();
    reportBody = reportBody.split('\n').map(line => line.trim()).filter(line => line.length > 0).join('<br>');

    return {
      ...meta,
      content: `<p style="font-weight:300; line-height:1.8;">${reportBody}</p>`
    };
  } catch (e) {
    console.error(`⚠️ AI 리포트 생성 실패 (${url}):`, e.message);
    return null;
  }
}

// ── Slack API 호출 ─────────────────────────────────────────────

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
  return await res.json();
}

// ── 메시지 파싱 ────────────────────────────────────────────────

async function parseMessage(text) {
  if (!text) return null;

  // 1. 해시태그 파싱
  const { type: presetType, tags: extraTags, cleanText } = parseHashtags(text);

  // 2. URL 추출 (슬랙 특유의 <url> 형식 대응)
  const linkMatch = cleanText.match(/https?:\/\/[^\s>|]+/i);
  if (!linkMatch) return null;
  const link = linkMatch[0];

  // 3. AI 분석 (type이 있으면 전달, 없으면 AI가 판단)
  const typeLabel = presetType ? `[${presetType.toUpperCase()}] ` : '[AUTO] ';
  console.log(`🤖 ${typeLabel}AI 비서가 전문 보고서를 작성 중: ${link}`);

  const aiResult = await askAI(link, presetType, extraTags);
  if (!aiResult) return null;

  const today = new Date();
  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // type 최종 결정: 해시태그 > AI 분류 > 기본값 news
  const finalType = presetType || aiResult.type || 'news';

  // tags 병합: AI 태그 + 사용자 해시태그 (중복 제거)
  const allTags = [...new Set([...(aiResult.tags || []), ...extraTags])];

  return {
    date: aiResult.date || dateStr,
    entry: {
      type: finalType,
      title: aiResult.title || "Maritime Report",
      source: "AI Secretary",
      sourceMeta: `Professional Report · ${dateStr}`,
      content: aiResult.content,
      tags: allTags.length > 0 ? allTags : ["AI_Insights", "Bilingual"],
      link: link,
      coords: aiResult.coords || [0, 0],
      location: aiResult.location || "Global"
    }
  };
}

// ── 메인 실행 ──────────────────────────────────────────────────

async function main() {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;

  if (!token || !channel) {
    console.error("❌ 슬랙 환경변수(Token, Channel ID)가 설정되지 않았습니다.");
    process.exit(1);
  }

  // CLI 옵션 파싱
  const args = process.argv.slice(2);
  const limitArg = args.find(a => a.startsWith('--limit='));
  const limit = limitArg ? parseInt(limitArg.split('=')[1]) : 10;
  const dryRun = args.includes('--dry-run');

  // 최근 메시지 확인
  const result = await slackApi('conversations.history', { channel, limit }, token);
  if (!result.ok) throw new Error(`슬랙 API 에러: ${result.error}`);

  const messages = result.messages || [];
  const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');

  // 중복 수집 방지
  const existingLinks = new Set();
  const linkRegex = /link:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = linkRegex.exec(dataJs)) !== null) existingLinks.add(m[1]);

  let updatedDataJs = dataJs.trimEnd();
  let addedCount = 0;

  for (const msg of messages) {
    const parsed = await parseMessage(msg.text || '');
    if (!parsed || existingLinks.has(parsed.entry.link)) {
      if (parsed) console.log(`   ⏭️ 이미 수집됨: ${parsed.entry.link}`);
      continue;
    }

    if (dryRun) {
      console.log(`\n[DRY RUN] Would add:`);
      console.log(`  Type: ${parsed.entry.type}`);
      console.log(`  Title: ${parsed.entry.title}`);
      console.log(`  Link: ${parsed.entry.link}`);
      console.log(`  Location: ${parsed.entry.location}`);
      console.log(`  Coords: ${JSON.stringify(parsed.entry.coords)}`);
      console.log(`  Tags: ${parsed.entry.tags.join(', ')}`);
      continue;
    }

    const e = parsed.entry;
    const entryStr = `\n\n// ── AI Secretary Report ──
addEvents({
  "${parsed.date}": [
    {
      type: "${e.type}",
      title: "${escapeStr(e.title)}",
      source: "${escapeStr(e.source)}",
      sourceMeta: "${escapeStr(e.sourceMeta)}",
      content: \`${e.content}\`,
      tags: ${JSON.stringify(e.tags)},
      link: "${escapeStr(e.link)}",
      coords: ${JSON.stringify(e.coords)},
      location: "${escapeStr(e.location)}"
    }
  ]
});`;

    updatedDataJs += entryStr;
    existingLinks.add(e.link);
    addedCount++;
    console.log(`   ✅ [${e.type.toUpperCase()}] ${e.title}`);

    // rate-limit 보호
    await new Promise(r => setTimeout(r, 1000));
  }

  if (!dryRun && addedCount > 0) {
    fs.writeFileSync(DATA_JS_PATH, updatedDataJs);
    console.log(`\n🚀 [성공] AI 비서가 ${addedCount}건의 새로운 보고서를 data.js에 추가했습니다.`);
  } else if (!dryRun) {
    console.log("\n새로운 소식이 없습니다.");
  }
}

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/`/g, "'");
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});
