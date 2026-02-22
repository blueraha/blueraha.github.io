// ═══════════════════════════════════════════════════════════════
// DATA.JS - All event data (v3.2.0)
// ═══════════════════════════════════════════════════════════════

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

// Helper: generate multi-day entries
function multiDay(startDate, days, eventObj) {
  var result = {};
  var parts = startDate.split('-');
  var y = parseInt(parts[0]), m = parseInt(parts[1]) - 1, d = parseInt(parts[2]);
  for (var i = 0; i < days; i++) {
    var dt = new Date(y, m, d + i);
    var key = dt.getFullYear() + '-' + String(dt.getMonth()+1).padStart(2,'0') + '-' + String(dt.getDate()).padStart(2,'0');
    result[key] = [eventObj];
  }
  return result;
}

// Build events object
var events = {};

// Helper: merge into events (append to existing date arrays)
function addEvents(obj) {
  Object.keys(obj).forEach(function(key) {
    if (events[key]) {
      events[key] = events[key].concat(obj[key]);
    } else {
      events[key] = obj[key];
    }
  });
}

// ── 2025 ──

// ── 2025 Major Maritime Accidents ──

addEvents({
  "2025-01-28": [{
    type: "accident",
    title: "ASL Bauhinia — Explosion & Container Fire in Red Sea",
    source: "ShipUniverse",
    sourceMeta: "Jan 28, 2025",
    content: `<p>Hong Kong-flagged containership <strong>ASL Bauhinia</strong> suffered an explosion and fire among containers in the Red Sea, approx. 122 nm NW of Hodeidah. Crew abandoned ship after being unable to contain the fire. All crew rescued with no injuries reported.</p>`,
    tags: ["Containership","Fire","Red Sea","Explosion"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [42.5, 15.8],
    location: "Red Sea, off Yemen"
  }],

  "2025-02-08": [{
    type: "accident",
    title: "An Yang 2 — Bulk Carrier Grounding off Sakhalin",
    source: "ShipUniverse",
    sourceMeta: "Feb 8, 2025",
    content: `<p>Chinese-flagged bulk carrier <strong>An Yang 2</strong> ran aground off SW Sakhalin Island, Russia during heavy storm conditions after lifting anchor. Hull and ballast damage reported. No injuries.</p>`,
    tags: ["Grounding","Bulk Carrier","Storm","Russia"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [142.0, 46.6],
    location: "Sakhalin Island, Russia"
  }],

  "2025-02-12": [{
    type: "accident",
    title: "USS Harry S. Truman Collides with MV Besiktas-M near Port Said",
    source: "ShipUniverse",
    sourceMeta: "Feb 12, 2025",
    content: `<p>US aircraft carrier <strong>USS Harry S. Truman</strong> (CVN-75) collided with Panama-flagged bulk carrier <strong>Besiktas-M</strong> near Port Said, Egypt. No injuries or flooding reported. Investigation opened.</p>`,
    tags: ["Collision","US Navy","Aircraft Carrier","Egypt"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [32.3, 31.26],
    location: "Port Said, Egypt"
  }],

  "2025-02-15": [{
    type: "accident",
    title: "MSC Baltic III — Grounding on Newfoundland Coast",
    source: "ShipUniverse / gCaptain",
    sourceMeta: "Feb 15, 2025",
    content: `<p>Liberian-flagged containership <strong>MSC Baltic III</strong> lost power in severe weather and grounded on rocky coastline near Wild Cove, Newfoundland. All crew rescued by helicopter. Ongoing salvage constraints throughout 2025.</p>`,
    tags: ["Grounding","Containership","Canada","Storm"],
    link: "https://gcaptain.com",
    coords: [-57.8, 49.2],
    location: "Newfoundland, Canada"
  }],

  "2025-02-17": [{
    type: "accident",
    title: "Saytuun-2 — Hijacked off Puntland (Somali Piracy)",
    source: "ShipUniverse",
    sourceMeta: "Feb 17-22, 2025",
    content: `<p>Yemeni-flagged dhow <strong>Saytuun-2</strong> was hijacked by pirates off Garmaal near Eyl, Puntland (Somalia). Vessel held for days before pirates departed. Crew reported safe.</p>`,
    tags: ["Piracy","Hijack","Somalia","Security"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [50.1, 7.98],
    location: "Off Eyl, Puntland, Somalia"
  }],

  "2025-03-01": [{
    type: "accident",
    title: "MSC Levante F & Super Sarkas — Missile Strike at Odesa Port",
    source: "ShipUniverse",
    sourceMeta: "Mar 1, 2025",
    content: `<p>Ballistic/missile strike on Odesa Sea Port damaged two merchant vessels: Panama-flagged <strong>MSC Levante F</strong> and Sierra Leone-flagged <strong>Super Sarkas</strong>. Port workers injured.</p>`,
    tags: ["Missile Strike","Ukraine","Port Attack","War Risk"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [30.75, 46.49],
    location: "Odesa, Ukraine"
  }],

  "2025-03-10": [{
    type: "accident",
    title: "Solong / Stena Immaculate — Collision & Fire in North Sea",
    source: "ShipUniverse",
    sourceMeta: "Mar 10, 2025",
    content: `<p>Feeder containership <strong>Solong</strong> struck anchored oil tanker <strong>Stena Immaculate</strong> off East Yorkshire, UK. Explosions and fire followed. 36 rescued, 1 crew member fatality. Jet fuel release reported.</p>`,
    tags: ["Collision","Fire","Tanker","North Sea","Fatality"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [-0.1, 53.6],
    location: "North Sea, off Hull, UK"
  }],

  "2025-03-11": [{
    type: "accident",
    title: "MJ Pinar — Struck by Missile While Loading Grain at Odesa",
    source: "ShipUniverse",
    sourceMeta: "Mar 11, 2025",
    content: `<p>Barbados-flagged bulk carrier <strong>MJ Pinar</strong> was hit by a missile strike while loading wheat at Odesa Sea Port for Algeria. 4 killed, additional injuries reported.</p>`,
    tags: ["Missile Strike","Ukraine","Fatality","Bulk Carrier"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [30.75, 46.49],
    location: "Odesa, Ukraine"
  }],

  "2025-03-27": [{
    type: "accident",
    title: "Sindbad Tourist Submarine Sinks off Hurghada, Egypt",
    source: "ShipUniverse",
    sourceMeta: "Mar 27, 2025",
    content: `<p>Tourist submarine <strong>Sindbad</strong> sank during an excursion off Hurghada, Egypt with ~50 persons onboard. 6 deaths, ~14 injured. Operator excursions suspended.</p>`,
    tags: ["Sinking","Tourist","Egypt","Fatality"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [33.86, 27.26],
    location: "Hurghada, Egypt"
  }],

  "2025-04-26": [{
    type: "accident",
    title: "Shahid Rajaee Port Explosion — Bandar Abbas, Iran",
    source: "ShipUniverse",
    sourceMeta: "Apr 26, 2025",
    content: `<p>A large explosion occurred at Shahid Rajaee port complex in Bandar Abbas, Iran (Strait of Hormuz region). Multiple fatalities and many injuries reported. Port operations disrupted.</p>`,
    tags: ["Explosion","Port","Iran","Strait of Hormuz"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [56.27, 27.12],
    location: "Bandar Abbas, Iran"
  }],

  "2025-05-17": [{
    type: "accident",
    title: "ARM Cuauhtémoc — Tall Ship Strikes Brooklyn Bridge, NYC",
    source: "ShipUniverse",
    sourceMeta: "May 17, 2025",
    content: `<p>Mexican Navy sail training ship <strong>ARM Cuauhtémoc</strong> struck the Brooklyn Bridge during East River transit. Masts damaged, fatalities and multiple injuries reported.</p>`,
    tags: ["Allision","Bridge Strike","Training Ship","New York"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [-73.997, 40.706],
    location: "Brooklyn Bridge, New York City"
  }],

  "2025-05-25": [{
    type: "accident",
    title: "MSC Elsa 3 — Capsize & Oil Spill off Kerala, India",
    source: "ShipUniverse",
    sourceMeta: "May 25, 2025",
    content: `<p>Liberian-flagged containership <strong>MSC Elsa 3</strong> capsized and sank off Kerala coast, India. Oil spill response initiated. Container debris and shoreline contamination risk reported.</p>`,
    tags: ["Capsize","Sinking","Oil Spill","India","Containership"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [76.2, 9.9],
    location: "Off Kerala, India"
  }],

  "2025-06-03": [{
    type: "accident",
    title: "Morning Midas — Car Carrier Fire (3,000+ Vehicles Lost)",
    source: "ShipUniverse",
    sourceMeta: "Jun 3, 2025",
    content: `<p>Liberian-flagged vehicle carrier <strong>Morning Midas</strong> caught fire in the North Pacific while transporting over 3,000 vehicles including ~800 EVs. Crew evacuated safely. Vessel later sank on Jun 23.</p>`,
    tags: ["Fire","Vehicle Carrier","EV","Sinking","Pacific"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [-160, 30],
    location: "North Pacific Ocean"
  }],

  "2025-06-09": [{
    type: "accident",
    title: "Wan Hai 503 — Explosions & Fire off Kerala, India",
    source: "ShipUniverse",
    sourceMeta: "Jun 9, 2025",
    content: `<p>Singapore-flagged containership <strong>Wan Hai 503</strong> suffered multiple explosions and sustained fire off Kerala coast. Injuries reported, crew evacuated. Hazardous cargo concerns.</p>`,
    tags: ["Explosion","Fire","Containership","India","Hazmat"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [75.5, 10.5],
    location: "Arabian Sea, off Kerala, India"
  }],

  "2025-06-17": [{
    type: "accident",
    title: "Adalynn / Front Eagle — Tanker Collision & Fire (Sea of Oman)",
    source: "ShipUniverse",
    sourceMeta: "Jun 17, 2025",
    content: `<p>Two oil tankers <strong>Adalynn</strong> and <strong>Front Eagle</strong> collided near the Strait of Hormuz, resulting in fire. No injuries reported. Firefighting and separation operations conducted.</p>`,
    tags: ["Collision","Fire","Tanker","Strait of Hormuz"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [56.5, 25.3],
    location: "Sea of Oman"
  }],

  "2025-07-02": [{
    type: "accident",
    title: "KMP Tunu Pratama Jaya — Ferry Sinks in Bali Strait (18+ Dead)",
    source: "ShipUniverse",
    sourceMeta: "Jul 2, 2025",
    content: `<p>Indonesian ro-ro passenger ferry <strong>KMP Tunu Pratama Jaya</strong> sank ~30 minutes after departure in Bali Strait. At least 18 confirmed dead, 16-17 missing. 65 persons were onboard.</p>`,
    tags: ["Sinking","Ferry","Indonesia","Fatality"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [114.4, -8.15],
    location: "Bali Strait, Indonesia"
  }],

  "2025-07-06": [{
    type: "accident",
    title: "Magic Seas — Attacked & Sunk in Red Sea (Houthi Strike)",
    source: "ShipUniverse",
    sourceMeta: "Jul 6-7, 2025",
    content: `<p>Liberian-flagged bulk carrier <strong>Magic Seas</strong> was attacked by multiple small craft, drones, and USVs in the southern Red Sea. Crew abandoned ship and was rescued. Vessel later reported sunk — the first commercial ship sunk in the corridor after a period of reduced attacks.</p>`,
    tags: ["Attack","Houthi","Red Sea","Sinking","Security"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [42.8, 14.5],
    location: "Southern Red Sea, off Yemen"
  }],

  "2025-07-07": [{
    type: "accident",
    title: "Eternity C — Attacked & Sunk in Red Sea (3-4 Dead)",
    source: "ShipUniverse",
    sourceMeta: "Jul 7-9, 2025",
    content: `<p>Liberian-flagged bulk carrier <strong>Eternity C</strong> was hit in sustained assaults involving small craft and explosive drones in the Red Sea. 3-4 crew killed, others missing. Vessel later sank.</p>`,
    tags: ["Attack","Houthi","Red Sea","Sinking","Fatality"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [42.6, 14.3],
    location: "Southern Red Sea, off Yemen"
  }],

  "2025-07-19": [{
    type: "accident",
    title: "Wonder Sea — Tourist Boat Capsize in Ha Long Bay (37+ Dead)",
    source: "ShipUniverse",
    sourceMeta: "Jul 19, 2025",
    content: `<p>Tourist vessel <strong>Wonder Sea</strong> capsized during a sudden thunderstorm in Ha Long Bay, Vietnam. At least 37-39 deaths reported, ~10-11 rescued. Large-scale rescue operation launched.</p>`,
    tags: ["Capsize","Tourist","Vietnam","Fatality","Storm"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [107.08, 20.95],
    location: "Ha Long Bay, Vietnam"
  }],

  "2025-07-20": [{
    type: "accident",
    title: "KM Barcelona V-A — Passenger Ferry Fire off North Sulawesi",
    source: "ShipUniverse",
    sourceMeta: "Jul 20, 2025",
    content: `<p>Indonesian passenger ferry <strong>KM Barcelona V-A</strong> caught fire in the Celebes Sea off North Sulawesi. At least 3 deaths, ~575 rescued. Overcrowding concerns raised.</p>`,
    tags: ["Fire","Ferry","Indonesia","Fatality"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [125.2, 3.0],
    location: "Celebes Sea, off North Sulawesi"
  }],

  "2025-08-14": [{
    type: "accident",
    title: "Marie Maersk — Container Fire on Ultra-Large Vessel off Liberia",
    source: "ShipUniverse",
    sourceMeta: "Aug 14, 2025",
    content: `<p>Danish-flagged ULCV <strong>Marie Maersk</strong> (Triple-E class, ~18,000 TEU) suffered a container fire on deck off Liberia, West Africa, en route from Rotterdam to Tanjung Pelepas. No injuries; fire brought under control.</p>`,
    tags: ["Fire","ULCV","Maersk","Containership"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [-10, 6],
    location: "Atlantic Ocean, off Liberia"
  }],

  "2025-08-18": [{
    type: "accident",
    title: "CMA CGM J. Madison — Hold Fire in Straits of Malacca",
    source: "ShipUniverse",
    sourceMeta: "Aug 18, 2025",
    content: `<p>Malta-flagged containership <strong>CMA CGM J. Madison</strong> (~14,414 TEU) reported a cargo hold fire in the Straits of Malacca en route from Singapore to UAE. Firefighting and salvage support deployed.</p>`,
    tags: ["Fire","Containership","CMA CGM","Malacca Strait"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [99.4, 4.3],
    location: "Straits of Malacca"
  }]
});

addEvents({
  "2025-09-09": [{
    type: "accident",
    title: "Container Loss During Port Operation at Long Beach",
    source: "Port of Long Beach",
    sourceMeta: "Sep 9, 2025",
    content: `<p>접안 작업 중 약 75개 컨테이너가 해상으로 추락했다. 적재 불균형 또는 고정 불량 가능성이 제기되었다.</p>`,
    tags: ["Containership","Cargo","Port Operation"],
    link: "https://www.portoflongbeach.org/",
    coords: [-118.215, 33.754],
    location: "Port of Long Beach"
  }],

  "2025-09-12": [{
    type: "news",
    title: "Starlink Connectivity Expands in Shipyard Operations",
    source: "Shipyard Technology Report",
    sourceMeta: "Sep 12, 2025",
    content: `<p>조선소 현장에서 Starlink 위성 통신 도입이 확대되고 있다.</p>`,
    tags: ["Connectivity","Starlink","Shipyard"],
    link: "https://www.spacex.com/starlink/",
    coords: [129.365, 35.538],
    location: "Ulsan Shipyard"
  }]
});

addEvents({
  "2025-11-07": [{
    type: "accident",
    title: "Kyparissia — Container Ship Fire & Explosion at Port Tanjung Pelepas",
    source: "ShipUniverse",
    sourceMeta: "Nov 7, 2025",
    content: `<p>Malta-flagged containership <strong>Kyparissia</strong> (~4,957 TEU) suffered fire and explosion in cargo hold during unloading at Port of Tanjung Pelepas, Malaysia. 3 dead, 3 seriously injured.</p>`,
    tags: ["Fire","Explosion","Containership","Malaysia","Fatality"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [103.55, 1.37],
    location: "Port of Tanjung Pelepas, Malaysia"
  }],

  "2025-11-19": [{
    type: "accident",
    title: "신안 좌초 여객선 퀸제누비아2호 항해 과실 수사",
    source: "BBC Korean",
    sourceMeta: "bbc.com · 2025년 11월 19일 (2025년 11월 20일 업데이트)",
    content: `<p>2만6천t급 카페리 <strong>퀸제누비아2호</strong>가 전남 신안 족도 인근 해상에서 좌초했다. 승객 246명은 전원 구조됐고, 선박은 사고 약 9시간 후 목포 삼학부두로 안전 입항했다. 해경은 1등 항해사·조타수를 긴급체포하고 CCTV/VDR 분석을 통해 항해 과실 여부를 수사 중이다.</p>`,
    tags: ["Grounding","Ferry","South Korea","Shinan","Navigation"],
    link: "https://www.bbc.com/korean/articles/c3rjrdzyz8zo",
    coords: [126.10, 34.67],
    location: "Jokdo area, Shinan, Jeollanam-do, South Korea"
  }],

  "2025-11-23": [{
    type: "accident",
    title: "ONE Henry Hudson — Container Ship Fire at Port of Los Angeles",
    source: "ShipUniverse / Seatrade Maritime",
    sourceMeta: "Nov 23, 2025",
    content: `<p>Panama-flagged containership <strong>ONE Henry Hudson</strong> suffered a below-deck fire with explosion at Berth 218, Port of Los Angeles. Hazmat container involvement. Ship towed to anchorage for firefighting. No crew injuries.</p>`,
    tags: ["Fire","Explosion","Containership","Los Angeles","Hazmat"],
    link: "https://www.seatrade-maritime.com/maritime-safety/accidents",
    coords: [-118.27, 33.73],
    location: "Port of Los Angeles, USA"
  }],

  "2025-11-27": [{
    type: "accident",
    title: "MT Mersin — Multiple Explosions While Anchored off Dakar",
    source: "ShipUniverse",
    sourceMeta: "Nov 27, 2025",
    content: `<p>Panama-flagged product tanker <strong>MT Mersin</strong> was hit by four external explosions while at anchor off Dakar, Senegal. Seawater ingress into engine room. No injuries. Cause unclear.</p>`,
    tags: ["Explosion","Tanker","Senegal","Security"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [-17.45, 14.69],
    location: "Off Dakar, Senegal"
  }],

  "2025-11-28": [{
    type: "accident",
    title: "Kairos — Explosion & Fire on Tanker in Black Sea",
    source: "ShipUniverse",
    sourceMeta: "Nov 28, 2025",
    content: `<p>Gambia-flagged crude oil tanker <strong>Kairos</strong> suffered an explosion and fire in the Black Sea, off Turkey near Bosphorus. 25 crew evacuated, no fatalities. Extended firefighting/towing operations followed.</p>`,
    tags: ["Explosion","Fire","Tanker","Black Sea","Turkey"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [29.5, 41.2],
    location: "Black Sea, off Turkey"
  }],

  "2025-12-28": [{
    type: "accident",
    title: "Coral Adventurer — Expedition Cruise Grounding in Papua New Guinea",
    source: "ShipUniverse",
    sourceMeta: "Dec 28, 2025",
    content: `<p>Australian-flagged expedition cruise vessel <strong>Coral Adventurer</strong> ran aground on a reef off Morobe Province, PNG. ~80 passengers and ~43 crew reported safe. Refloat and hull inspection efforts followed.</p>`,
    tags: ["Grounding","Cruise","Papua New Guinea","Reef"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [147.0, -6.7],
    location: "Solomon Sea, Papua New Guinea"
  }],

  "2025-12-31": [{
    type: "accident",
    title: "Fitburg — Undersea Telecom Cable Damaged in Gulf of Finland",
    source: "ShipUniverse",
    sourceMeta: "Dec 31, 2025",
    content: `<p>Cargo vessel <strong>Fitburg</strong> (St. Vincent & Grenadines flag) allegedly dragged anchor and damaged an undersea telecom cable between Finland and Estonia. Vessel seized, criminal investigation opened.</p>`,
    tags: ["Cable Damage","Infrastructure","Baltic Sea","Investigation"],
    link: "https://www.shipuniverse.com/15-major-shipping-incidents-in-h1-2025/",
    coords: [24.5, 59.5],
    location: "Gulf of Finland, Baltic Sea"
  }]
});

// ── 2026 JAN ──

addEvents({
  "2026-01-16": [{
    type: "news",
    title: "HMM to Install Avikus' HiNAS Control on 40 Ships",
    source: "BusinessKorea",
    sourceMeta: "businesskorea.co.kr · Jan 16, 2026",
    content: `<p>HMM announced it will install HD Hyundai's autonomous navigation solution <strong>HiNAS Control</strong>, developed by Avikus, on 40 ships in its fleet.</p><p>Including this contract, Avikus has now supplied HiNAS Control to approximately <strong>350 ships</strong> total.</p>`,
    tags: ["HMM","Avikus","Autonomous Navigation"],
    link: "https://www.businesskorea.co.kr/news/articleView.html?idxno=261088",
    coords: [127.0940, 37.3946],
    location: "Pangyo, South Korea"
  }]
});

// MASRWG Conference - Jan 21-22
addEvents(multiDay("2026-01-21", 2, {
  type: "event",
  title: "MASRWG Conference 2026",
  source: "SMI",
  sourceMeta: "Jan 21-22",
  content: `<p>Virtual Conference (MASS Regulatory Focus)</p>`,
  tags: ["MASS","Autonomous","Regulation"],
  link: "https://www.maritimeindustries.org",
  coords: [-0.1276, 51.5072],
  location: "London"
}));

// ── 2026 FEB ──

// Miami Boat Show - Feb 11-15
addEvents(multiDay("2026-02-11", 5, {
  type: "event",
  title: "Miami International Boat Show 2026",
  source: "Discover Boating",
  sourceMeta: "Feb 11-15",
  content: `<p>Miami Beach Convention Center</p>`,
  tags: ["BoatShow","Yacht","MarineLeisure"],
  link: "https://www.miamiboatshow.com",
  coords: [-80.1339, 25.7907],
  location: "Miami"
}));

addEvents({
  "2026-02-12": [
    {
      type: "accident",
      title: "USS Truxtun Collides With USNS Supply in Caribbean",
      source: "The War Zone",
      sourceMeta: "twz.com · Feb 12, 2026",
      content: `<p>USS <strong>Truxtun</strong> (DDG-103) collided with USNS <strong>Supply</strong> during UNREP in the Caribbean Sea. Two sailors sustained minor injuries.</p>`,
      tags: ["Collision","US Navy","UNREP"],
      link: "https://www.twz.com/sea/navy-destroyer-support-ship-collide-during-at-sea-resupply",
      coords: [-72.5, 16.5],
      location: "Caribbean Sea"
    },
    {
      type: "accident",
      title: "Fatal German Bight Collision 'Wholly Avoidable' - MAIB",
      source: "MAIB / gCaptain",
      sourceMeta: "gov.uk/maib · Feb 12, 2026",
      content: `<p>MAIB final report: <strong>Verity</strong> sank after collision with <strong>Polesie</strong> in October 2023. Five deaths. "Neither vessel applied COLREGS diligently."</p>`,
      tags: ["Collision","MAIB","COLREGS"],
      link: "https://gcaptain.com",
      coords: [7.8, 54.1],
      location: "German Bight"
    }
  ]
});

// ── 2026 MAR ──

// AISS Conference - Mar 24-25
addEvents(multiDay("2026-03-24", 2, {
  type: "event",
  title: "Autonomous Inland & Short Sea Shipping Conference (AISS)",
  source: "AISS",
  sourceMeta: "Mar 24-25",
  content: `<p>Messe Düsseldorf, Germany</p>`,
  tags: ["Autonomous","ShortSea","DigitalShipping"],
  link: "https://aiss-conf.com",
  coords: [6.7403, 51.2728],
  location: "Düsseldorf"
}));

// ── 2026 APR ──

// IHO Assembly - Apr 19-23
addEvents(multiDay("2026-04-19", 5, {
  type: "event",
  title: "IHO Assembly A-4",
  source: "IHO",
  sourceMeta: "Apr 19-23",
  content: `<p>Grimaldi Forum Monaco</p>`,
  tags: ["S100","Hydrography","Navigation"],
  link: "https://iho.int",
  coords: [7.4303, 43.7518],
  location: "Monaco"
}));

// Sea Japan - Apr 22-24
addEvents(multiDay("2026-04-22", 3, {
  type: "event",
  title: "Sea Japan 2026",
  source: "Sea Japan",
  sourceMeta: "Apr 22-24",
  content: `<p>Tokyo Big Sight, Japan</p>`,
  tags: ["Shipping","Autonomous","MaritimeTech"],
  link: "https://www.seajapan.ne.jp",
  coords: [139.7936, 35.6297],
  location: "Tokyo"
}));

// ── 2026 MAY ──

// OTC - May 4-7
addEvents(multiDay("2026-05-04", 4, {
  type: "event",
  title: "OTC 2026",
  source: "OTC",
  sourceMeta: "May 4-7",
  content: `<p>NRG Park, Houston</p>`,
  tags: ["Conference","Offshore","Energy"],
  link: "https://2026.otcnet.org/",
  coords: [-95.4094, 29.6844],
  location: "Houston"
}));

// Digital@Sea - May 6-7
addEvents(multiDay("2026-05-06", 2, {
  type: "event",
  title: "Digital@Sea North America Conference",
  source: "RTCM",
  sourceMeta: "May 6-7",
  content: `<p>Fort Lauderdale, USA</p>`,
  tags: ["DigitalShipping","ENavigation","Optimization"],
  link: "https://www.rtcm.org",
  coords: [-80.1234, 26.1180],
  location: "Fort Lauderdale"
}));

// IMO MSC 111 - May 13-22
addEvents(multiDay("2026-05-13", 10, {
  type: "event",
  title: "IMO MSC 111",
  source: "IMO",
  sourceMeta: "May 13-22",
  content: `<p>IMO Headquarters, London</p>`,
  tags: ["IMO","Safety","MASS"],
  link: "https://www.imo.org",
  coords: [-0.1173, 51.4936],
  location: "London"
}));

// ── 2026 JUN ──

// Posidonia - Jun 1-5
addEvents(multiDay("2026-06-01", 5, {
  type: "event",
  title: "Posidonia 2026",
  source: "Posidonia",
  sourceMeta: "Jun 1-5",
  content: `<p>Athens Metropolitan Expo, Greece</p>`,
  tags: ["Shipping","Global","Exhibition"],
  link: "https://posidonia-events.com",
  coords: [23.9554, 37.9366],
  location: "Athens"
}));

// Autonomous Ship Expo - Jun 16-18
addEvents(multiDay("2026-06-16", 3, {
  type: "event",
  title: "Autonomous Ship Expo & Conference 2026",
  source: "Autonomous Ship Expo",
  sourceMeta: "Jun 16-18",
  content: `<p>RAI Amsterdam Convention Centre</p>`,
  tags: ["Autonomous","AI","MASS"],
  link: "https://electricandhybridmarineworldexpo.com/autonomous-ship-expo",
  coords: [4.8852, 52.3423],
  location: "Amsterdam"
}));

// ── 2026 SEP ──

// SMM - Sep 1-4
addEvents(multiDay("2026-09-01", 4, {
  type: "event",
  title: "SMM 2026",
  source: "Hamburg Messe",
  sourceMeta: "Sep 1-4",
  content: `<p>Hamburg Messe und Congress</p>`,
  tags: ["Shipbuilding","Digital","Maritime"],
  link: "https://www.smm-hamburg.com",
  coords: [9.9749, 53.5585],
  location: "Hamburg"
}));

// SAFETY4SEA - Sep 24
addEvents({
  "2026-09-24": [{
    type: "event",
    title: "SAFETY4SEA London Forum",
    source: "SAFETY4SEA",
    sourceMeta: "Sep 24",
    content: `<p>London (Venue TBC)</p>`,
    tags: ["Safety","ESG","Shipping"],
    link: "https://events.safety4sea.com",
    coords: [-0.1276, 51.5072],
    location: "London"
  }]
});

// NMEA Conference - Sep 28 - Oct 2
addEvents(multiDay("2026-09-28", 5, {
  type: "event",
  title: "NMEA Conference & Expo 2026",
  source: "NMEA",
  sourceMeta: "Sep 28 - Oct 2",
  content: `<p>Hilton Dallas/Rockwall Lakefront</p>`,
  tags: ["NMEA","Navigation","MarineElectronics"],
  link: "https://expo.nmea.org",
  coords: [-96.4592, 32.9015],
  location: "Rockwall"
}));

// ── 2026 OCT ──

// Digital Ship Summit - Oct 14
addEvents({
  "2026-10-14": [{
    type: "event",
    title: "Digital Ship Summit 2026",
    source: "Digital Ship",
    sourceMeta: "Oct 14",
    content: `<p>Dubai World Trade Centre Area</p>`,
    tags: ["DigitalShipping","Optimization","FleetAI"],
    link: "https://thedigitalship.com",
    coords: [55.2840, 25.2253],
    location: "Dubai"
  }]
});

// FLIBS - Oct 28 - Nov 1
addEvents(multiDay("2026-10-28", 5, {
  type: "event",
  title: "Fort Lauderdale International Boat Show 2026",
  source: "FLIBS",
  sourceMeta: "Oct 28 - Nov 1",
  content: `<p>Bahia Mar Yachting Center</p>`,
  tags: ["BoatShow","Superyacht"],
  link: "https://www.flibs.com",
  coords: [-80.1041, 26.1124],
  location: "Fort Lauderdale"
}));

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-18
addEvents({
  "2026-02-18": [
    {
      type: "news",
      title: "Costamare locks in $940m with 12 forward charters",
      source: "Splash247",
      sourceMeta: "splash247.com · Feb 18, 2026",
      content: `<p>Greek container shipping company Costamare has secured $940m in new contracted revenues by fixing 12 vessels on forward charters for periods up to eight years, bringing fleet employment to 96%.</p>`,
      tags: ["Container Shipping","Charter","Greek Shipping","Costamare","Fleet Operations"],
      link: "https://splash247.com/costamare-locks-in-940m-with-12-forward-charters/",
      coords: [23.7275,37.9838],
      location: "Greece"
    },

    {
      type: "news",
      title: "Finnish roro player Godby books up to four newbuilds in China",
      source: "Splash247",
      sourceMeta: "splash247.com · Feb 18, 2026",
      content: `<p>Finland's Godby Shipping has ordered two roro vessels at CIMC Raffles in China, with options for two more units. The order supports the Åland-based operator's fleet renewal plans and environmental compliance goals.</p>`,
      tags: ["Newbuilds","RoRo vessels","Godby Shipping","CIMC Raffles","Finland","Shipbuilding"],
      link: "https://splash247.com/finnish-roro-player-godby-books-up-to-four-newbuilds-in-china/",
      coords: [24.9354,60.1699],
      location: "Åland, Finland / China"
    },
    {
      type: "news",
      title: "Marcura deepens tanker claims play with Shipdem buy",
      source: "Splash247",
      sourceMeta: "splash247.com · Feb 18, 2026",
      content: `<p>Dubai-headquartered maritime tech firm Marcura has acquired UK-based chemical tanker demurrage specialist Shipdem from its parent company, Casper Shipping. The acquisition strengthens Marcura's position in the technical chemical tanker market where demurrage claims require expertise in contractual wording and complex cargo operations.</p>`,
      tags: ["M&A","Tanker","Maritime Tech","Chemical Tanker","Demurrage"],
      link: "https://splash247.com/marcura-deepens-tanker-claims-play-with-shipdem-buy/",
      coords: [55.2708,25.2048],
      location: "Dubai, UAE"
    },
    {
      type: "news",
      title: "ZIM workers escalate strike action over Hapag-Lloyd takeover",
      source: "Splash247",
      sourceMeta: "splash247.com · Feb 18, 2026",
      content: `<p>Workers at Israel's ZIM Integrated Shipping Services have escalated strike action following news of a planned $4.2bn sale to Germany's Hapag-Lloyd. Around 800 unionised employees began a warning strike at the company's Haifa headquarters after reports of the imminent takeover.</p>`,
      tags: ["ZIM","Hapag-Lloyd","Strike","Merger","Israel","Shipping"],
      link: "https://splash247.com/zim-workers-escalate-strike-action-over-hapag-lloyd-takeover/",
      coords: [35.0104,32.8193],
      location: "Haifa, Israel"
    },

    {
      type: "news",
      title: "Caravel Group: Angad Banga outlines his vision",
      source: "Splash247",
      sourceMeta: "splash247.com · Feb 18, 2026",
      content: `<p>Angad Banga, newly appointed CEO of Caravel Group, outlines his vision for the shipping company in Hong Kong, following a succession plan that differs from typical industry transitions.</p>`,
      tags: ["Shipping Company","Leadership","Hong Kong","Caravel Group"],
      link: "https://splash247.com/caravel-group-angad-banga-outlines-his-vision/",
      coords: [114.1694,22.3193],
      location: "Hong Kong"
    },
    {
      type: "news",
      title: "Inter-array cable installation underway at 1.4 GW East Anglia Three offshore wind farm",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 18, 2026",
      content: `<p>The vessel Seaway Aimery is laying inter-array cables between wind turbines at the East Anglia Three offshore wind farm, a 1.4 GW renewable energy installation.</p>`,
      tags: ["offshore wind","cable installation","renewable energy","East Anglia"],
      link: "https://www.offshore-energy.biz/inter-array-cable-installation-underway-at-1-4-gw-east-anglia-three-offshore-wind-farm/",
      coords: [1.5,52],
      location: "East Anglia, North Sea"
    },

    {
      type: "news",
      title: "Five Chinese gas carrier and FSRU vessel projects receive Bureau Veritas' blessing",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 18, 2026",
      content: `<p>Bureau Veritas Marine & Offshore has awarded approval in principle certificates for five Chinese gas carrier and floating storage regasification unit vessel projects, marking regulatory progress for liquefied natural gas infrastructure development.</p>`,
      tags: ["LNG","Gas carrier","FSRU","Bureau Veritas","China","Vessel approval"],
      link: "https://www.offshore-energy.biz/five-chinese-gas-carrier-and-fsru-vessel-projects-receive-bureau-veritas-blessing/",
      coords: [104.1954,35.8617],
      location: "China"
    },

  ]
});

// Auto-collected: 2026-02-17
addEvents({
  "2026-02-17": [
    {
      type: "news",
      title: "Saipem to buy seventh-gen Deep Value Driller drillship for $272.5 million",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 17, 2026",
      content: `<p>Norwegian drillship-owning company Deep Value Driller has entered into an agreement with Italy's engineering firm Saipem to purchase a seventh-generation Deep Value Driller drillship for $272.5 million.</p>`,
      tags: ["Drillship","Acquisition","Offshore Energy","Deep Value Driller","Saipem"],
      link: "https://www.offshore-energy.biz/saipem-to-buy-seventh-gen-deep-value-driller-drillship-for-272-5-million/",
      coords: [10,45],
      location: "North Sea / Europe"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-19
addEvents({
  "2026-02-19": [
    {
      type: "event",
      title: "Reach Subsea to begin six-month survey campaign for second Shetland HVDC link",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 19, 2026",
      content: `<p>Norway's Reach Subsea is commencing an offshore survey campaign for the second Shetland HVDC link, with a six-month duration survey campaign set to begin.</p>`,
      tags: ["HVDC","subsea survey","renewable energy","Shetland","infrastructure"],
      link: "https://www.offshore-energy.biz/reach-subsea-about-to-begin-six-month-survey-campaign-for-second-shetland-hvdc-link/",
      coords: [-1.3,60.5],
      location: "Shetland, Scotland"
    },
    {
      type: "news",
      title: "Six LNG vessels to sport GTT's tank design",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 19, 2026",
      content: `<p>France's Gaztransport & Technigaz (GTT) has been contracted to provide tank design for six new liquefied natural gas carriers, leveraging its expertise in technological containment systems for LNG vessels.</p>`,
      tags: ["LNG","Tank Design","GTT","Vessel Construction","Shipping"],
      link: "https://www.offshore-energy.biz/six-lng-vessels-to-sport-gtts-tank-design/",
      coords: [2.3522,48.8566],
      location: "France"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-19
addEvents({
  "2026-02-19": [
    {
      type: "news",
      title: "Russia Executes First-Ever Triple Arctic LNG Ship-to-Ship Transfer Amid Sanctions",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · Feb 19, 2026",
      content: `<p>Russia conducted three simultaneous LNG ship-to-ship transfers in Arctic waters for the first time, demonstrating an increasingly sophisticated logistics network for gas exports despite Western sanctions.</p>`,
      tags: ["LNG","Ship-to-Ship Transfer","Arctic Operations","Russia","Sanctions","Maritime Logistics"],
      link: "https://gcaptain.com/russia-executes-first-triple-lng-ship-to-ship-with-simultaneous-transfers-from-yamal-and-arctic-lng-2/",
      coords: [70,75],
      location: "Arctic Waters"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-22
addEvents({
  "2026-02-22": [
    {
      type: "news",
      title: "Trump Announces Greenland Hospital Ship Mission as Mercy and Comfort Sit in Alabama Shipyard",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · Feb 22, 2026",
      content: `<p>President Donald Trump announced plans to send a U.S. hospital ship to Greenland to provide medical care. The announcement comes as the USNS Mercy and USNS Comfort remain in Alabama shipyard for maintenance and operations.</p>`,
      tags: ["Hospital Ship","USNS Mercy","USNS Comfort","Greenland","Medical Operations","U.S. Navy"],
      link: "https://gcaptain.com/trump-announces-greenland-hospital-ship-mission-as-mercy-and-comfort-sit-in-alabama-shipyard/",
      coords: [-40.6432,71.9821],
      location: "Greenland"
    }
  ]
});

/// ── Slack Live Updates ──
addEvents({
  "2026-02-22": [
    {
      type: "news",
      title: "Japanese Cargo Ship Hits Fishing Boat, Splitting It and Killing Two",
      source: "Slack Feed",
      sourceMeta: "slack auto · 2026-02-22",
      content: `<p>Shared from Maritime Hub Slack.</p>`,
      tags: ["Slack"],
      link: "https://maritime-executive.com/article/japanese-cargo-ship-hits-fishing-boat-splitting-it-and-killing-two",
      coords: [139.6917, 35.6895], // 임의 좌표 (일본 연안)
      location: "Japan Coast"
    },
    {
      type: "news",
      title: "U.S Navy Selects Fincantieri To Construct First 4 Medium Landing Ships",
      source: "Slack Feed",
      sourceMeta: "slack auto · 2026-02-22",
      content: `<p>Shared from Maritime Hub Slack.</p>`,
      tags: ["Slack"],
      link: "https://www.marineinsight.com/shipping-news/u-s-navy-selects-fincantieri-to-construct-first-4-medium-landing-ships/",
      coords: [-77.0369, 38.9072], // 임의 좌표 (미 해군 관련)
      location: "USA"
    },
    {
      type: "news",
      title: "U.S Navy To Get The New Liberty-Class Of Autonomous Ships",
      source: "Slack Feed",
      sourceMeta: "slack auto · 2026-02-22",
      content: `<p>Shared from Maritime Hub Slack.</p>`,
      tags: ["Slack"],
      link: "https://www.marineinsight.com/shipping-news/u-s-navy-to-get-the-new-liberty-class-of-autonomous-ships/",
      coords: [-122.3321, 47.6062], // 임의 좌표
      location: "USA"
    }
  ],
  "2026-02-23": [
    {
      type: "news",
      title: "자율운항 선박 원격 제어 성공",
      source: "gCaptain",
      sourceMeta: "slack auto · 2026-02-23",
      content: `<p>Shared from Maritime Hub Slack.</p>`,
      tags: ["Slack"],
      link: "https://gcaptain.com/future-of-autonomous-shipping",
      coords: [128.6, 34.8], // 거제 실증지 부근 좌표
      location: "Geoje, South Korea"
    }
  ]
});
