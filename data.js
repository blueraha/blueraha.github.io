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
      content: `<p style="font-weight:300; line-height:1.8;"># 해양 산업 기술 분석 리포트<br>## PART 1: 구조화 데이터<br>---<br>## PART 2: 전문 리포트<br>### 1. Executive Summary<br>미에현(Mie Prefecture) 인근 해역에서 어선과 화물선이 충돌하는 해양사고가 발생했습니다. 본 사고는 상선과 소형선박 간의 충돌로, 해상교통 안전 관리의 중요성을 다시 한번 부각시킵니다. 일본 해상보안청(Japan Coast Guard)이 사고 원인 규명 및 승선원 안전 확인 조사를 진행 중입니다. 이러한 사고는 선박 간 충돌 회피 규칙(COLREG) 준수 및 항해사 주의력 강화의 필요성을 시사합니다. 미에현 해역의 정기적인 항로 안전 점검과 선박 통신 시스템 개선이 요구되는 상황입니다.<br>### 2. Key English Quotes<br>- *"A fishing vessel and a cargo ship collided off the coast of Mie Prefecture"*<br>(미에현 연안에서 어선과 화물선이 충돌했다)<br>- *"Japan Coast Guard is investigating the circumstances of the accident"*<br>(일본 해상보안청이 사고의 경위를 조사 중이다)<br>- *"Safety measures for maritime traffic require enhanced enforcement"*<br>(해상교통 안전대책은 강화된 시행이 필요하다)<br>### 3. Technical Insights<br>**해양사고 기술 분석:**<br>- **COLREG 준수 현황**: 어선과 상선 간 충돌은 국제해상충돌방지규칙(COLREG) 준수 미흡에서 비롯되는 경향이 높습니다. 특히 소형 어선의 AIS(자동식별장치) 미장착 시 대형선박의 회피 기동이 제한됩니다.<br>- **자율운항 선박(MASS) 도입의 의의**: 본 사고는 선박 간 충돌 회피 시스템의 자동화 필요성을 강조합니다. 센서 기반 충돌 방지 기술과 실시간 선박 추적 시스템이 확대되어야 합니다.<br>- **산업적 시사점**: ① 일본의 선박 교통 관제 고도화, ② 어선-상선 간 통신 프로토콜 표준화, ③ 정기적 항해 안전 교육 강화가 필요합니다.</p>`,
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
      content: `<p style="font-weight:300; line-height:1.8;"># 해양 산업 기술 분석 보고서<br>## PART 1: 구조화 데이터<br>---<br>## PART 2: 전문 리포트<br>### 1. Executive Summary (한글 요약)<br>DARPA의 Pulling Guard 프로그램은 자율무인선(USV)의 자율항해 및 장시간 운영 능력 개발을 목표로 하는 국방 연구 이니셔티브입니다. Saronic이 이 프로젝트의 기술 파트너로 선정되어 무인선박의 AI 기반 항해 시스템, 자동 충돌회피, 그리고 장거리 자율운영 기술 개발에 참여하게 됩니다. 이러한 협력은 미 해군의 차세대 해양 자산 확보 전략의 일환이며, 상용 자율운항 기술이 국방 분야로 확대되는 추세를 반영합니다. Saronic의 참여는 선박 자동화 산업에 군사 표준과 고신뢰성 요구사항을 적용하는 데 중요한 역할을 할 것으로 예상됩니다.<br>---<br>### 2. Key English Quotes<br>> **"DARPA's Pulling Guard program aims to develop advanced autonomous capabilities for extended maritime operations without human intervention."**<br>> (DARPA의 Pulling Guard 프로그램은 인간 개입 없이 연장된 해양 작전을 위한 첨단 자율 능력 개발을 목표로 한다)<br>> **"Saronic's selection underscores the growing convergence between commercial autonomous vessel technology and military-grade maritime systems."**<br>> (Saronic의 선정은 상용 자율선박 기술과 군사급 해양 시스템 간의 수렴 추세를 강조한다)<br>> **"The program focuses on collision avoidance, autonomous decision-making, and long-duration maritime patrol capabilities."**<br>> (본 프로그램은 충돌회피, 자율 의사결정, 장시간 해양 초계 능력에 중점을 두고 있다)<br>---<br>### 3. Technical Insights (전문가 관점 분석)<br>**① 자율항해 기술의 군사화 (Militarization of Autonomous Navigation)**<br>Pulling Guard 프로그램은 상용급 자율운항 기술을 고신뢰성·고가용성 요구사항을 가진 국방 애플리케이션으로 전환하는 중요한 사례입니다. 민간 해운의 자동화 표준(e.g., IMO MASS 규정)과 달리, 군사 운영은 ECM(전자기 간섭), GPS 거부 환경, 적대적 해역에서의 운영을 고려해야 합니다. Saronic의 기술이 이러한 극한 조건에서 신뢰성을 유지할 수 있는지가 성공의 핵심입니다.<br>**② COLREG 준수 및 규제적 과제 (COLREG Compliance in Military Context)**<br>자율 무인선의 해상 충돌회피 규칙(COLREG) 준수는 민간 해역에서의 문제이지만, 군사 영역에서는 규제적 중립성과 작전 보안 간의 긴장 관계가 존재합니다. Pulling Guard 프로그램은 국제 해사 규칙과 국방 요구사항을 양립시키는 알고리즘 개발의 중요한 테스트베드가 될 것입니다.<br>**③ 산업적 시사점 (Industry Implications)**<br>- **기술 이전 효과**: DARPA 투자로 개발된 자율운항 기술이 향후 상용 선박에 피드백되면서 해운 산업의 디지털화 가속<br>- **경쟁력 재편**: Saronic 같은 스타트업이 국방 프로젝트 수주로 기술 신뢰성 검증 → 상용 시장 진출 가속화<br>- **인력 수급**: 군사 자율시스템 개발로 AI/해양공학 인재 수요 증가, 민간 해운과의 인력 경쟁 심화<br>**④ 위험 요소 (Risk Assessment)**<br>무인 해상 플랫폼의 자율 의사결정 알고리즘이 오작동할 경우 국제 해역에서의 해양 사고 위험성 증가. 군사 자율시스템의 투명성 부족으로 민간 해운과의 안전 표준 격차 심화 가능성이 있습니다.</p>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 전쟁 및 글로벌 불안정으로 인한 방위산업 수요 증가가 한국 조선업의 성장 기회로 작용하고 있음<br>• MASGA 프로젝트(자율운항선박 및 신기술 관련)가 K-조선의 향후 성장 동력으로 강조됨<br>• 권효재 대표 등 업계 리더들이 현 지정학적 상황을 한국 조선업의 경쟁력 강화 기회로 해석<br>• 자율운항, AI 기술, 친환경 선박 등 신기술 영역에서의 한국 산업의 차별성 확보 필요<br>• 기존 상선 산업뿐 아니라 방위함정, 특수선박 분야로의 다각화 추진<br>• 글로벌 공급망 재편 속에서 한국 조선소의 기술 경쟁력과 납기 신뢰도가 핵심 차별화 요소<br><h3>Key Quotes</h3><br>• "전쟁 속 한국 조선업이 웃을 수 있는 이유" (지정학적 위험이 역설적으로 국내 방위산업과 조선 분야에 수주 기회를 창출하고 있다는 의미)<br>• "마스가 프로젝트와 K-조선의 미래" (자율운항선박, 스마트 조선 기술 등 미래형 선박 개발이 한국 조선업의 경쟁력 재정의의 핵심)<br>• "Geopolitical tensions driving demand for naval vessels and advanced maritime technologies in Korea" (지정학적 긴장이 한국의 함정, 특수선박, 최첨단 해양기술 수요를 촉발)<br><h3>Devil's Advocate</h3><br>• **과도한 낙관주의의 함정**: 방위산업 수주 증가가 단기 호황을 가져올 수 있으나, 이는 특정 고객(국방부, 해군)에의 의존도 심화를 의미하며 상업적 수익성과는 별개의 문제일 수 있다. 정부 예산 축소 시 급격한 수주 감소 위험 존재.<br>• **기술 격차 과소평가**: MASGA 프로젝트 등 자율운항선박 기술에서 한국이 선도적이라는 주장이 있으나, 노르웨이, 싱가포르, 유럽의 경쟁 기술 수준도 빠르게 발전 중. 실제 상용화 시점과 규제 환경 불확실성이 높음.<br>• **건조 원가 상승의 간과**: 고급 기술 적용, 친환경 규제 대응, 인건비 상승 등으로 인한 원가 상승이 지속되는데, 이를 수주가에 충분히 반영하기 어려운 구조. 마진율 개선이 수주 증가를 따라가지 못할 가능성.<br>• **공급망 리스크**: 중국 조선업의 저가 공세와 일본의 고부가가치 선박 전문화 사이에서 한국의 포지셔닝이 중장기적으로 불안정할 수 있으며, 핵심 부품(엔진, 전장품)의 해외 의존도 문제 미해결.</div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 한국 조선산업 빅3(한화오션, 삼성중공업, HD현대중공업)의 2026년 주가 전망을 비교 분석하는 콘텐츠로, 경제 전문가 엄경아 위원의 심층 해석 포함<br>• 조선업계의 구조적 경쟁력 변화, 수주잔액(Orderbook), 기술 혁신 역량 등을 바탕으로 각 사 간 승패를 가름하는 분석 제시<br>• LNG선, 컨테이너선, 유조선, 특수선박 등 선종별 수요 전망과 고부가가치선 수주 능력이 중장기 주가 결정의 핵심 변수<br>• 에너지 전환, 해운경기 사이클, 글로벌 해양산업 지정학적 리스크 등 거시경제 환경 변화가 각 조선사의 실적과 밸류에이션에 미치는 영향 논의<br>• 한화오션의 적극적 M&A 전략, 삼성중공업의 기술력 기반 고부가가치 선박 포트폴리오, HD현대의 규모의 경제 등 차별화 전략 비교<br>• 향후 2년(2025~2026)간 수주 수익화 시점, 원가율 개선, 환율 변동성 등이 각 사 주가 상승률을 결정하는 단기 트리거로 작용할 가능성<br><h3>Key Quotes</h3><br>• "2026 조선주 주가전망은 단순한 실적 개선이 아니라, 각 조선사의 전략적 포지셔닝과 산업 구조 변화에 얼마나 신속하게 적응하는가의 문제"<br>(2026년 조선주 주가 전망은 단순 실적 개선이 아니라 각사의 전략적 대응 능력에 달려있음)<br>• "한국 조선산업의 경쟁력은 고부가가치선 수주 능력과 건조 납기 준수율에서 결정된다"<br>(고부가가치선 확보와 납기 이행 능력이 한국 조선사의 경쟁 우위 결정 요소)<br>• "빅3 중 최후의 승자는 2026년까지의 수주-수익화 사이클과 해운경기 회복 시점을 정확히 타격한 기업이 될 것"<br>(수주-수익화 타이밍과 해운경기 회복 국면을 잘 활용한 기업이 최종 승자가 될 것으로 예상)<br><h3>Devil's Advocate</h3><br>• **조선산업 호황의 지속성 불확실성**: 현재의 LNG선·특수선박 수요 호황이 2026년까지 지속된다는 보장이 없으며, 글로벌 경기 둔화, 해운경기 악화 시나리오에서 각 사의 주가는 급락할 가능성. 역사적으로 조선업은 극단적 사이클 산업이라는 점 간과.<br>• **원가 인상 압력의 과소평가**: 강철·반도체·인력 수급 관련 비용이 지속적으로 상승하는 환경에서 고정가 수주 계약의 마진율 악화 리스크가 분석에 충분히 반영되지 않았을 가능성. 특히 저가 수주로 점유율 확대 경쟁이 심화되면 수익성 문제 심화.<br>• **지정학적 변수의 최소화**: 한반도 긴장, 미중 갈등, 러시아 제재 심화 등이 조선사의 수주처(중국, 일본, 미국)와 공급망에 미치는 영향이 과도하게 낙관적으로 평가되었을 가능성. 특히 방위산업 관련 특수선박 수주의 지정학적 리스크 간과.<br>• **기술 격차 축소의 가속화**: 중국 조선사의 기술 추격이 가속화되고 있으며, 한국 조선사의 기술 우위 지속 기간이 시장 예상보다 짧을 수 있음. 특히 자율운항선, 친환경선 분야에서 글로벌 기술 경쟁이 가파르게 진행 중이라는 점이 중기 실적에 부정적 영향 미칠 가능성.</div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2023년 11월 4일 12시 30분경, 여객선 Spirit of Discovery가 비스케이만에서 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상하고 1명이 사망<br>• **피해 규모**: 중증 부상자 8명이 입항 시 직접 병원으로 후송되었으며, 이 중 1명이 이후 부상으로 인해 사망<br>• **원인 분석**: 선박의 추진 시스템 장애로 인한 악천후 상황에서의 통제 불가능한 상황 발생<br>• **조사 기관**: 영국 해양사고조사청(MAIB)에서 공식 조사 보고서(6-2026) 발간<br>• **권고사항**: 국제 운송 요구사항에 전자 경사계(electronic inclinometer) 포함, 선급사회의 지침서 개선, 추진 제조업체의 고객 공고, 크루즈선사 협회의 의료진 및 가구 고정 규정 강화<br>• **후속 조치**: 유사 추진 시스템 장착 선박 운영사에 대한 제조업체의 고객 권고 발행</p><h3>Key Quotes</h3><p>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." <br>  (2023년 11월 4일 12시 30분 이후, 여객선 Spirit of Discovery가 비스케이만 횡단 중 악천후에서 추진력을 상실했으며, 이 기간 중 100명 이상의 승객이 부상)</p><p>• "Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries."<br>  (중증 부상자 8명이 입항 시 직접 병원으로 후송되었고, 이 중 한 명이 이후 부상으로 인해 사망)</p><h3>Technical Insights</h3><p>• **추진 시스템 신뢰성**: 현대 여객선의 포드 추진 시스템의 고장 메커니즘과 악천후 상황에서의 이중 안전장치 부재가 대형 참사로 확대되는 경로 분석 필요<br>• **규제 강화 방향**: IMO 및 국제 운송 규정에 전자 경사계 의무화로 악천후 상황의 선박 자세 모니터링 강화 및 조기 경보 시스템 구축<br>• **의료 및 안전 기준**: 크루즈 선사의 의료 인원 확충(Advanced Trauma Life Support 자격 보유) 및 악천후 상황에서의 선내 가구 고정 기준 강화로 2차 피해 방지<br>• **제조업체 책임**: 유사 추진 시스템 장착 선박 운영사에 대한 적극적 정보 공유 및 정기 점검 프로토콜 개발로 예방적 유지보수 체계 구축</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **Anduril이 DIU 및 미 해군의 Combat Autonomous Maritime Platform Project(CAMP) 프로그램에서 XL-AUV 공급자로 선정됨** - 장거리 수중 임무 수행 능력을 갖춘 대형 자율무인잠수정(Dive-XL) 개발·배치 담당</p><p>• **검증된 성숙 기술 및 운영 능력** - Anduril 자율잠수정들이 누적 42,355km, 6,752시간의 실제 임무를 수행하며 장시간 운영 신뢰성 입증</p><p>• **호주 로열 해군과의 Ghost Shark 프로그램 성공** - 2025년 호주 해군과의 사업 수주 및 시드니 생산시설 구축으로 기술 검증 완료</p><p>• **미 동부 로드 아일랜드 쿠온셋 포인트에 전용 생산시설 구축** - 연간 수십 대의 Dive-XL과 수백 대의 Dive-LD 생산 능력 보유</p><p>• **해양 영역 통제 전략의 전환점** - 개념 단계에서 실제 운영 단계로 이동하여 분산 해양 작전 및 분쟁 해역 지속 운영 가능</p><h3>Key Quotes</h3><p>• "The United States needs the ability to deploy large payloads across extended ranges underwater." (미국이 수중에서 넓은 거리에 걸쳐 대형 탑재물을 배치할 수 있는 능력이 필요함)</p><p>• "Control of the undersea domain underwrites control of the sea itself, and Dive-XL marks the shift from concept to reality." (수중 영역의 통제가 해양 지배력의 기초가 되며, Dive-XL은 개념에서 현실로의 전환을 의미함)</p><h3>Technical Insights</h3><p>• **자율 해양 플랫폼의 성숙도 및 신뢰성 검증** - 42,355km 누적 운항거리와 6,752시간의 실제 임무 수행 데이터는 장시간 자율운영 기술이 운영 단계에 진입했음을 입증하며, 향후 IMO 자율선박 규정 제정 시 수중 플랫폼의 국제 안전 기준 수립에 참고될 가능성</p><p>• **분산 해양 작전(Distributed Maritime Operations) 개념의 실현** - XL-AUV 기술 도입으로 전통적 함정 중심의 해양 전술에서 자율 플랫폼 네트워크 기반의 새로운 작전 체계로 전환되며, 이는 상용 해운 및 해양 탐사 산업에도 영향을 미칠 것으로 예상</p><p>• **빠른 프로토타입-배치 사이클의 산업화** - Anduril의 호주 프로그램 성공 사례는 전통적 방위사업의 장시간 개발 주기를 단축할 수 있는 상업적 기술 적용 모델을 제시하며, 이는 자율 해양 시스템의 상용화 가속화에 기여할 것으로 평가</p><p>• **전략적 수중 도메인 인식(Underwater Domain Awareness)의 핵심 자산** - 분쟁 지역에서 지속적으로 운영 가능한 XL-AUV는 COLREG 등 국제 해양 규칙의 적용 범위 확대와 자율 잠수정의 충돌 회피(collision avoidance) 알고리즘 고도화 필요성을 야기할 것으로 예상</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **미국 국방혁신부(DIU)와 해군, 안두릴사의 초대형 자율수중차량(XL-AUV) 선정** - CAMP(전투용 자율해양플랫폼 프로젝트)에 참여하기 위해 안두릴이 경쟁입찰을 통해 선정됨</p><p>• **안두릴의 Dive-XL 시스템 성숙도 입증** - 누적 42,355km, 6,752시간의 실전 운영 시간으로 장거리 성능과 시스템 내구성 검증 완료</p><p>• **4개월 내 장기 운영 시연 예정** - 계약 체결 후 4개월 내 Dive-XL의 작전 중심 시연 완료 계획</p><p>• **호주 고스트 샤크 프로그램 성공 기반** - 2025년 호주 해군과의 계약을 통해 전통 방식 대비 빠른 납기와 낮은 리스크 입증</p><p>• **산업 기반 구축** - 시드니(호주), 로드아일랜드 쿠온셋포인트에 연간 수십 개의 Dive-XL, 수백 개의 Dive-LD 생산 가능한 시설 운영</p><h3>Key Quotes</h3><p>• "Anduril's autonomous undersea vehicles to-date have accumulated over 42,355km and 6,752 hours of mission time, proving the maturity, reliability, and long-duration capability required for distributed maritime operations." <br>(안두릴의 자율수중차량들이 누적 42,355km와 6,752시간의 운영 시간을 기록하며 분산 해양작전에 필요한 성숙도, 신뢰성, 장시간 운영 능력을 증명했다.)</p><p>• "Long-range autonomous undersea systems have the potential to change the balance beneath the waves... Control of the undersea domain underwrites control of the sea itself."<br>(장거리 자율수중시스템은 수중 전력 균형을 변화시킬 잠재력을 가지고 있으며, 수중 영역의 통제가 해상 자체의 통제를 뒷받침한다.)</p><h3>Technical Insights</h3><p>• **XL-AUV 기술의 실전 전환** - 수십 년간 개념 단계에 있던 초대형 자율수중차량이 이제 실제 운영 배포 단계로 진입, 자율해양 시스템의 기술적 성숙도 도달</p><p>• **분산 해양작전(DMO) 패러다임 실현** - 장거리 자율시스템을 통해 미국과 동맹국이 해상에서 리스크를 거리에 두고 분쟁 환경에서 지속적 운영 가능해지는 해전 개념 변화</p><p>• **생산 기반과 공급망 확보** - 다국적 생산 시설(호주-미국)과 대량 생산 계획으로 XL-AUV의 광범위한 배포 기반 마련, 전술적 자율성(Tactical Autonomy) 구현 준비</p><p>• **IMO/SOLAS와 독립적인 방위 응용** - 민간 자율선박과 달리, 군사용 XL-AUV는 국제 규정 제약 없이 운영되어 해양 패권 경쟁 심화 가능성</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 호주 해양학연구선 뉘이나(Nuyina)호가 2025년 10월 13일 호드 섬 인근 해역에서 기저부 수심 15m 지점에 좌초<br>• **선박 및 운영**: 호주 남극청 소속 연구·보급선, 승선 인원 해상승무원 37명, 탐사대원 85명<br>• **근본 원인**: 음파측심기(멀티빔) 심도 데이터가 해상 정보표시시스템(ECDIS)과 연동되지 않아 항해 경보 발생 불가, 항법 음향시스템 가동 중단<br>• **운영 오류**: 레이더 방위선을 신규 경로로 착오 인식, ECDIS 계획 경로 표시 오류로 인한 항해 혼란<br>• **결과**: 선박 일시적 좌초 후 복구, 확장형 드롭 킬(drop keel) 손상</p><h3>Key Quotes</h3><p>• "Depth information from the multi-beam system was shown on a dedicated display on the bridge but was not fed into the ship's integrated bridge system. This meant the depth information was not displayed on the electronic chart display and information system (ECDIS), and could not be used to generate navigational alarms." <br>(멀티빔 음향시스템의 수심 정보가 독립된 브리지 디스플레이에만 표시되었으며, 통합 항해 시스템(ECDIS)과 연동되지 않아 항해 경보 생성 불가)</p><p>• "This bearing line was in a similar direction to the planned route, taking the ship between an unsurveyed area to the west and a charted bank to the east."<br>(이전 방위선이 신규 계획 경로와 유사한 방향으로 설정되어 미조사 해역과 해도상 천소 사이를 통과하도록 유도)</p><h3>Technical Insights</h3><p>• **항해시스템 통합 부재**: 고해상 멀티빔 음향측심 데이터가 ECDIS 시스템과 분리되어 실시간 수심 경보 및 자동 항법 알람 기능 불가 - 현대 선박의 통합 항해 시스템 설계 결함<br>• **항법 절차 오류**: 동위치 유지(DP) 시스템에서 자동 항법으로 전환 시 이전 방위선 재확인 부족, ECDIS 경로 계획 로드 오류 확인 미흡 - 선체 회전 중 스러스터 부하 증가 상황에서의 주의 분산<br>• **미조사 해역 운항**: 4,000km 남양 극지 미지역 운항에도 불구하고 음향시스템 의존도 과다, 항법 시스템 이중화 부족 - 극지역 연구선의 자동화 장비 신뢰성 및 수동 조종 능력 균형 문제<br>• **IMO 규정 준수 공백**: 음향 간섭 회피를 위한 항법음향기 차단이 대체 수심 확보 수단 없이 시행 - 선박 안전 규칙의 시스템 신뢰도 평가 및 대체 안전 조치 명확화 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사고 개요**: Spirit of Discovery 여객선이 2023년 11월 4일 비스케이만에서 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상당했으며, 이 중 1명이 입원 후 사망</p><p>• **피해 규모**: 8명의 중상자가 입항 후 즉시 병원으로 이송되었으며, 한 승객이 부상으로 인해 사망</p><p>• **원인 분석**: 악천후 시 포드(pod) 형 추진 장치의 결함으로 인한 추진 시스템 고장</p><p>• **권장사항**: IMO 국제 해상 운송 규정에 전자 경사계 탑재 의무화, 분류 협회의 매뉴얼 개선, 여객선의 의료진 확충(외상 전문가) 및 악천후 대비 가구 고정 정책 강화</p><p>• **관련 기관**: Maritime and Coastguard Agency(MCA), 분류 협회, 추진 시스템 제조사, Cruise Lines International Association(CLIA)</p><h3>Key Quotes</h3><p>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." (2023년 11월 4일 오후 12시 30분경, Spirit of Discovery 여객선이 비스케이만 횡단 중 악천후에서 추진력을 잃었고, 이 과정에서 100명 이상의 승객이 부상당했다)</p><p>• "Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries." (중상자 8명이 입항 직후 병원으로 이송되었고, 이 중 1명이 부상으로 인해 사망했다)</p><h3>Technical Insights</h3><p>• **추진 시스템 설계 결함**: 포드형 추진 장치의 고장 메커니즘 분석 필요 - 악천후에서의 안정성 및 백업 시스템 강화 필수</p><p>• **IMO 규정 개선**: 전자 경사계(electronic inclinometer) 탑재 의무화로 선박의 경사각 모니터링 및 조기 대응 체계 구축 필요</p><p>• **의료 대응 능력**: 여객선의 Advanced Trauma Life Support(ATLS) 자격 의료진 확충으로 해상 응급상황의 생존율 향상 필요</p><p>• **악천후 대비**: 가구 및 장비의 고정 강화, 선내 이동 제한 등 승객 안전 정책 개선으로 인명피해 최소화</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 호주의 남극 쇄빙 연구선 RSV Nuyina가 2025년 10월 13일 허드 아일랜드 근처에서 좌초 사고 발생 - 초기 보도와 달리 선체와 드롭 킬(retractable keel) 모두 해저에 접촉</p><p>• **근본 원인**: 측량 장비 간섭 방지를 위해 항해용 초음파 탐지기를 꺼둔 상태에서, ECDIS(전자해도정보시스템)에 멀티빔 음향 데이터가 통합되지 않아 수심 정보가 항해 디스플레이에 표시되지 않음</p><p>• **항해상 오류**: 마스터가 선계획한 항로가 전방 ECDIS에 표시되지 않아, 차관사가 드론 작업 시 사용한 기존의 전자 방위선을 따라 항행하여 미상사 해저 지역을 통과</p><p>• **피해 현황**: 드롭 킬과 탑재된 과학 장비 손상/손실, 선체는 경미한 긁힘과 페인트 손상만 발생 - 선박은 항해능력 유지</p><p>• **호주교통안전위원회(ATSB)**: 앙거스 미첼 위원장 주도로 상세한 사고 경위 보고서 발표</p><p>• **운영자**: 서코(Serco), 호주 남극부(Australian Antarctic Division)</p><h3>Key Quotes</h3><p>• "the vessel briefly grounded near Heard Island—clarifying earlier descriptions of the event as a minor seabed contact" (초기 보도에서 경미한 해저 접촉이라던 것이 실제로는 선박이 일시적으로 좌초한 사건임을 명확히 함)</p><p>• "the ship's navigational echo sounders had been switched off. While the multi-beam system continued to provide depth information, that information was not integrated into the vessel's electronic chart display and information system (ECDIS)" (측량용 멀티빔 음향 데이터가 항해용 ECDIS에 통합되지 않아 주 항해 디스플레이에 수심 정보가 나타나지 않음)</p><p>• "That track led the vessel through a narrow corridor between a charted bank and an adjacent area of uncharted seabed—an area where hydrographic data was incomplete" (해도에 기록된 천소와 미상사 해저 지역 사이의 좁은 항로로 선박을 인도하여 항해수심 자료가 불완전한 해역을 통과)</p><h3>Technical Insights</h3><p>• **ECDIS 시스템 통합 문제**: 측량 장비(멀티빔 음향)와 항해 시스템(ECDIS) 간 데이터 연동 부족으로 인한 항해 위험성 증대 - IMO SOLAS 규정상 모든 수심 정보의 통합 필요성 재확인</p><p>• **항해계획과 실행의 불일치**: 마스터가 계획한 항로가 전방 ECDIS에 미표시되어 차관사가 과거 방위선(bearing line)을 따라 항행하는 상황 발생 - 자동화 시대의 인적 오류 리스크 및 이중화 시스템의 한계 노출</p><p>• **미상사 해역 항해의 위험성**: 수로 자료가 불완전한 해역에서의 항해 시 고해상도 음향 탐지기와 ECDIS의 실시간 통합이 필수적 - 쇄빙선의 과학 미션과 항해 안전 간 시스템 설계 개선 요구</p><p>• **드롭 킬(Retractable Keel) 운영 관리**: 과학 장비 탑재로 인한 추가 흘수 증가(약 75cm) 상황에서 항해계획 수립 시 이를 반영한 수심 마진 산출의 중요성 - 특수 장비 운영과 항해 안전의 조화 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• IMO의 선박시스템장비소위원회(SSE12) 12차 회의에서 신에너지차량을 운반하는 선박의 화재 위험 감소를 위한 화재 보호·탐지·소화 기준 개정안 추진 계획 수립</p><p>• Interferry는 ro-ro 화물선과 ro-pax 페리선의 차별화된 특성을 고려하여 차량운반선의 규정이 다른 선종에 동일하게 적용되지 않도록 규제 영향 최소화 요청</p><p>• IMO는 2027년 3월까지 자동차·트럭운반선(PCTC) 임시지침 및 영상감시·탐지시스템 임시지침 개발을 우선화하며, SOLAS 개정안은 2032년 1월 1일 이후 시행 예정</p><p>• Ro-pax 선박의 영상감시시스템 요구사항(2026년 1월 신조선, 2028년 1월 기존선 적용)이 모호하여 과도한 수의 카메라 설치 우려</p><p>• 전기차 화재 대응을 위해 차량운반선은 CO₂ 시스템의 한계를 보이나, ro-pax 페리선의 분사시스템(drencher)은 대량 물사용으로 효과적 대응 가능</p><h3>Key Quotes</h3><p>• "We have historically had to spend a lot of effort making sure that ferries are not dragged into regulations that emanate from another segment's needs." <br>(역사적으로 페리선이 다른 선종의 규정에 무분별하게 적용되지 않도록 노력해왔음)</p><p>• "Ro-ro cargo and ro-pax ferries use drencher systems, which use large amounts of water to demonstrably deal with an EV fire on the ro-ro deck."<br>(ro-ro 화물선과 ro-pax 페리는 대량의 물을 사용하는 분사시스템으로 ro-ro 갑판의 전기차 화재에 효과적으로 대응 가능)</p><p>• "We hear from members that it is unclear exactly how to comply with these requirements, which may lead to an excessive number of cameras having to be fitted."<br>(회원사로부터 영상감시시스템 요구사항 준수 방식이 모호하여 과도한 카메라 설치가 필요할 수 있다는 피드백)</p><h3>Technical Insights</h3><p>• **선종별 기술 차별화의 중요성**: 차량운반선(PCTC)과 ro-pax 페리선의 화재 소화 방식 차이(CO₂ vs 분사시스템)를 인식하여 규제 개정 시 선종의 기술적 특성을 충분히 반영해야 함</p><p>• **전기차 화재 규제의 타당성**: 신에너지차량의 확대로 인한 li-ion 배터리 화재 위험이 증가하면서 IMO가 기존 SOLAS 규정의 적절성을 재평가하고 2027-2028년 추가 검토 계획 수립</p><p>• **영상감시시스템 표준화 미흡**: MSC.550(108) 결의안에 따른 ro-pax 선박의 영상감시시스템 요구사항이 정의되지 않아 산업 현장에서의 규제 해석 불일치로 이어질 수 있으므로 상세 지침 필요</p><p>• **규제 이행 일정의 현실성**: SOLAS 개정안 시행까지 6년 이상의 유예 기간을 두어 업계의 기술 개발과 설비 투자에 충분한 시간 제공하는 현실적 규제 추진 방식 반영</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 미 해군의 최신 항공모함 Gerald R. Ford에서 주 세탁실 구역에 대형 화재 발생으로 약 200명의 선원이 연기 흡입 피해를 입었음</p><p>• **피해 규모**: 화재 진화에 수 시간 소요되었으며, 약 100개의 수면 침대에 영향을 미쳤고 1명의 승무원이 부상으로 함정에서 이송됨</p><p>• **함정 현황**: 5,000명 이상의 승무원이 탑승한 세계 최대 항공모함이 홍해에서 이란 작전 중 임시로 그리스 크레타섬 수다만 항구로 입항 예정</p><p>• **전술적 영향**: 함정의 추진 시스템과 항공기 운용 능력에는 손상이 없으며 완전 작전능력 유지 상태이지만, 장기 배치(9개월)로 인한 승무원 사기 저하가 사전에 문제되고 있었음</p><p>• **지원 전력**: Ticonderoga급 유도미사일 순양함 Normandy, Arleigh Burke급 구축함 4척이 함대 호위 중이며 대함, 대공, 대잠전 능력 보유</p><h3>Key Quotes</h3><p>• "Nearly 200 sailors were treated for smoke-related injuries when the fire broke out in the ship's main laundry area. The fire took hours to bring under control." <br>(선박 주 세탁실에서 화재 발생 시 약 200명의 선원이 연기 흡입 피해를 받았으며, 화재 진화에 수 시간이 소요됨)</p><p>• "After the fire initially broke out, the U.S. military had said that there was no damage to the ship's propulsion plant and the aircraft carrier was fully operational." <br>(화재 발생 직후 미군은 함정의 추진 시스템에 손상이 없고 항공모함이 완전히 작전 가능하다고 발표함)</p><h3>Technical Insights</h3><p>• **함정 화재 대응 체계**: 항공모함의 밀폐된 구획 환경에서 대규모 화재 진화 시 연기 제어 및 승무원 대피 절차의 미흡이 다수의 연기 흡입 피해로 이어짐</p><p>• **함정 가동성 유지**: 추진 시스템 손상 회피로 함정의 전술적 이동성은 보존되었으나, 주거 및 생활 구역 손상으로 장기 배치 승무원의 피로도 심화 우려</p><p>• **해군 운용 효율성**: 9개월 장기 배치 중 발생한 사건으로 현대 항공모함 운용의 승무원 관리 및 정비 체계 재점검 필요성 대두</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **자금 조성 규모**: Advanced Navigation이 Series C 펀딩라운드에서 1억 1,000만 달러를 조성하여 대체 위치항법시각(PNT) 기술 개발 가속화</p><p>• **투자 주도 기관**: Airtree Ventures가 주도, Quadrant Private Equity와 호주 국가재건펀드공사(NRFC)가 참여하여 국가 차원의 자율시스템 기술 개발 전략 반영</p><p>• **핵심 기술**: GPS 신호 차단/교란 환경에서 다중센서 융합 기반 자동항법 소프트웨어(AdNav Intelligence)로 자율해운/방위산업 지원</p><p>• **글로벌 배포 현황**: 100,000개 이상의 시스템이 전 세계 배포되었으며, 수익의 80% 이상이 미국·유럽에서 창출</p><p>• **시장 확장 전략**: 미국·유럽 주요 지역에 PNT 우수센터(Centers of Excellence) 설립으로 자율선박·무인기·방위산업 시장 진출 강화</p><h3>Key Quotes</h3><p>• "As autonomous vehicles scale into contested and high-stakes frontiers, the world's reliance on any single navigation technology has evolved from a technical limitation into a systemic vulnerability" <br>(자율 차량이 분쟁 지역과 고위험 환경으로 확대되면서 단일 항법 기술에 대한 의존도는 기술적 한계를 넘어 시스템 차원의 취약점으로 진화했다)</p><p>• "GPS is no longer a reliable single source of truth. Challenges once considered 'edge cases,' like electronic warfare threats, GPS spoofing, and infrastructure-denied regions, are now a daily reality"<br>(GPS는 더 이상 신뢰할 수 있는 유일한 정보원이 아니며, 전자전 위협·GPS 신호 위조·통신 두절 지역 등 과거 예외상황으로 간주되던 문제들이 일상화되었다)</p><h3>Technical Insights</h3><p>• **다중센서 융합 기술의 중요성**: GPS 거부 환경(GPS-Denied Environment)에서 관성항법장치(INS), LiDAR, 기타 센서의 AI 기반 통합으로 자율해운의 항법 신뢰성 획기적 향상 가능</p><p>• **해상자율시스템 표준화 영향**: 대체 PNT 기술의 상용화는 IMO/IHO의 자율선박 국제 기준 개발 및 COLREG 디지털화 논의에 중요한 기술적 근거 제공</p><p>• **방위-민간 이중 용도 기술**: Anduril, Hanwha, Rheinmetall 등 방위산업 파트너와 NOAA, BHP 등 민간 파트너 동시 지원으로 기술의 다층적 상용화 가속화</p><p>• **지정학적 자율성 확보**: 미국·유럽 중심의 기술 패권 경쟁 속에서 GPS 독립성 확보는 자율해운의 국가 전략적 자산화 추세 반영</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 호주 남극해양 연구선 RSV Nuyina가 2025년 10월 13일 허드 아일랜드 인근 해역에서 좌초 사고 발생. 초기 보도는 경미한 해저 접촉으로 기술했으나 ATSB 보고서에서 선체와 수심 측정용 드롭 킬(drop keel) 모두 해저와 접촉한 것으로 확인됨</p><p>• **기술적 원인**: 과학 장비 간섭 회피를 위해 항해용 해깊이 탐지기(echo sounder)를 끈 상태에서 다중빔 음향 시스템의 수심 데이터가 ECDIS(전자해도표시시스템)와 미연동되어 자동 천수역 경보가 작동 불가능한 상태였음</p><p>• **항해상 오류**: 선장이 후방 ECDIS로 계획한 항로가 전방 ECDIS에 표시되지 않아 이전 드론 운용 중 사용한 구식 전자 방위선을 따라 항해. 수심 정보 부족 지역의 좁은 통로를 통과하며 좌초</p><p>• **선박 피해**: 드롭 킬과 탑재 과학 장비에 주요 손상 발생. 선체는 경미한 긁힘과 도장 손상만 입어 선박 복원력 유지</p><p>• **안전 시사점**: 과학 조사와 항해 안전 간의 장비 운용 충돌로 인한 시스템 통합 문제. 해도 데이터 불완전 지역에서의 독립적 항로 추종의 위험성 드러남</p><h3>Key Quotes</h3><p>• "The vessel was operating with its drop keel extended approximately 75 centimeters below its nominal 9-meter draft. The keel housed scientific equipment, including a high-resolution multi-beam echo sounder that remained active following overnight seabed mapping operations." (선박은 명목상 9미터 흘수보다 약 75센티미터 아래로 연장된 드롭 킬로 운항 중이었으며, 수심 측정용 고해상도 다중빔 음향 시스템을 탑재한 상태에서 야간 해저 매핑 작업 후에도 계속 작동 중이었음)</p><p>• "To avoid interference with the survey equipment, the ship's navigational echo sounders had been switched off. While the multi-beam system continued to provide depth data, that information was not integrated into the vessel's electronic chart display and information system (ECDIS), meaning it was not visible on the primary navigation display or capable of triggering automated shallow-water alarms." (조사 장비의 간섭을 회피하기 위해 항해용 해깊이 탐지기를 껐으며, 다중빔 시스템의 수심 데이터는 ECDIS에 미연동되어 주 항해 디스플레이에 표시되지 않고 자동 천수역 경보를 트리거할 수 없었음)</p><h3>Technical Insights</h3><p>• **ECDIS 통합 문제**: 과학 관측 장비와 항해 시스템의 분리로 인한 정보 비대칭 문제. 다중빔 음향 데이터의 실시간 항해 시스템 통합 필요성 강조</p><p>• **항로 계획의 일관성 부재**: 전방·후방 ECDIS 간 표시 오류로 인한 이중 항해 기준 발생. 현대식 선박의 통합 항해 시스템 검증 절차의 중요성 드러남</p><p>• **해도 데이터 신뢰성**: 미측정 해역에서의 항해 시 위험성 증가. 극지역 및 오지 해역의 수심 정보 완성도 개선과 보완 항해 기법의 필요성 제기</p><p>• **선박 설계와 운용의 상충**: 과학 조사를 위한 장비 확장(드롭 킬)이 항해 안전 마진을 감소시키는 설계 트레이드오프 문제. 극지역 연구선의 특수성을 반영한 운용 절차 표준화 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2023년 11월 4일 크루즈선 Spirit of Discovery가 비스케이 만의 악천후 중 추진력을 상실하여 100명 이상의 승객이 부상당했고 1명이 사망함</p><p>• **피해 규모**: 100명 이상의 승객이 부상했으며, 심각한 부상을 입은 8명의 승객이 입항 후 직접 병원으로 이송됨. 이 중 1명이 나중에 사망</p><p>• **사고 원인**: 비스케이 만의 악천후 중 선박의 포드식(pod) 추진 시스템의 추진력 상실로 인한 선박의 불안정한 동요(rolling) 발생</p><p>• **권장사항**: 전자 경사계(inclinometer) 국제 운송 요건 포함, 추진기 제조업체의 고객 권고사항 발행, 크루즈 업계의 의료진 자격 강화 및 악천후 시 가구 고정 정책 개선 권고</p><p>• **분류사 및 제조업체 조치**: 선박 분류사에 지시 매뉴얼 품질 개선 권고, 동일 포드식 추진 시스템 장착 선박 소유자를 위한 제조업체 고객 조언 발행</p><p>• **관련 기관**: 해운청(Maritime and Coastguard Agency), 크루즈선 국제협회(Cruise Lines International Association), 선박 분류사</p><h3>Key Quotes</h3><p>• "Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay."<br>(2023년 11월 4일 정오 직후, 크루즈선 Spirit of Discovery가 비스케이 만을 횡단 중 악천후에서 추진력을 상실했다.)</p><p>• "Over 100 passengers were injured during this period. Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries."<br>(이 기간 동안 100명 이상의 승객이 부상당했다. 심각하게 부상당한 8명의 승객이 입항 후 직접 병원으로 이송되었고, 이 중 1명이 나중에 부상으로 사망했다.)</p><h3>Technical Insights</h3><p>• **포드식 추진 시스템의 취약성**: 악천후에서 선박의 추진력 상실로 인한 선박 안정성 저하 문제. 동력 손실 시 선박이 파도에 노출되어 급격한 횡동요(rolling) 발생으로 대규모 인명피해 초래</p><p>• **해운 규제 강화 필요성**: 전자 경사계와 같은 선박 안정성 모니터링 장비의 국제 운송 요건 포함 추진으로, 악천후 조기 감지 및 대응 능력 향상 필요</p><p>• **크루즈산업 안전 개선**: 의료진의 고급 외상 응급처치(ATLS) 자격 강화 및 악천후 시 선내 가구·물건 고정 정책 개선으로 승객 안전성 강화</p><p>• **메뉴얼 및 운영 표준 개선**: 추진 시스템 제조업체의 지시 매뉴얼 품질 개선 및 선주/선박 운영사의 정보 공유로 유사 사고 재발 방지</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• IMO 선박시스템장비 소위원회(SSE12)가 2026년 3월 9일 개최되어 신에너지 차량 운송 선박의 화재 위험 감소를 위한 화재 방호, 감지 및 소화 장치 적절성 평가 계획을 수정함</p><p>• Interferry가 참여한 회의에서 PCTCs(순수 자동차/트럭 운반선) 및 영상 모니터링 감지 시스템에 대한 잠정 지침 개발을 우선시하기로 결정</p><p>• 로로화물선과 로로여객선(Ro-Pax)의 기본적인 설계 차이에도 불구하고 동일한 규제가 적용될 우려로, 세그먼트별 맞춤형 규제 필요성 강조</p><p>• 전기자동차 화재 진화를 위해 차량운반선의 CO2 시스템은 불충분하나, 로로 데크용 드렌처 시스템(대량 물사용)은 효과적임을 입증</p><p>• 2027년 3월 SSE 13까지 특별대응 그룹에서 진행되며, SOLAS 개정안은 2032년 1월 1일 이상에서 발효 예정</p><p>• 신규 로로여객선(2026년 1월 1일)과 기존 로로여객선(2028년 1월 1일)에 의무화된 영상 모니터링 시스템 요구사항 준수 방법의 불명확성으로 과도한 카메라 설치 우려</p><h3>Key Quotes</h3><p>• "We have historically had to spend a lot of effort making sure that ferries are not dragged into regulations that emanate from another segment's needs." (페리 선사들은 역사적으로 다른 세그먼트의 규제 요구사항이 페리 선박에 부당하게 적용되지 않도록 많은 노력을 기울여왔음)</p><p>• "It is well established that the CO2 systems used to extinguish fires on the ro-ro deck of vehicle carriers may not be sufficient to deal with EV fires, but that is not a ro-ro deck issue." (차량운반선의 로로 데크 화재 진화용 CO2 시스템은 전기자동차 화재 대응에 불충분할 수 있으나, 이는 로로 데크 문제가 아님을 확인함)</p><p>• "We hear from members that it is unclear exactly how to comply with these requirements, which may lead to an excessive number of cameras having to be fitted." (회원사들로부터 영상 모니터링 요구사항 준수 방법이 불명확하여 과도한 수의 카메라 설치가 필요할 수 있다는 의견을 전달받음)</p><h3>Technical Insights</h3><p>• **선박 세그먼트별 규제 차별화의 필요성**: 순수 자동차운반선(PCTC), 로로화물선, 로로여객선(Ro-Pax)은 로로 데크를 보유하지만 근본적인 설계 차이가 존재하므로, 전기자동차 화재 대응 규제 시 세그먼트별 맞춤형 기준 수립이 필수적임</p><p>• **화재 진화 시스템의 기술적 차이 인식**: CO2 시스템(차량운반선)과 드렌처 시스템(로로여객선)의 성능 차이를 IMO 규제에 반영하여 과도한 규제 부담 방지 필요</p><p>• **영상 모니터링 시스템 표준 명확화**: Resolution MSC.550(108)에 따른 "연속 모니터링" 요구사항의 구체적 해석 지침 부재로 인한 산업계 혼선 해소를 위해 IMO 차원의 기술 표준 개발 시급</p><p>• **2027-2028년 규제 개발 로드맵 확립**: SSE 13(2027년 3월)까지 특별대응 그룹 검토 후 2028년부터 로로/로로여객선 관련 추가 협의를 거쳐 2032년 SOLAS 개정 발효 예정으로, 산업계에 충분한 준비 기간 제공</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **사건 개요**: 알래스카 케치칸 인근 유조선 바지선(Waynehoe)에서 폐쇄공간 작업 중 4명의 선원이 사고를 당해 2명이 사망하고 2명이 입원</p><p>• **피해자**: Ben Fowler와 Sidney Mohorovich 사망, 나머지 2명의 선원은 구조되어 안정적 상태로 보고됨</p><p>• **사고 상황**: 일요일 오전 9시 14분 예인선 Chukchi Sea 승무원이 폐쇄공간 내 4명과의 연락 두절을 메이데이 신호로 보고</p><p>• **대응 활동**: 미국 해안경비대 45피트 대응정과 자원봉사소방대가 출동하여 선원 2명을 구조했으나, 화요일에 두 번째 사망자가 회수됨</p><p>• **산업적 문제**: IMO의 강화된 안전규정에도 불구하고 2023년 폐쇄공간 사고는 34명 사망으로 전년도의 약 2배 증가</p><p>• **근본 원인**: 산소 부족이 주요 사인이며, 화물 관련 처리 및 환기 부족이 복합적으로 작용</p><p>---</p><h3>Key Quotes</h3><p>• "Our deepest condolences are with the families and colleagues of the crewmembers affected by this tragic incident. This is a heartbreaking reminder that confined spaces on vessels can contain extremely dangerous, invisible hazards."<br>(이 비극적 사건으로 영향을 받은 선원들의 가족과 동료들에게 깊은 애도를 표합니다. 선박의 폐쇄공간이 극도로 위험하고 눈에 띄지 않는 위해를 포함할 수 있다는 것을 상기시키는 비극입니다.)</p><p>• "These are not new risks, and yet people are still dying. We need to understand what's really happening onboard."<br>(이것은 새로운 위험이 아닌데도 여전히 사람들이 죽고 있습니다. 선박 내에서 실제로 무엇이 일어나고 있는지 이해해야 합니다.)</p><p>---</p><h3>Technical Insights</h3><p>• **폐쇄공간 안전규정의 한계**: IMO의 강화된 안전요구사항이 시행되고 있음에도 불구하고 1990년대 후반 이래로 폐쇄공간 사고의 감소 추세가 미미한 상황으로, 규정의 이행과 교육의 실효성에 의문 제기</p><p>• **산업 데이터 분석**: 2023년 14건의 사고로 34명 사망(2022년 대비 약 2배)으로 집계되었으며, 벌크선이 폐쇄공간 사고의 약 41%를 차지하고 있어 화물 취급 작업의 위험성이 극대화됨</p><p>• **주요 위험 인자**: 산소 결핍(oxygen depletion)이 사망의 주요 원인이며, 이는 불완전한 환기와 화물 관련 생화학적 반응에 의해 유발되는 점에서 선박별 환기 시스템 개선과 지속적인 모니터링 강화 필요</p><p>• **조사 및 예방의 중요성**: 미국 해안경비대의 철저한 조사와 InterManager의 글로벌 안전 설문 참여 확대를 통해 실제 현장 데이터 수집 및 맞춤형 예방 전략 수립이 시급한 상황</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 러시아 LNG 운반선 Arctic Metagaz는 3월 초 폭발 사건 이후 2주간 지중해를 떠돌아다니다가 리비아 수색구조 구역으로 복귀한 상태로, 현재 승무원이 없는 유령선 상태로 운항 중</p><p>• 선박의 4개 LNG 탱크 중 2개만 온전하며, 수백 톤의 액화메탄과 최대 800톤의 석유 제품을 여전히 적재하고 있을 가능성으로 인해 환경 오염 위험성 극대화</p><p>• 이탈리아 민방위청(Protezione Civile)과 남부 EU 6개국(이탈리아, 프랑스, 스페인, 몰타, 그리스, 키프로스)은 당해 선박을 "실질적 해양 환경 위험"으로 분류하며 긴급 대응 태세 유지</p><p>• 초기 폭발 원인은 드론 공격으로 추정되며, 우크라이나-러시아 전쟁의 해상 영역 확대 가능성 시사</p><p>• 러시아 노바텍 계열사 소유 선박의 법적 지위 불명확로 인해 국제적 대응 지연</p><h3>Key Quotes</h3><p>• "The dispersion of gas is a very concrete possibility" <br>(기체의 확산은 매우 현실적인 가능성이다 - 이탈리아 민방위청 대변인)</p><p>• "The vessel is an environmental bomb that risks doing serious damage to the entire surrounding area"<br>(당해 선박은 주변 전역에 심각한 피해를 초래할 위험이 있는 환경 폭탄이다 - 이탈리아 총리 차관 알프레도 만토바노)</p><p>• "If asked by Malta or by the EU, we are ready to intervene within hours"<br>(몰타나 EU의 요청이 있으면 우리는 수시간 내에 개입할 준비가 되어 있다 - 이탈리아 총리 차관)</p><h3>Technical Insights</h3><p>• **국제해양법 및 SAR 구역 문제**: 선박이 세 개의 검색구조 구역(리비아, 몰타, 이탈리아)을 횡단하면서 어느 국가도 책임을 인정하지 않는 '법적 공백' 발생으로, UNCLOS 및 SAR 협약 개선의 필요성 대두</p><p>• **LNG 운반선의 안전 규제 강화**: Arctic Metagaz의 경우처럼 폭발 후에도 장시간 운항하는 위험한 상황을 방지하기 위해 IMO의 LNG 운반선 구조 안전 기준 및 자동 격리 시스템 도입 검토 필요</p><p>• **해상 군사 분쟁의 민간 해운 영향**: 우크라이나-러시아 전쟁이 지중해까지 확대되면서 민간 에너지 운송 선박이 전쟁 대상화 위험 증가, 선박 보안 및 경로 다변화 전략 필수화</p><p>• **환경 재해 대응 체계**: 부유식 LNG 탱크의 누출 방지 및 회수 기술 개발, 그리고 국제적 환경 재해 공동 대응 프로토콜 수립의 시급성 강조</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 카타르 라스 라판 산업도시의 에너지 허브를 미사일로 공격하여 광범위한 피해 발생 - QatarEnergy가 심각한 손상 보고<br>• 공격으로 인해 벤치마크 브렌트유가 5% 상승하여 배럴당 $108 이상으로 급등하고 글로벌 에너지 공급 차질 심화<br>• 이란은 사우디아라비아 4개 탄도미사일 격추되었으나 지역 내 석유·가스 시설을 "정당한 목표물"로 지정하여 추가 공격 위협<br>• 분쟁으로 인해 세계 최대 에너지 생산 지역에서의 해운이 이미 중단되었으며 인프라 장기 손상 가능성 대두<br>• 미국 디젤유가 갤런당 $5 이상으로 상승하여 2022년 인플레이션 이후 최고 수준에 도달, 글로벌 경제에 영향</p><h3>Key Quotes</h3><p>• "extensive damage" after the Ras Laffan Industrial City was hit by Iranian missiles (이란 미사일이 라스 라판 산업도시를 타격하면서 광범위한 피해 발생)<br>• Iran listed several prominent regional oil and gas facilities it called "direct and legitimate targets" (이란이 지역 내 여러 석유·가스 시설을 "직접적이고 정당한 목표물"로 지정)<br>• The conflict quickly spread to neighboring countries and has already halted shipping from the world's most important energy-producing region (분쟁이 주변국으로 빠르게 확산되었으며 세계 최대 에너지 생산 지역에서의 해운이 이미 중단됨)</p><h3>Technical Insights</h3><p>• **해운 중단의 심각성**: 페르시아만 해역의 전략적 위치로 인한 해운 완전 중단은 글로벌 해상 물류 및 에너지 공급망에 즉각적 영향을 미치며, 국제 해운 규제 및 COLREG 준수 자체가 불가능한 상황 발생<br>• **에너지 인프라 보호 필요성**: IMO 및 국제해사기구는 에너지 수송 선박 및 해상 에너지 시설에 대한 보안 강화 지침(ISPS Code) 재검토 필요<br>• **자율운항선 운영의 위험성**: 현재와 같은 분쟁 상황에서 자율운항선의 운영은 인적 판단이 제한되어 더욱 위험하며, 전략적 요충지에서의 AI 항법 시스템 신뢰성 확보 필수<br>• **산업 연쇄 효과**: 원유 가격 급등으로 인한 운영비 상승이 해운 업계의 경제성을 악화시키고, 자동화 및 연료 효율 개선에 대한 투자 재검토 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 이란이 카타르의 라스 라판 산업도시에 미사일을 발사하여 QatarEnergy의 주요 에너지 허브에 광범위한 손상 초래<br>• 이스라엘의 이란 남파스 가스전 시설 공격에 대한 보복으로, 사우디아라비아도 4발의 탄도미사일과 드론 공격 격퇴<br>• 세계 최대 천연가스 매장지인 남파스 지역의 양측 시설 손상으로 전 지구적 에너지 공급 차질 심화<br>• 유가(브렌트유) 배럴당 $108 이상으로 약 5% 상승, 미국 디젤유가 갤런당 $5 초과(2022년 이후 최고 수준)<br>• 페르시안만 지역 해운 전면 중단 상태이며, 에너지 인프라에 대한 장기적 손상 가능성 높음<br>• 카타르 외교부, 이스라엘의 "위험하고 무책임한" 공격 규탄하고 이란 고위 외교관 2명 추방 조치</p><h3>Key Quotes</h3><p>• "extensive damage after the Ras Laffan Industrial City, an energy-industry hub, was hit by Iranian missiles" (라스 라판 산업 허브가 이란 미사일에 타격을 받아 광범위한 손상 발생)</p><p>• "The conflict quickly spread to neighboring countries and has already halted shipping from the world's most important energy-producing region" (분쟁이 인접국으로 빠르게 확산되었으며 세계 최대 에너지 생산 지역으로부터의 해운이 이미 전면 중단)</p><p>• "Trump knew of Israel's plan to attack the gas field in advance and supported it" (트럼프 대통령이 이스라엘의 가스전 공격 계획을 사전에 인지하고 지지함)</p><h3>Technical Insights</h3><p>• **해상 에너지 인프라 보호**: 페르시안만의 전략적 에너지 시설 손상은 해운 경로 통제 및 에너지 수송 안보에 심각한 영향을 미치며, 국제 해상 보안 체계의 재정립 필요</p><p>• **COLREG 및 국제해사법 적용의 한계**: 무장 분쟁 지역에서의 상선 및 에너지 수송선에 대한 국제 규칙 적용 불가능 상태로, IMO와 국제사회의 중립 해역 보호 메커니즘 강화 촉구</p><p>• **유가 변동성과 해운업 경영 위기**: 유가 급등(5%)과 연료비 상승은 해운사의 연료 유(bunker) 비용 폭증을 초래하며, 장기 공급 차질로 운임 급등 예상</p><p>• **자율항해 기술의 전환적 수요**: 고위험 분쟁 지역의 해운 감소로 인한 자동화·자율선박 기술 도입 가속화 및 원격 운영 시스템 수요 급증 예상</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **피격 및 화재 발생**: 이집트 소유, 몰타 선박 Safeen Prestige(IMO 9593517)가 호르무즈 해협에서 의심되는 두 번째 공격 이후 화재가 발생한 것으로 보고됨</p><p>• **반복되는 피해**: 동일 선박이 3월 4일 첫 공격으로 엔진룸 화재 및 승선원 전원 기선 후 3월 6일 지원 예인선까지 추가 피격으로 최소 4명 사망</p><p>• **지역 해양 위기 심화**: 호르무즈 해협 일일 통과 선박이 정상의 95% 이상 감소(몇 척/일 수준)하며 글로벌 해운 차질 심각</p><p>• **광범위한 공격 패턴**: 2월 말 이후 20개 이상 사건 발생, 다양한 선박 유형을 목표로 한 광역 해상 봉쇄 캠페인으로 분석</p><p>• **국제해사기구(IMO) 경고**: 민간 해운인들이 활전 지역 교차 피해를 입고 있으며, JMIC가 위험도 CRITICAL 수준 유지 중</p><p>• **최근 추가 사건**: 3월 18-19일 UAE 동부와 카타르 서부에서 추가 2건의 미확인 발사체 피격 사건 보고</p><h3>Key Quotes</h3><p>• "The Safeen Prestige 'may have been struck again,' adding that the vessel appeared to be on fire as of March 18." <br>(Safeen Prestige가 '다시 피격을 입했을 가능성이 있으며' 3월 18일 현재 화재 상태로 보임)</p><p>• "The International Maritime Organization warned at the time that civilian mariners were increasingly being caught in the crossfire as the Strait of Hormuz deteriorates into an active conflict zone."<br>(국제해사기구가 호르무즈 해협이 활발한 분쟁 지역으로 악화되면서 민간 선원들이 점점 더 교차 피해에 노출되고 있다고 경고)</p><p>• "Vessel traffic through the strait has collapsed to just a handful of daily transits—down more than 95% from normal levels—as shipowners avoid the area."<br>(해협 통과 선박 교통이 일일 소수 척 수준으로 붕괴되어 정상의 95% 이상 감소)</p><h3>Technical Insights</h3><p>• **해상 안전 규제 적용 한계**: 호르무즈 해협의 무장 분쟁 상황에서 IMO 해상 안전 규칙 및 COLREG이 사실상 무력화되며, 국제 해운 질서 붕괴 상태</p><p>• **공격 대상 다양화 전략**: 특정 선박이 아닌 광역 봉쇄 목표의 체계적 공격으로 선박 유형·국적·보유사 무관하게 위험에 노출되는 새로운 위협 패턴 확인</p><p>• **글로벌 해운망 중단 영향**: 정상 대비 95% 이상 교통량 감소로 인한 해상 운송비 급등, 공급망 차질, 에너지 가격 상승 등 세계 경제 파급 효과 심각</p><p>• **재난 대응 체계 부재**: 민간 지원선박(예인선) 피격으로 인한 대규모 인명 피해 발생 시 해상 구조 및 의료 지원 인프라 부족으로 인한 2차 피해 위험 증대</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2026년 3월 18-19일 카타르의 라스 라판 산업도시 내 QatarEnergy의 LNG 시설들이 미사일 공격으로 광범위한 손상을 입음<br>• 이란의 보복 공격으로 Pearl GTL 시설을 포함한 여러 LNG 인프라가 화재 발생 및 광범위한 피해 야기<br>• QatarEnergy는 force majeure 선언으로 LNG 구매자들에게 공급 중단 통보<br>• 호르무즈 해협 폐쇄 및 중동 지역 에너지 자산 보안 위협으로 글로벌 LNG 시장 차질 초래<br>• 인명 피해 없음을 확인했으나 긴급 대응팀이 화재 진화 및 손상 통제에 즉각 투입<br>• 카타르 외교부는 이란 대사관 군사·보안 요원 및 직원을 persona non grata 선포</p><h3>Key Quotes</h3><p>• "Emergency response teams were deployed immediately to contain the resulting fires, as extensive damage has been caused. All personnel have been accounted for and no casualties have been reported at this time." (긴급 대응팀이 화재 진화를 위해 즉각 투입되었으며, 광범위한 손상이 발생했으나 인원 피해는 없음)</p><p>• "a dangerous escalation, a flagrant violation of its sovereignty, and a direct threat to its national security." (위험한 수준의 군사 확대, 주권 침해, 국가 안보에 대한 직접적 위협으로 평가)</p><h3>Technical Insights</h3><p>• **에너지 공급망 차질**: 호르무즈 해협 폐쇄 및 LNG 시설 공격으로 글로벌 LNG 공급 중단 초래 - 아시아-유럽 간 LNG 수급 불균형 야기 및 유가 상승 압력($100/배럴 도달 가능성)</p><p>• **Force Majeure 선언 영향**: QatarEnergy의 LNG 구매 계약 일시 중단으로 인한 국제 에너지 거래의 법적·상업적 혼란 및 해양 운송 일정 지연</p><p>• **해상 보안 위협 심화**: 중동 해역 내 LNG 수송선 운항 위험도 급증 - COLREG 준수 및 항해 안전 프로토콜 재검토 필요, 자율운항선박의 위험 회피 알고리즘 고도화 시급</p><p>• **지정학적 리스크 관리**: 미사일 공격 기반시설 방어 기술 고도화 및 항만-해상 통합 보안 체계 강화 필요 - 국제해사기구(IMO) 차원의 고위험 해역 항행 지침 개정 가능성</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• MSC(Mediterranean Shipping Company)가 룩셈부르크 자회사 SAS Shipping Agencies Services를 통해 한국 태닉커사 시노코(Sinokor Maritime)의 공동 지배권 취득 추진 - 2026년 3월 11일 키프로스 경쟁 심사 신청서로 공식 확인됨</p><p>• 시노코는 2026년 초 대규모 초대형유조선(VLCC) 매입 및 용선을 통해 100~120척 규모의 유조선 보유 추정 - 현물 선대의 약 1/3에 해당하는 규모</p><p>• VLCC 현물운임이 연초 하루 10만 달러를 넘어서면서 유조선 시장 급등 - 운임 인상과 톤수 부족에 대응한 적극적 매입 전략</p><p>• 그동안 모호했던 MSC의 역할이 공식화 - 창립자 Gianluigi Aponte 관련 기업들의 암묵적 지원이 이제 정식 파트너십으로 전환</p><p>• 컨테이너선 업계 최대 기업 MSC의 다각화 전략 심화 - 터미널, 물류, 크루즈선을 넘어 대규모 원유 유조선 시장 진출 추진</p><h3>Key Quotes</h3><p>• "Sinokor has stunned tanker markets in early 2026 after rapidly building a massive position in very large crude carriers (VLCCs). Industry estimates suggest the company now controls on the order of 100 to 120 supertankers—potentially up to a third of the available spot fleet—following an aggressive wave of secondhand purchases and charters." <br>(시노코가 2026년 초 VLCC 대량 매입으로 현물선대의 약 1/3에 해당하는 100~120척을 장악하며 시장을 놀라게 함)</p><p>• "That buying spree has coincided with a sharp surge in tanker earnings, with VLCC spot rates jumping above $100,000 per day earlier this year as charterers rushed to secure tonnage amid tightening availability."<br>(톤수 부족 속에 용선사들의 급한 확보 수요로 현물운임이 하루 10만 달러 이상 급등)</p><p>• "The move is significant for MSC, the world's largest container shipping line, which has historically focused on liner trades but has increasingly expanded across the maritime sectors—from terminals and logistics to cruise and now potentially large-scale exposure to crude tanker markets."<br>(세계 최대 컨테이너선사 MSC가 선형 사업에서 벗어나 다각화 확대 추진)</p><h3>Technical Insights</h3><p>• **유조선 시장 집중도 심화**: 단일 기업이 현물선대의 30% 이상을 장악하게 되면 시장 수급 조절 능력 강화로 COLREG 외 운영 효율성 및 환경규제 대응 단계별 진행 가능성 증대</p><p>• **대형 선사의 다각화 전략**: MSC 같은 메가 캐리어의 벌크/유조선 사업 진출은 IMO 2030/2050 탄소중립 규제에 대응한 선대 다양화 및 에너지 전환 포트폴리오 구축의 일환으로 해석 가능</p><p>• **자본 집중과 시장 효율성**: 구형 VLCC의 일괄 매입 및 현대화를 통한 규제 선제 대응 가능 - 신 IMO 규제 기준 충족 선박 수급 경쟁력 강화</p><p>• **지정학적 리스크 헤징**: 호르무즈 해협 폐쇄 위험 속 다국적 선사의 선대 확보 전략은 공급망 안정성 확보 및 운임 변동성 최소화 추진으로 해석</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• **이중 피격 사건**: 이집트 소유, 몰타 기국의 컨테이너선 Safeen Prestige(IMO 9593517)가 호르무즈 해협에서 의심스러운 두 번째 공격으로 화재 발생 보고</p><p>• **선박 및 피해**: 3월 4일 첫 피격으로 엔진실 화재 발생 및 승무원 기선탈출, 3월 6일 보조 예인선 공격으로 최소 4명 사망</p><p>• **광역 공격 캠페인**: 지난 2월 말 분쟁 이후 20건 이상의 사건 발생, 호르무즈 해협 통행량 95% 이상 감소</p><p>• **지역 maritime threat level**: 합동해양정보센터(JMIC)에서 CRITICAL 경고 유지, 3월 18-19일 추가 2건 피격 사건 보고</p><p>• **광범위한 운영 영향**: 아라비아만, 호르무즈 해협, 오만만에 걸친 광범위한 해운 운영 차질 및 선사들의 해역 회피</p><h3>Key Quotes</h3><p>• "The Safeen Prestige may have been struck again," adding that the vessel appeared to be on fire as of March 18. (Safeen Prestige가 다시 피격되었을 가능성이 있으며, 3월 18일 현재 화재 발생 상태)</p><p>• "The International Maritime Organization warned at the time that civilian mariners were increasingly being caught in the crossfire as the Strait of Hormuz deteriorates into an active conflict zone." (국제해사기구는 호르무즈 해협이 활성 분쟁 지역으로 악화되면서 민간 해원들이 교전 중에 점점 더 피해를 입고 있다고 경고)</p><p>• "Vessel traffic through the strait has collapsed to just a handful of daily transits—down more than 95% from normal levels—as shipowners avoid the area." (선사들의 해역 회피로 해협 통행량이 일일 수 척으로 붕괴되어 정상 수준 대비 95% 이상 감소)</p><h3>Technical Insights</h3><p>• **해양 보안 위협 에스컬레이션**: 호르무즈 해협에서의 반복적 피격 사건은 특정 선박이 아닌 광역 해운 운영 마비를 목표로 한 체계적 캠페인 특성을 나타내며, IMO 차원의 해역 위험도 재평가 필요</p><p>• **승무원 안전 및 인도주의적 우려**: 예인선 공격으로 인한 사상자 발생은 COLREG/IMO 국제협약상 민간 선박 및 승무원 보호 의무의 심각한 위반으로, 국제 해양법 집행 메커니즘의 강화 필요</p><p>• **해운 산업 경제적 영향**: 통행량 95% 급감은 국제 에너지, 무역 공급망에 심각한 영향을 초래하며, 자율운항선박(MASS) 도입 시 이러한 고위험 해역에서의 운영 안전성 및 통제 능력 검증의 중요성 강조</p><p>• **해역 회피 및 대체 경로 운영**: 광역 해운 마비로 인한 장거리 우회항로 증가는 연료비, 운항 시간 증가로 이어져 업계 전체 수익성 악화 및 항로 보험료 인상 유발</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **MSC와 Sinokor의 공식적 지배구조 변경**: 3월 11일 키프로스에 제출된 경쟁 심사 서류에서 MSC가 룩셈부르크 자회사 SAS Shipping Agencies Services를 통해 한국 선사 Sinokor Maritime의 공동 지배권을 확보하기로 결정했음이 공식화됨</p><p>• **대규모 VLCC 확보 및 시장 지배력**: Sinokor는 2026년 초 극도로 공격적인 중고선박 구매 및 용선을 통해 초대형유조선(VLCC) 100~120척을 확보하여 현물 시장의 약 3분의 1을 장악한 것으로 추정됨</p><p>• **유조선 운임 급등의 배경**: 이 같은 구매 공세는 유조선 운임 급등(VLCC 현물 운임이 연초 일일 $100,000을 초과)과 동시에 진행되었으며, 선주들이 공급 부족에 대응하기 위해 용선을 급히 확보한 상황임을 반영</p><p>• **MSC의 다각화 전략 심화**: 세계 최대 컨테이너선사 MSC가 전통적 정기선 사업에서 벗어나 터미널, 로지스틱스, 크루즈, 그리고 원유유조선 시장으로의 대규모 진출을 추진 중</p><p>• **불명확했던 관계의 공식화**: 기존에는 창립자 Gianluigi Aponte 관련 회사가 Sinokor 선박 취득에 자금을 지원한다는 업계 추측이 있었으나, 이번 키프로스 서류 제출로 공식적인 파트너십이 형성되었음</p><p>• **거래 조건 미공개**: 재무 조건 및 구체적 거래 내용은 공개되지 않았으며, MSC와 Sinokor 모두 정식 성명을 발표하지 않은 상태</p><h3>Key Quotes</h3><p>• "Sinokor has stunned tanker markets in early 2026 after rapidly building a massive position in very large crude carriers (VLCCs). Industry estimates suggest the company now controls on the order of 100 to 120 supertankers—potentially up to a third of the available spot fleet" <br>(Sinokor는 2026년 초 초대형유조선에서 대규모 포지션을 빠르게 구축하여 유조선 시장을 놀라게 했으며, 업계 추정에 따르면 약 100~120척의 초대형유조선을 보유하여 현물 시장의 최대 3분의 1을 지배하고 있음)</p><p>• "That buying spree has coincided with a sharp surge in tanker earnings, with VLCC spot rates jumping above $100,000 per day earlier this year as charterers rushed to secure tonnage amid tightening availability"<br>(이러한 구매 공세는 유조선 운임의 급등과 동시에 진행되었으며, VLCC 현물 운임이 올해 초 일일 $100,000을 초과하며 급증함에 따라 용선자들이 공급 부족 속에서 선복을 급히 확보하려 함)</p><h3>Technical Insights</h3><p>• **해운 시장 집중도 심화**: MSC-Sinokor 제휴를 통해 단일 엔티티가 VLCC 현물 시장의 3분의 1 이상을 장악하게 되어 시장 집중도가 극도로 높아지고 있으며, 이는 해운 업계 규제 및 독점 정책에 대한 감시 강화를 야기할 가능성이 높음</p><p>• **컨테이너선사의 유조선 시장 진출**: 기존에 정기선(liner) 사업에 집중하던 MSC가 벌크선 및 유조선 시장으로 적극 진출하는 추세는 해운 산업의 경계 붕괴와 대형 선사들의 다각화 전략이 심화되고 있음을 의미</p><p>• **용선 시장의 구조적 변화**: 대형 선사가 자체 선복 장악 및 용</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• SBM Offshore는 Fast4Ward 프로그램을 통해 일회성 맞춤형 FPSO 설계에서 표준화되고 모듈화된 데이터 중심 운영 모델로 전환했습니다.</p><p>• 로봇공학, AI 예측 유지보수, 디지털 트윈, 그리고 탄소 포집 기술을 적극 도입하여 미래 에너지 환경에 대응하고 있습니다.</p><p>• 데이터 단편화, 조직 문화 변화, 배출 감소라는 세 가지 주요 과제를 디지털 통합, 교육, 전략적 파트너십(SLB, Cognite, 미쓰비시 중공업)으로 해결 중입니다.</p><p>• COO Alex Glenn은 표준화된 선체와 상부 구조 모듈을 통해 납기 시간 단축과 원가 예측 가능성을 향상시켰다고 설명했습니다.</p><p>• 안전성, 지속 가능성, 효율성이 주요 추진 동력이며, 글로벌 실행 센터 확대와 디지털 플랫폼 활용이 핵심 성장 전략입니다.</p><h3>Key Quotes</h3><p>• "We have moved from one-off, bespoke FPSOs to a standardized, modular, and data-powered operating model" (일회성 맞춤형 FPSO에서 표준화된 모듈식 데이터 기반 운영 모델로 전환했습니다)</p><p>• "Robotics, AI-enabled solutions, electrification, and carbon-capture technologies would remain in use to position the firm for future growth" (로봇공학, AI 솔루션, 전기화, 탄소 포집 기술이 향후 성장을 위한 핵심 기술입니다)</p><h3>Technical Insights</h3><p>• **AI 기반 예측 유지보수 및 디지털 트윈 기술**: SBM Offshore는 Cognite 및 SLB와의 파트너십을 통해 FPSO 운영의 실시간 모니터링과 장애 예측 능력을 강화하고 있으며, 이는 운영 비용 절감과 가용성 향상으로 이어집니다.</p><p>• **표준화와 모듈화의 산업적 파급효과**: 사전 설계된 선체와 상부 구조 모듈은 건조 기간 단축과 예측 가능한 원가 관리를 실현하며, 이는 해양 산업 전반의 효율성 개선 모델로 작용할 것으로 예상됩니다.</p><p>• **탄소 저감 및 지속 가능성 이행**: 전기화 기술과 탄소 포집 솔루션의 도입은 IMO 규제 강화에 대응하는 동시에 에너지 전환기의 부유식 생산 설비의 경쟁력을 확보하는 전략입니다.</p><p>• **데이터 거버넌스와 디지털 통합의 과제**: 기존 사일로화된 데이터 환경 극복과 조직 문화 변화는 대규모 오프쇼어 운영 기업의 디지털 혁신 단계에서 가장 높은 리스크 요소이며, 이를 성공적으로 관리하는 것이 향후 경쟁력의 핵심입니다.</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **오션스 블루보틀 USV의 역사적 첫 참가**: 호주 해군이 정식 함대 검열에 무인 수상함을 처음으로 포함시키며 자율 해양 시스템의 운영 도입 단계 진입을 공식화</p><p>• **대규모 장비 도입 계약**: $176M 규모의 프로그램 기록 협약으로 기존 15척에 추가로 40척의 블루보틀 USV를 도입하며, 글로벌 무인 수상함 획득 계약 중 최대 규모</p><p>• **친환경 자율 운영 기술**: 태양광, 풍력, 파력으로 구동되는 연료 무동력 설계로 수개월 운용 지속성 확보와 음향 정숙성을 동시 달성</p><p>• **해양 국경 모니터링 강화**: 호주가 담당하는 세계 최대 규모 해양 지역의 감시 및 보호 능력을 비용 효율적이고 주권적으로 확대</p><p>• **익스서사이즈 카카두 2026**: 호주 해군 125주년 기념 행사로 시드니 항만에서 호주 및 18개국의 약 30척 함정과 함께 블루보틀 USV 전시</p><p>• **다층 자산 통합 운영**: 무인 수상함이 수중/표면 자산과 팀 환경에서 상호운용 가능한 통합 전력 체계의 핵심 요소로 기능</p><h3>Key Quotes</h3><p>• **"The Bluebottle USV is an operational capability already delivering persistent maritime surveillance for Australia."** <br>  (블루보틀 USV는 호주를 위해 이미 지속적인 해양 감시 역량을 제공하고 있는 실전 운용 능력)</p><p>• **"By participating in the Exercise Kakadu Fleet Review 2026, the Royal Australian Navy is making clear that uncrewed systems are an integral part of Australia's advanced maritime capabilities."**<br>  (익스서사이즈 카카두 2026 참가를 통해 호주 해군은 무인 시스템이 호주의 첨단 해양 역량의 핵심 부분임을 명확히 함)</p><p>• **"Importantly, Bluebottle USVs are powered by renewable energy, utilising solar, wind and wave energy, meaning they require no fuel and are capable of long-endurance operations."**<br>  (특히 블루보틀 USV는 태양광, 풍력, 파력 신재생에너지로 구동되어 연료가 불필요하며 장시간 운용 가능)</p><h3>Technical Insights</h3><p>• **자율 해양 시스템의 COLREG 적용 확대**: 공식 함대 검열 참가는 국제 충돌 방지 규칙(COLREG)을 준수하는 완전 자율 운영 USV의 해군 인정을 의미하며, IMO 자율선박 규제 프레임워크 개발에 실질적 근거 제공</p><p>• **신재생에너지 기반 해양 감시 패러다임 전환**: 연료 무동력 설계로 운영 비용 절감 및 환경 영향 최소화, 향후 글로벌 해군의 그린 쉬핑 전환 가속화 예상</p><p>• **다중 자산 네트워크 중심 전술 운영**: 무인 시스템이 크루드 함정과 수중 자산을 통합하는 중추 역할로 지정되며, 분산형 자율 운영 네트워크(DANN) 구현의 실제 사례 제시</p><p>• **국가 주권 기반 무인 해양 방위 산업화**: 호주 설계·제조 USV의 대규모 도입은 선진국의 자국 기술 자립도 강화 추세를 반영하며, 글로벌 방위 무인화 시장에서 비미국 진영의 기술 경쟁력 입증</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 터키 국방회사 MKE가 PİRANA라는 차세대 자살 공격용 무인수상선(USV) 공개 - 터키 해군의 해상 작전 능력 강화를 목표로 개발된 스트라이크 자산</p><p>• 무인 수상선은 완전 자동화된 해상 플랫폼으로 육상 및 항공 전력 외 새로운 해전 영역 확보의 일환</p><p>• 이 시스템은 향후 터키 해군 운용 전개 예정이며 해양 무인 시스템의 군사적 활용 추세 반영</p><p>• 방위사업 다각화 및 자체 기술 개발을 통한 국방력 증강 전략의 실질적 사례</p><p>• 무인 수상선의 전술적 운용 개념과 해상 전역에서의 자율 작전 능력이 핵심 특징</p><h3>Key Quotes</h3><p>• "Platform was developed for maritime operations as part of a broader push beyond land and air" (육상과 항공 전력을 넘어 해상 영역으로 확대하는 광범위한 전략의 일환으로 개발됨)</p><h3>Technical Insights</h3><p>• **무인수상선의 자율 운용**: PİRANA와 같은 USV는 GPS 네비게이션, 자동 장애물 회피, 원격 제어 등 첨단 자율화 기술을 기반으로 작동하며, 기존 COLREG 규정의 적용 문제 제기</p><p>• **해군 전술의 혁신**: 무인 스트라이크 자산의 도입은 해군 전력 구성의 패러다임 전환을 의미하며, 인명 손실 감소와 작전 비용 절감의 장점 제시</p><p>• **국제 규범의 공백**: 자살 공격용 무인 수상선의 운용은 국제인도법(IHL) 및 IMO 해상 안전 규정과의 충돌 가능성이 있으며, 차기 IMO 규범 개정 논의 필요</p><p>• **해상 보안의 복잡성 증가**: 무인 공격 자산의 다각화는 해상 경계 및 방어 시스템의 고도화 필요성을 촉발하고, 대해역 국가들의 무인 시스템 군비 경쟁 심화 우려</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 미국 Sierra Nevada Corporation 제조 AEGIR-W 군사급 무인수상선(USV)이 터키 오르두 해안에서 발견됨<br>• 분쟁 지역 작전용으로 설계된 군사 드론으로, 정찰 및 전자전 임무 수행 가능<br>• 현지 주민에 의해 발견되었으며 터키 당국이 검사 후 폐기할 예정<br>• 미국 군사 장비의 예기치 않은 발견으로 지정학적 관심 증가<br>• 무인수상선 기술의 운용 손실 및 보안 문제 노출</p><h3>Key Quotes</h3><p>• "military-grade unmanned surface vessel, or USV, designed for operations in contested environments" (분쟁 지역 작전을 위해 설계된 군사급 무인수상선)</p><h3>Technical Insights</h3><p>• **자율운항 군사 플랫폼의 취약성**: AEGIR-W와 같은 고급 USV의 예기치 않은 손실은 극악의 해상 환경에서의 운용 안정성과 추적 시스템의 한계를 시사함</p><p>• **해양 드론 보안 규제**: IMO 및 국제 해사법에서 군사 무인선박의 운용, 손실, 회수 절차에 대한 명확한 기준 부재로 인한 국제 분쟁 소지</p><p>• **산업적 영향**: 무인수상선 기술의 실전 배치 증가에 따라 해상 충돌 회피 규칙(COLREG)과 자율운항 선박의 국제 안전 표준 개정 필요성 대두</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 호주 해군(Royal Australian Navy)이 Exercise Kakadu 함대 훈련에서 처음으로 무인 표면 함정(USV, Uncrewed Surface Vessel) Bluebottle을 정식 함대 리뷰에 포함시킴<br>• Ocius Technology가 제조한 Bluebottle USV는 태양광, 풍력, 파력으로 구동되는 연료 불필요 자율 감시 플랫폼으로 수개월 지속 운영 가능<br>• 호주 해군은 Ocius와 1억 7,600만 달러(약 176M AUD) 규모의 Program of Record 계약을 체결하여 기존 15척에서 40척 추가 도입 계획<br>• Bluebottle은 호주 최초의 해군 정식 등록 무인함정이며, 2026년 시드니 항구에서 호주 해군 창립 125주년 기념 행사에 약 30척의 호주 함정과 18개 국가 함정과 함께 참가<br>• 무인 자율 시스템의 도입은 호주의 광대한 해상 영역 감시 및 해양 국경 보호 능력을 크게 강화하며, 비용 효율성과 작전 지속성 향상</p><h3>Key Quotes</h3><br>• "The Bluebottle USV is an operational capability already delivering persistent maritime surveillance for Australia. By participating in the Exercise Kakadu Fleet Review 2026, the Royal Australian Navy is making clear that uncrewed systems are an integral part of Australia's advanced maritime capabilities." (Bluebottle USV는 호주를 위해 지속적인 해상 감시 능력을 이미 제공하고 있는 실용 운영 시스템이며, Exercise Kakadu 함대 리뷰 참가를 통해 호주 해군은 무인 시스템이 호주의 첨단 해양 능력의 필수 구성 요소임을 명확히 하고 있음)</p><p>• "With Bluebottle USVs designed and manufactured right here in Australia, this important milestone also reflects the world-leading innovation of our maritime defence technology industry." (Bluebottle USV가 호주에서 설계·제조되고 있으며, 이는 호주의 세계 최고 수준의 해양 방위 기술 산업 혁신을 반영함)</p><h3>Technical Insights</h3><br>• **자율 해양 시스템의 전력화**: Bluebottle USV는 연료 불필요한 재생 에너지 기반 무인함정으로, 수개월 지속 운영이 가능하여 기존 유인함의 운영 비용과 인력 소비를 대폭 감소시킬 수 있는 신 개념의 해양 감시 플랫폼임</p><p>• **통합 작전 능력**: Bluebottle USV는 다른 수상/수중 자산과 협업하는 팀 환경에서 작동하도록 설계되어, 통합 전력 운영 개념(integrated force architecture)의 구현을 가능하게 함</p><p>• **호주 해양 방위 산업의 국제 경쟁력**: 호주 자체 설계·제조 USV의 대량 도입(총 55척 규모)은 인도-태평양 지역 해양 안보 강화와 함께 호주의 방위 기술 수출 기반 강화를 의미함</p><p>• **IMO/COLREG 자율항행 규제 선행 사례**: 호주 해군의 Bluebottle 정식 등록 및 함대 운영은 국제 해사 자율항행 규제 정립 이전에 이미 실용 운영되는 사례로, 국제 해사기구(IMO) 자율항행 기준 개발에 실전 데이터를 제공할 것으로 예상됨</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **주요 사건**: 3월 18일 이란의 미사일 공격으로 카타르의 라스 라판 산업도시 내 LNG 시설에 광범위한 피해 발생</p><p>• **피해 규모**: QatarEnergy의 LNG 수출 능력 17% 감소(12.8 mtpa) 및 연간 약 $200억 규모의 손실 발생</p><p>• **복구 기간**: 손상된 LNG 생산 시설 복구에 3~5년 소요 예상으로 장기 Force Majeure 선언</p><p>• **영향 지역**: 중국, 한국, 이탈리아, 벨기에 등 주요 LNG 수입국에 공급 중단</p><p>• **글로벌 영향**: 호르무즈 해협 폐쇄로 인한 유가 상승($100 예상) 및 글로벌 에너지 안보 위기 심화</p><p>• **동반 피해**: Pearl GTL 시설(Shell 운영)도 공격 대상으로 포함되어 고급 연료 및 윤활유 생산 중단</p><h3>Key Quotes</h3><p>• "This was an attack on all of us who stand for development and human progress that is sustained by a fair, reliable, and secure access to energy." <br>(에너지의 공정하고 신뢰할 수 있는 접근을 통한 발전과 인류 진보를 지지하는 우리 모두에 대한 공격)</p><p>• "The damage sustained by the LNG facilities will take between three to five years to repair. The impact is on China, South Korea, Italy and Belgium."<br>(LNG 시설 복구에는 3~5년이 소요되며, 중국, 한국, 이탈리아, 벨기에에 영향을 미친다)</p><h3>Technical Insights</h3><p>• **LNG 공급망 위기**: 카타르 LNG 생산 능력 17% 손실로 글로벌 LNG 시장의 공급 부족 심화 및 장기 계약 불이행 가능성 대두</p><p>• **해운 물류 영향**: 호르무즈 해협 폐쇄로 인한 LNG 수송 경로 변경 필요 및 해상 운송료 급등으로 해운업체의 비용 부담 증가</p><p>• **에너지 보안 및 IMO 규제**: 유사 지정학적 위기 상황에서 해상 화물 운송의 안전성 강화 및 자율운항선박(MASS) 도입을 통한 인명 손실 최소화 필요성 증대</p><p>• **산업 복구력(Resilience)**: 주요 에너지 인프라의 손상 대응 능력 강화 및 대체 해운 루트 구축을 통한 글로벌 공급망 안정화 전략 수립 시급</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 호주 해군이 무인표면선박(USV) Bluebottle을 공식 함대 검열 행사에 처음으로 포함시켰으며, 이는 자율 해양 시스템의 운영 확대를 의미함</p><p>• Ocius Technology의 Bluebottle은 태양광, 풍력, 파력 에너지로만 작동하는 세계 최초의 연료 없는 무인선박으로 수개월의 연속 운영 능력을 보유</p><p>• 호주 해군은 현재 15척의 Bluebottle을 운용 중이며, 1억 7,600만 달러 규모의 계약으로 40척이 추가로 도입될 예정</p><p>• Exercise Kakadu 2026 함대 검열은 호주 해군 창설 125주년을 기념하며 호주 및 18개국에서 약 30척의 함선이 참가</p><p>• Bluebottle의 음향 정숙성과 장기 운영 능력은 호주의 광대한 해역 감시 및 해양 경계 보호 능력을 혁신적으로 강화</p><h3>Key Quotes</h3><p>• "The Bluebottle USV is an operational capability already delivering persistent maritime surveillance for Australia. By participating in the Exercise Kakadu Fleet Review 2026, the Royal Australian Navy is making clear that uncrewed systems are an integral part of Australia's advanced maritime capabilities." (Bluebottle은 이미 호주의 지속적 해양 감시 능력을 제공하는 운영 중인 시스템이며, Exercise Kakadu 함대 검열 참가를 통해 호주 해군은 무인 시스템이 선진 해양 능력의 필수 요소임을 분명히 함)</p><p>• "With Bluebottle USVs designed and manufactured right here in Australia, this important milestone also reflects the world-leading innovation of our maritime defence technology industry." (호주에서 설계 및 제조되는 Bluebottle은 호주의 세계 수준의 해양 방위 기술 산업 혁신을 대표함)</p><h3>Technical Insights</h3><p>• **자율 해양 시스템의 함대 통합**: Bluebottle의 Fleet Review 참가는 무인 시스템이 전통적인 유인함과 함께 정규 작전 능력으로 인정받는 중요한 산업 전환점으로, IMO 자율선박 규제 논의에 실질적 사례 제공</p><p>• **재생에너지 무인선박의 운영 우위**: 연료 불필요한 태양광/풍력/파력 동력 방식은 장기 지속성(persistence), 운영 비용 절감, 음향 정숙성을 동시에 확보하여 해양 감시 작전에서 COLREG 준수 기반의 자율 항해 기술 가능성을 입증</p><p>• **호주의 주권적 해양 감시 강화**: 광활한 해역에서의 비용 효율적 감시 능력 확보로 인한 해양 안보 강화는 인도-태평양 지역 해양 질서 유지에 기여하며, 타국의 USV 도입 촉발 가능</p><p>• **산업 공급망의 지역화 전략**: 호주 설계·제조 USV의 대량 도입($176M 규모)은 방위 산업의 지역 자급화 추세를 강화하고, 향후 태평양 지역 해양 기술 표준화에 호주의 영향력 확대</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 카타르의 국영 에너지 기업 QatarEnergy의 라스 라판 산업도시 LNG 시설이 2026년 3월 18일 미사일 공격으로 피해를 입음<br>• 공격으로 인한 LNG 수출 용량 17% 감소(연간 12.8백만톤) 및 연간 200억 달러 규모의 손실 발생<br>• 손상된 LNG 생산 설비(Train 4, 6) 복구에 3~5년 소요 예상, 장기 강제불가항력 선언<br>• 이란의 호르무즈 해협 폐쇄로 글로벌 에너지 공급망 교란 및 중국, 한국, 이탈리아, 벨기에 등에 영향<br>• ExxonMobil과의 합작투자 LNG 생산시설 및 Shell 운영 Pearl GTL 시설 손상<br>• 재무손실뿐 아니라 글로벌 에너지 안보 위협 및 중동 지역 정치적 긴장 심화</p><h3>Key Quotes</h3><p>• "The damage sustained by the LNG facilities will take between three to five years to repair. The impact is on China, South Korea, Italy and Belgium." (LNG 시설 피해 복구에 3~5년 소요 예상이며, 중국, 한국, 이탈리아, 벨기에에 영향 미칠 것)</p><p>• "I am relieved to confirm that no one was injured by these unjustified and senseless attacks, which weren't just an attack on the State of Qatar but attacks on global energy security and stability." (부당한 이번 공격으로 인명피해는 없었으나, 이는 카타르에 대한 공격을 넘어 글로벌 에너지 안보와 안정성에 대한 공격)</p><h3>Technical Insights</h3><p>• **해상 운송 및 글로벌 공급망 영향**: LNG 수출 용량 17% 감소는 해상운송 선박(LNG 캐리어) 운항 감소 및 국제 에너지 무역 경로 재편으로 이어짐. 호르무즈 해협 폐쇄로 인한 항로 우회는 운송비 증가 및 배송일정 지연 초래</p><p>• **IMO/국제해사규칙 적용**: 강제불가항력(Force Majeure) 선언은 국제 LNG 거래 계약과 해상운송 약정에 영향을 미치며, 이는 IMO 규정과 국제해사법상 분쟁의 원인이 될 가능성 존재</p><p>• **에너지 안보와 자율선박 기술의 중요성**: 이 사건은 지정학적 위험 지역에서 에너지 수송의 취약성을 노출시키며, 자율항법선박(MASS) 기술 도입 시 안전성 강화와 인명피해 감소의 필요성을 부각</p><p>• **산업적 재편**: 중동 지역 에너지 공급 차질로 인한 글로벌 LNG 시장 재편, 대체 공급원(호주, 미국 등) 수요 증가 및 장기 해상운송 계약 조정 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2024년 10월 14일 샌프란시스코 만 카르키네즈 해협의 마르티네즈 정유소 부두에서 원유 탱커 플라타노스호(820피트)가 접안 해제 중 콘크리트 돌핀 구조물에 충돌</p><p>• **원인**: 숙련된 파일럿(30년 경력)이 보조 예인선 2척의 위치를 참조 카드에 잘못 기입하여 전후 위치를 뒤바꾸고 명령을 잘못된 예인선에 전달</p><p>• **결과**: 후미(stern)가 부두 방향으로 급속히 이동하여 콘크리트 구조물 충돌, $500,000 이상의 복합 손상 발생(오염/인명피해 없음)</p><p>• **인적 요소**: 파일럿의 순환생리 저기간(0300-0500) 조기 운항 수행, 약 4.5시간 수면 후 작업 진행으로 집중력 저하 가능성 확인</p><p>• **NTSB 결론**: 기계 결함 없음, 기상 양호 - 단순 인적 오류(slip/lapse)로 판정되었으며 선교팀의 개입 시점에는 사고 방지 불가능</p><p>• **관련 기관**: NTSB(미국 운송안전위원회), Martinez Refining Company, Samos Steamship Co.</p><h3>Key Quotes</h3><p>• **"The bow [was] rapidly pulled away from the pier, causing the stern of the ship to move toward the pier,"** (선수가 부두에서 급속히 떨어지면서 선미가 부두 방향으로 이동하게 됨)</p><p>• **"The master did recognize the developing risk and warned the pilot that the stern was 'too close' roughly 30 seconds before impact."** (선장이 충돌 약 30초 전에 선미가 '너무 가깝다'고 경고했으나 이미 회피 시간 상실)</p><p>• **"That error led to an incorrect mental model of how the ship would respond to tug inputs."** (참조 카드 오류로 인해 파일럿의 예인선 명령에 대한 선박 반응에 대한 잘못된 정신 모형 형성)</p><h3>Technical Insights</h3><p>• **예인선 운용 안전성**: 디지털 식별 시스템 부재로 인한 수작업 참조 카드 사용의 위험성 - 아날로그 시스템의 개선 필요성 대두</p><p>• **순환생리와 해양 안전**: 0300-0500 시간대의 인적 오류 발생률 증가 구간으로 항만 조종 관행 개선(최소 휴식 요구사항, 파일럿 교대 제도) 필요</p><p>• **IMO/선박관리**: STCW 협약 상 피로도 관리 강화 및 선교 시스템에서 예인선 위치/상태를 자동 시각화하는 Decision Support System(DSS) 도입 필요성</p><p>• **산업 교훈**: 숙련도 높은 파일럿도 루틴 작업 중 발생하는 "Slip" 유형 오류로부터 안전하지 않음 - CRM(Crew Resource Management) 및 이중 확인 절차의 지속적 강화 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• IQUA Robotics가 개발한 ESCABVENTS 프로젝트가 자율수중선(AUV, Sparus II)을 선박 선체 검사에 사용하는 개념증명(PoC) 테스트를 성공적으로 완료했으며, EU NextGenerationEU 자금 지원을 받음</p><p>• Zamakona Yards 조선소와 협력하여 어선, 연구선, 국방함 등 다양한 선종 4척을 대상으로 실항해 시험을 수행하고 센티미터 해상도의 3D 재구성 데이터 획득</p><p>• 부식, 해양생물 부착(바이오파울링), 페인트 손상 등 선체 상태를 자동으로 식별 가능하며, 다이버나 유선식 로봇(ROV)에 비해 안전성 및 효율성 향상</p><p>• 복잡한 형상의 영역(프로펠러, 러더 등)에서 음향 반사로 인한 어려움과 고광도 대비로 인한 측면 촬영 문제 등 개선 과제 확인</p><p>• 선박 유지보수 외에도 항만 보안, 중요 인프라 검사, 수중 불법물품 탐지 등의 확대 적용 가능성 제시</p><h3>Key Quotes</h3><p>• "The use of an autonomous vehicle like the Sparus II AUV allows for systematic hull scanning without direct intervention from an operator in piloting." (Sparus II AUV 같은 자율수중선을 사용하면 운영자의 직접 조종 개입 없이 체계적인 선체 스캔이 가능함)</p><p>• "These campaigns allowed the collection of multiple datasets on four vessels of different types, including fishing, research, and defense ships. The results show that it is possible to obtain 3D reconstructions with centimetric resolution, facilitating the identification of corrosion, marine fouling, or paint damage." (다양한 선종 4척에서 수집한 데이터로 센티미터 단위 해상도의 3D 재구성이 가능하며, 부식 및 해양생물 부착 식별 용이)</p><h3>Technical Insights</h3><p>• **AUV 기반 자동화 검사 체계**: 유인 다이버 또는 유선식 ROV에 의존하던 전통적 선체 검사 방식에서 완전 자율운영 시스템으로의 전환으로, 작업 안전성 향상 및 운영 비용 절감 가능</p><p>• **센티미터급 음향 영상 정밀도**: Sparus II AUV의 고해상도 소나 및 영상 센서를 통해 선체 부식, 바이오파울링 등 미시적 손상까지 자동 탐지 가능하며, 예방적 선박 유지보수 고도화의 기반 제공</p><p>• **복합기하 영역 및 고광도 환경의 극복 과제**: 프로펠러/러더 부근의 음향 반사 간섭, 선체 측면의 고광도 대비 문제 등은 향후 알고리즘 개선 및 센서 융합 기술 개발 필요성을 시사하며, 자율 선박 운영 시 해양 환경 적응성 강화 필수</p><p>• **항만보안 및 항해 안전 확대 응용**: 선체 검사 기술의 확장으로 항만 인프라 보안, 수중 불법물품 및 위협 요소 탐지 등 해양 보안 및 해양법 집행 분야의 기술 혁신 가능성을 제시하며, IMO 해양 자율화 규제 프레임워크와 연계된 산업 표준화 논의 필요</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **일본 최초 자율운항 RoRo 인증 완료**: 가와사키기센카이샤(K LINE)가 운영하는 6,890톤급 호쿠렌마루 2호가 상업운항 중 완전 자율운항을 수행할 수 있는 국제 인증을 획득</p><p>• **ClassNK 및 일본 국토교통성 인증 취득**: 2026년 1월 27일 ClassNK로부터 자율선박 인증을, 2월 9일 일본 국토교통성으로부터 정기검사 합격을 획득하여 모든 법적 요건 완료</p><p>• **니폰재단의 MEGURI2040 프로젝트의 진전**: 2020년 시작된 프로젝트로 2040년까지 국내선의 50% 무인운항 달성을 목표로 하며, 현재 세 번째 시범선박의 인증 완료</p><p>• **운항 노선 및 시스템 특성**: 홋카이도 쿠시로항과 도쿄 북부 히타치항 간 국내노선에서 낙농 및 농산물 운송 담당, 어선 통행과 악천후·안개 등 도전적 환경에서 평균 96% 운영율 달성</p><p>• **개발 팀 및 기술 개선**: K LINE, Japan Radio, YDK Technologies의 협업으로 2023년부터 개발 시작, 2025년까지 자동속력제어시스템 개발 포함 지속적 개선</p><p>• **해상 인력 부족 대응**: 일본의 고령화·감소하는 해사 인력 대비, 인적 오류로 인한 해상사고 예방, 해기사의 업무 경감이 주요 추진 목표</p><h3>Key Quotes</h3><p>• "The 6,890-dwt RoRo Hokuren Maru No. 2, owned and operated by Kawasaki Kisen Kaisha, Ltd. ("K" LINE), completed a series of certifications in January and February on its way to becoming the first autonomous RoRo." (가와사키기센카이샤가 운영하는 호쿠렌마루 2호가 1월과 2월의 일련의 인증을 완료하여 일본 최초의 자율운항 RoRo가 됨)</p><p>• "They reported the system achieved an average operational rate of 96 percent in the sea area during its first tests." (초기 시험에서 해역 평균 운영율 96% 달성을 보고)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040." (니폰재단이 2040년까지 국내선의 50% 무인운항 달성을 목표로 2020년 MEGURI2040 프로젝트 시작)</p><h3>Technical Insights</h3><p>• **COLREG 준수 및 자동항법 시스템**: 센서 기반 데이터 수집 및 처리를 통한 자동항법 시스템은 국제해사법규(COLREG) 준수와 혼잡해역(도쿄만) 및 악천후 환경에서의 안전한 운항 능력 입증이 핵심 요건</p><p>• **ClassNK 자율선박 인증 기준**: 국제해사기구(IMO)의 MASS(Maritime Autonomous Surface Ships) 규제 프레임워크 선행 구현으로, 정부 인증과 선급사 인증의 이중 검증 체계 완성</p><p>• **국내선 자율화의 산업적 의의**: RoRo는 일본 경제에서 중요한 역할을 하는 선종으로, 장거리 국제항로보다 규칙적 국내항로가 자율운항 기술 검증에 유리하며 경제성 입증에 적합</p><p>• **해운산업 인력 문제 해결 모델**: 고령화 사회의 해사 인력 부족을 자율화로 대응하는 사례로, IMO 2050 탄소중립 목표와 함께 고효율·저비용 운영 모델 구축에 기여할 수 있는 기술적 기반 마련</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **사건 개요**: 2024년 10월 14일 새벽 캘리포니아 카르퀴네즈 해협의 마르티네즈 정유소 부두에서 원유 탱커 플라타노스(Platanos, 820피트)가 이안(undocking) 중 선착장 돌핀에 충돌하여 50만 달러 이상의 피해 발생</p><p>• **사고 원인**: 항해사 파일럿이 조종선(assist tug) 2척의 위치를 참고 카드에 잘못 기록하여 선수 튜그 명령을 선미 튜그에 전달, 선미가 부두 쪽으로 급속 접근</p><p>• **인명 및 오염**: 인명피해 없음, 해양오염 없음, 선체 관통 손상만 발생(선수 펌프실 void space)</p><p>• **파일럿 요인**: 30년 이상 경력의 경험 많은 파일럿도 실수 범위 내 포함, 사고 전 4.5시간 수면에 새벽 0412시 시간대 순환리듬 저점에서 발생</p><p>• **NTSB 판정**: 기계적 결함 없음, 기상 양호, 고전적인 "slip/lapse" 유형의 인적 오류로 판정, 선장의 경고에도 불구하고 교정 불가능한 상황으로 악화</p><h3>Key Quotes</h3><p>• **"The bow [was] rapidly pulled away from the pier, causing the stern of the ship to move toward the pier"** (선수가 부두에서 급속히 멀어지면서 선미가 부두 쪽으로 이동하게 됨 - 반대 방향 튜그 명령의 결과)</p><p>• **"The master did recognize the developing risk and warned the pilot that the stern was 'too close' roughly 30 seconds before impact"** (선장이 충돌 약 30초 전 선미가 너무 가깝다고 경고했으나 이미 교정 불가능한 상태)</p><p>• **"The pilot had written the tug positions incorrectly on a handheld 'radio card' used for quick reference while maneuvering from the bridge wing"** (파일럿이 선교익에서 신속 참조용 휴대용 라디오 카드에 튜그 위치를 잘못 기록)</p><h3>Technical Insights</h3><p>• **조종선 명령 체계의 취약성**: 음성 기반 튜그 명령에서 참고 자료의 오류가 직접적인 선박 응력(stern drift)으로 즉시 전환되며, 암흑 중 가시성 제한으로 인한 실시간 교정 불가능성 노출</p><p>• **인적 오류의 극심한 위험성**: COLREG 및 해상안전 규정은 기계적 장애를 중심으로 하나, 30년 경력 파일럿도 일상적 작업의 "slip/lapse"에 취약함을 입증 - 자동화/CAS(Collision Avoidance System) 도입의 필요성 강화</p><p>• **IMO/해운 산업 정책 시사점**: 항구 조종 절차의 이중 점검(dual verification), 디지털 튜그 포지셔닝 시스템(GPS 기반 자동 표시), 파일럿 피로도 관리(fatigue risk management) 강화 규정 도입 필요성 증대</p><p>• **순환리듬(Circadian Rhythm) 조종 안전**: 0300-0500 시간대 저점에서의 조종 작업 제한 또는 강화된 감시체계 도입으로 조종 오류 감소 가능 - 자율운항선(MASS) 도입 시 인적 피로 요인 완전 제거의 이점 부각</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• **IQUA Robotics가 개발한 ESCABVENTS 프로젝트가 자율수중로봇(AUV) 기반 선박 선체검사 개념증명 성공**<br>• **Sparus II AUV를 활용하여 다양한 선박 유형(어선, 연구선, 방위사업선)에 대한 실해역 시험 완료**<br>• **센티미터 단위 해상도의 3D 재구성으로 부식, 생물부착, 도료손상 등 식별 가능 확인**<br>• **운영자 개입 없이 체계적 선체검사 수행으로 다이버 및 유선로봇(ROV) 대체 가능성 입증**<br>• **복잡한 기하학 구조(선미부, 프로펠러) 및 광 대비 문제 등 추가 개선과제 식별**<br>• **선박 예방정비 효율성 개선뿐만 아니라 항만보안 및 위협감지 분야로 활용 확대 예상**</p><h3>Key Quotes</h3><p>• "The use of an autonomous vehicle like the Sparus II AUV allows for systematic hull scanning without direct intervention from an operator in piloting." (Sparus II AUV와 같은 자율수중로봇을 활용하면 운영자의 직접적인 조종 개입 없이 체계적인 선체 검사가 가능하다는 의미)</p><p>• "The results show that it is possible to obtain 3D reconstructions with centimetric resolution, facilitating the identification of corrosion, marine fouling (biofouling), or paint damage." (선체 부식, 생물부착, 도료손상 등을 식별하는 데 도움이 되는 센티미터 단위 해상도의 3D 재구성이 가능함을 보여줌)</p><h3>Technical Insights</h3><p>• **자율수중로봇의 해양 인프라 검사 적용으로 기존 다이버 및 유선로봇 운영 비용 및 안전위험 감소 기대**<br>• **선체 선회부(stern) 및 고대비 조명 환경에서의 음향반사 및 이미지 언더노출 문제는 향후 AI 기반 자동추적 및 다중센서 융합으로 해결 방향**<br>• **EU의 NextGenerationEU 지원 하에 스페인 선박산업 경쟁력 강화 프로젝트로 추진되며, 해양방위사업 및 항만보안 활용까지 확대 가능한 전략적 기술**<br>• **IMO의 선박 예방정비 및 구조검사 기준(SOLAS, MARPOL)과의 연계를 통해 자율로봇 검사의 규제 표준화 필요성 대두**</p></div>`,
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
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>• 일본 최초의 자율항행 RoRo선박 호쿠렌마루 2호가 2026년 1월-2월 인증 완료, 상업운항 면허 취득 달성<br>• 니혼재단의 'MEGURI2040' 프로젝트 일환으로 가와사키 기센(K LINE) 소유, 홋카이도 쿠시로항-히타치항 정기항로 운영<br>• 6,890톤급 6년식 선박에 AI 센서 탑재, 초기 운용률 96% 달성, 2023년부터 2년간 개발 진행<br>• ClassNK 자율선박 인증(1월 27일), 일본 국토교통성 통과검사(2월 9일) 모두 완료<br>• 2040년까지 국내 선박 50% 무인운영 목표, 선원 고령화·인력 부족 및 인적오류 사고 감소 목표</p><h3>Key Quotes</h3><p>• "The 6,890-dwt RoRo Hokuren Maru No. 2...became the first vessel of its kind to complete the licensing requirements to conduct fully autonomous navigation during commercial operations." <br>  (6,890톤급 RoRo 호쿠렌마루 2호가 상업운항 중 완전 자율항행 인증을 취득한 첫 RoRo선박이 되었음)</p><p>• "They reported the system achieved an average operational rate of 96 percent in the sea area during its first tests."<br>  (초기 실해역 시험에서 시스템의 평균 운용률이 96%에 도달했음을 보고)</p><p>• "The Nippon Foundation launched the project in 2020, known as MEGURI2040, with the goal of achieving 50 percent unmanned operation of domestic vessels by 2040."<br>  (니혼재단이 2020년 MEGURI2040 프로젝트를 시작해 2040년까지 국내 선박 50% 무인운영 달성 목표 설정)</p><h3>Technical Insights</h3><p>• **자율항행 기술 진화**: K LINE·Japan Radio·YDK Technologies 컨소시엄이 센서 기반 AI 항법 시스템 개발, 도쿄만 혼잡 해역·장거리(500마일)·18시간 이상 내구성 테스트 통과로 실운용 준비 완료<br>• **규제 체계 정립**: ClassNK 선급 인증과 국토교통성 통과검사 이원화 승인 시스템 구축으로 자율선박 상업운항의 법적 기초 마련<br>• **산업적 파급력**: RoRo 화물선의 자율화는 농산물·축산물 수송 효율화, 선원 부족 해소, 악천후·안개 해역 안전성 향상으로 지역 공급망 안정화에 기여 예상<br>• **IMO COLREG 적용**: 어선 밀집 항로에서의 충돌회피, 기상악화 자동속도 제어 등 자율시스템이 국제해상충돌방지규칙 준수 능력 입증, 글로벌 자율선박 표준화 참고사례 제공</p></div>`,
      tags: ["Autonomous Ships","RoRo Vessel","Japan Maritime","MEGURI2040 Project","Unmanned Operations"],
      link: "https://maritime-executive.com/article/japan-certifies-its-first-roro-with-autonomous-navigation",
      coords: [141.5731,35.6762],
      location: "Japan (Tokyo/Hokkaido route)"
    }
  ]
});
