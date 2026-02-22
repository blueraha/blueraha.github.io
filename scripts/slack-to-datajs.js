#!/usr/bin/env node
/**
 * Maritime Hub AI Secretary (Professional Version)
 * : Auto-fetch, Professional Translation, Detail Summarization, and Key English Quotes.
 */

const fs = require('fs');
const path = require('path');

const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

/**
 * Claude API를 통해 기사를 분석하고 전문 비서 수준의 한영 혼합 리포트를 생성합니다.
 */
async function askAI(url) {
  if (!ANTHROPIC_API_KEY) {
    console.error("❌ ANTHROPIC_API_KEY가 설정되지 않았습니다.");
    return null;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307", // 속도와 비용 효율이 좋은 모델
        max_tokens: 1500,
        messages: [{
          role: "user",
          content: `너는 해양 산업 기술 분석가이자 유능한 비서야. 아래 URL의 기사를 분석해서 전문적인 한영 혼합 리포트를 작성해줘.
          URL: ${url}
          
          [작성 지침]
          1. 제목: 기사의 핵심을 꿰뚫는 한글 제목 (전문 용어 사용)
          2. Executive Summary: 기사 전체 내용을 5~6문장 내외로 상세하게 한글 요약.
          3. Key English Quotes: 원문에서 가장 중요한 기술적/정책적 문장 2~3개를 영어 그대로 발췌하고 바로 뒤에 (한글 의미)를 괄호로 첨부.
          4. Technical Insights: 자율운항 선박 기술, COLREG 규칙, 혹은 산업적 시사점을 전문가 관점에서 한글로 짧게 기술.

          [출력 형식]
          제목: [한글 제목]
          내용: [나머지 리포트 본문]`
        }]
      })
    });

    const data = await response.json();
    if (!data.content || data.content.length === 0) throw new Error("AI 응답 내용이 없습니다.");

    const text = data.content[0].text;
    
    // 제목과 본문 분리
    const titleMatch = text.match(/제목:\s*(.*)/);
    const title = titleMatch ? titleMatch[1].trim() : "해양 기술 뉴스 리포트";
    
    // 본문 내용 포맷팅 (HTML 줄바꿈 적용)
    let contentBody = text.replace(/제목:.*\n?/, "").trim();
    contentBody = contentBody.split('\n').map(line => line.trim()).filter(line => line.length > 0).join('<br>');
    
    return { title, content: `<p style="font-weight:300; line-height:1.8;">${contentBody}</p>` };
  } catch (e) {
    console.error(`⚠️ AI 리포트 생성 실패 (${url}):`, e.message);
    return null;
  }
}

/**
 * 슬랙 메시지에서 URL을 추출하고 AI 분석을 거쳐 data.js 형식으로 변환합니다.
 */
async function parseMessage(text) {
  if (!text) return null;

  // URL 추출 (슬랙 특유의 <url> 형식 대응)
  const linkMatch = text.match(/https?:\/\/[^\s>|]+/i);
  if (!linkMatch) return null;
  const link = linkMatch[0];

  console.log(`🤖 AI 비서가 전문 보고서를 작성 중입니다: ${link}`);
  const aiReport = await askAI(link);
  if (!aiReport) return null;

  const today = new Date();
  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  return {
    date: dateStr,
    entry: {
      type: "news", // 기본값 news
      title: aiReport.title,
      source: "AI Secretary",
      sourceMeta: `Professional Report · ${dateStr}`,
      content: aiReport.content,
      tags: ["AI_Insights", "Bilingual"],
      link: link,
      coords: [0, 0],
      location: "Global"
    }
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
  return await res.json();
}

async function main() {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL_ID;

  if (!token || !channel) {
    console.error("❌ 슬랙 환경변수(Token, Channel ID)가 설정되지 않았습니다.");
    process.exit(1);
  }

  // 최근 메시지 10개 확인
  const result = await slackApi('conversations.history', { channel, limit: 10 }, token);
  if (!result.ok) throw new Error(`슬랙 API 에러: ${result.error}`);
  
  const messages = result.messages || [];
  const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');

  // 중복 수집 방지를 위해 기존 링크 확인
  const existingLinks = new Set();
  const linkRegex = /link:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = linkRegex.exec(dataJs)) !== null) existingLinks.add(m[1]);

  let updatedDataJs = dataJs.trimEnd();
  let foundNew = false;

  for (const msg of messages) {
    const parsed = await parseMessage(msg.text || '');
    if (!parsed || existingLinks.has(parsed.entry.link)) continue;

    const entryStr = `\naddEvents({\n  "${parsed.date}": [\n    {\n      type: "${parsed.entry.type}",\n      title: "${parsed.entry.title}",\n      source: "${parsed.entry.source}",\n      sourceMeta: "${parsed.entry.sourceMeta}",\n      content: \`${parsed.entry.content}\`,\n      tags: ${JSON.stringify(parsed.entry.tags)},\n      link: "${parsed.entry.link}",\n      coords: [0, 0],\n      location: "Global"\n    }\n  ]\n});\n`;
    
    updatedDataJs += `\n\n// ── AI Secretary Report ──${entryStr}`;
    existingLinks.add(parsed.entry.link);
    foundNew = true;
  }

  if (foundNew) {
    fs.writeFileSync(DATA_JS_PATH, updatedDataJs);
    console.log(`\n🚀 [성공] AI 비서가 새로운 전문 보고서를 data.js에 추가했습니다.`);
  } else {
    console.log("\n새로운 소식이 없습니다.");
  }
}

main().catch((err) => {
  console.error('Fatal:', err.message);
  process.exit(1);
});