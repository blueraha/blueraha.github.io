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
      image: "https://gcaptain.com/wp-content/uploads/2026/03/hormuz-war-zone.jpg",
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
      image: "https://www.defensenews.com/resizer/v2/https%3A%2F%2Fd1ldvf68ux039x.cloudfront.net%2Fthumbor%2F-FtiR2ADQ1Gh0DjksiKh0DjGqaU%3D%2F0x0%3A3600x2400%2F1440x0/arc-photo-archetype/cloudfront-us-east-1/production/images/2026-03-02-autonomous-cargo.jpg",
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
      image: "https://windward.ai/wp-content/uploads/2026/03/mkd-vyom-strike-oman.png",
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
      image: "https://windward.ai/wp-content/uploads/2026/03/hormuz-traffic-march2.png",
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
      image: "https://www.seatrade-maritime.com/sites/default/files/2026-03/safeen-prestige-vesselfinder.jpg",
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
      image: "https://windward.ai/wp-content/uploads/2026/03/iris-dena-sri-lanka.png",
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
      image: "https://windward.ai/wp-content/uploads/2026/03/sonangol-namibe-kuwait.png",
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
      image: "https://gcaptain.com/wp-content/uploads/2026/03/750-ships-trapped-hormuz.jpg",
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
      image: "https://gcaptain.com/wp-content/uploads/2026/03/hormuz-crisis-seafarers.jpg",
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
      image: "https://static.euronews.com/articles/stories/09/16/12/04/1920x1080_cmsv2_iran-drone-carrier.jpg",
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
      image: "https://gcaptain.com/wp-content/uploads/2026/03/chinese-ships-hormuz.jpg",
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
      image: "https://www.navalnews.com/wp-content/uploads/2026/02/Blue-Water-Autonomy-Liberty-class.jpg",
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
      title: "Samsung Heavy Industries Books GTT Tank Design for 180,000 cbm LNG Vessel",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/02/LNG-vessel-Source-GTT.jpg?image-crop-positioner-ts=1771505165",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>삼성중공업이 프랑스의 가즈트랑스포트&테크니가즈(GTT)로부터 180,000입방미터 용량의 LNG운반선 탱크설계 용역을 발주했다. GTT는 2026년 1분기에 유럽선주를 대신하여 이 신규 LNG선의 탱크설계 주문을 확보했으며, 극저온 탱크는 GTT의 Mark III Flex 멤브레인 방식으로 설계될 예정이다. 해당 선박의 인도는 2028년으로 예정되어 있으며, 이는 GTT가 한화오션과 체결한 7척의 LNG운반선 용역 계약에 이은 추가 주문이다.</p><h3>Key Quotes</h3><br><li>"GTT secured in the first quarter of 2026 an order from Samsung Heavy Industries for the tank design of one new LNG vessel on behalf of a European ship-owner." (GTT는 2026년 1분기에 유럽선주를 대신하여 삼성중공업으로부터 신규 LNG운반선의 탱크설계 용역 주문을 확보했다.)</li><br><li>"The tanks will be fitted with GTT's Mark III Flex membrane containment system, with the delivery of the vessel expected in 2028." (탱크는 GTT의 Mark III Flex 멤브레인 방식으로 설계되며, 선박 인도는 2028년으로 예정되어 있다.)</li></p><h3>Technical Insights</h3><br>GTT의 Mark III Flex 멤브레인 탱크시스템은 LNG운반선의 극저온 화물 보관에 있어 업계 표준으로 널리 인정받는 기술로, 180,000 cbm 규모의 대형 LNG운반선에 적용되는 것은 현대적 LNG 해운의 경제성과 안전성을 동시에 만족하는 설계임을 의미한다. 멤브레인 방식 탱크는 구형 탱크에 비해 화물창 공간 활용도가 우수하며 극저온(-163°C) 환경에서의 재료 특성과 구조 안정성이 검증된 기술이다. 2028년 인도 예정 일정은 조선업계의 공급망 최적화 및 설계-건조 통합 과정을 반영하며, 유럽 선주의 탈탄소화 전략과 LNG 연료 기반 해운 운영의 지속적 수요를 보여주는 사례이다.</p></div>`,
      tags: ["LNG Carrier","Tank Design","Samsung Heavy Industries","GTT"],
      link: "https://www.offshore-energy.biz/samsung-heavy-industries-books-french-firms-tank-design-for-new-lng-vessel/",
      coords: [0,0],
      location: "Global"
    },
    {
      type: "news",
      title: "Equinor Receives Approval for North Sea Drilling with Deepsea Bollsta Rig",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2025/05/Deepsea-Bollsta.jpg?image-crop-positioner-ts=1747121839",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>노르웨이 국영 에너지 기업 Equinor가 노르웨이 대륙붕(NCS)의 Johan Sverdrup 유전에서 시추 작업을 수행할 수 있는 허가를 노르웨이 해양산업청(Havtil)으로부터 획득했습니다. Odfjell Drilling이 관리하고 Northern Ocean이 소유한 반잠수식 시추선 Deepsea Bollsta가 본 프로젝트에 투입됩니다. 해당 유전은 스타방에르 서쪽 160km, 수심 110-120m의 북해 중앙부에 위치하며, Equinor(42.62%), Aker BP(31.6%), Petoro(17.36%), TotalEnergies EP Norge(8.44%)이 참여합니다. 8개 시추공 프로그램 완료를 위해 계약이 연장되었으며, 2025년 8월 31일부터 시작된 2년 정규 계약에 1년 옵션이 남아 있습니다.</p><h3>Key Quotes</h3><br><li>"The Norwegian Ocean Industry Authority (Havtil) has granted Equinor consent to use the Deepsea Bollsta rig for production drilling, completion, temporary plugging, and workover on the Johan Sverdrup field." (노르웨이 해양산업청이 Equinor에 Deepsea Bollsta 시추선을 Johan Sverdrup 유전의 시추, 완성, 임시 마개, 작업정지에 사용할 수 있도록 허가를 부여했습니다.)</li><br><li>"The Deepsea Bollsta sixth-generation semi-submersible rig of Moss CS60E design can operate in both benign and harsh environments at water depths of up to 3,000 meters." (Deepsea Bollsta는 Moss CS60E 설계의 6세대 반잠수식 시추선으로 최대 3,000m 수심의 온화한 환경과 악천후 환경에서 모두 운영 가능합니다.)</li></p><h3>Technical Insights</h3><br>Moss CS60E 설계의 반잠수식 시추선은 북해의 악천후 환경에서도 안정적인 운영이 가능한 고급 플랫폼으로, 최대 3,000m 수심까지 대응할 수 있어 심해 시추 작업의 글로벌 표준이 되고 있습니다. 이러한 대형 시추선의 운영에 있어 COLREG 준수, 해상 교통관리(VTS) 통합, 그리고 IMO의 에너지 효율 규제(EEDI/CII)를 충족하는 것이 중요한 과제입니다. 향후 자율화 기술 도입 시, 원격 모니터링 및 동적 포지셔닝(DP) 시스템의 자동화가 운영 효율성과 안전성을 대폭 향상시킬 수 있을 것으로 예상됩니다. 해상 에너지 산업의 탈탄소화 추세에 따라 하이브리드 또는 전기 추진 시추선의 개발과 도입이 향후 선택이 아닌 필수 과제가 될 것입니다.</p></div>`,
      tags: ["North Sea","Equinor","Odfjell Drilling","Johan Sverdrup","Semi-submersible rig"],
      link: "https://www.offshore-energy.biz/green-light-for-north-sea-drilling-ops-with-odfjell-drilling-managed-rig/",
      coords: [2,59.2],
      location: "North Sea, 160km west of Stavanger, Norway"
    },
    {
      type: "news",
      title: "K-Line Establishes Intermediate Holding Company for Ship Management Operations",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/03/K-Line-sets-up-entity-to-oversee-all-of-its-ship-management-companies.png?image-crop-positioner-ts=1772790353",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><br>일본의 주요 해운사 가와사키 기센 가이샤(K-Line)가 선박 관리 회사들을 감독할 중간 지주회사인 K Line Ship Management Holdings(KLSM-H)를 설립했다. KLSM-H는 2026년 4월 1일부터 운영을 시작하며, 환경 규제 준수 및 기술 혁신 등의 도전 과제에 신속하고 효과적으로 대응하기 위한 통합 구조를 구축하는 것을 목표로 한다. 이번 조직 개편을 통해 K-Line은 그룹 전체의 선박 관리 표준을 수립하고, 인적자원·데이터·노하우 등의 경영 자원을 유연하게 활용함으로써 선박 관리 운영의 감시 수준을 강화할 계획이다.</p><h3>Key Quotes</h3><br><li>"By further strengthening the expertise it has been developing for each ship type, 'K' LINE will enhance the management structure to enable the entire Group to more flexibly utilize management resources (human resources, data and know-how), thereby strengthening the management oversight of ship management operations and further enhancing their sophistication" (K-Line은 선박 유형별로 개발한 전문성을 강화함으로써 경영 구조를 개선하고, 그룹 전체가 인적자원, 데이터, 노하우 등의 경영 자원을 보다 유연하게 활용하여 선박 관리 운영의 감시 수준을 강화하고 운영 수준을 높일 것이다)</li></p><p><li>"Each ship management company will continue to focus on further improving safety in navigation and transportation service quality, building on its on-site capabilities and expertise" (각 선박 관리 회사는 현장 역량과 전문성을 바탕으로 항해 안전 및 운송 서비스 품질 개선에 계속 집중할 것이다)</li></p><h3>Technical Insights</h3><br>K-Line의 이번 조직 개편은 선박 관리 산업의 디지털 트랜스포메이션 시대에 대응하기 위한 전략적 움직임으로 해석된다. KLSM-H를 통한 중앙집중식 감시 체계 구축은 IMO의 환경 규제(황산화물 규제, 탄소 중립화 등)와 해양 안전 기준 준수를 보다 효율적으로 달성할 수 있는 구조를 마련한 것으로 평가된다. 특히 다양한 선박 유형에 대한 데이터와 노하우의 통합 관리는 선박의 연료 효율 최적화, 예방 정비 시스템 고도화, 그리고 향후 자율운항선 도입 시 필요한 기술 기반 구축에 유리할 것으로 예상된다. 이러한 그룹 차원의 표준화와 자원 통합은 선박 운영의 안전성, 경제성, 규제 준수 능력을 동시에 강화하는 해운사의 중요한 경쟁 전략이다.</p></div>`,
      tags: ["Ship Management","K-Line","Organizational Structure","Maritime Operations"],
      link: "https://www.offshore-energy.biz/k-line-sets-up-entity-to-oversee-all-of-its-ship-management-companies/",
      coords: [139.767,35.6762],
      location: "Tokyo, Japan"
    },
    {
      type: "news",
      title: "TGS Deploys Ramform Vanguard for Oil & Gas and Offshore Wind Campaigns in European Summer 2026",
      source: "Offshore Energy",
      sourceMeta: "offshore-energy.biz · 2026-03-06",
      image: "https://www.offshore-energy.biz/wp-content/uploads/sites/6/2026/03/One-oil-gas-two-offshore-wind-campaigns-on-the-menu-for-TGS-seismic-vessel.jpg?image-crop-positioner-ts=1772784914",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>노르웨이의 에너지 데이터 회사 TGS가 보유한 지진 탐사선 Ramform Vanguard를 2026년 여름 유럽에서 석유·가스 부지 조사 및 해상풍력 사업에 투입할 계획이다. 86.2미터 길이의 1998년식 선박은 3월 중순부터 석유·가스 조사를 시작한 후 2개의 해상풍력 계약을 수행하며 3분기까지 작업을 지속할 예정이다. TGS의 CEO 크리스티안 요한센은 Ultra High Resolution 3D streamer 솔루션이 해상풍력 부지 특성파악 시장에서 입증된 성과를 보였으며, 석유·가스 조사로 기술 활용을 확대하고 있다고 밝혔다. 또한 TGS는 나이지리아 에너지 규제위원회(NUPRC)와 SeaSeis와 협력하여 나이지리아 외부 습곡대 지역에서 약 11,700제곱킬로미터 규모의 Nigeria Laide 다중 클라이언트 3D 조사를 실시 중이다.</p><h3>Key Quotes</h3><p><li>"We are very pleased to have secured a solid acquisition campaign for the Ramform Vanguard. We see opportunities for more work in the market, and if we are successful, the campaign may be extended further toward the end of Q3." (Ramform Vanguard의 견고한 취득 캠페인 확보에 만족하며, 시장 내 추가 작업 기회가 있으며 성공할 경우 3분기 말까지 캠페인을 연장할 수 있다)</li></p><p><li>"Our Ultra High Resolution 3D streamer solution has a proven track record within the offshore wind site characterization market. We are now taking another step and will do our first oil and gas site survey, thereby broadening our product offering and leveraging our technology to optimize asset utilization." (초고해상도 3D 스트리머 솔루션은 해상풍력 부지 특성화 시장에서 입증된 실적을 보유하고 있으며, 석유·가스 부지 조사를 통해 제품 포트폴리오를 확대하고 자산 활용을 최적화한다)</li></p><h3>Technical Insights</h3><p>Ramform Vanguard의 배치는 지진 탐사 기술이 재생에너지와 전통 에너지 산업 간의 교차 활용을 보여주는 사례이다. Ultra High Resolution 3D streamer 기술은 해상풍력 기초부지 평가와 석유·가스 지층 매핑 양쪽에 동일하게 적용되므로, 선박 자산의 유연한 활용을 가능하게 한다. 해상풍력 개발이 확대되면서 고정밀 지구물리 조사의 수요가 증가하고 있으며, 전통 에너지 기업들의 기술과 장비 다각화가 에너지 전환 시장에 진입하는 전략으로 활용되고 있다. 이러한 추세는 해양 조사선의 활용도 증가와 해양 기술 표준화의 중요성을 강조한다.</p></div>`,
      tags: ["Seismic Survey","Offshore Wind","Oil & Gas","TGS","Ramform Vanguard"],
      link: "https://www.offshore-energy.biz/one-oil-gas-two-offshore-wind-campaigns-on-schedule-for-tgs-seismic-vessel/",
      coords: [0,0],
      location: "Europe"
    },
    {
      type: "news",
      title: "US Provides $20 Billion Reinsurance for Maritime Losses in Gulf Region",
      source: "MarineLink",
      sourceMeta: "marinelink.com · 2026-03-06",
      image: "https://images.marinelink.com/images/maritime/w800/adobe-stockpeter-168693.jpeg",
      content: `<div style="font-weight:300; line-height:1.8;"><h3>Executive Summary</h3><p>미국 국제개발금융공사(DFC)가 이란과의 분쟁으로 인한 페르시만만 지역의 해상 손실에 대해 최대 200억 달러 규모의 재보험을 제공하기로 발표했다. 트럼프 대통령의 지시에 따라 DFC는 호르무즈 해협을 통한 석유 및 LNG 유조선 운송 대란을 해결하기 위해 정치위험보험 및 재정보증을 제공할 예정이다. 현재 호르무즈 해협을 통해 전 세계 석유의 약 20%가 운송되고 있으나, 여러 유조선이 피격으로 손상되거나 좌초되어 운송이 거의 중단된 상태이다. 재보험은 선체/기계류 및 화물보험에 초점을 두고 미국 보험사 파트너들과 함께 시행될 것이며, 미 재무부와 중앙사령부가 조율하고 있다.</p><h3>Key Quotes</h3><p><li>"The U.S. will provide reinsurance for losses up to $20 billion in the Gulf region, to help provide confidence for oil and gas shippers during the war on Iran" (이란과의 분쟁 중 석유 및 가스 해운업체의 신뢰 회복을 위해 미국이 페르시만만 지역의 손실에 대해 최대 200억 달러 규모의 재보험을 제공할 것)</li></p><p><li>"Oil shipments have been largely blocked through the Strait with a number of tankers damaged by strikes and others stranded" (호르무즈 해협을 통한 석유 운송이 대부분 차단되었으며 여러 유조선이 피격으로 손상되거나 좌초됨)</li></p><p><li>"War-risk premiums have jumped and some providers have scaled back or withdrawn coverage" (전쟁 위험 보험료가 급상승하였고 일부 보험사들은 보험 범위를 축소하거나 철수함)</li></p><h3>Technical Insights</h3><p>이번 정책은 호르무즈 해협이라는 전략적 해상교통로의 안정성을 확보하기 위한 정부 차원의 개입으로, 국제해운산업에 미치는 영향이 상당하다. 전쟁위험보험료의 급등으로 인한 해운사의 운영비 증가와 보험 공급 부족 문제를 정부 재보험으로 해결함으로써 국제 해상무역의 연속성을 보장하려는 전략이다. COLREG 준수와 IMO 규정 이행 외에도 지정학적 위험요소가 현대 해운산업의 중요한 변수임을 시사하며, 이러한 정치적·군사적 리스크 관리가 해운회사의 운영전략 수립 시 필수적 고려 요소가 되고 있다는 점을 강조한다.</p></div>`,
      tags: ["Reinsurance","Gulf Region","Oil & Gas Shipping","Political Risk Insurance","Strait of Hormuz"],
      link: "https://www.marinelink.com/news/us-reinsure-maritime-losses-gulf-region-536653",
      coords: [56.1499,25.2854],
      location: "Strait of Hormuz, Gulf Region"
    }
  ]
});
