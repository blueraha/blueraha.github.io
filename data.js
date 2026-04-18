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
