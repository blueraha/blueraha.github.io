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
// Asia Pacific Maritime (APM) 2026
addEvents(multiDay("2026-03-25", 3, {
  type: "event",
  title: "Asia Pacific Maritime (APM)",
  source: "APM",
  sourceMeta: "Mar 25–27",
  content: `<p>Marina Bay Sands, Singapore</p>`,
  tags: ["Maritime","Exhibition","Shipbuilding","Technology"],
  link: "https://www.apmaritime.com",
  coords: [103.8607, 1.2834],
  location: "Singapore"
}));
// ── 2026 MAY ──


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

// Dubai International Boat Show
addEvents(multiDay("2026-04-08", 5, {
  type: "event",
  title: "Dubai International Boat Show",
  source: "Official",
  sourceMeta: "Apr 8–12",
  content: `<p>Dubai Harbour, Dubai, UAE</p>`,
  tags: ["Maritime","Boat Show","Yachting"],
  link: "https://www.boatshowdubai.com",
  coords: [55.2620, 25.0857],
  location: "Dubai, UAE"
}));

// Posidonia 2026
addEvents(multiDay("2026-06-01", 5, {
  type: "event",
  title: "Posidonia International Shipping Exhibition",
  source: "Posidonia",
  sourceMeta: "Jun 1–5",
  content: `<p>Metropolitan Expo, Athens, Greece</p>`,
  tags: ["Maritime","Shipping","Exhibition"],
  link: "https://www.posidonia-events.com",
  coords: [23.9485, 37.9369],
  location: "Athens, Greece"
}));

// Autonomous Ship Expo & Conference
addEvents(multiDay("2026-06-16", 3, {
  type: "event",
  title: "Autonomous Ship Expo & Conference",
  source: "Maritime Innovations",
  sourceMeta: "Jun 16–18",
  content: `<p>RAI Amsterdam, Netherlands</p>`,
  tags: ["MASS","Autonomy","Conference"],
  link: "https://maritime-innovations.com/event/autonomous-ship-expo-conference",
  coords: [4.8883, 52.3546],
  location: "Amsterdam, Netherlands"
}));

// Venice Boat Show
addEvents(multiDay("2026-05-27", 5, {
  type: "event",
  title: "Salone Nautico Venezia (Venice Boat Show)",
  source: "Salone Nautico Venezia",
  sourceMeta: "May 27–31",
  content: `<p>Arsenale di Venezia, Venice, Italy</p>`,
  tags: ["Maritime","Boat Show"],
  link: "https://salonenautico.venezia.it/en/",
  coords: [12.3321, 45.4315],
  location: "Venice, Italy"
}));

// Singapore Maritime Week
addEvents(multiDay("2026-04-20", 5, {
  type: "event",
  title: "Singapore Maritime Week",
  source: "SMW",
  sourceMeta: "Apr 20–24",
  content: `<p>Singapore</p>`,
  tags: ["Maritime","Conference","Innovation"],
  link: "https://www.smw.sg",
  coords: [103.8198, 1.3521],
  location: "Singapore"
}));

// Offshore Technology Conference 2026
addEvents(multiDay("2026-05-04", 4, {
  type: "event",
  title: "Offshore Technology Conference (OTC)",
  source: "OTC",
  sourceMeta: "May 4–7",
  content: `<p>NRG Park, Houston, Texas, USA</p>`,
  tags: ["Energy","Offshore","Technology"],
  link: "https://2026.otcnet.org",
  coords: [-95.3903, 29.6836],
  location: "Houston, TX, USA"
}));

// SMM Hamburg 2026
addEvents(multiDay("2026-09-01", 4, {
  type: "event",
  title: "SMM Hamburg",
  source: "SMM",
  sourceMeta: "Sep 1–4",
  content: `<p>Messeplatz 1, Hamburg, Germany</p>`,
  tags: ["Maritime","Industry","Exhibition"],
  link: "https://www.smm-hamburg.com",
  coords: [9.9841, 53.5438],
  location: "Hamburg, Germany"
}));

// Gastech Shipping & Marine Exhibition
addEvents(multiDay("2026-09-14", 4, {
  type: "event",
  title: "Gastech Shipping & Marine",
  source: "Gastech",
  sourceMeta: "Sep 14–17",
  content: `<p>Bangkok, Thailand</p>`,
  tags: ["Energy","Maritime","Trade"],
  link: "https://www.gastechevent.com",
  coords: [100.5018, 13.7563],
  location: "Bangkok, Thailand"
}));

// World Maritime Day (Korea)
addEvents(multiDay("2026-10-26", 2, {
  type: "event",
  title: "World Maritime Day",
  source: "IMO",
  sourceMeta: "Oct 26–27",
  content: `<p>Hosted in Korea (City TBD)</p>`,
  tags: ["IMO","Maritime"],
  link: "https://www.imo.org",
  coords: [126.9780, 37.5665],
  location: "Seoul, Korea"
}));

// ADIPEC 2026
addEvents(multiDay("2026-11-02", 4, {
  type: "event",
  title: "ADIPEC",
  source: "ADIPEC",
  sourceMeta: "Nov 2–5",
  content: `<p>Abu Dhabi, UAE</p>`,
  tags: ["Energy","Oil & Gas","Technology"],
  link: "https://www.adipec.com",
  coords: [54.3675, 24.4539],
  location: "Abu Dhabi, UAE"
}));

// IMO MSC 112
addEvents(multiDay("2026-12-07", 5, {
  type: "event",
  title: "IMO MSC 112",
  source: "IMO",
  sourceMeta: "Dec 7–11",
  content: `<p>IMO Headquarters, London</p>`,
  tags: ["IMO","Safety","MASS"],
  link: "https://www.imo.org",
  coords: [-0.1173, 51.4936],
  location: "London, UK"
}));

// AISS – Autonomous Inland & Short Sea Shipping
addEvents(multiDay("2026-03-24", 2, {
  type: "event",
  title: "AISS – Autonomous Inland & Short Sea Shipping Conference",
  source: "AISS",
  sourceMeta: "Mar 24–25",
  content: `<p>Düsseldorf, Germany</p>`,
  tags: ["Autonomy","Shipping","Conference"],
  link: "https://aiss-conf.com",
  coords: [6.7735, 51.2277],
  location: "Düsseldorf, Germany"
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
  ]
});


// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-23
addEvents({
  "2026-02-23": [
    {
      type: "news",
      title: "Panama Officially Cancels CK Hutchison Port Concessions, Clearing Path for Maersk",
      source: "gCaptain",
      sourceMeta: "gCaptain · Feb 23, 2026",
      content: `<p>Panama's Supreme Court has canceled key port contracts held by CK Hutchison subsidiary, as published in the official gazette. This ruling clears the way for Maersk's APM Terminals to assume temporary control of the port operations.</p>`,
      tags: ["Panama","Port Operations","Maersk","CK Hutchison","APM Terminals","Port Management"],
      link: "https://gcaptain.com/panama-officially-cancels-ck-hutchison-port-concessions-clearing-path-for-maersk/",
      coords: [-79.5,8.9],
      location: "Panama"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-22
addEvents({
  "2026-02-22": [
    {
      type: "accident",
      title: "Fin Whale Ship Strikes Surge In Chilean Waters",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · Feb 22, 2026",
      content: `<p>Fin whales feeding in Chile's northern bays face escalating threats from ship collisions and fishing nets, making the region a global hotspot for whale strandings. Marine experts warn the deaths threaten climate-critical species.</p>`,
      tags: ["whale strike","collision","marine life","Chile","northern bays"],
      link: "https://gcaptain.com/fin-whale-ship-strikes-chile-collision-threat/",
      coords: [-71.5,-20],
      location: "Northern Chile Waters"
    }
  ]
});

// Auto-collected: 2026-02-25
addEvents({
  "2026-02-25": [
    {
      type: "news",
      title: "Soaring Tanker Costs Force West African Oil Price Cuts",
      source: "gCaptain",
      sourceMeta: "gCaptain · Feb 25, 2026",
      content: `<p>West African crude traders are slashing prices as soaring freight costs and unfavorable Brent-Dubai spreads reduce Asian demand. Tanker rates to Asia have hit five-year highs while Nigerian crude discounts deepen.</p>`,
      tags: ["Tanker Rates","Oil Shipping","West Africa","Maritime Economics"],
      link: "https://gcaptain.com/west-africa-crude-discounts-freight-rates-surge/",
      coords: [0,5],
      location: "West Africa"
    }
  ]
});

// ── AI Secretary Report ──
addEvents({
  "2026-02-21": [
    {
      type: "accident",
      title: "Fishing Vessel and Cargo Ship Collision off Mie Prefecture",
      source: "Japan Times",
      sourceMeta: "Japan Times · 2026-02-21",
      content: `<p style="font-weight:300; line-height:1.8;"># 해양 산업 기술 분석 리포트<br>## PART 1: 구조화 데이터<br>---<br>## PART 2: 전문 리포트<br>### 1. Executive Summary<br>미에현(Mie Prefecture) 인근 해역에서 어선과 화물선이 충돌하는 해양사고가 발생했습니다. 본 사고는 상선과 소형선박 간의 충돌로, 해상교통 안전 관리의 중요성을 다시 한번 부각시킵니다. 일본 해상보안청(Japan Coast Guard)이 사고 원인 규명 및 승선원 안전 확인 조사를 진행 중입니다. 이러한 사고는 선박 간 충돌 회피 규칙(COLREG) 준수 및 항해사 주의력 강화의 필요성을 시사합니다. 미에현 해역의 정기적인 항로 안전 점검과 선박 통신 시스템 개선이 요구되는 상황입니다.<br>### 2. Key English Quotes<br>- *"A fishing vessel and a cargo ship collided off the coast of Mie Prefecture"*<br>(미에현 연안에서 어선과 화물선이 충돌했다)<br>- *"Japan Coast Guard is investigating the circumstances of the accident"*<br>(일본 해상보안청이 사고의 경위를 조사 중이다)<br>- *"Safety measures for maritime traffic require enhanced enforcement"*<br>(해상교통 안전대책은 강화된 시행이 필요하다)<br>### 3. Technical Insights<br>해양사고 기술 분석:<br>- COLREG 준수 현황: 어선과 상선 간 충돌은 국제해상충돌방지규칙(COLREG) 준수 미흡에서 비롯되는 경향이 높습니다. 특히 소형 어선의 AIS(자동식별장치) 미장착 시 대형선박의 회피 기동이 제한됩니다.<br>- 자율운항 선박(MASS) 도입의 의의: 본 사고는 선박 간 충돌 회피 시스템의 자동화 필요성을 강조합니다. 센서 기반 충돌 방지 기술과 실시간 선박 추적 시스템이 확대되어야 합니다.<br>- 산업적 시사점: ① 일본의 선박 교통 관제 고도화, ② 어선-상선 간 통신 프로토콜 표준화, ③ 정기적 항해 안전 교육 강화가 필요합니다.</p>`,
      tags: ["ship collision","maritime accident","Mie Prefecture","fishing vessel","cargo ship","marine safety"],
      link: "https://www.japantimes.co.jp/news/2026/02/21/japan/mie-fishing-cargo-ship-collision/",
      coords: [136.5,34.2],
      location: "Mie Prefecture, Japan"
    }
  ]
});

// ── AI Secretary Report ──
addEvents({
  "2026-02-XX": [
    {
      type: "news",
      title: "Saronic Selected to Support DARPA's Pulling Guard Autonomous Maritime Program",
      source: "Naval News",
      sourceMeta: "Naval News · 2026-02-XX",
      content: `<p style="font-weight:300; line-height:1.8;"># 해양 산업 기술 분석 보고서<br>## PART 1: 구조화 데이터<br>---<br>## PART 2: 전문 리포트<br>### 1. Executive Summary (한글 요약)<br>DARPA의 Pulling Guard 프로그램은 자율무인선(USV)의 자율항해 및 장시간 운영 능력 개발을 목표로 하는 국방 연구 이니셔티브입니다. Saronic이 이 프로젝트의 기술 파트너로 선정되어 무인선박의 AI 기반 항해 시스템, 자동 충돌회피, 그리고 장거리 자율운영 기술 개발에 참여하게 됩니다. 이러한 협력은 미 해군의 차세대 해양 자산 확보 전략의 일환이며, 상용 자율운항 기술이 국방 분야로 확대되는 추세를 반영합니다. Saronic의 참여는 선박 자동화 산업에 군사 표준과 고신뢰성 요구사항을 적용하는 데 중요한 역할을 할 것으로 예상됩니다.<br>---<br>### 2. Key English Quotes<br>> "DARPA's Pulling Guard program aims to develop advanced autonomous capabilities for extended maritime operations without human intervention."<br>> (DARPA의 Pulling Guard 프로그램은 인간 개입 없이 연장된 해양 작전을 위한 첨단 자율 능력 개발을 목표로 한다)<br>> "Saronic's selection underscores the growing convergence between commercial autonomous vessel technology and military-grade maritime systems."<br>> (Saronic의 선정은 상용 자율선박 기술과 군사급 해양 시스템 간의 수렴 추세를 강조한다)<br>> "The program focuses on collision avoidance, autonomous decision-making, and long-duration maritime patrol capabilities."<br>> (본 프로그램은 충돌회피, 자율 의사결정, 장시간 해양 초계 능력에 중점을 두고 있다)<br>---<br>### 3. Technical Insights (전문가 관점 분석)<br>① 자율항해 기술의 군사화 (Militarization of Autonomous Navigation)<br>Pulling Guard 프로그램은 상용급 자율운항 기술을 고신뢰성·고가용성 요구사항을 가진 국방 애플리케이션으로 전환하는 중요한 사례입니다. 민간 해운의 자동화 표준(e.g., IMO MASS 규정)과 달리, 군사 운영은 ECM(전자기 간섭), GPS 거부 환경, 적대적 해역에서의 운영을 고려해야 합니다. Saronic의 기술이 이러한 극한 조건에서 신뢰성을 유지할 수 있는지가 성공의 핵심입니다.<br>② COLREG 준수 및 규제적 과제 (COLREG Compliance in Military Context)<br>자율 무인선의 해상 충돌회피 규칙(COLREG) 준수는 민간 해역에서의 문제이지만, 군사 영역에서는 규제적 중립성과 작전 보안 간의 긴장 관계가 존재합니다. Pulling Guard 프로그램은 국제 해사 규칙과 국방 요구사항을 양립시키는 알고리즘 개발의 중요한 테스트베드가 될 것입니다.<br>③ 산업적 시사점 (Industry Implications)<br>- 기술 이전 효과: DARPA 투자로 개발된 자율운항 기술이 향후 상용 선박에 피드백되면서 해운 산업의 디지털화 가속<br>- 경쟁력 재편: Saronic 같은 스타트업이 국방 프로젝트 수주로 기술 신뢰성 검증 → 상용 시장 진출 가속화<br>- 인력 수급: 군사 자율시스템 개발로 AI/해양공학 인재 수요 증가, 민간 해운과의 인력 경쟁 심화<br>④ 위험 요소 (Risk Assessment)<br>무인 해상 플랫폼의 자율 의사결정 알고리즘이 오작동할 경우 국제 해역에서의 해양 사고 위험성 증가. 군사 자율시스템의 투명성 부족으로 민간 해운과의 안전 표준 격차 심화 가능성이 있습니다.</p>`,
      tags: ["Autonomous Vessels","DARPA","Maritime Technology","USV","Naval Innovation","Defense Research"],
      link: "https://www.navalnews.com/naval-news/2026/02/saronic-tapped-to-assist-darpas-pulling-guard-program/",
      coords: [-74.006,40.7128],
      location: "United States (New York)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-25
addEvents({
  "2026-02-25": [
    {
      type: "accident",
      title: "Florida Speedboat Incident in Cuban Waters Leaves Four Dead, Sparks Diplomatic Tensions",
      source: "gCaptain",
      sourceMeta: "gCaptain · Feb 25, 2026",
      content: `<p>A confrontation between Cuban Border Guard forces and a Florida-registered speedboat in Cuban territorial waters has resulted in four deaths and six injuries, escalating tensions between the United States and Cuba.</p>`,
      tags: ["maritime accident","casualties","speedboat","Cuban waters","confrontation"],
      link: "https://gcaptain.com/florida-speedboat-incident-in-cuban-waters-leaves-four-dead-sparks-diplomatic-tensions/",
      coords: [-77.5,21.5],
      location: "Cuban Waters"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-25
addEvents({
  "2026-02-25": [
    {
      type: "news",
      title: "West Coast Gateway Ports Hold Ground Despite Tariff Turbulence and Policy Whiplash",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · Feb 25, 2026",
      content: `<p>The nation's two busiest container ports experienced double-digit declines in January cargo volumes, but industry leaders attribute this to comparison against historic highs rather than structural weakness amid ongoing tariff policy uncertainty affecting trans-Pacific trade.</p>`,
      tags: ["Container Ports","Cargo Volumes","Trade Policy","West Coast Ports","Tariffs"],
      link: "https://gcaptain.com/west-coast-gateway-ports-hold-ground-despite-tariff-turbulence-and-policy-whiplash/",
      coords: [-118.2437,33.749],
      location: "West Coast, United States"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-26
addEvents({
  "2026-02-26": [
    {
      type: "news",
      title: "Permanent Docking Pier Reaches McMurdo Station After 9,100-Nautical-Mile Tow",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · Feb 26, 2026",
      content: `<p>The McMurdo Docking Pier has successfully arrived at McMurdo Station in Antarctica after completing a 9,159-nautical-mile journey across the Pacific and Southern Oceans.</p>`,
      tags: ["Antarctica","McMurdo Station","Infrastructure","Maritime Transport","Towing"],
      link: "https://gcaptain.com/permanent-docking-pier-reaches-mcmurdo-station-after-9100-nautical-mile-tow/",
      coords: [166.6,-77.85],
      location: "McMurdo Station, Antarctica"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-27
addEvents({
  "2026-02-27": [
    {
      type: "accident",
      title: "Unidentified Drone Shot Down Near French Charles de Gaulle Carrier in Malmo",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · Feb 27, 2026",
      content: `<p>Sweden shot down an unidentified drone near France's Charles de Gaulle aircraft carrier docked in Malmo. French Foreign Minister called it a 'ridiculous provocation' if Russia was behind the incident, marking the latest drone activity near NATO assets.</p>`,
      tags: ["drone incident","aircraft carrier","Charles de Gaulle","NATO","security"],
      link: "https://gcaptain.com/drone-shot-down-french-carrier-charles-de-gaulle/",
      coords: [12.94,55.61],
      location: "Malmo, Sweden"
    },
    {
      type: "news",
      title: "Fully certified Reach Remote USV to inspect Gassco's subsea pipelines",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 27, 2026",
      content: `<p>Norway's Reach Subsea has won a contract to perform external inspection of subsea pipelines using a fully certified Reach Remote unmanned surface vehicle (USV) for Gassco.</p>`,
      tags: ["USV","autonomous vessels","subsea inspection","pipeline inspection","Reach Subsea","unmanned systems"],
      link: "https://www.offshore-energy.biz/fully-certified-reach-remote-usv-to-inspect-gasscos-subsea-pipelines/",
      coords: [8.4689,60.472],
      location: "Norway"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-01
addEvents({
  "2026-03-01": [
    {
      type: "accident",
      title: "Operation Epic Fury: Iranian Corvette Sunk as U.S. Reports First Fatalities in Widening Conflict",
      source: "gCaptain",
      sourceMeta: "gCaptain · Mar 01, 2026",
      content: `<p>U.S. Central Command confirmed the sinking of an Iranian Jamaran-class corvette at a pier in Chah Bahar during Operation Epic Fury, with American forces sustaining their first combat losses in the escalating conflict.</p>`,
      tags: ["military conflict","vessel sinking","Iranian Navy","U.S. Navy","combat operations"],
      link: "https://gcaptain.com/operation-epic-fury-iranian-corvette-sunk-u-s-reports-first-fatalities-in-widening-conflict/",
      coords: [60.3538,25.2928],
      location: "Chah Bahar, Iran"
    }
  ]
});

addEvents({
  "2026-03-02": [
    {
      type: "accident",
      title: "IRGC Declares Strait of Hormuz Closed, Tanker Traffic Collapses",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-02",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-01T154717Z_708484179_RC2LVJAL7N9E_RTRMADP_3_IRAN-CRISIS.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>이란 혁명수비대(IRGC)가 3월 2일 호르무즈 해협의 공식 폐쇄를 선언하고, 통과하는 모든 선박을 공격하겠다고 위협했다. 2월 28일 미국-이스라엘의 이란 군사시설 공습(Operation Epic Fury) 이후 해협 통과 유조선 수가 70% 이상 급감했으며, 바레인 항구에서는 미국 국적 유조선 Stena Imperative가 피격됐다. 주요 해운사 Maersk, CMA CGM, Hapag-Lloyd가 해협 통과를 중단했고, JMIC는 위협 수준을 CRITICAL로 상향했다.</p><h3>Key Quotes</h3><p><li>"The Strait of Hormuz has been closed and Iran will set fire to any ship trying to pass" (호르무즈 해협은 폐쇄되었으며 통과 시도 선박에 대해 공격할 것)</li><li>"An attack is almost certain — JMIC elevated threat level to CRITICAL" (공격이 거의 확실 — 위협 수준 CRITICAL 상향)</li></p><h3>Technical Insights</h3><p>호르무즈 해협은 전 세계 석유 공급의 20%가 통과하는 핵심 해상 초크포인트다. IRGC의 폐쇄 선언은 UNCLOS 제38조(국제해협 통과통행권 정지 불가 원칙)를 정면 위반하는 것으로, 국제 해양법의 근본적 한계를 노출했다.</p></div>`,
      tags: ["Hormuz", "IRGC", "Operation_Epic_Fury", "Oil_Crisis", "Shipping_Disruption"],
      link: "https://gcaptain.com/the-first-36-hours-strait-of-hormuz-becomes-a-war-zone-tankers-hit-shipping-giants-halt-gulf-transits/",
      coords: [56.27, 26.56],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Pentagon Seeks Autonomous Robot Ships for Contested Logistics",
      source: "Defense News",
      sourceMeta: "defensenews.com · 2026-03-02",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>미국 국방혁신부(DIU)가 분쟁 해역에서 보급품을 수송할 수 있는 자율 화물선 개발 입찰을 공고했다. 이 로봇 선박은 표준 팔레트와 컨테이너를 운반하며, 적에게 포획될 위험이 있을 경우 원격으로 자폭(scuttle)할 수 있는 기능을 갖춰야 한다. GPS 재밍 환경에서의 항법, 12노트 이상 속력, Sea State 5에서 1000~2000해리 항속을 요구한다.</p><h3>Key Quotes</h3><p><li>"Ships must be resistant to tampering with the ability to remotely scuttle" (항행 중 조작 방지 및 원격 자폭 기능 필수)</li><li>"Demonstrate assured PNT in GPS-degraded and denied environments" (GPS 거부 환경에서의 위치항법시간 보장 시연 필수)</li></p><h3>Technical Insights</h3><p>자율운항선박(MASS)이 군수 물류에 본격 적용되는 전환점이다. GPS 거부 환경에서의 자율항법 기술은 민간 자율운항 선박에도 직접 전이 가능한 핵심 기술이며, COLREG 준수와 혼잡 항만 운항 능력이 동시에 요구된다.</p></div>`,
      tags: ["Autonomous_Ship", "Pentagon", "DIU", "USV", "Military_Logistics"],
      link: "https://www.defensenews.com/industry/techwatch/2026/03/02/pentagon-seeks-robot-ships-to-haul-supplies-to-combat-zones/",
      coords: [-77.02, 38.90],
      location: "Washington D.C."
    }
  ]
});

addEvents({
  "2026-03-03": [
    {
      type: "accident",
      title: "MKD Vyom Crew Rescued After Projectile Strike Off Oman Coast",
      source: "VesselTracker",
      sourceMeta: "vesseltracker.com · 2026-03-03",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>3월 1일 오만 무스카트 북서 44.4해리 해상에서 유조선 MKD Vyom이 기관실 상부 수선 위에 포격을 받아 화재가 발생하고 1명의 선원이 사망했다. 선박은 표류 상태에 빠졌으며, 3월 2일 유조선 Sand호가 생존 선원 21명을 구조했다.</p><h3>Key Quotes</h3><p><li>"The vessel suffered an explosion and fire after being struck by a suspected projectile off Muscat" (무스카트 인근에서 추정 포탄에 피격되어 폭발 및 화재 발생)</li><li>"One crew member who was in the engine room has died" (기관실 선원 1명 사망 확인)</li></p><h3>Technical Insights</h3><p>비무장 상선의 취약성이 극명히 드러난 사례다. 기관실 피격으로 추진력 상실 후 표류한 점은 선박의 생존성 설계와 대응 매뉴얼의 중요성을 시사한다.</p></div>`,
      tags: ["MKD_Vyom", "Vessel_Attack", "Gulf_of_Oman", "Crew_Rescue", "Hormuz_Crisis"],
      link: "https://www.vesseltracker.com/en/news/vessels.html",
      coords: [58.0, 23.8],
      location: "Gulf of Oman"
    },
    {
      type: "news",
      title: "VLCC Freight Rates Hit All-Time High $423,736/Day Amid Hormuz Crisis",
      source: "Windward",
      sourceMeta: "windward.ai · 2026-03-03",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>호르무즈 해협 위기로 인해 초대형유조선(VLCC) 운임이 3월 3일 역사적 최고치인 일일 $423,736에 도달했다. 이는 2월 28일 대비 94% 상승한 수치다. 약 27척의 유조선이 아라비아해에서 목적지 없이 대기 중이며, 보험사들이 전쟁위험 보험을 취소하면서 선주들의 경제적 리스크가 극대화됐다.</p><h3>Key Quotes</h3><p><li>"VLCC freight rates hit an all-time high of $423,736 per day, up 94%" (VLCC 운임 사상 최고치, 94% 상승)</li><li>"27 tankers carrying 12 million barrels are in transit without confirmed destinations" (27척 유조선, 1200만 배럴 적재한 채 대기)</li></p><h3>Technical Insights</h3><p>해상보험 시장의 전쟁위험 보험 취소가 실질적인 해협 폐쇄 효과를 만들어낸 사례다. Cape of Good Hope 우회항로로 10~14일 추가 소요된다.</p></div>`,
      tags: ["VLCC", "Freight_Rate", "Oil_Market", "War_Risk_Insurance", "Hormuz_Crisis"],
      link: "https://windward.ai/blog/march-2-iran-war-maritime-intelligence-daily/",
      coords: [56.27, 26.56],
      location: "Strait of Hormuz"
    }
  ]
});

addEvents({
  "2026-03-04": [
    {
      type: "accident",
      title: "Container Ship Safeen Prestige Hit by Missile in Strait of Hormuz",
      source: "Seatrade Maritime",
      sourceMeta: "seatrade-maritime.com · 2026-03-04",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>몰타 국적 컨테이너 피더선 Safeen Prestige(1,740TEU)가 3월 4일 호르무즈 해협에서 미사일 피격을 받아 기관실 화재가 발생했다. 24명 전원이 퇴선하여 오만 해군에 구조되었다. 호르무즈 위기 이후 첫 컨테이너선 피해 사례이며, 약 470,000 TEU가 해협 서쪽에 갇혀 있다.</p><h3>Key Quotes</h3><p><li>"Safeen Prestige is the first container ship casualty in the Strait of Hormuz" (첫 컨테이너선 피해)</li><li>"138-147 container ships totalling 470,000 TEU are trapped" (47만 TEU 컨테이너선이 갇힘)</li></p><h3>Technical Insights</h3><p>3월 4일 해협 통과 선박 수가 5척으로 급감했으며, GPS 재밍 44개 구역과 AIS 거부 92개 구역이 탐지되어 항법 안전에 심각한 위협이 되고 있다.</p></div>`,
      tags: ["Safeen_Prestige", "Container_Ship", "Missile_Strike", "Hormuz", "IRGC"],
      link: "https://www.seatrade-maritime.com/containers/container-ship-hit-in-strait-of-hormuz-nearly-150-vessels-trapped",
      coords: [56.30, 26.50],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "US Navy Submarine Sinks Iranian Frigate IRIS Dena South of Sri Lanka",
      source: "Windward",
      sourceMeta: "windward.ai · 2026-03-04",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>3월 4일 미 해군 잠수함이 스리랑카 남방 40해리에서 이란 프리깃함 IRIS Dena를 어뢰로 격침시켰다. 인도 해군 훈련 참가 후 귀항 중이었으며, 스리랑카 군이 일부 승조원을 구조했다. 해상 분쟁이 인도양으로 확대되었음을 의미한다.</p><h3>Key Quotes</h3><p><li>"The strike extends maritime security risk into the Indian Ocean theater" (인도양으로의 지리적 확전)</li></p><h3>Technical Insights</h3><p>국제 해군 훈련 참가 후 귀항 중인 군함이 공해상에서 격침된 것은 전례 없는 사건으로, 글로벌 해운 경로 전체의 안보 리스크 재평가가 필요하다.</p></div>`,
      tags: ["IRIS_Dena", "US_Navy", "Submarine", "Indian_Ocean", "Iran_War"],
      link: "https://windward.ai/blog/march-5-iran-war-maritime-intelligence-daily/",
      coords: [80.50, 5.50],
      location: "South of Sri Lanka"
    }
  ]
});

addEvents({
  "2026-03-05": [
    {
      type: "accident",
      title: "Oil Tanker Sonangol Namibe Breached Near Kuwait, Oil Spill Reported",
      source: "VesselTracker",
      sourceMeta: "vesseltracker.com · 2026-03-05",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>유조선 Sonangol Namibe가 3월 5일 이라크 Khor al Zubair 항 인근에서 폭발에 의해 선체가 관통되었다. 기름 유출이 발생하여 환경 피해 우려가 커지고 있다. 현 분쟁에서 최북단 선박 공격 사례다.</p><h3>Key Quotes</h3><p><li>"The attack marks the northernmost vessel attack during the current conflict" (현 분쟁 중 최북단 선박 공격)</li></p><h3>Technical Insights</h3><p>정박 중인 유조선이 피격된 것은 항만 내부까지 위협이 확산되었음을 의미한다. 소형 선박이 공격 후 이탈한 것으로 보아 자폭형 드론보트 공격 가능성이 있다.</p></div>`,
      tags: ["Sonangol_Namibe", "Oil_Spill", "Kuwait", "Tanker_Attack", "Hormuz_Crisis"],
      link: "https://www.vesseltracker.com/en/news/vessels.html",
      coords: [48.85, 29.57],
      location: "Khor al Zubair, Kuwait"
    },
    {
      type: "news",
      title: "750 Ships Trapped as Iran War Triggers Container Shipping Crisis",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-05",
      image: "https://gcaptain.com/wp-content/uploads/2026/02/2026-02-28T165609Z_132325647_RC29U4AYFESH_RTRMADP_3_IRAN-CRISIS-SHIPPING.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>Ocean Network Express CEO Jeremy Nixon에 따르면 약 750척의 선박이 호르무즈 해협 폐쇄로 갇혀 있으며, 그 중 절반은 걸프만 내부, 절반은 진입 중이었다. 약 100척이 컨테이너선이다. 보험사들이 보험 인수를 거부하고 연료비가 급등하면서 대부분의 해운사가 중동행 화물 예약을 중단했다.</p><h3>Key Quotes</h3><p><li>"About 750 ships caught up in what was effectively the closure of Hormuz" (약 750척이 호르무즈 폐쇄에 갇힘)</li><li>"What we are seeing now is going to define the market in 2026" (현 상황이 2026년 시장을 규정할 것)</li></p><h3>Technical Insights</h3><p>컨테이너선 과잉공급 상황이 일시에 공급 부족으로 전환된 것은 해운 시장의 극단적 변동성을 보여준다. 팬데믹 수준의 물류 혼란이 재현될 수 있다.</p></div>`,
      tags: ["Container_Crisis", "750_Ships", "Hormuz", "ONE", "Supply_Chain"],
      link: "https://gcaptain.com/iran-conflict-container-shipping-crisis-hormuz/",
      coords: [56.27, 26.56],
      location: "Strait of Hormuz"
    }
  ]
});

addEvents({
  "2026-03-06": [
    {
      type: "accident",
      title: "UAE Salvage Tug Mussafah 2 Hit by Missiles, 8 Crew Feared Dead",
      source: "DefconAlerts",
      sourceMeta: "defconalerts.com · 2026-03-06",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-04T190201Z_330648636_RC20XJA5SWBN_RTRMADP_3_IRAN-CRISIS-INSURANCE.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>UAE 구난예인선 Mussafah 2호가 3월 6일 Safeen Prestige 지원을 위해 출항하던 중 미사일 2발에 피격되어 8명의 승조원 전원이 사망한 것으로 추정된다. 분쟁 시작 이후 최소 13척의 상선이 공격을 받았으며, 총 사망자 수가 증가하고 있다.</p><h3>Key Quotes</h3><p><li>"A UAE salvage tug was struck by two missiles, all 8 crew feared dead" (UAE 구난예인선 피격, 8명 전원 사망 추정)</li><li>"At least 13 commercial vessels attacked since February 28" (2월 28일 이후 최소 13척 상선 피격)</li></p><h3>Technical Insights</h3><p>구난 작업 중인 선박에 대한 공격은 SAR/구난 작전의 안전을 근본적으로 위협한다. SOLAS 정신에 정면으로 반하며, 향후 분쟁 해역에서의 해난구조 프로토콜 재검토가 불가피하다.</p></div>`,
      tags: ["Mussafah_2", "Salvage_Tug", "Missile_Strike", "Crew_Killed", "Hormuz_Crisis"],
      link: "https://www.defconalerts.com/p/maritime-security-digest-february",
      coords: [56.30, 26.40],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "US Navy Sinks Over 30 Iranian Ships Including Drone Carrier",
      source: "Euronews",
      sourceMeta: "euronews.com · 2026-03-06",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>미 해군이 분쟁 개시 이후 30척 이상의 이란 군함을 격침시켰다. 2차대전 항공모함 규모의 이란 드론 모함도 포함된다. 동시에 B-2 스텔스 폭격기가 이란 내부의 탄도미사일 발사대에 관통탄을 투하했다.</p><h3>Key Quotes</h3><p><li>"The US Navy has sunk more than 30 Iranian ships over the past week" (미 해군 이란 군함 30척 이상 격침)</li><li>"As we speak, it is on fire — roughly the size of a WWII aircraft carrier" (현재 불타고 있으며 2차대전 항공모함 규모)</li></p><h3>Technical Insights</h3><p>이란 해군 전력의 대규모 손실은 페르시아만 해상 세력 균형을 근본적으로 변화시킨다. 드론 모함 격침은 해상 무인기 운용 플랫폼의 생존성 설계가 중요해질 것을 시사한다.</p></div>`,
      tags: ["US_Navy", "Iran_Navy", "Ship_Sinking", "Drone_Carrier", "Epic_Fury"],
      link: "https://www.euronews.com/2026/03/06/more-than-30-of-irans-ships-sunk-since-start-of-conflict-as-strikes-on-tehran-intensify-us",
      coords: [56.28, 27.18],
      location: "Bandar Abbas, Iran"
    }
  ]
});

addEvents({
  "2026-03-07": [
    {
      type: "news",
      title: "Chinese Bulk Carriers Signal Ownership to Pass Through Hormuz",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-07",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>중국 소유 벌크선 Sino Ocean호가 AIS 목적지 신호를 "CHINA OWNER_ALL CREW"로 변경하고 호르무즈 해협을 통과했다. 이번 주 두 번째 사례로, Iron Maiden호도 "CHINA OWNER"로 신호를 변경하며 오만 해안선을 따라 통과했다. 중국이 이란과 자국 선박의 안전 통과를 위한 협상을 진행 중인 것으로 알려졌다.</p><h3>Key Quotes</h3><p><li>"The vessel broadcast its destination signal as CHINA OWNER_ALL CREW as it traversed the chokepoint" (중국 소유 전원 중국인 승조원으로 신호 변경)</li><li>"If they go through without incident, this might encourage other owners to take the risk" (무사 통과 시 다른 선주들도 위험을 감수할 수 있음)</li></p><h3>Technical Insights</h3><p>AIS 목적지 필드를 국적 표시 용도로 사용하는 것은 비표준적 활용이지만, 분쟁 해역에서의 생존 전략으로 부상했다. 중국의 별도 안전 통과 협상은 향후 해상 통행권의 국가별 차등화라는 새로운 문제를 야기할 수 있다.</p></div>`,
      tags: ["China", "AIS", "Bulk_Carrier", "Hormuz", "Safe_Passage"],
      link: "https://gcaptain.com/second-bulk-carrier-claiming-to-be-chinese-passes-through-hormuz/",
      coords: [56.27, 26.56],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Liberty-Class Autonomous Ship Construction Begins at Conrad Shipyard",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-07",
      image: "https://www.navalnews.com/wp-content/uploads/2026/02/BWA-Liberty-class-1024x639.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>Blue Water Autonomy사가 미 해군용 Liberty급 자율운항선 건조를 루이지애나주 Conrad Shipyard에서 시작했다. Damen과 공동 설계한 이 190피트(58m) 강선은 10,000해리 이상의 항속거리와 150톤 이상의 탑재 능력을 갖추며, 연내 첫 선박 완성을 목표로 한다.</p><h3>Key Quotes</h3><p><li>"Building autonomous ships designed from the start for long-duration operations and repeat production" (장기 운용과 반복 생산을 위한 자율운항선)</li><li>"A modern take on an old idea: building capable ships quickly and at scale" (빠르고 대량 건조의 현대적 접근)</li></p><h3>Technical Insights</h3><p>Liberty급은 Damen의 Axe Bow 선형을 기반으로 내부를 완전히 무인화 설계했다. HVAC, 거주구역 등 유인 시스템을 제거하여 효율적 배치와 빠른 건조가 가능하다. '처음부터 무인으로 설계(born unmanned)' 접근법의 대표 사례다.</p></div>`,
      tags: ["Liberty_Class", "Blue_Water_Autonomy", "Damen", "US_Navy", "Autonomous_Ship"],
      link: "https://www.navalnews.com/naval-news/2026/02/video-blue-water-autonomy-introduces-liberty-class-autonomous-ship/",
      coords: [-91.19, 29.69],
      location: "Conrad Shipyard, Louisiana"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-06
addEvents({
  "2026-03-06": [
    {
      type: "news",
      title: "Samsung Heavy Industries Books GTT Tank Design for 180,000 cbm LNG Carrier",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/02/LNG-vessel-Source-GTT.jpg?image-crop-positioner-ts=1771505165",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>삼성중공업(SHI)이 2026년 1분기에 프랑스의 가스트랑스포트&테크니가즈(GTT)로부터 LNG 운반선의 극저온 탱크 설계 용역을 발주했다. GTT는 유럽 선박 소유사를 대신하여 총 18만 입방미터 용량의 극저온 탱크를 설계하게 되며, Mark III Flex 막형 격납 시스템을 적용할 예정이다. 해당 선박은 2028년 완성 예정이며, 이는 GTT가 한화오션과 체결한 7척의 LNG 운반선 계약에 이어진 추가 수주로 의미가 있다. 이 계약은 세계 LNG 해운 산업의 기술 혁신과 친환경 에너지 운송 인프라 확충을 보여주는 사례이다.</p><h3>Key Quotes</h3><p><li>"GTT secured in the first quarter of 2026 an order from Samsung Heavy Industries for the tank design of one new LNG vessel on behalf of a European ship-owner." (GTT는 2026년 1분기에 삼성중공업으로부터 유럽 선주를 대신하여 새로운 LNG 운반선의 탱크 설계 용역을 확보했다.)</li></p><p><li>"The tanks will be fitted with GTT's Mark III Flex membrane containment system, with the delivery of the vessel expected in 2028." (극저온 탱크는 GTT의 Mark III Flex 막형 격납 시스템을 장착할 예정이며, 선박 인도는 2028년으로 예상된다.)</li></p><h3>Technical Insights</h3><p>LNG 운반선의 극저온 탱크 설계는 해양 산업에서 가장 기술 집약적인 분야 중 하나이며, GTT의 Mark III Flex 시스템은 고압 및 저온 환경에서의 안전성과 효율성을 극대화하는 첨단 기술이다. 18만 입방미터급 대형 LNG 운반선은 국제 해사기구(IMO)의 국제해사안전기본규칙(SOLAS)과 극저온 가스운반선 규칙(IGC Code)을 충족해야 하며, 이러한 설계 표준 준수는 해상 운송의 안전성 확보에 필수적이다. 지속적인 에너지 전환 기조 속에서 LNG 해운의 수요가 증가하고 있으며, 삼성중공업과 GTT 같은 선도 기업들의 기술 협력은 해양 산업의 혁신과 글로벌 경쟁력 강화에 중요한 역할을 한다.</p></div>`,
      tags: ["LNG Carrier","Tank Design","Samsung Heavy Industries","GTT","Maritime Technology"],
      link: "https://www.offshore-energy.biz/samsung-heavy-industries-books-french-firms-tank-design-for-new-lng-vessel/",
      coords: [127.0016,37.5665],
      location: "South Korea"
    },
    {
      type: "news",
      title: "Equinor Approved for North Sea Drilling Operations Using Odfjell Drilling-Managed Deepsea Bollsta Rig",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/05/Deepsea-Bollsta.jpg?image-crop-positioner-ts=1747121839",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>노르웨이 국영 에너지 기업 에퀴노르(Equinor)가 노르웨이 대륙붕(NCS)에서의 시추 작업에 대한 승인을 획득했으며, 이는 노던 오션(Northern Ocean)이 소유하고 오드펠 드릴링(Odfjell Drilling)이 관리하는 준침수식 굴착정에서 수행될 예정이다. 노르웨이 해양산업청(Havtil)은 요한 스베르드루프(Johan Sverdrup) 유전에서의 생산 시추, 완성, 임시 마개 및 작업 오버홀을 위해 딥씨 볼스타(Deepsea Bollsta) 굴착정 사용을 승인했다. 본 굴착정은 2019년 건조된 모스 CS60E 설계의 6세대 준침수식 굴착정으로, 수심 3,000미터까지 운영 가능하며 8개 井의 프로그램 완성을 위해 계약이 연장되었다. 에퀴노르는 42.62% 지분을 보유한 운영사이며, 아커 BP(31.6%), 페트로(17.36%), 토탈에너지스 EP 노르게(8.44%)가 파트너로 참여한다.</p><h3>Key Quotes</h3><p><li>"The Norwegian Ocean Industry Authority (Havtil) has granted Equinor consent to use the Deepsea Bollsta rig for production drilling, completion, temporary plugging, and workover on the Johan Sverdrup field." (노르웨이 해양산업청이 요한 스베르드루프 유전에서의 생산 시추, 완성, 임시 마개 및 작업 오버홀을 위해 딥씨 볼스타 굴착정 사용을 승인했다)</li></p><p><li>"The Deepsea Bollsta sixth-generation semi-submersible rig of Moss CS60E design can operate in both benign and harsh environments at water depths of up to 3,000 meters." (딥씨 볼스타는 모스 CS60E 설계의 6세대 준침수식 굴착정으로 수심 3,000미터까지 양호한 환경과 악조건 환경 모두에서 운영 가능하다)</li></p><h3>Technical Insights</h3><p>북해 요한 스베르드루프 유전의 8개 井 프로그램은 수심 110-120미터의 얕은 해역 조건에서 모스 CS60E 설계의 6세대 준침수식 굴착정을 활용하여 장기 생산 유지 작업을 수행하는 전형적인 사례이다. 2년의 기본 계약(2025년 8월 31일 시작)과 추가 1년 옵션은 해양 에너지 산업의 변동성 있는 작업 환경에서의 유연한 자산 관리 전략을 반영한다. 오드펠 드릴링의 굴착정 관리 기술과 노던 오션의 자산 소유 구조는 북해와 같은 성숙한 유전 개발 지역에서의 효율적인 운영 모델을 제시하며, 해양 엔지니어 관점에서 이러한 준침수식 구조물의 계류, 동적 위치 제어 및 악천후 안전 관리가 핵심 기술 요소임을 시사한다.</p></div>`,
      tags: ["North Sea","Equinor","Odfjell Drilling","Johan Sverdrup","Semi-submersible Rig"],
      link: "https://www.offshore-energy.biz/green-light-for-north-sea-drilling-ops-with-odfjell-drilling-managed-rig/",
      coords: [2,58.8],
      location: "North Sea (Norwegian Continental Shelf)"
    },
    {
      type: "news",
      title: "K-Line Establishes Ship Management Holdings Company for Integrated Group Operations",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/03/K-Line-sets-up-entity-to-oversee-all-of-its-ship-management-companies.png?image-crop-positioner-ts=1772790353",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>일본의 대형 해운사 가와사키 긴센 카이샤(K-Line)가 산하의 모든 선박관리회사를 감독하기 위한 중간지주회사인 K-Line Ship Management Holdings(KLSM-H)를 설립했다. 이 회사는 2026년 4월 1일부터 운영을 시작하며, 환경규제 준수 및 기술혁신 등의 도전 과제에 신속하고 집단적으로 대응할 수 있는 통합 구조를 구축하는 것을 목표로 한다. K-Line은 이번 조직개편을 통해 각 선박관리회사의 현장 능력과 전문성을 바탕으로 안전성 항해와 운송 서비스 품질을 지속적으로 개선할 계획이다. KLSM-H는 그룹 전체의 관리 표준을 수립하여 선박관리 품질을 향상시키고 안정화하는 데 중점을 둘 것이다.</p><h3>Key Quotes</h3><p><li>"By further strengthening the expertise it has been developing for each ship type, K-LINE will enhance the management structure to enable the entire Group to more flexibly utilize management resources (human resources, data and know-how), thereby strengthening the management oversight of ship management operations and further enhancing their sophistication" (각 선박 유형별로 개발해온 전문성을 강화함으로써, K-Line은 전체 그룹이 경영자원(인적자원, 데이터 및 노하우)을 더욱 유연하게 활용할 수 있도록 관리 구조를 개선하고, 선박관리 운영에 대한 감시를 강화하며 그 정교성을 한층 높일 것임)</li></p><h3>Technical Insights</h3><p>K-Line의 이번 선박관리 조직 통합은 해운산업의 디지털화 및 자동화 추세에 대응하기 위한 전략적 조치로 평가된다. 특히 환경규제 준수(IMO 2030/2050 탄소중립 규정)와 기술혁신을 명시적으로 강조한 점은 해운업계가 직면한 에너지효율 설계지수(EEDI) 규제 및 선박 자동화 기술 도입의 중요성을 반영한다. 그룹 차원의 통합 데이터 관리와 노하우 공유는 선박 운영 최적화, 안전 항해 기준의 일관성 유지, 그리고 향후 자율운항선박(MASS) 도입 시 필수적인 표준화된 운영 프로토콜 구축에 핵심적 역할을 할 것으로 예상된다.</p></div>`,
      tags: ["K-Line","Ship Management","Corporate Structure","Organizational Strategy"],
      link: "https://www.offshore-energy.biz/k-line-sets-up-entity-to-oversee-all-of-its-ship-management-companies/",
      coords: [139.7673,35.6762],
      location: "Tokyo, Japan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-26
addEvents({
  "2026-02-26": [
    {
      type: "accident",
      title: "Crude Oil Spill at Louisiana Offshore Oil Port (LOOP) - 31,500 Gallons Discharged",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-08",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Loop-oil-spill-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>미국 루이지애나 석유하역항(LOOP)에서 2월 26일 발생한 원유 유출 사건으로 미 해안경비대(USCC), 루이지애나 주정부, LOOP가 통합지휘부를 구성하여 대응 중이다. 해상 기계 결함으로 인해 약 31,500갤런(750배럴)의 원유가 유출되었으며, 3월 7일 현재 27,888갤런(664배럴)을 회수했다. 464명의 인원, 60척의 선박, 28,300피트의 방유 및 회수 부스 등 대규모 자원이 투입되었으며, 항공 감시와 환경 모니터링을 병행하고 있다. LOOP는 미국 유일의 초대형유조선(VLCC) 전용 심해항으로서 국가적 원유 수입 및 저장 인프라의 핵심 시설이다.</p><h3>Key Quotes</h3><p><li>"The response includes approximately 464 personnel, 60 vessels engaged in cleanup operations, and 28,300 feet of protective and recovery boom deployed in affected areas." </li><br>(대응 작업에 약 464명의 인원, 정화 작업에 참여한 60척의 선박, 영향받은 지역에 배치된 28,300피트의 방유 및 회수 부스가 포함되어 있다.)</p><p><li>"LOOP, located about 18 miles offshore of Louisiana, operates the only deepwater U.S. port capable of handling fully loaded Very Large Crude Carriers (VLCCs) and serves as a critical hub for the nation's crude oil import and storage infrastructure."</li><br>(루이지애나 해안에서 약 18마일 떨어진 LOOP는 완전히 적재된 초대형유조선(VLCC)을 처리할 수 있는 미국 유일의 심해항으로, 국가의 원유 수입 및 저장 인프라의 핵심 허브 역할을 한다.)</p><h3>Technical Insights</h3><p>LOOP 시설의 해상 기계 결함으로 인한 원유 유출 사건은 대규모 석유 하역 작업에서의 장비 유지보수 및 예방적 정비의 중요성을 재강조한다. 특히 VLCC 전용 심해항의 경우 기상 악화, 해상 운동, 고압 시스템 등 고위험 요소가 많아 정기적인 안전 감사와 자동화된 결함 감지 시스템 도입이 필수적이다. IMO MARPOL 협약 및 OPA 90(미국 석유법)에 따른 엄격한 유출 방지 기준 준수와 함께, AI 기반 상태 모니터링 시스템의 도입으로 기계 결함을 조기에 감지하고 유출 위험을 최소화할 수 있을 것으로 예상된다. 또한 적절한 공급선 관리와 정기적인 제3자 감시를 통해 심해항 운영의 안전성과 신뢰성을 강화해야 한다.</p></div>`,
      tags: ["Oil Spill","Environmental Incident","LOOP","Gulf of Mexico","Mechanical Failure"],
      link: "https://gcaptain.com/crude-oil-spill-draws-large-response-at-nations-only-deepwater-vlcc-port/",
      coords: [-90.3,28.9],
      location: "Grand Isle, Louisiana - Gulf of Mexico"
    },
    {
      type: "accident",
      title: "Louisiana Offshore Oil Port Crude Oil Spill - Recovery and Cleanup Underway",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-08",
      image: "https://images.marinelink.com/images/maritime/w800/source-168703.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>루이지애나 해상유전지구(LOOP) 근처에서 2월 26일 보고된 원유 유출 사고에 대해 미국 해안경비대(USCG), 루이지애나 유류유출조정사무소(LOSCO), 루이지애나 해상유류항만(LOOP)으로 구성된 통합지휘소가 복구 및 정제 작업을 진행 중이다. 3월 7일 현재 약 464명의 대응 인원과 60척의 선박이 투입되었으며, 약 31,500갤런(750배럴)의 원유가 유출되었고 이 중 27,888갤런(664배럴)이 회수되었다. 유출원은 격리되었으며, 환경 영향 평가가 진행 중이다.</p><h3>Key Quotes</h3><br><li>"A Unified Command, consisting of the U.S. Coast Guard, the Louisiana Oil Spill Coordinator's Office (LOSCO) and the Louisiana Offshore Oil Port (LOOP), continues its recovery and cleanup efforts" (미국 해안경비대, 루이지애나 유류유출조정사무소, 루이지애나 해상유류항만으로 구성된 통합지휘소가 복구 및 정제 작업을 계속 진행 중이다)</li></p><p><li>"An estimated 31,500 gallons (750 barrels) of crude oil was discharged, of which an estimated 27,888 gallons (664 barrels) have been recovered" (약 31,500갤런의 원유가 유출되었으며, 이 중 약 27,888갤런이 회수되었다)</li></p><h3>Technical Insights</h3><br>해상유전 운영시설에서의 원유 유출 사건은 해양 환경 보호 및 안전 규제의 중요성을 강조한다. 28,300피트의 방어 및 수거 붐(boom) 배치와 60척의 선박을 동원한 다중 계층 대응 체계는 대규모 해양 오염 사건에 대한 효과적인 대응 프로토콜을 보여준다. 해안경비대와 환경부 간의 협력적 통합지휘 구조는 IMO의 해양오염방지협약(MARPOL)과 국제해사기구의 오염대응 지침에 부합하며, 향후 자율운항선박(MASS) 시대에도 환경 사고 대응 체계의 표준이 될 것으로 예상된다.</p></div>`,
      tags: ["Oil Spill","Environmental Incident","Louisiana","USCG Response","Cleanup Operations"],
      link: "https://www.marinelink.com/news/cleanup-louisiana-oil-spill-underway-536668",
      coords: [-90.3,28.8],
      location: "Louisiana Offshore Oil Port (LOOP), Louisiana"
    }
  ]
});

// Auto-collected: 2026-03-09
addEvents({
  "2026-03-09": [
    {
      type: "accident",
      title: "Livestock Carrier North Star 1 Catches Fire at Brazilian Port",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-09",
      image: "https://images.marinelink.com/images/maritime/w800/source-social-168712.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>파나마 국적의 축산 운반선 North Star 1호가 2026년 3월 3일 브라질 상파울루 주의 사오세바스찬 항에서 화재 사건을 발생시켰다. 선박에 탑승한 28명의 선원 중 일부가 연기 흡입으로 인한 의료 처치를 받았으며, 터키로 향하던 2,600마리의 소가 모두 하선되었다. 화재는 축산 사료를 보관하는 창고에서 시작된 것으로 보고되었다. 이 사건은 축산 운반선의 구조적 문제와 해상 화재의 위험성을 다시 한 번 강조하게 되었으며, 국제해사기구(IMO)에 대한 규제 강화 요청이 이어지고 있다.</p><h3>Key Quotes</h3><p><li>"The incident is a strong reminder of the dangers of fire at sea, and especially the risks of fire on livestock carriers where there is no safe way to evacuate the animals should a fire break out and get out of control at sea" (해상에서의 화재 위험, 특히 축산 운반선에서 화재가 발생하고 통제 불능 상태가 되었을 때 동물들을 안전하게 대피시킬 방법이 없다는 점을 강력히 상기시켜 준다)</li></p><p><li>"When things go badly and the crew need to evacuate the animals are all left onboard to perish. The 'lucky' ones die first." (상황이 악화되고 승무원들이 대피해야 할 때, 동물들은 모두 선내에 남겨져 죽게 된다)</li></p><p><li>"This leaves the question, how many of these ships are firetraps? How many fires occur that are not reported?" (이는 이러한 선박들 중 몇 척이 화재 위험에 노출된 구조인지, 보고되지 않은 화재가 몇 건이나 되는지에 대한 의문을 제기한다)</li></p><h3>Technical Insights</h3><p>축산 운반선의 화재 안전 문제는 해사산업의 가장 취약한 부분 중 하나로 지적되고 있다. 현재 축산 운반선은 동물 대피 장비를 호스 외에 거의 보유하지 않으며, 특히 사료 보관 창고에서의 자발적 발화 위험성이 높다. 1980년 Farid Fares호 사건(40,000마리 이상 화상)부터 최근 2026년 North Star 1호 사건까지 수십 년간 반복되는 재해는 국제해사기구(IMO)의 강제적 안전 규정 부재를 드러낸다. 호주 수의사 Dr. Lynn Simpson의 증언에서 보듯이, 선상 화재 경보가 빈번하게 울리지만 대부분 언론에 보도되지 않는 적정 보고 체계의 부재도 문제로, 2024년 36개 기관의 IMO 서한 제출은 축산 운반선의 국제 강제 규정 도입이 시급함을 보여준다.</p></div>`,
      tags: ["Fire","Livestock Carrier","São Sebastião","Panama-flagged","Crew Safety"],
      link: "https://www.marinelink.com/news/livestock-carrier-catches-fire-brazil-536675",
      coords: [-45.4136,-23.806],
      location: "Port of São Sebastião, Brazil"
    }
  ]
});

// Auto-collected: 2026-03-08
addEvents({
  "2026-03-08": [
    {
      type: "accident",
      title: "Coast Guard Aviation Survival Technician Dies from Rescue Operation Injuries",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-08",
      image: "https://images.marinelink.com/images/maritime/w800/source-168702.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2026년 3월 5일 미국 해안경비대 항공생존기술병 2급 타일러 재거스(Tyler Jaggers)가 구조 작전 중 입은 중상으로 인해 사망했습니다. 재거스는 오리건 서쪽 약 120해리 지점에서 상선 모미 애로우(Momi Arrow)의 의료 응급 상황에 대응하기 위해 MH-60 자이호크 헬기 승무원으로 활동하던 중 2월 27일 부상을 입었습니다. 아스토리아 항공기지에서 빅토리아 종합병원과 매디건 육군의료센터로 이송되었던 그는 결국 상처로 인해 사망했으며, 해안경비대는 그의 용맹함을 인정하여 명예 승진과 함께 항공비행 중 영웅적 행동에 수여되는 최고 군사훈장인 탁월비행십자장을 추서했습니다. 해안경비대는 현재 사건의 원인에 대한 조사를 진행 중입니다.</p><h3>Key Quotes</h3><p><li>"Aviation Survival Technician Jaggers represented the very best of our Service and the Aviation Rescue Swimmer community. He demonstrated extraordinary heroism in the face of danger, upholding the highest standards of courage and excellence for Coast Guard operations." </li><br>(항공생존기술병 재거스는 우리 부대와 항공구조수영사 공동체의 최고를 대표했으며, 위험에 직면하여 특별한 영웅주의를 보여주었고 해안경비대 작전의 최고 수준의 용기와 우수성을 유지했습니다.)</p><p><li>"We honor his selfless actions and unwavering devotion to our highest calling: to save others."</li><br>(우리는 그의 무사(無私)적 행동과 다른 사람들을 구하는 우리의 가장 숭고한 소명에 대한 흔들리지 않는 헌신을 경의를 표합니다.)</p><h3>Technical Insights</h3><p>본 사건은 해상 구조 작전 중 항공기 승무원의 안전 관리 및 위험 평가의 중요성을 강조합니다. MH-60 자이호크 헬기의 항공생존기술병은 극한의 기상 조건과 해상 환경에서 구조 작전을 수행하므로, 이러한 고위험 작업에 대한 표준화된 안전 프로토콜과 장비 개선이 지속적으로 필요합니다. 또한 해안경비대가 현재 진행 중인 사건 원인 조사는 향후 유사 사고 예방을 위한 절차 개선 및 인명 보호 강화 방안을 제시할 것으로 예상됩니다. 이러한 해상 구조 작전의 위험성은 국제해사기구(IMO)의 인명안전 규정 및 해상 안전 표준 수립에도 중요한 참고 사례가 될 수 있습니다.</p></div>`,
      tags: ["Coast Guard","Helicopter Rescue","Aviation Accident","Fatality","MH-60 Jayhawk"],
      link: "https://www.marinelink.com/news/coast-guard-announces-passing-petty-536667",
      coords: [-124.7149,48.3809],
      location: "Cape Flattery, Washington / Offshore Oregon"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-09
addEvents({
  "2026-03-09": [
    {
      type: "accident",
      title: "Livestock Carrier North Star 1 Catches Fire at Port of São Sebastião, Brazil",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-09",
      image: "https://images.marinelink.com/images/maritime/w800/source-social-168712.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>파나마 국적의 축산물 운반선 North Star 1호가 2026년 3월 3일 브라질 상 세바스티앙 항에서 정박 중 화재를 발생시켰다. 선상에 탑승한 28명의 승무원 중 일부가 연기 흡입으로 인한 의료 처치를 받았으며, 터키로 향하던 2,600마리의 소가 모두 상륙했다. 화재는 축산물 사료를 보관하던 식료품 창고에서 시작된 것으로 보도되었다. 이번 사건은 축산물 운반선의 화재 안전성 문제를 부각시켰으며, 국제해사기구(IMO)에 축산물 운반선에 대한 강제 국제규정 도입을 촉구하는 36개 단체의 연합서한이 제출된 상태이다.</p><h3>Key Quotes</h3><p><li>"The incident is a strong reminder of the dangers of fire at sea, and especially the risks of fire on livestock carriers where there is no safe way to evacuate the animals should a fire break out and get out of control at sea." (해상에서의 화재 위험, 특히 축산물 운반선에서 화재가 발생하여 통제 불능이 될 경우 동물을 대피시킬 안전한 방법이 없다는 점을 강조하는 증언)</li></p><p><li>"When things go badly and the crew need to evacuate the animals are all left onboard to perish. The 'lucky' ones die first." (상황이 악화되어 승무원이 대피할 때 동물들은 모두 선박에 남겨져 죽게 되며, '운이 좋은' 동물들이 먼저 죽는다는 의미)</li></p><h3>Technical Insights</h3><p>축산물 운반선의 화재 안전성은 해양산업의 중대한 미해결 과제로, 국제규정 부재로 인한 체계적인 위험 관리 부족이 문제다. 현재 축산물 운반선은 호스 외에 동물 대피용 생명 보존 장비를 갖추지 않아 화재 발생 시 선상 동물의 대량 폐사가 불가피한 상황이다. 축산물 운반선의 화재 빈도와 심각성을 고려하면, IMO 차원에서 SOLAS 협약 강화, 화재 감지 및 진화 시스템의 의무화, 정기적인 안전 감시 프로토콜 도입이 긴급히 필요하다. 특히 사료 저장 구역에 대한 자동 화재 진화 장치 설치 및 정기 점검 기준 수립이 해양 안전과 동물 복지 측면에서 모두 중요한 개선 사항으로 평가된다.</p></div>`,
      tags: ["Fire","Livestock Carrier","Port Accident","Brazil","Panama-flagged"],
      link: "https://www.marinelink.com/news/livestock-carrier-catches-fire-brazil-536675",
      coords: [-45.8267,-23.8041],
      location: "Port of São Sebastião, Brazil"
    }
  ]
});

// Auto-collected: 2026-02-26
addEvents({
  "2026-02-26": [
    {
      type: "accident",
      title: "Louisiana Offshore Oil Port Crude Oil Spill - Cleanup Underway",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-08",
      image: "https://images.marinelink.com/images/maritime/w800/source-168703.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>루이지애나 오일포트(LOOP) 근처에서 2월 26일 보고된 원유 유출 사건에 대해 미국해안경비대(USCG), 루이지애나주 유류유출조정관실(LOSCO), 루이지애나 해상석유항만(LOOP)으로 구성된 통합지휘부가 복구 및 정화 작업을 진행 중이다. 약 31,500갤런(750배럴)의 원유가 유출되었으며, 3월 7일 현재 약 27,888갤런(664배럴)이 회수되었다. 대응 활동에는 464명의 대응 인원, 60척의 선박, 28,300피트의 방제용 붐이 투입되었으며, 유출원은 이미 차단되었다. 루이지애나주 야생동물·수산부와 미국 어류·야생동물 관리국이 영향을 받은 조류를 모니터링하고 있다.</p><h3>Key Quotes</h3><br><li>"The Unified Command was officially established on February 27, 2026, to manage the spill's environmental impact." (통합지휘부는 2월 27일에 유출사고의 환경영향을 관리하기 위해 공식 설립되었다.)</li><br><li>"An estimated 31,500 gallons (750 barrels) of crude oil was discharged, of which an estimated 27,888 gallons (664 barrels) have been recovered." (약 31,500갤런의 원유가 유출되었으며, 이 중 약 27,888갤런이 회수되었다.)</li><br><li>"The source of the discharge has been secured." (유출원은 이미 차단되었다.)</li></p><h3>Technical Insights</h3><br>이번 사건은 해양 석유 시설 운영 중 발생한 대형 환경재해로, 신속한 통합지휘 체계 구축(2월 27일 설립)이 해양 오염사고 대응의 중요성을 보여준다. 464명의 대응 인원과 60척의 선박 투입, 28,300피트의 방제용 붐 배치 등 대규모 방제 작전은 국제해사기구(IMO)의 유류오염방지협약(MARPOL) 및 미국 석유오염법(OPA)의 준수 절차를 반영한다. 드론을 포함한 항공 감시 지원은 현대적 해양사고 대응 기술의 활용을 시사하며, 조류 피해 모니터링은 생태계 복원력 평가에 필수적이다. 향후 자율운항선박(MASS) 도입 시에도 유류 및 화학물질 운송 관련 안전 프로토콜이 더욱 강화되어야 할 것으로 예상된다.</p></div>`,
      tags: ["Oil Spill","Environmental Incident","USCG Response","Louisiana Offshore Oil Port"],
      link: "https://www.marinelink.com/news/cleanup-louisiana-oil-spill-underway-536668",
      coords: [-90.2453,28.9847],
      location: "Louisiana Offshore Oil Port, Gulf of Mexico"
    }
  ]
});

// Auto-collected: 2026-03-05
addEvents({
  "2026-03-05": [
    {
      type: "accident",
      title: "Coast Guard Petty Officer Tyler Jaggers Dies from Rescue Operation Injuries",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-08",
      image: "https://images.marinelink.com/images/maritime/w800/source-168702.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2026년 3월 5일 미국 해안경비대(USCG) 항공생존기술자 Tyler Jaggers 이등병관이 상업선박 Momi Arrow의 의료 응급상황에 대응하던 중 입은 중상으로 사망했습니다. 사건은 워싱턴주 Cape Flattery 서쪽 약 120해리 해상에서 발생한 구조작전 중 발생했으며, Jaggers는 Air Station Astoria의 MH-60 Jayhawk 헬리콥터 승무원으로 활동 중이었습니다. 부상 후 캐나다 Victoria General Hospital에서 초기 치료를 받은 후 미국 Tacoma의 Madigan Army Medical Center로 이송되었으나 결국 사망했습니다. 해안경비대는 그의 용맹성을 인정하여 전역 중 이등병관으로 승진시키고 항공비행 중 영웅주의에 대한 최고 훈장인 Distinguished Flying Cross를 수여했습니다. 해안경비대는 구조작전 중 발생한 부상의 원인에 대해 조사를 진행 중입니다.</p><h3>Key Quotes</h3><p><li>"Aviation Survival Technician Jaggers represented the very best of our Service and the Aviation Rescue Swimmer community," (항공생존기술자 Jaggers는 해안경비대와 항공구조수영 커뮤니티에서 최고를 대표했습니다)</li></p><p><li>"He demonstrated extraordinary heroism in the face of danger, upholding the highest standards of courage and excellence for Coast Guard operations." (그는 위험 속에서 비범한 영웅주의를 보여주었으며, 해안경비대 작전의 최고 기준인 용맹함과 우수성을 유지했습니다)</li></p><h3>Technical Insights</h3><p>항공구조작전(Aerial Rescue Operations)에서의 안전 프로토콜 강화 필요성이 대두되었습니다. MH-60 Jayhawk 헬리콥터의 호이스팅(hoisting) 작업 중 해상 위험 요소 - 파도, 바람, 선박의 움직임 등으로 인한 항공생존기술자의 부상 위험이 매우 높으며, 이러한 위험 상황에서의 안전 장비 및 절차 개선이 필수적입니다. 또한 해상 의료 응급상황 대응 시 선박과 헬리콥터 간 조율 강화, 안전거리 유지, 기상 조건 재평가 등 구조 작전 전 위험평가 프로세스 고도화가 산업 전반에 걸쳐 권장됩니다. 본 사건은 해상 구조작전의 본질적 위험성을 다시 한 번 일깨우는 계기가 되었으며, 국제해사기구(IMO)와 각국 해양 당국들이 구조작전 안전 기준 및 훈련 강화를 재검토할 필요가 있습니다.</p></div>`,
      tags: ["rescue operation","aviation accident","casualty","Coast Guard","MH-60 Jayhawk"],
      link: "https://www.marinelink.com/news/coast-guard-announces-passing-petty-536667",
      coords: [-124.7,48.4],
      location: "Cape Flattery, Washington / Offshore Oregon"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-09
addEvents({
  "2026-03-09": [
    {
      type: "accident",
      title: "Seafarer Deaths Rise in Hormuz Strait Amid Escalating Attacks on Merchant Shipping",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-09",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-04T190201Z_330648636_RC20XJA5SWBN_RTRMADP_3_IRAN-CRISIS-INSURANCE.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>호르무즈 해협에서 미국-이스라엘과 이란 간 분쟁이 2월 말 이후 급격히 확대되면서 상선에 대한 공격이 급증하고 있다. 영국해양무역작전부(UKMTO)에 따르면 2월 28일부터 3월 8일 사이 총 13건의 사건이 보고되었으며, 이 중 10건은 확인된 공격이다. 국제해사기구(IMO) 아르세니오 도밍게즈 사무총장은 이번 분쟁으로 최소 7명의 선원이 사망했으며 여러 명이 중상을 입었다고 발표했다. 도널드 트럼프 대통령은 상선들에게 호르무즈 해협을 통과할 것을 촉구했으나, 해운업계는 전 지구적 석유 공급량의 약 20%가 통과하는 이 해역의 심각한 안보 위협에 직면해 있다.</p><h3>Key Quotes</h3><p><li>"These ships should go through the Strait of Hormuz and show some guts, there's nothing to be afraid of… they have no Navy, we sunk all their ships." (상선들은 호르무즈 해협을 통과해야 하며 용기를 보여야 한다고 했으며, 두려워할 것이 없다고 주장하였으나 이는 선원들의 안전을 무시하는 발언으로 비판받음)</li></p><p><li>"Any attack on innocent seafarers or civilian shipping is unacceptable. These seafarers are simply carrying out their duties and performing an essential service to the global community." (무고한 선원들이나 민간 해운에 대한 공격은 받아들일 수 없으며, 선원들은 단지 자신의 의무를 수행하고 국제사회에 필수 서비스를 제공하고 있을 뿐이라는 점을 강조)</li></p><h3>Technical Insights</h3><p>호르무즈 해협은 글로벌 석유 교역량의 약 20%와 상당한 LNG 수출량이 통과하는 전략적으로 극히 중요한 해역으로, 현재 미사일 공격, 무인기 공격, 정체불명의 폭발 사건 등으로 인해 민간 해운에 심각한 위협이 발생하고 있다. UKMTO의 보고에 따르면 단 10일 간 10건의 확인된 공격이 있었으며, 이는 국제해사기구(IMO)의 선박 안전 기준 및 해상교통의 자유 원칙(SOLAS, COLREG)이 무력화될 위험성을 시사한다. 현재의 상황은 선박 보안 프로토콜의 강화, 통보식 항로 설정(Traffic Separation Schemes), 그리고 국제 해상보안 협력의 필요성을 재강조하고 있으며, 선박운영자들은 위험 관리 및 위기 상황 대응 절차를 긴급히 검토해야 한다. 또한 이 지역을 통과하는 상선들을 위한 국제적 차원의 해상 보안 호위 체계 강화가 시급한 상황이다.</p></div>`,
      tags: ["Hormuz Strait","merchant shipping attacks","casualties","maritime security","Iran conflict"],
      link: "https://gcaptain.com/trump-tells-ships-to-show-some-guts-in-hormuz-as-seafarer-death-toll-rises/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz, Persian Gulf"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-09
addEvents({
  "2026-03-09": [
    {
      type: "accident",
      title: "Trump Urges Ships Through Hormuz as Seafarer Deaths Rise from Escalating Attacks",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-09",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-04T190201Z_330648636_RC20XJA5SWBN_RTRMADP_3_IRAN-CRISIS-INSURANCE.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>호르무즈 해협에서 2월 말 이후 미국-이스라엘과 이란 간의 갈등 심화로 인한 상선 공격이 급증하고 있다. 영국 해사무역작전청(UKMTO) 자료에 따르면 2월 28일부터 3월 8일 사이 13건의 사건(확인된 공격 10건, 의심 활동 3건)이 발생했으며, 최소 7명의 선원이 피살되고 여러 명이 중상을 입었다. 트럼프 대통령은 선주들에게 해협 통항을 계속하라고 촉구했으나, 국제해사기구(IMO) 아르세니오 도밍게스 사무총장은 민간 선박과 선원에 대한 공격이 수용 불가능하다고 성명했다.</p><h3>Key Quotes</h3><p><li>"These ships should go through the Strait of Hormuz and show some guts, there's nothing to be afraid of… they have no Navy, we sunk all their ships." (이 선박들은 호르무즈 해협을 통과해야 하며 용기를 보여야 한다. 두려워할 것이 없다. 그들은 해군이 없고 우리가 모든 선박을 격침했다.)</li></p><p><li>"As I have said on numerous occasions, any attack on innocent seafarers or civilian shipping is unacceptable. These seafarers are simply carrying out their duties and performing an essential service to the global community." (여러 차례 언급했듯이, 무고한 선원이나 민간 선박에 대한 모든 공격은 수용 불가능하다. 이 선원들은 단순히 자신들의 의무를 수행하고 국제사회에 필수 서비스를 제공하고 있다.)</li></p><h3>Technical Insights</h3><p>호르무즈 해협은 전 세계 석유 운송량의 약 20%와 상당한 LNG 수출량을 담당하는 전략적 해상로로서, 단기간의 운영 중단도 에너지 시장과 글로벌 공급망에 광범위한 영향을 미칠 수 있다. 현재의 미사일·드론 공격 및 원인 불명의 폭발은 국제해사법의 핵심 원칙인 항해의 자유(Freedom of Navigation)를 심각하게 위반하고 있으며, 이는 IMO의 국제 해상안전 규정 강화와 중립 수역 보호 메커니즘 논의를 촉발하고 있다. 선주협회와 해운업계는 호르무즈 통과 선박에 대한 적극적인 군사 호위 제공, 해적 방지 수역(Anti-Piracy Zones) 설정 등의 실질적 보안 강화를 요구하고 있으며, 장기화될 경우 선박 우회 항로 선택으로 인한 운송 비용 상승과 배송 지연이 불가피할 것으로 예상된다.</p></div>`,
      tags: ["Strait of Hormuz","Persian Gulf","Maritime Security","Casualties","Armed Conflict"],
      link: "https://gcaptain.com/trump-tells-ships-to-show-some-guts-in-hormuz-as-seafarer-death-toll-rises/",
      coords: [56.2406,26.1367],
      location: "Strait of Hormuz, Persian Gulf"
    }
  ]
});

// ── Auto-Collected (Bot) ──


// ── 2026-03-10 ──
addEvents({
  "2026-03-10": [
    {
      type: "accident",
      title: "Large Barge Fire in Delaware Bay — Coast Guard Response",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-10",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 델라웨어 만에서 대형 바지선 화재 발생<br>• 미 해안경비대(USCG)가 현장 출동, 화재 진압 및 구조 작전 수행<br>• 인명 피해 여부와 화물 종류에 대한 조사 진행 중<br>• 해당 해역 일시 통항 제한 조치 시행<br>• 원인 규명을 위한 해안경비대 조사 개시</p><h3>Key Quotes</h3><p>• "Coast Guard is responding to a large barge fire in Delaware Bay" (해안경비대가 델라웨어 만 대형 바지선 화재에 대응 중)<br>• "The area has been temporarily restricted to vessel traffic" (해당 해역 선박 통항이 일시 제한됨)</p><h3>Technical Insights</h3><p>• 바지선 화재는 위험 화물 운송 시 화재 예방 시스템의 중요성을 환기<br>• 내수면/연안 바지선의 안전 기준 강화 필요성 제기<br>• 자율운항 바지선 도입 시 원격 화재 감지 및 자동 소화 시스템이 필수 요소</p></div>`,
      tags: ["barge fire","Delaware Bay","Coast Guard","maritime safety"],
      link: "https://gcaptain.com/coast-guard-responding-barge-fire-delaware-bay/",
      coords: [-75.2, 39.0],
      location: "Delaware Bay, USA"
    },
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Attacked in Strait of Hormuz — 3 Crew Missing",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-10",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 태국 벌크선 Mayuree Naree가 호르무즈 해협에서 공격 받음<br>• 3명의 선원이 실종 상태<br>• 이란-미국 긴장 고조 속 상선 피해 사례 증가<br>• 선박 기관실 상부에 포격으로 화재 발생<br>• 국제 해운업계, 호르무즈 해협 통과 위험도 최고 수준으로 경고</p><h3>Key Quotes</h3><p>• "Thai bulk carrier attacked in the Strait of Hormuz, three crew members remain missing" (태국 벌크선이 호르무즈 해협에서 공격받아 3명 실종)<br>• "The attack highlights the growing threat to commercial shipping in the region" (이번 공격은 해당 지역 상선 위협 증가를 부각)</p><h3>Technical Insights</h3><p>• 호르무즈 해협 분쟁으로 P&I 보험료 및 전쟁위험할증(War Risk Premium) 급등<br>• 선사들의 희망봉(Cape of Good Hope) 우회 항로 전환 가속화<br>• 선박 방호 기술(armored citadel, LRAD)의 상선 도입 논의 확대</p></div>`,
      tags: ["Hormuz Strait","ship attack","Thai bulk carrier","crew missing","war risk"],
      link: "https://www.marinelink.com/news/thai-bulk-carrier-attacked-hormuz/",
      coords: [56.3, 26.5],
      location: "Strait of Hormuz"
    }
  ]
});

// ── 2026-03-11 ──
addEvents({
  "2026-03-11": [
    {
      type: "accident",
      title: "Iran Warns of $200 Oil Amid Merchant Ship Attacks and Regional Conflict",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-11",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 국제유가 배럴당 200달러 돌파 가능성을 경고<br>• 걸프 지역 상선 공격이 지속되면서 글로벌 에너지 공급 불안 심화<br>• 호르무즈 해협 봉쇄로 전 세계 해상 석유 20% 통과 경로 차단<br>• 보험료 폭등으로 소형 선사 운항 중단 사례 발생<br>• 국제 에너지 시장 변동성 극대화</p><h3>Key Quotes</h3><p>• "Iran warns oil could hit $200 as conflict escalates" (이란이 분쟁 확대 시 유가 200달러 경고)<br>• "Merchant ships continue to face attacks in the Gulf region" (걸프 지역 상선 공격 지속)</p><h3>Technical Insights</h3><p>• 호르무즈 해협 봉쇄가 장기화될 경우 LNG 운반선 운임 사상 최고치 예상<br>• 대체 항로(수에즈→희망봉) 전환 시 운항 일수 10~14일 추가, 연료비 대폭 증가<br>• 자율운항선박의 무인 위험해역 통과 시나리오가 보험업계에서 재조명</p></div>`,
      tags: ["Iran","oil price","Hormuz","shipping crisis","war risk","energy"],
      link: "https://gcaptain.com/iran-warns-200-oil/",
      coords: [56.3, 26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Spirit of Discovery — Loss of Propulsion in Heavy Weather, Bay of Biscay (MAIB Report)",
      source: "MAIB / gov.uk",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2023년 11월 4일 크루즈선 Spirit of Discovery가 비스케이만 횡단 중 악천후로 추진력 상실<br>• 100명 이상 승객 부상, 8명 병원 이송, 1명 사망<br>• MAIB 조사 결과: 추진 장치(pod) 설계 결함이 주요 원인<br>• 해사청(MCA), 선급사, 제조사, 크루즈선사연합(CLIA)에 권고사항 제시<br>• 전자식 경사계 의무화, 의료 인력 확충, 악천후 시 가구 고정 강화 등 권고</p><h3>Key Quotes</h3><p>• "The passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay" (Spirit of Discovery가 비스케이만에서 악천후 중 추진력 상실)<br>• "Recommendations include electronic inclinometers for international carriage requirements" (국제 운송 기준에 전자식 경사계 포함 권고)</p><h3>Technical Insights</h3><p>• Pod 추진 시스템의 악천후 내구성 재검토 필요 — 이중화(redundancy) 설계 강화 논의<br>• IMO SOLAS 규정 초과 수준의 여객선 의료 대응 체계 구축 필요<br>• 실시간 경사각 모니터링은 자율운항 여객선에서도 핵심 안전 요소</p></div>`,
      tags: ["propulsion loss","heavy weather","Bay of Biscay","passenger vessel","MAIB","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-7.5, 47.5],
      location: "Bay of Biscay"
    },
    {
      type: "news",
      title: "Seafarers Have Little Confidence in Autonomous Ships — NTNU Global Survey (1,009 Respondents)",
      source: "NTNU / EurekAlert (AAAS)",
      sourceMeta: "eurekalert.org · 2026-03-11",
      image: "https://mediasvc.eurekalert.org/Api/v1/Multimedia/021f32f9-ac4f-443d-b16f-d13a4c9799c6/Rendition/low-res/Content/Public",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• NTNU 연구팀이 노르웨이 선장·항해사 1,009명 대상 세계 최대 규모 자율운항선 신뢰도 조사 수행<br>• 자율운항선박 안전 관련 12가지 핵심 과제 도출<br>• 최대 우려: "비상 상황 시 선내에 사람이 없으면 어떻게 하나"<br>• 2026년 가을 노르웨이 Lavik-Oppedal 구간 세계 최초 자율운항 페리 투입 예정<br>• 해기사들의 기량 퇴화(skill degradation) 및 자동화 의존 우려 강하게 표출</p><h3>Key Quotes</h3><p>• "Trust is the key to collaboration between people and systems" (신뢰는 인간과 시스템 협업의 핵심) — Asbjørn Lein Aalberg, NTNU<br>• "In waves of over 4 metres, I do not want to encounter an autonomous ship" (4m 이상 파도에서 자율운항선을 만나고 싶지 않다) — 익명 선장</p><h3>Technical Insights</h3><p>• MASS 도입에서 기술 완성도 못지않게 Human-System Trust가 핵심 변수<br>• NTNU Shore Control Lab의 Human-Centered Autonomy 연구가 IMO MASS 규정에 직접 영향<br>• 자율운항 페리 운용 시 비상 대응 인력 배치 기준이 규제 쟁점<br>• WMU Journal of Maritime Affairs 게재 (DOI: 10.1007/s13437-025-00401-9)</p></div>`,
      tags: ["autonomous ship","MASS","seafarer trust","NTNU","Norway","human factors","Shore Control"],
      link: "https://www.eurekalert.org/news-releases/1119638",
      coords: [6.15, 62.47],
      location: "Ålesund, Norway"
    },
    {
      type: "accident",
      title: "Swedish Coast Guard Boards Second Stateless Ship in a Week",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-11",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 스웨덴 해안경비대가 일주일 내 두 번째 무국적 선박을 임검<br>• 발트해에서 국적 불명 선박 증가 추세 — 안보 위협 우려<br>• 해저 인프라(해저케이블, 파이프라인) 보호 차원의 감시 강화 배경<br>• NATO 동맹국 간 발트해 해양안보 공조 확대</p><h3>Key Quotes</h3><p>• "Swedish Coast Guard has boarded the second stateless vessel in a week" (스웨덴 해안경비대, 일주일 내 두 번째 무국적 선박 임검)</p><h3>Technical Insights</h3><p>• 발트해 해저 인프라 파괴 사건 이후 무국적 선박에 대한 경계 수준 격상<br>• AIS 미작동 선박 자동 탐지 시스템이 자율운항 감시선에 적용 가능<br>• 해양 도메인 인식(Maritime Domain Awareness) 기술 수요 급증</p></div>`,
      tags: ["Sweden","Coast Guard","stateless ship","Baltic Sea","maritime security"],
      link: "https://gcaptain.com/swedish-coast-guard-boards-stateless-ship/",
      coords: [18.1, 59.3],
      location: "Baltic Sea, Sweden"
    },
    {
      type: "accident",
      title: "Coral Adventurer Grounding off Papua New Guinea — ATSB Preliminary Report",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-12",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호주 크루즈 탐험선 Coral Adventurer가 파푸아뉴기니 연안 산호초에 좌초<br>• ATSB(호주 교통안전국)가 예비 조사보고서 발표<br>• 수중 지형 데이터 부정확성이 좌초 원인으로 추정<br>• 승객 및 선원 전원 안전 대피 완료<br>• 환경 오염 최소화를 위한 연료 이송 작업 진행</p><h3>Key Quotes</h3><p>• "ATSB releases preliminary report on Coral Adventurer grounding" (ATSB 좌초 사건 예비보고서 발표)<br>• "Inaccurate hydrographic data may have contributed to the incident" (부정확한 수로 데이터가 사건에 기여했을 가능성)</p><h3>Technical Insights</h3><p>• 전자해도(ENC) 데이터 정확도가 탐험 크루즈 안전에 직결<br>• 자율운항선박의 수심 센서 + ECDIS 교차검증이 이런 사고 예방에 핵심<br>• 원격 해역의 수로 측량 데이터 업데이트 주기 개선 필요</p></div>`,
      tags: ["grounding","Papua New Guinea","ATSB","cruise vessel","coral reef"],
      link: "https://www.marinelink.com/news/coral-adventurer-grounding-png/",
      coords: [147.2, -6.0],
      location: "Papua New Guinea"
    }
  ]
});

// ── 2026-03-12 ──
addEvents({
  "2026-03-12": [
    {
      type: "news",
      title: "DIU and U.S. Navy Select Anduril for XL-AUV Program — Combat Autonomous Maritime Platform",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-12",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 국방혁신부(DIU)와 해군이 초대형 자율무인잠수정(XL-AUV) 프로그램 사업자로 Anduril 선정<br>• 전투용 자율 해양 플랫폼 개발이 핵심 목표<br>• Anduril의 Dive-LD 플랫폼 기반으로 장기간 무인 해저 작전 수행 능력 구현<br>• 미 해군의 분산형 해양 작전(Distributed Maritime Operations) 전략에 부합<br>• 상용 자율운항 기술의 군사 전환 가속화</p><h3>Key Quotes</h3><p>• "DIU and U.S. Navy select Anduril for the XL-AUV program" (DIU와 미 해군이 XL-AUV 프로그램에 Anduril 선정)<br>• "The program aims to field combat-capable autonomous underwater vehicles" (전투 능력을 갖춘 자율 수중 무인체 전력화 목표)</p><h3>Technical Insights</h3><p>• XL-AUV는 기뢰전, ISR, 대잠전에서 유인 잠수함 보완 역할 수행<br>• 장기간 해저 체류 시 에너지 관리 및 통신 두절 환경 자율 판단이 핵심 기술<br>• 민간 해양 자율운항 기술(MASS)이 군사 영역으로 확대되는 트렌드 확인<br>• IMO 규정과 군사 작전 요구사항 양립이 향후 규제 쟁점</p></div>`,
      tags: ["Anduril","XL-AUV","DIU","US Navy","autonomous underwater","defense"],
      link: "https://www.navalnews.com/naval-news/2026/03/diu-us-navy-anduril-xl-auv/",
      coords: [-77.0, 38.9],
      location: "Washington D.C., USA"
    },
    {
      type: "news",
      title: "Missile Attacks Define Strait of Hormuz Risks — Officials Warn",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-03-13",
      image: "",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협에서 미사일 공격이 상선 운항의 최대 위험 요인으로 부상<br>• 미국 관리들이 해당 해역 위험도가 사상 최고 수준이라고 경고<br>• 대형 유조선(VLCC) 및 LNG 운반선 통과 사실상 중단<br>• 보험업계, 호르무즈 통과 선박의 전쟁위험할증(WRP) 기록적 수준으로 인상<br>• 다국적 해군 호위 논의 본격화</p><h3>Key Quotes</h3><p>• "Missile attacks now define the risk calculus for transiting the Strait of Hormuz" (미사일 공격이 호르무즈 해협 통과 위험 계산의 핵심 변수)</p><h3>Technical Insights</h3><p>• 대함 미사일 위협으로 상선의 능동 방어 시스템 도입 논의 대두<br>• 자율운항 무인 화물선의 위험 해역 투입 시나리오가 보험·국방 양쪽에서 검토<br>• 호위선단(convoy) 방식은 걸프전 Earnest Will 작전의 현대화 버전</p></div>`,
      tags: ["Hormuz Strait","missile attack","shipping risk","war risk","tanker","naval escort"],
      link: "https://news.usni.org/2026/03/13/missile-attacks-hormuz-risks",
      coords: [56.3, 26.5],
      location: "Strait of Hormuz"
    }
  ]
});

// ── 2026-03-13 ──
addEvents({
  "2026-03-13": [
    {
      type: "news",
      title: "Samsung Heavy Industries Opens First U.S. Research Center in San Diego",
      source: "Korea IT Times",
      sourceMeta: "koreaittimes.com · 2026-03-13",
      image: "https://www.koreaittimes.com/news/photo/202603/151832_101296_1120.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 삼성중공업(SHI)이 미국 최초 해양 연구 거점 확보 — 샌디에이고<br>• SDSU와 공동으로 'SHI-SDSU Advanced Maritime Center'(SSAM Center) 개소<br>• 이왕근 COO, SDSU 부총장, 샌디에이고시 관계자 등 약 60명 참석<br>• AI 기반 생산 자동화, 로보틱스, 친환경 해양 기술 분야 실질 협력 추진<br>• MASGA(Maritime and Shipbuilding Global Alliance) 이니셔티브의 출발점<br>• General Dynamics NASSCO(미 서부 최대 조선소) 인접 입지 활용</p><h3>Key Quotes</h3><p>• "We expect this center to contribute to expanding technological cooperation between the Korean and U.S. shipbuilding and maritime industries" (한미 조선·해양 산업 기술 협력 확대에 기여할 것) — Lee Wang-keun, SHI COO<br>• "We hope this partnership will advance innovation through the SDSU College of Engineering" (SDSU 공대를 통한 혁신 촉진 기대) — Adela de la Torre, SDSU President</p><h3>Technical Insights</h3><p>• SDSU 공대의 AI·자율시스템, 첨단 제조·소재, 지속가능 에너지 역량과 SHI 건조 기술 시너지<br>• 미국 내 대학·정부·산업계 공동 연구 과제 발굴 및 우수 연구 인력 확보 목표<br>• 한국 조선업의 글로벌 R&D 네트워크 확장 사례로 HD현대·한화오션 등도 유사 행보 예상</p></div>`,
      tags: ["Samsung Heavy Industries","SHI","SDSU","San Diego","shipbuilding","R&D","Korea-US cooperation","NASSCO","MASGA"],
      link: "https://www.koreaittimes.com/news/articleView.html?idxno=151832",
      coords: [-117.16, 32.72],
      location: "San Diego, USA"
    },
    {
      type: "news",
      title: "Royal Navy Orders 20 Drone Boats (Project Beehive USV) — Urgent Counter-Drone RFIs Issued",
      source: "Naval News / Meyka",
      sourceMeta: "navalnews.com · 2026-03-13",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/Kraken-wins-Royal-Navy-contract-to-deliver-20-USV-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 해군이 Kraken Technology Group에 £12.3M 계약 — 20척 모듈형 USV 발주<br>• Project Beehive USV: ISR, 전자전 지원, 기뢰 대응 등 임무별 페이로드 교체 가능<br>• 동시에 METIS·TALON 긴급 RFI 발행 — 함정 탑재형 컨테이너식 대드론(C-UAS) 방어체계<br>• NavyPODS: 레이더, RF 탐지, 전자공격, 운동에너지 요격을 컨테이너에 통합<br>• NATO 표준 데이터 포맷 및 사이버 인증이 공급업체 선정 핵심 기준</p><h3>Key Quotes</h3><p>• "We are building the Royal Navy of the future right now" (미래 해군을 지금 건설 중) — Luke Pollard MP, UK Defence Minister<br>• "Kraken was designed from the ground up to be entirely interoperable by adopting full MOSA" (Kraken은 처음부터 완전한 MOSA 기반 상호운용성 설계)</p><h3>Technical Insights</h3><p>• 모듈형 USV 20척 규모는 군집(swarm) 운용 교리 개발 및 신뢰성 검증 목적<br>• NavyPODS C-UAS는 기존 함정에 대규모 개조 없이 드론 방어력 신속 증강<br>• 호르무즈 위기 등 긴급 상황 대응에 최적화된 접근법<br>• Kraken은 NATO Innovation Fund, NSSIF, Rheinmetall Naval Systems 합작 확대 중</p></div>`,
      tags: ["Royal Navy","USV","Project Beehive","Kraken","C-UAS","NavyPODS","METIS","TALON","NATO","defense"],
      link: "https://www.navalnews.com/naval-news/2026/03/kraken-wins-royal-navy-contract-to-deliver-20-usv/",
      coords: [-1.1, 50.8],
      location: "Portsmouth, UK"
    }
  ]
});

// ── 2026-03-14 ──
addEvents({
  "2026-03-14": [
    {
      type: "accident",
      title: "US Strikes 90+ Iranian Military Targets on Kharg Island — Hormuz Strait Blockade Intensifies",
      source: "The National (UAE)",
      sourceMeta: "thenationalnews.com · 2026-03-14",
      image: "https://www.thenationalnews.com/resizer/v2/UYASZBRVF65DH5IJAMTLWZFDBU.jpg?smart=true&auth=482c8ca6b42359a2e3226a6fe8451c03457f87ed2d26904277816bf0bdc5fbd8&width=400&height=225",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미군이 카르그(Kharg) 섬 군사 시설 90곳 이상 정밀 타격<br>• CENTCOM: 기뢰 저장시설, 미사일 벙커 파괴 — 석유 인프라는 보존<br>• 트럼프: 호르무즈 자유 항행 방해 시 석유 시설도 타격 대상에 포함 경고<br>• 각국에 유조선 호위 해군 파견 촉구 — "team effort" 언급<br>• 이란: 피해 축소 주장 + 카르그 석유 수출 정상 운영 주장<br>• UAE: 탄도미사일 9발 + 드론 33기 요격, 푸자이라 잔해 화재 발생</p><h3>Key Quotes</h3><p>• "US forces successfully struck more than 90 Iranian military targets on Kharg Island, while preserving the oil infrastructure" (미군 카르그 섬 90개 이상 군사 목표 타격, 석유 인프라 보존) — CENTCOM<br>• Trump: "should Iran do anything to interfere with free passage of ships through Hormuz" (이란이 호르무즈 선박 자유통행 방해 시)</p><h3>Technical Insights</h3><p>• 카르그 섬: 이란 석유 수출 핵심 거점 — 내륙 유전→해저 파이프→유조선 선적<br>• 중국이 이란 석유 수출 약 80% 수입 — 카르그 시설 파괴 시 글로벌 에너지 충격<br>• 다국적 호위선단은 걸프전 'Earnest Will' 작전의 현대 버전<br>• 인도 선박 22척 안전 통과 요청 등 각국 독자 대응 본격화</p></div>`,
      tags: ["Kharg Island","Iran","US strikes","Hormuz Strait","oil crisis","CENTCOM","UAE defense","Gulf conflict","blockade","tanker escort"],
      link: "https://www.thenationalnews.com/news/mena/2026/03/14/us-hits-more-than-90-iranian-military-targets-on-kharg-island/",
      coords: [50.33, 29.23],
      location: "Kharg Island, Iran"
    }
  ]
});


// ── AI Secretary Report ──
addEvents({
  "2026-03-15": [
    {
      type: "news",
      title: "Korean Shipbuilding Industry's Growth Opportunities Amid Global Tensions: MASGA Project and Future Prospects",
      source: "Financial News",
      sourceMeta: "youtube.com · 2026-03-15",
      image: "https://img.youtube.com/vi/THL0-UrSv0A/maxresdefault.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 전쟁 및 글로벌 불안정으로 인한 방위산업 수요 증가가 한국 조선업의 성장 기회로 작용하고 있음<br>• MASGA 프로젝트(자율운항선박 및 신기술 관련)가 K-조선의 향후 성장 동력으로 강조됨<br>• 권효재 대표 등 업계 리더들이 현 지정학적 상황을 한국 조선업의 경쟁력 강화 기회로 해석<br>• 자율운항, AI 기술, 친환경 선박 등 신기술 영역에서의 한국 산업의 차별성 확보 필요<br>• 기존 상선 산업뿐 아니라 방위함정, 특수선박 분야로의 다각화 추진<br>• 글로벌 공급망 재편 속에서 한국 조선소의 기술 경쟁력과 납기 신뢰도가 핵심 차별화 요소<br><h3>Key Quotes</h3><br>• "전쟁 속 한국 조선업이 웃을 수 있는 이유" (지정학적 위험이 역설적으로 국내 방위산업과 조선 분야에 수주 기회를 창출하고 있다는 의미)<br>• "마스가 프로젝트와 K-조선의 미래" (자율운항선박, 스마트 조선 기술 등 미래형 선박 개발이 한국 조선업의 경쟁력 재정의의 핵심)<br>• "Geopolitical tensions driving demand for naval vessels and advanced maritime technologies in Korea" (지정학적 긴장이 한국의 함정, 특수선박, 최첨단 해양기술 수요를 촉발)<br><h3>Devil's Advocate</h3><br>• 과도한 낙관주의의 함정: 방위산업 수주 증가가 단기 호황을 가져올 수 있으나, 이는 특정 고객(국방부, 해군)에의 의존도 심화를 의미하며 상업적 수익성과는 별개의 문제일 수 있다. 정부 예산 축소 시 급격한 수주 감소 위험 존재.<br>• 기술 격차 과소평가: MASGA 프로젝트 등 자율운항선박 기술에서 한국이 선도적이라는 주장이 있으나, 노르웨이, 싱가포르, 유럽의 경쟁 기술 수준도 빠르게 발전 중. 실제 상용화 시점과 규제 환경 불확실성이 높음.<br>• 건조 원가 상승의 간과: 고급 기술 적용, 친환경 규제 대응, 인건비 상승 등으로 인한 원가 상승이 지속되는데, 이를 수주가에 충분히 반영하기 어려운 구조. 마진율 개선이 수주 증가를 따라가지 못할 가능성.<br>• 공급망 리스크: 중국 조선업의 저가 공세와 일본의 고부가가치 선박 전문화 사이에서 한국의 포지셔닝이 중장기적으로 불안정할 수 있으며, 핵심 부품(엔진, 전장품)의 해외 의존도 문제 미해결.</div>`,
      tags: ["K-조선","MASGA 프로젝트","해양산업","방위산업","자율운항선박","조선업 전망","YouTube","Video"],
      link: "https://youtu.be/THL0-UrSv0A?si=5pm6cc778DxX7UMu",
      coords: [126.9784,37.5665],
      location: "대한민국"
    }
  ]
});

// ── AI Secretary Report ──
addEvents({
  "2026-03-15": [
    {
      type: "news",
      title: "Japan's Shipbuilding Industry Resurgence: Major Risk Factor for K-Shipbuilding Sector",
      source: "손에잡히는경제",
      sourceMeta: "youtube.com · 2026-03-15",
      image: "https://img.youtube.com/vi/X0XU0uHnfR0/maxresdefault.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 일본 조선업이 경쟁력 회복으로 K-조선의 시장 지위에 새로운 위협이 되고 있는 상황 분석<br>• COR에너지인사이트 권효재 대표의 업계 전문가 관점에서 한국 조선산업의 구조적 리스크 지적<br>• 글로벌 조선 시장에서 일본의 기술 혁신 및 가격 경쟁력 강화에 대한 우려<br>• 한국 조선업이 직면한 원가 상승, 인력 확보, 기술 차별화의 다중 압박 요인<br>• LNG 운반선, 극지 관련 선박 등 고부가가치 선종에서의 경쟁 심화 예상<br>• 정책적 지원 및 산업 구조 개혁이 시급한 상황<br><h3>Key Quotes</h3><br>• "일본 조선업의 부활은 단순한 회복이 아니라 기술 고도화 기반의 경쟁 강화" (Japanese shipbuilding resurgence is not merely recovery but competition intensification based on technological advancement)<br>• "K-조선 최대 리스크는 외부 경쟁이 아닌 내부 구조적 문제의 심화" (The greatest risk for K-shipbuilding is not external competition but deepening internal structural issues)<br><h3>Devil's Advocate</h3><br>• 그럼에도 불구하고 한국 조선업은 이미 세계 시장의 50% 이상을 점유하고 있으며, 일본의 기술 추격이 단기간에 이를 뒤집기는 어려울 수 있다는 낙관론을 간과할 수 없다<br>• 일본의 조선 인프라 노후화와 숙련 인력 감소 문제가 한국보다 더 심각할 수 있으므로, 장기적 경쟁력 평가에서는 한국이 여전히 우위를 유지할 가능성이 존재한다<br>• 조선산업의 국제 경쟁력은 원가와 기술만이 아니라 정치적 리스크, 공급망 안정성, 고객사 신뢰도 등 다층적 요소에 좌우되는데, 이러한 총체적 평가 없이 일본 위협론만 강조하는 것은 불완전한 분석일 수 있다<br>• 나아가 한국 조선업의 저가 수주 관행과 무리한 납기 준수가 이미 경쟁력을 훼손하고 있으므로, 일본의 도전이 없더라도 자체 경영 혁신이 절실한 상황이라는 점을 간과해서는 안 된다</div>`,
      tags: ["조선업","한국 조선","일본 조선","조선산업 경쟁","해양산업","YouTube","Video"],
      link: "https://youtu.be/X0XU0uHnfR0?si=iezqlRIuUuacSWLz",
      coords: [127,37.5],
      location: "South Korea"
    }
  ]
});


// ── AI Secretary Report ──
addEvents({
  "2026-03-15": [
    {
      type: "news",
      title: "2026 Korean Shipbuilding Big 3 Stock Price Outlook: Hanwha Ocean, Samsung Heavy Industries, HD Hyundai Heavy Industries",
      source: "경제야놀자 (YouTube Channel)",
      sourceMeta: "youtube.com · 2026-03-15",
      image: "https://img.youtube.com/vi/YXTXhvmKSvY/maxresdefault.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 한국 조선산업 빅3(한화오션, 삼성중공업, HD현대중공업)의 2026년 주가 전망을 비교 분석하는 콘텐츠로, 경제 전문가 엄경아 위원의 심층 해석 포함<br>• 조선업계의 구조적 경쟁력 변화, 수주잔액(Orderbook), 기술 혁신 역량 등을 바탕으로 각 사 간 승패를 가름하는 분석 제시<br>• LNG선, 컨테이너선, 유조선, 특수선박 등 선종별 수요 전망과 고부가가치선 수주 능력이 중장기 주가 결정의 핵심 변수<br>• 에너지 전환, 해운경기 사이클, 글로벌 해양산업 지정학적 리스크 등 거시경제 환경 변화가 각 조선사의 실적과 밸류에이션에 미치는 영향 논의<br>• 한화오션의 적극적 M&A 전략, 삼성중공업의 기술력 기반 고부가가치 선박 포트폴리오, HD현대의 규모의 경제 등 차별화 전략 비교<br>• 향후 2년(2025~2026)간 수주 수익화 시점, 원가율 개선, 환율 변동성 등이 각 사 주가 상승률을 결정하는 단기 트리거로 작용할 가능성<br><h3>Key Quotes</h3><br>• "2026 조선주 주가전망은 단순한 실적 개선이 아니라, 각 조선사의 전략적 포지셔닝과 산업 구조 변화에 얼마나 신속하게 적응하는가의 문제"<br>(2026년 조선주 주가 전망은 단순 실적 개선이 아니라 각사의 전략적 대응 능력에 달려있음)<br>• "한국 조선산업의 경쟁력은 고부가가치선 수주 능력과 건조 납기 준수율에서 결정된다"<br>(고부가가치선 확보와 납기 이행 능력이 한국 조선사의 경쟁 우위 결정 요소)<br>• "빅3 중 최후의 승자는 2026년까지의 수주-수익화 사이클과 해운경기 회복 시점을 정확히 타격한 기업이 될 것"<br>(수주-수익화 타이밍과 해운경기 회복 국면을 잘 활용한 기업이 최종 승자가 될 것으로 예상)<br><h3>Devil's Advocate</h3><br>• 조선산업 호황의 지속성 불확실성: 현재의 LNG선·특수선박 수요 호황이 2026년까지 지속된다는 보장이 없으며, 글로벌 경기 둔화, 해운경기 악화 시나리오에서 각 사의 주가는 급락할 가능성. 역사적으로 조선업은 극단적 사이클 산업이라는 점 간과.<br>• 원가 인상 압력의 과소평가: 강철·반도체·인력 수급 관련 비용이 지속적으로 상승하는 환경에서 고정가 수주 계약의 마진율 악화 리스크가 분석에 충분히 반영되지 않았을 가능성. 특히 저가 수주로 점유율 확대 경쟁이 심화되면 수익성 문제 심화.<br>• 지정학적 변수의 최소화: 한반도 긴장, 미중 갈등, 러시아 제재 심화 등이 조선사의 수주처(중국, 일본, 미국)와 공급망에 미치는 영향이 과도하게 낙관적으로 평가되었을 가능성. 특히 방위산업 관련 특수선박 수주의 지정학적 리스크 간과.<br>• 기술 격차 축소의 가속화: 중국 조선사의 기술 추격이 가속화되고 있으며, 한국 조선사의 기술 우위 지속 기간이 시장 예상보다 짧을 수 있음. 특히 자율운항선, 친환경선 분야에서 글로벌 기술 경쟁이 가파르게 진행 중이라는 점이 중기 실적에 부정적 영향 미칠 가능성.</div>`,
      tags: ["Korean Shipbuilding","Stock Analysis","Hanwha Ocean","Samsung Heavy Industries","HD Hyundai","Maritime Industry","YouTube","Video"],
      link: "https://youtu.be/YXTXhvmKSvY?si=WaVRfZYF04Bmqnmh",
      coords: [127,37.5],
      location: "South Korea"
    }
  ]
});

// Manual: 2026-03-17 fn조선해양포럼
addEvents({
  "2026-03-17": [
    {
      type: "event",
      title: "2026 fn Shipbuilding & Maritime Forum — K-Shipbuilding Global Alliance Strategy",
      source: "Financial News (파이낸셜뉴스)",
      sourceMeta: "fnnews.com · 2026-03-17",
      image: "https://event.fnnews.com/resource/event/1770612953651.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2026 fn조선해양포럼이 3월 17일 부산항국제전시컨벤션센터(BPEX)에서 개최<br>• 주제: '조선·해양 혁신을 위한 글로벌 동맹' — MASGA 전략, 해외 거점 확대, K-조선 미래 전략<br>• 세션1: K-조선 글로벌 동맹 시대 — 이상균 조선해양플랜트협회장 기조연설, HD현대·한화오션·삼성중공업·HJ중공업 임원 대담<br>• 세션2: 조선해양 기회와 위기 — 클락슨스 코리아 최재성 대표 선박 발주 분석, 북극항로 패널토론<br>• 주최: 파이낸셜뉴스, 부산파이낸셜뉴스<br>• 후원: 산업통상부, 해양수산부, 한국조선해양플랜트협회, 한국해운협회, 한국선급 등</p><h3>Key Quotes</h3><p>• 한미 조선협력 MASGA 추진과 트럼프 핵추진 잠수함 승인으로 K-조선 위상 고조<br>• 중국의 LNG 등 고부가가치 선박 건조 진출로 격차 축소 중 — 원팀 시너지 필요<br>• IMO 탄소세 부과 대응 및 친환경 선박 전략이 핵심 어젠다</p><h3>Technical Insights</h3><p>• HD현대(세계 1위 조선소), 한화오션(필리조선소 인수로 미국 진출), 삼성중공업(FLNG 독보적 강자)이 빅3 전략 공유<br>• 북극항로 상업화 시 선박 수요 구조 변화 — 내빙선, LNG 벙커링 인프라 투자 확대 예상<br>• 조선-해운 간 원팀 협력이 글로벌 공급망 재편 시대의 경쟁력 핵심<br>• 한국산업은행·수출입은행의 해양금융 지원과 투자 전략도 논의</p></div>`,
      tags: ["fn forum","K-shipbuilding","MASGA","HD Hyundai","Hanwha Ocean","Samsung Heavy","Busan","maritime forum","event"],
      link: "https://event.fnnews.com/event/384",
      coords: [129.04, 35.10],
      location: "Busan, South Korea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery: 100+ injuries, 1 fatality in Bay of Biscay",
      source: "MAIB (UK Maritime Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 2023년 11월 4일 12시 30분경, 여객선 Spirit of Discovery가 비스케이만에서 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상하고 1명이 사망<br>• 피해 규모: 중증 부상자 8명이 입항 시 직접 병원으로 후송되었으며, 이 중 1명이 이후 부상으로 인해 사망<br>• 원인 분석: 선박의 추진 시스템 장애로 인한 악천후 상황에서의 통제 불가능한 상황 발생<br>• 조사 기관: 영국 해양사고조사청(MAIB)에서 공식 조사 보고서(6-2026) 발간<br>• 권고사항: 국제 운송 요구사항에 전자 경사계(electronic inclinometer) 포함, 선급사회의 지침서 개선, 추진 제조업체의 고객 공고, 크루즈선사 협회의 의료진 및 가구 고정 규정 강화<br>• 후속 조치: 유사 추진 시스템 장착 선박 운영사에 대한 제조업체의 고객 권고 발행</p><h3>Key Quotes</h3><p>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." <br>  (2023년 11월 4일 12시 30분 이후, 여객선 Spirit of Discovery가 비스케이만 횡단 중 악천후에서 추진력을 상실했으며, 이 기간 중 100명 이상의 승객이 부상)</p><p>• "Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries."<br>  (중증 부상자 8명이 입항 시 직접 병원으로 후송되었고, 이 중 한 명이 이후 부상으로 인해 사망)</p><h3>Technical Insights</h3><p>• 추진 시스템 신뢰성: 현대 여객선의 포드 추진 시스템의 고장 메커니즘과 악천후 상황에서의 이중 안전장치 부재가 대형 참사로 확대되는 경로 분석 필요<br>• 규제 강화 방향: IMO 및 국제 운송 규정에 전자 경사계 의무화로 악천후 상황의 선박 자세 모니터링 강화 및 조기 경보 시스템 구축<br>• 의료 및 안전 기준: 크루즈 선사의 의료 인원 확충(Advanced Trauma Life Support 자격 보유) 및 악천후 상황에서의 선내 가구 고정 기준 강화로 2차 피해 방지<br>• 제조업체 책임: 유사 추진 시스템 장착 선박 운영사에 대한 적극적 정보 공유 및 정기 점검 프로토콜 개발로 예방적 유지보수 체계 구축</p></div>`,
      tags: ["propulsion failure","passenger vessel","heavy weather","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-3.5,47],
      location: "Bay of Biscay"
    }
  ]
});

// Auto-collected: 2026-03-12
addEvents({
  "2026-03-12": [
    {
      type: "news",
      title: "DIU and U.S. Navy select Anduril for XL-AUV program",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-12",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/DiveXL-DIU-Camp-1E.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Anduril이 DIU 및 미 해군의 Combat Autonomous Maritime Platform Project(CAMP) 프로그램에서 XL-AUV 공급자로 선정됨 - 장거리 수중 임무 수행 능력을 갖춘 대형 자율무인잠수정(Dive-XL) 개발·배치 담당</p><p>• 검증된 성숙 기술 및 운영 능력 - Anduril 자율잠수정들이 누적 42,355km, 6,752시간의 실제 임무를 수행하며 장시간 운영 신뢰성 입증</p><p>• 호주 로열 해군과의 Ghost Shark 프로그램 성공 - 2025년 호주 해군과의 사업 수주 및 시드니 생산시설 구축으로 기술 검증 완료</p><p>• 미 동부 로드 아일랜드 쿠온셋 포인트에 전용 생산시설 구축 - 연간 수십 대의 Dive-XL과 수백 대의 Dive-LD 생산 능력 보유</p><p>• 해양 영역 통제 전략의 전환점 - 개념 단계에서 실제 운영 단계로 이동하여 분산 해양 작전 및 분쟁 해역 지속 운영 가능</p><h3>Key Quotes</h3><p>• "The United States needs the ability to deploy large payloads across extended ranges underwater." (미국이 수중에서 넓은 거리에 걸쳐 대형 탑재물을 배치할 수 있는 능력이 필요함)</p><p>• "Control of the undersea domain underwrites control of the sea itself, and Dive-XL marks the shift from concept to reality." (수중 영역의 통제가 해양 지배력의 기초가 되며, Dive-XL은 개념에서 현실로의 전환을 의미함)</p><h3>Technical Insights</h3><p>• 자율 해양 플랫폼의 성숙도 및 신뢰성 검증 - 42,355km 누적 운항거리와 6,752시간의 실제 임무 수행 데이터는 장시간 자율운영 기술이 운영 단계에 진입했음을 입증하며, 향후 IMO 자율선박 규정 제정 시 수중 플랫폼의 국제 안전 기준 수립에 참고될 가능성</p><p>• 분산 해양 작전(Distributed Maritime Operations) 개념의 실현 - XL-AUV 기술 도입으로 전통적 함정 중심의 해양 전술에서 자율 플랫폼 네트워크 기반의 새로운 작전 체계로 전환되며, 이는 상용 해운 및 해양 탐사 산업에도 영향을 미칠 것으로 예상</p><p>• 빠른 프로토타입-배치 사이클의 산업화 - Anduril의 호주 프로그램 성공 사례는 전통적 방위사업의 장시간 개발 주기를 단축할 수 있는 상업적 기술 적용 모델을 제시하며, 이는 자율 해양 시스템의 상용화 가속화에 기여할 것으로 평가</p><p>• 전략적 수중 도메인 인식(Underwater Domain Awareness)의 핵심 자산 - 분쟁 지역에서 지속적으로 운영 가능한 XL-AUV는 COLREG 등 국제 해양 규칙의 적용 범위 확대와 자율 잠수정의 충돌 회피(collision avoidance) 알고리즘 고도화 필요성을 야기할 것으로 예상</p></div>`,
      tags: ["Autonomous Underwater Vehicles","XL-AUV","U.S. Navy","Defense Innovation Unit","Dive-XL"],
      link: "https://www.navalnews.com/naval-news/2026/03/diu-and-u-s-navy-select-anduril-for-xl-auv-program/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2026-03-13
addEvents({
  "2026-03-13": [
    {
      type: "news",
      title: "Missile Attacks Define Strait of Hormuz Risks, Officials Say",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-03-13",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 페르시아만과 호르무즈 해협에서 해상 위협이 기뢰에서 미사일로 변화하고 있으며, 이란이 표면-표면 미사일을 사용하여 북부 해협 선박에 대한 공격을 지속 중<br>• 미 국방부 합참의장 댄 케인 장군이 펜타곤 브리핑에서 현재 이란의 무인수상함정(USV) 활동은 감지되지 않는다고 발표<br>• 호르무즈 해협 상업 해운의 최대 위협으로 미사일 공격이 지적되었으며, 이는 전통적 해상 위협(기뢰)의 순위 변화를 의미<br>• 백악관의 지시에 따라 국방부와 해군이 이 위협에 대응하기 위한 계획 수립 중<br>• 호르무즈 해협은 글로벌 석유 공급의 약 20-30%가 통과하는 전략적 해상 교통로로, 안보 상황이 국제 해운과 에너지 시장에 직접 영향</p><h3>Key Quotes</h3><br>• "Missiles are currently the largest threat to merchant shipping in the Strait of Hormuz and Persian Gulf instead of sea mines" (현재 호르무즈 해협과 페르시아만의 상선에 대한 최대 위협은 기뢰가 아닌 미사일이라는 의미)<br>• "We've not seen any [unmanned surface vessel] activity out of Iran that we've seen in the Gulf at this point" (현재까지 페르시아만에서 이란의 무인수상함정 활동은 감지되지 않았다는 의미)</p><h3>Technical Insights</h3><br>• 호르무즈 해협의 새로운 위협 환경 변화: 기뢰에서 미사일로의 위협 전환은 해상 감시 및 조기 경고 시스템(EWS) 고도화의 중요성을 강조<br>• COLREG와 IMO 규정 관점에서 전쟁 지역 항행 상황에 대한 선박 책임자(Master) 판단 기준의 모호성 문제로, 국제해사기구의 명확한 지침 필요<br>• 자율운항선박(MASS)의 호르무즈 해협 운영 가능성 제약: 미사일 위협이 있는 고위험 해역에서는 자율시스템보다 선원의 즉각적 대응 능력이 필수적임을 시사<br>• 상선의 방어 장비 및 회피 기동(evasive maneuvers) 능력 강화: 기존의 수동적 해상 보안 조치에서 능동적 위협 회피 기술로의 산업 패러다임 전환 필요</p></div>`,
      tags: ["Strait of Hormuz","Maritime Security","Missile Threats","Iran"],
      link: "https://news.usni.org/2026/03/13/missile-attacks-define-strait-of-hormuz-risks-officials-say",
      coords: [56.2,26.5],
      location: "Strait of Hormuz, Persian Gulf"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather experienced by the passenger vessel Spirit of Discovery, leading to over 100 injuries and one fatality",
      source: "MAIB Reports",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Spirit of Discovery 여객선이 2023년 11월 4일 비스케이 만에서 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상당하고 1명이 사망함<br>• MAIB(해양사고조사국) 조사 보고서 6-2026을 통해 사고 원인과 재발 방지 대책이 제시됨<br>• 심각한 부상을 입은 8명의 승객이 입항 시 직접 병원으로 이송되었으며, 그 중 1명이 부상으로 인해 사망<br>• 전자 경사계 설치 및 조종실 지침서 품질 개선이 권고사항에 포함됨<br>• 선박의 가구 고정 기준 강화 및 응급의료 인력 확충 등 운영상 개선사항이 권고됨<br>• 추진 장치 제조사에 동일 유형 포드 장착 선박 운영사에 고객 권고사항 발행 권고</p><h3>Key Quotes</h3><br>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay." (2023년 11월 4일 정오 이후 얼마 지나지 않아 Spirit of Discovery 여객선이 비스케이 만 횡단 중 악천후에서 추진력을 상실함)</p><p>• "Recommendations have been made to the Maritime and Coastguard Agency to propose that international carriage requirements include electronic inclinometers" (국제 운송 규정에 전자 경사계 포함을 제안하도록 해사청에 권고됨)</p><h3>Technical Insights</h3><br>• 악천후 중 선박의 동적 안정성 모니터링을 위해 전자 경사계와 같은 첨단 센서 장착이 국제 규정에 포함되어야 함을 시사<br>• 추진 장치의 설계 결함이나 운영 오류가 중대 사고로 이어질 수 있으므로, 제조사 지침서의 품질 관리 및 주기적 업데이트가 중요함<br>• 여객선의 경우 악천후 시 선내 가구 고정 및 응급의료 체계 강화를 통해 2차 피해 최소화 필요<br>• 이 사고는 조종실 운영 절차, 추진 시스템 모니터링, 승객 안전 관리 측면의 통합적 개선을 요구하는 사례로서 업계 표준화에 영향을 미칠 것으로 예상됨</p></div>`,
      tags: ["propulsion failure","passenger vessel","heavy weather","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-6.5,47.5],
      location: "Bay of Biscay"
    }
  ]
});

// Auto-collected: 2026-03-12
addEvents({
  "2026-03-12": [
    {
      type: "news",
      title: "DIU and U.S. Navy Select Anduril for XL-AUV Combat Platform Program",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-12",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/DiveXL-DIU-Camp-1E.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 국방혁신부(DIU)와 해군, 안두릴사의 초대형 자율수중차량(XL-AUV) 선정 - CAMP(전투용 자율해양플랫폼 프로젝트)에 참여하기 위해 안두릴이 경쟁입찰을 통해 선정됨</p><p>• 안두릴의 Dive-XL 시스템 성숙도 입증 - 누적 42,355km, 6,752시간의 실전 운영 시간으로 장거리 성능과 시스템 내구성 검증 완료</p><p>• 4개월 내 장기 운영 시연 예정 - 계약 체결 후 4개월 내 Dive-XL의 작전 중심 시연 완료 계획</p><p>• 호주 고스트 샤크 프로그램 성공 기반 - 2025년 호주 해군과의 계약을 통해 전통 방식 대비 빠른 납기와 낮은 리스크 입증</p><p>• 산업 기반 구축 - 시드니(호주), 로드아일랜드 쿠온셋포인트에 연간 수십 개의 Dive-XL, 수백 개의 Dive-LD 생산 가능한 시설 운영</p><h3>Key Quotes</h3><p>• "Anduril's autonomous undersea vehicles to-date have accumulated over 42,355km and 6,752 hours of mission time, proving the maturity, reliability, and long-duration capability required for distributed maritime operations." <br>(안두릴의 자율수중차량들이 누적 42,355km와 6,752시간의 운영 시간을 기록하며 분산 해양작전에 필요한 성숙도, 신뢰성, 장시간 운영 능력을 증명했다.)</p><p>• "Long-range autonomous undersea systems have the potential to change the balance beneath the waves... Control of the undersea domain underwrites control of the sea itself."<br>(장거리 자율수중시스템은 수중 전력 균형을 변화시킬 잠재력을 가지고 있으며, 수중 영역의 통제가 해상 자체의 통제를 뒷받침한다.)</p><h3>Technical Insights</h3><p>• XL-AUV 기술의 실전 전환 - 수십 년간 개념 단계에 있던 초대형 자율수중차량이 이제 실제 운영 배포 단계로 진입, 자율해양 시스템의 기술적 성숙도 도달</p><p>• 분산 해양작전(DMO) 패러다임 실현 - 장거리 자율시스템을 통해 미국과 동맹국이 해상에서 리스크를 거리에 두고 분쟁 환경에서 지속적 운영 가능해지는 해전 개념 변화</p><p>• 생산 기반과 공급망 확보 - 다국적 생산 시설(호주-미국)과 대량 생산 계획으로 XL-AUV의 광범위한 배포 기반 마련, 전술적 자율성(Tactical Autonomy) 구현 준비</p><p>• IMO/SOLAS와 독립적인 방위 응용 - 민간 자율선박과 달리, 군사용 XL-AUV는 국제 규정 제약 없이 운영되어 해양 패권 경쟁 심화 가능성</p></div>`,
      tags: ["Autonomous Underwater Vehicles","XL-AUV","U.S. Navy","Defense Technology","Dive-XL"],
      link: "https://www.navalnews.com/naval-news/2026/03/diu-and-u-s-navy-select-anduril-for-xl-auv-program/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-02
// Auto-collected: 2025-10-13
addEvents({
  "2025-10-13": [
    {
      type: "accident",
      title: "ATSB Releases Preliminary Report on Nuyina Grounding off Heard Island",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-17",
      image: "https://images.marinelink.com/images/maritime/w800/source-168972.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 호주 해양학연구선 뉘이나(Nuyina)호가 2025년 10월 13일 호드 섬 인근 해역에서 기저부 수심 15m 지점에 좌초<br>• 선박 및 운영: 호주 남극청 소속 연구·보급선, 승선 인원 해상승무원 37명, 탐사대원 85명<br>• 근본 원인: 음파측심기(멀티빔) 심도 데이터가 해상 정보표시시스템(ECDIS)과 연동되지 않아 항해 경보 발생 불가, 항법 음향시스템 가동 중단<br>• 운영 오류: 레이더 방위선을 신규 경로로 착오 인식, ECDIS 계획 경로 표시 오류로 인한 항해 혼란<br>• 결과: 선박 일시적 좌초 후 복구, 확장형 드롭 킬(drop keel) 손상</p><h3>Key Quotes</h3><p>• "Depth information from the multi-beam system was shown on a dedicated display on the bridge but was not fed into the ship's integrated bridge system. This meant the depth information was not displayed on the electronic chart display and information system (ECDIS), and could not be used to generate navigational alarms." <br>(멀티빔 음향시스템의 수심 정보가 독립된 브리지 디스플레이에만 표시되었으며, 통합 항해 시스템(ECDIS)과 연동되지 않아 항해 경보 생성 불가)</p><p>• "This bearing line was in a similar direction to the planned route, taking the ship between an unsurveyed area to the west and a charted bank to the east."<br>(이전 방위선이 신규 계획 경로와 유사한 방향으로 설정되어 미조사 해역과 해도상 천소 사이를 통과하도록 유도)</p><h3>Technical Insights</h3><p>• 항해시스템 통합 부재: 고해상 멀티빔 음향측심 데이터가 ECDIS 시스템과 분리되어 실시간 수심 경보 및 자동 항법 알람 기능 불가 - 현대 선박의 통합 항해 시스템 설계 결함<br>• 항법 절차 오류: 동위치 유지(DP) 시스템에서 자동 항법으로 전환 시 이전 방위선 재확인 부족, ECDIS 경로 계획 로드 오류 확인 미흡 - 선체 회전 중 스러스터 부하 증가 상황에서의 주의 분산<br>• 미조사 해역 운항: 4,000km 남양 극지 미지역 운항에도 불구하고 음향시스템 의존도 과다, 항법 시스템 이중화 부족 - 극지역 연구선의 자동화 장비 신뢰성 및 수동 조종 능력 균형 문제<br>• IMO 규정 준수 공백: 음향 간섭 회피를 위한 항법음향기 차단이 대체 수심 확보 수단 없이 시행 - 선박 안전 규칙의 시스템 신뢰도 평가 및 대체 안전 조치 명확화 필요</p></div>`,
      tags: ["grounding","research vessel","navigation system failure","ATSB investigation"],
      link: "https://www.marinelink.com/news/atsb-releases-preliminary-report-nuyina-537033",
      coords: [73.5,-53.1],
      location: "Heard Island, 4,000 km south-west of Perth, Australia"
    }
  ]
});

// Auto-collected: 2026-03-16
addEvents({
  "2026-03-16": [
    {
      type: "news",
      title: "ABS Reflects on Technology, Innovation Growth in Southeast Asia",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-16",
      image: "https://images.marinelink.com/images/maritime/w800/group-photo-168962.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ABS가 동남아시아 지역 위원회 연례 회의에서 자율 시스템과 기술 혁신이 해운 산업을 데이터 중심의 연결 산업으로 변환 중임을 강조<br>• 존 맥도널드 ABS 회장겸 CEO가 글로벌 경제 변화, 지정학적 갈등, 조선소 용량 제약 등 산업 과제 해결을 위한 기술 투자 확대 방침 발표<br>• 싱가포르에 새로운 운영 센터 설립 예정으로 태평양 지역 원격 검사 능력 확대 계획<br>• ABS는 싱가포르 및 남태평양 지역에서 클래스 1위 지위 유지 중이며, 전 세계 선박 건조 발주량에서도 선도적 입장<br>• 태평양 캐리어스(Pacific Carriers Limited)의 호르 웡 이우 회장이 ABS 동남아 지역 위원회 신임 의장으로 취임</p><h3>Key Quotes</h3><p>• "Rapid technology innovation and autonomous systems are transforming shipping into a highly connected, data-driven industry." (빠른 기술 혁신과 자율 시스템이 해운 산업을 고도로 연결된 데이터 중심 산업으로 변환 중)</p><p>• "ABS is well-positioned to support the industry in Southeast Asia through this era of accelerated change" (ABS는 가속화된 변화의 시대에 동남아 해운 산업을 지원할 수 있도록 최적의 위치에 있음)</p><h3>Technical Insights</h3><p>• 자율 시스템 기술 도입으로 해운 산업의 디지털화 및 데이터 기반 의사결정 체계 확대 추진 중이며, 이는 IMO의 스마트십 규제 방향과 부합<br>• 원격 검사(Remote Survey) 능력 강화는 선급 검사의 효율성 증대 및 운영 비용 절감을 가능하게 하며, 자율 운항 선박의 검사 표준화에 기여할 것으로 전망<br>• 동남아 지역의 해운 중심지 위치를 활용한 기술 서비스 확대는 SOLAS, MARPOL 등 국제 규제 대응 능력 강화와 연계되어 전 지역 해운 안전 수준 향상 도모<br>• ABS의 지속가능성 기술 투자 확대는 국제 해사기구(IMO)의 탄소중립 목표(2050년)와 선박에너지효율지수(EEXI) 규제 등에 대한 산업 대응 강화를 의미</p></div>`,
      tags: ["Autonomous Systems","Technology Innovation","Maritime Digitalization","Southeast Asia"],
      link: "https://www.marinelink.com/news/abs-reflects-technology-innovation-growth-537023",
      coords: [103.8198,1.3521],
      location: "Singapore"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-16
addEvents({
  "2026-03-16": [
    {
      type: "news",
      title: "U.S. Navy Establishes Five New Program Acquisition Executives for Maritime and Autonomous Systems",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-03-16",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미 해군이 함정 및 장비 구매·유지보수 방식 개혁의 일환으로 5개의 신규 프로그램 획득 담당자(PAE) 직책을 신설<br>• 2025년 12월 PAE 로봇 및 자율시스템 사무실 첫 개설 이후 추가 4개 사무실 신설 완료<br>• Chris Miller 현 Naval Sea Systems Command 전무이사가 PAE Maritime 담당, Vice Adm. Robert Gaucher가 PAE Undersea 담당<br>• Vice Adm. Jim Downey가 PAE Industrial Operations 지휘<br>• 해군 장비 획득 구조의 현대화 및 자율화 시스템 도입 가속화 의도<br>• 국방 조달 체계의 효율성 및 전력화 속도 향상 목표</p><h3>Key Quotes</h3><br>• "Navy Secretary John Phelan announced the creation of five new program acquisition executives after standing up the first new office, PAE robotic and autonomous systems, in December." (해군 장관 John Phelan은 12월에 첫 번째 자율·로봇시스템 프로그램 획득 사무실을 신설한 이후 추가 5개 신규 프로그램 획득 담당자 직책 신설을 발표)</p><h3>Technical Insights</h3><br>• 미 해군의 자율시스템 및 로봇 기술 도입 가속화로 미래형 무인 해상 플랫폼 개발 추진 강화<br>• 프로그램 획득 구조 개편을 통한 의사결정 신속화 및 신기술 도입 사이클 단축으로 산업경쟁력 강화<br>• 해양 자율화 기술의 국방 적용 확대로 민간 해운업 자율선박 도입에도 기술 파급 효과 기대<br>• IMO 규정 대비 미 국방부의 자율해상시스템 표준 수립 및 COLREG 적용 방안 마련 필요성 증대</p></div>`,
      tags: ["U.S. Navy","Autonomous Systems","Maritime Acquisition","Defense Procurement","Organizational Reform"],
      link: "https://news.usni.org/2026/03/16/secnav-phelan-stands-up-5-new-offices-for-navy-marine-acquisition",
      coords: [38.8816,-77.0369],
      location: "Washington, D.C."
    }
  ]
});

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery: 100+ injuries and 1 fatality in Bay of Biscay",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사고 개요: Spirit of Discovery 여객선이 2023년 11월 4일 비스케이만에서 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상당했으며, 이 중 1명이 입원 후 사망</p><p>• 피해 규모: 8명의 중상자가 입항 후 즉시 병원으로 이송되었으며, 한 승객이 부상으로 인해 사망</p><p>• 원인 분석: 악천후 시 포드(pod) 형 추진 장치의 결함으로 인한 추진 시스템 고장</p><p>• 권장사항: IMO 국제 해상 운송 규정에 전자 경사계 탑재 의무화, 분류 협회의 매뉴얼 개선, 여객선의 의료진 확충(외상 전문가) 및 악천후 대비 가구 고정 정책 강화</p><p>• 관련 기관: Maritime and Coastguard Agency(MCA), 분류 협회, 추진 시스템 제조사, Cruise Lines International Association(CLIA)</p><h3>Key Quotes</h3><p>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." (2023년 11월 4일 오후 12시 30분경, Spirit of Discovery 여객선이 비스케이만 횡단 중 악천후에서 추진력을 잃었고, 이 과정에서 100명 이상의 승객이 부상당했다)</p><p>• "Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries." (중상자 8명이 입항 직후 병원으로 이송되었고, 이 중 1명이 부상으로 인해 사망했다)</p><h3>Technical Insights</h3><p>• 추진 시스템 설계 결함: 포드형 추진 장치의 고장 메커니즘 분석 필요 - 악천후에서의 안정성 및 백업 시스템 강화 필수</p><p>• IMO 규정 개선: 전자 경사계(electronic inclinometer) 탑재 의무화로 선박의 경사각 모니터링 및 조기 대응 체계 구축 필요</p><p>• 의료 대응 능력: 여객선의 Advanced Trauma Life Support(ATLS) 자격 의료진 확충으로 해상 응급상황의 생존율 향상 필요</p><p>• 악천후 대비: 가구 및 장비의 고정 강화, 선내 이동 제한 등 승객 안전 정책 개선으로 인명피해 최소화</p></div>`,
      tags: ["propulsion failure","heavy weather","passenger vessel","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-6.5,46],
      location: "Bay of Biscay"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2025-10-13
addEvents({
  "2025-10-13": [
    {
      type: "accident",
      title: "RSV Nuyina Grounding Near Heard Island - ATSB Preliminary Report",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-17",
      image: "https://gcaptain.com/wp-content/uploads/2024/10/RSV-Nuyina.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 호주의 남극 쇄빙 연구선 RSV Nuyina가 2025년 10월 13일 허드 아일랜드 근처에서 좌초 사고 발생 - 초기 보도와 달리 선체와 드롭 킬(retractable keel) 모두 해저에 접촉</p><p>• 근본 원인: 측량 장비 간섭 방지를 위해 항해용 초음파 탐지기를 꺼둔 상태에서, ECDIS(전자해도정보시스템)에 멀티빔 음향 데이터가 통합되지 않아 수심 정보가 항해 디스플레이에 표시되지 않음</p><p>• 항해상 오류: 마스터가 선계획한 항로가 전방 ECDIS에 표시되지 않아, 차관사가 드론 작업 시 사용한 기존의 전자 방위선을 따라 항행하여 미상사 해저 지역을 통과</p><p>• 피해 현황: 드롭 킬과 탑재된 과학 장비 손상/손실, 선체는 경미한 긁힘과 페인트 손상만 발생 - 선박은 항해능력 유지</p><p>• 호주교통안전위원회(ATSB): 앙거스 미첼 위원장 주도로 상세한 사고 경위 보고서 발표</p><p>• 운영자: 서코(Serco), 호주 남극부(Australian Antarctic Division)</p><h3>Key Quotes</h3><p>• "the vessel briefly grounded near Heard Island—clarifying earlier descriptions of the event as a minor seabed contact" (초기 보도에서 경미한 해저 접촉이라던 것이 실제로는 선박이 일시적으로 좌초한 사건임을 명확히 함)</p><p>• "the ship's navigational echo sounders had been switched off. While the multi-beam system continued to provide depth information, that information was not integrated into the vessel's electronic chart display and information system (ECDIS)" (측량용 멀티빔 음향 데이터가 항해용 ECDIS에 통합되지 않아 주 항해 디스플레이에 수심 정보가 나타나지 않음)</p><p>• "That track led the vessel through a narrow corridor between a charted bank and an adjacent area of uncharted seabed—an area where hydrographic data was incomplete" (해도에 기록된 천소와 미상사 해저 지역 사이의 좁은 항로로 선박을 인도하여 항해수심 자료가 불완전한 해역을 통과)</p><h3>Technical Insights</h3><p>• ECDIS 시스템 통합 문제: 측량 장비(멀티빔 음향)와 항해 시스템(ECDIS) 간 데이터 연동 부족으로 인한 항해 위험성 증대 - IMO SOLAS 규정상 모든 수심 정보의 통합 필요성 재확인</p><p>• 항해계획과 실행의 불일치: 마스터가 계획한 항로가 전방 ECDIS에 미표시되어 차관사가 과거 방위선(bearing line)을 따라 항행하는 상황 발생 - 자동화 시대의 인적 오류 리스크 및 이중화 시스템의 한계 노출</p><p>• 미상사 해역 항해의 위험성: 수로 자료가 불완전한 해역에서의 항해 시 고해상도 음향 탐지기와 ECDIS의 실시간 통합이 필수적 - 쇄빙선의 과학 미션과 항해 안전 간 시스템 설계 개선 요구</p><p>• 드롭 킬(Retractable Keel) 운영 관리: 과학 장비 탑재로 인한 추가 흘수 증가(약 75cm) 상황에서 항해계획 수립 시 이를 반영한 수심 마진 산출의 중요성 - 특수 장비 운영과 항해 안전의 조화 필요</p></div>`,
      tags: ["grounding","research vessel","navigation error","ECDIS failure","Antarctica"],
      link: "https://gcaptain.com/atsb-preliminary-report-sheds-light-on-research-icebreakers-grounding-off-heard-island/",
      coords: [73.5,-53.1],
      location: "Heard Island, Southern Ocean"
    }
  ]
});

// Auto-collected: 2026-03-17
addEvents({
  "2026-03-17": [
    {
      type: "news",
      title: "IMO SSE12 Advances Fire Safety Guidelines for RoRo and Vehicle Carrier Ships",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-17",
      image: "https://images.marinelink.com/images/maritime/w800/source-169001.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• IMO의 선박시스템장비소위원회(SSE12) 12차 회의에서 신에너지차량을 운반하는 선박의 화재 위험 감소를 위한 화재 보호·탐지·소화 기준 개정안 추진 계획 수립</p><p>• Interferry는 ro-ro 화물선과 ro-pax 페리선의 차별화된 특성을 고려하여 차량운반선의 규정이 다른 선종에 동일하게 적용되지 않도록 규제 영향 최소화 요청</p><p>• IMO는 2027년 3월까지 자동차·트럭운반선(PCTC) 임시지침 및 영상감시·탐지시스템 임시지침 개발을 우선화하며, SOLAS 개정안은 2032년 1월 1일 이후 시행 예정</p><p>• Ro-pax 선박의 영상감시시스템 요구사항(2026년 1월 신조선, 2028년 1월 기존선 적용)이 모호하여 과도한 수의 카메라 설치 우려</p><p>• 전기차 화재 대응을 위해 차량운반선은 CO₂ 시스템의 한계를 보이나, ro-pax 페리선의 분사시스템(drencher)은 대량 물사용으로 효과적 대응 가능</p><h3>Key Quotes</h3><p>• "We have historically had to spend a lot of effort making sure that ferries are not dragged into regulations that emanate from another segment's needs." <br>(역사적으로 페리선이 다른 선종의 규정에 무분별하게 적용되지 않도록 노력해왔음)</p><p>• "Ro-ro cargo and ro-pax ferries use drencher systems, which use large amounts of water to demonstrably deal with an EV fire on the ro-ro deck."<br>(ro-ro 화물선과 ro-pax 페리는 대량의 물을 사용하는 분사시스템으로 ro-ro 갑판의 전기차 화재에 효과적으로 대응 가능)</p><p>• "We hear from members that it is unclear exactly how to comply with these requirements, which may lead to an excessive number of cameras having to be fitted."<br>(회원사로부터 영상감시시스템 요구사항 준수 방식이 모호하여 과도한 카메라 설치가 필요할 수 있다는 피드백)</p><h3>Technical Insights</h3><p>• 선종별 기술 차별화의 중요성: 차량운반선(PCTC)과 ro-pax 페리선의 화재 소화 방식 차이(CO₂ vs 분사시스템)를 인식하여 규제 개정 시 선종의 기술적 특성을 충분히 반영해야 함</p><p>• 전기차 화재 규제의 타당성: 신에너지차량의 확대로 인한 li-ion 배터리 화재 위험이 증가하면서 IMO가 기존 SOLAS 규정의 적절성을 재평가하고 2027-2028년 추가 검토 계획 수립</p><p>• 영상감시시스템 표준화 미흡: MSC.550(108) 결의안에 따른 ro-pax 선박의 영상감시시스템 요구사항이 정의되지 않아 산업 현장에서의 규제 해석 불일치로 이어질 수 있으므로 상세 지침 필요</p><p>• 규제 이행 일정의 현실성: SOLAS 개정안 시행까지 6년 이상의 유예 기간을 두어 업계의 기술 개발과 설비 투자에 충분한 시간 제공하는 현실적 규제 추진 방식 반영</p></div>`,
      tags: ["Fire Safety","SOLAS Amendments","RoRo Ships","Electric Vehicles","IMO Regulations"],
      link: "https://www.marinelink.com/news/interferry-says-vessel-differences-need-consideration-fire-regulations-537059",
      coords: [0,0],
      location: "Global (IMO)"
    },
    {
      type: "accident",
      title: "US Aircraft Carrier Gerald R. Ford Suffers Laundry Fire in Red Sea",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-17",
      image: "https://images.marinelink.com/images/maritime/w800/source-petty-168999.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 미 해군의 최신 항공모함 Gerald R. Ford에서 주 세탁실 구역에 대형 화재 발생으로 약 200명의 선원이 연기 흡입 피해를 입었음</p><p>• 피해 규모: 화재 진화에 수 시간 소요되었으며, 약 100개의 수면 침대에 영향을 미쳤고 1명의 승무원이 부상으로 함정에서 이송됨</p><p>• 함정 현황: 5,000명 이상의 승무원이 탑승한 세계 최대 항공모함이 홍해에서 이란 작전 중 임시로 그리스 크레타섬 수다만 항구로 입항 예정</p><p>• 전술적 영향: 함정의 추진 시스템과 항공기 운용 능력에는 손상이 없으며 완전 작전능력 유지 상태이지만, 장기 배치(9개월)로 인한 승무원 사기 저하가 사전에 문제되고 있었음</p><p>• 지원 전력: Ticonderoga급 유도미사일 순양함 Normandy, Arleigh Burke급 구축함 4척이 함대 호위 중이며 대함, 대공, 대잠전 능력 보유</p><h3>Key Quotes</h3><p>• "Nearly 200 sailors were treated for smoke-related injuries when the fire broke out in the ship's main laundry area. The fire took hours to bring under control." <br>(선박 주 세탁실에서 화재 발생 시 약 200명의 선원이 연기 흡입 피해를 받았으며, 화재 진화에 수 시간이 소요됨)</p><p>• "After the fire initially broke out, the U.S. military had said that there was no damage to the ship's propulsion plant and the aircraft carrier was fully operational." <br>(화재 발생 직후 미군은 함정의 추진 시스템에 손상이 없고 항공모함이 완전히 작전 가능하다고 발표함)</p><h3>Technical Insights</h3><p>• 함정 화재 대응 체계: 항공모함의 밀폐된 구획 환경에서 대규모 화재 진화 시 연기 제어 및 승무원 대피 절차의 미흡이 다수의 연기 흡입 피해로 이어짐</p><p>• 함정 가동성 유지: 추진 시스템 손상 회피로 함정의 전술적 이동성은 보존되었으나, 주거 및 생활 구역 손상으로 장기 배치 승무원의 피로도 심화 우려</p><p>• 해군 운용 효율성: 9개월 장기 배치 중 발생한 사건으로 현대 항공모함 운용의 승무원 관리 및 정비 체계 재점검 필요성 대두</p></div>`,
      tags: ["Fire","Aircraft Carrier","Gerald R. Ford","Red Sea","Casualties"],
      link: "https://www.marinelink.com/news/us-aircraft-carrier-ford-suffers-laundry-537057",
      coords: [32.7683,34.3313],
      location: "Red Sea"
    },
    {
      type: "news",
      title: "Advanced Navigation Raises $110M Series C for PNT Technology Expansion",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-17",
      image: "https://images.marinelink.com/images/maritime/w800/advanced-navigation-168997.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 자금 조성 규모: Advanced Navigation이 Series C 펀딩라운드에서 1억 1,000만 달러를 조성하여 대체 위치항법시각(PNT) 기술 개발 가속화</p><p>• 투자 주도 기관: Airtree Ventures가 주도, Quadrant Private Equity와 호주 국가재건펀드공사(NRFC)가 참여하여 국가 차원의 자율시스템 기술 개발 전략 반영</p><p>• 핵심 기술: GPS 신호 차단/교란 환경에서 다중센서 융합 기반 자동항법 소프트웨어(AdNav Intelligence)로 자율해운/방위산업 지원</p><p>• 글로벌 배포 현황: 100,000개 이상의 시스템이 전 세계 배포되었으며, 수익의 80% 이상이 미국·유럽에서 창출</p><p>• 시장 확장 전략: 미국·유럽 주요 지역에 PNT 우수센터(Centers of Excellence) 설립으로 자율선박·무인기·방위산업 시장 진출 강화</p><h3>Key Quotes</h3><p>• "As autonomous vehicles scale into contested and high-stakes frontiers, the world's reliance on any single navigation technology has evolved from a technical limitation into a systemic vulnerability" <br>(자율 차량이 분쟁 지역과 고위험 환경으로 확대되면서 단일 항법 기술에 대한 의존도는 기술적 한계를 넘어 시스템 차원의 취약점으로 진화했다)</p><p>• "GPS is no longer a reliable single source of truth. Challenges once considered 'edge cases,' like electronic warfare threats, GPS spoofing, and infrastructure-denied regions, are now a daily reality"<br>(GPS는 더 이상 신뢰할 수 있는 유일한 정보원이 아니며, 전자전 위협·GPS 신호 위조·통신 두절 지역 등 과거 예외상황으로 간주되던 문제들이 일상화되었다)</p><h3>Technical Insights</h3><p>• 다중센서 융합 기술의 중요성: GPS 거부 환경(GPS-Denied Environment)에서 관성항법장치(INS), LiDAR, 기타 센서의 AI 기반 통합으로 자율해운의 항법 신뢰성 획기적 향상 가능</p><p>• 해상자율시스템 표준화 영향: 대체 PNT 기술의 상용화는 IMO/IHO의 자율선박 국제 기준 개발 및 COLREG 디지털화 논의에 중요한 기술적 근거 제공</p><p>• 방위-민간 이중 용도 기술: Anduril, Hanwha, Rheinmetall 등 방위산업 파트너와 NOAA, BHP 등 민간 파트너 동시 지원으로 기술의 다층적 상용화 가속화</p><p>• 지정학적 자율성 확보: 미국·유럽 중심의 기술 패권 경쟁 속에서 GPS 독립성 확보는 자율해운의 국가 전략적 자산화 추세 반영</p></div>`,
      tags: ["autonomous systems","navigation technology","PNT","funding","AI","autonomous maritime"],
      link: "https://www.marinelink.com/news/advanced-navigation-raises-m-series-c-537055",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2025-10-13
addEvents({
  "2025-10-13": [
    {
      type: "accident",
      title: "RSV Nuyina Research Icebreaker Grounding Off Heard Island - ATSB Report",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-17",
      image: "https://gcaptain.com/wp-content/uploads/2024/10/RSV-Nuyina.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 호주 남극해양 연구선 RSV Nuyina가 2025년 10월 13일 허드 아일랜드 인근 해역에서 좌초 사고 발생. 초기 보도는 경미한 해저 접촉으로 기술했으나 ATSB 보고서에서 선체와 수심 측정용 드롭 킬(drop keel) 모두 해저와 접촉한 것으로 확인됨</p><p>• 기술적 원인: 과학 장비 간섭 회피를 위해 항해용 해깊이 탐지기(echo sounder)를 끈 상태에서 다중빔 음향 시스템의 수심 데이터가 ECDIS(전자해도표시시스템)와 미연동되어 자동 천수역 경보가 작동 불가능한 상태였음</p><p>• 항해상 오류: 선장이 후방 ECDIS로 계획한 항로가 전방 ECDIS에 표시되지 않아 이전 드론 운용 중 사용한 구식 전자 방위선을 따라 항해. 수심 정보 부족 지역의 좁은 통로를 통과하며 좌초</p><p>• 선박 피해: 드롭 킬과 탑재 과학 장비에 주요 손상 발생. 선체는 경미한 긁힘과 도장 손상만 입어 선박 복원력 유지</p><p>• 안전 시사점: 과학 조사와 항해 안전 간의 장비 운용 충돌로 인한 시스템 통합 문제. 해도 데이터 불완전 지역에서의 독립적 항로 추종의 위험성 드러남</p><h3>Key Quotes</h3><p>• "The vessel was operating with its drop keel extended approximately 75 centimeters below its nominal 9-meter draft. The keel housed scientific equipment, including a high-resolution multi-beam echo sounder that remained active following overnight seabed mapping operations." (선박은 명목상 9미터 흘수보다 약 75센티미터 아래로 연장된 드롭 킬로 운항 중이었으며, 수심 측정용 고해상도 다중빔 음향 시스템을 탑재한 상태에서 야간 해저 매핑 작업 후에도 계속 작동 중이었음)</p><p>• "To avoid interference with the survey equipment, the ship's navigational echo sounders had been switched off. While the multi-beam system continued to provide depth data, that information was not integrated into the vessel's electronic chart display and information system (ECDIS), meaning it was not visible on the primary navigation display or capable of triggering automated shallow-water alarms." (조사 장비의 간섭을 회피하기 위해 항해용 해깊이 탐지기를 껐으며, 다중빔 시스템의 수심 데이터는 ECDIS에 미연동되어 주 항해 디스플레이에 표시되지 않고 자동 천수역 경보를 트리거할 수 없었음)</p><h3>Technical Insights</h3><p>• ECDIS 통합 문제: 과학 관측 장비와 항해 시스템의 분리로 인한 정보 비대칭 문제. 다중빔 음향 데이터의 실시간 항해 시스템 통합 필요성 강조</p><p>• 항로 계획의 일관성 부재: 전방·후방 ECDIS 간 표시 오류로 인한 이중 항해 기준 발생. 현대식 선박의 통합 항해 시스템 검증 절차의 중요성 드러남</p><p>• 해도 데이터 신뢰성: 미측정 해역에서의 항해 시 위험성 증가. 극지역 및 오지 해역의 수심 정보 완성도 개선과 보완 항해 기법의 필요성 제기</p><p>• 선박 설계와 운용의 상충: 과학 조사를 위한 장비 확장(드롭 킬)이 항해 안전 마진을 감소시키는 설계 트레이드오프 문제. 극지역 연구선의 특수성을 반영한 운용 절차 표준화 필요</p></div>`,
      tags: ["grounding","research vessel","icebreaker","navigation error","ATSB investigation"],
      link: "https://gcaptain.com/atsb-preliminary-report-sheds-light-on-research-icebreakers-grounding-off-heard-island/",
      coords: [72.9211,-53.1],
      location: "Heard Island, Southern Ocean"
    }
  ]
});

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery: 100+ injuries, 1 fatality",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 2023년 11월 4일 크루즈선 Spirit of Discovery가 비스케이 만의 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상당했고 1명이 사망함</p><p>• 피해 규모: 100명 이상의 승객이 부상했으며, 심각한 부상을 입은 8명의 승객이 입항 후 직접 병원으로 이송됨. 이 중 1명이 나중에 사망</p><p>• 사고 원인: 비스케이 만의 악천후 중 선박의 포드식(pod) 추진 시스템의 추진력 상실로 인한 선박의 불안정한 동요(rolling) 발생</p><p>• 권장사항: 전자 경사계(inclinometer) 국제 운송 요건 포함, 추진기 제조업체의 고객 권고사항 발행, 크루즈 업계의 의료진 자격 강화 및 악천후 시 가구 고정 정책 개선 권고</p><p>• 분류사 및 제조업체 조치: 선박 분류사에 지시 매뉴얼 품질 개선 권고, 동일 포드식 추진 시스템 장착 선박 소유자를 위한 제조업체 고객 조언 발행</p><p>• 관련 기관: 해운청(Maritime and Coastguard Agency), 크루즈선 국제협회(Cruise Lines International Association), 선박 분류사</p><h3>Key Quotes</h3><p>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay."<br>(2023년 11월 4일 정오 직후, 크루즈선 Spirit of Discovery가 비스케이 만을 횡단 중 악천후에서 추진력을 상실했다.)</p><p>• "Over 100 passengers were injured during this period. Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries."<br>(이 기간 동안 100명 이상의 승객이 부상당했다. 심각하게 부상당한 8명의 승객이 입항 후 직접 병원으로 이송되었고, 이 중 1명이 나중에 부상으로 사망했다.)</p><h3>Technical Insights</h3><p>• 포드식 추진 시스템의 취약성: 악천후에서 선박의 추진력 상실로 인한 선박 안정성 저하 문제. 동력 손실 시 선박이 파도에 노출되어 급격한 횡동요(rolling) 발생으로 대규모 인명피해 초래</p><p>• 해운 규제 강화 필요성: 전자 경사계와 같은 선박 안정성 모니터링 장비의 국제 운송 요건 포함 추진으로, 악천후 조기 감지 및 대응 능력 향상 필요</p><p>• 크루즈산업 안전 개선: 의료진의 고급 외상 응급처치(ATLS) 자격 강화 및 악천후 시 선내 가구·물건 고정 정책 개선으로 승객 안전성 강화</p><p>• 메뉴얼 및 운영 표준 개선: 추진 시스템 제조업체의 지시 매뉴얼 품질 개선 및 선주/선박 운영사의 정보 공유로 유사 사고 재발 방지</p></div>`,
      tags: ["passenger vessel","propulsion failure","heavy weather","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-5.5,47],
      location: "Bay of Biscay"
    }
  ]
});

// Auto-collected: 2026-03-17
addEvents({
  "2026-03-17": [
    {
      type: "news",
      title: "IMO Advances Fire Safety Regulations for Vehicle Carriers and Ro-Ro Ships",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-17",
      image: "https://images.marinelink.com/images/maritime/w800/source-169001.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• IMO 선박시스템장비 소위원회(SSE12)가 2026년 3월 9일 개최되어 신에너지 차량 운송 선박의 화재 위험 감소를 위한 화재 방호, 감지 및 소화 장치 적절성 평가 계획을 수정함</p><p>• Interferry가 참여한 회의에서 PCTCs(순수 자동차/트럭 운반선) 및 영상 모니터링 감지 시스템에 대한 잠정 지침 개발을 우선시하기로 결정</p><p>• 로로화물선과 로로여객선(Ro-Pax)의 기본적인 설계 차이에도 불구하고 동일한 규제가 적용될 우려로, 세그먼트별 맞춤형 규제 필요성 강조</p><p>• 전기자동차 화재 진화를 위해 차량운반선의 CO2 시스템은 불충분하나, 로로 데크용 드렌처 시스템(대량 물사용)은 효과적임을 입증</p><p>• 2027년 3월 SSE 13까지 특별대응 그룹에서 진행되며, SOLAS 개정안은 2032년 1월 1일 이상에서 발효 예정</p><p>• 신규 로로여객선(2026년 1월 1일)과 기존 로로여객선(2028년 1월 1일)에 의무화된 영상 모니터링 시스템 요구사항 준수 방법의 불명확성으로 과도한 카메라 설치 우려</p><h3>Key Quotes</h3><p>• "We have historically had to spend a lot of effort making sure that ferries are not dragged into regulations that emanate from another segment's needs." (페리 선사들은 역사적으로 다른 세그먼트의 규제 요구사항이 페리 선박에 부당하게 적용되지 않도록 많은 노력을 기울여왔음)</p><p>• "It is well established that the CO2 systems used to extinguish fires on the ro-ro deck of vehicle carriers may not be sufficient to deal with EV fires, but that is not a ro-ro deck issue." (차량운반선의 로로 데크 화재 진화용 CO2 시스템은 전기자동차 화재 대응에 불충분할 수 있으나, 이는 로로 데크 문제가 아님을 확인함)</p><p>• "We hear from members that it is unclear exactly how to comply with these requirements, which may lead to an excessive number of cameras having to be fitted." (회원사들로부터 영상 모니터링 요구사항 준수 방법이 불명확하여 과도한 수의 카메라 설치가 필요할 수 있다는 의견을 전달받음)</p><h3>Technical Insights</h3><p>• 선박 세그먼트별 규제 차별화의 필요성: 순수 자동차운반선(PCTC), 로로화물선, 로로여객선(Ro-Pax)은 로로 데크를 보유하지만 근본적인 설계 차이가 존재하므로, 전기자동차 화재 대응 규제 시 세그먼트별 맞춤형 기준 수립이 필수적임</p><p>• 화재 진화 시스템의 기술적 차이 인식: CO2 시스템(차량운반선)과 드렌처 시스템(로로여객선)의 성능 차이를 IMO 규제에 반영하여 과도한 규제 부담 방지 필요</p><p>• 영상 모니터링 시스템 표준 명확화: Resolution MSC.550(108)에 따른 "연속 모니터링" 요구사항의 구체적 해석 지침 부재로 인한 산업계 혼선 해소를 위해 IMO 차원의 기술 표준 개발 시급</p><p>• 2027-2028년 규제 개발 로드맵 확립: SSE 13(2027년 3월)까지 특별대응 그룹 검토 후 2028년부터 로로/로로여객선 관련 추가 협의를 거쳐 2032년 SOLAS 개정 발효 예정으로, 산업계에 충분한 준비 기간 제공</p></div>`,
      tags: ["Fire Safety","SOLAS Amendments","Ro-Ro Ships","Electric Vehicles","IMO SSE12"],
      link: "https://www.marinelink.com/news/interferry-says-vessel-differences-need-537059",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-18
addEvents({
  "2026-03-18": [
    {
      type: "accident",
      title: "Two Dead in Confined Space Accident Aboard Barge Near Alaska",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-18",
      image: "https://gcaptain.com/wp-content/uploads/2022/05/FT_qsOjXoAAuPMp.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 사건 개요: 알래스카 케치칸 인근 유조선 바지선(Waynehoe)에서 폐쇄공간 작업 중 4명의 선원이 사고를 당해 2명이 사망하고 2명이 입원</p><p>• 피해자: Ben Fowler와 Sidney Mohorovich 사망, 나머지 2명의 선원은 구조되어 안정적 상태로 보고됨</p><p>• 사고 상황: 일요일 오전 9시 14분 예인선 Chukchi Sea 승무원이 폐쇄공간 내 4명과의 연락 두절을 메이데이 신호로 보고</p><p>• 대응 활동: 미국 해안경비대 45피트 대응정과 자원봉사소방대가 출동하여 선원 2명을 구조했으나, 화요일에 두 번째 사망자가 회수됨</p><p>• 산업적 문제: IMO의 강화된 안전규정에도 불구하고 2023년 폐쇄공간 사고는 34명 사망으로 전년도의 약 2배 증가</p><p>• 근본 원인: 산소 부족이 주요 사인이며, 화물 관련 처리 및 환기 부족이 복합적으로 작용</p><p>---</p><h3>Key Quotes</h3><p>• "Our deepest condolences are with the families and colleagues of the crewmembers affected by this tragic incident. This is a heartbreaking reminder that confined spaces on vessels can contain extremely dangerous, invisible hazards."<br>(이 비극적 사건으로 영향을 받은 선원들의 가족과 동료들에게 깊은 애도를 표합니다. 선박의 폐쇄공간이 극도로 위험하고 눈에 띄지 않는 위해를 포함할 수 있다는 것을 상기시키는 비극입니다.)</p><p>• "These are not new risks, and yet people are still dying. We need to understand what's really happening onboard."<br>(이것은 새로운 위험이 아닌데도 여전히 사람들이 죽고 있습니다. 선박 내에서 실제로 무엇이 일어나고 있는지 이해해야 합니다.)</p><p>---</p><h3>Technical Insights</h3><p>• 폐쇄공간 안전규정의 한계: IMO의 강화된 안전요구사항이 시행되고 있음에도 불구하고 1990년대 후반 이래로 폐쇄공간 사고의 감소 추세가 미미한 상황으로, 규정의 이행과 교육의 실효성에 의문 제기</p><p>• 산업 데이터 분석: 2023년 14건의 사고로 34명 사망(2022년 대비 약 2배)으로 집계되었으며, 벌크선이 폐쇄공간 사고의 약 41%를 차지하고 있어 화물 취급 작업의 위험성이 극대화됨</p><p>• 주요 위험 인자: 산소 결핍(oxygen depletion)이 사망의 주요 원인이며, 이는 불완전한 환기와 화물 관련 생화학적 반응에 의해 유발되는 점에서 선박별 환기 시스템 개선과 지속적인 모니터링 강화 필요</p><p>• 조사 및 예방의 중요성: 미국 해안경비대의 철저한 조사와 InterManager의 글로벌 안전 설문 참여 확대를 통해 실제 현장 데이터 수집 및 맞춤형 예방 전략 수립이 시급한 상황</p></div>`,
      tags: ["confined space","fatality","barge","Alaska","Coast Guard investigation"],
      link: "https://gcaptain.com/two-dead-in-confined-space-accident-aboard-barge-near-alaska/",
      coords: [-131.6433,55.3417],
      location: "Ketchikan, Alaska"
    },
    {
      type: "accident",
      title: "Arctic Metagaz LNG Tanker Drifts Back Into Libyan Waters Two Weeks After Explosion",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-18",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-13T101857Z_1372017699_RC2M3KAQZ2JJ_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-LNG-TANKER.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 러시아 LNG 운반선 Arctic Metagaz는 3월 초 폭발 사건 이후 2주간 지중해를 떠돌아다니다가 리비아 수색구조 구역으로 복귀한 상태로, 현재 승무원이 없는 유령선 상태로 운항 중</p><p>• 선박의 4개 LNG 탱크 중 2개만 온전하며, 수백 톤의 액화메탄과 최대 800톤의 석유 제품을 여전히 적재하고 있을 가능성으로 인해 환경 오염 위험성 극대화</p><p>• 이탈리아 민방위청(Protezione Civile)과 남부 EU 6개국(이탈리아, 프랑스, 스페인, 몰타, 그리스, 키프로스)은 당해 선박을 "실질적 해양 환경 위험"으로 분류하며 긴급 대응 태세 유지</p><p>• 초기 폭발 원인은 드론 공격으로 추정되며, 우크라이나-러시아 전쟁의 해상 영역 확대 가능성 시사</p><p>• 러시아 노바텍 계열사 소유 선박의 법적 지위 불명확로 인해 국제적 대응 지연</p><h3>Key Quotes</h3><p>• "The dispersion of gas is a very concrete possibility" <br>(기체의 확산은 매우 현실적인 가능성이다 - 이탈리아 민방위청 대변인)</p><p>• "The vessel is an environmental bomb that risks doing serious damage to the entire surrounding area"<br>(당해 선박은 주변 전역에 심각한 피해를 초래할 위험이 있는 환경 폭탄이다 - 이탈리아 총리 차관 알프레도 만토바노)</p><p>• "If asked by Malta or by the EU, we are ready to intervene within hours"<br>(몰타나 EU의 요청이 있으면 우리는 수시간 내에 개입할 준비가 되어 있다 - 이탈리아 총리 차관)</p><h3>Technical Insights</h3><p>• 국제해양법 및 SAR 구역 문제: 선박이 세 개의 검색구조 구역(리비아, 몰타, 이탈리아)을 횡단하면서 어느 국가도 책임을 인정하지 않는 '법적 공백' 발생으로, UNCLOS 및 SAR 협약 개선의 필요성 대두</p><p>• LNG 운반선의 안전 규제 강화: Arctic Metagaz의 경우처럼 폭발 후에도 장시간 운항하는 위험한 상황을 방지하기 위해 IMO의 LNG 운반선 구조 안전 기준 및 자동 격리 시스템 도입 검토 필요</p><p>• 해상 군사 분쟁의 민간 해운 영향: 우크라이나-러시아 전쟁이 지중해까지 확대되면서 민간 에너지 운송 선박이 전쟁 대상화 위험 증가, 선박 보안 및 경로 다변화 전략 필수화</p><p>• 환경 재해 대응 체계: 부유식 LNG 탱크의 누출 방지 및 회수 기술 개발, 그리고 국제적 환경 재해 공동 대응 프로토콜 수립의 시급성 강조</p></div>`,
      tags: ["LNG tanker","explosion","environmental hazard","Mediterranean","ghost ship"],
      link: "https://gcaptain.com/two-weeks-after-explosion-arctic-metagaz-drifts-back-into-libyan-waters-amid-continued-fears-of-explosion-and-environmental-disaster/",
      coords: [18.5,34.5],
      location: "Mediterranean Sea between Malta and Libya"
    },
    {
      type: "accident",
      title: "Iran Fires Missiles at Qatar Energy Hub, Escalates Gulf Conflict",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-18",
      image: "https://images.marinelink.com/images/maritime/w800/wollwerth-imagery-169039.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 카타르 라스 라판 산업도시의 에너지 허브를 미사일로 공격하여 광범위한 피해 발생 - QatarEnergy가 심각한 손상 보고<br>• 공격으로 인해 벤치마크 브렌트유가 5% 상승하여 배럴당 $108 이상으로 급등하고 글로벌 에너지 공급 차질 심화<br>• 이란은 사우디아라비아 4개 탄도미사일 격추되었으나 지역 내 석유·가스 시설을 "정당한 목표물"로 지정하여 추가 공격 위협<br>• 분쟁으로 인해 세계 최대 에너지 생산 지역에서의 해운이 이미 중단되었으며 인프라 장기 손상 가능성 대두<br>• 미국 디젤유가 갤런당 $5 이상으로 상승하여 2022년 인플레이션 이후 최고 수준에 도달, 글로벌 경제에 영향</p><h3>Key Quotes</h3><p>• "extensive damage" after the Ras Laffan Industrial City was hit by Iranian missiles (이란 미사일이 라스 라판 산업도시를 타격하면서 광범위한 피해 발생)<br>• Iran listed several prominent regional oil and gas facilities it called "direct and legitimate targets" (이란이 지역 내 여러 석유·가스 시설을 "직접적이고 정당한 목표물"로 지정)<br>• The conflict quickly spread to neighboring countries and has already halted shipping from the world's most important energy-producing region (분쟁이 주변국으로 빠르게 확산되었으며 세계 최대 에너지 생산 지역에서의 해운이 이미 중단됨)</p><h3>Technical Insights</h3><p>• 해운 중단의 심각성: 페르시아만 해역의 전략적 위치로 인한 해운 완전 중단은 글로벌 해상 물류 및 에너지 공급망에 즉각적 영향을 미치며, 국제 해운 규제 및 COLREG 준수 자체가 불가능한 상황 발생<br>• 에너지 인프라 보호 필요성: IMO 및 국제해사기구는 에너지 수송 선박 및 해상 에너지 시설에 대한 보안 강화 지침(ISPS Code) 재검토 필요<br>• 자율운항선 운영의 위험성: 현재와 같은 분쟁 상황에서 자율운항선의 운영은 인적 판단이 제한되어 더욱 위험하며, 전략적 요충지에서의 AI 항법 시스템 신뢰성 확보 필수<br>• 산업 연쇄 효과: 원유 가격 급등으로 인한 운영비 상승이 해운 업계의 경제성을 악화시키고, 자동화 및 연료 효율 개선에 대한 투자 재검토 필요</p></div>`,
      tags: ["missile attack","energy infrastructure","Qatar","Iran","oil prices","shipping disruption"],
      link: "https://www.marinelink.com/news/iran-fires-missiles-qatar-energy-hub-537096",
      coords: [51.5531,25.2854],
      location: "Ras Laffan Industrial City, Qatar / Persian Gulf"
    },
    {
      type: "news",
      title: "Netherlands Equips Warships with V-BAT Drones for Naval Reconnaissance",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-03-18",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 네덜란드 해군이 V-BAT 무인항공시스템 12대를 획득하여 함정에 장착 - 노르웨이 인근 Cold Response 훈련 중 실전 시험 완료<br>• 레이더 및 카메라 시스템으로 장시간 정찰 및 정보 수집 임무 수행 가능한 플랫폼<br>• 함정 기반 무인 정찰 체계 도입으로 해군의 감시 및 정보 수집 능력 대폭 강화<br>• 해양 방위 작전에서 자동화 및 무인화 기술의 확대 적용 추세 반영<br>• V-BAT의 확장 운용 시간과 장거리 정찰 능력이 해상 작전 효율성 증대</p><h3>Key Quotes</h3><br>• "V-BAT drones are equipped with radar and camera systems designed to conduct reconnaissance and gather intelligence over extended periods" <br>(V-BAT 드론은 레이더와 카메라 시스템을 탑재하여 장시간 정찰 및 정보 수집 임무 수행 가능)</p><h3>Technical Insights</h3><br>• 함정 기반 무인항공시스템(UAS) 도입으로 해군 전술의 자동화 및 무인화 추세 가속화 - 탑승 인원 감소 및 안전성 향상<br>• V-BAT의 레이더 탑재로 해상 감시 범위 확대 및 초지평선 능력(BVLOS) 강화 - IMO 자율운항 기술과 유사한 센서 기반 의사결정 시스템 활용<br>• 다국적 훈련 참여를 통한 무인 체계 운용 기준 표준화 - 향후 해상 자율 운항 선박의 항해 안전 규제(COLREG) 적용 기반 구축</p></div>`,
      tags: ["Naval Technology","Unmanned Aerial Systems","Dutch Navy","Reconnaissance Drones"],
      link: "https://defence-blog.com/netherlands-equips-warships-with-v-bat-drones/",
      coords: [5.2913,52.1326],
      location: "Netherlands"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-18
addEvents({
  "2026-03-18": [
    {
      type: "accident",
      title: "Iran Fires Missiles at Qatar Energy Hub in Middle East Escalation",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-18",
      image: "https://images.marinelink.com/images/maritime/w800/wollwerth-imagery-169039.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 카타르의 라스 라판 산업도시에 미사일을 발사하여 QatarEnergy의 주요 에너지 허브에 광범위한 손상 초래<br>• 이스라엘의 이란 남파스 가스전 시설 공격에 대한 보복으로, 사우디아라비아도 4발의 탄도미사일과 드론 공격 격퇴<br>• 세계 최대 천연가스 매장지인 남파스 지역의 양측 시설 손상으로 전 지구적 에너지 공급 차질 심화<br>• 유가(브렌트유) 배럴당 $108 이상으로 약 5% 상승, 미국 디젤유가 갤런당 $5 초과(2022년 이후 최고 수준)<br>• 페르시안만 지역 해운 전면 중단 상태이며, 에너지 인프라에 대한 장기적 손상 가능성 높음<br>• 카타르 외교부, 이스라엘의 "위험하고 무책임한" 공격 규탄하고 이란 고위 외교관 2명 추방 조치</p><h3>Key Quotes</h3><p>• "extensive damage after the Ras Laffan Industrial City, an energy-industry hub, was hit by Iranian missiles" (라스 라판 산업 허브가 이란 미사일에 타격을 받아 광범위한 손상 발생)</p><p>• "The conflict quickly spread to neighboring countries and has already halted shipping from the world's most important energy-producing region" (분쟁이 인접국으로 빠르게 확산되었으며 세계 최대 에너지 생산 지역으로부터의 해운이 이미 전면 중단)</p><p>• "Trump knew of Israel's plan to attack the gas field in advance and supported it" (트럼프 대통령이 이스라엘의 가스전 공격 계획을 사전에 인지하고 지지함)</p><h3>Technical Insights</h3><p>• 해상 에너지 인프라 보호: 페르시안만의 전략적 에너지 시설 손상은 해운 경로 통제 및 에너지 수송 안보에 심각한 영향을 미치며, 국제 해상 보안 체계의 재정립 필요</p><p>• COLREG 및 국제해사법 적용의 한계: 무장 분쟁 지역에서의 상선 및 에너지 수송선에 대한 국제 규칙 적용 불가능 상태로, IMO와 국제사회의 중립 해역 보호 메커니즘 강화 촉구</p><p>• 유가 변동성과 해운업 경영 위기: 유가 급등(5%)과 연료비 상승은 해운사의 연료 유(bunker) 비용 폭증을 초래하며, 장기 공급 차질로 운임 급등 예상</p><p>• 자율항해 기술의 전환적 수요: 고위험 분쟁 지역의 해운 감소로 인한 자동화·자율선박 기술 도입 가속화 및 원격 운영 시스템 수요 급증 예상</p></div>`,
      tags: ["missile attack","energy infrastructure","Gulf conflict","oil disruption","geopolitical"],
      link: "https://www.marinelink.com/news/iran-fires-missiles-qatar-energy-hub-537096",
      coords: [51.5,25.3],
      location: "Ras Laffan Industrial City, Qatar / Persian Gulf"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-18
addEvents({
  "2026-03-18": [
    {
      type: "accident",
      title: "Safeen Prestige Containership Reported Burning Near Hormuz After Suspected Second Strike",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-19",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Safeen-Prestige-scaled.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 피격 및 화재 발생: 이집트 소유, 몰타 선박 Safeen Prestige(IMO 9593517)가 호르무즈 해협에서 의심되는 두 번째 공격 이후 화재가 발생한 것으로 보고됨</p><p>• 반복되는 피해: 동일 선박이 3월 4일 첫 공격으로 엔진룸 화재 및 승선원 전원 기선 후 3월 6일 지원 예인선까지 추가 피격으로 최소 4명 사망</p><p>• 지역 해양 위기 심화: 호르무즈 해협 일일 통과 선박이 정상의 95% 이상 감소(몇 척/일 수준)하며 글로벌 해운 차질 심각</p><p>• 광범위한 공격 패턴: 2월 말 이후 20개 이상 사건 발생, 다양한 선박 유형을 목표로 한 광역 해상 봉쇄 캠페인으로 분석</p><p>• 국제해사기구(IMO) 경고: 민간 해운인들이 활전 지역 교차 피해를 입고 있으며, JMIC가 위험도 CRITICAL 수준 유지 중</p><p>• 최근 추가 사건: 3월 18-19일 UAE 동부와 카타르 서부에서 추가 2건의 미확인 발사체 피격 사건 보고</p><h3>Key Quotes</h3><p>• "The Safeen Prestige 'may have been struck again,' adding that the vessel appeared to be on fire as of March 18." <br>(Safeen Prestige가 '다시 피격을 입했을 가능성이 있으며' 3월 18일 현재 화재 상태로 보임)</p><p>• "The International Maritime Organization warned at the time that civilian mariners were increasingly being caught in the crossfire as the Strait of Hormuz deteriorates into an active conflict zone."<br>(국제해사기구가 호르무즈 해협이 활발한 분쟁 지역으로 악화되면서 민간 선원들이 점점 더 교차 피해에 노출되고 있다고 경고)</p><p>• "Vessel traffic through the strait has collapsed to just a handful of daily transits—down more than 95% from normal levels—as shipowners avoid the area."<br>(해협 통과 선박 교통이 일일 소수 척 수준으로 붕괴되어 정상의 95% 이상 감소)</p><h3>Technical Insights</h3><p>• 해상 안전 규제 적용 한계: 호르무즈 해협의 무장 분쟁 상황에서 IMO 해상 안전 규칙 및 COLREG이 사실상 무력화되며, 국제 해운 질서 붕괴 상태</p><p>• 공격 대상 다양화 전략: 특정 선박이 아닌 광역 봉쇄 목표의 체계적 공격으로 선박 유형·국적·보유사 무관하게 위험에 노출되는 새로운 위협 패턴 확인</p><p>• 글로벌 해운망 중단 영향: 정상 대비 95% 이상 교통량 감소로 인한 해상 운송비 급등, 공급망 차질, 에너지 가격 상승 등 세계 경제 파급 효과 심각</p><p>• 재난 대응 체계 부재: 민간 지원선박(예인선) 피격으로 인한 대규모 인명 피해 발생 시 해상 구조 및 의료 지원 인프라 부족으로 인한 2차 피해 위험 증대</p></div>`,
      tags: ["Strait of Hormuz","Armed Conflict","Containership","Fire","Maritime Security","Projectile Attack"],
      link: "https://gcaptain.com/second-strike-safeen-prestige-reported-burning-near-hormuz/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Missile strikes cause fires and extensive damage at QatarEnergy's LNG facilities in Ras Laffan",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-19",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/11/Ras-Laffan-petrochemicals-project-in-Qatar-aerial-view-Source-CPChem.jpg?image-crop-positioner-ts=1762177598",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2026년 3월 18-19일 카타르의 라스 라판 산업도시 내 QatarEnergy의 LNG 시설들이 미사일 공격으로 광범위한 손상을 입음<br>• 이란의 보복 공격으로 Pearl GTL 시설을 포함한 여러 LNG 인프라가 화재 발생 및 광범위한 피해 야기<br>• QatarEnergy는 force majeure 선언으로 LNG 구매자들에게 공급 중단 통보<br>• 호르무즈 해협 폐쇄 및 중동 지역 에너지 자산 보안 위협으로 글로벌 LNG 시장 차질 초래<br>• 인명 피해 없음을 확인했으나 긴급 대응팀이 화재 진화 및 손상 통제에 즉각 투입<br>• 카타르 외교부는 이란 대사관 군사·보안 요원 및 직원을 persona non grata 선포</p><h3>Key Quotes</h3><p>• "Emergency response teams were deployed immediately to contain the resulting fires, as extensive damage has been caused. All personnel have been accounted for and no casualties have been reported at this time." (긴급 대응팀이 화재 진화를 위해 즉각 투입되었으며, 광범위한 손상이 발생했으나 인원 피해는 없음)</p><p>• "a dangerous escalation, a flagrant violation of its sovereignty, and a direct threat to its national security." (위험한 수준의 군사 확대, 주권 침해, 국가 안보에 대한 직접적 위협으로 평가)</p><h3>Technical Insights</h3><p>• 에너지 공급망 차질: 호르무즈 해협 폐쇄 및 LNG 시설 공격으로 글로벌 LNG 공급 중단 초래 - 아시아-유럽 간 LNG 수급 불균형 야기 및 유가 상승 압력($100/배럴 도달 가능성)</p><p>• Force Majeure 선언 영향: QatarEnergy의 LNG 구매 계약 일시 중단으로 인한 국제 에너지 거래의 법적·상업적 혼란 및 해양 운송 일정 지연</p><p>• 해상 보안 위협 심화: 중동 해역 내 LNG 수송선 운항 위험도 급증 - COLREG 준수 및 항해 안전 프로토콜 재검토 필요, 자율운항선박의 위험 회피 알고리즘 고도화 시급</p><p>• 지정학적 리스크 관리: 미사일 공격 기반시설 방어 기술 고도화 및 항만-해상 통합 보안 체계 강화 필요 - 국제해사기구(IMO) 차원의 고위험 해역 항행 지침 개정 가능성</p></div>`,
      tags: ["LNG infrastructure","missile attack","Qatar","Ras Laffan","force majeure"],
      link: "https://www.offshore-energy.biz/missile-strikes-leave-fires-and-extensive-damage-in-its-wake-at-qatarenergys-lng-assets/",
      coords: [51.5233,24.9774],
      location: "Ras Laffan Industrial City, Qatar"
    }
  ]
});

// Auto-collected: 2026-03-19
addEvents({
  "2026-03-19": [
    {
      type: "news",
      title: "MSC Formalizes Joint Control of South Korean Tanker Giant Sinokor After Massive VLCC Buying Spree",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-19",
      image: "https://gcaptain.com/wp-content/uploads/2023/03/shutterstock_1779485036-800x600.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MSC(Mediterranean Shipping Company)가 룩셈부르크 자회사 SAS Shipping Agencies Services를 통해 한국 태닉커사 시노코(Sinokor Maritime)의 공동 지배권 취득 추진 - 2026년 3월 11일 키프로스 경쟁 심사 신청서로 공식 확인됨</p><p>• 시노코는 2026년 초 대규모 초대형유조선(VLCC) 매입 및 용선을 통해 100~120척 규모의 유조선 보유 추정 - 현물 선대의 약 1/3에 해당하는 규모</p><p>• VLCC 현물운임이 연초 하루 10만 달러를 넘어서면서 유조선 시장 급등 - 운임 인상과 톤수 부족에 대응한 적극적 매입 전략</p><p>• 그동안 모호했던 MSC의 역할이 공식화 - 창립자 Gianluigi Aponte 관련 기업들의 암묵적 지원이 이제 정식 파트너십으로 전환</p><p>• 컨테이너선 업계 최대 기업 MSC의 다각화 전략 심화 - 터미널, 물류, 크루즈선을 넘어 대규모 원유 유조선 시장 진출 추진</p><h3>Key Quotes</h3><p>• "Sinokor has stunned tanker markets in early 2026 after rapidly building a massive position in very large crude carriers (VLCCs). Industry estimates suggest the company now controls on the order of 100 to 120 supertankers—potentially up to a third of the available spot fleet—following an aggressive wave of secondhand purchases and charters." <br>(시노코가 2026년 초 VLCC 대량 매입으로 현물선대의 약 1/3에 해당하는 100~120척을 장악하며 시장을 놀라게 함)</p><p>• "That buying spree has coincided with a sharp surge in tanker earnings, with VLCC spot rates jumping above $100,000 per day earlier this year as charterers rushed to secure tonnage amid tightening availability."<br>(톤수 부족 속에 용선사들의 급한 확보 수요로 현물운임이 하루 10만 달러 이상 급등)</p><p>• "The move is significant for MSC, the world's largest container shipping line, which has historically focused on liner trades but has increasingly expanded across the maritime sectors—from terminals and logistics to cruise and now potentially large-scale exposure to crude tanker markets."<br>(세계 최대 컨테이너선사 MSC가 선형 사업에서 벗어나 다각화 확대 추진)</p><h3>Technical Insights</h3><p>• 유조선 시장 집중도 심화: 단일 기업이 현물선대의 30% 이상을 장악하게 되면 시장 수급 조절 능력 강화로 COLREG 외 운영 효율성 및 환경규제 대응 단계별 진행 가능성 증대</p><p>• 대형 선사의 다각화 전략: MSC 같은 메가 캐리어의 벌크/유조선 사업 진출은 IMO 2030/2050 탄소중립 규제에 대응한 선대 다양화 및 에너지 전환 포트폴리오 구축의 일환으로 해석 가능</p><p>• 자본 집중과 시장 효율성: 구형 VLCC의 일괄 매입 및 현대화를 통한 규제 선제 대응 가능 - 신 IMO 규제 기준 충족 선박 수급 경쟁력 강화</p><p>• 지정학적 리스크 헤징: 호르무즈 해협 폐쇄 위험 속 다국적 선사의 선대 확보 전략은 공급망 안정성 확보 및 운임 변동성 최소화 추진으로 해석</p></div>`,
      tags: ["MSC","Sinokor Maritime","VLCC","Tanker Markets","Shipping Industry","Joint Control"],
      link: "https://gcaptain.com/msc-formalizes-tie-up-with-tanker-giant-sinokor-after-massive-vlcc-buying-spree/",
      coords: [22.2749,60.1699],
      location: "Cyprus (filing jurisdiction) / South Korea (Sinokor HQ)"
    }
  ]
});

// Auto-collected: 2026-03-16
addEvents({
  "2026-03-16": [
    {
      type: "news",
      title: "U.S. Navy Establishes Five New Program Acquisition Executives Including Autonomous Systems Office",
      source: "USNI News",
      sourceMeta: "news.usni.org · 2026-03-16",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해군은 프로그램 획득 임원(PAE)으로 5개의 새로운 사무실을 신설하여 함정 및 장비 구매 및 유지 방식의 개혁을 지속하고 있음<br>• 해군장관 John Phelan은 2025년 12월 첫 번째 사무실인 'PAE 로봇 및 자율시스템(Robotic and Autonomous Systems)' 신설에 이어 추가로 5개 PAE 사무실 신설 발표<br>• PAE Maritime은 Chris Miller(현 Naval Sea Systems Command 행정부장)가 주도하고, PAE Undersea는 부장관 Robert Gaucher가 잠수함 직보 포트폴리오 관리자 역할 겸임<br>• PAE Industrial Operations은 부장관 Jim Downey가 지휘하는 등 고위급 인사가 각 부서를 맡아 조직의 위상과 실행력 강화<br>• 이는 해군의 자동화, 로봇화, 자율시스템에 대한 전략적 중요성 강조 및 획득 체계 현대화의 신호</p><h3>Key Quotes</h3><p>• "Navy established five new program acquisition executives as the service continues to reform how it buys and sustains platforms and equipment" (해군이 함정과 장비 구매 및 유지 방식을 개혁하면서 5개의 새로운 프로그램 획득 임원을 신설함)</p><p>• "PAE robotic and autonomous systems, in December" (지난 12월 로봇 및 자율시스템 획득 임원실 신설)</p><h3>Technical Insights</h3><p>• 해군의 자율시스템 획득 전담 조직(PAE Robotic and Autonomous Systems) 신설은 무인 함정, 드론, 자율 로봇 기술의 획득·개발 가속화를 의도하며, 미래 해전력 구조 전환의 신호로 평가됨</p><p>• 해사 및 수중 획득 임원실(PAE Maritime, PAE Undersea) 별도 구성은 수상함, 잠수함, 해양 로봇 플랫폼 각각에 특화된 기술 역량 강화 및 조직 효율성 제고를 목표로 함</p><p>• IMO의 해양 자율선박 규제 논의와 맞물려, 군사 분야의 자율화 추진은 민간 해운업계의 기술 표준 설정 및 규제 발전에도 간접적 영향을 미칠 것으로 예상됨</p></div>`,
      tags: ["U.S. Navy","Autonomous Systems","Defense Acquisition","Naval Technology","Organizational Reform"],
      link: "https://news.usni.org/2026/03/16/secnav-phelan-stands-up-5-new-offices-for-navy-marine-acquisition",
      coords: [0,0],
      location: "Global (U.S. Navy)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-18
addEvents({
  "2026-03-18": [
    {
      type: "accident",
      title: "Safeen Prestige Containership Reported Burning After Second Strike in Strait of Hormuz",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-19",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Safeen-Prestige-scaled.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 이중 피격 사건: 이집트 소유, 몰타 기국의 컨테이너선 Safeen Prestige(IMO 9593517)가 호르무즈 해협에서 의심스러운 두 번째 공격으로 화재 발생 보고</p><p>• 선박 및 피해: 3월 4일 첫 피격으로 엔진실 화재 발생 및 승무원 기선탈출, 3월 6일 보조 예인선 공격으로 최소 4명 사망</p><p>• 광역 공격 캠페인: 지난 2월 말 분쟁 이후 20건 이상의 사건 발생, 호르무즈 해협 통행량 95% 이상 감소</p><p>• 지역 maritime threat level: 합동해양정보센터(JMIC)에서 CRITICAL 경고 유지, 3월 18-19일 추가 2건 피격 사건 보고</p><p>• 광범위한 운영 영향: 아라비아만, 호르무즈 해협, 오만만에 걸친 광범위한 해운 운영 차질 및 선사들의 해역 회피</p><h3>Key Quotes</h3><p>• "The Safeen Prestige may have been struck again," adding that the vessel appeared to be on fire as of March 18. (Safeen Prestige가 다시 피격되었을 가능성이 있으며, 3월 18일 현재 화재 발생 상태)</p><p>• "The International Maritime Organization warned at the time that civilian mariners were increasingly being caught in the crossfire as the Strait of Hormuz deteriorates into an active conflict zone." (국제해사기구는 호르무즈 해협이 활성 분쟁 지역으로 악화되면서 민간 해원들이 교전 중에 점점 더 피해를 입고 있다고 경고)</p><p>• "Vessel traffic through the strait has collapsed to just a handful of daily transits—down more than 95% from normal levels—as shipowners avoid the area." (선사들의 해역 회피로 해협 통행량이 일일 수 척으로 붕괴되어 정상 수준 대비 95% 이상 감소)</p><h3>Technical Insights</h3><p>• 해양 보안 위협 에스컬레이션: 호르무즈 해협에서의 반복적 피격 사건은 특정 선박이 아닌 광역 해운 운영 마비를 목표로 한 체계적 캠페인 특성을 나타내며, IMO 차원의 해역 위험도 재평가 필요</p><p>• 승무원 안전 및 인도주의적 우려: 예인선 공격으로 인한 사상자 발생은 COLREG/IMO 국제협약상 민간 선박 및 승무원 보호 의무의 심각한 위반으로, 국제 해양법 집행 메커니즘의 강화 필요</p><p>• 해운 산업 경제적 영향: 통행량 95% 급감은 국제 에너지, 무역 공급망에 심각한 영향을 초래하며, 자율운항선박(MASS) 도입 시 이러한 고위험 해역에서의 운영 안전성 및 통제 능력 검증의 중요성 강조</p><p>• 해역 회피 및 대체 경로 운영: 광역 해운 마비로 인한 장거리 우회항로 증가는 연료비, 운항 시간 증가로 이어져 업계 전체 수익성 악화 및 항로 보험료 인상 유발</p></div>`,
      tags: ["Strait of Hormuz","Containership Fire","Suspected Attack","Maritime Security","Safeen Prestige"],
      link: "https://gcaptain.com/second-strike-safeen-prestige-reported-burning-near-hormuz/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2026-03-19
addEvents({
  "2026-03-19": [
    {
      type: "news",
      title: "MSC Formalizes Joint Control of Tanker Giant Sinokor After Massive VLCC Buying Spree",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-19",
      image: "https://gcaptain.com/wp-content/uploads/2023/03/shutterstock_1779485036-800x600.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MSC와 Sinokor의 공식적 지배구조 변경: 3월 11일 키프로스에 제출된 경쟁 심사 서류에서 MSC가 룩셈부르크 자회사 SAS Shipping Agencies Services를 통해 한국 선사 Sinokor Maritime의 공동 지배권을 확보하기로 결정했음이 공식화됨</p><p>• 대규모 VLCC 확보 및 시장 지배력: Sinokor는 2026년 초 극도로 공격적인 중고선박 구매 및 용선을 통해 초대형유조선(VLCC) 100~120척을 확보하여 현물 시장의 약 3분의 1을 장악한 것으로 추정됨</p><p>• 유조선 운임 급등의 배경: 이 같은 구매 공세는 유조선 운임 급등(VLCC 현물 운임이 연초 일일 $100,000을 초과)과 동시에 진행되었으며, 선주들이 공급 부족에 대응하기 위해 용선을 급히 확보한 상황임을 반영</p><p>• MSC의 다각화 전략 심화: 세계 최대 컨테이너선사 MSC가 전통적 정기선 사업에서 벗어나 터미널, 로지스틱스, 크루즈, 그리고 원유유조선 시장으로의 대규모 진출을 추진 중</p><p>• 불명확했던 관계의 공식화: 기존에는 창립자 Gianluigi Aponte 관련 회사가 Sinokor 선박 취득에 자금을 지원한다는 업계 추측이 있었으나, 이번 키프로스 서류 제출로 공식적인 파트너십이 형성되었음</p><p>• 거래 조건 미공개: 재무 조건 및 구체적 거래 내용은 공개되지 않았으며, MSC와 Sinokor 모두 정식 성명을 발표하지 않은 상태</p><h3>Key Quotes</h3><p>• "Sinokor has stunned tanker markets in early 2026 after rapidly building a massive position in very large crude carriers (VLCCs). Industry estimates suggest the company now controls on the order of 100 to 120 supertankers—potentially up to a third of the available spot fleet" <br>(Sinokor는 2026년 초 초대형유조선에서 대규모 포지션을 빠르게 구축하여 유조선 시장을 놀라게 했으며, 업계 추정에 따르면 약 100~120척의 초대형유조선을 보유하여 현물 시장의 최대 3분의 1을 지배하고 있음)</p><p>• "That buying spree has coincided with a sharp surge in tanker earnings, with VLCC spot rates jumping above $100,000 per day earlier this year as charterers rushed to secure tonnage amid tightening availability"<br>(이러한 구매 공세는 유조선 운임의 급등과 동시에 진행되었으며, VLCC 현물 운임이 올해 초 일일 $100,000을 초과하며 급증함에 따라 용선자들이 공급 부족 속에서 선복을 급히 확보하려 함)</p><h3>Technical Insights</h3><p>• 해운 시장 집중도 심화: MSC-Sinokor 제휴를 통해 단일 엔티티가 VLCC 현물 시장의 3분의 1 이상을 장악하게 되어 시장 집중도가 극도로 높아지고 있으며, 이는 해운 업계 규제 및 독점 정책에 대한 감시 강화를 야기할 가능성이 높음</p><p>• 컨테이너선사의 유조선 시장 진출: 기존에 정기선(liner) 사업에 집중하던 MSC가 벌크선 및 유조선 시장으로 적극 진출하는 추세는 해운 산업의 경계 붕괴와 대형 선사들의 다각화 전략이 심화되고 있음을 의미</p><p>• 용선 시장의 구조적 변화: 대형 선사가 자체 선복 장악 및 용</p></div>`,
      tags: ["MSC","Sinokor Maritime","VLCC","Tanker Market","Joint Control","Shipping Business"],
      link: "https://gcaptain.com/msc-formalizes-tie-up-with-tanker-giant-sinokor-after-massive-vlcc-buying-spree/",
      coords: [24.9383,60.1695],
      location: "Cyprus (Filing Location) / South Korea (Sinokor HQ)"
    }
  ]
});

// Auto-collected: 2026-03-16
addEvents({
  "2026-03-16": [
    {
      type: "news",
      title: "US Navy Establishes 5 New Program Acquisition Executives for Maritime and Autonomous Systems",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-03-16",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해군은 전함 및 장비 구매 및 유지 체계 개혁의 일환으로 5개의 새로운 프로그램 획득 임원(PAE) 직책 신설 발표<br>• 존 펠란 해군장관 주도로 로봇 및 자율시스템 PAE를 12월에 처음 설립한 후 4개 추가 직책 신설<br>• 크리스 밀러(해군해상시스템사령부 행정이사)가 PAE 해양담당 리더로, 로버트 가우처 중장이 PAE 해저전력 리더로 임명<br>• 짐 다우니 중장이 PAE 산업운영 담당 리더로 지정되어 해군의 획득 구조 현대화 추진<br>• 자율시스템과 해양기술 중심의 획득 체계 개편으로 미래 전력 구축 가속화 목표</p><h3>Key Quotes</h3><p>• "Navy established five new program acquisition executives as the service continues to reform how it buys and sustains platforms and equipment" <br>(해군이 함정과 장비 구매 및 유지 방식을 개혁하면서 5개의 새로운 프로그램 획득 임원을 신설했다)</p><p>• "PAE robotic and autonomous systems" first standing up in December<br>(12월에 로봇 및 자율시스템 획득임원실이 처음 신설되었다)</p><h3>Technical Insights</h3><p>• 해군의 자율시스템 획득 체계 분리 신설은 무인선박(USV), 수중무인체(UUV) 등 차세대 해양 자동화 기술 도입 가속화 신호<br>• 해양과 해저전력 획득 임원 분리로 민간 자율해운과 국방 자율시스템 기술 동향의 상호 영향 증대 가능성<br>• IMO 자율선박 규정 논의와 미해군의 자율화 전략이 병행되는 시기로, 국제 해양기술 표준화에 미국 영향력 강화 예상<br>• 산업운영 PAE 신설은 선박/장비 공급망과 자동화 기술 통합을 통한 획득 효율성 제고 목표, 민간 해운업계 자동화 투자에도 참고 사례 제공</p></div>`,
      tags: ["Navy Acquisition","Autonomous Systems","Maritime Technology","Defense Reform"],
      link: "https://news.usni.org/2026/03/16/secnav-phelan-stands-up-5-new-offices-for-navy-marine-acquisition",
      coords: [38.8816,-77.0369],
      location: "Washington, D.C."
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-20
addEvents({
  "2026-03-20": [
    {
      type: "news",
      title: "SBM Offshore Advances FPSO Technology Through Standardization, Robotics, and AI Solutions",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-20",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/03/Fast4Ward-SBM-Offshore.jpg?image-crop-positioner-ts=1773765098",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• SBM Offshore는 Fast4Ward 프로그램을 통해 일회성 맞춤형 FPSO 설계에서 표준화되고 모듈화된 데이터 중심 운영 모델로 전환했습니다.</p><p>• 로봇공학, AI 예측 유지보수, 디지털 트윈, 그리고 탄소 포집 기술을 적극 도입하여 미래 에너지 환경에 대응하고 있습니다.</p><p>• 데이터 단편화, 조직 문화 변화, 배출 감소라는 세 가지 주요 과제를 디지털 통합, 교육, 전략적 파트너십(SLB, Cognite, 미쓰비시 중공업)으로 해결 중입니다.</p><p>• COO Alex Glenn은 표준화된 선체와 상부 구조 모듈을 통해 납기 시간 단축과 원가 예측 가능성을 향상시켰다고 설명했습니다.</p><p>• 안전성, 지속 가능성, 효율성이 주요 추진 동력이며, 글로벌 실행 센터 확대와 디지털 플랫폼 활용이 핵심 성장 전략입니다.</p><h3>Key Quotes</h3><p>• "We have moved from one-off, bespoke FPSOs to a standardized, modular, and data-powered operating model" (일회성 맞춤형 FPSO에서 표준화된 모듈식 데이터 기반 운영 모델로 전환했습니다)</p><p>• "Robotics, AI-enabled solutions, electrification, and carbon-capture technologies would remain in use to position the firm for future growth" (로봇공학, AI 솔루션, 전기화, 탄소 포집 기술이 향후 성장을 위한 핵심 기술입니다)</p><h3>Technical Insights</h3><p>• AI 기반 예측 유지보수 및 디지털 트윈 기술: SBM Offshore는 Cognite 및 SLB와의 파트너십을 통해 FPSO 운영의 실시간 모니터링과 장애 예측 능력을 강화하고 있으며, 이는 운영 비용 절감과 가용성 향상으로 이어집니다.</p><p>• 표준화와 모듈화의 산업적 파급효과: 사전 설계된 선체와 상부 구조 모듈은 건조 기간 단축과 예측 가능한 원가 관리를 실현하며, 이는 해양 산업 전반의 효율성 개선 모델로 작용할 것으로 예상됩니다.</p><p>• 탄소 저감 및 지속 가능성 이행: 전기화 기술과 탄소 포집 솔루션의 도입은 IMO 규제 강화에 대응하는 동시에 에너지 전환기의 부유식 생산 설비의 경쟁력을 확보하는 전략입니다.</p><p>• 데이터 거버넌스와 디지털 통합의 과제: 기존 사일로화된 데이터 환경 극복과 조직 문화 변화는 대규모 오프쇼어 운영 기업의 디지털 혁신 단계에서 가장 높은 리스크 요소이며, 이를 성공적으로 관리하는 것이 향후 경쟁력의 핵심입니다.</p></div>`,
      tags: ["FPSO","AI","Robotics","Standardization","Digital Transformation","Offshore Operations"],
      link: "https://www.offshore-energy.biz/sbm-offshore-interview-advancing-future-ready-fpsos-through-standarization-robotics-ai-and-lower-carbon-solutions/",
      coords: [4.8952,52.3676],
      location: "Netherlands (SBM Offshore HQ)"
    }
  ]
});

// Auto-collected: 2026-03-16
addEvents({
  "2026-03-16": [
    {
      type: "news",
      title: "Navy Establishes 5 New Program Acquisition Executives for Platform and Equipment Procurement",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-03-16",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미 해군이 5개의 새로운 프로그램 획득 담당자(PAE) 직책을 신설하여 함정 및 장비 구매 및 유지 체계를 개혁<br>• 2025년 12월 로봇 및 자율 시스템 부문 첫 PAE 사무실 설립 이후, John Phelan 해군장관이 추가 4개 PAE 신설 발표<br>• Chris Miller 해군해양시스템사령부 집행이사가 해양 부문(PAE Maritime) 담당, Robert Gaucher 중장이 수중 부문(PAE Undersea) 겸임<br>• Jim Downey 중장이 산업운영 부문 지휘, 자율화 및 무인 시스템 기술에 대한 해군의 전략적 우선순위 반영<br>• 방위산업 구조 개편으로 로봇 및 자율 선박 기술의 개발·도입 가속화 예상</p><h3>Key Quotes</h3><br>• "Navy established five new program acquisition executives as the service continues to reform how it buys and sustains platforms and equipment" (해군이 함정과 장비 구매 및 유지 방식을 계속 개혁하면서 5개의 새로운 프로그램 획득 담당자 직책 신설)</p><h3>Technical Insights</h3><br>• 미 해군의 조직 개편은 자율 시스템, 로봇 기술, 무인 수중 플랫폼 등 첨단 기술 도입 가속화를 목표로 함<br>• PAE Robotic and Autonomous Systems 신설은 COLREG 준수형 자율 선박 기술 개발 및 검증 체계 강화를 의미<br>• 국방 조달 체계의 효율화를 통해 자율화 기술 상용화 속도 향상 및 산업 표준화 추진 가능성 증대<br>• 해양 방위산업의 구조 개편이 민간 해운 자동화 기술 개발에도 긍정적 파급 효과 제공 가능</p></div>`,
      tags: ["Navy Acquisition","Autonomous Systems","Robotic Systems","Defense Procurement","Maritime Acquisition"],
      link: "https://news.usni.org/2026/03/16/secnav-phelan-stands-up-5-new-offices-for-navy-marine-acquisition",
      coords: [38.8951,-77.0369],
      location: "Washington, D.C."
    }
  ]
});


addEvents({
  "2026-03-21": [
    {
      type: "news",
      title: "Bluebottle USV to Feature in Australian Navy's Fleet Review for the First Time",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/Ocius-Bluebottle-in-Sydney-Harbour-1-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 오션스 블루보틀 USV의 역사적 첫 참가: 호주 해군이 정식 함대 검열에 무인 수상함을 처음으로 포함시키며 자율 해양 시스템의 운영 도입 단계 진입을 공식화</p><p>• 대규모 장비 도입 계약: $176M 규모의 프로그램 기록 협약으로 기존 15척에 추가로 40척의 블루보틀 USV를 도입하며, 글로벌 무인 수상함 획득 계약 중 최대 규모</p><p>• 친환경 자율 운영 기술: 태양광, 풍력, 파력으로 구동되는 연료 무동력 설계로 수개월 운용 지속성 확보와 음향 정숙성을 동시 달성</p><p>• 해양 국경 모니터링 강화: 호주가 담당하는 세계 최대 규모 해양 지역의 감시 및 보호 능력을 비용 효율적이고 주권적으로 확대</p><p>• 익스서사이즈 카카두 2026: 호주 해군 125주년 기념 행사로 시드니 항만에서 호주 및 18개국의 약 30척 함정과 함께 블루보틀 USV 전시</p><p>• 다층 자산 통합 운영: 무인 수상함이 수중/표면 자산과 팀 환경에서 상호운용 가능한 통합 전력 체계의 핵심 요소로 기능</p><h3>Key Quotes</h3><p>• "The Bluebottle USV is an operational capability already delivering persistent maritime surveillance for Australia." <br>  (블루보틀 USV는 호주를 위해 이미 지속적인 해양 감시 역량을 제공하고 있는 실전 운용 능력)</p><p>• "By participating in the Exercise Kakadu Fleet Review 2026, the Royal Australian Navy is making clear that uncrewed systems are an integral part of Australia's advanced maritime capabilities."<br>  (익스서사이즈 카카두 2026 참가를 통해 호주 해군은 무인 시스템이 호주의 첨단 해양 역량의 핵심 부분임을 명확히 함)</p><p>• "Importantly, Bluebottle USVs are powered by renewable energy, utilising solar, wind and wave energy, meaning they require no fuel and are capable of long-endurance operations."<br>  (특히 블루보틀 USV는 태양광, 풍력, 파력 신재생에너지로 구동되어 연료가 불필요하며 장시간 운용 가능)</p><h3>Technical Insights</h3><p>• 자율 해양 시스템의 COLREG 적용 확대: 공식 함대 검열 참가는 국제 충돌 방지 규칙(COLREG)을 준수하는 완전 자율 운영 USV의 해군 인정을 의미하며, IMO 자율선박 규제 프레임워크 개발에 실질적 근거 제공</p><p>• 신재생에너지 기반 해양 감시 패러다임 전환: 연료 무동력 설계로 운영 비용 절감 및 환경 영향 최소화, 향후 글로벌 해군의 그린 쉬핑 전환 가속화 예상</p><p>• 다중 자산 네트워크 중심 전술 운영: 무인 시스템이 크루드 함정과 수중 자산을 통합하는 중추 역할로 지정되며, 분산형 자율 운영 네트워크(DANN) 구현의 실제 사례 제시</p><p>• 국가 주권 기반 무인 해양 방위 산업화: 호주 설계·제조 USV의 대규모 도입은 선진국의 자국 기술 자립도 강화 추세를 반영하며, 글로벌 방위 무인화 시장에서 비미국 진영의 기술 경쟁력 입증</p></div>`,
      tags: ["Autonomous Ships","USV","Royal Australian Navy","Uncrewed Surface Vessel"],
      link: "https://www.navalnews.com/naval-news/2026/03/bluebottle-usv-to-feature-in-australian-navys-fleet-review-for-the-first-time/",
      coords: [151.2093,-33.8688],
      location: "Sydney Harbour, Australia"
    },
    {
      type: "news",
      title: "Turkish MKE Reveals PİRANA Kamikaze Unmanned Surface Vessel for Naval Operations",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-03-21",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 터키 국방회사 MKE가 PİRANA라는 차세대 자살 공격용 무인수상선(USV) 공개 - 터키 해군의 해상 작전 능력 강화를 목표로 개발된 스트라이크 자산</p><p>• 무인 수상선은 완전 자동화된 해상 플랫폼으로 육상 및 항공 전력 외 새로운 해전 영역 확보의 일환</p><p>• 이 시스템은 향후 터키 해군 운용 전개 예정이며 해양 무인 시스템의 군사적 활용 추세 반영</p><p>• 방위사업 다각화 및 자체 기술 개발을 통한 국방력 증강 전략의 실질적 사례</p><p>• 무인 수상선의 전술적 운용 개념과 해상 전역에서의 자율 작전 능력이 핵심 특징</p><h3>Key Quotes</h3><p>• "Platform was developed for maritime operations as part of a broader push beyond land and air" (육상과 항공 전력을 넘어 해상 영역으로 확대하는 광범위한 전략의 일환으로 개발됨)</p><h3>Technical Insights</h3><p>• 무인수상선의 자율 운용: PİRANA와 같은 USV는 GPS 네비게이션, 자동 장애물 회피, 원격 제어 등 첨단 자율화 기술을 기반으로 작동하며, 기존 COLREG 규정의 적용 문제 제기</p><p>• 해군 전술의 혁신: 무인 스트라이크 자산의 도입은 해군 전력 구성의 패러다임 전환을 의미하며, 인명 손실 감소와 작전 비용 절감의 장점 제시</p><p>• 국제 규범의 공백: 자살 공격용 무인 수상선의 운용은 국제인도법(IHL) 및 IMO 해상 안전 규정과의 충돌 가능성이 있으며, 차기 IMO 규범 개정 논의 필요</p><p>• 해상 보안의 복잡성 증가: 무인 공격 자산의 다각화는 해상 경계 및 방어 시스템의 고도화 필요성을 촉발하고, 대해역 국가들의 무인 시스템 군비 경쟁 심화 우려</p></div>`,
      tags: ["unmanned surface vessel","USV","autonomous weapons","Turkish Navy","defense technology"],
      link: "https://defence-blog.com/turkish-firm-develops-new-gen-kamikaze-drone-boat/",
      coords: [35.1856,39.925],
      location: "Turkey"
    },
    {
      type: "news",
      title: "U.S.-made military naval drone AEGIR-W discovered off Turkish coast",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-03-21",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 Sierra Nevada Corporation 제조 AEGIR-W 군사급 무인수상선(USV)이 터키 오르두 해안에서 발견됨<br>• 분쟁 지역 작전용으로 설계된 군사 드론으로, 정찰 및 전자전 임무 수행 가능<br>• 현지 주민에 의해 발견되었으며 터키 당국이 검사 후 폐기할 예정<br>• 미국 군사 장비의 예기치 않은 발견으로 지정학적 관심 증가<br>• 무인수상선 기술의 운용 손실 및 보안 문제 노출</p><h3>Key Quotes</h3><p>• "military-grade unmanned surface vessel, or USV, designed for operations in contested environments" (분쟁 지역 작전을 위해 설계된 군사급 무인수상선)</p><h3>Technical Insights</h3><p>• 자율운항 군사 플랫폼의 취약성: AEGIR-W와 같은 고급 USV의 예기치 않은 손실은 극악의 해상 환경에서의 운용 안정성과 추적 시스템의 한계를 시사함</p><p>• 해양 드론 보안 규제: IMO 및 국제 해사법에서 군사 무인선박의 운용, 손실, 회수 절차에 대한 명확한 기준 부재로 인한 국제 분쟁 소지</p><p>• 산업적 영향: 무인수상선 기술의 실전 배치 증가에 따라 해상 충돌 회피 규칙(COLREG)과 자율운항 선박의 국제 안전 표준 개정 필요성 대두</p></div>`,
      tags: ["autonomous ships","unmanned surface vessel","USV","naval technology","geopolitics"],
      link: "https://defence-blog.com/u-s-made-naval-drone-found-off-turkish-coast/",
      coords: [35.9242,40.9054],
      location: "Ordu, Turkey"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-21
addEvents({
  "2026-03-21": [
    {
      type: "news",
      title: "Bluebottle USV to Feature in Australian Navy's Fleet Review for the First Time",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/Ocius-Bluebottle-in-Sydney-Harbour-1-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 호주 해군(Royal Australian Navy)이 Exercise Kakadu 함대 훈련에서 처음으로 무인 표면 함정(USV, Uncrewed Surface Vessel) Bluebottle을 정식 함대 리뷰에 포함시킴<br>• Ocius Technology가 제조한 Bluebottle USV는 태양광, 풍력, 파력으로 구동되는 연료 불필요 자율 감시 플랫폼으로 수개월 지속 운영 가능<br>• 호주 해군은 Ocius와 1억 7,600만 달러(약 176M AUD) 규모의 Program of Record 계약을 체결하여 기존 15척에서 40척 추가 도입 계획<br>• Bluebottle은 호주 최초의 해군 정식 등록 무인함정이며, 2026년 시드니 항구에서 호주 해군 창립 125주년 기념 행사에 약 30척의 호주 함정과 18개 국가 함정과 함께 참가<br>• 무인 자율 시스템의 도입은 호주의 광대한 해상 영역 감시 및 해양 국경 보호 능력을 크게 강화하며, 비용 효율성과 작전 지속성 향상</p><h3>Key Quotes</h3><br>• "The Bluebottle USV is an operational capability already delivering persistent maritime surveillance for Australia. By participating in the Exercise Kakadu Fleet Review 2026, the Royal Australian Navy is making clear that uncrewed systems are an integral part of Australia's advanced maritime capabilities." (Bluebottle USV는 호주를 위해 지속적인 해상 감시 능력을 이미 제공하고 있는 실용 운영 시스템이며, Exercise Kakadu 함대 리뷰 참가를 통해 호주 해군은 무인 시스템이 호주의 첨단 해양 능력의 필수 구성 요소임을 명확히 하고 있음)</p><p>• "With Bluebottle USVs designed and manufactured right here in Australia, this important milestone also reflects the world-leading innovation of our maritime defence technology industry." (Bluebottle USV가 호주에서 설계·제조되고 있으며, 이는 호주의 세계 최고 수준의 해양 방위 기술 산업 혁신을 반영함)</p><h3>Technical Insights</h3><br>• 자율 해양 시스템의 전력화: Bluebottle USV는 연료 불필요한 재생 에너지 기반 무인함정으로, 수개월 지속 운영이 가능하여 기존 유인함의 운영 비용과 인력 소비를 대폭 감소시킬 수 있는 신 개념의 해양 감시 플랫폼임</p><p>• 통합 작전 능력: Bluebottle USV는 다른 수상/수중 자산과 협업하는 팀 환경에서 작동하도록 설계되어, 통합 전력 운영 개념(integrated force architecture)의 구현을 가능하게 함</p><p>• 호주 해양 방위 산업의 국제 경쟁력: 호주 자체 설계·제조 USV의 대량 도입(총 55척 규모)은 인도-태평양 지역 해양 안보 강화와 함께 호주의 방위 기술 수출 기반 강화를 의미함</p><p>• IMO/COLREG 자율항행 규제 선행 사례: 호주 해군의 Bluebottle 정식 등록 및 함대 운영은 국제 해사 자율항행 규제 정립 이전에 이미 실용 운영되는 사례로, 국제 해사기구(IMO) 자율항행 기준 개발에 실전 데이터를 제공할 것으로 예상됨</p></div>`,
      tags: ["Autonomous Systems","USV","Royal Australian Navy","Bluebottle","Exercise Kakadu","Maritime Surveillance"],
      link: "https://www.navalnews.com/naval-news/2026/03/bluebottle-usv-to-feature-in-australian-navys-fleet-review-for-the-first-time/",
      coords: [151.2093,-33.8688],
      location: "Sydney Harbour, Australia"
    }
  ]
});

// Auto-collected: 2026-03-23
addEvents({
  "2026-03-23": [
    {
      type: "news",
      title: "QatarEnergy reports $20 billion loss from missile attacks on LNG facilities",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-23",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2024/12/QatarEnergy.jpg?image-crop-positioner-ts=1733911553",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 주요 사건: 3월 18일 이란의 미사일 공격으로 카타르의 라스 라판 산업도시 내 LNG 시설에 광범위한 피해 발생</p><p>• 피해 규모: QatarEnergy의 LNG 수출 능력 17% 감소(12.8 mtpa) 및 연간 약 $200억 규모의 손실 발생</p><p>• 복구 기간: 손상된 LNG 생산 시설 복구에 3~5년 소요 예상으로 장기 Force Majeure 선언</p><p>• 영향 지역: 중국, 한국, 이탈리아, 벨기에 등 주요 LNG 수입국에 공급 중단</p><p>• 글로벌 영향: 호르무즈 해협 폐쇄로 인한 유가 상승($100 예상) 및 글로벌 에너지 안보 위기 심화</p><p>• 동반 피해: Pearl GTL 시설(Shell 운영)도 공격 대상으로 포함되어 고급 연료 및 윤활유 생산 중단</p><h3>Key Quotes</h3><p>• "This was an attack on all of us who stand for development and human progress that is sustained by a fair, reliable, and secure access to energy." <br>(에너지의 공정하고 신뢰할 수 있는 접근을 통한 발전과 인류 진보를 지지하는 우리 모두에 대한 공격)</p><p>• "The damage sustained by the LNG facilities will take between three to five years to repair. The impact is on China, South Korea, Italy and Belgium."<br>(LNG 시설 복구에는 3~5년이 소요되며, 중국, 한국, 이탈리아, 벨기에에 영향을 미친다)</p><h3>Technical Insights</h3><p>• LNG 공급망 위기: 카타르 LNG 생산 능력 17% 손실로 글로벌 LNG 시장의 공급 부족 심화 및 장기 계약 불이행 가능성 대두</p><p>• 해운 물류 영향: 호르무즈 해협 폐쇄로 인한 LNG 수송 경로 변경 필요 및 해상 운송료 급등으로 해운업체의 비용 부담 증가</p><p>• 에너지 보안 및 IMO 규제: 유사 지정학적 위기 상황에서 해상 화물 운송의 안전성 강화 및 자율운항선박(MASS) 도입을 통한 인명 손실 최소화 필요성 증대</p><p>• 산업 복구력(Resilience): 주요 에너지 인프라의 손상 대응 능력 강화 및 대체 해운 루트 구축을 통한 글로벌 공급망 안정화 전략 수립 시급</p></div>`,
      tags: ["LNG","QatarEnergy","Middle East Crisis","Energy Security","Force Majeure"],
      link: "https://www.offshore-energy.biz/qatarenergy-missile-attacks-spur-20-billion-loss-with-drop-in-lng-exports/",
      coords: [51.6163,25.2854],
      location: "Ras Laffan Industrial City, Qatar"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-21
addEvents({
  "2026-03-21": [
    {
      type: "news",
      title: "Bluebottle USV Featured in Australian Navy's Fleet Review for First Time",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/Ocius-Bluebottle-in-Sydney-Harbour-1-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호주 해군이 무인표면선박(USV) Bluebottle을 공식 함대 검열 행사에 처음으로 포함시켰으며, 이는 자율 해양 시스템의 운영 확대를 의미함</p><p>• Ocius Technology의 Bluebottle은 태양광, 풍력, 파력 에너지로만 작동하는 세계 최초의 연료 없는 무인선박으로 수개월의 연속 운영 능력을 보유</p><p>• 호주 해군은 현재 15척의 Bluebottle을 운용 중이며, 1억 7,600만 달러 규모의 계약으로 40척이 추가로 도입될 예정</p><p>• Exercise Kakadu 2026 함대 검열은 호주 해군 창설 125주년을 기념하며 호주 및 18개국에서 약 30척의 함선이 참가</p><p>• Bluebottle의 음향 정숙성과 장기 운영 능력은 호주의 광대한 해역 감시 및 해양 경계 보호 능력을 혁신적으로 강화</p><h3>Key Quotes</h3><p>• "The Bluebottle USV is an operational capability already delivering persistent maritime surveillance for Australia. By participating in the Exercise Kakadu Fleet Review 2026, the Royal Australian Navy is making clear that uncrewed systems are an integral part of Australia's advanced maritime capabilities." (Bluebottle은 이미 호주의 지속적 해양 감시 능력을 제공하는 운영 중인 시스템이며, Exercise Kakadu 함대 검열 참가를 통해 호주 해군은 무인 시스템이 선진 해양 능력의 필수 요소임을 분명히 함)</p><p>• "With Bluebottle USVs designed and manufactured right here in Australia, this important milestone also reflects the world-leading innovation of our maritime defence technology industry." (호주에서 설계 및 제조되는 Bluebottle은 호주의 세계 수준의 해양 방위 기술 산업 혁신을 대표함)</p><h3>Technical Insights</h3><p>• 자율 해양 시스템의 함대 통합: Bluebottle의 Fleet Review 참가는 무인 시스템이 전통적인 유인함과 함께 정규 작전 능력으로 인정받는 중요한 산업 전환점으로, IMO 자율선박 규제 논의에 실질적 사례 제공</p><p>• 재생에너지 무인선박의 운영 우위: 연료 불필요한 태양광/풍력/파력 동력 방식은 장기 지속성(persistence), 운영 비용 절감, 음향 정숙성을 동시에 확보하여 해양 감시 작전에서 COLREG 준수 기반의 자율 항해 기술 가능성을 입증</p><p>• 호주의 주권적 해양 감시 강화: 광활한 해역에서의 비용 효율적 감시 능력 확보로 인한 해양 안보 강화는 인도-태평양 지역 해양 질서 유지에 기여하며, 타국의 USV 도입 촉발 가능</p><p>• 산업 공급망의 지역화 전략: 호주 설계·제조 USV의 대량 도입($176M 규모)은 방위 산업의 지역 자급화 추세를 강화하고, 향후 태평양 지역 해양 기술 표준화에 호주의 영향력 확대</p></div>`,
      tags: ["USV","Autonomous Systems","Royal Australian Navy","Exercise Kakadu"],
      link: "https://www.navalnews.com/naval-news/2026/03/bluebottle-usv-to-feature-in-australian-navys-fleet-review-for-the-first-time/",
      coords: [151.2093,-33.8688],
      location: "Sydney Harbour, Australia"
    }
  ]
});

// Auto-collected: 2026-03-23
addEvents({
  "2026-03-23": [
    {
      type: "news",
      title: "QatarEnergy: Missile attacks cause $20 billion loss with 17% LNG export capacity reduction",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-23",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2024/12/QatarEnergy.jpg?image-crop-positioner-ts=1733911553",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 카타르의 국영 에너지 기업 QatarEnergy의 라스 라판 산업도시 LNG 시설이 2026년 3월 18일 미사일 공격으로 피해를 입음<br>• 공격으로 인한 LNG 수출 용량 17% 감소(연간 12.8백만톤) 및 연간 200억 달러 규모의 손실 발생<br>• 손상된 LNG 생산 설비(Train 4, 6) 복구에 3~5년 소요 예상, 장기 강제불가항력 선언<br>• 이란의 호르무즈 해협 폐쇄로 글로벌 에너지 공급망 교란 및 중국, 한국, 이탈리아, 벨기에 등에 영향<br>• ExxonMobil과의 합작투자 LNG 생산시설 및 Shell 운영 Pearl GTL 시설 손상<br>• 재무손실뿐 아니라 글로벌 에너지 안보 위협 및 중동 지역 정치적 긴장 심화</p><h3>Key Quotes</h3><p>• "The damage sustained by the LNG facilities will take between three to five years to repair. The impact is on China, South Korea, Italy and Belgium." (LNG 시설 피해 복구에 3~5년 소요 예상이며, 중국, 한국, 이탈리아, 벨기에에 영향 미칠 것)</p><p>• "I am relieved to confirm that no one was injured by these unjustified and senseless attacks, which weren't just an attack on the State of Qatar but attacks on global energy security and stability." (부당한 이번 공격으로 인명피해는 없었으나, 이는 카타르에 대한 공격을 넘어 글로벌 에너지 안보와 안정성에 대한 공격)</p><h3>Technical Insights</h3><p>• 해상 운송 및 글로벌 공급망 영향: LNG 수출 용량 17% 감소는 해상운송 선박(LNG 캐리어) 운항 감소 및 국제 에너지 무역 경로 재편으로 이어짐. 호르무즈 해협 폐쇄로 인한 항로 우회는 운송비 증가 및 배송일정 지연 초래</p><p>• IMO/국제해사규칙 적용: 강제불가항력(Force Majeure) 선언은 국제 LNG 거래 계약과 해상운송 약정에 영향을 미치며, 이는 IMO 규정과 국제해사법상 분쟁의 원인이 될 가능성 존재</p><p>• 에너지 안보와 자율선박 기술의 중요성: 이 사건은 지정학적 위험 지역에서 에너지 수송의 취약성을 노출시키며, 자율항법선박(MASS) 기술 도입 시 안전성 강화와 인명피해 감소의 필요성을 부각</p><p>• 산업적 재편: 중동 지역 에너지 공급 차질로 인한 글로벌 LNG 시장 재편, 대체 공급원(호주, 미국 등) 수요 증가 및 장기 해상운송 계약 조정 필요</p></div>`,
      tags: ["LNG","QatarEnergy","Middle East Crisis","Energy Security","Force Majeure"],
      link: "https://www.offshore-energy.biz/qatarenergy-missile-attacks-spur-20-billion-loss-with-drop-in-lng-exports/",
      coords: [51.5347,25.2854],
      location: "Ras Laffan Industrial City, Qatar"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2024-10-14
addEvents({
  "2024-10-14": [
    {
      type: "accident",
      title: "Pilot's Tug Mix-Up Caused Tanker Pier Strike in California",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2024-10-14",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Platanos.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 2024년 10월 14일 샌프란시스코 만 카르키네즈 해협의 마르티네즈 정유소 부두에서 원유 탱커 플라타노스호(820피트)가 접안 해제 중 콘크리트 돌핀 구조물에 충돌</p><p>• 원인: 숙련된 파일럿(30년 경력)이 보조 예인선 2척의 위치를 참조 카드에 잘못 기입하여 전후 위치를 뒤바꾸고 명령을 잘못된 예인선에 전달</p><p>• 결과: 후미(stern)가 부두 방향으로 급속히 이동하여 콘크리트 구조물 충돌, $500,000 이상의 복합 손상 발생(오염/인명피해 없음)</p><p>• 인적 요소: 파일럿의 순환생리 저기간(0300-0500) 조기 운항 수행, 약 4.5시간 수면 후 작업 진행으로 집중력 저하 가능성 확인</p><p>• NTSB 결론: 기계 결함 없음, 기상 양호 - 단순 인적 오류(slip/lapse)로 판정되었으며 선교팀의 개입 시점에는 사고 방지 불가능</p><p>• 관련 기관: NTSB(미국 운송안전위원회), Martinez Refining Company, Samos Steamship Co.</p><h3>Key Quotes</h3><p>• "The bow [was] rapidly pulled away from the pier, causing the stern of the ship to move toward the pier," (선수가 부두에서 급속히 떨어지면서 선미가 부두 방향으로 이동하게 됨)</p><p>• "The master did recognize the developing risk and warned the pilot that the stern was 'too close' roughly 30 seconds before impact." (선장이 충돌 약 30초 전에 선미가 '너무 가깝다'고 경고했으나 이미 회피 시간 상실)</p><p>• "That error led to an incorrect mental model of how the ship would respond to tug inputs." (참조 카드 오류로 인해 파일럿의 예인선 명령에 대한 선박 반응에 대한 잘못된 정신 모형 형성)</p><h3>Technical Insights</h3><p>• 예인선 운용 안전성: 디지털 식별 시스템 부재로 인한 수작업 참조 카드 사용의 위험성 - 아날로그 시스템의 개선 필요성 대두</p><p>• 순환생리와 해양 안전: 0300-0500 시간대의 인적 오류 발생률 증가 구간으로 항만 조종 관행 개선(최소 휴식 요구사항, 파일럿 교대 제도) 필요</p><p>• IMO/선박관리: STCW 협약 상 피로도 관리 강화 및 선교 시스템에서 예인선 위치/상태를 자동 시각화하는 Decision Support System(DSS) 도입 필요성</p><p>• 산업 교훈: 숙련도 높은 파일럿도 루틴 작업 중 발생하는 "Slip" 유형 오류로부터 안전하지 않음 - CRM(Crew Resource Management) 및 이중 확인 절차의 지속적 강화 필요</p></div>`,
      tags: ["tanker","allision","pilot error","tug operation","California"],
      link: "https://gcaptain.com/pilots-tug-mix-up-caused-tanker-pier-strike-in-california/",
      coords: [-122.2171,38.0553],
      location: "Martinez Refining Company Wharf, Carquinez Strait, California"
    }
  ]
});

// Auto-collected: 2026-03-24
addEvents({
  "2026-03-24": [
    {
      type: "news",
      title: "IQUA Robotics Successfully Proves AUV Technology for Autonomous Ship Hull Inspection",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-24",
      image: "https://images.marinelink.com/images/maritime/w800/sparus-vehicle-169156.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IQUA Robotics가 개발한 ESCABVENTS 프로젝트가 자율수중선(AUV, Sparus II)을 선박 선체 검사에 사용하는 개념증명(PoC) 테스트를 성공적으로 완료했으며, EU NextGenerationEU 자금 지원을 받음</p><p>• Zamakona Yards 조선소와 협력하여 어선, 연구선, 국방함 등 다양한 선종 4척을 대상으로 실항해 시험을 수행하고 센티미터 해상도의 3D 재구성 데이터 획득</p><p>• 부식, 해양생물 부착(바이오파울링), 페인트 손상 등 선체 상태를 자동으로 식별 가능하며, 다이버나 유선식 로봇(ROV)에 비해 안전성 및 효율성 향상</p><p>• 복잡한 형상의 영역(프로펠러, 러더 등)에서 음향 반사로 인한 어려움과 고광도 대비로 인한 측면 촬영 문제 등 개선 과제 확인</p><p>• 선박 유지보수 외에도 항만 보안, 중요 인프라 검사, 수중 불법물품 탐지 등의 확대 적용 가능성 제시</p><h3>Key Quotes</h3><p>• "The use of an autonomous vehicle like the Sparus II AUV allows for systematic hull scanning without direct intervention from an operator in piloting." (Sparus II AUV 같은 자율수중선을 사용하면 운영자의 직접 조종 개입 없이 체계적인 선체 스캔이 가능함)</p><p>• "These campaigns allowed the collection of multiple datasets on four vessels of different types, including fishing, research, and defense ships. The results show that it is possible to obtain 3D reconstructions with centimetric resolution, facilitating the identification of corrosion, marine fouling, or paint damage." (다양한 선종 4척에서 수집한 데이터로 센티미터 단위 해상도의 3D 재구성이 가능하며, 부식 및 해양생물 부착 식별 용이)</p><h3>Technical Insights</h3><p>• AUV 기반 자동화 검사 체계: 유인 다이버 또는 유선식 ROV에 의존하던 전통적 선체 검사 방식에서 완전 자율운영 시스템으로의 전환으로, 작업 안전성 향상 및 운영 비용 절감 가능</p><p>• 센티미터급 음향 영상 정밀도: Sparus II AUV의 고해상도 소나 및 영상 센서를 통해 선체 부식, 바이오파울링 등 미시적 손상까지 자동 탐지 가능하며, 예방적 선박 유지보수 고도화의 기반 제공</p><p>• 복합기하 영역 및 고광도 환경의 극복 과제: 프로펠러/러더 부근의 음향 반사 간섭, 선체 측면의 고광도 대비 문제 등은 향후 알고리즘 개선 및 센서 융합 기술 개발 필요성을 시사하며, 자율 선박 운영 시 해양 환경 적응성 강화 필수</p><p>• 항만보안 및 항해 안전 확대 응용: 선체 검사 기술의 확장으로 항만 인프라 보안, 수중 불법물품 및 위협 요소 탐지 등 해양 보안 및 해양법 집행 분야의 기술 혁신 가능성을 제시하며, IMO 해양 자율화 규제 프레임워크와 연계된 산업 표준화 논의 필요</p></div>`,
      tags: ["Autonomous Underwater Vehicles","Hull Inspection","Ship Maintenance","Maritime Technology","EU-funded Research"],
      link: "https://www.marinelink.com/news/iqua-robotics-successful-proves-auv-537258",
      coords: [0,0],
      location: "Spain (Zamakona Yards, Canary Islands)"
    },
    {
      type: "news",
      title: "Japan Certifies First RoRo with Autonomous Navigation Capability",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-03-24",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Large/Hokuren-Maru-No-2_1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본 최초 자율운항 RoRo 인증 완료: 가와사키기센카이샤(K LINE)가 운영하는 6,890톤급 호쿠렌마루 2호가 상업운항 중 완전 자율운항을 수행할 수 있는 국제 인증을 획득</p><p>• ClassNK 및 일본 국토교통성 인증 취득: 2026년 1월 27일 ClassNK로부터 자율선박 인증을, 2월 9일 일본 국토교통성으로부터 정기검사 합격을 획득하여 모든 법적 요건 완료</p><p>• 니폰재단의 MEGURI2040 프로젝트의 진전: 2020년 시작된 프로젝트로 2040년까지 국내선의 50% 무인운항 달성을 목표로 하며, 현재 세 번째 시범선박의 인증 완료</p><p>• 운항 노선 및 시스템 특성: 홋카이도 쿠시로항과 도쿄 북부 히타치항 간 국내노선에서 낙농 및 농산물 운송 담당, 어선 통행과 악천후·안개 등 도전적 환경에서 평균 96% 운영율 달성</p><p>• 개발 팀 및 기술 개선: K LINE, Japan Radio, YDK Technologies의 협업으로 2023년부터 개발 시작, 2025년까지 자동속력제어시스템 개발 포함 지속적 개선</p><p>• 해상 인력 부족 대응: 일본의 고령화·감소하는 해사 인력 대비, 인적 오류로 인한 해상사고 예방, 해기사의 업무 경감이 주요 추진 목표</p><h3>Key Quotes</h3><p>• "The 6,890-dwt RoRo Hokuren Maru No. 2, owned and operated by Kawasaki Kisen Kaisha, Ltd. ("K" LINE), completed a series of certifications in January and February on its way to becoming the first autonomous RoRo." (가와사키기센카이샤가 운영하는 호쿠렌마루 2호가 1월과 2월의 일련의 인증을 완료하여 일본 최초의 자율운항 RoRo가 됨)</p><p>• "They reported the system achieved an average operational rate of 96 percent in the sea area during its first tests." (초기 시험에서 해역 평균 운영율 96% 달성을 보고)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040." (니폰재단이 2040년까지 국내선의 50% 무인운항 달성을 목표로 2020년 MEGURI2040 프로젝트 시작)</p><h3>Technical Insights</h3><p>• COLREG 준수 및 자동항법 시스템: 센서 기반 데이터 수집 및 처리를 통한 자동항법 시스템은 국제해사법규(COLREG) 준수와 혼잡해역(도쿄만) 및 악천후 환경에서의 안전한 운항 능력 입증이 핵심 요건</p><p>• ClassNK 자율선박 인증 기준: 국제해사기구(IMO)의 MASS(Maritime Autonomous Surface Ships) 규제 프레임워크 선행 구현으로, 정부 인증과 선급사 인증의 이중 검증 체계 완성</p><p>• 국내선 자율화의 산업적 의의: RoRo는 일본 경제에서 중요한 역할을 하는 선종으로, 장거리 국제항로보다 규칙적 국내항로가 자율운항 기술 검증에 유리하며 경제성 입증에 적합</p><p>• 해운산업 인력 문제 해결 모델: 고령화 사회의 해사 인력 부족을 자율화로 대응하는 사례로, IMO 2050 탄소중립 목표와 함께 고효율·저비용 운영 모델 구축에 기여할 수 있는 기술적 기반 마련</p></div>`,
      tags: ["Autonomous Ships","Japan","RoRo","MEGURI2040","ClassNK Certification"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.5,43.5],
      location: "Kushiro Port to Hitachi Port, Japan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2024-10-14
addEvents({
  "2024-10-14": [
    {
      type: "accident",
      title: "Pilot's Tug Mix-Up Caused Tanker Pier Strike in California",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-24",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Platanos.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 2024년 10월 14일 새벽 캘리포니아 카르퀴네즈 해협의 마르티네즈 정유소 부두에서 원유 탱커 플라타노스(Platanos, 820피트)가 이안(undocking) 중 선착장 돌핀에 충돌하여 50만 달러 이상의 피해 발생</p><p>• 사고 원인: 항해사 파일럿이 조종선(assist tug) 2척의 위치를 참고 카드에 잘못 기록하여 선수 튜그 명령을 선미 튜그에 전달, 선미가 부두 쪽으로 급속 접근</p><p>• 인명 및 오염: 인명피해 없음, 해양오염 없음, 선체 관통 손상만 발생(선수 펌프실 void space)</p><p>• 파일럿 요인: 30년 이상 경력의 경험 많은 파일럿도 실수 범위 내 포함, 사고 전 4.5시간 수면에 새벽 0412시 시간대 순환리듬 저점에서 발생</p><p>• NTSB 판정: 기계적 결함 없음, 기상 양호, 고전적인 "slip/lapse" 유형의 인적 오류로 판정, 선장의 경고에도 불구하고 교정 불가능한 상황으로 악화</p><h3>Key Quotes</h3><p>• "The bow [was] rapidly pulled away from the pier, causing the stern of the ship to move toward the pier" (선수가 부두에서 급속히 멀어지면서 선미가 부두 쪽으로 이동하게 됨 - 반대 방향 튜그 명령의 결과)</p><p>• "The master did recognize the developing risk and warned the pilot that the stern was 'too close' roughly 30 seconds before impact" (선장이 충돌 약 30초 전 선미가 너무 가깝다고 경고했으나 이미 교정 불가능한 상태)</p><p>• "The pilot had written the tug positions incorrectly on a handheld 'radio card' used for quick reference while maneuvering from the bridge wing" (파일럿이 선교익에서 신속 참조용 휴대용 라디오 카드에 튜그 위치를 잘못 기록)</p><h3>Technical Insights</h3><p>• 조종선 명령 체계의 취약성: 음성 기반 튜그 명령에서 참고 자료의 오류가 직접적인 선박 응력(stern drift)으로 즉시 전환되며, 암흑 중 가시성 제한으로 인한 실시간 교정 불가능성 노출</p><p>• 인적 오류의 극심한 위험성: COLREG 및 해상안전 규정은 기계적 장애를 중심으로 하나, 30년 경력 파일럿도 일상적 작업의 "slip/lapse"에 취약함을 입증 - 자동화/CAS(Collision Avoidance System) 도입의 필요성 강화</p><p>• IMO/해운 산업 정책 시사점: 항구 조종 절차의 이중 점검(dual verification), 디지털 튜그 포지셔닝 시스템(GPS 기반 자동 표시), 파일럿 피로도 관리(fatigue risk management) 강화 규정 도입 필요성 증대</p><p>• 순환리듬(Circadian Rhythm) 조종 안전: 0300-0500 시간대 저점에서의 조종 작업 제한 또는 강화된 감시체계 도입으로 조종 오류 감소 가능 - 자율운항선(MASS) 도입 시 인적 피로 요인 완전 제거의 이점 부각</p></div>`,
      tags: ["tanker allision","harbor pilot error","NTSB investigation","human factors"],
      link: "https://gcaptain.com/pilots-tug-mix-up-caused-tanker-pier-strike-in-california/",
      coords: [-122.258,38.058],
      location: "Carquinez Strait, Martinez, California"
    }
  ]
});

// Auto-collected: 2026-03-24
addEvents({
  "2026-03-24": [
    {
      type: "news",
      title: "IQUA Robotics Successfully Demonstrates AUV Technology for Autonomous Ship Hull Inspection",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-24",
      image: "https://images.marinelink.com/images/maritime/w800/sparus-vehicle-169156.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IQUA Robotics가 개발한 ESCABVENTS 프로젝트가 자율수중로봇(AUV) 기반 선박 선체검사 개념증명 성공<br>• Sparus II AUV를 활용하여 다양한 선박 유형(어선, 연구선, 방위사업선)에 대한 실해역 시험 완료<br>• 센티미터 단위 해상도의 3D 재구성으로 부식, 생물부착, 도료손상 등 식별 가능 확인<br>• 운영자 개입 없이 체계적 선체검사 수행으로 다이버 및 유선로봇(ROV) 대체 가능성 입증<br>• 복잡한 기하학 구조(선미부, 프로펠러) 및 광 대비 문제 등 추가 개선과제 식별<br>• 선박 예방정비 효율성 개선뿐만 아니라 항만보안 및 위협감지 분야로 활용 확대 예상</p><h3>Key Quotes</h3><p>• "The use of an autonomous vehicle like the Sparus II AUV allows for systematic hull scanning without direct intervention from an operator in piloting." (Sparus II AUV와 같은 자율수중로봇을 활용하면 운영자의 직접적인 조종 개입 없이 체계적인 선체 검사가 가능하다는 의미)</p><p>• "The results show that it is possible to obtain 3D reconstructions with centimetric resolution, facilitating the identification of corrosion, marine fouling (biofouling), or paint damage." (선체 부식, 생물부착, 도료손상 등을 식별하는 데 도움이 되는 센티미터 단위 해상도의 3D 재구성이 가능함을 보여줌)</p><h3>Technical Insights</h3><p>• 자율수중로봇의 해양 인프라 검사 적용으로 기존 다이버 및 유선로봇 운영 비용 및 안전위험 감소 기대<br>• 선체 선회부(stern) 및 고대비 조명 환경에서의 음향반사 및 이미지 언더노출 문제는 향후 AI 기반 자동추적 및 다중센서 융합으로 해결 방향<br>• EU의 NextGenerationEU 지원 하에 스페인 선박산업 경쟁력 강화 프로젝트로 추진되며, 해양방위사업 및 항만보안 활용까지 확대 가능한 전략적 기술<br>• IMO의 선박 예방정비 및 구조검사 기준(SOLAS, MARPOL)과의 연계를 통해 자율로봇 검사의 규제 표준화 필요성 대두</p></div>`,
      tags: ["Autonomous Underwater Vehicles","Hull Inspection","Maritime Technology","Preventive Maintenance"],
      link: "https://www.marinelink.com/news/iqua-robotics-successful-proves-auv-537258",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "Japan Certifies First RoRo with Autonomous Navigation - Hokuren Maru No. 2",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-03-24",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Large/Hokuren-Maru-No-2_1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 일본 최초의 자율항행 RoRo선박 호쿠렌마루 2호가 2026년 1월-2월 인증 완료, 상업운항 면허 취득 달성<br>• 니혼재단의 'MEGURI2040' 프로젝트 일환으로 가와사키 기센(K LINE) 소유, 홋카이도 쿠시로항-히타치항 정기항로 운영<br>• 6,890톤급 6년식 선박에 AI 센서 탑재, 초기 운용률 96% 달성, 2023년부터 2년간 개발 진행<br>• ClassNK 자율선박 인증(1월 27일), 일본 국토교통성 통과검사(2월 9일) 모두 완료<br>• 2040년까지 국내 선박 50% 무인운영 목표, 선원 고령화·인력 부족 및 인적오류 사고 감소 목표</p><h3>Key Quotes</h3><p>• "The 6,890-dwt RoRo Hokuren Maru No. 2...became the first vessel of its kind to complete the licensing requirements to conduct fully autonomous navigation during commercial operations." <br>  (6,890톤급 RoRo 호쿠렌마루 2호가 상업운항 중 완전 자율항행 인증을 취득한 첫 RoRo선박이 되었음)</p><p>• "They reported the system achieved an average operational rate of 96 percent in the sea area during its first tests."<br>  (초기 실해역 시험에서 시스템의 평균 운용률이 96%에 도달했음을 보고)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040."<br>  (니혼재단이 2020년 MEGURI2040 프로젝트를 시작해 2040년까지 국내 선박 50% 무인운영 달성 목표 설정)</p><h3>Technical Insights</h3><p>• 자율항행 기술 진화: K LINE·Japan Radio·YDK Technologies 컨소시엄이 센서 기반 AI 항법 시스템 개발, 도쿄만 혼잡 해역·장거리(500마일)·18시간 이상 내구성 테스트 통과로 실운용 준비 완료<br>• 규제 체계 정립: ClassNK 선급 인증과 국토교통성 통과검사 이원화 승인 시스템 구축으로 자율선박 상업운항의 법적 기초 마련<br>• 산업적 파급력: RoRo 화물선의 자율화는 농산물·축산물 수송 효율화, 선원 부족 해소, 악천후·안개 해역 안전성 향상으로 지역 공급망 안정화에 기여 예상<br>• IMO COLREG 적용: 어선 밀집 항로에서의 충돌회피, 기상악화 자동속도 제어 등 자율시스템이 국제해상충돌방지규칙 준수 능력 입증, 글로벌 자율선박 표준화 참고사례 제공</p></div>`,
      tags: ["Autonomous Ships","RoRo Vessel","Japan Maritime","MEGURI2040 Project","Unmanned Operations"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.5731,35.6762],
      location: "Japan (Tokyo/Hokkaido route)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-25
addEvents({
  "2026-03-25": [
    {
      type: "accident",
      title: "Russian Baltic Port Halts Crude Loading as Ukrainian Drones Strike Ust-Luga Facility",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-25",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Project-23550.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나 드론 공격으로 러시아 우스트루가(Ust-Luga) 항구의 노바텍(Novatek) 석유 처리시설에 화재 발생, 유조 작업 중단<br>• 하루 약 45만 배럴의 원유를 수출하는 주요 러시아 발트해 석유 수출항의 운영 중단으로 글로벌 에너지 공급망 우려 증가<br>• 저장탱크와 적하 장비가 화재에 휩싸였으며, 지역 주지사가 화재 진압 중임을 확인<br>• 같은 주에 프리모르스크(Primorsk) 항구도 공격받아 최소 36시간 적하 중단, 러시아 발트해 유수출 기반시설에 대한 연쇄 공격 시작<br>• 러시아 국방부는 밤새 우크라이나 드론 389대를 격추했으며, 이는 2025년 3월 10일 이후 최고 규모</p><h3>Key Quotes</h3><p>• "Ukraine's General Staff said in a Telegram statement that drones hit Novatek PJSC's oil-product facilities at the port, setting ablaze storage tanks and loading equipment."<br>(우크라이나 참모본부는 드론이 노바텍 석유처리시설을 명중했으며 저장탱크와 적하장비가 불에 탔다고 성명)</p><p>• "Ust-Luga is a key Russian oil-export outlet, shipping some 450,000 barrels of crude per day last month."<br>(우스트루가는 러시아의 주요 석유수출항으로 지난달 일일 약 45만 배럴의 원유를 수출하는 전략적 항구)</p><p>• "Officials in Kyiv have previously said their attacks on Russia's energy infrastructure aim to curtail the Kremlin's oil revenue, which helps finance the invasion, and reduce fuel supplies to the front lines."<br>(키이우 관계자들은 에너지 인프라 공격이 크렘린의 석유 수익을 감소시키고 전선 연료 공급을 차단하려는 목적이라고 밝힘)</p><h3>Technical Insights</h3><p>• 항만 운영 중단의 경제적 파급: 450,000 배럴/일 규모의 원유 수출 중단은 글로벌 석유 시장에 직접적 영향을 미치며, 현재 중동 분쟁으로 호르무즈 해협 폐쇄된 상황과 겹쳐 유가 상승 압력이 심화될 우려</p><p>• 다중 항만 동시 공격 전략: 우스트루가와 프리모르스크 항구의 연쇄 공격은 러시아의 발트해 유수출 기반시설 마비를 목표로 하는 조직적 전략을 시사하며, 해상 에너지 인프라의 전시 취약성을 증명</p><p>• 해상 및 해안 시설 보안 강화 필요: 드론에 의한 항만 시설 공격 사건은 IMO 해상보안 규제와 항만 항공 방위 시스템의 개선 필요성을 부각시키며, 자율운항선박의 해전 지역 운항 금지 또는 강화된 보안 프로토콜 필요</p><p>• 해운 시장의 우회 경로 대두: 발트해 유수출 경로의 불안정화로 인한 공급 우려는 파나마운하, 수에즈운하 등 대체 수로의 이용 증가와 운항비용 상승을 초래할 가능성</p></div>`,
      tags: ["Fire","Port Operations","Drone Strike","Oil Export","Ust-Luga"],
      link: "https://gcaptain.com/russian-baltic-port-halts-crude-loading-as-drones-cause-fire/",
      coords: [28.4,59.6],
      location: "Ust-Luga, Baltic Sea, Russia"
    }
  ]
});

// Auto-collected: 2026-03-24
addEvents({
  "2026-03-24": [
    {
      type: "news",
      title: "Japan Certifies First Autonomous RoRo Ship for Commercial Operations",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-03-24",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Large/Hokuren-Maru-No-2_1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본 최초의 자율항해 RoRo선박 인증 완료: 가와사키 키센 카이샤(K Line)가 운영하는 6,890톤 규모의 호쿠렌마루 2호가 일본에서 처음으로 상업운항 중 완전 자율항해 인증을 획득했습니다.</p><p>• ClassNK 및 정부 승인 획득: 2026년 1월 27일 ClassNK(일본선박분류협회)의 자율선박 인증을 취득했으며, 2월 9일 일본 국토교통성의 법정검사를 통과했습니다.</p><p>• MEGURI2040 프로젝트의 진행: 니폰재단이 2020년에 시작한 프로젝트로, 2040년까지 국내선박의 50% 자율운항 달성을 목표로 하고 있습니다.</p><p>• 기술 성능 검증: 센서 기반 자율항해 시스템이 96%의 운영률을 달성했으며, 혼잡한 해역, 500마일 거리 테스트, 18시간 이상의 내구성 테스트를 성공적으로 완료했습니다.</p><p>• 운영 배경 및 의의: 일본의 고령화된 선원 부족 문제 해결, 선원의 업무 부담 경감, 인적 오류로 인한 해상 사고 예방이 프로젝트의 핵심 목표입니다.</p><p>• 쿠시로-히타치 항로 운영: 농산물 및 우유 운반 전문 RoRo선으로, 낚시선이 많고 거친 날씨와 안개가 빈번한 바쁜 해역에서 운항합니다.</p><h3>Key Quotes</h3><p>• "The Hokuren Maru No. 2 is the third demonstration vessel in the project to achieve the autonomous ship classification." (호쿠렌마루 2호는 자율선박 분류를 획득한 프로젝트의 세 번째 시범선박입니다.)</p><p>• "They reported the system achieved an average operational rate of 96 percent in the sea area during its first tests." (초기 테스트에서 시스템이 해역에서 평균 96%의 운영률을 달성했습니다.)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040." (니폰재단은 2040년까지 국내 선박의 50% 무인운항 달성을 목표로 2020년에 MEGURI2040 프로젝트를 시작했습니다.)</p><h3>Technical Insights</h3><p>• 자율항해 센서 기술 발전: 다중 센서 기반 데이터 수집 및 처리 시스템이 실제 운영 환경(낚시선 혼재, 악천후, 안개)에서 96% 운영률을 달성하며, 센서 융합 기술의 실용성을 입증했습니다.</p><p>• IMO/해양안전 규제 대응: ClassNK 인증 취득은 국제해사기구(IMO)의 자율선박 규제 프레임워크 개발과 병행되고 있으며, 일본이 자율선박 규제 선도국으로 위상을 강화하고 있습니다.</p><p>• RoRo선박의 자율항해 산업적 의의: 농산물·우유 수송의 정시성 요구가 높은 RoRo선박의 자율항해 성공은 정기 해상운송 산업에서 운영비 절감과 안정성 향상의 실질적 가치를 입증했습니다.</p><p>• 선원 부족 문제 해결 모델: 고령화된 일본의 해운 인력난을 자율항해 기술로 해결하는 MEGURI2040의 성공은 전 세계 해운업의 인력 위기 극복 전략으로 벤치마킹되고 있습니다.</p></div>`,
      tags: ["Autonomous Ships","RoRo Vessel","Japan","MEGURI2040","ClassNK Certification"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.6731,35.6762],
      location: "Japan (Kushiro-Hitachi route)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-25
addEvents({
  "2026-03-25": [
    {
      type: "accident",
      title: "Russian Baltic Port Halts Crude Loading as Ukrainian Drones Cause Fire at Ust-Luga",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-25",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Project-23550.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 러시아 발트해 우스트-루가 항구의 노바텍(Novatek) 터미널에서 우크라이나 드론 공격으로 화재 발생, 유해 적재 일시 중단<br>• 저장 탱크 및 적재 장비 화재, 지역 당국에서 화재 진화 중 – 일일 45만 배럴의 원유 수출 영향<br>• 우크라이나 총참모부는 드론으로 석유제품 시설 직격, 러시아 방위부는 야간 우크라이나 드론 389기 격추(2025년 3월 10일 이후 최대)<br>• 프리모르스크 항구도 같은 주 공격으로 36시간 이상 적재 중단 – 발트해 러시아 석유 수출 능력 심각 약화<br>• 중동 전쟁(4주째)으로 호르무즈 해협 폐쇄, 브렌트유 배럴당 $100 이상, 글로벌 석유 부족 우려 심화</p><h3>Key Quotes</h3><br>• "Ukraine's General Staff said in a Telegram statement that drones hit Novatek PJSC's oil-product facilities at the port, setting ablaze storage tanks and loading equipment." (우크라이나 총참모부가 드론으로 저장 탱크와 적재 장비에 불을 붙였다고 발표)</p><p>• "Ust-Luga is a key Russian oil-export outlet, shipping some 450,000 barrels of crude per day last month." (우스트-루가는 러시아 석유 수출의 핵심 항구로 월간 45만 배럴 수출)</p><p>• "Officials in Kyiv have previously said their attacks on Russia's energy infrastructure aim to curtail the Kremlin's oil revenue, which helps finance the invasion." (키예프 당국은 러시아 에너지 기반시설 공격으로 침략 전쟁 자금을 차단한다고 설명)</p><h3>Technical Insights</h3><br>• 해상 석유 인프라 안전성 위협: 드론 공격에 취약한 고정식 석유 터미널 시설의 대규모 손상 가능성이 해양 에너지 공급망의 회복력(resilience) 문제 부각<br>• 지정학적 해상 운송 위협: 발트해 주요 석유 수출항(우스트-루가, 프리모르스크) 반복 피해로 글로벌 유가 및 해운 보험료 상승 우려<br>• 국제 해운 안전 협약의 한계: COLREG, IMO 해사안전규칙이 무력 분쟁 지역 선박/항만 보호 범위 재검토 필요 – 해전 환경에서의 항만 운영 국제 기준 부재<br>• 에너지 공급망 다원화: 러시아 발트해 항구 마비로 대체 석유 운송로(파이프라인, 극동 항구) 수요 증가, 글로벌 해운업의 운송 경로 재편성</p></div>`,
      tags: ["Port Fire","Drone Attack","Oil Terminal","Russia-Ukraine War","Baltic Sea"],
      link: "https://gcaptain.com/russian-baltic-port-halts-crude-loading-as-drones-cause-fire/",
      coords: [37.6667,59.6667],
      location: "Ust-Luga, Baltic Sea, Russia"
    }
  ]
});

// Auto-collected: 2026-03-24
addEvents({
  "2026-03-24": [
    {
      type: "news",
      title: "Japan Certifies First RoRo with Autonomous Navigation",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-03-24",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Large/Hokuren-Maru-No-2_1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본의 Hokuren Maru No. 2 RoRo가 완전 자율운항 상용화 인증을 획득하여 첫 자율항행 RoRo 선박이 되었음</p><p>• K LINE(가와사키 기센 카이샤)가 소유·운영하며 홋카이도 쿠시로항과 도쿄 북부 히타치항 사이의 국내 항로에서 낙농제품 운송 담당</p><p>• 2020년 출범한 니혼 재단의 MEGURI2040 프로젝트의 일환으로 2023년부터 2025년까지 지속적인 기술 개선 수행</p><p>• ClassNK의 자율운항 인증(2026년 1월 27일)과 일본 국토교통부 법정검사 통과(2026년 2월 9일) 완료로 상용운항 승인</p><p>• 해기사 인구 감소, 업무 부하 경감, 인적오류로 인한 사고 예방이 주요 추진 배경이며 2040년까지 국내 선박 50% 무인운항 목표</p><h3>Key Quotes</h3><p>• "The ship was selected for the project both because of the critical importance of RoRos in the Japanese economy and because it travels a route that is busy with fishing vessels and subject to rough weather and fog." (RoRo 선박이 일본 경제에서 매우 중요하고, 어선이 많으며 악천후와 안개가 많은 항로를 운항하기 때문에 선정되었음을 의미)</p><p>• "The system achieved an average operational rate of 96 percent in the sea area during its first tests." (초기 테스트 당시 해역에서 96% 평균 운영률을 달성했음을 보여줌)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040." (2040년까지 국내 선박의 50% 무인운항이라는 야심찬 목표를 설정)</p><h3>Technical Insights</h3><p>• 자율운항 센서 시스템: 선박에 장착된 센서로부터 수집한 데이터를 기반으로 항법을 결정하는 통합 자율운항 시스템이 96% 이상의 안정적 운영률 달성으로 실용성 입증</p><p>• COLREG 및 IMO 규격 준수: ClassNK 인증 획득으로 국제 해사 규정 및 자율운항 선박 안전 기준 충족, 향후 국제 자율운항 기준 개발에 선도적 사례 제시</p><p>• 혼잡 항로 운항 역량: 도쿄만의 혼잡 해역 실증, 약 500해리 장거리 운항, 18시간 이상 지구력 테스트 등 다양한 운영 환경에서의 기술 검증으로 실제 상용화 조건 충족</p><p>• 산업적 영향: 해기사 부족 문제 해결, 운영비 절감, 인적오류 사고 예방 등 일본 해운산업의 구조적 문제 해결 방안 제시로 향후 국내외 자율운항 선박 확산의 롤모델 역할 예상</p></div>`,
      tags: ["Autonomous Ships","RoRo","Japan","MEGURI2040","ClassNK Certification"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.5469,35.6762],
      location: "Japan (Hokkaido-Hitachi route)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-26
addEvents({
  "2026-03-26": [
    {
      type: "news",
      title: "China Escalates Panama Port Dispute With Surge in Ship Detentions, U.S. Regulator Warns",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-26",
      image: "https://gcaptain.com/wp-content/uploads/2021/06/2021-06-07T075423Z_597754064_RC2JVN9NFGKZ_RTRMADP_3_CHINA-ECONOMY-TRADE.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 중국이 파나마 운하 터미널 경영권 분쟁과 관련하여 파나마 국기 선박에 대한 항만 검사 및 억류를 대폭 증가시키고 있으며, 미 해양위원회(FMC)가 이를 모니터링 중</p><p>• 파나마가 CK 허치슨 홀딩스(홍콩 기반)의 발보아 및 크리스토발 컨테이너 터미널 운영 양허권을 박탈하고 마에르스크 APM 터미널스와 지중해 운송회사(MSC) 자회사로 교체</p><p>• 허치슨의 2억 달러 이상의 중재 청구 및 220억 달러 규모의 글로벌 항만 사업 매각 제안과 관련하여 중국의 지정학적 우려가 배경</p><p>• FMC 의장 로라 디벨라 위원, "선박 이동을 방해하는 외국 정부의 조치는 미국의 글로벌 공급망 신뢰성 보호 권한에 위배"라고 성명</p><p>• 미국 법률에 따라 FMC는 외국 규제 또는 관행이 미국 대외 무역 해운에 불리한 조건을 만드는지 조사할 권한 보유</p><h3>Key Quotes</h3><p>• "Actions by foreign governments that detain, delay, or otherwise impede the movement of vessels… are inconsistent with the Commission's mandate to protect the reliability and integrity of America's global supply chain" (외국 정부가 선박의 이동을 억류, 지연 또는 방해하는 행위는 미국의 글로벌 공급망 신뢰성과 무결성 보호 임무와 맞지 않음)</p><p>• "The immediate concern for carriers and cargo owners is operational delays, inspections, and uncertainty tied to one of the world's largest ship registry" (운송회사와 화주들의 즉각적 우려는 세계 최대 규모 선박 등록국과 관련된 운영 지연, 검사, 불확실성)</p><h3>Technical Insights</h3><p>• 파나마 국기 선박에 대한 중국 항만의 비정상적 검사 및 억류는 국제 해사법의 항만국통제(PSC) 기준을 초과하는 것으로 판단되며, 이는 지정학적 갈등의 해사 무역 영역 확대를 의미</p><p>• 운하 터미널 운영권 분쟁이 선박 억류로 확대될 경우, 글로벌 해운 네트워크의 불확실성 증가 및 해운 요율 상승으로 이어질 가능성 높음</p><p>• FMC의 조사 및 규제 조치가 미국 대외 무역 해운에 미칠 영향 검토 필요하며, 중국-미국 간 무역 분쟁의 해사 산업 파급 효과 모니터링 필수</p><p>• 파나마 운하는 글로벌 컨테이너 물동량의 약 5% 통과하는 전략적 해상 통로로, 이 지역의 정치·경제적 갈등이 국제 해운 산업 전반에 미치는 리스크 관리 중요</p></div>`,
      tags: ["Panama Canal","Port Dispute","Ship Detention","China-Panama Tensions","Maritime Trade","FMC"],
      link: "https://gcaptain.com/china-is-escalating-panama-port-dispute-with-surge-in-ship-detentions-u-s-regulator-warns/",
      coords: [0,0],
      location: "Panama Canal / China Ports"
    },
    {
      type: "accident",
      title: "Russian Oil Port Primorsk Resumes Loading After Ukrainian Drone Attack",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-26",
      image: "https://gcaptain.com/wp-content/uploads/2018/10/shutterstock_1014183544.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 공격 사건: 우크라이나 드론이 2026년 3월 23일 러시아 발트해 최대 유전 수출항인 프리모르스크 항을 공격하여 화재 발생 및 하역 중단</p><p>• 운영 재개: 슈에즈맥스급 유조선 미네르바 조지아(약 100만 배럴 적재)가 며칠 후 3월 26일 입항하여 하역 재개, 또 다른 유조선 안란은 목요일 출항 예정</p><p>• 인프라 피해: 우스트-루가 항과 키리시 정유소도 같은 주에 공격 대상이 되었으며, 러시아 석유회사 트랜스네프트가 발트해 항구에서의 유량 우회 계획 추진</p><p>• 유가 영향: 이란 전쟁으로 인한 유가 충격에 더해 러시아 석유 공급 차질이 발생할 우려, 흑해에서도 유조선 공격 사건 발생</p><p>• 글로벌 해운 영향: 하팍-로이드는 중동 분쟁으로 주당 4,000~5,000만 달러 추가 비용 발생, 페르시아만에 6척의 선박(150명 승무원) 좌초 중</p><h3>Key Quotes</h3><p>• "The company that pipes crude there said it is trying to divert barrels elsewhere because of the incidents." (해당 지역에 석유를 공급하는 회사는 공격 사건으로 인해 석유를 다른 곳으로 우회 공급하려고 시도 중)</p><p>• "Kyiv's moves could disrupt the flow of Russian petroleum at a time when the Iran war has already caused an unprecedented oil-supply shock." (이란 전쟁이 이미 전례 없는 유가 충격을 야기한 상황에서 키이우의 행동이 러시아 석유 공급 흐름을 방해할 수 있음)</p><p>• "Not sustainable for a long time" - Rolf Habben Jansen, CEO Hapag-Lloyd (장기적으로 지속 불가능한 상황 - 하팍-로이드 최고경영자 롤프 하벤 얀센)</p><h3>Technical Insights</h3><p>• 항만 운영 복원력: 전략적 요충지인 프리모르스크 항의 신속한 재개작업은 러시아의 에너지 수출 능력 유지 의지를 보여주지만, 반복적 공격으로 인한 구조적 취약성 노출</p><p>• 공급망 우회전략: 트랜스네프트의 발트해 항구 우회 시도는 글로벌 에너지 시장의 재편을 초래할 가능성이 있으며, 해운 경로 변경에 따른 비용 증가 예상</p><p>• 해운산업 연쇄 영향: 중동 갈등과 러시아-우크라이나 분쟁이 동시 진행되면서 글로벌 해운 회사들의 운영 비용이 급증하고 있으며, 호르무즈 해협 등 주요 해상로의 폐쇄로 인한 대체 항로 검토 필수화</p><p>• 지정학적 위험 재평가: IMO 규정상 중립적 통항권 원칙이 실제 분쟁 상황에서 실제로 보장되지 않음을 시사하며, 해운회사들의 지역별 위험 재평가 및 보험료 인상 요인으로 작용</p></div>`,
      tags: ["Oil Port Attack","Ukraine-Russia Conflict","Drone Strike","Baltic Sea","Oil Infrastructure"],
      link: "https://gcaptain.com/key-russian-oil-port-resumes-loading-amid-attempt-to-divert-flow/",
      coords: [29.33,60.35],
      location: "Primorsk, Baltic Sea"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal crew member crushing accident on ro-ro cargo vessel Laureline",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 사건 개요: 2024년 7월 13일 몰타 국적 자동차 운반선(ro-ro) Laureline호에서 크루원이 움직이는 트레일러와 선박 구조물 사이에 압축되어 사망한 치명적 사고 발생</p><p>• 사고 원인: 크루원이 트레일러 이동이 완료되었다고 가정하고 뒤를 지나갔으나, 튜그 운전자가 크루원의 위치를 인지하지 못한 채 트레일러를 후진시켜 충돌</p><p>• 안전 절차의 결함: 선박 운영사가 새로운 차량 갑판 안전 절차를 도입했으나, 교육 및 이행 과정에서 약점이 있었고 현장 크루들이 절차를 제대로 이해하지 못함</p><p>• 감독 및 관리 부실: 차량 갑판 감독이 비효과적이었으며, 선박 관리사가 새로운 안전 절차가 선박 내에서 제대로 이해되고 이행되었는지 확인하기 위한 효과적인 보증을 제공하지 않음</p><p>• 업계 지침의 문제: 자동차 갑판 운영에 대한 업계 지침이 "운전자들이 마샬러(방향지시원)에 의존하여 안전하게 위치하고, 마샬러가 보이지 않으면 정지할 것"이라는 오해에 크게 의존</p><p>• 후속 조치: MAIB는 비슷한 사고(Clipper Pennant, 보고서 16/2024)에 기반하여 영국선주협회 및 Port Skills and Safety Limited에 자동차 운반선 차량 갑판 안전에 대한 산업 행동강령 개발을 권고</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." <br>(사망한 크루원은 트레일러의 이동이 완료되었다고 가정하고 뒤를 지나갔을 가능성이 높음)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure."<br>(튜그 운전자는 크루원의 위치를 인지하지 못하고 트레일러를 재정렬하기 위해 후진시켜 크루원을 선박 구조물에 압축함)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller."<br>(자동차 갑판 운영에 대한 업계 지침은 운전자들이 방향지시원에 의존한다는 잘못된 가정에 크게 의존하고 있음)</p><h3>Technical Insights</h3><p>• 안전 문화 및 절차 이행의 격차: 선박 운영사가 새로운 차량 갑판 안전 절차를 도입했음에도 불구하고, 교육 부실과 현장에서의 실제 관행과의 불일치로 인해 절차가 제대로 이행되지 않은 점은 해운업계의 구조적 문제를 드러냄</p><p>• 위험 지역(Danger Zone) 관리의 중요성: 튜그 운전자와 크루원 간의 의사소통 부재 및 시야 확보 실패가 사망 사고로 이어진 만큼, IMO 및 해운 선진국들이 자동차 운반선의 차량 갑판 안전에 대한 국제 기준 강화 필요</p><p>• 산업 행동강령의 시급성: 비슷한 사고 재발을 방지하기 위해 MAIB가 영국선주협회에 권고한 산업 행동강령은 자동차 운반선의 장비·절차·교육 표준화의 필요성을 시사하며, 국제해사기구(IMO)의 정규 규정 개정으로 확대될 가능성</p><p>• 시각적 감시 시스템의 보완 필요: 현재의 마샬</p></div>`,
      tags: ["Fatal Accident","Ro-Ro Vessel","Vehicle Deck Safety","Procedural Failure","Crew Injury"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.26,51.48],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-24
addEvents({
  "2026-03-24": [
    {
      type: "news",
      title: "Japan Certifies Its First RoRo with Autonomous Navigation",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-03-24",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Large/Hokuren-Maru-No-2_1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본의 호쿠렌마루 No. 2(Hokuren Maru No. 2) RoRo선이 일본 최초로 상용 자율항해 운항을 위한 완전 인증을 취득했으며, 이는 자동화된 해상운송의 획기적 이정표를 나타냄</p><p>• 가와사키 기센(K Line)이 운영하는 6,890톤급 선박은 2016년 건조되었으며 홋카이도 쿠시로항과 도쿄 북쪽 히타치항 간 농산물 운송 노선을 담당</p><p>• 니혼 재단(The Nippon Foundation)의 MEGURI2040 프로젝트 일환으로 2023년부터 3년간 개발되었으며, 2026년 1월 27일 ClassNK 인증 획득 및 2월 9일 일본 국토교통성 검사 통과</p><p>• 센서 기반 자율항해 시스템은 초기 테스트에서 96% 운영 효율을 기록했으며, 일본 해운 산업의 급속한 고령화 및 선원 부족 대응이 주요 동기</p><p>• MEGURI2040 프로젝트의 목표는 2040년까지 국내선의 50% 무인운항 달성이며, 지난해 RoPax 페리에 이어 세 번째 실증 선박으로서의 의의를 가짐</p><h3>Key Quotes</h3><p>• "The 6,890-dwt RoRo Hokuren Maru No. 2, owned and operated by Kawasaki Kisen Kaisha, Ltd. ("K" LINE), completed a series of certifications in January and February on its way to becoming the first autonomous RoRo." (K Line이 운영하는 호쿠렌마루 No. 2가 1월과 2월에 일련의 인증을 완료하여 일본 최초의 자율운항 RoRo선이 됨)</p><p>• "The working group...reported the system achieved an average operational rate of 96 percent in the sea area during its first tests." (개발 팀이 초기 테스트에서 해역 평균 운영 효율 96%를 달성했다고 보고함)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040." (니혼 재단이 2040년까지 국내선의 50% 무인운항 달성을 목표로 하는 MEGURI2040 프로젝트를 2020년에 시작함)</p><h3>Technical Insights</h3><p>• 자율항해 센서 및 시스템 고도화: 호쿠렌마루 No. 2는 센서 기반 데이터 수집 시스템과 자동 속도 제어 시스템을 장착했으며, 어선이 많고 악천후·안개가 빈번한 노선에서의 운영으로 실해역 검증의 신뢰성을 확보함</p><p>• 규제 및 인증 체계 발전: ClassNK의 자율선박 인증 및 일본 국토교통성의 법정 검사 통과는 국제해사법(COLREG) 및 IMO 기준에 부합하는 자율항해 규제 프레임워크 구축을 의미하며, 향후 국제 표준화의 선례가 될 가능성이 높음</p><p>• 일본 해운산업의 인적자원 문제 해결: 선원 고령화 및 부족 문제 대응을 위해 자율운항으로 승무원 수 감축 및 업무 부담 경감을 도모하며, 2040년까지 국내선의 50% 무인화 목표는 일본 해운산업의 구조적 변화를 촉발할 것으로 예상됨</p><p>• 해상안전 및 인적오류 감소: 자율항해 시스템은 인적오류로 인한 해상사고 예방 효과를 기대하며, 특히 혼잡한 해역과 악천후 조건에서의 안정적 운항 데이터 축적은 국제해사기구(IMO)의 해상안전 규제 강화 추세와도 부합함</p></div>`,
      tags: ["Autonomous Ships","RoRo Vessel","Japan","MEGURI2040","ClassNK Certification"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.6741,43.1935],
      location: "Kushiro Port, Hokkaido, Japan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal Crushing Accident on Ro-Ro Vessel Laureline at Purfleet",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 2024년 7월 13일 몰타 등록 로로(ro-ro) 화물선 Laureline호에서 선원이 움직이는 트레일러와 선박 구조물 사이에 압축되어 사망<br>• 사고는 Purfleet 항만에서 화물 적재/양하 중 발생, shore worker가 운전하는 tugs에 의해 트레일러가 조종되던 상황<br>• 선원이 트레일러 통행이 안전하다고 판단하고 뒤쪽으로 지나갔으나, 운전자가 선원의 위치를 인지하지 못하고 트레일러를 후진시켜 사고 발생<br>• 선박 운영사의 새로운 차량갑판 안전 절차 도입에도 불구하고 훈련 및 이행 미흡, 선원들이 위험구역을 일상적으로 통행<br>• MAIB의 이전 유사 사건(Clipper Pennant, 2024) 조사 권고사항을 고려하여, UK Chamber of Shipping과 Port Skills and Safety Limited에 산업 안전 행동강령 개발 권고</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." (사망한 선원은 트레일러의 기동이 완료되었다고 판단하고 뒤쪽을 통행했을 가능성)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." (운전자가 선원의 위치를 인지하지 못한 채 정렬을 위해 트레일러를 후진시켜 사건 발생)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller." (업계 지침이 운전자가 안내원에 의존하여 안전하게 정렬하고 시야 상실 시 정지한다는 잘못된 가정에 기반)</p><h3>Technical Insights</h3><p>• 로로 선박 갑판 안전 절차의 실행 격차: 선박 운영사가 새로운 안전 절차를 도입했으나 훈련 미흡, 관리 감시 무효화, 현장 관행과 절차 불일치 등으로 실질적 효과 부재 — 조직 차원의 안전 문화 강화 필요</p><p>• 위험구역(Danger Zone) 인식 부족: 운전자의 위험구역 지식과 시야 상실 시 정지 요건이 실제 작업 관행과 불일치, 업계 안내원(marshaller) 의존도 과도한 것으로 드러남 — COLREG 원칙을 ro-ro 화물취급에 적용하는 산업 표준화 필요</p><p>• 산업 표준화 강화 필요: MAIB의 Clipper Pennant(2024) 및 Laureline 사건 이후 UK Chamber of Shipping과 Port Skills and Safety Limited에 통합 행동강령 개발 권고 — IMO 안전 관리 코드(ISM Code) 내 차량갑판 특화 지침 부재 보완 필요</p><p>• 선박-항만 인터페이스 안전 관리: Shore worker 운전, 선박 crew 감시 구조에서 책임 범위 모호성과 의사소통 체계 부족 — 항만 운영 표준과 선박 안전관리 시스템 통합 필요</p></div>`,
      tags: ["ro-ro cargo","fatal accident","vehicle deck","crushing injury","safety procedure"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.5],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-26
addEvents({
  "2026-03-26": [
    {
      type: "news",
      title: "U.S. Navy Unveils Medium Unmanned Surface Vessel (MUSV) Family of Systems for Golden Fleet Initiative",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-26",
      image: "https://www.navalnews.com/wp-content/uploads/2025/07/Ekran-goruntusu-2025-07-20-010005.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MUSV 프로그램 출범: 미 해군이 중형 무인 표면선박(MUSV) 계획을 공식 발표하며 골든 플릿 이니셔티브의 핵심 자산으로 포지셔닝. 기존 MASC 프로토타입 프로젝트를 대체하는 확장된 개념</p><p>• 컨테이너형 다중임무 플랫폼: MUSV는 최소 2개의 40피트 ISO 컨테이너 페이로드를 탑재 가능하며, 센서, 수리 장비 등 다양한 미션 모듈을 컨테이너선처럼 교환 가능한 구조</p><p>• 빠른 자율성 능력 확대: 포트폴리오 인수 담당자 Rebecca Gassler가 제시한 '마켓플레이스' 개념으로 다수 벤더의 MUSV 자격 획득을 가속화하려는 산업 협력 전략</p><p>• COLREG 준수 및 검증: 연말까지 해상 시험 완료 및 충돌 회피 규정(COLREGs) 준수 검증을 포함한 단축된 테스트 캠페인 추진</p><p>• 다중역할 운영 능력: 장거리 미사일, 반탄도 미사일 요격기 등 다양한 무기 체계 탑재 시험을 거친 확장된 작전 개념으로 기존 MASC의 한정된 용도를 극복</p><h3>Key Quotes</h3><p>• "We have as of 7am opened the MUSV marketplace to accelerate autonomous capability to the fleet" (함대의 자율주행 능력을 가속화하기 위해 MUSV 마켓플레이스를 개시했음)</p><p>• "Inside containers you could have a sensor, repair equipment, or any number of payloads that can be swapped like a container ship" (컨테이너 내부에 센서, 수리 장비 또는 다양한 페이로드를 배치할 수 있으며 컨테이너선처럼 교환 가능함)</p><p>• "On water tests must be completed by the end of this year" (해상 시험은 올해 말까지 완료되어야 함)</p><h3>Technical Insights</h3><p>• COLREG 준수 자율주행: 미 해군의 MUSV는 국제 충돌 회피 규칙(COLREGs) 완전 준수를 검증 대상으로 삼고 있어, 자율 선박의 국제 규제 적응 요구사항을 실제 플랫폼에서 구현하는 선도 사례</p><p>• 모듈식 컨테이너 페이로드 아키텍처: ISO 표준 컨테이너 기반 다중임무 플랫폼은 운영 확장성과 빠른 임무 전환을 가능하게 하며, 제조사 다변화 전략으로도 기술 표준화의 해양 산업 확산 견인</p><p>• 벤더 다원화 마켓플레이스 모델: 단일 방식의 프로토타입 개발에서 복수 벤더 경쟁 기반 시스템으로 전환함으로써 자율 해양 로보틱스 기술 혁신 속도 가속화 및 비용 효율성 극대화</p><p>• 임무 복잡도별 자율성 설계: 센서 운영부터 무기 체계 통합까지 다양한 복잡도의 자율 능력을 요구하는 다중 임무 프로필에 대응하는 확장 가능한 자율성 아키텍처 개발의 필요성 대두</p></div>`,
      tags: ["Autonomous Ships","U.S. Navy","MUSV","Golden Fleet","Unmanned Systems","Maritime Robotics"],
      link: "https://www.navalnews.com/naval-news/2026/03/u-s-navy-unveils-unmanned-centerpiece-of-golden-fleet-initiative/",
      coords: [38.8951,-77.0369],
      location: "Washington D.C., USA"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-27
addEvents({
  "2026-03-27": [
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Runs Aground on Iran's Qeshm Island After Attack in Strait of Hormuz",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-27",
      image: "https://gcaptain.com/wp-content/uploads/2018/09/gCaptain_Logo.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 피격 사건: 태국 국적 30,000톤급 벌크선 Mayuree Naree가 3월 11일 호르무즈 해협을 통과 중 정체불명의 발사체 2발에 피격되어 엔진룸 화재 발생</p><p>• 선박/소유사 정보: Precious Shipping 소유의 Mayuree Naree호, 아랍에미리트를 출발하여 호르무즈 해협 진입 중 공격당함</p><p>• 인명피해 현황: 승무원 20명은 오만 해군에 의해 구조되었으나, 엔진룸에 있던 3명이 실종되어 화재에 갇혔을 가능성 높음</p><p>• 선박 운명: 추진력 상실로 며칠간 표류하다가 결국 이란 케시름 섬 해안에 좌초</p><p>• 산업 영향: 호르무즈 해협 해상 보안 악화로 글로벌 선박 통행 감소, 보험료 상승, 공급망 비용 증가</p><p>• 회사 대응: Precious Shipping은 선박이 무적 상태였고 전쟁 위험 보험 가입으로 인해 재정적 영향 없을 것으로 예상 발표</p><p>---</p><h3>Key Quotes</h3><p>• "Two projectiles of unknown origin hit the ship, igniting a fire in the engine room and forcing the crew to abandon ship." (정체불명의 발사체 2발이 선박을 명중하여 엔진룸에 화재를 일으키고 승무원을 선박 이탈을 강제함)</p><p>• "The waterway, which handles roughly a quarter of global seaborne oil trade, has seen vessel traffic collapse, with attacks, insurance withdrawals, and electronic interference disrupting normal operations." (전 세계 해상유 무역량의 약 1/4을 취급하는 이 해로에서 공격, 보험 철수, 전자 간섭으로 인해 선박 통행이 붕괴됨)</p><p>• "Thailand has condemned the attack and called for accountability, while industry groups warn the incident could further deter shipping and drive up costs across global supply chains." (태국이 공격을 비난하고 책임을 촉구했으며, 업계는 이 사건이 해운을 더욱 위축시키고 글로벌 공급망 비용을 상승시킬 수 있다고 경고)</p><p>---</p><h3>Technical Insights</h3><p>• 호르무즈 해협 해상보안 악화: 미국-이스라엘-이란 분쟁으로 인한 지속적인 공격이 국제 해운 안전에 심각한 위협을 구성하며, 선박 운항자들의 통행 기피 현상 심화</p><p>• 전쟁 위험 보험의 중요성: 본 사건에서 Precious Shipping이 전쟁 위험 보험 가입으로 인해 재정적 손실을 피한 사례로, IMO 및 국제 해운업체들의 고위험 해역 통항 시 보험 의무화 필요성 제기</p><p>• COLREG 및 항해 안전 한계: 호르무즈 해협과 같은 고위험 지역에서의 자동화 선박(MASS) 또는 AI 기반 항법 시스템 도입의 필요성 증대, 현재 인력 의존 항법의 한계 노출</p><p>• 글로벌 공급망 영향: 호르무즈 해협의 안전 악화로 유류 수송 비용 급증 및 우회 항로 선택 증가로 국제 해운 효율성 저하 및 탄소 배출량 증가의 악순환 초래</p></div>`,
      tags: ["Bulk Carrier","Strait of Hormuz","Attack","Grounding","Missing Crew","Iran-Israel Conflict"],
      link: "https://gcaptain.com/stricken-bulk-carrier-mayuree-naree-runs-aground-on-irans-qeshm-island/",
      coords: [54.3,26.7],
      location: "Qeshm Island, Iran / Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal accident to crew member on roll-on/roll-off cargo vessel Laureline",
      source: "MAIB (UK Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 2024년 7월 13일 말타 국적 자동차 운반선(ro-ro) Laureline호가 Purfleet 항구에서 화물 적하 중 선체 구조물과 움직이는 트레일러 사이에 선원이 끼여 사망한 중대 해양사고 발생</p><p>• 사상자: 선원 1명 사망 - 트레일러 뒤쪽으로 통과할 때 트레일러가 후진하면서 선박 구조물에 압사</p><p>• 근본 원인: 선박 운영사의 신규 안전 절차 수립 미흡, 교육 및 이행 약화, 차량 갑판 위험 지역에 대한 선원 및 육상 작업자의 위험 인식 부족</p><p>• 감독 및 관리 결함: 차량 갑판 감독 체계 무실효, 선박 관리사의 안전 절차 이행 확인 및 보증 시스템 부재</p><p>• 규제 개선 권고: MAIB는 영국 해운회의소(UK Chamber of Shipping) 및 Port Skills and Safety Limited에 ro-ro 선박 차량 갑판 안전 업계 통합 행동 강령 개발 권고 (이전 Clipper Pennant 사고와 유사)</p><p>• 산업 관행의 문제: 현존 업계 지침이 트레일러 운전자가 안전관리요원의 신호에만 의존한다는 잘못된 가정에 기반하고 있으며, 실제 작업 관행과 불일치</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring. The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." (선원은 트레일러가 기동을 완료했다고 가정하여 뒤쪽을 통과했으나, 예인선 운전자가 선원의 위치를 인식하지 못한 채 정렬을 위해 후진하면서 선원을 압사함)</p><p>• "The vessel operators had instigated a new procedure for vehicle deck safety. However, there were weaknesses in its training and implementation, and it was not well understood by the crew working on the vehicle deck who routinely entered the danger zone around moving vehicles." (선박 운영사가 신규 안전 절차를 도입했으나 교육과 이행에 약점이 있었으며, 차량 갑판 작업자들이 절차를 충분히 이해하지 못했음)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller." (업계 지침이 운전자가 안전관리요원에 의존하고 신호 손실 시 정지할 것이라는 잘못된 가정에 과도하게 의존하고 있음)</p><h3>Technical Insights</h3><p>• 차량 갑판 안전 관리 시스템의 구조적 결함: ro-ro 선박의 차량 갑판 운영에서 선원과 육상 운전자 간 소통 체계, 위험 지역 통제, 시각 확보 절차의 명확한 기준 부재가 인명 사고로 직결되는 점 - IMO와 국제해사기구의 규제 강화 필요</p><p>• 선박-항만 운영자 간 책임 경계의 모호성: 선박 관리사, 선원, 육상 튜그 운전자(항만 근로자) 간 안전 책임 할당 및 감독 체계가 불명확하여 사각지대 발생 - 통합된 안전 관리 체계 수립 필요</p><p>• 업계 표준화의 중요성: MAIB의 업계 행동 강령(Code of Practice) 권고는 현재 ro-ro 선박에서 통용되는 비형식적 관행과 실제 운영 관행 간 괴리를 해소하기 위한 표준화된 규범 필요성을 강조 - 향후 자율운항선(MASS) 도입 시에도 유사한 감독·책임 구</p></div>`,
      tags: ["Fatal Accident","Roll-on/Roll-off Vessel","Vehicle Deck Safety","Crushing Incident","Crew Death"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.48],
      location: "Purfleet, England"
    }
  ]
});

// ── AI Secretary Report ──
addEvents({
  "2024-11-15": [
    {
      type: "news",
      title: "Hokuren Maru No. 2 Becomes Japan's First RoRo Vessel to Pass Inspection as Autonomous Vessel",
      source: "Marine Insight",
      sourceMeta: "marineinsight.com · 2024-11-15",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 호쿠렌마루 2호(Hokuren Maru No. 2)가 일본 최초로 자율운항선박으로서 검사 통과에 성공한 RoRo(자동차운반선) 선박이 됨<br>• 일본 선급(ClassNK)으로부터 자율운항선박 임시 승인을 획득하여 해상시험 단계로 진입<br>• RoRo 선박의 자율운항화는 자동차 수출 산업이 발달한 일본의 해운 효율성 혁신을 의미하는 중요한 이정표<br>• 무인 운항 기술 도입으로 선원 비용 절감, 운영 효율성 증대, 해상 안전 개선 기대<br>• 일본 정부의 친환경 해운 및 디지털화 추진 정책과 부합하는 전략적 발전<br>• 향후 상용화 시 국제 규제 표준 수립과 업계 표준화가 핵심 과제로 남음<br><h3>Key Quotes</h3><br>• "Hokuren Maru No. 2 has become the first RoRo vessel to pass inspection as an autonomous vessel in Japan" (호쿠렌마루 2호는 일본에서 자율운항선박으로 검사를 통과한 최초의 RoRo 선박이 되었다)<br>• "The vessel has obtained provisional approval from ClassNK for autonomous navigation trials at sea" (해당 선박은 ClassNK로부터 해상 자율운항 시험을 위한 임시 승인을 획득했다)<br>• "This milestone marks a significant step towards modernizing Japan's shipping industry and reducing operational costs" (이번 성과는 일본 해운산업의 현대화와 운영 비용 감소를 향한 중요한 진전을 의미한다)<br><h3>Devil's Advocate</h3><br>• 아직 '임시 승인' 단계로, 실제 상용 운항까지는 기술적·규제적 장벽이 상당히 남아 있으며, 예상 기간을 초과할 가능성이 높다<br>• 자율운항선박의 해상 사고 책임 문제가 여전히 모호하여, 보험 및 법적 책임 체계가 미성숙한 상태에서 조기 상용화는 사회적 리스크를 야기할 수 있다<br>• RoRo 선박은 자동차 수출 기업에 의존도가 높은데, 해운사·조선업체·자동차 산업 간 이해관계 충돌로 인한 도입 지연 우려가 있다<br>• 선원 일자리 감소로 인한 해양산업 종사자의 구조적 실업 문제와 이에 따른 사회적 반발을 간과해서는 안 되며, 기술 도입만으로는 산업 전환의 부작용을 해결할 수 없다</div>`,
      tags: ["Autonomous Vessels","RoRo Ships","Japan Maritime","Regulatory Approval","Unmanned Ships"],
      link: "https://www.marineinsight.com/hokuren-maru-no-2-becomes-japans-first-roro-vessel-to-pass-inspection-as-an-autonomous-vessel/",
      coords: [139.6917,35.6895],
      location: "Japan"
    }
  ]
});

// ── AI Secretary Report ──
addEvents({
  "2024-01-15": [
    {
      type: "news",
      title: "Cargo Ship Rams Bridge Near Düsseldorf, Germany - Containers Fall into Rhine River",
      source: "Marine Insight",
      sourceMeta: "Marine Insight · 2024-01-15",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 독일 뒤셀도르프 인근의 라인강에서 화물선이 다리와 충돌하여 여러 컨테이너가 강으로 낙하하는 사고 발생<br>• 충돌로 인한 다리 구조물 손상과 수로 폐쇄 우려로 내륙 수운(inland waterway) 교통 차질 발생 가능<br>• 라인강은 유럽 핵심 운송로로 독일, 네덜란드, 스위스 등 다국적 해운물류에 중대 영향<br>• 낙하 컨테이너로 인한 환경 오염 위험 및 수색구조 작업 진행 중<br>• 사고 원인은 항해사 오류, 기상 악화, 선박 제어 불량 등 복합 요인으로 추정<br>• 내륙 수운 안전 기준 강화 및 선박 통과 규제 재검토 필요성 대두<br><h3>Key Quotes</h3><br>• "The cargo ship collided with the bridge infrastructure, resulting in multiple containers falling into the Rhine River" (화물선이 다리 시설과 충돌하여 여러 컨테이너가 라인강으로 낙하했다)<br>• "Navigation restrictions have been imposed on the Rhine waterway to assess structural damage and facilitate recovery operations" (라인강 수로에 항행 제한이 내려졌으며 구조물 손상 평가 및 회수 작업이 진행 중이다)<br><h3>Devil's Advocate</h3><br>• 사고 책임 소재가 명확하지 않을 경우, 선주·운영사·항로 관리 당국 간 법적 분쟁으로 장기간 소송화될 가능성이 높으며 이는 피해 보상을 지연시킬 수 있다<br>• 라인강 같은 국제 수로의 경우 인접 국가들(독일, 네덜란드, 벨기에 등)이 항행 규제를 각각 강화하면 운송 효율성 저하로 유럽 내륙 물류 비용이 급상승할 우려가 있다<br>• 낙하된 컨테이너 내용물이 독성 화학물질이나 위험물일 경우, 현재 보도되지 않은 환경 오염이 광범위하게 진행되었을 가능성을 배제할 수 없다<br>• 사고 원인을 단순히 항해사 과실로만 규정할 경우, 선박의 노후화·자동항법장비 고장·유지보수 부실 등 구조적 문제가 은폐될 수 있으며 향후 유사 사고 예방에 실패할 수 있다</div>`,
      tags: ["cargo ship accident","bridge collision","Rhine River","container loss","Germany","maritime incident"],
      link: "https://www.marineinsight.com/cargo-ship-rams-bridge-near-germanys-dusseldorf-containers-fall-into-rhine-port/",
      coords: [6.7734,51.2277],
      location: "Düsseldorf, Germany"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-27
addEvents({
  "2026-03-27": [
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Runs Aground on Iran's Qeshm Island After Strait of Hormuz Attack",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-27",
      image: "https://gcaptain.com/wp-content/uploads/2018/09/gCaptain_Logo.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 태국 국적 30,000톤급 벌크선 Mayuree Naree가 3월 11일 호르무즈 해협에서 정체불명의 포사체 공격으로 추진력을 잃고 이란 케시이스 도서에 좌초됨<br>• Precious Shipping이 소유한 선박으로, 엔진실 화재 발생으로 20명의 선원이 오만 해군에 의해 구조됨<br>• 3명의 선원이 엔진실에 갇혀있을 우려가 있으며 아만-이란 합동 구조팀이 수색 작업 중<br>• 선박은 몇 일간 표류 후 호르무즈 해협 입구 인근의 전략적 요충지인 케시 도서 연안에 좌초<br>• 현재 호르무즈 해협의 해상 보안 상황이 극히 악화되어 있으며 글로벌 해운 비용 급증 예상<br>• Precious Shipping은 전쟁위험보험 가입으로 인한 중대한 재정적 영향은 없을 것으로 예상</p><h3>Key Quotes</h3><br>• "Two projectiles of unknown origin hit the ship, igniting a fire in the engine room and forcing the crew to abandon ship" (정체불명의 포사체 2발이 선박을 명중하여 엔진실 화재를 유발하고 승무원의 기선 탈출을 강요함)<br>• "The waterway, which handles roughly a quarter of global seaborne oil trade, has seen vessel traffic collapse, with attacks, insurance withdrawals, and electronic interference disrupting normal operations" (글로벌 해상 석유무역의 약 1/4을 처리하는 이 수로는 공격, 보험 철수, 전자 간섭으로 인해 선박 통행이 붕괴됨)</p><h3>Technical Insights</h3><br>• 호르무즈 해협의 극도로 악화된 해상 보안 상황으로 인해 자동화·AI 기반 선박 운항 기술의 중요성이 더욱 증대되고 있으며, 원격 모니터링 및 자동 회피 시스템의 필요성이 대두됨<br>• 전쟁 위험 상황에서의 선박 운항은 COLREG 및 국제해사법의 기존 틀에서 벗어난 새로운 안전 프로토콜 개발 필요<br>• 호르무즈 해협 통과선박의 보험료 급증 및 항로 회피 증가로 인한 전 지구적 해운업계 경제성 악화 심화<br>• IMO의 전쟁 지역 해상 안전 지침 강화 및 해협 통과선의 강제 호위 체계 도입 등 규제 강화 논의 필요</p></div>`,
      tags: ["bulk carrier","grounding","Strait of Hormuz","attack","missing crew"],
      link: "https://gcaptain.com/stricken-bulk-carrier-mayuree-naree-runs-aground-on-irans-qeshm-island/",
      coords: [53.9,26.7],
      location: "Qeshm Island, Iran / Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal accident to crew member on ro-ro cargo vessel Laureline - MAIB Investigation Report 2026-7",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2024년 7월 13일 몰타 선적 자동차 운반선(ro-ro cargo vessel) Laureline호에서 승무원이 이동 중인 트레일러와 선박 구조물 사이에 끼어 사망하는 사고 발생</p><p>• 사건 원인: 트레일러 조종사가 승무원의 위치를 인식하지 못한 채 트레일러를 후진시켰으며, 승무원은 트레일러의 이동이 완료되었다고 가정하고 뒤로 지나감</p><p>• 선박 운영사가 신규 차량갑판 안전절차를 도입했으나 교육 및 이행에 미흡하여 현장 승무원들이 위험지역 진입을 계속함</p><p>• 트레일러 조종사는 위험지역 및 승무원이 보이지 않을 때 정지해야 한다는 요구사항을 인식하지 못했으며, 실제 작업 관행과 불일치</p><p>• MAIB는 Clipper Pennant호에서의 유사 사고(2024년 조사) 이후 업계 표준 안전 규칙 개발을 권고했으며, 이번 사건으로 인해 업데이트된 권고사항 발행</p><p>• 업계 지침은 트레일러 조종사가 Marshaller(신호수)에 의존하여 안전하게 위치를 잡을 것이라는 잘못된 가정에 기반함</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." (사망한 승무원은 트레일러의 조종이 완료되었다고 가정하고 뒤로 지나갔을 가능성)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." (트레일러 조종사가 승무원의 위치를 인식하지 못한 채 정렬을 위해 후진하여 승무원을 선박 구조물에 끼우게 함)</p><p>• "The vessel operators had instigated a new procedure for vehicle deck safety. However, there were weaknesses in its training and implementation, and it was not well understood by the crew working on the vehicle deck." (선박 운영사는 새로운 안전절차를 시행했으나 교육 및 이행에 미흡하여 현장 승무원들이 충분히 이해하지 못함)</p><h3>Technical Insights</h3><p>• 차량갑판 작업의 위험성 인식 부족: ro-ro 선박의 차량갑판에서는 이동 중인 무거운 차량과 협소한 공간으로 인한 사각지대 문제가 심각하며, 현행 업계 지침이 조종사의 책임과 신호수의 역할에 대한 명확한 정의 부재로 인한 위험</p><p>• 절차와 실행 간의 괴리: 선박 운영사의 신규 안전절차가 실제 작업 환경과 근로자의 이해도 격차로 인해 형식적으로만 존재하며, 효과적인 감시 및 관리 체계의 부재가 사고의 근본 원인</p><p>• 업계 표준화의 필요성: MAIB는 UK Chamber of Shipping과 Port Skills and Safety Limited에 ro-ro 선박 차량갑판 안전을 위한 통합 산업 Code of Practice 개발을 강력히 권고하며, 이는 IMO 및 국제 해사 안전 기준과의 조화 필요</p><p>• 인적 요소 관리: 자동화 및 무인화 기술이 증가하는 해운 산업에서도 인간의 판단 오류와 의사소통 부족이 여전히 주요 사고 원인이며, 승무원 교육 및 작업 문화 개선이 기술만큼 중요함을 시사</p></div>`,
      tags: ["fatality","ro-ro vessel","vehicle deck safety","crushing accident","procedural failure"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.5],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-24
addEvents({
  "2026-03-24": [
    {
      type: "news",
      title: "Japan Certifies First Autonomous RoRo Vessel for Commercial Operations",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-03-24",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Large/Hokuren-Maru-No-2_1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본의 호쿠렌마루 노. 2 (Hokuren Maru No. 2) RoRo 선박이 일본 최초로 완전 자율항해 상업운영 인증을 취득했으며, 이는 닛폰재단의 MEGURI2040 프로젝트의 핵심 성과</p><p>• 가와사키기센(K Line) 소유의 6,890톤급 173미터 길이의 동 선박은 2023년부터 개발을 시작했으며, ClassNK로부터 2026년 1월 27일 인증을 받고 2월 9일 일본 국토교통성 검사 통과</p><p>• 센서 기반 자율항해 시스템은 초기 시험에서 평균 96% 운영률을 달성했으며, 일본 라디오와 YDK테크놀로지와 협력하여 지속적으로 개선 중</p><p>• 홋카이도 쿠시로항과 히타치항 간 우유 및 농산물 운송 노선에서 운영되는 동 선박은 어선이 많고 악천후·안개가 빈번한 도전적 해역 선택</p><p>• MEGURI2040 프로젝트는 2040년까지 국내 선박의 50% 무인운영 달성을 목표로 하며, 일본의 고령화 선원 부족 문제 해결과 인적 오류로 인한 해양사고 예방이 목표</p><p>• 동 RoRo는 프로젝트의 세 번째 자율항해 인증 선박이며, 지난 12월 RoPax 페리가 첫 번째 인증을 받은 이후의 성과</p><h3>Key Quotes</h3><p>• "The 6,890-dwt RoRo Hokuren Maru No. 2, owned and operated by Kawasaki Kisen Kaisha, Ltd. ("K" LINE), completed a series of certifications in January and February on its way to becoming the first autonomous RoRo." <br>(6,890톤급 호쿠렌마루 노. 2가 1월과 2월에 일련의 인증을 완료하여 일본 최초의 자율항해 RoRo가 됨)</p><p>• "The system achieved an average operational rate of 96 percent in the sea area during its first tests."<br>(초기 시험에서 시스템이 해역에서 평균 96%의 운영률을 달성함)</p><p>• "The motivation was to address Japan's declining and aging population of seafarers, reduce the workload for seafarers, and prevent accidents at sea due to human error."<br>(일본의 감소하는 선원 인구와 고령화 문제를 해결하고, 선원의 업무 부담을 줄이며, 인적 오류로 인한 해상사고를 예방하는 것이 동기)</p><h3>Technical Insights</h3><p>• 자율항해 기술 검증: 센서 기반 시스템이 도시 항만(도쿄만), 장거리 항해(약 500마일), 18시간 이상 지속성 테스트, 접안(berthing) 등 주요 운영 요소를 모두 입증했으며, 이는 실제 상업운영 가능성을 검증하는 중요한 기술적 이정표</p><p>• IMO/국제규범 준비: ClassNK의 인증과 일본 국토교통성의 검사 통과는 자율선박 운영의 국제적 규범화가 진행 중임을 보여주며, 향후 IMO의 MASS(Maritime Autonomous Surface Ships) 기준 수립에 선제적으로 대응하는 국가 차원의 전략</p><p>• 도메스틱 노선 우선 도입: 쿠시로-히타치 노선과 같이 어선이 많고 악천후가 빈번한 국내 노선에서의 우선 운영은 자율항해 기술의 실제 환경 검증을 통해 COLREG 준수 및 해상충돌 회피능력을 실증하는 산업적 접근</p><p>• 선원 감소 대응 전략: MEGURI2040의 2040년 50% 무인운영 목표는 일본뿐만 아니라 전 세계 해운산업의 선원 부족 문제 해결을 위한 구조적 솔루션을 제시하며, RoRo와 같</p></div>`,
      tags: ["Autonomous Navigation","RoRo Ship","Japan","MEGURI2040","ClassNK Certification"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.5731,36.2048],
      location: "Japan (Kushiro-Hitachi Route)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-11
addEvents({
  "2026-03-11": [
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Runs Aground on Iran's Qeshm Island After Strait of Hormuz Attack",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-27",
      image: "https://gcaptain.com/wp-content/uploads/2018/09/gCaptain_Logo.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 태국 선적 벌크선 Mayuree Naree(30,000톤급)가 3월 11일 호르무즈 해협에서 정체 미상의 발사체 2발에 피격되어 엔진룸 화재 발생 및 추진력 상실</p><p>• 선박 및 소유사: Precious Shipping 소유의 Mayuree Naree호, 아랍에미리트에서 출항 직후 피격으로 승무원 20명 구조(오만 해군), 3명 실종</p><p>• 좌초 발생: 추진력 상실로 수일간 표류 후 이란 Qeshm Island 연안에 좌초, Oman-Iran 연합 구조팀이 실종 선원 수색 중</p><p>• 인명 피해: 엔진룸에 있던 3명의 선원이 화재 발생 당시 갇힌 것으로 추정되어 생명 위협 상황</p><p>• 산업 영향: 호르무즈 해협 해양 보안 상황 악화, 전 세계 해상유 거래량의 약 25% 취급 해역의 선박 운항 붕괴, 보험료 인상 및 공급망 비용 증가 우려</p><p>• 손상 규모: 선박이 선박내 (ballast 상태)로 운항 중이었으므로 적화 손실 없음, 전쟁위험보험 가입으로 회사의 재정적 영향 제한적</p><h3>Key Quotes</h3><p>• "Two projectiles of unknown origin hit the ship, igniting a fire in the engine room and forcing the crew to abandon ship." (정체 미상의 발사체 2발이 선박을 피격하여 엔진룸에 화재를 일으키고 승무원 전원 탈출 강제)</p><p>• "The waterway, which handles roughly a quarter of global seaborne oil trade, has seen vessel traffic collapse, with attacks, insurance withdrawals, and electronic interference disrupting normal operations." (전 세계 해상유 거래량의 약 25%를 취급하는 수로의 선박 통항량이 붕괴되었으며, 공격, 보험 철수, 전자 간섭으로 정상 운영 중단)</p><p>• "Thailand has condemned the attack and called for accountability, while industry groups warn the incident could further deter shipping and drive up costs across global supply chains." (태국이 공격을 규탄하고 책임 추궁을 요구했으며, 산업 단체들은 이 사건이 해운을 더욱 억제하고 글로벌 공급망 비용을 상승시킬 수 있음을 경고)</p><h3>Technical Insights</h3><p>• 해양 보안 위협 심화: 호르무즈 해협에서의 공격 빈도 증가로 자동화 내비게이션 시스템 및 원격 모니터링 기술의 필요성 대두, SOLAS 개정을 통한 강화된 안전 규정 필요</p><p>• IMO COLREG 운영 마비: 전자 간섭(jamming)으로 인한 AIS 신호 두절 및 레이더 기능 저하로 기존 충돌 회피 규칙의 실효성 상실, 선박의 자동 운항 능력 요구 증가</p><p>• 보험 및 운항 거부 현상: 전쟁위험보험의 철수 및 상보험료 인상으로 중소 선사의 호르무즈 해협 운항 기피, 글로벌 에너지 거래 관행 변화 예상</p><p>• 자동화 선박의 도입 촉진: 인명 피해 위험을 줄이기 위해 무인 또는 원격 조종 벌크선 도입 논의 가속화, 위기 상황에서의 즉각적 응답 능력 강화 필요</p></div>`,
      tags: ["bulk carrier","Strait of Hormuz","attack","grounding","missing crew","maritime security"],
      link: "https://gcaptain.com/stricken-bulk-carrier-mayuree-naree-runs-aground-on-irans-qeshm-island/",
      coords: [53.78,26.92],
      location: "Qeshm Island, Iran / Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal Accident on Roll-on/Roll-off Cargo Vessel Laureline - Crew Crushed by Moving Trailer",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 2024년 7월 13일 몰타 선적 자동차운반선(Ro-Ro) Laureline호에서 승무원이 이동 중인 트레일러와 선박 구조물 사이에 압착되어 사망<br>• 사고는 Purfleet 항만에서 선적 및 양하 작업 중 발생했으며, 해안 작업자가 운전하는 견인차와 선박 승무원의 지휘 하에서 트레일러 조종 작업 진행 중<br>• 사망자는 트레일러가 조종을 완료했다고 판단하고 안전하다고 가정하여 뒤를 지나갔으나, 견인차 운전자가 재정렬을 위해 역진하면서 압착<br>• 선박 운영사가 새로운 차량갑판 안전절차를 도입했으나 훈련과 이행에 미흡한 부분 있었고, 승무원들이 이를 제대로 이해하지 못함<br>• 견인차 운전자는 위험지역 인식 및 승무원 시야 밖에서 정지해야 한다는 요구사항을 이해하지 못했으며, 실제 작업관행과 불일치<br>• MAIB는 Clipper Pennant호의 유사 사고(2024년 보고서 16/2024) 이후 영국해운회의소(UK Chamber of Shipping)에 업계 안전지침 개발 권고</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." <br>(사망한 승무원은 트레일러가 조종을 완료했다고 가정하여 뒤를 지나갔으나, 이는 위험한 가정이었음)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure."<br>(견인차 운전자는 승무원의 위치를 알지 못한 채 재정렬을 위해 역진하여 승무원을 선박 구조물에 압착)</p><p>• "The vessel operators had instigated a new procedure for vehicle deck safety. However, there were weaknesses in its training and implementation."<br>(선박 운영사가 새로운 차량갑판 안전절차를 도입했으나, 훈련과 이행에 약점이 있었음)</p><h3>Technical Insights</h3><p>• Ro-Ro 선박 안전절차의 실행 격차: 선박 운영사가 도입한 새로운 안전절차가 현장 승무원과 해안 작업자(견인차 운전자)에게 제대로 전달되지 않아 실제 작업 관행과 괴리 발생 - 규정 이행만으로는 부족하며 실질적 이해와 감독이 필수</p><p>• 시야 제한 상황의 위험성: 업계 지침이 견인차 운전자가 마샬러(감시자)의 신호에만 의존하고 시야 밖에서 정지할 것이라는 잘못된 가정에 기반 - 실제로는 운전자가 독립적으로 위험지역을 인식하고 정지 결정을 내려야 함</p><p>• 효과적 감독의 부재: 차량갑판 감독이 미흡하고 경영진의 안전절차 이행 확인 절차 부실 - 선박의 안전관리체계(SMS)에서 실행 확인(verification) 단계의 강화 필요</p><p>• 산업 규정의 선제적 개선: MAIB가 유사 사고 재발 방지를 위해 영국해운회의소에 대한 Ro-Ro 차량갑판 안전 Code of Practice 개발 권고 - IMO 및 국제 해운업계의 통일된 안전 기준 수립 시급</p></div>`,
      tags: ["Fatal Accident","Ro-Ro Vessel","Crew Safety","Vehicle Deck","Purfleet"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.5],
      location: "Purfleet, England"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-27
addEvents({
  "2026-03-27": [
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Runs Aground on Iran's Qeshm Island After Strait of Hormuz Attack",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-27",
      image: "https://gcaptain.com/wp-content/uploads/2018/09/gCaptain_Logo.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 태국 선적 30,000톤급 벌크선 Mayuree Naree가 3월 11일 호르무즈 해협에서 정체불명의 미사일 공격으로 피격되어 기관실 화재 발생, 선박 추진력 상실<br>• Precious Shipping 소유 선박이 승무원 20명은 구조되었으나 기관실에 있던 3명의 선원이 실종 상태로 화염에 갇혔을 가능성 높음<br>• 선박이 며칠간 표류한 후 이란 Qeshm Island 근처 해안에 좌초되었으며, 오만-이란 합동 구조팀이 실종 선원 수색 중<br>• 호르무즈 해협의 극도로 악화된 해상 보안 상황으로 전역 해상 무역량의 약 25% 차지하는 수역의 선박 통행 급감<br>• 태국 정부가 공격 규탄 및 책임 추궁 촉구, 산업계는 이 사건으로 인한 해운비 상승 우려</p><h3>Key Quotes</h3><p>• "Two projectiles of unknown origin hit the ship, igniting a fire in the engine room and forcing the crew to abandon ship." (정체불명의 두 개 미사일이 선박을 피격하여 기관실 화재를 유발하고 승무원의 abandon ship 결정을 강제함)</p><p>• "The waterway, which handles roughly a quarter of global seaborne oil trade, has seen vessel traffic collapse, with attacks, insurance withdrawals, and electronic interference disrupting normal operations." (전역 해상 석유 무역량의 약 25%를 담당하는 이 수로에서 공격, 보험 철회, 전자 간섭으로 인해 선박 통행이 붕괴 상태)</p><h3>Technical Insights</h3><p>• 전략적 해상 통로 안전성 악화: 호르무즈 해협은 세계 석유 수송의 생명선으로, 현재의 지정학적 갈등으로 인한 무장 공격으로 인해 선박의 안전성이 급격히 악화되고 있으며 이는 전역 에너지 공급망에 심각한 영향 미침</p><p>• 해상 보험 및 리스크 관리 체계 붕괴: War-risk insurance 적용에도 불구하고 선사들의 해당 해역 운항 회피 현상 심화로 인해 보험 시장 자체의 신뢰성 하락 및 운영비 급증</p><p>• 해상 교통 안전 규정(COLREG) 적용 한계: 무장 공격 상황에서 기존의 해상 충돌 회피 규칙이 무의미해지며, IMO 차원의 고위험 해역 통항 프로토콜 및 군사적 보호 조치의 강화 필요성 대두</p><p>• 자율운항선박(MASS) 도입의 위험성: 현재의 호르무즈 해협 같은 고위험 해역에서는 인적 대응 능력이 중요하며, 완전 자율운항선박의 도입은 무장 공격 상황 대응 능력 부족으로 인해 실질적 위험 초래 가능성</p></div>`,
      tags: ["bulk carrier","Strait of Hormuz","attack","grounding","missing crew","maritime security"],
      link: "https://gcaptain.com/stricken-bulk-carrier-mayuree-naree-runs-aground-on-irans-qeshm-island/",
      coords: [53.9,26.7],
      location: "Qeshm Island, Iran / Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal Accident: Crew Member Crushed on Ro-Ro Vessel Laureline",
      source: "MAIB (UK Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사망 사건: 2024년 7월 13일 몰타 등록 자동차 운반선 로린라인(Laureline)에서 선원이 움직이는 트레일러와 선박 구조물 사이에 끼어 사망</p><p>• 사고 경위: 육상 작업자가 조종하는 예인선으로 트레일러를 적재/하역 중, 선원이 기동을 마친 트레일러 뒤를 지나갈 때 예인선 운전사가 선원의 위치를 인식하지 못한 채 트레일러를 후진시켜 충돌</p><p>• 근본 원인: 신규 차량갑판 안전 절차의 훈련 및 이행 미흡, 예인선 운전사의 위험 구간 인식 부족, 갑판 감독의 비효과적인 감시</p><p>• 산업 지도의 문제점: 기존 지침이 운전사가 마샬러(지도원)의 신호에만 의존하고 마샬러가 보이지 않으면 정지한다는 잘못된 가정에 기반</p><p>• 재정 조치: MAIB는 이전 클리퍼 페넌트호(Clipper Pennant) 사건과 유사한 문제를 언급하며, 영국해운회의소와 항만안전교육기관에 통합 산업 안전 규약 개발을 권고</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." (사망한 선원은 트레일러가 기동을 마쳤다고 가정하고 뒤를 지나갔을 것으로 추정됨)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." (예인선 운전사는 선원의 위치를 인식하지 못한 채 정렬을 위해 트레일러를 후진시켜 선원을 선박 구조물에 압박)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller." (로로선 차량갑판 운영 지침이 운전사가 마샬러에 의존하고 마샬러가 보이지 않으면 정지한다는 잘못된 가정에 의존)</p><h3>Technical Insights</h3><p>• 차량갑판 안전 절차의 실행 격차: 해운사가 신규 안전 절차를 수립했으나 실제 선원들의 작업 관행과 절차 간 괴리가 존재하여 위험 구간 진입이 상습화됨</p><p>• 예인선 운전사 교육의 문제점: 운전사의 위험 구간 인식 기준과 실제 작업 관행이 불일치하며, 시야 상실 시 정지 요구사항이 제대로 이행되지 않음</p><p>• 감독 및 경영 보증의 부재: 선박 관리회사의 비효과적 감독과 새로운 안전 절차 이행 확인의 부실로 조직적 안전 관리 체계 실패</p><p>• 산업 표준 개발 필요성: MAIB는 영국해운회의소와 항만안전기관에 로로선 안전의 통합 산업 행동 강령 개발을 강력히 권고하여 재발 방지 추구</p></div>`,
      tags: ["Fatal Accident","Ro-Ro Cargo Vessel","Vehicle Deck Safety","Crushing Injury"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.48],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-26
addEvents({
  "2026-03-26": [
    {
      type: "news",
      title: "U.S. Navy Unveils Medium Unmanned Surface Vessel (MUSV) for Golden Fleet Initiative",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-26",
      image: "https://www.navalnews.com/wp-content/uploads/2025/07/Ekran-goruntusu-2025-07-20-010005.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해군이 Golden Fleet 이니셔티브의 핵심 플랫폼으로 중형 무인 수상함(MUSV, Medium Unmanned Surface Vessel) 패밀리 시스템을 공식 발표했으며, 이는 자율운항 함정 도입의 중요한 전환점을 의미함</p><p>• MUSV는 ISO 40피트 컨테이너 형식의 페이로드 2개 이상을 탑재 가능하며, 다양한 센서, 수리 장비 등 임무별 모듈식 시스템 교체 운용이 가능한 멀티롤 플랫폼</p><p>• Rebecca Gassler 로보틱스·자율시스템(RAS) 포트폴리오 인수 담당관은 "MUSV 마켓플레이스를 개방하여 다수의 벤더 자격 획득"을 목표로 함</p><p>• 기존 MASC(Modular Attack Surface Craft) 프로토타이핑 프로그램을 확대·개선한 것으로, 단일 용도 제약을 벗어나 광범위한 해군 임무 수행 가능</p><p>• 2026년 말까지 COLREG(해상충돌방지규칙) 기반 자율항법 검증 및 수상 시험을 완료할 예정</p><h3>Key Quotes</h3><p>• "We have as of 7am opened the MUSV marketplace to accelerate autonomous capability to the fleet" (함대의 자율운항 능력을 촉진하기 위해 MUSV 마켓플레이스를 개방했다는 의미)</p><p>• "Inside containers you could have a sensor, repair equipment, or any number of payloads that can be swapped like a container ship" (컨테이너 내부에 센서, 수리 장비 등 다양한 페이로드를 컨테이너선처럼 교체 가능하다는 뜻)</p><p>• "MUSV was tailored for a specific mission in the fleet. We have a much wider requirement for these vessels as a part of the Golden Fleet" (MUSV는 광범위한 해군 임무 요구사항을 충족하도록 설계되었다는 의미)</p><h3>Technical Insights</h3><p>• COLREG 자율항법 검증: 2026년 말까지 국제 해상충돌방지규칙(COLREG) 준수 기반의 자동 회피 기동 및 수상 시험 완료 목표로, 규제 준수 자율운항 기술의 조기 실전화 추진</p><p>• 모듈식 페이로드 아키텍처: ISO 컨테이너 표준화를 통해 다양한 미션 시스템(센서, 무기, 통신, 수리장비 등)의 신속한 교체 운용이 가능하며, 해군 임무의 유연성과 비용 효율성 극대화</p><p>• 산업 생태계 확대: SAM.gov 마켓플레이스 개방을 통해 민간 자율운항 기술 벤더의 광범위한 참여 유도로, 자율선박 기술 표준화 및 산업 성숙도 가속화 기대</p><p>• Golden Fleet 통합 운영: 컨테이너화된 자율 능력을 기존 함대 시스템과 네트워크로 통합하여 분산 해양 작전(Distributed Maritime Operations) 개념의 실현 단계로 진입</p></div>`,
      tags: ["autonomous ships","unmanned surface vessels","U.S. Navy","Golden Fleet","maritime technology"],
      link: "https://www.navalnews.com/naval-news/2026/03/u-s-navy-unveils-unmanned-centerpiece-of-golden-fleet-initiative/",
      coords: [38.8816,-77.0369],
      location: "Washington, D.C."
    }
  ]
});

// ── AI Secretary Report ──
addEvents({
  "2024": [
    {
      type: "news",
      title: "Why Crew Feedback is the Missing Link in Maritime Operations",
      source: "Splash247",
      sourceMeta: "Splash247 · 2024",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 해양 산업에서 선원의 피드백이 운영 효율성과 안전 개선의 핵심 요소임을 강조하는 기사<br>• 현장 선원들의 실무 경험과 인사이트가 경영진의 의사결정 과정에서 체계적으로 반영되지 않고 있는 구조적 문제 지적<br>• 선원 피드백 시스템 구축을 통해 선박 운영의 효율성 증대, 안전사고 예방, 그리고 인력 유지율 개선이 가능함을 제시<br>• 디지털 플랫폼과 투명한 커뮤니케이션 채널을 통한 체계적인 피드백 수집 체계의 필요성 강조<br>• 선원 의견 수렴이 단순한 HR 관리가 아닌 전사적 운영 전략의 중요한 구성 요소임을 주장<br><h3>Key Quotes</h3><br>• "Crew feedback is not just a matter of employee satisfaction—it is a critical operational tool that directly impacts safety, efficiency, and profitability" (선원 피드백은 단순한 직원 만족도 문제가 아니라 안전, 효율성, 수익성에 직접적으로 영향을 미치는 중요한 운영 도구다)<br>• "Without proper channels for crew input, companies are operating blind to the real-world challenges facing their vessels" (선원의 의견을 수렴할 적절한 채널이 없다면, 기업은 자신의 선박이 직면한 현실적 문제에 대해 맹목적으로 운영하고 있는 것이다)<br>• "The maritime industry's hierarchical structure often silences the voices that matter most—those on the front lines" (해양 산업의 계층적 구조는 현장 최일선에 있는 가장 중요한 목소리를 억압하는 경향이 있다)<br><h3>Devil's Advocate</h3><br>• 선원 피드백 수집 시스템 구축에는 상당한 비용과 인력이 필요하며, 이것이 수익성 낮은 중소 해운사들에게는 실질적 부담이 될 수 있다는 점을 간과하고 있다<br>• 수평적 피드백 문화의 강조가 조직의 지휘 체계와 규율을 약화시킬 수 있으며, 특히 해상 안전이 엄격한 위계 질서에 의존하는 환경에서는 양날의 검이 될 수 있다<br>• 선원들의 피드백이 단순히 민원이나 불만 제기 수준에 머물 가능성이 높으며, 이를 기술적/운영적 개선으로 전환하는 과정에서의 실행 능력 부족이 담론에서 누락되어 있다<br>• 글로벌 선원 풀에서 다양한 문화와 언어 배경의 종업원들로부터 의미 있는 피드백을 체계적으로 수집하고 실행하는 것은 이론보다 현실적으로 훨씬 복잡하다는 점이 고려되지 않았다</div>`,
      tags: ["Crew Management","Maritime Operations","Operational Feedback","Human Factors","Industry Best Practice"],
      link: "https://splash247.com/why-crew-feedback-is-the-missing-link-in-maritime-operations/?utm_source=dlvr.it&amp;utm_medium=linkedin",
      coords: [0,0],
      location: "Global Maritime Industry"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal Crew Member Crushing Accident on RoRo Vessel Laureline",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2024년 7월 13일 몰타 선적 RoRo 화물선 Laureline에서 선원이 이동 중인 트레일러와 선박 구조물 사이에 압축되어 사망<br>• 갑판 안전 절차 미흡 및 비효과적 감독: 선박 운영사가 새로운 차량 갑판 안전 절차를 도입했으나 교육 및 이행의 약점 존재<br>• 예인차 운전자가 선원의 위치를 인식하지 못한 상태에서 트레일러를 후진시켜 사고 발생<br>• 선원은 트레일러 조종이 완료된 것으로 가정하고 안전하다고 생각하여 위험 구역을 통과<br>• 산업 지침의 결함: RoRo 갑판 운영 관련 기존 지침이 예인차 운전자가 도선사에 의존하며 시야를 잃으면 정지할 것이라는 잘못된 가정에 의존<br>• MAIB는 유사 사고(Clipper Pennant, 2024)를 토대로 영국 해운회의소에 RoRo 선박 차량 갑판 안전을 위한 통합 산업 행동강령 개발 권고</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." <br>(사망한 선원은 트레일러의 조종이 완료되었다고 가정하여 안전하다고 생각하고 뒤를 지나감)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure."<br>(예인차 운전자는 선원의 위치를 인식하지 못한 채 트레일러를 후진시켜 선원을 선박 구조물에 압축)</p><p>• "Supervision on the vehicle deck was ineffective, and the vessel's management company had not provided effective assurance to confirm that the new safety procedure had been understood or fully implemented on board."<br>(차량 갑판의 감독이 비효과적이었으며, 선박 관리회사가 새로운 안전 절차가 이해되고 완전히 이행되었는지 확인하기 위한 효과적인 보장을 제공하지 못함)</p><h3>Technical Insights</h3><p>• RoRo 갑판 작업의 위험 구역 관리: 현장 지침이 도선사(marshaller)의 신호 의존도에 과도하게 의존하고 있으며, 시야 차단 시 즉시 정지 의무에 대한 예인차 운전자의 이해 부족이 핵심 문제<br>• 절차와 실행의 괴리: 선박 운영사의 새로운 안전 절차가 형식적으로만 도입되었으며, 갑판 크루의 실제 작업 관행과 불일치하는 훈련 및 이행으로 인해 실효성 상실<br>• 산업 표준화 필요성: IMO 및 국내 해운 당국은 RoRo 선박의 차량 갑판 작업에 대한 통일된 행동강령 개발 필요(영국 해운회의소 권고 2024/148 갱신)<br>• 인적요소 및 안전문화: 선박 관리회사의 감시 체계 강화, 정기적 안전 감사, 선원 및 항만 근로자 간 의사소통 프로토콜 개선이 유사 사고 예방의 필수 조건</p></div>`,
      tags: ["Fatal Accident","RoRo Cargo Vessel","Crew Safety","Vehicle Deck Operations","Occupational Hazard"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.48],
      location: "Purfleet, England"
    },
    {
      type: "accident",
      title: "Fatal RoRo Accident on Laureline Highlights Ongoing Vehicle Deck Safety Issues",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-29",
      image: "https://images.marinelink.com/images/maritime/w800/source-169304.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2024년 7월 13일 말타기국 RoRo선 로렐린(Laureline)에서 화물차량과 선박 구조물 사이에 낀 선원이 사망하는 사고 발생</p><p>• 영국 해양사고조사청(MAIB)이 조사 결과를 발표했으며, 사건은 선박 옆에서 예인선을 이용한 트레일러 적하작업 중 발생</p><p>• 주요 원인: 안전절차 미흡, 예인선 기사와 선원 간의 위험구역 인식 차이, 비효과적인 감시 체계</p><p>• 선박 운영사가 시행한 신규 안전절차가 적절히 교육·이행되지 않았으며, 승무원들이 이동 차량 주변의 위험구역으로 계속 진입</p><p>• MAIB는 유사 사고(Clipper Pennant, 2024)와 연계하여 RoRo선 차량갑판 운영을 위한 통합 산업 안전 지침서(Code of Practice) 개발을 권고</p><p>• 업계 지침이 예인선 기사가 마셜러(marshaller)에 의존하여 안전하게 위치 결정될 것이라는 오류에 기초하고 있어 근본적인 개선 필요</p><h3>Key Quotes</h3><p>• "Laureline is the latest in a series of tragic vehicle deck accidents across Europe and is a stark reminder that procedural controls alone are not sufficient to protect workers on ro-ro vehicle decks." (절차적 통제만으로는 RoRo선 차량갑판 근무자 보호에 부족함)</p><p>• "it was no longer tenable for the industry to continue operating in the current manner. Sadly, that remains true today" (현재의 운영 방식으로는 더 이상 안전을 보장할 수 없으며, 이는 여전히 현실)</p><h3>Technical Insights</h3><p>• 차량갑판 안전 절차의 실효성 문제: 선박이 도입한 신규 안전절차가 형식적이었으며, 선원들의 실제 작업 관행과 괴리되어 있어 안전교육의 실질적 이행이 필수적임</p><p>• 예인선 기사와 선원 간 커뮤니케이션 붕괴: 마셜링 시스템 의존도가 높으나 실제 위치 인식 실패로 인한 충돌 위험이 상존하며, 명확한 신호 체계와 상호 확인 프로토콜 필수</p><p>• 산업 전반의 통합 안전 지침 부재: MAIB가 반복되는 사고를 통해 업계 전체의 통합 Code of Practice 필요성을 강조하고 있으며, IMO 및 해사당국의 강화된 규제 추진 가능성 높음</p><p>• RoRo선 운영 리스크: 안전 책임의 분산(선박 운영사, 예인선 회사, 항만 당국), 비숙련 예인선 기사의 증가, 감시 체계 부족으로 인한 사고 재발 위험이 지속적으로 제기되고 있음</p></div>`,
      tags: ["RoRo accident","fatality","vehicle deck safety","MAIB investigation"],
      link: "https://www.marinelink.com/news/report-fatal-accident-highlights-ongoing-537464",
      coords: [0.3,51.5],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-29
addEvents({
  "2026-03-29": [
    {
      type: "news",
      title: "U.S. Navy Commissions USS Massachusetts Virginia-Class Fast-Attack Submarine",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-03-29",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해군이 버지니아급 고속공격잠수함 USS 매사추세츠호(SSN 798)를 2026년 3월 28일 보스턴 항에서 공식 취역</p><p>• General Dynamics Electric Boat와 HII-Newport News Shipbuilding 간 팀 협력 계약으로 건조된 7번째 Block IV 버지니아급 잠수함</p><p>• 미 해군의 지속적인 해양 방위력 강화 및 전략적 수중전력 증강을 의미하는 주요 군사 행사</p><p>• 잠수함 건조산업 내 대형 방위산업체들의 역할 분담과 협력체계 구축</p><p>• 차세대 Block IV 잠수함 기술의 실전 배치로 태평양 및 대서양 전략에 영향</p><h3>Key Quotes</h3><p>• "USS Massachusetts is the seventh Block IV Virginia-class submarine" (USS 매사추세츠호는 버지니아급 Block IV 잠수함 중 7번째 함정이다)</p><p>• "built under a teaming agreement between General Dynamics Electric Boat and HII-Newport News Shipbuilding" (General Dynamics Electric Boat와 HII-Newport News Shipbuilding 간 팀 협력 계약으로 건조됨)</p><h3>Technical Insights</h3><p>• Block IV 버지니아급 잠수함은 차세대 작전능력(Multi-Mission Platform Modernization, MMPM) 탑재로 정보수집, 감시, 정찰(ISR) 임무 강화</p><p>• 미 해군의 전략적 억지력(Strategic Deterrence) 유지를 위한 핵심 수중전력 자산이며, 인도-태평양 지역 해양안보 전략과 직결</p><p>• 잠수함 건조 산업의 지속적 수요와 고부가가치 방위산업 생태계 유지로 미국의 산업경쟁력 강화</p></div>`,
      tags: ["U.S. Navy","Virginia-class submarine","USS Massachusetts","Naval Defense"],
      link: "https://defence-blog.com/u-s-navy-commissions-new-fast-attack-submarine/",
      coords: [-71.0096,42.3601],
      location: "Boston Harbor, Massachusetts, USA"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal accident to crew member on ro-ro cargo vessel Laureline - crushed by moving trailer",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 2024년 7월 13일 몰타 등록 로로(ro-ro) 화물선 로린(Laureline)에서 승무원이 이동 중인 트레일러와 선박 구조물 사이에 끼어 사망</p><p>• 사고 원인: 선박 직원이 트레일러 뒤를 지나갈 때 안전하다고 가정했으나, 예인선 운전기사가 승무원의 위치를 인식하지 못한 채 트레일러를 역주행하여 승무원을 압사</p><p>• 관련 기관 및 선박: MAIB(해양사고조사청), 선박 운영자, 육상 예인선 운전기사, 로로 선박 운영 지도기관</p><p>• 안전 절차의 결함: 선박 운영자가 도입한 새로운 차량 갑판 안전 절차가 불완전한 교육과 시행으로 인해 승무원들에게 제대로 이해되지 않음</p><p>• 결과 및 권고: MAIB는 영국 해운회의소(UK Chamber of Shipping)에 로로 선박의 차량 갑판 안전을 위한 업계 실무지침(Code of Practice) 개발 권고</p><p>• 선행 사건: 2024년 클리퍼 페넌트(Clipper Pennant) 호에서 유사 사고 발생으로 동일한 권고 이전에 내려진 바 있음</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring. The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." <br>(사망한 승무원은 트레일러가 조작을 완료했다고 가정하여 안전하다고 생각하고 뒤를 지나갔으나, 예인선 운전기사는 승무원의 위치를 모르고 트레일러를 역주행하여 승무원을 선박 구조물에 압사)</p><p>• "The tug driver's knowledge of danger zones and the requirement to stop when a crew member was out of sight did not align with their actual working practices."<br>(예인선 운전기사의 위험 구역 지식과 승무원이 시야에서 벗어났을 때 정지해야 한다는 요구사항이 실제 작업 관행과 일치하지 않음)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller."<br>(로로 차량 갑판 운영에 대한 업계 지침은 운전기사가 조종자(marshaller)에 의존하고 시야를 잃으면 정지할 것이라는 잘못된 가정에 크게 의존)</p><h3>Technical Insights</h3><p>• 위험 구역 관리 실패: 로로 선박의 차량 갑판에서 예인선 운전기사와 승무원 간의 명확한 의사소통 체계 부재로 인한 구조적 위험 – 해운 업계의 표준화된 안전 절차 수립 필요</p><p>• 절차 대 실제 관행의 괴리: 선박 운영사가 새로운 안전 절차를 도입했으나 불충분한 교육과 감독으로 인해 현장에서 실행되지 않음 – IMO 안전관리규칙(ISM Code) 이행의 실효성 강화 필수</p><p>• 업계 지침의 근본적 결함: 현존 업계 지침이 예인선 운전기사의 조종자(marshaller) 의존 가정에 기반하고 있어 실제 위험을 간과 – 국제해사기구(IMO) 차원의 로로 선박 안전 규정 개정 검토 필요</p><p>• 반복적 사고의 신호: 유사 사고(클리퍼 페넌트)가 2024년 이미 발생했음에도 불구하고 2024년 7월 로린 호에서 동일 유형 사고 재발 – 업계의 권고 이행 속도 가속화 및 강제성 있는 규정 필요</p></div>`,
      tags: ["fatal accident","ro-ro vessel","vehicle deck safety","crushing accident","crew fatality"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.309,51.481],
      location: "Purfleet, England"
    },
    {
      type: "accident",
      title: "Fatal RoRo Accident on Laureline: MAIB Report Highlights Systemic Vehicle Deck Safety Issues",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-29",
      image: "https://images.marinelink.com/images/maritime/w800/source-169304.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 사고 개요: 몰타선적 RoRo선 Laureline호에서 2024년 7월 13일 선원이 이동 중인 트레일러와 선박 구조물 사이에 압사되어 사망한 사건</p><p>• 직접적 원인: 트레일러 조종사(육상 관계자)가 선원의 위치를 인식하지 못한 상태에서 트레일러를 후진시켜 충돌 - 선원은 조작이 완료되었다고 가정하고 안전하다고 믿고 통과</p><p>• 근본적 결함: 선박운영사의 새로운 차량갑판 안전절차가 형식적으로만 도입되었으며, 승무원 교육 및 이행이 미흡하고 현장에서 실제 작동 방식과 불일치</p><p>• 감독 및 관리 공백: 차량갑판 감독이 효과적이지 않았으며, 선박관리회사가 새로운 안전절차의 이해 및 이행 여부를 확인하지 못함</p><p>• 업계 구조적 문제: RoRo 차량갑판 운영 지침이 "운전자는 마셜러(유도자)에 의존하고 시야 상실 시 정지할 것"이라는 잘못된 가정에 기반 - 실제 관행과 괴리</p><p>• 후속 조치: MAIB는 2024년 Clipper Pennant호 유사사고 후 권고한 통합 안전 Code of Practice 개발을 강화하여 재권고</p><p>---</p><h3>Key Quotes</h3><p>• "Laureline is the latest in a series of tragic vehicle deck accidents across Europe and is a stark reminder that procedural controls alone are not sufficient to protect workers on ro-ro vehicle decks." <br>(Laureline은 유럽 전역의 일련의 비극적 차량갑판 사고 중 최신 사례이며, 절차적 통제만으로는 RoRo 선박 차량갑판 근로자를 보호하기에 충분하지 않다는 명백한 상기)</p><p>• "it was no longer tenable for the industry to continue operating in the current manner. Sadly, that remains true today" <br>(업계가 현재의 방식으로 계속 운영하는 것은 더 이상 지속 불가능하다. 슬프게도 그것은 오늘날에도 여전히 사실)</p><p>---</p><h3>Technical Insights</h3><p>• 차량갑판 안전의 다층적 실패: 절차적 통제(새로운 안전절차), 인적 인식(운전자의 위험구역 인식), 감독(효과적인 현장 감독)이 모두 실패하면서 발생 - 단순 절차 개선만으로는 불충분함을 입증</p><p>• 운영-절차 간극(Operation-Procedure Gap): 선박관리사가 정한 안전절차와 현장 작업자(육상 트레일러 운전자 포함)의 실제 작동 관행 간 심각한 괴리 - 업계 전체의 통일된 Code of Practice 필요</p><p>• 책임과 통제의 경계 모호성: 선박 승무원(마셜러)과 육상 트레일러 운전자 간 상호 인식 및 신호 체계의 부재 - IMO와 선주협회 수준의 명확한 지침 및 교육 기준화 시급</p><p>• RoRo 선박 특수성: 항만 하역 작업 특성상 선박승무원과 육상작업자(항만청소년, 계약업체)가 혼재된 작업 환경 - COLREG와 달리 명확한 국제 안전 표준 부재로 각국 해사청별 상이한 규제</p></div>`,
      tags: ["RoRo vessel","Fatal accident","Vehicle deck safety","MAIB investigation","Crushing incident","Safety procedure failure"],
      link: "https://www.marinelink.com/news/report-fatal-accident-highlights-ongoing-537464",
      coords: [0.365,51.487],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-30
addEvents({
  "2026-03-30": [
    {
      type: "news",
      title: "China building more giant Zubr-class hovercraft for amphibious operations",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-30",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/China-Zubr-Hovercraft.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 중국이 소비에트 Zubr급 대형 호버크래프트의 국산화 생산을 추진 중이며, 현재 최소 5척 이상의 Type 728(국산형)을 건조한 것으로 확인됨<br>• 중국 해군(PLAN)의 호버크래프트 함대 규모는 최소 9척으로 세계 최대 규모(러시아 2척, 그리스 4척)<br>• 각 호버크래프트는 500명의 병력 또는 주력전차 3대/경장갑차 10대와 병력 230명을 시속 55노트 이상의 속도로 수송 가능<br>• 이 장비들은 고도의 유지보수를 필요로 하지만, 침략 시나리오에서 해변 직접 상륙 능력과 해상 기뢰에 대한 내성이 장점<br>• 중국의 대규모 호버크래프트 함대 구축은 대만 침공에 대한 군사적 준비도 증가를 시사</p><h3>Key Quotes</h3><br>• "The Zubr-class hovercraft can carry 500 troops, or three main battle tanks (MBTs) or 10 lighter armoured fighting vehicles (AFVs) and 230 troops" (Zubr급 호버크래프트는 500명의 병력, 또는 3대의 주력전차나 경장갑차 10대와 병력 230명을 운송 가능)</p><p>• "Their speed, range and on-beach delivery capabilities allow troops or vital equipment to be landed more efficiently" (고속성, 항속력, 해변 직접 상륙 능력으로 병력과 장비의 효율적 상륙이 가능)</p><h3>Technical Insights</h3><br>• 호버크래프트의 높은 유지보수 수요 및 장기간 해상 체류 불가라는 구조적 한계가 있으나, 단거리 수송 및 침략전 작전에 최적화된 설계<br>• 중국의 Type 728 국산화 성공은 2014년 우크라이나에서 도입한 4척의 Project 1232.2 Zubr 분석 및 조립 노하우 축적의 결과<br>• 호버크래프트의 대형화(500톤급)는 소비에트식 군사 거대주의(Gigantism) 전략의 계승이며, 초강대국 수준의 로지스틱 자원을 필요로 함<br>• 해상 기뢰 및 특정 대침략 방어 시스템에 대한 상대적 내성으로 대만 해협 침략 전장에서 전술적 가치 상승</p></div>`,
      tags: ["China","Zubr-class hovercraft","amphibious warfare","military buildup"],
      link: "https://www.navalnews.com/naval-news/2026/03/china-building-more-giant-zubr-class-hovercraft/",
      coords: [104.0655,35.8617],
      location: "China"
    }
  ]
});

// Auto-collected: 2026-03-26
addEvents({
  "2026-03-26": [
    {
      type: "news",
      title: "U.S. Navy Unveils MUSV Family of Systems for Golden Fleet Initiative",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-26",
      image: "https://www.navalnews.com/wp-content/uploads/2025/07/Ekran-goruntusu-2025-07-20-010005.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 해군이 Golden Fleet 구상의 핵심 무인 수상함정인 MUSV(Medium Unmanned Surface Vessel) Family of Systems을 공식 발표하며 자율운항 함정의 새로운 시대 개막</p><p>• 포트폴리오 획득 담당관실(Portfolio Acquisition Executive) 주도로 MUSV 마켓플레이스를 개설하여 다수 민간 벤더의 자율운항 기술 참여 확대 추진</p><p>• MUSV는 40피트 ISO 표준 컨테이너 형식의 페이로드 2개 이상 탑재 가능하여 센서, 수리장비 등 다양한 임무 모듈 교환 가능</p><p>• 기존 MASC(Modular Attack Surface Craft) 프로토타입 사업을 확대하여 장거리 미사일 시스템 및 미사일 방어 요격체 등 복잡한 자율화 요구사항 충족</p><p>• 2026년 말까지 COLREG(해상충돌방지규칙) 준수 검증을 포함한 수상 시험 완료 목표로 단축된 시험 일정 추진 중</p><h3>Key Quotes</h3><p>• "We have as of 7am opened the MUSV marketplace to accelerate autonomous capability to the fleet" (함대의 자율운항 능력 강화를 위해 MUSV 마켓플레이스를 개방했다는 의미)</p><p>• "Inside containers you could have a sensor, repair equipment, or any number of payloads that can be swapped like a container ship" (컨테이너 내부에 센서, 수리 장비 등 다양한 페이로드를 탑재할 수 있으며 일반 컨테이너선처럼 교환 가능하다는 뜻)</p><p>• "MUSV was tailored for a specific mission in the fleet. We have a much wider requirement for these vessels as a part of the Golden Fleet" (MUSV는 함대의 특정 임무에 맞춰 설계되었으나 Golden Fleet 구상 내에서 훨씬 광범위한 운용 요구사항이 있다는 의미)</p><h3>Technical Insights</h3><p>• COLREG 준수 자율운항 검증: MUSV는 국제 해상충돌방지규칙(COLREG)에 따른 충돌 회피 기동을 자동화하여 완전 자율운항 함정의 국제법적 타당성 확보 추진</p><p>• 컨테이너화된 모듈식 무장 체계: ISO 표준 컨테이너 형식의 페이로드 교환 시스템으로 임무에 따른 신속한 무장 및 센서 재구성 가능하여 전력 운용 유연성 극대화</p><p>• 산업 생태계 확대를 통한 기술 혁신: 단일 벤더 고정 방식의 MASC에서 다중 벤더 참여 마켓플레이스로 전환하여 민간 자율운항 기술의 국방 적용 가속화</p><p>• 무인함 통합 운용 전략의 구체화: 다양한 임무 프로필에 대응하는 자율화 수준 차등 적용으로 무인함-유인함 혼합 함대(hybrid fleet) 운영의 현실화</p></div>`,
      tags: ["Autonomous Ships","U.S. Navy","MUSV","Unmanned Surface Vessels","Golden Fleet","Defense Technology"],
      link: "https://www.navalnews.com/naval-news/2026/03/u-s-navy-unveils-unmanned-centerpiece-of-golden-fleet-initiative/",
      coords: [38.8951,-77.0369],
      location: "Washington, D.C."
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-30
addEvents({
  "2026-03-30": [
    {
      type: "accident",
      title: "Kuwaiti Tanker Al-Salmi Attacked and Set Ablaze in Dubai Port",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-31",
      image: "https://images.marinelink.com/images/maritime/w800/hyperlapsepro-adobe-169350.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 쿠웨이트 국적 유조선 알-살미(Al-Salmi)호가 3월 30일 두바이 항만 정박지에서 드론 공격으로 화재 발생, 선체 손상 및 유출 위험 경고</p><p>• 쿠웨이트 석유공사(KPC)가 선박의 실소유자 및 운영사로서 즉시 손상 평가 및 대응 조치 시행, 24명의 승무원 전원 안전 확보</p><p>• 미국-이스라엘의 2월 28일 이란 공격 이후 페르시만과 호르무즈 해협에서 미사일 및 무인기에 의한 상선 공격이 계속되는 추세</p><p>• 유류 가격 급등: WTI유 배럴당 $3.00 이상(2.9%) 상승하여 $105.91달러로 급등, 에너지 시장 변동성 심화</p><p>• 그리스 소유 컨테이너선 익스프레스 로메(Express Rome)호도 동일 시간대 라스 타누라 인근 약 22해리 지점에서 2건의 포탄 사건 피해</p><h3>Key Quotes</h3><p>• "Iran attacked a fully-loaded crude oil tanker at Dubai Port's anchorage on Monday, setting it ablaze and damaging its hull" <br>(이란이 월요일 두바이 항만 정박지의 만재 상태 유조선을 공격하여 화재를 유발하고 선체에 손상을 입힘)</p><p>• "the latest in a string of assaults on merchant vessels by missiles or explosive air and sea drones in the Gulf and Strait of Hormuz"<br>(페르시만과 호르무즈 해협에서 미사일 및 폭발성 항공·해상 무인기에 의한 일련의 상선 공격 중 최신 사건)</p><p>• "No injuries have been reported, and the safety of all 24 crew members has been secured"<br>(부상자 없으며, 24명의 승무원 전원의 안전이 확보됨)</p><h3>Technical Insights</h3><p>• 해상 안보 위협 심화: 드론 및 무인기를 이용한 대함 공격은 전통적 COLREG 기반 충돌 회피 규정 외에 새로운 위협 대응 체계를 요구하며, IMO는 고위험 해역 운항 선박의 보안 강화 기준 신설 필요</p><p>• 자율운항선박의 취약성: 무인 항공/해상 체계 공격에 대응할 수 없는 자율운항선박의 도입은 고위험 지역(페르시만, 홍해 등)에서 인력 탑승 필요성을 대두시키며, 하이브리드 운영 모델 개발 급급</p><p>• 해상 교통 보험료 상승: 이란-미국 분쟁 심화로 에너지 가격 변동성이 커지면서 해상 운송 산업의 전반적 리스크 프리미엄 상향 조정으로 운송료 인상 예상</p><p>• 국제 해역 통제 약화: 분쟁 지역 항해의 자유(Freedom of Navigation) 원칙이 실질적으로 훼손되고 있으며, 민간 선박의 정찰·방어 기술 고도화와 해군 보호 선단 의존도 증가 추세</p></div>`,
      tags: ["drone attack","oil tanker","fire","hull damage","oil spill risk","Persian Gulf security"],
      link: "https://www.marinelink.com/news/kuwaiti-tanker-ablaze-dubai-port-537512",
      coords: [55.2708,25.1972],
      location: "Dubai Port, United Arab Emirates"
    },
    {
      type: "news",
      title: "Italian Navy to Acquire Bayraktar TB3 Drones for Cavour Aircraft Carrier",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-30",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/cavour-with-tb3-1024x645.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이탈리아 해군이 바이락타르 TB3 무인전투항공기(UCAV)를 도입하기로 결정하여 유럽 최초의 TB3 고객이 될 예정<br>• 베루티 베르고토 해군참모총장이 3월 25일 상원 외교방위위원회에서 공식 발표, TB3는 카부르 항공모함에서 운용될 예정<br>• 레오나르도(Leonardo) 사와 터키 드론 제조사 바이카르(Baykar)의 합작회사 LBA 시스템즈를 통해 도입 추진<br>• TB3는 접이식 날개와 강화된 착륙장치로 단거리 갑판 항공모함 운용에 최적화되어 설계됨<br>• 터키 해군의 TCG 아나돌루 항공모함에서 이미 운용 중이며, NATO 스텟패스트 다트 2026 훈련에서 ISR 및 타격 능력 입증<br>• 카부르 항공모함의 F-35B 전투기와 함께 운용되어 이탈리아 해군의 무인항공 능력 대폭 확대</p><h3>Key Quotes</h3><p>• "You know that this company has signed a cooperation agreement with Leonardo; therefore, the acquisition will be through Leonardo. It can be integrated on board the Cavour (aircraft carrier). This allows both surveillance and the possibility of carrying armament" (레오나르도와의 협력 협약으로 TB3를 카부르 항공모함에 통합할 수 있으며, 감시 및 무장 탑재 능력을 모두 갖추게 된다는 의미)</p><p>• "The TB3 has been developed specifically for operations from short take-off carriers such as Türkiye's TCG Anadolu" (TB3는 터키의 TCG 아나돌루와 같은 단거리 이착륙 항공모함에서의 운용을 위해 특별히 개발됨)</p><h3>Technical Insights</h3><p>• 무인 항공기 해상 운용 기술의 진화: TB3의 접이식 날개와 강화된 착륙장치는 항공모함의 제한된 갑판 공간에서 운용하기 위한 혁신적 설계로, 차세대 해군 무인 항공 시스템의 핵심 기술 기준을 제시함</p><p>• 유럽 해군의 자동화/무인화 전략: 이탈리아의 TB3 도입은 유럽 해군이 유인 전투기(F-35B)와 무인항공기를 통합 운용하는 하이브리드 항공전력 구성으로 이동 중임을 의미하며, NATO 해군력의 현대화 추세를 반영</p><p>• 국제 방위산업 협력 모델: 레오나르도-바이카르 합작회사(LBA Systems)를 통한 이탈리아 TB3 도입은 서방과 NATO 동맹국 간의 첨단 방위기술 협력 사례로, 항공모함 기반 UCAV의 국제적 표준화를 촉진할 가능성</p><p>• IMO/SOLAS 규정과의 관계성: 항공모함 기반 무인항공기의 확산은 해상 자동화 기술의 군사적 선행 적용 사례로, 향후 민간 해운의 자율운항선박(MASS) 규정 개발에 군사 운용 경험이 반영될 수 있음을 시사</p></div>`,
      tags: ["Unmanned Aerial Vehicles","Naval Aviation","Italian Navy","Bayraktar TB3","Aircraft Carrier","Defense Technology"],
      link: "https://www.navalnews.com/naval-news/2026/03/italian-navy-to-fly-tb3-drones-from-cavour-aircraft-carrier/",
      coords: [12.5674,41.9028],
      location: "Italy"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-31
addEvents({
  "2026-03-31": [
    {
      type: "accident",
      title: "Kuwaiti Tanker Al-Salmi Ablaze After Drone Attack in Dubai Port",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-31",
      image: "https://images.marinelink.com/images/maritime/w800/hyperlapsepro-adobe-169350.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 쿠웨이트 유조선 알-살미호가 드론 공격으로 화재 발생 - 3월 30일 두바이 항구 앵커리지에서 이란의 드론 공격으로 적재된 원유 유조선이 불에 타고 선체가 손상됨</p><p>• 유조선 정보 및 피해 현황 - 쿠웨이트 국적 알-살미호, 선원 24명 전원 안전, 선체 손상 정도 정확히 평가 중, 유류 유출 가능성 경고</p><p>• 지역 보안 악화 - 2월 28일 미국-이스라엘의 이란 공격 이후 페르시아만과 호르무즈 해협에서 미사일 및 드론에 의한 선박 피격이 계속되는 추세</p><p>• 유가 영향 - 미국 원유 선물가격이 배럴당 $3 이상(2.9%) 상승하여 $105.91에 도달</p><p>• 동시 다발 사건 - 같은 날 사우디아라비아 라스 타누라 해안 인근 그리스 컨테이너선 익스프레스 로메호도 1시간 간격으로 두 발의 발사체 피격(피해 없음)</p><p>• 책임 주체 불명 - 공식적으로 책임을 주장하는 단체 없음, 이란 관계자 즉시 코멘트 불가</p><h3>Key Quotes</h3><p>• "Iran attacked a fully-loaded crude oil tanker at Dubai Port's anchorage on Monday, setting it ablaze and damaging its hull" (이란이 월요일 두바이 항구 앵커리지의 완전 적재 상태의 원유 유조선을 공격해 화재를 일으키고 선체를 손상시켰음)</p><p>• "The apparent strike is just the latest in a string of assaults on merchant vessels by missiles or explosive air and sea drones in the Gulf and Strait of Hormuz since the U.S. and Israel attacked Iran on February 28" (이 공격은 2월 28일 미국과 이스라엘의 이란 공격 이후 페르시아만과 호르무즈 해협에서 미사일 및 드론으로 인한 일련의 상인선 피격 중 최신 사건임)</p><p>• "No injuries have been reported, and the safety of all 24 crew members has been secured" (인명 피해는 보고되지 않았으며 24명의 선원 전원의 안전이 확보됨)</p><h3>Technical Insights</h3><p>• 해사 보안 위협 확대 - 드론 및 대함 미사일 무기의 발전으로 국제 해로의 상선 운항 위험도 급증, IMO 보안 규정(ISPS Code) 강화 필요성 증대</p><p>• 선박 설계 및 방어 기술 - 유조선의 내구성 및 손상 제어 시스템의 중요성 대두, 드론 공격에 대한 조기 경보 및 회피 기술 개발 시급</p><p>• 자율운항선과 인명 보호 - 무인 선박 운항 시 이러한 분쟁 지역에서의 인명 손상 회피 가능성이 있으나, 군사 공격에 대한 자율 회피 시스템의 국제법 규범화 필요</p><p>• 국제 해상 교역 경로 재편 - 페르시아만-호르무즈 해협 경로의 위험 증가로 인한 대체 해로(아프리카 우회) 선택 증가, 선박 운송비 및 보험료 상승 예상</p></div>`,
      tags: ["drone attack","oil tanker","fire","Dubai Port","hull damage","oil spill risk"],
      link: "https://www.marinelink.com/news/kuwaiti-tanker-ablaze-dubai-port-537512",
      coords: [55.2708,25.1972],
      location: "Dubai Port, UAE"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-31
addEvents({
  "2026-03-31": [
    {
      type: "accident",
      title: "Drone Strike Hits Laden Supertanker Off Dubai; Fire Contained, No Injuries",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-31",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-30T233144Z_1740192935_RC2CDKAR7ZRB_RTRMADP_3_USA-AIRPORT-TRUMP.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 사건 개요: 쿠웨이트 국적의 VLCC급 초대형유조선(Al Salmi)이 두바이 인근 해상에서 드론 공격을 받아 화재 발생, 즉시 진화되고 오염 없음 (선원 24명 전원 안전)</p><p>• 선박 및 화물: Al Salmi호는 사우디 원유 120만 배럴, 쿠웨이트 원유 80만 배럴 적재, 목적지 중국 칭다오</p><p>• 사건 지점: 두바이로부터 북서쪽 31해리 떨어진 정박지 "E" 해역 (UKMTO 보고)</p><p>• 관련 갈등 배경: 미국-이스라엘-이란 갈등 확대로 최근 9일 만에 첫 공격 사건 (3월 22일 이후 사건 없음)</p><p>• 지역 안보 악화: 2월 말 이후 페르시아만/호르무즈 해협 지역에서 24건 사건 기록 (확인 공격 16건, 의심 활동 8건)</p><p>• 정치적 협상 신호: 트럼프 대통령이 이란과의 "진지한 협상" 진행 중이나, 호르무즈 해협 재개 미합의 시 이란 에너지 기반시설 공격 위협</p><p>---</p><h3>Key Quotes</h3><p>• "The vessel has been identified by ship-tracking analysts at TankerTrackers as the Kuwaiti-flagged VLCC Al Salmi, laden with approximately 1.2 million barrels of Saudi crude and 800,000 barrels of Kuwaiti crude."<br>(선박 추적 분석가들이 쿠웨이트 국적의 VLCC급 Al Salmi호를 확인했으며, 사우디 원유 120만 배럴과 쿠웨이트 원유 80만 배럴을 적재하고 있었음)</p><p>• "The incidents mark the first confirmed incident in the region since March 22, according to UKMTO data, suggesting a renewed escalation after a brief lull in maritime attacks"<br>(UKMTO 데이터에 따르면 이는 3월 22일 이후 처음 확인된 사건으로, 해양 공격의 일시적 소강 후 재확대를 시사함)</p><p>• "if a deal is not reached 'shortly' and the Strait of Hormuz is not immediately reopened to commercial shipping, the U.S. could target Iran's critical infrastructure"<br>(협상 진전이 없고 호르무즈 해협이 재개되지 않으면 미국은 이란의 핵심 에너지 기반시설 공격 가능)</p><p>---</p><h3>Technical Insights</h3><p>• 해상 보안 위험 고조: 드론 공격의 정확도 및 신속한 반응 능력이 증명되었으며, 페르시아만 및 호르무즈 해협의 전체 유조선 운항 위험도 재평가 필요</p><p>• 전쟁 위험료(War Risk Premium) 상승: 초대형 유조선의 에너지 수송로 손실 가능성 증가로 운임료 및 보험료 급등 예상, 유럽-아시아 간 원유 수급 가격 변동성 심화</p><p>• VLCC 항로 재편: 두바이 정박지 내 공격 가능성 증명으로 인해 선박들이 호르무즈 해협 우회 항로(Red Sea-Suez-Mediterranean) 선택 증가 가능성</p><p>• IMO 해역 안보 규정 강화: 고위험 해역 운항 시 군사 호위, 실시간 군함 감시, 드론 탐지 시스템 의무화 등 신규 COLREG 제정 논의 필요</p></div>`,
      tags: ["Drone Strike","Supertanker","Persian Gulf","Maritime Security","VLCC Al Salmi"],
      link: "https://gcaptain.com/drone-strike-hits-laden-supertanker-off-dubai-as-gulf-shipping-incidents-flare-again/",
      coords: [54.37,25.28],
      location: "Off Dubai, United Arab Emirates"
    },
    {
      type: "news",
      title: "Magnet Defense Begins Production of First M48 Unmanned Surface Vessel",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-31",
      image: "https://images.marinelink.com/images/maritime/w800/source-magnet-169405.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Magnet Defense가 M48 무인 표면 함정(USV)의 양산을 시작하여 프로토타입 단계에서 생산 플랫폼으로의 전환을 완료</p><p>• M48은 17,000해리의 항속력으로 샌디에이고에서 아라비아만까지 무보급 자율 항해 가능한 중형 전투용 자율운항선박</p><p>• 프로토타입 함정이 2020년 이후 1,000일 이상 항해하며 40,000해리 이상 극한 기후에서 검증된 실증 기술 기반</p><p>• 통합 방공 미사일 방어, 장거리 타격 체인, 분쟁 지역 물류, 대함/대잠 전투, 전자전, 수색구조 등 다양한 작전 지원 가능</p><p>• 2027년 2분기에 첫 인도 예정이며, 자체 개발한 DriveAI 항법 자율화 시스템 탑재</p><h3>Key Quotes</h3><p>• "The M48 is not a conceptual system. It is a proven capability that has operated in the real world, in real conditions" (M48은 개념적 시스템이 아니라 실제 환경에서 검증된 운영 능력)</p><p>• "Beginning production means warfighters and mission partners can soon access that capability" (양산 시작은 전투 요원과 임무 파트너들이 곧 이 능력에 접근할 수 있음을 의미)</p><h3>Technical Insights</h3><p>• 자율운항 기술 상용화: DriveAI 항법 자율화 시스템 탑재로 완전 자동 운항 및 자율 배치 가능한 무인 전투함이 현실화되는 중</p><p>• 장거리 무인 작전의 가능성: 17,000해리 항속력과 무보급 장거리 운항 능력은 기존 유인함정의 전술 개념을 근본적으로 변화시킬 수 있는 기술적 이정표</p><p>• IMO 자율선박 규제와의 정합성: 군사용 무인함이지만 민간 자율선박 규제 프레임워크와의 기술 수렴 추세를 반영하며, 향후 COLREG 적용 등 국제 해사 규범의 확장이 필요할 전망</p><p>• 해군 작전 혁신: 다중 임무(방공, 반함, 대잠, 전자전 등) 지원 능력은 자율무인선박이 단순 보조 역할에서 핵심 전력화로 전환되는 산업 전환점을 의미</p></div>`,
      tags: ["Autonomous Surface Vessel","USV","Military Maritime","Unmanned Systems","Naval Technology"],
      link: "https://www.marinelink.com/news/magnet-defense-begins-production-first-m-537557",
      coords: [-117.1611,32.7157],
      location: "San Diego, California"
    },
    {
      type: "news",
      title: "UK Royal Navy Awards Teledyne Contract for Autonomous Underwater Gliders",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-31",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/UK-Royal-Navy-Awards-Teledyne-Contract-for-Underwater-Gliders-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 국방부가 Teledyne과 미래 해양 데이터 수집(FMDG) 프로그램 계약 체결 - Sentinel 및 Slocum 글라이더, APEX 부이 등 자율 해양 관측 시스템 공급</p><p>• Teledyne은 2015년 이래 영국 해군의 해양과학 및 환경 모니터링을 지원해온 기존 파트너로서 시스템 호환성, 보안 준수 및 임무 준비 상태 보장</p><p>• 자율 무인 시스템을 통해 복잡한 원격 해양 환경에서 장시간 데이터 수집 가능 - 작전 계획, 해양 안전, 방위 활동 지원</p><p>• 대서양 요새(Atlantic Bastion) 전략 및 해군 하이브리드 해군 의제 지원으로 경쟁이 심화되는 북대서양 환경에서 수중 전장 이해도 향상</p><p>• 정보전 기상해양(IW METOC) 운영자에게 실시간 데이터 제공으로 전술적 환경 활용 및 작전 우위 확보</p><h3>Key Quotes</h3><p>• "Teledyne remains the only supplier able to guarantee seamless interoperability, security compliance, and mission readiness into the Current RN Glider Fleet." (테레딘이 현재 영국 해군 글라이더 함대와의 완벽한 상호운용성, 보안 준수, 임무 준비 상태를 보장할 수 있는 유일한 공급자라는 의미)</p><p>• "This investment in autonomous ocean sensing strengthens the Royal Navy's ability to understand and operate in an increasingly contested North Atlantic, supporting Atlantic Bastion." (자율 해양 센싱에 대한 투자는 경쟁이 심화되는 북대서양에서의 이해 및 작전 능력을 강화하고 대서양 요새 전략을 지원한다는 뜻)</p><h3>Technical Insights</h3><p>• 무인 해양 관측 시스템의 장시간 운영으로 METOC(기상해양) 데이터의 실시간 수집 가능 - NATO 해군 작전의 상황 인식 능력 향상</p><p>• 자율 글라이더의 해양 환경 데이터 활용으로 수중 전장 인식(Underwater Battlespace Awareness) 실현 - 음향 신호 추적, 해상도 변화 모니터링 등 전술적 이점 제공</p><p>• 기존 Slocum 글라이더 운영 경험(2015년부터)을 바탕으로 NATO 해군 간 상호운용성 강화 및 정보 우위 확보 기대</p><p>• 자율 수중 시스템의 확대로 유인 함정의 직접 투입 위험 감소 및 장시간 정보수집으로 하이브리드 해군 전력 강화</p></div>`,
      tags: ["autonomous underwater vehicles","UK Royal Navy","ocean observing systems","unmanned systems"],
      link: "https://www.navalnews.com/naval-news/2026/03/uk-royal-navy-awards-teledyne-contract-for-underwater-gliders/",
      coords: [0,0],
      location: "Global (North Atlantic focus)"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal accident to crew member on ro-ro cargo vessel Laureline - MAIB Investigation Report",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사고 개요: 2024년 7월 13일 몰타 등록 자동차운반선 Laureline호에서 선박 구조물과 이동 중인 트레일러 사이에 어선원이 끼여 사망함</p><p>• 피해자 행동: 사고 피해자가 트레일러가 조작을 완료했다고 가정하여 안전하다고 생각하고 트레일러 뒤를 지나감</p><p>• 직접 원인: 예인 운전자가 선원의 위치를 인식하지 못한 채 트레일러를 재정렬하기 위해 역방향으로 이동시켜 선원을 구조물에 압살</p><p>• 안전 절차 문제: 선박 운영사가 신규 갑판 안전 절차를 수립했으나 교육 및 이행의 미흡으로 갑판 작업 선원들이 절차를 제대로 이해하지 못함</p><p>• 감시 및 관리 부실: 갑판 내 감시 체계가 비효과적이었으며, 선박 관리회사가 새로운 안전 절차가 실제로 이행되었는지 확인하지 못함</p><p>• 업계 기준 문제: 자동차운반선 갑판 작업 관련 업계 지침이 운전자가 마샬러(지시원)의 지시에 따라 정지한다는 오류된 가정에 기반함</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." (사망한 선원이 트레일러의 조작이 완료되었다고 생각하여 안전하다고 가정하고 뒤를 지나감)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." (예인 운전자가 선원의 위치를 모른 채 정렬 목적으로 트레일러를 역방향 이동시켜 선원을 압살)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller." (업계 지침이 운전자가 마샬러에 의존하여 안전하게 정위치하고 마샬러를 시야에서 잃으면 정지한다는 잘못된 가정에 의존)</p><h3>Technical Insights</h3><p>• 선원 안전 문화 결여: 선박 관리사가 신규 안전 절차를 수립했으나 실제 갑판 작업 인원의 이해도와 실행도가 차이나, 조직문화 개선 필요</p><p>• 운전자-마샬러 간 커뮤니케이션 부재: 현재 업계 기준이 운전자의 능동적 안전 책임을 간과하고 마샬러 의존도에만 집중하는 문제점 노출</p><p>• 감시 및 통제 강화 필요: 자동차운반선의 갑판 작업 중 맹목 지역(blind zone) 관리와 중기계 작동 시 실시간 감시 체계 구축 필수</p><p>• 산업 코드 오브 프랙티스 개발 필요: MAIB가 유사 사고(Clipper Pennant호)와 함께 UK 해운상의회(UK Chamber of Shipping)와 항만안전교육기관(Port Skills and Safety Limited)에 자동차운반선 갑판 안전 통합 코드 개발 권고</p></div>`,
      tags: ["Fatal Accident","Roll-on/Roll-off Vessel","Workplace Safety","Vehicle Deck Operations","Crushing Incident"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.3,51.5],
      location: "Purfleet, England"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-31
addEvents({
  "2026-03-31": [
    {
      type: "accident",
      title: "Drone Strike Hits Laden Supertanker Al Salmi Off Dubai, Fire Contained",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-31",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-30T233144Z_1740192935_RC2CDKAR7ZRB_RTRMADP_3_USA-AIRPORT-TRUMP.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 드론 공격 사건: 쿠웨이트 국적 VLCC 알살미호가 두바이 앞바다에서 정체불명의 드론 공격으로 인한 화재 발생<br>• 선박 및 적재 현황: 약 200만 배럴(사우디유 120만, 쿠웨이트유 80만 배럴) 적재 중이었으나 전원 안전하고 유출 없음<br>• 대응 및 결과: 두바이 해양 소방대가 통제하에 불을 진화했으며 환경 오염 없이 안전 처리됨<br>• 지역 정세: 3월 22일 이후 처음의 확인된 공격으로, 미국-이스라엘-이란 분쟁의 지속적 해상 위협을 반영<br>• 정치적 배경: 트럼프 대통령이 이란과의 협상 진행을 언급하면서도 호르무즈 해협 개방 미이행 시 핵심 에너지 시설 타격 위협<br>• 누적 피해: 2월 말 이후 걸프 지역 24건의 사건 기록(확인된 공격 16건, 의심 활동 8건)</p><h3>Key Quotes</h3><p>• "A Kuwaiti supertanker carrying more than 2 million barrels of crude was struck by a drone in waters off Dubai late Monday, triggering a fire that was later brought under control without injuries or pollution" (두바이 앞바다에서 200만 배럴의 유조선이 드론 공격을 받아 화재가 발생했지만 인명피해와 유출 없이 통제됨)</p><p>• "The vessel has been identified by ship-tracking analysts at TankerTrackers as the Kuwaiti-flagged VLCC Al Salmi, laden with approximately 1.2 million barrels of Saudi crude and 800,000 barrels of Kuwaiti crude" (선박은 쿠웨이트 국적의 알살미호로 확인되었으며 약 200만 배럴의 원유를 운송 중)</p><p>• "if a deal is not reached 'shortly' and the Strait of Hormuz is not immediately reopened to commercial shipping, the U.S. could target Iran's critical infrastructure—including electric power plants, oil fields, Kharg Island export facilities" (호르무즈 해협이 상업 운송에 즉시 개방되지 않으면 미국이 이란의 핵심 에너지 인프라를 공격할 수 있음)</p><h3>Technical Insights</h3><p>• 해상 안전 위협: 호르무즈 해협뿐 아니라 두바이 앞바다와 같은 공식 정박지역까지 드론 공격 범위가 확대되어 글로벌 에너지 운송 경로의 광범위한 취약성 노출<br>• IMO 규정 적용의 한계: 무장 드론 공격은 기존 COLREG 및 해상 충돌 회피 규칙으로 대응 불가능한 새로운 위협으로, 국제해사기구의 규정 개정 필요<br>• 전쟁 위험 보험료 상승: 페르시아만 유조선 운송의 지속적 위험 증가로 인한 전쟁 위험 보험료(War Risk Premium) 급증으로 에너지 수송 경제성 악화<br>• 자율운항선박의 한계: 현 상황의 무장 드론 위협 환경에서는 자율운항선박의 도입보다 유인 선박 승무원의 실시간 상황 대응 능력이 더 중요한 생존 요소로 작용</p></div>`,
      tags: ["Drone Attack","Supertanker","Persian Gulf","Maritime Security","Fire Incident"],
      link: "https://gcaptain.com/drone-strike-hits-laden-supertanker-off-dubai-as-gulf-shipping-incidents-flare-again/",
      coords: [54.3773,25.2048],
      location: "Dubai Anchorage, United Arab Emirates"
    },
    {
      type: "news",
      title: "UK Royal Navy Awards Teledyne Contract for Underwater Gliders and Ocean Observing Systems",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-31",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/UK-Royal-Navy-Awards-Teledyne-Contract-for-Underwater-Gliders-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 국방부(MOD)가 Teledyne社와 미래 해양 데이터 수집(FMDG) 프로그램을 위한 계약을 체결하였으며, Sentinel 및 Slocum 글라이더와 APEX 플로트 등 자율 해양 관측 시스템을 공급받기로 결정함</p><p>• Teledyne Marine은 2015년부터 영국 해군의 해양음향 및 환경 모니터링을 지원해온 유일한 공급업체로서, 현재 함대와의 원활한 상호운용성 및 보안 준수 능력을 갖추고 있음</p><p>• 이 계약을 통해 영국 해군은 복잡하고 원격 해양 환경에서 고품질의 해양 데이터를 장시간 수집할 수 있으며, 작전 계획 및 해양 안보 활동을 강화할 수 있음</p><p>• 이 시스템은 Atlantic Bastion 전략 지원과 북대서양의 분쟁 상황에서의 수중 전장 이해 및 전술적 환경 활용을 가능하게 함</p><p>• 영국 해군의 하이브리드 해군 전략 및 정보전 기상해양(IW METOC) 작전과 직접 연계되어 지휘관에게 작전상 이점을 제공함</p><h3>Key Quotes</h3><p>• "Teledyne remains the only supplier able to guarantee seamless interoperability, security compliance, and mission readiness into the Current RN Glider Fleet." (현재 영국 해군 글라이더 함대와의 완벽한 상호운용성, 보안 준수, 그리고 작전 준비 태세를 보장할 수 있는 유일한 공급업체)</p><p>• "This investment in autonomous ocean sensing strengthens the Royal Navy's ability to understand and operate in an increasingly contested North Atlantic, supporting Atlantic Bastion." (자율 해양 감지 기술 투자는 영국 해군이 점점 더 경쟁 심화되는 북대서양에서 해양 상황을 이해하고 작전하는 능력을 강화하며 Atlantic Bastion 전략을 지원함)</p><h3>Technical Insights</h3><p>• 자율 수중 글라이더의 운용 확대: Slocum 글라이더와 APEX 플로트 등 자율 시스템의 장시간 운영(long-endurance) 능력은 NATO 해역에서의 지속적 해양 감시 및 환경 정보 수집을 가능하게 함</p><p>• 해양 데이터의 전술적 활용: 실시간 해양 데이터는 수중 전장 이해(Underwater Battlespace understanding)와 전술적 환경 활용(Tactical Exploitation of the Environment)을 통해 해군 지휘관에게 작전상 이점 제공</p><p>• NATO 해역 방어 강화: Atlantic Bastion 전략의 일환으로 북대서양의 증가된 안보 위협에 대응하기 위한 첨단 자율 기술의 체계적 도입은 NATO 연합 해상 작전 능력 향상을 의미함</p><p>• 혼종 해군 전략 구현: 영국 해군의 하이브리드 해군 의제(Hybrid Navy agenda) 하에서 자율 시스템과 정보전 기상해양(IW METOC) 운영 통합은 차세대 해군 운영 개념의 실현을 의미함</p></div>`,
      tags: ["Autonomous Systems","Royal Navy","Oceanographic Data","Underwater Gliders","Defence Technology"],
      link: "https://www.navalnews.com/naval-news/2026/03/uk-royal-navy-awards-teledyne-contract-for-underwater-gliders/",
      coords: [0,0],
      location: "North Atlantic/NATO"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal Accident on Roll-on/Roll-off Cargo Vessel Laureline - Crew Member Crushed",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사고 개요: 2024년 7월 13일 몰타 등록 자동차 운반선(ro-ro vessel) Laureline호에서 승무원 1명이 트레일러와 선박 구조물 사이에 압축되어 치명상을 입음</p><p>• 사고 경위: 승무원이 기동을 완료한 것으로 판단하고 트레일러 뒤를 지나갔으나, 투그 운전자가 승무원의 위치를 인지하지 못한 채 트레일러를 재정렬하면서 충돌</p><p>• 근본 원인: 선박 운영사의 신규 차량갑판 안전절차 도입 후 교육 및 이행 미흡, 투그 운전자의 위험구역 인식 부족 및 시야 외 승무원 발견 시 정지 요구사항 미이행</p><p>• 감독 결함: 차량갑판 감독의 비효율성과 선박 관리회사의 새로운 안전절차 이행 확인 체계 부재</p><p>• 산업 문제: ro-ro 차량갑판 운영 지침이 운전자가 마샬러에 의존하여 정지할 것이라는 오류에 기반하여 수립됨</p><p>• 후속 조치: MAIB는 유사 사고(Clipper Pennant, 2024)와의 연관성을 인식하고 영국 해운회의소 및 항만안전기술센터에 ro-ro 선박 차량갑판 안전 산업 행동강령 개발 권고</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." <br>(사망한 승무원은 트레일러가 기동을 완료했다고 가정하고 뒤를 지나갔음)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." <br>(투그 운전자는 승무원의 위치를 인지하지 못하고 트레일러를 역행하여 재정렬하면서 승무원을 선박 구조물에 압축시킴)</p><p>• "The vessel operators had instigated a new procedure for vehicle deck safety. However, there were weaknesses in its training and implementation, and it was not well understood by the crew working on the vehicle deck." <br>(선박 운영사가 신규 안전절차를 시행했지만, 교육 및 이행에 약점이 있었고 차량갑판 작업 승무원들이 제대로 이해하지 못함)</p><h3>Technical Insights</h3><p>• 시야 확보 및 통신 프로토콜 강화: ro-ro 선박의 트레일러 기동 시 투그 운전자와 마샬러/갑판 감독 간 명확한 시각적 신호 및 음성 통신 체계 구축 필요. COLREG 규정 외 선박 내 차량갑판 운영 표준화 필수</p><p>• 안전 문화 및 교육 체계: 신규 안전절차 도입 시 선박 및 육상 운영자(투그 운전자)에 대한 통합 교육 프로그램 필수. 형식적 교육이 아닌 실제 작업 환경에서의 이해도 확인 체계 필요</p><p>• IMO 규제 및 산업 표준 정합성: IMO SOLAS 및 ISM Code 기준 하에서 ro-ro 차량갑판 안전에 대한 국제 표준 강화 필요. 각국 항만당국과 선박 관리사 간 일관된 안전 지침 개발 권고</p><p>• 기술적 보완: 자동화/AI 기반 트레일러 위치 추적, 근접 감지 시스템(proximity detection) 등 첨단 기술 도입으로 인적 오류 감소 필요. 또한 원격 운전자 감시 카메라 및 음성 경보 시스템 강화</p></div>`,
      tags: ["Fatal Accident","Ro-ro Vessel","Vehicle Deck Safety","Crushing Incident","Crew Fatality"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.48,51.48],
      location: "Purfleet, England"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-01
addEvents({
  "2026-04-01": [
    {
      type: "accident",
      title: "Libya Abandons Arctic Metagaz LNG Tanker Salvage Near Malta SAR Zone",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-01",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/image-13.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 러시아 연계 LNG 탱커 Arctic Metagaz가 3월 3일 폭발과 화재로 손상된 후 리비아 당국이 구조 작업을 중단하고 선박을 몰타 해상구조구역(SAR) 경계 근처 105해리 거리에 버려두었음</p><p>• 선박 및 기관: Russian-linked LNG tanker Arctic Metagaz, 리비아 해안경비청(General Administration for Coast Security) 및 국가석유공사(National Oil Corporation)가 주도한 작업</p><p>• 현재 상황: 선박이 유의미한 리스트 상태로 심각한 손상을 입고 있으며, 견인선과 지원 선박들이 철수하여 국제해역에서 무관리 상태로 표류 중</p><p>• 환경 위험: 악화된 지중해 날씨 조건으로 인해 선박 침몰 위험이 높으며, 북동쪽 바람이 선박을 몰타 관할 해역으로 더 밀어낼 가능성이 있음</p><p>• 구조적 손상: 일주일간의 견인 작업이 구조적 손상을 악화시켜 추가 선실로의 해수 유입을 초래했을 가능성이 높음</p><p>• 책임 이전: 리비아의 사건 대응으로 인한 리스크 감소가 이루어졌지만, 최종 구조 책임 및 환경 재해 방지에 대한 국제적 문제는 여전히 미해결 상태</p><h3>Key Quotes</h3><p>• "The relocation raises questions about whether Libya has abandoned salvage efforts altogether." (리비아가 구조 작업을 완전히 포기했는지에 대한 의문을 제기함)</p><p>• "Moving the vessel more than 100 nautical miles offshore and back in the direction where the incident began Libyan authorities reduced the immediate risk to their coastline, but the larger issue of who will ultimately salvage the vessel remains." (100해리 이상 해상으로 선박을 이동시킴으로써 리비아 해안의 직접적 위험을 줄였지만, 궁극적으로 누가 선박을 구조할 것인지에 대한 더 큰 문제가 남아있음)</p><p>• "Weather conditions in the central Mediterranean are expected to deteriorate in the coming days, raising the risk that the heavily damaged vessel could sink." (지중해 중앙부의 날씨 악화로 심각하게 손상된 선박의 침몰 위험이 증가함)</p><h3>Technical Insights</h3><p>• 국제 해상구조 협정의 문제점: 선박이 국가 관할 영역과 국제해역, 그리고 다른 국가의 SAR 지역 경계에 위치함으로써 SOLAS 협약상 구조 책임이 불명확해지는 문제가 발생하고 있음</p><p>• 환경 재해 예방의 한계: LNG 탱커의 경우 MARPOL 협약 등으로 환경 보호 의무가 있음에도 불구하고, 러시아 "섀도우 플릿"에 대한 제재와 국제적 갈등으로 인해 효과적인 구조 작업이 지연되는 산업적 문제를 드러냄</p><p>• 선박 구조 및 안정성 관리: 일주일간의 부적절한 견인 작업이 선박의 구조적 무결성을 악화시킨 사례로, 해양 사고 대응에서 전문적 해양 구조 기술과 장비의 중요성을 강조함</p><p>• 지정학적 요인의 해사 운영 영향: 러시아 제재 대상 선박에 대한 국제적 정치적 입장 차이가 실질적인 해양 환경 재해 방지 노력을 지연시키는 구조적 문제를 야기하고 있음</p></div>`,
      tags: ["LNG Tanker","Salvage Operation","Maritime Accident","Environmental Risk","Russia Shadow Fleet"],
      link: "https://gcaptain.com/libya-abandons-arctic-metagaz-salvage-at-edge-of-malta-sar-zone/",
      coords: [19.5,33.2],
      location: "Central Mediterranean, north of Misrata, Libya"
    },
    {
      type: "news",
      title: "Gander Robotics Secures $1.1M Pre-Seed Funding for Autonomous Maritime Rescue Systems",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-01",
      image: "https://images.marinelink.com/images/maritime/w800/source-social-169436.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 해양 자율 구조 로봇 개발 전문업체 Gander Robotics가 Impellent Ventures와 Underscore VC의 공동 주도로 110만 달러 규모의 시드 펀딩을 확보했으며, MIT Sloan 출신 창업자들의 해양 구조 기술 혁신을 목표로 함</p><p>• 창업자 Michael Autery(해군 출신 해양 엔지니어, 15년 경력)와 Co-Founder Lael Ayala(하버드 로봇공학 박사)로 구성되었으며, MIT 100K Pitch Competition 우승팀</p><p>• 핵심 제품인 Autonomous Rescue Swimmer(ARS)는 AI 기반 소나를 활용하여 저시정/악천후에서도 피해자 위치를 파악하고, 자동 팽창식 부유 장치, 고가시성 신호탄, RF 추적기를 일괄 제공</p><p>• 현재 해군 인원 해상 추락 생존율 28%, 크루즈선 산업 17%로 인명 피해 심각 → ARS 기술로 구조 반응 시간을 획기적으로 단축 가능</p><p>• 미국 해안경비대와 해군으로부터 강력한 수요 반응 확인으로 시장 타당성 입증</p><p>• 향후 구조 임무뿐만 아니라 비살상 국방 분야(군사 물류, 안전 등) 전반으로의 확대 계획</p><h3>Key Quotes</h3><p>• "Michael Autery is exactly the kind of founder we look for - a rare combination of deep domain expertise, mission-driven conviction, and the intellectual horsepower to build something that truly matters." (마이클 오터리는 깊은 도메인 전문성, 미션 중심적 신념, 중요한 것을 구축할 수 있는 지적 능력을 갖춘 희귀한 창업자이다 - Impellent Ventures의 필 보레가드)</p><p>• "We see Gander Robotics as a platform for maritime autonomy that starts with rescue but extends to the entire 'non-kinetic' defense space." (Gander Robotics를 구조에서 시작하여 전체 비살상 국방 영역으로 확대되는 해양 자율성 플랫폼으로 본다 - Underscore VC의 릴리 라이먼)</p><p>• "In the U.S. Navy, the survival rate for personnel who fall overboard is just 28 percent. In the cruise line industry, it drops to 17 percent." (미해군 추락 인원의 생존율은 28%, 크루즈선 산업은 17%에 불과하다)</p><h3>Technical Insights</h3><p>• AI 기반 소나 기술의 해상 구조 혁신: 저시정, 악천후, 야간 상황에서도 피해자를 정확히 탐지 가능한 AI 소나 알고리즘은 기존 시각 탐색 및 인력 반응에 의존하는 해상 구조의 패러다임 전환을 의미하며, 국제해사기구(IMO) 해양 안전 기준 강화와 맞물려 산업 표준화 기대</p><p>• 자율 로봇의 인명 구조 분야 적용 확대: ARS 기술은 선박의 Man-Overboard(MOB) 사고 대응 자동화의 첫 사례로, COLREG(해상충돌방지규칙) 및 국제해상인명안전협약(SOLAS) 준수 체계와 연계된 차세대 해상 안전 표준 개발 추진 필수</p><p>• 국방 및 민간 이중 용도(Dual-Use) 기술의 시장 창출: 해군, 해안경비대, 크루즈선사 등 다층 고객군 보유로 해양 자율로봇 산업의 급속 성장 및 관련 스타트업 투자 확대 유도 예상</p><p>• 구조 시간 단축을 통한 해양 인명 피해 감소: 저체온증(Hypothermia) 발생 시간(약 15-45분)보다 빠른 자동 구조 시스템 배치로 국제 해양 안전 통계 개선과 규제 당국의 의무 장착 요구 가능성 증가</p></div>`,
      tags: ["autonomous robotics","maritime safety","search and rescue","AI navigation","defense technology"],
      link: "https://www.marinelink.com/news/gander-robotics-gains-preseed-funding-537603",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "AeroVironment Selected to Deliver ISR Services to U.S. Navy with JUMP 20-X Autonomous UAS",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-01",
      image: "https://www.navalnews.com/wp-content/uploads/2025/02/JUMP-20-X-VTOL-UAS-at-IDEX-2025.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• AeroVironment(AV)가 미 해군의 ISR(정보·감시·정찰) 작전 현대화를 지원하기 위해 JUMP 20-X 자율무인항공기(UAS) 시스템 제공 계약 체결<br>• JUMP 20-X는 완전 자율 운영, 13시간 이상의 비행 시간, 185km 범위, 30파운드 페이로드 용량을 갖춘 수직이착륙(VTOL) 무인기<br>• 70가지 이상의 페이로드 통합으로 육상·해양 다중 도메인 임무 수행 가능하며, 발사·회수 장비 불필요로 신속 배치 용이<br>• 미 해군 남부사령부, 해병대 제22원정대, 한국 해군 등에 이미 입증된 기술의 배치 실적<br>• 자율 운영 능력과 멀티센서 통합으로 전술적 상황 인식 극대화 및 작전 효율성 증대</p><h3>Key Quotes</h3><br>• "We are honored to be selected as a partner to help the U.S. Navy expand its ISR services and enhance mission-critical awareness for warfighters around the globe" <br>  (미 해군의 ISR 서비스 확대 및 전 지구적 작전 병력의 임무 중요 상황 인식 강화에 협력하게 되어 영광스럽다)</p><p>• "Our technology is deployed, proven, and mature. Our team is ready to deliver. We are reshaping our nation's ISR capabilities."<br>  (당사의 기술은 배치되었고, 입증되었으며, 성숙한 수준이다. 팀은 제공 준비가 완료되었다. 우리는 국가의 ISR 역량을 재편하고 있다)</p><h3>Technical Insights</h3><br>• 완전 자율화된 VTOL UAS의 해군 배치는 전술 ISR 운영의 획기적 변화를 의미하며, 수동 조종 필요성 제거로 승무원 운영 부담 대폭 감소<br>• 멀티센서 통합 및 높은 페이로드 확장성(70가지)은 향후 AI 기반 데이터 처리 및 실시간 해양 감시 임무로의 확대 가능성 시사<br>• 복잡한 발사·회수 장비 배제로 함정 및 전진 배치 기지의 공간 효율성 향상, 해군 전술 유연성 강화의 실질적 이점 제공</p></div>`,
      tags: ["autonomous systems","ISR","UAS","U.S. Navy","VTOL","defense technology"],
      link: "https://www.navalnews.com/naval-news/2026/04/av-to-deliver-isr-services-to-u-s-navy-with-jump-20-x/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2024-07-13
addEvents({
  "2024-07-13": [
    {
      type: "accident",
      title: "Fatal accident to crew member on ro-ro cargo vessel Laureline",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-26",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 사망 사고 개요: 2024년 7월 13일 말타 등록 자동차 운반선 Laureline에서 화물 예인선에 의해 선원이 압사되어 사망한 중대 산업안전 사고 발생</p><p>• 사고 원인: 선원이 예인선 움직임이 완료되었다고 가정하고 예인선 뒤로 통과했으나, 예인선 운전자는 선원의 위치를 인식하지 못하고 정렬을 위해 역진하면서 선원을 선박 구조물에 압사</p><p>• 선사 절차의 문제점: 선박 운영사가 신규 차량 갑판 안전 절차를 도입했으나 교육 및 이행 과정에서 중대한 결함이 있었고, 갑판 작업 선원들이 절차를 충분히 이해하지 못함</p><p>• 예인선 운전자 문제: 위험 구역에 대한 운전자의 인식 부족과 선원 미시인 시 정지해야 한다는 요구사항이 실제 작업 관행과 불일치</p><p>• 감시 및 관리 부실: 갑판 감독이 비효과적이었으며, 선박 관리사가 신규 안전 절차의 이해 및 완전한 이행을 확인하기 위한 효과적 보증 조치를 제공하지 못함</p><p>• 산업 지침의 한계: 자동차 갑판 운영에 관한 현행 업계 지침이 운전자가 마샬러(안내요원)에 의존하여 안전하게 정위치하고 시야 상실 시 정지한다는 잘못된 가정에 과도하게 의존</p><h3>Key Quotes</h3><p>• "The deceased crew member passed behind the trailer probably assuming that it was safe to do so because it had completed manoeuvring." (사망한 선원은 예인선이 기동을 완료했다고 가정하고 예인선 뒤로 통과했을 것으로 추정됨)</p><p>• "The tug driver was unaware of the crew member's position and reversed the trailer to realign it, crushing the crew member against the vessel's structure." (예인선 운전자는 선원의 위치를 인식하지 못하고 정렬을 위해 예인선을 역진하여 선원을 선박 구조물에 압사함)</p><p>• "Industry guidance on ro-ro vehicle deck operations relied heavily on the misconception that the drivers depend on marshallers to safely position their trailers and will stop their vehicle if they lose sight of their marshaller." (자동차 운반선 갑판 운영 관련 업계 지침이 운전자가 마샬러에 의존하여 안전하게 정위치하고 시야 상실 시 정지한다는 잘못된 개념에 과도하게 의존)</p><h3>Technical Insights</h3><p>• 자동차 운반선 갑판 안전 절차의 구조적 문제: 현재 업계 관행이 운전자-마샬러 간 상호 의존성에 기반하고 있으나, 실제 운영에서는 이러한 가정이 제대로 작동하지 않으며, 명확한 위험 구역 설정과 강제적 정지 메커니즘이 필요함</p><p>• 선박 안전 관리시스템의 이행 격차: 선사가 신규 안전 절차를 도입했음에도 불구하고 교육, 훈련, 감시 메커니즘의 부족으로 실제 갑판 작업에 적용되지 못하는 현상 발생 - 경영 시스템과 현장 실행 간의 괴리 심화</p><p>• 인식 개선과 산업 표준화의 필요성: Clipper Pennant(MAIB 16/2024) 사건과의 유사성으로 인해 영국 해운회의소와 항만안전 관련 기관에 자동차 운반선 갑판 안전 통합 행동강령 개발 권고 - 산업 전반의 표준화된 규범 수립 필요</p><p>• 기술적 해결책의 한계: 현재의 '절차 기반 안전' 접근법의 한계</p></div>`,
      tags: ["Fatal Accident","Roll-on/Roll-off Vessel","Vehicle Deck Safety","Crew Fatality","MAIB Investigation"],
      link: "https://www.gov.uk/maib-reports/fatal-accident-to-a-crew-member-on-board-the-roll-on-slash-roll-off-cargo-vessel-laureline",
      coords: [0.293,51.477],
      location: "Purfleet, England"
    }
  ]
});

// Auto-collected: 2026-03-30
addEvents({
  "2026-03-30": [
    {
      type: "news",
      title: "Navy Commissions New Virginia-class Attack Boat USS Massachusetts in Boston Ceremony",
      source: "USNI News",
      sourceMeta: "news.usni.org · 2026-03-30",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해군이 새로운 버지니아급 공격 잠수함 USS Massachusetts (SSN-798)를 보스턴 항구에서 취역식을 통해 정식 해군 전력화 완료<br>• Block IV 버지니아급 잠수함으로, 매사추세츠 주 이름을 가진 다섯 번째 해군함정 (역사상 가장 유명한 선박은 2차 세계대전 태평양 전역에서 활약한 전함)<br>• 취역식에는 미국 현존 최강의 군함 USS Constitution이 함께 참여하여 역사적 의미 강조<br>• Block IV 버지니아급은 차세대 공격 잠수함으로 증강된 전투력과 첨단 기술 탑재<br>• 미 해군의 지속적인 잠수함전력 현대화 추진의 일환으로, 인도-태평양 지역 해양 안보 강화 목표</p><h3>Key Quotes</h3><p>• "It is the fifth Navy vessel named after the commonwealth of Massachusetts, following the most recent, USS Massachusetts, a battleship that participated in nearly every major Pacific campaign from 1943 to 1945 and earned 11 battle stars for its World War II service" <br>(매사추세츠라는 이름의 다섯 번째 해군함정으로, 직전의 같은 이름의 전함은 1943~1945년 태평양 거의 모든 주요 전투에 참전하여 11개의 전투 성장을 수훈 받음)</p><h3>Technical Insights</h3><p>• Block IV 버지니아급 설계는 개선된 음향 스텔스 기술과 향상된 센서 시스템을 통합하여 현대 해양 위협 대응 능력 강화<br>• 현대 잠수함 취역은 조선 산업의 고도화와 수년간의 건조 기간을 거쳐 완성되는 복잡한 프로젝트로, 국방력 투자의 장기성을 입증<br>• 미 해군의 전략적 핵심인 공격 잠수함 전력은 중국의 해군력 증강 대응 및 인도-태평양 지역 해양 패권 유지의 중요 수단</p></div>`,
      tags: ["Virginia-class submarine","USS Massachusetts","Naval commissioning","U.S. Navy"],
      link: "https://news.usni.org/2026/03/30/navy-commissions-new-virginia-class-attack-boat-uss-massachusetts-in-boston-ceremony",
      coords: [-71.0596,42.3601],
      location: "Boston Harbor, Massachusetts"
    }
  ]
});

// Auto-collected: 2024-02-21
addEvents({
  "2024-02-21": [
    {
      type: "accident",
      title: "Foundering of the fishing vessel Freedom II (CN 111) - Engine Room Flood",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2024-02-21",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2024년 2월 21일 스코틀랜드 오반 남서쪽 11해리 해역에서 영국 등록 새우 트롤어 Freedom II(길이 15.94m)가 침몰</p><p>• 엔진실로의 점진적인 침수로 인한 침몰 - 갑판 세척펌프의 해수 흡입 배관이 진동에 의해 균열되었을 가능성이 높음</p><p>• 승무원 4명은 해상왕립구조대(RNLI)에 의해 구조되어 무상의 생존, 선박은 최종 침몰하여 회수되지 않음</p><p>• 침수 속도가 운영 중인 빌지펌프의 능력을 초과했으며, 추가 펌프는 전원 공급 문제로 인해 작동 불가능했음</p><p>• 선장의 신속한 안전 대응으로 승무원 안전을 확보했으나, 신호 수신이 불량한 해역에서 비상 신고를 발령</p><h3>Key Quotes</h3><p>• "The vessel foundered due to a progressive flood into the engine room." (선박은 엔진실로의 점진적인 침수로 인해 침몰했다)</p><p>• "The most likely cause was a vibration-induced fracture of the seawater suction pipe for the deck wash pump." (가장 가능성 높은 원인은 갑판 세척펌프의 해수 흡입 배관의 진동으로 인한 균열이다)</p><p>• "The skipper was proactive in ensuring that the crew were safe and managed to raise the alarm in an area of poor signal coverage." (선장은 승무원 안전을 보장하기 위해 적극적으로 대응했으며 신호가 불량한 지역에서도 비상신호를 발령했다)</p><h3>Technical Insights</h3><p>• 선박 기관실의 핵심 배관 시스템(해수 흡입 배관) 진동 감시 및 정기 검사의 중요성 - 소형 어선의 경우 설비 노후화 관리 강화 필요</p><p>• 빌지펌프 시스템의 다중 계층적 설계 필수 - 주펌프 작동 불가 시 비상펌프의 독립적 전원 공급 확보로 침수 대응력 향상</p><p>• 소형 어선(15m급)의 원격 해역 운항 시 통신 시스템 강화 및 조기 경보 체계 구축 - IMO 안전 규정의 소형 선박 적용 기준 재검토</p><p>• 선원 훈련 표준화 - 비상상황 대응 및 현장 응급처치 역량 강화로 인명 피해 예방(본 사건은 4명 전원 생존)</p></div>`,
      tags: ["fishing vessel","foundering","engine room flood","UK waters"],
      link: "https://www.gov.uk/maib-reports/foundering-of-the-fishing-vessel-freedom-ii-cn-111",
      coords: [-5.48,56.36],
      location: "Oban, Scotland"
    }
  ]
});

// Auto-collected: 2026-03-31
addEvents({
  "2026-03-31": [
    {
      type: "news",
      title: "UK Royal Navy Awards Teledyne Contract for Underwater Gliders and Autonomous Ocean Systems",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-31",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/UK-Royal-Navy-Awards-Teledyne-Contract-for-Underwater-Gliders-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 국방부(MOD)는 Teledyne에 Future Maritime Data Gathering(FMDG) 프로젝트를 위한 계약을 수여하였으며, 이는 자율 해양 관측 시스템의 대규모 도입을 의미함</p><p>• Sentinel 및 Slocum 글라이더, APEX 플로트 등 첨단 자율 무인 기술을 활용하여 복잡한 원해 환경에서 해양 환경 데이터 수집 능력 강화</p><p>• 2015년 이후 Teledyne의 Slocum 글라이더를 운영해온 경험을 바탕으로, Royal Navy가 단일 공급업체와의 지속적 파트너십을 확대하는 결정</p><p>• 정보 전쟁 기상해양(IW METOC) 운영자들이 수집된 실시간 데이터를 활용하여 수중 전장 상황 인식 및 전술적 환경 활용 지원</p><p>• Atlantic Bastion 전략과 연계되어 북대서양의 분쟁 환경에서 해양 상황 이해 및 작전 능력 향상에 기여</p><h3>Key Quotes</h3><p>• "Teledyne remains the only supplier able to guarantee seamless interoperability, security compliance, and mission readiness into the Current RN Glider Fleet." (현재 Royal Navy 글라이더 함대와의 완벽한 상호운용성, 보안 규정 준수, 임무 준비태세를 보장할 수 있는 유일한 공급업체)</p><p>• "This investment in autonomous ocean sensing strengthens the Royal Navy's ability to understand and operate in an increasingly contested North Atlantic, supporting Atlantic Bastion." (자율 해양 센싱 투자는 Royal Navy가 점점 더 분쟁 지역화되는 북대서양에서의 이해도와 작전 능력을 강화하고 Atlantic Bastion을 지원함)</p><h3>Technical Insights</h3><p>• 자율 해양 플랫폼의 전략적 중요성: Slocum 글라이더와 APEX 플로트 같은 장기 내구성 자율 시스템은 NATO 및 Royal Navy의 하이브리드 해군 전략에서 정보 수집 및 상황 인식의 핵심 인프라로 기능</p><p>• 상호운용성과 보안의 표준화: 국방 부문에서 단일 공급업체 선택은 시스템 통합, 보안 규정 준수, 임무 연속성 측면에서 중요하며, 이는 자율 수중 시스템의 신뢰성 확보를 위한 필수 요건</p><p>• 수중 전장 인식(Underwater Battlespace Awareness)의 군사적 영향: 지속적인 해양 환경 데이터 수집은 잠수함 작전, 기뢰 탐지, 음향 환경 파악 등 현대 해전의 핵심 요소로, 정보 전쟁(Information Warfare) 우위 확보에 직결</p></div>`,
      tags: ["autonomous underwater vehicles","Royal Navy","ocean observing systems","defense technology"],
      link: "https://www.navalnews.com/naval-news/2026/03/uk-royal-navy-awards-teledyne-contract-for-underwater-gliders/",
      coords: [-2.2453,51.5074],
      location: "United Kingdom"
    }
  ]
});


// Auto-collected: 2026-04-03
addEvents({
  "2026-04-03": [
    {
      type: "accident",
      title: "Sweden Seizes Sanctioned Russian Oil Tanker Flora 1 Suspected of Causing 12 km Baltic Sea Oil Spill",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-03",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-13T170802Z_356820084_RC2J3KA6LZI6_RTRMADP_3_UKRAINE-CRISIS-SWEDEN-SHIP-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 사건 개요: 스웨덴 해안경비대가 발틱해 고틀란드 섬 인근에서 12km 규모의 유류 유출을 야기한 것으로 의심되는 러시아 선박 Flora 1을 나포함</p><p>• 선박 정보: Flora 1은 러시아 프리모르스크 항구에서 출발한 유조선으로, 러시아의 제재 회피 "섀도우 플릿(Shadow Fleet)"에 속하며 EU 제재 목록에 등재되어 있는 것으로 파악됨</p><p>• 환경범죄 수사: 스웨덴 해안경비대가 환경범죄 혐의로 수사를 개시했으며, 유류는 육지에 도달하지 않을 것으로 예상되나 심각한 환경 위협으로 평가됨</p><p>• 제재 시행 강화: 유럽 국가들이 우크라이나 전쟁 자금 조달에 사용되는 러시아 섀도우 플릿 차단을 위해 감시 및 단속 활동을 적극 추진 중</p><p>• 정책 담당자 입장: 스웨덴 민방위장관 Carl-Oskar Bohlin은 "노후 저보험 유조선들로 구성된 러시아 섀도우 플릿이 주요 보안 및 환경 위협"이라고 성명</p><h3>Key Quotes</h3><p>• "The Russian shadow fleet, consisting of older, poorly insured tankers that evade sanctions, poses a significant security and environmental threat" (오래되고 보험 미흡한 유조선들로 구성된 러시아 섀도우 플릿이 중요한 보안 및 환경 위협을 초래한다는 의미)</p><p>• "The government is taking the incident seriously, even though this time it is not a major oil spill." (이번 사건이 대규모 유류 유출은 아니지만 정부가 심각하게 대응하고 있다는 뜻)</p><h3>Technical Insights</h3><p>• 해상 감시 강화: MarineTraffic 등 해상 추적 데이터와 OSINT 기술을 활용한 섀도우 플릿 단속이 강화되고 있으며, 이는 IMO 및 국제 해양 규제의 투명성 강화 필요성을 시사</p><p>• 환경 규제 적용: 미등록 또는 제재 대상 선박의 유류 유출은 MARPOL(해양오염방지협약) 위반에 해당하며, EU의 강화된 환경 단속이 국제해양법 시행의 중요성을 부각</p><p>• 제재 정책의 해양산업 영향: 러시아 제재 회피 선박 단속은 글로벌 유류 운송 시장 및 보험 산업에 영향을 미치고 있으며, 선박 등록 및 신원 추적 시스템의 개선 필요성 강조</p><p>• 안전 및 규정 준수: 저보험 및 노후 선박의 운항은 해양사고 위험 증가로 이어지며, IMO 2030/2050 환경 규제 강화와 함께 높은 운영 기준 유지의 중요성 대두</p></div>`,
      tags: ["Oil Spill","Russian Shadow Fleet","Environmental Crime","Baltic Sea","Sanctions Enforcement"],
      link: "https://gcaptain.com/sweden-seizes-sanctioned-oil-tanker-suspected-of-being-source-of-spill/",
      coords: [18.69,57.41],
      location: "Baltic Sea, off Gotland Island, Sweden"
    },
    {
      type: "news",
      title: "ZenaTech Enters Underwater Robotics Market with IQ Aqua AUV Prototype",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-03",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/New-player-enters-underwater-robotics-market-with-AUV-prototype.jpg?image-crop-positioner-ts=1775201777",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ZenaTech의 자회사 ZenaDrone이 방위 및 상업 시장용 자율수중차량(AUV) 프로토타입 'IQ Aqua' 개발 완료<br>• 현재 유선 배터리 방식 운영 중이며, 차세대는 무선식 GPS 독립형으로 개발 진행 중<br>• 해상 에너지 파이프라인, 해저 케이블, 해양 인프라의 자동 검사 용도로 활용 예정<br>• 미국 및 국제 지역에서 수개월 내 수중 현장 테스트 실시 계획<br>• GCC 국가(UAE, 사우디아라비아, 카타르) 등 해상 탄화수소 자산 보유 지역을 주요 시장으로 설정</p><h3>Key Quotes</h3><p>• "IQ Aqua AUV prototype intended for multiple underwater use cases across defense and commercial markets" <br>(방위 및 상업 시장 전반의 다양한 수중 활용 목적을 위한 IQ Aqua AUV 프로토타입)</p><p>• "the next-generation prototype that will be tether-free and GPS-independent is in the making"<br>(차세대 프로토타입은 무선식이며 GPS에 독립적인 방식으로 개발 중)</p><h3>Technical Insights</h3><p>• AUV 기술 진화: 기존 유선식 배터리 방식에서 무선 자율운영 체계로의 기술 전환은 해양 인프라 검사의 효율성과 운영 범위를 대폭 확대할 것으로 예상<br>• 자율해양 시스템의 확산: AI 기반 수중 로봇 기술의 상용화는 해상 에너지, 해저 케이블 관리, 항만 운영 등 해양산업 전반의 자동화 추진력 강화<br>• 방위-상업 이중용도 기술: 방위 및 상업 시장 동시 진출 전략은 해양 보안과 인프라 관리 분야에서 기술 표준화 및 국제 규제 논의 필요성 증대<br>• 역내 시장 확대: GCC 국가의 해상 에너지 자산 및 항만 보안 수요를 겨냥한 지역 집중 전략은 자율 수중 로봇의 상용화 가속화 신호</p></div>`,
      tags: ["AUV","Autonomous Underwater Vehicle","Robotics","Offshore Infrastructure","AI Technology"],
      link: "https://www.offshore-energy.biz/new-player-enters-underwater-robotics-market-with-auv-prototype/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-02
addEvents({
  "2026-04-02": [
    {
      type: "news",
      title: "Bahrain Seeks UN Security Council Vote on Strait of Hormuz Shipping Protection Resolution",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-02",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockmiciboy-169467.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 바레인이 UN 안전보장이사회에 호르무즈 해협 상업 해운 보호를 위한 결의안 투표를 금요일에 실시할 것을 촉구함</p><p>• 미국과 이스라엘의 이란 공격 이후 2월 말부터 호르무즈 해협이 사실상 해운 통행이 중단되었으며 유가가 급등함</p><p>• 바레인이 4번째 초안을 제시했으며 "모든 필요한 수단(all necessary means)"을 통한 상업 해운 보호 권한 부여를 요청함</p><p>• 러시아와 중국의 반발을 완화하기 위해 구속력 있는 집행에 대한 명시적 언급을 삭제하고 6개월 시한을 설정함</p><p>• 현안 결의안은 방어적 성격의 강제 조치를 허용하며 이란의 해협 통제 시도를 "위법하고 정당화되지 않는 행위"로 규정함</p><h3>Key Quotes</h3><p>• "We look forward to a unified position from this esteemed Council during the vote that will take place on the draft resolution tomorrow, God willing," (이사회가 내일 투표할 결의안에 대해 통일된 입장을 보여주기를 기원합니다)</p><p>• "unlawful and unjustified attempt to control international navigation in the Strait of Hormuz" (호르무즈 해협에서의 국제 해운 통제에 대한 위법하고 정당화되지 않는 시도)</p><p>• President Trump "vowed to continue attacks, but did not lay out a plan to re-open the strait" (공격을 계속하겠다고 약속했지만 해협 재개방 계획을 제시하지 않음)</p><h3>Technical Insights</h3><p>• **해상 교통 안전 규정**: 호르무즈 해협은 전 세계 석유 수송의 약 20-30%를 담당하는 국제 해운의 중요 통로로서, 해협 폐쇄는 SOLAS 및 MARPOL 등 국제 해사 규정의 실질적 작동 중단을 의미함</p><p>• **IMO/안전보장이사회 협력 체계**: UN 안보리의 강제 결의안은 IMO 국제 해사 규정보다 상위의 정치적 개입으로, 이는 전쟁 상황에서의 해상 통행 보장이 국제법적 우선순위임을 입증함</p><p>• **지정학적 해운 위험 증대**: 호르무즈 해협 폐쇄로 인한 장기 유가 상승은 선사의 연료비 증가, 선박 우회 항로 장거리화, 보험료 상승 등 해운업 전반의 경제적 타격을 야기하고 있음</p><p>• **군사적 호위와 상업 해운의 불일치**: 트럼프 대통령이 공격 계속을 표명하면서도 해협 재개방 계획을 제시하지 않음으로써, 군사 목표와 해운 안전 보장 사이의 정책 불일치가 해운업계의 불확실성을 증가시키고 있음</p></div>`,
      tags: ["Strait of Hormuz","UN Security Council","Shipping Protection","Maritime Security","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/bahrain-hopes-council-vote-hormuz-537650",
      coords: [53.6,26.1],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "US Raises Concerns Over China's Detentions of Panama-Flagged Vessels Following Port Concession Ruling",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-02",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockblackmac-169464.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **파나마 기국 선박 대량 억류**: 중국이 2026년 3월 8일 이후 약 70척의 파나마 기국 선박을 억류하고 있으며, 이는 역사적 규범을 크게 초과하는 수준</p><p>• **근본 원인 - 파나마 법원 판결**: 2026년 1월 파나마 대법원이 홍콩 CK 허치슨의 발보아·크리스토발 터미널 운영 특허권을 무효화한 결정에 대한 보복성 조치로 추정</p><p>• **미국의 강한 반발**: 마르코 루비오 국무장관이 중국의 경제적 강압이 파나마의 법치주의를 훼손하고 있다고 성명 발표</p><p>• **전략적 중요성**: 파나마 운하는 전 세계 해상 무역량의 약 5%를 처리하는 전략적 요충지로서 중미 지역에서의 미중 영향력 경쟁의 핵심 무대</p><p>• **CK 허치슨의 국제중재 소송**: 30년 운영사 CK 허치슨이 파나마를 상대로 20억 달러 이상의 손해배상을 요구하는 국제중재 사건 제기</p><h3>Key Quotes</h3><p>• "China's recent actions against Panama-flagged vessels raise serious concerns about the use of economic tools to undermine the rule of law in Panama, a sovereign nation and vital partner for global commerce" <br>(중국이 경제적 수단을 동원하여 주권국가이자 글로벌 무역의 중요 파트너인 파나마의 법치주의를 훼손하려는 행동에 심각한 우려를 표명)</p><p>• "This sovereign ruling upheld transparency, the rule of law, and held private operators accountable to the public interest"<br>(이번 파나마 대법원의 판결은 투명성과 법치주의를 강화하고 민간 운영사의 공공 이익 책임을 확보했다는 의미)</p><h3>Technical Insights</h3><p>• **선박 기국과 국제법**: 파나마 기국 선박이 중국 항구에서 집단 억류되는 상황은 국기국과 항만국 통제 원칙 간의 충돌을 나타내며, IMO 규정 준수와 무관한 정치적 목적의 항만국 조치로 간주될 수 있음</p><p>• **해상 무역 지정학화**: 파나마 운하라는 전략적 해상교통로를 중심으로 미중 경제 갈등이 노골화되고 있으며, 선박의 자유로운 통항과 항만 접근권이 지정학적 수단으로 변질되는 위험성을 시사</p><p>• **국제해운 규제의 한계**: FMC와 로이드 리스트 같은 국제 감시기구가 이상 현상을 보고하고 있으나, 실질적인 억류 완화 메커니즘이 부재하여 국제 해운법의 집행 공백을 드러냄</p></div>`,
      tags: ["Panama Canal","China-US Relations","Port Operations","Maritime Regulation","Geopolitical Tension"],
      link: "https://www.marinelink.com/news/concerns-raised-repeated-chinese-537647",
      coords: [8.9824,9.082],
      location: "Panama Canal Region"
    },
    {
      type: "news",
      title: "World Fuel Services and West Coast Clean Fuels Launch US Methanol Bunkering Service",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-02",
      image: "https://images.marinelink.com/images/maritime/w800/methanol-bunker-169462.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• World Fuel Services와 West Coast Clean Fuels가 미국 항구에서 메탄올 벙커링 서비스를 공식 출범했으며, 사우스 플로리다에서의 시범 운영을 성공적으로 완료함</p><p>• U.S. Coast Guard 승인 절차, 훈련된 인원, 목적별 장비를 포함한 완전한 메탄올 벙커링 인프라 구축 완료</p><p>• West Coast Clean Fuels는 현재 미국에서 유일하게 트럭-선박 메탄올 벙커링 절차가 승인된 운영자이며, 추가 항구로의 신속한 확대 준비 상태</p><p>• 해운 산업의 저탄소 연료 전환 수요 증가에 따라 메탄올을 선박용 연료 전략에 통합할 수 있는 실질적인 솔루션 제공</p><p>• 광범위한 리스크 평가와 U.S. Coast Guard와의 협력을 통해 개발된 규제 준수 운영 절차 확립</p><h3>Key Quotes</h3><p>• "Our procedures didn't just meet regulatory requirements - they helped shape them. The U.S. Coast Guard's recent guidance reflects the operation we've developed." (우리의 절차는 단순히 규제 요구사항을 충족한 것뿐만 아니라 그 요구사항을 형성하는 데 도움을 주었습니다. 최근 U.S. Coast Guard의 지침이 우리가 개발한 운영 방식을 반영하고 있습니다.)</p><p>• "This enhanced capability of World Fuel with West Coast Clean Fuels provides customers practical turnkey access to integrate methanol into existing fuelling strategies." (World Fuel과 West Coast Clean Fuels의 향상된 역량은 고객들에게 메탄올을 기존 연료 공급 전략에 통합할 수 있는 실질적인 턴키 방식의 접근을 제공합니다.)</p><h3>Technical Insights</h3><p>• 메탄올 벙커링은 선박의 탈탄소화 전략에서 중요한 대안이며, IMO 2050 탄소 중립 목표 달성을 위한 실질적인 기술 솔루션으로 위치</p><p>• U.S. Coast Guard와의 협력을 통해 개발된 규제 준수 절차가 산업 표준이 되어 향후 다른 국가 및 항구에서의 메탄올 벙커링 확대에 선례 제시</p><p>• 트럭-선박 메탄올 벙커링의 표준화된 운영 절차 확립으로 인해 선사 및 벙커링 업체 간의 호환성 향상 및 공급망 효율성 증대 가능</p><p>• 메탄올 벙커링 인프라의 빠른 확산으로 미국 항구의 글로벌 경쟁력 강화 및 친환경 선박 연료의 보편화 촉진 예상</p></div>`,
      tags: ["Methanol Bunkering","Alternative Fuels","US Ports","Clean Energy","Marine Fuel"],
      link: "https://www.marinelink.com/news/world-fuel-west-coast-clean-fuels-launch-537635",
      coords: [25.7617,-80.1918],
      location: "South Florida, United States"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-02
addEvents({
  "2026-04-02": [
    {
      type: "news",
      title: "Iran Assures Safe Hormuz Transit for Philippine Vessels",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-02",
      image: "https://images.marinelink.com/images/maritime/w800/pawinee-adobe-169449.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 필리핀에 대해 호르무즈 해협을 통한 필리핀 국적선, 연료, 필리핀 선원의 안전한 통과를 보장하기로 확약했음<br>• 필리핀 외교부장관 Ma. Theresa Lazaro와 이란 외교부장관 Abbas Araqchi 간 통화를 통해 달성된 합의<br>• 필리핀은 중동에서 원유의 거의 전부를 수입하며, 사우디아라비아가 최대 공급국으로 공급망 확보가 중요한 문제<br>• 이번 보증으로 필리핀의 에너지 안보와 석유·비료 공급의 안정적 확보 가능성이 크게 향상될 것으로 예상<br>• 호르무즈 해협은 전 세계 석유 무역량의 약 20-30%가 통과하는 전략적 요충지로, 지역 안정성은 글로벌 에너지 시장에 영향<br>• 필리핀의 에너지 수입 의존도가 높아 중동 지역의 정치적 안정성과 해상 안보에 대한 외교적 협상이 중요한 상황</p><h3>Key Quotes</h3><p>• "Iran will allow the safe, unhindered, and expeditious passage through the Strait of Hormuz of Philippine-flagged vessels, energy sources, and all Filipino seafarers" (이란이 필리핀 국적선, 에너지 자원, 필리핀 선원의 호르무즈 해협 안전하고 방해받지 않는 신속한 통과를 허용하겠다는 보증)</p><p>• "Given that the Philippines imports the majority of its energy requirements from the Middle East, these assurances from Iran will greatly facilitate the steady delivery of critical oil and fertilizer supplies to the Philippines" (필리핀이 중동으로부터 대부분의 에너지를 수입하는 상황에서 이란의 보증은 필리핀으로의 석유와 비료 공급의 안정적 전달을 크게 촉진할 것)</p><h3>Technical Insights</h3><p>• 호르무즈 해협은 전 세계 최대 규모의 석유 통과 해역으로서, 해상 교통 보안과 정치외교가 밀접하게 연관된 전략적 해역이며 국제해사기구(IMO) 규정 준수와 함께 지역 협력의 중요성이 대두됨</p><p>• 필리핀 선박의 안전 통과 보증은 선주, 선원, 해운사들의 위험도 감소를 의미하며, 이는 호르무즈 해협 통행 보험료 및 보안 비용 절감으로 이어져 해운 산업의 비용 효율성 개선 가능</p><p>• 해양 에너지 공급망의 안정성은 자율운항선(MASS)과 AI 기반 선박 모니터링 기술의 도입 수요를 증가시킬 수 있으며, 위험 해역에서의 실시간 추적 및 예측 기술의 중요성 강화</p><p>• 국가 간 해상 통행 보증 협력은 IMO의 국제해상안전법(SOLAS) 및 국제충돌방지규칙(COLREG) 준수 외에도 지역적 신뢰 구축과 외교적 안정성 유지가 해운 산업 지속성의 핵심 요소임을 시사</p></div>`,
      tags: ["Strait of Hormuz","Shipping Security","Philippines","Iran","Energy Supply"],
      link: "https://www.marinelink.com/news/iran-assures-safe-hormuz-transit-537621",
      coords: [56.4,26.5],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2026-03-31
addEvents({
  "2026-03-31": [
    {
      type: "news",
      title: "Maine Maritime Academy Receives T/S State of Maine, Third NSMV Training Ship",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-04",
      image: "https://maritime-executive.com/media/images/article/Screenshot-2026-04-03-at-9.17.02-PM.aacf80.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **국가해양훈련선의 역사적 인수인계**: 미국 메인 주립해양아카데미가 국방부 마라드(MARAD)와의 협력으로 총 5척 중 세 번째 국가안보다목적함(NSMV) T/S State of Maine을 3월 31일 정식 인수받음</p><p>• **최첨단 훈련선의 기술적 사양**: 길이 525피트, 가치 3억 3천만 달러로 아카데미 운영 역사상 가장 대형이자 기술적으로 가장 첨단인 선박이며, 완전히 작동 가능한 2개의 선교(Bridge)와 기관실을 갖춤</p><p>• **미국 해운 인력 양성의 전략적 중요성**: 주립해양아카데미들이 미국 필요 신규 장교의 50% 이상을 배출하며, 정부 해상수송 및 상선 승무원 부족 문제 해결에 핵심 역할</p><p>• **한와 필라델피아 조선소의 건조**: 한화그룹 산하 필라델피아 조선소(Hanwha Philly Shipyard)가 NSMV 시리즈를 건조하는 등 국제 조선 협력 프로젝트</p><p>• **항만 입항 및 공식 인수식**: 3월 21일 포틀랜드 항(Portland Harbor) 입항 시 관례적 물대포 경례로 환영받았으며, 3월 31일 오션 게이트웨이에서 공식 인수식 개최</p><h3>Key Quotes</h3><p>• "Maine Maritime Academy is internationally recognized as a leader in maritime education and this vessel represents a major step forward in our mission to train the world's finest mariners" <br>(메인 주립해양아카데미는 국제적으로 해양교육의 선도자로 인정받고 있으며, 이 선박은 세계 최고 수준의 해양인 양성 임무의 중대한 진전을 나타냄)</p><p>• "A strong merchant marine means a strong America. By equipping Maine Maritime Academy with a state-of-the-art vessel to train future merchant mariners, we are fulfilling President Trump's promise to restore America's maritime dominance"<br>(강한 상선해운은 강한 미국을 의미하며, 메인 주립해양아카데미에 차세대 상선해운인 훈련용 최첨단 선박을 장비함으로써 미국의 해운 주도권 회복이라는 트럼프 대통령의 공약을 이행하고 있음)</p><h3>Technical Insights</h3><p>• **목적별 다기능 설계의 해양훈련 혁신**: NSMV는 순수 훈련 기능 외에도 연방 인도주의 및 재난 대응 임무 지원이 가능한 다목적 설계로, 평시 훈련과 유사시 국방 역할의 이중성 확보</p><p>• **실전형 시뮬레이션 환경 구축**: 완전히 작동 가능한 이중 선교와 기관실 시스템을 통해 해양사관들이 실제 선박 운영과 동일한 환경에서 고급 기술 습득 및 의사결정 훈련 수행 가능</p><p>• **국방해운정책과 해양인력 수급**: 국가전략적 중요성이 높은 상선 장교 양성에 정부가 3억 3천만 달러를 투자하는 것은 글로벌 해운 공급망 안정성 확보와 국방 자산으로서의 상선 역할 강화를 반영</p><p>• **국제 조선산업 협력 체계**: 한화 필라델피아 조선소의 NSMV 건조는 미국-한국 조선산업 협력의 사례로, 고부가가치 훈련함 건조를 통한 조선산업의 기술적 고도화와 고용 창출에 기여</p></div>`,
      tags: ["Training Ship","National Security Multi-Mission Vessel","Maritime Education","MARAD"],
      link: "https://maritime-executive.com/article/maine-maritime-academy-welcomes-historic-arrival-of-t-s-state-of-maine-2",
      coords: [-70.2553,43.6629],
      location: "Portland Harbor, Maine"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-05
addEvents({
  "2026-04-05": [
    {
      type: "accident",
      title: "Ships Near Italy Rescue 32 Migrants, 71 Lost at Sea",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-05",
      image: "https://images.marinelink.com/images/maritime/w800/source-seawatch-169482.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **대규모 해상 사망 사고**: 리비아에서 유럽으로 향하던 보트가 복원할 수 없는 상태로 전복되어 105명의 승객 중 71명이 사망하고 2구가 회수됨</p><p>• **해상 구조 활동**: 이탈리아 인근 상선 2척이 32명의 생존자를 구조하여 이탈리아 해안경비대 순찰선으로 이송하고 램페두사 섬으로 운송</p><p>• **구조 기관**: Mediterranea Saving Humans, Sea-Watch 등 구조 자선단체와 이탈리아 해안경비대가 대응</p><p>• **환경 요인**: 지중해의 악천후가 북아프리카 출발 감소 및 해상 위험 심화에 영향</p><p>• **광역 사망률 증가**: 국제이주기구(IOM) 추정, 2026년 중앙 지중해 사망자 683명으로 2014년 이후 최고 수준</p><h3>Key Quotes</h3><p>• "Video released from Sea-Watch showed about a dozen people clinging to a capsized orange boat as it was approached by the merchant vessel." <br>(Sea-Watch에서 공개한 영상은 상선이 접근할 때 전복된 주황색 보트에 약 12명이 매달려 있는 모습을 보여줌)</p><p>• "The International Organization for Migration (IOM) estimates that at least 683 have died in the central Mediterranean this year, one of the highest tolls since 2014."<br>(국제이주기구(IOM)는 올해 중앙 지중해에서 최소 683명이 사망했으며, 이는 2014년 이후 최고 수준이라고 추정)</p><h3>Technical Insights</h3><p>• **해상 구조 역량 강화**: 상선의 즉각적 대응과 해안경비대와의 조율이 32명의 생명 구조에 성공했으며, 향후 해상 통신 및 구조 체계의 표준화 필요성 제기</p><p>• **기상 예측 및 안전 규정**: 악천후로 인한 대형 해상 사고 증가로 IMO의 승객 및 화물선 안전 기준 강화, 특히 소형 보트의 해양 기상 조건 제한 규정 검토 필요</p><p>• **국제 해양법 및 인도주의**: SOLAS(국제해상인명안전규칙) 제5장에 따른 필수 해상 구조 의무 이행으로 상선의 적극적 참여 확인, 다국간 해양 안전 협력체계의 중요성 강조</p><p>• **산업적 영향**: 지중해 항로의 해상 안전 규제 강화 및 상선 운영사들의 구조 훈련 강화로 운영 비용 증가 예상, 해상 보험료 상승 가능성</p></div>`,
      tags: ["migrant rescue","Mediterranean Sea","capsized boat","casualties","Easter weekend"],
      link: "https://www.marinelink.com/news/ships-near-italy-rescue-migrants-lost-sea-537672",
      coords: [12.6326,35.5007],
      location: "Mediterranean Sea (Lampedusa, Italy)"
    },
    {
      type: "news",
      title: "ClassNK Awards Autonomous Notation to Domestic Container Ship Genbu",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-05",
      image: "https://images.marinelink.com/images/maritime/w800/source-classnk-169486.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **ClassNK가 일본 국적 컨테이너선 겐부(Genbu)에 세계 최초 'AUTO-Nav2(All)' 자율항해 표기를 부여** - 이는 중장거리 연안항로에서 운항하는 자율항해선박에 대한 최초의 공식 인증</p><p>• **니혼 재단의 MEGURI2040 완전자율운항선박 프로그램의 일환으로 건조됨** - 교쿠요 조선소에서 건조, IKOUS가 선박관리, 스즈요 마린이 운영</p><p>• **ClassNK의 자동화/자율운항 선박 지침서 발표** - 설계개념부터 유지보수까지 각 단계별 요구사항을 규정하는 국제 표준 가이드라인</p><p>• **일본의 고령 해사인력 문제 해결 및 원도 지역 항로 유지 기대** - 자율운항선박이 일본의 국내 해운사업 지속과 낙도 연계 항로 확보에 기여할 것으로 예상</p><p>• **자율항해 기술의 규제 표준화 단계 진입** - 다양한 실증 프로젝트 경험을 기반으로 업계 전반에 적용 가능한 지침 마련</p><p>---</p><h3>Key Quotes</h3><p>• "ClassNK has granted its 'AUTO-Nav2(All)' notation to Japanese domestic liner container ship Genbu, the only newly constructed autonomous ship under the MEGURI2040 Fully Autonomous Ship Program"<br>(ClassNK가 니혼 재단의 MEGURI2040 완전자율운항선박 프로그램에 따라 건조된 유일한 신규 자율운항선박인 겐부에 'AUTO-Nav2(All)' 표기를 부여했다)</p><p>• "it marks the world's first case of an autonomous navigation notation being assigned to a vessel operating on medium- to long-distance coastal routes"<br>(중장거리 연안항로에서 운항하는 선박에 자율항해 표기를 부여한 세계 최초의 사례이다)</p><p>• "autonomous ships are expected to contribute to securing daily routes to many inhabited remote islands and to the continuation of domestic shipping business due to the aging of seafarers"<br>(자율운항선박은 낙도 항로 확보 및 해사인력 고령화로 인한 국내 해운사업 지속에 기여할 것으로 기대된다)</p><p>---</p><h3>Technical Insights</h3><p>• **자율항해 표기(Notation) 시스템의 국제 표준화 진전** - ClassNK의 AUTO-Nav2 표기는 COLREG, SOLAS 등 국제해사규칙 준수 기반의 검증 체계로서, 향후 IMO 국제 기준 수립의 선례가 될 것으로 예상</p><p>• **설계·건조·운영 전 단계의 규제 프레임워크 확립** - 개념설계부터 운영 중 유지보수까지 포괄하는 지침서는 자율운항 선박의 상용화 단계에서 해급협회의 인증 절차를 표준화하며, 조선소·선주 간 예측 가능성 향상</p><p>• **연안·도서항로 특화형 자율운항 시스템의 실현** - 중장거리 연안항로 운항 가능 확인은 심해 원양항로뿐 아니라 제한된 수역의 자율화가 기술적으로 실현 가능함을 증명하며, 소규모 해운사·도서 지역사회에 새로운 비즈니스 모델 제시</p><p>• **일본의 해운산업 경쟁력 강화 전략** - 고령 선원 문제의 기술적 해결책 제시로 일본이 자율운항 기술 국제 표준 수립에서 주도권 확보, 향후 선급·기술 수출의 기반 마련</p></div>`,
      tags: ["Autonomous Ships","ClassNK","Maritime Regulation","Japan Shipping"],
      link: "https://www.marinelink.com/news/classnk-awards-autonomous-notation-537676",
      coords: [139.6917,35.6895],
      location: "Japan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-05
addEvents({
  "2026-04-05": [
    {
      type: "news",
      title: "Ship Recyclers Face Clouded Price Recovery Outlook Amid Geopolitical Risks",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-05",
      image: "https://images.marinelink.com/images/maritime/w800/source-169487.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 지정학적 위험이 에너지 시장의 주요 가격 결정 요인으로 부상하면서 선박 해체 산업에 양측 영향을 미치고 있으며, 높은 유가는 노후 선박의 운항을 지속하게 함</p><p>• 인도 루피화가 인도중앙은행의 개입 조치로 기록적 저점(94.42)에서 92.73으로 반등했으나, 터키 리라화는 44.59의 신저가를 기록하며 알리아가의 국제 톤수 경쟁력 약화</p><p>• 미 달러화의 혼합 신호(터키 리라 대비 강세, 인도 루피 대비 약세)로 인해 가격 발견이 어려워지고 시장 거래량이 부진한 상태</p><p>• 1분기에 축적된 선박 적체 현황 해소 진전 부족, 구매자와 판매자들이 입장 정리에 어려움을 겪고 있음</p><p>• 방글라데시 차탕감(Chattogram) 해체업체들이 적극적으로 톤수를 수요하며 지역 내 가장 긍정적 심리 유지, 반면 인도와 파키스탄은 제한된 공급과 철강 기초재 불확실성으로 신중한 태도 지속</p><p>• GMS 보고서에 따르면 업계는 해체 업체들의 증대된 수요를 충족할 충분한 톤수의 도입 시점을 주시하고 있음</p><h3>Key Quotes</h3><p>• "Geopolitical risk has overtaken supply-demand fundamentals as the primary price driver in energy markets, and ship recycling is feeling the impact from both sides" (지정학적 위험이 에너지 시장의 공급-수요 기본으로서의 지위를 대체하면서 선박 해체 산업이 양측 영향을 받고 있음)</p><p>• "These mixed signals continue to cloud price discovery, leaving buyers and sellers struggling to anchor positions and keeping overall market activity subdued" (이러한 혼합 신호들은 가격 발견을 흐리게 하여 구매자와 판매자들이 입장 설정에 어려움을 겪게 하고 전반적인 시장 활동을 억제)</p><h3>Technical Insights</h3><p>• 해체 선박 시장에서 통화 변동성(currency volatility)이 톤수 가격 책정의 주요 변수로 부상하고 있으며, 특히 남아시아 지역의 다중 통화 노출로 인한 가격 발견 기능 약화</p><p>• IMO 환경규제 강화에 따른 노후 선박의 해체 수요 증가 추세와 달리, 지정학적 위험으로 인한 유가 상승이 선박의 운항 수명을 연장시켜 시장 공급량 감소 현상 발생</p><p>• 방글라데시 해체업체의 상대적 경쟁력 강화(루피화 강세, 심리 긍정적)와 터키 알리아가의 경쟁력 약화(리라화 약세) 추세는 향후 해체 산업의 지역적 재편 가능성을 시사</p><p>• 선박 해체 시장의 가격 안정성 부재는 해운사의 선령 관리 및 자산 처분 계획 수립을 어렵게 하므로, 통화 헤징 수단의 중요성 증대 및 중장기 시장 예측 불가능성 심화</p></div>`,
      tags: ["Ship Recycling","Market Analysis","Currency Volatility","South Asia","Pricing"],
      link: "https://www.marinelink.com/news/ship-recyclers-face-clouded-price-537677",
      coords: [0,0],
      location: "Global (South Asia Focus)"
    },
    {
      type: "news",
      title: "Petronas-Chartered Tanker Passes Through Hormuz Strait Amid Iran Transit Restrictions",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-05",
      image: "https://images.marinelink.com/images/maritime/w800/moofushi-adobe-169483.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **페트로나스 차터 유조선(Ocean Thunder)이 호르무즈 해협을 통과**: 말레이시아 국영에너지기업 페트로나스의 자회사 Petco가 차터한 유조선이 이라크산 바사 석유 100만 배럴을 싣고 호르무즈 해협을 성공적으로 통과함</p><p>• **이란의 말레이시아 선박 통행 승인**: 이란이 말레이시아 정부와의 협상 결과 말레이시아 연계 7척의 선박에 대해 해협 통행을 승인하였으며, 통행료 부담 없음을 명시</p><p>• **글로벌 에너지 공급 경로의 지정학적 긴장**: 호르무즈 해협은 전 세계 석유 및 LNG의 약 20%가 통과하는 중요 수로로, 2월 말 미국-이스라엘 공습 이후 이란이 해협을 사실상 폐쇄함</p><p>• **선별적 통행 허용 정책**: 이란이 미국 및 이스라엘과 연계되지 않은 선박에 한해 통행을 허용하며, 옛 카타르산 유조선, 프랑스 컨테이너선, 일본 가스 운반선 등이 최근 통과함</p><p>• **해운산업의 리스크 관리**: 말레이시아, 오만, 프랑스, 일본 등 다국적 선박들의 선별적 통행 승인은 지정학적 위험 회피 전략으로 기능하며, 유조선 운영업체들의 항로 재설정 필요성 증대</p><p>• **Petronas의 전략적 외교**: 말레이시아 총리 아나르 이브라힘의 이란과의 직접 협상을 통한 통행 보장은 주요 에너지 기업의 공급망 안정성 확보 사례</p><h3>Key Quotes</h3><p>• "Iran effectively closed the strait, a corridor that carries about a fifth of global oil and LNG flows, in response to U.S. and Israeli airstrikes that began in late February." <br>(이란은 2월 말 시작된 미국-이스라엘 공습에 대응하여 전 세계 석유 및 LNG 흐름의 약 20%가 통과하는 호르무즈 해협을 사실상 폐쇄했다)</p><p>• "Malaysia's Prime Minister Anwar Ibrahim said last month Iran would allow Malaysian vessels to pass through the strait after holding talks with Iranian officials."<br>(말레이시아 총리 아나르 이브라힘은 이란 고위 관계자와의 협상 후 이란이 말레이시아 선박의 통행을 허용할 것이라고 발표했다)</p><p>• "Malaysia said on Wednesday that Iran would allow its ships to pass through the strait without paying any tolls."<br>(말레이시아는 수요일에 이란이 말레이시아 선박에 대해 통행료 징수 없이 해협 통행을 허용하기로 합의했다고 발표했다)</p><h3>Technical Insights</h3><p>• **호르무즈 해협의 지정학적 위험 관리**: 전 세계 석유 및 LNG 거래량의 20% 이상이 통과하는 호르무즈 해협의 폐쇄는 해운업과 에너지산업에 극대의 위험을 초래하며, 선박 운영사들은 대체 항로(Cape of Good Hope) 재검토 필요</p><p>• **선택적 통행 승인의 국제해사법 함의**: IMO 및 국제해법상 해협 통행의 자유가 원칙이나, 지정학적 분쟁 시 연해국의 통행제한 권한 문제로 해운산업의 예측 불가능성 증가</p><p>• **다자간 해운 외교의 등장**: 말레이시아의 성공적 협상 사례는 주요 에너지 기업과 국가 정부의 협력을 통한 안전항로 확보 전략의 중요성을 보여주며, 향후 아시아 태평양 지역 해운 네트워크 재편 가능성</p><p>• **해운 리스크 프리미엄의 변동성**: 호르무즈 해협 통행료</p></div>`,
      tags: ["Oil Tanker","Strait of Hormuz","Iran","Petronas","Geopolitical Risk","Energy Security"],
      link: "https://www.marinelink.com/news/petronaschartered-tanker-passes-hormuz-537673",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2025-07-28
addEvents({
  "2025-07-28": [
    {
      type: "accident",
      title: "Tug Captain Charged with Seaman's Manslaughter After Fatal Biscayne Bay Collision Kills Three Children",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2025-07-28",
      image: "https://gcaptain.com/wp-content/uploads/2025/07/250728-G-HW752-1001.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2025년 7월 28일 비스케인 베이(Biscayne Bay)에서 예인선(tugboat)이 끌고 있던 건설 폐기물 바지선(construction debris barge)이 풍속으로 정지된 돛단배와 충돌하여 3명의 어린이가 익사함</p><p>• **피해 규모**: 어린이 캠프 그룹 6명(카운슬러 1명, 어린이 5명)이 탑승한 돛단배 충돌 - 카운슬러 1명과 어린이 2명은 생존했으나, 3명의 어린이는 바지선 잔해에 갇혀 익사</p><p>• **책임자 기소**: 예인선 조종사 Yusiel Lopez Insua(46세, 마이애미)가 선원 과실 살인죄(seaman's manslaughter)로 기소됨 - 최대 10년 징역형에 처할 수 있음</p><p>• **주요 위반사항**: 선박의 전방 시야 차단(갑판하우스, 크레인 등 구조물), 전담 감시원(dedicated lookout) 미배치, 항해 중 휴대폰 인터넷 사용으로 상황 인식 부족</p><p>• **수사 기관**: 미국 해안경비대 수사국(CGIS), 마이애미 해안경비대, 플로리다 어류야생동물보존국 및 지역 법집행기관이 공동 수사 진행</p><h3>Key Quotes</h3><p>• "This information alleges a preventable loss of life on our waterways. We will present the evidence in court with care and professionalism." (우리의 해상 수역에서 예방 가능했던 생명의 손실을 나타낸다. 법원에서 신중하고 전문적으로 증거를 제시하겠다.)</p><p>• "The tug operator did not see the vessel before impact" (예인선 조종사는 충돌 전에 돛단배를 보지 못했다.)</p><h3>Technical Insights</h3><p>• **기본 항해 안전 위반**: 전방 시야 차단 상태에서의 항해, 전담 감시원 미배치는 COLREG(해상충돌방지규칙)의 기본 의무 위반으로, 안전 문화 부재를 시사</p><p>• **상황 인식(Situational Awareness) 부족**: 항해 중 휴대폰 인터넷 활동은 디지털 기기로 인한 선박 운영 위험 증가 추세를 반영하며, IMO 및 해안경비대의 감시 강화 필요성을 드러냄</p><p>• **예인선 운영 규정 강화**: 건설 폐기물 운반 바지선의 항해 시 시야 제한 구조물에 대한 규정 개선과 선원 교육 강화가 시급한 업계 과제로 대두</p><p>• **법적 책임 강화 추세**: 선원 과실 살인죄 기소는 해양 사고에서 인적 오류에 대한 형사 책임을 강화하려는 연방 검찰의 의지를 보여주며, 향후 해양 안전 산업 전반에 영향을 미칠 것으로 예상</p></div>`,
      tags: ["collision","maritime casualty","children fatalities","tugboat","seaman's manslaughter","Biscayne Bay"],
      link: "https://gcaptain.com/tug-captain-charged-after-fatal-biscayne-bay-collision-kills-three-children/",
      coords: [-80.2,25.75],
      location: "Biscayne Bay, Miami, Florida"
    }
  ]
});

// Auto-collected: 2026-04-06
addEvents({
  "2026-04-06": [
    {
      type: "accident",
      title: "Fire at ONGC's SHP Platform on Mumbai High Leaves 10 Workers Injured",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2019/06/lthe-bags-ongc-double.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 인도 국영 에너지 기업 ONGC의 뭄바이 고(Mumbai High) 해상 플랫폼 SHP에서 화재 발생, 신속하게 진화됨</p><p>• **인명 피해**: 10명의 작업자가 경미한 부상을 입었으며 현재 의료 치료를 받고 있고 상태는 안정적</p><p>• **사고 위치**: 뭄바이로부터 약 180km 북서쪽, 아라비아해의 뭄바이 하이 유전지역</p><p>• **관련 기관**: 국영 석유천연가스공사(ONGC), 국제 기술서비스 제공사 BP</p><p>• **배경 정보**: 작년 BP가 뭄바이 하이 유전의 생산 증대를 위해 국제 기술서비스 제공업체로 계약됨</p><p>• **산업 영향**: 해상 석유·가스 플랫폼의 안전 관리 및 응급 대응 능력에 대한 재점검 필요</p><h3>Key Quotes</h3><p>• "the situation regarding a fire incident at its SHP platform on the Mumbai High asset was promptly brought under control" (SHP 플랫폼의 화재 상황이 신속하게 통제되었다는 의미)</p><p>• "all of them are under medical care and in a stable condition" (모든 부상자들이 의료 치료를 받고 있으며 안정적인 상태라는 뜻)</p><h3>Technical Insights</h3><p>• **해상 플랫폼 안전**: 해상 석유·가스 플랫폼에서의 화재는 매우 위험하며, ONGC의 신속한 진화 대응이 대형 재난으로의 확대를 방지한 것으로 평가됨</p><p>• **운영 안전성**: 국제 기술서비스 제공사(BP)의 참여에도 불구하고 화재 사고가 발생한 것으로 보아, 해상 에너지 플랫폼의 지속적인 안전 개선과 예방 시스템 강화 필요</p><p>• **산업 규제**: IMO 및 국제 해양 안전 기준에 따른 해상 플랫폼의 화재 감지·소화 시스템 점검과 작업자 안전 교육 강화의 중요성 대두</p></div>`,
      tags: ["offshore fire","ONGC","Mumbai High","worker injuries","oil platform accident"],
      link: "https://www.offshore-energy.biz/ten-workers-suffer-injuries-as-fire-breaks-out-at-asian-offshore-oil-platform/",
      coords: [72.7597,18.9676],
      location: "Mumbai High, Arabian Sea, India"
    },
    {
      type: "accident",
      title: "Baltic Sea Oil Spill: Flora 1 Oil Tanker Detained Under Investigation",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Oljeutslapp-ost-Gotland-2026-04-02-Swedish-Coast-Guard.jpg?image-crop-positioner-ts=1775464399",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건개요**: 스웨덴 연안경비대가 발틱 해 고틀란드 동쪽에서 12km 이상의 광유(mineral oil) 유출을 감지하고, 용의 유조선 Flora 1을 스웨덴 영해 내에 정박 명령<br>• **용의선박**: Flora 1 유조선은 핀란드만 항구에서 브라질 산토스로 향하던 중 적발되었으며, EU 제재 대상 목록에 포함된 선박으로 기국 상태가 불명확함<br>• **수사경위**: 검사가 주도하는 환경범죄 혐의 예비수사 진행 중이며, 스웨덴 경찰과 협력하여 조사 진행<br>• **선박정보**: Flora 1에는 24명의 선원이 탑승 중이며, 기관의 강화된 해양감시 능력으로 적발<br>• **국제법적 배경**: 연안국은 국제협약에 따라 자국 경제수역 내 환경범죄와 불법 조업에 대해 개입 및 수사 권한 행사 가능<br>• **결과 및 영향**: 스웨덴 연안경비대는 "제재 대상 선박이 환경범죄로 적발된 것은 처음"이라며 강화된 감시체계의 성과 강조</p><h3>Key Quotes</h3><p>• "We act when we detect emissions. This is a result of our enhanced maritime surveillance that we are conducting as a result of the deteriorating security situation in the Baltic Sea region." (우리는 배출을 감지할 때마다 조치를 취합니다. 이는 발틱 해 지역의 악화되는 안보 상황에 대응하기 위해 강화된 해양감시의 결과입니다.)</p><p>• "As far as we know, this is the first time we have been able to trace a discharge to a vessel subject to sanctions, and which may be suspected of environmental crimes." (우리가 아는 한, 제재 대상 선박의 배출 행위를 추적하고 환경범죄 혐의로 적발한 것은 처음입니다.)</p><h3>Technical Insights</h3><p>• **연안국 권한**: 국제협약에 따라 자국 경제수역 내 환경 및 어업범죄에 대해 개입 가능하며, 스웨덴의 이번 조치는 국제법 준수 범위 내에서의 법집행을 보여줌</p><p>• **해양감시 강화**: 발틱 해의 악화된 안보 상황으로 인한 강화된 감시 시스템이 불법 유출 행위 적발에 효과적임을 입증</p><p>• **제재 이행과 환경보호 연계**: EU 제재 대상 선박이 동시에 환경범죄 혐의로 적발된 사례로, 국제 제재 이행과 해양 환경보호의 교집합 영역을 시사</p><p>• **영해/경제수역 기준**: 사건이 스웨덴 영토 외 경제수역에서 발생했으나 스웨덴이 수사 관할권을 행사할 수 있는 법적 근거 제시</p></div>`,
      tags: ["Oil Spill","Baltic Sea","Environmental Crime","EU Sanctions","Flora 1"],
      link: "https://www.offshore-energy.biz/vessel-detained-under-suspicion-over-baltic-sea-oil-spill-is-on-eu-sanctions-list/",
      coords: [18.5,56.8],
      location: "Baltic Sea, east of Gotland"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2025-01-04
addEvents({
  "2025-01-04": [
    {
      type: "accident",
      title: "Engine Room Fire on Bulker MV Lem Verbena in Mobile - $5.5M Damage",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-07",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/Lem-Verbena.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2025년 1월 4일 모빌 항만의 벌크선 Lem Verbena 엔진룸에서 대규모 화재 발생, $5.5백만 규모 손해 기록</p><p>• **직접 원인**: 보일러 연료 시스템의 O-ring 씰 부실 장착 및 연료 포트 정렬 불량으로 인한 고압 디젤유 누유</p><p>• **근본 원인**: 소프트웨어 설정 오류로 인해 연료 펌프가 정상적으로 셧다운되지 않아 시스템이 지속적으로 가압 상태 유지</p><p>• **피해 현황**: 약 43 psi의 고압 연료가 원자화되어 근처 고온 표면에 점화, 상부 엔진룸에서 시작된 화재가 하부 플랫폼으로 확산</p><p>• **선원 조치 결과**: 신속한 연료 시스템 차단, 엔진룸 폐쇄, CO₂ 고정식 소화 시스템 가동으로 19명 전원 안전 - 인명피해 및 환경오염 없음</p><p>• **조사 기관**: 미국 국가교통안전위원회(NTSB) 해양사고 조사 보고서</p><h3>Key Quotes</h3><p>• "An O-ring seal had been improperly seated between two misaligned fuel ports" (두 개의 정렬되지 않은 연료 포트 사이에 O-ring 씰이 부실하게 장착됨)</p><p>• "A software configuration error prevented the fuel pump from shutting off between burner cycles as designed, keeping the system continuously pressurized" (소프트웨어 설정 오류로 인해 버너 사이클 사이에 연료 펌프가 설계된 대로 차단되지 않음)</p><p>• "The crew's response—including rapid shutdown of fuel systems, sealing of the engine room, and proper deployment of CO₂—prevented injuries and limited further damage" (연료 시스템의 신속한 차단, 엔진룸 밀폐, CO₂의 적절한 가동으로 인명피해를 방지하고 추가 손해를 제한)</p><h3>Technical Insights</h3><p>• **기계-소프트웨어 복합 결함**: O-ring 부실 장착과 소프트웨어 펌프 제어 오류의 동시 발생이 고압 연료 누유를 가속화하여 고온 환경에서의 화재 위험을 급증시킨 사례</p><p>• **해상 장비 안전 검증 강화 필요**: 연료 시스템의 미세한 정렬 오류(misalignment)가 critical failure로 이어질 수 있으므로, 조립 단계에서의 품질 검증 및 정기 정비 프로토콜 강화 필수</p><p>• **고정식 소화 시스템의 중요성**: 엔진룸 고온 환경에서 CO₂ 고정식 소화 시스템이 화재 완전 진압에 효과적이었으며, IMO SOLAS 규정에 따른 해상선박 소화 시스템의 적절한 설계 및 유지보수 강조</p><p>• **선원 훈련 및 절차**: 신속한 연료 차단, 환기 시스템 제어, 소화 시스템 가동 등의 선원 대응이 피해를 최소화했으므로, 정기적인 엔진룸 화재 대응 훈련 및 SOP 준수의 중요성 재확인</p></div>`,
      tags: ["Engine Room Fire","Bulk Carrier","Fuel System Failure","NTSB Investigation"],
      link: "https://gcaptain.com/ntsb-boiler-fuel-leak-sparked-5-5m-engine-room-fire-on-bulker-in-mobile/",
      coords: [-88.2434,30.6954],
      location: "Mobile, Alabama (Alabama State Docks)"
    }
  ]
});

// Auto-collected: 2026-04-07
addEvents({
  "2026-04-07": [
    {
      type: "news",
      title: "Tech Talk: Time to Rethink Watchkeeping - Digital Watchkeepers and Human-Automation Interaction on Bridge",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-07",
      image: "https://images.marinelink.com/images/maritime/w800/robosys-automations-169580.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **핵심 문제**: UK MAIB의 2025년 보고서에 따르면 선박 간 충돌이 감소하지 않고 있으며, 이는 디지털 시대에서 인간 해양당직자의 역할 재검토 필요성을 강조 (Scot Explorer-Happy Falcon, Verity-Polesie, Solong-Stena Immaculate 충돌 사례 언급)</p><p>• **인간 모니터링의 한계**: 과소 자극 상태에서 인간은 다른 업무에 집중하기 쉬우며, 시스템의 경보 기능 활용에 소극적인 경향이 있음</p><p>• **ABB의 자동화 연구**: Kalevi Tervo (ABB Marine & Ports)는 ECAMARIS 프로젝트를 통해 인간과 자동화 기술의 근본적 차이를 입증, SOLAS의 '동등 이상 성능' 요구사항의 의미 재검토 필요</p><p>• **디지털 선원 개념**: 자동화 시스템을 '디지털 선원'으로 보면, 이는 정의된 작동 범위(operational envelope) 내에서만 작동하는 반면 인간은 더 유연한 대응이 가능</p><p>• **팀워크의 중요성**: 효과적인 운항은 기술뿐 아니라 선원 간 팀워크에 의존하며, 인간 당직자의 미문서화된 작업과 창의적 판단이 중요한 역할 수행</p><p>• **산업적 전환**: 자동화 기능의 급속한 도입으로 인해 선교 내 인간-기술 관계가 복잡하고 빠르게 진화 중</p><h3>Key Quotes</h3><p>• **"The more we work with the topic, the clearer it becomes that humans and automation are fundamentally different. So different that the International Convention for the Safety of Life at Sea (SOLAS) regulations' demand for automation systems to deliver 'equivalent or better' performance than humans loses its meaning –at least on a function level."** (인간과 자동화는 근본적으로 다르기 때문에 SOLAS의 동등 이상 성능 요구가 기능 수준에서는 의미를 잃는다)</p><p>• **"Humans do not make good monitors and if under-stimulated they will find other things to occupy themselves."** (저자극 상태의 인간은 좋은 모니터 역할을 하지 못하고 다른 업무에 집중하는 경향이 있다)</p><p>• **"When we automate part of the work that was previously done by a human, in one sense we create a 'digital crew member' to work relentlessly alongside the humans on board."** (인간의 업무를 자동화하면 선교 내에서 인간과 함께 일할 '디지털 선원'을 만드는 것이다)</p><h3>Technical Insights</h3><p>• **SOLAS 규정 재검토 필요성**: 국제 해상인명안전협약(SOLAS)의 자동화 시스템 성능 기준이 인간과 기계의 근본적 차이를 반영하지 못하고 있으며, IMO는 새로운 성능 기준 개발 검토 필요</p><p>• **당직체계의 혁신적 재설계**: 기존의 인간-중심 당직 개념에서 벗어나 인간-자동화 협업 모델로 전환 필요, 특히 자동화 시스템의 작동 범위 한계와 인간의 유연한 판단력 결합이 핵심</p><p>• **선원 역량의 재정의**: 디지털 당직자 시대에서 선원은 단순 정보 전달자가 아닌 자동화 시스템 감시자이자 상황 판단자로의 역할 변화, 미문서화된 암묵적 지식의 중요성 증대</p><p>• **산업 표준화 과제**: ECAMARIS 프로젝트 결과를 토대로 IMO, 선급협회(Classification Societies), 선사가 함께 인간-기계 인터페이스 설계 및 당직 기준 표준화 추진 필요</p></div>`,
      tags: ["Watchkeeping","Bridge Operations","Human-Automation Interaction","Collision Prevention","Maritime Safety","Autonomous Systems","SOLAS","IMO Regulations"],
      link: "https://www.marinelink.com/news/tech-talk-time-rethink-watchkeeping-537778",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "HII Partners with GrayMatter Robotics to Integrate Physical AI into Shipbuilding Operations",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-07",
      image: "https://images.marinelink.com/images/maritime/w800/credit-graymatter-169606.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• HII(Huntington Ingalls Industries)와 GrayMatter Robotics가 조선소 자동화를 위한 물리적 AI 통합에 관한 양해각서 체결<br>• 표면 준비, 코팅, 검사 등 주요 조선 공정에 자율 로봇 기술 도입 예정<br>• HII는 2025년 생산량 14% 증가에 이어 2026년 추가 15% 증가 목표 달성을 위해 협력<br>• High-Yield Production Robotics(HYPR) 이니셔티브와 GMR 기술 통합으로 미해군 함정 건조 효율성 극대화 추진<br>• 자동화된 샌드블래스팅, 그라인딩, 코팅 작업으로 인력 보강 및 품질 저하 없는 생산성 향상 기대</p><h3>Key Quotes</h3><p>• "Our shipbuilding throughput was up 14% in 2025 and we are looking for an additional 15% increase in 2026" (2025년 조선 생산량이 14% 증가했으며 2026년에는 추가로 15% 증가를 목표로 함)</p><p>• "By working with new partners like GMR we can further augment our workforce and speed up U.S. Navy shipbuilding production" (GMR과 같은 새로운 파트너와의 협력으로 인력을 보강하고 미해군 함정 건조 속도 가속화 가능)</p><p>• "AI‑driven technologies offer promising opportunities to support these critical processes by reducing repetitive work and improving consistency" (AI 기술은 반복 작업을 줄이고 일관성을 높여 핵심 공정을 지원할 수 있는 유망한 기회 제공)</p><h3>Technical Insights</h3><p>• **Physical AI 기반 조선 자동화**: GrayMatter Robotics의 물리적 AI를 샌드블래스팅, 그라인딩, 코팅 등 숙련도 높은 반복 작업에 적용하여 생산성과 품질 균형 달성 가능<br>• **미해군 조선 효율성 혁신**: HYPR 이니셔티브와 AI 로봇 통합으로 복잡한 함정 건조 일정 단축 및 대량 생산 체계 구축으로 국방력 강화 기대<br>• **산업 인력 구조 변화**: 자동화 확대에 따른 근로자 재교육 및 숙련 인력의 고부가가치 작업 전환 필요성 증대<br>• **해양 방위산업 경쟁력**: 미국의 조선산업 르네상스 추세 속에서 AI/로봇 기술 선제적 도입으로 글로벌 해양 방위 산업에서의 경쟁 우위 강화</p></div>`,
      tags: ["AI Shipbuilding","Autonomous Manufacturing","Physical AI","U.S. Navy","Industrial Robotics"],
      link: "https://www.marinelink.com/news/hii-teams-graymatter-robotics-integrate-537787",
      coords: [-76.3,37],
      location: "Newport News, Virginia (HII headquarters)"
    },
    {
      type: "news",
      title: "Massive Increase in Oil Transport Through Danish Waters: 58% Rise Since 2021",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-07",
      image: "https://images.marinelink.com/images/maritime/w800/peter-hermes-169599.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **덴마크 해역 원유 운송량 급증**: 2021년 대비 2025년 상반기 58% 증가, 일일 490만 배럴 수송으로 수에즈 운하와 동등 규모 달성</p><p>• **지정학적 영향**: 러시아-우크라이나 전쟁 이후 국제제재로 인해 러시아 원유의 발틱해 경로 운송 대폭 증가, 독일·폴란드의 노르웨이·미국산 원유 수입 증가</p><p>• **섀도우 플릿(Shadow Fleet) 위험**: 러시아 원유의 상당 부분이 보험·소유권이 불명확한 노후 선박으로 운송되어 환경재해 위험성 대폭 증가</p><p>• **해양환경 대비 미흡**: 덴마크는 현재 대규모 원유유출 사고 대응을 위한 해양환경 대비태세 부족 상황으로, 신정부의 우선 과제로 지적</p><p>• **글로벌 해상 운송로 변화**: 홍해 후티 공격으로 수에즈운하 경유 운송량 급감하고 아프리카 우회 운송 증가, 말라카해협·호르무즈해협은 여전히 일일 2,000만 배럴 이상 운송</p><p>• **운영 기관**: 덴마크해운협회(Danske Rederier) CEO Anne H. Steffensen 발표</p><h3>Key Quotes</h3><p>• "The international sanctions imposed on Russia as a consequence of their invasion of Ukraine have meant that a much larger part of Russian oil exports are now shipped to the world market through the Baltic Sea than before." <br>(러시아-우크라이나 전쟁으로 인한 국제제재가 러시아 원유 수출의 상당 부분을 발틱해 경로로 재편성했음)</p><p>• "It obviously increases the concern about an oil disaster in Danish waters when such large – and increasing – quantities of oil are shipped close to our coasts every day on ships of questionable quality."<br>(품질이 의심스러운 선박들이 매일 증가하는 대량의 원유를 덴마크 연안 근처로 운송함에 따라 원유유출 사고 우려가 심각해짐)</p><p>• "Unfortunately, today we do not have the necessary marine environmental preparedness in place to handle such a disaster – God forbid – should happen."<br>(현재 대규모 해양환경 재해에 대응할 충분한 대비태세가 부재한 상황)</p><h3>Technical Insights</h3><p>• **섀도우 플릿 운영의 규제 공백**: COLREG 및 IMO 국제해사규칙 준수 미흡, 보험·등록 불명확 선박 증가로 해상 안전 관리 체계의 한계 노출</p><p>• **해상교통관리(VTS) 강화 필요성**: 덴마크 해역의 교통량 증가(일일 490만 배럴)에 대응하기 위한 고도화된 해상교통관제, 원유 운송선 모니터링 강화 필수</p><p>• **환경 리스크 및 산업 영향**: 대규모 원유유출 사고 발생 시 해양생태계, 관광산업, 어업 등 광범위한 경제 피해 초래 가능, 해운사 및 정부 차원의 예방적 대응책 시급</p><p>• **글로벌 지정학적 변화와 해운 네트워크 재편**: 수에즈운하·말라카해협 대체로 덴마크 해역의 전략적 중요성 증대, 북유럽 항만 및 해상 인프라 확충 필요</p></div>`,
      tags: ["Oil Transport","Danish Waters","Geopolitics","Sanctions","Shadow Fleet","Environmental Risk"],
      link: "https://www.marinelink.com/news/massive-increase-oil-transport-danish-537784",
      coords: [10.5,55.5],
      location: "Great Belt and Sound, Denmark"
    },
    {
      type: "news",
      title: "Japan and South Korea Advance Autonomous Navigation with Key Certifications",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-07",
      image: "https://maritime-executive.com/media/images/article/Photos/Vessels_Small/Genbu-Japanese-domestic-containership.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **일본의 MEGURI2040 프로젝트**: 일본재단이 후원하는 자율항해 프로젝트에서 겐부(Genbu) 컨테이너선이 ClassNK로부터 완전 자율항해 표기를 획득하여 중·장거리 연안항로 운영 최초 사례 달성</p><p>• **선박 사양**: 겐부는 5,374톤 적재량, 134미터 길이, 696TEU 적재 용량의 신조선으로 교쿄요조선소에서 건조되고 시연 및 인증 완료</p><p>• **한국의 HiNAS Control 시스템**: 현대중공업의 자율항해 자회사 아비쿠스(Avikus)가 노르웨이 DNV와 3년간 협력하여 개발한 자율항해 지원 시스템이 최초로 형식승인(Type Approval) 획득</p><p>• **국제 표준 부재와 업계 대응**: 아직 국제 자율항해 표준이 확립되지 않았으나, ClassNK와 DNV가 주도적으로 지침 및 검증 프레임워크 개발 중</p><p>• **산업적 의의**: 기존 개별 선박별 맞춤형 시스템에서 벗어나 대량생산 가능한 다중 선박용 자율항해 시스템의 인증으로 상용화 가속화 전망</p><p>• **일본의 정책 배경**: 고령화되는 해기사 인력과 감소하는 선원 수에 대응하며 섬나라의 해상 공급망 유지 필요성이 주요 추진 동기</p><h3>Key Quotes</h3><p>• "The efforts are aimed at improving safety by preventing human error and at improving the working conditions for seafarers by reducing the workload." (인적 오류 방지로 안전성 개선 및 업무 부담 경감으로 해기사의 근무 조건 개선을 목표로 함)</p><p>• "This is the first time a mass-produced autonomous navigation system that was designed for multiple vessel types has gained recognition." (다중 선박 유형을 위해 설계된 대량생산 자율항해 시스템이 처음으로 인정받은 획기적 사례)</p><p>• "By gaining the Type Approval, HiNas Control can be installed without additional verification, which Avikus says will improve deployment efficiency." (형식승인 획득으로 추가 검증 없이 설치 가능하여 배포 효율성이 크게 향상될 것으로 예상)</p><h3>Technical Insights</h3><p>• **ClassNK와 DNV의 역할 강화**: 국제 해사 규제 공백을 민간 선급기관이 주도적으로 자율항해 지침 및 검증 체계 개발함으로써 IMO 국제 표준화 이전에 사실상 업계 표준 선도</p><p>• **형식승인 제도의 경제적 파급효과**: 개별 선박 프로젝트별 맞춤 인증에서 표준화된 대량생산 시스템으로의 전환은 도입 비용 감소 및 해운사의 자율항해 기술 채택 가속화 촉발</p><p>• **COLREG 준수 체계 미비**: 완전 자율항해 운영 시 국제 해상 충돌 회피 규칙(COLREG) 준수 메커니즘이 아직 구체적으로 입법화되지 않아 실제 상용 운항 시 법적·기술적 과제 남존</p><p>• **노동집약적 해운업의 구조 전환**: 선원 감소 및 고령화 대응 차원에서 자율항해 도입이 필수적 이슈인 일본·한국의 경쟁력 강화 전략으로, 향후 글로벌 표준 제정 과정에서 이들 국가의 영향력 확대 예상</p></div>`,
      tags: ["Autonomous Ships","AI Navigation","Japan","South Korea","ClassNK","DNV","Maritime Technology"],
      link: "https://maritime-executive.com/article/japan-and-south-korea-advance-autonomous-navigation",
      coords: [0,0],
      location: "Japan and South Korea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-06
addEvents({
  "2026-04-06": [
    {
      type: "accident",
      title: "Ukraine Strikes Russian Frigate Admiral Makarov and Oil Terminal in Novorossiysk Attack",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-06",
      image: "https://maritime-executive.com/media/images/article/Photos/Navy_Govt_CoastGuard/Admiral-Makarov-attack.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나가 노보로시스크 러시아 흑해함대 기지에서 대규모 드론 공격을 실행, 프로젝트 11356급 프리깃함 '아드미럴 마카로프'에 타격을 입혔으며 유조유 터미널에도 광범위한 피해 발생</p><p>• 타격 대상함정: 아드미럴 마카로프 (3,260톤급, 2018년 취역, 길이 125m) - 2022년 이후 재차 공격 받음</p><p>• 러시아는 3시간 동안 약 150대의 드론을 격추했다고 주장하며, 함정의 대공미사일 방어시스템도 작동</p><p>• 노보로시스크 유조유 터미널은 카스피파이프라인 컨소시엄의 종착점으로 러시아 석유 수출의 약 25%를 차지하며 지난 11월부터 다섯 차례 공격 받음</p><p>• 우크라이나는 또한 흑해에서 감시·통신·정보 수집용으로 사용 중인 자체상승식 석유시추 플랫폼 '시바시'도 표적으로 설정</p><p>• 공격으로 인한 화재, 정전, 민간인 8명 부상 발생 및 주택 피해 보고</p><h3>Key Quotes</h3><p>• "In what is being called one of the most ambitious attacks staged on the Russian Black Sea port of Novorossiysk, Ukraine claimed a successful hit on one of the Russian frigates homeported in the region" (노보로시스크 러시아 흑해항에 대한 가장 야심찬 공격 중 하나로 평가되며, 우크라이나가 모항에 있던 러시아 함정에 성공적으로 타격을 입혔다고 주장)</p><p>• "It is a key oil terminal and would factor in Ukraine's recent efforts to dramatically impact Russia's oil economy" (노보로시스크 터미널은 핵심 석유 터미널로서 우크라이나의 러시아 석유 경제에 대한 광범위한 타격 전략의 일환)</p><p>• "Novorossiysk is the terminus for the Caspian Pipeline Consortium. It is reported to represent as much as a quarter of Russia's oil exports" (노보로시스크는 카스피파이프라인의 종착점으로 러시아 전체 석유 수출의 약 25%를 담당)</p><h3>Technical Insights</h3><p>• **군사 인프라 타격 전술**: 우크라이나의 대규모 드론 스웜(50대 이상) 공격은 러시아 해군 함정과 에너지 인프라를 동시에 목표로 하는 다층 전략으로, 방어 자원 분산을 통한 타격 효율성 극대화를 의도</p><p>• **흑해 해상 통제 영향**: 프리깃함 손상으로 인한 러시아 흑해함대의 전투력 약화는 우크라이나의 해상 통로 확보 및 곡물 수출 루트 보호에 긍정적 영향, 향후 해상 분쟁 양상 변화 예상</p><p>• **에너지 시장 파급력**: 러시아 석유 수출의 1/4을 담당하는 노보로시스크 터미널에 대한 반복적 타격은 글로벌 에너지 공급망 및 국제 유가에 직결되는 중대 이슈로, 각국의 해상 운송 보험료 및 운영비용 상승 초래</p><p>• **해상 인프라 보호 과제**: 자체상승식 석유시추 플랫폼(Syvash) 공격은 전략적 해상 시설에 대한 드론 위협 증대를 시사하며, IMO 및 해운국들의 해상 시설 보안 기준 강화 필요성 대두</p></div>`,
      tags: ["military conflict","Black Sea","frigate damage","oil terminal attack","Ukraine-Russia"],
      link: "https://maritime-executive.com/article/ukraine-strikes-frigate-and-oil-terminal-in-massive-attack-on-novorossiysk",
      coords: [37.7693,44.6209],
      location: "Novorossiysk, Black Sea"
    },
    {
      type: "news",
      title: "Orca AI Receives ClassNK Qualification for Autonomous Ship Perception",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-06",
      image: "https://maritime-executive.com/media/images/article/unnamed-2-.7ab0db.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Orca AI의 자율항해 플랫폼이 일본 선박검사협회(ClassNK)로부터 공식 기술 인증(Technology Qualification)을 획득하여 AI 및 컴퓨터 비전 기술이 자율항해 요구사항을 충족함을 확인<br>• MTI(NYK Group 소속)가 주도하는 DFFAS+ 프로젝트의 기함인 겐부(Genbu)호가 자동항해선박 표기(Automatic Navigation Vessel Notation)와 자율선박 인증(Autonomous Vessel Certification) 획득<br>• Orca AI의 3개 SeaPod 감시장치가 고감도 RGB 및 열화상 카메라로 360도 전방향 시야를 제공하여 추월 선박 탐지, 해적 위협 감시, 및 장비 차폐 극복 가능<br>• 일본 니폰 재단의 MEGURI2040 프로그램 2단계로 51개 기업이 참여하는 상용 자율선박 운항 실현 프로젝트<br>• MTI와 Orca AI의 3년 전 일본 동해안 인근 자율항해 시범 운항 성공에 이은 두 번째 협력</p><h3>Key Quotes</h3><p>• "ClassNK's Technology Qualification is a key step in moving autonomous vessel operations from trials to practical deployment" (자율선박 운항을 시범 단계에서 실제 운영으로 전환하는 핵심 단계)<br>• "This qualification confirms that Orca AI's perception capability is a validated source of real-time perception data for autonomous navigation systems" (Orca AI의 인지 능력이 자율항해 시스템을 위한 검증된 실시간 감지 데이터 소스임을 확인)</p><h3>Technical Insights</h3><p>• **AI 비전 기술의 규제 인정**: ClassNK의 기술 인증은 AI 기반 물체 탐지 및 상황 인식 시스템이 국제 해사 규제 기준을 충족하는 검증된 기술임을 공식 인정한 것으로, 자율선박의 상용화 가속화에 중요한 이정표<br>• **360도 전방향 감시 시스템의 실용성**: 크레인, 풍력 로터돛 등 선박 구조물로 인한 시계 제약을 극복한 다중 카메라 시스템은 COLREG(해상충돌방지규칙) 준수를 위한 필수 기술이며, 해적 위협 및 추월 선박 탐지 능력 강화<br>• **일본의 해운산업 국제경쟁력 강화**: MEGURI2040 프로젝트를 통한 자율선박 기술 표준화 및 상용 배포 추진은 일본 해운산업의 국제적 주도권 확보 목표와 부합하며, 향후 해운 탈탄소화와 안전성 향상에 기여할 것으로 예상<br>• **산업 표준화 진전**: MTI와 ClassNK의 협력을 통한 체계적인 기술 검증 절차는 향후 자율선박 운항의 국제 기준 수립 및 IMO 규제 개발에 중요한 기초 자료가 될 것으로 전망</p></div>`,
      tags: ["Autonomous Ships","AI Navigation","ClassNK Certification","DFFAS+ Project"],
      link: "https://maritime-executive.com/article/orca-ai-receives-classnk-qualification-for-autonomous-ship-perception",
      coords: [139.6917,35.6895],
      location: "Japan"
    }
  ]
});

// Auto-collected: 2026-04-07
addEvents({
  "2026-04-07": [
    {
      type: "news",
      title: "Kraken Robotics Demonstrates KATFISH Autonomous Launch and Recovery from SEFINE USV",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-07",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/KATFISH-SEFINE-USV.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **KATFISH 자율 발사/회수 시스템 성공**: Kraken Robotics가 SEFINE의 RD-22 무인수상함(USV)으로부터 KATFISH 견인형 합성 개구레이더(SAR) 소나의 자율 발사 및 회수 시연 성공<br>• **고성능 센서 데이터**: KATFISH가 200m 거리에서 3cm × 3cm 해상도의 광학급 영상 데이터를 실시간으로 전송하여 광학 분류 가능<br>• **해군 방위 강화**: 해상 채광, 수중 기반시설 감시, 기뢰탐지 등 현대해전 작전에 필수적인 자율 기뢰전 대응능력 제공<br>• **모듈식 다중역할 플랫폼**: SEFINE의 다중역할 USV와 Kraken의 KATFISH/LARS 결합으로 빠르고 비용효율적인 해군 작전 지원 가능<br>• **국제군 협력**: 터키 해군, 영국 해군(Royal Navy) 포함 다수 해군 및 정부기관이 참여한 대규모 시연으로 국제 해양방위 표준화 선도<br>• **이중 플랫폼 검증**: 2025년 11월 영국 Royal Navy 11m ARCIMS USV에서도 동일 시스템 시연으로 상용화 준비 완료</p><h3>Key Quotes</h3><p>• "Recent developments underscore the importance of safeguarding critical maritime transit routes and underwater infrastructure, and autonomous mine countermeasure capabilities like KATFISH can play an important role in helping navies efficiently detect and classify mine-like objects" (최근 발전은 중요한 해상 통로와 수중 기반시설 보호의 중요성을 강조하며, KATFISH와 같은 자율 기뢰전 대응능력은 해군이 기뢰 유사 물체를 효율적으로 탐지·분류하는 데 중요한 역할을 수행할 수 있음)</p><p>• "KATFISH delivered 3 cm x 3 cm resolution data at a range of 200 meters per side which was live streamed to a command center onshore, enabling real-time classification of contacts by operators" (KATFISH는 200m 거리에서 3cm×3cm 해상도 데이터를 제공하여 육상 지휘소로 실시간 중계됨으로써 운영자의 실시간 접촉 분류 가능)</p><h3>Technical Insights</h3><p>• **자율 발사/회수(LARS) 기술의 혁신**: USV로부터의 완전 자율 KATFISH 탑재/회수 시스템은 해상 작전의 자동화 수준을 높이고 인명 손실 위험 최소화, 작전 신속성 극대화<br>• **합성개구레이더(SAR) 기술의 실용화**: 3cm 고해상도 수중 광학 이미지 생성으로 수중 기뢰, 침몰선박, 해저 케이블 등 미세한 수중 물체 탐지 가능 - 해양 인프라 방위의 패러다임 전환<br>• **IMO/COLREG 준수 자율시스템**: 다중역할 모듈식 USV 플랫폼의 국제 표준화 추진으로 각국 해군의 상호운용성(interoperability) 증대 및 국제해상법 준수 기반 마련<br>• **민간 해상산업으로의 파급 가능성**: 기뢰전 기술 외에도 해저 파이프라인 검사, 해양 에너지 시설 모니터링, 해상 환경조사 등 민간 분야 자율 로봇 플랫폼으로 확대 가능성</p></div>`,
      tags: ["autonomous systems","USV","KATFISH sonar","mine countermeasures","naval defense"],
      link: "https://www.navalnews.com/naval-news/2026/04/kraken-robotics-demonstrates-katfish-autonomous-launch-and-recovery-from-sefine-usv/",
      coords: [28.9784,41.0082],
      location: "İstanbul, Türkiye"
    },
    {
      type: "news",
      title: "New Ukrainian Armed Sea Drone Spotted Near Russian Naval Base at Novorossiysk",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-07",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나가 원격 조종 기관총 마운트가 장착된 새로운 해상 무인기를 개발·운용 중임을 확인<br>• 노보로시스크 러시아 해군기지를 향한 대규모 드론 공격에 참여한 무인표면함정(USV) 목격<br>• 러시아 정찰 채널을 통해 유포된 영상에 다수의 공격 드론 파동이 항구로 향하는 모습 포착<br>• 무인 표면함정의 무장화 및 자율 운용 능력 향상으로 해상 전역에서의 전술적 변화 시사<br>• 해양 무인기술의 군사적 활용 사례로서 국제해사법(COLREG) 준수 및 규제 체계 마련 필요성 증대</p><h3>Key Quotes</h3><p>• "A newly identified Ukrainian sea drone fitted with a remotely operated machine-gun mount was spotted during a recent strike attempt on Russia's naval base at Novorossiysk." (우크라이나의 새로운 해상 드론이 원격 조종식 기관총이 장착되어 러시아 노보로시스크 해군기지 공격에 사용됨)</p><p>• "Footage circulated by Russian reconnaissance channels appears to show the unmanned surface vessel moving as part of a larger wave of attack drones heading toward the port." (러시아 정찰 채널의 영상에 무인 표면함정이 대규모 공격 드론 파동의 일부로 항구를 향해 이동하는 모습이 나타남)</p><h3>Technical Insights</h3><p>• 무인표면함정(USV)의 무장화 추세: 기관총 등 원격 조종식 무기 탑재로 공격 능력 강화 및 전술 운용 범위 확대<br>• 자율 해상 작전의 현실화: 다수의 무인기가 조직적으로 운용되는 스웜 무인기 전술의 실전 사례로, 해양 방위 시스템 개선 필요<br>• 국제해사규칙(COLREG) 적용 한계: 군사용 무인기에 대한 명확한 규제 및 교전규칙(Rules of Engagement) 수립 필요성 제기<br>• IMO 및 국방부 협력 필요: 민간해상 안전과 군사작전 간의 경계 설정 및 국제해사법 개정 논의 촉진</p></div>`,
      tags: ["Autonomous Weapons","Naval Drones","Unmanned Surface Vessel","Ukraine-Russia Conflict"],
      link: "https://defence-blog.com/new-ukrainian-armed-sea-drone-spotted-near-russian-base/",
      coords: [37.7695,44.6209],
      location: "Novorossiysk, Russia"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-08
addEvents({
  "2026-04-08": [
    {
      type: "news",
      title: "Hapag-Lloyd Warns of Slow Return to Gulf Shipping After U.S.-Iran Ceasefire, Rising Disruption Costs",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-08",
      image: "https://gcaptain.com/wp-content/uploads/2024/10/Hapag-Lloyd-containership-800x533.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국-이란 휴전 합의에도 불구하고 호르무즈 해협을 통한 해운 정상화에는 6~8주가 소요될 것으로 예상<br>• Hapag-Lloyd CEO Rolf Habben Jansen은 중동 상황이 여전히 "매우 유동적"이며 추가 안보 보장이 필요하다고 경고<br>• 주간 경제적 손실액이 $40-50백만에서 $50-60백만으로 상향 조정되었으며, 기업은 비용을 고객에게 전가할 예정<br>• 약 1,000척의 선박이 지역 전역에 좌초 상태이며, Hapag-Lloyd 소유 6척은 총 25,000 TEU 용량 보유<br>• 덴마크 라이벌 Maersk 등 업계 전반에서 호르무즈 해협을 통한 안전한 통과 확보가 지속적 회복의 핵심이라고 강조</p><h3>Key Quotes</h3><p>• "Even if a ceasefire has now been agreed, the conflict is still severely disrupting shipping, but also supply chains" <br>(휴전이 합의되었어도 분쟁은 여전히 해운과 공급망을 심각하게 방해하고 있다)</p><p>• "the situation in the Middle East remained 'very fluid,' despite the tentative agreement, and continued to disrupt global shipping"<br>(예정된 합의에도 불구하고 중동 상황은 여전히 '유동적'이며 글로벌 해운을 계속 방해하고 있다)</p><h3>Technical Insights</h3><p>• 호르무즈 해협은 전 세계 해상 무역의 약 21%가 통과하는 전략적 병목 지점으로, 지정학적 긴장이 직접적인 경제 영향을 초래<br>• 선박 우회항로(rerouting) 및 추가 안보 조치로 인한 운영 비용 증가가 컨테이너선 운영사의 수익성을 직접 위협하는 상황<br>• IMO 해상안전 규정 준수와 함께 항로 안전성 확보가 글로벌 공급망 회복력(supply chain resilience) 강화의 핵심 요소로 대두<br>• 1,000척 이상의 선박 정체로 인한 해운 인프라 포화 및 항만 혼잡 해결에는 장기간의 운영 재조정이 불가피한 상황</p></div>`,
      tags: ["Strait of Hormuz","U.S.-Iran Ceasefire","Supply Chain Disruption","Container Shipping"],
      link: "https://gcaptain.com/hapag-lloyd-sees-slow-return-to-gulf-shipping-after-u-s-iran-ceasefire-warns-of-rising-disruption-costs/",
      coords: [56.5,25.5],
      location: "Strait of Hormuz / Persian Gulf"
    },
    {
      type: "news",
      title: "Shipowners Cautiously Await Guidance on Strait of Hormuz Transit Following US-Iran Ceasefire",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-08",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-13T132054Z_226068626_RC2B2KAV46KA_RTRMADP_3_IRAN-CRISIS-WARFARE.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국-이란 2주간 휴전 협정과 호르무즈 해협 부분 재개 선언에도 불구하고, 페르시아 만에 갇힌 선박들은 명확한 운영 지침을 기다리며 신중한 태도를 유지 중</p><p>• BIMCO 안전보안 책임자 Jakob Larsen은 조정 없이 출항하면 위험이 높아지며, 다수 선박의 동시 출항 시 충돌/좌초 위험 증가 가능성 경고</p><p>• 이란의 군부 지휘구조 손상으로 인한 오인 공격 위험 및 대함 미사일, 드론, 연안포, 기뢰 등 상당한 군사력 보유로 인한 불확실성 존속</p><p>• 군사 호위 재개는 단기간 기대 어려우며, 휴전 상황 안정화 후 고려 가능</p><p>• 선박 출항 창은 2주간으로 제한되어 있어 페르시아 만으로의 광범위한 해운 복구 가능성 낮음</p><h3>Key Quotes</h3><p>• "Ships trapped in the Persian Gulf will be interested in leaving as soon as it is safe to do so. But leaving without prior coordination with the U.S. and Iran would entail heightened risk and would not be advisable." (페르시아 만에 갇힌 선박들은 안전해질 때 출항하기를 원하지만, 미국과 이란의 사전 조정 없는 출항은 위험을 증가시킬 것이므로 권장되지 않음)</p><p>• "Iran still has significant capabilities to control shipping through the Strait," (이란은 여전히 해협을 통한 해운을 통제할 수 있는 상당한 능력을 보유하고 있음)</p><h3>Technical Insights</h3><p>• 호르무즈 해협 같은 분쟁 지역에서의 선박 운항 안전성 확보를 위해서는 관련 국가 간 사전 조정 및 명확한 운영 프로토콜 수립이 필수적이며, 이는 국제해사기구(IMO) 차원의 분쟁 지역 해운 지침 강화 필요성을 시사</p><p>• 군사력 손상으로 인한 오인공격 위험 증가 현상은 자동항법 시스템과 AIS 투명성 강화를 통한 실시간 선박 정보 공유 메커니즘의 중요성을 부각</p><p>• 제한된 출항 창(2주)으로 인한 선박 혼잡 및 항행 위험 증가 우려는 AI 기반 트래픽 관리 및 동적 경로 최적화 시스템의 도입 필요성을 강조</p><p>• 장기적 해운 안정성 확보를 위해 고위험 해역 통과 선박에 대한 실시간 모니터링, 자동 회피 시스템(COLREG 준수), 통신 중단 시 자율 의사결정 능력 강화 필요</p></div>`,
      tags: ["Strait of Hormuz","Ceasefire","Shipping Operations","Risk Management"],
      link: "https://gcaptain.com/worlds-shipowners-are-eyeing-the-exit-but-theyre-not-rushing-for-it-just-yet/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Shipowners Eye Hormuz Truce With 800 Vessels Still Trapped in Persian Gulf",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-08",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-03T202420Z_971757570_RC20XJAYJDRL_RTRMADP_3_IRAN-CRISIS-US-OIL-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국-이란 휴전협상으로 호르무즈 해협의 2주간 임시 개방 합의 - 페르시아만에 갇혀있던 800척 이상의 선박 통행 가능성 증대<br>• 지난 2월 말 미국-이스라엘 공습 이후 이란의 해협 폐쇄로 인한 전례 없는 에너지 공급 위기 초래<br>• 갇혀있는 선대 구성: 유조선 426척, LPG선 34척, LNG선 19척 등 에너지 운송선 중심<br>• 선주들과 보험사들은 상황 악화 가능성에 대비하기 위해 신중한 입장 유지 중<br>• 트럼프 대통령은 "완전하고 즉각적인 개방"을 공언했으나 이란은 "기술적 제약 내에서" 실시할 것으로 주장<br>• 업계 전문가들은 24시간 내 글로벌 해운 흐름 정상화가 불가능하며 단계적 재개를 예상</p><h3>Key Quotes</h3><p>• "You don't switch global shipping flows back on in 24 hours. Tanker owners, insurers and crews need to believe the risk has actually reduced — not just paused." <br>(글로벌 해운 흐름을 24시간 내에 다시 시작할 수 없다. 유조선 선주, 보험사, 선원들은 위험이 실제로 감소했다고 믿어야 한다 - 단순히 일시 중단된 것이 아니라)</p><p>• "Even within a two-week window, we expect activity to restart in a measured manner rather than all at once."<br>(2주 기간 내에서도 모든 활동이 일시에 재개되지 않고 단계적으로 재개될 것으로 예상된다)</p><h3>Technical Insights</h3><p>• 호르무즈 해협 폐쇄로 인한 해운 산업의 극심한 대역폭 부하 - 평시 일일 135척 통행에서 극소수 수준으로 급감하면서 글로벌 에너지 유통망 마비<br>• 선박보험 및 선원 안전 기준 강화 필요 - 휴전협상의 지속가능성에 대한 신뢰 구축이 선박 통행 재개의 핵심 조건<br>• IMO 및 국제해사기구 차원의 전쟁지역 운항 지침 개정 검토 필요 - 지정학적 분쟁 상황에서의 해상 운송로 안정성 확보 메커니즘 구축 시급</p></div>`,
      tags: ["Strait of Hormuz","US-Iran Ceasefire","Shipping Disruption","Energy Crisis"],
      link: "https://gcaptain.com/shipowners-eye-hormuz-truce-with-800-vessels-still-trapped/",
      coords: [56.1499,26.1367],
      location: "Strait of Hormuz, Persian Gulf"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-08
addEvents({
  "2026-04-08": [
    {
      type: "news",
      title: "Maersk Cautious on Strait of Hormuz Shipping Despite US-Iran Ceasefire",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-08",
      image: "https://gcaptain.com/wp-content/uploads/2023/12/maersk-navy-convoy-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미국-이란 간 2주 휴전협정 체결되었으나, 마에스크는 해운 운영 정상화에는 아직 보안 확실성 부족으로 신중한 입장 유지<br>• 2월 미국-이스라엘의 이란 공격 이후 호르무즈 해협 폐쇄로 걸프만 해운 거의 중단, 글로벌 공급망에 영향<br>• 마에스크는 걸프만 항구 화물 예약 중단, 전 세계 비상용 벙커유 할증료 도입으로 대응<br>• 해상 운송 재개 여부는 지속적인 위험 평가, 보안 상황 모니터링, 관련 기관 지침에 따라 결정 예정<br>• 현재 사우디아라비아 제다, 오만 살라라/소하르, UAE 호르파칸 등 지역 항구를 통한 '육상 연결 시스템'으로 우회 운영 중</p><h3>Key Quotes</h3><br>• "At this point, we take a cautious approach, and we are not making any changes to specific services" (현재로서는 신중한 입장을 취하고 있으며 구체적 서비스 변경을 고려하지 않고 있음)<br>• "The ceasefire may create transit opportunities, but it does not yet provide full maritime certainty" (휴전협정은 운송 기회를 제공할 수 있지만 완전한 해상 확실성을 아직 제공하지 못함)<br>• "Any decision to transit the Strait of Hormuz will be based on continuous risk assessments, close monitoring of the security situation, and available guidance from relevant authorities" (호르무즈 해협 통과 결정은 지속적인 위험 평가와 보안 상황 모니터링, 관련 기관의 지침에 기반)</p><h3>Technical Insights</h3><br>• 호르무즈 해협 폐쇄로 인한 글로벌 컨테이너 운송 차질은 IMO 및 국제 해운 업계의 해로 안전 및 자유로운 항행권에 대한 논의 촉발<br>• 마에스크의 육상 연결 시스템(Land-bridge) 도입은 지정학적 위험 회피 전략으로, 향후 자율운항선박(MASS) 도입 시 경로 선택 알고리즘에 영향 미칠 가능성<br>• 지정학적 해상 분쟁 악화 시 해양 보안 기술(AIS, 해상 감시 시스템)의 중요성 증대 및 자율운항선박의 리스크 관리 강화 필요성 대두</p></div>`,
      tags: ["Strait of Hormuz","US-Iran tensions","Container shipping","Supply chain disruption","Maritime security"],
      link: "https://gcaptain.com/maersk-cautious-on-strait-of-hormuz-shipping-despite-us-iran-ceasefire/",
      coords: [55.1,26.2],
      location: "Strait of Hormuz, Gulf of Aden"
    },
    {
      type: "news",
      title: "US–Iran Temporary Ceasefire Deal Reopens Strait of Hormuz with Conditional Access",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-08",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-07T211027Z_2026438096_RC2UJKAMYDZN_RTRMADP_3_USA-TRUMP-IRAN-CIVILIZATION.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국과 이란이 호르무즈 해협 재개에 합의한 임시 휴전 협정 체결 - 2주간 미국의 폭격 중단, 이란의 해협 통행 허용<br>• 이란은 "이란 무장군과의 조율"을 조건으로 선박 통행 허용하며, 미국은 "완전하고 즉각적이며 안전한 개방"이라고 표현해 입장 차이 존재<br>• 호르무즈 해협은 전 세계 석유 유량의 약 20% 운송하는 전략적 수로로, 이 협정은 글로벌 해운 위기의 첫 번째 외교적 돌파구<br>• 파키스탄 중재로 성사된 협정이며, 이란의 10개 항목 제안을 기반으로 한 더 광범위한 협상 틀의 첫 단계<br>• 업계 우려사항: 제한된 통행권은 전쟁 위험 보험료 상승, 해운 경로 혼란, 통행료 청구 가능성(항해당 최대 200만 달러) 등으로 해운 정상화 지연 가능</p><h3>Key Quotes</h3><p>• "The agreement enabling the 'complete, immediate, and safe opening' of the Strait of Hormuz" (호르무즈 해협의 완전하고 즉각적이며 안전한 개방을 가능하게 하는 협정)</p><p>• "Safe passage would be permitted via coordination with Iran's Armed Forces" (이란 무장군과의 조율을 통해 안전한 통행 허용) - 이는 이란의 주권적 감시와 통제 권리를 암시</p><h3>Technical Insights</h3><p>• **해협 통행의 자유 vs. 국가 주권 간 긴장**: 국제해사법(UNCLOS)에서 규정한 '해협통항권(Transit Passage)' 원칙과 이란의 조율 조건이 충돌하며, 이는 향후 국제 해운 규범 재검토로 이어질 수 있음</p><p>• **전쟁위험보험료(War Risk Premium) 장기화 우려**: 완전한 통행 자유가 복구되지 않으면 선박보험료 상승, 운송 지연, 대체 항로 사용으로 인한 운송비 증가로 글로벌 에너지 및 무역 체계에 장기적 충격 예상</p><p>• **통행료 징수 가능성의 국제법적 함의**: 호르무즈 해협에서의 통행료 청구는 국제 자유항해 원칙 위반으로 IMO, UNCLOS 체제 재정의의 선례가 될 수 있으며, 다른 전략적 해협(말라카 해협 등) 통제권 분쟁으로 확대될 위험</p></div>`,
      tags: ["Strait of Hormuz","US-Iran Relations","Shipping Crisis","Geopolitical Risk","War Risk Premium"],
      link: "https://gcaptain.com/us-iran-temporary-ceasefire-deal-reopens-hormuz-with-major-strings-attached/",
      coords: [56.14,26.57],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Shippers Seek Clarity on Hormuz Strait Reopening After US-Iran Ceasefire",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-08",
      image: "https://images.marinelink.com/images/maritime/w800/-169636.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 6주간의 미국-이란 분쟁으로 호르무즈 해협 통행이 거의 전면 중단되었으나, 휴전 이후 첫 선박들이 이란의 허가 하에 통행 개시</p><p>• 호르무즈 해협은 전 세계 원유 및 LNG 화물의 약 20%를 수송하는 주요 해상 통로로, 글로벌 에너지 가격 급등 초래</p><p>• 메르스크(Maersk), 하팍로이드(Hapag-Lloyd) 등 주요 해운사들은 휴전의 안정성 확보 전까지 신중한 입장 유지</p><p>• 호르무즈 해협 통행 정상화에는 최소 6~8주 소요 예상되며, 만재 유조선 187척(원유 및 정제유 1억7200만 배럴)이 페르시아만 내 대기 중</p><p>• 이란 해안경비대는 사전 조율 없는 통행 선박에 대해 "표적화되어 파괴될 것"이라고 경고, 해운 안전에 대한 우려 지속</p><h3>Key Quotes</h3><p>• "I want to see the fine print" (상세한 조건을 확인해야 한다) - Frontline 유조선 회사 CEO Lars Barstad가 휴전의 실제 의미를 파악해야 한다는 입장 표현</p><p>• "Vessels leaving the Gulf without prior coordination with U.S. and Iranian authorities would face heightened risk" (미국과 이란 당국과 사전 조율 없이 만을 떠나는 선박들은 높은 위험에 직면할 것) - Bimco 안전·보안 책임자 Jakob Larsen의 경고</p><p>• "We expect tankers and oil flowing to Iranian-friendly countries to be the first ones to transit" (이란 우호국으로 향하는 유조선과 석유가 가장 먼저 통행할 것으로 예상) - Oil Brokerage 해운 연구 글로벌 책임자 Anoop Singh의 분석</p><h3>Technical Insights</h3><p>• 호르무즈 해협의 재개통으로 인해 VLCC(초대형 유조선) 50척 이상과 수에즈맥스 약 15척이 페르시아만을 빠져나갈 것으로 예상되며, 이는 국제 해운 물류 정상화의 주요 지표</p><p>• IMO 사무총장의 성명에서 선원의 건강과 복지, 전 지구적 해운산업의 안정이 강조되었으나, 현재 불명확한 통행 규칙으로 인해 해상 안전 체계의 개선 필요성 대두</p><p>• 미국-이란 당국과의 사전 조율 체계 미흡으로 인한 선박 안전 위험이 증대되었으며, 국제 해운 규정 및 해상 교통관리 체계의 국제적 합의 강화 필요</p><p>• 아시아 정제소 및 주요 에너지 기업의 페르시아만 화물 로딩 관심 증가는 글로벌 에너지 공급망 정상화의 긍정적 신호이나, 완전한 신뢰 회복까지 상당한 시간 소요 예상</p></div>`,
      tags: ["Strait of Hormuz","US-Iran Ceasefire","Shipping Operations","Oil Tankers"],
      link: "https://www.marinelink.com/news/shippers-look-clarity-reopening-hormuz-537821",
      coords: [56.2436,26.1551],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-09
addEvents({
  "2026-04-09": [
    {
      type: "news",
      title: "MOL Awaits Safety Clarity Before Resuming Hormuz Transits Amid Ceasefire",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-09",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-03-18T015145Z_1422060315_RC2JTDA5DB09_RTRMADP_3_MITSUI-OSK-ELLIOTT-STAKE-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본 해운사 모루(MOL)는 호르무즈 해협 통과 재개 전에 일본 정부의 공식 지침과 명확한 안전 보장을 기다리고 있음<br>• 신임 CEO 타무라 조타로는 휴전협정에도 불구하고 남아있는 보안 위험으로 인해 신중한 입장을 유지 중<br>• 호르무즈 해협은 전 세계 석유 소비량의 약 20%가 통과하는 전략적 수로이며, 해운 활동 심각한 차질<br>• MOL 산하 3척의 유조선(LNG선, LPG선 2척)이 지난주 통과했으나 다수 선박은 여전히 만에서 안전 통과 대기 중<br>• 분쟁 장기화 시 원자재 부족으로 제조업 활동 및 화물량 감소 가능성 경고<br>• 장기적으로 기업들의 공급망 재검토와 비용 효율성보다 회복력 중시로 해운 부문 이득 전망</p><h3>Key Quotes</h3><p>• "It's not yet clear how this ceasefire will be implemented in the relevant waters. It must be confirmed that the safety risks are sufficiently low." (휴전협정이 해당 수역에서 어떻게 이행될지 불명확하며, 안전 위험이 충분히 낮다는 것을 확인해야 함)</p><p>• "We are awaiting guidance from the Japanese government." (일본 정부의 지침을 기다리고 있음)</p><p>• "If the conflict drags on, raw material shortages could affect manufacturing activity and reduce cargo volumes." (분쟁이 장기화되면 원자재 부족으로 제조업 활동 및 화물량 감소 가능)</p><h3>Technical Insights</h3><p>• 호르무즈 해협의 지정학적 불안정성은 국제 해운 산업의 주요 운영 위험 요소로 작용하고 있으며, 보험료 및 운임 상승 초래<br>• 전략적 수로의 자유로운 통행권 보장과 국가 보안 우려 사이의 국제해사기구(IMO) 차원의 조정 필요성 대두<br>• 분쟁 지역 통항 시 선박 운영사들의 리스크 관리 강화 추세로, 정부 협조 및 공식 안내 체계의 중요성 증대<br>• 해운 업계의 공급망 회복력 우선화 움직임으로 인한 항로 다변화 및 운송 패턴 변화 예상</p></div>`,
      tags: ["Strait of Hormuz","Mitsui O.S.K. Lines","Shipping Safety","Geopolitical Risk"],
      link: "https://gcaptain.com/mol-awaits-safety-clarity-before-resuming-hormuz-transits-ceo-says/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Chinese Tankers Test Hormuz Strait Transit Under New US-Iran Ceasefire",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-09",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-14T094416Z_1022904802_RC2B2KAH6LD2_RTRMADP_3_IRAN-CRISIS-INDIA-SAILORS.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국-이란 휴전 협정(1일 경과)에 따라 중국 국영 COSCO 선사의 초대형유조선(VLCC) 2척과 추가 1척이 호르무즈 해협 출입을 위해 대기 중<br>• 호르무즈 해협 입구 UAE 해역에 중국 유조선 3척, 사우디 1척, 인도 유조선 2척 등 선박 수십 척이 수주 동안 갇혀있다가 탈출 시도<br>• 이라크산 및 사우디산 원유를 적재한 중국 유조선들이 이란의 승인 항해 신호를 띄우며 안전 통과 의도 표시<br>• 일본 MOL(Mitsui OSK Lines) 등 주요 해운사들은 세부 사항 불명확으로 인해 "지속 가능한 안정성" 확인 전까지 통과 연기<br>• 이란은 여전히 호르무즈 해협 통과에 테헤란 허가 필수, 라락 섬 우회 지정항로 운영 요구</p><h3>Key Quotes</h3><p>• "How it is implemented in the water, that is something we really need to understand" (실제 해상에서 어떻게 시행될지 우리가 정확히 이해해야 한다) - Jotaro Tamura, Mitsui OSK Lines President</p><p>• "Iran warned vessels on Wednesday in radio transmissions that transits still required permission from Tehran" (이란은 수요일 무선 통신으로 호르무즈 해협 통과에 테헤란 허가가 필수임을 경고)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 통과 규정의 불확실성**: 미국-이란 휴전 이후에도 이란이 지정항로(라락 섬 우회) 강제 및 사전 허가 요구로 국제 해운법(SOLAS, COLREG)과의 충돌 가능성 → 국제해사기구(IMO) 차원의 통로 표준화 필요</p><p>• **지정학적 리스크와 선사의 보험·운항 리스크 증가**: 휴전 지속성 불확실로 선주들이 보험료 인상, 통과 지연 초래 → 글로벌 유류 수급 및 운임에 미치는 간접 영향 확대</p><p>• **선박 추적 시스템(AIS)의 이중성**: 중국 선박들이 이란 승인 신호를 송출하는 관행은 안전성 강화 vs. 국제 해상교통 투명성 저하 간 딜레마 반영 → 자율운항선박 도입 시 지정학적 갈등 지역 통과 프로토콜 사전 구축 필수</p></div>`,
      tags: ["Hormuz Strait","Tanker Operations","US-Iran Ceasefire","Shipping Routes","Geopolitical Risk"],
      link: "https://gcaptain.com/china-tankers-join-line-to-test-hormuz-exit-and-iran-truce/",
      coords: [56.2439,26.1551],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Strait of Hormuz Reopening Negotiations: UK-US Discuss Restoration Plan Amid Iran Ceasefire",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-09",
      image: "https://images.marinelink.com/images/maritime/w800/source-windward-169695.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 총리 키르 스타머와 미국 대통령 도널드 트럼프는 이란과의 휴전 이후 호르무즈 해협의 해운 재개를 위한 실질적 계획 수립의 필요성을 논의했다.<br>• 호르무즈 해협 폐쇄로 인해 현재 약 3,200척의 선박이 해협 서쪽에 좌초되어 있으며, 이 중 약 800척은 유조선과 화물선이다.<br>• 트럼프 대통령은 이란이 호르무즈 해협을 통과하는 유조선에 통행료를 부과하려는 시도에 강력히 반대하며 "지금 중단하라"고 경고했다.<br>• 휴전에도 불구하고 해협의 통행량은 정상의 10% 이하에 머물러 있으며, 이란이 자신의 영해 내 항행을 제한함으로써 통제권 유지를 시도하고 있다.<br>• 호르무즈 해협은 전 세계 석유 및 액화천연가스 해운의 약 20%를 담당하는 중요한 병목 지점으로, 이 분쟁의 장기화는 글로벌 에너지 시장에 심각한 영향을 미칠 수 있다.<br>• Windward 보안회사 데이터에 따르면 해운 흐름이 오만과 아랍에미리트 동쪽 항구로 우회되고 있으나 정상적인 흐름으로 복구되지 않은 상태이다.</p><h3>Key Quotes</h3><p>• "They agreed that now there is a ceasefire in place and agreement to open the Strait, we are at the next stage of finding a resolution" (휴전이 체결되고 해협 개방에 합의한 지금, 우리는 해결책을 찾는 다음 단계에 있다는 점에 동의했다)</p><p>• "There are reports that Iran is charging fees to tankers going through the Hormuz Strait. They better not be and, if they are, they better stop now." (이란이 호르무즈 해협을 통과하는 유조선에 수수료를 부과하고 있다는 보도가 있다. 그래서는 안 되며, 만약 하고 있다면 지금 바로 중단해야 한다)</p><p>• "Ship traffic through the strait stood at well below 10% of normal volumes on Thursday despite the fragile ceasefire" (취약한 휴전에도 불구하고 해협을 통한 선박 통행량은 목요일 정상의 10% 이하에 머물러 있다)</p><h3>Technical Insights</h3><p>• **국제 항행의 자유(Freedom of Navigation) 원칙**: 호르무즈 해협은 UNCLOS(유엔해양법협약)에 따른 국제 통항권이 인정되는 해협으로, 이란의 통행료 부과 시도는 국제해법 위반이며 IMO와 해양 커뮤니티의 강한 반발을 초래할 것으로 예상된다.</p><p>• **지정학적 위험과 해운 산업의 회복력(Resilience)**: 호르무즈 해협 폐쇄로 인한 3,200척 규모의 선박 체선은 전 세계 해운 네트워크의 취약성을 드러내며, 대체 항로(우회)의 활용으로 인한 운항거리 증가는 선사의 연료비 및 운영비 상승을 의미한다.</p><p>• **에너지 안보와 국제 협력의 필요성**: 호르무즈 해협은 전 세계 석유·LNG 거래량의 20%를 담당하는 전략적 병목으로, 장기간의 통행 제한은 국제유가 변동성 증가 및 글로벌 에너지 시장 혼란을 야기하므로 다자간 외교협력을 통한 신속한 해결이 해운 산업 안정성 확보의 필수 요건이다.</p><p>• **암호화폐 기반 수수료 징수의 해운업 영향**: 이란의 암호화폐 기반 통행료 징수 계획은 국제 표준 결</p></div>`,
      tags: ["Strait of Hormuz","Shipping Disruption","Iran Ceasefire","Freedom of Navigation","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/starmer-trump-discuss-opening-strait-537898",
      coords: [56.2432,26.1367],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Hormuz Strait Traffic Severely Disrupted by Iran-U.S. Ceasefire and Iranian Territorial Control Assertions",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-09",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockarif-169684.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협을 통한 선박 통행량이 정상의 10% 미만으로 급감했으며, 2월 28일 시작된 이란-미국 분쟁으로 인해 약 100여 척의 유조선과 화물선이 페르시만 내부에 갇혀 있는 상황<br>• 글로벌 석유 공급량이 20% 감소하면서 역사상 최대 규모의 공급 차질이 발생했으며, 일부 유종의 가격이 사상 최고치를 기록<br>• 이란 이슬람혁명수비대(IRGC)가 라락 섬 북쪽을 통한 우회 항로 사용을 지시하고 있으며, 해협 통행에 대한 암호화폐 톨 부과 가능성 제기<br>• 국제해사기구(IMO)는 국제 해협에 대한 톨 부과의 국제법적 근거가 없다고 명확히 거부<br>• 영국 해양보안회사 Ambrey는 이스라엘 및 미국 관련 선박에 대한 위험이 지속되고 있으며, 사전 승인을 받은 선박도 수송 중 되돌려 보내진 사례가 있다고 경고</p><h3>Key Quotes</h3><p>• "Most shipping lines are likely to remain cautious, and two weeks will not be enough to clear the backlog even if there is a marked increase in traffic" (해운사들이 신중한 태도를 유지할 가능성이 높으며, 비록 통행량이 증가하더라도 2주일로는 적체된 선박들을 완전히 처리하기 불충분하다는 의미)</p><p>• "Any such toll will set a dangerous precedent" (이런 형태의 톨 부과는 위험한 선례를 만들 것이라는 국제해사기구의 강한 우려)</p><p>• "Even shipping with apparent approval has been turned back in recent weeks mid-transit" (사전 승인을 받은 선박도 최근 몇 주일 동안 통행 중 되돌려 보내진 사례가 있음을 지적)</p><h3>Technical Insights</h3><p>• **국제 해협의 해사법적 지위**: 호르무즈 해협은 국제해협(International Strait)으로 지정된 해역이며, UNCLOS(유엔해양법협약)에 따라 과도통행권(Transit Passage) 행사가 보장되어 있으므로 일방적인 톨 부과는 국제법 위반에 해당</p><p>• **IMO의 규제 한계와 현실적 위협**: IMO가 명확한 국제 규정을 제시했음에도 불구하고 실제 해역에서의 강제력 집행이 불가능하며, 이란의 지리적 우위를 활용한 현실적 압박 수단(광산 위협, 암호화폐 톨 등)이 해운사들에게 심각한 위험 요소로 작용</p><p>• **선박 운항 경로의 강제 변경**: IRGC의 라락 섬 우회 항로 강제는 통상적 해로 변경을 강요하는 행위로, 선박의 안전항해 원칙과 국제항해자유도 원칙에 위배되며 해사 보험 및 운송 비용 증가로 이어지는 산업적 파급 효과 초래</p><p>• **암호화폐 결제 요구의 국제 규범 위반**: 국제 해상 통행료를 암호화폐로 요구하는 것은 IMO와 국제사회의 통제를 회피하려는 의도로 해석되며, 해운 산업의 투명성과 감시 체계를 훼손하는 위협 요소</p></div>`,
      tags: ["Strait of Hormuz","Iran-U.S. Conflict","Shipping Disruption","Oil Supply Crisis"],
      link: "https://www.marinelink.com/news/hormuz-shipping-traffic-remains-below-537884",
      coords: [56.25,26.57],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Turkish and Italian Companies Team Up for Hybrid Unmanned Surface Vessel Production",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-09",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/IMG_5221.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **터키-이탈리아 협력 확대**: Piloda Shipyard(이탈리아), Havelsan, VN Maritime Technologies가 무인 및 하이브리드 표면선박 플랫폼 개발을 위한 전략적 협력 계약 체결</p><p>• **이탈리아 해양경찰청 납입**: 이미 2025년 유럽해안경비대(Guardia di Finanza)를 위한 15m 함정 40척(€159.2백만) 공동 생산 계약 이행 중이며, 새로운 계약으로 무인/하이브리드 플랫폼으로 확대</p><p>• **하이브리드 운영 개념**: 구조 수정 없이 유인(manned), 무인(unmanned), 혼합(mixed-mode) 운영 모드 간 즉시 전환 가능한 다목적 함정 설계</p><p>• **혁신적 선체 기술**: 아이슬란드 Rafnar社의 특허 ÖK Hull 기술 적용으로 기존 V형 선체 대비 슬래밍 충격 95% 감소, 유지보수 비용 절감 및 센서 안정성 향상</p><p>• **규제 공백 해결**: 완전 자율운항선박 국제기준 부재 상황에서 하이브리드 설계로 즉시 운영 배치 가능하며, 필요시 승무원 탑승 옵션 제공</p><p>• **국제 시연**: Seafuture 2025 전시회(이탈리아 라스페지아 해군기지)에서 작동형 프로토타입 공개 및 기관 위임대 테스트 완료</p><h3>Key Quotes</h3><p>• "The platforms will be manufactured at Piloda and VN Maritime facilities, with operational sites in Naples, Brindisi and Torre Annunziata." <br>(선박은 Piloda와 VN Maritime 시설에서 제조되며, 나폴리, 브린디시, 토레 안눈지아타에 운영 기지 구축)</p><p>• "A hybrid unit capable of operating manned, unmanned or in mixed mode, requiring no structural modifications to switch between configurations."<br>(구조적 수정 없이 유인, 무인, 혼합 운영 간 전환 가능한 하이브리드 함정)</p><p>• "The hull is designed to reduce slamming impact by up to 95% compared to conventional V-hull forms."<br>(종래 V형 선체 대비 슬래밍 영향을 최대 95% 감소시키도록 설계됨)</p><h3>Technical Insights</h3><p>• **자율운항 규제 공백 활용**: IMO 자율운항선박(MASS) 국제기준 미확립 상황에서 하이브리드 모드가 현실적 대안으로 부상하며, 기술 검증 후 규제 진화 대응 가능한 전략적 설계</p><p>• **선체 안정성의 센서 성능 영향**: ÖK Hull의 슬래밍 감소가 수중 센서의 지속적 잠수 상태 유지와 광학 감시 시스템의 정확도 향상을 직접 지원하는 기술적 시너지</p><p>• **다목적 운용 개념의 확장**: 감시(Surveillance), 조정 군집(Coordinated Swarm), 순찰, 해상 구조, 수송, 승선 활동 등 전술 스펙트럼 전역 운영 가능으로 해양경찰 자산 효율성 극대화</p><p>• **산업 협력의 지정학적 의의**: 터키-이탈리아 유럽방위산업 협력 강화 및 지중해 해양보안 역량 통합, NATO 동맹국의 자율운항 기술 표준화 선도 가능성 시사</p></div>`,
      tags: ["Autonomous Ships","Hybrid Vessels","Italian Coast Guard","Unmanned Surface Vessels","Naval Innovation"],
      link: "https://www.navalnews.com/naval-news/2026/04/turkish-and-italian-companies-team-up-for-surface-platforms-production/",
      coords: [14.2681,40.8518],
      location: "Naples, Italy"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-10
addEvents({
  "2026-04-10": [
    {
      type: "accident",
      title: "Hormuz Strait Blockade Continues Amid Lebanon Ceasefire Tensions",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-10",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/Iran-hormuz-map.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **호르무즈 해협 봉쇄 지속**: 이란이 호르무즈 해협 통항을 계속 차단하고 있으며, 지뢰 위험을 이유로 기존 항로 대신 라락 섬 근처 우회 항로를 사용하도록 지시하고 있음</p><p>• **글로벌 에너지 공급 최대 차질**: 이 봉쇄로 인해 역사상 최대 규모의 글로벌 에너지 공급 차질이 발생하고 있으며, 트럼프 대통령이 "합의 위반"이라고 강력히 비판</p><p>• **휴전협정 관련 갈등**: 2일된 미국-이란 휴전협정에도 불구하고 해협 봉쇄는 계속되고 있으며, 이스라엘의 레바논 헤즈볼라 공격으로 인해 이란과 미국이 상호 협정 위반을 주장</p><p>• **이슬라마바드 평화회담 예정**: 파키스탄 중재 하에 미국 부통령 JD 밴스와 이란 국회의장 모하마드 바께르 칼리바프가 이슬라마바드의 세레나 호텔에서 4월 12일부터 첫 평화회담 개최 예정</p><p>• **선박 격리 심화**: 이란의 자국 선박만 해협 통항이 허용되고 있으며, 다른 국가의 선박들은 해협 내에서 계속 격리된 상태</p><h3>Key Quotes</h3><p>• "Iran was doing a 'very poor job' of allowing oil to go through the strait. That is not the agreement we have!" (이란이 석유 통항을 허용하지 않고 있다며 트럼프 대통령의 강한 불만 표출)</p><p>• "Everything is on track. It has de-escalated. Good sign." (파키스탄 중재자의 평가로, 평화회담 진행이 순조롭고 폭력 상황이 완화되었다는 입장)</p><h3>Technical Insights</h3><p>• **국제 해상 통행의 자유와 항로 봉쇄**: 호르무즈 해협은 글로벌 석유 공급의 약 21%가 통과하는 전략적 해상 통로이며, 지뢰 위협과 선택적 통항 제한은 국제 해상법(UNCLOS) 및 해양 보안 규약 위반에 해당할 수 있음</p><p>• **에너지 시장과 글로벌 인플레이션 영향**: 호르무즈 해협 봉쇄는 유가 급등을 유발하며, 미국 인플레이션 통계에 직접적인 영향을 미치는 전략적 경제 무기로 작용</p><p>• **자율항해 및 해상 로봇 시스템의 필요성**: 분쟁 해역의 통행 위험 증가로 인해 원격 조종 선박, 자율 항해 기술, AI 기반 실시간 위험 회피 시스템의 도입 필요성이 대두되고 있음</p></div>`,
      tags: ["Hormuz Strait","Blockade","Iran","Israel","Energy Security","Ceasefire"],
      link: "https://gcaptain.com/hormuz-strait-remains-shut-as-lebanon-fighting-strains-truce/",
      coords: [56.5,26.5],
      location: "Hormuz Strait"
    },
    {
      type: "accident",
      title: "Oil Spill Shuts Key Access to Antwerp Port, Cleanup Under Way",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-10",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-10T071356Z_2054090774_RC2RWM5Z6Z2W_RTRMADP_3_BELGIUM-PORT-ACCIDENT-OIL-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **사건 개요**: 벨기에 앤트워프-브루게스 항만의 도이르강크독에서 벙커링 작업 중 발생한 유출사고로 인해 쉘드 강 구간이 폐쇄되었으며, 유럽 최대급 항만의 운영이 차질을 빚음</p><p>• **영향 범위**: 도이르강크독에서 쉘드 강으로 유출된 유류가 야간에 확산되어 부이 80 근처부터 독 입구까지 선박 통행이 전면 중단되고, 잔드블릿 및 베렌드레흐트 갑문 폐쇄로 심해 해운 접근 불가</p><p>• **대응 현황**: 항만 당국이 항만사 협조 하에 운영 조정 계획을 발동했으며, 전문 팀이 유류 회수용 부스 및 스키머를 배치하여 정화 작업 진행 중</p><p>• **환경 우려사항**: 영향을 받은 쉘드 강 구간이 간척지 및 조류 서식지 등 생태계 민감 지역과 인접하여 자연보호지역 위협 가능성 높음</p><p>• **공급망 영향**: 펫로케미컬 및 컨테이너 운송의 유럽 주요 거점인 앤트워프 항만의 장기 폐쇄 시 지역 공급망 전반에 연쇄 영향 예상</p><p>• **관련 선박**: 유로파터미널 선박, 갈겐슈어 자연보호지역 인근 내륙 바지선, 최소 1척의 예인선 등이 직접 영향을 받음</p><p>---</p><h3>Key Quotes</h3><p>• "As a result, the port is currently not accessible via the Scheldt" (쉘드 강을 통한 항만 접근 현재 불가능)</p><p>• "We regret the impact of this incident on our port and the vulnerable nature areas along the Scheldt" (쉘드 강 인접 생태 민감 지역에 미친 사건의 영향을 유감스럽게 생각함)</p><p>• "protecting the environment remained an absolute priority" (환경 보호가 절대적 우선순위로 남아 있음)</p><p>---</p><h3>Technical Insights</h3><p>• **벙커링 작업 안전 규정**: 유류 공급 작업 중 누출 방지를 위한 이중 격벽(double-wall containment) 및 실시간 모니터링 체계 강화 필요성 대두</p><p>• **항만 위기 대응 체계**: 항만 당국의 신속한 조정 계획 발동 및 전문 오염 제거 장비 배치가 환경 피해 최소화에 필수적이며, IMO 해양 오염 방지 규약(MARPOL) 준수 강화 필요</p><p>• **해상 교통 관제 운영**: 주요 항만 폐쇄 시 내륙 수로 및 심해 해운 동시 차단으로 인한 광역 교통 마비 방지를 위해 대체 항로 사전 계획 및 선박 교통 분산 시스템 구축 필요</p><p>• **생태 환경 영향 평가**: 유류 유출 사고의 생태계 영향 최소화를 위해 민감 지역 주변의 선박 운항 속도 제한, 강화된 환경 감시 및 사전 예방 조치 강화 필요</p></div>`,
      tags: ["Oil Spill","Port Closure","Bunkering Operation","Environmental Damage"],
      link: "https://gcaptain.com/oil-spill-shuts-key-access-to-antwerp-port-cleanup-under-way/",
      coords: [4.3517,51.3397],
      location: "Antwerp Port, Belgium"
    },
    {
      type: "accident",
      title: "Pakistan Navy Evacuates 18 Crew Members from Merchant Ship GOLD AUTUMN",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-10",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stock-169718.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 파키스탄 해군이 북아라비아해 운항 중인 상선 GOLD AUTUMN의 조난 신호에 응응하여 18명의 승무원을 구조 및 대피<br>• 구조된 승무원은 중국, 방글라데시, 미얀마, 베트남, 인도네시아 국적으로 구성된 국제 선원 팀<br>• 모든 승무원이 카라치로 안전하게 수송되어 의료 처치 및 본국 송환 실시<br>• 파키스탄 군부 성명을 통해 해상 안전 및 국제 구조 협력의 중요성 입증</p><h3>Key Quotes</h3><br>• "Pakistan said its navy had rescued and evacuated 18 crew members of a merchant vessel operating in the North Arabian sea after a distress call" (파키스탄 해군이 북아라비아해에서 운항 중인 상선의 조난 신호에 응응하여 18명의 승무원을 구조 및 대피)<br>• "The rescued crew members of the vessel, GOLD AUTUMN, who included nationals of China, Bangladesh, Myanmar, Vietnam and Indonesia, were safely transported to Karachi for medical care and repatriation" (GOLD AUTUMN의 구조된 승무원들은 중국, 방글라데시, 미얀마, 베트남, 인도네시아 국적으로 카라치로 안전하게 수송되어 의료 처치 및 본국 송환)</p><h3>Technical Insights</h3><br>• 북아라비아해의 해상 교통로에서의 조난 사건은 국제 선원의 안전성 확보와 다국적 승무원 구조의 필요성을 재확인<br>• 해양 사고 대응 시 신속한 구조 활동 및 의료 지원 체계의 중요성으로, IMO의 해상안전규칙(SOLAS) 준수의 실질적 가치 입증<br>• 국제 해역에서의 해상 안전 사건 처리 시 지역 해군의 역할과 국제 협력의 모범 사례로 평가 가능</p></div>`,
      tags: ["maritime rescue","distress call","merchant vessel","North Arabian Sea"],
      link: "https://www.marinelink.com/news/pakistan-navy-evacuates-merchant-ship-537934",
      coords: [66.2,25.2],
      location: "North Arabian Sea"
    },
    {
      type: "accident",
      title: "Oil Spill Forces Partial Shipping Halt at Port of Antwerp",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-10",
      image: "https://images.marinelink.com/images/maritime/w800/illustration-credit-169705.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 벨기에 앤트워프항의 벙커링 작업 중 유류 유출 사고 발생으로 부분적 해운 중단<br>• 유류 유출이 도어간크독(Deurganckdock)에서 발생하여 셀트강으로 확산된 상황<br>• 현장 유출원은 차단 및 격리되었으나, 이미 강으로 오염이 확산된 상태<br>• 앤트워프항은 일일 60~80척의 선박을 처리하는 주요 항만으로 영향 규모 상당<br>• 유럽 2위 항만의 부분 운영 중단으로 유럽 해운 물동량에 직접적 영향 예상</p><h3>Key Quotes</h3><p>• "An oil spill occurred during a bunkering operation in the Deurganckdock. The source of the spill has since been stopped and contained" (벙커링 작업 중 유류 유출이 발생했으며, 유출원은 현재 차단되고 격리된 상태)</p><p>• "Antwerp port is part of the Port of Antwerp-Bruges, the second-largest port in Europe by cargo tonnage, behind Rotterdam" (앤트워프항은 로테르담 다음으로 유럽에서 두 번째로 큰 화물 처리 항만)</p><h3>Technical Insights</h3><p>• 벙커링 작업 중 유류 유출은 해상 오염방지규칙(MARPOL) 위반으로 국제해사기구(IMO) 환경규제 강화의 핵심 대상<br>• 항만 내 유류 유출 사고는 선박 안전관리 및 항만 운영 시설 점검의 미흡함을 시사하며, 향후 더 엄격한 안전 프로토콜 도입 필요<br>• 유럽 주요 환적항의 부분 운영 중단은 글로벌 해운망의 연쇄적 지연을 야기할 수 있으며, 자동화된 항만 관리 및 실시간 오염 모니터링 시스템 도입의 중요성 부각</p></div>`,
      tags: ["Oil Spill","Port of Antwerp","Bunkering Operation","Environmental Pollution"],
      link: "https://www.marinelink.com/news/oil-spill-forces-partial-shipping-halt-537912",
      coords: [4.4,51.3],
      location: "Port of Antwerp, Belgium (Scheldt River)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-10
addEvents({
  "2026-04-10": [
    {
      type: "news",
      title: "Philippine Navy Develops Autonomous Logistics Drones and Maritime Surface Ships",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-10",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/IMG_2979.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 필리핀 해군이 자율항해 해상선박(MASS)과 하이브리드 해상항공 무인기(HMAV) 개발 프로토타입을 세부공과대학과 협력하여 추진 중</p><p>• 해군 해상시스템사령부(NSSC)와 해양연구기술개발센터가 2026년 3월 26일 정식 양해각서 체결 완료</p><p>• HMAV는 최대 12명 탑승, 600해리 항속거리를 목표로 재난대응 및 도서간 수송을 지원할 예정</p><p>• MASS는 환경친화적 자율선박으로 그린 해양기술 구현을 목표로 2023년부터 개발 진행 중</p><p>• 과학기술정보통신부 산하 산업에너지신기술연구개발위원회 지원으로 2026년 완료 목표</p><p>• 자율시스템 운용은 필리핀 국방자립화 정책(SRDP)의 핵심 우선사항이며 기술 이전 및 인력 양성도 병행 예정</p><h3>Key Quotes</h3><p>• "These platforms are expected to support rapid and efficient inter-island transport, logistics and disaster preparedness operations of the Navy. Both projects are targeted for completion this year" (이러한 플랫폼들은 해군의 신속하고 효율적인 도서간 수송, 물류 및 재난대비 작전을 지원할 것으로 예상되며 두 프로젝트 모두 올해 완료 목표)</p><p>• "These initiatives are designed to address the nation's mobility challenges through cutting-edge, environmentally responsible technologies that will serve both national security and civilian needs" (이러한 계획들은 국방안보와 민간수요를 모두 충족시키는 첨단 환경친화 기술을 통해 국가의 이동성 문제를 해결하기 위해 설계됨)</p><h3>Technical Insights</h3><p>• MASS 개발은 IMO 자율선박 규제 체계(MASS Code) 대응 및 국제 해양안전 기준 충족을 고려한 설계 필요 - 필리핀의 도서해역 특성상 원격조종 및 자율항해 기술 통합 과정에서 해상교통안전법(COLREG) 준수 중요</p><p>• 필리핀 해군의 자율시스템 개발은 국방자립화(SRDP) 정책과 연동되어 미국산 무인시스템 도입에서 벗어나 자체 기술 역량 구축 추진 - 동남아시아 지역 방위산업 생태계 발전에 선례 제시 가능</p><p>• HMAV와 MASS 프로토타입 완성 후 시스템 통합 및 성능평가, 해군 인력 기술교육까지 대학이 담당하여 기술 자주화 및 운영 인력 양성의 실질적 기반 구축</p><p>• 현재 자금 부족이 주요 제약 요소이나 2024년 10월 발효된 국방자립화법(SRDP Revitalization Act)에 의해 재정 지원 확대 전망 - 향후 동남아 지역 자율선박 시장의 거점 역할 가능성</p></div>`,
      tags: ["autonomous vessels","MASS","Philippines","maritime technology","defense innovation"],
      link: "https://www.navalnews.com/naval-news/2026/04/philippine-navy-develops-prototypes-of-autonomous-logistics-drones/",
      coords: [123.8854,10.3157],
      location: "Cebu City, Philippines"
    }
  ]
});

// Auto-collected: 2026-04-09
addEvents({
  "2026-04-09": [
    {
      type: "news",
      title: "SEA to Provide Acoustic Underwater Monitoring for OSHEN's Autonomous Sensing Network",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-09",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/OSHEN-USV.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• SEA(Cohort plc Group의 자회사)가 해양 자율화 전문기업 OSHEN에 수중 음향 모니터링 기술 제공 - ZeroUSV 주도 프로젝트의 일환으로 자율 수중 음향 센싱 네트워크 개발 추진</p><p>• 프로젝트 참여 기관: ZeroUSV(리더), OSHEN, MarineAI, MSubs, 영국 Defence Innovation(DASA), Defence Science and Technology Laboratory(Dstl) 등 다국적 협력 체계</p><p>• OSHEN의 C-STARS 무인 수상 플랫폼에 SEA 하이드로폰 통합 - 저전력 음향 감지 및 수중 자산과의 통신 신호 모니터링 능력 제공</p><p>• 기술 활용 범위: 해양 정보감시정찰(ISR), 대잠전(ASW) 작전, 광역 수중 감시, KraitSense 등 고급 처리 기술 포함</p><p>• 운영 거점: Plymouth의 Turnchapel Wharf - 영국 국립 해양 자율화 센터로 지정되었으며, 북데본 Barnstaple의 SEA 제조시설과 협력</p><p>• 프로젝트 의의: 분산형, 자율화된 소형 저비용 센서 네트워크 배치의 새로운 방식 시연으로 다국적 해군의 감시 및 ASW 전술 혁신 추진</p><h3>Key Quotes</h3><p>• "Autonomous systems are reshaping how navies think about surveillance, anti-submarine warfare and communications. By integrating SEA hydrophones into OSHEN's C-STARS platforms, this exciting project aims to demonstrate a novel approach to the deployment of scalable, affordable, low-signature sensor and communication networks." <br>(자율 시스템이 해군의 감시, 대잠전, 통신 개념을 근본적으로 변화시키고 있으며, SEA의 하이드로폰을 C-STARS 플랫폼에 통합함으로써 확장 가능하고 저비용의 저신호 센서 및 통신 네트워크 배치의 새로운 방식을 시연할 수 있다)</p><p>• "To deliver wide-area monitoring, robust and reliable performance is key. C-STARS was designed for long-endurance missions in extreme operating environments. By integrating SEA's proven acoustic sensors on to the platform, we can enhance underwater situational awareness in a scalable and cost-effective way."<br>(광역 모니터링을 위해서는 견고하고 신뢰성 있는 성능이 핵심이며, C-STARS는 극한 환경의 장시간 작전용으로 설계되었으며, SEA의 검증된 음향 센서 통합을 통해 확장 가능하고 비용 효율적인 수중 상황 인식 능력 강화 가능)</p><h3>Technical Insights</h3><p>• **자율 수중 음향 센싱 네트워크의 전술적 혁신** - 분산형 소형 무인 수상선(C-STARS)을 모선(Oceanus12)에서 배치하여 광역 수중 감시 네트워크를 구성하는 새로운 감시 개념으로, 종래의 함정 기반 고정 센서 배치 방식의 제약 극복</p><p>• **저신호(Low-Signature) 센서 아키텍처의 적용** - 음향 하이드로폰의 저전력 작동 특성과 무인 플랫폼의 소형화를 결합하여 적 탐지 회피력 향상 및 운영 지속성(endurance) 증대로 대잠전(ASW) 효율성 제고</p><p>• **IMO/COLREG 자율 선박 규제와의 연계 가능성** - 수중 음향 통신 기술이 자율 선박의 안전한 항해, 충돌 회피, 수중 장애물 감지 등 지속적인 기술 발전과 국제 규제 체계 수립의 기초 역할 가능</p><p>• **민군 겸용(Dual-use) 기술의 산업 확대** - 방위 분야의 고급 음향 센싱 기술이 해양 환경 모니터링, 해양생물 추적, 해상 교통 안전 등 민간 해운업</p></div>`,
      tags: ["autonomous systems","underwater monitoring","hydrophones","USV","acoustic sensing","defense technology"],
      link: "https://www.navalnews.com/naval-news/2026/04/sea-to-provide-oshen-with-acoustic-underwater-monitoring-capability-for-autonomous-sensing-network/",
      coords: [-4.1393,50.3755],
      location: "Plymouth, UK"
    },
    {
      type: "news",
      title: "Russia's Black Sea Fleet Crisis: Novorossiysk Base Under Threat from Ukrainian Drones",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-09",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/Ukrainian-threats-to-Russian-Navy-in-Novorossiysk.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **우크라이나의 무인 수상함정(USV) 및 드론 위협**: 4월 5일 우크라이나 장거리 타격 드론이 러시아 흑해함대 주둔지인 노보로시스크의 그리고로비치급 프리깃함(Admiral Essen 추정)을 정밀 타격했으며, 동시에 유류 수출 인프라도 파괴하여 대규모 화재 발생</p><p>• **러시아 흑해함대의 전략적 곤경**: 2022년 슬라바급 순양함 모스크바 침몰 이후 유일한 전략자산인 칼리브르 미사일 장착 프리깃함 2척이 노보로시스크 기지에 갇혀 있으며, 기지 밖 출항 시 무인 시스템의 위협으로 거의 항해하지 못하는 실정</p><p>• **노보로시스크 기지의 방어 한계**: 산악 만에 위치한 기지가 이제는 '감옥'이 되었으며, 우크라이나 영토로부터 200~350해리 거리에도 불구하고 수상, 수중, 공중 무인 시스템의 지속적인 위협에 직면</p><p>• **전술적 취약성의 악화**: 러시아 방공포와 스포트라이트를 동원한 방어에도 우크라이나 드론들이 침투 성공하였으며, 더 이상의 피해가 임박한 상황</p><p>• **대안 부재의 전략적 위기**: 소치항과 조지아의 오참치레항은 제한된 시설을 가진 소규모 항구이며, 볼가-돈 운하를 통한 카스피해 철수는 되돌릴 수 없는 결정이 될 수 있음</p><h3>Key Quotes</h3><p>• "Russian Navy vessels are no longer safe in the base at Novorossiysk. Having relocating from Sevastopol to evade Ukrainian strikes, they now face comparable threat levels in what was once considered a safe haven." <br>(러시아 해군함정들이 더 이상 노보로시스크 기지에서 안전하지 않으며, 세바스토폴에서 피난했던 것처럼 이제는 과거에 안전한 피난처로 여겨졌던 곳에서도 동등한 위협 수준에 직면)</p><p>• "The protective seawalls of Novorossiysk are becoming a cage. The increasing accuracy and confidence of Ukrainian drone forces makes it only a matter of time before more serious damage is inflicted."<br>(노보로시스크의 방호 방벽이 감옥이 되고 있으며, 우크라이나 드론 세력의 증가된 정확성과 확신으로 볼 때 더 심각한 피해는 시간 문제)</p><h3>Technical Insights</h3><p>• **무인 시스템의 해전 지배력 변화**: 전통적 함정 기반의 해전 우위가 저비용 장거리 무인 시스템(OWA-UAV, USV, AUV)에 의해 붕괴되고 있으며, 기존 방공 시스템의 대응 능력 한계 노출</p><p>• **항구 방어의 전략적 약점**: 고정된 항구 시설이 이동 가능한 무인 위협에 대한 방어 난제가 되었으며, 함정들이 항구 내 정박 상태에서 드론 감지를 피하기 위해 수심이 깊은 곳에서 수중으로 정잠하는 소극적 대응</p><p>• **해전 전술의 근본적 변화**: COLREG 및 기존 해전 규칙이 제정되지 않은 무인 시스템의 대규모 전술 운용이 현대 해전의 새로운 표준이 되고 있으며, IMO의 자율해상 운행 규정과 별개로 군사 무인 시스템의 급속한 발전</p><p>• **해양 전력 재배치의 현실적 제약**: 전략적 후퇴 시 대안 항구 부족으로 인한 구속력 있는 선택의 한계가 드러났으며, 장거리 무인 시스템의 작전 반경 확대로</p></div>`,
      tags: ["Black Sea","Ukraine","Unmanned Systems","Naval Warfare","Russia"],
      link: "https://www.navalnews.com/naval-news/2026/04/russias-massive-black-sea-problem-is-worse-than-it-looks/",
      coords: [37.77,44.72],
      location: "Novorossiysk, Black Sea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-08
addEvents({
  "2026-04-08": [
    {
      type: "news",
      title: "French Navy Submarine Successfully Tests Launch and Recovery of U.S. Navy Razorback UUV",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-04-08",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 프랑스 해군이 Suffren급 핵추진 공격 잠수함에서 미국 해군 Razorback 무인수중차량(UUV) 발사 및 회수 시험을 성공적으로 수행</p><p>• Suffren급 잠수함의 탈착식 건식갑판 대피소(Dry Deck Shelter)를 통해 수중 드론 운영 가능성 검증 완료</p><p>• 2026년 3월 16-20일 프랑스 툴롱(Toulon) 해안에서 운영 중 oceanographic 측정 수행</p><p>• 해당 시험은 향후 작전에서 드론 활용 가능성 탐색을 목표로 실시</p><p>• 프랑스 국방부가 공식 성과 발표로 양국 해군의 해양 기술 협력 강화 신호</p><h3>Key Quotes</h3><p>• "The French Navy tested launching and recovering a U.S. Navy Razorback Unmanned Undersea Vehicle (UUV) from a submerged French Suffren-class nuclear-powered attack submarine" (프랑스 해군이 수중 상태의 Suffren급 핵추진 잠수함에서 미국 해군 Razorback 무인수중차량을 발사·회수하는 시험을 수행했다)</p><p>• "validating the French submarine's removable dry deck shelter can be used for underwater drone operations" (프랑스 잠수함의 탈착식 건식갑판 대피소가 수중 드론 운영에 사용될 수 있음을 입증했다)</p><h3>Technical Insights</h3><p>• 건식갑판 대피소(Dry Deck Shelter, DDS)의 무인수중차량 발사·회수 운영 기술 검증으로 잠수함 기반 자율 해양 플랫폼의 실용성 확대</p><p>• Razorback UUV의 oceanographic 측정 능력을 잠수함 플랫폼과 통합 운영함으로써 수중 감시정찰 및 과학적 데이터 수집 역량 강화</p><p>• NATO 동맹국 간 무인수중차량 상호운용성(Interoperability) 향상으로 연합 해양 작전 기능 고도화 및 미래 해양 자율화 시대 준비 단계 진입</p><p>• Suffren급 잠수함의 모듈형 설계(Modular Design) 입증으로 기존 플랫폼의 다목적 활용성과 향후 자율 시스템 통합 가능성 시사</p></div>`,
      tags: ["Unmanned Undersea Vehicle","Suffren-class Submarine","French Navy","Underwater Drone Operations"],
      link: "https://news.usni.org/2026/04/08/french-navy-submarine-launches-recovers-u-s-navy-drone-in-test-run",
      coords: [5.9305,43.1256],
      location: "Toulon, France"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-12
addEvents({
  "2026-04-12": [
    {
      type: "news",
      title: "Trump Announces Empty Oil Tankers Heading to U.S. to Load Oil and Gas",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-12",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-01T090922Z_792222033_RC26GKAU079P_RTRMADP_3_IRAN-CRISIS-TANKERS-INDIA-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 트럼프 대통령이 대형 유조선들이 미국으로 향하고 있으며 미국의 석유와 가스를 수송할 준비를 하고 있다고 발표</p><p>• 2월 28일 시작된 미-이란 분쟁으로 인한 호르무즈 해협 폐쇄로 전 세계 에너지 공급에 역사적 차질 발생</p><p>• 유가 급등 - 미국산 유질유 배럴당 $96.57, 브렌트유 $95.20으로 미국산 프리미엄 확대</p><p>• 호르무즈 해협 폐쇄 지속 시 미국 석유 수요 증가 예상, 협상 해결까지 수개월 소요 가능성</p><p>• 월스트리트는 트럼프의 발표보다 미-이란 평화협상 결과에 더 초점</p><h3>Key Quotes</h3><p>• "Massive numbers of completely empty oil tankers, some of the largest anywhere in the World, are heading, right now, to the United States to load up with the best and 'sweetest' oil and gas anywhere in the World" (전 세계에서 가장 큰 규모의 빈 유조선들이 미국 최고 품질의 석유와 가스를 선적하기 위해 현재 미국으로 향하고 있다)</p><p>• "The situation with the Strait of Hormuz, even with the peace talks, could take months in a best-case scenario to work out, so absolutely U.S. oil will be higher in demand as a result" (호르무즈 해협 상황은 평화협상에도 불구하고 최선의 경우에도 해결에 몇 개월이 걸릴 수 있으므로 미국산 석유 수요는 확실히 증가할 것)</p><h3>Technical Insights</h3><p>• **해협 폐쇄로 인한 운송 경로 재편성**: 호르무즈 해협 폐쇄는 해상 운송 노선 전체를 변경시켰으며, 대규모 유조선의 장거리 항해로 인한 운임 상승과 해운 효율성 저하 초래</p><p>• **국제 해상 규제 영향**: 분쟁 지역 통과 비용 및 위험 증가로 COLREG(해상충돌방지규칙) 준수 및 IMO 안전 기준 강화 필요</p><p>• **에너지 공급망 다변화와 자동화 수요**: 유조선 수요 급증 시 자율운항선박(MASS) 도입을 통한 운영 비용 절감 및 인력 부족 해소 기대, 특히 장거리 항해에서 효율성 증대</p><p>• **지정학적 리스크와 해운 산업**: 분쟁으로 인한 호르무즈 해협 점유 통제 및 통행료 논쟁으로 글로벌 석유 해운 구조 재편, 대체 경로 및 수송 방식 다양화 필요</p></div>`,
      tags: ["Oil tankers","Energy markets","Strait of Hormuz","U.S.-Iran conflict","Shipping disruption"],
      link: "https://gcaptain.com/trump-says-empty-oil-tankers-heading-to-u-s-to-load-up-with-oil-gas/",
      coords: [0,0],
      location: "Global (Strait of Hormuz / United States)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-11
addEvents({
  "2026-04-11": [
    {
      type: "accident",
      title: "Container Ship Ever Lenient Fire Extinguished at Singapore PSA Terminal",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-13",
      image: "https://images.marinelink.com/images/maritime/w800/travel-adobe-169730.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 런던 등록 컨테이너선 Ever Lenient호가 싱가포르 PSA 파사르판장 터미널에서 선적 컨테이너 화재 발생, 4월 11일 진화 완료</p><p>• **대응 기관**: 싱가포르 시민방위청(SCDF)이 주도적으로 진화 작업 수행, 해사항만청(MPA)이 순찰선 배치 및 드론 활용한 항공 감시 지원</p><p>• **사건 경과**: 야간을 포함한 지속적인 소방 활동으로 화재 진화, PSA 싱가포르가 피해 컨테이너 안전 하역 작업 진행 중</p><p>• **원인 조사**: 화재 발생 원인 규명을 위한 조사 진행 중 (자세한 내용 미공개)</p><p>• **운영 영향**: 터미널 운영 차질 및 컨테이너 화물 처리 지연 가능성</p><h3>Key Quotes</h3><p>• "A fire involving containers on board the London-registered container vessel Ever Lenient at Singapore's PSA Pasir Panjang Terminal was extinguished on April 11."<br>(런던 등록 컨테이너선 Ever Lenient호의 PSA 파사르판장 터미널 내 컨테이너 화재가 4월 11일 진화됨)</p><p>• "Firefighting efforts continued through the night, led by the Singapore Civil Defence Force, with Maritime and Port Authority of Singapore deploying patrol craft to conduct seaward cordon duties and drones to provide aerial surveillance"<br>(싱가포르 시민방위청 주도 하에 야간 소방 활동 지속, MPA가 순찰선과 드론을 통한 해상 봉쇄 및 항공 감시 지원)</p><h3>Technical Insights</h3><p>• **컨테이너 화재 위험성**: 선적 컨테이너 내 가연성 물질 또는 위험물 적재 시 고온, 저산소 환경에서 화재 확산 가능성 높음 - 해운사 및 항만 운영사의 위험물 신고/적재 기준 준수 필수</p><p>• **항만 안전 체계**: 선진 항만의 드론 활용 감시, 순찰선 배치 등 실시간 대응 시스템 운영으로 화재 확산 방지 및 2차 피해 최소화 실현</p><p>• **국제 규제 영향**: IMO 위험물 규정(IMDG Code) 준수 강화 필요, 부정확한 위험물 신고 사건 증가 추세와 연계한 선사 및 화주의 컴플라이언스 강화 요구</p><p>• **컨테이너 안전 표준**: 원인 규명 결과에 따라 특정 화물 종류에 대한 추가 검사 또는 제약 조치 가능성, 선박-항만 간 정보공유 체계 개선 방향 검토 필요</p></div>`,
      tags: ["Container Ship","Fire","Singapore","PSA Pasir Panjang Terminal","Ever Lenient"],
      link: "https://www.marinelink.com/news/singapore-container-ship-fire-537950",
      coords: [103.7618,1.2654],
      location: "Singapore - PSA Pasir Panjang Terminal"
    }
  ]
});

// Auto-collected: 2026-04-13
addEvents({
  "2026-04-13": [
    {
      type: "news",
      title: "US Navy to Block Ships from Iranian Ports - Strait of Hormuz Blockade",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-13",
      image: "https://images.marinelink.com/images/maritime/w800/source-marine-169728.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 미국 해군이 2026년 4월 13일부터 호르무즈 해협의 이란 항구 해상 교통을 전면 봉쇄하기로 결정 - 전략적 에너지 통로(글로벌 석유 공급의 약 20%)의 통제권 장악</p><p>• 트럼프 대통령과 이란 간 이슬라마바드 협상이 결렬되어 2주간의 임시 휴전이 위기 상황으로 전환되며, 양측 간 군사적 긴장 고조</p><p>• CENTCOM 성명을 통해 "모든 국적의 선박에 대한 공평한 집행"과 "불법 통행료 납부 선박 무력화" 위협으로 국제해양법 해석에 관한 논란 야기</p><p>• 이란 혁명수비대의 강경 대응 성명으로 전군사적 충돌 위험성 증가 및 글로벌 에너지 시장 불안정 심화(유가 배럴당 $100 돌파)</p><p>• 상용 선박에 대한 신뢰성 있는 사전 공지 부재로 해상 물류 및 보험 시장의 즉시적 혼란 예상</p><p>• 호르무즈 해협의 광산 제거 및 해상 통제 수행의 기술적 복잡성과 국제 해사법상 분쟁 가능성</p><p>---</p><h3>Key Quotes</h3><p>• "No one who pays an illegal toll will have safe passage on the high seas" (불법 통행료를 지불하는 국가와 선박에 대해 국제 공해에서 안전한 통행을 보장하지 않겠다는 군사적 위협)</p><p>• "Zero lessons earned. Good will begets good will. Enmity begets enmity." (이란 외교부 장관 아라치가 협상 결렬 후 언급한 '선의는 선의를 낳고, 적대는 적대를 낳는다'는 외교적 메시지)</p><p>• "If you fight, we will fight, and if you come forward with logic, we will deal with logic" (이란 혁명수비대의 대응 성명으로, 군사적 도발에는 군사적 대응으로 맞대응할 준비가 되어있음을 표명)</p><p>---</p><h3>Technical Insights</h3><p>• **해상 교통 통제 메커니즘**: 호르무즈 해협 전역에 대한 전면 봉쇄 시행 시 AIS(자동식별장치) 추적, 선박 검문, 광산 제거 등 다층적 해상 통제 기술 필요 - 민간 선박의 경로 우회 및 운임 급등 초래</p><p>• **국제해양법(UNCLOS) 해석 갈등**: 공해상 자유로운 통행권과 전쟁 상황에서의 해상 봉쇄권 사이의 법적 모순, IMO 공식 공지 부재로 인한 선주/보험사의 법적 책임 불명확화</p><p>• **글로벌 해운 산업 영향**: 에너지 공급 차질로 인한 연료유 가격 급등, 호르무즈 통과 선박의 보험료(전쟁보험) 폭등, 대체 해로(아프리카 희망봉 경로) 선택에 따른 운항 시간 및 비용 증가</p><p>• **자율주행선박 운영 리스크**: 분쟁 해역에서의 AI 기반 자동 항법 시스템의 신뢰성 문제 - 실시간 군사 상황 변화에 대한 센서 인식 한계 및 원격 제어 불가능 상황에서의 안전성 위협</p></div>`,
      tags: ["Strait of Hormuz","Naval Blockade","Iran","Geopolitical Risk","Maritime Traffic"],
      link: "https://www.marinelink.com/news/us-navy-block-ships-iranian-ports-537948",
      coords: [56.2436,26.1367],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2026-04-06
addEvents({
  "2026-04-06": [
    {
      type: "news",
      title: "US Marine Corps Conducts Live-Fire Drone Strike Test Against Unmanned Surface Vessel in Okinawa",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-04-06",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해병대가 오키나와에서 무인 해상 선박을 대상으로 한 첫 실전 드론 공격 시험을 3월 초 실시하였으며, 이는 자율 해상 작전 능력 고도화의 일환임</p><p>• III EOTG(원정 작전 훈련단) 해병대원과 Naval Special Warfare 운영자들이 NSF 수상함으로부터 임무를 수행했으며, 목표물은 해병대가 자체 설계·건조한 무인 해상 선박임</p><p>• 이번 시험은 2026년 해병대의 일련의 드론 테스트 중 최신 사례로, 자율 무기체계 운영 기술의 실제 적용 가능성을 입증함</p><p>• 무인 해상 선박(USV)의 설계 및 운영에 대한 내부 역량을 보유하고 있음을 시사하며, 해상 자율 체계의 실전 배치 단계로의 진입을 의미함</p><p>• 해양 전술 운영의 무인화 추진으로 인력 소모 감소 및 작전 효율성 향상이 기대됨</p><h3>Key Quotes</h3><p>• "Marines from the III Expeditionary Operations Training Group (III EOTG) and operators from Naval Special Warfare conducted the maritime drone strike from a Naval Special Warfare surface craft, taking out an unmanned surface vessel" (해병대 III 원정 작전 훈련단과 해양 특수전 운영자들이 해양 특수전 수상함으로부터 무인 해상 선박을 대상으로 한 드론 공격을 성공적으로 수행했음을 의미)</p><h3>Technical Insights</h3><p>• **자율 해상 무기체계 고도화**: 해병대가 자체 설계·제작한 USV 개발 역량 확보로 독립적인 무인 해상 작전 플랫폼 구축 추진 중</p><p>• **실전 운영 패러다임 전환**: 드론의 실시간 목표 추적 및 타격 능력 검증으로 CONOPS(작전 개념)의 실질적 구현 단계 진입, COLREG 준칙과의 충돌 가능성 사전 검토 필요</p><p>• **다층 자율 체계 통합**: 모함(NSF)의 원격 제어 능력과 드론의 자율 탐색·추적·타격이 결합된 통합 시스템으로, IMO 자율선박 규정의 군사 적용 사례로 평가됨</p><p>• **해상 전술 운영의 구조적 변화**: 전통적 함정 기반 해전에서 무인 체계 중심의 분산 작전으로의 전환 초기 단계로, 향후 해상 교전 규칙(ROE) 재정의 필요</p></div>`,
      tags: ["Autonomous Systems","Unmanned Surface Vessel","Marine Corps","Drone Technology","Military Testing"],
      link: "https://news.usni.org/2026/04/06/marines-test-custom-built-drone-in-live-fire-test-strike-unmanned-surface-vessel",
      coords: [127.6789,26.2006],
      location: "Okinawa, Japan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-13
addEvents({
  "2026-04-13": [
    {
      type: "news",
      title: "EU Emissions Trading System Shows 1.3% Reduction in 2025, Maritime Sector Down 3%",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-13",
      image: "https://images.marinelink.com/images/maritime/w800/source-169732.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• EU ETS가 2025년 전년 대비 1.3% 배출량 감소를 기록했으며, 2005년 제도 도입 이후 누적 배출량이 50% 감소함<br>• 해운 부문이 약 3% 배출량 감소를 달성하여 전체 평균보다 더 나은 성과를 시현<br>• 2030년 목표인 62% 배출 감소를 달성하기 위한 궤도에 있으며, 재생에너지 비중이 47.3%로 확대됨<br>• 태양광 발전이 전년 대비 24.6% 성장하여 처음으로 수력을 제치고 EU 내 두 번째 규모의 재생에너지원으로 부상<br>• 에너지 집약적 산업의 배출량이 2.5% 감소했으나, 항공기 운항자의 배출량은 교통 증가로 인해 소폭 증가<br>• 해운 및 항공 부문 데이터 보고가 계속 진행 중이며, 최종 경향은 보고 완료 후 확정될 예정</p><h3>Key Quotes</h3><p>• "Since the ETS was launched in 2005, the system has halved emissions in the sectors it covers. It remains on track to achieve the 2030 target of a 62% reduction." (2005년 ETS 출범 이후 대상 부문의 배출량이 50% 감소했으며, 2030년 62% 감축 목표 달성을 위한 궤도에 있음)</p><p>• "For maritime, the reported data so far shows that emissions from the sector fell by around 3%." (해운 부문의 배출량이 약 3% 감소한 것으로 보고됨)</p><p>• "Solar generation to the point where it overtook hydropower for the first time, becoming the EU's second-largest renewable electricity source after wind." (태양광이 처음으로 수력발전을 초월하여 풍력에 이어 EU의 두 번째 규모 재생에너지원이 됨)</p><h3>Technical Insights</h3><p>• **해운 부문 탄소중립 달성**: 해운 부문이 3% 배출 감소를 달성하여 EU ETS 전체 평균(1.3%)을 상회하는 성과를 기록했으며, 이는 해운업의 연료 효율화 및 친환경선박 도입이 가속화되고 있음을 시사</p><p>• **규제적 프레임워크의 효과**: EU ETS가 강제적 배출권 거래 시스템으로 작동하면서 지속적인 감축 경향을 유도하고 있으며, 2030년 62% 감축 목표 달성을 위해 더욱 강화된 규제가 예상됨</p><p>• **데이터 보고 프로세스의 한계**: 해운 및 항공 부문의 최종 배출 데이터가 아직 진행 중이므로, 실제 해운 부문의 배출 감축 추세는 보고 완료 후 재평가될 필요가 있음</p><p>• **산업 전환과 탄소 감축의 상관관계**: 에너지 집약적 산업의 2.5% 배출 감소가 저탄소 전환뿐만 아니라 경제 활동 둔화에도 영향을 받고 있으므로, 경기 회복 시 배출 증가 가능성이 존재</p></div>`,
      tags: ["EU ETS","Maritime Emissions","Climate Regulation","Sustainability"],
      link: "https://www.marinelink.com/news/eu-emissions-trading-system-sustains-537952",
      coords: [10.4515,51.1657],
      location: "European Union"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-13
addEvents({
  "2026-04-13": [
    {
      type: "news",
      title: "North Korea Tests Cruise and Anti-Ship Missiles from Choe Hyon-Class Destroyer",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-13",
      image: "https://gcaptain.com/wp-content/uploads/2025/04/2025-04-29T225456Z_502919210_RC2X7EAV95UI_RTRMADP_3_NORTHKOREA-NAVY.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 북한이 4월 13일 신형 파괴함 '최현함'에서 전략 순항미사일 2발과 대함미사일 3발을 시험 발사하였으며, 김정은 국방위원장이 직접 관찰함<br>• 이번 시험은 함정의 통합 무기 지휘 시스템 검증, 미사일 발사 절차 훈련, 업그레이드된 항법 시스템의 정확도 및 전자전 방어 능력 확인을 목표로 함<br>• 순항미사일은 약 2시간 8분~2시간 12분 동안 비행하였으며, 대함미사일은 약 32분~33분 동안 비행하여 목표를 '극초정밀도'로 타격함<br>• 현재 추가 2척의 동급 파괴함이 건조 중이며, 북한은 핵전력 강화를 최우선 과제로 강조함<br>• 본 시험은 2025년 4월 초도 무기 시험 이후 진행된 것으로, 북한 해군의 전술/전략 능력 강화 의지를 보여줌</p><h3>Key Quotes</h3><p>• "Two strategic cruise missiles and three anti-warship missiles were fired to check the warship's integrated weapons command system, train crews in missile-launch procedures and verify the accuracy and anti-jamming performance of upgraded navigation systems" (함정의 통합 무기 지휘 시스템 검증, 승조원 미사일 발사 훈련, 업그레이드된 항법 시스템의 정확도 및 전자전 방어 능력 확인을 위해 전략 순항미사일 2발과 대함미사일 3발을 발사함)</p><p>• "Kim said strengthening what he called the country's nuclear war deterrent remained a top priority, and called for improving strategic and tactical strike capabilities and rapid-response readiness" (김정은은 핵전력 강화를 최우선 과제로 강조하면서 전략/전술 타격 능력 향상과 신속한 대응 태세 강화를 지시함)</p><h3>Technical Insights</h3><p>• **무기 체계 통합화**: 순항미사일과 대함미사일을 단일 플랫폼에서 운용할 수 있는 통합 지휘 시스템의 개발은 해상 전력 투사 능력의 근본적 강화를 의미하며, 국제 해상 보안에 직접적 영향을 미침</p><p>• **해상 감지 및 추적 기술**: 업그레이드된 항법 시스템과 전자전 방어 능력의 검증은 함정의 자동 항법 및 독립적 타겟팅 능력 향상을 시사하며, 기존 COLREG 기반 해상 안전 체계에 새로운 위협 요소를 추가함</p><p>• **해군력 확장의 전략적 의도**: 5,000톤급 파괴함 3척 건조는 한반도 주변 해역에서의 해상 통제력 확보를 목표로 하며, IMO 규제 대상 외 불명 해상 활동의 증가 가능성을 시사함</p><p>• **미사일 정밀도 기술**: '극초정밀도'를 강조하는 것은 AI 기반 자율 항법 및 타겟팅 시스템의 도입을 암시하며, 향후 무인 또는 자율 해상 무기 플랫폼 개발 추진 가능성을 내포함</p></div>`,
      tags: ["North Korea","Military","Missile Test","Naval Warfare","Destroyer"],
      link: "https://gcaptain.com/north-korea-tests-cruise-and-anti-ship-missiles-from-destroyer/",
      coords: [124.9,39],
      location: "North Korea (Western Coast)"
    },
    {
      type: "news",
      title: "Argentina Paraná River Dredging Auction Sparks US-China Geopolitical Tensions",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-13",
      image: "https://gcaptain.com/wp-content/uploads/2020/12/2020-12-21T213835Z_1166838131_RC2XRK9NRVG5_RTRMADP_3_ARGENTINA-GRAINS-STRIKE.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 아르헨티나 파라나 강 준설 사업 입찰에서 미국 준설업체 Great Lakes Dredge & Dock이 벨기에 DEME와 연합하여 Jan de Nul 컨소시엄과 경쟁 중이며, 입찰 조건이 기존 업체에 유리하다고 주장</p><p>• 파라나 강은 아르헨티나의 경제 생명선으로 곡물 수출의 대부분을 운반하며, 강 준설은 밀레이 대통령의 경제 개혁 사업의 핵심 인프라 프로젝트</p><p>• 미국은 2025년 10월 아르헨티나에 200억 달러 금융 지원을 제공했으며, 미 재무부 장관은 밀레이 정부가 "중국을 배제"하고 있다고 명시적으로 언급</p><p>• Jan de Nul 입찰 파트너인 아르헨티나 Servimagnus SA가 중국 국영 CCCC Shanghai Dredging과 과거 협력 관계가 있다는 점이 미-중 지정학적 갈등의 중심</p><p>• Great Lakes 임원진은 입찰 조건이 "기정사실화(cooked)"되어 기존 업체에 기술적 이점을 부여한다고 비판</p><p>• 2026년 5월-6월 중 최종 낙찰자 발표 예정</p><h3>Key Quotes</h3><p>• "With the tender, it's been geared toward the incumbent... It's the uphill battle of, 'Is it already cooked? Is it already done?'" (입찰 조건이 기존 업체를 향해 설정되었으며, 입찰이 이미 결정되었는지에 대한 의문)</p><p>• "Milei was committed to getting China out of Argentina, adding those efforts include sea ports" (밀레이 정부는 아르헨티나에서 중국의 영향력 제거에 주력하고 있으며, 이는 해항 분야도 포함)</p><h3>Technical Insights</h3><p>• 파라나 강 준설은 단순한 상업 프로젝트를 넘어 미국의 인도-태평양 전략과 중국의 라틴아메리카 영향력 확대 사이의 지정학적 경쟁으로 전개되고 있으며, 해운·항만 인프라가 국가 간 영향력 경합의 핵심 분야임을 보여줌</p><p>• 선박 운항의 안전성(천수 강에서의 좌초 사고 방지)과 경제성(선복 효율성 증대)을 위한 인프라 개선이 정치-지정학적 판단과 얽혀있어, IMO/국제해사 규범 이상의 복잡한 이해관계 구도를 반영</p><p>• 입찰 투명성과 공정성 문제는 해운산업에서 국제 표준화된 프로세스의 중요성을 강조하며, 정부 보호주의(state-owned entity 배제)가 국제 경쟁 규범과 충돌할 가능성을 시사</p></div>`,
      tags: ["Paraná River","dredging","Argentina","geopolitics","China-US competition"],
      link: "https://gcaptain.com/argentina-river-auction-draws-fire-from-u-s-dredger-over-cooked-tender/",
      coords: [-58.3816,-34.6037],
      location: "Paraná River, Argentina"
    },
    {
      type: "news",
      title: "HAVELSAN Expands Underwater C5ISR Capabilities for Multi-Domain Operations",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-13",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/Muren-Key-visual-yatay-1024x786.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• HAVELSAN은 20년 이상의 경험을 토대로 잠수함, 무인수중차량(UUV), 하이브리드 해양플랫폼을 위한 통합 C5ISR(지휘통제통신컴퓨터사이버정보감시정찰) 기술 포트폴리오를 확대하고 있음</p><p>• 개발 솔루션에는 SEDA(통합 잠수함 전투관리시스템), 소형 잠수함용 컴팩트 미션시스템, 무인수중차량용 컴팩트 미션시스템 등이 포함되며 터키 해군 및 외국 현대화 프로그램에 배치됨</p><p>• "Operation Intelligence(작전 지능)"과 "Operation Autonomy(작전 자율성)" 기능이 통합되어 의사결정 지원 및 무인플랫폼 운영 관리를 강화함</p><p>• 미래 작전환경(FOE)은 육·해·공·우주·사이버 도메인 통합과 다중영역작전(MDO), 교차영역지휘(CDC) 개념으로 정의됨</p><p>• 잠수함과 무인수중차량은 은폐성, 저탐지성, 지속력 우위로 인해 다중영역작전에서 전략적 가치가 증대되고 있음</p><h3>Key Quotes</h3><p>• "Underwater platforms, including submarines, UUVs and hybrid unmanned vehicles, are becoming increasingly critical due to their inherent stealth, low detectability and endurance advantages." (잠수함과 무인수중차량은 본질적인 은폐성, 저탐지 특성, 지속력 우위로 인해 전략적 중요성이 증대되고 있음)</p><p>• "Operation Intelligence enables the detection of relationships, patterns and operational impacts through holistic onboard data processing, while Operation Autonomy applies these insights to decision-support in manned systems and operational management in unmanned platforms." (작전 지능은 통합 선내 데이터 처리를 통해 관계성, 패턴, 작전 영향을 탐지하고, 작전 자율성은 유인 시스템의 의사결정 지원과 무인플랫폼의 작전 관리에 이를 적용함)</p><h3>Technical Insights</h3><p>• 다중영역작전(MDO) 환경에서 수중플랫폼의 Network Enabled Capability(NEC) 아키텍처는 도메인 간 동기화를 위한 핵심 요소로, HAVELSAN의 통합 CMS는 실시간 데이터 융합과 의사결정 자동화를 가능하게 함</p><p>• SEDA 시스템의 음향/비음향 센서 데이터 처리, 표적운동분석(TMA), 분류 기능은 COLREG 해상충돌방지규칙 준수 및 자동 회피 제어를 지원하는 자율 네비게이션 기술의 수중 버전으로 평가됨</p><p>• 소형·경량 잠수함용 컴팩트 미션시스템은 제한된 공간과 축소된 승무원 환경에서 인공지능 기반 의사결정 지원을 제공하여 무인화 및 원격 운용 전환의 기술적 토대를 마련함</p><p>• 무인수중차량의 Operation Autonomy 기능은 IMO 자동화 기준과 해상안전 규정을 만족하면서 자율 순찰·탐지·대응 작전을 가능하게 하는 핵심 기술로, 향후 민간 해상 로봇 시스템 발전의 선례가 될 가능성이 높음</p></div>`,
      tags: ["C5ISR","Submarine Systems","Autonomous Underwater Vehicles","Combat Management Systems","Turkish Navy","Multi-Domain Operations"],
      link: "https://www.navalnews.com/naval-news/2026/04/havelsan-expands-its-underwater-c5isr-capabilities-for-the-future-operating-environment/",
      coords: [35.1264,39.9334],
      location: "Turkey (Ankara)"
    },
    {
      type: "news",
      title: "U.S. REGENT Autonomous Squire Seaglider Completes First Ground-Effect Flight Test",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-13",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• REGENT社가 자율형 Squire Seaglider의 지면효과 비행 시험에 성공, 미국 내 방위 목적 익중익기 항공기의 첫 비행 달성<br>• 2026년 4월 13일 실시된 해당 시험은 자율 해상 드론을 군용으로 배치하기 위한 회사의 중요한 이정표<br>• 익중익(WIG) 기술을 활용한 저고도 초장거리 해상 운송 및 감시 임무 수행 가능성 검증<br>• 미국 국방부와의 협력으로 추진되는 차세대 무인 해상 플랫폼 개발 프로젝트의 일환<br>• 상용 및 군용 해양 운송 산업에 혁신적 변화를 가져올 수 있는 기술 진전</p><h3>Key Quotes</h3><br>• "the first flight in the United States of a defense-focused wing-in-ground effect craft" (미국 내 방위 목적 익중익 항공기의 첫 비행)<br>• "brings the maritime drone into military service" (해상 드론을 군용으로 전환)</p><h3>Technical Insights</h3><br>• 익중익(WIG) 기술은 날개가 수면 또는 지면 근처에서 작동하여 양력 증대와 연료 효율성 향상을 동시에 달성하는 차세대 해양 운송 기술<br>• 자율형 Seaglider는 COLREG 및 IMO 해상 안전 규정 준수를 위한 고급 센서 및 AI 항법 시스템 통합 필요성을 제시<br>• 군용 무인 해상 플랫폼의 실용화는 해양 감시, 물류 수송, 해상 구조 작업 등 민간 해운 산업의 자동화 촉진 가능성 높음<br>• 익중익 기술의 실증 성공은 기후변화로 인한 신규 해로 개발(북극항로 등) 및 원양 운송의 효율성 극대화에 기여할 전망</p></div>`,
      tags: ["autonomous maritime","wing-in-ground effect","defense technology","unmanned vehicle"],
      link: "https://defence-blog.com/new-u-s-autonomous-squire-seaglider-conducts-test-flight/",
      coords: [0,0],
      location: "United States"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-13
addEvents({
  "2026-04-13": [
    {
      type: "news",
      title: "Boskalis Deploys First ROVs from New Aberdeen Remote Operations Center",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-13",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/First-ROVs-deployed-from-Boskalis-new-remote-operations-center-rotated.jpeg?image-crop-positioner-ts=1776071735",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Boskalis가 스코틀랜드 Aberdeen에 신설한 원격 운영 센터(ROC)에서 첫 ROV(원격 조종 차량) 배포 성공<br>• 건설 지원선 BOKA Northern Ocean을 통해 북해에서 1주일간 집약적인 시험 운영 실시<br>• 18개월 개발 기간과 약 4,680만 유로의 투자(ROV 및 ROC 포함)를 통해 2025년 센터 개설<br>• Bart Heijermans COO는 이 마일스톤이 안전성, 효율성, 통합성 향상을 입증한다고 강조<br>• 향후 5년 내 Aberdeen 사무소에서 50개 이상의 고품질 육상 일자리 창출 예정</p><h3>Key Quotes</h3><p>• "The Remote Operations Center is a proud milestone for our team and a significant step forward in the way we deliver subsea operations. It demonstrates how innovation and technology can make our work safer, more efficient and better integrated" <br>(원격 운영 센터는 당사 팀의 자랑스러운 마일스톤이며 해저 작업 수행 방식에서의 중요한 진전. 혁신과 기술이 어떻게 작업을 더 안전하고 효율적이며 통합적으로 만드는지 보여줌)</p><p>• "It also represents an important investment in our subsea services offering from our Aberdeen office, creating more than fifty high-quality onshore roles in the next five years"<br>(Aberdeen 사무소의 해저 서비스 제공에 있어 중요한 투자이며, 향후 5년 내 50개 이상의 고품질 육상 직종 창출을 의미함)</p><h3>Technical Insights</h3><p>• 원격 운영 센터(ROC) 도입으로 해상 작업 인력의 육상 근무 가능화 - 안전성 향상 및 운영 비용 효율화 달성<br>• North Sea에서의 실제 ROV 운영 시험을 통해 다양한 해상 시나리오에 대한 원격 조종 기술의 타당성 검증 완료<br>• 고숙련 육상 인력 50명 이상 고용으로 해저 작업의 기술 고도화 및 자동화된 원격 운영 시스템의 산업 확대 신호<br>• 해상 안전 및 환경 규제(IMO, IMCA 등) 강화 추세 속에서 원격 운영 기술은 향후 해양 산업의 표준 운영 방식으로 진화할 가능성</p></div>`,
      tags: ["Remote Operations","ROV Technology","Subsea Operations","North Sea"],
      link: "https://www.offshore-energy.biz/first-rovs-deployed-from-boskalis-new-remote-operations-center/",
      coords: [-2.1228,57.1497],
      location: "Aberdeen, Scotland / North Sea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-07
addEvents({
  "2026-04-07": [
    {
      type: "accident",
      title: "Bulk Carrier Struck by Projectiles in Arabian Sea Off Oman",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-14",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-03-26T191814Z_1897759985_RC2OZJAQWKGC_RTRMADP_3_CERAWEEK-ENERGY-OIL-PROFIT-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2026년 4월 7일 오만 해안 동남쪽 112해리 떨어진 아라비아해에서 일반화물선이 미확인 발사체 2발에 맞아 선박 화재 발생</p><p>• **피해 상황**: 발사체 피격으로 인한 화재 발생, 파키스탄 해군함이 응급 지원 대응, 인명피해 및 손상 규모 상세 미공개</p><p>• **지역적 의미**: 호르무즈 해협 외부이지만 오만만 동쪽 주요 통항로에 위치, 지역 해상 안보 위협 확대를 시사</p><p>• **관련 기관**: 영국 해상무역작전(UKMTO), 파키스탄 합동해양정보조율센터, 파키스탄 해군</p><p>• **광범위한 위협**: 호르무즈 해협 내 혼란 외에도 소말리아 인근 해적 활동 경보 발령, 인도양 서부까지 위험 지역 확대</p><h3>Key Quotes</h3><p>• "The vessel's master reported that the ship had been hit by 'two unidentified projectiles,' sparking a fire onboard." (선박 선장이 미확인 발사체 2발에 맞아 선박 내부 화재가 발생했다고 보고)</p><p>• "Even as conditions inside the Strait of Hormuz remain uncertain, ship operators are being forced to consider a wider area of risk stretching across the Gulf of Oman and into the western Indian Ocean." (호르무즈 해협 내 상황이 불확실한 가운데, 선사들이 오만만과 인도양 서부까지 확대된 광범위한 위험 지역을 고려해야 함)</p><h3>Technical Insights</h3><p>• **국제해사보안 협력**: UKMTO 경보체계와 파키스탄 합동해양정보조율센터의 신속한 정보 공유 및 대응으로 국제 해상 안보 네트워크 작동 확인</p><p>• **통항로 위협 확대**: 호르무즈 해협을 넘어 일반 상업 통항로까지 무장 공격 확산으로 글로벌 해운 업계의 보험료 상승 및 운항 경로 변경 초래 가능성</p><p>• **IMO 해상보안 규정 적용 한계**: 기존 SOLAS, ISM Code 등 국제해사규정이 군사적 위협에 대한 방어 수단 제한으로 민간 해운의 취약성 노출</p><p>• **산업적 영향**: BIMCO 통계상 이란 분쟁 이후 해상 원유 수송량 16% 감소, 에너지 시장 및 탱커 선사의 경제적 충격 지속</p></div>`,
      tags: ["Maritime Attack","Arabian Sea","Projectile Strike","Oman","Security Incident"],
      link: "https://gcaptain.com/bulk-carrier-hit-by-projectiles-off-oman-as-maritime-threats-spill-beyond-hormuz/",
      coords: [56.5,22.5],
      location: "Arabian Sea, off Oman (112 nm SE of Ras Al Hadd)"
    }
  ]
});

// Auto-collected: 2026-04-14
addEvents({
  "2026-04-14": [
    {
      type: "news",
      title: "FMD Introduces AutoHook™: Fully Autonomous USV Recovery System",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-14",
      image: "https://images.marinelink.com/images/maritime/w800/source-169823.png",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **자동화된 함정회수 시스템 출시**: Fairbanks Morse Defense(FMD)의 노르웨이 자회사 Vestdavit이 개발한 AutoHook™는 무인표면선박(USV) 회수용 완전 자동화 함정회수장치(LARS) 시스템으로, 인간 개입 없이 완전 자동 운영 가능</p><p>• **Sea State 4 운영 성능**: 기존 자동화 솔루션이 Sea State 2 이상에서 운영 불가능한 반면, AutoHook은 Sea State 4에서 운영 승인 획득으로 악천후 환경에서의 우수성 입증</p><p>• **AI 기반 비전 시스템**: 탑재된 AI 비전 시스템과 통합 스러스터를 통해 동적 목표물의 정확한 위치 추적 및 안정적 제어 실현, 기존 수동 조종 방식 대체</p><p>• **NATO 표준 준수 및 함정 개조 불필요**: NATO 작전 표준 준수하며 클램프-온-다빗 와이어 유닛으로 기존 선박에 간단히 장착 가능, 고비용 개조 불필요</p><p>• **안전성 극대화**: 수동 연결 제거로 인원 부상 위험 제거, 완전 자동화 운영으로 승무원 노출 최소화 및 운영 신뢰성·효율성 향상</p><p>• **무인함대 확산 대응**: 전 세계 해군의 확산되는 무인함대 운영을 지원하는 차세대 회수 시스템으로 활용 가능성 높음</p><h3>Key Quotes</h3><p>• "AutoHook successfully achieved operational acceptance at Sea State 4" (AutoHook은 Sea State 4에서 운영 승인을 성공적으로 획득했으며, 이는 기존 솔루션의 Sea State 2 제한을 초월함)</p><p>• "Vestdavit's autonomous vision system uses AI to determine and track the precise location of the rescue boat in real time, compared to other solutions that rely on operator control units" (Vestdavit의 AI 기반 자동 비전 시스템은 기존 수동 조종 통제 방식과 달리 실시간으로 구조선의 정확한 위치를 자동 감지·추적)</p><p>• "Fully autonomous operation eliminates the need for manual connections, removing the risk of injuries during operations" (완전 자동화 운영으로 인한 수동 연결 제거는 작전 중 인원 부상 위험을 완전히 제거)</p><h3>Technical Insights</h3><p>• **자동 비전 시스템의 운영 혁신**: AI 기반 실시간 비전 추적 시스템이 기존 원거리 조종(RC) 방식을 대체하며, 동적 해상 환경에서의 정밀한 위치 결정 및 안정적 제어 가능성 입증으로 USV 회수 자동화의 새로운 기준 제시</p><p>• **NATO 함대 운영 표준 준수**: AutoHook의 NATO 표준 준수 설계는 다국적 연합 해군 운영의 상호운영성(Interoperability) 강화로 동맹국 간 무인선박 운영의 통합화 추진</p><p>• **악천후 해상 환경 적응성 확대**: Sea State 4 운영 가능성은 기존 자동화 시스템의 환경 제약을 극복하며, 북대서양·북해 등 악천후 지역의 해군 작전 활동 범위 확대를 가능하게 함</p><p>• **COLREG 및 자동화 안전규정과의 연계**: 완전 자동화 회수 시스템은 승무원 노출 제거로 국제해상충돌방지규칙(COLREG) 준수 강화 및 IMO 자동화 선박 안전기준 개발에 실제 운영 데이터 제공</p></div>`,
      tags: ["Autonomous Systems","USV Recovery","LARS Technology","NATO Standards","Maritime Innovation"],
      link: "https://www.marinelink.com/news/fmd-introduces-fully-autonomous-usv-538054",
      coords: [10.7522,59.9139],
      location: "Norway (Vestdavit)"
    },
    {
      type: "news",
      title: "REGENT's Squire Seaglider Drone Achieves Ground-effect Flight Milestone",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-14",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/regent-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• REGENT사의 Squire 자율 해글라이더 드론이 미국 내 첫 지면효과 비행에 성공, 방위산업용 WIG(날개-지면효과) 기술 영역에서 미국의 중국 추월 가능성 제시<br>• 최고 속도 70노트, 100해리 이상의 작전 범위, 50파운드 탑재량으로 정찰감시, 물류지원, 수색구조, 대잠전 임무 수행 가능<br>• Billy Thalheimer CEO는 "속도와 파도 내성 측면에서 시장의 어떤 제품도 이와 비교할 수 없는 경쟁력 있는 가격대"라 평가<br>• Pete Hegseth 국방부장관이 분쟁지역 물류 지원 격차 해소의 시급성을 강조하며 REGENT 같은 신생 방위산업체의 빠른 개발 촉구<br>• 동시에 Rhode Island에서 12인승 Viceroy Seaglider 프로토타입 해상시험 진행 중, 상업용과 방위용 병렬 개발 추진</p><h3>Key Quotes</h3><br>• "There are no products in the market today that combine the speed and wave tolerance of Squire at such a compelling price point. This will revolutionize maritime warfare." (현재 시장에 Squire와 같은 속도, 파도 내성, 가격 경쟁력을 갖춘 제품이 없으며, 해상전을 혁명적으로 변화시킬 것)<br>• "Defense customers require platforms that can operate across wide maritime areas with speed, range, and mission flexibility, without relying on traditional and often vulnerable infrastructure." (방위고객들은 전통적인 취약 기반시설에 의존하지 않으면서 광범위 해양 지역에서 고속, 장거리, 임무 유연성으로 운용 가능한 플랫폼 필요)</p><h3>Technical Insights</h3><br>• WIG(날개-지면효과) 기술은 물 표면 위의 에어쿠션을 이용한 극저고도 비행으로 레이더 탐지 회피 능력 제공, 차세대 자율해상전투시스템의 핵심 기술로 부상<br>• 50파운드 소형 탑재량 설계는 ISR, 물류, ASW 같은 다양 임무의 유연성 확보와 비용효율성을 동시에 추구하는 모듈형 플랫폼 아키텍처 반영<br>• 자율운항 드론의 방위산업 적용은 유인 함정 의존도 저감, 분쟁지역 분산배치, 그리고 contested logistics 환경에서의 신속한 재보급 능력 제공으로 해전 양상 변화 초래</p></div>`,
      tags: ["autonomous vessels","wing-in-ground effect","defense technology","unmanned systems","maritime innovation"],
      link: "https://www.navalnews.com/naval-news/2026/04/regents-squire-seaglider-drone-performs-ground-effect-flight/",
      coords: [0,0],
      location: "United States"
    },
    {
      type: "news",
      title: "Royal Australian Navy Establishes Maritime Autonomous Systems Unit (MASU)",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-14",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호주 해군이 무인 해상 플랫폼 개발·통합·운영을 위한 전담 조직 MASU(Maritime Autonomous Systems Unit)를 공식 설립<br>• 자율항해 시스템의 실전 배치를 위한 조직적 인프라 구축으로 해군의 디지털 전환 추진 가속화<br>• MASU는 차세대 무인 해양 플랫폼 개발 및 운용 체계화를 목표로 함<br>• 호주 해군의 자율화 전략 이행의 구체적 이정표로 평가됨<br>• 인도-태평양 지역 해양 안보 경쟁에서 자율 시스템 기술력 확보 차원의 전략적 결정</p><h3>Key Quotes</h3><p>• "The unit's activation marks one of the most concrete organizational steps the Navy has taken toward embedding autonomous [systems]" <br>(이 부대의 운영 개시는 자율 시스템 통합화를 위해 해군이 취한 가장 구체적인 조직적 조치를 나타냄)</p><h3>Technical Insights</h3><p>• 무인 해양 플랫폼(UMS: Unmanned Maritime Systems)의 통합 운용 체계 구축으로 해전 양식의 혁신 추진<br>• 자율항해 시스템과 전투체계 통합에 있어 조직 단위의 책임 체계 명확화로 기술 개발-운용 선순환 구조 형성<br>• IMO 자율선박 국제기준(MSC.1/Circ.1642 등) 준수 및 COLREG 준수 메커니즘 연동 필요성 증대<br>• 인도-태평양 지역 해양 안보 환경에서 무인 시스템 기술 경쟁 가속화에 따른 국제 해사 규제 체계 진화 가능성</p></div>`,
      tags: ["Autonomous Ships","Royal Australian Navy","Uncrewed Vessels","Maritime Technology","Naval Innovation"],
      link: "https://defence-blog.com/royal-australian-navy-names-autonomous-systems-unit/",
      coords: [133.7751,-25.2744],
      location: "Australia"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-14
addEvents({
  "2026-04-14": [
    {
      type: "news",
      title: "Petrobras Approves $12 Billion SEAP Oil & Gas Projects with SBM Offshore FPSO Vessels",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-14",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/05/Petrobras.jpg?image-crop-positioner-ts=1746795534",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 페트로브라스가 세르지페-알라고아스 분지의 SEAP I 및 SEAP II 프로젝트 최종 투자 결정(FID) 승인으로 약 120억 달러 규모의 유류·가스 개발 사업 착수<br>• SBM 오프쇼어가 P-81, P-87 두 척의 FPSO(부유식 생산·저장·하역설비) 건조 계약 체결 예정(2026년 5월)<br>• 두 프로젝트는 총 10억 배럴 이상의 원유 환산량(boe) 생산 예상, 일일 24만 배럴 원유 및 일일 2,200만 입방미터 천연가스 처리 능력 보유<br>• 건설-운영-이전(BOT) 방식 계약으로 SBM이 설계·건조·조립·초기 운영 담당 후 페트로브라스로 이전<br>• 프로젝트 타당성은 공급업체 협력, 계약 조건 개선, 규모의 경제 달성 등으로 확보</p><h3>Key Quotes</h3><p>• "The conditions achieved increased the financial return of the projects and enabled the inclusion of SEAP I in the Base Implementation Portfolio. This result reinforces the importance of partnership and active engagement between the company and the supplier market." <br>(달성된 조건들이 프로젝트의 재정 수익성을 높이고 기본 이행 포트폴리오에 SEAP I 포함을 가능하게 했으며, 이는 회사와 공급업체 간 협력과 적극적 소통의 중요성을 입증한다)</p><p>• "Together will have an installed capacity to produce up to 240,000 barrels of oil per day and process 22 million cubic meters of natural gas per day."<br>(두 FPSO 플랫폼이 함께 일일 24만 배럴의 원유 생산과 일일 2,200만 입방미터의 천연가스 처리 능력 보유)</p><h3>Technical Insights</h3><p>• **FPSO 기술 활용**: 부유식 생산·저장·하역설비(FPSO)는 심해 유정에서 원유를 직접 처리·저장한 후 운송선으로 이송하는 첨단 해상 에너지 기술로, 깊은 해역 개발의 경제성을 극대화</p><p>• **규모의 경제 실현**: 두 개 FPSO 프로젝트를 통합 발주함으로써 설계·부품·건조 공정 최적화를 통한 비용 절감 및 일정 단축 달성으로 프로젝트 타당성 확보</p><p>• **BOT 계약 모델의 의의**: 건설-운영-이전 방식은 초기 자본 투입 부담을 줄이면서 장기 운영 노하우 축적이 가능한 현대적 인프라 금융 구조로, 브라질 해양에너지 산업의 지속 가능성 강화</p><p>• **가스 인프라 확충**: 약 134km의 수출용 가스 파이프라인 구축으로 브라질의 에너지 자립도 향상 및 국제 가스 공급망 다변화에 기여</p></div>`,
      tags: ["FPSO","Oil & Gas","Petrobras","SBM Offshore","Brazil"],
      link: "https://www.offshore-energy.biz/petrobras-bringing-12-billion-oil-gas-project-pair-to-life-with-sbm-offshore-on-fpso-duty-for-both/",
      coords: [-36.5,-9.5],
      location: "Sergipe-Alagoas Basin, Brazil"
    },
    {
      type: "news",
      title: "Hull assembly starts for Asso.subsea's new cable layer CLV Althea as keel is laid",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-14",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Asso.subsea.jpg?image-crop-positioner-ts=1776153078",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Asso.subsea의 새로운 케이블 부설선(CLV) Althea의 용골 기념식이 2026년 4월 9일 중국 선저우시 마저우 섬의 China Merchants Heavy Industry(CMHI) 조선소에서 개최되었으며, 선체 조립이 본격 시작됨</p><p>• CLV Althea는 12,000톤의 케이블 수용 능력을 갖추고 있으며, 하이브리드 디젤-배터리 동력 시스템 및 메탄올 연료 대응 엔진 탑재로 IMO Tier III NOx 배출 기준 충족</p><p>• 선박은 2027년 인도 예정이며, Asso.subsea의 기존 Ariadne, Atalanti와 함께 운영될 예정</p><p>• 냉동 정박(Cold ironing) 기능 및 에너지 절감 기능을 갖춘 친환경 선박으로 설계되어 해양 에너지 산업의 진화하는 수요에 대응</p><p>• 건설 시작(2025년 11월)부터 용골식(2026년 4월)까지 약 5개월 경과</p><h3>Key Quotes</h3><p>• "As we mark the keel laying of Althea, we take a decisive step forward in strengthening our fleet and technical capabilities. This vessel reflects our long-term vision to meet the evolving demands of the offshore energy market with reliability and precision." <br>(Althea의 용골식을 기념하면서 우리는 함대와 기술 능력을 강화하기 위한 결정적 진전을 이루고 있습니다. 이 선박은 신뢰성과 정확성으로 해양 에너지 시장의 진화하는 수요를 충족하려는 우리의 장기 비전을 반영합니다. - Ioannis Togias, Asso.subsea 해양기술 임원)</p><h3>Technical Insights</h3><p>• **친환경 해양 기술 적용**: 하이브리드 디젤-배터리 동력 시스템과 메탄올/바이오연료 대응 엔진은 국제해사기구(IMO)의 Tier III NOx 배출 기준을 충족하며, 해양 산업의 탄소중립 전환에 부응하는 선박 설계 트렌드를 반영</p><p>• **콜드 아이로닝(Cold ironing) 도입**: 항구 정박 중 해상 디젤 발전 대신 육상 전력을 사용하는 기술로, 항만 지역의 대기오염 감축 및 IMO 2030/2050 배출량 감축 목표 달성에 기여</p><p>• **케이블 부설 선박의 고도화**: 12,000톤 케이블 수용 능력과 다양한 캐러셀 구성(1, 2, 3분할)은 해상 풍력 발전 및 해저 통신 인프라 확대에 따른 케이블 부설 작업의 효율성 극대화를 목표로 함</p><p>• **중국 조선산업의 기술 고도화**: CMHI의 대형 특수선 건조 능력이 국제 수준의 친환경 사양 적용으로 해양 신재생에너지 장비 공급 시장에서 경쟁력 강화</p></div>`,
      tags: ["Cable-laying vessel","Shipbuilding","Offshore energy","Green shipping"],
      link: "https://www.offshore-energy.biz/hull-assembly-starts-for-asso-subseas-new-cable-layer-as-keel-is-laid/",
      coords: [114.0533,22.6329],
      location: "Mazhou Island, Shenzhen, China"
    },
    {
      type: "news",
      title: "Marlink Cyber Intelligence Report 2026: Identity-Based Attacks Dominate Maritime Cyber Threats",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-14",
      image: "https://images.marinelink.com/images/maritime/w800/source-marlink-169822.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **신원 기반 공격 대두**: 관찰된 사이버 위험의 69%가 손상된 사용자 자격증명과 연관되어 있으며, 전통적인 기술 취약점(12%)과 대조적으로 공격 방식의 근본적인 전환을 시사</p><p>• **IT/OT 수렴의 확대된 공격 표면**: 평가 대상 사이트의 60%가 공유 인프라에 의존하고 있으며, 70% 이상이 문서화되지 않거나 부실하게 보안된 연결을 보유하고 있어 해양 환경에서 운영 위험 증가</p><p>• **인적 요소의 지속적 취약성**: 피싱 시뮬레이션에서 사용자의 20%가 악성 링크를 클릭했고 11%가 자격증명을 공개했으며, 사건 보고율은 11%에 불과해 초기 손상의 주요 원인 확인</p><p>• **해양 환경의 집중된 위협**: 마린링크 모니터링 환경에서 경보의 82%가 승무원 네트워크 영역에 집중되어 있어, 사용자 대면 시스템이 주요 공격 표면임을 재확인</p><p>• **급증하는 랜섬웨어 사건**: 2024년 5,740건에서 2025년 7,793건으로 증가하였으며, 운송·에너지·제조 부문이 절반 이상의 공격 대상으로 확인</p><p>• **마린링크의 권고사항**: Nicolas Furgé 회장은 신원 우선 보안 모델, 신뢰할 수 있는 접근 제어 강화, 다중 요소 인증, IT/OT 네트워크 분할, 지속적 모니터링 등을 강조</p><h3>Key Quotes</h3><p>• "The data confirms a clear shift in how cyber threats materialize in remote environments. Addressing these structural weaknesses requires more than additional tools. It demands an identity-first security model, stronger control of trusted access, and closer integration between cyber security and operational infrastructure." <br>(원격 환경에서 사이버 위협이 어떻게 구체화되는지의 명확한 전환을 확인했으며, 신원 우선 보안 모델과 신뢰 접근의 강력한 통제, 사이버 보안과 운영 인프라의 긴밀한 통합이 필수적임을 강조)</p><p>• "69% of observed risks were linked to compromised user credentials, compared with 12% related to traditional technical vulnerabilities, signaling a decisive shift in attacker behavior."<br>(관찰된 위험의 69%가 손상된 사용자 자격증명과 연관되어 있으며, 이는 공격자 행동 방식의 결정적 전환을 의미)</p><h3>Technical Insights</h3><p>• **신원 기반 공격의 해양산업 영향**: 승무원 네트워크 영역(82%)에 집중된 공격은 해양 선박의 OT 시스템이 IT 네트워크를 통해 접근되는 구조의 근본적 취약점을 드러내며, COLREG 준수 시스템부터 엔진 제어 시스템까지 광범위한 운영 영향 초래 가능</p><p>• **IT/OT 수렴 시대의 IMO 규정 적응**: IMO 사이버 보안 가이드라인(2021)이 강조하는 시스템 분리 원칙과 현실적 공유 인프라(60%) 간의 괴리 증대로, 신규 규제 프레임워크 개발 필요성 제기</p><p>• **자율선박 운영의 사이버 보안 함의**: 원격 운영 환경에서의 자율선박 도입 시, 육상 제어 센터와 선박 시스템 간 네트워크 종속성 심화로 인해 신뢰할 수 있는 접근 제어와 다중 요소 인증의 필수성 증가, 운영 연속성 보장 필수</p><p>• **인적 요소 기반 방어 전략의 중요성**: 초기 손상의 주요 경로인 피싱(사용자 클릭 20%) 및 자격증명 공개(11%)의 해결을 위해, 기술적 통제만이 아닌 지속적 사</p></div>`,
      tags: ["Cybersecurity","Maritime","Remote Operations","Identity Theft","Human Error"],
      link: "https://www.marinelink.com/news/evolving-cyber-risk-driven-user-538053",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-15
addEvents({
  "2026-04-15": [
    {
      type: "news",
      title: "Royal Australian Navy formally names Maritime Autonomous Systems Unit (MASU)",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-15",
      image: "https://www.navalnews.com/wp-content/uploads/2024/08/3-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호주 해군이 해양 자율시스템 부대(MASU)를 공식 명명하여 무인 해상 시스템의 운영 통합을 가속화하는 이정표 달성</p><p>• Ghost Shark 초대형 무인 잠수정(XL-UUV), Bluebottle 무인 수상함정(USV), Speartooth 대형 무인 잠수정(LUUV) 등 다중 자율시스템 운영 능력 보유</p><p>• 무인시스템제어센터(USCC)와 전개 가능 차량팀으로 구성되어 전 세계 임의의 항만에서 자율시스템 배치 및 제어 수행 가능</p><p>• AUKUS 2기둥(Pillar Two)의 일환으로 교리 개발, 실험, 운영, 훈련, 시험 평가의 중심 역할 담당</p><p>• 유인 함정을 보완하여 작전 범위 확대, 내구력 증대, 해군 인원 위험 감소로 미래 전장 대비 강화</p><h3>Key Quotes</h3><p>• "Announcing MASU's name gives the team a formal sense of identity as we work to rapidly introduce this capability into the Fleet" (함대에 이 능력을 신속히 도입하기 위해 공식적인 단체 정체성 부여)</p><p>• "MASU will provide Navy with a long-range autonomous undersea capability through uncrewed systems...to provide a range of asymmetric options to complement Defence's existing crewed force" (무인시스템을 통해 장거리 자율 수중 능력 제공, 기존 유인 전력을 보완하는 다양한 비대칭 옵션 제시)</p><h3>Technical Insights</h3><p>• **자율 무인 시스템의 전술 운영**: Ghost Shark, Bluebottle, Speartooth 등 이질적 자율시스템의 통합 운영으로 정보·감시·정찰(ISR) 및 타격 임무의 지속성과 효율성 극대화 가능</p><p>• **IMO/COLREG 국제 규범과의 조화**: 해양 자율시스템의 국제 해역 운항에 있어 AUKUS 및 국제 동맹국과의 협력을 통한 운영 표준 및 교리 개발 필요</p><p>• **산업-국방 협력 생태계**: 방위산업, 연구기관, 국제 동맹국과의 협력으로 신흥 자율시스템 기술의 신속한 통합 및 성숙화 추진</p><p>• **전략적 비용-효율성**: 유인 함정의 인원 위험 감소와 작전 범위 확대를 통해 해양 방어 전략의 회복탄력성 및 비용 효율성 향상</p></div>`,
      tags: ["autonomous systems","Royal Australian Navy","uncrewed vehicles","AUKUS","maritime defense"],
      link: "https://www.navalnews.com/naval-news/2026/04/royal-australian-navy-names-autonomous-systems-unit/",
      coords: [151.2093,-33.8688],
      location: "Sydney, Australia"
    },
    {
      type: "news",
      title: "FMD's Vestdavit unveils AutoHook LARS for autonomous USV recovery",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-15",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/Autohook-Fully-Autonomous-Vessel-Recovery-Interface-by-Fairbanks-Morse-Defenses-Vestdavit.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Fairbanks Morse Defense(FMD)의 Vestdavit이 무인수상함(USV) 회수를 위한 최초의 완전 자율 Launch and Recovery System(LARS) 'AutoHook™' 개발 완료</p><p>• AutoHook는 기존 해상 상태 2(Sea State 2) 제약을 넘어 해상 상태 4(Sea State 4)에서 운영 승인 달성, 완전 자동화를 통해 인적 개입 제거</p><p>• AI 기반 비전 시스템과 탑재 추진기를 활용하여 동적 목표물 추적 및 안정적 고정, 승무원 노출 위험 제거 및 작전 효율성 향상</p><p>• NATO 작전 표준 준수 및 연합군 함대 간 상호운용성 설계로 기존 함선 개조 없이 간단한 설치 가능</p><p>• 무인 시스템의 분산 해양 작전 전환에 따른 미국 및 동맹국 해군의 신뢰할 수 있는 자동화 능력 제공</p><h3>Key Quotes</h3><p>• "The global shift toward distributed maritime operations depends on unmanned systems that perform in real-world conditions and integrate seamlessly across allied fleets. AutoHook not only supports fleet modernization, it breaks the Sea State 2 ceiling that has long constrained manual launch and recovery." <br>(분산 해양 작전으로의 전환은 실제 조건에서 작동하고 연합군 함대 간 원활하게 통합되는 무인 시스템에 달려 있으며, AutoHook는 기존 해상 상태 2 제약을 극복한다)</p><p>• "By delivering advanced launch and recovery solutions purpose-built for the operational demands of the U.S. fleet, we are helping ensure American forces, and those of our allies, have the reliable, scalable capability they need to operate effectively today and for decades to come."<br>(미 해군의 작전 수요에 맞춘 고급 발진·회수 솔루션을 제공함으로써 미국과 동맹국 해군이 오늘날 그리고 향후 수십 년간 효과적으로 작전할 수 있는 신뢰성 있는 확장 가능한 능력을 보장)</p><h3>Technical Insights</h3><p>• **자율 무인시스템 운용 혁신**: AI 기반 비전 시스템과 온보드 추진기를 통해 기존 원격 조종 방식에서 완전 자동화 운영으로 전환, 해상 상태 4까지 안정적 운영 가능 - 이는 해양 작전 안전성 및 효율성 대폭 향상</p><p>• **NATO 상호운용성 표준 부합**: 연합군 함대 간 호환성 확보로 국제 해양 방위 협력 강화, 기존 함선 대폭 개조 없이 클램프 방식 설치로 비용 절감 및 신속 배치 가능</p><p>• **무인 수상함(USV) 운영 패러다임 전환**: 완전 자동화된 발진·회수 시스템으로 분산 해양 작전(Distributed Maritime Operations) 실현 가능, 무인 함대 확대에 따른 해군 운영 혁신 지원</p><p>• **작업자 안전성 및 작전 신뢰도 향상**: 자동화를 통해 수동 연결 과정에서 발생하는 인적 부상 위험 제거, 동적 목표물 추적의 정확성 및 속도 증가로 작전 신뢰성 확보</p></div>`,
      tags: ["Autonomous Systems","USV","LARS","Maritime Technology","Defense Innovation"],
      link: "https://www.navalnews.com/naval-news/2026/04/fmds-vestdavit-unveils-autohook-lars-for-usv/",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "Royal Navy seeks unmanned aerial systems for maritime test range operations",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-15",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 영국 해군이 해상 무기 시험 범위 정리 및 모니터링용 무인항공시스템(UAS) 도입을 위한 공식 정보요청(RFI)을 2026년 4월 14일 발표<br>• 영국 국방조달포털(Defence Sourcing Portal) 및 계약체계(Contracts Finder)를 통해 광범위한 기술 규격서 공개<br>• 해군 사령부에서 주도하는 이번 RFI는 테스트 레인지 운영의 자동화 및 효율성 향상을 목표<br>• 무인항공시스템은 위험한 해상 환경에서 인명 손실 없이 감시 및 정리 작업 수행 가능<br>• 방위산업 기업들의 기술 제안 수렴으로 차세대 해상 운영 체계 개발 촉진 예상</p><h3>Key Quotes</h3><br>• "The Royal Navy has launched a formal Request for Information (RFI) seeking unmanned aerial systems capable of clearing and monitoring maritime weapons test ranges" (영국 해군이 해상 무기 시험 범위 정리 및 모니터링을 위한 무인항공시스템 도입 제안을 공식 요청)<br>• "Navy Command Headquarters announced on April 14, 2026" (해군 사령부 본부가 2026년 4월 14일 공식 발표)</p><h3>Technical Insights</h3><br>• 무인항공시스템의 자율운영 기술은 해상 시험 범위의 안전성 강화 및 운영 효율성 증대에 기여 예상<br>• 국방 부문의 드론 기술 고도화는 해양 감시 및 모니터링 분야 민간 자율항해 기술로의 파급효과 가능<br>• IMO 해상안전 규정 강화와 함께 해상 자동화 기술의 수용성 증대로 방위산업-민간해운업 기술 교류 활성화 가능성<br>• 테스트 레인지 운영의 자동화는 해상에서의 무인운영시스템 검증 플랫폼으로 작용하여 향후 자율선박 개발에 선행 데이터 제공</p></div>`,
      tags: ["Royal Navy","Unmanned Aerial Systems","Maritime Test Ranges","Defense Procurement"],
      link: "https://defence-blog.com/royal-navy-seeks-drones-to-clear-maritime-test-ranges/",
      coords: [-3.4353,55.3781],
      location: "United Kingdom"
    },
    {
      type: "news",
      title: "UAE firm BGN secures first LNG carrier through joint venture with CCEC, targets two vessels by 2027",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-15",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/BGN-signs-JV-with-CCEC-for-LNG-carrier.jpg?image-crop-positioner-ts=1776262006",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **BGN의 LNG 선박 진출**: 두바이 기반 에너지·원자재 거래회사 BGN이 CCEC 계열사와의 장기 차터 계약을 통해 첫 LNG 운송선 'Amore Mio I'를 2027년 초 인수할 예정</p><p>• **전략적 합작회사 설립**: BM Capital이라는 합작회사를 통해 174,000 cbm 규모의 2행정 LNG 운반선을 10년 장기 차터(6년 추가 연장 옵션)하는 거래 체결</p><p>• **친환경 규제 준수**: IMO Tier III 배출 기준을 충족하며 선박 재액화 장치와 축발전기를 갖춘 최신형 선박으로, 글로벌 고객 수요 충족 능력 강화</p><p>• **야심찬 함대 확대 계획**: 2027년까지 LNG 운반선 2척, 2028년까지 LPG 운반선 10척 도입을 목표로 하는 적극적 해운 사업 전략 추진</p><p>• **CCEC의 포트폴리오 다양화**: Capital Clean Energy Carriers는 이 거래를 통해 신용도 높은 에너지 거래 파트너와의 장기 협력 관계 구축 및 현금흐름 가시성 강화</p><h3>Key Quotes</h3><p>• "Taking delivery of our first LNG shipping vessel significantly enhances our fleet capacity and ability to meet growing demand across our global customers." (첫 LNG 운송선 인수를 통해 함대 수용력과 글로벌 고객 수요 충족 능력이 크게 향상될 것)</p><p>• "We are very pleased to have concluded this innovative transaction with the BGN group, which enables CCEC to achieve several strategic objectives simultaneously." (BGN 그룹과의 혁신적 거래 체결을 통해 CCEC의 여러 전략적 목표를 동시에 달성할 수 있게 됨)</p><h3>Technical Insights</h3><p>• **IMO 규제 대응**: Amore Mio I의 IMO Tier III 배출 기준 준수는 국제 해양 환경 규제 강화 추세에 부응하는 선박 운영 전략으로, 향후 해운사들의 필수 투자 요소가 될 것으로 예상</p><p>• **LNG 운송 시장 안정성**: 장기 10년 차터 계약으로 보아 LNG 운송 부문이 주요 에너지 거래사들에게 안정적이고 수익성 있는 사업으로 평가받고 있음을 시사</p><p>• **합작투자 모델의 확산**: 선박 소유와 운영을 분리하여 여러 파트너가 참여하는 구조로, 고가의 선박 자산에 대한 투자 리스크 분산과 자본 효율성 향상을 도모하는 해운업 트렌드 반영</p></div>`,
      tags: ["LNG carrier","Fleet expansion","BGN Shipping","CCEC","Maritime logistics"],
      link: "https://www.offshore-energy.biz/uae-firm-to-enrich-fleet-with-two-lng-carriers-by-2027-first-vessel-deal-now-in-the-bag/",
      coords: [55.2708,25.2048],
      location: "Dubai, UAE"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-15
addEvents({
  "2026-04-15": [
    {
      type: "news",
      title: "Samsung Heavy Industries selects GTT for LNG carrier tank design",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-15",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/02/LNG-vessel-Source-GTT.jpg?image-crop-positioner-ts=1771505165",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• GTT(Gaztransport & Technigaz)가 삼성중공업으로부터 LNG 운반선의 저온 탱크 설계 수주 획득<br>• 174,000 입방미터(cbm) 용량의 LNG 운반선으로 2029년 인도 예정<br>• GTT의 Mark III Flex 멤브레인 격벽 시스템이 탑재되는 첨단 기술 적용 프로젝트<br>• 아시아 선주를 대상으로 2026년 1분기에 수주 확정<br>• 최근 중국 우동조선(Hudong-Zhonghua)에서 4척의 LNG 운반선 설계 수주에 이어 추가 성과</p><h3>Key Quotes</h3><br>• "The tanks will be fitted with GTT's Mark III Flex membrane containment system." (GTT의 Mark III Flex 멤브레인 격벽 시스템이 탑재될 예정)<br>• "The delivery of the vessel is expected in 2029." (선박의 인도는 2029년 예상)</p><h3>Technical Insights</h3><br>• LNG 운반선의 저온 저장 기술에서 GTT의 Mark III Flex 멤브레인 시스템은 업계 표준급 기술로, 안전성과 효율성 극대화<br>• 174,000 cbm 규모는 초대형 LNG 운반선 범주로, 글로벌 LNG 무역 확대 추세 반영<br>• 삼성중공업과 GTT의 지속적 협력은 한국 조선업의 고부가가치 LNG 선박 건조 역량 강화를 의미하며, 해양 에너지 인프라 고도화 추세와 일치</p></div>`,
      tags: ["LNG carrier","GTT","Samsung Heavy Industries","Tank design","Mark III Flex"],
      link: "https://www.offshore-energy.biz/samsung-heavy-industries-handpicks-gtt-for-lng-vessels-tank-design/",
      coords: [127.1086,37.2663],
      location: "South Korea"
    }
  ]
});

// Auto-collected: 2026-04-16
addEvents({
  "2026-04-16": [
    {
      type: "news",
      title: "Seaspan Marine Sells Chip and Hog Fuel Barge Division to Hodder Tugboat",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-16",
      image: "https://images.marinelink.com/images/maritime/w800/source-seaspan-169863.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Seaspan Marine이 칩(chip) 및 호그 연료 바지선(hog fuel barge) 사업부를 Hodder Tugboat에 매각하기로 합의<br>• 거래에는 인력, 기존 서비스, 연안 예인선(coastal tug), 강(river) 예인선, 바지선 및 관련 유지보수 시설 포함<br>• Hodder Tugboat은 Richmond 소재의 확립된 해양 운송 회사로 벌목 산업 전문성 보유<br>• Seaspan Marine은 100년 이상 태평양 연안에서 상업 및 산업 고객을 위한 해양 서비스 제공<br>• 이번 거래는 Seaspan의 선박 지원(ship assist) 및 선박 호위(vessel escort) 핵심 서비스에 자원을 집중시키는 전략적 재편</p><h3>Key Quotes</h3><br>• "This transition marks a strategic alignment of the company's operations, focusing on positioning resources around its core service offerings of ship assist and vessel escort to support ports, new terminals, and the increased number of vessels requiring specialized assistance." (이번 전환은 항만, 신규 터미널, 그리고 특화된 지원이 필요한 증가하는 선박 수를 지원하기 위해 선박 지원 및 선박 호위라는 핵심 서비스 중심으로 자원을 재배치하는 전략적 정렬을 의미함)</p><p>• "The acquisition of Seaspan's chip and hog barge division is a natural extension of that expertise, reinforcing Hodder's commitment to service for its coastal clients." (Seaspan의 칩 및 호그 바지선 사업부 인수는 Hodder의 기존 전문성의 자연스러운 확장이며 연안 고객 서비스 헌신을 강화함)</p><h3>Technical Insights</h3><br>• 해양 운송 산업의 사업 재편 트렌드 - 기업들이 핵심 역량 중심으로 포트폴리오를 재구성하고 있으며, 선박 지원 및 호위 서비스의 중요성이 증가하고 있음<br>• 지역별 전문화 심화 - Hodder의 벌목 산업 관련 운송 전문성과 Seaspan의 자산이 결합되어 태평양 연안 특화 서비스 강화 달성<br>• 항만 현대화와 선박 복잡도 증가로 인한 선박 지원 서비스 수요 확대가 Seaspan의 전략적 초점 변화를 주도하는 산업 동향 반영</p></div>`,
      tags: ["M&A","Marine Services","Barge Operations","Tugboat","Forestry Transportation"],
      link: "https://www.marinelink.com/news/seaspan-marine-sells-chip-hog-fuel-barge-538117",
      coords: [-123.2208,49.2827],
      location: "Pacific Coast / Richmond, BC"
    },
    {
      type: "news",
      title: "Iran Proposes Oman Exit Corridor for Strait of Hormuz Traffic",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-16",
      image: "https://images.marinelink.com/images/maritime/w800/alones-adobe-169861.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 호르무즈 해협을 통한 선박 통행료 부과 제안을 철회하고 오만 쪽 해역을 통한 자유로운 통행 허용 제안으로 전환 - 미국과의 협상 타결 조건<br>• 2월 28일 미-이스라엘 전쟁으로 인해 호르무즈 해협 통행 중단으로 전 세계 석유·LNG 공급량의 약 20% 차질, 수백 척의 유조선과 2만 명의 해원이 걸프만에 고립<br>• 4월 8일 2주일 휴전이 시작되었으며 트럼프 대통령은 전쟁 종료가 임박했다고 발표했으나, 호르무즈 해협 통제권이 협상의 핵심 쟁점으로 남아있음<br>• 제안 이행 조건은 미국이 이란의 요구를 수용하는지 여부에 달려있으며, 이란이 오만 영해에 설치한 지뢰 제거 또는 이스라엘 관련 선박의 통행 허용 여부는 미정<br>• 국제해사기구(IMO) 회원국들은 호르무즈 해협 통행료 부과가 국제해사법 위반이라는 강경한 입장 유지</p><h3>Key Quotes</h3><p>• "Iran could consider allowing ships to sail freely through the Omani side of the Strait of Hormuz without risk of attack as part of proposals it has offered in negotiations with the United States" (이란이 미국과의 협상에서 호르무즈 해협 오만 쪽을 통한 선박의 자유로운 통행을 공격 위험 없이 허용하는 방안을 제시했다)</p><p>• "The proposal would be the first visible step by Tehran to pull back from more combative ideas floated in recent weeks, which included charging ships for passage through the international waterway" (이 제안은 선박 통행료 부과 등의 강경한 입장에서 물러나는 이란의 첫 번째 가시적 움직임이다)</p><h3>Technical Insights</h3><p>• 호르무즈 해협의 34km 폭 중 오만 영해 통행 통제는 국제해사법상 영해주권 행사와 공해 자유 항행권 간의 미묘한 법적 균형점으로, IMO가 인정한 1968년 양방향 통행분리제도(TSS)와의 조화 필요<br>• 지뢰 설치·제거, 선박 선별 통행 등 해군 작전 문제가 해결되지 않으면 선주 보험료 급등으로 인한 해운·에너지 가격 전가 위험 지속<br>• 국제해사기구의 강경한 입장은 일관된 해양법 준칙 유지의 중요성을 반영하며, 호르무즈 해협 통행료 선례화 방지가 글로벌 해상로 자유 항행의 기본 원칙 보호에 필수적</p></div>`,
      tags: ["Strait of Hormuz","Iran negotiations","Maritime security","Shipping disruption"],
      link: "https://www.marinelink.com/news/iran-offer-oman-exit-proposal-538115",
      coords: [56.2639,26.1551],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-17
addEvents({
  "2026-04-17": [
    {
      type: "news",
      title: "Starlink Outage Exposes Pentagon's Growing Reliance on SpaceX for Autonomous Naval Operations",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-17",
      image: "https://images.marinelink.com/images/maritime/w800/photocreo-bednarek-169910.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2025년 8월 Starlink 글로벌 장애로 인해 미 해군의 무인 수상함정(자율주행 드론) 약 24척이 캘리포니아 연안에서 통신 두절 및 약 1시간 운영 중단 발생</p><p>• 사건 관련 주체: 미 해군(U.S. Navy), SpaceX/Starlink, 국방부(Pentagon), 우주군(U.S. Space Force)</p><p>• SpaceX는 저궤도 위성통신 분야에서 거의 독점적 지위 확보 중이며, 펀딩 라운드에서 2조 달러 기업 가치 평가 예상</p><p>• 미 정부의 Starlink 의존도 심화에 따른 단일 실패점(Single Point of Failure) 리스크 노출 - 자율함정, 미사일 추적, 국방 AI 등 핵심 프로그램 영향</p><p>• 민주당 의원들이 세계 최고 부자 주도의 단일 기업에 대한 국방부 의존도 증가에 대한 경고 제시</p><p>• Amazon의 Globalstar 인수($116억) 등 경쟁 심화에도 불구하고 SpaceX의 저궤도 통신 시장 우위 지속</p><h3>Key Quotes</h3><p>• "If there was no Starlink, the U.S. government wouldn't have access to a global constellation of low earth orbit communications" (만약 Starlink이 없다면, 미 정부는 글로벌 저궤도 위성통신 네트워크에 접근할 수 없을 것이다 - CSIS 항공우주보안 프로젝트 차장 Clayton Swope)</p><p>• "Department leverages multiple, robust, resilient systems for its broad network" (국방부는 광범위한 네트워크를 위해 다양하고 견고하며 복원력 있는 시스템을 활용하고 있다 - 국방부 최고정보책임자 Kirsten Davies)</p><h3>Technical Insights</h3><p>• **자율주행 함정의 통신 인프라 의존성**: 무인 수상함정(USV) 운영에 있어 저궤도 위성통신이 필수 요소이나, 단일 벤더의 서비스 장애 시 전체 작전 중단 위험 - COLREG 자동화 시스템의 신뢰성 문제와 연계</p><p>• **국방 자율화 기술의 취약점**: 드론 제어, 미사일 추적, AI 기반 전술체계 등 첨단 국방 자율시스템이 민간 위성통신 인프라에 종속되는 구조적 리스크 - IMO 자율선박 규범과 별개로 국방 차원의 독립적 통신망 필요성 대두</p><p>• **저궤도 위성 통신의 산업화 및 규제 이슈**: SpaceX의 거의 독점적 지위가 경쟁 부재로 인한 서비스 품질 개선 둔화 가능성 및 국가안보 차원의 공급망 다원화 필요 - 향후 Amazon, OneWeb 등 경쟁자 진입에 따른 시장 재편 예상</p><p>• **자율선박과 국방 자동화의 수렴**: 상용 자율선박 기술이 군사적으로 활용되면서 민간 통신 인프라 의존도 증가 - IMO 자율선박 안전 기준(e-Navigation, MASS Code)과 국방 운영의 안전성 상충 가능성 주의</p></div>`,
      tags: ["Autonomous Ships","Starlink","Pentagon","Military Communications","Unmanned Vessels"],
      link: "https://www.marinelink.com/news/starlink-outage-exposes-pentagons-growing-538182",
      coords: [-120.4,36.7],
      location: "California Coast, USA"
    }
  ]
});

// Auto-collected: 2026-04-16
addEvents({
  "2026-04-16": [
    {
      type: "news",
      title: "Mermaid Subsea Services extends Island Valiant contract for North Sea decommissioning",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-16",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/93-meter-subsea-support-vessel-stays-with-Mermaid-Subsea-Services.jpg?image-crop-positioner-ts=1776338113",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 머메이드 해상 서비스(Mermaid Subsea Services)가 북해 작업용 93.4미터 규모의 Island Valiant 선박과의 계약을 추가로 12개월 연장<br>• 2024년부터 운영해온 Island Valiant는 유정 폐기(P&A)·정밀검사·수리·유지보수(IRM) 활동에 투입되고 있음<br>• 북해 해제(decommissioning) 시장이 향후 수개월~수년에 걸쳐 활동 증가 예상되는 전환기에 진입<br>• Island Valiant는 2007년 인수 후 고정식 작업급 원격조종차량(WROV)과 악천후용 LARS 장비 탑재<br>• 머메이드는 2024년 이후 3년간 축적한 북해 해제 분야 전문성으로 지역 내 주요 공급업체로 입지 확보</p><h3>Key Quotes</h3><br>• "The North Sea decommissioning market is at a pivotal moment, with operations set to ramp up in the coming months and years" (북해 해제 시장이 향후 수개월과 수년에 걸쳐 작업이 증가될 전환점에 위치)<br>• "By committing to the basin for another 12 months, we're continuing to provide our customers with an expertise in well decommissioning and asset integrity" (추가 12개월 계약으로 고객에게 유정 해제 및 자산 무결성 분야의 전문성 제공 지속)</p><h3>Technical Insights</h3><br>• 북해 해제 산업의 성장 국면에서 고정식 WROV 및 악천후용 해중 작업 장비를 갖춘 전문 지원선박의 가용성 중요성 증대<br>• 에너지 전환 정책에 따른 노후 해양 구조물 해제 수요 급증으로 그레이 플릿(grey fleet) 대응 및 안전운영 표준화 필요<br>• 60인 수용 능력의 중형 지원선박이 북해의 악천후 환경에서 안정적인 인력 운영 및 물류 지원을 가능하게 함</p></div>`,
      tags: ["subsea support vessel","North Sea","decommissioning","well abandonment"],
      link: "https://www.offshore-energy.biz/93-meter-subsea-support-vessel-stays-with-mermaid-subsea-services/",
      coords: [-2,57.5],
      location: "North Sea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-17
addEvents({
  "2026-04-17": [
    {
      type: "news",
      title: "Europe Moves From Rhetoric to Planning as Paris Summit Weighs Hormuz Security Mission",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-17",
      image: "https://gcaptain.com/wp-content/uploads/2025/11/Red-Sea-transit.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **호르무즈 해협 안보 미션의 실질적 추진**: 파리 정상회담에서 유럽을 중심으로 약 40개국이 참여하여 상업선박의 호르무즈 해협 통과 보안을 위한 다국적 군사작전 구성을 논의 중</p><p>• **이란-미국의 상충되는 공개 성명**: 이란은 휴전 기간 동안 해협을 "완전히 개방"했다고 선언하면서도 이란 해안선을 따르는 "조정된 항로" 준수를 요구하고, 트럼프 대통령은 "완전 개방"을 재확인하되 이란에 대한 해군 봉쇄는 유지하겠다고 선언</p><p>• **독일의 조건부 참여 의사**: 프리드리히 머츠 독일 총리가 휴전, UN 안보리 국제 위임, 독일 의회 승인을 전제로 호르무즈 해협 보안 작전 지원 준비 의사 표시</p><p>• **글로벌 해운·에너지 시장에 미치는 영향**: 호르무즈 해협은 세계 석유 20% 이상을 운송하는 전략적 병목지점으로, 장기 운송 마비 시 탱커 요율, 벙커유 가격, 보험료, 공급망 전반에 큰 영향</p><p>• **유럽의 이중 목표**: 전투 작전 회피 선호와 글로벌 무역로 보호 사이의 외교적 균형 모색, 이론상 개방과 실제 운영 간 격차 해결 필요</p><h3>Key Quotes</h3><p>• "passage for all commercial vessels through the strait is 'declared completely open' for the duration of the ceasefire, with transits to follow a 'coordinated route' along Iran's coastline" (휴전 기간 동안 모든 상업선의 해협 통과가 "완전히 개방"되며, 이란 해안선을 따르는 "조정된 항로"를 준수해야 함)</p><p>• "Germany was prepared in principle to help secure maritime traffic through Hormuz, but only if there were a ceasefire, an international mandate, ideally from the United Nations Security Council, and approval from the German parliament" (독일은 휴전, 국제 위임(이상적으로는 UN 안보리), 국회 승인을 전제로 호르무즈 해협 해상 교통 보안 지원 준비)</p><h3>Technical Insights</h3><p>• **항로 제한과 해상 자유도 불일치**: 이란의 "조정된 항로" 요구는 실질적 운항 자유도를 제한하는 것으로 보이며, UNCLOS(국제해양법협약) 상 해협 통항권과의 법적 충돌 가능성 존재</p><p>• **다국적 해상 안보 작전의 규제 프레임워크**: UN 안보리 위임 없는 유럽의 독립적 작전 추진 가능성이 국제해양법과 IMO 규범상 논란의 여지를 남김</p><p>• **호르무즈 해협 해상 교통 관리의 기술적 과제**: 실시간 선박 추적(AIS), 조정된 항로 준수 감시, 멀티 스테이크홀더 간 정보 공유 체계 필요성 증가로 해양 자율선박 기술의 실제 적용 기회 확대</p><p>• **지정학적 리스크 관리의 보험·비용 구조**: 조건부 개방으로 인한 지속적인 불확실성은 선사의 보험료, 연료비, 우회항로 비용 증가를 초래하며, 이는 해운업계의 자동화·효율화 투자 동력으로 작용</p></div>`,
      tags: ["Strait of Hormuz","Maritime Security","Multinational Coalition","Freedom of Navigation","Geopolitics"],
      link: "https://gcaptain.com/europe-moves-from-rhetoric-to-planning-as-paris-summit-weighs-hormuz-security-mission/",
      coords: [56.2465,26.1367],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Iran Declares Strait of Hormuz Open Amid Geopolitical Tensions and U.S. Blockade Concerns",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-17",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-03-26T191814Z_1897759985_RC2OZJAQWKGC_RTRMADP_3_CERAWEEK-ENERGY-OIL-PROFIT-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 이란이 호르무즈 해협의 상업용 선박 통행을 "완전히 개방"했다고 선언했지만, 이란 해안선을 따라가야 하는 "조정된 항로" 요구로 인해 실제 운영상 불명확성이 존재함</p><p>• 트럼프 대통령이 호르무즈 개방을 환영했으나, 동시에 미국의 해상 봉쇄가 "완전한 효력을 유지"할 것이라 명시하여 모순된 입장을 드러냄</p><p>• 유전 가격이 이 소식에 10% 이상 급락했으며, 이는 글로벌 에너지 시장에 즉각적인 영향을 미쳤음</p><p>• 호르무즈 해협의 기존 해운 항로에 해양 지뢰가 여전히 존재할 가능성이 있어 실제 통행의 안전성이 불확실함</p><p>• 미국의 해상 봉쇄가 항구 중심에서 글로벌 차원의 적발 캠페인으로 확대되었으며, JMIC의 최신 권고는 이란 해역 외에서도 선박 검사 및 압수가 가능함을 시사</p><h3>Key Quotes</h3><p>• "Passage for all commercial vessels through the Strait of Hormuz is declared completely open for the remainder of the ceasefire." (호르무즈 해협을 통한 모든 상업용 선박의 통행이 휴전 기간 동안 완전히 개방되었다는 선언)</p><p>• "The strait is completely open and ready for business and full passage, while emphasizing that the U.S. naval blockade would remain in full force and effect as it pertains to Iran." (해협이 완전히 개방되어 있으나, 미국의 해상 봉쇄는 이란과 관련하여 완전한 효력을 유지한다는 이중적 입장)</p><p>• "Iran has agreed to never close the Strait of Hormuz again. It will no longer be used as a weapon against the World!" (이란이 호르무즈 해협을 다시는 닫지 않겠다고 합의했다는 외교적 성명)</p><h3>Technical Insights</h3><p>• 호르무즈 해협의 "조정된 항로(coordinated route)" 요구사항은 이란 당국과의 실시간 조율이 필수적임을 의미하며, 이는 선박 운영의 예측 불가능성과 지연을 초래할 수 있음</p><p>• 미국의 "교전권에 의한 검사(belligerent right to visit and search)" 확대는 국제 해법상 중립국 선박의 항행의 자유 원칙과 충돌 가능성이 있으며, IMO 규제와의 조화 필요성이 제기됨</p><p>• 해양 지뢰 제거 작업의 진행 상황이 불명확한 상황에서 선주와 보험업체는 호르무즈 통행 선박에 대한 위험 평가 재검토를 요구할 것으로 예상되며, 통행료 및 보험료 상승 가능성 존재</p><p>• 조건부 개방과 지속적인 미국 봉쇄라는 모순적 상황은 글로벌 해운업계에 규제 불확실성을 야기하며, 호르무즈 우회 항로 개발에 대한 산업계의 재투자 동기를 유발할 수 있음</p></div>`,
      tags: ["Strait of Hormuz","Iran","U.S. Blockade","Shipping Routes","Geopolitical Risk"],
      link: "https://gcaptain.com/iran-and-trump-declare-hormuz-open-but-route-and-u-s-blockade-cloud-reality/",
      coords: [56.2431,26.1367],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Hormuz Strait Reopens After Ceasefire Deal Between Israel and Hezbollah",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-17",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockphotix-169926.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협이 이란-이스라엘 분쟁 이후 휴전협정에 따라 재개되었으며, 이란 외교부 장관 아바스 아라크치가 상업 선박의 통행을 허용한다고 발표<br>• 해협 폐쇄로 인해 전 세계 석유 및 액화천연가스 교역의 5분의 1이 영향을 받았으며, 국제통화기금(IMF)은 세계 경제가 경기 침체에 빠질 위험을 경고<br>• 트럼프 대통령은 이란과의 거래가 곧 완료될 것으로 낙관하지만, 미국의 이란 항구행 선박 봉쇄는 계속 유지<br>• 하팍-로이드(Hapag-Lloyd)와 노르웨이선주협회(Norwegian Shipowners' Association) 등 주요 해운사는 기뢰 위협 등을 이유로 신중한 입장 유지<br>• 휴전 이전 하루 평균 130척의 선박이 통과했으나, 해운사들은 정상 운영 복귀에 시간이 소요될 것으로 예상</p><h3>Key Quotes</h3><p>• "The Strait was open for all commercial vessels for the remainder of the U.S.-brokered 10-day truce between Israeli forces and Iran-backed Hezbollah" (이란은 미국이 중재한 10일간의 휴전 기간 동안 모든 상업 선박의 통행을 허용한다고 발표)</p><p>• "Transit would be through designated lanes that Iran deemed safe for navigation and would exclude naval vessels" (이란이 안전하다고 판단하는 지정된 항로를 통해서만 통행 가능하며, 군함은 제외된다는 의미)</p><p>• "Several factors needed to be clarified, including the possible presence of sea mines" (기뢰의 가능성을 포함하여 여러 요인이 명확히 되어야 한다는 해운업계의 우려)</p><h3>Technical Insights</h3><p>• 호르무즈 해협 폐쇄로 전 세계 해상 물동량의 약 20%가 영향을 받았으며, 재개통이 글로벌 해운 산업의 회복에 미치는 파급 효과는 상당할 것으로 예상</p><p>• 이란이 지정된 항로(designated lanes)를 통한 통행만 허용하겠다는 입장은 기존 항해 자유도(freedom of navigation)와 국제해사법상 무해통항권(innocent passage)에 영향을 미칠 수 있는 사항</p><p>• 기뢰 제거 및 해상 안전 확보 등 실질적인 해양 인프라 복구 없이는 일일 130척 수준의 통상 물동량 회복에 상당한 시간이 소요될 것으로 분석</p><p>• 미국의 해상 봉쇄 유지로 인해 이원화된 해협 통행 체계가 형성될 수 있으며, 이는 해운 기업의 경로 선택 및 보험료 산정에 추가적인 복잡성 초래</p></div>`,
      tags: ["Hormuz Strait","Ceasefire","Iran-Israel Conflict","Shipping Routes"],
      link: "https://www.marinelink.com/news/hormuz-strait-reopens-ceasefire-deal-538201",
      coords: [56.5,26.5],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "World's First Global Shipping Carbon Price Talks Resume at UN",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-17",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2022/10/Screenshot_3.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IMO는 2023년 해운 부문의 기후 목표 달성을 위해 탄소가격 제도(economic measure)와 연료 기준(technical measure) 병행을 합의했으며, 2025년 IMO Net-Zero Framework(NZF)에 포함되었음</p><p>• 미국, 사우디아라비아, 러시아 등 석유 생산국의 강한 반발로 NZF 채택이 지연되었으며, 2026년 11월까지 재논의 예정</p><p>• UN 산하 IMO 런던 본부에서 4월 20-24일 기술 실무그룹 회의(ISWG-GHG-21)와 4월 27일-5월 1일 해양환경보호위원회 84차 회의(MEPC84) 개최 예정</p><p>• Tufts 대학 Rockford Weitz 교수는 트럼프 정부의 NZF 거부가 미국의 조선업 부흥과 글로벌 경쟁력 강화 목표와 모순된다고 지적</p><p>• 글로벌 해운 포럼 Jesse Fahnestock은 "산업이 필요로 하는 것은 안정적이고 강제성 있으며 포용적인 규제 틀"이라 강조</p><p>• 탄소가격 제도 도입 시 선주들의 친환경 연료(암모니아, 메탄올 엔진) 투자 유인 제공 및 장기적 연료비 절감 기대</p><h3>Key Quotes</h3><p>• "By rejecting the IMO Net-Zero Framework, the Trump administration is letting ideology undermine their own goals, as outlined in the 2025 National Maritime Strategy and 2026 Maritime Action Plan" <br>(IMO Net-Zero Framework를 거부함으로써 트럼프 정부는 자신들의 해운전략과 목표를 이념으로 훼손하고 있다는 비판)</p><p>• "One of the best ways to achieve this is by supporting investment in new, clean technologies, including ships powered by ammonia and methanol powered engines"<br>(암모니아 및 메탄올 추진 선박 같은 청정기술 투자 지원이 산업 경쟁력 강화의 최선책임)</p><p>• "Global regulation will give the industry the certainty it needs to make critical investments in the new fuels, vessels, and infrastructure needed to deliver on that strategy"<br>(국제 규제는 산업에 친환경 연료, 선박, 인프라 투자를 위한 확실성을 제공함)</p><h3>Technical Insights</h3><p>• IMO Net-Zero Framework는 탄소가격 메커니즘(carbon pricing)과 기술 기준(fuel standard) 두 가지 축으로 설계되어 있으며, 이는 해운 산업의 구조적 전환에 필수적인 이중 정책 수단</p><p>• 글로벌 탄소가격 제도 도입 시 암모니아(NH₃), 메탄올(CH₃OH) 등 차세대 해운 연료로의 기술 전환 촉진 및 투자 유인 강화 가능</p><p>• 미국 등 주요국의 거부로 인한 규제 불확실성은 선주들의 장기 투자 의사결정을 저해하며, 결과적으로 IMO 2030/2040/2050 탄소중립 목표 달성 지연 우려</p><p>• MEPC84 회의의 결정 여부가 2026년 말 최종 채택까지의 기술적·정치적 로드맵을 결정짓는 중요한 분기점 역할</p></div>`,
      tags: ["Carbon Pricing","IMO Net-Zero Framework","Shipping Decarbonization","Climate Regulation"],
      link: "https://www.offshore-energy.biz/worlds-first-global-shipping-carbon-price-talks-back-at-uns-bargaining-table/",
      coords: [-0.1276,51.5074],
      location: "London"
    },
    {
      type: "news",
      title: "Astro Offshore expands ultra-deepwater capabilities with new MPSV Astro Atlas",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-17",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Energy-Savannah-soon-to-be-renamed-Astro-Atlas-Courtesy-of-Golden-Energy-Offshore.jpg?image-crop-positioner-ts=1776427104",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 두바이 기반 해상산업 운영사인 Astro Offshore(아다니 그룹 소속)가 2021년 건조된 97미터 규모의 다목적 지원선(MPSV) '에너지 새바나'호를 인수하여 '아스트로 아틀라스'로 개명하기로 결정</p><p>• 본 선박은 회사 함대 중 최대 규모이며, 150톤 해저 AHC 크레인, 25톤 보조 크레인, 문풀(moonpool) 등을 탑재하고 최대 100명 수용 가능</p><p>• DP2 동적위치 유지 시스템을 갖추고 있으며, 3,000미터 이상의 수심에서 초심해 작업 수행 가능한 능력을 보유</p><p>• Oceaneering International과의 용선 계약을 통해 해저 건설, 케이블 설치, 파이프라인 설치 등 복잡한 해양 작업 지원</p><p>• Astro Offshore CEO Mark Humphreys는 "이 선박이 우리 회사를 초심해 시장에 처음 진입하게 해주며, 더욱 복잡하고 가치 높은 해양 프로젝트에 접근 가능하게 한다"고 평가</p><h3>Key Quotes</h3><p>• "The introduction of Astro Atlas significantly enhances our operational capability and underscores our continued investment in a modern, high-spec fleet, particularly in ultradeepwater environments." (아스트로 아틀라스의 도입은 우리의 운영 능력을 크게 향상시키며, 특히 초심해 환경에서 현대적이고 고성능 함대에 대한 지속적 투자를 재확인하는 것)</p><p>• "This brings together Astro Offshore's modern, high-spec vessel capabilities with Oceaneering's established subsea and ROV expertise, enabling efficient execution of construction, installation, and intervention scopes." (이는 Astro Offshore의 현대적 고성능 선박 능력과 Oceaneering의 확립된 해저 및 ROV 전문성을 결합하여 건설, 설치, 개입 작업의 효율적 수행을 가능케 함)</p><h3>Technical Insights</h3><p>• **초심해 작업 능력의 획기적 전환**: 3,000미터 이상 수심 작업이 가능한 고급 DP2 시스템 도입으로 기존에 수행하지 못했던 초심해 유전 개발, 해저 파이프라인 설치, 해저 탐사 작업 등 고부가가치 프로젝트 진출 가능</p><p>• **산업 파트너십 강화의 중요성**: Oceaneering과의 전략적 제휴를 통해 ROV(원격조종잠수정) 운영 전문성 확보, 해저 작업의 안전성 및 효율성 향상으로 글로벌 해양 에너지 시장에서의 경쟁력 강화</p><p>• **다기능 해상 지원 플랫폼의 시장 수요**: 150톤 크레인과 100명 수용 시설을 갖춘 멀티퍼포스 선박이 재정의되고 있으며, 신재생에너지(해상풍력) 및 전통 석유·가스 산업에서 동시 활용 가능성 증대</p><p>• **지역별 운영 확대 전략**: 중동 허브에서 유럽, 아시아 등 다양한 대륙으로의 지리적 확산 가능성으로 해양 에너지 개발 산업의 글로벌 탈중앙화 추세 반영</p></div>`,
      tags: ["Fleet Expansion","MPSV","Ultra-deepwater Operations","Subsea Support"],
      link: "https://www.offshore-energy.biz/2021-built-vessel-opens-ultra-deepwater-market-doors-for-astro-offshore/",
      coords: [55.2708,25.2048],
      location: "Dubai, UAE"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-17
addEvents({
  "2026-04-17": [
    {
      type: "news",
      title: "Fugro Opens New ROV Test Pool in Singapore for Pre-Deployment Validation",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-17",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• Fugro가 싱가포르에 새로운 ROV(원격 조종 잠수정) 테스트 풀 시설을 개설하여 해양 장비의 사전 성능 검증 능력 강화</p><p>• 통제된 환경에서 기능 테스트, 시스템 통합, 캘리브레이션을 수행하여 현장 배치 전 기술적 위험 최소화</p><p>• 싱가포르 및 캐나다 핼리팩스의 COVE 혁신 허브 확대를 통해 원격 및 자율 기술 역량 강화 중</p><p>• 고객의 해상 작업 시간 단축, 안전성 향상, 신뢰성 개선 등 직접적인 운영 효율성 증대 기대</p><p>• 해양 풍력, 국방 인프라, 해양 기술 등 신흥 시장 분야의 프로젝트 지원 강화</p><p>---</p><h3>Key Quotes</h3><p>• "The commissioning of the ROV test pool significantly enhances our ability to technically de‑risk projects before they reach the field." <br>(ROV 테스트 풀의 준공은 프로젝트가 현장에 도달하기 전에 기술적 위험을 제거할 수 있는 능력을 크게 향상시킨다.)</p><p>• "From here, we can work closely with clients and partners as offshore work continues to evolve—from new offshore wind development to growing defence and marine infrastructure requirements."<br>(이 위치에서 우리는 해상 풍력 개발부터 국방 및 해양 인프라 요구까지 진화하는 해양 작업에서 고객 및 파트너와 긴밀히 협력할 수 있다.)</p><p>---</p><h3>Technical Insights</h3><p>• **자율 및 원격 기술 통합**: Fugro의 ROV 테스트 풀은 장비의 사전 배치 검증을 통해 자율 잠수정의 안정성과 신뢰성을 향상시키는 데 중추적 역할을 수행하며, 이는 COLREG 준수 및 자동화 시스템의 성능 검증에 필수적</p><p>• **해양 산업 인프라 고도화**: 싱가포르와 캐나다 동부 지역의 전략적 거점 확보는 아시아-태평양 및 북대서양 지역의 해양 에너지, 국방, 인프라 프로젝트 수행 역량 강화를 의미하며, 글로벌 해양 기술 표준화 추진</p><p>• **원격 운영 센터(ROC) 확대**: St. John's의 원격 운영 센터와 COVE 허브 연계를 통해 실시간 현장 대응 능력 구축으로 해상 사고 대응 시간 단축 및 운영 안전성 제고</p><p>• **산업 규제 대응**: IMO의 자동화 및 자율 운항 규제 강화에 대응하여 선제적으로 기술 검증 체계를 구축함으로써 국제 해사 규정 준수 능력 선제 확보</p></div>`,
      tags: ["ROV","Remote Operations","Singapore","Autonomous Technology","Offshore Infrastructure"],
      link: "https://www.offshore-energy.biz/fugro-unveils-new-rov-test-pool-in-singapore/",
      coords: [103.8198,1.3521],
      location: "Singapore"
    },
    {
      type: "news",
      title: "Reliance Industries Rejects Iranian Oil Cargoes Amid US Sanctions Waiver Expiration",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-17",
      image: "https://images.marinelink.com/images/maritime/w800/piter2121-stockadobecom-169927.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 인도의 정유업체 릴라이언스 인더스트리즈(RIL)가 미국 제재 면제 기한 만료를 며칠 앞두고 이란산 원유 2개 선적분을 거부했으며, 컴플라이언스 요구사항을 충족하지 못했다고 발표</p><p>• 관련 선박: 이란 기선(flagged) 더르야(Derya, 200만 배럴), 수퍼탱커 르노르(Lenore) 등 5척의 탱커가 미국 제재 대상</p><p>• 미국 재무부는 이란 원유 제재 면제 기한을 4월 20일(일요일)에 종료하지 않기로 결정하였으며, 최근 우크라이나-이스라엘 분쟁 이후 유가 급등에 대응하기 위해 발급한 30일 면제 기간이 만료됨</p><p>• 인도의 국영 인도석유공사(IOC)는 이란산 원유 구매를 재개하여 7년 만에 슈퍼탱커 자야호(Jaya)에서 200만 배럴 선적</p><p>• 릴라이언스의 거부로 인한 이란산 원유의 인도 시장 진입 차질 발생 및 향후 제재 강화에 따른 공급망 불확실성 증대</p><h3>Key Quotes</h3><p>• "RIL did not buy cargo in tanker Derya as it did not meet with the company's compliance requirements." <br>(릴라이언스는 더르야호의 선적이 회사의 컴플라이언스 요구사항을 충족하지 못해 구매하지 않았다)</p><p>• "Treasury Secretary Scott Bessent on Wednesday said the U.S. would not renew the waivers, with the one on Iranian oil set to lapse on Sunday."<br>(미국 재무부 장관이 이란 원유 제재 면제를 갱신하지 않으며, 일요일에 만료될 예정이라고 발표)</p><h3>Technical Insights</h3><p>• 해운 기업의 제재 회피 선박 추적(Ship-tracking): MarineTraffic, SynMax 등 위성 데이터를 활용한 실시간 모니터링이 규제 당국의 강제 이행 수단으로 작용하고 있으며, 선사의 컴플라이언스 리스크 관리 필수화</p><p>• IMO 컴플라이언스 및 국가 간 제재 충돌: 이중 기준(Dual-flagged vessels) 선박의 활용과 국가별 상이한 제재 정책으로 인한 국제 해운 규제의 혼란 심화</p><p>• 탱커 마킹 및 제재 회피 기술: OFAC(Office of Foreign Assets Control) 지정 선박의 항해 경로 회피, 신호 차단(AIS blackout) 등 기술적 회피 수단의 고도화로 인한 규제 당국의 감시 강화 필요</p></div>`,
      tags: ["Iranian Oil","Sanctions","Reliance Industries","Oil Tankers"],
      link: "https://www.marinelink.com/news/reliance-industries-rejects-two-iranian-538202",
      coords: [72.8142,21.1458],
      location: "Sikka, India"
    },
    {
      type: "news",
      title: "Strait of Hormuz Reopens Following Ceasefire, Oil Prices Drop Below $90/Barrel",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-17",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockgrispb-169925.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 이스라엘-레바논 휴전 이후 호르무즈 해협 재개통 발표로 세계 석유 공급량의 약 20%를 차지하는 전략적 해로 정상화<br>• 유가가 배럴당 $95에서 $89 이하로 급락하면서 5주 이상 만에 최저치 기록, 글로벌 해운 및 물류 경제에 직접적 영향<br>• 미국 연방준비제도(Fed) 정책입안자들이 7주간의 중동 분쟁으로 인한 인플레이션 영향 평가 필요, 12월부터 금리 인하 가능성 재평가<br>• 뉴욕 Fed 총재 존 윌리엄스는 전쟁이 일시적 충격이 아닌 구조적 물가 상승 압력(연료비, 농산물, 항공료 등)을 초래했다고 경고<br>• 호르무즈 해협 재개통이 글로벌 해운 수급 정상화 신호로, 중장기 물류비용 안정화에 긍정적 영향 전망</p><h3>Key Quotes</h3><p>• "As long as we have the conflict resolved soon, you would find us in a place where it just takes longer, but it doesn't stall the progress on inflation" (분쟁이 신속히 해결되면 인플레이션 진정 과정이 지연되지만 막혀있지는 않을 것) - San Francisco Fed President Mary Daly</p><p>• "Even based on what we've seen already, inflation will be well above 3% over the next few months" (현 상황만으로도 향후 수개월간 인플레이션이 3% 이상으로 상당히 높을 것) - New York Fed President John Williams</p><h3>Technical Insights</h3><p>• **해상수송 경로의 지정학적 리스크**: 호르무즈 해협이 세계 해상 석유 교역의 20%를 담당하는 핵심 인프라로, 분쟁으로 인한 운송 차질이 글로벌 해운 비용과 납기 시간에 직접 영향을 미치는 구조<br>• **벌크 해운과 탱커 시장의 변동성**: 유가 급락은 단기적으로 운송료 인하 압력을 야기하지만, 해협 재개통 초기 혼잡 우려로 수급 불균형 가능성 존재<br>• **IMO 규제와 에너지 전환의 시사점**: 지정학적 위기에 따른 석유 공급망 불안정성은 해운산업의 친환경 연료 전환(LNG, 메탄올 등) 가속화의 필요성을 강조<br>• **자율운항 선박의 위험 관리 역할**: 분쟁 지역 해역 운항 시 인공지능 기반 경로 최적화 및 실시간 위험 회피 기술의 중요성 증대</p></div>`,
      tags: ["Strait of Hormuz","Oil Markets","Shipping Routes","Geopolitics"],
      link: "https://www.marinelink.com/news/strait-hormuz-reopens-oil-prices-drop-538200",
      coords: [56.5,26.5],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Iran Requires Prior Coordination with IRGC for Hormuz Strait Transit Following Ceasefire",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-17",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockkashd-169924.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 이란이 호르무즈 해협 통과 선박에 대해 이슬람혁명수비대(IRGC)와의 사전 조율을 요구하는 새로운 규정 발표<br>• 정전 협정 체결 후 외교부장관이 해협 개방을 공식화했으나 군함의 통과는 여전히 금지<br>• 선박 통과는 이란이 안전하다고 판단하는 항로로 제한되며, 항해는 IRGC 및 항만해양청의 승인 필요<br>• 1970년대부터 국제해운에서 사용해온 기존의 교통분리방식(TSS) 적용 여부가 불명확한 상황<br>• IMO(국제해사기구)가 언론 자유 및 안전한 통행권 준수 여부를 검증 중</p><h3>Key Quotes</h3><br>• "All ships can sail through the Strait of Hormuz but this needs to be coordinated with Iran's Islamic Revolutionary GuardCorps" (호르무즈 해협을 통과하려면 이란 이슬람혁명수비대와의 조율이 필수적이라는 입장)</p><p>• "We are currently verifying the recent announcement related to the reopening of the Strait of Hormuz, in terms of its compliance with freedom of navigation for all merchant vessels and secure passage" (IMO가 호르무즈 재개방이 모든 상선의 항행자유 및 안전통행권을 준수하는지 검증 중)</p><h3>Technical Insights</h3><br>• 호르무즈 해협의 교통분리방식(TSS) 적용 범위 불명확 - 기존 국제해운 규칙과 이란의 새로운 조율 요건 간의 충돌 가능성으로 COLREG 및 IMO 규정과의 합치성 문제 야기</p><p>• 사전 조율 및 승인 요구는 해상교통관리(VTS) 체계 강화를 의미하며, 국제 상선의 통행시간 증가 및 운영 비용 상승으로 이어질 가능성 높음</p><p>• 군함 통과 금지 정책은 국방 안보 전략의 변화를 반영하나, 민간 선박과의 명확한 구분 기준 부재로 실질적 집행 및 국제법적 해석에 혼란 예상</p><p>• IMO의 검증 절차는 국제해양법(UNCLOS)의 통행권과 연안국의 관할권 간의 균형점 모색을 시사하며, 향후 해협 통행 규칙 국제화 논의로 확대 가능성</p></div>`,
      tags: ["Strait of Hormuz","Iran","IRGC","Maritime Regulations","Freedom of Navigation","Shipping Corridors"],
      link: "https://www.marinelink.com/news/ships-sailing-hormuz-need-prior-538199",
      coords: [56.25,26.58],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-18
addEvents({
  "2026-04-18": [
    {
      type: "accident",
      title: "Fresh Attacks on Commercial Shipping in Strait of Hormuz; Iran Asserts New Maritime Control Regime",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-18",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/UKMTO-containership-attack-map.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **호르무즈 해협 공격 재개**: 2026년 4월 18일 하루 동안 오만 해역 근처에서 3건의 해상 사건 발생 (2건 공격, 1건 의심 활동)으로 4월 7일 이후 10일간의 휴전 상황이 깨짐</p><p>• **피해 현황**: 컨테이너선이 미확인 발사체에 맞아 화물 손상, 유조선은 이란 혁명수비대(IRGC) 소속 고속정 2척에 의해 사격을 받음 (선원 안전 확보)</p><p>• **이란의 새로운 해양 통제 체제**: 이란 의원 에브라힘 아지지(Ebrahim Azizi)가 IRGC 승인 및 지정 항로 이용 의무화를 포함한 새로운 "해양 체제" 선언</p><p>• **미국의 해협 개방 주장과 현실의 괴리**: 트럼프 대통령이 호르무즈 해협의 완전한 개방을 선언했으나, 토요일 사건들이 위협 수준의 지속적 상승을 입증</p><p>• **2월 말 이후 누적 사건**: UKMTO 집계 30건의 해상 사건 발생 (18건 확인된 공격 포함)</p><p>• **제재 회피 선박 증가**: 최근 해협 통과 선박의 대다수가 서방 규제 대상 또는 "다크플릿" 소속으로 국제 해운 규범 준수 외부에서 운영 중</p><p>---</p><h3>Key Quotes</h3><p>• **"[The] Strait of Iran is fully open and ready for full passage"** (이란 해협은 완전히 개방되어 있으며 전면 통행 준비가 되어 있다 - 트럼프 대통령의 주장)</p><p>• **"Whether the Strait is open or closed … will be determined by the field, not by social media"** (해협이 개방되었는지 폐쇄되었는지는 소셜미디어가 아닌 현장 상황으로 결정된다 - 이란 의원의 반박)</p><p>• **"Hormuz Strait situation is over"** (호르무즈 해협 상황이 종료되었다 - 트럼프 대통령의 주장, 현실과 불일치)</p><p>---</p><h3>Technical Insights</h3><p>• **국제 해양 규범의 침식**: IRGC가 지정 항로 이용과 사전 승인 요구로 국제법상 항해의 자유(Freedom of Navigation) 원칙을 직접 위반하며, 이는 IMO의 해상교통안전 국제규칙(COLREG)과 유엔해양법협약(UNCLOS) 침해</p><p>• **선박 보험 및 해운업 영향**: 공격 재개로 호르무즈 해협 통행 선박의 전쟁 위험보험료(War Risk Insurance) 인상 및 해운사의 대체 항로(수에즈 운하 또는 희망봉) 선택으로 운송비 상승 및 공급망 차질 심화 예상</p><p>• **다크플릿의 전략적 이점**: 제재 대상 선박들이 규제 기관의 감시를 피해 이란 통제 해역 통행 시 상대적으로 유리한 위치 점유로, 국제 해양 감시 체계(UKMTO, IMO)의 효율성 저하</p><p>• **자율운항 선박 도입 위험성**: 현재와 같은 지정학적 분쟁 지역에서 자율운항선박(Autonomous Vessel)의 배치는 원격 제어 두절 또는 사이버 공격 리스크 증가로 해상 안전 악화 우려</p></div>`,
      tags: ["Maritime Security","Strait of Hormuz","Iran IRGC","Commercial Shipping Attacks","Geopolitical Risk"],
      link: "https://gcaptain.com/fresh-attacks-shatter-open-hormuz-narrative-as-iran-pushes-new-maritime-regime/",
      coords: [56.5,26],
      location: "Strait of Hormuz, Oman Waters"
    },
    {
      type: "accident",
      title: "Iran Navy Closes Strait of Hormuz Again, Two Vessels Report Gunfire Incidents",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-18",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-17T153425Z_1797731019_RC23RKAOVSFD_RTRMADP_3_IRAQ-BASRA-OIL-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란 해군이 호르무즈 해협을 다시 폐쇄했으며, 토요일에 적어도 2척의 선박이 총격을 받았다고 보고함<br>• 이란 혁명수비대 고속정이 유조선 1척과 컨테이너선 1척을 향해 총격을 가한 것으로 확인됨<br>• 영국 해상무역청(UKMTO)이 오만 북동쪽 20해리 지점에서 사건 발생 신고 접수<br>• 호르무즈 해협 폐쇄로 약 20,000명의 선원과 수백 척의 선박이 걸프만에 발묶여 있는 상황<br>• 전 세계 석유 및 LNG 흐름의 약 20%를 처리하는 전략적 수로의 통행 마비 상태</p><h3>Key Quotes</h3><p>• "Attention all ships, regarding the failure of the U.S. government to fulfill its commitment in the negotiation, Iran declares the Strait of Hormuz completely closed again. No vessel of any type or nationality is allowed to pass through the Strait of Hormuz." (미국 정부가 협상 약속을 이행하지 못한 점을 이유로 이란이 호르무즈 해협을 완전히 폐쇄하며, 어떤 국적의 선박도 통행 불가 선언)</p><p>• "The captain of a tanker said it had been approached by two Islamic Revolutionary Guard Corps gunboats that fired on the vessel. The tanker and its crew were safe." (유조선 선장이 이란 혁명수비대 고속정 2척으로부터 총격을 받았지만 선박과 승무원은 안전하다고 보고)</p><h3>Technical Insights</h3><p>• **해상안전규칙 위반**: 이란 해군의 무차별적 총격은 국제해사기구(IMO) 규정 및 해상충돌회피규칙(COLREG)을 심각하게 위반하며, 국제 해상통행의 자유를 침해하는 행위로 판단됨</p><p>• **전략적 수로 차단의 영향**: 호르무즈 해협은 전 세계 원유 수송의 약 20%를 담당하는 핵심 수로이며, 이의 폐쇄는 글로벌 에너지 공급망 및 선사 운영에 치명적 영향을 야기함</p><p>• **자율운항선박 운영 리스크**: 향후 자율운항선박(MASS)이 분쟁 수역을 통행할 경우, 원격 조종 시스템 보안 및 무장 세력의 사이버 공격 위협이 급증할 수 있으므로 강화된 보안 프로토콜이 필수적임</p><p>• **해상 보안 체계 개선 필요**: 국제해사기구와 연안국들은 분쟁 지역 통행 선박에 대한 실시간 보호 메커니즘과 무장 경호 지원 체계를 강화해야 하며, UKMTO와 같은 해상정보 기관의 역할 확대가 시급함</p></div>`,
      tags: ["Strait of Hormuz","Iran Navy","Armed Incident","Tanker Attack","Maritime Security"],
      link: "https://gcaptain.com/irans-navy-tells-ships-strait-of-hormuz-shut-again-two-vessels-report-gunfire/",
      coords: [56,26.5],
      location: "Strait of Hormuz, between Qeshm and Larak Islands"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-17
addEvents({
  "2026-04-17": [
    {
      type: "news",
      title: "European Nations Offer Mine Clearance Support for Strait of Hormuz Security",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-17",
      image: "https://images.marinelink.com/images/maritime/w800/grispb-adobe-169913.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 프랑스 국방부 장관 Catherine Vautrin이 유럽 국가들이 호르무즈 해협 기뢰 제거 작전에 참여할 역량을 보유하고 있다고 발표<br>• 벨기에, 네덜란드, 프랑스 등이 해협 통과 선박에 대한 호위 서비스 제공 가능<br>• 프랑스와 영국이 40개국 회의를 주재하여 호르무즈 해협 항해의 자유 회복에 동맹국의 참여 의지 표현<br>• 호르무즈 해협은 전 세계 석유 및 액화천연가스 운송의 약 20% 처리<br>• 제안된 호위 서비스는 완전히 지원적 성격이며 공격적 목적이 아님을 명시</p><h3>Key Quotes</h3><br>• "There are capabilities to provide fully supported escort services – that is to say, in no way offensive, of course – for ships to ensure safe passage through the strait" (해협 통과 선박의 안전을 보장하기 위해 완전히 지원하는 호위 서비스를 제공할 역량이 있으며, 절대 공격적이지 않다)<br>• "France and Britain are set to chair on Friday a meeting of around 40 countries aimed at signalling to the United States that some of its closest allies are ready to play a role in restoring freedom of navigation in the Strait of Hormuz" (프랑스와 영국이 약 40개국이 참여한 회의를 개최하여 호르무즈 해협 항해의 자유 회복에 미국의 동맹국들이 역할을 하길 원한다는 신호 전달)</p><h3>Technical Insights</h3><br>• 호르무즈 해협의 기뢰 제거 작전은 국제 해상 교통로 보호의 중요성을 강조하며, 다국간 해역 안보 협력 메커니즘 필요성 증대<br>• 유럽 해군의 기뢰 소탕 능력은 국제 해역에서의 자율 운항 선박 배치 시 해상 안전 인프라 구축의 기초가 될 수 있음<br>• 호르무즈 해협 같은 전략적 해역에서의 자유로운 항해 보장은 자율 선박 및 무인 운송 시스템의 안정적 운영 전제 조건<br>• IMO의 해역 안보 및 자유로운 통항 원칙이 국제 정치·군사 맥락에서 실제 작동하는 사례로, 해양산업의 글로벌 운영 환경 개선에 핵심</p></div>`,
      tags: ["Strait of Hormuz","Mine Clearance","Freedom of Navigation","European Defense"],
      link: "https://www.marinelink.com/news/europe-help-clear-mines-strait-hormuz-538188",
      coords: [56.1499,26.5667],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2026-04-18
addEvents({
  "2026-04-18": [
    {
      type: "news",
      title: "Iran Fires on Commercial Vessels, Declares Strait of Hormuz Closed",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-18",
      image: "https://maritime-executive.com/media/images/article/Hormuz-April-17-US-helicoptes.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 호르무즈 해협을 일방적으로 폐쇄 선언하고, 복수의 상선에 대해 발포하는 사건 발생 - 컨테이너선, 탱커, 크루즈선 등이 피격</p><p>• UKMTO(영국 해양무역운영)를 통해 보고된 사건: 오만 북동쪽 25해리 지점에서 컨테이너선이 발사체에 맞음, 탱커는 IRGC 경비정 2척의 예고 없는 포격 경험, 크루즈선 근처에서 포탄 착수 현상 감지</p><p>• 이란 강경파가 해협 통과를 위한 IRGC 사전 허가 및 검사 강제, 통행료 부과 등의 조건 제시 - 국제해상법 위반 가능성 높음</p><p>• 영국, 독일, 이탈리아 국적 크루즈선 5척이 페르시아만 탈출 시도 중이며, 인도 VLCC 슈퍼탱커(이라크산 원유 200만 배럴 적재)도 강제 회전</p><p>• 트럼프 행정부의 중재 및 협상 진행 중이지만, 이란 강경파의 일방적 행동으로 인해 호르무즈 해협 통행 안정성 악화</p><h3>Key Quotes</h3><p>• "Two IRGC gunboats approached the tanker and opened fire with no VHF contact or challenge" (IRGC 경비정 2척이 사전 무선연락이나 경고 없이 탱커에 개방 포격)</p><p>• "Two Indian vessels were forced back west out of the Strait of Hormuz by Iran's Sepah (IRGC) Navy. Firing was involved." (이란 IRGC 해군이 인도 선박 2척을 해협 밖으로 강제 회전시키고 발포함)</p><p>• "Iran will charge a toll for all ships to transit the Strait" (이란이 해협 통과 모든 선박에 통행료 징수 의사 표현)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 통행 안정성 악화**: 국제 해상법상 공해 통행의 자유 원칙 위반 - IMO 및 국제해사법 위반, 국제해운산업 심각한 위험 요소</p><p>• **COLREG 및 해상안전 규정 미준수**: IRGC의 사전 무선연락 없는 무차별적 포격은 국제해상충돌방지규칙(COLREG) 제5조(망시 및 음향신호) 및 제6조(안전속력) 완전 위반</p><p>• **글로벌 유가 및 해운비 상승 우려**: 호르무즈 해협을 통과하는 세계 석유 수송량의 약 21% 영향 - 통행료 징수 시도는 국제해상법상 불법이나 실제 운영상 심각한 비용 증가 초래 가능</p><p>• **자율선박/AI 항법의 취약성 부각**: 이러한 지역에서의 원격 자율운항선박(MASS) 도입 시 사이버 공격, 신호 재밍, 일방적 통제에 극히 취약 - 향후 호르무즈 해협 등 고위험 지역 자율운항 도입은 재검토 필요</p></div>`,
      tags: ["Strait of Hormuz","Iran","Maritime Security","Geopolitical Tension"],
      link: "https://maritime-executive.com/article/iran-fires-on-containership-tanker-and-cruise-ship-saying-hormuz-is-closed",
      coords: [56.5,26.5],
      location: "Strait of Hormuz, Persian Gulf"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-19
addEvents({
  "2026-04-19": [
    {
      type: "accident",
      title: "US Seizes Iranian Cargo Ship, Tehran Vows Retaliation",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-19",
      image: "https://images.marinelink.com/images/maritime/w800/source-centcom-169940.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미국 군부가 이란 국기 화물선을 나포했으며, 이란은 즉각적인 보복을 경고함<br>• 미국의 이란 항구 봉쇄와 이란의 호르무즈 해협 봉쇄로 인해 전 지구적 유가 상승 초래 (브렌트유 배럴당 $96.85으로 약 7% 급등)<br>• 2일 남은 휴전 협정이 붕괴될 위험 증대 및 추가 평화 협상 거부 선언<br>• 호르무즈 해협은 세계 석유의 약 20%를 운송하는 전략적 해상 교통로로, 봉쇄로 인한 해운 산업 및 에너지 시장 영향 심각<br>• 미국의 인프라 공격 위협과 이란의 보복 위협으로 지역 안정성 악화, 주변국 해운 안전 우려 확대</p><h3>Key Quotes</h3><br>• "We have full custody of their ship, and are seeing what's on board!" (우리가 그 선박의 완전한 관할권을 확보했으며 선내 적재물을 조사 중)<br>• "We warn that the armed forces of the Islamic Republic of Iran will soon respond and retaliate against this armed piracy by the U.S. military" (이란 무장력이 곧 미군의 이러한 무장 해적 행위에 대해 대응하고 보복할 것임을 경고함)<br>• "One cannot restrict Iran's oil exports while expecting free security for others. The choice is clear: either a free oil market for all, or the risk of significant costs for everyone" (이란의 석유 수출을 제한하면서 다른 국가들의 자유로운 안보를 기대할 수 없으며, 선택은 명확함: 모두를 위한 자유로운 유가 시장 또는 모두를 위한 상당한 비용의 위험)</p><h3>Technical Insights</h3><br>• 호르무즈 해협은 국제 해상 교통로(SLOCs)로서 전 지구적 에너지 공급망의 중추이며, 봉쇄로 인한 회피 항로 증가는 해운 비용 및 운항 시간 증가를 초래<br>• 해상 봉쇄와 군사적 나포는 국제해사기구(IMO) 및 국제법상 해상교통로 자유(Freedom of Navigation) 원칙 위반으로, UNCLOS(해양법협약) 및 COLREG(충돌회피규칙) 준수 문제 야기<br>• 지정학적 해상 분쟁은 해운보험료 상승, 선박 운항 회피, 대체 항로 개발 등 해운 산업 전반의 구조적 변화를 가속화<br>• 군사적 해상 통제와 봉쇄 기간의 장기화는 자율운항선(MASS), AI 기반 항로 최적화 기술 도입 가속화 및 무인 화물선의 위험 지역 운영 필요성 증대</p></div>`,
      tags: ["cargo ship seizure","Iran-US conflict","maritime blockade","Strait of Hormuz","geopolitical tension"],
      link: "https://www.marinelink.com/news/us-seizes-iranian-cargo-ship-tehran-vows-538215",
      coords: [56.2808,27.068],
      location: "Strait of Hormuz / Bandar Abbas"
    },
    {
      type: "event",
      title: "BlackSea Technologies Unveils Comet Armed Unmanned Surface Vessel at Sea-Air-Space Exposition",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-19",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• BlackSea Technologies가 Sea-Air-Space 박람회에서 무인표면선박(USV) Comet을 공개 전시했으며, 공중방어 및 대함미사일로 무장한 형태로 선보임</p><p>• Comet은 미국 제조업체가 공개적으로 전시한 것 중 가장 무장된 무인표면선박 중 하나로 평가됨</p><p>• 박람회 개최지는 볼티모어 Dock D2 구간이며, 자율항행 무인전술플랫폼의 산업화 추세를 반영</p><p>• 미사일 탑재 능력은 해전 전술의 변화와 원격 작전의 실용화를 의미</p><p>• 무인표면선박의 무장화는 국방 자율 시스템의 상용화 가속화 신호</p><h3>Key Quotes</h3><p>• "Comet, one of the most heavily armed unmanned surface vessels shown publicly by a U.S. manufacturer" (미국 제조사가 공개적으로 전시한 가장 무장된 무인표면선박 중 하나)</p><h3>Technical Insights</h3><p>• 무인표면선박의 전술화: 기존 감시·정찰 목적에서 공중방어 및 대함 타격 임무로 확대되는 추세로, 자율항행 시스템의 군사 응용 고도화를 시사</p><p>• 해상 무인화 경쟁: 미국의 무장 USV 공개는 해상 자율시스템 분야에서의 기술 경쟁 심화를 반영하며, 향후 COLREG 준수 및 식별 프로토콜 정립의 국제규범 필요성 대두</p><p>• IMO 규제 체계의 도전: 원격조종/완전자율 무인전투선박의 출현은 기존 IMO 안전규범, 충돌회피규칙, 군사용 자율시스템의 법적 지위 정의에 새로운 과제 제기</p></div>`,
      tags: ["Unmanned Surface Vessel","Autonomous Naval","Sea-Air-Space Exposition","Defense Technology"],
      link: "https://defence-blog.com/u-s-firm-unveils-comet-drone-boat-armed-with-air-defense-missiles/",
      coords: [-76.6413,39.2904],
      location: "Baltimore, Maryland"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-20
addEvents({
  "2026-04-20": [
    {
      type: "accident",
      title: "Pemex Undersea Pipeline Causes Gulf of Mexico Oil Spill",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-20",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-03-25T173415Z_1151327177_RC2B8KAF887C_RTRMADP_3_MEXICO-OIL-SPILL-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사고 원인**: 페멕스(Petroleos Mexicanos) 국영석유회사가 소유한 아브카툰(Abkatun) 해양시추설비 인근의 해저 파이프라인 누출이 걸프만 유출 사태의 원인으로 확인됨</p><p>• **책임 및 조치**: 페멕스 최고경영자 빅토르 로드리게스가 사실 인정 및 3명 직원 해임; 멕시코 정부가 지난달부터 원인 조사 진행</p><p>• **오염 규모**: 환경단체 그린피스와 멕시코반프래킹연맹이 약 800톤의 탄화수소가 걸프만으로 유출되었다고 추정; 정확한 양은 여전히 산정 중</p><p>• **지리적 영향**: 유출물이 멕시코 남부 타바스코주에서 북부 타마울리파스주까지 확산되어 해변 오염 및 야생동물 피해 야기</p><p>• **기업 위기**: 페멕스는 최근 반복된 폭발 사고와 환경재해로 인한 재정 악화와 850억 달러 이상의 채무 극복 과정에서 또 다른 타격</p><h3>Key Quotes</h3><p>• "An undersea pipeline near the Abkatun offshore platform was the cause of the leak" (아브카툰 해양시추설비 근처의 해저 파이프라인이 누출의 원인이었다)</p><p>• "Three employees were fired as a result of the accident" (사고로 인해 3명의 직원이 해임되었다)</p><p>• "Environmental groups including Greenpeace and the Mexico Alliance Against Fracking have estimated that as much as 800 tons of hydrocarbons have spilled into the Gulf" (그린피스를 포함한 환경단체들이 약 800톤의 탄화수소가 걸프만으로 유출되었다고 추정)</p><h3>Technical Insights</h3><p>• **해저 파이프라인 유지보수 부실**: 해양시추설비 인근 파이프라인의 노후화 및 부식에 대한 정기적 점검 체계 미흡이 대형 환경 사고로 이어진 사례로, 해양 석유 인프라의 위험성 증대</p><p>• **해양 환경 규제 강화 필요성**: 걸프만 유출 사태는 국제 해양 환경보호 협약(MARPOL) 강화 및 국가별 석유 시설 안전 기준의 상향 평준화 필요성을 시사</p><p>• **산업 신뢰도 하락**: 페멕스의 반복된 안전사고는 국영석유기업의 운영 투명성 및 기술 역량에 대한 국제적 신뢰 저하를 초래하며, 향후 국제 해운·에너지 파트너십에 부정적 영향</p></div>`,
      tags: ["Oil Spill","Pipeline Failure","Gulf of Mexico","Environmental Disaster"],
      link: "https://gcaptain.com/pemex-undersea-pipeline-found-to-cause-gulf-of-mexico-oil-spill/",
      coords: [-91.5,19],
      location: "Gulf of Mexico, Bay of Campeche, Mexico"
    }
  ]
});

// Auto-collected: 2026-04-19
addEvents({
  "2026-04-19": [
    {
      type: "news",
      title: "Ukraine First to Intercept Shahed Drone Using Naval USV-Launched Interceptor",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-19",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나 무인 시스템군이 해상 무인선(USV)에서 발사한 요격 드론으로 러시아 샤헤드 공격 드론을 격추하는 데 성공 - 현대 전쟁사에 기록되지 않은 전술적 마일스톤 달성</p><p>• 412번 네메시스 여단 소속 USV 부대의 오퍼레이터들이 해상 작전 구역 내에서 이 작전 수행</p><p>• 무인 해상 플랫폼에서의 요격 드론 발사 시스템 개발로 해상 방어 능력 혁신적 확장</p><p>• 드론 대 드론 요격 기술의 해상 적용 사례로, 향후 해군 작전 개념 변화를 예고하는 중요한 사건</p><p>• 우크라이나의 자율 무인 시스템 기술 수준이 최첨단 대응 능력 보유 중임을 입증</p><h3>Key Quotes</h3><p>• "operators from the Unmanned Surface Vessel (USV) division of the 412th Nemesis Brigade successfully intercepted a Russian Shahed attack drone using an interceptor drone launched from an unmanned naval platform" (412번 네메시스 여단 소속 무인선(USV) 부대의 오퍼레이터들이 무인 해상 플랫폼에서 발사한 요격 드론으로 러시아 샤헤드 공격 드론을 격추했다)</p><p>• "a combat milestone with no documented precedent in modern warfare" (현대 전쟁사에서 기록된 선례가 없는 전투 마일스톤)</p><h3>Technical Insights</h3><p>• **USV 기반 요격 시스템**: 해상 무인선 플랫폼에서의 드론 발사 능력은 기존 함정 방어 체계의 개념을 재정의하며, 분산형 해상 방어 아키텍처로의 전환을 시사</p><p>• **자율 시스템의 해전 적용**: 드론 대 드론 요격 기술이 해상 환경에서 성공적으로 작동함으로써 무인 시스템의 실전 신뢰성과 상황 인식 능력 입증</p><p>• **IMO/COLREG 해석 범위 확대**: 전투용 자율 무인선의 해상법상 지위, 교통 규칙 적용, 국제 법적 책임 문제에 대한 새로운 해석과 규정 마련의 필요성 대두</p><p>• **산업 파급 효과**: 해상 드론 요격 기술의 민간 해운 보안, 항만 방어, 무인 함대 운용 등 광범위한 해양 산업 분야로의 기술 이전 가능성 높음</p></div>`,
      tags: ["Ukraine","Unmanned Systems","Naval Drone","Shahed Interception","USV Technology"],
      link: "https://defence-blog.com/ukraine-becomes-first-to-intercept-shahed-using-naval-drone-launch/",
      coords: [30.5238,50.4501],
      location: "Ukraine (Maritime Operations)"
    }
  ]
});

// Auto-collected: 2026-04-17
addEvents({
  "2026-04-17": [
    {
      type: "news",
      title: "World's First Methane Removal System Debuts at Sea on Commercial Bulk Carrier",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-17",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Worlds-first-Methane-removal-system-debuts-at-sea.jpg?image-crop-positioner-ts=1776420392",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미국-영국 연합의 벤누 클라이밋(Bennu Climate)과 로마르 쉬핑의 로마르랩스(Lomarlabs)가 선상 메탄 제거 시스템의 12개월 파일럿 프로젝트를 시작했으며, 이는 상업 운영 중인 선박에 배치되는 업계 최초의 사례임<br>• 57,000톤급 로마르 수프라맥스 벌크선에 탑재된 벤누의 광화학(Photochemistry) 기반 시스템은 약 1입방미터 크기, 50kg 무게로 자연적 광화학 과정을 모방하여 메탄 분자를 파괴<br>• 이 기술은 2024년 도크사이드 테스트를 거쳤으며, 현재 Gold Standard 프로그램으로부터 탄소 크레딧 인증을 획득 중<br>• 해운업체의 규제 세금 감소 및 운영 비용 절감과 동시에 선박 배출가스 감축에 기여할 것으로 기대<br>• 메탄은 이산화탄소보다 단기간에 더 강력한 온난화 효과를 발생시키는 온실가스로, 이 기술의 상용화는 해운 산업의 탈탄소화에 중요한 역할 수행</p><h3>Key Quotes</h3><br>• "This pilot represents a paradigm shift for our industry. We are putting technology on ships not only to cut their own emissions but to actively remove excess greenhouse gas from the atmosphere as they sail." (이 파일럿은 우리 산업의 패러다임 전환을 의미하며, 선박 자체의 배출을 줄일 뿐만 아니라 항해 중 대기에서 초과 온실가스를 능동적으로 제거하는 기술을 배치하고 있다)</p><p>• "Nothing can turn back the climate clock faster than methane removal." (메탄 제거보다 빠르게 기후 시계를 되돌릴 수 있는 방법은 없다)</p><h3>Technical Insights</h3><br>• **광화학 기술의 해운 적용**: 벤누의 UV 기반 메탄 파괴 기술은 대기의 자연적 광화학 과정을 모방하여 메탄 분자를 산화·분해하는 방식으로, 종래의 연소 기반 제거 기술과 달리 선상 정상 운영 중 적용 가능한 혁신적 솔루션 제공</p><p>• **IMO 2050 탈탄소화 목표 달성의 보조 수단**: 메탄은 지구 온난화지수(GWP)가 CO2 대비 28배(100년 기준) 이상이므로, 이 기술의 상용화는 IMO의 온실가스 감축 규제 준수뿐 아니라 기업의 ESG 평가 및 탄소 크레딧 창출에 직접 기여</p><p>• **선박 설계 및 운영 혁신**: 1입방미터, 50kg 규모의 소형 시스템으로 기존 선박의 구조 변경 최소화 가능하며, 도킹 주기와 무관하게 상시 운영 가능한 점에서 기술 도입 장벽 낮춤</p><p>• **규제 비용 절감 및 시장 기회**: Gold Standard 탄소 크레딧 획득으로 해운사는 규제 세금 및 카본 마켓 거래로부터 직접 수익 창출 가능, 향후 업계 표준화 진행 시 선사의 경쟁 우위 확보 가능성 높음</p></div>`,
      tags: ["Methane Removal","Climate Technology","Shipping Emissions","Sustainable Shipping","Carbon Reduction"],
      link: "https://www.offshore-energy.biz/worlds-first-methane-removal-system-debuts-at-sea/",
      coords: [-119.2171,36.7783],
      location: "California / Global Shipping"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-20
addEvents({
  "2026-04-20": [
    {
      type: "accident",
      title: "US Seizes Iranian Cargo Ship M/V Touska, Escalating US-Iran Tensions and Threatening Ceasefire",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-20",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/marines--scaled.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 해병대가 이란 화물선 M/V Touska를 나포했으며, 6시간 대치 끝에 함포사격으로 엔진을 무력화한 후 헬리콥터 강하를 통해 승선 - 양국 간 2주간의 휴전협정 붕괴 위험성 증대</p><p>• 이란 정부는 이를 "무장 해적 행위"로 규탄하고 미국 봉쇄 해제 없이는 평화협상 참여 거부 - 이란의 석유 수출 제한과 미사일 프로그램은 협상 대상이 아님을 명확히 함</p><p>• 미국의 이란 항구 봉쇄와 이란의 호르무즈 해협 해상 교통 봉쇄 재개로 호르무즈 해협의 해상 교통 최소화 - 전 세계 석유 및 LNG 공급량의 약 1/5가 영향받을 수 있음</p><p>• 중국도 "강제 차단"에 우려 표시하며 휴전협정 준수를 촉구했고, 유가는 6% 이상 상승하며 국제 유가 및 주식시장 변동성 가중</p><p>• 파키스탄 중재자 아심 무니르 육군원수가 트럼프 대통령에게 봉쇄가 협상의 걸림돌임을 전달했으나, 미국의 "부당하고 비현실적 입장"이 지속되고 있다는 이란의 평가</p><p>• 호르무즈 해협 통항 안전과 전 지구적 에너지 공급 차질 위험 - 국제 해운 및 에너지 산업의 즉각적 영향</p><h3>Key Quotes</h3><p>• "One cannot restrict Iran's oil exports while expecting free security for others. The choice is clear: either a free oil market for all, or the risk of..." (이란의 석유 수출을 제한하면서 다른 국가들의 자유로운 안전을 기대할 수 없다는 점을 강조 - 이란 부대통령의 명확한 메시지)</p><p>• "The U.S. was 'not serious' about pursuing the diplomatic process" - Iranian Foreign Ministry spokesman Esmaeil Baghaei (미국이 외교 과정에 진지하지 않다는 이란 외교부의 강한 비판)</p><p>• "The continuation of the U.S. blockade on Iranian ports was undermining the prospect of peace talks" - Senior Iranian source to Reuters (이란 지도층이 미국 봉쇄가 평화협상 전망을 훼손하고 있다고 평가)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 봉쇄의 국제 해운 영향**: 전 세계 석유 및 LNG 공급량의 약 20%가 통과하는 호르무즈 해협의 해상 교통 최소화는 국제 유가 급등 및 해운 보험료 상승으로 이어짐 - 해운업계의 경제적 타격 심각</p><p>• **군사적 나포와 국제해사법**: 미국의 화물선 나포는 UNCLOS(UN해양법협약) 및 국제 해운 규범과의 충돌 가능성 제기 - 비전투 해역에서의 나포 행위에 대한 국제법적 정당성 논쟁</p><p>• **해상 교통 보안 악화**: 양국 간 대치로 인한 상선의 항행 위험 증가 및 해적 위험 지역 확대 - 해운사들의 우회항로 선택 및 해운비 상승으로 이어질 가능성</p><p>• **자율선박 및 원격운영의 필요성 대두**: 이러한 고위험 해역에서의 유인 선박 운영 위험 증가로 인한 자율 해상 운송 기술 개발의 필요성 강조 - IMO의 안전 기준 및 해상 분쟁 지역 운영 규범 재검토 필요</p></div>`,
      tags: ["Iran-US Conflict","Naval Seizure","Strait of Hormuz","Geopolitical Tension"],
      link: "https://gcaptain.com/ceasefire-at-risk-after-us-seizes-iranian-ship-iran-shuns-peace-talks/",
      coords: [56.2667,27.1833],
      location: "Strait of Hormuz / Persian Gulf (Iran's Bandar Abbas Port)"
    },
    {
      type: "accident",
      title: "Four Survivors Rescued After Boat Capsize Off Libya, 10 Confirmed Dead",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-20",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockpeter-169969.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 리비아 토브룩 해상에서 난민 이송선이 침몰하여 10명 사망, 31명 실종되는 해상사고 발생<br>• 이집트와 수단 출신 난민 4명이 5일 이상 표류 후 구조됨<br>• 국제이주기구(IOM) 주도로 수색작업 진행 중이며 6구의 시신이 토요일에 해안으로 떠밀려옴<br>• 리비아는 아프리카 난민들의 유럽 진출 경로로 현재 900만 명 이상의 난민 수용 중<br>• 비정규적이고 노후된 선박을 이용한 위험한 해상 이동의 심각성 드러냄</p><h3>Key Quotes</h3><p>• "Four migrants have been rescued from the Mediterranean more than five days after the boat supposed to carry them to Europe capsized off Libya" (리비아 인근 해역에서 침몰한 선박의 난민 4명이 5일 이상 표류 후 지중해에서 구조됨)</p><p>• "10 migrants were confirmed to have died in the disaster off Tobruk in eastern Libya, and 31 were still missing" (토브룩 해역의 사고로 10명 사망 확정, 31명 실종)</p><h3>Technical Insights</h3><p>• 난민 이송선의 안전기준 미충족 및 해상안전장비 부족으로 인한 캡슐화 사고 - 국제해사기구(IMO) 안전규약 준수 강화 필요<br>• 비정규 해상운송에 대한 국제적 감시 체계 부재로 인한 인명사고 증가 - 리비아 연안국의 해양안전감시 역량 제고 시급<br>• 지중해 난민 위기와 해상안전의 연계 문제 - 국제해사법 및 COLREG 준수 감시 및 단속 체계 개선 필요<br>• 노후선박의 해상 활동 금지 및 국제 협력 기반의 구조 체계 구축 - 해양사고 예방 및 피해 최소화를 위한 다국간 조약 이행 강화</p></div>`,
      tags: ["boat capsize","Mediterranean","migrant rescue","maritime casualty","Libya"],
      link: "https://www.marinelink.com/news/four-survivors-rescued-boat-capsize-five-538260",
      coords: [25.5,32.5],
      location: "Tobruk, Libya (Mediterranean)"
    },
    {
      type: "accident",
      title: "Hormuz Strait Shipping Slows After Iranian Ship Seizure and Warning Shots",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-20",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockrumi-169968.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협의 해상 교통량이 급격히 감소 - 평상시 일일 130척 대비 12시간 동안 1척만 통과<br>• 미국의 이란 화물선 나포 및 이란의 경고사격으로 인한 긴장 고조 및 정전 협상 위기 상황 발생<br>• CMA CGM 컨테이너선을 포함한 여러 선박이 이란의 경고사격 대상이 되었으며 선원들은 안전<br>• 전쟁 위험 보험료(War Risk Insurance)가 선박 가치의 2%에서 3% 수준으로 상승<br>• 유가 상승(브렌트유 3.8% 상승, 배럴당 $94.75) 및 러시아산 석유 제재 유예 재개로 인한 에너지 시장 불안정화<br>• 인도가 국제 P&I 클럽에 미포함된 러시아 보험사 3개사 추가 인정, 글로벌 해운 보험 구도 재편</p><h3>Key Quotes</h3><p>• "Recent weeks have brought several false starts and, although some form of resolution is likely at some point, the timing of any durable breakthrough remains highly uncertain" (최근 수주간 여러 번의 허위 신호가 있었으며, 비록 어느 시점에서 해결 가능성이 있지만 지속 가능한 돌파구의 시기는 여전히 불확실함)</p><p>• "Iran fired shots at ships in the strait on Saturday, including a container ship belonging to CMA CGM... describing them as 'warning shots'" (이란이 토요일 호르무즈 해협에서 CMA CGM 소속 컨테이너선을 포함한 여러 선박에 사격을 가했으며, 이를 '경고사격'으로 표현함)</p><p>• "Oil prices were up about 5% on Monday on fears that the ceasefire between the United States and Iran could collapse and as traffic through the strait remained largely halted" (정전이 붕괴될 수 있다는 우려와 해협 통행량 급감으로 월요일 유가가 약 5% 상승함)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 통행 안전성 악화**: 평시 일일 130척 기준 대비 99% 이상 감소한 극도로 낮은 통행량은 글로벌 에너지 공급망의 심각한 위험 신호이며, 자율운항선박 도입 시에도 지정학적 위험 회피 불가능<br>• **전쟁 위험 보험료 급등의 경제적 영향**: 50% 상승(2%→3%)한 보험료는 선주와 용선자의 운영 비용 대폭 증가를 초래하며, AI 기반 항로 최적화 기술도 정치·군사적 불안정성 앞에서는 제한적 효과만 발생<br>• **국제 P&I 클럽 제재 회피 시도**: 러시아 보험사 인정 확대는 해운 산업의 규제 회피 움직임을 의미하며, IMO 국제 기준 준수의 실질적 약화를 초래 가능<br>• **자율운항선의 위험지역 운영 제약**: 현 수준의 지정학적 긴장 상황에서 자율운항선박의 호르무즈 해협 통과는 원격 조종 불가능 상황 및 사이버 공격 취약성으로 인해 현실적으로 불가능한 상태</p></div>`,
      tags: ["Hormuz Strait","Iran-US Tensions","Maritime Security","Tanker Operations"],
      link: "https://www.marinelink.com/news/shipping-hormuz-strait-slows-again-538256",
      coords: [56.25,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "U.S. Navy Opens MUSV Marketplace as Defense Industry Races to Deploy Autonomous Vessels",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-20",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/Hanwha-H38.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 해군의 중형 무인수상함(MUSV) 프로그램이 본격적인 산업 경쟁 단계에 진입했으며, 방위사업체와 조선사들이 자율운항 함정 개발에 대규모 투자를 집중하고 있음</p><p>• 안두릴 인더스트리(Anduril Industries), 현대방위(HD Hyundai), 에디슨 쇼에스트 오프쇼어(Edison Chouest Offshore) 등이 주도적으로 참여하며 국제적 조선 네트워크 구축 중</p><p>• 세일드론(Saildrone)은 ISR(정보수집·감시·정찰) 플랫폼에서 벗어나 대잠전(ASW) 및 타격 임무 수행이 가능한 52미터급 스펙터(Spectre) 무인함정 공개</p><p>• 한화방위와 매그넷 디펜스 협력으로 38미터급 장거리 무인함정 개발 진행, 방위산업체와 소규모 자율운항 기술 전문기업 간 파트너십 확대 추세</p><p>• 미 해군이 '마켓플레이스' 방식의 복수 설계 경쟁을 도입하여 혁신 가속화 및 다양한 벤더의 양산 시스템 동시 공급 가능하게 함</p><h3>Key Quotes</h3><p>• "The strategy reflects a broader realization inside the Pentagon that scaling autonomous fleets will require tapping global commercial shipbuilding capacity, not just domestic naval yards." (펜타곤 내부에서 자율운항 함정 함대 확대를 위해서는 국내 해군 조선소뿐 아니라 전 세계 상용 조선 능력을 활용해야 한다는 인식이 확산되고 있음을 반영)</p><p>• "Rather than selecting a single design, the Navy is creating a 'marketplace' of competing solutions—an approach intended to accelerate innovation and allow multiple vendors to deliver production-ready systems." (해군이 단일 설계 선정 대신 경쟁 솔루션의 '마켓플레이스'를 조성하여 혁신 가속화 및 복수 벤더의 양산 시스템 공급 가능하게 함)</p><h3>Technical Insights</h3><p>• **MUSV 다중임무 플랫폼화**: 컨테이너식 적재 시스템, 미사일 시스템, 첨단 소나 배열 탑재 가능한 모듈식 설계로 ISR, 대잠전, 타격 임무 등 다목적 운용 가능화</p><p>• **자율운항 기술 통합**: 안두릴의 자율운항 및 미션 시스템이 현대조선의 고효율 조선 능력 및 미국 산업 기반과 결합되어 전통적 해군 조달 병목 우회</p><p>• **국제 공급망 재편**: 미국 해군의 마켓플레이스 방식 도입으로 한국(현대방위), 이탈리아(핀칸티에리) 등 국제 조선사 참여 활성화 및 글로벌 해양 방위산업 생태계 변화</p><p>• **산업 구조 변화**: 방위산업 대형사(록히드마틴, 한화방위)와 소규모 자율운항 기술 전문기업(매그넷 디펜스, 안두릴) 간 협력으로 무인함정 개발 속도 가속화 및 기술 혁신 촉진</p></div>`,
      tags: ["Autonomous Vessels","MUSV Program","U.S. Navy","Defense Technology","Unmanned Surface Vessels"],
      link: "https://gcaptain.com/industry-floods-into-autonomous-vessel-race-as-u-s-navy-opens-musv-marketplace/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-20
addEvents({
  "2026-04-20": [
    {
      type: "news",
      title: "Saildrone Unveils Spectre: New High-Speed Unmanned Surface Vessel for Naval Operations",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-20",
      image: "https://maritime-executive.com/media/images/article/69e39427dbe4c5e566c86d62_saildrone-unveils-spectre-new-class-high-speed-unmanned-surface-vessel-usv-naval-operations.d825c9.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Saildrone가 52미터 길이, 250톤 무게의 신형 무인수상선 Spectre를 공개했으며, 이는 회사 역사상 가장 크고 빠르며 성능이 우수한 플랫폼</p><p>• Spectre는 최대 30노트의 속도와 25,000kg의 페이로드 용량을 보유하며, 쌍 샤프트 전기-디젤 하이브리드 추진 시스템으로 극도의 침묵 운영 가능</p><p>• 반잠수함 전쟁(ASW) 임무에 최적화되었으며, 윙 시스템 없이도 운영 가능하도록 설계되어 다목적 운영 성능 제공</p><p>• 10년 이상의 운영 경험과 2년간의 집중 설계 작업을 통해 개발되었으며, 미 해군의 해상전 능력을 혁신적으로 향상시킬 것으로 예상</p><p>• 40피트 컨테이너 2개부터 20피트 컨테이너 5개까지 다양한 페이로드 구성이 가능하며, 최대 페이로드 용량은 70톤 이상</p><h3>Key Quotes</h3><p>• "Spectre is the result of 25 years of continually pushing the boundaries of what's possible. A unique design evolved through the hard lessons of operational experience in the real world" (25년간 기술적 한계를 지속적으로 극복한 결과물이며, 실전 운영 경험에서 도출된 독특한 설계)</p><p>• "Spectre represents a transformative step forward for naval surface warfare. Its endurance, payload flexibility, and seamless integration with advanced missile and sonar systems will give the US Navy a persistent, low observable USV" (Spectre는 해상전의 혁신적 진전을 나타내며, 미 해군에 지속적이고 저탐지 특성의 무인선을 제공)</p><h3>Technical Insights</h3><p>• 전기-디젤 하이브리드 추진 시스템(5,000마력 Caterpillar 디젤 엔진 + 전기 모터)으로 12노트까지 극도의 침묵 운영이 가능하며, 조정 가능 피치 프로펠러로 음향 서명을 완벽히 제어 가능한 고급 ASW 기술 적용</p><p>• 풍력, 태양광, 디젤 복합 추진 시스템으로 25노트 항주 시 3,280해리의 항속력을 달성하며, 무인수상선(USV)의 장시간 작전 내구성과 신뢰성을 크게 향상시킨 산업 이정표</p><p>• IMO/COLREG 국제해양규칙 준수를 고려한 자율운항 설계로 상용 및 군용 이중 용도 운영이 가능하며, 차세대 해양 로봇화의 실질적 운영 모델 제시</p><p>• 컨테이너화된 페이로드 시스템과 선미 배치 설계로 음향 탐지 및 대함 미사일 통합 운용이 용이하며, 네트워크 중심 해전(Network-Centric Warfare) 개념의 구현을 가능하게 하는 기술적 혁신</p></div>`,
      tags: ["Autonomous Ships","Unmanned Surface Vehicles","Naval Technology","ASW Operations"],
      link: "https://maritime-executive.com/article/saildrone-unveils-spectre-new-class-of-high-speed-unmanned-surface-vessel",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "event",
      title: "Saildrone Unveils New Spectre USV at Sea Air Space 2026",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-20",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/Saildrone-Spectre-USV.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Saildrone가 Sea Air Space 2026에서 최대 규모의 무인 수상함(USV) '스펙터'를 공개했으며, 길이 52m로 다양한 작전 임무에 맞는 탑재체를 운반할 수 있음<br>• 디젤/전기 하이브리드 추진 시스템을 탑재하여 최대 27노트의 고속 성능과 초저소음 운영(12노트)을 동시에 달성<br>• 최대 항속거리 3,280해리(평해), 5,000마력 이상의 추진력, 최대 25톤의 탑재체 운반 능력 보유<br>• 록히드마틴의 MK-70 페이로드 배송시스템과 탈레스의 CAPTAS-4 가변심도 능동형 소나 등 첨단 탑재체 탑재 가능<br>• Fincantieri Marinette Marine의 위스콘신 그린베이 시설에서 생산되며, 연간 약 5대 생산 가능</p><h3>Key Quotes</h3><br>• "As a company with over 2.5 million miles of voyages, and 60,000 days at sea, Spectre represents everything we've learned in the last 10 years." (Saildrone는 지난 10년간 250만 해리의 운항과 6만 일의 해상 경험을 바탕으로 스펙터를 개발함)<br>• "Saildrone's decades of operating unmanned surface vessels, combined with Spectre's unique features as a multi-mission platform, represent an ideal case on which to apply Fincantieri Marine Group's proven expertise in the serial production of aluminum vessels." (Saildrone의 장기 USV 운영 경험과 스펙터의 다용도 플랫폼 특성은 Fincantieri의 알루미늄 함정 대량 생산 능력과 이상적으로 결합됨)</p><h3>Technical Insights</h3><br>• MUSV(Medium Unmanned Surface Vessel) 프로그램의 신규 요구사항에 대응하여 설계되었으며, 기존 MASC 프로그램 폐지 이후 미 해군의 새로운 전략적 선택지로 평가됨<br>• 돛 미탑재 버전의 스텔스 프로필(2m)을 통해 센서 회피 능력을 강화하여 먼저 수상 함정 도착 전 잠수함 방지 역량 확대 가능<br>• 락히드마틴의 Mk-41 수직발사 시스템(VLS)을 4개 탑재한 MK-70 페이로드 배송시스템 통합으로 원거리 정밀 타격 능력 부여 및 해전 양상 변화<br>• CAPTAS-4 능동형 소나 탑재로 수중 감시 범위를 획기적으로 확대하여 반잠수함전(ASW) 능력의 근본적 재편성 실현</p></div>`,
      tags: ["Unmanned Surface Vessel","USV","Sea Air Space 2026","Defense Technology"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/saildrone-unveils-new-spectre-usv-at-sea-air-space-2026/",
      coords: [-76.7495,38.7642],
      location: "National Harbor, Maryland, USA"
    },
    {
      type: "news",
      title: "MQ-9B SeaGuardian: Enhancing Naval and Marine Corps Operations",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-20",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/2509_ASI_MQ9_SEAGUARDIAN_SDS_POD_0057_L19176_screen.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **MQ-9B SeaGuardian 무인항공기 시스템**: 미 해군 및 해병대 작전 역량 강화를 위해 설계된 최고 성능의 장시간 체공 능력 보유 무인기 시스템</p><p>• **주요 성능**: 900만 비행시간 이상의 운영 경험, 다중 영역 인식(Multi-Domain Awareness), ISR-T(정찰·감시·표적 지정) 임무 수행, 극한 기후 환경 운영 가능</p><p>• **대잠전(ASW) 능력**: 자체 내장형 음탐 장비 및 음향 부표(Sonobuoy) 배치·감시 능력으로 P-8A 포세이돈과의 통합 운영으로 고위험 지역 감시 확대</p><p>• **작전 유연성**: 차세대 STOL(단거리이착륙) 형태로 열악한 환경의 즉시 활주로에서 운영 가능하며, 분쟁 전 단계에서의 억제력 및 상황 인식 제공</p><p>• **센서 통합**: 멀티모드 해양 레이더, 전자광학/적외선 시스템, 신호 정보 수집 페이로드로 해양·연안 지역에 대한 종합적 감시 제공</p><h3>Key Quotes</h3><p>• "SeaGuardian offers the best endurance of any aircraft in this class, making it a critical asset for intelligence, surveillance, reconnaissance, and targeting (ISR-T) missions." (이 급의 모든 항공기 중 최고 수준의 체공 능력으로 정찰·감시·표적 지정 임무의 핵심 자산 역할)</p><p>• "MQ-9B's extensive operational pedigree, with over 9 million flight hours logged in conditions ranging from permissive to denied, ensures its readiness for high-end conflict scenarios." (900만 시간 이상의 광범위한 운영 기록으로 고강도 분쟁 시나리오에 대한 준비 태세 확보)</p><p>• "MQ-9B's rugged airframe and advanced de-icing systems enable operations in extreme weather environments, from the Arctic to the Antarctic and everywhere in between." (강화된 기체 구조와 첨단 제빙 시스템으로 북극에서 남극까지 극한 기후 환경에서의 운영 가능)</p><h3>Technical Insights</h3><p>• **자율 해상 감시 체계의 진화**: 무인 항공기 기반의 ISR-T 능력이 유인 항공기(P-8A Poseidon)와 통합되어 인명 손실 최소화와 작전 반경 확대라는 차세대 해양 감시 패러다임 구현</p><p>• **대잠전(ASW) 자동화**: 자체 음탐 장비와 음향 부표 자동 배치 기능으로 전통적 유인 대잠전 체계의 보완적 역할을 통한 작전 효율성 증대 및 인명 위험 감소</p><p>• **악기후 자율 운영**: 극한 기후(북극·남극) 및 악조건(안개·강우) 환경에서의 자동 비행 능력으로 해양 상황 인식의 연속성 보장 및 분쟁 전 단계 억제력 강화</p><p>• **분산형 작전 기지 구성**: STOL 형태의 도입으로 열악한 환경의 임시 활주로 운영 가능하게 되어 해외 주둔지 기반시설 의존도 감소 및 작전 유연성 극대화</p></div>`,
      tags: ["Unmanned Aircraft Systems","Naval Operations","ISR-T Missions","Anti-Submarine Warfare","U.S. Navy"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/mq-9b-seaguardian-enhancing-naval-and-marine-corps-operations/",
      coords: [0,0],
      location: "Global/Naval Operations"
    },
    {
      type: "news",
      title: "Rheinmetall Kraken GmbH launches series production of USV in Hamburg",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-20",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/Rheinmetall-Kraken-K3-SCOUT_Copright-Rheinmetall-Naval-Systems-2.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 라인메탈과 크래켄 테크놀로지 그룹의 합작회사 라인메탈 크래켄 GmbH가 함부르크의 블로흠+보스 조선소에서 K3 스카우트 무인수상선(USV) 양산을 개시했다.<br>• K3 스카우트는 최대 속도 55노트, 길이 8.4미터의 소형 무인선으로 군사 및 민간 용도로 활용 가능하다.<br>• 초기 연간 약 200척 생산 계획이며, 주문량에 따라 연간 최대 1,000척까지 확대 가능하다.<br>• 해양 감시, 중요 인프라 보호, 군사작전용 무기 운반 등 다양한 미션 프로필을 지원한다.<br>• 라인메탈 조선해양시스템 부문이 함부르크를 독일의 무인·자율 해양 시스템 개발 및 검증 센터로 육성 중이다.</p><h3>Key Quotes</h3><br>• "Production of the Kraken K3 Scout is initially designed for around 200 units per year. Depending on the order volume, we can scale up production to as many as 1,000 units annually." (K3 스카우트는 초기에 연간 약 200척 생산을 목표로 하며, 주문량에 따라 연간 최대 1,000척까지 확대할 수 있다는 의미)<br>• "The formation of Rheinmetall Kraken GmbH combines the scale, expertise and reach of a longstanding defence leader with an agile, innovative maritime technology company." (라인메탈 크래켄 GmbH는 오랜 역사의 방위사업 기업의 규모와 전문성에 민첩한 혁신 해양기술 기업을 결합했다는 의미)</p><h3>Technical Insights</h3><br>• 무인수상선(USV) 기술의 민간·군사 이중용도(Dual-use) 플랫폼으로서, 해양감시, 항만보안, 자율운항 등 다양한 해사 산업 분야 적용이 가능하다.<br>• 독일 조선업의 전통적 강점(블로흠+보스 조선소)과 영국의 첨단 무인 시스템 기술의 결합으로 유럽 해양 자율화 시장 주도권 확보가 가능할 전망이다.<br>• IMO 자율운항선박(MASS) 규제 프레임워크 발전에 따라, 소형 USV부터 중대형 자율화물선까지 스케일업 가능한 생산 인프라 구축이 산업 표준화 측면에서 중요하다.<br>• 연간 200~1,000척 규모의 양산 능력은 향후 NATO 및 유럽 해군의 함대 현대화, 해안경비 및 항만 보안 자동화 수요 증가에 대응할 수 있는 전략적 역량이다.</p></div>`,
      tags: ["USV","Autonomous Systems","Unmanned Surface Vessel","Maritime Technology"],
      link: "https://www.navalnews.com/naval-news/2026/04/rheinmetall-kraken-gmbh-launches-series-production-of-usv-in-hamburg/",
      coords: [10,53.5],
      location: "Hamburg, Germany"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-21
addEvents({
  "2026-04-21": [
    {
      type: "news",
      title: "Trump Extends Ceasefire with Iran While Maintaining U.S. Maritime Blockade in Strait of Hormuz",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-21",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/Strait-of-Hormuz-patrol.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국이 이란과의 휴전을 연장하면서 호르무즈 해협에 대한 해상 봉쇄를 지속적으로 유지하고 있으며, 파키스탄의 중재를 통해 협상 시간을 확보하고 있음</p><p>• 미 해군은 계속해서 호르무즈 해협의 해상 교통을 통제하고 이란 관련 선박에 대한 적발·나포 권한을 유지하면서 경제적 압박 전략을 실시 중</p><p>• 이란의 카르그 섬 석유 저장시설이 며칠 내 포화될 것으로 예상되며, 이란의 주요 수익원인 석유 수출이 심각한 타격을 받고 있음</p><p>• 호르무즈 해협의 해상 운송이 실질적으로 이란 혁명수비대(IRGC)의 통제 하에 있으면서 이중 위협(미국 봉쇄 + 이란 통제)으로 인해 글로벌 해운 산업의 교역 패턴이 급격히 변화하고 있음</p><p>• 미국 재무부는 이란의 자금 이동과 자산 동결에 대한 체계적인 제재를 강화하고, 이란 관련 해운 중개자에 대한 제재 위협을 가하고 있음</p><p>• 휴전 연장은 긴장 완화가 아닌 현 상황의 일시적 유지로, 해운업계는 지속적인 불확실성과 경로 제약에 직면해 있음</p><h3>Key Quotes</h3><p>• "Based on the fact that the Government of Iran is seriously fractured… we have been asked to hold our Attack on the Country of Iran until such time as their leaders and representatives can come up with a unified proposal." (이란 정부가 심각하게 분열되어 있다는 점을 고려하여, 이란 지도부가 통합된 제안을 제출할 때까지 공격을 유보해달라는 요청을 받았음)</p><p>• "The United States Navy will continue the blockade of Iranian ports... storage at Kharg Island could fill within days, potentially forcing shut-ins at Iran's oil fields." (미국 해군은 이란 항구에 대한 봉쇄를 계속할 것이며, 카르그 섬의 저장시설이 며칠 내 포화되어 이란 유전의 가동을 중단시킬 수 있음)</p><p>• "Any vessel or intermediary involved in facilitating those flows risks exposure to U.S. sanctions, as authorities continue efforts to freeze assets tied to Iran's leadership." (이란과의 거래에 관여하는 모든 선박과 중개자는 미국 제재에 노출될 위험이 있음)</p><h3>Technical Insights</h3><p>• **호르무즈 해협의 이중 통제 구조**: 미국의 해상 봉쇄와 이란 혁명수비대의 해협 통제가 동시에 작동하면서, 선박의 통항이 미-이란 양측의 승인을 요구하는 구조로 변화 중이며, 이는 국제해사기구(IMO) 해역통항의 자유 원칙과 충돌</p><p>• **국제해상법과 제재의 충돌**: COLREG(해상충돌방지규칙)과 국제해사법상의 공해통항 자유가 지정학적 해상 봉쇄에 의해 실질적으로 제약되고 있으며, 선박 운영자들은 법적 이중부담(국제법 vs. 각국 제재)에 직면</p><p>• **글로벌 해운 경로 재편**: 호르무즈 해협을 우회하는 대체 항로(수에즈 운하 경유 확대, 인도양 우회 루트)로의 전환이 가속화되고 있으며, 이는 연료비 상승, 운송 시간 증가, 보험료 인상으로 이어져 글로벌 해운 비용 증가 초래</p><p>• **해운 산업의 규정 준수 위험 증대**: 제재 회피 혐의를 피하기 위해 선사들이 이란 관련 화물을 적극 회피하고 있으며, 이는</p></div>`,
      tags: ["Strait of Hormuz","Iran Blockade","Geopolitical Risk","Shipping Disruption","Maritime Security"],
      link: "https://gcaptain.com/hormuz-disruptions-show-no-end-as-trump-extends-ceasefire-maintains-blockade/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Anduril and Kraken Partner on Autonomous Maritime Technology for US Navy",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/K7-SABRE-K5-KRAKEN-1.0-2-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **전략적 파트너십**: 미국 방위기술 기업 Anduril Industries와 자율 해양기술 전문사 Kraken Technology Group이 Sea-Air-Space Expo에서 공식 협력을 발표함</p><p>• **주요 제품**: K7 SABRE와 K5 KRAKEN 무인수상선(USV)을 미국 내에서 제조 및 통합하여 미국 해군의 하이브리드 함대 전환 지원</p><p>• **기술적 성과**: 장거리 고성능 통합 능력과 모듈식 페이로드 시스템을 개발하여 미군 및 NATO 동맹국의 요구사항 충족</p><p>• **시장 입지 강화**: Kraken은 SOCOM으로부터 4,900만 달러 규모의 OTA 계약 및 국제 계약 수주로 미국 시장 입지 강화</p><p>• **확장성과 신뢰성**: 저비용, 확장 가능하고 모듈식 시스템으로 신뢰성 있고 효과적인 해양 작전 능력 제공</p><h3>Key Quotes</h3><p>• "This partnership reflects Kraken's commitment to supporting global maritime challenges with hardened operational capabilities at a critical point in history." (이 파트너십은 역사적 기로에서 강화된 작전 능력으로 글로벌 해양 과제를 지원하려는 Kraken의 의지를 반영함)</p><p>• "Kraken is known for their proven, battle-tested platforms. This partnership expands Anduril's family of autonomous surface offerings with small boats carrying mission payloads." (Kraken은 입증되고 전투 검증된 플랫폼으로 알려져 있으며, 이 파트너십은 Anduril의 자율 수상 제품군을 임무 페이로드를 탑재한 소형 보트로 확장함)</p><h3>Technical Insights</h3><p>• **무인수상선(USV) 기술 통합**: K7 SABRE와 K5 KRAKEN의 장거리 고성능 자율운항 기술은 미 해군의 미래 함대 구성에서 소형 고속 반응 함정의 역할 강화를 의미함</p><p>• **모듈식 페이로드 설계**: 다양한 임무(감시, 대잠수함전, 전자전 등)에 대응할 수 있는 모듈식 시스템으로 NATO 연합 운용성 확보</p><p>• **국방 자율시스템 정책**: SOCOM의 OTA 계약 수주는 미국 국방부가 신속한 기술 도입과 자율 수상 플랫폼 개발을 전략적으로 추진 중임을 시사</p><p>• **산업 생태계 형성**: 대형 방위기업(Anduril)과 기술 전문사(Kraken)의 협력 모델은 자율해양 시장에서 대형 플레이어 중심의 산업 통합 가속화를 예고함</p></div>`,
      tags: ["autonomous ships","USV","US Navy","defense technology","partnership"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/anduril-and-kraken-partner-to-deliver-mission-ready-maritime-power-at-scale/",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "Leonardo DRS Launches Maritime C-UAS Capability on Autonomous Unmanned Surface Vessel",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/leonardo-drs-usv.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Leonardo DRS가 자율 무인 수상함(AUSV) 플랫폼에 해양 임무 장비 패키지(M-MEP) 통합으로 해상 드론 위협 대응 역량 구현<br>• Sea Machines STORMRUNNER AUSV 플랫폼을 활용한 카운터-무인항공시스템(C-UAS) 통합 시연으로 해군 및 연합군의 운용 요구사항 충족<br>• 해양 레이더, 전자광학적외선(EO-IR) 센서, SAGEcore™ AI 기반 소프트웨어 플랫폼으로 감지·추적·식별·대응까지 통합 운용 체계 제공<br>• 모듈형 아키텍처로 다양한 유인/무인 해상 플랫폼으로의 빠른 확대 배치(Rapid Integration) 가능<br>• 드론 위협의 범위, 자율성, 수량 증가에 대응하는 빠른 요구사항-운용능력 전환(Requirements to Capability Compression) 달성</p><h3>Key Quotes</h3><p>• "Aerial unmanned threats are evolving quickly — in range, autonomy, and numbers. The M-MEP is engineered to help the U.S. Navy and allied forces stay ahead of that threat with a modular package that brings sensors, command and control, and defeat options together into one integrated capability that can be fielded fast."<br>(공중 무인 위협이 범위, 자율성, 수량면에서 빠르게 진화하고 있으며, M-MEP는 센서, 지휘통제, 대응 옵션을 하나의 통합 능력으로 묶어 빠른 운용 배치를 지원하는 모듈형 패키지로 설계됨)</p><p>• "The M-MEP is designed to compress the time from requirement to operational capability by packaging detection through defeat into a single, scalable system that can be adapted across a range of maritime platforms — including uncrewed surface vessels"<br>(M-MEP는 감지에서 대응까지를 단일의 확장 가능한 시스템으로 패키징하여 다양한 해상 플랫폼, 특히 무인수상함으로의 적응을 통해 요구사항부터 운용능력까지의 시간 단축 목표)</p><h3>Technical Insights</h3><p>• **AI 기반 센서 퓨전 아키텍처**: SAGEcore™ 소프트웨어 플랫폼을 통한 인공지능 기반 다중 센서(해양 레이더, EO-IR) 융합으로 해상 드론 위협의 조기 감지 및 정확도 향상, COLREG 준수 자율항해 환경에서의 충돌회피 능력과 유사한 자동화 의사결정 체계 구현</p><p>• **무인 플랫폼 중심의 방위 확장**: AUSV 기반 C-UAS 배치로 유인함정 승조원 안전성 향상 및 운용비용 절감, 분산형 해상 감시 네트워크 구축 가능성으로 IMO/해군 규정상 자율운용 함정의 실전 배치 가속화</p><p>• **모듈형 통합 전략**: 다양한 해상 플랫폼(유인/무인)으로의 빠른 통합 가능 설계로 해운산업의 기술 도입 속도 증가 및 해상 보안 인프라의 신속한 현대화 가능</p><p>• **하이브리드 방위 개념**: 급증하는 해상 드론 위협(상업용 쿼드콥터부터 장거리 UAS까지)에 대응하는 다층 방위(Layered Defense) 개념으로 해상도메인 인식(MDA) 강화 및 운용자 업무 부담 경감</p></div>`,
      tags: ["C-UAS","Autonomous Surface Vessels","Maritime Defense","AI Sensor Fusion","Drone Threat Detection"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/leonardo-drs-launches-new-maritime-c-uas-capability/",
      coords: [-77.0369,38.9072],
      location: "Washington, D.C. (Sea-Air-Space Symposium)"
    },
    {
      type: "news",
      title: "Hanwha and Magnet Defense Formalize MUSV Strategic Partnership at Sea Air Space 2026",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/hanwha-magnet-musv.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Hanwha Defense USA와 Miami 기반 자율해양 기업 Magnet Defense가 전략적 파트너십을 체결하여 미국 국방부를 위한 중형 무인표면함정(MUSV) 생산에 협력<br>• Magnet Defense의 M48 함선은 17,000해리의 항속거리(현재 해상 MUSV 중 최장)를 보유하며, 2024년 마이애미에서 미국령 사모아까지 왕복 항해로 검증 완료<br>• MOU 체결을 통해 38미터급 MUSV 공동 건조, AI 기반 로봇식 조선소 개발, 자율항해 소프트웨어 고도화에 협력하기로 합의<br>• Hanwha의 고급 미사일 시스템과 Magnet Defense의 MUSV 기술의 결합으로 글로벌 전력 투사 능력 강화 예상<br>• 해상 상태 9(Sea State 9) 조건에서의 안정성 입증으로 악기상 환경에서의 신뢰성 검증 완료</p><h3>Key Quotes</h3><br>• "Hanwha remains committed to fielding the most capable and lethal MUSVs to support American warfighters and other allies in times of conflict" (Hanwha는 미군과 동맹국을 지원하기 위해 가장 능력 있고 강력한 MUSV를 배치하는 데 전념)<br>• "Our ability to project force globally by working together in quick response to America's Armed Forces needs is critical in today's ever-changing environment" (글로벌 전력 투사 능력과 미군의 급변하는 요구에 신속 대응하는 능력이 현대 환경에서 매우 중요)</p><h3>Technical Insights</h3><br>• AI 기반 자율항해 소프트웨어 고도화: Magnet Defense의 검증된 자율항해 기술과 Hanwha의 로봇식 조선소 기술이 결합되어 MUSV의 자동화 수준을 크게 향상<br>• 장거리 해상 운용 능력: 17,000해리 항속거리와 Sea State 9 조건 통과 기록은 국제해상법규(COLREG) 준수 및 해상 안전성 요구사항의 자율 시스템 통합 필요성 강조<br>• 방위산업-첨단기술 연계: 미사일 시스템과 무인 함정의 통합으로 해상 방어 역량의 원격 제어 및 AI 기반 의사결정 능력 강화, IMO 규제 프레임워크와의 조화 검토 필요<br>• 제조 혁신 구축: AI 기반 로봇식 조선소는 MUSV의 량산 가능성을 높이며, 자율해양 분야의 산업 표준화 및 국제 규제 대응의 신속성 향상을 의미</p></div>`,
      tags: ["MUSV","Autonomous Vessels","Hanwha Defense","Magnet Defense","AI Navigation"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/hanwha-and-magnet-defense-formalize-musv-strategic-partnership/",
      coords: [-80.1918,25.7617],
      location: "Miami, USA"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-21
addEvents({
  "2026-04-21": [
    {
      type: "news",
      title: "HII Accelerates ROMULUS USV Program with Four New Production Vessels",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-21",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/romulus-usv-april-2026.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• HII(Huntington Ingalls Industries)가 ROMULUS 151 무인표면함(USV) 4척의 추가 생산을 발표하여 자율항해 함정의 대량생산 단계로 전환하고 있음<br>• 루이지애나 주 Breaux Brothers Enterprises 조선소에서 현재 건조 중인 1척에 추가로 4척을 생산하여 총 5척의 ROMULUS 151이 양산 계획 중<br>• ROMULUS는 AI 기반의 모듈식 무인함정으로 정찰, 지뢰탐지, 공격작전, 무인시스템 대응 등 다양한 임무 수행 가능<br>• HII의 HYPR(High-Yield Production Robotics) 이니셔티브를 통해 로봇 자동화와 디지털 품질 관리 시스템을 도입하여 원가 절감 및 생산 속도 향상 추진<br>• 미 해군 및 동맹국에 자율항해 능력의 신속한 배치를 목표로 프로토타입에서 실전배치까지의 신속한 전환을 강조</p><h3>Key Quotes</h3><p>• "ROMULUS represents a shift in how we deliver unmanned capability to the fleet. We are combining shipbuilding experience, scalable manufacturing, proven autonomy, and strong industry partnerships to move quickly from prototype to operational deployment." <br>(ROMULUS는 함대에 무인 능력을 제공하는 방식의 변화를 나타내며, 조선소 경험, 확장 가능한 제조, 입증된 자율성, 강력한 산업 협력을 결합하여 프로토타입에서 실전배치까지 신속히 전환하고 있음)</p><p>• "By aligning design, autonomy, and manufacturing, we are creating a production model that delivers predictable outcomes and positions us to meet growing demand for autonomous maritime capability."<br>(설계, 자율성, 제조를 정렬함으로써 예측 가능한 결과를 제공하고 증가하는 자율항해 능력 수요를 충족할 수 있는 위치에 놓이게 됨)</p><h3>Technical Insights</h3><p>• ROMULUS 플랫폼은 모듈식 설계로 다양한 함정 크기에 걸쳐 확장 가능하도록 엔지니어링되었으며, 공통의 제조 접근법과 자율성 기본 사양을 유지하여 생산 표준화 달성<br>• HYPR 이니셔티브를 통한 산업용 로봇과 디지털 품질 관리 시스템의 통합으로 무인함정의 대량생산 모델 구축, 단위당 비용 절감 및 일정 예측 가능성 향상 기대<br>• ISR, 지뢰탐지, 타격작전, 무인시스템 대응 등 다양한 임무와 수중·공중 무인 플랫폼의 발진·회수 능력으로 미 해군의 작전 다양성 강화 가능<br>• 선진 조선 기술과 AI 기반의 자율항해 기술 결합으로 국방 무인 플랫폼 산업의 신기준 제시, 향후 상용 자율항해선박 개발로도 확대 가능성 존재</p></div>`,
      tags: ["autonomous ships","USV","unmanned systems","U.S. Navy","ROMULUS","AI navigation"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/hii-accelerates-romulus-usv-program-four-new-romulus-vessels-head-into-production/",
      coords: [-92.1037,30.25],
      location: "Louisiana, USA"
    },
    {
      type: "news",
      title: "U.S. Navy Plans to Deploy Thousands of Unmanned Surface Vessels in Indo-Pacific by 2030",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-04-21",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 미국 해군이 2030년까지 인도-태평양 지역에 수천 척의 무인 해상 선박(USV) 배치 계획 발표<br>• 중형 무인 해상 선박(MUSV) 30척 이상, 소형 USV 수천 척 포함된 대규모 배치 구상<br>• 표면 전개 그룹 1(Surface Development Group One)의 캡틴 개럿 밀러(Capt. Garrett Miller)가 Sea-Air-Space심포지움에서 공식 발표<br>• 무인 항공 시스템(UAS)과 함께 유인 선박 및 무인 선박에서 운용될 예정<br>• 해군의 분산 해상 작전(DMO) 전략의 핵심 요소로 인도-태평양 지역의 전략적 이점 확보 목표</p><h3>Key Quotes</h3><p>• "By 2030, expect to see over 30 Medium Unmanned Surface Vessels (MUSV) just in the Indo-Pacific. Expect to see thousands of small USVs, and then you know, any number of [unmanned aerial systems]" <br>(2030년까지 인도-태평양 지역에만 30척 이상의 중형 무인 해상 선박과 수천 척의 소형 USV, 그리고 다양한 무인 항공 시스템이 배치될 것으로 예상)</p><h3>Technical Insights</h3><p>• 무인 해상 선박의 다층 배치 전략 - MUSV(중형)와 소형 USV의 구분된 운용으로 다양한 해상 작전 수행 능력 확보<br>• 분산 해상 작전(DMO) 패러다임 구현 - 중앙집중식 지휘통제에서 벗어나 자율적으로 작동하는 무인 플랫폼 기반의 네트워크 중심 전력 강화<br>• COLREG 및 국제 해사 규범 적용 문제 - 수천 척의 무인 선박이 상용해운 지역에서 운용될 경우 국제 항행 규칙 준수 및 충돌 회피 자율성 문제 대두<br>• 인도-태평양 지역 전략적 영향력 확대 - 무인화된 해양 감시 및 위협 대응 능력으로 중국 등 경쟁국 견제 및 해역 통제력 강화</p></div>`,
      tags: ["Unmanned Surface Vessels","USV","Indo-Pacific","Naval Technology","Autonomous Ships"],
      link: "https://news.usni.org/2026/04/21/navy-to-deploy-thousands-of-unmanned-surface-vessels-to-the-indo-pacific-by-2030",
      coords: [0,0],
      location: "Indo-Pacific Region"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-22
addEvents({
  "2026-04-22": [
    {
      type: "accident",
      title: "Iranian Gunboats Fire on Commercial Ships in Strait of Hormuz; IRGC Seizes Vessels",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-22",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-18T130031Z_520984585_RC2ORKAY0ZNK_RTRMADP_3_IRAN-CRISIS-OMAN-HORMUZ-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 이란 혁명수비대(IRGC)가 호르무즈 해협에서 상선에 대한 무장 공격을 실시, 화물선과 컨테이너선이 피해를 입음<br>• 피격 선박: MSC Francesca, Epaminondas, Euphoria 등 3척 확인, 이 중 2척은 IRGC에 의해 나포되어 육상 검사 예정<br>• 이란의 초대형유조선(VLCC) Hero II와 Hedy가 아라비아해로 진출하며 미국의 해상봉쇄 회피 시도<br>• 호르무즈 해협 폐쇄로 인한 석유 공급 감소 약 10억 배럴 규모, 유가 급등 위기 초래<br>• 미국-이란 간 협상 중단 상태에서 지정학적 긴장 극대화, 상업 해운 운영의 심각한 위협 요인으로 작용</p><h3>Key Quotes</h3><br>• "a cargo ship and a container ship came under fire in the waterway" (호르무즈 해협 내 화물선과 컨테이너선이 총격을 받았음)<br>• "Iran moved supertankers into the Arabian Sea, an area where the US has sought to block Iranian shipping" (이란이 미국이 봉쇄하려던 아라비아해 지역으로 초대형유조선을 이동)<br>• "Tehran's deployment of small boats to target commercial shipping remains a terrifying prospect" (테헤란의 소형 보트를 이용한 상선 공격은 여전히 공포의 대상)</p><h3>Technical Insights</h3><br>• 호르무즈 해협 내 상선에 대한 무장 공격은 국제해상법(UNCLOS) 및 해양보안 규약 위반으로, IMO 해상안전 기준에 심각한 위협을 구성<br>• 초대형유조선의 대규모 이동(약 400만 배럴 적재 능력)은 미국 주도 해상봉쇄의 실효성 문제를 드러내며, 글로벌 해운 보험료 및 선박 경로 재설정 요구 증가<br>• 상선 나포 및 무장 공격은 자율운항선박(MASS) 도입 시 더욱 심각한 보안 위협이 될 수 있으며, 향후 지역 해역의 선박 운영 안전 기준 및 호위 체계 강화 필요성 대두</p></div>`,
      tags: ["Strait of Hormuz","Iran","Armed Attack","Commercial Shipping","Geopolitical Tension"],
      link: "https://gcaptain.com/iran-menaces-hormuz-as-its-own-oil-tankers-test-us-blockade/",
      coords: [56.2419,26.5597],
      location: "Strait of Hormuz, Oman/Iran"
    },
    {
      type: "news",
      title: "Asian Shipowners Expected to Cross Hormuz Strait Before Western Firms Amid Iran Tensions",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-22",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/2026-03-11T121144Z_2136708764_RC2PZJA2ATE9_RTRMADP_3_EMERGING-CENBANKS-RATES-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국-이란 휴전으로 호르무즈 해협 운항 재개 논의 중이나, 아시안 선사들이 서방 선사보다 먼저 통과할 것으로 예상됨</p><p>• 호르무즈 해협은 2월 말부터 수백 척의 유조선과 화물선이 갇혀있어 전 지구적 에너지 공급 차질 초래</p><p>• 정부 간 협상 및 해군 지원을 받는 정부 소유 선박만 통과 가능한 상황으로, 인도·중국·이라크 선박이 우선 통과할 가능성 높음</p><p>• 이란은 이슬람 혁명수비대와 함께 통행료 부과로 해협 통제 강화 중이며, 서방 기업들은 OFAC 제재 준수로 인해 통과 제한</p><p>• 선원의 안전 우려와 Advanced War Risk Premium 상승으로 통행료 외에 추가 비용 발생 가능</p><h3>Key Quotes</h3><p>• "For companies that are happy not to comply with OFAC sanctions, the safety part is still there. But, if that has been resolved by government to government communication, can the Indian navy send a convoy through, can a Chinese convoy go through? Yeah, probably so," (OFAC 제재를 준수하지 않는 기업들은 안전이 확보된다면, 인도·중국 해군의 호위 통과가 가능할 것)</p><p>• "Certain parts of the world will be able to pass through and the odds are that in the next few weeks you're going to see more of that, and we won't be able to," (특정 지역의 선박만 통과 가능할 것이며, 향후 몇 주 내 더 많은 아시아 선박이 통과할 것으로 예상됨)</p><p>• "If your crew doesn't want to go, they don't need to go if they feel unsafe," (선원이 안전을 느끼지 못하면 항해를 거부할 수 있음)</p><h3>Technical Insights</h3><p>• **정치적 리스크와 운항 선택의 분화**: 제재 준수 여부와 정부 간 협상 기반의 해군 지원 유무에 따라 선박 운항이 결정되는 새로운 리스크 구조 형성</p><p>• **War Risk Premium 상승의 경영 영향**: Advanced War Risk Premium 증가로 인해 통행료 외 추가 보험료 부담이 증가하며, 선원 안전 우려로 인한 임금 상승 압박</p><p>• **아시아 해운의 전략적 우위**: 제재 회피 능력과 정부 후원이 강한 아시아 선사들이 글로벌 해운 시장에서 일시적 우위를 확보하게 되는 지정학적 변화</p><p>• **IMO 규정과 국가 이익의 충돌**: 국제해사법(UNCLOS)상 자유항행권과 이란의 주권 행사 간 충돌로 인한 해운산업의 규범 체계 재조정 필요</p></div>`,
      tags: ["Strait of Hormuz","Iran-US tensions","Shipping disruption","OFAC sanctions"],
      link: "https://gcaptain.com/asian-shipowners-to-cross-hormuz-before-western-firms-executives-say/",
      coords: [56.1471,26.1207],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "accident",
      title: "One Dead Recovered From Capsized Mariana; Five Crew Still Missing Near Saipan",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-22",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/260418-G-G0214-1001.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 국기선 마리아나(145피트 건화물선)가 4월 15일 엔진 고장 후 전복되어 표류함. 4월 18일 팔라우 근처 해역에서 발견됨<br>• 수심 작업 중 4월 22일(현지시간) 오후 5시 12분경 미 공군 31구조비행대가 잠수사를 통해 선체 내부에서 1명의 사망자 시신을 수습<br>• 현재 5명의 선원이 실종된 상태이며, 12인승 주황색 구명뗏목도 함께 실종됨<br>• 미국 해안경비대, 해군, 일본 해상보안청, 뉴질랜드 공군 등 다국가 연합 수색 작업 진행 중<br>• 초기 구조 임무에서 선체 회수 작업으로 전환된 상황. 수중 드론을 활용한 선체 내부 정밀 수색 실시<br>• 태평양 광활한 해역에서 수천 제곱마일 범위의 대규모 수색 작업 진행, 일본 해상보안청 아키쯔시마함도 참여</p><h3>Key Quotes</h3><p>• "Our hearts are with the families of the Mariana crew members and the communities impacted by this tragic incident. We continue to search in close coordination with our partners, using all available resources to support the ongoing response." <br>(마리아나 승무원 가족과 영향을 받은 지역사회를 향한 깊은 애도의 뜻을 표하며, 모든 가용 자원을 활용하여 수색 작업을 계속하겠다는 의지를 표현)</p><p>• "The divers conducted a comprehensive survey of the vessel's exterior and used an underwater remotely operated drone to search the ship's interior—marking the most intensive examination yet of the overturned cargo ship since it was located."<br>(선체 외부 종합 조사와 수중 원격 제어 드론을 활용한 선체 내부 수색으로 발견 이후 가장 정밀한 조사를 수행했음을 의미)</p><h3>Technical Insights</h3><p>• **엔진 고장 및 표류 원인**: 4월 15일 발생한 엔진 고장이 직접적인 원인으로 파악되며, 동력 상실 후 악천후에 의한 전복으로 추정됨. 선박 안정성 및 동력 시스템 점검의 중요성 강조</p><p>• **다국가 해상 구조 협력의 중요성**: 미국 해안경비대, 해군, 일본 해상보안청, 뉴질랜드 공군 등의 조율된 다국가 협력으로 광활한 태평양 해역에서의 효율적 수색 작업 진행. IMO 국제해상구조협약(SAR Convention) 준수 및 지역 간 조율 체계의 가치 입증</p><p>• **수중 탐색 기술의 발전**: 수심 작업과 ROV(원격 조종 드론)을 병행한 정밀 수색으로 전복된 선체 내부에 대한 효과적인 조사 수행. 향후 해난사고 조사 및 선원 생존 확인에 활용될 수 있는 기술</p><p>• **해상 안전 장비의 중요성**: 12인승 구명뗏목이 실종된 상황으로, 적절한 해상 안전 장비의 비축 및 관리, 정기적 점검의 필요성 강조. SOLAS 협약에 따른 생명 안전 장비 규정 준수의 중요성 재확인</p></div>`,
      tags: ["vessel capsizing","missing crew","search and rescue","Pacific Ocean"],
      link: "https://gcaptain.com/one-dead-recovered-from-capsized-mariana-as-search-continues-for-five-missing-crew/",
      coords: [145.75,16.5],
      location: "Northeast of Pagan, Saipan, Pacific Ocean"
    },
    {
      type: "news",
      title: "Global Shipping Leaders Demand Safe Passage Guarantee Through Strait of Hormuz",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-22",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockphaisarnwong2517-170049.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 글로벌 해운 선사들이 호르무즈 해협의 안전한 통항을 보장해 줄 것을 요구하고 있으며, 현재 미-이란 분쟁(2월 28일 발발)으로 인해 해협의 해운 교통이 거의 중단된 상태</p><p>• 일본 모루(MOL, 미쓰이 O.S.K. 라인스)의 타무라 CEO와 벨기에 CMB.Tech의 사버리스 CEO가 싱가포르 해양 주간 회의에서 호르무즈 해협 통항의 불확실성과 위험성에 대해 언급</p><p>• 이란 이슬람혁명수비대가 해협 주변에 기뢰 배치를 경고했으며, 임시 휴전 합의도 실제 안전한 통항으로 이어지지 못함</p><p>• 호르무즈 해협은 일일 약 130척의 선박이 통과하며 세계 일일 석유 및 LNG 공급량의 약 20%를 담당하는 전략적 해상로</p><p>• 국제법상 호르무즈 해협은 자유로운 통항이 보장되어야 하며, 이란의 통행료 징수 요구 시 국제법 준수 입장을 견지할 방침</p><h3>Key Quotes</h3><p>• "Two weeks ago when the ceasefire, said to be temporary, came into picture, we thought there was hope. But in reality, the agreement was not translated into the safety and passage (of the vessels)" (임시 휴전 합의가 나왔을 때 희망이 있었지만, 실제로는 선박의 안전한 통항으로 이어지지 못했다)</p><p>• "We need to be confident that we can transit without having any issues. Today we have no reassurance whatsoever." (안전한 통항에 대한 확신이 필요하지만, 현재로서는 어떤 보장도 없다)</p><p>• "The Strait of Hormuz is a free passage where normally no toll should be paid" (호르무즈 해협은 일반적으로 통행료 없이 자유롭게 통행할 수 있는 해역이다)</p><h3>Technical Insights</h3><p>• **해상법 및 국제 규정**: 호르무즈 해협은 유엔해양법협약(UNCLOS)에 따라 국제 선박의 자유로운 통행이 보장되어야 하며, 일방적 통행료 징수는 국제법 위반에 해당함</p><p>• **지정학적 리스크 관리**: 선박 운영사들이 고위험 해역 통항 시 국제 정부 간 조정(IMO/국제 중보 기구)을 요청하는 상황으로, 자율운항선 도입 시 원격 제어 및 대체 항로 설정의 중요성 증가</p><p>• **공급망 영향**: 호르무즈 해협 차단 시 전 세계 에너지 공급의 20% 단절 위험으로, 해운업계의 실시간 위험 모니터링 및 동적 경로 계획(dynamic routing) 기술의 필요성 강조</p><p>• **산업 운영 대응**: 대형 해운사들이 중동 지역 정박 선박의 동향 파악에 어려움을 겪고 있으며, AI 기반 해운 추적 및 예측 분석 시스템의 도입이 해운 안보 관리의 핵심 과제로 대두</p></div>`,
      tags: ["Strait of Hormuz","Shipping Safety","Geopolitical Risk","Oil & Gas Transport"],
      link: "https://www.marinelink.com/news/global-shipping-leaders-seek-guarantee-538368",
      coords: [56.54,26.59],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-22
addEvents({
  "2026-04-22": [
    {
      type: "news",
      title: "Race Intensifies for Unmanned Combat Vessels: China's Orca Challenges US Navy Capabilities",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-22",
      image: "https://maritime-executive.com/media/images/article/Killer-whale-ship-China-CSSC-PLA-Navy-Chinese-social-media.a56402.jfif",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **무인 해상 전투 시스템 경쟁 심화**: 우크라이나의 흑해 무인수상정(USV) 성공 이후 미국을 중심으로 무인 해상 전력 개발 관심도 급증하고 있으며, 미 해군의 실질적 지원이 뒷받침되고 있음</p><p>• **중국의 기술적 우위 확보**: CSSC가 공개한 자리(Orca) 무인 전투정은 배수량 300-500톤으로 미 해군의 Sea Hunter(약 100톤급)보다 3배 규모이며, VLS 발사기, 어뢰관, AESA 레이더, 헬기갑판 등 첨단 무기체계 탑재</p><p>• **생산 능력의 압도적 우위**: 중국 상선 조선소들이 전 세계 연간 건조량의 50% 이상을 담당하고 있어, 다수의 무인 전투정 대량 건조에 구조적 우위 보유</p><p>• **미국 시장의 경쟁 과열과 구조 조정**: Saronic, Anduril, Blue Water Robotics 등 신생 기업과 방위산업 대형사들이 경쟁 중이나, 향후 산업 통폐합 불가피할 것으로 예측</p><p>• **MUSV 마켓플레이스 구조로 본 미 해군의 변화**: 개발 단계 프로그램에서 생산 준비 완료 제품 중심으로 조달 전략 변경, 신뢰성 확보를 최우선 목표로 설정</p><p>• **2026년 산업 판도 결정의 해**: MUSV 계약 구조(복수 기업 선정 여부, 선체 형식 다양성, OTA 경로 활용 등)가 향후 산업 생태계를 좌우할 전환점</p><h3>Key Quotes</h3><p>• "Chinese commercial shipyards produce more tonnage annually than the rest of the world combined. The structural advantage in production capacity that underlies every U.S. concern about naval competition does not disappear because the vessels are unmanned."<br>(중국 조선소의 압도적 생산량 우위는 무인 전투정 대량 건조에서도 여전히 유효한 경쟁력)</p><p>• "The Navy will have a sustained number of orders once programs of record materialize, but not at the kind of scale that will keep a dozen companies in business simultaneously"<br>(미 해군의 지속적 주문량은 있겠지만, 동시에 수십 개 업체를 모두 유지할 수 있는 규모는 불가능)</p><p>• "Reliability at sea will be a primary focus"<br>(해상 운용 신뢰성이 무인 전투정 도입의 최우선 고려사항)</p><h3>Technical Insights</h3><p>• **무인 전투정 성능의 군사적 의미**: 배수량 300-500톤 규모의 다목적 무인 전투정은 대만 해협 같은 얕은 수심 연안 작전(littoral operations)에 최적화되어 있으며, 이는 지역 분쟁 시 전술적 우위 제공 가능</p><p>• **자율 운항 시스템의 COLREG 규제 격차**: 군사용 무인 전투정의 경우 국제 해상충돌 방지규칙(COLREG) 적용 범위와 해석에 대한 국제적 합의 부재로 인한 규제 공백 심화</p><p>• **산업 생태계의 공급망 경쟁력 차이**: 미국은 기술 혁신에 강점이 있으나 소수 정예 함정 중심 조달 구조로 인해 중국의 대량생산 체계에 대응 어려움, IMO 규제 완화를 통한 시간 단축 필요</p><p>• **무인 해상 시스템의 이중용도(dual-use) 규제 문제**: 상업용 자율운항 기술과 군사용 무인 전투정 간의 기술 전이 가능성으로 인해 향후 국제 해양 규제 및 수출통제 강화 예상</p></div>`,
      tags: ["Autonomous Ships","Unmanned Surface Vessels","Naval Warfare","US-China Competition","Defense Technology"],
      link: "https://maritime-executive.com/article/report-the-race-is-on-to-bring-unmanned-combatants-to-life",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "DeepOcean Contracted for Inter-Array Cable Installation at Taiwan's TPC-II Offshore Wind Farm",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-22",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Orient-Adventurer-DeepOcean.jpg?image-crop-positioner-ts=1776844274",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• DeepOcean는 대만 TPC-II 해상풍력발전 프로젝트에서 66kV 배열 케이블(inter-array cables) 설치 지원 계약을 체결했으며, 2026년 완료 예정</p><p>• 노르웨이 회사의 범위는 케이블 설치, 엔지니어링 및 프로젝트 관리 서비스 포함; Dong Fang Offshore와의 협력으로 Orient Adventurer 선박 활용</p><p>• TPC-II 프로젝트는 295MW 규모의 대만 관정 풍력발전 프로젝트로, 31개의 Vestas 9.5MW 터빈을 jacket 기초에 설치하는 프로젝트</p><p>• 2025년 봄 첫 번째 jacket 기초 설치 완료, 2025년 8월 해상 변전소 설치 완료로 프로젝트 진행 중</p><p>• ROV 2대, 케이블 레이 스프레드 및 언더데크 캐러셀로 업그레이드된 Orient Adventurer 선박이 수심 6.5~20km 해역에서 작업 수행</p><h3>Key Quotes</h3><p>• "The offshore work will be carried out with Dong Fang Offshore using the chartered subsea vessel Orient Adventurer, which has been upgraded with two ROVs, an under-deck carousel, and a cable lay spread for subsea cable installation."<br>(Dong Fang Offshore와의 협력으로 2개의 ROV, 언더데크 캐러셀 및 해저 케이블 설치용 케이블 레이 스프레드로 업그레이드된 Orient Adventurer 선박을 이용하여 해상 작업 수행)</p><p>• "Project execution will be managed locally by DeepOcean's offshore renewables team, with support from European cable installation specialists"<br>(DeepOcean의 해상 재생에너지 팀이 지역적으로 프로젝트 실행을 관리하며, 유럽의 케이블 설치 전문가의 지원을 받음)</p><h3>Technical Insights</h3><p>• 해상풍력 발전소의 배열 케이블 설치는 ROV와 고급 케이블 레이 장비가 필수적이며, 변수해역 조건에서의 정밀한 엔지니어링 지원이 중요함</p><p>• 다중 loop 형식의 66kV 배열 케이블 설계(3개 loop로 31개 터빈 연결)는 시스템 안정성과 유지보수 편의성을 동시에 달성하는 업계 표준 방식</p><p>• 국제 협력 기반의 프로젝트 실행(노르웨이 회사-중국 선박 운영-유럽 전문가)은 해상풍력 산업의 글로벌 가치 사슬 특성을 반영하며, 대만의 재생에너지 산업 성장에 기여</p></div>`,
      tags: ["offshore wind","inter-array cables","subsea installation","Taiwan","renewable energy"],
      link: "https://www.offshore-energy.biz/deepocean-contracted-for-inter-array-work-on-new-taiwanese-offshore-wind-farm/",
      coords: [120.3,24],
      location: "Lukang, Changhua County, Taiwan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-23
addEvents({
  "2026-04-23": [
    {
      type: "accident",
      title: "Iran Seizes Commercial Vessels in Strait of Hormuz, Traffic Halts",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-23",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-03-07T044529Z_1004479925_RC20XJAXEVAA_RTRMADP_3_IRAN-CRISIS-ENERGY-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 호르무즈 해협에서 상선 2척(MSC Francesca, Epaminondas)을 나포하여 지난 8주간의 분쟁 이후 처음으로 직접 선박 점거 사태 발생</p><p>• 공격 대상 3척 중 2척이 이란군에 의해 피점거되었으며, 대량 화물선 LB Energy만 통과하는 등 호르무즈 해협 통행 완전 마비</p><p>• 미국-이란 대립으로 인한 해상 봉쇄: 미군은 4월 13일 이후 31척 선박을 저지했으며, 이란 초대형 유조선 2척은 차바하르 항에 정박 중</p><p>• 지난 8주간의 분쟁 단계 상향: 해상 공격에서 직접 선박 나포로 이행되어 호르무즈 해협의 통행 제어 위협 심화</p><p>• 상선사들의 극도의 긴장: 일주일 내 2회차 공격 발생으로 선주들의 페르시아만 운항 회피 심화</p><h3>Key Quotes</h3><p>• "Traffic through the Strait of Hormuz ground to a halt on Thursday after Iran fired on commercial ships and said it had seized at least two vessels — a first in nearly eight weeks of war." (이란의 상선 공격 및 선박 나포로 호르무즈 해협 통행이 완전히 중단되었으며, 이는 8주간의 분쟁 이후 처음)</p><p>• "Two of those attacked vessels, the MSC Francesca and the Epaminondas, were subsequently boarded by Iranian forces, marking a new stage in Tehran's efforts to exert control over traffic through Hormuz." (두 척의 상선이 이란군에 의해 나포되어 테헤란의 해협 통제 전략이 새로운 단계로 진입)</p><h3>Technical Insights</h3><p>• **해상 통제의 군사화**: 호르무즈 해협의 분쟁 상황이 단순 해상 공격에서 국가적 선박 나포로 확대되면서 국제해상법 및 UNCLOS 위반 우려 증대</p><p>• **글로벌 해운산업 영향**: 세계 석유 운송량의 약 20~30%가 통과하는 호르무즈 해협의 완전 폐쇄 위기로 인한 유가 급등 및 운임료 폭등</p><p>• **선주 회피 및 경로 변경**: 상선들이 호르무즈 해협 우회 항로(수에즈운하, 케이프루트) 선택 증가로 운송비용 및 소요시간 대폭 증가</p><p>• **국제해사기구(IMO) 대응 필요성**: 분쟁 지역 통항선박의 안전 보장 및 선박 나포 사태에 대한 국제적 규제 프레임워크 강화 필요</p></div>`,
      tags: ["Iran","Strait of Hormuz","Vessel Seizure","Maritime Conflict"],
      link: "https://gcaptain.com/hormuz-traffic-grinds-to-a-halt-after-iran-seizes-first-vessels/",
      coords: [56.55,26.17],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Invariant Demonstrates Counter-Drone Capability from Autonomous USV",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-23",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/invariant-usv-1-scaled.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Invariant Corporation의 STAKE(Surface-to-Air Kinetic Engagement) 시스템이 Textron Systems의 TSUNAMI 무인표면선박(USV)에 통합되어 드론 요격 능력을 성공적으로 시연<br>• Hunter(센서 및 레이저 지정 패키지)와 Killer(정밀 타격 플랫폼) 두 개의 핵심 서브시스템으로 구성되며 모듈형 설계로 다양한 플랫폼에 탑재 가능<br>• Lake Guntersville에서의 초기 통합 테스트를 통해 역동적이고 복잡한 해양 환경에서의 자율 무기 능력 검증<br>• MOSA(Modular Open Systems Approach) 설계로 다양한 임무 세트 및 페이로드 통합에 적응 가능<br>• 미 국방부의 해양 전력 강화 목표 달성과 함께 자율 해양 무기 개발의 최전선에 위치하는 Invariant의 기술력 입증</p><h3>Key Quotes</h3><br>• "This successful demonstration represents a significant development and reflects Invariant's position at the forefront of C-UxS innovation as well as kinetic maritime autonomy" (이번 시연의 성공은 무인 대항 시스템(C-UxS) 혁신과 해양 자율 무기 분야에서 Invariant의 선도적 위치를 반영)<br>• "We are committed to advancing adaptable, high-performance systems that align with the Department of War's objective to enhance lethality, especially in the maritime domain" (국방부의 해양 전력 강화 목표에 부합하는 적응형 고성능 시스템 개발에 최선을 다할 것)</p><h3>Technical Insights</h3><br>• **자율 해양 방어 시스템의 모듈화 추세**: STAKE의 모듈형 설계(MOSA)는 다양한 크기의 함정 및 플랫폼에 최소한의 엔지니어링으로 통합 가능하며, 향후 해군 자산의 유연한 무기체계 운용을 가능하게 함<br>• **센서-타격 통합 자율화**: Hunter(탐지 및 추적)와 Killer(정밀 타격) 서브시스템의 원활한 협력은 완전 자율 대드론 작전의 실현 가능성을 입증하며, IMO/COLREG의 자율선박 규제 개정에도 영향을 미칠 수 있는 기술적 선례 제시<br>• **해양 무기체계 자율화의 가속화**: 4년 이상의 자율 기술 개발 경험을 가진 Textron과의 협력으로 상용화 가능 수준의 해양 자율 무기 기술이 확보되었으며, 향후 미군 전력 구조의 무인화 가속을 예상하게 함<br>• **산업 표준화와 상호운용성**: MOSA 설계는 다양한 제조사의 페이로드 통합을 가능하게 하여 국방 해양 산업의 개방형 표준화 추진을 의미하며, 장기적으로 NATO 및 우방국 해군의 해양 자율 무기 연합작전 체계 구축 기반 마련</p></div>`,
      tags: ["autonomous systems","USV","counter-UAS","maritime defense","STAKE system"],
      link: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/invariant-successfully-demonstrates-counter-drone-capability-from-usv/",
      coords: [-86.27,34.38],
      location: "Lake Guntersville, Alabama"
    },
    {
      type: "news",
      title: "BIMCO Warns of Hormuz Strait Toll Scam Amid Iran-US Blockade Tensions",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-23",
      image: "https://images.marinelink.com/images/maritime/w800/fajar-adobe-170093.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **BIMCO, 호르무즈 해협 통행료 사기 경고** - 이란 당국을 사칭한 이메일 스캠이 다수 보고되었으며, 정확한 사기 여부는 아직 확인 대기 중<br>• **복잡해진 보안 상황** - 이란의 승인 후 선박이 공격당한 사례로 보아 현 지역의 보안 상황이 매우 불안정함을 시사<br>• **양측 봉쇄 및 공격 진행** - 미국은 이란 항구 관련 선박에 대한 봉쇄를 시행 중이며, 이란도 컨테이너선 2척을 억류하고 다수를 통행 중단하게 함<br>• **기뢰 위협으로 인한 통항 제한** - 이란이 해협 일부에 기뢰를 매설했다는 징후로 인해 안전한 해협 통행 재개까지 수주 소요 예상<br>• **제한된 대체 항로의 용량 부족** - 현재 이란·오만 인근 해역 제한 항로만 안전하나, 정상 물동량 수용 불가능<br>• **업계 복구 조건** - 대부분 선사들이 안정적 휴전과 양측의 호르무즈 해협 안전 통행 보증 필요</p><h3>Key Quotes</h3><p>• "BIMCO has received reports of an email scam, but we are still awaiting confirmation that this was in fact a scam. The fact that ships were attacked following apparent Iranian approval to transit underscores the complexity and volatility of the current security situation." (BIMCO가 이메일 사기 보고를 받았으나 확인 대기 중이며, 이란 승인 후 선박 공격은 현 보안 상황의 복잡성과 불안정성을 보여줌)</p><p>• "While it is comforting to know that no crew have been injured in these attacks, it is deeply worrying that ships are attacked and ships and crew are used as bargaining chips in the confrontations. We urge all parties of the conflict to show restraint and help protect innocent seafarers." (승무원 피해가 없는 점은 다행이나, 선박과 승무원이 협상의 도구로 사용되는 것은 매우 우려스러우며, 모든 당사자의 자제와 해원 보호 촉구)</p><h3>Technical Insights</h3><p>• **기뢰 제거 작업의 장기화 위험** - 호르무즈 해협의 기뢰 제거에 수주 이상 소요될 가능성이 높으며, 이는 정상적인 해상 물류 재개의 주요 장애물이 됨<br>• **제한된 항로의 용량 초과 문제** - 현재 이용 가능한 이란·오만 인근 항로는 협소한 수로로 정상 통항량의 수용 불가능하여 선박 혼잡과 안전 위험 증가<br>• **지정학적 리스크와 해운 보안의 통합 위협** - 국제 분쟁이 직접 해운업에 미치는 영향으로, SOLAS/COLREG 등 국제 해양 규칙만으로는 해결 불가능한 정치·군사적 보안 위협 대두<br>• **승무원 안전과 선박 규제 강화 필요** - 현재 선박 납치 및 공격 사례 증가로 인해 호르무즈 해협 통행 선박에 대한 강화된 보안 프로토콜 및 국제 해군 호위 체계 재정비 필요</p></div>`,
      tags: ["Hormuz Strait","Security Threat","Scam Alert","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/bimco-warns-hormuz-toll-scam-538430",
      coords: [56.2428,26.1387],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "White House Expected to Extend Jones Act Waiver for 90 Days Amid Iran Conflict",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-23",
      image: "https://images.marinelink.com/images/maritime/w800/irena-adobe-170091.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 백악관이 이란 분쟁으로 인한 연료 가격 상승을 완화하기 위해 존스법(Jones Act) 면제를 최대 90일 연장할 예정<br>• 미국 항구 간 해상 운송에 미국 선박과 미국 승무원 사용 의무를 임시로 완화하여 외국 선박의 자유로운 운항 허용<br>• 말타 국적 유조선 HTM Warrior가 텍사스에서 펜실베니아 정제소로 석유를 운송하는 등 이미 면제 정책이 활용 중<br>• 트럼프 행정부가 3월 17일부터 60일간 존스법을 면제했으며, 이번 연장으로 에너지 시장 안정화를 지속 추진<br>• 호르무즈 해협 긴장으로 인한 공급 차질을 완화하고 국내 연료 가격 상승을 억제하는 것이 정책의 핵심 목표</p><h3>Key Quotes</h3><p>• "The move would temporarily ease requirements that goods transported between U.S. ports be carried on American-built and American-crewed vessels, allowing foreign-flagged ships to move fuel and other key commodities more freely" (미국 항구 간 운송에 미국 선박 사용 의무를 임시 완화하여 외국 선박의 연료 및 주요 물자 운송을 자유롭게 허용)</p><p>• "A foreign-flagged tanker delivered a load of crude oil from Texas to a U.S. refinery on Thursday under the temporary waiver" (외국 국적 유조선이 임시 면제 정책 하에 텍사스에서 미국 정제소로 원유를 운반)</p><h3>Technical Insights</h3><p>• **해운 규제 정책의 유연성**: 존스법은 미국 해운업 보호의 핵심 규제이나, 에너지 위기 상황에서 국가이익을 우선하여 임시 면제하는 정책적 유연성 필요성 대두</p><p>• **국제해사법과 국내정책의 충돌**: 외국 선박의 미국 연안 운송 허용은 IMO 해운 자유 원칙과 국내 보호주의 정책 간의 균형을 시사하는 사례</p><p>• **에너지 공급망 안정성**: 호르무즈 해협 긴장으로 인한 글로벌 에너지 수급 불안정이 해운 규제 완화의 직접적 원인이며, 자율운항선박 도입 등 공급망 다각화의 중요성 강조</p></div>`,
      tags: ["Jones Act","Shipping Regulation","U.S. Policy","Energy Crisis"],
      link: "https://www.marinelink.com/news/white-house-expected-extend-jones-act-538428",
      coords: [-97.5,38.8],
      location: "United States"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-23
addEvents({
  "2026-04-23": [
    {
      type: "news",
      title: "Chris-Marine Launches Engine Insights Digitalization Solution for Cylinder Condition Monitoring",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-23",
      image: "https://images.marinelink.com/images/maritime/w800/chrismarine-170086.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Chris-Marine AB가 엔진 실린더 상태 측정 데이터를 자동 표준 보고서로 변환하는 Engine Insights 디지털 솔루션 출시<br>• 선박 기술자들이 LDM, LCC, CTM, Replica Test 등 선상 측정 도구에서 데이터를 직접 업로드하여 수 분 내 구조화된 보고서 생성 가능<br>• 기존 수동 보고 방식의 4~6시간 소요 시간을 단 수 분으로 단축하는 획기적 효율성 개선<br>• 함대 관리자에게 선박 상태의 접근 가능한 개요 제공으로 효율적인 유지보수 계획 및 부품 수명 연장 지원<br>• Chris-Marine 측정 도구와 완벽하게 통합되는 표준화된 실린더 상태 보고 접근 방식 제공</p><h3>Key Quotes</h3><br>• "Engine Insights reduces this process to just a couple of minutes" (수동 보고 프로세스를 단 몇 분으로 단축)<br>• "the platform gives fleet managers an accessible overview of vessel condition, supporting more efficient maintenance planning" (플랫폼이 함대 관리자에게 선박 상태의 접근 가능한 개요를 제공하여 효율적인 유지보수 계획 지원)</p><h3>Technical Insights</h3><br>• 해양 산업의 디지털화 가속: 전통적 수동 보고 방식에서 AI/자동화 기반 데이터 처리로의 전환으로 운영 효율성 극대화<br>• 예측적 유지보수(Predictive Maintenance) 기술 도입: 실린더 상태 조기 감지로 인한 선박 다운타임 감소 및 운영 비용 절감<br>• 표준화된 데이터 관리: IMO 규정 준수 및 선급사 요구사항 충족을 위한 구조화된 보고 체계 확립으로 규제 대응 용이<br>• 선단 관리 플랫폼의 통합화: 개별 선박의 기술 데이터 중앙화로 전체 함대 최적화 및 자원 배분 의사결정 개선</p></div>`,
      tags: ["digitalization","engine maintenance","cylinder condition","maritime tech","fleet management"],
      link: "https://www.marinelink.com/news/chrismarine-introduces-engine-insights-538426",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "Iranian Fast-Attack Boats Seize Container Ships Near Strait of Hormuz, Escalating Shipping Threats",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-23",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockpeter-170081.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란 혁명수비대가 호르무즈 해협 근처에서 스웜 형태의 고속 보트를 이용해 MSC 소속 컨테이너선 2척을 나포했으며, 약 40명의 선원이 탑승 중<br>• 나포된 선박은 파나마 국적의 MSC Francesca(몬테네그로 선원 4명, 크로아티아 선원 2명 포함)와 라이베리아 국적의 Epaminondas(우크라이나 및 필리핀 선원 21명)<br>• 이란은 미국의 이란 선박 나포에 대한 보복 조치로 이들 컨테이너선을 방문 바스 항구로 이동 중이며, MSC와 협상 진행 중<br>• 호르무즈 해협 개방 문제가 복잡해짐에 따라 해상 운송 위협이 증대되고 있으며, 이는 세계 주요 석유 수출로의 재개를 어렵게 만들 수 있음<br>• 이란의 고속 공격정은 해안 미사일, 드론, 기뢰, 전자 방해 등과 함께 다층적 위협 체계를 형성하고 있으며, 수백 척 이상의 이러한 보트가 존재할 것으로 추정됨<br>• 미국은 호르무즈 해협 외부에 해군 봉쇄선을 설치하고 이란의 고속 공격정에 대한 무력 대응을 경고했으나, 무장한 상선에 대한 대비는 미흡한 상태</p><h3>Key Quotes</h3><p>• "Some 20 Iranians armed to the teeth stormed the ship. Sailors are under Iranians' control, their movements on the ship are limited, but the Iranians are treating them well" <br>(무장한 약 20명의 이란인이 선박을 점거했으며, 선원들은 이란군의 통제 하에 있고 배 내 이동이 제한되어 있으나, 이란군이 선원들을 잘 대우하고 있음)</p><p>• "Iran was estimated to have hundreds, if not thousands, of these boats before the war, often hidden in coastal tunnels, naval bases or among civilian vessels"<br>(이란은 전쟁 이전에 수백 척, 심지어 수천 척의 이러한 고속정을 보유했으며, 이들은 해안 터널, 해군 기지, 민간 선박 사이에 숨겨져 있는 경우가 많음)</p><h3>Technical Insights</h3><p>• 호르무즈 해협의 지리적 제약성과 이란의 다층적 해상 위협 체계(스웜 보트, 해안 미사일, 드론, 전자 방해)는 기존의 단순 군사 대응으로는 해결이 어려우며, 상선 보호 시스템의 고도화 필요<br>• IMO 해상보안(ISPS Code) 규정만으로는 국가 차원의 고의적 나포 행위에 대응이 불가능하며, 국제 해상 안정을 위한 다자간 협력 메커니즘의 강화 필요<br>• 자율운항선박(MASS) 및 원격 운영 기술의 도입은 이러한 위험 해역에서 인명 피해를 줄일 수 있는 대안이 될 수 있으나, 현재의 기술 수준과 국제법적 틀에서 실현 가능성 검토 필요<br>• 호르무즈 해협의 물류 거점 기능 상실 시 글로벌 해운 산업에 미치는 경제적 파급 효과가 극대화될 수 있으며, 보험료 인상 및 우회항로 이용에 따른 운송비 증가로 해운사들의 경영 악화 초래 가능</p></div>`,
      tags: ["Iran","Strait of Hormuz","Maritime Security","Container Ships","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/iranian-swarms-fast-boats-used-seize-538419",
      coords: [56.1499,26.1367],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "U.S.-Backed War Risk Insurance Program for Hormuz Awaits Navy Convoy Operations",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-23",
      image: "https://maritime-executive.com/media/images/article/Tanker-escort-1987-Operation-Earnest-Will-Tanker-Wars-USN.jpg.9a459d.backup",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 트럼프 행정부가 호르무즈 해협과 아라비아만 해역 해운 보호를 위한 전쟁위험보험 프로그램을 마련했으며, NYSE 상장사 추브(Chubb)가 관리함</p><p>• 이 프로그램은 20억 달러 규모의 재보험 프로그램으로, 미국 국제개발금융공사(DFC)와 미국 보험사 컨소시엄이 공동으로 자금을 지원하고 있음</p><p>• 현재 이란의 해협 내 위협 수준이 높고 미국 해군이 이란의 상선 봉쇄에 집중하고 있어 프로그램 시작이 지연되고 있음</p><p>• 보험 프로그램의 활성화는 미국 해군의 호위함대(convoy) 운영을 전제 조건으로 하며, 선박소유자들은 호위함대에 참여하기 위해 반드시 이 보험에 가입해야 함</p><p>• 추브는 전쟁선체보험(War Hull), 전쟁배상책임보험(War P&I), 전쟁화물보험(War Cargo) 등을 제공할 미국 보험사 컨소시엄의 주요 언더라이터 및 관리자로서 역할 수행</p><p>• DFC가 전체 위험의 50%를 인수하고 나머지 50%는 미국 보험사 컨소시엄이 부담하는 구조로 설계됨</p><h3>Key Quotes</h3><p>• "The government wanted to support shipping through the Gulf when they think that the risk environment is such that they can support military convoys for ships. And that has yet to occur." (정부는 군 호위함대 운영이 가능할 때 호르무즈만의 해운을 지원하려고 했지만, 아직 그러한 조건이 형성되지 않았다는 의미)</p><p>• "We have done it, number one, to support our country and to support our military; and number two, to support the global commons and the economy." (이 프로그램은 미국과 군을 지원하고 동시에 글로벌 공해와 세계 경제를 보호하기 위해 마련되었다)</p><h3>Technical Insights</h3><p>• **전쟁위험보험 구조의 혁신성**: 정부 기관(DFC)과 민간 보험사의 위험 분담 모델은 지정학적 위기 상황에서 국제 해운을 보호하는 새로운 방식을 제시하고 있으며, 이는 IMO 규제 프레임워크를 보완하는 역할을 함</p><p>• **호위함대 조건부 운영 논리**: 미국 해군 호위함대의 운영을 보험 활성화의 전제 조건으로 설정한 것은 COLREG 준수와 국제해사법 하에서 해운 자유와 국가 안보를 균형있게 관리하려는 정책적 시도로 평가됨</p><p>• **선주의 보험 가입 의무화**: 호위함대 참여 시 의무적으로 이 보험에 가입하도록 함으로써, 국가 차원의 해상 보안 전략과 개별 선사의 경제성을 통합하는 메커니즘을 구축함</p><p>• **중동 해역 해운 보호 정책의 확대 가능성**: 호르무즈 해협 사례가 다른 지정학적 위험 해역(홍해, 말라카 해협 등)에서의 유사 보험 프로그램 확대 모델이 될 수 있으며, 이는 글로벌 해운 네트워크 회복력 강화에 중요한 역할을 할 것으로 예상됨</p></div>`,
      tags: ["War Risk Insurance","Strait of Hormuz","U.S. Navy Convoys","Chubb Insurance"],
      link: "https://maritime-executive.com/article/u-s-backed-war-risk-cover-for-hormuz-will-have-to-wait-for-convoys",
      coords: [56.24,26.12],
      location: "Strait of Hormuz, Arabian Gulf"
    },
    {
      type: "news",
      title: "Birdon America and Mythos AI Partner on U.S. Navy MUSV Development",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-23",
      image: "https://maritime-executive.com/media/images/article/L-R-Dwight-E-Smith-Jr-Jonathan-Buckowski-Jamie-Bruce-Geoff-Douglass-Tony-Ardito-Terri-Benson.9fb9b1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **전략적 협력 체결**: Birdon America와 Mythos AI가 Sea-Air-Space 2026에서 중형 무인수상함(MUSV) 개발을 위한 양해각서(MOU) 서명</p><p>• **역할 분담**: Birdon은 해양 플랫폼 및 프로그램 실행 능력을 담당하고, Mythos AI는 자율항해, 인식, 지휘통제 및 임무 소프트웨어 기술 제공</p><p>• **개발 목표**: 2026년 내 미 해군의 진화하는 MUSV 요구사항을 충족하는 임무 지원 무인함정 프로토타입 완성 목표</p><p>• **수직 통합 솔루션**: 신속한 프로토타입 제작, 시연, 생산 전환을 위한 자율항해 함정의 완전 통합 솔루션 추구</p><p>• **방위산업 응용**: 방위 고객을 위한 확장 가능한 임무 능력형 무인시스템 제공에 중점</p><h3>Key Quotes</h3><p>• "Our strategy is centered on building scalable, production ready capacity for the future defense market, and selecting Mythos AI as our autonomy provider is an important part of that vision." (우리의 전략은 미래 방위 시장을 위한 확장 가능하고 생산 준비된 역량 구축에 중점을 두고 있으며, Mythos AI를 자율항해 제공자로 선정하는 것이 이 비전의 중요한 부분입니다)</p><p>• "This collaboration reflects the growing need for mature autonomy capabilities that can be integrated into mission ready maritime platforms for defense customers." (이 협력은 방위 고객을 위한 임무 준비 해양 플랫폼에 통합될 수 있는 성숙한 자율성 기능의 증가된 필요성을 반영합니다)</p><h3>Technical Insights</h3><p>• **AI 기반 자율항해의 국방 적용**: Mythos AI의 인식(perception), 지휘통제(command and control), 임무 소프트웨어 기술은 해상 방위 작전의 자동화 수준을 획기적으로 상향</p><p>• **COLREG 및 IMO 규제 준수**: 무인함정 개발 시 국제해사법규(COLREG) 및 IMO 자율선박 지침 준수 필요성은 향후 상용화 단계에서 중요한 검증 과제</p><p>• **방위산업 생산화**: 프로토타입 개발에서 생산 전환까지 1년 내 완성 목표는 미 해군의 빠른 기술 도입 수요와 민간 자율선박 산업의 기술 검증 선순환 창출 가능성 시사</p><p>• **산업 생태계 확대**: 선박 건조 업체와 AI 소프트웨어 기업의 수직 통합 모델은 향후 상용 해운 분야의 자율선박 개발에도 적용 가능한 산업 구조 제시</p></div>`,
      tags: ["autonomous ships","MUSV","U.S. Navy","defense technology","AI navigation"],
      link: "https://maritime-executive.com/article/birdon-america-and-mythos-ai-jointly-pursuing-u-s-navy-musv-opportunities",
      coords: [0,0],
      location: "United States"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-24
addEvents({
  "2026-04-24": [
    {
      type: "news",
      title: "Hydrogen-fueled AUV achieves 2,000-kilometer subsea endurance record",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-24",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Hydrogen-fueled-AUV-breaks-range-expectations-with-2000-kilometer-subsea-run.jpg?image-crop-positioner-ts=1777027488",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Cellula Robotics의 Envoy AUV가 수소 연료전지로 2,023km의 수중 항행을 385시간 동안 완수하여 공식 성능 사양을 초과 달성</p><p>• 미션 중 4,000회 이상의 회전과 기동을 수행하여 직선 항행보다 높은 에너지 소비를 나타내며 실제 해양 작업 환경을 더 잘 반영</p><p>• Cellula Robotics와 Infinity Fuel Cell and Hydrogen, Inc.가 협력하여 개발한 수소 연료전지 기술로 물을 부산물로만 생성</p><p>• 장시간 지속 가능 항행으로 인한 회수 횟수 감소, 지속적 운영 가능, 해양 에너지 분야의 효율성 극대화 실현</p><p>• 수소 연료전지 기술이 자율형 장거리 수중 임무의 내구성 확장 및 개입 요구사항 감소의 핵심 역할 입증</p><h3>Key Quotes</h3><p>• "The significance of this result is not just the distance travelled, but that it was achieved fully submerged in a mission profile that better reflects real subsea operations" (이 결과의 중요성은 단순히 주행 거리가 아니라 실제 해양 작업을 더 잘 반영하는 미션 프로필로 완전 수중 상태에서 달성했다는 점에 있음)</p><p>• "This result highlights the role fuel cell technology can play in extending endurance, reducing intervention requirements, and supporting more capable long-range autonomous missions" (이 결과는 연료전지 기술이 지속 시간 연장, 개입 요구사항 감소, 그리고 더 강력한 장거리 자율 임무 지원에서 수행할 수 있는 역할을 강조함)</p><h3>Technical Insights</h3><p>• 수소 연료전지 기술을 AUV에 적용함으로써 전통적인 배터리 기반 수중 자율주행체의 항속 거리 한계를 획기적으로 극복하고 장시간 지속 운영 가능성 확보</p><p>• 직선 항행이 아닌 4,000회 이상의 기동과 회전을 포함한 실제 작업 프로필 수행으로 인한 높은 에너지 소비 환경에서도 성능 검증을 달성하여 실운영 적용 가능성 증대</p><p>• 부산물이 물(H₂O)뿐인 친환경적 에너지 시스템으로 해양 환경 오염 최소화 및 지속 가능한 해양 에너지 산업 구축의 선도적 사례 제시</p><p>• 장거리 자율 수중 탐사, 해양 자원 조사, 해저 인프라 모니터링 등 다양한 해양산업 분야에서 인공지능 기반 자율 시스템의 효율성과 경제성 향상에 기여할 것으로 예상</p></div>`,
      tags: ["Autonomous Underwater Vehicle","Hydrogen Fuel Cell","Subsea Technology","Maritime Innovation"],
      link: "https://www.offshore-energy.biz/hydrogen-fueled-auv-breaks-range-expectations-with-2000-kilometer-subsea-run/",
      coords: [-114.0709,51.52],
      location: "Canada"
    },
    {
      type: "news",
      title: "ABS Signs MOU with Fleet Robotics on Maritime Autonomous Robotic Systems",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-24",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **ABS와 Fleet Robotics의 협력**: 미국선급협회(ABS)와 Fleet Robotics가 해양 자율로봇 시스템 개발을 위한 양해각서 체결<br>• **주요 기술 분야**: 선박 선체 청소 및 검사 자동화를 위한 로봇 시스템 개발 및 검증<br>• **발표 시점 및 장소**: 싱가포르 해양주간(Singapore Maritime Week)에서 공식 발표<br>• **ABS의 역할**: 선급협회로서 자율로봇 시스템의 기술 표준 개발 및 검증 지원<br>• **산업적 의의**: 선박 유지보수 및 검사 작업의 자동화를 통한 해운산업의 디지털화 촉진</p><h3>Key Quotes</h3><p>• "The agreement...aims to support..." (협약은 자율로봇 기술의 해양산업 적용을 지원하기 위함)</p><h3>Technical Insights</h3><p>• **자율로봇 규제화**: IMO 및 선급협회가 자율로봇 시스템의 안전성, 신뢰성, 운영표준에 대한 국제 지침 개발 필요<br>• **선체검사 자동화의 효율성**: 드론 및 로봇 기반 검사 시스템은 인력 안전성 향상 및 검사 정확도 개선으로 선박 유지보수비용 절감 기대<br>• **해운산업의 디지털 전환**: 자동화 로봇 도입으로 선원 수요 감소 및 해양산업 인력 구조 변화 예상<br>• **ABS 기술 표준화**: 선급협회의 자율로봇 검증 및 인증 프로세스 확립이 산업 표준화 및 국제 경쟁력 강화에 기여</p></div>`,
      tags: ["Autonomous Robotics","Hull Cleaning","ABS Classification","Fleet Robotics","Maritime Technology"],
      link: "https://www.marinelink.com/news/abs-signs-pact-fleet-robotics-maritime-538446",
      coords: [103.8198,1.3521],
      location: "Singapore"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-23
addEvents({
  "2026-04-23": [
    {
      type: "news",
      title: "Trump Says Shipbuilding Clashes Led to Navy Secretary Phelan's Firing",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-04-23",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-23T213919Z_1149591479_RC29VKAO9M89_RTRMADP_3_USA-TRUMP.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 도널드 트럼프 대통령은 해군부 장관 존 펠란의 해임이 조선 및 함정 구매를 둘러싼 국방부 고위 지도부와의 갈등으로 인한 것이라고 발표했습니다.</p><p>• 펠란은 개혁 시행 속도가 느리다는 비판을 받았으며, 해군 함정 건조 가속화와 산업 개혁을 놓고 국방부 내 권력 투쟁이 발생했습니다.</p><p>• 해군부 장관 임기 중 "Golden Fleet" 계획과 BBG(X) 차기 전함 개념, FF(X) 호위함 프로그램, 중형 상륙함(LSM) 등 주요 조선 이니셔티브를 추진했습니다.</p><p>• 미국 해군은 중동 분쟁 및 호르무즈 해협 주변 해상 안보 작전으로 인한 운영 부담이 지속되고 있으며, 중국의 산업 규모 해군 증강에 대응해야 합니다.</p><p>• FY27 회계연도 예산에서 조선에 65.8억 달러를 배정하여 전년도 대비 46% 증액되었습니다.</p><p>• 조선 중심의 개혁가가 조선 관련 의견 불일치로 해임되면서 미국 해양 정책 의제의 불확실성이 심화되었습니다.</p><h3>Key Quotes</h3><p>• "He's a hard charger, and he had some conflicts with some other people, mostly as to building and buying new ships. Got to get along, especially in the military, got to get along." (그는 강한 추진력을 가진 사람이었고 특히 함정 건조 및 구매에 관해 다른 사람들과 갈등을 겪었습니다. 특히 군부에서는 서로 잘 지내야 합니다.)</p><p>• "To be a superpower, a nation must be a seapower." (초강대국이 되려면 국가는 해양 강국이어야 합니다.)</p><h3>Technical Insights</h3><p>• 미국 해군의 함정 건조 현대화 정책이 국방부 내 의견 대립으로 인해 정책 추진 방향이 불명확해지고 있으며, 이는 해양 산업 정책 일관성에 부정적 영향을 미칠 수 있습니다.</p><p>• FF(X) 호위함과 LSM 같은 단순화되고 확장 가능한 조선 모델은 미국의 해양 산업 경쟁력 강화를 목표로 하나, 정책 변동으로 인한 불확실성이 민간 조선사의 투자 결정에 영향을 줄 수 있습니다.</p><p>• 중국과의 해양 경쟁 심화 속에서 미국 해군의 함정 건조 가속화는 전략적 필요성이 높으나, 조선소 역량 한계와 산업 개혁 속도 간의 괴리가 정책 갈등의 근본 원인으로 작용하고 있습니다.</p></div>`,
      tags: ["US Navy","Shipbuilding","Naval Policy","Pentagon Leadership"],
      link: "https://gcaptain.com/trump-says-shipbuilding-clashes-led-to-navy-secretary-phelans-firing/",
      coords: [-77.0369,38.8951],
      location: "Washington, D.C."
    }
  ]
});

// Auto-collected: 2026-04-25
addEvents({
  "2026-04-25": [
    {
      type: "news",
      title: "ABS and Fleet Robotics Partner on Autonomous Robotic Systems for Hull Cleaning and Inspection",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-25",
      image: "https://maritime-executive.com/media/images/article/unnamed-1-.9fe780.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ABS와 Fleet Robotics가 선박 선체 청소 및 검사를 위한 자율 로봇 시스템 개발을 위한 양해각서(MOU) 체결<br>• 싱가포르 해양주간(Singapore Maritime Week)에서 발표되었으며, 해양산업의 기술 혁신에 대한 수요 증가를 반영<br>• 프로젝트는 로봇 시스템의 검사 작업 적합성 평가, 센서 데이터 및 이미지 품질 검증, 기존 규제 체계 통합 방안 도출 포함<br>• ABS는 해양 및 해양 산업을 위한 자율 및 원격 제어 기술 지원의 선도 제공자로서 표준 및 프레임워크 확립 주도<br>• 연속적 선체 모니터링으로 간헐적 검사에서 벗어나 고품질 데이터 기반 의사결정 지원</p><h3>Key Quotes</h3><p>• "It is an honor to work alongside Fleet Robotics to advance autonomous robotic systems for the industry. This collaboration is about more than innovation, we are working to establish the standards and frameworks needed for the maritime industry to confidently adopt these technologies." (해양산업이 자신감 있게 이 기술들을 채택할 수 있도록 필요한 표준과 프레임워크를 확립하는 데 중점)</p><p>• "We're proud to be working with ABS as we advance a future where hulls are continuously monitored, not intermittently inspected." (선체가 간헐적으로 검사되는 것이 아닌 지속적으로 모니터링되는 미래를 구현하기 위한 협력)</p><h3>Technical Insights</h3><p>• **자율 로봇 기술의 표준화**: ABS와 Fleet Robotics의 협력은 해양산업에서 자율 로봇 시스템 도입을 위한 명확한 기술 표준과 규제 프레임워크 수립의 필요성을 강조하며, 이는 IMO 및 선급 검사 체계와의 통합이 핵심</p><p>• **지속적 모니터링 패러다임 전환**: 기존의 정기적 정선 검사 중심에서 실시간 수중 검사 기반으로 전환하여 선체 성능 데이터의 신뢰성 및 품질 향상, 선주 및 운영자의 의사결정 효율성 증대</p><p>• **센서 데이터 신뢰성 검증**: 자율 로봇의 센서 데이터 및 영상 품질이 선급 검사 목적으로 활용되기 위해서는 엄격한 검증 프로세스 필요하며, 이는 데이터 기반 규제(Data-Driven Regulation) 도입의 선행 조건</p><p>• **규제 통합 및 산업 채택 경로**: 현존하는 선급 검사, 규제 및 선주 운영 워크플로우와의 호환성 확보가 자율 로봇 시스템의 광범위한 업계 도입을 위한 필수 요소</p></div>`,
      tags: ["Autonomous Systems","Hull Inspection","Robotics","ABS","Fleet Robotics"],
      link: "https://maritime-executive.com/article/abs-fleet-robotics-to-bring-autonomous-robotic-systems-to-maritime",
      coords: [103.8554,1.3521],
      location: "Singapore"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-24
addEvents({
  "2026-04-24": [
    {
      type: "news",
      title: "Argentina's FSRU Lines Up LNG Cargo from Naturgy",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-24",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/EELP_LNGOperations_gallery1-1600x901-1.jpg?image-crop-positioner-ts=1777035544",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 아르헨티나의 두 번째 LNG 수입 시설인 FSRU(부유식 저장 및 재기화 설비)가 Naturgy Aprovisionamientos로부터 새로운 LNG 화물을 확보함</p><p>• 에너지 아르헨티나가 개최한 국제 공개 입찰(4월 15일)에서 39개 사전 승인 기업 중 6개만 참가했으나 Naturgy가 낙찰됨</p><p>• GNL Escobar 터미널은 부에노스아이레스에서 약 30마일 떨어진 파라나강에 위치하며, 5월 2주경 도착 예정</p><p>• LNG 화물 보충을 통해 주거용 수요 급증이나 천연가스 수송 시스템의 예기치 않은 고장 시 재기화 가스를 시스템에 공급 가능</p><p>• 아르헨티나는 높은 계절성을 보이는 천연가스 수요를 충족하기 위해 LNG를 "더 깨끗하고 비용 효율적인" 에너지원으로 활용 중</p><p>• Sierra Grande Norte의 제안된 LNG 프로젝트 추진이 진행 중으로, 대서양 연안 인프라 확충 계획 진행</p><h3>Key Quotes</h3><p>• "This stock replenishment would make it possible to inject regasified gas into the system in the event of potential peaks in residential demand caused by lower temperatures, or in the case of unforeseen failures in the natural gas transportation system" (이러한 비축 보충을 통해 저온으로 인한 주거용 수요 급증이나 천연가스 수송 시스템의 예기치 않은 고장 시 재기화 가스를 시스템에 주입할 수 있음)</p><p>• "LNG has played a critical role in meeting Argentina's energy needs with 'cleaner and cost-saving' LNG, given the high seasonality of the country's natural gas consumption" (아르헨티나의 높은 천연가스 소비 계절성을 감안할 때 LNG는 "더 깨끗하고 비용 효율적인" 에너지로서 국가의 에너지 수요를 충족하는 데 중요한 역할을 함)</p><h3>Technical Insights</h3><p>• **LNG 인프라 확충 추세**: 신흥국 FSRU 도입으로 고정 LNG 기지 건설의 높은 자본 비용 없이 유연한 에너지 공급 인프라 구축 가능 - 해양 에너지 산업의 중요한 경향</p><p>• **계절성 에너지 관리**: 아르헨티나의 천연가스 수요 계절성 해결을 위한 FSRU 기반 LNG 저장소 활용으로, 재기화 설비의 조절 용량(peaking capacity) 역할 강조</p><p>• **조달 시장 효율성**: 국제 공개 입찰 방식으로 39개 기업 중 6개만 실제 입찰에 참가한 점은 LNG 공급 시장의 집중도와 높은 진입 장벽을 시사</p><p>• **대서양 LNG 허브 구축**: Sierra Grande Norte 프로젝트와 Escobar FSRU 연계로 남미 대서양 연안 LNG 공급 네트워크 구축 진행 중 - 글로벌 LNG 무역로 다변화의 일환</p></div>`,
      tags: ["LNG","FSRU","Argentina","Naturgy","Energy Infrastructure"],
      link: "https://www.offshore-energy.biz/argentinas-fsru-lines-up-lng-cargo-from-naturgy/",
      coords: [-58.4173,-34.6037],
      location: "Buenos Aires, Argentina (Paraná River - Escobar Terminal)"
    },
    {
      type: "news",
      title: "GTT Secures Tank Design Contract for Two 180,000 cbm LNG Carriers with Samsung Heavy Industries",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-24",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/02/LNG-vessel-Source-GTT.jpg?image-crop-positioner-ts=1771505165",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 프랑스의 액화천연가스(LNG) 탱크 설계 전문업체 GTT가 삼성중공업으로부터 2척의 LNG 운반선 탱크 설계 계약을 확보했습니다.<br>• 발주사는 Celsius Tankers이며, 각 선박의 용량은 180,000 입방미터(cbm)로 설계됩니다.<br>• GTT의 Mark III Flex 멤브레인 방식 극저온 탱크 시스템이 적용될 예정입니다.<br>• 두 선박의 인도는 2028년 2분기~3분기에 예정되어 있습니다.<br>• 이 계약은 GTT가 최근 다른 아시아 선주를 위해 삼성중공업과 체결한 LNG 운반선 탱크 설계 계약에 이은 추가 수주입니다.<br>• LNG 해운 산업의 지속적인 성장과 함께 GTT의 기술적 경쟁력이 국제 조선소에서 인정받고 있음을 보여주는 사례입니다.</p><h3>Key Quotes</h3><br>• "GTT has received an order from Samsung Heavy Industries' shipyard for the tank design of two new LNG carriers on behalf of Celsius Tankers, the shipowner." (GTT가 삼성중공업 조선소로부터 선주 Celsius Tankers를 대신하여 2척의 새로운 LNG 운반선 탱크 설계 주문을 받았습니다.)<br>• "Each vessel, with a capacity of 180,000 cubic meters (cbm), will feature its cryogenic tanks." (각 선박은 180,000 입방미터(cbm) 용량으로 극저온 탱크를 갖추게 될 것입니다.)</p><h3>Technical Insights</h3><br>• Mark III Flex 멤브레인 시스템은 LNG 운반선의 극저온 저장 기술에서 업계 표준으로, 안전성과 효율성을 동시에 제공하는 차세대 기술입니다.<br>• 180,000 cbm급 대형 LNG 운반선은 국제 가스 무역의 핵심 인프라로, 글로벌 에너지 전환 추세에 따른 선박 신규 발주가 증가하고 있습니다.<br>• GTT의 반복적인 삼성중공업과의 계약 체결은 프랑스 기술의 국제 경쟁력을 입증하며, 한국 조선산업과의 강한 협력 관계를 보여줍니다.<br>• LNG 운반선의 탱크 설계 기술은 IMO의 국제 해양 안전 기준(SOLAS, MARPOL)을 준수해야 하므로, 규제 환경에서의 기술 표준화가 중요한 경쟁 요소입니다.</p></div>`,
      tags: ["LNG Carrier","Tank Design","Samsung Heavy Industries","GTT","Celsius Tankers","Mark III Flex"],
      link: "https://www.offshore-energy.biz/french-firm-gets-more-work-with-samsung-heavy-industries-for-lng-vessel-pair/",
      coords: [127,37.5],
      location: "South Korea (Samsung Heavy Industries)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-24
addEvents({
  "2026-04-24": [
    {
      type: "news",
      title: "EU's 20th Sanctions Package Blacklists 632 Russian Shadow Fleet Vessels",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-24",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/04/Novatek.jpg?image-crop-positioner-ts=1743776527",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• EU가 러시아의 에너지 수익 제한을 목표로 20차 대규모 제재 패키지를 채택했으며, 이는 우크라이나 위기 종식을 위한 협상 압박 전략의 일환</p><p>• 러시아 암묵적 선단(Shadow Fleet) 선박 632척이 EU 블랙리스트에 등록되어 항만 접근 및 서비스 금지 조치 대상이 되었으며, 이번에 46척의 추가 선박이 새로 지정됨</p><p>• EU의 제재 패키지는 120개 개인/단체를 추가 지정했으며, 에너지 부문(유전, 채굴, 정유, 운송) 36개 항목과 암호화폐, 금융 서비스 제재를 포함하는 다층 구조</p><p>• 러시아 에너지 산업 공급망 차단, 해운 보험사 제재, 제3국 내 그림자 선단 운영 주체 지정으로 우회 수단 차단에 집중</p><p>• Kaja Kallas 고위대표는 "러시아 전쟁 경제가 심화된 압박 아래 놓여 있다"고 평가하며 지속적 제재 강화 필요성 강조</p><h3>Key Quotes</h3><p>• "Today we have finally broken the deadlock... Russia's war economy is under growing strain, while Ukraine is getting a major boost." <br>(오늘 교착상태를 드디어 타개했으며, 러시아의 전쟁 경제가 증가된 압박 아래 있는 반면 우크라이나는 대규모 지원을 받고 있다)</p><p>• "The EU will provide Ukraine what it needs to hold its ground while we inhibit those enabling Russia's illegal aggression."<br>(EU는 우크라이나가 입장을 유지하는 데 필요한 것을 제공하는 동시에 러시아의 불법적 침략을 가능하게 하는 세력을 억제할 것이다)</p><h3>Technical Insights</h3><p>• **해운 부문 규제 확대**: 632척 규모의 암묵적 선단 지정을 통해 국제해사기구(IMO) 규정을 우회하는 러시아의 유류 운송 네트워크를 직접 타격하는 제재 전략 시행 중</p><p>• **제3국 우회 차단**: 제3국에서 운영되는 그림자 선단 운영체까지 제재 범위를 확대하여 국제 해운 커뮤니티의 협력 없이 제재 회피가 불가능한 구조 구축</p><p>• **보험·금융 연쇄 제재**: 해운 보험사 지정으로 단순 함정 제재를 넘어 해운금융 생태계 전체를 압박하는 시스템적 규제 추진으로 그림자 선단의 운영 비용 급증 유도</p><p>• **IMO 플래그 스테이트 협력**: EU의 기국(flag state) 대상 외교전을 통해 국제 해운 규제 체계와 경제 제재의 연계 강화, 해운 투명성 기준 국제화 추진</p></div>`,
      tags: ["sanctions","Russia","shadow fleet","energy","EU policy"],
      link: "https://www.offshore-energy.biz/eus-20th-sanctions-batch-tightens-grip-on-russias-oil-gas-lng-and-shadow-fleet-spheres-with-632-vessels-blacklisted/",
      coords: [0,0],
      location: "European Union / Russia"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-26
addEvents({
  "2026-04-26": [
    {
      type: "news",
      title: "Saronic Technologies Collaborates with Taiwan's NCSIST on AI-Enabled ASVs for Maritime Defense",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-26",
      image: "https://images.marinelink.com/images/maritime/w800/-170119.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Saronic Technologies와 대만의 국방 연구기관 NCSIST가 자율 해상 선박(ASV) 및 AI 기반 해양 기술 협력을 위한 양해각서(MoU) 체결</p><p>• NCSIST는 대만의 국방 연구개발 핵심 기관으로서 국방 산업 기반 강화에 중추적 역할 수행</p><p>• Saronic의 Corsair를 포함한 민군 겸용 자율해상선박과 AI 기반 지휘통제(C2) 소프트웨어 개발에 중점</p><p>• 공급망 확대 및 장기적 운영 준비태세를 위한 유지보수 능력 강화 협력 추진</p><p>• 해양 안보 과제 대응을 위한 방위산업과 상용 부문 간 기술 통합 및 시스템 협력</p><h3>Key Quotes</h3><p>• "Saronic and NCSIST will identify opportunities to collaborate across a range of technologies and applications" <br>(Saronic과 NCSIST는 광범위한 기술과 응용 분야에서 협력 기회를 발굴할 것)</p><p>• "Both parties will evaluate opportunities to expand supply chains and enhance sustainment and maintenance capabilities to support long-term operational readiness"<br>(양 기관은 장기적 운영 준비태세를 지원하기 위한 공급망 확대 및 유지보수 능력 강화 기회를 평가할 예정)</p><h3>Technical Insights</h3><p>• **AI 기반 C2 시스템 개발**: 자율해상선박의 지휘통제 소프트웨어 고도화는 해양 방위 영역에서 의사결정 자동화 및 네트워크 중심 전투(NCW) 능력 강화를 의미</p><p>• **민군 겸용 기술 활용**: Corsair 등 다목적 ASV 플랫폼의 방위 및 상용 부문 이중 활용은 개발 비용 절감과 기술 보급 확대를 통한 산업 경쟁력 제고</p><p>• **해양 안보 규범 준수**: ASV의 확대 배치 시 COLREG 및 IMO 규정 준수, 특히 대만 해협 등 민감한 해역에서의 자동화 시스템 운영 절차 수립 필요</p><p>• **공급망 다층화 전략**: 반도체/부품 수급 리스크 대응 및 장기 유지보수 인프라 구축으로 지정학적 불확실성 속 운영 독립성 확보</p></div>`,
      tags: ["Autonomous Surface Vessels","AI Maritime Technology","Defense Collaboration","Taiwan"],
      link: "https://www.marinelink.com/news/saronic-collaborate-korea-asvs-538471",
      coords: [120.9605,23.6978],
      location: "Taiwan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-26
addEvents({
  "2026-04-26": [
    {
      type: "news",
      title: "Singapore MPA Renews Partnership with Shanghai Maritime University for Talent Development",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-26",
      image: "https://images.marinelink.com/images/maritime/w800/source-singapore-170122.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 싱가포르 해사항만청(MPA)과 상하이해운대학교(SMU)가 해양인재 개발 및 지식교류 강화를 위한 양해각서(MOU)를 체결했음<br>• 2020년부터 시작된 협력관계를 2026년 4월에 갱신하여 학생 및 해양전문가 교류 지속<br>• 2023년 이후 해양지도자 양성프로그램과 고위급 포럼 전문가 발표를 통해 협력 강화<br>• 해양안전보안, 해양에너지, 항만관리, 항법기술, 해양환경관리 등 다양한 분야의 공동훈련 및 학습 교류 확대<br>• 아시아 태평양 지역 해운산업 인력 양성 및 정책 수립에 기여하는 전략적 협력체계 구축</p><h3>Key Quotes</h3><p>• "MPA and SMU have enhanced collaboration through mutual participation in maritime leadership programs" (MPA와 SMU가 해양지도자 양성프로그램에 상호 참여함으로써 협력을 강화했다)<br>• "This includes study visits, learning journeys, and joint training programs across areas such as maritime safety and security, maritime energy, port management, navigational technologies, and marine environmental management" (해양안전보안, 해양에너지, 항만관리, 항법기술, 해양환경관리 등 다양한 분야에서 방문학습, 학습여행, 공동훈련프로그램 포함)</p><h3>Technical Insights</h3><p>• 싱가포르-중국 간 해양인재 교류 확대는 ASEAN-중국 해역 항법기술 및 해양안전 표준화에 기여할 것으로 예상됨<br>• 해양에너지 및 항법기술 분야의 공동훈련은 자율선박 기술 개발 및 IMO 규제 대응 역량 강화에 필수적인 인프라 구축<br>• 항만관리와 해양환경관리 분야의 지식교류는 지역 내 스마트포트 기술 확산 및 해양오염 예방 체계 고도화를 촉진하는 정책 기반 조성</p></div>`,
      tags: ["Maritime Education","Singapore MPA","Shanghai Maritime University","Regional Cooperation"],
      link: "https://www.marinelink.com/news/singapore-mpa-renews-partnership-shanghai-538474",
      coords: [103.8198,1.3521],
      location: "Singapore"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-27
addEvents({
  "2026-04-27": [
    {
      type: "news",
      title: "HII Awarded Pentagon Contract for Autonomous Submarine Torpedo Tube Launch and Recovery System",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-27",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/REMUS_620_Swimout_d28a94e3b2.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• HII(Huntington Ingalls Industries)가 미국 국방혁신부(DIU)로부터 잠수함용 어뢰관 발사/회수(TTLR) 시스템 개발 계약을 수주하였으며, 이는 REMUS 무인잠수정(UUV)의 자율 배치 및 회수를 가능하게 함</p><p>• 25년간 자율 무인 해양 플랫폼 개발을 주도해온 HII는 유인-무인 협력 작전에서 업계 최고 수준의 전문성 보유</p><p>• 2025년 6월 USS Delaware(SSN 791)에서 REMUS 600 UUV의 첫 전방 배치 어뢰관 발사/회수 시연 성공 - 다이버 지원 없이 완전 자율 작동 3회 수행</p><p>• REMUS 620 세대는 수중 어뢰관 내 자율 항법, 통신, 자동 도킹 및 안전 분리 절차 검증으로 운영 기능 확보</p><p>• HII는 750대 이상의 REMUS 차량을 30개국 이상에 납품했으며, 90% 이상이 2년 이상 운영 중으로 신뢰성과 내구성 입증</p><h3>Key Quotes</h3><p>• "There is no company with more expertise in both the manned and unmanned sides of teamed operations. We look forward to continuing our strong partnership with the U.S. Navy to deliver the innovative solutions our forces urgently need in the subsea domain." (유인-무인 협력 작전 양쪽에서 전문성을 갖춘 회사는 없으며, 해군과의 강한 파트너십을 통해 수중 영역에서 필요한 혁신 솔루션 제공을 기대함)</p><p>• "This contract award reflects HII's 25-year leadership in advancing autonomous unmanned maritime platforms and integrating them into submarine operations." (본 계약은 자율 무인 해양 플랫폼 개발과 잠수함 작전 통합에서 25년간의 리더십을 반영함)</p><h3>Technical Insights</h3><p>• **자율 잠수함 협력 작전의 진화**: TTLR 시스템을 통한 완전 자율 발사/회수 기술은 기존 다이버 지원 방식을 제거하고 작전 효율성 및 안전성을 대폭 강화하는 혁신적 발전</p><p>• **MUM-T(Manned-Unmanned Teaming) 기술의 성숙화**: 유인 잠수함과 무인 UUV 간의 통합 작전 능력 검증으로 해양 감시/정찰(ISR) 및 광범위 해양 임무 효율성 향상 가능성 입증</p><p>• **산업 신뢰성 기준 수립**: 750대 이상의 REMUS 운영 경험과 90% 이상의 장기 가동률은 자율 수중 시스템의 안정성과 신뢰성에 대한 업계 기준 제시</p><p>• **국방 자율화 생태계 확장**: 미국 해군의 선제적 투자와 HII-WHOI 협력은 동맹국 해군으로의 기술 전파 및 NATO 차원의 해양 자율 능력 강화 기반 마련</p></div>`,
      tags: ["Autonomous Systems","UUV","Submarine Operations","Manned-Unmanned Teaming","U.S. Navy"],
      link: "https://www.navalnews.com/naval-news/2026/04/hii-builds-on-submarine-mum-t-success-with-new-pentagon-deal/",
      coords: [-76.3,37.5],
      location: "United States (Naval Operations)"
    },
    {
      type: "news",
      title: "U.S. Navy Conducts At-Sea USV Refueling Drill Ahead of Carrier Strike Group Deployment",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-04-27",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/Naval-News-MUSV-Refuel.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 해군은 무인수상함(USV) 중형 해호크(Seahawk MUSV)의 해상 급유 능력을 시연하였으며, USNS 과달루페 유조함(T-AO 200)이 비행기식 보급(Astern Replenishment-at-Sea) 작업을 수행함</p><p>• 이 시험은 올해 후반 USS 시어도어 루즈벨트(CVN-71) 항모전단과 함께 배치될 예정인 해상 무인함정들의 작전 능력 입증을 목표로 함</p><p>• 해군은 2030년까지 인도태평양 지역에 30대의 중형 USV와 수천 대의 소형 USV를 배치할 계획이며, 무인함정의 대규모 통합 배치 전략 추진 중</p><p>• Surface Development Group One 사령관 Garrett Miller 대령은 USV가 항모전단의 속도를 따라잡아야 하는 "작전 자산"으로의 전환이 필수적임을 강조</p><p>• 무인함정은 분산형 해양 감시 센서 플랫폼으로서 항모전단의 확장된 해양 영역 인식(Maritime Domain Awareness) 능력 제공</p><p>• 해군은 컨테이너 탑재 페이로드 통합과 연안전투함(LCS)의 화력 강화를 통해 미 해군의 대 중국 전력 균형 유지 추진</p><h3>Key Quotes</h3><p>• "It's refuel at-sea capable. We're moving in the right direction. We had to move it from an experimentation piece to operational, so it has to keep up with a [carrier] strike group. It can't be an anchor." (해상 급유 능력을 보유하고 있으며, 실험 단계에서 작전 운용 단계로 전환되어야 하고, 항모전단의 속도를 따라가야 하며 정박 자산이 될 수 없다는 점을 강조)</p><p>• "The fleet anticipates a deployment of up to 30 MUSVs and thousands of smaller USVs throughout U.S. Indo-Pacific Command's area of responsibility by 2030." (2030년까지 인도태평양 사령부 관할 지역에 30대의 중형 USV와 수천 대의 소형 USV 배치 계획)</p><h3>Technical Insights</h3><p>• **해상 급유 자동화**: USV의 비행기식 보급(Astern Replenishment-at-Sea) 자동화 기술은 유인함과 무인함정 간 통합 작전의 핵심 요소이며, 항모전단의 지속적 작전 능력 제고를 위한 필수 기술</p><p>• **해양 감시 네트워크**: 분산형 센서 플랫폼으로서의 MUSV 배치는 기존 구축함의 감시 역량을 보강하고, 대규모 다층 해양 도메인 인식 체계 구축의 선도 사례로 평가됨</p><p>• **산업 조달 모델 전환**: 이전의 모듈식 공격 수상함(MASC) 프로그램 폐지 후 "마켓플레이스" 모델 도입으로 USV의 신속한 통합과 업그레이드 가능성 향상</p><p>• **해군 전력 구조 변화**: 소수의 고가 유인함 중심에서 다수의 저비용 무인함정을 포함한 분산형 전력 구조로의 전략적 전환, 특히 PLA 해군의 증강된 능력 대응</p></div>`,
      tags: ["Unmanned Surface Vessel","At-Sea Replenishment","Theodore Roosevelt CSG","Maritime Technology","U.S. Navy Operations"],
      link: "https://www.navalnews.com/naval-news/2026/04/u-s-navy-drills-in-at-sea-usv-fueling-ahead-of-csg-deployment/",
      coords: [-118.2437,34.0522],
      location: "Southern California"
    }
  ]
});

// Auto-collected: 2026-04-28
addEvents({
  "2026-04-28": [
    {
      type: "event",
      title: "Oshkosh Defense Showcases Ship-Killing Drone Truck at Modern Day Marine Expo 2026",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-04-27",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Oshkosh Defense가 현대 해양 박람회(Modern Day Marine Expo)에서 반함 미사일로 무장한 자율 지상차량(AGV)을 전시할 예정<br>• 미 해병대의 세대적 교리 전환을 대표하는 플랫폼으로, 해양 작전 개념의 급진적 변화를 의미<br>• 2026년 4월 28-30일 개최되는 박람회에서 2개의 주요 플랫폼 선보임<br>• 자율 드론 트럭 기술이 해상 대함 능력으로 확대되는 추세를 반영<br>• 방위산업의 무인화 및 자동화 기술이 해양 영역까지 확산되고 있음을 시사</p><h3>Key Quotes</h3><br>• "an autonomous ground vehicle armed with anti-ship missiles that represents one of the Marine Corps' most consequential doctrinal shifts in a generation" (미 해병대의 가장 중대한 세대적 교리 전환을 대표하는 반함 미사일로 무장한 자율 지상차량)</p><h3>Technical Insights</h3><br>• 자율 지상차량(AGV)의 무장화 추세: 해상 플랫폼으로의 기술 확장이 해양 방위 패러다임 변화를 주도<br>• 해병대 작전 개념 진화: 유인 전력에서 무인·자율 시스템으로의 조직적 전환이 해양 영역 대함 능력 강화로 이어짐<br>• 다중 도메인 작전(Multi-Domain Operations) 구현: 지상 자율 시스템의 해양 통합이 해공 작전 통합도를 증대시키는 기술적 기반 제공<br>• 해양 영역 분쟁 대비: 자율 드론 기반 분산 대함 능력이 전통적 함정 중심 해전 개념을 재편하는 중요 징후</p></div>`,
      tags: ["Marine Expo","Autonomous Vehicles","Anti-Ship Missiles","Marine Corps","Defense Technology"],
      link: "https://defence-blog.com/oshkosh-shows-expeditionary-power-with-ship-killing-drone-truck-at-marine-expo/",
      coords: [0,0],
      location: "Modern Day Marine Exhibition (Location TBD)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-28
addEvents({
  "2026-04-28": [
    {
      type: "accident",
      title: "Ukrainian Drone Strike Causes Major Fire at Russia's Tuapse Refinery",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-29",
      image: "https://images.marinelink.com/images/maritime/w800/source-social-170190.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **우크라이나의 드론 공격으로 러시아 투압세 정유소에서 대규모 화재 발생** - 2주 이내 3번째 공격으로, 우크라이나 군부가 러시아의 석유 산업 중단 목표를 확인</p><p>• **해양 환경 오염 위험** - 검은 비와 유류 유출이 흑해로 흘러내려 가는 상황, 정부는 유류 유출 방지를 위해 보옴(boom) 설치</p><p>• **인명 피해 및 대피** - 최소 3명 사망, 정유소 근처 주민 300여 명이 학교로 대피 명령 수행</p><p>• **정유소 운영 중단** - 4월 16일부터 항만 드론 피해로 생산 중단 상태 지속, 원유 수출 불가능</p><p>• **지정학적 에너지 전쟁** - 우크라이나의 러시아 에너지 기반시설 공격으로 전 지구적 석유 수급 악화 우려</p><p>• **크렘린궁의 주장과 우크라이나의 반박** - 러시아는 글로벌 석유 부족 악화 주장, 우크라이나는 러시아 수출량이 국제 유가에 미치는 영향 미미하다고 반박</p><h3>Key Quotes</h3><p>• "Drone strikes against civilian infrastructure are becoming more frequent. The latest example is the strikes against energy facilities in Tuapse, which could potentially cause serious environmental consequences." (민간 인프라에 대한 드론 공격이 점점 더 빈번해지고 있으며, 투압세 에너지 시설 공격은 심각한 환경 피해를 초래할 수 있다는 러시아의 입장)</p><p>• "The flow of oil products into the Black Sea had been stopped and booms would ensure the spills did not spread." (흑해로의 유류 유출을 중단했고, 보옴을 통해 유류 확산을 방지할 계획이라는 긴급 상황 장관의 발언)</p><p>• "It seems there are no serious dangers, and people are managing to deal with the challenges they face on the ground." (심각한 위협은 없으며 지역 주민들이 상황에 대처하고 있다는 푸틴의 발언)</p><h3>Technical Insights</h3><p>• **해양 오염 대응 프로토콜 부재** - IMO의 유류 오염 대응 기준이 분쟁 지역에서 제대로 작동하지 않음을 보여주며, 국제 해사 환경 규제의 공백 노출</p><p>• **흑해 해역의 생태계 위험** - 반복적인 정유소 공격으로 인한 누적 오염이 흑해의 생물 다양성 및 어업 자원에 미치는 장기적 영향 심각</p><p>• **에너지 기반시설 보호의 국방적 차원** - 전쟁 상황에서 민간 해양·에너지 인프라가 군사 표적으로 전환되는 현상으로, 향후 자율선박·원격 운영 시스템의 사이버 보안 필요성 증대</p><p>• **국제 해운·석유 무역의 지정학적 리스크** - 에너지 공급 중단이 글로벌 해운 산업과 석유 시장에 미치는 파급 효과 커지고 있으며, 해양 운송 경로 다변화 필요</p></div>`,
      tags: ["Oil Spill","Refinery Fire","Black Sea","Ukraine-Russia Conflict","Environmental Incident"],
      link: "https://www.marinelink.com/news/ukraine-strikes-russias-tuapse-refinery-538565",
      coords: [39.1,44.4],
      location: "Tuapse, Black Sea, Russia"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-29
addEvents({
  "2026-04-29": [
    {
      type: "news",
      title: "U.S. Intercepts Major Shark Fin Smuggling Ring at Multiple Ports",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-04-29",
      image: "https://maritime-executive.com/media/images/article/USFWS-shark-fins-26-boxes-Oct-2025-USFWS.a2c15e.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 어류야생동물청(USFWS)이 알래스카 앵커리지, 루이빌, 신시내티 등 미국 항구에서 불법 상어지느러미 밀수 네트워크를 적발</p><p>• 압수된 지느러미는 주로 참다랑어상어와 실키상어(silky shark)로, 둘 다 국제적으로 보호되는 CITES 부록 II 종</p><p>• 멕시코에서 홍콩으로 향하는 화물이 자동차 부품으로 위장되어 적발되었으며, 국제 거래에는 수출 허가가 필수</p><p>• 홍콩은 상어지느러미 밀거래 및 불법 해산물 소비의 주요 거점으로 기능</p><p>• 적발된 모든 지느러미는 압수되었으며, 정보는 해외 파트너 기관과 공유되어 현지법에 따른 추가 단속 추진</p><h3>Key Quotes</h3><p>• "Both are listed on CITES Appendix II, which protects species that are 'not necessarily now threatened with extinction but that may become so unless trade is closely controlled.'" (CITES 부록 II에 등재된 종으로, 현재는 멸종 위기가 아니지만 거래를 엄격히 통제하지 않으면 멸종 위기에 처할 수 있는 종을 보호함)</p><p>• "All were en route from Mexico to Hong Kong via United States ports; Hong Kong is a hub for the trafficking and consumption of shark fins and other illicit seafood products." (홍콩이 상어지느러미 및 기타 불법 해산물의 밀거래 및 소비 중심지 역할)</p><h3>Technical Insights</h3><p>• 해양 운송망의 불법 야생동물 거래 감시 강화 필요: 위장 신고를 통한 밀수 적발은 항구 검사 체계의 고도화 필요성을 시사</p><p>• CITES 국제 협약 이행 강화: 수출 허가 없는 보호종 국제 거래는 위반 행위로, 항구국 통제 의무 준수 중요</p><p>• 산업 투명성 제고: 해상화물의 정확한 신고(bill of lading)는 해양 보안 및 환경 보호의 기본 원칙으로 강조됨</p></div>`,
      tags: ["shark fin smuggling","illegal wildlife trade","port security","CITES enforcement"],
      link: "https://maritime-executive.com/article/u-s-makes-massive-bust-targeting-shark-fin-smuggling-ring",
      coords: [-95.7129,37.0902],
      location: "United States (Anchorage, Louisville, Cincinnati)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2024-05-22
addEvents({
  "2024-05-22": [
    {
      type: "accident",
      title: "Double man overboard from fishing vessel Weston Bay (GY123) with loss of 1 life",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-04-30",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사고 개요**: 2024년 5월 22일 영국 스펀 헤드 남동쪽 약 12해리 지점에서 포팅 어선 Weston Bay(GY123)의 갑판원 2명이 어구 투하 중 갑판에서 떨어짐</p><p>• **인명 피해**: 1명은 선원에 의해 신속하게 구조되어 무상의 상태였으나, 다른 1명은 다른 선박에 의해 구조되었으나 호흡하지 않았으며 소생시킬 수 없었음</p><p>• **주요 원인**: 어구 작업 중 선원들이 어구와 분리되지 않아 얽힘, 손상 및 부상의 위험에 노출되었으며, 갑판 낙수 후 상황에 대한 위험성이 충분히 평가 및 완화되지 않음</p><p>• **안전 조치 부족**: 선원들이 응급 낙수 훈련을 실시하지 않았으며, 선박의 응급 낙수 구조 장비가 의식이 없는 사람의 수중 구조에 효과적이지 않았음</p><p>• **권장사항**: Seafish와 Fastline Shellfish Limited에 대한 권장사항 제시 및 어업 산업을 위한 안전 전단지 배포</p><h3>Key Quotes</h3><p>• "there was no separation from the pots for the crew working the stack when deploying the gear, which put them at risk of entanglement, harm and injury." (어구 투하 시 작업 중인 선원들이 어구로부터 분리되지 않아 얽힘, 손상 및 부상의 위험에 노출됨)</p><p>• "the crew were unprepared for the emergency as they had not practised emergency manoverboard drills." (선원들이 응급 낙수 훈련을 실시하지 않아 긴급 상황에 대비하지 못함)</p><p>• "the emergency man overboard recovery equipment on board was not effective for the recovery of an unconscious person from the water." (선박의 응급 낙수 구조 장비가 의식이 없는 사람의 수중 구조에 효과적이지 않았음)</p><h3>Technical Insights</h3><p>• **어선 안전 절차의 중요성**: 포팅(potting) 작업은 어구와 근접한 작업으로 인해 갑판 낙수 위험이 높으며, 이에 대한 구조화된 안전 절차 및 작업 분리(separation) 메커니즘이 필수적</p><p>• **응급 대응 준비 미흡**: 낙수 발생 시 의식이 없는 인원을 효과적으로 구조할 수 있는 장비와 정기적인 훈련 부재가 인명 손실로 이어짐. 소형 어선에서도 현대적 구조 장비 도입 및 훈련 의무화 필요</p><p>• **산업 규제 강화 방향**: MAIB 권장사항을 통해 Seafish 등 업계 단체가 주도적으로 안전 기준 상향 및 의무적 훈련 프로그램 마련해야 하며, 영어선의 안전 기준 준수 감시 강화 필요</p></div>`,
      tags: ["man overboard","fishing vessel","fatality","potting vessel","safety procedures"],
      link: "https://www.gov.uk/maib-reports/double-man-overboard-from-the-fishing-vessel-weston-bay-gy123-with-the-loss-of-1-life",
      coords: [-2,53.5],
      location: "12 nautical miles south-east of Spurn Head, England"
    }
  ]
});

// Auto-collected: 2026-04-30
addEvents({
  "2026-04-30": [
    {
      type: "news",
      title: "Online Oceans Raises $5.4M for Autonomous Maritime Defense Fleet Systems",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-04-30",
      image: "https://images.marinelink.com/images/maritime/w800/online-oceans-170241.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 온라인 오션스사, 자율운항 수상함정 및 함대 관리 소프트웨어 개발 목적으로 미화 540만 달러(영화 400만 파운드) 시리즈 펀딩 성공 조달</p><p>• 주력 제품은 태양광 추진 콤팩트 자율함정 'Scout'와 클라우드 기반 지휘통제 플랫폼 'Tether'로 구성되어 실시간 임무 관리 및 자산 모니터링 제공</p><p>• 기존 유인함정의 높은 운영비용 및 고가 자율시스템의 배치 제약을 극복하기 위해 저비용·장시간 내구성·지속적 연결성 기반의 함대규모 배치 모델 개발</p><p>• 2025년 초 설립된 신생업체가 1년 내 생산 단계로 진행하였으며 이미 방위사업·해양 도메인 인식·해양데이터 분야 초기 고객 확보 및 2026년 4월 상용배송 예정</p><p>• 펀딩은 제조 확장, 배치 지원, 국방·상업 시장 수요 대응을 위한 역량 강화에 사용될 예정이며 유럽 중심에서 글로벌 지속적 해양 인프라 리더십 목표</p><h3>Key Quotes</h3><p>• "Persistent coverage remains prohibitively expensive with existing systems" (기존 시스템으로는 지속적 해역 감시가 과도하게 비싸다)</p><p>• "Low unit cost, long endurance and continuous connectivity, combined in a platform built for fleet-scale deployment" (저비용 단위, 장시간 내구성, 지속적 연결성을 함대규모 배치에 최적화된 플랫폼으로 통합)</p><h3>Technical Insights</h3><p>• 자율함정의 태양광 추진 및 장시간 운용 설계는 전통적 크루즈형 감시함정 대비 운영비 대폭 절감 가능하며, 밀집 함대 배치로 전략적 수역의 실시간 감시 인프라 구축 실현</p><p>• 클라우드 기반 통합 지휘통제 플랫폼(Tether)은 다수 자율함정의 협력 운용과 실시간 데이터 수집·분석을 가능하게 하여 해양도메인 인식(MDA) 및 해저인프라 보안 강화</p><p>• 해협, 전략적 해로, 해저 케이블/파이프라인 보호 등 국가 핵심 이익 관련 지속적 감시 필요 증가로 자율함정 함대 시스템의 국방·상업 양 부문 시장 확대 전망</p></div>`,
      tags: ["autonomous surface vessels","maritime security","funding","defense technology","fleet management software"],
      link: "https://www.marinelink.com/news/online-oceans-raises-m-maritime-defense-538656",
      coords: [0,0],
      location: "UK (Global)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-30
addEvents({
  "2026-04-30": [
    {
      type: "news",
      title: "Maersk Tankers installs second set of Spain-made suction sails for emissions reduction",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-04-30",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Second-Maersk-Tankers-vessel-fitted-with-Spain-made-suction-sails.jpg?image-crop-positioner-ts=1777545342",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 스페인 기업 bound4blue의 자동화된 흡입식 돛(eSAIL) 기술이 마에스크 태니커스 소속 두 번째 탱커 마에스크 타이티호에 설치됨<br>• 중국 장인 청시 조선소에서 24미터 크기의 4개 흡입식 돛 설치 완료, 1월 마에스크 트리에스테호에 이어 두 번째 설치<br>• 5척의 마에스크 MR급 탱커에 총 20개 유닛 설치 예정으로 bound4blue 역사상 최대 규모 계약<br>• 엔진 부하 감소를 통해 이중 자릿수 연료 절감, 이산화탄소 배출 감소, CII 등급 개선 달성<br>• 종래의 경직된 돛 대비 7배 이상의 양력 생성, 규제 준수 및 환경 개선에 동시에 기여</p><h3>Key Quotes</h3><br>• "The agreement with Maersk Tankers reflects the wider scaling up of wind power adoption across the industry. Wind, and particularly suction sail technology, delivers massive advantage in both environmental and commercial contexts" (마에스크와의 계약은 산업 전반에서 풍력 채택 확대를 반영하며, 풍력, 특히 흡입식 돛 기술은 환경 및 상업적 측면 모두에서 거대한 이점을 제공한다)<br>• "It marks an opportunity for us, of course, but more than that it demonstrates a chance for forward thinking owners to simplify an increasingly complex regulatory and operating environment with proven technology and a free – and freely available – power source" (미리 생각하는 소유사들이 증명된 기술과 무료로 이용 가능한 풍력이라는 에너지원으로 복잡한 규제 및 운영 환경을 단순화할 수 있는 기회를 제공한다)</p><h3>Technical Insights</h3><br>• 흡입식 돛(suction sail) 기술은 공기역학적으로 최적화된 표면을 통해 공기를 흡입하여 양력을 생성하는 방식으로, 재래식 경직된 돛 대비 7배 이상의 양력 성능을 달성함으로써 기술적 우월성 입증<br>• IMO CII(탄소강도지표) 규제 강화 시대에 마에스크와 같은 주요 선주들의 대규모 채택은 풍력 보조 추진 기술이 규제 준수의 실질적 솔루션으로 인정되었음을 의미<br>• 플러그 앤 플레이(Plug and Play) 설치 방식으로 기존 선박에의 개조 용이성을 확보하여, 해운 산업의 기술 도입 장벽을 낮추고 탈탄소화 가속화에 기여할 것으로 예상</p></div>`,
      tags: ["Wind-assisted propulsion","Suction sails","Emissions reduction","Maersk Tankers","bound4blue","Decarbonization"],
      link: "https://www.offshore-energy.biz/second-maersk-tankers-vessel-fitted-with-spain-made-suction-sails/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-01
addEvents({
  "2026-05-01": [
    {
      type: "news",
      title: "White House Claims Iran Hostilities 'Terminated' as War Powers Deadline Arrives",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-01",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/USCENTCOM-blockade.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 트럼프 행정부가 이란과의 분쟁이 "종료되었다"고 주장하며 1973년 전쟁권한법의 60일 기한을 회피하려는 상황<br>• USS Rafael Peralta(DDG 115) 구축함을 포함한 미군 함정들이 이란 석유 수출 봉쇄 작전을 지속 중<br>• 2월 28일 이스라엘-미국 연합 공습으로 시작된 분쟁이 수천 명 사망, 수십억 달러 피해 초래<br>• 민주당 의원들은 지속적인 해상 봉쇄 작전이 전투 행위의 증거라며 행정부 주장에 반발<br>• 11월 선거를 앞두고 전쟁이 미국 내 물가 상승 및 낮은 지지율 초래</p><h3>Key Quotes</h3><p>• "For War Powers Resolution purposes, the hostilities that began on Saturday, February 28, have terminated" (전쟁권한법상 2월 28일부터 시작된 전투 행위가 종료되었다는 행정부의 주장)<br>• "After sixty days of conflict, President Trump still does not have a strategy or way out for this poorly planned war" (60일간의 분쟁 이후에도 트럼프 대통령은 이 부실하게 계획된 전쟁에서 벗어날 전략이 없다 - 민주당 상원의원 평가)</p><h3>Technical Insights</h3><p>• **해상 봉쇄 작전의 국제법적 성격**: 이란 석유 수출 차단을 위한 구축함 배치는 단순한 "평화유지"가 아닌 지속적인 적대 행위로 평가되며, 해상 분쟁에서 무장 해군 배치의 법적 의미가 중요<br>• **상선 안전 영향**: M/T Stream 등 민간 유조선이 이란 항구 접근 차단으로 인한 글로벌 에너지 수송 혼란과 해상 운송업계의 보험료 및 운항 비용 증가 초래<br>• **국제 해상 통상 규제**: 단일국가의 일방적 해상 봉쇄는 해양법협약(UNCLOS)과 국제 해상 통상 원칙에 영향을 미치며, 향후 자율운항선박의 이란 해역 항해 계획에도 지정학적 위험요소로 작용할 가능성</p></div>`,
      tags: ["Iran War","US Navy Blockade","War Powers Resolution","Geopolitical Conflict"],
      link: "https://gcaptain.com/white-house-says-iran-hostilities-terminated-as-war-powers-deadline-arrives/",
      coords: [51.389,35.6892],
      location: "Iran / Persian Gulf"
    },
    {
      type: "news",
      title: "Trump Maintains Naval Blockade on Iran; US Proposes Maritime Freedom Construct for Strait of Hormuz",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-01",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/Strait-of-Hormuz-patrol.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 트럼프 대통령이 이란에 대한 해상 봉쇄 유지를 공언하고, 추가 군사 옵션에 대해 군부 지휘관들로부터 브리핑을 받음. 이는 양국 간 휴전의 불안정성을 드러냄</p><p>• 미국이 호르무즈 해협 보안을 위한 "Maritime Freedom Construct"라는 다국적 해군력 구성을 제안 중이며, 뉴질랜드 등 동맹국들의 참여 의사를 타진 중</p><p>• 이란 의회 의장 갈리바프는 국경 규모가 크다며 봉쇄 효과에 의문을 제기했고, 신임 최고지도자 모즈타바 하메네이는 핵·미사일 기술 포기 거부 및 호르무즈 해협 통제권 유지를 선언</p><p>• 봉쇄로 인한 이란 경제 악화 신호 포착: 통화가 사상 최저 수준으로 약세, 유가는 배럴당 $112 근처로 주간 6% 이상 상승</p><p>• 미국은 호르무즈 해협 인근에 AH-64 아파치 헬기 등을 배치하여 항행의 자유 지원 및 해상 교통 감시 지속 중</p><p>• 전쟁권법에 따라 60일 임계값이 가까워지면서 민주당 의원들이 추가 군사 행동에 대한 의회 승인을 요구</p><h3>Key Quotes</h3><p>• "Good luck blockading a country with those borders" (이란의 광대한 국경 규모를 고려할 때 봉쇄가 효과적이지 않을 것이라는 이란 의회 의장의 비판)</p><p>• "The blockade of Iranian ports is depriving the Islamic Republic of much-needed oil revenue, claiming the pressure would force Tehran back to the negotiating table" (미국이 항구 봉쇄가 이란의 석유 수익을 박탈하여 협상 복귀를 강제할 것이라고 주장)</p><h3>Technical Insights</h3><p>• **해상 교통 및 에너지 안보 영향**: 호르무즈 해협은 전 세계 석유 운송의 약 21% 통과 지점으로, 봉쇄는 글로벌 유가 변동 및 해운 산업에 직접적 영향을 미치는 지정학적 리스크 요소</p><p>• **다국적 해군 구성의 COLREG 적용**: "Maritime Freedom Construct"는 해상충돌방지규칙(COLREG) 및 국제해사법 준수 필요성이 높아지며, 다국적군 간 해상통신 및 협조 체계 표준화 요구</p><p>• **상업 해운의 운영 리스크**: 이란-미국 긴장 고조로 호르무즈 해협 통과 선박들의 항로 변경, 보험료 상승, 운항 지연 등 해운 업계 전반적 비용 증가 우려</p><p>• **자율운항선박(MASS) 도입의 필요성**: 지정학적 분쟁 지역에서의 인명 손상 최소화 및 운영 효율성 제고를 위해 원격 조종 또는 자율운항 선박의 전략적 도입 검토 필요성 대두</p></div>`,
      tags: ["Iran","Naval Blockade","Strait of Hormuz","Geopolitics","Maritime Security","Oil Markets"],
      link: "https://gcaptain.com/trump-vows-to-maintain-pressure-on-iran-through-naval-blockade/",
      coords: [56.2431,26.1367],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2025-10-08
addEvents({
  "2025-10-08": [
    {
      type: "accident",
      title: "Odfjell Drilling cited for serious safety breaches following offshore rig lifting incident",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-01",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/02/Deepsea-Nordkapp-rig-Source-Odfjell-Drilling-1024x526-1.jpg?image-crop-positioner-ts=1738837754",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **사고 개요**: 2025년 10월 8일 노르웨이 대륙붕 심해 유전 시추 작업 중 Deepsea Nordkapp 반잠수식 시추 선대에서 크레인 리프팅 작업 중 2.67톤의 로깅 툴이 통제 불능 상태로 회전하여 슬링거(갑판작업자)의 가슴에 충돌</p><p>• **피해 상황**: 피해자는 팔뼈 골절, 갈비뼈 다중 골절, 내부 손상을 입었으며 해상구조(SAR) 서비스에 의해 긴급 해안으로 이송되어 의료 처치 받음</p><p>• **규제 위반 적발**: 노르웨이 해양산업청(Havtil)의 조사 결과 리프팅 작업 계획 및 실행, 작업자 역량 및 교육, 안전 문화 등 심각한 규제 위반 적발</p><p>• **근본 원인**: 리프팅 작업 시 하중이 완전히 통제되지 않았고, 부상자가 하중의 경로 내 및 직접 아래에 위치한 불안전한 작업 절차와 위험 관리 부실</p><p>• **행정 조치**: 규제 기관이 Odfjell Drilling에 리프팅 작업 요구사항 미준수 이유 파악 및 역량·교육 요구사항 준수 방안 제시 명령 발행</p><p>• **잠재적 위험**: 미미한 상황 변화에도 사망 또는 중상으로 진행될 수 있는 고위험 사고였으며, 사고 당시 환경 오염이나 물질적 손상은 발생하지 않음</p><h3>Key Quotes</h3><p>• "The logging tool, which weighed 2.67 tonnes and was 11.81 meters long, swung uncontrollably during the lifting operation and struck the deck operator, acting as the slinger, in the chest area." <br>(2.67톤, 길이 11.81미터의 로깅 툴이 리프팅 작업 중 통제 불능 상태로 회전하여 슬링거의 가슴 부위를 직격)</p><p>• "The direct cause of the incident was found to be in the load not being fully under control during the lifting operation, while the deck operator, who was injured, was standing in the path of the load and, at times, directly beneath it."<br>(사고의 직접적 원인은 리프팅 작업 중 하중이 완전히 통제되지 않았으며, 부상자가 하중의 경로 내에 위치하고 때로는 직접 아래에 있었던 불안전한 작업 절차)</p><p>• "The underlying causes of the incident entail inventory and inventory overview, deficient expertise and experience in the offshore organization, handover, planning and execution of lifting operation, work permits, follow-up of own organization, and safety culture."<br>(근본 원인은 재고 관리, 해양 조직의 부족한 전문성과 경험, 정보 인수인계, 리프팅 작업 계획 및 실행, 작업 허가, 내부 조직 관리, 안전 문화 결여 등 다층적 요인)</p><h3>Technical Insights</h3><p>• **리프팅 작업 안전 관리 부실**: IMO SOLAS 및 국제 리프팅 작업 규정에서 요구하는 완전 통제(full control), 사전 위험 평가(HAZID), 작업 허가(Hot Work Permit) 등 기본 절차 이행 불충분으로 노르웨이 규제 기준 미충족</p><p>• **역량 및 교육 체계 미흡**: 크레인 운영자, 신호수, 슬링거 간 명확한 통신 프로토콜 부재 및 해양 산업 작업자의 공식 자격증(IMCA, OPITO 인증) 보유 여부 확인 체계 결여</p><p>• **안전 문화 결손**: 해양 시추 산업의 Process Safety Management(PSM)와 Behavioral Safety 중심의 선제적 위험 관리 체계 미구축으로, 규제 기관의 명령 이행을 통한 조직 개혁 필요</p><p>• **산업 영향**: 북해 해양에너지 산업의 안전 기준 강화</p></div>`,
      tags: ["lifting operation","injury","regulatory breach","offshore drilling","safety culture"],
      link: "https://www.offshore-energy.biz/probe-into-offshore-rig-incident-uncovers-serious-breaches/",
      coords: [2.5,60.5],
      location: "Norwegian Continental Shelf (Symra field)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-01
addEvents({
  "2026-05-01": [
    {
      type: "news",
      title: "Jadestone Energy receives approval for wellhead removal at Montara oil field, Australia",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-01",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/FPSO-Montara-Venture-Source-Jadestone-Energy.jpg?image-crop-positioner-ts=1777278876",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **규제 승인**: NOPSEMA(호주 해양석유안전환경관리청)가 Jadestone Energy의 환경계획(EP) 승인 (2026년 4월 22일)</p><p>• **작업 범위**: 몬타라 유전 내 3개 웰헤드(Montara-1, 2, 3) 제거 작업으로, 다윈 동쪽 690km, 수심 80m 위치</p><p>• **제거 방법**: 원격 작동 로봇(ROV)을 활용한 마모식 분사절단(AWJC), 다이아몬드 와이어톱(DWS), 기계식 절단 등 다중 방식 적용</p><p>• **운영 계획**: 각 웰헤드당 약 2일 소요, 총 14일 범위(동원/동원해제 포함), 1척의 모선으로 수행, 12개월 내 처리 완료 예정</p><p>• **환경 영향**: 웰헤드 주성분이 연강(mild steel)으로 대부분 재활용 또는 재용도 가능, 5년 유효기간 내 수행 가능</p><h3>Key Quotes</h3><p>• "The National Offshore Petroleum Safety and Environmental Management Authority (NOPSEMA) gave Jadestone the green light on April 22, 2026, to move forward with activities proposed in its submitted environment plan" (호주 해양석유 규제기관이 Jadestone의 환경계획 이행을 승인)</p><p>• "While the duration of the activity at each wellhead is expected to be approximately 2 days, an allowance of approximately 14 days has been provided, including mobilization, seabed surveys, wellhead removal, and demobilization" (동원/철수를 포함한 전체 일정은 약 14일로 예상)</p><p>• "The wellhead composition is predominantly mild steel, and it is anticipated that most of it will be recycled or repurposed" (웰헤드 자재는 대부분 재활용 가능)</p><h3>Technical Insights</h3><p>• **ROV 기술 활용**: 원격 조종 로봇을 이용한 "현황 파악" 및 "완료 확인" 조사, 해양생물 제거, 웰헤드 영역 준비 등의 세부 작업 수행으로 안전성 극대화</p><p>• **복합 절단 기술**: 마모식 분사절단, 다이아몬드 와이어톱, 기계식 절단 등 다양한 방법론 제시로 선박 및 장비 이용 가능성 확대 및 환경 리스크 최소화</p><p>• **폐기물 처리 및 환경 관리**: 웰헤드 재활용 계획 및 5년 유효기간 설정으로 순환경제 원칙 준수, 해양 환경 보호 기준 강화 추세 반영</p><p>• **산업 효율성**: "vessel of opportunity" 개념으로 다른 작업 목적의 모선 활용 가능성 제시, 해양 산업의 비용 효율성과 자원 최적화 실현</p></div>`,
      tags: ["Offshore Decommissioning","Oil Field Abandonment","Environmental Management","Subsea Operations","ROV Technology"],
      link: "https://www.offshore-energy.biz/green-light-for-wellhead-removal-ops-at-australian-oil-field/",
      coords: [133.8753,-12.4634],
      location: "Montara Field, Australia (690 km east of Darwin)"
    },
    {
      type: "news",
      title: "Mercuria Sues Baltic Exchange Over Hormuz Strait Closure Pricing Data",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-01",
      image: "https://images.marinelink.com/images/maritime/w800/copyright-timonadobestock-170279.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 스위스 에너지·상품 거래업체 머큐리아(Mercuria)가 호르무즈 해협 폐쇄로 인한 손실을 이유로 세계 최대 해운지수 공급자인 발틱거래소(Baltic Exchange)를 영국 고등법원에 제소함</p><p>• 2026년 2월 28일 시작된 미국-이스라엘과 이란의 전쟁으로 호르무즈 해협 사실상 폐쇄되어 걸프만 내 600척 이상의 선박과 2만여 명의 선원이 발이 묶인 상태</p><p>• 발틱거래소가 유조선 가격지수 TD3C(Gulf-China 항로 기반)를 계속 발표하면서 시장 실황을 반영하지 못한 극단적 변동성 발생</p><p>• TD3C를 벤치마크로 하는 선적운임선도(Freight Forward Agreements) 및 선적운임파생상품 시장 왜곡 및 혼란 초래</p><p>• 머큐리아 측은 발틱거래소가 계약 및 법정 의무 위반했으며, 예상 손실액은 현재 수억 달러 규모로 추정 중</p><p>• 발틱거래소 측은 자신들이 벤치마크 지침 및 규정 범위 내에서 행동했으며 대체 항로 제시 등 시장 공지 조치를 취했다고 반박</p><h3>Key Quotes</h3><p>• "The result has been ongoing extreme volatility in the pricing of TD3C, which no longer accurately or reliably represents the underlying market it is intended to measure" (TD3C 가격 변동성이 심화되어 측정 대상 시장을 더 이상 정확하거나 신뢰할 수 있게 반영하지 못함)</p><p>• "losses on physical freight contracts and settled freight derivative contracts benchmarked to TD3C...presently estimated to be in the hundreds of millions of U.S. dollars" (TD3C 벤치마크 물리적 선적운임 계약 및 결제된 파생상품 계약의 손실이 현재 수억 달러로 추정됨)</p><p>• "the exchange had acted within its benchmark guidelines and regulations and had advised the market on how Middle East Gulf routes would be assessed during the conflict" (발틱거래소는 벤치마크 지침 및 규정 범위 내에서 행동했으며 분쟁 중 중동 만 항로 평가 방식을 시장에 공지함)</p><h3>Technical Insights</h3><p>• **벤치마크 지수의 시장 신뢰성 문제**: 발틱거래소의 TD3C 지수가 지정학적 위기 상황을 반영하지 못하면서 파생상품 시장의 기초가 되는 가격 신호의 신뢰성 훼손 - 글로벌 해운 시장의 투명성과 정보비대칭 심화</p><p>• **해운 벤치마크 개선의 필요성**: 실시간 시장 상황 변화를 반영하는 동적 지수 방식이나 복수 시나리오 기반 대체 벤치마크 제시 메커니즘 강화 필요</p><p>• **지정학적 위기 시 해운산업 규제 공백**: IMO 및 국제 금융규제 당국과의 조율 없이 벤치마크 운영기관이 독자적으로 판단하는 상황의 법적·윤리적 문제점</p><p>• **선적운임파생상품 시장의 시스템 리스크**: 단일 벤치마크 의존도가 높은 현물 및 선도계약 결제 시스템의 취약성 노출로 다원적 가격 발견 메커니즘 확대 필요</p></div>`,
      tags: ["Baltic Exchange","Shipping Indices","TD3C Index","Strait of Hormuz","Commodity Trading","Freight Derivatives"],
      link: "https://www.marinelink.com/news/baltic-exchange-sued-hormuz-freight-538714",
      coords: [26.1207,25.3548],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-24
addEvents({
  "2026-04-24": [
    {
      type: "news",
      title: "U.S. Special Forces Successfully Test Ukrainian-Designed Drone Boats in Exercise Balikatan 2026",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-05-02",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 특수전사령부(Green Berets) 1 특전단(공수)이 2026 발리카탄 훈련 중 우크라이나 설계 무인수상함정(USV)을 원격 조종하여 표적선박 침몰 성공</p><p>• 필리핀 이트바야트 서쪽 해상에서 4월 24일 형성장약(shaped charges)을 탑재한 드론 보트 다중 운용 실시</p><p>• 무인 표면 함정의 원격 발사 및 제어 능력 실증으로 자동 해양 무기 체계 실전 적용 가능성 입증</p><p>• 우크라이나 해양 드론 기술의 국제 군사 협력 확대 및 NATO 연합군 운용 체계 통합 추세 반영</p><p>• 자율 무인 함정의 전술적 유효성 검증으로 향후 해양 특수전 교리 변화 예상</p><h3>Key Quotes</h3><p>• "remotely launched and controlled unmanned surface vessels during Exercise Balikatan 2026" (2026 발리카탄 훈련 중 무인수상함정을 원격 발사 및 제어했다)</p><p>• "drone boats they operated bear a close visual resemblance to systems associated with [Ukrainian design]" (운용된 드론 보트가 우크라이나 설계 시스템과 시각적 유사성을 보인다)</p><h3>Technical Insights</h3><p>• **자율 해양 무기 체계의 전술 운용**: 무인수상함정(USV)의 원격 제어 및 자동 항법 기술이 특수전 환경에서 실제 작전 수행 가능함을 입증하여 향후 해양 무인 전투 체계 개발 가속화 예상</p><p>• **COLREG 및 국제 해양법 이슈**: 무인 군사 무기 시스템의 운용 시 국제 해양 규칙 준수 문제와 민간 해역 운용 제약사항 발생 가능성 증대로 IMO 규제 강화 필요</p><p>• **무인 수상함정의 신뢰성 및 안전성**: 형성장약 운반 및 표적 타격 임무 수행으로 USV의 정확도, 안정성, 통신 신뢰성 검증 완료로 실전 배치 기반 마련</p><p>• **국제 군사 협력 체계 확대**: 우크라이나-미국 기술 협력 및 동맹국 훈련 참여로 자율 해양 무기의 표준화 및 상호운용성 향상에 기여</p></div>`,
      tags: ["Autonomous Surface Vessels","USV/Drone Boats","Military Exercise","Ukraine","Philippines"],
      link: "https://defence-blog.com/u-s-special-forces-sink-a-ship-with-ukrainian-designed-drone-boats/",
      coords: [121.7,19.6],
      location: "Itbayat, Philippines"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-01
addEvents({
  "2026-05-01": [
    {
      type: "news",
      title: "Jan De Nul Completes Export Cable Installation for Taiwan's Fengmiao 1 Offshore Wind Farm",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-01",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/04/Jan-De-Nul-export-cable-installation-at-Fengmiao-1-offshore-wind-farm.jpg?image-crop-positioner-ts=1777294144",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 네덜란드 해상 건설회사 Jan De Nul이 대만 타이중 인근 35km 해상에 위치한 펑미아오 1 해상풍력발전단지의 2개 수출 케이블 설치 완료<br>• 45km 및 44km 길이의 고압 해저 케이블 2개가 설치되어 해상에서 임시 보관 중이며, 해상 변전소 설치 대기<br>• 케이블 매설 작업이 다음 단계로 예정되어 있으며, Willem de Vlamingh 케이블 포설선이 운송, 굴착, 보호 작업 담당<br>• 총 495MW 규모로 베스타스 15MW 풍력터빈 33개와 변전소 1개로 구성되며, 2027년 대만 전력공사 타이중 중칭 변전소에 연계 예정<br>• Copenhagen Infrastructure Partners(CIP)가 발주사이며, Century Wind Power가 기초 구조물 공급</p><h3>Key Quotes</h3><br>• "The two high-voltage subsea cables, measuring 45 kilometers and 44 kilometers, have been installed and are currently wet stored offshore, awaiting installation of the offshore substation jacket" (45km 및 44km 길이의 2개 고압 해저 케이블이 설치되어 해상 변전소 재킷 설치 대기 중)<br>• "Once the offshore platform becomes available, the cables will be pulled in and connected" (해상 플랫폼이 준비되면 케이블을 인입하여 연결할 예정)</p><h3>Technical Insights</h3><br>• 대규모 해상풍력 프로젝트에서 해저 케이블 포설과 매설은 핵심 공정으로, 전력 수송 안정성과 환경 보호를 위해 고도의 기술과 전문 장비 필요<br>• 케이블 매설 공정은 해상 기상 조건과 기초 구조물 설치 일정과 밀접한 연관이 있으며, 프로젝트 스케줄 관리의 중요한 변수<br>• 495MW 규모의 해상풍력단지는 대만의 재생에너지 목표 달성에 중요한 역할을 수행하며, 해양 에너지 인프라 개발 촉진</p></div>`,
      tags: ["offshore wind","subsea cables","Taiwan","infrastructure","renewable energy"],
      link: "https://www.offshore-energy.biz/jan-de-nul-installs-export-cables-for-taiwans-fengmiao-1-offshore-wind-farm/",
      coords: [120.5,24.1],
      location: "Taichung, Taiwan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-03
addEvents({
  "2026-05-03": [
    {
      type: "accident",
      title: "Ukrainian Drones Hit Russia's Primorsk Port, Oil Tankers And Military Ships",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-03",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/2026-05-03T080151Z_1876341147_RC2VIEAGR7N5_RTRMADP_3_UKRAINE-CRISIS-RUSSIA-DRONES-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 우크라이나군이 5월 3일 러시아 발트해 프리모르스크 항구에 60개 이상의 드론을 투입하여 유전 터미널에 직격탄을 가하고 화재 발생<br>• 타격 대상: 유조선 1척, 러시아 카라쿠르트급 미사일함 1척, 순찰정 1척 포함 다수 선박 및 에너지 인프라<br>• 프리모르스크는 러시아 최대 석유 수출 거점으로 일일 처리량 100만 배럴 규모<br>• 젤렌스키 대통령은 "러시아의 전쟁 능력을 계속 제한할 것"이며 장거리 타격 능력 지속 개발 선언<br>• 러시아 당국은 화재가 신속히 진화되었고 유류 유출 없음을 주장, 유가 상승 가능성에 대해서만 우려 표명</p><h3>Key Quotes</h3><p>• "Each such result further limits Russia's war potential" (각각의 성과는 러시아의 전쟁 능력을 더욱 제한한다) - Zelenskiy 대통령</p><p>• "Ukraine's long-range capabilities will continue to be developed comprehensively – at sea, in the air, and on land." (우크라이나의 장거리 타격 능력은 해상, 공중, 육상에서 포괄적으로 지속 개발될 것) - Zelenskiy 대통령</p><p>• "If additional volumes of our oil are dropped from the market, prices will rise further from current levels, which are already above $120 a barrel" (추가 석유 물량이 시장에서 빠지면 현재 배럴당 120달러를 넘는 수준에서 추가 상승할 것) - Kremlin 대변인 Peskov</p><h3>Technical Insights</h3><p>• **해양 인프라 공격의 경제적 파급효과**: 프리모르스크 항구는 일일 100만 배럴 규모의 석유 수출 거점으로서 글로벌 에너지 시장에 직접 영향을 미치는 주요 거점 - 드론 공격으로 인한 석유 공급 중단은 국제 유가 상승 압력 가중</p><p>• **선박 타격 및 해상 활동 제약**: 유조선, 군함, 순찰정 등 다양한 선박 피격으로 인한 러시아 해상 수송 능력 약화 및 해상 물류 운영의 심각한 차질 야기</p><p>• **쉐도우 플릿(Shadow Fleet) 해상 공격**: 국제 제재 회피 목적의 비정규 유조선에 대한 공격 강화로 러시아의 우회 수출 경로 마저 차단되는 추세 - IMO 및 국제 해양 안보 우려 지속</p></div>`,
      tags: ["drone attack","oil terminal","Primorsk Port","military vessels","Ukraine-Russia conflict"],
      link: "https://gcaptain.com/ukrainian-drones-hit-russias-primorsk-port-oil-tankers-and-military-ships/",
      coords: [27.8,59.4],
      location: "Primorsk, Baltic Sea"
    },
    {
      type: "accident",
      title: "Three Passengers Dead on Cruise Ship After Hantavirus Outbreak in Atlantic",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-03",
      image: "https://images.marinelink.com/images/maritime/w800/bluemistfilmstudios-adobe-170281.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 아르헨티나에서 케이프베르데로 향하던 크루즈선 MV Hondius에서 한타바이러스 집단 발생으로 3명 사망, 6명 감염<br>• **피해 현황**: 사망자 3명(네덜란드 승객 2명, 영국 관광객 1명 포함), 1명 남아공 중환자실 입원, 2명 의료 대피 필요<br>• **선박 정보**: MV Hondius (네덜란드 선박, WHO가 운영사와 조율 중)<br>• **감염 경로**: 설치류(쥐) 접촉을 통한 바이러스 전파 - 배설물, 타액, 소변 접촉<br>• **대응 조치**: WHO가 국가 간 조율, 의료 대피 진행 중, 전체 승객 대상 보건위험 평가 실시</p><h3>Key Quotes</h3><p>• "WHO is facilitating coordination between member states and the ship's operators for medical evacuation of two symptomatic passengers, as well as full public health risk assessment and support to the remaining passengers on board" (WHO가 회원국과 선박 운영사 간 조율을 통해 증상 있는 승객 2명의 의료 대피와 전체 승객에 대한 보건위험 평가를 진행 중)</p><p>• "people get hantavirus from contact with rodents like rats and mice, especially when exposed to their urine, droppings, and saliva" (한타바이러스는 쥐와 같은 설치류와의 접촉, 특히 그들의 소변, 배설물, 타액 노출을 통해 전파됨 - CDC)</p><h3>Technical Insights</h3><p>• **해양 보건 안전**: 원양 크루즈선의 밀폐된 선내 환경에서 설치류 방제 체계의 중요성 강조 - 전염병 확산 위험이 극대화될 수 있음</p><p>• **국제 협력 체계**: WHO의 다국적 조율 메커니즘 작동 사례 - 공해상 선박 질병 사건 처리 시 IMO와 각국 보건당국 간 신속한 정보공유 및 의료 대피의 중요성</p><p>• **선박 위생 기준**: 국제해사기구(IMO)의 선박 위생 및 전염병 관리 규정 강화 필요 - 크루즈선 등 장거리 항해 선박에 대한 정기적 해충 방제 및 위생 검사 의무화</p></div>`,
      tags: ["hantavirus outbreak","cruise ship","MV Hondius","health emergency","casualties"],
      link: "https://www.marinelink.com/news/three-passengers-dead-cruise-ship-538722",
      coords: [-30.5,-15.5],
      location: "Atlantic Ocean (Argentina to Cape Verde route)"
    },
    {
      type: "news",
      title: "Green Berets Deploy Ship-Killing Drone in Luzon Strait Maritime Strike Exercise",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-05-03",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미군 그린베레 1 특수전단(공정)이 루손 해협에서 폭발물 탑재 무인수상함정(USV)을 이용한 해상 목표 공격 훈련 수행<br>• 바탄 섬(바탄 제도)에서 원격 조종된 무인 해양 시스템들이 선박 격침 능력 시연<br>• 필리핀-미국 군사협력 강화 배경: 대만 침략 시나리오 대비 및 필리핀의 안보 우려 해소<br>• 대만 근처 88마일 범위의 바탄 제도에서의 증강된 군사 훈련 활동<br>• 무인수상함정의 실전 운용 능력 검증 및 도미넌트 해상력 투사 전략 시연</p><h3>Key Quotes</h3><p>• "American special forces used unmanned surface vessels equipped with explosive charges against a maritime target in the Luzon Strait" (미군 특수전 부대가 루손 해협에서 폭발물 탑재 무인수상함정을 maritime target 공격에 사용함)</p><p>• "U.S. Army Green Berets with the 1st Special Forces Group (Airborne) controlled the explosive-laden drone and other unmanned maritime systems from Batan Island" (미 육군 그린베레 1 특수전단이 바탄 섬에서 폭발물 탑재 드론 및 무인 해양 시스템 원격 조종)</p><h3>Technical Insights</h3><p>• 무인수상함정(USV)의 실전 운용: 원격 조종 기술을 통한 선박 격침 능력 시연으로 차세대 해양 전투 플랫폼의 실용성 입증<br>• 국제 해양법 및 COLREG 적용 문제: 무인수상함정의 자율항해 및 무장화가 국제 해상 충돌 회피 규칙(COLREG) 및 IMO 해양 안전 규정과의 상충 가능성 제기<br>• 인도태평양 지역 전략적 균형: 무인 해양 시스템의 배치를 통한 미국의 영향력 확대와 지역 분쟁 억제 전략의 구체화<br>• 자율 및 반자율 무인체계의 확대: 전술 수준에서 무인수상함정의 실전 운용 확대로 향후 완전 자율화 무인 해상 전투 시스템 발전 촉진 가능성</p></div>`,
      tags: ["Unmanned Surface Vessels","Maritime Drone","U.S. Military","Philippines","Taiwan Strait"],
      link: "https://news.usni.org/2026/05/03/green-berets-deploy-ship-killing-drone-in-luzon-strait-maritime-strike-exercise",
      coords: [121.9,20],
      location: "Luzon Strait, Batanes Archipelago, Philippines"
    },
    {
      type: "news",
      title: "World's Largest Sailing Yacht Orient Express Corinthian Named in France",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-03",
      image: "https://images.marinelink.com/images/maritime/w800/source-accor-170285.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **선박명 및 규모**: 오리엔트 익스프레스 코린티안(Orient Express Corinthian)이 세계 최대 규모 세일링 요트로 명명되었으며, 길이 220미터, 54개 스위트 객실을 보유한 럭셔리 크루즈선</p><p>• **혁신 추진 시스템**: Chantiers de l'Atlantique가 개발한 SolidSail 윈드 추진 시스템 장착으로, 3개 돛대(각 1,500m²)가 완전 자동화되어 360도 회전 가능하며 최적 바람 트림 유지</p><p>• **성능 검증**: 2026년 2월 해상 시운전에서 20노트 바람 조건에 돛만으로 12노트 달성 - 동급 선박 중 첫 사례</p><p>• **하이브리드 LNG 추진 및 에너지 효율**: 하이브리드 LNG 추진과 다수의 에너지 효율 기능으로 동급 선박 중 최우수 EEDI(에너지 효율 설계지수) 등급 획득</p><p>• **AI 안전 시스템 및 동적 포지셔닝**: AI 지원 해양생물 감지 시스템이 충돌 위험 감소, 동적 포지셔닝으로 해저 보호</p><p>• **제조 및 운영**: 프랑스 완전 건조, 약 2,000명의 장인과 아틀리에 참여, 지중해에서 취항 예정</p><h3>Key Quotes</h3><p>• "Her three rigs, each spanning 1,500 m² and rising to over 320 feet, are fully automated and capable of delivering 100% wind-powered propulsion in favorable conditions." (3개의 돛대(각 1,500m²)는 완전 자동화되어 유리한 조건에서 100% 풍력 추진 가능)</p><p>• "In 20 knots of wind, this vessel made 12 knots under sail alone - a first for a ship of this size." (20노트 바람에서 이 선박은 돛만으로 12노트를 달성했으며, 이는 동급 선박 중 첫 사례)</p><p>• "An AI-assisted detection system continuously monitors for marine mammals and objects in the water to reduce collision risk." (AI 지원 감지 시스템이 해양생물과 수중 물체를 지속적으로 모니터링하여 충돌 위험 감소)</p><h3>Technical Insights</h3><p>• **차세대 풍력 추진 기술**: SolidSail 시스템의 360도 회전 가능한 자동화 돛대는 IMO 에너지 효율 규제(EEDI) 강화에 대응하는 친환경 솔루션으로, 대형 크루즈선의 탈탄소화 방향 제시</p><p>• **AI 안전시스템 응용**: 해양생물 감지와 충돌 회피 기능은 해사안전법(COLREG) 준수와 자율항해 기술의 실제 운영 사례로, 해양 생태계 보호와 항법 안전 동시 달성</p><p>• **하이브리드 추진 시스템의 산업적 확산**: 풍력과 LNG 하이브리드 방식은 IMO 2050 탄소중립 목표 달성을 위한 전환형 기술로, 향후 대형선박 신조 시 주요 트렌드 예상</p><p>• **동적 포지셔닝 환경 기술**: 고정 투묘 대신 DP 시스템 활용으로 해양 생태계 영향 최소화, 해양 환경 보호 규제와 ESG 경영 강화의 구체적 사례</p></div>`,
      tags: ["Sailing Yacht","Wind Propulsion","SolidSail Technology","Hybrid LNG","AI Safety Systems","Chantiers de l'Atlantique"],
      link: "https://www.marinelink.com/news/worlds-largest-sailing-yacht-named-france-538726",
      coords: [-2.2137,47.2758],
      location: "Saint-Nazaire, France"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-03
addEvents({
  "2026-05-03": [
    {
      type: "accident",
      title: "Ukrainian Drones Attack Russian Port of Primorsk, Hit Tankers and Military Vessels in Baltic Sea",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-04",
      image: "https://images.marinelink.com/images/maritime/w800/source-social-170289.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나군이 드론을 이용해 러시아 발트해 유전항만인 프리모르스크(Primorsk) 항구를 공격해 화재 발생 및 유류터미널에 상당한 피해를 입힘</p><p>• 공격 대상: 유조선 1척, 러시아 카라쿠르트급 미사일함 1척, 경비정 1척 및 흑해 노보로시스크 항구 인근 쉐도우 플릿 유조선 2척</p><p>• 프리모르스크는 일일 100만 배럴의 석유 수출 능력을 갖춘 러시아 최대 수출 항구 중 하나이며, 최근 수개월간 반복적으로 공격받고 있는 상황</p><p>• 러시아 당국은 60여 대의 드론을 격추했으며 화재는 신속히 진화되고 유류유출은 없었다고 주장</p><p>• 젤렌스키 대통령은 이번 공격이 러시아의 전쟁 잠재력을 제한하고 우크라이나의 장거리 능력 개발을 계속하겠다고 강조</p><p>• 러시아는 석유 수출 감소로 인한 국제유가 상승이 수익성을 상쇄할 수 있다고 주장하며 도발적 입장 유지</p><h3>Key Quotes</h3><p>• "Each such result further limits Russia's war potential" (이러한 결과는 러시아의 전쟁 잠재력을 더욱 제한한다 - 젤렌스키 대통령)</p><p>• "These tankers had been actively used to transport oil – not anymore. Ukraine's long-range capabilities will continue to be developed comprehensively – at sea, in the air, and on land." (해당 유조선들은 석유 운송에 적극 활용되었지만 이제는 더 이상 사용할 수 없게 되었습니다. 우크라이나의 장거리 능력은 해상, 공중, 육상 전반에 걸쳐 계속 개발될 것입니다 - 젤렌스키 대통령)</p><p>• "If additional volumes of our oil are dropped from the market, prices will rise further from current levels, which are already above $120 a barrel. That would mean that even with lower export volumes, our companies would earn more money and the state would receive more revenue." (우리 석유의 추가 물량이 시장에서 빠지면 현재 배럴당 120달러 이상인 가격이 더 오를 것입니다. 이는 수출량이 감소하더라도 우리 기업들이 더 많은 돈을 벌고 국가가 더 많은 수익을 얻을 수 있다는 의미입니다 - 크렘린궁 대변인 페스코프)</p><h3>Technical Insights</h3><p>• **해상 드론 전술의 진화**: 기존의 대함 미사일 중심 전술에서 대규모 저가형 드론 무리(Swarm) 공격으로 전환되고 있으며, 이는 해양 보안 및 항만 운영 방식의 근본적 변화를 의도함</p><p>• **에너지 인프라 공략 전략**: 유전항만과 쉐도우 플릿 유조선 동시 공격으로 글로벌 석유 공급망 교란을 노리는 경제전 양상을 보이며, IMO 회원국들의 해상 교통 안전 관심 고조 필요</p><p>• **해상 군사 충돌과 민간 선박 구분의 모호성**: 쉐도우 플릿(제재 회피 민간 유조선) 공격 사례는 전쟁 중 민간 해상 활동의 위험성을 부각시키며, 해양 분쟁 지역의 자동항해 및 무인 선박 운영의 실질적 위험 증대를 시사</p><p>• **항만 보안 및 방어 체계 강화 필수**: 대규모 드론 공격(60여 대)을 상정한 항만 방어 시스템 개선, AIS 투명성 규제, 그리고 전략적 에너지 항구에 대한 국제적 보호 논의 확대 필요성 대</p></div>`,
      tags: ["Drone Attack","Port Infrastructure","Oil Tanker","Baltic Sea","Military Vessel","Ukraine-Russia Conflict"],
      link: "https://www.marinelink.com/news/ukrainian-drones-hit-russian-port-tankers-538731",
      coords: [59.61,49.97],
      location: "Primorsk, Baltic Sea / Novorossiysk, Black Sea"
    },
    {
      type: "news",
      title: "Swedish Coast Guard Seizes Syrian-Flagged Tanker Jin Hui Suspected of Russian Shadow Fleet Operations",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-03",
      image: "https://images.marinelink.com/images/maritime/w800/source-swedish-170283.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 스웨덴 해안경비대가 발틱해 트렐레보리 남쪽 해역에서 시리아 국적 탱커선 진휘(Jin Hui)를 나포했으며, 러시아의 '섀도우 플릿' 운영 혐의로 조사 개시</p><p>• 해당 선박은 거짓 선박등록(False Flag) 의혹, 국제 해양안전규정 미충족, EU·영국 제재 대상 등의 위반 사항 적발</p><p>• 스웨덴 방위부 장관 칼-오스카르 볼린이 해당 선박이 러시아 섀도우 플릿에 속한 것으로 추정된다고 발표</p><p>• 유럽 각국이 러시아의 우크라이나 전쟁 자금조달용 유조선 섀도우 플릿 적발·차단 활동을 강화 중</p><p>• 2026년 현재까지 스웨덴이 유사 위반 혐의로 5척의 선박을 나포하고 선원에 대해 형사 절차 개시</p><h3>Key Quotes</h3><p>• "The coast guard suspects that the ship is sailing under a false flag, given there are a number of irregularities concerning its flag status, and therefore does not meet demands for seaworthiness as set out in international regulations and agreements." (해안경비대는 선박등록 상태의 다수 불규칙성으로 인해 거짓 선박등록 하에서 운항 중이며, 국제 규정과 협약에서 정한 해양적합성 요건을 충족하지 못하고 있다고 의심)</p><p>• "The vessel was suspected of belonging to the Russian so-called shadow fleet." (해당 선박이 러시아의 이른바 섀도우 플릿에 속하는 것으로 의심된다)</p><h3>Technical Insights</h3><p>• **거짓 선박등록(False Flag) 적발**: UNCLOS 및 IMO SOLAS 규정상 선박은 진정한 국적 국가의 등록을 받아야 하며, 시리아 국적으로 등록된 선박의 실제 운영 주체가 러시아인 경우 국제 해양법 위반으로 적법한 나포 사유가 됨</p><p>• **섀도우 플릿 규제 강화**: EU, 영국 등 서방국들이 개별 해양안전 규정(Oil spill, seaworthiness) 위반을 명목으로 러시아 유조선을 순차적으로 나포하고 있으며, 이는 제재 회피 선박 적발의 효율적 모델로 부상</p><p>• **항해 안전 기준 강화**: MARPOL, ISM Code 등 국제 해양안전 규정 준수 여부를 검증 기준으로 활용하여 합법적인 선박 나포가 가능하며, 스웨덴 해안경비대의 정례적 감시가 지속적 억제 효과 생성</p></div>`,
      tags: ["Shadow Fleet","Sanctions Enforcement","Baltic Sea","Russia-Ukraine War","Flag State Irregularities"],
      link: "https://www.marinelink.com/news/swedish-coast-guard-seizes-shadow-tanker-538724",
      coords: [13,55.4],
      location: "Baltic Sea, south of Trelleborg, Sweden"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-04
addEvents({
  "2026-05-04": [
    {
      type: "accident",
      title: "Explosion Hits South Korean Ship HMM Namu in Strait of Hormuz Amid U.S.-Iran Tensions",
      source: "gCaptain (Reuters)",
      sourceMeta: "gcaptain.com · 2026-05-04",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-03-07T044529Z_1004479925_RC20XJAXEVAA_RTRMADP_3_IRAN-CRISIS-ENERGY-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 남한 선박 HMM Namu가 호르무즈 해협에서 폭발과 화재로 피격되었으며, 동시에 이란 무인기가 UAE 후자이라 유전시설을 공격함<br>• **관련 선박/기관**: HMM(현대상선) 운영 컨테이너선 HMM Namu, 미 해군 미사일 구축함, 이란 혁명수비대<br>• **지정학적 배경**: 트럼프 행정부의 "프로젝트 프리덤" 작전으로 호르무즈 해협 개방 시도 중 이란의 강력한 대응<br>• **해운 영향**: 지난 2개월간 이란의 해협 봉쇄로 인한 역사상 최대 규모의 글로벌 에너지 공급 차질 발생<br>• **현황**: 미군의 주장과 달리 상업 선박의 통과 급증 징후 없으며, 폭발 사건으로 운송업체들의 해협 통항 회피 심화 우려</p><h3>Key Quotes</h3><p>• "A South Korean ship was hit by an explosion in the Strait of Hormuz on Monday and Iranian drones caused a fire at a UAE oil port, as Tehran demonstrated its grip on Middle East oil" <br>  (이란이 중동 석유에 대한 통제력을 시연하면서 남한 선박이 호르무즈 해협에서 폭발에 피격되고 이란 무인기가 UAE 유전시설에 화재를 유발)</p><p>• "In the two months since the U.S. launched an air war against Iran alongside Israel, Tehran has largely blocked the strait to ships apart from its own, causing the biggest disruption to global energy supplies in history"<br>  (미국이 이스라엘과 함께 이란에 대한 공중전을 시작한 이래 2개월 동안 이란은 자국 선박을 제외한 해협을 대부분 봉쇄하여 역사상 최대 규모의 글로벌 에너지 공급 차질 초래)</p><h3>Technical Insights</h3><p>• **호르무즈 해협의 전략적 중요성**: 세계 최대 에너지 운송로로서 일일 약 2,100만 배럴의 석유 통과, 전 지구적 에너지 안보의 핵심 인프라<br>• **해상 분쟁 에스컬레이션**: 무인기 공격, 포경 사격 등 저강도 군사 충돌이 상업 선박의 항해 안전을 심각하게 위협하며, COLREG 및 해상안전규칙의 작동 불가 상황 심화<br>• **IMO 해상안전 기준의 한계**: 무장 분쟁 지역에서의 선박 통항 안전 보장 메커니즘 부재로, 국제해사기구의 규제 권한 범위 초과 상황 발생<br>• **운선사의 경제적 결정**: HMM Namu 피격으로 인한 운송 보험료 급등, 호르무즈 우회 항로 선택 비용 증가로 해상 운송 효율성 및 글로벌 공급망에 심각한 악영향 초래</p></div>`,
      tags: ["Ship Explosion","Strait of Hormuz","HMM Namu","Iran-U.S. Conflict","Maritime Security"],
      link: "https://gcaptain.com/explosion-hits-ship-as-trumps-hormuz-push-meets-reality/",
      coords: [56.5,26.1],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Fire and Explosion on HMM Namu in Strait of Hormuz",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-04",
      image: "https://images.marinelink.com/images/maritime/w800/ekhpictures-stockadobecom-170306.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 5월 4일(월) 남한 HMM 선사의 파나마 국적 화물선 HMM Namu가 호르무즈 해협에서 화재와 폭발 발생<br>• **피해 현황**: 승무원 24명(한국인 6명 포함) 탑승했으나 인명피해 없음; 기관실에서 발화<br>• **공격 의혹**: 서울 외교부가 선박이 공격받았을 가능성을 검토 중<br>• **관련 해상 긴장**: 이란의 미국 군함 진입 차단 조치와 연계된 지역 안보 악화<br>• **정부 대응**: 남한 정부가 관련국과 긴밀히 소통하며 호르무즈 해협 내 한국 선박 26척의 안전 확보에 나선 상황<br>• **조사 진행**: HMM과 관계당국이 화재 원인에 대한 조사 진행 중</p><h3>Key Quotes</h3><p>• "Our government will communicate closely with relevant countries regarding this matter and take necessary measures to ensure the safety of our vessels and crew members inside the Strait of Hormuz" (우리 정부는 이 문제와 관련하여 관련국과 긴밀히 소통하고 호르무즈 해협 내 우리 선박과 승무원의 안전을 보장하기 위해 필요한 조치를 취할 것)</p><p>• "The government was checking intelligence that the vessel, HMM Namu, may have been attacked" (정부는 HMM Namu가 공격받았을 가능성에 대한 정보를 확인 중)</p><h3>Technical Insights</h3><p>• **지정학적 해상로 위협**: 호르무즈 해협은 전 세계 해상 석유 운송의 약 21%가 통과하는 전략적 요충지로서, 지역 분쟁 고조 시 상선 안전이 심각한 위협에 처할 수 있음을 시사</p><p>• **선박 보안 체계 강화 필요**: 엔진실 화재/폭발의 외부 공격 여부 판단은 정교한 법의학적 조사를 요구하며, 고위험 해역 통항 선박의 보안 모니터링 및 실시간 경보 시스템 고도화가 요구됨</p><p>• **해운 산업의 지역 위험 재평가**: 한국 선사들의 26척 선박이 해협 내 정체되어 있는 상황은 호르무즈 해협 통항 위험 등급 상향 조정 및 보험료 인상, 선적 경로 우회 검토 등 글로벌 공급망에 미치는 광범위한 영향을 야기</p><p>• **IMO 안전규칙 적용의 한계**: 국제해사기구(IMO) SOLAS 규칙상 엔진실 화재 방지 기준이 존재하나, 외부 공격(missile/mine 위협)에 대한 대응은 국제 해양법의 미흡한 부분으로, 전쟁지역 해운 보호 강화의 필요성을 부각</p></div>`,
      tags: ["Fire","Explosion","HMM Namu","Strait of Hormuz","Engine Room","Potential Attack"],
      link: "https://www.marinelink.com/news/fire-breaks-hmm-vessel-strait-hormuz-538758",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Royal Navy Plans Hybrid Fleet with Autonomous and Uncrewed Vessels for High North Operations",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-05-04",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 해군(Royal Navy)이 북극 고지(High North)와 북대서양에서 러시아와의 경쟁에 대응하기 위해 자율선박 및 무인선박을 포함한 하이브리드 함대 운영 계획 발표<br>• 제1해군경(First Sea Lord) Gen. Gywn Jenkins가 런던 소재 Royal United Services Institute에서 Hybrid Navy 변환 계획을 연설로 공개<br>• 이 전략은 영국의 지정학적 위치와 전략 방위 검토(Strategic Defense Review) 우선순위를 반영<br>• 자율 및 무인 장비의 도입을 통해 기존 함대의 작전 능력 및 효율성 향상 목표<br>• 고위도 극지역 작전 환경에서의 장시간 순찰 및 모니터링 역량 강화 예상</p><h3>Key Quotes</h3><p>• "This is where our [Hybrid Navy will be geared towards the North Atlantic and High North]" <br>  (우리의 하이브리드 해군이 북대서양과 북극 고지역을 중심으로 운영될 것)</p><h3>Technical Insights</h3><p>• **자율선박 운용의 전략적 의의**: 극지역의 악조건 해역에서 무인 시스템의 지속적인 작전 가능성을 통해 인력 손실 위험 감소 및 장시간 감시 능력 확보 가능<br>• **해양 지배 전략의 진화**: 하이브리드 함대 개념은 유인선과 무인선의 협력을 기반으로 하며, 이는 미래 해전 전술 패러다임의 전환을 의미<br>• **IMO/COLREG 규제 환경**: 북대서양과 같은 국제 해역에서 자율선박 운용 시 국제해사기구(IMO) 자율선박 지침 및 해상충돌방지규칙(COLREG) 준수 필수화<br>• **산업적 영향**: 주요 해군의 자율선박 도입 선언은 민간 해운업과 조선산업의 기술 개발 투자 가속화를 유도할 것으로 예상</p></div>`,
      tags: ["autonomous vessels","Royal Navy","hybrid fleet","High North","Russia","naval strategy"],
      link: "https://news.usni.org/2026/05/04/royal-navy-to-use-hybrid-fleet-to-keep-pace-with-russia-in-high-north",
      coords: [51.5074,-0.1278],
      location: "London, United Kingdom"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-05
addEvents({
  "2026-05-05": [
    {
      type: "news",
      title: "Oil Prices Fall 3% As Ship Passes Through Hormuz, US-Iran Ceasefire Holds",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-05",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stocklalaka-170346.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협을 통한 첫 상선 통과로 유가 3% 하락 - 브렌트유 배럴당 $111.01, WTI $101.87로 기술적 조정<br>• 미국의 '프로젝트 프리덤'(Project Freedom) 해군 호위작전으로 상선 통과 가능 - 마에스크 소속 얼라이언스 페어팩스호 성공 통과<br>• 미-이란 휴전 유지 상태이나 이란의 미사일·드론 공격 재개로 불안정성 지속 - 아랍에미리트 방공망 작동<br>• 호르무즈 해협은 글로벌 일일 석유·가스 수급의 약 20%를 차지하는 전략적 요충지<br>• 한국도 해협 통과 지원 계획 검토 중 - 한국 운영 선박의 폭발·화재 사건으로 참여 여부 재검토</p><h3>Key Quotes</h3><p>• "It shows that limited safe passage is possible under current conditions and helps chip away at some of the worst-case supply disruption fears" (현재 조건에서 제한적 안전 통과가 가능함을 보여주며, 최악의 공급 차질 우려를 완화시킬 수 있음)</p><p>• "However, it's still very much a one-off event rather than a full reopening" (그러나 이는 여전히 완전한 재개보다는 일회성 사건에 불과함)</p><h3>Technical Insights</h3><p>• **해협 통제와 해운업 영향**: 호르무즈 해협은 글로벌 석유·LNG 공급의 20% 담당 - 일시적 통과 재개도 유가 변동성 완화에 영향<br>• **군사 호위와 상용 선박 운영**: 미군 호위 하에 상선 통과 가능성 확인되었으나, 지속 가능성과 해운사의 위험 평가 필요 - 보험료 및 운항비용 상승 예상<br>• **지정학적 리스크 관리**: 국제 해운사들의 호르무즈 해협 우회항로 재평가 필요 - 아프리카 케이프 루트 등 대체 항로 선택 비용 vs. 직항 리스크 분석<br>• **해상 안보와 UNCLOS**: 국제 공해상 강제 호위 체계의 선례 제시 - IMO와 국제해사기구의 통항의 자유 원칙과의 충돌 가능성</p></div>`,
      tags: ["Strait of Hormuz","Oil Market","US-Iran Tensions","Commercial Shipping","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/oil-prices-fall-ship-passes-hormuz-usiran-538814",
      coords: [56.2417,26.1225],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "UAE Under Attack from Iranian Missiles and Drones; Strait of Hormuz Tensions Escalate",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-05",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockkareemovic-170344.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **이란의 미사일·드론 공격**: 2026년 5월 5일 UAE가 이란으로부터 미사일과 드론 공격을 받았으며, 이는 호르무즈 해협의 긴장 고조를 의미<br>• **상황 배경**: 2월 28일 미국-이스라엘의 이란 공격 이후 4주간의 휴전 상태가 지속되고 있으나 양측 간 충돌이 반복되는 상황<br>• **해상 운송 차단**: 이란의 기뢰 배치 위협과 미사일·드론 운용으로 호르무즈 해협 폐쇄 상태가 지속 중으로, 전 세계 석유 및 비료 공급의 대부분이 영향 받음<br>• **미국의 대응**: 트럼프 대통령의 "Project Freedom"에 따라 해군이 상선 호송을 시작했으며, 이미 수백 척의 선박이 통항 대기 중<br>• **경제적 영향**: 해협 폐쇄로 인한 상품가 상승 및 국제 해상 운송 혼란이 지속 중<br>• **분쟁 당사자**: 미국(호송작전), UAE(피격국), 이란(공격국), Maersk 등 해운사 영향</p><h3>Key Quotes</h3><p>• "We're not looking for a fight. Right now the ceasefire certainly holds, but we're going to be watching very, very closely." (우리는 싸움을 원하지 않으며, 휴전은 유지되고 있으나 매우 긴밀히 감시할 것)<br>  <br>• "We know well that the continuation of the current situation is unbearable for the United States, while we have not even begun yet." (현재 상황이 미국에는 견디기 어렵지만, 우리는 아직 시작하지도 않았다는 의미의 이란 의회 의장 발언 - 추가 공격의 위협)</p><p>• The narrow strait has been virtually shut since the United States and Israel began attacks on Iran on February 28. (2월 28일 미국-이스라엘 공격 이후 해협이 사실상 폐쇄됨을 의미하며, 전 세계 해상 운송에 심각한 영향)</p><h3>Technical Insights</h3><p>• **호르무즈 해협의 전략적 중요성**: 전 세계 석유 및 비료 공급의 대부분이 통과하는 해협으로, 폐쇄 시 국제 상품 가격과 해운 산업에 직접적인 영향 발생</p><p>• **해상 안보 위협 요소**: 이란의 기뢰, 드론, 미사일, 고속 공격정 등 다층적 위협으로 자율항행 선박이나 원격 조종 기술의 도입이 향후 해상 운송 안전성 향상에 필수적</p><p>• **상선 호송 체계의 한계**: 미국 해군의 직접 호송에도 불구하고 양측 충돌이 반복되며, 이는 AI 기반 충돌회피 및 자동화 네비게이션 기술 도입의 필요성을 강조</p><p>• **IMO 규정의 실효성 문제**: 분쟁 지역 통항 선박의 안전 보장이 국가 간 군사 충돌에 의해 좌우되는 상황으로, 국제 해사법과 중립성 원칙의 강화가 과제</p></div>`,
      tags: ["Iran-UAE Conflict","Strait of Hormuz","Missile Attack","Commercial Shipping Disruption","Geopolitical Incident"],
      link: "https://www.marinelink.com/news/us-claims-iran-ceasefire-uae-attack-538810",
      coords: [56.5,25.2],
      location: "Strait of Hormuz / Persian Gulf"
    },
    {
      type: "news",
      title: "MARTAC T38 USV Completes Record 8-Day Autonomous Mission Off California",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-05",
      image: "https://images.marinelink.com/images/maritime/w800/martac-170340.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MARTAC의 T38 Devil Ray 무인수상선이 캘리포니아 해안에서 8일간의 완전 자율 미션을 성공적으로 완료하여 같은 등급의 함정에서 이전에 달성하지 못한 지구력과 신뢰성을 입증함</p><p>• 미해군 항공전투센터 무기부(NAWCWD) Point Mugu Sea Range의 Future Capabilities Office가 운영하는 T38 USV가 개방해역에서의 장시간 자율운항을 성공적으로 시연</p><p>• 선박은 4노트의 저속 운항으로 장시간 체류능력을 강조하면서도 필요시 50노트 이상의 고속운항이 가능함을 입증</p><p>• 선박은 국제해상충돌방지규칙(COLREG) 1972를 준수하면서 자동으로 정적 및 동적 접촉물을 회피하며 항해</p><p>• 의도적인 단일엔진 운항(400해리 해상) 및 Sea State 5(파고 10피트)까지의 악해 조건에서도 안정적인 운항과 임무 수행을 입증</p><p>• 쌍동선 설계의 안정성 우위가 센서 데이터 수집, 정밀한 위치유지, 목표물 지원 등 다양한 임무 효율성 향상에 직결됨</p><h3>Key Quotes</h3><p>• "The T38 safely navigated around multiple static and mobile contacts during the underway period, further demonstrating that its autonomy stack is compliant with the International Regulations for Preventing Collisions at Sea 1972 (COLREG)." <br>(T38이 항해 중 정적 및 동적 다양한 접촉물을 안전하게 회피하며 국제해상충돌방지규칙을 준수함을 시연)</p><p>• "A defining element of the mission was a deliberate two-day alternating single-engine operational period conducted approximately 400 nautical miles offshore... reinforcing the platform's efficiency, control logic and mission flexibility."<br>(400해리 해상에서의 의도적 단일엔진 운항이 플랫폼의 효율성, 제어 로직, 임무 유연성을 강화함)</p><p>• "The mission emphasized persistence over speed, with the vessel averaging just over 4 knots per hour, validating its role as a long-endurance, forward-deployed asset capable of sustained presence rather than short-duration sprint operations."<br>(장시간 체류 및 지속적 전개가 가능한 장시간 지구력 자산으로서의 역할을 입증)</p><h3>Technical Insights</h3><p>• **COLREG 준수 자율운항**: T38 USV의 자율성 스택이 국제해상충돌방지규칙 1972를 완벽히 준수하며 자동회피를 수행하는 것은 완전 자율운항 시대의 도래를 시사하는 중요한 이정표</p><p>• **장시간 지구력 운영의 산업적 의의**: 8일간의 연속 자율 미션 완료는 해군의 감시, 정찰, 시험평가(T&E) 임무에서 고정식 장비를 대체할 수 있는 새로운 플랫폼으로서의 가능성을 제시</p><p>• **악해 환경에서의 안정성**: Sea State 5까지의 거친 해상에서도 쌍동선 설계를 통한 안정성을 유지하며 고품질 센서 데이터 수집이 가능함은 무인 해양 플랫폼의 실용성을 입증</p><p>• **추진 효율성과 운영 유연성**: 저속 운항(4노트)에서의 장거리 체류와 필요시 50노트 이상의 고속운항 가능성은 다양한 미션 프로필 대응의 운영적 효율성을 강조하며, 에너지 효율적인 무인함정의 설계 방향을 제시</p></div>`,
      tags: ["Autonomous Surface Vessel","USV","COLREG Compliance","Navy Testing","Unmanned Maritime"],
      link: "https://www.marinelink.com/news/martac-t-usv-completes-day-autonomous-538804",
      coords: [-120.2,34.7],
      location: "California Coast, USA"
    },
    {
      type: "news",
      title: "ASELSAN Unveils Autonomous Unmanned Naval Systems at SAHA 2026",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-05",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/ASELSAN_SAHA_2026_Day_1_TUFAN-KILIC_1-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ASELSAN은 터키 이스탄불에서 개최되는 SAHA 2026 전시회에서 차세대 무인 해상 솔루션을 공개하여 분산형, 네트워크 중심의 해양 작전으로의 패러다임 전환을 주도함</p><p>• KILIÇ 10(100WH) 및 KILIÇ 200(200WH) 자율 수중 무인 시스템은 비대칭 전쟁과 은폐 작전 시나리오에 최적화된 경량 플랫폼으로, 단일 사용자 운영 가능</p><p>• 열화상/적외선 카메라, 수중 저조명 영상, 음성 통신 등 다층 감지 및 통신 기능을 통합하여 저시정 환경에서 해상 목표 탐지 및 추적 가능</p><p>• RF 및 선택적 유선 제어 모드, 자율 및 군집 작전 능력으로 다양한 교전 옵션 제공하며, 낮은 음향/시각 특성으로 생존성 확보</p><p>• KILIÇ 200은 확장된 작전 범위와 탑재량으로 해저 인프라, 항만 시설, 해상 에너지 자산 등 광범위한 목표 교전 가능</p><p>• 광범위한 무인 에코시스템의 일부로 기능하며 무인 표면 플랫폼과의 호환성으로 네트워크 중심 해양 작전 체계 구현</p><h3>Key Quotes</h3><p>• "Unmanned systems are emerging as a defining element of naval power... scalable, cost-effective capabilities that can extend reach, reduce risk to personnel and operate effectively in contested environments"<br>(무인 시스템은 해군력의 핵심 요소로 부상하고 있으며, 확장성과 비용 효율성을 갖춘 능력으로 작전 범위를 확대하고 인원 위험을 감소시키며 분쟁 환경에서 효과적으로 작동)</p><p>• "KILIÇ 10 provides operators with multiple engagement options. Its low acoustic and visual signature enhance survivability, while its integrated warhead enables high-precision neutralization of surface and subsurface targets"<br>(KILIÇ 10은 운용자에게 다양한 교전 옵션을 제공하며, 낮은 음향 및 시각 특성으로 생존성을 강화하고 통합 탄두로 수상 및 수중 목표의 고정밀 무력화 가능)</p><h3>Technical Insights</h3><p>• 자율 해양 무인 시스템의 발전은 IMO의 해양 자율 표면선박(MASS) 규정과 국제해사법 체계 내에서 규제 프레임워크 정립의 시급성을 강조하며, 특히 군사용 자율 시스템의 국제 행동 강령 수립 필요</p><p>• KILIÇ 시리즈의 다중 제어 모드(자율/유선/군집 작전)는 차세대 해양 작전의 핵심인 Human-in-the-Loop(HIL) 및 Human-on-the-Loop(HOL) 개념의 실제 구현을 보여주며, 기존 COLREG 체계와의 충돌 가능성 존재</p><p>• 분산형 네트워크 중심 작전(DCO) 환경에서의 자율 무인 플랫폼 통합은 실시간 데이터 융합, 다중 센서 통신 프로토콜 표준화, 사이버 보안 강화의 3대 기술적 과제를 야기</p><p>• 수중 음성 통신 및 저시정 환경에서의 자율 네비게이션 기술은 해양 로봇공학의 경계선박 감시(Border/Coastal Surveillance) 및 해양 인프라 보호 영역으로의 확산을 가속화할 것으로 예상</p></div>`,
      tags: ["autonomous systems","unmanned naval platforms","ASELSAN","maritime technology","SAHA 2026"],
      link: "https://www.navalnews.com/naval-news/2026/05/aselsan-at-saha-2026-building-a-global-benchmark-in-unmanned-naval-warfare/",
      coords: [28.9784,41.0082],
      location: "Istanbul, Turkey"
    }
  ]
});

// Auto-collected: 2026-06-09
addEvents({
  "2026-06-09": [
    {
      type: "event",
      title: "Henriksen Launches New Slipway LARS System for USVs at Seawork 2026",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-05",
      image: "https://images.marinelink.com/images/maritime/w800/henriksen-170339.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Henriksen AS(노르웨이)가 소형 보트 및 무인수상선박(USV) 자동 발사 및 회수 시스템(HSS) 신제품 개발 완료<br>• 모함의 선미 램프에서 자동 발사/회수 가능하며 RIB 탑승 후 2분 이내에 항해 개시 가능<br>• 경찰/군사 임무 신속 대응, 기뢰제거 작전용 무인드론 신속 배포에 활용 가능<br>• Seawork 2026(6월 9-11일, Southampton, F34 부스)에서 최초 공개 예정<br>• 노르웨이 Tønsberg 신규 공장에서 제조 중이며 윈치, 댐퍼 캐비닛 등 최신 기술 통합</p><h3>Key Quotes</h3><br>• "The new system enables the automated launch and recovery of craft from the stern ramp of a mother vessel" (모함의 선미 램프에서 선박의 자동 발사 및 회수가 가능하다)<br>• "A police or military crew to board a RIB and be under way on the water in less than two minutes" (경찰 또는 군사 승무원이 RIB에 탑승하여 2분 이내에 항해 개시 가능)</p><h3>Technical Insights</h3><br>• 자동 발사 회수 시스템(LARS)의 자동화 수준 향상으로 무인 해양 운영 효율성 극대화<br>• 고정밀 자동 클로우 훅 및 라인 포획 기술로 USV 및 RIB의 신속하고 안전한 운용 실현<br>• 경찰/군사/민간 해양 작업의 신속 대응 능력 강화로 해상 보안 및 구조 작전의 실질적 개선<br>• LARS 자동화 기술이 자율운항선박 및 해양 드론 생태계 확대에 기여하는 핵심 인프라 역할</p></div>`,
      tags: ["LARS","USV","Autonomous Systems","Seawork Exhibition"],
      link: "https://www.marinelink.com/news/henriksen-launches-new-slipway-lars-538806",
      coords: [0,0],
      location: "Southampton"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-06
addEvents({
  "2026-05-06": [
    {
      type: "accident",
      title: "U.S. Navy F/A-18 Disables Iranian Tanker M/T Hasna in Gulf of Oman During Blockade Enforcement",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-06",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/fighter-jet-hormuz.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미국 중부사령부(CENTCOM)가 이란 국적 유조선 M/T Hasna호의 운항을 무력화함 - 미국의 이란 항구 봉쇄에 위반하는 것으로 판단<br>• F/A-18 슈퍼 호넷 전투기(USS Abraham Lincoln 항공모함 탑재)가 20mm 기관포로 선박의 방향타를 파괴<br>• 4월 M/V Touska호에 대한 유사 사건에 이어 두 번째 무력화 조치 - 미국의 이란 해상 봉쇄 집행 강화 추세 반영<br>• 사건 발생 당시 트럼프 대통령이 "프로젝트 프리덤" 해상 작전을 일시 중단 선언했으나, 이란 항구 봉쇄는 계속 유지<br>• 호르무즈 해협 및 오만만 지역의 해상 안보 위험 심화 - 상선들의 통항 자유 제약 심각</p><h3>Key Quotes</h3><br>• "After the crew failed to comply, a U.S. Navy F/A-18 Super Hornet launched from USS Abraham Lincoln (CVN 72) fired several 20mm cannon rounds to disable the tanker's rudder." (승선원들이 경고에 불응하자 미 해군 F/A-18 전투기가 20mm 기관포를 발사하여 선박의 방향타를 무력화함)</p><p>• "CENTCOM announced in April would apply to vessels of all nations entering or departing Iranian ports while not impeding ships bound for non-Iranian ports through the Strait of Hormuz." (모든 국적의 선박이 이란 항구 진출입 시 봉쇄 대상이 되나, 호르무즈 해협을 통해 비이란 항구로 향하는 선박은 제외)</p><h3>Technical Insights</h3><br>• 국제해상법(UNCLOS)상 공해 통항의 자유와 군사적 봉쇄 조치 간의 법적 충돌 - 상선의 운항 자유와 국가 안보 이익의 긴장 관계<br>• 호르무즈 해협 지역 해상 안보 위기 고조로 인한 자동항해/AI 기반 원격 운영 선박 필요성 증대 - 승선원 안전 위협 증가<br>• 상선의 무장화 또는 호위선 동승 운영 논의 가능성 - 국제 해운업계의 경영 비용 및 운영 리스크 급증<br>• IMO 및 국제해사기구의 조정 역할 필요 - 호르무즈 해협 통항 안전 프로토콜 재정의 시급</p></div>`,
      tags: ["Iranian Tanker","Gulf of Oman","U.S. Navy","Blockade Enforcement","Strait of Hormuz","Military Action"],
      link: "https://gcaptain.com/u-s-navy-jet-fires-upon-disables-iranian-tanker-accused-of-violating-washingtons-blockade/",
      coords: [58.5,23.6],
      location: "Gulf of Oman"
    },
    {
      type: "news",
      title: "MSC 111 Expected to Adopt MASS Code for Autonomous Ships",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-06",
      image: "https://images.marinelink.com/images/maritime/w800/source-170398.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IMO 해사안전위원회(MSC) 111차 회의(2026년 5월 13-22일)에서 자율운항선박(MASS) 안전규칙(MASS Code) 채택 예정<br>• MASS Code는 SOLAS 등 기존 IMO 규칙을 보완하는 목표기반 규정으로, 원격조종 및 완전자율운항 선박의 안전성 확보를 위해 설계<br>• 조사 및 인증, 위험평가, 시스템 설계, 소프트웨어 원칙, 안전운영 관리, 항해안전, 통신, 원격운영, 구조/복원력, 화재안전, 보안, 선적 등 19개 주요 항목 포함<br>• 규제 프레임워크는 자율운항선박 운영 시 요구되는 안전 수준 유지를 핵심 목표로 설정<br>• 작업그룹 구성을 통해 비강제성 MASS Code의 최종 완성 진행 예정</p><h3>Key Quotes</h3><p>• "The MASS Code aims to address the functions needed for safe, secure, and environmentally sound operations of MASS insofar as they are not adequately or fully addressed in other applied IMO instruments" (MASS Code는 기존 IMO 규정에서 충분히 다루지 않은 자율운항선박의 안전하고 안정적이며 환경친화적 운영에 필요한 기능을 규정함을 목표)</p><p>• "The MASS Code is intended as supplementary to other IMO instruments, including SOLAS, and provides a regulatory framework for remotely controlled and autonomous ship operations" (MASS Code는 SOLAS 등 기존 규정을 보완하는 것으로, 원격조종 및 자율운항 선박 운영을 위한 규제 프레임워크 제공)</p><h3>Technical Insights</h3><p>• **규제 표준화**: MASS Code 채택을 통해 자율운항선박의 국제적 운영 기준이 통일되므로, 조선업계의 설계·건조 표준화 및 기술 혁신 가속화 기대</p><p>• **소프트웨어 기반 안전관리**: 시스템 설계, 소프트웨어 원칙, 알림 관리 등이 핵심 규제 대상으로 포함되어, AI·머신러닝 기반 자율운항 시스템의 신뢰성 검증 체계 강화 필요</p><p>• **원격운영 및 통신 인프라**: 원격조종 운항 시 통신 보안 및 신뢰성 요구사항이 규정되므로, 위성통신·5G 등 해상 디지털 인프라 투자 확대 전망</p><p>• **산업 수용성 확대**: 비강제성(non-mandatory) 규칙으로 채택되어 선사 및 조선소의 자발적 도입을 유도하며, 향후 강제규범으로 전환될 가능성을 고려한 기술 준비 시급</p></div>`,
      tags: ["MASS Code","Autonomous Ships","IMO Regulation","Maritime Safety"],
      link: "https://www.marinelink.com/news/msc-expected-adopt-mass-code-538893",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2025-01-25
addEvents({
  "2025-01-25": [
    {
      type: "accident",
      title: "Catastrophic Engine Failure and Fire on Site Investigation Vessel Kommandor Susan",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-05-06",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2025년 1월 25일 스코틀랜드 포스만에서 해상 조사선 Kommandor Susan의 디젤 발전기 엔진이 치명적으로 파괴되어 엔진실 화재 및 완전 정전 발생<br>• **직접 원인**: 2019년 대규모 정비 당시 순정품이 아닌 부품 사용 및 확대된 정비 간격 승인으로 인한 엔진 결함<br>• **사고 경위**: 화재 진압은 성공했으나 모든 전력 손실로 추진력 상실 및 동쪽으로 표류, 앵커 투하 실패(전력 필요)<br>• **선원 대응**: 승무원의 신속한 대응으로 화재 진압 및 안전한 집결 달성, 제한된 추진력으로 라이스 항구 복귀<br>• **조사 결과**: 선박 소유자의 정비 감시 부족 및 계약업체 감시 체계 미흡이 근본 원인으로 지적<br>• **권고사항**: 비공식 권고로 중요 정비 활동에 대한 구조화된 감시 체계 및 명확한 책임 체계 구축 강조</p><h3>Key Quotes</h3><p>• "The crew responded promptly, extinguishing the fire and mustering safely." (승무원들이 신속하게 대응하여 화재를 진압하고 안전하게 집결했다)<br>• "Kommandor Susan was eventually returned to Leith harbour with limited propulsion restored." (최종적으로 제한된 추진력을 복구하여 라이스 항구로 귀환했다)<br>• "a shortfall in oversight and contractor assurance by the vessel owner during overhaul, which allowed the non-genuine components to be installed" (정비 중 선박 소유자의 감시 부족과 계약업체 확인 미흡으로 비순정품 부품 설치를 허용함)</p><h3>Technical Insights</h3><p>• **부품 추적 및 감시의 중요성**: 선박 정비 과정에서 순정품/비순정품 구분 철저화 및 공급망 관리 강화 필요성 증대<br>• **전력 의존성 위험**: 현대 선박의 앵커, 추진 장치 등 주요 시스템이 전기 의존도가 높아 계전기/발전기 중복화 설계 필수<br>• **정비 간격 정책의 위험성**: 제조사 권장 정비 간격은 순정품 사용을 가정하므로, 비순정품 사용 시 간격 조정 의무화 필요<br>• **선주/계약업체 감시 체계**: IMO 규정(SOLAS, MARPOL)과 ISM Code에 따른 정기적 감시 감사 강화 및 독립적 검증 메커니즘 도입</p></div>`,
      tags: ["engine failure","fire","power loss","diesel generator","investigation report"],
      link: "https://www.gov.uk/maib-reports/catastrophic-engine-failure-and-subsequent-fire-on-board-the-site-investigation-vessel-kommandor-susan",
      coords: [-3.1883,56.0196],
      location: "Firth of Forth, Scotland"
    },
    {
      type: "accident",
      title: "Catastrophic Engine Failure on Kommandor Susan Due to Non-Genuine Parts",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-06",
      image: "https://images.marinelink.com/images/maritime/w800/grispb-adobe-170399.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **사건 개요**: 영국 스코틀랜드 포스만(Firth of Forth)에서 해상 시험 중인 조사선 Kommandor Susan의 디젤 발전기 엔진이 2025년 1월 25일 파국적으로 고장나 엔진실 화재 및 완전 정전 발생</p><p>• **직접 원인**: 2019년 주요 정비 중 비정품 엔진 부품 설치 - 소유사의 부실한 감시로 인한 용역업체 점검 미흡</p><p>• **사건 전개**: 승무원의 신속한 대응으로 화재 진화 및 안전한 승선원 집결 성공, 추진력 상실로 동쪽으로 표류하다 제한된 추진력으로 Leith 항구 복귀</p><p>• **안전 결함**: 정품 부품 사용 가정하에 정한 연장된 정비 주기 운영, 정비 과정에서의 주인 감독 부족</p><p>• **후속 조치**: 정식 권고사항 없음, 그러나 해양사고 수석조사관이 전 소유사(Hays Ships Limited)에 명확한 책임 및 모든 중요 정비 활동 모니터링 체계 구축 필요성 지적</p><p>---</p><h3>Key Quotes</h3><p>• "The vessel suffered a catastrophic failure of a diesel generator engine while conducting sea trials in the Firth of Forth, Scotland. The failure resulted in an engine room fire and a complete power blackout." (포스만에서 해상 시험 중 디젤 발전기의 파국적 고장으로 엔진실 화재 및 완전 정전 발생)</p><p>• "A shortfall in oversight and contractor assurance by the vessel owner during overhaul, which allowed the non-genuine components to be installed." (정비 중 선주의 감시 미흡과 용역업체 검증 부족으로 비정품 부품 설치 허용)</p><p>---</p><h3>Technical Insights</h3><p>• **부품 신뢰성 관리**: 선박 엔진 주요 부품의 비정품 사용은 제조사 설계 사양 이탈로 예측 불가능한 고장 초래 - 정비 계약서에 정품 사용 명시 및 검수 강화 필수</p><p>• **유지보수 주기 설정 오류**: 정품 부품 기준으로 수립된 연장 정비 주기를 비정품 적용 시에도 그대로 운영하면 내구성 저하 및 조기 고장 위험 증가</p><p>• **운영사의 감독 책임**: IMO SOLAS 규정상 선주의 안전관리 책임(ISM Code)에 따라 모든 중요 정비 활동에 대한 감시·기록·검증 체계 구축 필수 - 특히 용역업체 작업 검수 강화</p><p>• **전원 계통 이중화**: 완전 정전 시 앵커 권양기 미작동으로 표류 위험 증가 - 중요 시스템(추진력, 앵커링 등)에 백업 전원 또는 독립 전원 공급 체계 고려</p></div>`,
      tags: ["Engine Failure","Fire","Non-Genuine Parts","MAIB Investigation"],
      link: "https://www.marinelink.com/news/nongenuine-parts-implicated-engine-538894",
      coords: [-3.1857,56],
      location: "Firth of Forth, Scotland"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-06
addEvents({
  "2026-05-06": [
    {
      type: "news",
      title: "STM Unveils YAKTU Swarm Kamikaze Unmanned Surface Vehicle at SAHA 2026",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-06",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/YAKTU_3.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• STM(터키 방위 기술 회사)이 SAHA 2026 전시회에서 차세대 카미카제 무인 수상함(YAKTU KUSV) 공개 - 해양 방위 기술의 새로운 시대 진입</p><p>• YAKTU는 50노트 이상의 고속 성능, 5.8m의 저프로필 설계, 200해리 이상의 작전 범위를 갖춘 정밀 타격 플랫폼</p><p>• AI 기반 자율 아키텍처와 군집 기능으로 다중 장치의 실시간 협력 작전 가능 - 방어 시스템 무력화를 위한 전략적 비용 효율 솔루션</p><p>• LOS(직선 통신)와 SATCOM을 통한 네트워크 중심 전쟁 능력 - 분쟁 환경에서도 작전 우위 유지</p><p>• STM 대표 Özgür Güleryüz는 "전술적 강화물이자 AI 기반 자율 아키텍처와 군집 기능으로 구동되는 전략적 능력 증강 플랫폼"이라 표현</p><h3>Key Quotes</h3><p>• "This is more than a high-speed strike platform; it is a strategic force multiplier powered by AI-enabled autonomous architecture and swarm capabilities." <br>(고속 타격 플랫폼을 넘어 AI 기반 자율 아키텍처와 군집 기능으로 구동되는 전략적 능력 증강 수단)</p><p>• "By enabling coordinated multi-unit operations, the YAKTU can overwhelm defense systems through multi-vector engagements, offering a cost-effective, high-precision solution for penetrating modern defense layers."<br>(다중 장치 협력 작전을 통해 YAKTU는 다각도 접근으로 방어 체계를 압도할 수 있으며, 현대식 방어층 침투를 위한 비용 효율적이고 정밀한 솔루션 제공)</p><h3>Technical Insights</h3><p>• **군집 무인 시스템의 실전 배치**: YAKTU의 무인 수상함 군집 기술은 자율 협력, 실시간 데이터 공유, 임무 자동 할당을 통해 종래의 단일 플랫폼 운영 체계를 혁신 - IMO의 MASS(Maritime Autonomous Surface Ships) 규제 체계와는 별개의 군사용 자율시스템 발전 추세</p><p>• **네트워크 중심 전술의 해상 확대**: LOS와 SATCOM 이중 통신 체계를 통한 contested environment(분쟁 환경)에서의 운영 능력 - 차세대 해상 전투 패러다임이 분산형 자율 에이전트 중심으로 전환되는 현상 반영</p><p>• **방위산업 기술 고도화와 수출 전략**: 터키의 STM이 indigenous(자체 개발) 하드웨어·소프트웨어 아키텍처로 고성능 자율 무기체계 개발 - 글로벌 방위 시장에서 비용 효율적 자율시스템 공급자로서의 입지 강화</p><p>• **상용 자율선박과의 기술 차별화**: 카미카제 USV는 해양 자율화 기술의 극단적 군사 응용 - 상용 MASS의 안전 규제와 대조적으로 고속, 저탐지성, 완전 자율 결정 능력에 최적화된 이질적 기술 생태계 형성</p></div>`,
      tags: ["Autonomous Systems","Unmanned Surface Vehicle","Naval Defense","Swarm Technology","Turkish Defense"],
      link: "https://www.navalnews.com/naval-news/2026/05/stm-unveils-yaktu-swarm-kamikaze-unmanned-surface-vehicle/",
      coords: [32.8597,39.9334],
      location: "Ankara, Turkey"
    }
  ]
});

// Auto-collected: 2026-05-05
addEvents({
  "2026-05-05": [
    {
      type: "news",
      title: "U.S. Navy Tests AI-Powered Drones for Narco Boat Tracking in FLEX Exercise",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-05-05",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 미 4함대와 해군 남방사령부가 드론과 AI를 활용한 마약선박 추적 및 대테러 작전 테스트 실시<br>• 2026년 해군 함대 실험(FLEX) 훈련 일환으로 4월 24-30일 플로리다 키웨스트 해역에서 수행<br>• 제한된 전통 해군 자산으로 광대한 해양 지역 순찰을 위해 로봇 및 자율 시스템(RAS) 운영 전략의 핵심<br>• 초국가적 조직 범죄 대응을 위한 고급 자동화 기술 도입<br>• 드론 기반 감시 체계의 해양 법집행 및 국방 분야 활용 확대</p><h3>Key Quotes</h3><br>• "FLEX is a cornerstone of the commands' strategy to field advanced robotic and autonomous systems (RAS) to address the challenge of patrolling vast maritime regions with a limited number of traditional naval assets" (FLEX 훈련은 제한된 전통 해군 자산으로 광대한 해양 지역 순찰 과제를 해결하기 위해 고급 로봇 및 자율 시스템을 배치하는 전략의 핵심이다)</p><h3>Technical Insights</h3><br>• AI 기반 드론 시스템의 자동 추적 및 목표 식별 기술이 광역 해양 감시에 획기적 전환점 제공<br>• 제한된 해군 자산으로 광대한 해역 커버리지를 확대하는 자율시스템의 운영 효율성 입증<br>• 마약 밀수, 불법 어업, 인신매매 등 초국가적 해양 범죄 대응 역량 강화를 위한 AI-드론 통합 솔루션의 실전 검증<br>• 해양 자율 시스템의 전술적 운영 확대가 IMO 규정 및 국제 해상법 준수 체계와의 조화 필요성 제기</p></div>`,
      tags: ["AI Navigation","Autonomous Systems","Maritime Security","Drone Technology"],
      link: "https://news.usni.org/2026/05/05/u-s-tests-using-drones-to-track-target-suspected-narco-boats",
      coords: [-81.8083,24.5551],
      location: "Key West, Florida"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-07
addEvents({
  "2026-05-07": [
    {
      type: "accident",
      title: "Indian Sailors Trapped in Hormuz Strait Amid Middle East Conflict - 2,000 Ships Stranded",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-07",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/2026-05-01T172007Z_982900821_RC210LAX5IPO_RTRMADP_3_IRAN-CRISIS-SAUDI-LIQUOR-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **호르무즈 해협 봉쇄로 약 2,000척의 선박이 1개월 이상 갇힘**: 중동 분쟁으로 인한 드론 및 미사일 공격으로 해협 통행 불가능, 일일 평균 138척 선박 운항 중단</p><p>• **인도 선원들의 극악한 상황**: 매일 밤 10~20발의 미사일 폭격, 식량 부족, 통신 두절 등으로 심각한 신체적·정신적 고통 경험</p><p>• **관련 선박 및 인물**: 이란 선박 Ilda 승선 선원 Tithi Chiranjeevi(28세)와 Anant Singh Chauhan 등 인도 국적 선원들</p><p>• **인명피해 및 영향**: 지금까지 최소 3명의 인도 선원 사망, 인도 정부는 약 3,000명의 선원을 안전하게 귀국 지원</p><p>• **경제적 영향**: 선원들은 직업 알선에 450,000 루피($4,800) 고금리 부채를 졌으며, 호르무즈 해협은 세계 석유·LNG 공급량의 1/5 담당</p><p>• **산업 차질**: 인도는 세계 상위 3대 선원 공급국(약 30만 명)으로, 대규모 인력 손실 및 국제 해운업 차질 초래</p><h3>Key Quotes</h3><p>• **"Around 10 to 20 missiles struck every night. No one could sleep"** (매일 밤 10~20발의 미사일이 떨어져 아무도 잠을 잘 수 없었다)</p><p>• **"Sometimes, we used to feel we won't be able to make it back home"** (때때로 우리는 집으로 돌아가지 못할 것 같은 공포를 느꼈다)</p><p>• **"It is like a rebirth for us"** (우리에게는 다시 태어나는 것과 같다)</p><h3>Technical Insights</h3><p>• **호르무즈 해협의 전략적 중요성**: 세계 석유 공급량의 20%, LNG 거래의 중요 통로로 지정학적 분쟁이 글로벌 에너지 공급 차질 직접 초래</p><p>• **해상 안전 및 국제해사법 문제**: 분쟁 지역 선박 통행의 국제해사기구(IMO) 안전 권고 미준수, SOLAS 협약상 선원 보호 의무 위반</p><p>• **해운산업 인력 위기**: 선원 공급국의 대규모 인력 공급 중단으로 국제 컨테이너선·유조선 운영 차질 예상, 선원 복리후생 및 안전 기준 재검토 필요</p><p>• **자율선박·원격운영의 시사점**: 분쟁 지역 인적 승선원 대폭 감소 필요성 대두, 무인 또는 제한된 인력 운영 선박 기술 개발 촉진 계기</p></div>`,
      tags: ["Strait of Hormuz","Ship Stranded","Middle East Conflict","Indian Seafarers"],
      link: "https://gcaptain.com/trapped-in-hormuz-indian-sailors-describe-nights-of-missiles-fear-and-hunger/",
      coords: [56.1436,26.1552],
      location: "Strait of Hormuz, Khorramshahr, Iran"
    },
    {
      type: "news",
      title: "ABS, HD Hyundai, and Anduril Industries Partner to Advance Autonomous Surface Vessels",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-07",
      image: "https://images.marinelink.com/images/maritime/w800/source-170431.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ABS, HD Hyundai, Anduril Industries이 자율운항선박 개발을 위한 양해각서(MoU)를 체결하여 선박 설계, 생산, 자율화, 분류를 포괄하는 엔드-투-엔드 솔루션 개발에 착수<br>• HD Hyundai의 조선 기술력, Anduril의 자율시스템 및 AI 역량, ABS의 선급 및 기술자문 서비스가 통합되어 자율운항선박의 안전하고 확장 가능한 도입 추진<br>• 해양산업의 미래를 정의할 자율운항 기술이 글로벌 해군 및 중형선 시장의 핵심 영역으로 부상<br>• 해당 협력을 통해 무인선박 시장에서의 기술 우월성과 신뢰성 있는 자율운항선박 개발 목표<br>• ABS의 선급 인증 과정이 무인선박 개발의 핵심 요소로서 역할 수행 예상</p><h3>Key Quotes</h3><p>• "Autonomy is set to play a defining role in the future of the maritime industry, and this collaboration reflects the importance of bringing together complementary capabilities to help advance that progress." (자율운항은 해양산업의 미래를 정의할 핵심 역할을 수행할 것이며, 이 협력은 상호 보완적 역량을 결합하여 진전을 가속화하는 것의 중요성을 보여줌)</p><p>• "The unmanned vessel sector is a defining theme in the future global naval market and an area in which we must take the lead." (무인선박 부문은 향후 글로벌 해군 시장을 정의하는 핵심 주제이며 우리가 선도해야 할 영역)</p><h3>Technical Insights</h3><p>• 자율운항선박의 안전성과 신뢰성 확보를 위해 국제선급사 ABS의 기술자문과 공식 인증 프로세스가 불가피한 요소로 작용하며, IMO 규제 프레임워크 수립 단계에서의 산업계 주도적 기여 의미<br>• HD Hyundai의 조선 생산 역량과 Anduril의 AI 기반 자율운항 알고리즘의 결합으로 군용 및 민용 자율운항선박의 상용화 시간 단축 가능성 높음<br>• 자율운항선박의 항해 안전성 확보를 위한 COLREG 준수 및 충돌회피 시스템의 고도화가 협력의 핵심 기술 과제로 부각되며, 해양 사이버보안 표준 개발도 병행 필요<br>• 글로벌 해양산업에서 자율화 기술 표준화의 선도권 확보 경쟁이 심화되고 있으며, 한국 조선업의 기술 우위 강화 및 새로운 성장 동력 창출 기회 제시</p></div>`,
      tags: ["autonomous vessels","ABS","HD Hyundai","Anduril Industries","maritime autonomy"],
      link: "https://www.marinelink.com/news/abs-hd-hyundai-anduril-industries-advance-538953",
      coords: [126.9784,37.5665],
      location: "South Korea (HD Hyundai headquarters)"
    },
    {
      type: "news",
      title: "MARTAC T38 USV Completes Record 192-Hour Autonomous Mission 400 NM Offshore California",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-07",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/t38-usv.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MARTAC의 T38 Devil Ray 무인표면선박(USV)이 캘리포니아 해안에서 8일간(192시간) 완전 자율운항 임무를 성공적으로 완료하며 무인함정 운영의 새로운 기준 수립</p><p>• 해군 함정공중전센터(NAWCWD) Point Mugu Sea Range의 Blue Water Instrumentation(BWI) 프로젝트를 통해 원양(400해리 해상) 장시간 자율운항 능력 입증</p><p>• 호위선박 없이 COLREG(국제해상충돌방지규칙 1972) 완전 준수하며 정적·동적 목표물 회피 및 스테이션 유지 성공</p><p>• Sea State 3~5 해상조건에서 평균 4노트의 저속 운항으로 장시간 체류능력 검증, 필요시 50+ 노트 고속 운항 가능 입증</p><p>• 쌍발엔진 단일엔진 운영 2일간 자율적으로 지정 해역 유지 및 임무 수행으로 추진력 감소 조건에서의 효율성 및 제어논리 확인</p><p>• 쌍동선체 설계로 인한 안정성 우위로 높은 해상도에서도 롤 감소 및 센서 데이터 수집 효율성 향상 확인</p><h3>Key Quotes</h3><p>• "The T38 safely navigated around multiple static and mobile contacts during the underway period, further demonstrating that its autonomy stack is compliant with the International Regulations for Preventing Collisions at Sea 1972 (COLREG)." (T38은 운항 중 정적·동적 목표물 주변을 안전하게 항행하며 COLREG 1972 완전 준수하는 자율운항 스택 입증)</p><p>• "A defining element of the mission was a deliberate two-day alternating single-engine operational period conducted approximately 400 nautical miles offshore...the T38 autonomously maintained its designated station, continued data collection, and executed mission objectives without degradation." (400해리 해상에서 의도적으로 단일엔진으로 2일간 운영하면서도 T38은 지정 해역 유지, 데이터 수집 및 임무 수행을 성능 저하 없이 완료)</p><h3>Technical Insights</h3><p>• **COLREG 자율운항 준수 검증**: 실제 운영 환경에서 호위선박 없이 다중 해상교통과의 회피 기동을 완전히 자율적으로 수행함으로써 IMO 자율선박 규정 개발에 중요한 데이터 제공</p><p>• **장시간 체류능력(Endurance) 기술 확보**: 192시간 운항, 해상도 상승(Sea State 5, 파고 10피트) 조건에서 안정적 운영으로 무인감시/정찰(ISR) 미션 수행능력 실증</p><p>• **쌍동선체 설계의 우수성**: 높은 해상도에서 롤 감소로 센서 데이터 품질 유지, 장시간 자율운항 시 인간 개입 불필요성 증명 → 무인함정 플랫폼 설계 표준화 기여</p><p>• **엔진 효율성 및 추진 제어**: 단일엔진 운영으로 연료 효율성 검증하면서도 필요시 고속운항(50+노트) 전환 가능 → 미션 요구사항에 따른 동적 추진력 관리 기술 성숙도 향상</p></div>`,
      tags: ["Autonomous USV","T38 Devil Ray","COLREG Compliance","Naval Testing"],
      link: "https://www.navalnews.com/naval-news/2026/05/martac-t38-usv-executes-192-hour-autonomous-mission-400-nm-offshore/",
      coords: [-119.5,34.7],
      location: "California Coast, Pacific Ocean"
    }
  ]
});

// Auto-collected: 2025-06-06
addEvents({
  "2025-06-06": [
    {
      type: "accident",
      title: "Grounding and subsequent loss of fishing vessel Crystal Stream (LH 147)",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-05-07",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사고 개요**: 2025년 6월 6일 자정 직후, 영국 등록 새우 트롤어 Crystal Stream이 스코틀랜드 Loch Fyne의 Barmore Island 근처 수중 장애물과 충돌하여 의도적으로 해변에 좌초됨</p><p>• **기선사 피로도**: 선장(유일한 당직자)이 사전 주간의 과도한 근무 일정으로 인한 높은 피로도 상태에서 사고 발생</p><p>• **부실한 안전관리**: 선박의 안전관리 체계가 미흡하여 항해 관행, 위험 평가 및 승무원 의료 적합성 검토 등 핵심 운영 분야를 다루지 못함</p><p>• **건조한 총손실**: Crystal Stream은 건조 총손실로 선언되어 이후 해체 및 현장에서 제거됨</p><p>• **승무원 훈련 부족**: 승무원이 승선 시 배상 교육을 받지 못했으며, 정기적인 훈련 부재로 생명 구조 장비 및 긴급 절차에 대한 숙지도가 낮았음</p><p>• **권고사항**: M & I MacKinnon Ltd에 대해 안전관리 체계 개선, 당직 절차 구현, 함대 전역 피로 관리 시스템 도입 권고</p><h3>Key Quotes</h3><p>• "the skipper, who was the lone watchkeeper at the time of the grounding, was highly likely fatigued due to their schedule in the week before the accident" (사고 발생 당시 유일한 당직자였던 선장이 사전 주간의 근무 일정으로 인해 상당히 피로 상태에 있었을 가능성이 높음)</p><p>• "the vessel's safety management was inadequate, failing to address key operational areas including navigational practices, risk assessments and crew medical fitness" (선박의 안전관리가 부실하여 항해 관행, 위험 평가 및 승무원 의료 적합성 등 핵심 운영 분야를 다루지 못함)</p><p>• "Crystal Stream's crew did not receive an induction on joining and a lack of regular drills resulted in them being unfamiliar with the vessel's lifesaving equipment and emergency procedures" (Crystal Stream의 승무원이 승선 시 배상 교육을 받지 못했으며, 정기적인 훈련 부재로 생명 구조 장비 및 긴급 절차에 익숙하지 않음)</p><h3>Technical Insights</h3><p>• **당직 관리 및 피로도 대응**: 어업 선박의 당직 체계에서 단독 당직자의 피로도는 중대한 안전 위협이며, 해양청(Maritime and Coastguard Agency) 지침에 부합한 당직 절차 도입이 필수적</p><p>• **안전관리 체계 미흡**: Fishing Safety Management Code와 연계된 체계적인 안전관리 시스템 부재가 항해 실무, 위험 평가, 승무원 의료 검사 등 다층적 안전 관리 실패로 이어짐</p><p>• **승무원 훈련 및 대응 능력**: SOLAS 규정에 따른 정기적인 비상훈련 및 배상 교육 부재로 위기 상황에서 승무원의 대응 능력 저하 및 생명 구조 장비 미숙 운용 초래</p><p>• **소규모 선박 안전 규제 강화**: 중소 어업 선박의 안전관리 체계가 규제적·기술적으로 미흡한 현황을 반영하여 함대 전역 피로 관리 및 안전 문화 개선이 산업 차원의 과제</p></div>`,
      tags: ["grounding","fishing vessel","crew fatigue","safety management","constructive total loss"],
      link: "https://www.gov.uk/maib-reports/grounding-and-subsequent-loss-of-the-fishing-vessel-crystal-stream-lh-147",
      coords: [-4.96,56.24],
      location: "Barmore Island, Loch Fyne, Scotland"
    }
  ]
});

// Auto-collected: 2025-01-25
addEvents({
  "2025-01-25": [
    {
      type: "accident",
      title: "Substitute Engine Parts Caused Fire on UK Survey Vessel Kommandor Susan",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-07",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/gardli.jpg?image-crop-positioner-ts=1778137879",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사고 개요**: 영국 해역조사선 Kommandor Susan호가 2025년 1월 25일 스코틀랜드 포스만에서 해상 시운전 중 디젤 발전기 엔진 고장으로 인한 엔진실 화재 및 전력 차단 발생</p><p>• **근본 원인**: 2019년 정비 시 장착된 정품이 아닌 대체 부품으로 인한 베어링의 조기 마모가 화재의 직접적인 원인이며, 대체 부품은 원제조업체(OEM) 미승인 제품으로 재질 접합력이 낮음</p><p>• **선박 정보**: 소유사 Gardline Shipping Limited 소유, 1999년 건조, 길이 83.7m의 영국 국적 해역조사선</p><p>• **사고 영향**: 14명의 선원이 탑승 중이었으나 인명피해 없음, 전력 차단으로 추진력 상실 및 앵커 작동 불가로 표류하다가 제한된 추진력 복구 후 라이스 항구로 귀항</p><p>• **조사 결과**: 전 선주인 Hays Ships Limited의 부실한 감시로 대체 부품 사용 사실이 발견되지 않았으며, 선박의 정전 위험을 고려하지 않은 앵커링 절차도 문제로 지적됨</p><p>• **후속 조치**: 현 소유사 Gardline Shipping이 해당 엔진 재구축 및 모든 발전기 엔진을 OEM 부품으로 정비 완료</p><h3>Key Quotes</h3><p>• "The engine failure was caused by premature wear of bearings fitted during a major overhaul in 2019. These components were not approved by the engine original equipment manufacturer (OEM) and exhibited weaker material bonding than genuine parts." <br>(2019년 정비 시 장착된 미승인 대체 부품의 약한 재질 접합력으로 베어링이 조기에 마모되어 엔진 고장 발생)</p><p>• "The extended service intervals applied to the engines were valid only for OEM components, making the use of substitute parts a critical factor in the failure."<br>(확장된 정비 주기는 정품 부품에만 적용되므로 대체 부품 사용이 고장의 치명적 요인)</p><p>• "Hays Ships Limited, the former owner of the vessel, had minimal oversight of the overhaul process and assumed that OEM parts were used, which meant that the presence of substitute components remained undiscovered."<br>(전 선주의 부실한 감시로 대체 부품 사용 사실이 적발되지 않아 이후 선주에게 정보가 전달되지 않음)</p><h3>Technical Insights</h3><p>• **정품 부품 사용의 중요성**: 선박 엔진의 정비 시 반드시 OEM 인증 부품을 사용해야 하며, 대체 부품 사용 시 제조사가 정한 정비 주기의 신뢰성이 상실되는 심각한 결함 발생 가능</p><p>• **선주의 감시 책임**: 선박 정비 과정에 대한 철저한 문서화 및 감시 체계가 필수적이며, 선박 소유권 변경 시 정비 이력에 대한 명확한 정보 전달 의무화 필요</p><p>• **비상 상황 대비**: 전력 차단 시나리오를 반영한 앵커링 절차 수정이 필수이며, 발전기 다중화 및 자동 백업 시스템 강화 등 선박 안전 설계의 선제적 개선 필요</p><p>• **해양사고 예방**: MAIB 조사 결과는 IMO 안전 기준 준수 및 정기적인 감시 체계의 중요성을 재확인시키며, 해운사 및 정비소의 품질 관리 강화가 해양 안전 문화 정착의 핵심 요소</p></div>`,
      tags: ["Engine Fire","Diesel Generator Failure","Investigation Report","MAIB"],
      link: "https://www.offshore-energy.biz/substitute-engine-parts-cause-of-fire-on-board-uk-survey-vessel-report-says/",
      coords: [-3.1857,55.9533],
      location: "Firth of Forth, Scotland"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-08
addEvents({
  "2026-05-08": [
    {
      type: "news",
      title: "ABS, HD Hyundai & Anduril Industries Partner to Advance Autonomous Surface Vessels",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-05-08",
      image: "https://maritime-executive.com/media/images/article/0b569a95bdd744bdb692a5558b736b2f.f9dfd7.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ABS, HD Hyundai, Anduril Industries이 자율운항선박(ASV) 개발을 위한 양해각서(MOU)를 체결하여 선박설계, 생산, 자율항법, 분류 등 전 분야를 아우르는 통합 솔루션 개발을 추진 중</p><p>• HD Hyundai의 조선 기술력, Anduril의 자율시스템 및 AI 기술, ABS의 선급/인증 전문성을 결합하여 산업 표준화 추구</p><p>• 자율운항선박 시장이 향후 해운산업과 해군 시장의 핵심 성장 영역으로 평가되며, 안전하고 확장 가능한 상용화 모델 개발 목표</p><p>• ABS는 자율운항 및 원격조종 기술에 대한 기술기준(Requirements for Autonomous and Remote Control Functions) 제공</p><p>• 이번 협력은 규제 프레임워크 정립과 국제 표준화 선도를 통해 글로벌 무인선박 시장 확보 전략</p><h3>Key Quotes</h3><p>• "Autonomy is set to play a defining role in the future of the maritime industry, and this collaboration reflects the importance of bringing together complementary capabilities to help advance that progress." (자율운항 기술이 미래 해운산업의 핵심 역할을 할 것이며, 각 기관의 보완적 역량을 결합하는 것이 중요함을 시사)</p><p>• "The unmanned vessel sector is a defining theme in the future global naval market and an area in which we must take the lead." (무인선박 부문이 향후 글로벌 해군 시장의 결정적 주제이며 리더십 확보 필요성 강조)</p><h3>Technical Insights</h3><p>• **COLREG 및 자율운항 규제 표준화**: ABS의 자율운항 및 원격조종 기술 기준(Requirements) 제시로 IMO 국제해상충돌방지규칙(COLREG) 준수 및 분류기준 통일화 추진</p><p>• **AI/머신러닝 기반 의사결정 시스템**: Anduril의 자율시스템과 AI 기술이 선박의 항로계획, 충돌회피, 기상 대응 등 복합적 해상 환경에서의 의사결정 자동화 실현</p><p>• **조선업의 디지털 전환**: HD Hyundai의 조선 생산 기술과 자율운항 기술의 통합으로 건조 단계부터 자율성 고려한 선박 설계 혁신 가능</p><p>• **선급기관의 역할 강화**: ABS 등 선급기관의 자율선박 인증/검증 권한 확대로 해운산업 신뢰성 확보 및 보험/금융 시장 활성화 기대</p></div>`,
      tags: ["Autonomous Vessels","HD Hyundai","ABS","Anduril Industries","Maritime Technology"],
      link: "https://maritime-executive.com/article/abs-hd-hyundai-anduril-industries-to-advance-autonomous-surface-vessels",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2026-05-07
addEvents({
  "2026-05-07": [
    {
      type: "event",
      title: "STM Unveils TENGİZ XLUUV at SAHA EXPO 2026",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-07",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/TENGIZ_3.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• STM(터키 국방기술사)이 SAHA EXPO 2026에서 최대급 무인수중 차량(XLUUV) TENGİZ를 공식 공개함</p><p>• TENGİZ는 400미터 이상의 작동 심도와 20일 이상의 항속 시간을 보유한 자율형 무인 수중체계</p><p>• 어뢰 발사, 기뢰 전개, ISR/ASW 임무, 전자전 등 전통 잠수함이 수행하는 거의 모든 임무 수행 가능</p><p>• STM 경영진은 해양 방위 영역에서의 기술적 우위 확보와 인명 손실 제거를 강조</p><p>• NETA 300 자율무인 잠수정 후속 개발이며 모함(mothership) 개념으로 소형 무인체계 탑재 가능</p><h3>Key Quotes</h3><p>• "TENGİZ stands out as the largest and most capable platform in this lineup. It is engineered to execute nearly all critical missions typically performed by conventional submarines—ranging from intelligence and mine warfare to torpedo engagement—all while operating autonomously and eliminating risks to human personnel." <br>(TENGİZ는 정보수집부터 기뢰전, 어뢰 공격까지 기존 잠수함의 거의 모든 임무를 자율적으로 수행하면서 인명 위험을 제거함)</p><p>• "Our journey in autonomous unmanned underwater vehicles began with the high-precision STM NETA 300. Following the successful completion of NETA 300's sea trials, we are now expanding this family with new medium and large-class members."<br>(자율형 무인 수중체계 개발은 NETA 300에서 시작되었으며, 현재 중형과 대형급 확대 개발 중)</p><h3>Technical Insights</h3><p>• **자율 잠수함의 전술적 혁신**: TENGİZ는 인명손실 없이 ISR, ASW, 기뢰전, 어뢰 공격 등을 자율로 수행하여 해양 작전 개념 전환</p><p>• **네트워크 중심 전술 통합**: ADVENT C2 시스템과 SATCOM을 통해 네트워크-중심 전쟁 개념에 완벽 통합되어 실시간 정보 공유 및 협동 작전 가능</p><p>• **국방 자율시스템의 윤리/규제 쟁점**: 무인체계의 공격형 임무(어뢰, 기뢰) 자율화는 IMO/국제해양법의 자율무기 규제 논의 심화 필요</p><p>• **해양방위 산업의 기술 고도화**: 40ft ISO 컨테이너 호환성과 모함 개념은 전략적 기동성 향상으로 소국의 해양 방어력 비약적 증대 가능</p></div>`,
      tags: ["Autonomous Underwater Vehicle","XLUUV","Naval Defense","SAHA EXPO 2026","Unmanned Systems"],
      link: "https://www.navalnews.com/naval-news/2026/05/stm-unveils-tengiz-xluuv-at-saha-expo-2026/",
      coords: [32.8597,39.9334],
      location: "Ankara, Turkey (SAHA EXPO)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-08
addEvents({
  "2026-05-08": [
    {
      type: "accident",
      title: "US and Iran Clash Near Strait of Hormuz Amid Ceasefire Talks",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-08",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/Strait-of-Hormuz-patrol.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국과 이란이 호르무즈 해협 근처에서 군사 충돌 발생 - 호르무즈를 통과하는 미국 구축함 3척(USS Truxtun, USS Rafael Peralta, USS Mason)을 대상으로 한 공격에 대응하는 형태로 미군이 이란의 미사일 및 드론 발사 시설을 공격함</p><p>• 전략적 해역의 자유항행 위협 - 세계 해상유의 약 20%가 통과하는 호르무즈 해협에서의 갈등으로 글로벌 에너지 공급망 및 해상 교통 안전에 직접적 영향</p><p>• 휴전 협상 진행 중 군사 충돌 심화 - 1개월간의 휴전이 유지 중이나 미-이란 간 평화협상 타결을 앞두고 군사적 긴장이 고조되고 있는 상황</p><p>• 글로벌 에너지 시장 파장 - 브렌트유 선물 1.3% 상승, 유럽 천연가스 3.8% 상승 등 국제 에너지 가격의 변동성 심화</p><p>• 상선 통항 안전성 악화 - 이란이 미국의 유조선 2척 공격 주장, 민간 해역에서의 군사 작전으로 상업 선박의 호르무즈 해협 통항 위험도 증가</p><h3>Key Quotes</h3><p>• "Just like we knocked them out again today, we'll knock them out a lot harder, and a lot more violently, in the future, if they don't get their Deal signed, FAST" (만약 이란이 빠르게 협상에 서명하지 않으면, 미국은 향후 더욱 강하고 폭력적으로 대응하겠다는 의도 표현)</p><p>• "The US does not seek escalation but remains positioned and ready to protect American forces" (미국은 군사 escalation을 추구하지 않지만, 미군 보호를 위해 항시 전투 준비 상태 유지)</p><h3>Technical Insights</h3><p>• **호르무즈 해협의 전략적 중요성과 해상교통 안전** - 세계 석유 및 LNG의 약 20%가 통과하는 국제 해로에서의 군사 충돌은 해상 운송 보험료 인상, 회피 항로 이용 증가 등 해운업 전반에 부정적 영향</p><p>• **민군 혼재 해역에서의 충돌 위험 증대** - 상업 선박과 군함이 동일 해역을 통과하는 상황에서 오인 공격, 피발적 충돌 가능성 증가로 해상 안전 규칙(COLREG) 준수의 중요성 부각</p><p>• **IMO 및 국제 해사기구의 역할 강조 필요** - 지역 분쟁이 국제 해상 교통에 미치는 영향을 고려하여 중립 항로 설정, 통항 보호 메커니즘 강화 등 글로벌 해상 안전 체계의 보강 필요</p></div>`,
      tags: ["US-Iran Conflict","Strait of Hormuz","Military Clash","Maritime Security"],
      link: "https://gcaptain.com/us-iran-clash-near-hormuz-as-response-on-proposed-deal-awaited/",
      coords: [56.2482,26.5547],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Suspected Large Oil Spill Detected Near Iran's Kharg Island Export Hub",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-08",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockimagebank4u-170458.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란 주요 석유 수출 허브인 카르그 섬 인근에서 약 45㎢ 규모의 대형 유출로 추정되는 기름 띠가 위성 이미지에 포착됨<br>• 코페르니쿠스 센티널 위성(1, 2, 3호)에서 5월 6-8일 촬영한 영상에서 회색과 흰색의 기름 띠가 확인됨<br>• 분쟁환경관측소(CEO) 연구원 Leon Moreland와 데이터 데스크의 Louis Goddard가 유출 상황 분석 및 확인<br>• 유출의 원인과 출발지점 현재 불명확하며, 추가 활성 유출 증거는 5월 8일 이미지에서 미확인<br>• 카르그 섬은 이란 석유 수출의 90%를 담당하는 주요 허브이며, 대부분 중국으로 향함<br>• 미국의 해상 봉쇄와 이란-미국 간 군사 충돌로 인해 페르시아만 내 약 수백 척의 선박이 갇혀있으며 전 지구적 원유 공급에 심각한 차질 초래</p><h3>Key Quotes</h3><p>• "The slick appears visually consistent with oil" (띠의 시각적 특성이 기름과 일치하는 것으로 보임) - Leon Moreland, Conflict and Environment Observatory</p><p>• "potentially the largest to occur since the start of the U.S.-Israel war against Iran 70 days ago" (지난 70일간 미국-이스라엘 대이란 전쟁 이후 발생한 사건 중 가장 큰 규모로 추정) - Louis Goddard, Data Desk</p><p>• "Kharg Island, where U.S. forces said they had destroyed military targets earlier in the war, is the hub for 90% of Iran's oil exports" (미군이 전쟁 초반에 군사 목표를 파괴했다고 밝힌 카르그 섬은 이란 석유 수출량의 90%를 담당하는 허브) - Article context</p><h3>Technical Insights</h3><p>• **위성 감지 기술의 중요성**: Copernicus Sentinel 다중 위성(SAR, 광학 이미지, 다중분광)의 통합 활용으로 넓은 해역에서 정확한 유출 규모 파악 가능하며, 실시간 환경 모니터링 체계의 필수성 입증</p><p>• **해역 안전성 및 환경 영향**: 카르그 섬 근처 유출로 인한 해양 생태계 오염, 해상 교통 위험 증가, 그리고 미군의 해상 봉쇄로 인한 긴급 대응 제약 등 복합적 해사 위험 상황 발생</p><p>• **국제해사기구(IMO) 규제 관점**: 전쟁 상황에서의 불가항력적 해양 오염 사고 처리, MARPOL 협약 이행 불가능성 등 국제해사법의 회색지대 문제 대두</p><p>• **해운산업 연쇄 영향**: 페르시아만 내 300+ 선박 억류, 원유 공급 차질로 인한 글로벌 유가 상승 및 LNG 공급 부족 심화로 국제 해상 무역 체계 마비 수준의 영향 확대</p></div>`,
      tags: ["Oil Spill","Environmental Incident","Kharg Island","Iran","Satellite Detection","Maritime Accident"],
      link: "https://www.marinelink.com/news/suspected-oil-spill-visible-satellite-538985",
      coords: [49.12,29.25],
      location: "Kharg Island, Persian Gulf, Iran"
    },
    {
      type: "news",
      title: "ABS, HD Hyundai and Anduril partner on autonomous surface vessels",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-08",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/ABS-HD-Hyundai-and-Anduril-partner-on-autonomous-surface-vessels.jpg?image-crop-positioner-ts=1778236526",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ABS(미국선급), HD현대, Anduril Industries가 자율운항선박 개발 및 인증 프레임워크 구축을 위한 양해각서(MoU) 체결</p><p>• 선박 설계, 생산, 자율운항 시스템, 선급 인증에 이르는 end-to-end 통합 솔루션 개발 추진</p><p>• HD현대의 조선 역량, ABS의 선급 및 인증 전문성, Anduril의 자율운항 및 AI 기술을 결합한 협력</p><p>• 무인선박의 안전성, 실용성, 확장성 있는 도입을 위한 협력 체계 구축</p><p>• 해양산업의 미래 발전 방향으로 자율운항 기술의 중요성 강조</p><h3>Key Quotes</h3><p>• "We have high expectations for the certification process for the unmanned vessel to be developed by HD Hyundai and Anduril through our collaboration with ABS." (HD현대와 Anduril이 ABS와 협력하여 개발하는 무인선박의 인증 절차에 높은 기대를 가지고 있다)</p><p>• "Autonomy is set to play a defining role in the future of the maritime industry, and this collaboration reflects the importance of bringing together complementary capabilities to help advance that progress." (자율운항은 해양산업의 미래에 결정적 역할을 할 것이며, 이번 협력은 상호 보완적 역량을 결합하여 진전을 도모하는 것의 중요성을 반영한다)</p><h3>Technical Insights</h3><p>• **선급 인증 체계 구축**: ABS의 선급 인증 전문성과 HD현대의 조선 기술, Anduril의 자율운항 시스템이 결합되어 무인선박에 대한 국제적 인증 기준 마련 가능</p><p>• **AI 및 자율네비게이션 기술**: Anduril의 AI 및 자율운항 기술이 상용선박에 적용되면서 COLREG 준수, 충돌회피, 경로 최적화 등 해양법규 준응 문제 해결 필수</p><p>• **산업 표준화 영향**: 글로벌 선급사인 ABS가 자율선박 인증 프레임워크에 참여함으로써 IMO 규제 선제 대응 및 향후 국제 해양자율운항 표준 수립에 영향력 행사</p><p>• **조선 경쟁력 강화**: 한국 조선소의 첨단 기술과 국제 선급사 협력으로 차세대 자율운항선박 시장 선도 가능성 확대</p></div>`,
      tags: ["Autonomous Surface Vessels","Classification","ABS","HD Hyundai","Anduril Industries"],
      link: "https://www.offshore-energy.biz/abs-hd-hyundai-and-anduril-partner-on-autonomous-surface-vessels/",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2025-08-10
addEvents({
  "2025-08-10": [
    {
      type: "accident",
      title: "Alaska Mega-Tsunami from Tracy Arm Landslide Raises Cruise Ship Safety Concerns",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2025-08-10",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/Alaska-mega-tsunami.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **거대 산사태 발생**: 2025년 8월 10일 알래스카 Tracy Arm 피요르드에서 6,400만 입방미터의 암석이 붕괴되어 481미터 높이의 메가쓰나미 발생</p><p>• **운항 선박 안전 위협**: 인기 있는 크루즈 관광지인 Tracy Arm에서 발생한 사건으로 선박 및 관광객의 직접적인 해양안전 위협 확인</p><p>• **기후변화와의 연관성**: 빙하 후퇴로 인한 산악사면 불안정화가 원인이며, 향후 유사 사건 발생 가능성 높음</p><p>• **조기 감지 가능성**: 사태 발생 전 수일간의 미소지진 활동 감지로 향후 붕괴 사전 예측 가능성 제시</p><p>• **운 좋은 피해 회피**: 새벽 5시 26분 발생으로 인해 인명피해 및 선박 피해 없었으나, 전문가는 "다음엔 운이 없을 수 있다"며 경고</p><p>• **역사적 맥락**: 1958년 Lituya Bay 사건(530m 최대 파고)과 유사하나, 이번은 대규모 선박 통항 지역에서 발생한 점에서 심각성 증대</p><h3>Key Quotes</h3><p>• "The fact that the landslide occurred this early in the morning was unbelievably lucky. Next time — and there will be a next time — we may not be so lucky," (산사태가 이른 아침에 발생한 것은 믿기 어려울 정도로 운이 좋았다. 다음번에는—그리고 분명 다시 일어날 것이다—우리가 그렇게 운이 좋지 않을 수 있다)</p><p>• "Those same features can amplify landslide-generated tsunamis, creating extreme local hazards with little warning." (그 같은 지형 특성들이 산사태 유발 쓰나미를 증폭시켜 거의 경고 없이 극단적 지역 위험을 초래할 수 있다)</p><h3>Technical Insights</h3><p>• **조기 경보 시스템 개발 필요**: 미소지진 활동 감지를 통한 산사태 예측 시스템 구축으로 크루즈선 및 선박의 사전 회피 기동 가능성 증대</p><p>• **기후변화와 해상 안전의 연관성**: 빙하 후퇴에 따른 지형 불안정화가 해상교통 안전에 직접 영향을 미치는 새로운 위협 요소로 대두</p><p>• **피요르드 해역 항해 규제 강화**: 빙하 퇴적 지역의 수심 변화, 표류 빙산, 산사태 위험 등을 종합적으로 고려한 항해 제한 구역 설정 및 선박 운영 지침 수립 필요</p><p>• **국제해사기구(IMO) 논의 대상화**: 기후변화로 인한 자연재해 기반 해상안전 위험이 SOLAS, MARPOL 등 국제 해사규약 개정 시 고려되어야 할 새로운 위험 카테고리로 인식</p></div>`,
      tags: ["landslide","tsunami","glacier fjord","cruise ships","climate change","maritime safety"],
      link: "https://gcaptain.com/alaska-mega-tsunami-raises-alarm-for-cruise-ships-in-glacier-fjords/",
      coords: [-123.2,57.5],
      location: "Tracy Arm Fjord, Alaska (near Juneau)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-08
addEvents({
  "2026-05-08": [
    {
      type: "news",
      title: "Ukrainian Naval Drone with Explosives Found in Greek Island Cave",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-08",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockpeter-170456.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나 제조 MAGURA V3형 해상드론이 그리스 이오니아해 레프카다 섬의 동굴에서 발견됨<br>• 어선 조업 중 목격된 무인 수상 차량(USV)에는 3개의 기폭장치와 폭발물이 장착된 상태로 확인됨<br>• 그리스 군부와 보안당국이 드론의 기술적 특성과 목적을 파악하기 위한 조사 진행 중<br>• 러시아 석유 운반선 타격 가능성과 신호 두절로 인한 표류 가능성 등 두 가지 시나리오 검토 중<br>• 폭발물 제거 전문가팀이 배터리 제거 등 해체 작업 진행, 해양안보상 중요한 사건으로 평가됨</p><h3>Key Quotes</h3><p>• "Preliminary findings indicate the MAGURA V3-type sea drone was fitted with three detonators" (MAGURA V3형 해상드론에 3개의 기폭장치가 장착되어 있는 것으로 예상됨)</p><p>• "Investigators are examining whether the drone was intended to target ships carrying Russian oil in the wider Mediterranean" (조사관들은 이 드론이 지중해 지역에서 러시아 석유 운반 선박을 표적으로 하려는 의도가 있었는지 검토 중)</p><p>• "The vessel may have been part of a shipment of such drones or could have drifted off course after a signal failure" (이 드론은 동종 드론 적재물의 일부이거나 신호 두절 후 표류했을 가능성이 있음)</p><h3>Technical Insights</h3><p>• **무인 수상 차량(USV) 군사 활용의 경계**: MAGURA V3는 우크라이나 자체 개발 해상드론으로 폭발물 탑재가 가능한 플랫폼으로, 자율 항법 기술을 갖춘 해양 무기 시스템의 새로운 위협으로 인식됨</p><p>• **신호 두절과 항법 시스템의 취약점**: 신호 상실로 인한 표류 발생 가능성은 해상 자율 시스템의 GNSS/통신 의존성과 백업 항법 시스템 필요성을 강조</p><p>• **해양안보 및 국제법 이슈**: 무장 USV의 국제해역 운용은 SOLAS, COLREG, UN해양법협약 등 해양 규제 체계에 새로운 법적·안보 문제를 야기하며, IMO의 자율선박 규제 논의와 맞물려 중요한 사례로 작용</p></div>`,
      tags: ["autonomous vessels","unmanned surface vehicle","maritime security","Ukraine"],
      link: "https://www.marinelink.com/news/fishermen-find-ukrainianmade-naval-drone-538983",
      coords: [20.7529,38.8332],
      location: "Lefkada Island, Ionian Sea, Greece"
    },
    {
      type: "news",
      title: "Mystery Ukrainian USV Discovered in Greek Sea Cave by Fishermen",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-08",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/Lefkada-drone-Ukraine.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 그리스 어민들이 레프카다 섬 인근 해상동굴에서 5미터 규모의 무인수상선(USV)을 발견하였으며, 이는 우크라이나와 연관된 것으로 추정됨</p><p>• 해당 무인선은 여전히 엔진이 작동 중인 상태로 발견되었으며, 3대의 카메라와 스타링크 안테나, 여러 개의 밀폐된 구획을 장착하고 있었음</p><p>• 그리스 해안경비대가 회수하여 조사 중이며, 폭발물 탑재 가능성이 제기되고 있음</p><p>• 발견 위치가 최근 러시아 섀도우 플릿 유조선들이 공격받은 지역 근처의 해상 통로에 위치</p><p>• 무인선 장비 구성(FLIR, 장거리 통신장비)과 의도적인 숨김 장소는 감시 및 공격 목적의 군사용 무기체계로 추정됨</p><h3>Key Quotes</h3><p>• "They were fishing near the lighthouse and had their nets in the water when they suddenly noticed the vessel, around five to six meters long, circling repeatedly in the area."<br>(어민들이 등대 근처에서 조업 중 약 5~6미터 길이의 무인선이 같은 지역을 반복적으로 선회하는 것을 발견함)</p><p>• "It was fitted with three cameras on the bow and appeared to have a Starlink antenna. It had several covered compartments on the sides, but nobody attempted to open them."<br>(선수부에 3대의 카메라와 스타링크 안테나가 장착되어 있었으며, 측면에 여러 밀폐된 구획이 있었음)</p><p>• "once it entered the port, the engine started up again, and because it was tied up, it became dangerous."<br>(항구 진입 후 엔진이 재시동되어 줄로 묶인 상태에서 위험한 상황 발생)</p><h3>Technical Insights</h3><p>• **자율운항 무기체계의 발전**: 고급 센서(FLIR), 위성통신(Starlink), 자동항해 기능을 갖춘 소형 USV가 실제 전장에서 운용되고 있으며, 이는 해상 드론 기술의 실용화 수준을 시사</p><p>• **해상 감시 및 공격 능력**: 다중 카메라 시스템과 밀폐된 화물칸 구성으로 보아 감시정찰 및 대함 공격(예: 자폭 드론) 목적의 복합 무기체계로 평가됨</p><p>• **국제해사법 및 IMO 규제의 공백**: 무인 수상선의 불법 운용, 국제해역 진입, 폭발물 탑재 등에 대한 규제 체계가 미비하며, 향후 자율무기체계 규제 강화 필요</p><p>• **민간 해상 보안 위협 증가**: 상업용 선박 근처에서 군사용 드론이 활동함으로써 일반 해운업의 보안 위협이 증가하고 있으며, 해상교통 안전 체계 개선 시급</p></div>`,
      tags: ["USV","Ukraine","Mediterranean","Unmanned Vessel","Greece","Maritime Security"],
      link: "https://www.navalnews.com/naval-news/2026/05/mystery-usv-possibly-linked-to-ukraine-found-by-greek-fishermen/",
      coords: [20.65,38.77],
      location: "Lefkada Island, Greece (Ionian Sea)"
    },
    {
      type: "news",
      title: "U.S. Navy Awards $37 Million Contract to Huntington Ingalls for Lionfish Underwater Drone Production",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-05-08",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 해군이 Huntington Ingalls Industries(HII)의 Lionfish 무인 수중 드론 생산 지속을 위해 약 3,690만 달러 규모의 계약 수정안을 발주<br>• Naval Sea Systems Command(NAVSEA)가 기존 계약에 대한 옵션을 행사하여 2027년 5월까지 납품 일정 확정<br>• HII의 Unmanned Systems 부서가 해당 계약을 수주하여 수중 무인 시스템 분야에서의 기술 역량 강화<br>• Lionfish 드론의 지속적 생산은 해군의 수중 감시 및 정찰 능력 강화를 의미<br>• 방위산업체의 자율 수중 운영 기술 개발이 차세대 해양 보안 인프라 구축에 중요한 역할</p><h3>Key Quotes</h3><p>• "Naval Sea Systems Command in Washington awarded the $36.9 million modification to HII's Unmanned Systems division on the existing contract" (워싱턴의 해군함정시스템사령부가 기존 계약에 대해 HII의 무인 시스템 부서에 3,690만 달러 규모의 계약 수정안 발주)</p><h3>Technical Insights</h3><p>• 자율 수중 드론의 지속적 생산 계약은 해군의 수중 감시, 광산 탐지, 정보 수집 능력 확대를 반영하며 차세대 해양 작전 개념의 구현 추진<br>• HII의 Lionfish 플랫폼은 무인 시스템의 신뢰성과 운영 효율성을 증명하여 국방부의 자율화 전략 추진에 기여<br>• 방위산업 계약의 연장은 수중 로봇공학 및 AI 기반 자율 항법 기술 개발의 지속적 투자를 의미하며, 이는 해상 도메인 인식(Maritime Domain Awareness) 향상에 기여</p></div>`,
      tags: ["Autonomous Underwater Vehicle","Lionfish Drone","U.S. Navy","Defense Procurement"],
      link: "https://defence-blog.com/u-s-navy-pays-37m-to-keep-lionfish-underwater-drone-in-production/",
      coords: [-77.0369,38.8951],
      location: "Washington, D.C."
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-08
addEvents({
  "2026-05-08": [
    {
      type: "news",
      title: "MISC Group Adds Two New LNG Carriers to Fleet in Partnership with SeaRiver Maritime",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-08",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/Seri-Dian-and-Seri-Dayang-LNG-carriers-Source-MISC.jpg?image-crop-positioner-ts=1778234970",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MISC Group (Petronas 자회사)이 Hanwha Ocean에서 건조한 174,000 cbm급 LNG 운반선 2척 "Seri Dian"과 "Seri Dayang"의 명명식을 2026년 5월 7일 개최하였으며, 이는 ExxonMobil 자회사인 SeaRiver Maritime과의 장기 용선 계약의 일환임</p><p>• 두 선박은 ICER(배기 재순환 지능형 제어) 시스템과 개선된 화물 보유 시스템을 포함한 에너지 효율적 기술로 장비되어 있으며, Boil-off rate 감소로 운영 효율성 및 안전성 강화</p><p>• SeaRiver Maritime과의 협력 강화로 MISC의 장기 용선 LNG 운반선이 총 4척으로 증가하였으며, 전체 LNG 선대는 32척으로 확대되어 글로벌 선급사 중 최고 운영사 지위 강화</p><p>• 프로젝트 건조 과정에서 누적 200만 안전 작업시간 달성 및 zero lost time injury 기록으로 선원 안전 및 운영 우수성 입증</p><p>• 브루나이 해역 천연가스 개발 프로젝트용 부유식 생산설비(FPU) 운영 및 유지보수 계약 확보로 에너지 솔루션 사업 다각화</p><h3>Key Quotes</h3><p>• "The naming of Seri Dian and Seri Dayang marks another important step forward in how we are Delivering Progress at MISC driven by disciplined growth and operational excellence in delivering energy safely, reliably and efficiently." <br>(MISC가 안전하고 신뢰할 수 있는 에너지 공급을 위한 규율 있는 성장과 운영 우수성을 통해 지속적인 진전을 이루고 있음을 시사)</p><p>• "Built on a strong foundation of trust and performance, it demonstrates how purposeful collaboration enables us to turn shared ambition into meaningful action."<br>(신뢰와 성과에 기반한 협력이 공동의 목표를 실질적 성과로 전환할 수 있음을 강조)</p><h3>Technical Insights</h3><p>• LNG 운반선의 에너지 효율 기술(ICER 시스템 및 개선된 화물 보유 시스템)은 IMO 2030/2050 탄소 감축 규제 대응의 실질적 사례로, 향후 신조선의 핵심 기술 표준이 될 가능성이 높음</p><p>• 대형 LNG 운반선의 안전 성과(200만 안전 작업시간, zero lost time injury)는 현대적 설계와 자동화 기술이 선원 안전 및 운영 효율성을 동시에 달성할 수 있음을 증명하는 사례로, 해운업계의 안전 문화 개선 추진력 역할</p><p>• MISC의 지속적 LNG 선대 확보(32척 규모)는 전 지구적 LNG 수요 증가와 에너지 전환 시대에서 청정연료 운송 인프라의 중요성을 반영하며, 아시아 지역 해운사의 경쟁력 강화 전략으로 평가됨</p></div>`,
      tags: ["LNG Carriers","MISC Group","Fleet Expansion","Maritime Technology"],
      link: "https://www.offshore-energy.biz/lng-vessel-pair-enriches-miscs-fleet/",
      coords: [101.6964,3.139],
      location: "Malaysia"
    },
    {
      type: "news",
      title: "We Work the Waterways Launches Corn Belt Ports Rural Logistics & Maritime Training Consortium",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-08",
      image: "https://images.marinelink.com/images/maritime/w800/waterways-170461.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **콘벨트 항만 내륙 해운 교육 컨소시엄 공식 출범**: We Work the Waterways(WWW)가 주도하는 4개 주(아이오와, 일리노이, 위스콘신, 미주리) 협력 교육 프로젝트가 미국 내륙 수로 해운 인력 파이프라인 강화를 목표로 시작</p><p>• **산학 연계 인력 양성 전략**: 항만, 산업 리더, 커뮤니티 칼리지 등 고등교육 기관들이 협력하여 실무 중심의 자격증 프로그램 및 경력 경로 개발</p><p>• **Maritime Interaction Days를 통한 조기 노출**: WWW의 전국 프로그램과 해운 전문가 네트워킹 행사를 통해 학생들에게 고수익 해운 직종 소개</p><p>• **시골 및 강변 지역사회 접근성 확대**: 전통적으로 해운 인력 부족 지역에서의 교육 기회 및 경력 경로 제공으로 국가적 공급망 회복력 강화</p><p>• **MARAD 해운 우수 센터 지정 추진**: 컨소시엄의 첫 공식 회의 개최로 전국적 인정 및 장기 지속 가능한 인력 파이프라인 구축 기반 마련</p><h3>Key Quotes</h3><p>• "developing a skilled workforce prepared to meet evolving supply chain demands" (진화하는 공급망 요구에 대응할 수 있는 숙련 인력 양성)</p><p>• "By aligning resources across states, industries, and education systems, the initiative aims to build a more connected and sustainable talent pipeline" (주(State), 산업, 교육 시스템 간 자원 통합으로 더욱 연결된 지속 가능한 인력 파이프라인 구축)</p><h3>Technical Insights</h3><p>• **내륙 수로 해운 인력 위기 대응**: 미국 내륙 항로(Mississippi, Ohio 등) 운영에 필수적인 선원, 크루, 로지스틱스 전문가 부족 문제를 교육-산업 협력으로 해결하는 산업 모범 사례</p><p>• **Stackable Credential 모델의 해운 산업 적용**: 직업 교육과 고등교육을 연계한 이력서 형식의 자격증 구조로 근로자의 단계적 경력 개발 및 이동성 향상 기대</p><p>• **해운 산업 공급망 회복력 강화**: COVID-19 이후 미국 내륙 수로 운송의 전략적 중요성 재평가에 따른 국가 차원의 해운 인력 투자 증가 추세 반영</p><p>• **지역사회 기반 해운 진출 개선**: 농촌 지역 고등학생 및 성인 근로자를 위한 조기 경력 탐색 기회 제공으로 해운업의 인구학적 다양성 및 포용성 제고</p></div>`,
      tags: ["Workforce Development","Maritime Education","Inland Waterways","Training Consortium","Supply Chain"],
      link: "https://www.marinelink.com/news/work-waterways-provides-workforce-538990",
      coords: [-93.5,40.2],
      location: "Corn Belt Region (Iowa, Illinois, Wisconsin, Missouri)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-08
addEvents({
  "2026-05-08": [
    {
      type: "news",
      title: "ABS and HD Korea Shipbuilding & Offshore Engineering Partner on Digital Shipbuilding and Autonomous Vessel Systems",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-08",
      image: "https://images.marinelink.com/images/maritime/w800/photo-caption-170449.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• ABS(미국선급협회)와 HD 현대조선이 디지털 기술 협력 양해각서 체결 - 조선 산업의 안전성과 성능 강화 목표<br>• 주요 협력 분야: Digital Threads, 자율운항 시스템, 통합 사이버보안 도구 개발<br>• 3D 모델 기반 승인 체계 및 조선소-선급협회 간 신뢰할 수 있는 데이터 교환 방식 수립 추진<br>• HD KSOE의 소프트웨어 정의 선박(Software Defined Vessel) 아키텍처와 ABS Wavesight 플랫폼 통합 검토<br>• IACS 요구사항을 초과하는 차세대 자율운항선의 사이버보안 및 데이터 안전 지침 공동 개발</p><h3>Key Quotes</h3><p>• "Areas of focus will include digital engineering, autonomous vessel systems and integrated cybersecurity tools." (디지털 엔지니어링, 자율운항 시스템, 통합 사이버보안 도구를 중점 협력 분야로 추진)</p><p>• "The two organizations will also explore the establishment of a 3D model-based approval and trusted data exchange between the shipyard and classification society." (조선소와 선급협회 간 3D 모델 기반 승인 체계와 신뢰할 수 있는 데이터 교환 체계 구축 추진)</p><p>• "ABS and HD KSOE will jointly develop integrated cybersecurity and data safety guidelines for autonomous vessel environments, building on and extending beyond current IACS requirements" (현재 IACS 요구사항을 초과하여 자율운항선 환경의 통합 사이버보안 및 데이터 안전 지침을 공동 개발)</p><h3>Technical Insights</h3><p>• **Digital Thread 기술 도입**: 선박의 건조에서 운영까지 전체 가치사슬 단계에서 보안되고 통합된 데이터 흐름(Digital Thread) 구축으로 실시간 성능 모니터링 및 규제 준수 능력 강화</p><p>• **자율운항선 표준화 주도**: ABS와 세계 최대급 조선소의 협력을 통해 자율운항선의 안전 기준 및 사이버보안 가이드라인 국제 표준화 선도 - IMO 규정과 COLREG 준수 체계 고도화</p><p>• **Software Defined Vessel 아키텍처 검증**: HD KSOE의 소프트웨어 정의 선박 기술과 ABS의 선단 모니터링 플랫폼 통합으로 운영 효율성 및 안전성 동시 달성 가능성 확인</p><p>• **사이버보안 위협 대응 고도화**: IACS 기준을 초과하는 차세대 선박의 사이버보안 위협 환경 대응을 위한 선급협회와 조선소 간 선제적 협력 체계 구축 - 해양 자산의 증가된 디지털화에 따른 사이버 리스크 관리 강화</p></div>`,
      tags: ["Digital Shipbuilding","Autonomous Vessels","Cybersecurity","Classification Society"],
      link: "https://www.marinelink.com/news/abs-hd-ksoe-collaborate-digital-538977",
      coords: [126.978,37.5665],
      location: "South Korea"
    },
    {
      type: "news",
      title: "Lloyd's Register Approves Wison's Internal Turret FPSO Concept",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-08",
      image: "https://images.marinelink.com/images/maritime/w800/illustration-credit-170448.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Lloyd's Register가 Wison New Energies의 내부 터렛 계류 시스템을 갖춘 FPSO 설계에 대해 원칙적 승인(AiP)을 부여했음<br>• 극한 해양환경 대응형 부유식 생산·저장·적재 설비(FPSO) 개념이 복잡한 선체·계류·라이저·상부구조 통합을 포함<br>• 개념 단계 검토를 통해 기술적 불확실성 감소 및 프로젝트 초기 의사결정 지원<br>• Wison New Energies는 이 승인으로 극한환경 FPSO 설계 역량 보유, 전 세계 FPSO 수요의 약 90% 대응 가능<br>• 표준화된 FPSO 개념으로 도전적 해역에서의 신속한 배포 전략 추진</p><h3>Key Quotes</h3><p>• "Floating production systems are becoming more complex, and the cost of getting early decisions wrong is rising. Independent assurance at concept stage helps reduce uncertainty and allows projects to move forward with greater technical confidence" (부유식 생산 시스템이 복잡해지고 있으며, 초기 의사결정 오류의 비용이 증가하고 있다. 개념 단계에서의 독립적 검증은 불확실성을 줄이고 프로젝트가 더 큰 기술적 자신감으로 나아갈 수 있게 함)</p><p>• "With design for harsh environment FPSO now completed, Wison has in addition to standard FPSO as well as Gas type FPSO designs already developed, possessed the portfolio to undertake FPSO design for 90% of the current world FPSO demand" (극한환경 FPSO 설계 완료로, Wison은 표준 FPSO 및 가스형 FPSO 설계에 더하여 현재 전 세계 FPSO 수요의 90%를 충족할 수 있는 포트폴리오 보유)</p><h3>Technical Insights</h3><p>• **내부 터렛 계류 시스템의 복잡성**: 내부 터렛은 선체, 계류, 라이저, 상부구조 간 복잡한 통합을 요구하므로, 개념 단계부터의 독립적 승인이 기술적 리스크 관리에 필수적<br>• **조기 프로젝트 의사결정 지원**: Lloyd's Register의 AiP는 극한 해양환경 프로젝트의 높은 비용과 기술적 불확실성을 완화하여 프로젝트 타당성 판단 시간 단축<br>• **표준화된 FPSO 포트폴리오의 산업적 의미**: Wison의 다양한 FPSO 설계 라인업(표준, 가스형, 극한환경)은 전 세계 오일가스 개발 시장 수요의 90% 커버 가능으로 경쟁력 강화<br>• **해양 에너지 산업의 기술 고도화**: FPSO 기술의 극한환경 대응 능력 향상은 심해 및 극저온 지역 자원개발 사업의 경제성 개선에 기여</p></div>`,
      tags: ["FPSO","Lloyd's Register","Internal Turret Mooring","Offshore Technology","Approval in Principle"],
      link: "https://www.marinelink.com/news/lloyds-register-approves-wisons-internal-538974",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-10
addEvents({
  "2026-05-10": [
    {
      type: "news",
      title: "Thrusters Aid the Advance of Autonomous Navigation Systems",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-10",
      image: "https://images.marinelink.com/images/maritime/w800/photo-andaman-170467.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **자동항해시스템의 필수 요소**: 현대 자동항해 시스템(ANS)은 스러스터와 통합되어 COLREG 준수하는 자동 운항 기능을 제공하고 있으며, 인간의 개입 없이 다중 센서 입력을 초 단위로 통합하여 위험 회피 능력을 갖춤</p><p>• **동적 포지셔닝(DP) 기술의 진화**: IMO 분류 DP1, DP2, DP3 시스템이 GPS, 풍속센서, IMU 등 다양한 센서와 결합되어 정확성과 신뢰성을 향상시키고 있으며, 센서 융합 기술이 개별 추진 시스템에 정확한 명령을 전달</p><p>• **원격 자동운항 시스템**: 무선/위성 통신을 통한 원격 조종이 가능하며, 통신 두절 시 자동항해시스템이 안전한 항해와 귀항을 자동으로 보장하는 이중 안전 체계 구현</p><p>• **스러스터의 다양한 형태와 용도**: 기계식/전기식/유압식 모터로 구동되는 서로 다른 유형의 스러스터가 신조선 및 기존 선박에 적용되며, 추진용 vs 조종용으로 성능 요구사항이 상이함</p><p>• **상업적 기회 확대**: 스러스터 수요 급증으로 자동항해 시스템 통합을 통해 선박의 기동성과 정위치 유지 능력이 대폭 향상되어 새로운 상업적 지평 개척 가능</p><h3>Key Quotes</h3><p>• "The system's own intelligence allows appropriate control of the vessel's propulsion system, thrusters and steering to be applied to create the required COLREGS compliant vessel movements, without human intervention." <br>(자동항해시스템의 자체 지능이 인간의 개입 없이 COLREGS 준수하는 선박 운동을 위해 추진 시스템, 스러스터, 조향장치를 적절히 제어한다는 의미)</p><p>• "An optional module can force the system to automatically take command to steer a path that avoids a collision."<br>(선택사양 모듈이 자동으로 충돌 회피 항로를 자동 조종할 수 있도록 시스템에 강제 명령을 내릴 수 있다는 뜻)</p><h3>Technical Insights</h3><p>• **COLREG 준수 자동화**: Robosys VOYAGER AI 같은 자동항해시스템이 다중 센서 융합 기술을 통해 실시간으로 COLREGS(국제 해상 충돌 방지 규칙)를 자동으로 준수하는 항해 경로를 생성할 수 있으며, 이는 자동운항 선박의 국제 해사법 준수 기준을 충족시키는 핵심 기술</p><p>• **IMO 동적 포지셔닝 분류 활용**: DP1/DP2/DP3 등급 분류 체계에 따라 센서 중복성, 정확도, 신뢰성이 결정되며, 선박의 용도(오일&가스, 해상풍력, 해양과학 등)에 따라 적절한 DP 등급 선택이 경제성과 안전성을 좌우함</p><p>• **센서 융합과 자동 장애 대응**: GPS, IMU, 풍속계 등 다양한 센서 데이터를 Propulsion Management System(PMS)이 실시간 융합하여 동적 포지셔닝 정확도를 높이고, 통신 두절 시에도 자동으로 안전 항로 복귀 가능한 자율성 달성</p><p>• **해양 산업의 인력 구조 변화**: 스러스터와 자동항해시스템 통합으로 항해사의 수동 조종 업무가 모니터링 중심으로 전환되며, 이는 향후 완전 무인 자율운항 선박 운영 모델의 산업 수용성 향상에 기여</p></div>`,
      tags: ["Autonomous Navigation","Thrusters","Propulsion Systems","Dynamic Positioning"],
      link: "https://www.marinelink.com/news/tech-focus-thrusters-aid-advance-538996",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "BlackSea Technologies Unveils Comet and Chaser USV at Sea Air Space 2026",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-10",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/BlackSea-Comet-USV-SAS-2026.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• BlackSea Technologies가 Sea Air Space 2026에서 신규 무인수상차량(USV) Comet과 Chaser를 공개하며 자율운항선박 기술의 군사적 응용 분야 확대를 시사<br>• Comet은 길이 13.1m, 최대 페이로드 10,000 lbs로 C-UAS, ISR, 지뢰제거 등 다양한 임무 수행 가능한 대형 USV<br>• Chaser(GARC Block II)는 20ft 컨테이너에 탑재 가능한 콤팩트 설계로 600-800 해리 항속거리 제공<br>• 적외선 시그니처 감소 기술 적용으로 교전 지역에서의 생존성 향상<br>• Baltimore 생산시설에서 이미 300대 이상의 GARC Block 1 생산 완료, 확대된 생산 체계 구축</p><h3>Key Quotes</h3><p>• "From our perspective this is a truck, a truck that can carry 10,000 lbs of whatever mission you want." (우리 관점에서는 이것이 트럭이며, 원하는 어떤 임무든 10,000 파운드를 운반할 수 있는 트럭입니다.)</p><h3>Technical Insights</h3><p>• USV 플랫폼의 모듈화 설계 추세: Comet과 Chaser는 페이로드에 따라 다양한 임무 조합이 가능한 다목적 자율수상차량으로, 향후 해양 자율운항 시스템의 유연한 확장성을 보여주는 선례<br>• 군사 자율화 기술의 급속 발전: AIM-9X Sidewinder, AGM-114 Hellfire 등 고급 무기체계 통합과 RADA AESA 레이더 탑재로 자율선박의 전투 능력 강화 추세<br>• 컨테이너 배치 개념의 실용화: 20ft 컨테이너 탑재 가능 설계는 전략적 배치 유연성을 제공하며, 해양 방위 체계의 신속한 대응능력 향상에 기여<br>• 운영 데이터의 설계 반영: GARC 5,000시간 운영 경험을 바탕으로 한 Block II 개선은 실전 피드백을 중시하는 자율해양 기술의 성숙도 증가를 의미</p></div>`,
      tags: ["USV","Autonomous Vehicles","Military Technology","Defense Innovation"],
      link: "https://www.navalnews.com/naval-news/2026/05/video-new-comet-and-chaser-usv-by-blacksea-technologies/",
      coords: [-76.6167,39.2904],
      location: "Baltimore, Maryland"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-01-28
addEvents({
  "2023-01-28": [
    {
      type: "accident",
      title: "Ferry Kaitaki Engine Failure and Blackout Off Wellington Coast",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-11",
      image: "https://images.marinelink.com/images/maritime/w800/credit-kiwirail-170471.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2023년 1월 28일 뉴질랜드의 Interislander 페리선 Kaitaki호가 Wellington 근처에서 엔진 냉각계통의 열화된 고무 팽창조인트(REJ) 파손으로 인해 전체 추진력과 전기 동력을 상실하고 검은색 정전 상태에 빠짐</p><p>• **근본 원인**: 고무 팽창조인트가 제조사 권장 수명(교체 5년, 설치 시 8개월 이내 신규)을 초과하여 설치 당시 이미 13년 경과, 파손 시 18년 경과한 부품으로, KiwiRail의 FMEA 시스템에서도 2개월 교체 연체 상태</p><p>• **사고 경과**: 약 1시간 동안 정전 상태에서 닻으로 표류를 저지하고, 승무원이 냉각계통을 복구하여 엔진 재시동 성공, 결국 안전하게 입항</p><p>• **발견된 6가지 안전 이슈**: 안전-중요 부품의 생애 관리, 공학적 의사결정 지원 부재, 노후 선박의 대피 기준 미흡, 긴급 대응 조율 부족, Maritime NZ의 사건 대응팀 문제, 구난·예인 능력 미흡</p><p>• **조직 및 기관**: Transport Accident Investigation Commission(TAIC), KiwiRail Limited, Maritime NZ, Wellington 해역 관할 당국</p><p>• **결과 및 시사점**: 단일 열화 부품의 고장이 전체 추진 시스템 마비를 초래하였으며, 노후 Cook Strait 페리의 위험 관리가 진화하는 해상 위험에 뒤처짐을 지적</p><h3>Key Quotes</h3><p>• "The failure of a single degraded component disabled a key engineering system and as a result all propulsion." (단일 열화 부품의 고장이 핵심 엔진 시스템과 전체 추진력을 마비시켰다는 점이 시스템 신뢰성의 취약성을 보여줌)</p><p>• "The manufacturer of the REJs says they should be no older than eight months when installed, should be inspected annually and replaced after five years." (제조사의 부품 관리 기준이 명확했음에도 18년 경과 부품이 사용 중이었던 유지보수 관리 시스템의 실패)</p><p>• "Kaitaki's crew made the right call to keep people on board while essential systems - like staying afloat - still worked." (승무원의 올바른 판단: 악천후 조건에서 해상 대피는 더욱 위험했으므로 부양성이 보장되는 동안 선내 대기 결정)</p><h3>Technical Insights</h3><p>• **부품 관리 체계의 실패**: 해양 운송 산업에서 안전-중요 부품(safety-critical components)의 생애주기 관리가 선급(classification society)의 감시 기준을 초과하는 낡은 부품 사용으로 이어질 수 있으며, 정기 검사와 FMEA 시스템만으로는 불충분함을 입증</p><p>• **긴급 대응 체계의 조율 부족**: Maritime NZ의 Rescue Coordination Centre가 소집한 다수 기관이 동일한 상황 인식(Common Operating Picture)을 공유하지 못하여 응급 대응 효율성 저하; IMO SOLAS 규정의 긴급 대응 조율 강화 필요</p><p>• **노후 선박의 설계 제약**: 1980년대 건조된 Cook Strait 페리들의 노후화로 인해 최신 해상 환경(strong onshore wind, rough sea conditions) 대응 능력 미흡, 선박 대피 계획(evacuation plan)의 현실성 검토 필요</p><p>• **공학적 의사결정 지원의 중요성**: 구조화된 의사결정 지원 도구(decision support systems) 부재로 인해 응급 상황에서 엔진 복구 시간 지연; 자율운항선(autonomous vessels)의 AI 기반 의사결정 시스템과 달리 기존 선박의 승무원 훈련 및 지원 시스템 개선 시급</p></div>`,
      tags: ["engine failure","propulsion loss","emergency response","New Zealand","passenger ferry"],
      link: "https://www.marinelink.com/news/ferry-engine-failure-raises-concern-538999",
      coords: [174.886,-41.2865],
      location: "Cook Strait, Wellington, New Zealand"
    }
  ]
});

// Auto-collected: 2026-05-11
addEvents({
  "2026-05-11": [
    {
      type: "news",
      title: "UK Deploys Warship HMS Dragon to Middle East for Strait of Hormuz Protection",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-11",
      image: "https://images.marinelink.com/images/maritime/w800/source-royal-170473.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 해군이 호르무즈 해협 해상 보안 강화를 위해 공중방어 구축함 HMS Dragon을 중동으로 배치 예정<br>• HMS Dragon 함정 및 영국 국방부 - 프랑스와의 다국적 연합군 주도 계획 수립<br>• 이란-미국 10주간의 전쟁 종료 협상 진행 중이며, 상황 안정화 시 해협 통행 보호 작전 개시 예정<br>• 영국·프랑스 주도로 12개국이 참여 의사 표시, 이란과의 조율 필요<br>• 영국 해군의 규모 축소로 보호 임무 참여 능력이 제한적인 상황<br>• 해상 무역로 신뢰 회복과 안전한 통행을 위한 선제적 배치 전략</p><h3>Key Quotes</h3><p>• "The pre-positioning of HMS Dragon is part of prudent planning that will ensure that the UK is ready, as part of a multinational coalition jointly led by the UK and France, to secure the Strait, when conditions allow" <br>(HMS Dragon의 선제 배치는 신중한 계획의 일부이며, 영국과 프랑스가 공동으로 주도하는 다국적 연합의 일원으로서 조건이 허락할 때 해협 보안을 확보할 준비가 되어 있음을 보장)</p><p>• "As the U.S. and Iran inch toward a potential off-ramp from their 10-week war, France and Britain have been working on a proposal to lay the groundwork for safe transit through the Strait once the situation stabilises"<br>(미국과 이란이 10주간의 전쟁에서 벗어날 가능성을 모색하는 가운데, 프랑스와 영국은 상황이 안정화되면 해협을 통한 안전한 통행의 기반을 마련하기 위한 제안 작업을 진행 중)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 해상 안보 강화 - 다국적 연합 운영 체계**: 영국·프랑스 주도의 다국적 연합군 구성으로 국제 해상 보안 체계 구축, 12개국 참여로 광범위한 해역 감시·보호 체계 강화<br>• **함정 전략적 배치와 COLREG 준수**: HMS Dragon(공중방어 구축함)의 사전 배치로 상황 변화에 대한 신속 대응 능력 확보, 국제 해상 안전 규칙(COLREG) 준수하의 자유로운 통항 보장<br>• **해상 무역로 보안과 IMO 지침**: 호르무즈 해협의 전 지구적 해상 무역로 중요성을 감안한 IMO 해상 안전 기준 준수, 선박 통행의 자유와 안전 균형 도모<br>• **영국 해군 규모 축소에 따른 산업적 제약**: 노후 함정 폐기 후 신규 함정 배치 지연으로 인한 해상 방위 능력 약화, 국방 예산 재정 현황이 해운 산업의 보안 능력 영향</p></div>`,
      tags: ["Strait of Hormuz","Naval Operations","Shipping Security","UK Royal Navy"],
      link: "https://www.marinelink.com/news/uk-deploys-warship-middle-east-539001",
      coords: [56.1472,26.1551],
      location: "Strait of Hormuz, Middle East"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-08
addEvents({
  "2026-05-08": [
    {
      type: "accident",
      title: "Fire Breaks Out Aboard Iranian VLCC Sea Star III After U.S. Navy Strike",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-11",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/Sea-Star-III.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란 국영 유조선 Sea Star III (IMO 9569205)가 2026년 5월 8일 미 해군 F/A-18 슈퍼호넷에 의해 격침되어 화염과 검은 연기 발생</p><p>• 미 중앙군사령부(CENTCOM)의 이란 해상봉쇄 강제 작전의 일환으로 함교(funnel) 부근을 정밀 탄약으로 타격</p><p>• 해당 선박은 화물을 적재하지 않은 상태였으며, 선원 및 해양환경 피해 현황은 미공개 상태</p><p>• USS George H.W. Bush (CVN-77) 항모전단으로부터 발사된 공격으로 Sea Star III와 Sevda 두 척의 이란 유조선이 동시에 피격</p><p>• 호르무즈 해협 일대 상업 해상 통항량 심각한 감소, 외교적 안정화 노력에도 불구하고 이란-미국 간 군사 충돌 지속</p><h3>Key Quotes</h3><p>• "U.S. forces in the Middle East remain committed to full enforcement of the blockade of vessels entering or leaving Iran" (중동 미군은 이란 출입 선박에 대한 봉쇄 강제에 전력을 다하고 있다는 입장)</p><p>• "Our highly trained men and women in uniform are doing incredible work." (고도로 훈련된 미군 장병들이 뛰어난 임무 수행 중이라는 평가)</p><p>• The strikes were "intended to disable the vessels rather than sink them" (침몰이 아닌 기능 상실을 목표로 하는 선택적 공격 전술)</p><h3>Technical Insights</h3><p>• **함교 타격 전술의 해양안전 함의**: 선박의 주요 구조물인 함교를 정밀 타격하는 방식은 선박 전체 침몰 방지 의도로 보이나, 화재 발생으로 인한 2차 피해(환경오염, 선원 안전) 위험 증가</p><p>• **해상봉쇄와 UNCLOS 저촉 문제**: 공해 또는 국제 해역에서의 강제 봉쇄는 국제해양법(UNCLOS) 및 해상교통 자유 원칙과의 법적 충돌 야기, IMO 규정상 상선 보호 의무와 상충</p><p>• **호르무즈 해협 통항 안전성 악화**: 50척 이상의 상선 회항, 해상지뢰 위협, 드론/미사일 공격으로 인해 세계 해상 에너지 공급망 불안정화 및 운송비 상승</p><p>• **국제해사기구(IMO) 해역 안전 기준 재검토 필요**: 분쟁 지역 통항 선박의 항해 자유도, 안전 프로토콜 강화, 인도주의적 해상 회랑(Humanitarian Maritime Corridor) 설정 등 국제적 합의 긴급</p></div>`,
      tags: ["VLCC","Fire","Iranian Tanker","U.S. Navy","Gulf of Oman","Naval Blockade"],
      link: "https://gcaptain.com/photos-appear-to-show-fire-aboard-iranian-vlcc-disabled-by-u-s-navy/",
      coords: [57.92449,25.63345],
      location: "Gulf of Oman, Bandar-e Jask"
    }
  ]
});

// Auto-collected: 2026-05-11
addEvents({
  "2026-05-11": [
    {
      type: "news",
      title: "Trump Says Iran Ceasefire on 'Life Support' as Hormuz Crisis Deepens",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-11",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-07T211027Z_2026438096_RC2UJKAMYDZN_RTRMADP_3_USA-TRUMP-IRAN-CIVILIZATION.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국-이란 휴전이 협상 결렬로 위기 상황에 직면 - 트럼프 대통령이 이란의 평화안 응답을 거부하며 "휴전이 생명 유지장치에 의존 중"이라 표현</p><p>• 호르무즈 해협 폐쇄로 국제 에너지 공급망 마비 - 세계 석유·LNG 교역량의 약 1/5을 담당하는 해협이 거의 폐쇄되어 유가 상승 (배럴당 $104, 2.7% 상승)</p><p>• 탱커 운항 중단 및 해로 봉쇄 - 이란의 공격 위협으로 선박 추적 기능 해제 후 운항, 지난주 3척의 원유 탱커만 해협 통과, 해상 교통량 급감</p><p>• OPEC 석유 생산량 20년 최저 수준 기록 - 호르무즈 해협 폐쇄로 인한 수출 감소로 4월 OPEC 산출량 사상 최저치 도달</p><p>• 이란의 강경 입장 - 호르무즈 해협 주권, 미국 해양 봉쇄 해제, 제재 완화, 이란 자산 동결 해제 등 포괄적 요구</p><p>• 해상 운송 산업의 심각한 타격 - 분쟁 확산 우려로 해운업체들의 운항 중단 및 대체 해로 탐색 진행 중</p><h3>Key Quotes</h3><p>• "I would call it the weakest right now, after reading that piece of garbage they sent us. I didn't even finish reading it" (지금 가장 약하다고 볼 수 있다. 그들이 보낸 쓰레기 같은 문서를 읽은 후인데, 나는 끝까지 읽지도 않았다)</p><p>• "Our demand is legitimate: demanding an end to the war, lifting the blockade and piracy, and releasing Iranian assets that have been unjustly frozen in banks due to U.S. pressure" (우리의 요구는 정당하다: 전쟁 종료, 해양 봉쇄와 해적 행위 해제, 미국 압력으로 인해 부당하게 동결된 이란 자산 해제)</p><p>• "Safe passage through the Strait of Hormuz and establishing security in the region and Lebanon were other demands of Iran, which are considered a generous and responsible offer" (호르무즈 해협을 통한 안전한 통행과 지역 및 레바논의 안보 확립은 이란의 다른 요구사항이며, 이는 관대하고 책임감 있는 제안으로 간주된다)</p><h3>Technical Insights</h3><p>• **해상 교통로 폐쇄의 글로벌 영향** - 호르무즈 해협의 실질적 폐쇄로 국제 해운 및 에너지 시장에 즉각적인 영향 발생, 선박 추적 시스템 차단으로 해양 안전 우려 증가</p><p>• **선박 운영의 보안 위험** - 탱커 운영사들이 AIS(자동 식별 시스템) 비활성화로 운항하는 상황으로, 해상 교통 안전 관리 및 국제 해사 규칙(COLREG) 준수의 어려움 심화</p><p>• **IMO 및 국제 해사 규제의 과제** - 분쟁 지역의 항해 자유 보장과 선박 안전의 국제 협력 필요성이 부각되며, 중립국 해운업체의 통행권 보호 문제 대두</p><p>• **자율운항선 및 AI 네비게이션의 지정학적 위험** - 향후 자율운항선 도입 시 분쟁 해역에서의 운영 안전성 및 사이버 보안 위협이 추가적 과제로 대두될 것으로 예상</p></div>`,
      tags: ["Strait of Hormuz","Iran-US Conflict","Ceasefire Negotiations","Maritime Security","Energy Trade Disruption"],
      link: "https://gcaptain.com/us-iran-far-apart-in-talks-to-end-war-and-reopen-hormuz/",
      coords: [56.1499,26.1551],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Fire Breaks Out on DCOR's Offshore Platform Habitat in Santa Barbara Channel",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-11",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/Habitat-platform-fire-scaled.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2026년 5월 11일 캘리포니아 산타바바라 해협의 DCOR 소유 오프쇼어 플랫폼 하비타트(Platform Habitat)에서 화재 발생</p><p>• **안전 대응**: 플랫폼 탑승 26명 전원이 안전하게 대피했으며 인명피해 없음, 1,000야드 안전지대 설정</p><p>• **응급 대응**: 미국 해안경비대(USCG), 산타바바라 항만경찰, 산타바바라 및 벤투라 카운티 소방대 등 다기관 긴급 대응 실시</p><p>• **시설 정보**: 1981년 설치, 1983년 생산 시작, 약 290피트 수심의 해상 7.8마일 위치, 가스 생산 시설로 24개 유정 보유</p><p>• **원인 및 영향**: 화재 원인 미상, 오염 방출 여부 및 시설 손상 상황 미보도, 추가 정보 발표 대기 중</p><h3>Key Quotes</h3><p>• "USCG, SB Harbor Patrol, SB County Fire, SB City Fire & Ventura County Fire are responding to a fire on platform HABITAT 7.5nm off Santa Barbara. All 26 crew evacuated safely. A 1000 yard safety zone is in effect around the platform." (산타바바라 인근 해상 7.5해리 거리의 하비타트 플랫폼 화재에 대해 다기관이 대응 중이며, 26명 전원이 안전하게 대피했고 플랫폼 주변 1,000야드 안전지대가 설정되었다)</p><h3>Technical Insights</h3><p>• **오프쇼어 안전 프로토콜**: 신속한 전원 대피 및 다기관 협력 체계를 통해 해상 플랫폼 화재의 인명피해를 효과적으로 방지할 수 있음을 입증</p><p>• **환경 리스크 관리**: 화재 발생 시 인접해역의 오염 가능성에 대한 즉각적인 평가와 모니터링이 필수적이며, 이는 해양 환경 보호의 핵심 과제</p><p>• **규제 감시 강화**: BOEM의 수압파쇄(hydraulic fracturing) 승인 검토 절차와 이번 사건의 시간적 근접성은 오프쇼어 시설의 운영 안전성에 대한 규제 감시의 중요성을 강조</p><p>• **산업 영향**: 미국 오프쇼어 생산량이 2025년 기록적 수준(7.14억 배럴)에 도달한 가운데 안전성 강화와 사고 예방의 중요도 증대</p></div>`,
      tags: ["offshore fire","platform emergency","Santa Barbara Channel","evacuation"],
      link: "https://gcaptain.com/emergency-crews-battle-fire-on-offshore-oil-platform-in-californias-santa-barbara-channel/",
      coords: [-119.5,34.3],
      location: "Santa Barbara Channel, California"
    },
    {
      type: "news",
      title: "DANAE Project: French Navy to Deploy Armed USV Fleet by 2027",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-11",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/DANAE-USV-French-Navy.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **DANAE 프로젝트**: 프랑스 해군이 2027년 말까지 무장 무인 수상함(USV) 함대를 배치하는 혁신 가속화 프로젝트로, 기지 보호 및 함정 호위 임무 수행 예정</p><p>• **개발 단계**: 7개 산업 컨소시엄이 1단계 선정되었으며, 3~4개로 압축 후 15개월 내 프로토타입 설계 진행, 최종적으로 최소 12대 이상 구매 계획</p><p>• **핵심 성능 요구사항**: 시속 30노트 초과 고속 자율항해, 충돌회피 자동화, 20미터 이상 거리에서 원격 무기 체계 운영, 장시간 임무 내구성 필요</p><p>• **기술적 난제**: 자율 의사결정 프로세스, 고속 충돌회피 항법, 선상 에너지 관리, 원격 무기 체계 운영의 안정성 및 안전성 확보</p><p>• **협력 기관**: 국방혁신청(Agence de l'innovation de défense), 프랑스 해군(공동 리더), 국방조달청 해양기술부(DGA TN) 주도</p><p>• **운영 목표**: 초기 단계는 비살상 효과로 기지 보호, 장기적으로는 해상 고가치 자산 호위 및 살상 무기 운용</p><p>---</p><h3>Key Quotes</h3><p>• "DANAE (Drone Autonome Naval avec de l'Armement Embarqué or Autonomous Naval Drone with Onboard Armament) project aims to rapidly equip the French Navy with armed Unmanned Surface Vessels (USV)" <br>(DANAE 프로젝트는 프랑스 해군에 무장 무인 수상함을 신속히 장비하는 것을 목표로 함)</p><p>• "The first systems from this 'innovation acceleration project' are expected to be delivered at the end of 2027"<br>(이 '혁신 가속화 프로젝트'의 첫 번째 시스템은 2027년 말에 인도될 예정)</p><p>• "The main challenges of this project concern the autonomous decision-making process, autonomous navigation to avoid collision (with speeds exceeding 30 knots for some teams), onboard energy management"<br>(주요 과제는 자율 의사결정 프로세스, 충돌회피 항법(시속 30노트 초과), 선상 에너지 관리)</p><p>---</p><h3>Technical Insights</h3><p>• **자율항해 기술의 고도화**: 시속 30노트 이상의 고속 자율항해와 실시간 충돌회피 알고리즘 구현이 핵심으로, 해상 교통규칙(COLREG) 준수와 타 선박 탐지·분류 능력이 필수적</p><p>• **무인 전투함의 윤리적·법적 과제**: 원격 무기 체계의 자동화 수준(Human-in-the-Loop vs 완전 자동화)에 대한 국제 규제 논의와 군사 운용 doctrine의 재정의 필요</p><p>• **에너지 자급성 문제**: 장시간 해상 임무 수행을 위한 배터리/연료 관리 시스템 고도화로, 자율함정의 실용성과 운영 비용 효율성 좌우</p><p>• **산업 생태계 확대**: 민간 및 군사 부문 기업들의 협력으로 자율 해상 플랫폼 기술의 상용화 가속화 및 프랑스 방위산업의 경쟁력 강화 예상</p></div>`,
      tags: ["Autonomous Ships","USV","French Navy","Armed Drones","Defense Innovation"],
      link: "https://www.navalnews.com/naval-news/2026/05/danae-project-a-fleet-of-armed-usv-for-the-french-navy-by-2027/",
      coords: [2.3522,48.8566],
      location: "France"
    }
  ]
});

// Auto-collected: 2026-05-12
addEvents({
  "2026-05-12": [
    {
      type: "accident",
      title: "Fire Breaks Out on California Gas Platform During Decommissioning",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-12",
      image: "https://images.marinelink.com/images/maritime/w800/-170505.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **플랫폼 화재 발생**: 캘리포니아 산타바바라 남서쪽 약 8마일 해상의 비운영 천연가스 플랫폼 Habitat에서 오전 6시 30분에 화재 발생</p><p>• **해체작업 중 화재**: 플랫폼 해체(decommissioning) 작업 중 플랫폼 인원에 의해 화재가 발생했으며, 오전 11시 40분에 진화됨 (약 5시간 10분 소요)</p><p>• **대응기관**: 미국 해안경비대(USCG) 남서부 지구, 산타바바라 및 벤투라 카운티 소방청, 환경안전국(BSEE), 해양유출대응공사(MSRC) 등 다수 기관이 참여</p><p>• **환경 영향 미미**: 현재까지 오염물 해수 유출 징후 없음, 야생동물 및 공중 피해 없음으로 보고</p><p>• **비산유 플랫폼**: Habitat는 석유 생산 플랫폼이 아닌 천연가스 플랫폼으로, 이는 환경 영향을 제한하는 요인</p><p>• **신속한 대응**: 다중 기관의 조율된 대응으로 화재 확산 방지 및 환경 피해 최소화</p><h3>Key Quotes</h3><p>• "At 6:30 a.m. a fire occurred aboard platform Habitat when platform personnel were conducting decommissioning operations for the platform." (플랫폼 해체 작업 중 화재가 발생했음을 나타냄)</p><p>• "There are currently no indications of oil being released from the platform into the water and no current impacts to wildlife or the public." (환경 오염 및 공중 피해가 없음을 확인)</p><h3>Technical Insights</h3><p>• **해체작업 중 화재 위험**: 해상 플랫폼 해체 작업은 용접, 절단 등 고온 작업을 수반하므로 화재 위험성이 높으며, 해양산업에서 중요한 안전 관리 대상</p><p>• **신속한 진화의 중요성**: 해상 플랫폼 화재는 접근성 제약으로 인해 육상 화재보다 대응이 어렵지만, 약 5시간 이내 진화로 환경 피해 최소화 성공</p><p>• **다중 기관 협력 체계**: 미국 해안경비대, 해양환경 규제기관, 지역 소방 기관의 체계적 협력으로 해양 산업 안전 인프라 구축되어 있음</p><p>• **비산유 플랫폼의 이점**: 천연가스 플랫폼은 석유 플랫폼 대비 유출로 인한 환경 영향이 적으므로 해양생태계 보호 관점에서 우호적</p></div>`,
      tags: ["Platform Fire","Decommissioning","Santa Barbara","U.S. Coast Guard Response"],
      link: "https://www.marinelink.com/news/fire-breaks-california-gas-platform-539042",
      coords: [-119.5,34.3],
      location: "Santa Barbara, California (8 miles southwest)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-11
addEvents({
  "2026-05-11": [
    {
      type: "news",
      title: "FarSounder and SEA.AI Partner to Advance Autonomous Maritime Perception and Integration",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-11",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/gCaptain-Article-5.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 해양산업의 자율운항 기술 발전이 가속화되고 있으나, 실제 운영 단계로의 도입은 여전히 지연되고 있는 상황<br>• FarSounder의 Argos 3D 포워드 룩 소나와 SEA.AI의 머신비전 시스템 통합으로 수상·수중 인식 통합 달성<br>• 자율운항 선박은 선박 조종 자동화, 장애물 감지(1000m 전방), 해저 지도 작성 등의 기능 수행<br>• 해양산업의 만성적인 인력 부족 문제 해결을 위한 자율운항 솔루션의 역할 증대<br>• FarSounder가 25년간 축적한 수중 인식 기술로 Rhode Island Commerce Corp으로부터 제조혁신 바우처 수상<br>• 센서 융합을 통한 통합 인식 체계는 선박의 실시간 의사결정 및 안전성 향상에 기여</p><h3>Key Quotes</h3><br>• "Machines cannot infer what they cannot perceive." (기계는 감지하지 못하는 것을 추론할 수 없다 - 자율운항 시스템의 근본적 한계와 센서 기술의 필수성 강조)<br>• "Autonomy functions as augmentation and allows smaller crews to do more while maintaining safety and efficiency." (자율운항은 증강 기술로서 승무원 감소 상황에서도 안전성과 효율성을 유지하며 더 많은 업무 수행 가능하게 함)<br>• "A growing network of marine technologies is paving the way for the future of maritime operations." (증가하는 해양 기술 네트워크가 미래 해사 운영의 길을 열고 있음)</p><h3>Technical Insights</h3><br>• 포워드 룩 소나(FLS)와 머신비전 시스템의 센서 융합은 자율운항 선박의 실시간 의사결정 능력 향상에 필수적이며, 규제기관이 요구하는 안전 기준 충족의 핵심 요소<br>• 수중 장애물 감지 범위 1000m 달성은 자율운항 선박의 항해 속도 유지와 회피 능력 향상을 가능케 하며, IMO 자율운항선박 기술 기준(MSC.1/Circ.1604) 준수에 중요한 역할<br>• 자율운항 기술의 도입이 선원 부족 위기 해결의 보완책으로 기능하면서, 산업 전체의 인력 재교육 및 운영 패러다임 전환 필요성 대두<br>• 통합된 센서 시스템은 선박의 인지 부하 감소 및 브리지 운영 효율화를 실현하여, 미래 하이브리드 운영(유인-무인 혼합) 모델의 기술적 기반 제공</p></div>`,
      tags: ["Autonomous Ships","Underwater Perception","Sensor Fusion","Maritime Technology","USV Integration"],
      link: "https://gcaptain.com/connecting-the-maritime-future-autonomy-integration-and-the-next-era-of-underwater-perception/",
      coords: [0,0],
      location: "Global Maritime Industry"
    },
    {
      type: "event",
      title: "Exercise Bell Buoy: Global Maritime Security Training Program in Auckland, New Zealand",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-11",
      image: "https://images.marinelink.com/images/maritime/w800/source-european-170502.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **Exercise Bell Buoy** - 뉴질랜드 오클랜드에서 2주간 진행된 국제 해양 보안 훈련으로, 10개국 42명 이상의 참가자가 참여한 대규모 다국적 해군 협력 훈련</p><p>• **참여국 및 기관** - 호주, 캐나다, 에콰도르, 프랑스, 필리핀, 한국, 싱가포르, 영국, 뉴질랜드, 미국 및 NATO, PACIOSWG 등 국제기구 대표 참여</p><p>• **훈련 목표** - 해양 무역 보호, 해양 영역 인식 강화, 해적 사건 및 위기 상황에서의 국제 협력 및 조율 능력 향상</p><p>• **EU CRIMARIO 지원** - IORIS 통신 협력 플랫폼 제공으로 민간 및 군사 인원 간 정보 공유 촉진</p><p>• **인도-태평양 지역 안보 강조** - 지정학적 불안정 심화 속 해상 무역로 보호의 전략적 중요성 재확인</p><p>• **뉴질랜드 의존도** - 뉴질랜드 수입의 99%가 해상 운송에 의존하고 있어 해로 보안의 중요성 강조</p><h3>Key Quotes</h3><p>• "The deteriorating strategic environment in the Indo-Pacific, and indeed the world, is requiring us to be more alert of the potential for impacts to our vital shipping links to international markets" (인도-태평양 지역 및 전 세계적 전략 환경 악화로 인해 국제 시장과의 해상 무역 연결에 미칠 잠재적 영향에 대해 더욱 주의해야 함을 강조)</p><p>• "The global merchant shipping industry is facing 'unprecedented' security challenges" (세계 해상 운송 산업이 전례 없는 보안 도전에 직면하고 있음을 지적)</p><p>• "It highlights the importance of the MTO teams communicating with key shipping and country stakeholders in understanding the array of commercial and military risks" (해상 무역 작전 팀이 상업적·군사적 위험 요소를 파악하기 위해 주요 해운사 및 국가 이해관계자와의 소통 중요성 강조)</p><h3>Technical Insights</h3><p>• **NCAGS/MTO 협력 강화** - 해양 협력 지도(Naval Cooperation and Guidance for Shipping) 및 해상 무역 작전(Maritime Trade Operations) 인력 훈련으로 민간-군사 부문 간 정보 공유 및 조율 체계 개선</p><p>• **디지털 협업 플랫폼** - EU CRIMARIO의 IORIS 플랫폼을 통한 실시간 통신 및 협력으로 다국가 해양 작전의 상호 운용성(Interoperability) 강화</p><p>• **해양 위협 대응 능력** - 해적, 분쟁 지역 통과, 해상 보안 위협 등 다양한 시나리오 기반 해상 제지 작전(Maritime Interdiction Operations) 훈련으로 실무 대응 능력 제고</p><p>• **인도-태평양 지역 안보 체계** - PACIOSWG 등 지역 해운 관련 기구 참여로 인도-태평양 해상 경로 보호를 위한 다층적 국제 협력 체계 구축</p></div>`,
      tags: ["Maritime Security","Naval Training","International Cooperation","NCAGS","MTO","Indo-Pacific"],
      link: "https://www.marinelink.com/news/global-maritime-security-training-program-539038",
      coords: [174.886,-41.2865],
      location: "Auckland, New Zealand"
    }
  ]
});

// Auto-collected: 2026-05-12
addEvents({
  "2026-05-12": [
    {
      type: "news",
      title: "US Sanctions Companies Involved in Iran's Oil Shipments to China",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-12",
      image: "https://images.marinelink.com/images/maritime/w800/yaroslav-adobe-170504.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 재무부가 이란의 중국으로의 석유 수출을 지원한 개인 3명과 기업 9개사(홍콩 4개, UAE 4개, 오만 1개)에 대한 제재를 단행했으며, 이는 이란 혁명수비대(IRGC)의 자금 조달 차단을 목표로 함</p><p>• 제재 대상 기업들은 홍콩 블루오션, 홍콩 산무, 두바이 오션 얼라이언스 등으로, 석유 판매 중개 및 특별목적선(shadow fleet) 운영을 통해 이란 석유 수출을 촉진함</p><p>• 터키 기반 골든글로브 사를 중심으로 한 이란 석유 거래 네트워크가 적발되었으며, IRGC가 셸 컴퍼니를 통해 수억 달러 규모의 석유 판매를 조율</p><p>• 미국 국무부가 IRGC의 금융 메커니즘 파괴 정보 제공에 대해 최대 1,500만 달러의 현상금 제시</p><p>• 트럼프 행정부가 이란 정권의 무기 구매 및 핵 프로그램 자금 조달 차단을 위해 광범위한 제재 정책 추진 중</p><p>• 이 조치는 호르무즈 해협 재개통 및 미중 협상을 앞두고 이란의 자금 조달 경로 차단 의지를 보여주는 신호</p><h3>Key Quotes</h3><p>• "Treasury will continue to cut the Iranian regime off from the financial networks it uses to carry out terrorist acts and to destabilize the global economy" (재무부는 계속해서 이란 정권이 테러 행위와 글로벌 경제 불안정화에 사용하는 금융 네트워크를 차단할 것)</p><p>• "IRGC relies on shell companies to arrange and receive payment for its allotment of Iranian oil shipments" (IRGC는 이란 석유 수출 대금 수령 및 거래 중개를 위해 셸 컴퍼니에 의존)</p><h3>Technical Insights</h3><p>• **해상물류 금융 제재의 진화**: 특별목적선(shadow fleet)을 통한 석유 수출 자금화 메커니즘이 미국의 주요 제재 대상으로 전환되었으며, 해운 금융 네트워크 차단이 핵심 전략</p><p>• **다층 구조의 해운 사기 적발**: 홍콩/UAE 기반 중개 회사들과 터키의 골든글로브 등 복합 국제 네트워크 적발은 COLREG 준수 외에 금융 투명성, AIS 위조 적발 등 국제 협력의 중요성을 강조</p><p>• **IMO 및 국제 해양 규제의 한계**: 특별목적선의 선주 위장, 선박 관리사 위장 등 해운 부문의 구조적 취약점이 드러났으며, 실질적 소유자(beneficial owner) 파악 강화 필요</p><p>• **산업적 영향**: 석유 거래 관련 해운 금융 규제 강화로 정상 유가 무역 금융도 영향을 받을 가능성이 있으며, 금융기관의 고객실사(KYC) 강화 요구</p></div>`,
      tags: ["US Sanctions","Iran Oil Trade","China","Shadow Fleet","IRGC","Shipping Finance"],
      link: "https://www.marinelink.com/news/us-sanctions-companies-involved-irans-oil-539041",
      coords: [0,0],
      location: "Global (Hong Kong, UAE, Oman, Iran, China)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-12
addEvents({
  "2026-05-12": [
    {
      type: "news",
      title: "Maersk Continues Strait of Hormuz Transit Suspension Amid Ceasefire Uncertainty",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-12",
      image: "https://gcaptain.com/wp-content/uploads/2024/01/2024-01-05T141731Z_1337929630_RC2PB5A22SSA_RTRMADP_3_ISRAEL-PALESTINIANS-SHIPPING-STOCKS.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 마에스크(AP Moller-Maersk)는 미국-이란 간 취약한 휴전으로 인한 불안정성으로 인해 호르무즈 해협 운항 중단을 계속 유지 중<br>• 글로벌 석유 교역량의 약 1/5을 처리하는 호르무즈 해협은 해상 운송 및 LNG, 정제유 운송의 전략적 요충지로 기능<br>• 마에스크를 포함한 국제 해운업계 주요 기업들이 군사적 긴장 완화만으로는 상업적 신뢰 회복 불충분하다고 평가<br>• 36시간 만에 중단된 미국 주도의 프로젝트 프리덤(Project Freedom) 해상 호송작전의 실패가 업계 신뢰도 저하 심화<br>• 마에스크는 이라크, 쿠웨이트, 카타르, 바레인, 사우디 동부 항만, 대부분의 UAE 항만(호르팍칸 제외) 화물 예약 중단</p><h3>Key Quotes</h3><p>• "Volatility persists in the situation. In coordination with our security partners, we have assessed that as of now, transit through the Strait should be avoided." <br>(현 상황은 매우 불안정하며, 보안 파트너와의 협력 하에 현재로서는 해협 운항을 피해야 한다고 판단)</p><p>• "It is crucial that freedom of navigation is restored, and we welcome any effort to achieve this."<br>(해상 항행의 자유 회복이 중요하며 이를 달성하기 위한 모든 노력을 지지한다)</p><p>• "full maritime certainty has not yet been restored"<br>(완전한 해상 운송 안정성이 아직 회복되지 않음)</p><h3>Technical Insights</h3><p>• **지정학적 리스크 관리**: 호르무즈 해협은 일일 1,700만 배럴의 석유와 전 세계 LNG 교역량의 약 20% 이상을 처리하므로, 단기 운항 중단이 글로벌 에너지 시장과 공급망에 즉각적 영향 야기</p><p>• **보험 및 보안 보증 필요성**: BIMCO, ICS 등 해운업계 주요 기구들이 강조하듯이 순수 군사적 긴장 완화보다는 지뢰 제거 보증, 보험료 정상화, 국제 보안 메커니즘 구축이 운항 재개의 선행조건</p><p>• **프로젝트 프리덤의 한계**: 36시간 만에 중단된 미국 주도 호송작전은 군사적 보호 단독으로는 상업 운영자의 신뢰 회복 불가능함을 실증적으로 입증</p><p>• **회사별 위험회피 전략**: 마에스크 외 주요 선사들의 상층부 항만 회피 경로 선택(호르팍칸 등 대체항 우회)은 2026년 호르무즈 해협 상황의 구조적 악화를 시사</p></div>`,
      tags: ["Strait of Hormuz","Container Shipping","Geopolitical Risk","Maritime Security"],
      link: "https://gcaptain.com/maersk-keeping-strait-of-hormuz-transits-suspended-as-ceasefire-confidence-wavers/",
      coords: [56.1425,26.1367],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Iran War Ceasefire Fragile as US Rejects Tehran's Latest Offer - Strait of Hormuz Shipping Standstill",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-12",
      image: "https://gcaptain.com/wp-content/uploads/2026/04/2026-04-27T104527Z_1160542938_RC2KXKAKDWHL_RTRMADP_3_IRAN-CRISIS-OMAN-HORMUZ-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협 해상 교통이 완전히 중단된 상태로, 미국-이란 간 휴전 협상이 극도로 불안정한 상황 진행 중<br>• 도널드 트럼프 대통령이 이란의 평화 제안을 거부하고 휴전이 "생명 유지 상태"라고 표현하며 긴장 심화<br>• 이란은 미국의 해상 봉쇄 해제와 제재 완화를 요구하면서 해협 통제권 유지 입장 견지<br>• 브렌트유 가격 2% 상승으로 배럴당 $106 이상으로 올라 글로벌 에너지 위기 심화<br>• 10주간의 분쟁으로 국제 유류 시장 교란 및 미국 내 가솔린 가격 급등으로 소비자 부담 가중<br>• 미국이 전략 석유 비축량 5,330만 배럴 방출하며 유가 안정화 시도 중</p><h3>Key Quotes</h3><p>• "It's a piece of garbage" and the ceasefire was on "life support" (트럼프 대통령이 이란의 제안을 거부하며 휴전 상태를 극도로 부정적으로 평가)<br>• "Iran has given no public indication thus far that it's willing to back down in a war that has seen it exert control over Hormuz" (이란이 호르무즈 해협 통제권 유지 입장을 강경하게 유지 중)<br>• "Reaching a diplomatic solution is very possible" (트럼프 대통령이 외교적 해결 가능성을 제시하며 군사 재개를 직접 언급하지 않음)</p><h3>Technical Insights</h3><p>• **해운 물류 영향**: 호르무즈 해협은 전 세계 해상 유류 교역량의 약 20-30%가 통과하는 전략적 해상로로, 현재의 교통 중단은 글로벌 해운 네트워크 전반에 심각한 영향 미치는 중<br>• **지정학적 리스크**: 국가 간 분쟁으로 인한 특정 해상로 통제는 해상 안전, 항행 자유도, 국제 해사법(UNCLOS) 준수 문제를 야기하는 선례적 사건<br>• **에너지 인플레이션 연쇄효과**: 해상 수송 교란으로 인한 유가 급등은 글로벌 해운비(벙커유, 연료유) 상승으로 이어져 해운업계 수익성 악화 및 운임 인상 압력 발생<br>• **공급망 재편 필요성**: 장기간의 호르무즈 해협 통제는 대체 해상로(수에즈 운하 경유 아프리카 회항, 러시아 북극항로 개발) 검토 등 글로벌 해운 경로 다각화 추진 촉구</p></div>`,
      tags: ["Strait of Hormuz","Geopolitical Crisis","Shipping Disruption","Oil Markets"],
      link: "https://gcaptain.com/iran-war-ceasefire-fragile-as-us-rejects-tehrans-latest-offer/",
      coords: [56.2,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "UK Leads 40-Nation Defensive Mission with Autonomous Systems to Secure Strait of Hormuz",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-12",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/HMS-Dragon-departs-portsmouth.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 영국이 40개국 연합으로 호르무즈 해협 해상 보안 임무 주도, £115백만 규모의 자율 지뢰탐지 시스템 및 대드론 기술 배치<br>• 영국 해군 HMS Dragon 구축함과 타이푼 전투기, "Beehive" 자율 런칭 시스템 및 Kraken 드론 보트 등 첨단 무인 시스템 투입<br>• 호르무즈 해협의 해양 광산 및 드론 위협 대응을 위한 방어적 성격의 다국적 해상 안보 작전으로, 영국과 프랑스가 공동 주도<br>• 홍해 분쟁에서의 드론 및 비정규 공격 경험을 바탕으로 한 임무 설계, EU의 ASPIDES 작전과 유사한 장기 방어 해상 보안 노력<br>• 상업 해운 신뢰 회복 및 전략적 해상로 보호라는 명확한 목표 설정</p><h3>Key Quotes</h3><br>• "The UK is playing a leading role to secure the Strait of Hormuz, and we are demonstrating that today with new cutting-edge kit to protect our interests and secure the Strait" (영국이 호르무즈 해협 보안에 주도적 역할을 하고 있으며, 최첨단 기술로 국익 보호와 해협 보안을 입증하고 있다)<br>• "With our allies, this multinational mission will be defensive, independent, and credible." (우리의 동맹국들과 함께 이 다국적 임무는 방어적이고, 독립적이며, 신뢰할 수 있을 것이다)</p><h3>Technical Insights</h3><br>• 자율 지뢰탐지 드론 및 Kraken 고속 드론 보트 등 첨단 무인 시스템의 실전 배치로 해상 광산 탐지·제거 능력의 획기적 강화 및 운영 위험 감소<br>• 해양 자율시스템(USV/UUV) 기술이 단순 감시를 넘어 방어작전의 핵심 자산으로 부상하며, IMO 해상자율선박 규제 논의와 동행하는 실제 군사 운용 사례 제시<br>• 대규모 다국적 연합에서의 자율시스템 통합 운영으로 국제 해상 안보 협력의 기술적 복잡성 증대, COLREG 등 자율선박 규범 적용의 현실적 과제 부각<br>• 드론 및 비정규 위협에 대응하는 자율 방어 시스템의 전술적 우위성이 확대되면서, 상업해운의 자율화 및 보안 강화에 대한 산업 수요 가속화</p></div>`,
      tags: ["Autonomous Mine-Hunting","Maritime Security","Strait of Hormuz","UK Defense","Multinational Mission"],
      link: "https://gcaptain.com/uk-leads-40-nation-defensive-mission-to-secure-strait-of-hormuz/",
      coords: [56.2469,26.1367],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "UK Contributes Autonomous Mine-Hunting Equipment to Strait of Hormuz Security Mission",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-12",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockrob-170552.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 영국이 호르무즈 해협의 해상 안전 확보를 위한 다국적 방어 임무에 자율형 기뢰탐지장비 및 무인선박을 포함한 방위 자산 배치 발표<br>• 국방장관 John Healey가 40개 이상 국가의 동료 장관들과의 가상 정상회담에서 £115백만(약 1억5,553만 달러) 규모의 신규 자금 지원 발표<br>• 자율 기뢰탐지·제거 시스템, 고속 무인 드론보트, 태풍 전투기, HMS Dragon 구축함 등으로 구성된 패키지 추진<br>• 이란 전쟁으로 인한 호르무즈 해협 해상 교통 급격한 감소(세계 석유 5분의 1이 통과) 및 에너지 가격 상승에 대응<br>• 영국은 현재 지역 내 1,000명 이상의 인력을 기존 방어 작전 일환으로 배치 중</p><h3>Key Quotes</h3><br>• "With our allies, this multinational mission will be defensive, independent, and credible" (우리 동맹국들과 함께 이 다국적 임무는 방어적이고 독립적이며 신뢰할 수 있을 것입니다)<br>• "About a fifth of the world's oil passes through the strait" (세계 석유의 약 5분의 1이 해협을 통과합니다)</p><h3>Technical Insights</h3><br>• 자율형 기뢰탐지·제거 시스템의 배치는 고위험 해역에서 인적 피해 없이 해상 안전을 확보하는 자율 해양 기술의 실질적 적용 사례<br>• 고속 무인 드론보트 및 대드론 시스템 도입은 현대 해상 위협(드론, 기뢰 등)에 대응하는 첨단 해양 방위 체계의 진화 추세 반영<br>• 국제 해양 자유 항행(Freedom of Navigation) 원칙 수호를 위한 다국적 협력 체계 구축으로 SOLAS/COLREG 등 국제 해양 규정의 실행 강화</p></div>`,
      tags: ["autonomous systems","mine-hunting","Strait of Hormuz","maritime security","UK defense"],
      link: "https://www.marinelink.com/news/uk-contribute-minehunting-resources-539113",
      coords: [56.2404,26.1552],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-13
addEvents({
  "2026-05-13": [
    {
      type: "news",
      title: "SubSea Craft Advances MARS USV as Production Begins",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-13",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/Subsea-Craft-MARS-USV.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **MARS USV의 진화 및 본격 생산 개시** - SubSea Craft가 무인 수상함(USV) MARS의 개선된 버전을 발표하고 생산 단계에 진입, 기존 고객 계약을 지원할 예정</p><p>• **혁신적 기술 개발 접근법** - 광범위한 현장 테스트와 운용자 협력을 통해 프로토타입 전쟁 원칙(빠른 혁신, 실제 조건 테스트, 개선)을 적용</p><p>• **핵심 기술 유지 및 향상** - VICTA 멀티도메인 함정에서도 사용되는 검증된 디지털 제어 시스템을 유지하면서 추진 시스템과 모듈식 페이로드 베이 개선</p><p>• **국제적 운용 환경 대응** - 중동을 포함한 다양한 기후 환경에서의 운용을 위해 추진 시스템과 페이로드 베이의 통풍 개선</p><p>• **UK 독립 개발 및 동맹국 지원** - 완전히 자금 지원되고 영국에서 개발된 자율 해양 시스템으로 영국과 동맹국 지원에 대한 약속 표현</p><p>• **확장 가능한 자율 시스템의 필요성** - 컴팩트하고 적응 가능하며 까다로운 환경에서 즉시 운용 가능한 자율 시스템의 전략적 중요성 증대</p><h3>Key Quotes</h3><p>• "This release of MARS demonstrates our focus on delivering mature, operational capability. By iteratively enhancing the existing platform, we are able to rapidly field improved performance while maintaining the reliability and deployability our customers expect." <br>(MARS 출시는 성숙하고 실제 운용 가능한 능력 제공에 대한 집중을 보여주며, 반복적인 플랫폼 개선을 통해 신뢰성과 배치 가능성을 유지하면서 성능 향상을 빠르게 구현)</p><p>• "The operational need for scalable, autonomous systems has never been clearer. Fully resourced and developed in the UK, this latest development reflects SubSea Craft's commitment to supporting the UK and its allies."<br>(확장 가능한 자율 시스템의 운용적 필요성이 그 어느 때보다 명확하며, 영국에서 완전히 자금 지원되고 개발된 이 최신 개발은 영국과 동맹국 지원에 대한 약속을 반영)</p><h3>Technical Insights</h3><p>• **자율 해양 시스템의 모듈화 설계 원칙** - MARS의 모듈식 페이로드 베이와 개선된 통풍 시스템은 다양한 기후 환경과 운용 조건에 대응하는 자율 함정 설계의 중요한 트렌드를 반영</p><p>• **디지털 제어 시스템의 통합 플랫폼화** - VICTA와 공유되는 증명된 디지털 제어 시스템은 다중 플랫폼 간 상호운용성과 신뢰성 확보의 중요성을 시사하며, IMO 자율선박 규정 개발에도 참고 가치</p><p>• **프로토타입 전쟁 방식의 실제 적용** - 실제 운용 조건에서의 테스트와 개선을 통한 빠른 기술 숙성 방식은 규제 환경 변화 속에서 자율시스템 개발의 효율성을 극대화하는 산업 모범 사례</p><p>• **국방 자율 시스템과 민간 해운 기술의 수렴** - 군용 USV 기술의 상용화 추세는 향후 민간 해운 자율화 기술 도입 및 규제 프레임워크 수립에 긍정적 영향을 미칠 것으로 예상</p></div>`,
      tags: ["Unmanned Surface Vessel","Autonomous Systems","Maritime Technology","UK Defense"],
      link: "https://www.navalnews.com/naval-news/2026/05/subsea-craft-advances-mars-usv-as-production-begins/",
      coords: [-2.2426,51.5085],
      location: "United Kingdom"
    }
  ]
});

// Auto-collected: 2026-05-12
addEvents({
  "2026-05-12": [
    {
      type: "news",
      title: "Dolphin Drilling secures multimillion-dollar North Sea contract with Harbour Energy through 2030",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-12",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/05/Paul-B.-Loyd-Jr.-rig-Source-Dolphin-Drilling.jpg?image-crop-positioner-ts=1746607179",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 돌핀 드릴링(Dolphin Drilling)이 영국 대륙붕(UKCS) 해상 석유 채굴 사업을 위해 해버 에너지(Harbour Energy)와 약 1억 5천만 달러 규모의 계약을 체결했으며, 2030년 8월까지 계속된다</p><p>• 1990년 건조된 Paul B. Loyd Jr. 반잠수식 시추선(Aker H 4.2 설계)이 북해 유전 개발에 투입되며, 수심 1,969피트에서 운영 가능하고 120명 수용 가능</p><p>• 같은 회사의 1974년 건조된 Blackford Dolphin 시추선은 인도 동쪽 해역에서 Oil India Limited와의 계약을 2026년 7월까지 계속 수행</p><p>• 계약 확정으로 돌핀 드릴링의 확정 계약 백로그가 3억 6천 2백만 달러로 증가하였으며, 선택옵션 및 의향서 포함 시 8억 4천 9백만 달러 규모</p><p>• CEO Michael Boyd는 "이 계약이 장기적 수익 안정성과 안전하고 효율적인 운영을 지속할 수 있는 기반을 제공한다"고 평가</p><h3>Key Quotes</h3><p>• "This contract award is a testament to the partnership formed between Dolphin Drilling and Harbour Energy. It provides both parties with stability and the platform to continue to deliver safe and efficient operations." (이 계약 수주는 돌핀 드릴링과 해버 에너지 간 형성된 파트너십의 증거이며, 양사에 안정성과 안전하고 효율적인 운영을 지속할 수 있는 기반을 제공한다)</p><p>• "Dolphin Drilling now has USD 362 million in firm contract backlog with a further 849 million in LOI and options, materially improving future revenue and earnings visibility since the turn of the year." (돌핀 드릴링은 현재 3억 6천 2백만 달러의 확정 계약 백로그와 추가로 8억 4천 9백만 달러의 의향서 및 선택옵션을 보유하고 있어, 연초 이후 향후 수익성 가시성이 대폭 개선되었다)</p><h3>Technical Insights</h3><p>• Aker H 4.2 설계의 반잠수식 시추선은 수심 1,969피트의 북해 심해 환경에서 운영 가능한 고성능 플랫폼으로, 장기 채굴 작업에 적합한 안정적 운영 특성을 보유</p><p>• 1990년과 1974년 건조된 노후 시추선들의 지속적 운영은 해양 에너지 산업에서 적절한 유지보수와 현대화를 통해 수십 년 장수명 운영이 가능함을 시사</p><p>• 북해와 인도 해역에서의 동시 다중 계약 운영은 글로벌 해양 시추 산업의 지역적 수요 편차와 해양 에너지 인프라의 장기 가용성 중요성을 강조</p><p>• 8년 이상의 장기 계약 확보는 해양 석유·가스 산업의 자본 회수 주기와 리스킹 전략에서 계약의 안정성과 예측 가능성이 핵심 경쟁요소임을 반영</p></div>`,
      tags: ["Drilling Contracts","North Sea","Semi-submersible Rigs","Harbour Energy","Dolphin Drilling"],
      link: "https://www.offshore-energy.biz/dolphin-drillings-1990-built-rig-scores-north-sea-job-as-1974-built-semi-sub-stays-in-india/",
      coords: [2.5,56],
      location: "UK Continental Shelf, North Sea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-04-21
addEvents({
  "2026-04-21": [
    {
      type: "accident",
      title: "MT Honour 25 Seized by Somali Pirates: 10 Pakistani Crew Members Held for Ransom",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-13",
      image: "https://images.marinelink.com/images/maritime/w800/dummy-adobe-170595.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 팔라우 국적 유조선 MT Honour 25가 4월 21일 소말리아 펀틀랜드 해역에서 소말리 해적에게 피탈, 17명 승조원 중 파키스탄 국적 10명이 인질로 납치됨</p><p>• **인질 상황**: 납치 23일째 현재 승조원들이 깨끗한 음용수 부족으로 오염된 탱크수를 마시고 있으며, 하루 한 끼 밥으로만 생존 중</p><p>• **가족들의 호소**: 카라치 항만 부근에서 5개 가정이 정부의 구출 요청 시위 개최, 인질 가족들이 극심한 스트레스로 자녀들이 공황장애와 불안증 증상 보임</p><p>• **협상 진전 상황**: 파키스탄 외교부 발표에 따르면 해적과 파키스탄 정부 간 직접 협상 없이 선박 소유사가 주도적으로 협상 진행 중, 소말리 정부가 중재 역할</p><p>• **해역 보안 악화**: 2025년 완화되었던 소말리 해적 활동이 2026년 4월 펀틀랜드 해역에서 재증가, 영국 해상 거래 작전실이 높은 위협 수준 경고 발령</p><p>• **전략적 중요성**: 호르무즈 해협 실질적 폐쇄로 인한 아덴만-인도양 항로의 전 지구적 에너지 및 물자 수송 중요성 대두</p><h3>Key Quotes</h3><p>• "He says his brain isn't functioning. He's worried about his dad and that's all that's on his mind." (아들은 뇌가 제대로 작동하지 않으며 아버지 걱정으로만 가득 차 있다는 의미)</p><p>• "The ship owner is negotiating with the pirates and is in touch with the Somali government, which is keeping Pakistan informed of updates." (선박 소유사가 해적과 협상하고 있으며 소말리 정부와 연락 중이라는 파키스탄 외교부의 공식 입장)</p><p>• "Crew members reported the ship had run out of clean water, with sailors drinking dirty tank water and surviving on boiled rice once a day." (승조원들이 깨끗한 물 부족으로 오염수를 마시고 하루 한 끼로만 생존한다는 비인도적 상황)</p><h3>Technical Insights</h3><p>• **해적 대응 제약**: 유화물 운반 유조선의 특성상 소말리 정부 군부대가 강제 진압 작전 수행 불가능하여 장기 협상 불가피, 해양 물류 안보 취약점 노출</p><p>• **아덴만 해역 보안 재악화**: 호르무즈 해협 운영 차단으로 우회 항로 의존도 증가하면서 소말리 해적 활동 재개, 국제 해운 보안 체계 강화 필요</p><p>• **IMO/국제협력 한계**: 파키스탄 정부와 선박주(선사) 간 협상 역할 분담 모호, 해적 사건 해결 시 국가 간 해양안보 조정 메커니즘 개선 필요성 대두</p></div>`,
      tags: ["piracy","hostage","Somalia","Puntland","oil tanker","MT Honour 25"],
      link: "https://www.marinelink.com/news/families-pakistani-hostages-call-rescue-539175",
      coords: [49.2,9.5],
      location: "Puntland region, Somalia (Gulf of Aden)"
    }
  ]
});

// Auto-collected: 2026-05-13
addEvents({
  "2026-05-13": [
    {
      type: "news",
      title: "PteroDynamics to supply Transwing VTOL drone to Royal Australian Navy",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-13",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/P4-RAN.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• PteroDynamics Inc.가 Transwing VTOL 무인항공기(UAS) 시스템을 호주 왕립해군(RAN)에 공급하기 위한 계약을 체결했으며, 이는 회사의 첫 국제 방위산업 판매임</p><p>• P4 Transwing UAS 항공기와 교육 및 지원 서비스가 제공되며, RAN은 2027년부터 더 큰 P5 모델 구매 옵션을 보유함</p><p>• 2025년 4월 호주 국방부와 왕립해군 인원을 대상으로 한 성공적인 실증은 내륙 및 수상 환경에서의 운용 능력을 검증함</p><p>• AUKUS 삼자 안보 협력과 인도-태평양 지역의 전략적 중요성 증대가 자율 무인 해양 물류 플랫폼 도입을 견인함</p><p>• 미국-호주 방위산업 협력 강화와 신뢰할 수 있는 파트너 간의 협력이 인도-태평양 지역에서의 기술 혁신 기반을 조성함</p><h3>Key Quotes</h3><p>• "Transwing's unique combination of VTOL and fixed-wing performance capabilities for a range of missions" (다양한 임무를 위한 수직이착륙과 고정익 성능의 독특한 결합)</p><p>• "Advancing next-generation uncrewed capabilities that directly support the Integrated Force" (통합전력을 직접 지원하는 차세대 무인 능력 발전)</p><h3>Technical Insights</h3><p>• VTOL 무인항공기의 도입으로 제한된 공간에서의 이착륙 능력이 강화되어 해상 물류 작전의 효율성이 대폭 향상될 것으로 예상됨</p><p>• 자율 해양 물류 플랫폼의 도입은 IMO와 해양 규제 기관의 무인 선박 및 항공기 통합 운용에 관한 새로운 지침 개발을 촉발할 가능성이 높음</p><p>• AUKUS 협력 틀 내에서 호주, 미국, 영국 간의 자율 시스템 기술 표준화 및 상호운용성 강화가 해양 방위산업의 미래 방향을 결정할 것으로 예상됨</p></div>`,
      tags: ["Autonomous Systems","VTOL Drone","Royal Australian Navy","Defense Technology"],
      link: "https://www.navalnews.com/naval-news/2026/05/pterodynamics-to-supply-transwing-vtol-drone-to-royal-australian-navy/",
      coords: [151.2093,-33.8688],
      location: "Sydney, Australia"
    },
    {
      type: "news",
      title: "UK to contribute autonomous drones, jets and warship to Multinational Mission securing Strait of Hormuz",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-13",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/NavNews-Dragon-Gulf-CC-MoD-26.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국이 호르무즈 해협의 해양 자유항해 보장을 위한 다국적 군사 임무에 자율형 광해 탐지 드론과 대드론 시스템, 태풍 전투기, HMS Dragon 구축함을 배치할 계획<br>• 이 임무는 40개국 이상이 참여하는 다국적 군사 임무의 일환으로, 방위 장관회의에서 115백만 파운드의 신규 자금 지원 확정<br>• HMS Dragon은 중동으로 향하는 중이며 RFA Lyme Bay는 자율 시스템의 모함(mothership) 역할을 할 수 있도록 무인 장비 업그레이드 진행 중<br>• 호르무즈 해협은 전 세계 석유의 5분의 1이 통과하는 세계 최대 해상 무역로이며, 이 임무는 상선의 신뢰 회복 목표<br>• 영국은 이미 지역 내 1,000명 이상의 인력을 배치해 대드론팀과 전투기 중대가 영국 국민과 동맹국 보호에 중요한 역할 수행 중</p><h3>Key Quotes</h3><p>• "The UK is playing a leading role in securing the Strait of Hormuz, and we are demonstrating that today with new cutting-edge kit to protect our interests and secure the Strait." (영국이 호르무즈 해협 보장에 주도적 역할을 하고 있으며, 신규 최첨단 기술로 영국의 이익과 해협 보안을 지키고 있음)</p><p>• "This multinational mission will be defensive, independent, and credible." (이 다국적 임무는 방어적, 독립적, 신뢰할 수 있는 성격)</p><h3>Technical Insights</h3><p>• **자율형 광해 탐지 기술 도입**: 영국의 자율형 광해 탐지 드론과 대드론 시스템 배치는 해협 내 위협 대응의 효율성을 대폭 향상시킬 것으로 예상되며, 유인 자산 투입 최소화로 운영 비용 절감 가능</p><p>• **하이브리드 해군 전략 추진**: Royal Navy의 "Hybrid Navy" 개념 하에서 유인 전력(HMS Dragon)과 무인 자산의 유기적 통합으로 현대적 해양 안보 모델 구현</p><p>• **국제해상법 준수 기반의 항행 자유 확보**: IMO/UNCLOS와 일치하는 방어적·비호전적 성격의 다국적 임무를 통해 상업 해운의 신뢰 회복과 국제 해양 질서 유지</p><p>• **산업적 파급 효과**: 자율형 광해 탐지 및 드론 기술의 실전 배치는 향후 해양 보안 시스템 개발 표준화에 영향을 미칠 것이며, 관련 기술 수출 시장 확대 기회 제공</p></div>`,
      tags: ["autonomous systems","mine-hunting drones","counter-drone systems","maritime security","Strait of Hormuz","Royal Navy"],
      link: "https://www.navalnews.com/naval-news/2026/05/uk-to-contribute-drones-jets-and-warship-to-multinational-mission-to-secure-the-strait-of-hormuz/",
      coords: [56.2465,26.5953],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Klein Marine Systems Announces MANTIS UUV with Integrated Sonar Array",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-13",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/mantis-uuv-1.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Klein Marine Systems가 자율 수중 무인기(UUV) 플랫폼용 첨단 사이드스캔 소나 시스템인 MANTIS UUV를 발표했습니다.<br>• 스마트어레이(SmartArray) 기술을 통해 전자장비를 트랜스듀서 어레이에 직접 통합하여 무게, 크기, 전력 소비를 대폭 감소시켰습니다.<br>• 600 kHz 기본 주파수로 초당 6-8노트의 고속 운영이 가능하며, 측면당 150미터의 광대한 탐사 범위(총 300미터)를 제공합니다.<br>• 1.0cm의 횡단 해상도와 10cm의 종단 해상도를 제공하여 고품질 소나 이미지 생성이 가능합니다.<br>• 실시간 온보드 처리 기능으로 자율 의사결정 및 머신러닝 애플리케이션을 지원하며, 기뢰 대응, 수색/구조, 수로 측량, 해양 인프라 검사 등 다양한 작전 영역에 적용됩니다.<br>• Ethernet 기반 제어 및 데이터 인터페이스로 통합 복잡성을 감소시키고, SonarPro NXT 소프트웨어 플랫폼과 호환성을 제공합니다.</p><h3>Key Quotes</h3><p>• "consistent, high-resolution sonar imagery across changing survey ranges and speeds" (다양한 탐사 범위와 속도에서 일관성 있는 고해상도 소나 이미지 제공)<br>• "The SmartArray Technology approach embeds key electronics within the transducer array itself, a configuration intended to reduce size, weight, and power requirements" (스마트어레이 기술은 핵심 전자장비를 트랜스듀서 어레이에 내장하여 크기, 무게, 전력 요구량을 감소시킴)<br>• "Real-time onboard processing enables the sonar to process data during missions rather than requiring post-mission analysis, a capability that supports autonomous decision-making workflows and machine learning applications" (실시간 온보드 처리로 임무 중 데이터 처리가 가능하여 자율 의사결정 워크플로우와 머신러닝 애플리케이션을 지원)</p><h3>Technical Insights</h3><p>• **자율 해양 시스템의 페이로드 효율성**: SmartArray 기술의 전자장비 통합으로 UUV 운영자는 제한된 페이로드 용량을 보존하여 추가 센서나 장비를 탑재할 수 있게 되어, 자율 수중 임무의 다중 기능화가 용이해집니다.</p><p>• **실시간 데이터 처리와 자율 내비게이션**: 온보드 신호 처리 및 동적 포커싱, 적응 빔포밍 기술은 UUV가 사전 프로그래밍된 경로를 벗어나 실시간 환경 변화에 대응하는 자율 의사결정을 가능하게 하며, IMO 자율 선박 규제(MASS) 논의에서 요구되는 실시간 인지 능력 강화에 기여합니다.</p><p>• **해양 방위 및 민간 해양 인프라의 융합**: 기뢰 대응(MCM), 수색/구조, 수로 측량, 해양 인프라 검사 등 다양한 작전 영역 적용으로 방위산업과 상용 해양 산업 간의 기술 수렴이 심화되고 있으며, 이는 국제 해사 규정 표준화의 필요성을 높입니다.</p><p>• **머신러닝 기반 자동화의 진전**: Ethernet 기반 아키텍처와 SonarPro NXT 소프트웨어 플랫폼의 연계로 빅데이터 분석 및 머신러닝 알고리즘 통합이 가능해져, 향후 완전 자율 해양 운영 시스템의 기술적 기초를 형성합니다.</p></div>`,
      tags: ["Autonomous Underwater Vehicle","Sonar Technology","UUV","Marine Technology","Naval Systems"],
      link: "https://www.navalnews.com/naval-news/2026/05/klein-marine-systems-announces-mantis-uuv-with-integrated-sonar-array/",
      coords: [-71.5724,43.2081],
      location: "New Hampshire, USA"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-13
addEvents({
  "2026-05-13": [
    {
      type: "news",
      title: "U.K. Pledges Destroyer, Autonomous Mine Hunting Systems to Strait of Hormuz Mission",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-05-13",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 국방부가 호르무즈 해협 항행의 자유 보장을 위해 구축함 HMS Dragon(D35), 타이푼 전투기, 자율형 기뢰 탐지 시스템, 무인 수상함정(Kraken 드론 보트) 등으로 구성된 병력을 배치 발표<br>• 미국과 이란의 '지속가능한' 휴전협정 체결 이후 다국적 해양 보안 임무 참여<br>• HMS Dragon은 3월부터 지중해에 배치되었으며 현재 수에즈 운하를 거쳐 호르무즈 해협으로 이동 중<br>• 자율형 기뢰 탐지 시스템과 무인 수상함정(Kraken)의 배치로 감시, 정찰 및 위협 탐지 능력 강화<br>• 영국 해군의 자율 수상함정 운용으로 국제 해양 안보 임무의 자동화 및 효율성 제고</p><h3>Key Quotes</h3><p>• "The U.K. has pledged a force package that includes a destroyer, Typhoon fighter aircraft, autonomous mine hunting systems and unmanned surface vessels to secure freedom of navigation in the Strait of Hormuz" (영국이 호르무즈 해협의 항행의 자유를 보장하기 위해 구축함, 전투기, 자율형 기뢰 탐지 시스템, 무인 수상함정으로 구성된 병력을 배치하겠다고 약속)</p><p>• "The Royal Navy is sending destroyer HMS Dragon (D35), which has been deployed in the Mediterranean since March and is now making its way to the Suez Canal" (영국 해군이 3월부터 지중해에 배치되어 있던 HMS Dragon 구축함을 수에즈 운하를 거쳐 보내고 있음)</p><p>• "The U.K. also pledged the Royal Navy's autonomous Kraken drone boats, allowing the multinational force to sense" (영국이 자율형 Kraken 드론 보트를 배치하여 다국적 해군 연합이 감시 능력을 갖추도록 함)</p><h3>Technical Insights</h3><p>• 자율형 기뢰 탐지 시스템(Autonomous mine hunting systems)의 호르무즈 해협 배치로 기뢰 위협 탐지 및 제거 작전의 위험 감소 및 운영 효율성 향상<br>• 무인 수상함정(Kraken USV) 운용으로 24/7 지속적인 감시·정찰이 가능하며, 협소한 해역(Chokepoint) 모니터링에 유효<br>• IMO 및 국제 해양법 준수 하에 자율형 장비의 국제 해역 운용 사례로, 자율 선박의 실전 배치 및 운영 가능성 입증<br>• 다국적 해군 연합의 자율형 시스템 통합으로 해상 교통로(SLOCs) 보호 임무의 기술 혁신 가속화</p></div>`,
      tags: ["Autonomous Systems","Royal Navy","Strait of Hormuz","Maritime Security"],
      link: "https://news.usni.org/2026/05/13/u-k-pledges-destroyer-drone-hunting-systems-to-strait-of-hormuz-mission",
      coords: [53.5,26.1],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2026-05-14
addEvents({
  "2026-05-14": [
    {
      type: "news",
      title: "South Korean Cable Maker Taihan Acquires Cable Laying Vessel from DOF Group",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-14",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/South-Korean-cable-maker-buys-cable-laying-vessel-from-DOF.jpg?image-crop-positioner-ts=1778739432",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 한국 해양케이블 제조업체 대한전선이 노르웨이 DOF그룹으로부터 2016년 건조 케이블 부설선(CLV) '스칸디 커넥터'를 인수</p><p>• 10,000톤급 규모로 네덜란드 대멘사 설계, 27개 프로젝트에 약 1,300km 해저케이블 설치 실적 보유</p><p>• 기존 PALOS 선박과 함께 2척 운영으로 프로젝트 특성별 최적 선박 배치 가능한 이중 설치 시스템 구축</p><p>• 5월 14일 매매계약 체결, 138.4m 규모 선박은 8월 한국 도착 예정</p><p>• 글로벌 해상풍력 확대로 인한 케이블 부설선 수요 급증 상황에서 신조 대신 즉시 운영 가능한 고사양 선박 확보로 프로젝트 대응력 강화</p><p>• 해외 선박 의존도 감소로 국내 전력망 안정성 및 에너지 안보 강화 기대, 추가 용선사업 확대 계획</p><h3>Key Quotes</h3><p>• "The investment is particularly meaningful as it comes amid rapidly growing demand for large-scale cable laying vessels driven by the global expansion of offshore wind power" (글로벌 해상풍력 확대에 따른 대형 케이블 부설선 수요 증가 시점에서 의미 있는 투자)</p><p>• "By securing a high-specification CLV that can be deployed immediately rather than constructing a new vessel, Taihan has improved project responsiveness and operational stability" (신규 건조 대신 즉시 운영 가능한 고사양 선박 확보로 프로젝트 대응성 및 운영 안정성 향상)</p><h3>Technical Insights</h3><p>• 케이블 부설선의 국내 확보로 해상풍력 개발 시 설치 기술력 고도화 및 국제 수주경쟁력 강화 가능</p><p>• 삼각주 케이블, 수출 케이블, 장거리 전력망 연결 및 HVDC 송전망 프로젝트 등 다양한 해양 에너지 인프라 구축에 신속한 대응 체계 구성</p><p>• 한국의 해상풍력 단지 개발 가속화에 따라 국내 용선 의존도 감소로 에너지 자립도 향상 및 프로젝트 비용 경쟁력 개선 기대</p><p>• 이중 선박 운영 체계는 프로젝트 환경별 최적화된 선박 배치로 설치 효율성 극대화 및 글로벌 공급 불균형 해소에 기여</p></div>`,
      tags: ["Cable Laying Vessel","Offshore Wind","South Korea","Submarine Cables"],
      link: "https://www.offshore-energy.biz/south-korean-cable-maker-buys-cable-laying-vessel-from-dof/",
      coords: [127,37.5],
      location: "South Korea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-14
addEvents({
  "2026-05-14": [
    {
      type: "accident",
      title: "Somali Piracy Escalation: Multiple Vessel Hijackings and Ransom Demands",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-14",
      image: "https://images.marinelink.com/images/maritime/w800/honour-source-170629.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **소말리아 해적 활동 급증**: 4월 21일 유조선 Honour 25 외 최소 3척이 소말리아 펀틀랜드 해역에서 납치되어 해적 활동 재확대 추세 확인<br>• **피해 현황 및 신원**: 파키스탄 승무원 10명 포함 총 17명이 Honour 25에 탑승 중이었으며, 현지 주민들의 항의 시위로 인명 상황이 국제적 관심 대상화<br>• **신고가 인상 추세**: 유조선 Eureka의 신고가가 300만 달러에서 1000만 달러로 상향 조정되어 해적 활동의 조직화 및 확대 의도 시사<br>• **전략적 배경**: 홍해 및 호르무즈 해협 군사작전 집중으로 인한 해적퇴치 해군 병력 부족, 유가 상승에 따른 유조선 유인 증가, 소말리아 개발 미국 자금 지원 중단이 복합적 요인<br>• **근본 원인 분석**: 정치 불안정과 극빈곤 등 구조적 문제가 해결되지 않으면서 해적들이 지역사회에서 국가를 대체하는 자치 구조로 변모<br>• **산업 영향**: 팔레몬 해양 보안 보고서에 따르면 서인도양 해상 상황이 악화되고 있어 상선 운항 및 보험료 상승 시사</p><h3>Key Quotes</h3><p>• "Taken together, they point to something more important: the conditions that enable piracy are building again in the Western Indian Ocean." <br>(이들 사건을 종합적으로 볼 때, 서인도양에서 해적 활동을 가능하게 하는 조건들이 다시 형성되고 있음을 의미)</p><p>• "Pirates legitimise their attacks with a Robin Hood narrative, presented as a defence of the common good. By guaranteeing a level of prosperity that Mogadishu cannot offer and redistributing the proceeds, they gain protection from local communities."<br>(해적들은 공익 방어라는 로빈훗식 명분으로 공격을 정당화하며, 모가디슈가 제공할 수 없는 수준의 번영을 보장하고 수익을 재분배함으로써 지역사회의 보호와 정치적 통제력을 확보)</p><h3>Technical Insights</h3><p>• **해상 보안 정보 공유 필요성**: 팔레몬 마리타임 같은 민간 해양보안 기업의 위협 정보가 선박 운영자와 해운산업에 공유될 필요성 증가<br>• **IMO 해상 안전 규정 강화**: 해적 위협 해역 통과 선박의 보안 조치 강화, 선원 보호 프로토콜 강화 등 국제해사기구(IMO) 지침 재검토 필요<br>• **자율운항선박의 해적 취약성**: 향후 자율운항선박(MASS) 도입 시 해적 대응 능력 부족 문제로 고위험 해역 운항 제약 예상<br>• **지역 해양 감시 기술 고도화**: 드론, 인공위성 영상, AI 기반 이상 활동 감지 등 첨단 기술을 통한 해적 조기 경보 및 해군 대응 효율화 필수</p></div>`,
      tags: ["Piracy","Somalia","Vessel Hijacking","Ransom","Maritime Security"],
      link: "https://www.marinelink.com/news/somali-piracy-rise-539235",
      coords: [49.2,8.5],
      location: "Somalia (Puntland region), Western Indian Ocean"
    },
    {
      type: "accident",
      title: "India-Flagged Cargo Vessel Sinks Off Coast of Oman After Suspected Drone/Missile Attack",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-14",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stocknataliia-170622.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 인도 국적 목선(木船) 하지 알리호(Haji Ali)가 오만 해역에서 드론 또는 미사일 공격으로 추정되는 화재로 인해 침몰<br>• 승선 인원 14명 전원 오만 해안경비대에 의해 구조되어 디바 항으로 이송됨<br>• 이란-미국/이스라엘 분쟁 개시(2월 28일) 이후 당 해역에서 침몰한 두 번째 선박 사건<br>• 해협 호르무즈 해역 통과 중인 상선 공격으로 약 2만 명의 선원이 해역 탈출 불가 상태<br>• 인도 정부가 상선 공격을 규탄하며 "민간 해운과 항해의 자유 침해"에 대한 깊은 우려 표명<br>• 오만 해역 통과 인도 국적 선박이 이번이 적어도 3번째 공격 사건</p><h3>Key Quotes</h3><p>• "The attack on an Indian-flagged ship off the coast of Oman yesterday is unacceptable and we deplore the fact that commercial shipping and civilian mariners continue to be targeted" <br>(오만 해역의 인도 국적 선박 공격은 용납할 수 없으며, 상선과 민간 선원이 계속 목표가 되는 것을 깊이 유감으로 생각한다)</p><p>• "India reiterates that targeting commercial shipping and endangering innocent civilian crew members, or otherwise impeding freedom of navigation and commerce, should be avoided"<br>(인도는 상선 공격, 무고한 민간 선원 위험, 항해 자유 및 상업 활동 방해를 삼가야 한다고 재차 강조한다)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 해상교통 보안 위기**: 글로벌 에너지 운송의 약 30%를 담당하는 전략적 해역에서의 반복적 공격으로 국제 해운 산업의 구조적 위험 증대<br>• **드론/미사일 기반 신형 해상 위협**: 전통적 해적 행위와 달리 고도화된 무기체계 사용으로 인한 선박 피해 양상 변화 – IMO 해상보안 규정(ISPS Code) 재정비 필요<br>• **민간 해운 국제분쟁 피해 심화**: 분쟁 당사국이 아닌 제3국(인도) 선박의 피해로 국제해사기구의 전시(戰時) 해운 보호 메커니즘 강화 촉구<br>• **해운 경로 회피로 인한 경제적 영향**: 호르무즈 해협 우회 항로 선택으로 인한 운송비 증가 및 2만여 선원의 억류로 국제해사노동기구(ILO) 협약 위반 상황 발생</p></div>`,
      tags: ["Sinking","Attack","Oman Waters","Indian Vessel","Drone Strike","Maritime Security"],
      link: "https://www.marinelink.com/news/indiaflagged-cargo-vessel-sinks-off-coast-539221",
      coords: [58.5921,23.61],
      location: "Off Coast of Oman / Gulf of Oman"
    },
    {
      type: "news",
      title: "U.S. Navy Increases Submarine Investment in 2027-2031 Shipbuilding Plan",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-14",
      image: "https://www.navalnews.com/wp-content/uploads/2026/01/Screenshot-2026-01-06-at-15-44-35-585534131_1324141103077032_203544480535893070_n.jpg-JPEG-Image-1013-×-1350-pixels-—-Scaled-96-1.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **대규모 예산 증액**: 미 해군이 2027-2031회계년도 미래방위계획(FYDP)에서 잠수함에 총 1,249억 달러를 배정하여 해군 수중전력 현대화에 대규모 투자를 단행 중</p><p>• **핵전략 핵심자산 확보**: 콜롬비아급(SSBN-826) 탄도미사일 잠수함 5척, 버지니아급 공격잠수함 10척 획득을 통해 핵3원체제의 해상 억제력 유지 및 강화</p><p>• **산업기반 고도화**: 잠수함 산업 공급망 안정화 및 인력 확충에 62억 달러를 투자하여 연간 콜롬비아급 1척, 버지니아급 2척 생산 능력 확보</p><p>• **기술적 우위 강화**: 콜롬비아급의 전자식 추진·제어 시스템과 50년 이상의 저소음 기술 적용으로 오하이오급 퇴역에 따른 전략 억제력 공백 메우기</p><p>• **생산 일정 확정**: 콜롬비아급 1-3번함은 2029-2031년 인수, 4-8번함은 2032-2036년 인수 예정으로 장기 전력화 로드맵 수립</p><h3>Key Quotes</h3><p>• "Our sea-based strategic deterrent—the SSBN force and its associated NC3—are the bedrock of our national security and provide the most survivable leg of the Nuclear Triad, ensuring the President has strategic options to deter aggression and maintain peace." (미 해군의 해상 기반 전략적 억제력은 국가 안보의 초석이며, 핵3원체제 중 가장 생존성 높은 전력으로서 대통령이 침략을 억지하고 평화를 유지할 전략적 선택지를 확보케 함)</p><h3>Technical Insights</h3><p>• **전략 핵잠 현대화의 필수성**: 콜롬비아급은 오하이오급의 노후화로 인한 해상 핵억제력 공백을 메우는 핵심으로, 극도의 저소음 설계와 최신 전자식 추진체계로 50년 이상의 운용 수명을 확보하는 것이 해양 안보의 근본 요소</p><p>• **산업 공급망의 복원력 강화**: 블록VI 다년도 계약(Multi-year Procurement) 체계로 버지니아급의 안정적 수요를 보장하여 조선 산업의 생산 기지 유지 및 노동력 확보를 동시에 달성하는 전략적 접근</p><p>• **고급 수중 지배력 유지**: 버지니아급 블록VI/VII 획득을 통해 공격잠수함의 우위성 확보로 해양 통제 능력을 지속하며, 이는 인도-태평양 지역에서의 미 해군의 수중 작전 우월성 보장과 직결됨</p></div>`,
      tags: ["U.S. Navy","Submarine","Defense Budget","Columbia-class","Virginia-class"],
      link: "https://www.navalnews.com/naval-news/2026/05/u-s-navy-goes-all-in-on-submarines-in-released-shipbuilding-plan/",
      coords: [-77.0369,38.8951],
      location: "United States (Washington D.C.)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-14
addEvents({
  "2026-05-14": [
    {
      type: "news",
      title: "Oil Prices Rise Amid Ship Attacks and Seizures in Strait of Hormuz",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-15",
      image: "https://images.marinelink.com/images/maritime/w800/source-government-170630.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협 내 선박 공격과 압수 우려로 유가 상승 - 브렌트유 배럴당 $106.32, WTI $101.71으로 인상<br>• 이란 해양경비대가 UAE 인근에서 선박 1척을 압수했으며, 수요일에는 인도 화물선이 오만 인근 해역에서 침몰<br>• 이란 혁명수비대는 수요일 저녁 이후 30척이 호르무즈 해협을 통과했다고 주장하나, 전쟁 이전 일일 통상 140척 대비 대폭 감소<br>• 트럼프 미국 대통령과 시진핑 중국 주석이 호르무즈 해협 해상운송로 개방 유지에 합의<br>• 해통기금 분석가 양안(Yang An)은 유가의 주 원인이 공급 부족이라고 언급, 선박 통과로 우려 일부 완화되었으나 추세 변화 미흡</p><h3>Key Quotes</h3><p>• "Ships passing through the strait eased some market concerns, but not enough to change the strong trend driven by tight supply." (해협을 통과하는 선박들이 시장 우려를 다소 완화했지만, 공급 부족으로 인한 강한 추세를 변화시키기에는 충분하지 않다)</p><p>• "China was being very pragmatic about involvement with Iran, and it was important to China to have the Strait of Hormuz open." (중국은 이란 관련 개입에 매우 실용적이며, 호르무즈 해협 개방이 중국에게 중요하다)</p><h3>Technical Insights</h3><p>• 호르무즈 해협은 전 세계 해상 석유 거래의 약 21%가 통과하는 전략적 해상교통로로서, 지정학적 긴장으로 인한 선박 운항 차질은 국제유가에 직결되는 구조<br>• 선박 압수와 침몰 사건은 SOLAS(국제해상인명안전규칙) 및 IMO 안전기준 준수와 해역 보안 강화의 필요성을 대두시키며, 해운사들의 보험료 상승과 운항 경로 변경 압박 초래<br>• 해협 통과 선박 수의 급감(일일 30척 vs. 140척)은 해운업계의 우회 항로 선택 증가를 의미하며, 장거리 운항으로 인한 연료비 증가와 운송 비용 상승을 야기하는 산업적 파장 발생</p></div>`,
      tags: ["Oil Market","Strait of Hormuz","Ship Seizure","Iran","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/oil-prices-rise-amid-fears-ship-attacks-539237",
      coords: [56.27,26.12],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "AI Technology Boosts FarSounder Navigation Capabilities with ProteusCore Integration",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-14",
      image: "https://images.marinelink.com/images/maritime/w800/source-farsounder-170627.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• FarSounder의 Argos 전방향 소나(FLS) 시스템이 Tocaro Blue의 ProteusCore™ AI 소프트웨어와 통합되어 해양 네비게이션 능력이 강화됨<br>• ProteusCore는 300만 개 이상의 레이더 프레임으로 학습된 머신러닝 모델을 활용하여 목표 탐지 및 환경 인식 능력 제공<br>• Autofocus 기능은 해상 및 기상 조건에 따라 레이더 설정(범위, 게인)을 자동으로 조정하여 수동 조작 필요성 제감<br>• 무인선박, 원양크루즈선, 슈퍼요트, 상업용 선박, 정부 함정 등 전 세계 다양한 선박에서 활용 중<br>• 시스템은 AIS 신호가 없는 선박 분류, 부표, 해안선, 수중 장애물 식별 등 다기능 인식 제공</p><h3>Key Quotes</h3><p>• "ProteusCore transforms marine radar into an intelligent perception sensor capable of detecting, classifying, and tracking objects to support vessel control, collision avoidance, and safer navigation." (ProteusCore는 해상 레이더를 지능형 인식 센서로 변환하여 선박 제어, 충돌 회피 및 안전한 항해를 지원하는 목표 탐지, 분류 및 추적 능력 제공)</p><p>• "Argos FLS delivers a continuously updated 3D view enabling safer navigation in poorly charted waters, shallow coastlines, and many changing environments." (Argos FLS는 미측량 해역, 얕은 해안선 및 다양한 변화하는 환경에서 안전한 항해를 가능하게 하는 지속적으로 업데이트된 3D 보기 제공)</p><h3>Technical Insights</h3><p>• **AI 기반 레이더 인식 기술**: ProteusCore의 머신러닝 모델은 대규모 레이더 데이터셋(300만 프레임)을 학습하여 해상 목표 탐지 정확도 향상, 자율운항선 및 무인선박의 COLREG 준수 역량 강화</p><p>• **해양 감지 능력 통합**: 전방향 소나(FLS)와 AI 레이더 인식의 결합으로 수중(해저, 수주) 및 수상(선박, 부표, 해안선) 환경을 동시에 인식 가능하여 자율항해 안전성 대폭 향상</p><p>• **자동 시스템 조정**: Autofocus 기능은 기상 및 해상 조건 변화에 실시간으로 대응하는 적응형 네비게이션 제공으로, IMO 자율운항선 기준의 "human-equivalent" 인식 요구사항 충족에 기여</p><p>• **비AIS 목표 인식**: AIS 송신이 없는 중소형 선박, 어선, 장애물 등을 분류 식별하는 능력으로 자율운항선의 실해역 적용 가능성 증대 및 해양 교통 안전성 제고</p></div>`,
      tags: ["AI Navigation","Forward Looking Sonar","Autonomous Vessels","Collision Avoidance"],
      link: "https://www.marinelink.com/news/ai-technology-boosts-farsounder-539233",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "Wide Barge Innovation Could Reduce Crane Dependency for Offshore Wind Turbine Installation",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-14",
      image: "https://images.marinelink.com/images/maritime/w800/source-sintef-170626.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• SINTEF, Aker Solutions, Sarens, BOA가 협력하여 풍력 터빈 기초 설치용 초대형 바지선 설계 및 테스트 진행 - 길이 166m, 폭 73m 이상의 세계 최대급 규모</p><p>• 기존에는 전 세계 5척의 선박만이 수천 톤 무게의 해상 풍력 터빈 기초 구조물 운반 가능했으나, 이 바지선은 동시에 여러 개의 기초 구조물 수송 가능</p><p>• 석유·가스 산업의 경험을 활용하여 Trondheim의 SINTEF Ocean Basin에서 모형 시험 수행 - 결과는 매우 긍정적</p><p>• 바지선은 30m 이상의 깊이까지 강하 가능하며 갑판이 수심 22.5m까지 침수되도록 설계되어 유연한 운영 가능</p><p>• 소형 크레인 선박 또는 무 크레인 방식으로 화물 하역 가능 - 운영 비용 절감 및 접근성 개선</p><p>• WindRise 프로젝트의 성공으로 노르웨이 해상풍력 공급산업의 국내외 경쟁력 강화 예상</p><h3>Key Quotes</h3><p>• "We are very satisfied with the tests that we've done so far. The results align well with the numerical analyses that we carried out in advance," says Robert Indergård, a senior research scientist at SINTEF. (SINTEF의 선임 연구원 Robert Indergård는 현재까지의 시험 결과가 사전 수치 분석과 일치한다며 만족감을 표시)</p><p>• "The cargo can either be floated out without a crane vessel altogether or lifted off the barge using smaller, cheaper and more accessible vessels." (화물을 크레인 선박 없이 부유시키거나, 더 작고 저렴하며 접근 가능한 선박으로 바지선에서 하역할 수 있다는 것은 운영 유연성 증대를 의미)</p><h3>Technical Insights</h3><p>• **극한 해상 환경 대응 기술**: 바지선의 자체 힌지 시스템과 리프팅 프레임이 다양한 파도 조건에서 구조물의 안정성을 유지할 수 있도록 설계되어, 가혹한 해상환경에서의 안정적 운영 가능성 입증</p><p>• **중량물 해상운송의 패러다임 전환**: 기존의 고가 대형 크레인 선박(월드와이드 5척)에 대한 의존도를 감소시키고, 소형 크레인 또는 무크레인 방식 도입으로 해상풍력 설치 비용 절감 및 산업 진입장벽 완화</p><p>• **공급망 효율화 및 지속가능성**: 여러 기초 구조물을 동시 운송함으로써 왕복 항차 감소, 연료비 및 탄소 배출 감소 - 재생에너지 산업의 탄소 중립성 강화</p><p>• **조선산업 기술 혁신 기여**: 석유·가스 산업의 엔지니어링 경험을 재생에너지 섹터에 적용하는 사례로, 기술 이전과 산업 간 협력의 모범 사례 제시</p></div>`,
      tags: ["Offshore Wind","Installation Technology","Heavy Lift Vessel","Innovation","SINTEF Research"],
      link: "https://www.marinelink.com/news/wide-barge-reduce-crane-needs-turbine-539232",
      coords: [10.3951,63.4305],
      location: "Trondheim, Norway"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-15
addEvents({
  "2026-05-15": [
    {
      type: "news",
      title: "HII and MetalCraft Marine Deliver ROMULUS-25 USV Prototypes for U.S. Marine Corps",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-15",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/ROMULUS-25-HII.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• HII와 MetalCraft Marine이 미국 해병대를 위해 ROMULUS-25 무인 표면함정(USV) 2척 프로토타입을 2025년 12월 납품하고 해상 테스트 완료<br>• 방위혁신부(DIU) 계약으로 소형 자율항해 무인정 개발 프로젝트의 일환이며, 미군 및 동맹군의 해군작전 지원 목표<br>• ROMULUS-25는 27피트 고속 요격정으로 1,000파운드 페이로드 탑재 능력과 1,000해리 항속거리 보유<br>• HII의 Odyssey AI 기반 자율항해 시스템으로 구동되며, 5년간 2,200시간 이상의 정부 주도 테스트 검증 완료<br>• Odyssey 자율항해 기술은 30개 이상의 플랫폼에 배치되어 12,000시간 이상의 해상 운영 실적 보유<br>• 미군 다영역작전(Multi-Domain Operations) 개념 하에서 유무인 혼합 함대 역량 고도화의 핵심 사례</p><h3>Key Quotes</h3><p>• "Successfully delivering on this prototype contract with the Defense Innovation Unit and the U.S. Marine Corps is a strong recognition of HII's deep experience and the maturity of our proven autonomous technologies" <br>(방위혁신부 및 해병대와의 프로토타입 계약 성공적 완료는 HII의 깊이 있는 경험과 검증된 자율항해 기술의 성숙도를 인정받은 것)</p><p>• "The ROMULUS-25, powered by our Odyssey autonomy suite, builds on thousands of hours of successful at-sea operations and demonstrates how scalable, AI-enabled unmanned systems can extend the reach, endurance, and effectiveness of naval forces"<br>(Odyssey 자율항해 시스템으로 구동되는 ROMULUS-25는 수천 시간의 성공적 해상운영 경험을 바탕으로, 확장 가능한 AI 기반 무인시스템이 해군의 작전 범위, 지속성 및 효과를 어떻게 확대할 수 있는지 입증)</p><h3>Technical Insights</h3><p>• **Odyssey 자율항해 시스템의 기술 성숙도**: 5년간 2,200시간 정부 테스트와 30개 플랫폼에서 12,000시간 운영 기록은 IMO 무인선박 규제 승인 기준(code of practice) 충족을 위한 강력한 운영 데이터 베이스 제공</p><p>• **모듈식 개방형 시스템 아키텍처(MOSA)**: 센서 통합, Minotaur 표적화 네트워크 연계, AI 기반 접촉 식별 기능은 IMO COLREG 자동화 준수와 SOLAS 안전 요건 이행의 선례 구축</p><p>• **소형 USV 스펙트럼 확장**: 7피트 마이크로 USV부터 190피트 ROMULUS-190까지 다층적 플랫폼 전개는 해양 지역별, 임무별 자율운영 역량 고도화의 표준화 추세 반영</p><p>• **유무인 혼합함대 운영개념**: 해병대 및 동맹군 협력 작전 구도에서 자율USV의 소요군 인수-인도(FOC) 단계 진입으로, 방위사업 무인화 가속화 및 국방 자율시스템 산업 발전의 촉매 역할</p></div>`,
      tags: ["Autonomous USV","ROMULUS-25","HII","U.S. Marine Corps","Odyssey Autonomy"],
      link: "https://www.navalnews.com/naval-news/2026/05/hii-metalcraft-marine-deliver-romulus-25-usv-prototypes-for-u-s-marine-corps/",
      coords: [0,0],
      location: "U.S. Marine Corps (unspecified)"
    },
    {
      type: "news",
      title: "Velesto Energy Secures Multi-Well Offshore Drilling Contract in Malaysia",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-15",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2024/08/Velesto_NAGA-8_691x518.jpg?image-crop-positioner-ts=1725020110",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 말레이시아 석유굴착 회사 벨레스토 에너지(Velesto Energy)가 히비스커스 오일&가스(Hibiscus Oil & Gas)와의 계약으로 해상 잭업 시추선을 공급하기로 확정</p><p>• 본 계약은 벨레스토의 자회사 벨레스토 드릴링(Velesto Drilling)을 통해 체결되었으며, 제3자 보유 잭업 시추선을 첫 차용하는 "자산 경량화" 구조의 거래</p><p>• 작업 범위: 8개의 마개 및 폐기(P&A) 공정, 1개의 탐사 공정, 최대 7개의 추가 선택 공정 포함</p><p>• 2026년 5월부터 말레이시아 해역(PM3 CAA 및 북사바) 일대에서 시추 작업 개시 예정</p><p>• 이번 계약으로 벨레스토의 수주 잔액 강화 및 운영 능력 확대, 다양한 계약 구조를 통한 지속적 자산 활용 가능</p><h3>Key Quotes</h3><p>• "This award reflects Velesto's ability to support our clients in different ways while maintaining the same focus on operational excellence, safety and performance." <br>(이 수주는 벨레스토가 운영상 우수성, 안전 및 성과에 대한 초점을 유지하면서 다양한 방식으로 고객을 지원할 수 있는 능력을 반영한다)</p><p>• "As our first asset-light arrangement, it broadens how we can execute projects while maintaining the same discipline and consistency in how we operate."<br>(우리의 첫 번째 자산 경량화 구조로서, 같은 규율과 일관성을 유지하면서 프로젝트를 실행하는 방식을 확대한다)</p><h3>Technical Insights</h3><p>• 자산 경량화(Asset-light) 계약 구조 도입으로 해상 시추 기업의 유연성 강화 및 시장 변동성에 대한 신속한 대응 체계 구축 가능</p><p>• 제3자 보유 잭업 시추선 활용을 통해 자본 집약적 장비 소유 부담을 경감하고, 프로젝트별 최적의 자원 배분 전략 실행</p><p>• 말레이시아 해역에서의 다중 시추 공정(P&A 및 탐사) 동시 수행으로 오퍼레이션 효율성 및 고객 가치 제공 극대화</p><p>• 해상에너지 산업의 구조적 변화 추세 반영: 소유 자산 중심에서 운영 능력 중심의 경쟁력 우위 모델로 산업 재편</p></div>`,
      tags: ["Jack-up Rig","Offshore Drilling","Malaysia","Velesto Energy","Hibiscus Oil & Gas"],
      link: "https://www.offshore-energy.biz/velesto-lines-up-multi-well-offshore-rig-job-in-southeast-asia/",
      coords: [102.6331,4.2105],
      location: "Offshore Malaysia (PM3 CAA and North Sabah)"
    },
    {
      type: "news",
      title: "Azerbaijan Launches Offshore Wind Measurement Campaign with LiDAR in Caspian Sea",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-15",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/EOLOS-Floating-LiDAR-Solutions-buoy-Azerbaijan-1024x577-1.jpg?image-crop-positioner-ts=1778843498",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 아제르바이잔 그린에너지(AGEC)가 카스피해에서 스페인 EOLOS사의 부유식 라이다 부이(FLS200)를 배치하여 해상 풍력 측정 캠페인 개시<br>• 초기 용량 200MW, 총 용량 600MW의 해상풍력 프로젝트 개발을 위한 1년 예정의 현장 측정 및 데이터 수집<br>• 아제르바이잔 에너지부와 AGEC의 Clean Energy Capital이 해상풍력 개발 협약 체결(2025년 12월)<br>• EOLOS가 2026년 1월 입찰을 통해 계약 수주, OWC(ABL Group 계열사)가 기술 자문 역할 수행<br>• 카스피해 지역 최초의 해상풍력 현장 평가(site assessment) 프로젝트로, 신흥 재생에너지 시장 개발의 중요한 초석</p><h3>Key Quotes</h3><p>• "We are excited to witness the first tangible steps towards our diversification strategy. EOLOS consistently demonstrated their leading competence to deliver what we require and we have no doubt this dedication of high service will continue throughout the campaign." (우리의 다각화 전략의 첫 번째 실질적 진전을 목격하게 되어 흥분된다. EOLOS는 필요한 요구사항을 충족시킬 수 있는 탁월한 역량을 지속적으로 입증했다.)</p><p>• "This award reflects the rise of new markets that need to be fostered and attended to where experience can be carried over from more familiar geographies." (이 수주는 기존의 익숙한 지역에서의 경험을 적용할 수 있는 새로운 시장의 부상을 반영한다.)</p><h3>Technical Insights</h3><p>• 부유식 라이다(Floating LiDAR) 기술의 카스피해 지역 최초 도입으로 해상 풍력자원 평가 기술의 신흥시장 확대를 의미함<br>• Stage 3 인증 FLS200 시스템은 풍속/해상기상/생물오염 모니터링 장비와 해저 고정식 장비를 조합하여 정밀한 해양 환경 데이터 수집<br>• 1년간의 장기 캠페인을 통한 은행급(bank-grade) 데이터 확보로 터빈 및 기초 설계 선택의 과학적 근거 제공<br>• 카스피해의 독특한 환경(염도, 수심, 해상 조건)에서의 라이다 운영 경험 축적은 향후 중동, 중앙아시아 해상풍력 개발에 기여할 것으로 예상됨</p></div>`,
      tags: ["Offshore Wind","LiDAR Technology","Caspian Sea","Renewable Energy","Wind Measurement","Azerbaijan"],
      link: "https://www.offshore-energy.biz/azerbaijan-kicks-off-offshore-wind-measurement-campaign-with-lidar-deployed-in-caspian-sea/",
      coords: [51.1694,40.1431],
      location: "Caspian Sea, Azerbaijan"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-16
addEvents({
  "2026-05-16": [
    {
      type: "news",
      title: "Massachusetts Maritime Academy Cadets Win Honorable Mention for Bulk Carrier Conversion Paper",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-05-16",
      image: "https://maritime-executive.com/media/images/article/MIT-SNAME-Paper-Night.fa4b71.f69cd2.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 매사추세츠 해양 아카데미의 6명 학생 팀이 MIT에서 개최된 SNAME Paper Night에서 "벌크 선박을 이동식 발전소로: 대체 전원 솔루션 설계" 논문으로 우수상(Honorable Mention) 수상<br>• Jackson Perrault, Colby Townsend, Nico Restrepo, Tiernan Moran, Devlin Keon, Hung Tran이 저자로 참여<br>• 논문은 기존 벌크 운반선을 해안 및 도서 지역에 전력을 공급할 수 있는 이동식 발전소로 전환하는 기술적 실현 가능성 평가<br>• SNAME Student Paper Awards는 해양 및 해상 산업 관계자들을 위해 매년 시상하는 권위 있는 학생 논문상<br>• 이는 해양 산업의 미래 지도자들이 선박 재활용 및 에너지 전환 분야에서 창의적 솔루션 개발 중임을 보여주는 사례</p><h3>Key Quotes</h3><p>• "Congratulations to Jackson, Colby, Nico, Tiernan, Devlin, and Hung for their research, compilation, and presentation of an outstanding paper. Their achievement demonstrates the high level of dedication and technical skill our cadets bring to every challenge." (학생들의 연구, 컴파일, 발표에 축하하며, 이는 학생들이 모든 도전에 가져오는 헌신과 기술 능력의 높은 수준을 보여준다는 의미)</p><h3>Technical Insights</h3><p>• 기존 벌크 운반선의 이차적 활용 가능성 검토로 해양 산업의 순환 경제 및 친환경 에너지 전환 동향 반영<br>• 모바일 발전소 개념은 기후 변화 대응 및 도서 지역 전력망 취약성 해소를 위한 해상 인프라 혁신 솔루션으로 평가<br>• SNAME과 같은 전문 학회의 학생 논문 상은 차세대 해양 엔지니어의 기술 역량 강화 및 산업 문제 해결 능력 증진에 기여</p></div>`,
      tags: ["Maritime Education","SNAME","Ship Conversion","Alternative Energy","Mobile Powerplant"],
      link: "https://maritime-executive.com/article/mass-maritime-s-sname-cadets-earn-honorable-mention",
      coords: [-71.0096,42.3601],
      location: "Massachusetts, USA"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-16
addEvents({
  "2026-05-16": [
    {
      type: "news",
      title: "BlackSea Technologies Demonstrates GARC USV Capabilities in Arctic Sentry 2026 Exercise",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-16",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/BlackSea-Technologies-Demonstrates-GARC-USV-Capabilities-in-Norway-.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **BlackSea Technologies의 GARC 무인 수상 시스템이 NATO 연합 군사 훈련인 Arctic Sentry 2026에서 북극권 극한 환경에서의 자율 운용 능력을 입증함**</p><p>• **참여 기관: BlackSea Technologies, U.S. 6th Fleet, U.S. Unmanned Surface Vessel Squadron 3 (USVRON-3), 노르웨이 왕립 해군, NATO Joint Force Command Norfolk**</p><p>• **GARC는 극저온 해양 환경, 동적 분쟁 지역에서의 효과적 운용 능력, NATO 연합군과의 상호운용성 증명, 차세대 해군 전투원 훈련 도구로서의 역할 수행**</p><p>• **소형 분산형 자율 수상 시스템의 전략적 가치 강조 – 극도의 내구성, 적응성, 자율 운용 능력이 필수인 해역에서의 해군 작전 지원**</p><p>• **NATO가 2월 출범한 Arctic Sentry는 북극 및 고위도 지역에서 동맹의 군사 태세를 강화하기 위한 다차원 연합 활동**</p><h3>Key Quotes</h3><p>• "Arctic Sentry proves that GARC can operate effectively in dynamic, contested maritime environments north of the Arctic Circle" (북극권 북쪽의 역동적이고 분쟁 지역 해양 환경에서 GARC가 효과적으로 운용될 수 있음을 증명)</p><p>• "The exercise further cements our nation's military partnerships with key European allies and reflects BlackSea's commitment to preserving freedom of action at sea by delivering scalable, intelligent tools to naval forces around the world" (훈련을 통해 유럽 주요 동맹국과의 군사 협력을 강화하고, 전 세계 해군에 확장 가능한 지능형 도구를 제공함으로써 해상 행동의 자유 보존에 대한 BlackSea의 약속 반영)</p><h3>Technical Insights</h3><p>• **극저온 해양 환경에서의 자율 수상 시스템(USV) 운용 검증 – 배터리, 통신, 센서 성능 등 극한 환경 적응성이 핵심 기술 과제로 부상**</p><p>• **NATO 연합군 상호운용성 강화 – GARC의 데이터 링크, 명령 통제 시스템이 다국적 함대와의 통합 운용에 충분한 호환성을 갖춤을 입증**</p><p>• **분산형 해양 작전(Distributed Maritime Operations, DMO) 개념의 실전 검증 – 소형 자율 수상 시스템이 전통적 대형함정을 보완하는 새로운 해군 전력 구성 방식 확립**</p><p>• **IMO/국제 규제 차원의 함의 – 군용 자율 시스템의 민간 해운 영역 기술 이전 가능성 및 자율선박 국제 규제 체계 수립 시 군용 운용 표준의 영향력 증대**</p></div>`,
      tags: ["autonomous surface vessel","USV","NATO exercise","Arctic operations","GARC","unmanned systems"],
      link: "https://www.navalnews.com/naval-news/2026/05/blacksea-technologies-demonstrates-garc-usv-capabilities-in-norway/",
      coords: [11.9273,68.9585],
      location: "Ramsund, Norway"
    },
    {
      type: "news",
      title: "L&T partners with Exail to offer Mine Warfare solutions to the Indian Navy",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-16",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/EXAIL-MCM.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• L&T(라르센 앤 투브로)와 프랑스 Exail이 인도 해군의 기뢰전 솔루션 공급을 위한 전략적 파트너십 체결<br>• 12척의 기뢰소해함(MCMV) 프로그램을 위한 무인 기뢰소해 시스템 공급 - 약 5조 루피 규모의 대형 프로젝트<br>• 자율 무인정(ASV), 무인잠수정(AUV), 원격조종무인기(ROV) 등 다중 무인시스템 통합 구성<br>• 인도 해군의 오랜 기뢰소해함 도입 시도 실패 이후 최초의 체계적 무인화 기반 솔루션 추진<br>• 호르무즈 해협의 이란 기뢰 위협에 대응한 전략적 해양 방위 능력 강화</p><h3>Key Quotes</h3><br>• "L&T, as the prime contractor, will offer the Unmanned MCM Suite to all shipyards participating in Indian Navy's upcoming program for 12 Mine Counter Measure Vessels." (L&T가 주계약자로서 12척 기뢰소해함 사업에 참여하는 모든 조선소에 무인 기뢰소해 시스템을 공급할 예정)<br>• "Exail will serve as the technology partner. The partnership will enable the delivery of Exail's globally proven MCM technologies, already in operation with several navies worldwide and validated through extensive real-world deployments." (Exail은 기술 파트너로서 전 세계 다수 해군에서 운용 중인 검증된 기뢰전 기술을 제공)</p><h3>Technical Insights</h3><br>• **자율 무인시스템 통합**: CASCADE ASV, HWAUV, MULE 멀티콥터, 20개 이상의 ROV 등 다층적 무인시스템으로 기뢰 탐지·분류·식별·중화를 원격 대거리에서 수행하는 첨단 기술 조합<br>• **무인화 기반 해상 기뢰전 패러다임 전환**: 유인함정의 위험성을 제거하고 자율·원격조종 시스템으로 인명 피해를 최소화하는 현대식 기뢰소해 개념 도입<br>• **국방 산업 국제 협력 강화**: 프랑스 Exail의 검증된 기술과 L&T의 국내 제조 역량 결합으로 자주국방 기술 수준 향상 및 인도-유럽 방위산업 협력 심화<br>• **호르무즈 해협 등 지정학적 위험 대응**: 중동 해상로 보안 위협에 대한 능동적 해양 방위 태세 구축으로 인도의 인도-태평양 전략 실행 능력 강화</p></div>`,
      tags: ["Mine Warfare","Autonomous Systems","Indian Navy","L&T","Exail","MCMV","Unmanned Systems"],
      link: "https://www.navalnews.com/naval-news/2026/05/lt-partners-with-exail-to-offer-mine-warfare-solutions-to-the-indian-navy/",
      coords: [77.2099,28.6139],
      location: "India"
    },
    {
      type: "news",
      title: "Shield AI expands Hivemind maritime autonomy in Taiwan with Thunder Tiger partnership",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-16",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/2026_May_5_SAI_x_Thunder_Tiger_Hero_2-scaled-1-scaled.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Shield AI와 Thunder Tiger Corp.이 Hivemind 자율운항 소프트웨어를 무인수상선박(USV) 등 Thunder Tiger의 무인시스템 포트폴리오에 통합하기 위한 양해각서(MOU) 체결<br>• Hivemind는 Thunder Tiger USV의 AI 파일럿으로 기능하며, 2026년 여름 실시연습 예정으로 대만의 해상 시스템이 자율적으로 항해, 대응 및 실제 임무 수행 가능함을 입증<br>• Shield AI의 Brandon Tseng 공동창립자(전 미 해군 특수부대원)는 다중 자율 시스템의 협력 운영이 분쟁 억지에 필요한 비대칭 능력을 제공한다고 강조<br>• 시뮬레이션 기반 테스트, 하드웨어-인-더-루프 통합, 실제 차량 테스트 등 단계적 통합 및 테스트 방식 추진<br>• Thunder Tiger의 Gene Su 이사는 Hivemind 통합이 대만의 국방산업기반 발전과 자율화된 시스템 능력 향상에 기여할 것으로 평가</p><h3>Key Quotes</h3><br>• "Hivemind has been integrated and proven across dozens of platforms and domains worldwide, and we are excited to see it on the water in Taiwan with Thunder Tiger, supporting the kind of cross-domain, multi-agent teaming that changes what unmanned systems can do in contested environments." (Hivemind는 전 세계 수십 개 플랫폼과 영역에서 통합되고 검증되었으며, 분쟁 환경에서 무인시스템의 역량을 변화시키는 교차영역 다중에이전트 팀 운영을 지원하는 대만에서의 실운영에 기대감을 표현)</p><p>• "Integrating Hivemind gives our platforms the autonomous decision-making capability to execute complex missions independently and operate as part of a coordinated team." (Hivemind 통합은 우리 플랫폼에 복잡한 임무를 독립적으로 수행하고 협력팀의 일원으로 운영할 수 있는 자율의사결정 능력을 제공)</p><h3>Technical Insights</h3><br>• **AI 파일럿 기술의 실전 검증**: Hivemind는 센싱, 의사결정, 행동 수행 능력을 모든 영역에서 제공하는 범용 AI 플랫폼으로, USV를 포함한 다중 플랫폼 통합으로 해양 자율운항 기술의 실용화 가능성 입증<br>• **다중에이전트 협력 운영의 확대**: 혼합 무인기 부대(aerial and maritime)가 조율된 지능형 팀으로 운영되는 기술은 IMO 자율운항 규제 및 COLREG 적응 요구사항에서 미래 표준이 될 가능성<br>• **대만 국방산업 자주성 강화**: 로컬 방위산업체(Thunder Tiger)와의 기술 이전 및 협력은 자율운항 시스템의 국산화 추진, 공급망 안보 확보와 함께 인도-태평양 지역 해양 안보 균형에 영향<br>• **시뮬레이션 중심의 개발 방식**: 시뮬레이션-HiL-실제 차량 테스트 단계적 진행은 고비용 해양 운영 환경에서 개발 효율성을 높이며, 업계 표준화된 자율운항 검증 프로세스로 확산 가능성</p></div>`,
      tags: ["autonomous systems","USV","AI navigation","Taiwan defense","Shield AI","Hivemind"],
      link: "https://www.navalnews.com/naval-news/2026/05/shield-ai-expands-hivemind-maritime-autonomy-in-taiwan-with-thunder-tiger-partnership/",
      coords: [121.565,25.033],
      location: "Taiwan"
    },
    {
      type: "news",
      title: "HII Delivers Two Autonomous Surface Vessels to U.S. Marine Corps",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-05-16",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• HII(Huntington Ingalls Industries)가 미 해병대(U.S. Marine Corps)에 2척의 자율 수상함을 인도했으며, 이는 국방혁신부(Defense Innovation Unit) 계약에 따른 납품</p><p>• ROMULUS-25 자율함은 실제 해상 환경에서의 운영 시험을 통해 고급 자율 항해 능력을 검증함</p><p>• HII는 미국 내 2개뿐인 핵능력 조선소이자 핵추진 항공모함의 유일한 건조업체로서 자율함 기술 개발에 선도적 역할 수행</p><p>• 자율 수상함의 해상 운영 검증은 미 해군/해병대의 무인 전력화 전략의 중요한 이정표</p><h3>Key Quotes</h3><p>Currently no direct quotes provided in the article excerpt, but the announcement emphasizes "advanced autonomous capabilities in an operational maritime environment" (실제 해상 운영 환경에서의 고급 자율 항해 능력).</p><h3>Technical Insights</h3><p>• ROMULUS-25의 자율 항해 시스템은 실제 해양 환경에서 검증되었으며, 이는 자율함의 실전 배치 가능성을 입증하는 중요한 기술적 성과</p><p>• 미 해병대를 위한 자율 수상함 개발은 COLREG(해상충돌방지규칙) 준수 및 해상상황인식(Maritime Situational Awareness) 기술의 실제 적용 사례로 평가됨</p><p>• 방위 자율화 기술의 선진화는 IMO의 자율선박 규제 프레임워크 수립에 영향을 미치는 글로벌 산업 트렌드의 일부</p><p>• 민간 해운업계에 자율선박 기술 확산의 촉매 역할을 할 수 있는 군사 자율함 개발의 성공사례</p></div>`,
      tags: ["autonomous vessels","U.S. Marine Corps","HII","ROMULUS-25","defense technology"],
      link: "https://defence-blog.com/hii-delivers-two-autonomous-vessels-to-u-s-marine-corps/",
      coords: [-76.3852,37.0842],
      location: "United States (HII Newport News, Virginia)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-15
addEvents({
  "2026-05-15": [
    {
      type: "news",
      title: "Greek-Operated Tanker Crosses Strait of Hormuz Amid U.S.-Israeli War on Iran",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-15",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockaerialdrone-170648.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 그리스 선사 소유의 수에즈맥스 급 유조선 Karolos가 호르무즈 해협을 통과하여 인도로 항해 중이며, 현재 전쟁으로 인한 해협의 사실상 폐쇄 상황에서 극히 드문 석유 운송 사례임</p><p>• 2월 28일 시작된 미국-이스라엘의 이란 전쟁으로 호르무즈 해협이 효과적으로 폐쇄되어 수백 척의 선박이 좌초되고 전례 없는 에너지 공급 차질이 발생 중</p><p>• Karolos는 리베리아 국적선, 최대 100만 배럴 운송 능력, 5월 10일 바스라 유정에서 만재하중으로 선적 완료</p><p>• 호르무즈 해협의 일일 통과 선박이 기존 125~140척에서 현재 10척 이하로 급감하며 세계 에너지 공급의 20% 차질</p><p>• 20,000명 이상의 해원이 해협 내에 갇혀 있으며 식량, 물, 연료 부족 상황에 처해 있음 (국제운수노동연맹 발표)</p><p>• 마셜제도 선박 등록소가 해역 내 위협 수준을 최고 경계 상태로 유지하고 있으며, 트럼프 대통령이 중국 시진핑 주석과의 협상에서 이란의 해협 재개방 필요성 강조</p><h3>Key Quotes</h3><p>• "More than 20,000 seafarers remain trapped inside the Strait of Hormuz, facing fear and uncertainty, cut off from their families, and in many cases running short of food, water and fuel" (호르무즈 해협 내 2만 명 이상의 해원이 가족과 단절된 채 식량·물·연료 부족에 직면한 상태로 갇혀있음)</p><p>• "Before the war on Iran began, the Strait of Hormuz was the conduit for 20% of the world's energy supplies, equating to 125 to 140 daily passages" (이란 전쟁 이전 호르무즈 해협은 세계 에너지 공급의 20%를 담당하며 일일 125~140척의 선박이 통과함)</p><h3>Technical Insights</h3><p>• **호르무즈 해협 교통량 급감의 해운산업 영향**: 일일 통과 선박이 140척에서 10척 이하로 급락하면서 유조선의 회항거리 증가, 운임 급등, 선박 가동률 저하 등 글로벌 해운시장의 구조적 재편 야기</p><p>• **해상안전 및 해원 복지 위기**: 20,000명 이상의 해원이 전쟁 지역에 갇혀 SOLAS/해원협약 등 국제해사규칙 이행의 현실적 한계 노출, IMO의 위기 대응 매뉴얼 및 인도적 지원 강화 필요성 대두</p><p>• **선박항행의 지정학적 리스크 관리**: 그리스 선사들의 호르무즈 해협 운항 재개는 높은 보험료, 지정학적 리스크 프리미엄, 선원 위험 수당 증가 등으로 해운비 구조의 급변화를 초래하며, 자율운항선박 도입 시 이러한 분쟁지역 운항의 의존도 감소 가능성 제시</p><p>• **대체항로 및 에너지 공급망 재구성**: 호르무즈 해협 폐쇄로 인한 수에즈 운하·말라카 해협 등 대체항로 혼잡 심화, 중장기적으로 LNG 수송 및 해상풍력 에너지 운송 시스템으로의 산업 전환 가속화 예상</p></div>`,
      tags: ["Strait of Hormuz","Tanker Operations","Geopolitical Disruption","Energy Supply"],
      link: "https://www.marinelink.com/news/greekoperated-tanker-crosses-strait-539267",
      coords: [56.2,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Samsung Heavy Industries Receives AIP Certificate for Floating Data Center from ABS",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-15",
      image: "https://images.marinelink.com/images/maritime/w800/youngkyu-chief-170643.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 삼성중공업이 미국선급(ABS)으로부터 50메가와트급 부유식 데이터센터 설계에 대한 원칙적 승인(AIP) 획득<br>• 설계는 표준화된 조선 프로세스를 활용하여 설계, 제조, 장비 설치를 동시 진행하며 리드타임 단축과 자체 전력 생산 시스템 탑재<br>• ABS는 선급 요건에 따른 설계 검토 완료 및 오프쇼어 데이터센터의 에너지 그리드 부하 경감 효과 강조<br>• AI 인프라 수요 증가에 따른 부유식 데이터센터의 새로운 시장 기회 창출<br>• 육상 전력망의 에너지 부담 완화 및 관련 리스크 저감의 해상 솔루션 제시</p><h3>Key Quotes</h3><p>• "The rapidly growing capabilities of artificial intelligence present a clear opportunity to support the expanding infrastructure requirements of AI and data-intensive operations." <br>(인공지능의 급속한 발전이 AI 및 데이터 집약적 작업의 인프라 요구를 지원할 수 있는 명확한 기회를 제시함)</p><p>• "Moving them offshore could mitigate certain risks while reducing the strain on local energy grids."<br>(부유식 데이터센터의 해상 배치는 특정 위험을 완화하면서 지역 전력망 부담을 감소시킬 수 있음)</p><h3>Technical Insights</h3><p>• **해양 구조물의 새로운 활용 - 부유식 데이터센터는 해양 플랫폼 기술을 AI 인프라에 적용하는 혁신적 사례로, 선박 설계 및 구조 안전 기준의 적용 필요**</p><p>• **전력 자립 시스템 통합 - 자체 전력 생산 시스템 탑재로 육상 에너지망 의존도 감소 및 에너지 효율성 향상, 향후 해상 원전/신재생 연계 가능성**</p><p>• **조선산업의 다각화 전략 - 전통 조선 프로세스를 데이터센터 구조물에 표준화 적용으로 고부가가치 해양 플랫폼 시장 개척 및 경쟁력 강화**</p><p>• **IMO/ABS 선급 기준 진화 - 부유식 데이터센터 같은 신규 해상 구조물에 대한 설계·건조·운영 기준 정립 필요로 해양산업 규제 체계의 현대화 추진**</p></div>`,
      tags: ["Floating Data Center","Samsung Heavy Industries","ABS","AI Infrastructure","Offshore Technology"],
      link: "https://www.marinelink.com/news/samsung-heavy-industries-receives-aip-539260",
      coords: [127,37.5],
      location: "South Korea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-17
addEvents({
  "2026-05-17": [
    {
      type: "news",
      title: "Australia selects U.S.-made Transwing VTOL drone for ship logistics",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-05-17",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• PteroDynamics Inc.의 미국 드론 회사가 호주 해군과의 첫 국제 방위 계약 체결, Transwing VTOL 무인기 시스템 공급 계약 확보<br>• Transwing P4 형 무인기가 2026년 봄 배송 예정되며 해양 분산 물류 작전용으로 활용될 예정<br>• 자동 수직 이착륙(VTOL) 드론 기술이 해양 군사 로지스틱스 분야에서의 운영 효율성 증대에 기여<br>• 미국의 자율 항공기 기술이 주요 동맹국인 호주에 의해 채택되어 국제 방위 기술 협력 강화<br>• 해상 분산 작전 환경에서의 자동화 장비 도입으로 해군의 전술적 유연성 및 대응력 향상</p><h3>Key Quotes</h3><p>• "PteroDynamics Inc., a California-based developer of autonomous VTOL aircraft, announced..." (캘리포니아 기반의 자율 VTOL 항공기 개발사인 PteroDynamics사가 발표했다)</p><p>• "...for maritime distributed logistics operations..." (해양 분산 물류 작전을 위한 목적)</p><h3>Technical Insights</h3><p>• 수직 이착륙(VTOL) 무인기 기술은 제한된 갑판 공간의 군함 환경에서 운영 공간 제약을 해결하는 데 효과적<br>• 자율 비행 시스템의 도입으로 해양 로지스틱스 작전의 인력 의존도 감소 및 24/7 운영 가능성 확대<br>• IMO 및 해군 규제 체계 내에서 무인항공기(UAS)의 해상 운영 표준화 필요성 대두<br>• 호주 해군의 도입으로 인도-태평양 지역 해양 자율화 경쟁 심화 및 관련 국가들의 유사 기술 도입 가속화 예상</p></div>`,
      tags: ["autonomous systems","VTOL drone","maritime logistics","Royal Australian Navy"],
      link: "https://defence-blog.com/australia-orders-u-s-made-transwing-vtol-drones-for-ship-logistics/",
      coords: [151.2093,-33.8688],
      location: "Australia"
    }
  ]
});

// Auto-collected: 2026-05-18
addEvents({
  "2026-05-18": [
    {
      type: "news",
      title: "Hapag-Lloyd, CMA CGM Suspend Cuba Bookings After US Executive Order",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-18",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stock-170651.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 글로벌 해운 대형사 CMA CGM(프랑스)과 Hapag-Lloyd(독일)가 2026년 5월 1일 발효된 미국 행정명령에 따라 쿠바 노선 신규 예약을 중단<br>• 두 회사의 운영 중단으로 쿠바 해운 물동량의 약 60%가 영향을 받을 것으로 예상되며, 이미 심각한 경제 위기와 에너지 부족에 시달리는 쿠바 경제에 추가 타격<br>• 미국 행정명령은 쿠바의 에너지, 방위, 금융, 광물채굴 등 주요 경제 부문뿐만 아니라 모든 경제 부문과 관련된 외국인의 상거래를 포함하도록 제재 범위 확대<br>• 중국발 물품 수송이 가장 심하게 영향을 받을 것으로 예상되며, 북유럽과 지중해 지역도 상당한 영향을 받을 것으로 지적<br>• 쿠바 군부 산하 대형 재벌 Gaesa와 연계된 해운 거래를 차단하는 것이 양사의 운영 중단의 주요 고려 사항<br>• 현지 소식통은 두 해운사가 쿠바 선적을 전면 중단하거나, 트럼프 행정부와 협상을 통해 쿠바 민간부문으로의 해운만 지속하는 옵션을 검토 중이라고 전망</p><h3>Key Quotes</h3><p>• "Following the U.S. Executive Order issued on May 1, CMA CGM has decided to suspend its bookings to or from Cuba until further notice" <br>(미국이 5월 1일 발효한 행정명령에 따라 CMA CGM은 추가 공지 시까지 쿠바 노선 신규 예약을 중단하기로 결정했다)</p><p>• "due to compliance risks associated with the U.S. president's executive order of May 1"<br>(미국 대통령의 5월 1일 행정명령과 관련된 규정 준수 위험 때문이다)</p><p>• "The temporary suspension of new orders by two of the world's largest shipping companies could jeopardize as much as 60% of Cuba's shipping traffic by volume"<br>(세계 최대 규모 해운사 2곳의 임시 운영 중단이 쿠바 해운 물동량의 약 60%를 위협할 수 있다)</p><h3>Technical Insights</h3><p>• **해운업계 규정준수(Compliance) 강화**: 양사의 운영 중단은 국제 제재 규정에 대한 해운사들의 준수 기준이 강화되고 있음을 시사하며, 글로벌 해운사들이 지정학적 리스크에 매우 민감해지는 추세를 반영</p><p>• **해운 네트워크의 지정학적 취약성**: 두 대형 해운사의 결정으로 쿠바 물동량의 60%가 영향받는 것은 글로벌 컨테이너 해운이 극소수 대형 선사들에 의해 지배되는 산업 구조의 위험성을 노출</p><p>• **제재 범위의 확대와 해운산업의 대응**: 행정명령이 특정 섹터를 넘어 "경제 전반"으로 제재 범위를 확대함에 따라, 해운사들은 거래처 실사(due diligence)의 난이도 상승과 운영 비용 증가에 직면</p><p>• **대체 운송 경로의 부재**: 쿠바 제재로 인한 글로벌 해운 네트워크의 재편성이 불가피하며, 소규모 또는 독립 해운사들의 기회 창출 가능성이 있지만 장기 경제 효율성은 저하될 것으로 예상</p></div>`,
      tags: ["Sanctions","Cuba Trade","Shipping Industry","US Executive Order"],
      link: "https://www.marinelink.com/news/hapaglloyd-cma-cgm-suspend-cuba-bookings-539273",
      coords: [0,0],
      location: "Cuba / Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-18
addEvents({
  "2026-05-18": [
    {
      type: "accident",
      title: "Russian Drones Strike Two Ships off Ukraine's Odesa Coast",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-18",
      image: "https://images.marinelink.com/images/maritime/w800/illustration-adobe-170661.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 러시아 무인드론이 우크라이나 오데사 해역 진입 중인 민간 화물선 2척을 공격하여 부분적 화염 피해 발생</p><p>• 피격 선박: KSL Deyang호(중국 소유, 마셜 제도 선박), Guinea-Bissau 국기 선박 1척으로 오데사 항만 운송 중</p><p>• 피해 현황: KSL Deyang호는 대형 손상 없음, 사상자 제로, 선원들이 화재 진압 성공</p><p>• 운영 상황: 피격 당시 적하 상태가 아니었으며 우크라이나 Pivdennyi 항만에서 철광석 적화 목표로 항해 중</p><p>• 전략적 의미: 러시아의 4년간 지속적 해상 수출로 공격으로 해외 무역 및 전시 경제에 영향</p><h3>Key Quotes</h3><p>• "Russian drone had hit a vessel owned by China" (러시아 무인드론이 중국 소유 선박을 격침)<br><li>President Zelenskiy의 X 플랫폼 성명으로 국제적 관심 증대</li></p><p>• "The vessel did not sustain significant damage, there were no casualties and the fire caused by the strike was extinguished by the crew" (선박은 큰 손상이 없었고 사상자 없으며 선원들이 화재를 진압했음)<br><li>선원의 신속한 대응이 참사 방지</li></p><h3>Technical Insights</h3><p>• **해양 보안 위협 증가**: 드론 기술의 발전으로 민간 화물선에 대한 새로운 위협 구조 발생, 해상 안전 감시 시스템 강화 필요</p><p>• **국제 해운 경로 위험**: 흑해 동부 항만 진입 해역이 고위험 지역화되어 국제 선사들의 항로 회피 및 보험료 상승 초래</p><p>• **해상법 및 규제 대응**: IMO와 국제해사기구의 분쟁 해역 해상 안전 규정 재검토 필요성 대두</p><p>• **자율운항 선박의 취약성**: 향후 드론/무인 공격에 대한 자율운항 선박의 방어 체계 및 AI 기반 위협 대응 알고리즘 개발 시급</p></div>`,
      tags: ["Drone Attack","Black Sea","Ukraine","Cargo Vessel","Maritime Security"],
      link: "https://www.marinelink.com/news/russian-drones-strike-two-ships-off-539287",
      coords: [30.2383,46.4856],
      location: "Odesa, Ukraine (Black Sea)"
    },
    {
      type: "news",
      title: "Norway Joins EU Baltic Sea Cooperation Alliance for Regional Security",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-18",
      image: "https://images.marinelink.com/images/maritime/w800/svein-jacobsen-170660.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 노르웨이가 EU 발틱해 지역전략(EUSBSR)에 가입하여 비EU 국가로서 처음 이 협력체에 참여<br>• 스웨덴, 덴마크, 에스토니아, 핀란드, 독일, 라트비아, 리투아니아, 폴란드와 함께 해역 안보 및 협력 강화<br>• 러시아의 우크라이나 침공 이후 해저 케이블, 통신망, 가스 파이프라인 손상이 증가하면서 지역 보안 우려 증대<br>• EUSBSR은 2009년 설립되었으며 해상 안전, 에너지 시장 안정성, 환경 보호 등을 목표로 함<br>• 노르웨이는 해양 협력, 감시, 보안 분야에서 EU와의 협력 강화 기회 확보</p><h3>Key Quotes</h3><p>• "Membership will strengthen Norway's cooperation with the EU in a region that has become central to European and Norwegian security" (노르웨이의 유럽 및 자국 안보에 핵심이 된 지역에서 EU와의 협력을 강화할 것)</p><p>• "The Baltic Sea region has been on high alert after a string of power cable, telecom link and gas pipeline outages since Russia invaded Ukraine in 2022" (2022년 러시아의 우크라이나 침략 이후 발틱해 지역은 여러 인프라 손상으로 인해 고도의 경계 상태 유지 중)</p><h3>Technical Insights</h3><p>• **해양 안보 협력의 강화**: 발틱해는 전략적 요충지로서 수상함정 운항, 영해 감시 시스템 구축 및 국제해사법(COLREG) 준수 강화가 필수적이며, 노르웨이의 참여로 지역 감시 네트워크 고도화 기대</p><p>• **해저 인프라 보호**: 수중 케이블 및 파이프라인 손상 사건들이 증가하면서 해양 감시 기술과 자율운항선박(ASV, Autonomous Surface Vehicle) 활용한 보안 감시 체계 도입 검토 필요</p><p>• **국제 해양 질서 안정화**: IMO 차원의 지역 해양 안보 프로토콜 수립 및 국제 협력 메커니즘 강화로 민간 해운과 전략적 해역 보호의 균형 유지</p></div>`,
      tags: ["Baltic Sea","EU Strategy","Maritime Security","Norway","Regional Cooperation"],
      link: "https://www.marinelink.com/news/norway-signs-eu-baltic-sea-cooperation-539286",
      coords: [10.7522,59.9139],
      location: "Norway/Baltic Sea Region"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-18
addEvents({
  "2026-05-18": [
    {
      type: "news",
      title: "Berg Propulsion to Supply Propulsion Systems for Four Diesel-Electric Tugs in Turkey",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-18",
      image: "https://images.marinelink.com/images/maritime/w800/propulsion-170686.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Berg Propulsion이 터키 Uzmar 조선소에서 건조되는 4척의 디젤-전기 예인선용 추진 및 제어 시스템 공급 계약 체결<br>• Smit Lamnalco가 발주한 이 예인선들은 터키에서 건조된 동종 선박 중 최강력 규모로 130톤 이상의 계량 당기기(bollard pull) 성능 보유<br>• 각 60m 길이의 예인선은 4,000kW 전기모터 2기, MTA836 Z드라이브 고정피치 방위각 추진기 2기, MTT216 조절가능 피치 선수 추진기 2기 장착<br>• 첫 번째 선박의 설비 인도는 2026년 11월, 마지막 선박은 2027년 7월 예정<br>• 선박은 프랑스령 기아나에서 운영될 예정이며 Bureau Veritas 선급 인증</p><h3>Key Quotes</h3><p>• "The vessels have been ordered by Smit Lamnalco from builder Uzmar Shipyard and will initially operate in French Guyana" (선박은 Smit Lamnalco가 Uzmar 조선소에서 발주했으며 초기에는 프랑스령 기아나에서 운영될 예정)</p><p>• "all four tugs will feature bollard pull capacities exceeding 130 tons, a step up from the largest tugs built by Uzmar to date" (4척 모두 130톤을 초과하는 계량 당기기 용량을 보유하며, 이는 지금까지 Uzmar가 건조한 최대 규모 예인선보다 한 단계 향상된 사양)</p><h3>Technical Insights</h3><p>• 디젤-전기 하이브리드 추진 시스템의 도입으로 연료 효율성과 환경 친화성이 향상되며, 해양 지원선박의 운영 비용 절감 기대<br>• 터키 조선산업이 첨단 예인선 건조의 중심지로 부상하고 있으며, Berg Propulsion과의 장기적 협력으로 해양 추진 기술 혁신 가속화<br>• 4,000kW급 전기모터와 고급 제어 시스템(MPC800)의 통합으로 선박의 조작성, 안정성 및 자동화 수준 대폭 향상</p></div>`,
      tags: ["Berg Propulsion","Diesel-Electric Tugs","Uzmar Shipyard","Propulsion Systems","Turkey Shipbuilding"],
      link: "https://www.marinelink.com/news/berg-propulsion-supply-propulsion-539319",
      coords: [35.1856,38.9597],
      location: "Turkey"
    },
    {
      type: "news",
      title: "European Maritime Drug Operation Disrupts Atlantic 'Cocaine Highway' Between Canary Islands and Azores",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-18",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/Europol-drug-bust.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 유럽 해양 법집행 기관들이 "코카인 고속도로"로 알려진 대서양 마약 밀수로를 적발하여 11톤의 코카인과 8.5톤의 해시시를 압수했으며, 2주간의 조직적 해상작전으로 54명을 체포</p><p>• 스페인 과우디아 시빌(Guardia Civil)이 주도하고 유로폴(Europol)이 조정한 작전으로 카나리아 제도와 아조레스 제도 사이의 국제해역에서 불법 해상 이적을 시도한 8척의 선박을 나포</p><p>• 마약밀수 조직들이 전통적인 항구 기반 밀수에서 벗어나 대규모 모선(母船)의 공해상 이적, 고속정(narcولanchas) 중계, 해변 상륙 등 첨단화된 해상 물류 네트워크로 진화</p><p>• 카나리아 제도와 아조레스 제도 사이 광대한 해역의 감시 어려움과 원격성이 마약 밀수 조직에게 전략적 이점 제공</p><p>• 지난해 1월 스페인의 "검은 그림자 작전(Operation Black Shadow)"으로 105명 체포, 10.4톤 이상 코카인 압수한 사례로 볼 때, 유럽의 해상 마약 단속이 지속적으로 강화되는 추세</p><h3>Key Quotes</h3><p>• "Our work proves that when law enforcement acts together, even the Atlantic is not big enough for organised crime to hide" (해양 법집행 기관들이 협력하면 대서양도 조직범죄가 숨을 수 없을 만큼 넓지 않다는 것을 보여준다는 유로폴 부사장의 발언)</p><p>• "The narcotics are then transferred in international waters to high-speed craft — including rigid-hulled inflatable boats and other long-range vessels — before being moved again onto smaller boats for delivery to isolated beaches and marinas" (마약이 국제해역에서 경직성 팽창식 보트와 장거리 항해용 선박 등 고속정으로 이적되어 최종 배송을 위한 소형 보트로 다시 옮겨진다는 밀수 방식 설명)</p><h3>Technical Insights</h3><p>• **해상 감시 및 단속 기술의 한계**: 광대한 대서양 해역에서의 실시간 모니터링 한계로 인해 마약 조직들이 공해상에서의 이적 작전을 선호하고 있으며, 위성항법 시스템(GNSS)과 암호화된 통신을 활용하여 탐지 회피</p><p>• **국제 해양법 집행 협력의 중요성**: 유럽 여러 국가의 해양 법집행 기관과 유로폴의 조직적 협력이 초국경적 마약 밀수 네트워크 적발의 핵심 요소로 작용하며, IMO 및 UNCLOS 체계 내 국제 해상보안 강화 필요</p><p>• **첨단 선박 운영 기술의 악용**: 시속 40노트를 초과하는 고속 마약정(narcolanchas), 공해상 연료 보급 기지, 부유식 보급소 등 장시간 해상 체류 능력의 조직화된 악용으로 전통적 항구 기반 단속 회피</p><p>• **해상 물류 네트워크의 범죄화**: 모선-중계정-소형보트의 다단계 운송 시스템이 마약 조직에 의해 산업 규모로 구축되고 있으며, 이는 일반 해운 물류와의 구별이 어려워 해양 교통 안전 및 항만 보안 위험 증대</p></div>`,
      tags: ["Drug Trafficking","Maritime Security","Law Enforcement","Atlantic Ocean"],
      link: "https://gcaptain.com/massive-atlantic-cocaine-highway-busted-in-european-maritime-drug-operation/",
      coords: [-25,38],
      location: "Canary Islands - Azores Corridor, Atlantic Ocean"
    },
    {
      type: "news",
      title: "Boskalis Orders Massive 24,000-ton Cable Lay Vessel for Offshore Energy Projects",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-18",
      image: "https://gcaptain.com/wp-content/uploads/2026/05/Boskalis-cable-layer.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **신규 케이블 포설선 발주**: 네덜란드 해양 건설사 보스칼리스(Boskalis)가 24,000톤급 케이블 포설선(CLV) 건조를 발표, 2029년 취항 예정</p><p>• **HVDC 송전 시스템 특화**: 12,000톤급 동심원형 케이블 카루셀 2개를 장착하여 장거리 고압직류(HVDC) 송전 케이블 설치 능력 극대화</p><p>• **재생에너지 인프라 확대**: 해상풍력 발전 및 국가 간 전력망 연계(인터커넥터) 프로젝트 증가에 따른 투자로, 에너지 전환 및 탈탄소화 목표 지원</p><p>• **보스칼리스의 경험**: 15년 이상 해저 케이블 사업을 운영해왔으며, 전 세계 140건 이상의 케이블 관련 프로젝트 수행</p><p>• **시장 경쟁 심화**: 해상풍력이 해안에서 멀어지고 용량이 증가하면서 대형 케이블 포설 선박 보유 경쟁이 심화되는 추세 반영</p><h3>Key Quotes</h3><p>• "The electrification of energy demand, driven by decarbonization and energy independence objectives, is accelerating the need for robust grid infrastructure." <br>(탈탄소화 및 에너지 독립성 목표에 따른 전력 수요 전기화가 견고한 그리드 인프라 필요성을 가속화하고 있다)</p><p>• "The new vessel also highlights the escalating competition among offshore contractors racing to expand fleets capable of handling next-generation offshore energy projects"<br>(신규 선박은 차세대 해상 에너지 프로젝트 대응 능력을 갖춘 함대 확보를 위해 경쟁하는 해상 건설업체들 간의 경합 심화를 보여준다)</p><h3>Technical Insights</h3><p>• **HVDC 기술의 중요성**: 해상 재생에너지가 대규모화·원거리화되면서 전압강하가 적은 고압직류 송전 시스템의 수요가 급증, 장거리 전력 전송 효율성 극대화</p><p>• **케이블 포설 효율화**: 동심원형 카루셀 설계로 단일 연속 케이블 길이 증대 → 해상 연결부(조인트) 감소 → 설치 기간 단축 및 비용 절감 효과</p><p>• **초대형 선박의 필요성**: 해상풍력이 원거리 해역으로 확대되고 용량이 증대하면서 24,000톤 규모의 전문화된 포설선 수요 증가, 산업 표준화 추세 반영</p><p>• **통합형 솔루션 제공**: 해저 측량, 준설, 케이블 포설, 트렌칭, 암반 설치 등 전주기 서비스 통합으로 프로젝트 리스크 감소 및 턴키형 계약 경쟁력 강화</p></div>`,
      tags: ["Cable Lay Vessel","Offshore Wind","HVDC Systems","Subsea Infrastructure"],
      link: "https://gcaptain.com/boskalis-orders-massive-new-cable-layer-for-offshore-energy-projects/",
      coords: [4.8952,52.3676],
      location: "Netherlands (Boskalis headquarters)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-19
addEvents({
  "2026-05-19": [
    {
      type: "news",
      title: "Oil Prices Ease as US Pauses Planned Iran Strikes Amid Negotiations",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-19",
      image: "https://images.marinelink.com/images/maritime/w800/artegorov3gmail-adobe-170697.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 트럼프 대통령이 계획된 이란 공격을 일시 중단하고 협상을 진행하겠다고 발표하면서 유가가 2% 근처 하락</p><p>• 브렌트유 7월물은 배럴당 $110.08, 미국 WTI 6월물은 $108.19로 하락세를 보임</p><p>• 중동 분쟁으로 인해 호르무즈 해협이 사실상 폐쇄되어 글로벌 석유 공급량의 약 20%가 중단된 상태</p><p>• 이란의 평화제안은 전 전선에서의 적대행위 중단, 미군 철수, 전쟁 피해 배상을 포함</p><p>• 미국 전략석유비축량이 역대 최대 규모인 990만 배럴 방출되어 저장량이 2024년 7월 이후 최저 수준으로 감소</p><h3>Key Quotes</h3><p>• "While Trump's signal has eased some immediate pressure, the fundamental risks persist .... The market is now watching whether Trump's comments represent a genuine shift toward de-escalation or just a tactical pause" (트럼프의 신호가 즉각적인 압박을 완화했지만 근본적인 위험은 여전하며, 시장은 그의 발언이 진정한 긴장 완화인지 아니면 일시적 휴전인지를 관찰 중)</p><p>• "The Middle East conflict has effectively closed the Strait of Hormuz, a critical waterway that typically carries about a fifth of the global supplies of oil and liquefied natural gas" (중동 분쟁이 글로벌 석유 및 LNG 공급량의 약 5분의 1을 수송하는 호르무즈 해협을 사실상 폐쇄)</p><h3>Technical Insights</h3><p>• **에너지 공급망 차질**: 호르무즈 해협의 폐쇄로 인한 해상 석유·LNG 수송 중단이 전 지구적 에너지 위기를 야기하고 있으며, 해운업계의 재경로 설정 필요성 증대</p><p>• **전략석유비축량 동원**: 미국의 기록적 규모 SPR 방출(990만 배럴)은 장기적 에너지 안보 전략과 해상 수송 수요의 상충을 보여주는 신호</p><p>• **지정학적 리스크 관리**: 유가 변동성은 국제 해운 시장의 유가 연동 계약(Bunker cost indexation)과 보험료에 직결되어 선주들의 운영 수익성에 급격한 영향을 미침</p><p>• **규제 환경 변화**: 에너지 취약국에 대한 러시아 해상유 제재 면제 연장(30일)은 대체 항로와 선박 운항 계획의 불확실성을 가중시키는 요인</p></div>`,
      tags: ["Oil Markets","Geopolitics","Iran","Strait of Hormuz","Energy Supply"],
      link: "https://www.marinelink.com/news/oil-prices-ease-us-holds-off-renewed-strikes-against-iran-539340",
      coords: [0,0],
      location: "Middle East / Global"
    }
  ]
});

// Auto-collected: 2026-05-18
addEvents({
  "2026-05-18": [
    {
      type: "news",
      title: "FleetZero Develops Modular Battery Technology to Electrify Cargo Ships",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-18",
      image: "https://images.marinelink.com/images/maritime/w800/image-courtesy-170690.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **FleetZero의 배터리 솔루션**: 마이클 카터와 스티븐 헨더슨이 설립한 FleetZero는 화물선 전기화를 위한 모듈식 컨테이너형 배터리 기술 개발에 집중하고 있는 신생 기업</p><p>• **자금 조성 및 확장**: 약 6천만 달러 자금 조달, 40명 직원 규모로 휴스턴에 새로운 제조/R&D 시설 개설하여 올해 300 MWh 배터리 생산 목표</p><p>• **기술적 우위성**: Leviathan 모듈식 배터리 에너지 시스템은 경쟁사 대비 2배의 에너지 밀도를 절반의 비용으로 제공하는 것을 목표로 함</p><p>• **산업 가정에 대한 도전**: 전통적인 암모니아/메탄올 등 대체연료 중심 논의에 반기를 들고, AIS 데이터 및 실제 운영 프로필 분석을 통해 배터리 추진의 경제성 입증</p><p>• **적용 대상 선박**: 탱커, 벌크선, 컨테이너선 등 다양한 선박 클래스에서 디젤 대비 비용 경쟁력 있는 솔루션 제시</p><h3>Key Quotes</h3><p>• "The systems we looked at weren't cheap enough, and they weren't safe enough." (검토한 기존 배터리 시스템들은 충분히 저렴하지도, 안전하지도 않았다는 의미)</p><p>• "We just didn't subscribe to it" (암모니아/메탄올 중심의 미래 해운 추진 동향에 동의하지 않았음을 표현)</p><p>• "Battery propulsion wasn't just viable, it could be cost-advantageous versus diesel across multiple vessel classes" (배터리 추진이 실행 가능할 뿐 아니라 다양한 선박 클래스에서 디젤보다 경제적으로 유리할 수 있음)</p><h3>Technical Insights</h3><p>• **배터리 기술의 해양 특화**: 기존 육상 배터리 시스템을 그대로 적용하지 않고 선박 운영 환경(AIS 데이터, 적재 프로필, 염해 환경)을 반영한 해양 맞춤형 설계의 필요성 강조</p><p>• **전기추진의 경제성 재평가**: 대체연료 중심 논의에서 벗어나 실제 데이터 기반 분석을 통해 배터리 전기추진의 경제성을 입증함으로써 IMO 2050 탈탄소 목표 달성 경로의 다양성 제시</p><p>• **모듈식 설계의 산업적 의미**: 컨테이너형 모듈식 배터리 시스템은 기존 선박 개조, 신조선 장착의 유연성을 제공하여 해운 산업의 전환 속도 가속화 가능</p><p>• **비용 절감과 안전성**: 에너지 밀도 향상과 비용 감소는 배터리 전기추진의 대규모 상용화 장벽 제거로, 향후 해운 탈탄소화의 실질적 실행 가능성 높임</p></div>`,
      tags: ["Battery Technology","Ship Electrification","Clean Maritime","Energy Innovation"],
      link: "https://www.marinelink.com/news/batteries-fleetzero-aims-help-rewrite-539324",
      coords: [-95.3698,29.7604],
      location: "Houston, Texas"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-19
addEvents({
  "2026-05-19": [
    {
      type: "news",
      title: "Pentagon Orders 10,000+ Low-Cost Containerized Missiles with Maritime Strike Capabilities",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-19",
      image: "https://www.navalnews.com/wp-content/uploads/2026/04/RAACM_Deck_Launch_Early.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 국방부가 10,000발 이상의 저가 컨테이너 미사일(LCCM) 대량 구매로 해양 타격 능력을 강화하고 있으며, 이는 중국의 다수 함정 대응 및 인도-태평양 지역 군사 태세 강화에 초점을 두고 있음</p><p>• 수상함, 무인 표면함정 등 해양 플랫폼에 탑재 가능한 설계로 CoAspire, Anduril, Leidos, Castelion 등 5개 방위산업체가 계약 체결</p><p>• Anduril의 Barracuda-500M은 500해리 이상의 사거리를 가지며 20피트 ISO 컨테이너에서 16발씩 발사 가능한 컨테이너식 미사일 시스템</p><p>• 2027년부터 2029년까지 각 계약사당 3,000발 이상의 미사일 및 발사 시스템 납품 예정</p><p>• Chief of Naval Operations(해군작전사령관) Adm. Daryl Caudle이 저가, 분산 배치 가능한 컨테이너식 미사일의 해군 전력화에 강한 관심 표시</p><h3>Key Quotes</h3><p>• "Chief of Naval Operations Adm. Daryl Caudle expressed great interest in proliferating the low-cost, dispersible and ambiguous deployment method across the fleet." (해군작전사령관이 저가이고 분산 배치 가능하며 배치 의도를 파악하기 어려운 배포 방식을 함대 전역으로 확대하는 데 높은 관심을 표현)</p><p>• "The Surface-Launched Barracuda-500M (SLB-500M) will be launched out of 20-foot ISO containers capable of handling 16 of the 100-pound warhead cruise missiles apiece. With a range of over 500 nautical miles, the company also highlights that the SLB-500M is 'effective against a wide range of land and maritime targets.'" (20피트 ISO 컨테이너에서 발사되며 500해리 이상의 사거리로 육상 및 해양 목표물에 효과적)</p><h3>Technical Insights</h3><p>• 컨테이너식 미사일(LCCM) 시스템은 기존 함정뿐 아니라 무인 표면함정(USV) 등 다양한 해양 플랫폼에 신속히 통합 가능한 모듈식 설계로, 해군 무기 체계의 유연성과 운용 비용 효율성을 획기적으로 증대</p><p>• 해양 표적 추적 센서 탑재 및 자율주행 능력을 갖춘 Barracuda 등의 순항 미사일은 COLREG 준수 및 해상 교통 안전성 문제와 함께 자율 해상 무기 체계의 국제 규범 논의에 영향을 미칠 수 있음</p><p>• 대함 미사일의 저가화 및 대량 배치는 naval warfare 패러다임을 변화시켜 기존 고가 수상함 중심의 해군 전력 구조를 다수의 저가 플랫폼 분산 배치 모델로 전환할 가능성을 시사</p></div>`,
      tags: ["Anti-Ship Missiles","U.S. Navy","Defense Procurement","Maritime Strike"],
      link: "https://www.navalnews.com/naval-news/2026/05/massive-u-s-missile-order-may-expand-american-anti-ship-arsenal/",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "event",
      title: "German firm demonstrates world's first fully automatic naval drone hangar at Combined Naval Event",
      source: "Defence Blog",
      sourceMeta: "defence-blog.com · 2026-05-19",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 독일 자율시스템 회사 CiS가 이동 중인 선박에서 인간 개입 없이 완전 자동 드론 발사 및 회수 시스템 운영 가능하다고 주장<br>• Combined Naval Event in Farnborough에서 상용 제품 공개 - 해군 자동화 기술의 획기적 진전<br>• 이동하는 선박 플랫폼에서의 자동 드론 운영으로 해군 작전 효율성 극대화 가능<br>• 유인 개입 제거로 운영 비용 절감 및 위험 감소<br>• 해양 방위 시스템의 자율화 추세를 반영한 핵심 기술 혁신</p><h3>Key Quotes</h3><br>• "world's first fully automatic drone launch and recovery system capable of operating from a moving vessel without any human intervention" (이동 선박에서 인간 개입 없이 운영 가능한 세계 최초의 완전 자동 드론 발사/회수 시스템)</p><h3>Technical Insights</h3><br>• 해상 플랫폼 기반 자율 드론 시스템은 해양 감시, 정찰, 대잠전 등 다양한 해군 작전 능력 강화<br>• IMO 및 국방 규제 측면에서 자율 해양 체계의 인증 기준 정립 필요 - 안전성 및 신뢰성 검증 필수<br>• 이동하는 함정 환경에서의 자동 항법/회수는 고도의 센서 융합, 실시간 해상 상태 인식 기술 필요<br>• 해양 방위 산업의 인력 의존도 감소로 미래 군함 설계 및 운용 개념 변화 예상</p></div>`,
      tags: ["autonomous systems","naval drones","drone recovery","maritime technology","Combined Naval Event"],
      link: "https://defence-blog.com/german-firm-builds-self-operating-naval-drone-hangar/",
      coords: [-1.7074,51.3547],
      location: "Farnborough, United Kingdom"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-21
addEvents({
  "2026-05-21": [
    {
      type: "news",
      title: "IMO Releases Revised Rescue Guide for Refugees and Migrants in Distress at Sea",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-21",
      image: "https://images.marinelink.com/images/maritime/w800/source-170791.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IMO, UNHCR, ICS가 난민 및 이주민 해상 구조 가이드라인 개정판 발표 - 국제 해상 구조 의무 강화 및 인도주의적 책임 확대<br>• 지중해에서 2025년 1,953명 사망/실종, 동남아시아 로힝야 난민 루트 892명 사망(6,500명 중 최고 사망률 기록)<br>• 해상에서의 인명 구조 의무 이행을 위한 실질적 절차 및 법적 기준에 대한 상세 지침 제공<br>• 선장 및 선원, 정부 기관에 대한 명확한 행동 기준 제시 - 해상을 인도주의적 공간으로 규정<br>• 1951년 난민협약 75주년을 맞아 국제해사법의 법적 의무를 실제 해상 행동으로 전환하는 것이 핵심 과제</p><h3>Key Quotes</h3><p>• "The seas must be treated as a humanitarian space, and the duty to rescue people in distress at sea must be upheld without discrimination" (해상은 인도주의적 공간으로 취급되어야 하며, 차별 없이 해상 조난자 구조 의무가 유지되어야 함)</p><p>• "Established legal obligations must be translated into concrete action at sea. This revised Guide ensures clarity for Governments and provides practical steps for shipmasters and crews" (확립된 법적 의무는 해상에서의 구체적 행동으로 전환되어야 하며, 개정 가이드는 정부와 선장·승무원에게 실질적 절차를 제공)</p><h3>Technical Insights</h3><p>• **SOLAS 협약 강화**: 개정 가이드라인은 SOLAS 제11장의 해상 인명 안전(SAR) 의무를 명확히 하여, 모든 선박의 구조 책임을 국적, 난민 지위와 관계없이 이행하도록 강제<br>• **COLREG 및 해양법 통합**: 국제해상충돌회피규칙(COLREG)과 UN 해양법협약(UNCLOS)의 법적 구조 의무를 해운업계의 실무 매뉴얼로 번역 - 선실(bridge) 의사결정 기준 제공<br>• **업계 자발적 이행체계**: ICS(국제해운회의소) 참여로 민간 해운사의 자발적 준수 문화 조성, 해상 구조 우선순위의 투명성 확보<br>• **지역 SAR 네트워크 강화**: 지중해, 동남아시아, 서아프리카 등 고위험 해역 해상국(Flag State)과 연안국의 SAR 조정 체계 개선, 실시간 통신 프로토콜 표준화</p></div>`,
      tags: ["IMO","Rescue Operations","Maritime Law","Refugee Protection","SAR"],
      link: "https://www.marinelink.com/news/imo-releases-revised-rescue-guide-539459",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2026-05-20
addEvents({
  "2026-05-20": [
    {
      type: "news",
      title: "U.S. Navy's First Carrier Operated Unmanned Tanker MQ-25A Stingray Cleared for Production",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-20",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/HIsrJDbXYAATuZB.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **MQ-25A 스팅레이 무인급유기가 본격 생산 단계 진입** - 미 해군이 "Milestone C" 통과하여 저속 초기 생산(LRIP) 및 정상 제조 사이클로 전환</p><p>• **항공모함 전투력 증강의 핵심 자산** - F/A-18 슈퍼호넷의 급유 임무 대체로 전투기들의 작전 임무(타격, 공중전 초계) 수행 능력 회복</p><p>• **보잉과 미 해군의 9년 개발 성과** - 2018년 선정 이후 T-1 시험기의 2019년 초비행, 2021년 공중급유 성공 달성</p><p>• **2026-2027년 6대 추가 도입, 총 76대 계획** - FY 2027 예산 $771.17백만으로 3대 추가 구매, 총 9대 시험기 + 67대 양산기 예정</p><p>• **2029년 초 초기작전능력(IOC) 달성 목표** - 패턱스턴 강 해군비행장(NAVAIR)에서 통합 시험 예정</p><p>• **일리노이주 마스코타 시설에서 본격 양산** - 보잉의 신규 30만 평방피트 생산 시설과 롤스로이스 등 주요 협력사 참여</p><p>---</p><h3>Key Quotes</h3><p>• "The MQ-25 program has stretched over the past 9 years, with Boeing selected as the winning contractor in 2018 followed by the next few years of extensive flight testing." <br>(보잉이 2018년 선정되어 이후 수년간 광범위한 비행시험을 수행해온 9년의 장기 프로그램)</p><p>• "The U.S. Navy still considers the MQ-25 program to be a priority due to the need to aggressively expand the reach of Carrier Air Wings (CVWs) amidst the operational pressure to conserve airframe lifespan on F/A-18 E/F Superhornets"<br>(항공모함 전투단의 활동 반경을 극대화하면서 슈퍼호넷의 기체 수명을 절감하는 운영상 압력 속에서 MQ-25가 우선순위 과제임)</p><p>• "The MQ-25 utilizes the 'Cobham' Aerial Refueling Store, the same pod system used on the Superhornets which employs a probe and drogue refueling system from an underwing pylon."<br>(슈퍼호넛과 동일한 콤밤사의 공중급유 시스템을 탑재하여 F-35C, E-2D 등 다양한 함정기 지원 가능)</p><p>---</p><h3>Technical Insights</h3><p>• **무인 급유기의 운영 효율성 극대화** - MQ-25A의 도입으로 전통적 유인 전투기의 급유 임무 부담 제거, F/A-18 기체 수명 연장 및 전투 임무 증가 활용성 향상</p><p>• **멀티플랫폼 급유 호환성의 중요성** - 콤밤 급유 포드 시스템 적용으로 F-35C 스텔스 전투기, E-2D 조기경보기 등 차세대 함정기 플랫폼 유연한 지원체계 구축</p><p>• **자동화 항공모함 작전의 선도 사례** - 무인 항공체의 항공모함 기반 운영 표준화는 향후 자율주행 해상 시스템 개발의 선례로서 의미, IMO 규제 환경과 독립적인 군사 도메인의 기술 리드</p><p>• **산업-국방 복합체의 공급망 강화** - 롤스로이스 등 국제 협력사 참여 및 일리노이 신규 시설 건설을 통한 미국 방위산업 기지 재편, 대중국 기술 우위 유지 전략</p></div>`,
      tags: ["Unmanned Systems","U.S. Navy","MQ-25 Stingray","Carrier Operations","Autonomous Aircraft","Defense Technology"],
      link: "https://www.navalnews.com/naval-news/2026/u-s-navys-first-carrier-operated-unmanned-tanker-cleared-for-production/",
      coords: [-90.1994,38.627],
      location: "Mascoutah, Illinois (Production Facility)"
    },
    {
      type: "news",
      title: "LNG Canada-bound vessel 'Diamond Gas Jade' named at Samsung Heavy Industries",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-20",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/Naming-ceremony-for-Diamond-Global-Energys-Diamond-Gas-Jade-LNG-vessel-Source-K-Line.jpg?image-crop-positioner-ts=1779288103",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본 카와사키 긴센(K Line)이 삼성중공업에서 건조한 174,000 cbm급 멤브레인식 LNG 운반선 'Diamond Gas Jade'의 명명식을 2026년 5월 19일 개최</p><p>• 다이아몬드 글로벌 에너지(미츠비시 자회사)와 K Line 간의 신조 LNG 운반선 장기 용선 계약으로, 캐나다 키티맷의 LNG 캐나다 프로젝트에 투입될 예정</p><p>• LNG 캐나다는 Shell, Petronas, PetroChina, KOGAS, 미츠비시의 합작투자로 운영되며, 글로벌 에너지 공급망 지원이 주요 목적</p><p>• 선명 'Diamond Gas Jade'는 브리티시컬럼비아의 옥(jade)이 특산품이라는 점과 장수와 번영을 상징하는 의미 포함</p><p>• K Line은 2022년 5월 중기 경영계획에서 LNG 사업을 최우선 투자 영역으로 선정하고 장기 용선 확대 추진 중</p><h3>Key Quotes</h3><p>• "The charter party between DGE and K Line is said to represent the first long-term charter contract for a newly built LNG vessel" (다이아몬드 글로벌 에너지와 K Line 간의 용선 계약은 신조 LNG 운반선 최초의 장기 계약)</p><p>• "The vessel was named to express the companies' hopes for the project's enduring success and prosperity" (선박의 명명은 프로젝트의 지속적 성공과 번영을 염원하는 기업들의 바램을 표현)</p><h3>Technical Insights</h3><p>• 174,000 cbm급 멤브레인식 LNG 운반선은 최신 용량 기준으로 현대적 LNG 운송 플릿의 표준화를 반영하며, 안전하고 효율적인 대량 수송 수행</p><p>• K Line의 장기 용선 계약 추진은 에너지 수요 증가에 따른 안정적 운영 역량 확보 및 글로벌 LNG 공급망 강화 전략의 일환</p><p>• 삼성중공업 같은 주요 조선소의 LNG 운반선 건조 능력은 해운 산업의 에너지 전환 시대 대응 역량을 보여주며, 아시아 조선업의 고부가가치 선박 시장 점유 지속</p></div>`,
      tags: ["LNG shipping","vessel naming","K Line","LNG Canada","Samsung Heavy Industries"],
      link: "https://www.offshore-energy.biz/lng-canada-bound-vessel-gets-its-name-at-samsung-heavy-industries-yard/",
      coords: [-128.37,54.3],
      location: "Kitimat, British Columbia, Canada"
    },
    {
      type: "news",
      title: "Yinson Production Opens Shanghai Office to Strengthen China Partnership and Project Execution",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-20",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/Yinson-Production-has-officially-opened-its-Shanghai-office-in-China-Source-Yinson-Production.jpg?image-crop-positioner-ts=1779284553",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **싱가포르 기반 Yinson Production이 중국 상하이에 새로운 사무소를 개설하여 조선소, 공급업체, 제조 파트너와의 협력 강화**</p><p>• **중국 조선소 생태계와의 협력은 10년 이상 지속되었으며, FPSO John Agyekum Kufuor 프로젝트(2014년부터) 등 다수의 주요 사업에 참여**</p><p>• **회사의 계약 잔액이 약 193억 달러에 달하며 2050년까지 확장되는 대규모 프로젝트 포트폴리오 보유**</p><p>• **중국 내 COSCO Shipping Heavy Industry, CIMC Raffles, Huarun Dadong Dockyard 등 주요 조선소들과 다중 FPSO/FSO 프로젝트 협력**</p><p>• **브라질, 서아프리카, 베트남 등 글로벌 해역에서의 함정 현대화 및 제조 지원 사업 수행**</p><p>• **해양에너지 산업의 복잡성 증가에 따라 안전성, 저배출, 디지털 통합, 신속한 납기 등 클라이언트 기대 충족 필요**</p><p>---</p><h3>Key Quotes</h3><p>• "The Shanghai office reflects the company's long-term commitment to strengthening execution capabilities and building deeper partnerships within China's engineering, fabrication and maritime industries." <br>(상하이 사무소는 중국의 엔지니어링, 제조, 해양산업 내 깊은 파트너십 구축과 실행 능력 강화를 위한 장기적 약속을 반영)</p><p>• "China has become an increasingly important part of our global project ecosystem over the years. As our projects have grown in scale and complexity, closer collaboration with shipyards, suppliers and engineering partners has become more critical to delivering projects safely, on time, on budget and to the quality standards our clients expect."<br>(중국은 수년간 글로벌 프로젝트 생태계에서 점점 더 중요한 부분이 되었으며, 프로젝트 규모와 복잡성 증가에 따라 조선소, 공급업체, 엔지니어링 파트너와의 긴밀한 협력이 안전하고 시간 내 예산 범위 내 고품질 납기를 위해 필수)</p><p>---</p><h3>Technical Insights</h3><p>• **조선소 기반 확충: 중국 주요 조선소(COSCO, CIMC Raffles, Huarun Dadong 등)와의 전략적 파트너십을 통해 FPSO/FSO 건조, 업그레이드, 통합 작업의 효율성 극대화**</p><p>• **글로벌 프로젝트 복잡성 대응: 해양에너지 산업의 저배출화, 디지털 통합, 신속 납기 등 증가하는 클라이언트 기대치 충족을 위한 지역 거점 강화 전략**</p><p>• **공급망 최적화: 아시아 최대 해양엔지니어링 및 제조 허브인 상하이 기반 사무소 개설로 신속한 협력, 품질 관리, 원가 효율성 동시 달성 가능**</p><p>• **장기 사업 안정성: $19.3B 계약 잔액(2050년까지)으로 지속적 성장이 예상되는 가운데, 중국 내 로컬 인프라 구축을 통한 프로젝트 리스크 감소 및 실행 신뢰성 강화**</p></div>`,
      tags: ["FPSO","Offshore Engineering","China Shipyards","Project Execution","Strategic Expansion"],
      link: "https://www.offshore-energy.biz/yinson-production-sets-up-shop-in-china-to-bolster-project-execution/",
      coords: [121.4737,31.2304],
      location: "Shanghai, China"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-21
addEvents({
  "2026-05-21": [
    {
      type: "news",
      title: "Wave-measuring device deployed at Cuttyhunk Test Range in Massachusetts",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-21",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/Wave-measuring-device-deployed-at-new-marine-energy-test-site-in-Massachusetts.jpg?image-crop-positioner-ts=1779347586",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 매사추세츠 해양재생에너지 협력단(MRECo)이 Cuttyhunk Test Range(CTR)에 SOFAR Spotter Buoy 파도 측정 장치를 배포하여 실시간 해양 데이터 수집 시작</p><p>• SOFAR Ocean의 Spotter Buoy는 파고, 수온, 환경 조건 등을 실시간으로 수집하여 해양 기술 프로젝트의 안전성과 성능 검증 향상</p><p>• CTR은 매사추세츠 Ocean Innovation Network의 첫 번째 현장 기술 배포로, 해양 기술 상용화를 위한 수심 테스트 인프라 제공</p><p>• MassCEC의 자금 지원으로 운영되는 CTR과 Bourne Tidal Test Site는 기업과 연구자들이 상용화 전 실제 환경에서 안전하게 테스트 가능하게 함</p><p>• 파도 측정 장치 배포는 해양 기술 개발의 비용 및 규제 진입장벽을 낮추는 중요한 단계</p><h3>Key Quotes</h3><p>• "This deployment marks an important step for Massachusetts as a leader in ocean innovation" (이 배포는 해양 혁신 분야의 선도자로서 매사추세츠의 중요한 진전을 의미한다)</p><p>• "CTR will remove the permeating and cost barriers for the water testing that is critical for commercialization of marine technologies" (CTR은 해양 기술 상용화에 필수적인 수심 테스트의 비용 및 장벽을 제거할 것이다)</p><h3>Technical Insights</h3><p>• 실시간 파도 높이 및 환경 조건 데이터 수집은 해양 신기술의 검증 및 성능 평가를 위한 신뢰할 수 있는 기초 데이터 제공으로, 기술 개발 기간 단축 가능</p><p>• 허가된 전용 테스트 인프라 구축으로 복잡한 규제 절차를 사전에 해결하여 스타트업 및 중소 기업의 해양 에너지 기술 상용화 가속화</p><p>• 매사추세츠 Ocean Innovation Network는 지역 차원의 공유 해양 테스트 인프라 통합으로 해양 재생에너지 생태계 조성, 향후 자율운항선박(ASV) 및 해양 로봇 테스트도 확대 가능성 시사</p></div>`,
      tags: ["Marine Renewable Energy","Ocean Technology","Wave Measurement","Test Infrastructure"],
      link: "https://www.offshore-energy.biz/wave-measuring-device-deployed-at-new-marine-energy-test-site-in-massachusetts/",
      coords: [-70.6,41.5],
      location: "Cuttyhunk, Massachusetts, USA"
    },
    {
      type: "news",
      title: "U.S. Navy Approves Boeing MQ-25A Stingray Unmanned Tanker for Production",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-05-21",
      image: "https://maritime-executive.com/media/images/article/MQ-25-demonstrator-boeing-2.aa529a.webp",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 해군이 8년간의 개발을 거쳐 보잉의 무인급유항공기 MQ-25A 스팅레이(Stingray)의 양산 승인을 결정함<br>• 이 항공기는 항모 갑판에서 출발하여 약 15,000파운드의 제트 연료를 탑재하고 공중에서 전투기 급유 임무를 자동화<br>• 스팅레이 배치로 F/A-18 슈퍼 호넷들이 급유 업무에서 해방되어 더 많은 전투 작전 수행 가능<br>• 2026년 말 항모 적합성 시험(carrier qualification trials) 예정이며, 첫 해 3대의 항공기 초저율 양산 계획<br>• 무장하지 않은 설계이지만 스텔스와 초장거리 성능으로 인해 향후 대함 미사일(LRASM) 장착 전투형 버전 개발 가능성 제시<br>• 해군의 무인 전투기 개발 노력은 2000년부터 시작되었으며, X-47B 프로젝트의 중단 이후 무인 급유기 개념으로 재전환됨</p><h3>Key Quotes</h3><p>• "Moving the MQ-25A Stingray to Milestone C and into production is arming our warfighters with a capability that increases the lethality of our Carrier Strike Groups." (MQ-25A 스팅레이를 생산 단계로 이동시키는 것은 항모 전단의 전투력을 증대시키는 능력으로 작전 요원들을 무장시키는 것)</p><p>• "The Stingray will free up all of a carrier air wing's F/A-18 Super Hornets to carry out more combat missions by taking them off of tanking duty." (스팅레이는 항모 비행단의 모든 F/A-18 슈퍼 호넷을 급유 업무에서 해방시켜 더 많은 전투 작전 수행 가능하게 함)</p><h3>Technical Insights</h3><p>• **무인 항공기 자동화 기술**: MQ-25A는 항모 기반 무인 항공기의 20년 개발 노력의 결과물로, 완전 자동 급유 시스템과 항모 운용 기술을 통합한 첫 양산 체계를 대표함</p><p>• **군사 해양 전략 변화**: 무인 급유기의 도입은 항모 전단의 작전 반경 확대와 전투기의 임무 효율성 증대를 통해 해상 지배 패러다임을 변화시킬 전망</p><p>• **향후 군사화 가능성**: 현재 무장하지 않은 설계이나 LRASM 등 공대함 미사일 장착 가능성이 시사되며, 이는 자율 전투 시스템으로의 발전을 예고함</p><p>• **국방 산업 영향**: 보잉의 MQ-25A 양산 승인은 무인 방위 시스템 시장 확대와 자율 항공 기술 상용화 가속화를 촉발할 것으로 예상됨</p></div>`,
      tags: ["Unmanned Aircraft","Naval Defense","Boeing MQ-25A Stingray","Carrier Operations"],
      link: "https://maritime-executive.com/article/navy-s-unmanned-tanker-jet-for-carriers-has-been-approved-for-production",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// Auto-collected: 2026-05-20
addEvents({
  "2026-05-20": [
    {
      type: "news",
      title: "U.S. Navy's MQ-25A Stingray Unmanned Tanker Cleared for Production",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-20",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/HIsrJDbXYAATuZB.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **MQ-25A 스팅레이 무인 급유기가 양산 단계(Milestone C) 진입** - 국방부 장관 헝 카오가 미국 해군의 첫 항모 운용 무인 급유기의 양산 승인을 발표하여 연구개발 단계를 벗어남</p><p>• **항모 전투단(CVW) 작전 반경 확대 및 F/A-18 슈퍼호닛 전력 보존이 주요 목표** - 유인 급유기로 사용되던 전투기를 전투 임무에 투입하고 무인 시스템으로 대체하여 항모 전력을 최적화</p><p>• **2027 회계연도 추가 3대 구매 및 총 $771.2백만 규모 투자** - 2026년 3대에 이어 2027년 3대 추가 구매로 총 76대 배치 계획 중 6대 확보(9대 시험기, 67대 양산기)</p><p>• **초기 운용 능력(IOC) 2029년 2분기로 연장** - 원래 2024년 목표에서 약 5년 지연되었으나 프로그램은 지속 추진 중</p><p>• **코방(Cobham) 공중급유 포드 탑재로 F-35C, E-2D 등 다양한 함정 항공기 지원 가능** - 프로브-드로그 급유 시스템 채택으로 항모 전투단의 다양한 플랫폼과 호환성 확보</p><p>• **미국 내 보잉 신규 생산시설 구축** - 세인트루이스 공항 미드아메리카에 30만 평방피트 규모 시설 건설하여 롤스로이스 엔진 등 주요 부품 통합</p><h3>Key Quotes</h3><p>• "The U.S. Navy still considers the MQ-25 program to be a priority due to the need to aggressively expand the reach of Carrier Air Wings (CVWs) amidst the operational pressure to conserve airframe lifespan on F/A-18 E/F Superhornets" <br>(미 해군은 F/A-18E/F 슈퍼호닛의 기체 수명 보존과 항모 전투단의 작전 반경 확대 필요성으로 MQ-25 프로그램을 우선순위로 유지 중)</p><p>• "Relegating Superhornets to tanker duty also reduced the available aircraft for other critical missions such as strike and combat air patrol, a problem solved by the MQ-25"<br>(슈퍼호닛을 급유기로만 사용하면 공격 및 전투 공중 초소 임무용 항공기 가용성이 감소하는 문제를 MQ-25가 해결)</p><p>• "The first MQ-25 produced under Navy ownership by Boeing recently completed it's first test flight outside it's construction facility on April 25th, 2026, with the Navy stating the flight lasted over 2 hours"<br>(보잉이 해군을 위해 생산한 첫 번째 MQ-25가 2026년 4월 25일 2시간 이상의 비행 성공)</p><h3>Technical Insights</h3><p>• **무인 항공 급유 시스템의 군사 자율화 진전** - 항모 전투단 내 유인 전투기 의존도 감소 및 무인 플랫폼 중심 운영 체계로의 전환은 향후 국방 자동화 트렌드의 선례가 될 것으로 예상</p><p>• **프로브-드로그 급유 시스템의 표준화 효과** - 코방 포드 채택으로 F-35C, E-2D 등 기존 함정 항공기와의 호환성 확보로 통합 운영 효율성 극대화 및 미래 무인 항공 플랫폼 확장성 제공</p><p>• **장기 개발 지연과 양산 단계 진입의 산업적 의미** - 9년 개발 기간과 5년의 IOC 연장에도 불구하고 양산 승인은 기술 성숙도 달성 및 미 해군의 강력한 정책 의지를 반영하며, 향후 방위사업 장기화 추세 심화 예상</p><p>• **</p></div>`,
      tags: ["unmanned aircraft","autonomous systems","U.S. Navy","MQ-25 Stingray","carrier operations","defense technology"],
      link: "https://www.navalnews.com/naval-news/2026/05/u-s-navys-first-carrier-operated-unmanned-tanker-cleared-for-production/",
      coords: [38.2975,-76.4735],
      location: "Naval Air Station Patuxent River, Maryland, USA"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2025-05-01
addEvents({
  "2025-05-01": [
    {
      type: "accident",
      title: "Man overboard and fatal entanglement on UK potting vessel Wilaya (M36)",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-05-21",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사고 개요**: 2025년 5월 1일 영국 등록 어로용 선박 Wilaya에서 갑판원이 줄의 고리에 발이 걸려 배포 장비에 의해 바다로 끌려감<br>• **사망자**: 신속하게 회수되었으나 응급 처치에도 불구하고 소생하지 못함 (1명 사망)<br>• **사고 원인**: 회전하는 어구와 승선원 사이의 안전 분리 부족, 선박의 문서화된 안전 절차 미준수<br>• **위험 요소**: 위험 평가에서 어로 작업 관련 모든 위험이 파악되지 않았으며, 여러 제어 조치가 미실행 또는 실현 불가능했음<br>• **권장 사항**: 해양청에 어로 작업 위험 평가 지침 강화 권고, 선박 소유자에게 자동 배포 시스템의 안전 분리 기능 개선 요청</p><h3>Key Quotes</h3><p>• "a deckhand on the UK registered potting vessel Wilaya was dragged overboard by the deploying gear after his foot became caught in a bight of rope" <br>(영국 등록 어로용 선박 Wilaya의 갑판원이 줄의 고리에 발이 걸려 배포 장비에 의해 바다로 끌려감)</p><p>• "there was no separation from the running gear for the crew working on deck, which put them at risk of entanglement, harm and injury"<br>(갑판에서 작업하는 승무원이 회전하는 어구로부터 분리되지 않아 감김, 상해, 부상의 위험에 노출됨)</p><p>• "the crew did not adhere to the vessel's documented control measures during shooting operations which exposed the crew to a risk of harm and injury"<br>(승무원이 배포 작업 중 선박의 문서화된 제어 조치를 준수하지 않아 부상 위험에 노출됨)</p><h3>Technical Insights</h3><p>• **어로 안전 체계 결함**: 소형 어로 선박의 자동 배포 시스템(self-shooting arrangement)에서 기계적 위험 요소를 완전히 제거하지 못한 설계 문제로, 승무원 안전 절차의 순준수가 매우 중요함</p><p>• **위험 평가 부실**: 선박 수준의 위험 평가(Risk Assessment)가 실제 작업 환경의 모든 위험을 포함하지 못했으며, 문서화된 통제 조치들이 현장에서 실현 불가능한 경우가 있었음을 시사</p><p>• **산업 규제 개선 필요**: IMO/ISM 코드 준수 차원에서 어로 선박의 작은 규모와 운영 특성에 맞게 맞춤형 안전 지침이 강화되어야 함을 강조</p><p>• **Home and Dry 워킹그룹**: 냄비 및 통발 선박의 운영 위험과 하강식 적재(downstacking) 및 자동 배포 시스템 관련 위험에 대한 업계 전문가 그룹의 결과물 시행 추진 권고</p></div>`,
      tags: ["Man overboard","Fatality","Potting vessel","Entanglement","Rope hazard"],
      link: "https://www.gov.uk/maib-reports/man-overboard-from-the-potting-vessel-wilaya-m36-with-the-loss-of-1-life",
      coords: [-5.13,51.73],
      location: "Jack Sound, Pembrokeshire, Wales"
    }
  ]
});

// Auto-collected: 2026-05-21
addEvents({
  "2026-05-21": [
    {
      type: "news",
      title: "IMO Adopts First-Ever Global Rules for Autonomous Ships",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-05-21",
      image: "https://gcaptain.com/wp-content/uploads/2018/09/gCaptain_Logo.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **IMO, 최초의 자율운항선박 국제 규범 채택** - 국제해사기구(IMO)가 2026년 5월 런던에서 개최된 해사안전위원회 111차 회의에서 해양자율운항선박 국제안전코드(MASS Code)를 전 세계 최초로 채택했으며, 이는 해운 산업의 자율운항 기술 도입에 있어 획기적인 이정표가 됨</p><p>• **4단계 자율화 수준 정의** - MASS 코드는 자동화된 의사결정 지원 시스템을 갖춘 기존 선박부터 인간의 개입 없이 독립적인 의사결정이 가능한 완전 자율선박까지 4가지 자율화 수준을 정의함</p><p>• **비의무적 시작, 2032년 강제시행 예정** - 현재 채택된 코드는 비의무적(non-mandatory)이며, 올해 중 산업 경험 축적 단계를 시작하고, 2028년 강제 코드 작업 개시, 2030년 7월 채택, 2032년 1월 1일 발효 예정</p><p>• **미해결된 법적·기술적 쟁점 존재** - 원격 운항자의 책임, "선장(Master)"의 법적 역할 정의, 자율 의사결정 시스템의 법적 책임 문제, 원격 연결성 및 사이버보안, 선박 조종 및 감시 의무 등이 주요 미해결 과제</p><p>• **광범위한 운영·기술 기준 포함** - 원격 운항, 연결성, 사이버보안, 항해 안전, 기계 장치, 소방, 화물 취급, 선박 감시, 수색구조 의무 등 다양한 운영 및 기술 분야를 포괄</p><p>• **5년간의 규제 개발 프로세스** - IMO는 2021년 자율운항선박에 적용되는 기존 국제조약의 적용 범위를 검토하기 시작했으며, 안전, 항해, 훈련, 책임, 수색구조, 항만 운영 등 주요 협약을 포함한 종합적 검토 완료</p><h3>Key Quotes</h3><p>• **"IMO has adopted the first-ever MASS Code — a global framework for Maritime Autonomous Surface Ships. A milestone that puts IMO at the forefront of regulating emerging technologies, enabling innovation while keeping safety, accountability and the human element central to shipping."** (IMO가 채택한 최초의 MASS 코드는 자율운항선박에 대한 글로벌 규제 체계로, 안전성, 책임성, 인적 요소를 중심으로 한 혁신적 기술 규제의 이정표를 제시함)</p><p>• **"Trials involving remotely operated and semi-autonomous ships are already underway in several regions, particularly on shorter routes between ports."** (원격 운항 및 반자율선박의 시험운영이 이미 여러 지역에서 진행 중이며, 특히 항만 간 단거리 노선에서 활발함)</p><h3>Technical Insights</h3><p>• **자율운항선박의 법적 책임 체계 확립의 중요성** - MASS Code는 자율선박의 의사결정 과정에서 발생하는 법적 책임을 명확히 하기 위해 선장의 역할 재정의, 원격 운영자의 책임 범위, AI/자동화 시스템의 법적 지위 등을 규정해야 하며, 이는 해운 산업의 자율화 확대에 필수적인 규제 기반 마련</p><p>• **IMO의 단계적 규제 도입 전략** - 비의무적 코드로 시작하는 현재의 접근방식은 산업의 자발적 참여를 통해 실제 운영 데이터를 수집하고, 2032년 강제시행 전에 충분한 경험 축적 기간을 확보하는 현실적인 규제 전략으로 평가됨</p><p>• **원격 연결성과 사이버보안의 해결 과제** - 원양 항해에서의 신뢰할 수 있는 통신 인프라 부재, 원격 운항 시스템의 사이버 공격 취약성, 자율</p></div>`,
      tags: ["Autonomous Ships","MASS Code","IMO Regulation","Maritime Safety"],
      link: "https://gcaptain.com/imo-adopts-first-ever-global-rules-for-autonomous-ships/",
      coords: [51.5074,-0.1278],
      location: "London"
    },
    {
      type: "news",
      title: "IMO Adopts Global Code for Autonomous Ships (MASS Code)",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-21",
      image: "https://images.marinelink.com/images/maritime/w800/source-170836.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IMO가 런던 해사안전위원회 제111차 회의에서 자율운항선박 국제안전규칙(MASS Code)을 채택함<br>• MASS Code는 자동화된 선박, 원격운영 선박, 완전자율운항선박 등 다양한 수준의 자율성을 갖춘 상선의 안전한 통합을 목표로 함<br>• 2026년 7월 1일부터 효력 발생, 최소 2년간 자발적 적용 후 SOLAS 협약에 따른 강제 규정화 예정<br>• 국제 무역 화물선에 적용되며, 기존 선박과 동등한 안전 및 환경 기준 준수를 요구<br>• 선주국의 시험 운영 기간을 통해 규제 틀의 실효성 검증 및 개선 기회 제공</p><h3>Key Quotes</h3><p>• "The MASS Code aims to support the safe integration of autonomous and remotely operated commercial ships into global shipping" (MASS Code는 자율운항 및 원격운영 상용선박의 안전한 국제해운 통합을 지원하는 것을 목표로 함)</p><p>• "It will start on a voluntary basis for at least two years, giving Member States the opportunity to test its use while paving the way for making it mandatory under the SOLAS Convention" (최소 2년간 자발적 적용으로 시작하여 회원국들이 규제를 시험할 기회를 제공하면서 SOLAS 협약에 따른 강제화의 기초를 마련)</p><h3>Technical Insights</h3><p>• **MASS Code의 Goal-based Framework**: 규범적 규제가 아닌 목표 기반의 유연한 규제 체계로 설계되어, 기술 혁신에 빠르게 대응 가능하면서도 안전 기준 준수를 보장하는 균형 추구</p><p>• **다단계 자율성 수준 인정**: 선상 승무원 있는 자동화부터 완전자율운항까지 스펙트럼 전체를 수용함으로써 산업의 현실적 전환 경로 제시 및 기술 성숙도에 따른 점진적 도입 가능</p><p>• **국제 규제의 조화 필요성**: MASS Code의 의무화 이전 2년의 자발적 적용 기간은 선주국들의 국내법 정비, 선원 교육, 통신 인프라 정비 등 제도적 준비 기간으로 활용되어야 하며, IMO-SOLAS의 통합 규제 체계 구축의 신호탄</p></div>`,
      tags: ["Autonomous Ships","IMO Regulation","MASS Code","Maritime Safety"],
      link: "https://www.marinelink.com/news/imo-adopts-global-code-autonomous-ships-539519",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "IMO Approves Non-Mandatory MASS Code for Autonomous Ships",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-05-21",
      image: "https://maritime-executive.com/media/images/article/Zhi-Fei-at-Qingdao.jpg.cfa699.backup",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• IMO 해양안전위원회가 무인선박 안전기준을 규정하는 MASS 코드(Maritime Autonomous Surface Ships code)의 최종 텍스트를 승인했으며, 현재는 비의무 지침이나 2028년 이르면 의무화될 예정<br>• MASS 코드는 자율항해 선박의 안전성 유지와 혁신 활성화의 균형을 맞추기 위해 목표 기반의 규칙으로 수립되었으며, 국제무역에서 운영되는 무인선박에 처음 적용되는 글로벌 표준<br>• COLREGS 충돌회피규칙을 기반으로 하되, 무인선박의 자동항해시스템이 "안전항해에 필요한 모든 정보를 지속적으로 모니터링"하는 상황 인식 요구사항이 추가됨<br>• 무인선박은 승무원이 탑승하지 않기 때문에 선체 구조, 안정성, 소화 장치, 구명 장비, 보안, 화물 취급, 동력 장치 등에서 기존 규격과 상이한 설계 기준 필요<br>• 앵커 윈들래스 등 비상 상황에서 자동 또는 원격으로 작동 가능한 기능이 필수 요구사항으로 규정되어 기술적 도전 과제 발생 예상</p><h3>Key Quotes</h3><br>• "the purpose of the code is to regulate emerging technology and maintain safety while also enabling innovation" (이 코드의 목적은 신흥 기술을 규제하면서 동시에 안전을 유지하고 혁신을 가능하게 하는 것)<br>• "the ship's self-navigation system must continuously monitor all information necessary for safe navigation" (선박의 자동항해시스템은 안전항해에 필요한 모든 정보를 지속적으로 모니터링해야 함)</p><h3>Technical Insights</h3><br>• COLREGS의 시각적·음향적 충돌회피 요구사항을 기반으로 하되, 현재 대부분의 자율항해시스템이 감지하지 못하는 음성 신호와 VHF 통신 해석 능력은 코드에 미포함되어 있어 향후 기술 발전에 따른 규제 강화 필요<br>• 목표 기반의 유연한 규칙 체계는 자율선박 기술 혁신을 촉진하지만, SOLAS 규정 수준의 구체적 기준 부재로 인해 해사 환경의 극악한 상황에서의 신뢰성 검증이 과제<br>• 무인선박의 비상상황 대응(fallback operations)과 열악한 해상환경에서의 설비 유지보수 표준화가 핵심 과제이며, 선급협회와 제조사 간 국제 협력 체계 구축 필요<br>• 2028년 의무화 예정으로 향후 2년간 업계 의견 수렴 및 기술 표준화를 위한 시간 확보되었으며, 자율선박 상용화 시대의 규제 환경 선제적 정립으로 국제 해운산업의 전환기 도래</p></div>`,
      tags: ["Autonomous Ships","IMO Regulation","MASS Code","Maritime Safety"],
      link: "https://maritime-executive.com/article/imo-passes-non-mandatory-safety-code-for-autonomous-ships",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-21
addEvents({
  "2026-05-21": [
    {
      type: "news",
      title: "Australian Quantum Sensor Company Deteqt Raises A$5M Seed Funding for Maritime Navigation",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-21",
      image: "https://images.marinelink.com/images/maritime/w800/image-deteqt-170840.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **양자 자기 센서 기술**: 호주 딥테크 기업 Deteqt가 다이아몬드 크리스탈과 반도체 칩을 결합한 초소형 양자 자기계 개발 - 드론, 자율 차량, 로봇에 내장 가능</p><p>• **자금 조성**: Main Sequence가 주도한 A$500만 달러(360만 달러) 시드 펀딩 라운드 완료, ATP Fund, BOKA Capital, Beaten Zone Venture Partners 등이 참여</p><p>• **해양 분야 응용**: GPS 신호가 투과되지 않는 수중 환경에서의 항법, 자기 이상 탐지, 잠수함·파이프라인·미폭발탄 탐지 등에 활용</p><p>• **국방 수요**: GPS 재밍 환경에서의 위치결정 기술 대안으로 군사 플랫폼에 적용 - 분쟁 지역에서 긴급한 수요 증가</p><p>• **기술 검증**: 올해 초 철도 노선 상의 비차폐 환경 현장 시험에서 통행 열차의 자기 서명 감지 성공 - 강한 진동과 전자기 간섭 속 강건성 입증</p><p>• **확장성**: 칩 스케일 양자 자기계를 해양 플랫폼 어레이와 분산 센싱 네트워크에 배치하는 것을 목표</p><h3>Key Quotes</h3><p>• "Our technology uses engineered diamond to measure magnetic fields with extremely high sensitivity. The diamond contains atomic-scale quantum defects that respond to magnetic fields." <br>(공학적으로 제작된 다이아몬드를 이용해 자기장을 매우 높은 감도로 측정하는 기술 - 원자 규모의 양자 결함이 자기장에 반응)</p><p>• "Our chip-scale integration changes that entirely. Marine and subsea environments are an important focus area for Deteqt, particularly for navigation and magnetic anomaly detection."<br>(칩 스케일 통합 기술이 게임을 완전히 바꿈. 특히 해양·수중 환경에서 항법과 자기 이상 탐지에 중점)</p><p>• "Because GPS signals do not penetrate underwater, alternative navigation approaches are needed for subsea systems."<br>(GPS 신호가 수중에 투과되지 않으므로 수중 시스템을 위한 대체 항법 방식이 필수)</p><h3>Technical Insights</h3><p>• **수중 항법 혁신**: GPS 신호 불가 환경에서 양자 자기 센서 기반의 절대항법(Dead Reckoning) 시스템 구현 - 자율 수중선(AUV), 무인 잠수정(ROV) 등의 운용 반경 획기적 확대 가능</p><p>• **IMO 자율선박 규제 대응**: 미래 자율 선박의 필수 백업 항법 장비로서 COLREG 규정상 주요 네비게이션 시스템 다원화 요구에 부합 - 사이버 공격 및 GNSS 재밍 대응 능력 강화</p><p>• **산업 생태계 확장**: 소형화된 양자 센서 기술이 해양 산업 전반의 수중 탐사, 파이프라인 모니터링, 자기 이상 탐지 등 다양한 애플리케이션 개발을 촉발 - 스타트업 생태계와 대형 방산/해양 기업 간 기술 협력 증가</p><p>• **기술 성숙도 단계**: 현장 시험 성공으로 TRL 4~5 단계 진입 - 해양 환경의 고염분, 높은 압력, 전자기 간섭 등 극한 조건에서의 추가 검증 필요, 2~3년 내 상용화 가능성</p></div>`,
      tags: ["Quantum Sensors","Maritime Navigation","GPS-Denied Systems","Autonomous Vehicles","Deep Tech"],
      link: "https://www.marinelink.com/news/australian-quantum-sensor-company-raises-539523",
      coords: [151.2093,-33.8688],
      location: "Sydney, Australia"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-22
addEvents({
  "2026-05-22": [
    {
      type: "news",
      title: "Navy Selects 7 MUSV Designs to Enter Prototype Phase",
      source: "USNI News",
      sourceMeta: "usni.org · 2026-05-22",
      image: "https://news.usni.org/wp-content/uploads/2026/05/HIIRomulusUSV-948x534-1.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미 해군이 중형 무인수상함(MUSV) 개발 프로젝트에서 약 24개 제안 중 7개 설계를 선정하여 프로토타입 평가 단계로 진입시켰음</p><p>• 선정된 조선사들은 2026년 10월 이전에 해상 시연을 성공적으로 완료해야 하며, 2027 회계연도에 해군이 함정을 임차 또는 구매할 계획</p><p>• 요구 사양: 25노트 속도, 2,500해리 항정, 25톤 페이로드, 40피트 컨테이너 2개 수용 가능, 자율 운용 능력</p><p>• 각 조선사는 프로토타입 단계에서 1,500만 달러를 지원받으며, 성공 시 후속 양산 계약 대상이 될 수 있음</p><p>• Saronic, HII, Blue Water Autonomy 등 주요 기업들이 MUSV 개발에 참여 중이며, 컨테이너화 전투 능력(containerized capability) 통합 전략의 핵심 플랫폼 역할</p><p>• 해군은 장기 조선 계획에서 2026 회계연도에 36척의 MUSV 구매 의도를 발표</p><h3>Key Quotes</h3><p>• "The Navy selected seven entrants in the Medium Unmanned Surface Vessel (MUSV) marketplace to advance to the next phase – prototype evaluation." (해군이 MUSV 개발에 참여한 7개 업체를 프로토타입 평가 단계로 진행시키기로 선정했다)</p><p>• "The containerized approach generates combat power at speed and scale by placing containerized payloads on any viable platform; frigates, [Littoral Combat Ships], auxiliaries, unmanned systems, and commercial vessels." (컨테이너화된 전투력 개념은 어떤 플랫폼이든 컨테이너 페이로드를 탑재하여 빠르고 대규모로 전투력을 생성하는 방식)</p><h3>Technical Insights</h3><p>• **자율운항 시스템의 고도화**: MUSV는 단순 무인함이 아니라 수주일간 인간 개입 없이 운용 가능한 고도의 자율항법 및 의사결정 시스템을 요구하며, 이는 IMO 자율선박 규정(COLREG 준수) 구현의 선도 사례가 될 수 있음</p><p>• **모듈화 전투체계와 해양 자율로봇**: 40피트 컨테이너 기반 페이로드 표준화는 다양한 전술 시스템을 동일 플랫폼에서 빠르게 재구성할 수 있는 산업 표준화의 중요성을 시사하며, 민간 해운업에도 적용 가능한 모듈 설계 개념</p><p>• **해양 자율 시스템의 성숙도 검증**: 2026년 10월 해상 시연 완료 요구는 실제 운용 환경에서의 자율성능 검증을 의무화하는 것으로, IMO Level 2-3 자율선박 시스템의 개발 추진을 선제적으로 입증하는 군사-민간 기술 전이 모델</p><p>• **산업 생태계 확장**: Saronic, HII, Blue Water Autonomy 등 신규 업체 진입으로 전통 조선산업과 고기술 자율로봇 기업의 협력 모델이 본격화되며, 이는 글로벌 해양 자율화 시장의 경쟁 구도 변화를 의미함</p></div>`,
      tags: ["autonomous ships","MUSV","unmanned surface vessels","Navy robotics","prototype development"],
      link: "https://news.usni.org/2026/05/22/navy-selects-7-musv-designs-to-enter-prototype-phase",
      coords: [0,0],
      location: "Global/USA"
    },
    {
      type: "news",
      title: "Iran's Control of Hormuz Strait Exacerbates Crisis for 20,000 Trapped Mariners",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-22",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockaninka-170863.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협 봉쇄로 인해 약 20,000명의 선원이 2,000척의 선박에 갇혀있으며, 식량 부족과 식수 부족 등 극심한 고통을 겪고 있음<br>• 이란이 새로운 지도를 발표하며 호르무즈 해협에 대한 통제권을 재확인했으며, 페르시아만 해협청(Persian Gulf Strait Authority)이 통행 허가와 결제를 위한 복잡한 시스템을 운영 중<br>• 2월 28일 미국-이스라엘의 이란 공격 이후 해협 폐쇄로 인해 선원들이 3개월 이상 고립된 생활을 하고 있으며, 미사일과 드론 공격에 대한 공포 상태 지속<br>• 국제운수노동자연맹(ITF)이 임금 지연, 선원 귀국 거부, 물자 부족 등으로 인한 분쟁 관련 2,000명 이상의 선원으로부터 연락을 받았음<br>• 선박 소유자들은 이란이 설정한 복잡한 통행 허가 및 결제 체계를 통해 선박 및 화물을 빼내야 하는 상황에 직면</p><h3>Key Quotes</h3><p>• "The only thing we do here is plan how to spend the night and pray to God that we do not get hit during an attack," (여기서 우리가 하는 유일한 일은 밤을 어떻게 보낼지 계획하고 공격을 받지 않기를 기도하는 것입니다)</p><p>• "Seafarers' vulnerability and exposure is more, let's say, extreme because of the war," (전쟁으로 인해 선원들의 취약성과 노출이 극도로 심각합니다)</p><h3>Technical Insights</h3><p>• 호르무즈 해협의 사실상의 봉쇄는 국제해운법(UNCLOS)과 자유로운 해상통행권에 관련된 국제해사법 원칙에 심각한 위반을 구성하며, IMO의 해상안전 및 선원 복지 규약 준수 문제 야기<br>• 선박의 장기간 정박 상태는 선원의 신체적·정신적 건강, 안전 및 보안, 적절한 식량과 의료 용품 제공 등에 관한 ILO 해사노동협약(MLC, 2006) 위반과 관련되어 있음<br>• 전쟁 지역의 선박 운항 시 자율운항선박(MASS) 도입이 인적 피해를 줄일 수 있는 대안이 될 수 있지만, 현재 기술 수준과 규제 미비로 단기 해결책으로는 부적절<br>• 이란의 해협 통제권 주장과 복잡한 통행 허가 체계는 국제 해운 보험료 인상 및 해상 무역 경로 재조정을 야기하는 산업적 파급효과 발생</p></div>`,
      tags: ["Strait of Hormuz","Seafarer Welfare","Iran","Gulf Crisis","Maritime Geopolitics"],
      link: "https://www.marinelink.com/news/irans-continued-control-hormuz-539554",
      coords: [55.5,26],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Third Qatari LNG Tanker Transits Hormuz Strait to China Amid Iran War",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-22",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockvladsv-170862.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 카타르 LNG 운반선 3척이 호르무즈 해협을 통과하여 중국으로 향하고 있으며, 이는 이란-파키스탄 협약에 따른 중요한 에너지 거래 재개를 의미함</p><p>• 알 사흘라(Al Sahla) 선박은 21만 1,842㎥ 용량으로 라스 라판에서 출발하여 6월 14일 천진 LNG 터미널 도착 예정</p><p>• 미국-이스라엘 공습 이후 이란의 보복으로 카타르의 LNG 수출 능력 17%(연간 1,280만 톤)가 파괴되었으며, 복구에 3~5년 소요 전망</p><p>• 카타르 협상팀이 이란 핵협상 중재를 위해 테헤란에 도착했으며, 파키스탄이 평화협상 조중자 역할 수행 중</p><p>• 카타르는 세계 2위 LNG 수출국으로 대부분의 해상 화물이 아시아 구매자로 향함</p><h3>Key Quotes</h3><p>• "Iranian attacks have destroyed 17%, or 12.8 million metric tons per year, of Qatar's LNG export capacity. Repairs could take between three and five years" (이란의 공격으로 카타르의 연간 LNG 수출 능력 12.8백만 톤(17%)이 파괴되었으며, 복구에 3~5년이 소요될 것으로 예상됨)</p><p>• "Iran approved the shipment to help build confidence between Qatar and Pakistan, which is mediating in peace talks" (이란이 카타르-파키스탄 간 신뢰 구축을 위해 해상 화물 통과를 승인했으며, 파키스탄은 평화협상 중재자 역할을 수행 중)</p><h3>Technical Insights</h3><p>• 호르무즈 해협 통과 운영의 정상화는 전 지역 에너지 무역의 안정성과 해상 항로 안전성 회복을 시사하며, IMO 규정 준수 및 상선 항해 보장의 중요성 강조</p><p>• 지정학적 분쟁으로 인한 LNG 운송 중단 및 재개는 국제 에너지 시장의 공급망 회복력(resilience) 문제를 드러내며, 해상 물류의 예측 불가능성 증대</p><p>• 다자간 중재 체계(카타르-파키스탄-미국-이란)가 호르무즈 해협의 상업 항해 재개에 영향을 미치는 구조는 전략적 해상 교통로(SLOCs) 관리의 정치경제학적 복잡성 입증</p></div>`,
      tags: ["LNG shipping","Strait of Hormuz","Qatar-Iran conflict","Energy trade","Geopolitics"],
      link: "https://www.marinelink.com/news/third-qatari-lng-tanker-transits-hormuz-539553",
      coords: [56.55,26.13],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "France Drafts UN Resolution on Restoring Hormuz Strait Shipping Movement",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-22",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockpeter-170861.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 프랑스가 호르무즈 해협 해상 통행 복구를 위한 국제 임무 설립에 관한 UN 안보리 결의안을 작성했으며, 조건이 맞으면 제출할 의향을 표명함</p><p>• 미국-바레인 결의안은 2주 이상 논의 중이나 중국과 러시아의 거부권 위협으로 투표가 반복 연기되고 있는 상황</p><p>• 호르무즈 해협의 실질적 폐쇄로 인한 유가 급등과 3개월 지속된 미-이란 전쟁이 주요 배경이며, 해협 통행의 자유 확보가 분쟁 해결의 핵심 장애물</p><p>• 미국은 거부권 회피를 위해 약 140개국의 공동 후원을 확보했으나, 상임이사국인 프랑스는 현재 미국 안건을 지지하지 않는 중</p><p>• 마크롱 프랑스 대통령은 미국·테헤란과 협의 후 해협 해상 통행 자유 복구를 위한 국제 임무 구성을 추진할 계획</p><h3>Key Quotes</h3><p>• "We are working on an international mission to restore freedom of navigation. We have also prepared, as a permanent member, a draft resolution that could be discussed if the conditions are right" (해상 통행의 자유를 복구하기 위한 국제 임무에 참여 중이며, 상임이사국 자격으로 조건이 맞으면 논의할 수 있는 결의안 초안을 작성했다는 의미)</p><p>• "Control of the narrow waterway, a vital artery for global energy trade whose virtual closure has led to spiralling oil prices, is a major obstacle in talks to end the three-month-old U.S.-Iran war" (전 세계 에너지 무역의 생명선인 호르무즈 해협의 통제가 유가 급등을 초래했으며, 미-이란 전쟁 종료 협상의 주요 장애물이라는 의미)</p><h3>Technical Insights</h3><p>• **해상 통행의 자유(Freedom of Navigation) 원칙**: 국제해사법상 모든 국가는 공해에서 해상 통행의 자유를 누릴 권리가 있으나, 호르무즈 해협 사태는 전략적 해협 통제 문제가 국제분쟁으로 확대되는 심각한 사례</p><p>• **UN 안보리 메커니즘의 한계**: 상임이사국들의 거부권으로 인해 국제 해상 분쟁 해결이 지연되는 문제를 노출하며, 다자간 외교와 임시 해군 연합의 필요성을 강조</p><p>• **IMO와 국제해사규칙의 효력 문제**: 전쟁/군사 분쟁 상황에서 기존의 COLREG 및 국제해사법 준수 체계가 실효성을 상실하는 현실적 한계를 드러냄</p><p>• **항해 안전과 산업 연속성**: 글로벌 에너지 공급망 중단으로 인한 유가 급등이 전 세계 해운업계, 항만 운영, 자율운항선박 도입 등에 직접적 영향을 미치는 전략적 해상 통제의 중요성 증대</p></div>`,
      tags: ["Strait of Hormuz","UN Security Council","Freedom of Navigation","International Maritime Policy"],
      link: "https://www.marinelink.com/news/france-drafts-un-security-council-539552",
      coords: [56.2424,26.5892],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-22
addEvents({
  "2026-05-22": [
    {
      type: "news",
      title: "CMA CGM Q1 2026: Revenue Flat but Margins Squeeze Amid Geopolitical Disruptions",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-22",
      image: "https://images.marinelink.com/images/maritime/w800/copyright-mariuszadobestock-170860.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• CMA CGM는 2026년 Q1 매출 $132.3억으로 전년동기 대비 거의 동일하나 순이익은 $2.5억으로 55.8% 급락하며 마진 압박 심화<br>• 해운 부문 TEU 물량 5.93백만으로 1.5% 증가했으나 평균 컨테이너당 수익이 거의 10% 하락하며 운임율 정상화 진행 중<br>• 중동 긴장으로 인한 해상로 차질과 유가 상승, 관세 불확실성 등 지정학적 리스크가 주요 악재로 작용<br>• 메탄올 연료 선박 도입(몬테 크리스토호) 및 인도 코칭 조선소에서 LNG 선박 6척 발주로 선대 현대화 가속<br>• 로지스틱스(CEVA) 부문 6.6% 성장과 터미널, 항공화물 등 다각화 전략으로 순해운 경기 의존도 감소 시도</p><h3>Key Quotes</h3><p>• "Ongoing tensions in the Middle East, particularly disruptions affecting Gulf trade lanes, forced CMA CGM to reconfigure services and deploy alternative multimodal logistics corridors to maintain cargo flows." <br>(중동 긴장으로 인한 걸프만 해상로 차질이 CMA CGM으로 하여금 서비스를 재구성하고 대체 다중운송 로지스틱 경로를 구축하도록 강제)</p><p>• "EBITDA in the shipping segment fell more sharply, down 41.3% to $1.49 billion, highlighting the continued normalization of freight markets after recent highs."<br>(해운 부문 EBITDA가 41.3% 급락하여 최근 고점 이후 운임 시장의 지속적 정상화 추세를 반영)</p><h3>Technical Insights</h3><p>• **선대 현대화와 친환경 연료 전환**: 메탄올 연료 컨테이너선 도입 및 LNG 선박 발주는 IMO 탈탄소화 규제(IMO 2050 목표) 대응과 연료 다각화 전략의 핵심으로, 향후 운영비 변동성 감소 예상</p><p>• **지정학적 리스크와 다중운송 로지스틱 전략**: 홍해/수에즈, 걸프만 해상로 차질로 인한 서비스 재구성은 자율항해 기술과 운항 최적화 시스템의 필요성을 증대시키며, AI 기반 경로 최적화 수요 상승</p><p>• **운임 정상화와 산업 구조 조정**: 평균 컨테이너당 수익 10% 하락은 팬데믹 이후 과도한 운임의 정상화를 의미하며, 향후 초대형선(ULCV) 효율화와 자동화/인력 최소화 기술 투자 필수화</p><p>• **포트 터미널 다각화의 경쟁력**: Stonepeak와 글로벌 포트 합작, 철도·프로젝트 로지스틱 인수는 순 해운 마진 악화에 대응한 생태계 통합 전략으로, 자동화 터미널 기술과 IoT 기반 공급망 추적이 차별화 요소</p></div>`,
      tags: ["CMA CGM","Container Shipping","Financial Results","Geopolitical Risk"],
      link: "https://www.marinelink.com/news/cma-cgm-q-resilient-shipping-margins-539551",
      coords: [5.3698,43.2965],
      location: "Marseille, France"
    },
    {
      type: "news",
      title: "Incat Crowther Designed EPA Tier 4 Passenger Ferry Enters Service in US Virgin Islands",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-22",
      image: "https://images.marinelink.com/images/maritime/w800/incat-crowther-170859.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• Incat Crowther가 설계한 104피트(32미터) 신규 여객선 'Spirit of 1733'이 미국령 버진아일랜드에서 운항을 시작했으며, EPA Tier 4 배출 규제 완전 준수 선박임<br>• Gulf Craft LLC가 루이지애나에서 건조했으며, 최대 300명의 승객을 시속 28노트로 수송 가능한 USCG Subchapter-K 승인 선박<br>• Red Hook(St. Thomas)과 Cruz Bay(St. John) 간의 주요 관광 및 통근 노선에 투입되며, Incat Crowther가 설계한 기존 28미터급 여객선 2척과 함께 운영<br>• 최신 디젤 엔진 배출 제어 기술 장착, 휠체어 접근성 5개 공간 포함 202명 수용 메인 캐빈, ADA 준수 화장실 2개 등 접근성 우선 설계<br>• 상부 갑판에 100명 수용 옥외 좌석, 조종실의 360도 시야 확보로 안전한 도킹 작업 지원</p><h3>Key Quotes</h3><p>• "Spirit of 1733, a new EPA tier 4 compliant 104-foot (32-meter) passenger ferry designed by global digital shipbuilder Incat Crowther for the U.S Virgin Island's Department of Public Works has entered service." (Incat Crowther가 설계한 EPA Tier 4 준수 신규 여객선이 미국령 버진아일랜드의 공공사업부를 위해 운항을 시작했음)</p><p>• "The vessel is equipped with the latest diesel engine emission control technologies in compliance with Environmental Protection Agency (EPA) Tier 4 standards." (최신 디젤 엔진 배출 제어 기술로 EPA Tier 4 규제 완전 준수)</p><h3>Technical Insights</h3><p>• EPA Tier 4 배출 규제 준수는 해양 산업의 환경 규제 강화 추세를 반영하며, 신규 여객선 건조 시 배출 제어 기술이 필수 요구사항으로 자리 잡음<br>• USCG Subchapter-K 승인 취득으로 미국 내 여객 안전 기준 완벽 충족을 입증하며, 특히 휠체어 접근성과 ADA 준수는 포용적 해상 운송 서비스 제공의 산업 표준화 추세<br>• Incat Crowther의 디지털 조선 설계 기술이 승객 편의성(360도 시야, 통합 측면 승선 램프, 에어컨 실내 등)과 운영 효율성을 동시에 구현하는 현대 여객선 설계의 모범 사례</p></div>`,
      tags: ["Passenger Ferry","Ship Design","EPA Compliance","US Virgin Islands"],
      link: "https://www.marinelink.com/news/incat-crowther-designed-passenger-ferry-539550",
      coords: [-64.8194,18.352],
      location: "US Virgin Islands (St. Thomas - St. John Route)"
    },
    {
      type: "news",
      title: "EU Temporarily Suspends Fertilizer Duties Amid Hormuz Crisis",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-22",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockm-170857.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호르무즈 해협의 거의 완전한 폐쇄로 전 세계 비료 무역의 3분의 1이 차단되면서 글로벌 비료 가격이 급등</p><p>• EU 이사회가 질소 기반 비료(요소, 암모니아) 관세를 1년간 임시 중단하기로 결정해 가격 인상의 영향 완화 추진</p><p>• 호주를 포함한 주요 농산물 수출국에서 파종량 감소로 최대 40% 수확량 감소 위험 직면</p><p>• 관세 면제 혜택은 러시아·벨라루스산 비료 제외, MFN(최혜국) 수입량 2024년 기준 플러스 20% 범위로 제한</p><p>• EU가 2024년 암모니아 2백만 톤, 요소 5.9백만 톤 수입했으나 중동 직접 의존도는 낮은 3~2% 수준</p><p>• UN 식량농업기구(FAO)는 장기 해상 봉쇄 시 전 지구적 농업 식량 위기 경고</p><h3>Key Quotes</h3><p>• "Global fertiliser prices have jumped following the near total closure of the Strait of Hormuz, a narrow shipping route along Iran's coast through which around one-third of global fertiliser trade passes."<br>(호르무즈 해협은 이란 해안을 따라 세계 비료 무역의 약 3분의 1이 통과하는 좁은 해상 항로인데, 이 항로가 거의 완전히 폐쇄되면서 글로벌 비료 가격이 급등했다)</p><p>• "The U.N. Food and Agriculture Organization warned last month that a prolonged blockade could trigger an agrifood catastrophe."<br>(UN 식량농업기구는 지난달 장기간의 봉쇄가 농산물 식량 재앙을 초래할 수 있다고 경고했다)</p><p>• "Farmers in Australia - the third largest wheat exporter - are planting less this year, risking a harvest that is up to 40% smaller."<br>(세 번째 규모의 밀 수출국인 호주의 농민들이 올해 파종량을 줄이고 있어 최대 40% 수확량 감소 위험에 직면했다)</p><h3>Technical Insights</h3><p>• 해상 교통로 차단이 글로벌 공급망에 미치는 즉각적 영향 - 특정 해상 운송 병목이 전 세계 상품 가격과 식량 안보에 연쇄 영향을 미치는 구조적 취약성 노출</p><p>• IMO 및 국제 해사법 체계의 한계 - 지정학적 분쟁으로 인한 해상 항로 폐쇄 상황에서 국제 해사 규제 기구의 대응 능력 및 상업적 배상 메커니즘의 부재 문제</p><p>• 해상 운송 경제 다변화의 필요성 - 특정 해상 통로(예: 호르무즈 해협)에 대한 과도한 의존도 감소 및 대체 항로 개발의 전략적 중요성 증대</p><p>• 자율운항 선박과 디지털 해운의 역할 - 향후 글로벌 공급망 리스크 분산을 위해 스마트 라우팅, 실시간 모니터링, 자동화된 경로 변경 시스템의 구축 필요성 강조</p></div>`,
      tags: ["Strait of Hormuz","Fertilizer Trade","EU Policy","Supply Chain"],
      link: "https://www.marinelink.com/news/eu-temporarily-suspends-fertilizer-duties-539548",
      coords: [55,26.5],
      location: "Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2026-05-21
addEvents({
  "2026-05-21": [
    {
      type: "news",
      title: "DNV: Hydrogen Won't Follow LNG's Global Trade Model",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-21",
      image: "https://images.marinelink.com/images/maritime/w800/negro-elkha-170841.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• DNV의 에너지 전환 보고서에 따르면 수소는 LNG와 달리 글로벌 무역 모델을 따르지 않을 것으로 예측됨<br>• LNG는 지리적으로 집중된 천연가스 자원을 상품화하는 반면, 수소는 모든 지역에서 생산되어 지역 공급·수요 패턴에 의해 주도될 것<br>• 순수 수소 거래는 전용 인프라(액화시설, 파이프라인, 전문 터미널, 저장소 등)를 필요로 하며 자본집약적이고 장기 계약에 의존<br>• 수소 유도상품(암모니아, 메탄올)은 기존 글로벌 해운 선단과 항만 인프라를 활용할 수 있어 무역 확대가 용이<br>• DNV는 수소 유도상품 중 암모니아 거래가 전체 수소 상당량 거래의 43%를 차지할 것으로 예측<br>• 국제 수소 거래는 글로벌 가격 차익거래보다는 지역 시장 구조 중심으로 조직될 것으로 예상</p><h3>Key Quotes</h3><p>• "Hydrogen will be produced in all regions, shaped primarily by local production, demand patterns, and balancing requirements rather than by global resource scarcity" (수소는 모든 지역에서 생산될 것이며 글로벌 자원 희소성보다는 지역의 생산·수요 패턴과 밸런싱 요구에 의해 결정됨)</p><p>• "Once conversion, long-distance transport, storage, and reconversion are included, the apparent advantage of low-cost production narrows substantially" (변환, 장거리 운송, 저장, 재변환을 고려하면 저비용 생산의 겉보기 이점이 상당히 감소함)</p><p>• "Ammonia and methanol are already traded globally as chemical commodities, supported by existing shipping fleets, port infrastructure, storage facilities and handling standards" (암모니아와 메탄올은 이미 기존 해운 선단, 항만 인프라, 저장시설, 취급 기준으로 지원되는 글로벌 화학 상품으로 거래되고 있음)</p><h3>Technical Insights</h3><p>• **수소 유도상품의 경제성 우위**: 기존 해운 인프라를 활용 가능한 암모니아와 메탄올이 순수 수소 거래보다 비용 효율적이며, 이는 해운 산업의 설비 투자 최소화와 기존 선단 활용을 의미함</p><p>• **지역 중심의 수소 무역 구조**: 글로벌 자원 희소성에 기반한 LNG와 달리 수소는 지역 수급 구조 중심으로 재편되며, 이는 장거리 국제 해운의 필요성 감소를 시사</p><p>• **해운 인프라 활용도의 차등화**: 기존 항만 터미널과 저장시설을 활용 가능한 수소 유도상품이 순수 수소보다 빠른 시장 확대가 가능하여, 해운·항만 산업의 투자 전략 차별화 필요</p><p>• **IMO 규제 및 기술 표준화의 중요성**: 수소 유도상품의 글로벌 거래 확대에 따라 안전 취급 기준, 해양 오염 방지, 탱커 설계 표준화 등 국제 규제 개발이 시급</p></div>`,
      tags: ["Hydrogen","Energy Transition","LNG","Shipping Infrastructure","Hydrogen Derivatives"],
      link: "https://www.marinelink.com/news/dnv-why-hydrogen-not-next-lng-539524",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-23
addEvents({
  "2026-05-23": [
    {
      type: "news",
      title: "Navantia UK unveils LASV75 autonomous surface vessel concept",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-23",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/Navantia-UK-LASV75-bow.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **Navantia UK, 75m 자율무인수상함 개념 설계 공개**: Navy Leaders Combined Naval Event(CNE) 2026에서 LASV75 규모 모형 공개, 영국 해군의 하이브리드 함대 구성을 지원하기 위해 설계됨</p><p>• **고급 설계 및 운영 성능**: 1,000톤 이상 변위, 감시·호위·전자전·타격 작전 등 다중 임무 수행 가능, 모듈식 페이로드 덱과 재구성 가능한 센서 체계 탑재</p><p>• **NATO 표준 인터페이스 채택**: NavyPOD 방식 페이로드 모듈과 NATO 표준 인터페이스로 아군 해군과의 상호운용성 극대화 추진</p><p>• **Navantia UK 설계팀 주도**: Bristol 기반 설계팀이 개발, 승무원 숙소 및 지원 시스템 제거로 페이로드 유연성과 지속력 극대화</p><p>• **Appledore 조선소에서 생산 계획**: 120m 이하 함정 건조 가능한 Devon 지역 Appledore 시설에서 초기 생산 진행, 저비용 고속 건조 및 신속한 확산 가능성 검토</p><h3>Key Quotes</h3><p>• "This is our vision for what we think the hybrid navy will need in the future to have a credible and persistent capability. To have true persistent capability in the North Atlantic, for example, in harsh cold weather conditions, we believe something of this scale is necessary." (하이브리드 함대가 신뢰할 수 있고 지속적인 능력을 갖추기 위해 필요한 미래 개념이며, 특히 북대서양의 혹독한 환경에서 진정한 지속력을 확보하려면 이러한 규모의 함정이 필수적)</p><p>• "We're thinking about standard interfaces aligned to NATO standards to make these as interoperable and interchangeable as possible." (NATO 표준에 부합하는 표준화된 인터페이스로 아군 해군 간 상호운용성과 교환성을 최대한 확보하려는 전략)</p><h3>Technical Insights</h3><p>• **자율무인함의 설계 최적화**: 승무원 숙소 제거로 구조 단순화 및 페이로드 능력 극대화, 전통적 함정 설계 원칙의 혁신적 변화를 시사함</p><p>• **모듈식 아키텍처의 운영 유연성**: 컨테이너화된 임무 체계, 교환 가능한 센서 구성, 모듈식 마스트로 다양한 전술적 요구사항에 신속 대응 가능</p><p>• **NATO 상호운용성 표준 강화**: 다국적 해군 연합작전 환경에서 자율함의 임무 모듈 교환성 확보, IMO/COLREG 자율항해 규제 프레임워크와 군사 운영 표준의 이원화 필요성 대두</p><p>• **저비용·고속 건조 기술 추진**: Appledore 중소 조선소의 효율적 생산 능력 활용으로 다량 건조 시 비용 절감 및 전력 구성 신속화 가능성 확보</p></div>`,
      tags: ["Autonomous Surface Vessel","UK Royal Navy","Hybrid Navy","Navantia UK","LASV75"],
      link: "https://www.navalnews.com/event-news/cne-2026/2026/05/navantia-uk-unveils-lasv75-autonomous-surface-vessel-concept/",
      coords: [-1.7,51.5],
      location: "Farnborough, United Kingdom"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-22
addEvents({
  "2026-05-22": [
    {
      type: "news",
      title: "RINA Awards AiP for Energy-Harvesting Ship Producing Green Hydrogen",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-05-22",
      image: "https://maritime-executive.com/media/images/article/Drift-hydrogen-generation-vessel.b56b44.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• RINA는 영국 스타트업 Drift Energy의 에너지 수확 선박에 대해 원칙적 승인(AiP) 인증서를 발급했으며, 이는 세계 최초의 순 긍정적 에너지 생산 선박 개념이다.<br>• Drift Energy는 2021년 설립되었으며 2027년 첫 선박 취항 계획을 수립하고 현재 30척 이상의 주문을 확보한 상태이다.<br>• 선박은 선체 하부의 수력 터빈으로 심해 바람을 활용해 전기를 생성하고, 전기분해를 통해 그린 수소로 변환하여 저장했다 항만에 공급한다.<br>• AI 기반 최적 경로 설정 기술로 기상 패턴을 추적하여 재생에너지 대비 초고효율 운영이 가능하다.<br>• RINA의 위험기반 AiP 프레임워크를 통해 혁신 선박 안전성 및 분류 요건을 확인했다.<br>• 기존 풍력발전소 대비 건설 시간이 짧고 항구 내 또는 해상에서 직접 다른 선박에 수소 벙커링이 가능하다.</p><h3>Key Quotes</h3><br>• "The AiP validates the vessel's feasibility from a class perspective and is a key step towards full plan approval" (AiP는 선급 관점에서 선박의 기술적 타당성을 검증하고 완전한 설계 승인을 위한 핵심 단계를 의미한다)</p><p>• "Our ships are set to play a pivotal role in the global energy transition" (우리 선박은 글로벌 에너지 전환에 중추적인 역할을 할 것이다)</p><p>• "RINA has assessed a novel design that introduces new approaches to the generation and transport of clean energy at sea" (RINA는 해상에서 청정에너지 생성 및 수송의 새로운 접근방식을 제시하는 혁신적 설계를 평가했다)</p><h3>Technical Insights</h3><br>• **AI 기반 최적 항로 기술**: 머신러닝을 활용한 기상 패턴 추적으로 재생에너지 소스 대비 초고효율(ultra-high load factors) 달성 가능 - 기존 해상풍력 대비 가동률 혁신이 핵심 경쟁력이다.</p><p>• **선급 승인 프레임워크의 확장**: RINA의 위험기반 AiP 프로세스가 에너지 수확 선박 같은 혁신 기술에 적용된 첫 사례로, IMO 규제 체계 내에서 새로운 선박 유형 평가 기준 수립을 선도하고 있다.</p><p>• **지속가능한 해운 에너지 공급망**: 선박 자체가 그린 수소 생산·수송 플랫폼이 되어 탄소중립 해운의 연료 공급 인프라 문제를 혁신적으로 해결하는 순환 구조를 제시한다.</p><p>• **선박 설계 및 분류 산업 영향**: 메가와트급 전기분해기 탑재, 40피트 컨테이너 저장 방식, 해상 벙커링 기능 등 종래 상선 설계 개념을 근본적으로 전환하는 새로운 클래스 요구사항 도입 필요성이 대두된다.</p></div>`,
      tags: ["Green Hydrogen","Energy Harvesting","AI Navigation","Sustainable Shipping","RINA Approval"],
      link: "https://maritime-executive.com/article/rina-awards-aip-for-energy-harvesting-ship-that-could-become-green-supplier",
      coords: [0,0],
      location: "Global"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-24
addEvents({
  "2026-05-24": [
    {
      type: "news",
      title: "IMO Adopts First Global Code for Autonomous Ships (MASS Code)",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-24",
      image: "https://images.marinelink.com/images/maritime/w800/source-170867.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IMO 해사안전위원회(MSC 111차 회의, 5월 13-22일)가 자율운항선박을 위한 국제해상자율운항선박안전규칙(MASS Code)을 최초로 채택하여 글로벌 자동선박 통합을 위한 포괄적 프레임워크 마련</p><p>• MASS Code는 화물선에 적용되며 2026년 7월 1일 시행되는 비의무적 규칙으로, SOLAS 협약 및 기타 IMO 의무 규칙 준수 요구</p><p>• 국제해사기구(IMO) 사무총장 Arsenio Dominguez는 "안전, 책임성, 인적요소를 해사운영의 핵심으로 유지하면서 혁신을 가능하게 한다"고 평가</p><p>• MASS Code는 선박설계 승인, 운영, 항법, 통신, 원격운영센터(ROC), 화재안전, 구조활동 등 핵심영역에서 새로운 요건 도입</p><p>• 마스터의 책임성 강조 - 원격운영 중에도 마스터가 선박에 대한 전반적 책임 유지</p><p>• 2028년 의무적 MASS Code 개발을 목표로 하며, 12월 2026년 MSC 112에서 경험축적단계(EBP) 프레임워크 개발을 위한 작업반 재구성 예정</p><h3>Key Quotes</h3><p>• "This landmark achievement positions IMO at the forefront of regulating emerging technologies, demonstrating the Organization's ability to anticipate and shape the future of shipping."<br>(이 획기적 성과는 IMO를 신기술 규제의 최전선에 위치시키며, 해운의 미래를 예측하고 형성하는 기구의 능력을 입증합니다)</p><p>• "The MASS Code sets out a comprehensive, goal-based framework to ensure that remotely controlled or autonomous ships are designed and operated to a level of safety, security and environmental protection that is expected of a conventional ship."<br>(MASS Code는 원격제어 또는 자율운항선박이 기존 선박과 동일 수준의 안전, 보안 및 환경보호 기준으로 설계·운영되도록 하는 포괄적인 목표기반 프레임워크를 마련합니다)</p><h3>Technical Insights</h3><p>• **자율운항선박 규제의 이정표**: MASS Code는 약 10년간의 다자간 협의, 법적 검토 및 실해역 시험을 통해 완성된 첫 글로벌 규칙으로, 신기술과 기존 기술의 안전한 통합을 가능하게 함</p><p>• **COLREG 및 SOLAS 호환성**: MASS Code는 국제해사법(UNCLOS 포함)을 고려하여 설계되었으며, 기존 IMO 의무규칙(SOLAS 등)과의 보완적 관계를 유지하여 해상교통법규 준수 보장</p><p>• **원격운영센터(ROC) 표준화**: 사이버보안, 시스템 설계, 위험평가, 인적 감시 등 ROC 운영에 대한 명확한 요건 제시로 안전한 원격운영 가능성 제고</p><p>• **의무화 로드맵**: 2026년부터 비의무적 코드로 경험축적 단계를 거쳐 2028년 의무규칙으로 전환 예정으로, 시장의 준비기간을 확보하면서도 규제 실행을 가속화하는 점진적 접근방식 채택</p></div>`,
      tags: ["Autonomous Ships","MASS Code","IMO Regulations","Maritime Safety"],
      link: "https://www.marinelink.com/news/imo-outlines-plans-binding-rules-539565",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "First Sea Lord Advocates Hybrid Navy with Autonomous and Uncrewed Systems for Royal Navy",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-05-24",
      image: "https://www.navalnews.com/wp-content/uploads/2026/05/Royal-Navy-Hybrid-Navy-LUSV.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 영국 해군(Royal Navy)의 최고 지도부가 북대서양과 북극 지역에서의 전투 효율성을 위해 자율 운영 및 무인 함정이 혼합된 '하이브리드 네이비(Hybrid Navy)' 전략 도입이 필수적임을 강조함</p><p>• First Sea Lord General Sir Gwyn Jenkins가 2026년 5월 19일 Defence Leaders Combined Naval Event(CNE 2026) 컨퍼런스에서 "현 상태의 능력 수준은 더 이상 충분하지 않다"며 러시아의 해상/잠수 위협에 대응하기 위한 전략 전환 필요성 주장</p><p>• 하이브리드 네이비 개념은 유인함정, 무인함정, 자율 함정/항공기를 통합 운영하는 모델로, 감지(sense), 의사결정(decide), 효과 발휘(effect), 연결(connect), 호스팅(host), 지원(enable) 기능을 다중 플랫폼에 분산</p><p>• 우크라이나의 흑해 작전 성공에서 영감을 받은 이 전략은 "유인이 필요한 곳은 유인, 가능한 모든 곳은 무인, 항상 통합"이라는 원칙에 기반</p><p>• 전략 실행을 통해 단위당 비용 감소, 생산 기간 단축, 전력 확충, 함대 운영의 유연성 및 회복력 증대 기대</p><p>• 세 가지 핵심 'Atlantic-series' 작전: 'Atlantic Bastion'(지속적 해상 억제 및 중요 인프라 보호), 'Atlantic Shield'(통합 방공), 'Atlantic Strike'(해상 전력 투사)로 구체화</p><h3>Key Quotes</h3><p>• "The capable status quo is not good enough, not anymore." (현재의 능력 수준은 더 이상 충분하지 않다)</p><p>• "What we need to do is to reduce the cost per unit and time for production to achieve the scale we need, because the reality is that there is no scenario in which we have unlimited resources." (단위당 비용과 생산 기간을 줄여 필요한 규모의 전력을 확보해야 하는데, 무한한 자원이 있는 시나리오는 없기 때문)</p><p>• "Our task is to do the best with that available, and be able to scale it rapidly when needed. The approach is therefore simple: crewed where necessary, uncrewed wherever possible, and integrated always." (주어진 자원으로 최선을 다하고 필요시 신속히 확장할 수 있어야 하는데, 접근방식은 간단하다: 필요한 곳은 유인, 가능한 곳은 무인, 항상 통합)</p><h3>Technical Insights</h3><p>• 하이브리드 네이비 전략은 기존의 대형 고가 플랫폼 중심 설계 패러다임을 근본적으로 전환하여, 다중 저비용 플랫폼의 분산형 운영을 통해 생존성 및 회복력을 강화하는 차세대 함대 운영 모델을 제시</p><p>• 자율운영 시스템과 무인 플랫폼의 대규모 통합 운영은 실시간 데이터 공유, AI 기반 의사결정, 네트워크 중심 전쟁(Network-Centric Warfare) 개념의 실제 구현을 요구하며, 이는 IMO 규정 및 국제 해상법(COLREG)의 자율선박 적용 논의와 밀접한 연관성 보유</p><p>• 우크라이나 흑해 작전에서 입증된 소형 무인 수상·잠수 플랫폼의 전술적 효용성이 양국 간 해군 전략 발전의 촉매제로 작용하며, 이는 글로벌 해군력 구조 재편의 신호</p><p>• 영국 해군의 이러한 전략적 선택은 NATO 동맹국 및 인태 지역 해군에 자율·무인 시스템 통합 모델의 국방 적용 가속화를 촉발할 것으로 예상되며, 민간 해운 산업의 자율선박 기술</p></div>`,
      tags: ["Royal Navy","Autonomous Ships","Hybrid Fleet","Uncrewed Systems","Naval Strategy","CNE 2026"],
      link: "https://www.navalnews.com/event-news/cne-2026/2026/05/first-sea-lord-insists-no-alternative-to-hybrid-navy/",
      coords: [0,0],
      location: "Global (Royal Navy Strategy)"
    },
    {
      type: "news",
      title: "Chinese Coast Guard Ship Leaves Standoff Near Taiwan-Controlled Pratas Islands",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-24",
      image: "https://images.marinelink.com/images/maritime/w800/mariusz-adobe-170865.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 중국 해안경비대 선박이 대만 영토인 남사군도(Pratas Islands) 근처 해역에서의 긴장 대치를 끝내고 철수했으며, 양측 간 라디오를 통한 격렬한 주권 논쟁이 발생했음</p><p>• 대만 해안경비대가 중국 선박을 발견 후 즉시 자신의 함정을 파견하여 경고 방송을 송출하고 무선 통신으로 주권에 대한 강경한 입장을 표시함</p><p>• 남사군도는 대만 본토에서 400km 이상 떨어진 전략적 요충지로 보안 전문가들은 이곳이 중국의 공격에 취약할 수 있다고 평가함</p><p>• 중국의 '관할권 및 주권' 표현과 장시간 체류는 이례적이며, 이는 대만 주변 압박 정책의 일환으로 해석됨</p><p>• 대만 국가안보회의 사무총장 Joseph Wu는 X(구 트위터)에서 현재 제1도련(Japan-Taiwan-Philippines)에 배치된 중국 선박 100척 규모를 공개함</p><h3>Key Quotes</h3><p>• "Please do not destroy peace. You should return and strive for democracy. That is the correct way to serve your country." (평화를 훼손하지 말고 돌아가 민주주의를 위해 노력하는 것이 국가를 섬기는 올바른 방식이라는 대만 해안경비대의 방송 내용)</p><p>• "A Taiwan coast guard official told Reuters that China's wording on having jurisdiction and sovereignty was unusual as was the length of its stay in the waters so close to the Pratas." (대만 해안경비대 관계자가 중국의 관할권과 주권 표현, 그리고 남사군도 근처 해역에서의 장시간 체류가 이례적이라고 지적)</p><h3>Technical Insights</h3><p>• **해상교통관제 및 영해관리**: 대만과 중국 간의 해상 대치 사건은 국제해사기구(IMO)의 해상충돌회피규칙(COLREG)과 영해 관할권 해석 차이가 실제 해상 갈등으로 이어지는 사례를 보여줌</p><p>• **자율운항선박의 지정학적 위험성**: 향후 인공지능 기반 자율운항선박이 이러한 분쟁 해역에 배치될 경우, 인간 판단이 배제된 시스템이 주권 분쟁을 더욱 심화시킬 수 있는 잠재적 위험 존재</p><p>• **해양 감시 기술과 정보 공개**: 드론(reconnaissance drone), 해양 조사선(research ship), 해안경비대 함정 등 첨단 감시 기술의 빈번한 활용이 지정학적 긴장을 증폭시키는 악순환 구조 형성</p><p>• **국제해사 규범의 한계**: 남사군도 같은 분쟁 해역에서 국제해사법(UNCLOS)과 각국의 주권 주장이 충돌하며, 자동화된 해상교통 시스템의 도입이 더욱 복잡한 법적·기술적 문제를 야기할 수 있음</p></div>`,
      tags: ["Taiwan","China","Pratas Islands","Coast Guard","Geopolitical Tension"],
      link: "https://www.marinelink.com/news/chinese-ship-leaves-standoff-near-539563",
      coords: [114.3,20.7],
      location: "Pratas Islands, South China Sea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-05-25
addEvents({
  "2026-05-25": [
    {
      type: "news",
      title: "Reach Subsea Charters Solstad Vessel for 2+1 Black Sea IMR Contract",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-05-25",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/05/Reach-Subsea-charters-Solstad-vessel-for-21-Black-Sea-contract.jpg?image-crop-positioner-ts=1779689856",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 노르웨이 Reach Subsea가 흑해 지역 IMR(점검, 유지보수, 수리) 및 경량 건설 서비스를 위한 2년 계약을 확보했으며, 1년 연장 옵션 포함<br>• Solstad Maritime의 Normand Jarstein 선박을 용선하여 ROV 기반 해저 작업, 건설 지원 및 현장 서비스 수행<br>• 계약자는 지역 협력사로서 최종 클라이언트와의 조율 및 현지 규제 준수를 지원할 예정<br>• Reach Subsea의 CEO Jostein Alendal은 지중해 및 흑해 지역에서의 성장 기회를 강조하며 회사의 입지 강화 의지 표현<br>• 종래 의향서(LoI) 발표에 이어 정식 계약이 체결되었으며, 선박은 이미 흑해에서 동원 중</p><h3>Key Quotes</h3><p>• "Our technology and asset base—spanning both conventional and remote operations, as well as subsea, survey and monitoring services—are highly relevant for this region, where we see a growing number of opportunities." (우리의 기술과 자산 기반은 재래식 및 원격 작업, 해저 조사 및 모니터링 서비스를 포함하며, 이 지역에서 성장하는 기회에 매우 적합합니다)</p><h3>Technical Insights</h3><p>• 흑해 지역의 에너지 인프라 개발로 ROV 기반 해저 작업 수요 증가 추세 반영<br>• 원격 조작 차량(ROV)과 해저 모니터링 기술을 통한 무인화 작업 확대로 운영 효율성 및 안전성 향상<br>• 다국적 에너지 프로젝트에서 지역 규제 준수 및 협력사 네트워크 구축의 중요성 증대<br>• 해양 에너지 산업의 글로벌 이동으로 신흥 지역(흑해, 지중해)에서의 전문 서비스 제공자 역할 강화</p></div>`,
      tags: ["Subsea Services","Black Sea","IMR Operations","ROV Services"],
      link: "https://www.offshore-energy.biz/reach-subsea-charters-solstad-vessel-for-21-black-sea-contract/",
      coords: [35,43],
      location: "Black Sea"
    }
  ]
});

// Auto-collected: 2026-05-24
addEvents({
  "2026-05-24": [
    {
      type: "news",
      title: "Trump Administration Maintains US Naval Blockade on Iran, Strait of Hormuz Negotiations Ongoing",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-05-24",
      image: "https://images.marinelink.com/images/maritime/w800/logostockimages-adobe-170864.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 트럼프 행정부는 이란과의 협상이 완료될 때까지 호르무즈 해협에 대한 해상 봉쇄를 계속 유지하겠다고 선언<br>• 미국은 이란의 고농축 우라늄 폐기, 제재 해제 등을 협상 조건으로 제시하고 있으며, 이란은 동결된 자금 해제를 요구<br>• 호르무즈 해협은 글로벌 석유 및 액화천연가스 운송량의 20%를 담당하는 전략적 해상로로, 현재 3개월간 분쟁이 진행 중<br>• 양측은 60일 내 최종 협상을 완료하는 것을 목표로 하고 있으며, 먼저 해협 재개와 해상 봉쇄 해제를 추진할 예정<br>• 이란 혁명수비대 관련 매체는 미국이 여전히 협상 일부 조건을 방해하고 있다고 주장</p><h3>Key Quotes</h3><p>• "The U.S. blockade on Iranian ships in the Strait of Hormuz would remain in full force and effect until an agreement is reached, certified, and signed" <br>(호르무즈 해협의 이란 선박에 대한 미국 봉쇄는 협상이 체결되고 서명될 때까지 완전히 유지된다는 의미)</p><p>• "Both sides must take their time and get it right" <br>(양측이 시간을 가지고 올바르게 협상을 진행해야 한다는 의미)</p><p>• "Iran had agreed in principle to open the Strait of Hormuz, in exchange for the United States lifting its naval blockade"<br>(이란이 미국의 해상 봉쇄 해제와 교환으로 호르무즈 해협 개방에 원칙적으로 합의했다는 의미)</p><h3>Technical Insights</h3><p>• **해상 운송 영향**: 호르무즈 해협의 폐쇄로 인한 전 지구적 에너지 운송 차질이 지속되고 있으며, 해협 재개 시 전 세계 에너지 공급망 정상화에 중요한 영향을 미칠 것으로 예상</p><p>• **국제 해상법 준수**: 현재의 해상 봉쇄는 국제 해상법상 분쟁 지역의 전략적 해상로 관리 문제로, 향후 IMO 및 국제해사기구의 중재 역할이 중요할 것으로 판단</p><p>• **해운 산업 안정성**: 협상 진행에 따른 불확실성이 해운비 변동과 해상 보험료 인상을 초래하고 있으며, 최종 합의 도달이 글로벌 해운업계의 경영 안정화에 필수적</p><p>• **신뢰성 메커니즘**: UN 핵감시기구(IAEA)의 감시 하에 우라늄 농축도 관리 방안이 논의되고 있으며, 이는 해상 수송 재개 후 국제 검증 체계의 구축과 연계된 사항</p></div>`,
      tags: ["Iran Blockade","Strait of Hormuz","Geopolitics","Shipping Routes"],
      link: "https://www.marinelink.com/news/trump-says-rush-iran-deal-us-blockade-539562",
      coords: [56.5,25.5],
      location: "Strait of Hormuz"
    },
    {
      type: "accident",
      title: "Ukraine Claims Drone Attack on Russian Frigate Admiral Essen in Novorossiysk",
      source: "Maritime Executive",
      sourceMeta: "maritime-executive.com · 2026-05-24",
      image: "https://maritime-executive.com/media/images/article/Bora-class-corvette-Novorossiysk-May-2026-Magyar-AFU.45853a.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 우크라이나 무인기 부대가 노보로시스크 항구의 러시아 프리깃함 Admiral Essen을 공격했다고 주장하며, 이는 전쟁 초기 순항 미사일로 피격된 동일 함정에 대한 재공격임</p><p>• 공격 대상은 Admiral Grigorovich급 유도미사일 프리깃함 Admiral Essen과 Project 1239 Bora급 미사일 초계함(현존 2척 중 1척)으로, 후자는 시속 55노트의 고속성능을 갖춘 표면효과선(SES)임</p><p>• 동일 작전에서 Sheskharis 유류터미널, Grushova 유류저장탱크 농장, 그리고 제재 대상 섀도우플릿 유조선 Chrysalis도 공격 대상이 됨</p><p>• 러시아는 피격 지점들이 드론 잔해로 인한 피해라고 주장하였으며, 영상 증거는 결론적이지 못한 것으로 평가됨</p><p>• Chrysalis는 2024년 후티 반군의 미사일 2회 공격에도 불구하고 무손상으로 탈출한 경력이 있으며, 공격 당시 보스포루스 해협 진입로 해역에 정박 중이었음</p><h3>Key Quotes</h3><p>• "Ukraine's Unmanned Systems Forces struck the Russian Black Sea Fleet's Admiral Grigorovich-class guided missile frigate Admiral Essen during an aerial attack on Novorossiysk." (우크라이나 무인 시스템군이 노보로시스크에 대한 공중 공격 중 러시아 흑해함대의 Admiral Grigorovich급 유도미사일 프리깃함 Admiral Essen을 격추했다)</p><p>• "The Bora-class is a late Soviet design with a catamaran hull and rubber curtains fore and aft...can function in the manner of a hovercraft to achieve high speeds, up to a maximum of 55 knots in calm conditions." (Bora급은 쌍동선체와 전후 러버 커튼을 갖춘 소련 후기 설계로, 고기동 표면효과선 방식으로 작동하며 해수 상태에서 최대 55노트 달성 가능)</p><h3>Technical Insights</h3><p>• 무인 항공체(UAV)에 의한 해상 전투 플랫폼 공격은 전통적 해전의 개념을 재정의하고 있으며, 특히 고정된 항만 시설에서의 취약성을 여실히 드러냄</p><p>• 표면효과선(SES) 같은 고속 해상 플랫폼의 취약성이 부각되고 있으며, COLREG 및 해상교통 규칙이 분쟁 상황에서의 적용 한계를 노출</p><p>• 선박 추적 시스템(AIS)의 전술적 정보 가치 증대로 인해 민간 선박(shadow fleet 포함)도 안보 위협 대상이 되고 있으며, 국제 해사 규정의 강제성과 감시 체계의 개선 필요성 대두</p><p>• 흑해 해역의 지속적인 분쟁으로 인한 민간 해운업 교란은 국제 에너지 공급망 안정성 저하로 이어지고 있으며, 향후 자율 선박의 분쟁 지역 운영 가능성에 대한 우려 증가</p></div>`,
      tags: ["Ukraine-Russia conflict","Black Sea Fleet","Drone attack","Naval warfare","Frigate damage"],
      link: "https://maritime-executive.com/article/ukraine-claims-attack-on-russian-frigate-admiral-essen",
      coords: [37.77,44.72],
      location: "Novorossiysk, Black Sea"
    }
  ]
});
