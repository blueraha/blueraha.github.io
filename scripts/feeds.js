// ═══════════════════════════════════════════════════════════════
// feeds.js - RSS/뉴스 소스 정의 (사고 + 자율운항 중심)
// ═══════════════════════════════════════════════════════════════

module.exports = [
  // ── 해양사고 (최우선) ──
  {
    name: "gCaptain",
    url: "https://gcaptain.com/feed/",
    category: "accident",
    keywords: ["collision", "grounding", "fire", "sinking", "capsize", "spill", "accident", "incident", "casualty", "MAIB", "NTSB", "explosion", "rescue", "death", "injury"]
  },
  {
    name: "FleetMon",
    url: "https://www.fleetmon.com/maritime-news/feed/",
    category: "accident",
    keywords: ["collision", "grounding", "accident", "incident", "rescue", "fire", "sinking", "capsize"]
  },
  {
    name: "MAIB Reports",
    url: "https://www.gov.uk/maib-reports.atom",
    category: "accident",
    keywords: []  // 모든 기사 수집
  },
  {
    name: "SAFETY4SEA - Accidents",
    url: "https://safety4sea.com/feed/",
    category: "accident",
    keywords: ["accident", "incident", "casualty", "collision", "grounding", "fire", "investigation"]
  },

  // ── 자율운항/기술 ──
  {
    name: "gCaptain - Autonomous",
    url: "https://gcaptain.com/feed/",
    category: "news",
    keywords: ["autonomous", "unmanned", "remote control", "MASS", "AI navigation", "Avikus", "Sea Machines", "Orca AI", "HiNAS", "smart ship"]
  },
  {
    name: "Riviera Maritime - Autonomy",
    url: "https://www.rivieramm.com/rss",
    category: "news",
    keywords: ["autonomous", "MASS", "digital ship", "remote", "unmanned", "smart ship"]
  },
  {
    name: "Maritime Executive - Tech",
    url: "https://maritime-executive.com/feed",
    category: "news",
    keywords: ["autonomous", "unmanned", "AI", "digital", "smart ship", "remote control", "MASS"]
  },
  {
    name: "Offshore Energy - Tech",
    url: "https://www.offshore-energy.biz/feed/",
    category: "news",
    keywords: ["autonomous", "unmanned", "AI", "drone", "remote", "digital"]
  }
];
