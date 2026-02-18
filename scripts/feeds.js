// ═══════════════════════════════════════════════════════════════
// feeds.js - RSS/뉴스 소스 정의
// ═══════════════════════════════════════════════════════════════

module.exports = [
  // ── 해양사고 ──
  {
    name: "gCaptain",
    url: "https://gcaptain.com/feed/",
    category: "accident",    // 기본 카테고리 (Claude가 실제 분류)
    keywords: ["collision", "grounding", "fire", "sinking", "capsize", "spill", "accident", "incident", "casualty", "MAIB", "NTSB"]
  },
  {
    name: "FleetMon",
    url: "https://www.fleetmon.com/maritime-news/feed/",
    category: "accident",
    keywords: ["collision", "grounding", "accident", "incident", "rescue"]
  },
  {
    name: "MAIB Reports",
    url: "https://www.gov.uk/maib-reports.atom",
    category: "accident",
    keywords: []  // 모든 기사 수집
  },

  // ── 해운뉴스 ──
  {
    name: "Maritime Executive",
    url: "https://maritime-executive.com/feed",
    category: "news",
    keywords: ["shipping", "fleet", "port", "IMO", "regulation", "trade", "container", "tanker", "bulk"]
  },
  {
    name: "Splash247",
    url: "https://splash247.com/feed/",
    category: "news",
    keywords: ["shipping", "maritime", "fleet", "port"]
  },
  {
    name: "Offshore Energy",
    url: "https://www.offshore-energy.biz/feed/",
    category: "news",
    keywords: ["offshore", "energy", "wind", "lng", "shipping"]
  },

  // ── 자율운항 ──
  {
    name: "gCaptain - Autonomous",
    url: "https://gcaptain.com/feed/",
    category: "news",
    keywords: ["autonomous", "unmanned", "remote control", "MASS", "AI navigation", "Avikus", "Sea Machines", "Orca AI", "HiNAS"]
  },
  {
    name: "Riviera Maritime - Autonomy",
    url: "https://www.rivieramm.com/rss",
    category: "news",
    keywords: ["autonomous", "MASS", "digital ship", "remote", "unmanned", "smart ship"]
  },

  // ── 컨퍼런스/이벤트 ──
  {
    name: "SAFETY4SEA Events",
    url: "https://safety4sea.com/feed/",
    category: "event",
    keywords: ["conference", "forum", "expo", "summit", "workshop", "event", "exhibition"]
  }
];
