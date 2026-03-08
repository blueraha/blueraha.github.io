// ═══════════════════════════════════════════════════════════════
// fetch-rss.js v2.0 - RSS 피드 수집 + 원문 텍스트 추출
// ═══════════════════════════════════════════════════════════════

const Parser = require('rss-parser');
const cheerio = require('cheerio');
const fs = require('fs');
const feeds = require('./feeds.js');

const parser = new Parser({
  timeout: 15000,
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
});

const DAYS_AGO = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

// ── 원문 텍스트 추출 ──────────────────────────────────────────

async function fetchArticleText(url) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    clearTimeout(timeout);

    if (!res.ok) throw new Error('HTTP ' + res.status);

    const html = await res.text();
    const $ = cheerio.load(html);

    // 노이즈 제거
    $('script, style, nav, header, footer, aside, iframe, form, .sidebar, .ad, .advertisement, .social-share, .comments, .related-posts, .newsletter').remove();

    let text = '';

    // 1) article 태그
    const article = $('article');
    if (article.length) {
      text = article.find('p').map((_, el) => $(el).text().trim()).get().join('\n\n');
    }

    // 2) 일반적인 본문 셀렉터
    if (!text || text.length < 200) {
      const selectors = [
        '.entry-content', '.post-content', '.article-content',
        '.article-body', '.story-body', '.content-body',
        '[itemprop="articleBody"]', '.field-body',
        '.post-entry', '.article__body', 'main'
      ];
      for (const sel of selectors) {
        const el = $(sel);
        if (el.length) {
          const t = el.find('p').map((_, p) => $(p).text().trim()).get().join('\n\n');
          if (t.length > text.length) text = t;
        }
      }
    }

    // 3) 최후 수단: 모든 p 태그
    if (!text || text.length < 200) {
      text = $('p').map((_, el) => $(el).text().trim()).get()
        .filter(t => t.length > 40)
        .join('\n\n');
    }

    const ogImage = $('meta[property="og:image"]').attr('content') || '';

    // 신뢰할 수 있는 도메인 이미지만 허용
    const trustedImgDomains = [
      'gcaptain.com', 'marinelink.com', 'offshore-energy.biz',
      'maritime-executive.com', 'navalnews.com', 'seatrade-maritime.com',
      'windward.ai', 'reuters.com', 'bbc.co.uk', 'bbc.com',
      'cnn.com', 'euronews.com', 'defensenews.com', 'usni.org',
      'defence-blog.com', 'navaltoday.com', 'workboat.com',
      'gov.uk', 'static.euronews.com'
    ];
    let safeOgImage = '';
    if (ogImage) {
      try {
        const imgHost = new URL(ogImage).hostname.replace('www.', '');
        if (trustedImgDomains.some(d => imgHost.includes(d))) {
          safeOgImage = ogImage;
        }
      } catch(e) {}
    }

    return { fullText: text.slice(0, 3000), ogImage: safeOgImage };
  } catch (err) {
    return { fullText: '', ogImage: '' };
  }
}

// ── 메인 수집 함수 ─────────────────────────────────────────────

async function fetchAllFeeds() {
  const articles = [];

  for (const feed of feeds) {
    try {
      console.log(`📡 Fetching: ${feed.name} ...`);
      const result = await parser.parseURL(feed.url);

      for (const item of result.items || []) {
        const pubDate = item.pubDate ? new Date(item.pubDate) : null;
        if (pubDate && pubDate < DAYS_AGO) continue;

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
            rssContent: (item.content || item['content:encoded'] || '').slice(0, 2000)
          });
        }
      }
      console.log(`   ✅ ${feed.name}: found items`);
    } catch (err) {
      console.warn(`   ⚠️ ${feed.name} failed: ${err.message}`);
    }
  }

  // 중복 제거
  const seen = new Set();
  const unique = articles.filter(a => {
    const key = a.title.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // 우선순위 정렬
  const sorted = unique.sort((a, b) => {
    const autoKeywords = /autonomous|unmanned|MASS|avikus|sea machines|orca ai|hinas|remote control|AI navigat|smart ship/i;
    const aIsAuto = autoKeywords.test(a.title + ' ' + a.snippet);
    const bIsAuto = autoKeywords.test(b.title + ' ' + b.snippet);
    const aPri = a.defaultCategory === 'accident' ? 0 : aIsAuto ? 1 : 2;
    const bPri = b.defaultCategory === 'accident' ? 0 : bIsAuto ? 1 : 2;
    return aPri - bPri;
  });

  const limited = sorted.slice(0, 5);
  console.log(`\n📊 Total: ${articles.length} → Unique: ${unique.length} → Processing: ${limited.length}`);

  // ── 핵심 개선: 원문 텍스트 추출 ──────────────────────────────
  console.log('\n🔍 Fetching full article texts...');
  for (const article of limited) {
    if (article.link) {
      console.log(`   📄 ${article.title.slice(0, 50)}...`);
      const { fullText, ogImage } = await fetchArticleText(article.link);

      if (fullText && fullText.length > 200) {
        article.content = fullText;
        console.log(`      ✅ Got ${fullText.length} chars`);
      } else {
        article.content = [article.snippet, article.rssContent]
          .filter(Boolean).join('\n\n').slice(0, 2000);
        console.log(`      ⚠️ Fallback to RSS snippet (${article.content.length} chars)`);
      }
      article.ogImage = ogImage;
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  fs.writeFileSync('scripts/raw-articles.json', JSON.stringify(limited, null, 2));
  console.log('\n💾 Saved to scripts/raw-articles.json');
}

// 전체 10분 타임아웃
const GLOBAL_TIMEOUT = setTimeout(() => {
  console.error('⏰ Global timeout (10 min) — force exit');
  process.exit(1);
}, 10 * 60 * 1000);

fetchAllFeeds().then(() => {
  clearTimeout(GLOBAL_TIMEOUT);
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
