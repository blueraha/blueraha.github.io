// ═══════════════════════════════════════════════════════════════
// merge-data.js - 새 기사를 기존 data.js에 병합
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');
const PROCESSED_PATH = path.join(__dirname, 'processed-articles.json');

function run() {
  // 1. processed-articles.json 읽기
  if (!fs.existsSync(PROCESSED_PATH)) {
    console.log('No processed articles found. Nothing to merge.');
    return;
  }

  const newArticles = JSON.parse(fs.readFileSync(PROCESSED_PATH, 'utf8'));
  if (newArticles.length === 0) {
    console.log('No new articles to merge.');
    return;
  }

  // 2. 기존 data.js 읽기
  const dataJs = fs.readFileSync(DATA_JS_PATH, 'utf8');

  // 3. 기존 data.js에서 이미 있는 제목 추출 (중복 방지)
  const existingTitles = new Set();
  const titleRegex = /title:\s*["'`]([^"'`]+)["'`]/g;
  let match;
  while ((match = titleRegex.exec(dataJs)) !== null) {
    existingTitles.add(match[1].toLowerCase().trim());
  }

  // 4. 새 기사 중 중복 아닌 것만 필터
  const fresh = newArticles.filter(a =>
    !existingTitles.has(a.title.toLowerCase().trim())
  );

  if (fresh.length === 0) {
    console.log('All articles already exist in data.js. Nothing to add.');
    return;
  }

  console.log(`📝 Adding ${fresh.length} new articles to data.js`);

  // 5. addEvents() 블록 생성
  const blocks = [];

  // 날짜별로 그룹화
  const byDate = {};
  for (const a of fresh) {
    const date = a.date || new Date().toISOString().split('T')[0];
    if (!byDate[date]) byDate[date] = [];
    byDate[date].push(a);
  }

  // 각 날짜 그룹을 addEvents 호출로 변환
  for (const [date, articles] of Object.entries(byDate)) {
    const entries = articles.map(a => {
      const tags = JSON.stringify(a.tags || []);
      const coords = JSON.stringify(a.coords || [0, 0]);
      return `    {
      type: "${a.type}",
      title: "${escapeStr(a.title)}",
      source: "${escapeStr(a.source)}",
      sourceMeta: "${escapeStr(a.sourceMeta)}",
      content: \`${a.content}\`,
      tags: ${tags},
      link: "${escapeStr(a.link)}",
      coords: ${coords},
      location: "${escapeStr(a.location)}"
    }`;
    }).join(',\n');

    blocks.push(`\n// Auto-collected: ${date}
addEvents({
  "${date}": [
${entries}
  ]
});`);
  }

  // 6. data.js 끝에 추가
  const newDataJs = dataJs.trimEnd() + '\n\n// ── Auto-Collected (Bot) ──\n' + blocks.join('\n') + '\n';

  fs.writeFileSync(DATA_JS_PATH, newDataJs);
  console.log(`✅ data.js updated with ${fresh.length} new articles`);

  // 7. 임시 파일 정리
  try { fs.unlinkSync(path.join(__dirname, 'raw-articles.json')); } catch(e) {}
  try { fs.unlinkSync(PROCESSED_PATH); } catch(e) {}
}

function escapeStr(s) {
  if (!s) return '';
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');
}

run();
