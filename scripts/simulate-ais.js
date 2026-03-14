// ═══════════════════════════════════════════════════════════════
// simulate-ais.js — Virtual AIS Fleet Simulator
// 100 vessels sailing global routes, updated every hour
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const STATE_PATH = path.join(__dirname, 'ais-state.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'ais-data.json');

// ── Port Database ──
const PORTS = [
  {name:"Singapore",lat:1.26,lon:103.84},{name:"Shanghai",lat:31.23,lon:121.47},
  {name:"Busan",lat:35.10,lon:129.04},{name:"Rotterdam",lat:51.90,lon:4.50},
  {name:"Hamburg",lat:53.55,lon:9.99},{name:"Dubai",lat:25.27,lon:55.30},
  {name:"Hong Kong",lat:22.30,lon:114.17},{name:"Los Angeles",lat:33.74,lon:-118.27},
  {name:"New York",lat:40.67,lon:-74.02},{name:"Yokohama",lat:35.44,lon:139.64},
  {name:"Kaohsiung",lat:22.62,lon:120.30},{name:"Antwerp",lat:51.23,lon:4.40},
  {name:"Felixstowe",lat:51.96,lon:1.33},{name:"Jeddah",lat:21.49,lon:39.19},
  {name:"Mumbai",lat:19.00,lon:72.87},{name:"Colombo",lat:6.94,lon:79.85},
  {name:"Cape Town",lat:-33.92,lon:18.42},{name:"Santos",lat:-23.95,lon:-46.30},
  {name:"Panama Canal",lat:9.08,lon:-79.68},{name:"Suez",lat:29.97,lon:32.55},
  {name:"Piraeus",lat:37.94,lon:23.65},{name:"Algeciras",lat:36.13,lon:-5.44},
  {name:"Vancouver",lat:49.29,lon:-123.11},{name:"Melbourne",lat:-37.82,lon:144.96},
  {name:"Durban",lat:-29.87,lon:31.03},{name:"Houston",lat:29.76,lon:-95.07},
  {name:"Savannah",lat:32.08,lon:-81.09},{name:"Le Havre",lat:49.49,lon:0.11},
  {name:"Tanjung Pelepas",lat:1.36,lon:103.55},{name:"Qingdao",lat:36.07,lon:120.38}
];

// ── Vessel Definitions ──
const VESSEL_TYPES = [
  {type:"Container",prefix:"MV",color:"#3498db"},
  {type:"Tanker",prefix:"MT",color:"#e74c3c"},
  {type:"Bulk Carrier",prefix:"MV",color:"#2ecc71"},
  {type:"LNG Carrier",prefix:"LNG",color:"#9b59b6"},
  {type:"Car Carrier",prefix:"MV",color:"#f39c12"},
  {type:"General Cargo",prefix:"MV",color:"#1abc9c"}
];

const SHIP_NAMES = [
  "Pacific Explorer","Atlantic Pioneer","Orient Star","Nordic Voyager","Arabian Wind",
  "Coral Maiden","Golden Gate","Silver Wave","Crystal Bay","Iron Phoenix",
  "Blue Horizon","Ocean Pride","Sea Dragon","Storm Runner","Cape Fortune",
  "Emerald Spirit","Jade Emperor","Tiger Shark","Pearl River","Sunrise Glory",
  "Maersk Aurora","Evergreen Faith","COSCO Harmony","Yang Ming Unity","MSC Diana",
  "Hyundai Courage","K-Line Breeze","NYK Stellar","MOL Triumph","HMM Victory",
  "Northern Light","Southern Cross","Eastern Promise","Western Frontier","Polar Star",
  "Equator Sun","Monsoon Wind","Trade Arrow","Silk Road","Spice Route",
  "Global Spirit","World Bridge","Neptune Force","Poseidon Grace","Triton Wave",
  "Coral Reef","Deep Current","Tidal Express","Gulf Stream","Arctic Fox",
  "Pacific Gem","Indian Ocean","Red Sea Star","Baltic Queen","Caspian Gold",
  "Bosphorus Gate","Malacca Dawn","Sunda Spirit","Lombok Tide","Tsugaru Mist",
  "Dover Knight","Gibraltar Sun","Hormuz Passage","Panama Light","Suez Champion",
  "Santos Bay","Rio Grande","Amazon Queen","Yangtze King","Mekong Spirit",
  "Danube Prince","Rhine Valley","Thames Trader","Seine Voyager","Elbe Pioneer",
  "Han River","Nakdong Star","Sumida Wave","Huangpu Gold","Victoria Peak",
  "Table Mountain","Fuji Spirit","Kilimanjaro","Denali Force","Everest Crown",
  "Sahara Wind","Gobi Express","Tundra Ice","Savanna Sun","Rainforest Dream",
  "Typhoon Rider","Cyclone Path","Tsunami Guard","Earthquake Shield","Volcano Fire",
  "Constellation","Andromeda","Orion Belt","Sirius Bright","Polaris North",
  "Eclipse Shadow","Meteor Flash","Comet Trail","Nebula Glow","Galaxy Quest"
];

// ── Math Helpers ──
function toRad(d) { return d * Math.PI / 180; }
function toDeg(r) { return r * 180 / Math.PI; }

function greatCircleBearing(lat1, lon1, lat2, lon2) {
  var dLon = toRad(lon2 - lon1);
  var y = Math.sin(dLon) * Math.cos(toRad(lat2));
  var x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
          Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function greatCircleDistance(lat1, lon1, lat2, lon2) {
  var R = 3440.065; // Earth radius in nautical miles
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function moveAlongBearing(lat, lon, bearing, distanceNM) {
  var R = 3440.065;
  var d = distanceNM / R;
  var brng = toRad(bearing);
  var lat1 = toRad(lat);
  var lon1 = toRad(lon);
  var lat2 = Math.asin(Math.sin(lat1)*Math.cos(d) + Math.cos(lat1)*Math.sin(d)*Math.cos(brng));
  var lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d)*Math.cos(lat1),
                                Math.cos(d)-Math.sin(lat1)*Math.sin(lat2));
  return { lat: toDeg(lat2), lon: toDeg(lon2) };
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function pickRandomPort(excludeIdx) {
  var idx;
  do { idx = Math.floor(Math.random() * PORTS.length); } while (idx === excludeIdx);
  return idx;
}

// ── Initialize Fleet ──
function initFleet() {
  var vessels = [];
  for (var i = 0; i < 100; i++) {
    var vType = VESSEL_TYPES[i % VESSEL_TYPES.length];
    var originIdx = Math.floor(Math.random() * PORTS.length);
    var destIdx = pickRandomPort(originIdx);
    var origin = PORTS[originIdx];
    var dest = PORTS[destIdx];

    // Start at random progress along route (0~100%)
    var progress = Math.random();
    var bearing = greatCircleBearing(origin.lat, origin.lon, dest.lat, dest.lon);
    var totalDist = greatCircleDistance(origin.lat, origin.lon, dest.lat, dest.lon);
    var traveled = totalDist * progress;
    var pos = moveAlongBearing(origin.lat, origin.lon, bearing, traveled);
    var speed = parseFloat(randomBetween(15, 20).toFixed(1));

    vessels.push({
      mmsi: "2100" + String(i).padStart(5, "0"),
      name: vType.prefix + " " + SHIP_NAMES[i],
      type: vType.type,
      color: vType.color,
      speed: speed,
      heading: parseFloat(bearing.toFixed(1)),
      lat: parseFloat(pos.lat.toFixed(5)),
      lon: parseFloat(pos.lon.toFixed(5)),
      originIdx: originIdx,
      destIdx: destIdx,
      origin: origin.name,
      destination: dest.name,
      track: [[pos.lon, pos.lat, new Date().toISOString()]]
    });
  }
  return vessels;
}

// ── Update Fleet (advance positions) ──
function updateFleet(vessels, elapsedHours) {
  var now = new Date().toISOString();

  for (var i = 0; i < vessels.length; i++) {
    var v = vessels[i];
    var dest = PORTS[v.destIdx];
    var distToDest = greatCircleDistance(v.lat, v.lon, dest.lat, dest.lon);
    var distTraveled = v.speed * elapsedHours;

    if (distTraveled >= distToDest) {
      // Arrived — pick new destination
      var oldDestIdx = v.destIdx;
      v.originIdx = oldDestIdx;
      v.destIdx = pickRandomPort(oldDestIdx);
      v.origin = PORTS[v.originIdx].name;
      v.destination = PORTS[v.destIdx].name;
      v.speed = parseFloat(randomBetween(15, 20).toFixed(1));

      // Place at destination port
      v.lat = dest.lat;
      v.lon = dest.lon;

      // Recalc heading to new dest
      var newDest = PORTS[v.destIdx];
      v.heading = parseFloat(greatCircleBearing(v.lat, v.lon, newDest.lat, newDest.lon).toFixed(1));
    } else {
      // Move along great circle
      var bearing = greatCircleBearing(v.lat, v.lon, dest.lat, dest.lon);
      // Add small random drift for realism (+/- 2 degrees)
      bearing += randomBetween(-2, 2);
      var newPos = moveAlongBearing(v.lat, v.lon, bearing, distTraveled);
      v.lat = parseFloat(newPos.lat.toFixed(5));
      v.lon = parseFloat(newPos.lon.toFixed(5));
      v.heading = parseFloat(bearing.toFixed(1));
      // Slight speed variation
      v.speed = parseFloat(Math.max(15, Math.min(20, v.speed + randomBetween(-0.3, 0.3))).toFixed(1));
    }

    // Append to track (keep last 72 points = 72 hours if hourly)
    v.track.push([v.lon, v.lat, now]);
    if (v.track.length > 72) {
      v.track = v.track.slice(-72);
    }
  }
  return vessels;
}

// ── Main ──
function main() {
  var vessels;
  var isNew = false;

  if (fs.existsSync(STATE_PATH)) {
    console.log('Loading existing fleet state...');
    var state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
    vessels = state.vessels;
    // Update positions (1 hour elapsed)
    vessels = updateFleet(vessels, 1);
  } else {
    console.log('Initializing new fleet (100 vessels)...');
    vessels = initFleet();
    isNew = true;
  }

  // Save state (includes internal fields like originIdx, destIdx)
  fs.writeFileSync(STATE_PATH, JSON.stringify({ vessels: vessels }, null, 0));
  console.log('State saved to ' + STATE_PATH);

  // Generate public output (strip internal fields)
  var publicVessels = vessels.map(function(v) {
    return {
      mmsi: v.mmsi,
      name: v.name,
      type: v.type,
      color: v.color,
      speed: v.speed,
      heading: v.heading,
      lat: v.lat,
      lon: v.lon,
      origin: v.origin,
      destination: v.destination,
      track: v.track
    };
  });

  var output = {
    updated: new Date().toISOString(),
    count: publicVessels.length,
    vessels: publicVessels
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output));
  console.log('Output saved to ' + OUTPUT_PATH + ' (' + publicVessels.length + ' vessels)');

  // Log some stats
  var types = {};
  vessels.forEach(function(v) { types[v.type] = (types[v.type] || 0) + 1; });
  console.log('Fleet composition:', JSON.stringify(types));
  console.log('Sample vessel:', vessels[0].name, '@', vessels[0].lat.toFixed(2), vessels[0].lon.toFixed(2), '→', vessels[0].destination, vessels[0].speed + 'kn');
}

main();
