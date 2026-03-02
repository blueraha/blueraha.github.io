// ═══════════════════════════════════════════════════════════════
// feeds.js - RSS/뉴스 소스 정의
// Updated: 2026-03-02 — 검증된 피드 + 글로벌 뉴스 추가
// ═══════════════════════════════════════════════════════════════

module.exports = [

  // ════════════════════════════════════════
  // 1. 해양사고 (ACCIDENT)
  // ════════════════════════════════════════
  {
    name: "gCaptain - Accidents",
    url: "https://feeds.feedburner.com/gcaptain",
    category: "accident",
    keywords: ["collision", "grounding", "fire", "sinking", "capsize", "spill", "accident", "incident", "casualty", "MAIB", "NTSB", "explosion", "rescue", "death", "injury", "ran aground", "allision"]
  },
  {
    name: "MAIB Reports",
    url: "https://www.gov.uk/maib-reports.atom",
    category: "accident",
    keywords: []
  },
  {
    name: "MarineLink - Accidents",
    url: "https://www.marinelink.com/news/rss",
    category: "accident",
    keywords: ["collision", "grounding", "accident", "incident", "rescue", "fire", "sinking", "capsize", "casualty", "spill"]
  },
  {
    name: "Offshore Energy - Accidents",
    url: "https://www.offshore-energy.biz/feed/",
    category: "accident",
    keywords: ["collision", "accident", "incident", "grounding", "fire", "explosion", "rescue", "casualty", "spill"]
  },

  // ════════════════════════════════════════
  // 2. 자율운항 / 해양기술 (NEWS)
  // ════════════════════════════════════════
  {
    name: "gCaptain - Autonomous",
    url: "https://feeds.feedburner.com/gcaptain",
    category: "news",
    keywords: ["autonomous", "unmanned", "remote control", "MASS", "AI navigation", "Avikus", "Sea Machines", "Orca AI", "HiNAS", "smart ship", "autonomy"]
  },
  {
    name: "Offshore Energy - Tech",
    url: "https://www.offshore-energy.biz/feed/",
    category: "news",
    keywords: ["autonomous", "unmanned", "AI", "drone", "remote", "digital", "smart ship", "MASS", "decarbonization", "green shipping"]
  },
  {
    name: "MarineLink - Tech",
    url: "https://www.marinelink.com/news/rss",
    category: "news",
    keywords: ["autonomous", "unmanned", "AI", "digital", "smart ship", "remote control", "MASS", "Avikus", "Sea Machines", "drone", "cyber"]
  },
  {
    name: "Maritime Executive",
    url: "https://maritime-executive.com/articles.rss",
    category: "news",
    keywords: ["autonomous", "unmanned", "AI", "MASS", "digital", "smart ship", "remote", "technology", "cyber", "decarbonization"]
  },

  // ════════════════════════════════════════
  // 3. 글로벌 해운/물류 뉴스 (NEWS)
  // ════════════════════════════════════════
  {
    name: "gCaptain - Shipping",
    url: "https://feeds.feedburner.com/gcaptain",
    category: "news",
    keywords: ["shipping", "container", "tanker", "bulk", "port", "Suez", "Panama Canal", "Houthi", "Red Sea", "sanction", "tariff", "LNG", "IMO"]
  },
  {
    name: "MarineLink - Shipping",
    url: "https://www.marinelink.com/news/rss",
    category: "news",
    keywords: ["shipping", "container", "tanker", "bulk", "port", "Suez", "Panama Canal", "Houthi", "Red Sea", "LNG", "IMO", "USTR"]
  },

  // ════════════════════════════════════════
  // 4. 국방/안보 해양 뉴스 (NEWS)
  // ════════════════════════════════════════
  {
    name: "Naval News",
    url: "https://www.navalnews.com/feed/",
    category: "news",
    keywords: ["navy", "naval", "USV", "UUV", "drone", "autonomous", "frigate", "submarine", "destroyer", "aircraft carrier", "missile"]
  },
  {
    name: "Defence Blog - Naval",
    url: "https://defence-blog.com/feed/",
    category: "news",
    keywords: ["navy", "naval", "ship", "submarine", "maritime", "drone", "USV", "missile", "fleet"]
  },
  {
    name: "USNI News",
    url: "https://news.usni.org/feed",
    category: "news",
    keywords: ["navy", "ship", "fleet", "submarine", "maritime", "autonomous", "USV", "Pacific", "destroyer"]
  },

  // ════════════════════════════════════════
  // 5. 글로벌 뉴스 - 해양/전쟁/무역 관련 (NEWS)
  // ════════════════════════════════════════
  {
    name: "BBC World",
    url: "https://feeds.bbci.co.uk/news/rss.xml",
    category: "news",
    keywords: ["ship", "shipping", "maritime", "navy", "port", "submarine", "Red Sea", "Houthi", "strait", "canal", "piracy", "sea", "ocean", "vessel", "tanker", "cargo"]
  },
  {
    name: "CNN World",
    url: "http://rss.cnn.com/rss/cnn_topstories.rss",
    category: "news",
    keywords: ["ship", "shipping", "maritime", "navy", "port", "submarine", "Red Sea", "Houthi", "strait", "canal", "piracy", "vessel", "tanker", "cargo", "sea"]
  },
  {
    name: "AP News",
    url: "https://rsshub.app/apnews/topics/apf-topnews",
    category: "news",
    keywords: ["ship", "shipping", "maritime", "navy", "submarine", "Red Sea", "Houthi", "strait", "canal", "vessel", "tanker", "port", "piracy"]
  },

  // ════════════════════════════════════════
  // 6. 전시회/박람회/행사 (EVENT)
  // ════════════════════════════════════════
  {
    name: "gCaptain - Events",
    url: "https://feeds.feedburner.com/gcaptain",
    category: "event",
    keywords: ["CES", "boat show", "expo", "exhibition", "trade show", "conference", "summit", "forum", "SMM", "Nor-Shipping", "Posidonia"]
  },
  {
    name: "Offshore Energy - Events",
    url: "https://www.offshore-energy.biz/feed/",
    category: "event",
    keywords: ["conference", "forum", "expo", "summit", "workshop", "exhibition", "trade show", "boat show", "OTC", "Gastech"]
  },
  {
    name: "MarineLink - Events",
    url: "https://www.marinelink.com/news/rss",
    category: "event",
    keywords: ["expo", "conference", "summit", "exhibition", "trade show", "boat show", "forum", "CES", "SMM", "Nor-Shipping"]
  }
];
