// ═══════════════════════════════════════════════════════════════
// fetch-rss.js - RSS 피드 수집 및 필터링
// ═══════════════════════════════════════════════════════════════

const Parser = require('rss-parser');
const fs = require('fs');
const feeds = require('./feeds.js');

const parser = new Parser({
  timeout: 15000,
  headers: { 'User-Agent': 'MaritimeHub/1.0 NewsCollector' }
});

// 최근 7일 이내 기사만 수집
const DAYS_AGO = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

async function fetchAllFeeds() {
  const articles = [];

  for (const feed of feeds) {
    try {
      console.log(`📡 Fetching: ${feed.name} ...`);
      const result = await parser.parseURL(feed.url);

      for (const item of result.items || []) {
        const pubDate = item.pubDate ? new Date(item.pubDate) : null;

        // 최근 7일 이내만
        if (pubDate && pubDate < DAYS_AGO) continue;

        // 키워드 필터 (키워드 없으면 전부 수집)
        const text = ((item.title || '') + ' ' + (item.contentSnippet || '')).toLowerCase();
        const matched = feed.keywords.length === 0 ||
          feed.keywords.some(kw => text.includes(kw.toLowerCase()));

        if (matched) {
          articles.push({
            feedName: feed.name,
            defaultCategory: feed.category,
            title: item.title || 'Untitled',
            link: item.link || '',
            pubDate: pubDate ? pubDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            snippet: (item.contentSnippet || '').slice(0, 500),
            content: (item.content || item['content:encoded'] || '').slice(0, 2000)
          });
        }
      }
      console.log(`   ✅ ${feed.name}: found items`);
    } catch (err) {
      console.warn(`   ⚠️ ${feed.name} failed: ${err.message}`);
    }
  }

  // 중복 제거 (같은 제목)
  const seen = new Set();
  const unique = articles.filter(a => {
    const key = a.title.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // 우선순위 정렬: 사고 > 자율운항 > 나머지
  const sorted = unique.sort((a, b) => {
    const autoKeywords = /autonomous|unmanned|MASS|avikus|sea machines|orca ai|hinas|remote control|AI navigat|smart ship/i;
    const aIsAuto = autoKeywords.test(a.title + ' ' + a.snippet);
    const bIsAuto = autoKeywords.test(b.title + ' ' + b.snippet);

    const aPri = a.defaultCategory === 'accident' ? 0 : aIsAuto ? 1 : 2;
    const bPri = b.defaultCategory === 'accident' ? 0 : bIsAuto ? 1 : 2;

    return aPri - bPri;
  });

  // 최대 5개로 제한
  const limited = sorted.slice(0, 5);

  console.log(`\n📊 Total: ${articles.length} → Unique: ${unique.length} → Processing: ${limited.length}`);

  // 중간 파일 저장
  fs.writeFileSync('scripts/raw-articles.json', JSON.stringify(limited, null, 2));
  console.log('💾 Saved to scripts/raw-articles.json');
}

fetchAllFeeds().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
