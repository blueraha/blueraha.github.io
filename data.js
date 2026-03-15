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

// ── 2026-03-15 YouTube ──
addEvents({
  "2026-03-15": [
    {
      type: "news",
      title: "Korea's Big 3 Shipbuilders Stock Outlook 2026: Hanwha Ocean, Samsung Heavy, HD Hyundai",
      source: "경제야놀자 (YouTube)",
      sourceMeta: "youtube.com · 2026-03-15",
      image: "https://img.youtube.com/vi/X0XU0uHnfR0/maxresdefault.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 2026년 한국 조선 빅3(한화오션, 삼성중공업, HD현대중공업) 주가 전망 분석<br>• LNG운반선, 컨테이너선, 특수선박 등 고부가가치 수주 현황 점검<br>• 글로벌 선박 수요 증가에 따른 한국 조선소의 기술·가격 경쟁력 평가<br>• 환경규제 대응(IMO 2030/2050) 및 친환경 선박 기술 투자 동향<br>• 일본 조선업 부활이 K-조선에 미치는 경쟁 리스크 분석</p><h3>Key Quotes</h3><p>• "조선주 앞으로 30년은 더 갑니다" (조선 주식은 향후 30년 더 유망)<br>• "26년 조선주 핵심 모멘텀 대공개" (2026년 조선주 핵심 모멘텀 공개)</p><h3>Technical Insights</h3><p>• LNG·암모니아 이중연료 추진 기술이 수주 경쟁의 핵심 차별화 요소<br>• 스마트십(IoT 기반 운영 최적화) 기술이 선가 프리미엄의 원천<br>• 일본 조선업의 정부 R&D 지원 확대가 한국에 기술 격차 축소 위협<br>• 자율운항선(MASS)과 원격 제어 선박(ROV/Autonomous Vessels) 시장 진출 경쟁 가속</p></div>`,
      tags: ["조선산업","주가분석","한화오션","삼성중공업","HD현대중공업","한국해양산업","YouTube","Video"],
      link: "https://youtu.be/X0XU0uHnfR0",
      coords: [126.98, 37.57],
      location: "Seoul, South Korea"
    },
    {
      type: "news",
      title: "Japan's Shipbuilding Industry Resurgence: Critical Risk Factor for K-Shipbuilding",
      source: "손에잡히는경제 (YouTube)",
      sourceMeta: "youtube.com · 2026-03-15",
      image: "https://img.youtube.com/vi/YXTXhvmKSvY/maxresdefault.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>• 일본 조선업의 경쟁력 재강화 현황과 한국 조선산업(K-조선)에 미치는 영향 분석<br>• COR에너지전환사이트의 권홍재 대표가 일본 조선업의 기술적 복세 조명<br>• 글로벌 조선 시장에서 LNG운반선, 자동화 기술, 환경규제 대응 경쟁 심화<br>• 일본의 산업 혁신과 정부 지원에 의한 기술적 도전 확대<br>• 한국이 보유한 기술 우위가 위협받고 있다는 경고 메시지</p><h3>Key Quotes</h3><p>• "Japan's Shipbuilding Industry Resurgence is a critical challenge to K-Shipbuilding dominance" (일본 조선업 부활이 K-조선 주도권에 중대한 도전)<br>• "Advanced automation and green technology adoption accelerating Japanese competitiveness" (자동화·친환경 기술이 일본 경쟁력 가속)</p><h3>Technical Insights</h3><p>• 일본의 정부 R&D 지원 확대로 디지털 조선·스마트십 기술 격차 축소 중<br>• LNG선 및 고부가가치 특수선 시장에서 일본 수주 점유율 반등<br>• 한국은 기술 선점이 아닌 가격+기술 복합 경쟁으로 전환 필요<br>• 자율운항·원격 제어 선박 분야에서 한일 경쟁이 본격화될 전망</p></div>`,
      tags: ["조선산업","한일 경쟁","산업 분석","일본 제조업","YouTube","Video"],
      link: "https://youtu.be/YXTXhvmKSvY",
      coords: [126.98, 37.57],
      location: "Seoul, South Korea"
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
      sourceMeta: "youtube.com · 2024-01-15",
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
      sourceMeta: "youtube.com · 2024-01-15",
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
  "2024-01-01": [
    {
      type: "news",
      title: "Slack Sync Execution — No New Updates",
      source: "User Submitted",
      sourceMeta: "User Submitted · 2024-01-01",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• Slack 동기화 시스템이 정상 실행되었으나 새로운 정보나 데이터 업데이트가 없는 상태<br>• 해양 산업 관련 뉴스, 사고, 이벤트 정보가 현재 수집되지 않음<br>• 시스템은 정상 작동 중이나 정보 입수 경로에서 새로운 콘텐츠 부재<br>• 통상적인 정보 수집 주기 내에서 의미 있는 데이터 포인트 미검출<br>• 해양 산업 모니터링 대시보드 상 현재 주목할 만한 사건이나 발전사항 없음<br><h3>Key Quotes</h3><br>• "Slack Sync 실행 — 새로운 소식 없음" (정보 동기화 시스템이 작동하고 있으나 신규 뉴스 또는 업데이트 사항이 발생하지 않음)<br><h3>Devil's Advocate</h3><br>• 정보 수집 경로의 편향성 문제 — 특정 지역(예: 아시아-태평양, 유럽)의 해양 뉴스는 충분히 수집되지 않을 수 있으며, 실제로는 주요 사건이 발생하고 있을 수 있다<br>• 시간 차(Time Lag) 리스크 — Slack 동기화 시스템의 지연으로 인해 실시간 중요 정보(선박 사고, 규제 변경)가 놓칠 수 있음<br>• 정보원 다양성 부족 — 주류 매체만 모니터링할 경우, 소규모 해운업체나 신흥 기술 동향(예: 자율운항선 시험)이 누락될 가능성<br>• 알고리즘 필터링의 한계 — "새로운 소식 없음"이라는 판정 자체가 필터링 기준의 엄격함이나 데이터 분류 오류로 인한 위양성(false negative)일 수 있음</div>`,
      tags: ["Information Management","System Sync","Data Update","Operational Status"],
      link: "",
      coords: [0,0],
      location: "Global"
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
      sourceMeta: "youtube.com · 2024-12-19",
      image: "https://img.youtube.com/vi/YXTXhvmKSvY/maxresdefault.jpg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>• 한국 조선산업 빅3(한화오션, 삼성중공업, HD현대중공업)의 2026년 주가 전망을 비교 분석하는 콘텐츠로, 경제 전문가 엄경아 위원의 심층 해석 포함<br>• 조선업계의 구조적 경쟁력 변화, 수주잔액(Orderbook), 기술 혁신 역량 등을 바탕으로 각 사 간 승패를 가름하는 분석 제시<br>• LNG선, 컨테이너선, 유조선, 특수선박 등 선종별 수요 전망과 고부가가치선 수주 능력이 중장기 주가 결정의 핵심 변수<br>• 에너지 전환, 해운경기 사이클, 글로벌 해양산업 지정학적 리스크 등 거시경제 환경 변화가 각 조선사의 실적과 밸류에이션에 미치는 영향 논의<br>• 한화오션의 적극적 M&A 전략, 삼성중공업의 기술력 기반 고부가가치 선박 포트폴리오, HD현대의 규모의 경제 등 차별화 전략 비교<br>• 향후 2년(2025~2026)간 수주 수익화 시점, 원가율 개선, 환율 변동성 등이 각 사 주가 상승률을 결정하는 단기 트리거로 작용할 가능성<br><h3>Key Quotes</h3><br>• "2026 조선주 주가전망은 단순한 실적 개선이 아니라, 각 조선사의 전략적 포지셔닝과 산업 구조 변화에 얼마나 신속하게 적응하는가의 문제"<br>(2026년 조선주 주가 전망은 단순 실적 개선이 아니라 각사의 전략적 대응 능력에 달려있음)<br>• "한국 조선산업의 경쟁력은 고부가가치선 수주 능력과 건조 납기 준수율에서 결정된다"<br>(고부가가치선 확보와 납기 이행 능력이 한국 조선사의 경쟁 우위 결정 요소)<br>• "빅3 중 최후의 승자는 2026년까지의 수주-수익화 사이클과 해운경기 회복 시점을 정확히 타격한 기업이 될 것"<br>(수주-수익화 타이밍과 해운경기 회복 국면을 잘 활용한 기업이 최종 승자가 될 것으로 예상)<br><h3>Devil's Advocate</h3><br>• **조선산업 호황의 지속성 불확실성**: 현재의 LNG선·특수선박 수요 호황이 2026년까지 지속된다는 보장이 없으며, 글로벌 경기 둔화, 해운경기 악화 시나리오에서 각 사의 주가는 급락할 가능성. 역사적으로 조선업은 극단적 사이클 산업이라는 점 간과.<br>• **원가 인상 압력의 과소평가**: 강철·반도체·인력 수급 관련 비용이 지속적으로 상승하는 환경에서 고정가 수주 계약의 마진율 악화 리스크가 분석에 충분히 반영되지 않았을 가능성. 특히 저가 수주로 점유율 확대 경쟁이 심화되면 수익성 문제 심화.<br>• **지정학적 변수의 최소화**: 한반도 긴장, 미중 갈등, 러시아 제재 심화 등이 조선사의 수주처(중국, 일본, 미국)와 공급망에 미치는 영향이 과도하게 낙관적으로 평가되었을 가능성. 특히 방위산업 관련 특수선박 수주의 지정학적 리스크 간과.<br>• **기술 격차 축소의 가속화**: 중국 조선사의 기술 추격이 가속화되고 있으며, 한국 조선사의 기술 우위 지속 기간이 시장 예상보다 짧을 수 있음. 특히 자율운항선, 친환경선 분야에서 글로벌 기술 경쟁이 가파르게 진행 중이라는 점이 중기 실적에 부정적 영향 미칠 가능성.</div>`,
      tags: ["Korean Shipbuilding","Stock Analysis","Hanwha Ocean","Samsung Heavy Industries","HD Hyundai","Maritime Industry","YouTube","Video"],
      link: "https://youtu.be/YXTXhvmKSvY?si=WaVRfZYF04Bmqnmh",
      coords: [127,37.5],
      location: "South Korea"
    }
  ]
});