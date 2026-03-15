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

// Auto-collected: 2026-02-27
addEvents({
  "2026-02-27": [
    {
      type: "news",
      title: "Fully certified Reach Remote USV to inspect Gassco's subsea pipelines",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 27, 2026",
      content: `<p>Norway's Reach Subsea has won a contract to perform external inspection of subsea pipelines using a fully certified Reach Remote unmanned surface vehicle (USV) for Gassco.</p>`,
      tags: ["USV","autonomous vessels","subsea inspection","unmanned surface vehicle","pipeline inspection","Norway"],
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

// Auto-collected: 2026-02-27
addEvents({
  "2026-02-27": [
    {
      type: "news",
      title: "Fully certified Reach Remote USV to inspect Gassco's subsea pipelines",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 27, 2026",
      content: `<p>Norway's Reach Subsea has won a contract to perform external inspection of subsea pipelines using a fully certified Reach Remote USV (unmanned surface vessel), demonstrating advanced autonomous maritime technology for offshore energy infrastructure monitoring.</p>`,
      tags: ["USV","autonomous vessels","subsea inspection","unmanned surface vessel","offshore energy","pipeline inspection"],
      link: "https://www.offshore-energy.biz/fully-certified-reach-remote-usv-to-inspect-gasscos-subsea-pipelines/",
      coords: [8.47,60.47],
      location: "Norway"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-02-27
addEvents({
  "2026-02-27": [
    {
      type: "news",
      title: "Fully certified Reach Remote USV to inspect Gassco's subsea pipelines",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · Feb 27, 2026",
      content: `<p>Norway's Reach Subsea has won a contract to perform external inspection of subsea pipelines using a fully certified Reach Remote unmanned surface vehicle (USV) for Gassco.</p>`,
      tags: ["USV","Unmanned Surface Vehicle","Autonomous","Pipeline Inspection","Subsea","Gassco","Reach Subsea"],
      link: "https://www.offshore-energy.biz/fully-certified-reach-remote-usv-to-inspect-gasscos-subsea-pipelines/",
      coords: [8.4689,60.472],
      location: "Norway"
    }
  ]
});

// ── Backfill: 2026-03-02 ~ 03-07 (Manual) ──

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

// Auto-collected: 2026-03-10
addEvents({
  "2026-03-10": [
    {
      type: "accident",
      title: "Coast Guard Responding to Large Barge Fire in Delaware Bay",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-10",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Barge-fire-delaware.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2026년 3월 10일 미국 동부 델라웨어만에서 예인선 Douglas J가 예인 중이던 폐금속 적화 바지선이 화재를 일으키는 사건이 발생했다. 미국 해안경비대(USGS) 및 지역 소방기관들이 즉시 대응에 나섰으며, 화재 바지선을 모리스 리버 코브 인근 약 2마일 떨어진 지점으로 예인하여 주요 해상교통로로부터 격리했다. 현재까지 인명피해는 보고되지 않았으나 화재 원인은 조사 중이며, 해안경비대는 해상교통 안전을 위해 안전 해역(Safety Zone)을 설정하고 항해 공고를 발령했다. 이 사건은 2022년 같은 지역에서 발생한 26시간 지속된 대규모 바지선 화재 사건과 유사한 양상을 보여준다.</p><h3>Key Quotes</h3><p><li>"The U.S. Coast Guard and multiple partner agencies are responding to a barge fire in Delaware Bay on Tuesday after a tug reported that the vessel it was towing had caught fire." (미국 해안경비대와 여러 파트너 기관들이 예인선이 예인 중인 바지선이 화재를 일으켰다는 신고를 받고 델라웨어만의 바지선 화재에 대응하고 있다.)</li></p><p><li>"Authorities are towing the burning barge to a position about two miles off Maurice River Cove, New Jersey, in an effort to move the incident away from the main shipping channel while firefighting operations continue." (당국은 화재 바지선을 모리스 리버 코브 인근 약 2마일 떨어진 지점으로 예인하여 소방 작업이 진행되는 동안 사고 지점을 주요 해상교통로에서 벗어나게 하고 있다.)</li></p><h3>Technical Insights</h3><p>이번 사건은 내항 바지선 운영에서의 화재 방지 및 긴급 대응 체계의 중요성을 재확인시켜준다. 특히 폐금속 적화 바지선의 경우 자동 발화 위험이 높으므로 적절한 통풍, 습도 관리, 정기적인 화물 상태 점검이 필수적이다. 2022년의 선행 사건과 유사하게 델라웨어만의 혼잡한 항만 지역에서 화재가 발생하면 COLREG 준칙 준수뿐 아니라 IMO의 예인선 안전 지침(IMO Guidelines on Towing) 및 해상 환경 보호 규정이 중요하게 작동한다. 본 사건에서 빠른 격리와 안전 해역 설정은 해상교통 혼란을 최소화하고 2차 사고를 방지하는 우수한 대응 사례로 평가되며, 향후 내항 화물 바지선 운영자들은 화재 감지·진압 시스템 개선과 선원 훈련 강화가 필요하다.</p></div>`,
      tags: ["Barge Fire","Delaware Bay","Coast Guard Response","Scrap Metal Cargo"],
      link: "https://gcaptain.com/coast-guard-responding-to-large-barge-fire-in-delaware-bay/",
      coords: [-75.5,39.1],
      location: "Delaware Bay, New Jersey"
    },
    {
      type: "accident",
      title: "Barge Catches Fire in Delaware Bay",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-10",
      image: "https://images.marinelink.com/images/maritime/w800/source-social-168806.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>2026년 3월 10일 오전 8시 20분경 델라웨어 만에서 예인선 Douglas J가 끌고 있던 선적 금속 자재를 운반하는 바지선에서 화재가 발생했습니다. 미국 해안경비대(Coast Guard)가 즉시 대응에 나섰으며, 화재 위험을 주 항로에서 제거하기 위해 뉴저지 모리스 강 만 인근 약 2마일 거리로 바지선을 예인했습니다. 현재까지 인명피해는 보고되지 않았으며, 델라웨어 만 및 주변 지역의 여러 소방 기관과 긴급 관리 기관들이 대응에 참여하고 있습니다. 화재의 원인은 현재 조사 중입니다.</p><h3>Key Quotes</h3><br><li>"The barge was carrying scrap metal." (바지선은 금속 폐기물을 운반 중이었습니다.)</li><br><li>"It has been towed to approximately 2 miles off Maurice River Cove, New Jersey, to remove the threat from the main ship channel." (주요 항로로부터의 위협을 제거하기 위해 뉴저지 모리스 강 만 인근 약 2마일 거리로 예인했습니다.)</li></p><h3>Technical Insights</h3><br>금속 폐기물 운반 바지선의 화재 발생은 화물 특성에 따른 자동 발화 위험성과 적절한 화물 관리의 중요성을 시사합니다. 델라웨어 만과 같은 혼잡한 항로에서의 사고 대응은 신속한 위험 격리가 주요 항로 안전을 유지하는 데 필수적임을 보여줍니다. 자율운항선박(MASS) 시대에는 화재 감지 및 자동 회피 기능이 더욱 중요해질 것이며, IMO의 국제해상안전관리규칙(ISPS) 및 국제안전관리규칙(ISM)에 따른 화물 안전 프로토콜 준수가 이러한 사고 예방에 핵심적 역할을 할 것으로 예상됩니다.</p></div>`,
      tags: ["Fire","Barge","Delaware Bay","Coast Guard Response"],
      link: "https://www.marinelink.com/news/barge-catches-fire-delaware-bay-536804",
      coords: [-75.5,39.1],
      location: "Delaware Bay, New Jersey"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-11
addEvents({
  "2026-03-11": [
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Attacked in Strait of Hormuz, 3 Crew Missing",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-11",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Hormuz-attack-seafarer.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>태국 선적 벌크선 메유리 나리(Mayuree Naree, 30,000톤)가 2026년 3월 11일 호르무즈 해협에서 미사일 공격을 받아 기관실 화재가 발생하여 승무원 20명이 대피했으나 3명이 실종되었다. 공격으로 인해 선박이 심각한 손상을 입고 오만 해역으로 표류했으며, 같은 날 일본 컨테이너선 ONE Majesty와 마셜 제도 선적 벌크선 Star Gwyneth 등 최소 3척이 추가로 피격되었다. 이는 2월 28일 미국과 이스라엘의 이란 공격 이후 확대되는 해상 보안 위기의 일부로, 상선이 지정학적 분쟁의 최전선에 노출되어 있음을 보여준다.</p><h3>Key Quotes</h3><p><li>"These ships should go through the Strait of Hormuz and show some guts. There's nothing to be afraid of… they have no Navy, we sunk all their ships." (상선들이 호르무즈 해협을 통과해야 하고 용기를 보여야 한다. 두려워할 것이 없다. 그들은 해군이 없고, 우리가 그들의 배를 모두 격침시켰다.)</li></p><p><li>"A merchant mariner on the front lines of a conflict, caught between global trade and geopolitics." (상인 선원이 국제 무역과 지정학 사이에서 분쟁의 최전선에 놓여 있다.)</li></p><h3>Technical Insights</h3><p>호르무즈 해협은 전 세계 석유 해상 운송량의 약 21%가 통과하는 전략적 요충지로, 현재의 지정학적 긴장이 상업 해운에 미치는 영향은 심각하다. 메유리 나리 사건에서 확인되는 기관실 화재는 선박의 생명선을 차단하는 공격으로, SOLAS 국제 해상 안전 규약의 화재 대응 절차와 기관실 구획화(compartmentalization) 설계의 중요성을 재조명한다. 현재의 불안정한 해역에서 운항하는 선박들은 강화된 해상 보안 프로토콜, 실시간 위치 추적(AIS 모니터링), 그리고 비상 대피 절차에 대한 정기적인 훈련을 필수적으로 실시해야 한다. 자율운항선의 도입이 증가하는 추세에서, 분쟁 지역 운항 시 원격 제어 및 회피 기능의 강화가 향후 중요한 기술 개발 과제가 될 것으로 예상된다.</p></div>`,
      tags: ["Attack","Strait of Hormuz","Bulk Carrier","Missing Crew","Iran Conflict"],
      link: "https://gcaptain.com/photos-from-lifeboat-show-human-cost-of-hormuz-crisis/",
      coords: [56.5,26.5],
      location: "Strait of Hormuz"
    },
    {
      type: "news",
      title: "Iran Warns of $200 Oil Amid Merchant Ship Attacks and Regional Conflict",
      source: "gCaptain/Reuters",
      sourceMeta: "gcaptain.com · 2026-03-11",
      image: "https://gcaptain.com/wp-content/uploads/2024/10/2024-10-06T115343Z_396684389_RC2YEAA974XL_RTRMADP_3_ISRAEL-PALESTINIANS-IRAN-OIL-MINISTER-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>이란이 페르시안 만에서 상선 3척을 공격하면서 배럴당 $200의 유가를 경고했으며, 국제에너지기구(IEA)는 전략비축유를 방출할 것을 권고했다. 미국과 이스라엘의 공중폭격으로 촉발된 분쟁으로 약 2,000명이 사망했고, 호르무즈 해협이 채광으로 봉쇄되면서 전 세계 석유 공급의 약 20%가 위험에 처했다. 유가는 주 초 배럴당 거의 $120까지 급등한 후 $90 근처에서 안정되었으나, 수요일에 4% 이상 상승했다. 현재까지 호르무즈 해협을 안전하게 통과할 수 있는 선박이 없는 상태이며, 이란이 채널에 약 12개의 기뢰를 배치한 것으로 알려졌다. 중동 지역의 항구와 도시들이 드론 및 미사일 공격의 대상이 되고 있어, 글로벌 해운 및 에너지 시장에 심각한 혼란이 초래되었다.</p><h3>Key Quotes</h3><p><li>"Any time I want it to end, it will end," (언제든지 원하면 전쟁을 끝낼 수 있다는 트럼프 대통령의 발언)</li><br>  <br><li>"So far there has been no sign that ships can safely sail through the Strait of Hormuz, the now-blockaded channel along the Iranian coast that serves as a conduit for around a fifth of the world's oil." (현재까지 호르무즈 해협을 통해 선박이 안전하게 운항할 수 있다는 신호가 없으며, 이 해협은 세계 석유의 약 5분의 1을 운송하는 경로이다)</li></p><p><li>"if the ports were threatened, economic and trade centers in the region would be 'legitimate targets.'" (항구가 위협받으면 지역의 경제 및 무역 센터가 '정당한 목표'가 될 것이라는 이란 군부의 경고)</li></p><h3>Technical Insights</h3><p>호르무즈 해협의 기뢰 배치와 상선 공격은 국제해사기구(IMO)의 SOLAS(국제해상인명안전규칙)와 COLREG(해상충돌방지규칙) 준수를 실질적으로 불가능하게 만들고 있다. 전 세계 석유 공급의 20%가 차단되는 상황에서 해운 업계는 대체 해로(아프리카 우회, 술루 해협 등)로의 우회 운항을 강요받고 있으며, 이는 운송 비용 증가와 배송 기간 연장을 초래한다. 현재의 지정학적 위험으로 인해 자율운항선박(MASS, Maritime Autonomous Surface Ships) 기술의 개발 필요성이 더욱 대두되고 있으며, 특히 위험 해역에서의 원격 조종 및 AI 기반 경로 최적화 기술이 해운 산업의 생존력 향상에 필수적이다. IMO는 현재의 해상 분쟁 상황에서 해운 보안과 선박 안전 프로토콜 강화에 관한 지침 개정을 검토해야 할 시점이다.</p></div>`,
      tags: ["Iran","Oil Markets","Strait of Hormuz","Merchant Ships","Geopolitical Risk","Energy Crisis"],
      link: "https://gcaptain.com/iran-warns-world-to-brace-for-200-oil/",
      coords: [53.9195,25.2048],
      location: "Persian Gulf / Strait of Hormuz"
    }
  ]
});

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery: 100+ injuries and 1 fatality",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2023년 11월 4일 비스케이만에서 승객선 Spirit of Discovery가 악천후 중 추진력을 상실하는 중대 사고가 발생했습니다. 이 사건으로 100명 이상의 승객이 부상을 입었으며, 그 중 심각한 부상을 입은 8명의 승객이 입항 후 병원에 직송되었고 1명이 결국 사망했습니다. MAIB(해사사고조사국) 보고서 6-2026에 따르면, 해양청 및 분류사회, 추진시스템 제조업체, 크루즈라인협회 등에 대해 전자 경사계 설치 의무화, 조작 매뉴얼 개선, 고급 외상 생명유지술 자격을 갖춘 의료진 증원 등의 권고사항이 제시되었습니다.</p><h3>Key Quotes</h3><p><li>"Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay." (2023년 11월 4일 오후 12시 30분 직후, 승객선 Spirit of Discovery가 비스케이만을 횡단 중 악천후에서 추진력을 상실했습니다)</li></p><p><li>"Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries." (심각한 부상을 입은 8명의 승객이 입항 후 즉시 병원으로 직송되었으며, 이 중 1명이 나중에 부상으로 인해 사망했습니다)</li></p><p><li>"Recommendations have been made to the Maritime and Coastguard Agency to propose that international carriage requirements include electronic inclinometers" (해양청에 국제운송 기준에 전자 경사계 포함을 제안하도록 권고되었습니다)</li></p><h3>Technical Insights</h3><p>본 사고는 악천후(높은 파도와 선박 경사)에서 추진 시스템의 고장으로 인한 심각한 결과를 초래한 전형적인 사례입니다. 전자 경사계(electronic inclinometer) 의무 장착 권고는 선박의 실시간 경사 모니터링을 통해 기관실 및 선교에서 해상 상태를 즉시 파악하고 적절한 조치를 취할 수 있도록 하는 기술적 개선방안입니다. Pod 추진시스템의 신뢰성 강화와 함께 선박 가구류(furniture) 고정 기준 개선, 승무원 훈련 강화는 해상 재난 시 2차 피해를 줄이는 중요한 대책입니다. 이는 IMO의 해사안전위원회(MSC)에서 다루는 승객선 안전 기준(SOLAS) 개정 논의로 이어질 가능성이 높으며, 크루즈 산업의 안전 문화 고도화를 촉구하는 신호입니다.</p></div>`,
      tags: ["propulsion failure","heavy weather","Bay of Biscay","passenger vessel","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [45.5,-15],
      location: "Bay of Biscay"
    },
    {
      type: "accident",
      title: "Spirit of Discovery Propulsion Loss in Bay of Biscay - MAIB Investigation Report",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-12",
      image: "https://images.marinelink.com/images/maritime/w800/source-168843.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2023년 11월 4일 크루즈선 Spirit of Discovery가 비스케이만에서 악천후 중 추진력을 상실한 해난사고에 대한 영국해양사고조사위원회(MAIB) 조사 보고서가 공개되었다. 이 사건으로 100명 이상의 승객이 부상을 입었으며 1명이 사망하였다. 주요 원인은 심한 동요로 인한 프로펠러 노출, 자동 셧다운 및 추진 포드의 예기치 않은 90도 회전이었다. 조사에서는 악천후 항로 선택의 부족한 검토, 대량 피해자 사건 대응 계획 미이행, 의료진 부족 등 다층적인 안전 결함이 확인되었다. MAIB는 국제 해상 운송 요건 개선, 제조사의 고객 권고 발행, 크루즈 업계의 의료인력 및 선내 가구 고정 기준 강화를 권고했다.</p><h3>Key Quotes</h3><p><li>"While cruising remains safe and accidents rare, Spirit of Discovery's violent motion in heavy weather caused injury to over 100 passengers and, very sadly, one passenger lost their life as a result of injuries sustained." (크루징은 여전히 안전하고 사고는 드물지만, Spirit of Discovery의 악천후에서의 격렬한 동요로 100명 이상의 승객이 부상을 입었고, 매우 안타깝게도 1명의 승객이 입은 부상으로 생명을 잃었다.)</li></p><p><li>"A complex sequence of events led to this accident, and we have identified a number of clear lessons around vessel safety, crew decision-making and medical response." (복잡한 사건의 연쇄가 이 사고를 초래했으며, 우리는 선박 안전, 승무원 의사결정, 의료 대응에 관한 다수의 명확한 교훈을 확인했다.)</li></p><h3>Technical Insights</h3><p>본 사건은 추진 시스템의 동적 응답 특성과 악천후 항해 중 선박 모션 제어의 복합성을 보여주는 중요한 사례이다. 프로펠러 노출에 따른 과속(overspeed) 및 자동 셧다운은 포드 추진 시스템의 알려진 취약점이며, 제조사의 상세한 운영 매뉴얼 및 승무원 훈련이 매우 중요함을 시사한다. 전자 경사계(electronic inclinometer)의 국제 의무 장착 권고는 실시간 선박 동요 모니터링을 통한 사전 예방적 항로 결정을 가능하게 할 것이다. 또한 대량 피해자 대응 계획(mass casualty incident plan)의 실질적 이행과 고급 외상 생명 구조 자격(ATLS) 의료진 확보는 선박 안전 문화의 중요한 구성 요소로서, IMO와 국제 크루즈 산업의 규제 강화가 시급한 상황이다.</p></div>`,
      tags: ["propulsion loss","heavy weather","passenger vessel","Bay of Biscay","casualties","MAIB investigation"],
      link: "https://www.marinelink.com/news/report-spirit-discovery-tragedy-released-536865",
      coords: [0,0],
      location: "Bay of Biscay, France"
    }
  ]
});

// Auto-collected: 2025-12-27
addEvents({
  "2025-12-27": [
    {
      type: "accident",
      title: "Coral Adventurer Grounding off Papua New Guinea - ATSB Preliminary Report",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-12",
      image: "https://images.marinelink.com/images/maritime/w800/source-168852.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2025년 12월 27일, 호주 국적의 93미터 크루즈선 Coral Adventurer가 파푸아뉴기니 북동부 해안의 드레거하펜(Dregerhafen) 인근 암초에 좌초했습니다. 탑승한 승객 80명과 승무원 44명은 부상이 없었습니다. ATSB(호주 교통안전청) 예비 보고서에 따르면, ECDIS 경로 안전 확인 문제로 인한 지연, 자동항법장치와 수동조종 전환, 예상보다 빠른 선속 증가, 그리고 어두운 환경에서의 시각적 위치 확인 실패가 복합적으로 작용했습니다. 주 원인은 항해사의 경로 변경 시도 중 발생한 ECDIS 시스템 문제와 이후의 일련의 조종 오류입니다.</p><h3>Key Quotes</h3><p><li>"During this hard manual turn, the ship slowed considerably, to 3.8 knots. The chief mate, perceiving the loss of speed was due to a strong current, increased the RPM setting of both Azipull thrusters." </li><br>(수동 조종 중 선박 속력이 3.8노트로 현저히 저하되자, 항해사는 이를 강한 해류 때문이라고 판단하여 아지풀 추진기의 RPM을 증가시켰습니다.)</p><p><li>"At this point, in dark conditions and without navigational aids or lights ashore, the chief mate reported being unable to visually identify the surrounding topography in relation to what was being shown on the ECDIS."</li><br>(어두운 조건에서 해안의 항해 보조 장비나 조명이 없는 상황에서, 항해사는 ECDIS에 표시된 정보와 실제 주변 지형을 시각적으로 대응시킬 수 없었습니다.)</p><h3>Technical Insights</h3><p>본 사건은 ECDIS 시스템 운영 중 발생한 인적 오류와 함선의 역학적 특성 이해 부족이 복합적으로 작용한 전형적인 사례입니다. ECDIS의 경로 안전 확인 기능으로 인한 지연은 항해사의 상황 인식(Situational Awareness)을 저하시켰고, 자동항법에서 수동 조종으로의 전환 시 선속 관리 부실로 인해 예상과 다른 회전성능을 초래했습니다. IMO STCW 규정상 야간 항해 중 육안 확인이 불가능한 상황에서 ECDIS 정보에 과도하게 의존하는 것은 위험하며, 항해사는 동적 위치 추정(Dead Reckoning)과 타향기(Tactical Diameter) 계산을 통해 항상 선박의 실제 위치를 파악해야 합니다. 향후 ECDIS 사용자 교육 강화 및 자동항법 시스템의 신뢰성 향상이 필요합니다.</p></div>`,
      tags: ["grounding","cruise ship","navigation error","ECDIS","Papua New Guinea"],
      link: "https://www.marinelink.com/news/atsb-releases-preliminary-report-coral-536873",
      coords: [145.5,-5.5],
      location: "Dregerhafen, Papua New Guinea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-11
addEvents({
  "2026-03-11": [
    {
      type: "accident",
      title: "Thai Bulk Carrier Mayuree Naree Attacked in Strait of Hormuz; Three Crew Missing",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-11",
      image: "https://gcaptain.com/wp-content/uploads/2026/03/Hormuz-attack-seafarer.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2026년 3월 11일, 태국 국적의 30,000톤급 벌크선 Mayuree Naree호가 호르무즈 해협을 통과 중 미사일 공격을 받아 기관실 화재가 발생했으며, Precious Shipping사 소유의 당 선박은 승무원 20명을 대피시켰으나 3명이 여전히 실종된 상태이다. 이번 사건은 이란의 보복 공격으로 추정되며, 같은 날 일본 컨테이너선 ONE Majesty호와 Marshall Islands 국적의 Star Gwyneth호 등 최소 3척의 선박이 추가로 피격되었다. 미국-이스라엘의 이란 공격 이후 2월 28일부터 본격화된 호르무즈 해협 해상 위기는 상선들과 선원들에게 심각한 안전 위협을 초래하고 있다.</p><h3>Key Quotes</h3><p><li>"These ships should go through the Strait of Hormuz and show some guts. There's nothing to be afraid of… they have no Navy, we sunk all their ships." (상선들은 호르무즈 해협을 통과해야 하며, 용기를 보여야 한다는 트럼프 대통령의 발언으로, 위험을 과소평가하는 정치적 메시지를 전달했다)</li></p><p><li>"A merchant mariner on the front lines of a conflict, caught between global trade and geopolitics." (선원들이 국제 무역과 지정학적 갈등 사이에서 전쟁의 최전선에 놓여 있다는 해사 산업의 현실을 설명한 표현)</li></p><h3>Technical Insights</h3><p>호르무즈 해협은 국제해운의 20% 이상이 통과하는 전략적 해로로서, 현재의 지정학적 갈등 상황에서 상선들에 대한 무차별적 공격은 SOLAS(국제해상인명안전협약) 및 COLREG의 보호 수단만으로는 대응 불가능한 수준의 위협을 나타낸다. IMO는 이 지역의 상선에 대한 무장 호위 및 해상 교통 안전 조치의 강화를 권고해야 하며, 특히 기관실 피해에 따른 화재 발생 시 신속한 승무원 대피 프로토콜의 정립이 시급하다. 현재의 상황은 자율운항선박(MASS) 기술 도입 시 원격 운영 및 무인화의 중요성을 부각시키는 동시에, 분쟁 지역 해로에 대한 보험료 상승과 해운 기업들의 운항 경로 우회 결정으로 이어질 가능성이 높다.</p></div>`,
      tags: ["maritime attack","Strait of Hormuz","Iran conflict","bulk carrier","crew casualties"],
      link: "https://gcaptain.com/photos-from-lifeboat-show-human-cost-of-hormuz-crisis/",
      coords: [56.24,26.12],
      location: "Strait of Hormuz, Persian Gulf"
    },
    {
      type: "news",
      title: "Iran Warns of $200 Oil as Merchant Ships Hit in Gulf Conflict",
      source: "gCaptain",
      sourceMeta: "gcaptain.com · 2026-03-11",
      image: "https://gcaptain.com/wp-content/uploads/2024/10/2024-10-06T115343Z_396684389_RC2YEAA974XL_RTRMADP_3_ISRAEL-PALESTINIANS-IRAN-OIL-MINISTER-scaled.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>이란이 페르시안만에서 상선 3척을 공격하면서 배럴당 200달러의 유가를 경고했다. 미국과 이스라엘의 공동 공습으로 촉발된 분쟁이 약 2,000명의 사망자를 낳았으며, 호르무즈 해협이 사실상 봉쇄되어 세계 석유의 5분의 1이 통과하는 해로가 차단되었다. 국제에너지기구(IEA)는 유가 충격을 완화하기 위해 전략비축유의 대규모 방출을 권고했으며, 유가는 주초 거의 120달러까지 급등했다가 현재 90달러 부근에서 진정되었다. 호르무즈 해협에는 약 12개의 기뢰가 배치되어 있어 해운 안전이 심각히 위협받고 있다.</p><h3>Key Quotes</h3><p><li>"Any time I want it to end, it will end." (트럼프 대통령의 발언으로 분쟁 종료 시점이 불확실함을 시사)</li><br><li>"So far there has been no sign that ships can safely sail through the Strait of Hormuz, the now-blockaded channel along the Iranian coast that serves as a conduit for around a fifth of the world's oil." (호르무즈 해협의 해운 차단이 세계 에너지 공급망에 미치는 심각한 영향)</li></p><h3>Technical Insights</h3><p>이 사건은 해상 운송 보안과 해로 안전에 새로운 차원의 위협을 제시한다. 호르무즈 해협의 기뢰 배치와 함정 공격은 COLREG(해상충돌방지규칙)의 적용을 초월하는 국가 간 분쟁 상황으로, 자율항해 선박의 운영 환경이 급격히 악화되었음을 의미한다. IMO와 해운산업은 고위험 해역에서의 자동화 네비게이션 시스템의 신뢰성과 위험 회피 능력을 재평가해야 하며, 군사적 충돌 지역에서의 해상교통관리 프로토콜 강화가 필수적이다. 변동성 높은 지정학적 환경에서 선박 운영자들은 실시간 위협 정보 시스템과 원격 통제 옵션을 갖춘 하이브리드 네비게이션 시스템의 도입을 검토해야 한다.</p></div>`,
      tags: ["Iran","Oil Markets","Merchant Shipping","Strait of Hormuz","Geopolitical Risk"],
      link: "https://gcaptain.com/iran-warns-world-to-brace-for-200-oil/",
      coords: [53.92,26.13],
      location: "Persian Gulf"
    }
  ]
});

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery: 100+ injuries, 1 fatality in Bay of Biscay",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2023년 11월 4일 비스케이만에서 승객선 Spirit of Discovery호가 악천후 중 추진력을 상실하여 100명 이상의 탑승객이 부상당했으며 1명이 사망한 중대 해상사고가 발생했습니다. 영국 해사사고조사청(MAIB)의 조사보고서(6-2026)에 따르면 정오 직후 발생한 이 사고로 8명의 중상자가 입항 후 직접 병원으로 이송되었고, 그 중 1명이 결국 사망했습니다. MAIB는 국제해사기구에 전자식 경사계 탑재 의무화, 선박 분류사회에 대한 지침서 품질 개선, 추진력 제조업체의 고객 권고사항 발행, 그리고 크루즈협회에 의료 인력 증원 및 악천후 시 선내 가구 고정 정책 강화를 권고했습니다.</p><h3>Key Quotes</h3><p><li>"Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." (2023년 11월 4일 정오 직후, 승객선 Spirit of Discovery호가 비스케이만 횡단 중 악천후에서 추진력을 상실했으며, 이 기간 동안 100명 이상의 탑승객이 부상당했습니다.)</li></p><p><li>"Recommendations have been made to the Maritime and Coastguard Agency to propose that international carriage requirements include electronic inclinometers" (해사청에 국제운송 규정에 전자식 경사계 포함을 제안하도록 권고했습니다.)</li></p><h3>Technical Insights</h3><p>비스케이만의 악천후에서 추진 장치 고장으로 인한 선박의 제어 불능 상태는 승객선의 구조안전성과 직결된 중대 문제입니다. 본 사고는 전자식 경사계(electronic inclinometer)의 의무 탑재 필요성을 강조하며, 이는 선박의 실시간 선체 기울기 모니터링을 통해 악천후 시 구조 안정성을 향상시킬 수 있음을 시사합니다. 추진력 제조업체의 고객 권고사항 발행 권고는 유사 포드식 추진 시스템 장착 선박에 대한 예방적 유지보수와 운영 지침의 중요성을 반영하며, 향후 해사산업 표준화에서 추진 장치 설계 및 운영 프로토콜 개선이 필수적입니다.</p></div>`,
      tags: ["propulsion failure","heavy weather","passenger vessel","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-8,46.5],
      location: "Bay of Biscay"
    },
    {
      type: "accident",
      title: "Spirit of Discovery Propulsion Loss in Bay of Biscay - MAIB Investigation Report Released",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-12",
      image: "https://images.marinelink.com/images/maritime/w800/source-168843.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>영국 해양사고조사국(MAIB)은 2023년 11월 4일 비스케이 만에서 여객선 Spirit of Discovery가 겪은 추진력 상실 사고에 대한 조사 보고서를 공개했다. 악천후로 인한 격렬한 동요로 인해 프로펠러가 노출되어 자동 종료되었으며, 100명 이상의 승객이 부상당했고 1명이 사망했다. 사고의 원인은 추진 포드의 예상치 못한 90도 회전, 비효과적인 항로 결정, 그리고 부실한 응급의료 대응 등 복합적인 요인이 작용했다. MAIB는 전자 경사계 설치, 의료 인력 강화, 선내 가구 고정 개선 등의 안전 권고사항을 제시했다.</p><h3>Key Quotes</h3><p><li>"While cruising remains safe and accidents rare, Spirit of Discovery's violent motion in heavy weather caused injury to over 100 passengers and, very sadly, one passenger lost their life as a result of injuries sustained." (해양 여행은 여전히 안전하지만, Spirit of Discovery의 악천후에서의 격렬한 동요는 100명 이상의 승객을 부상시켰고, 안타깝게도 1명의 승객이 이러한 부상으로 인해 사망했다.)</li></p><p><li>"A complex sequence of events led to this accident, and we have identified a number of clear lessons around vessel safety, crew decision-making and medical response." (이번 사고는 복잡한 일련의 사건으로 인해 발생했으며, 우리는 선박 안전, 승무원 의사결정, 의료 대응에 관한 명확한 교훈들을 파악했다.)</li></p><h3>Technical Insights</h3><p>본 사건은 악천후에서 포드식 추진시스템의 설계 결함과 운영 한계를 여실히 드러낸다. 프로펠러 노출로 인한 자동 종료(propeller overspeed shutdown)는 포드 기울임각 모니터링의 부재와 함께 선박의 종횡 안정성 평가 기준의 미흡함을 시사한다. 전자 경사계 의무 장착은 COLREG 준수 관점에서도 중요한데, 실시간 선박 자세 정보는 악천후 항로 회피 판단에 필수적이며, 자동화된 경고 시스템이 승무원의 의사결정을 보조할 수 있다. IMO는 여객선에 대한 안정성 기준 강화 및 비상 의료 대응 절차 국제 표준화를 검토해야 하며, 특히 대형 여객선의 질량 중심 변화와 극한 날씨 시나리오에 대한 시뮬레이션 기반 트레이닝 프로토콜 개발이 시급하다.</p></div>`,
      tags: ["Propulsion Loss","Heavy Weather","Passenger Vessel","Casualties","MAIB Investigation"],
      link: "https://www.marinelink.com/news/report-spirit-discovery-tragedy-released-536865",
      coords: [48.5,-5],
      location: "Bay of Biscay, France"
    }
  ]
});

// Auto-collected: 2025-12-27
addEvents({
  "2025-12-27": [
    {
      type: "accident",
      title: "Coral Adventurer Grounding on Papua New Guinea Reef - ATSB Preliminary Report",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-12",
      image: "https://images.marinelink.com/images/maritime/w800/source-168852.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2025년 12월 27일 호주 국적 크루즈선 Coral Adventurer(93m)가 파푸아뉴기니 드레거하펜 항만 근처 산호초에 좌초하는 사고가 발생했습니다. 선박에는 승객 80명과 승무원 44명이 탑승하고 있었습니다. 호주 교통안전청(ATSB)의 예비 보고서에 따르면, 사고는 ECDIS 시스템 경로 로딩 문제, 항해사의 자동조종장치 수동 전환, 예상보다 빠른 속도(8.5노트), 그리고 어두운 환경에서의 시각적 항법 불능이 복합적으로 작용한 결과입니다. 선박이 계획된 항로에서 약 160m 동쪽으로 이탈하여 산호초에 접촉했으며, 인명피해는 보고되지 않았습니다.</p><h3>Key Quotes</h3><p><li>"During this hard manual turn, the ship slowed considerably, to 3.8 knots. The chief mate, perceiving the loss of speed was due to a strong current, increased the RPM setting of both Azipull thrusters." (항해사가 급격한 수동 회전 중 선속이 3.8노트로 감소했을 때, 이를 강한 해류 때문이라고 판단하고 양쪽 Azipull 추진기의 RPM을 증가시켰습니다.)</li></p><p><li>"At this point, in dark conditions and without navigational aids or lights ashore, the chief mate reported being unable to visually identify the surrounding topography in relation to what was being shown on the ECDIS." (어두운 환경에서 육상 항법장비나 불빛이 없는 상황에서 항해사는 ECDIS 화면에 표시된 지형과 실제 주변 지형을 시각적으로 식별할 수 없었다고 보고했습니다.)</li></p><h3>Technical Insights</h3><p>본 사고는 ECDIS 경로 안전 검증(route safety check) 기능으로 인한 예상치 못한 지연이 일련의 연쇄 오류를 촉발한 전형적인 인적 요소 사고입니다. 항해사가 ECDIS 문제를 해결하는 동안 계획된 첫 번째 회전 지점을 놓쳤고, 이를 보정하기 위해 자동조종장치에서 수동 조종으로 전환한 후 RPM을 과도하게 상향 조정하면서 선박 속도가 계획 속도(5.5노트)보다 3노트 초과하게 되었습니다. 특히 어두운 환경에서 ECDIS 화면과 실제 해상 환경 간의 위치 인식 불일치(situational awareness gap)가 발생했고, 항해사는 이탈된 위치에서 시각적 항법에 의존할 수밖에 없었습니다. 이는 좁은 해역에서의 야간 항해 중 자동조종과 수동 조종 전환의 위험성, 그리고 ECDIS 사용자 인터페이스 설계의 인적 요소 측면을 강조하며, IMO STCW 협약의 항해사 훈련 및 ECDIS 숙련도 강화 필요성을 시사합니다.</p></div>`,
      tags: ["grounding","cruise ship","ECDIS failure","navigation error","Papua New Guinea"],
      link: "https://www.marinelink.com/news/atsb-releases-preliminary-report-coral-536873",
      coords: [145.7781,-6.0753],
      location: "Dregerhafen, Papua New Guinea"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery, Bay of Biscay",
      source: "MAIB (Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk/maib-reports · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2023년 11월 4일 비스케이만에서 여객선 Spirit of Discovery가 악천후 중 추진력을 상실하는 사고가 발생했습니다. 이 사고로 100명 이상의 승객이 부상을 입었으며, 그 중 8명이 중상을 입어 입항 후 직접 병원으로 이송되었고, 한 명의 승객이 부상으로 인해 사망했습니다. MAIB(해양사고조사위원회) 조사 결과에 따르면 추진 시스템 관련 문제가 주요 원인으로 파악되었습니다. 이를 받아 해양청, 선급협회, 추진 시스템 제조업체, 그리고 국제크루즈협회에 대해 여러 권고사항이 제시되었습니다.</p><h3>Key Quotes</h3><p><li>"Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay." (2023년 11월 4일 정오 직후, 여객선 Spirit of Discovery가 비스케이만을 횡단하던 중 악천후에서 추진력을 상실했습니다.)</li></p><p><li>"Over 100 passengers were injured during this period. Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries." (이 기간 동안 100명 이상의 승객이 부상을 입었으며, 중상을 입은 8명의 승객이 입항 후 직접 병원으로 이송되었고, 그 중 한 명의 승객이 부상으로 인해 사망했습니다.)</li></p><h3>Technical Insights</h3><p>악천후 중 추진 시스템의 장애는 여객선의 안정성과 조종성에 심각한 영향을 미치며, 특히 비스케이만의 높은 파고와 강풍 조건에서는 선박의 자세 제어 및 추진력 유지가 극히 중요합니다. MAIB의 권고사항 중 전자식 기울기계(inclinometer) 장착은 해양 안전 규정의 중요한 개선으로, 선장과 항해사가 실시간으로 선박의 기울기를 정확히 파악하여 적절한 조선 결정을 내릴 수 있게 합니다. 또한 추진 시스템 제조사의 고객 공지와 선급협회의 지시서 품질 개선은 장비 신뢰성과 운영 절차의 표준화를 통해 유사 사고 재발 방지에 기여할 것으로 예상됩니다. 여객선의 의료 인력 강화 및 선내 가구 고정 규정 개선도 해상 재난 상황에서의 인명 피해 감소에 핵심적인 역할을 할 수 있습니다.</p></div>`,
      tags: ["propulsion failure","heavy weather","passenger vessel","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-5.5,47.5],
      location: "Bay of Biscay"
    }
  ]
});

// Auto-collected: 2026-03-12
addEvents({
  "2026-03-12": [
    {
      type: "accident",
      title: "Swedish Coast Guard Boards Second Stateless Ship in a Week",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-12",
      image: "https://images.marinelink.com/images/maritime/w800/source-swedish-168896.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>스웨덴 해안경비대가 지난 일주일 내 두 번째로 무국적선으로 의심되는 선박을 발트해 스웨덴 수역에서 나포했다. 228미터 길이의 탱커 씨 아울 I(Sea Owl I)은 코모로 국기를 게양하고 있었으나 거짓 기(false flag) 항해 혐의를 받고 있으며, 러시아 섀도우 플릿(shadow fleet)에 속한 것으로 의심된다. 해당 선박은 EU 등 여러 국가의 제재 대상 목록에 등재되어 있다. 스웨덴 해안경비대는 해양 안전 및 환경 위협이 심각하다는 이유로 개입 조치를 취했으며, 트렐레보르그 해역에서의 나포 직후 같은 지역에서 기니 국기 하에 항해하던 카파(Caffa) 선박도 동일한 조치 대상이 되었다.</p><h3>Key Quotes</h3><p><li>"The threats to maritime safety and the environment are too high. Therefore, there is reason to intervene against the vessel." (해양 안전과 환경에 대한 위협이 매우 심각하므로 해당 선박에 대한 개입이 정당화된다.)</li></p><p><li>"The ship is suspected of belonging to the Russian shadow fleet." (해당 선박은 러시아 섀도우 플릿에 속한 것으로 의심된다.)</li></p><h3>Technical Insights</h3><p>본 사건은 선박의 기국(flag state) 관리 및 해양 안전 규제 강화의 중요성을 부각시킨다. 러시아 섀도우 플릿은 국제 제재를 회피하기 위해 거짓 국기를 사용하는 행위로, IMO와 UNCLOS의 기본 원칙인 실질적 연계(genuine link) 원칙을 위반하고 있다. 스웨덴 해안경비대의 이러한 적극적 개입은 COLREG 및 국제 해양법 협약에 따른 연안국(coastal state)의 권리를 행사하는 사례이며, 해양 안전 및 환경 보호를 위한 국제 협력의 필요성을 시사한다. 향후 자율운항선박(autonomous vessels) 도입 시에도 기국 등록 및 추적 시스템의 신뢰성 확보가 해양 안전의 핵심 과제가 될 것으로 예상된다.</p></div>`,
      tags: ["Maritime Safety","Russian Shadow Fleet","Baltic Sea","Flag State Control"],
      link: "https://www.marinelink.com/news/swedish-coast-guard-boards-second-536933",
      coords: [13.1447,55.3667],
      location: "Trelleborg, Swedish waters, Baltic Sea"
    },
    {
      type: "news",
      title: "DIU and U.S. Navy Select Anduril for XL-AUV Program",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-12",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/DiveXL-DIU-Camp-1E.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>미국 방위혁신부(DIU)와 해군이 Anduril을 수중 장거리 작전능력 강화를 위한 XL-AUV 프로그램의 Combat Autonomous Maritime Platform Project(CAMP)에 선정했다. Anduril은 42,355km, 6,752시간의 누적 운영 실적과 업계 최장 거리의 XL-AUV 시연을 통해 장거리 성능과 시스템 내구성을 입증했다. 이 계약을 통해 Anduril의 Dive-XL 초대형 무인잠수정이 4개월 내 실전적 시연을 완료할 예정이며, 이는 미 해군의 수중 영역 통제 능력을 대변적으로 강화하는 단계를 의미한다. 오스트레일리아 로열해군과의 Ghost Shark 계약 성공사례와 미국 Rhode Island 등지의 전용 생산시설 확보는 신속한 대량 생산 체계 구축을 가능하게 한다.</p><h3>Key Quotes</h3><p><li>"Long-range autonomous undersea systems have the potential to change the balance beneath the waves. They are intended to allow the United States and its allies to extend reach, hold risk at distance, and operate persistently in contested environments." (장거리 자율 수중 시스템은 수중 전략균형을 변화시킬 수 있으며, 미국과 동맹국이 작전 범위를 확대하고 위험을 거리에서 유지하며 분쟁 환경에서 지속적으로 작전할 수 있게 한다.)</li></p><p><li>"Control of the undersea domain underwrites control of the sea itself, and Dive-XL marks the shift from concept to reality." (수중 영역에 대한 통제는 해상 통제의 기초이며, Dive-XL은 개념에서 현실로의 전환을 의미한다.)</li></p><h3>Technical Insights</h3><p>해상 자율시스템의 실용화 관점에서 이 선택은 중요한 기술적 의의를 갖는다. XL-AUV의 장거리 운영성은 기존 COLREG 및 IMO 해상교통관리 규정의 수중 영역 확대 적용 필요성을 시사하며, 특히 자율 수중 차량의 충돌회피 및 통신 프로토콜 표준화가 향후 국제해사 규제 개정 논의의 중심이 될 것으로 예상된다. Anduril의 42,355km 운영 실적은 장시간 자율 운영의 신뢰성과 에러 복구 메커니즘의 성숙도를 입증하는 지표로서, 분산 해상작전(DMO) 환경에서의 함대 통합 운영 기술 발전을 의미한다. Sydney 및 Quonset Point 시설의 연간 수십 대 규모의 생산계획은 자동화 제조 기술과 품질관리 표준화가 해양산업의 미래 경쟁력을 좌우할 것임을 보여준다.</p></div>`,
      tags: ["Autonomous Underwater Vehicles","XL-AUV","U.S. Navy","Defense Innovation","Dive-XL"],
      link: "https://www.navalnews.com/naval-news/2026/03/diu-and-u-s-navy-select-anduril-for-xl-auv-program/",
      coords: [0,0],
      location: "United States (Global)"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2026-03-12
addEvents({
  "2026-03-12": [
    {
      type: "news",
      title: "DIU and U.S. Navy Select Anduril for XL-AUV Program (Combat Autonomous Maritime Platform Project)",
      source: "Naval News",
      sourceMeta: "navalnews.com · 2026-03-12",
      image: "https://www.navalnews.com/wp-content/uploads/2026/03/DiveXL-DIU-Camp-1E.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>미국 국방혁신부(DIU)와 해군이 전투 자율해양 플랫폼 프로젝트(CAMP)의 일환으로 Anduril을 초대형 자율 수중 차량(XL-AUV) 개발 업체로 선정했다. Anduril은 지난 2025년 호주 해군과의 Ghost Shark 계약 성공과 42,355km, 6,752시간의 누적 운영 실적으로 장기간 자율 운영 능력을 입증했다. CAMP 프로젝트 하에서 Anduril의 Dive-XL은 4개월 내 장기간 작전 대표 시연을 완료할 예정이며, 현재 로드아일랜드 Quonset Point에 연간 수십 대의 Dive-XL과 수백 대의 Dive-LD를 생산할 수 있는 전문 시설을 운영 중이다. 이는 미 해군의 수중 영역 통제 능력 강화와 분산 해양 작전의 광범위 도입을 위한 중요한 전환점이다.</p><h3>Key Quotes</h3><p><li>"Long-range autonomous undersea systems have the potential to change the balance beneath the waves" (장거리 자율 수중 시스템은 수중 전략의 균형을 변화시킬 수 있는 잠재력을 가지고 있다)</li></p><p><li>"Control of the undersea domain underwrites control of the sea itself, and Dive-XL marks the shift from concept to reality" (수중 영역의 통제는 해양 자체의 통제를 뒷받침하며, Dive-XL은 개념에서 현실로의 전환을 의미한다)</li></p><h3>Technical Insights</h3><p>초대형 자율 수중 차량(XL-AUV)의 상용화는 해양 자율 운영 기술의 성숙도를 보여주는 사례로서, 42,355km의 누적 운항 거리와 6,752시간의 운영 시간은 장시간 미션 수행 시 시스템의 신뢰성과 에너지 효율성이 달성 가능함을 입증한다. 수중 환경에서의 자율 항법은 GPS 신호 부재로 인해 관성 항법 장치(INS), 음향 포지셔닝 시스템(USBL), 지형 참조 항법(TRN) 등 다중 센서 융합 기술이 필수적이며, Anduril의 성공적 운영은 이러한 기술의 성숙도를 입증한다. IMO 자율선박 규제 체계가 해상 표면 선박 중심으로 논의되고 있으나, 수중 자율 플랫폼의 확대는 향후 COLREG 및 규제 프레임워크 확장에 영향을 미칠 것으로 예상되며, 분산 해양 작전(Distributed Maritime Operations) 개념의 현실화는 미래 해전 양상의 근본적 변화를 의미한다.</p></div>`,
      tags: ["Autonomous Underwater Vehicles","XL-AUV","CAMP Program","U.S. Navy","Defense Innovation Unit"],
      link: "https://www.navalnews.com/naval-news/2026/03/diu-and-u-s-navy-select-anduril-for-xl-auv-program/",
      coords: [0,0],
      location: "Global/U.S. Navy Operations"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Spirit of Discovery, 100+ injuries and 1 fatality",
      source: "MAIB Reports",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2023년 11월 4일 비스케이만에서 여객선 Spirit of Discovery가 악천후 중 추진력을 상실하는 사고가 발생했습니다. 이 사건으로 100명 이상의 승객이 부상을 입었으며, 심각한 부상을 입은 8명이 직접 병원으로 이송되었고 그 중 1명이 나중에 사망했습니다. 영국 해양사고조사청(MAIB)의 조사 결과에 따르면 추진 시스템 고장이 주요 원인이었으며, 해사청, 선급, 추진 제조사, 크루즈선박협회 등에 다양한 권장사항이 제시되었습니다. 권장사항에는 전자 경사계 설치 의무화, 정비 매뉴얼 품질 개선, 악천후 시 가구 고정 정책 강화 등이 포함됩니다.</p><h3>Key Quotes</h3><p><li>"Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay." </li><br>(2023년 11월 4일 정오 이후 여객선 Spirit of Discovery가 비스케이만 횡단 중 악천후에서 추진력을 상실했습니다.)</p><p><li>"Eight of the seriously injured passengers were taken directly to hospital on arrival into port and one of these passengers later died from his injuries."</li><br>(심각한 부상을 입은 8명의 승객이 항구 도착 시 직접 병원으로 이송되었으며, 이 중 1명이 나중에 부상으로 인해 사망했습니다.)</p><h3>Technical Insights</h3><p>이번 Spirit of Discovery 사고는 악천후 중 추진 시스템 장애로 인한 대형 인명피해 사건으로, 해양산업에 중요한 교훈을 제시합니다. MAIB의 전자 경사계 설치 의무화 권장은 선박의 정확한 자세(trim/heel) 모니터링을 통해 악천후 상황에서 안정성을 증대할 수 있음을 시사합니다. 추진 포드(pod) 시스템 제조사의 고객 권고문 발급은 비슷한 추진 장치를 장착한 선박들의 예방 정비 및 운영 개선의 중요성을 강조하며, 이는 업계 전반의 설계 표준화 및 신뢰성 향상에 기여할 것으로 예상됩니다. 또한 크루즈선박협회의 의료인력 ATLS 자격 강화 및 선내 가구 고정 기준 개선은 사고 발생 시 2차 피해 최소화를 위한 구조적 안전 장치의 중요성을 재확인해줍니다.</p></div>`,
      tags: ["propulsion failure","heavy weather","passenger vessel","casualties","Bay of Biscay"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-5.5,48.5],
      location: "Bay of Biscay"
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
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>미국 국방부 관계자들은 호르무즈 해협과 페르시만에서 상선에 대한 현재의 주요 위협이 기뢰가 아닌 미사일 공격이라고 발표했습니다. 이란이 해협 북부 지역의 선박을 공격하기 위해 지대지 미사일을 사용해왔으며, 합참의장 댄 케인 대장은 현재까지 이란의 무인 수상함정(USV) 활동은 감지되지 않았다고 언급했습니다. 이러한 미사일 위협의 확대는 전통적인 해상 광산 위협과는 달리 상선의 방어 능력과 국제 항로의 안전성에 새로운 도전을 제시하고 있습니다. 국방부와 해군은 백악관 지시에 따라 이 위협에 대응하는 계획을 수립 중입니다.</p><h3>Key Quotes</h3><br><li>"Missiles are currently the largest threat to merchant shipping in the Strait of Hormuz and Persian Gulf instead of sea mines" (현재 호르무즈 해협과 페르시만 해상 운송에 대한 가장 큰 위협은 기뢰가 아닌 미사일입니다)</li><br><li>"We've not seen any [unmanned surface vessel] activity out of Iran that we've seen in the Gulf at this point" (현재 페르시만에서 이란의 무인 수상함정 활동은 감지되지 않았습니다)</li></p><h3>Technical Insights</h3><br>호르무즈 해협은 전 세계 석유 운송량의 약 21%가 통과하는 전략적 요충지로, 전통적인 기뢰 위협에서 미사일 위협으로 패러다임이 변화하고 있습니다. 해상에서의 미사일 공격은 선박의 회피 능력과 방어 체계에 새로운 요구사항을 제시하며, IMO 국제해사기구의 기존 COLREG(해상충돌방지규칙) 및 선박안전 프레임워크로는 충분하지 않은 상황입니다. 자율항행선(autonomous vessels)의 도입 시 이러한 고위험 지역에서의 운영 가능성과 원격 운영 체계의 취약성이 중요한 고려사항이 되며, 향후 상선의 자동화된 항해 시스템은 미사일 위협 감지 및 회피 기능의 통합이 필수적입니다.</p></div>`,
      tags: ["Strait of Hormuz","Missile Threats","Merchant Shipping","Iran","Maritime Security"],
      link: "https://news.usni.org/2026/03/13/missile-attacks-define-strait-of-hormuz-risks-officials-say",
      coords: [56.2628,26.5547],
      location: "Strait of Hormuz"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather – Spirit of Discovery, Bay of Biscay (100+ injuries, 1 fatality)",
      source: "MAIB (UK Marine Accident Investigation Branch)",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><p>---</p><h3>Executive Summary</h3><p>2023년 11월 4일 비스케이 만에서 여객선 Spirit of Discovery가 악천후 중 추진력 상실 사고를 경험했으며, 100명 이상의 승객이 부상을 입고 1명이 사망했다. 사고 발생 직후 심각한 부상자 8명이 항구 도착 시 직접 병원으로 후송되었으며, 이 중 한 명이 나중에 부상으로 인해 사망했다. MAIB 조사 결과에 따라 해양청(Maritime and Coastguard Agency)에 국제 운송 요구사항에 전자 경사계 포함을 제안할 것을 권고했으며, 분류 회사들에게는 지침서 품질 개선을, 추진 제조업체에는 고객 자문 통지 발급을 권고했다. 또한 순항선박국제협회(CLIA)에는 승선 의료 인력 확대와 악천후 시 선박 비품 고정 정책 업데이트를 권고했다.</p><h3>Key Quotes</h3><p><li>"Shortly after 1230 on 4 November 2023, the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." (2023년 11월 4일 정오 직후, 여객선 Spirit of Discovery는 비스케이 만을 횡단하는 중 악천후에서 추진력을 상실했으며, 이 기간 중 100명 이상의 승객이 부상을 입었다.)</li></p><p><li>"Recommendations have been made to the Maritime and Coastguard Agency to propose that international carriage requirements include electronic inclinometers" (해양청에는 국제 운송 요구사항에 전자 경사계 포함을 제안할 것을 권고했다.)</li></p><h3>Technical Insights</h3><p>본 사건은 악천후 상황에서 추진 시스템의 신뢰성 문제와 선박의 안정성 관리 부문의 중대한 허점을 드러냈다. 전자 경사계의 의무화 권고는 선장과 승무원이 선박의 실시간 경사각을 정확히 파악하여 조타 및 속도 조정을 통해 위험 상황을 조기에 인지하고 대응할 수 있게 하는 것이 핵심이다. Pod 추진 시스템 제조업체의 고객 자문 통지는 동일 시스템을 장착한 여타 선박의 정비 및 운영 절차 개선을 통해 유사 사고의 재발 방지를 목표로 하는 국제 해운 안전 표준의 확산을 의미한다. 악천후에서의 선박 비품 고정 및 의료 인력 증원은 인명피해 최소화라는 관점에서 여객선 운영의 새로운 기준을 제시하며, IMO의 해상 안전 규정(SOLAS) 개정과 동기화될 필요가 있다.</p></div>`,
      tags: ["propulsion failure","heavy weather","passenger vessel","Bay of Biscay","casualties"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-4.5,45],
      location: "Bay of Biscay"
    }
  ]
});

// ── Auto-Collected (Bot) ──

// Auto-collected: 2023-11-04
addEvents({
  "2023-11-04": [
    {
      type: "accident",
      title: "Loss of propulsion in heavy weather - Passenger vessel Spirit of Discovery, Bay of Biscay",
      source: "MAIB Reports",
      sourceMeta: "gov.uk · 2026-03-11",
      image: "https://www.gov.uk/assets/frontend/govuk-opengraph-image-4196a4d6333cf92aaf720047f56cfd91b3532d7635fc21ebcf0d5897df6b5f77.png",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>2023년 11월 4일 스피릿 오브 디스커버리(Spirit of Discovery) 여객선이 비스케이만에서 악천후 중 추진력을 상실하는 사고를 겪었습니다. 이 사건으로 100명 이상의 승객이 부상을 입었으며, 그 중 8명이 심각한 상태로 입항 후 즉시 병원으로 옮겨졌고 1명이 나중에 사망했습니다. MAIB(해양사고조사국)의 조사 결과, 추진 장비 제조업체의 설계 결함과 승선 가구 고정 미흡, 의료 인력 부족 등이 주요 원인으로 파악되었습니다. 조사 결과에 따라 국제 운송 기준에 전자 경사계 포함, 분류 사회의 교육 자료 개선, 순양선 국제협회의 의료 인력 충원 권고 등이 제시되었습니다.</p><h3>Key Quotes</h3><p><li>"the passenger vessel Spirit of Discovery lost propulsion in heavy weather while crossing the Bay of Biscay. Over 100 passengers were injured during this period." (여객선 스피릿 오브 디스커버리가 비스케이만을 횡단하던 중 악천후에서 추진력을 잃었으며, 이 기간 동안 100명 이상의 승객이 부상을 입었습니다.)</li></p><p><li>"Recommendations have been made to the Maritime and Coastguard Agency to propose that international carriage requirements include electronic inclinometers" (해사청에 국제 운송 기준에 전자 경사계 포함을 제안하도록 권고했습니다.)</li></p><h3>Technical Insights</h3><p>본 사고는 Pod 추진 시스템의 설계 결함으로 인한 악천후 상황에서의 추진력 상실이 주요 원인으로 보입니다. 선박의 급격한 동요(rolling) 상황에서 Pod 추진기 제어 시스템의 불안정성이 노출되었으며, 이는 현대 여객선의 추진 시스템 이중화 및 중복성(redundancy) 설계에 대한 재검토 필요성을 제기합니다. COLREG 준수뿐 아니라 악천후 항해 시 선체 동요 각도를 실시간 모니터링할 수 있는 전자 경사계의 의무 탑재는 향후 IMO 규정 개정의 중요한 쟁점이 될 것으로 예상됩니다. 아울러 승객 보호를 위한 선내 가구 고정 기준 강화와 응급 의료 대응 체계 개선은 여객선 안전 운영의 핵심 요소로 재인식되어야 합니다.</p></div>`,
      tags: ["propulsion failure","heavy weather","passenger vessel","casualties","Bay of Biscay"],
      link: "https://www.gov.uk/maib-reports/loss-of-propulsion-in-heavy-weather-experienced-by-the-passenger-vessel-spirit-of-discovery-leading-to-over-100-injuries-and-one-fatality",
      coords: [-3.5,46.5],
      location: "Bay of Biscay"
    }
  ]
});
