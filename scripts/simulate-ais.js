// ═══════════════════════════════════════════════════════════════
// simulate-ais.js v3.0 — Realistic Ocean Route AIS Simulator
// Dense waypoint chains along real shipping lanes
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const STATE_PATH = path.join(__dirname, 'ais-state.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'ais-data.json');

// ── PORTS ──
const P = {
  SIN:{lat:1.26,lon:103.84},SHA:{lat:31.23,lon:121.47},BUS:{lat:35.10,lon:129.04},
  RTM:{lat:51.90,lon:4.50},HAM:{lat:53.55,lon:9.99},DXB:{lat:25.27,lon:55.30},
  HKG:{lat:22.30,lon:114.17},LAX:{lat:33.74,lon:-118.27},NYC:{lat:40.67,lon:-74.02},
  YOK:{lat:35.44,lon:139.64},KHH:{lat:22.62,lon:120.30},ANT:{lat:51.23,lon:4.40},
  FEL:{lat:51.96,lon:1.33},JED:{lat:21.49,lon:39.19},MUM:{lat:19.00,lon:72.87},
  CMB:{lat:6.94,lon:79.85},CPT:{lat:-33.92,lon:18.42},SAN:{lat:-23.95,lon:-46.30},
  PAN:{lat:9.08,lon:-79.68},SUE:{lat:29.97,lon:32.55},PIR:{lat:37.94,lon:23.65},
  ALG:{lat:36.13,lon:-5.44},VAN:{lat:49.29,lon:-123.11},MEL:{lat:-37.82,lon:144.96},
  DUR:{lat:-29.87,lon:31.03},HOU:{lat:29.76,lon:-95.07},SAV:{lat:32.08,lon:-81.09},
  LEH:{lat:49.49,lon:0.11},TPP:{lat:1.36,lon:103.55},QIN:{lat:36.07,lon:120.38}
};
const PORTS = Object.keys(P).map(k => ({id:k,...P[k]}));

// ── SHIPPING LANES (dense waypoint chains on ocean) ──
// Each lane is an array of [lat,lon] that stays strictly in water

const LANE = {
  // East Asia coastal
  korea_japan: [[35.0,129.5],[34.5,133.0],[34.0,137.0],[34.5,139.5]],
  japan_pacific: [[35.5,140.0],[36.0,142.0],[37.0,145.0]],
  china_coast: [[36.0,121.5],[31.5,122.5],[28.0,122.0],[25.0,120.0],[22.5,118.0]],
  taiwan_strait: [[25.0,120.0],[23.0,119.5],[22.0,118.5]],
  south_china_sea: [[22.0,114.5],[18.0,114.0],[14.0,112.0],[10.0,109.0],[7.0,106.0],[4.0,105.0],[2.0,104.5]],

  // Malacca Strait
  malacca: [[1.5,104.0],[2.5,102.0],[4.0,99.5],[5.5,97.0],[6.0,95.0]],

  // Indian Ocean
  indian_east: [[6.0,95.0],[5.0,88.0],[5.5,82.0],[6.5,80.0]],
  indian_central: [[6.5,80.0],[5.0,73.0],[4.0,65.0],[5.0,58.0]],
  indian_west: [[5.0,58.0],[8.0,52.0],[12.0,45.0]],
  indian_mumbai: [[6.5,80.0],[8.0,76.0],[12.0,74.0],[16.0,73.0],[19.0,72.5]],

  // Gulf of Aden → Red Sea → Suez
  gulf_aden: [[12.0,45.0],[12.5,44.0],[12.8,43.5]],
  bab_mandeb: [[12.8,43.5],[13.5,43.0],[14.5,42.0]],
  red_sea: [[14.5,42.0],[17.0,40.5],[20.0,38.5],[23.0,36.5],[26.0,34.5],[28.0,33.5],[30.0,32.6]],
  suez_med: [[30.0,32.6],[31.0,32.3],[31.5,32.0]],

  // Mediterranean
  med_east: [[31.5,32.0],[33.0,30.0],[34.5,28.0],[35.5,25.0],[36.0,22.0]],
  med_central: [[36.0,22.0],[37.0,18.0],[37.5,15.0],[38.0,12.0],[37.5,8.0]],
  med_west: [[37.5,8.0],[37.0,3.0],[36.5,0.0],[36.2,-3.0],[36.0,-5.3]],

  // Gibraltar → Atlantic → North Europe
  gibraltar_biscay: [[36.0,-5.5],[37.0,-8.0],[39.0,-10.0],[42.0,-10.0],[44.0,-6.0],[46.0,-4.0]],
  biscay_english: [[46.0,-4.0],[48.0,-5.0],[49.0,-4.0],[49.5,-2.0],[50.0,0.0]],
  english_north: [[50.0,0.0],[51.0,1.5],[51.5,2.5],[52.0,3.5],[52.5,4.0]],

  // Persian Gulf
  hormuz: [[25.3,55.5],[26.0,56.5],[26.5,57.0]],
  hormuz_indian: [[26.5,57.0],[24.0,60.0],[20.0,62.0],[15.0,58.0],[12.0,50.0],[12.0,45.0]],

  // Cape of Good Hope route
  durban_cape: [[-30.0,31.5],[-33.0,28.0],[-34.5,22.0],[-34.8,18.5]],
  cape_atlantic: [[-34.8,18.5],[-33.0,10.0],[-28.0,0.0],[-20.0,-10.0],[-10.0,-15.0]],
  w_africa_up: [[-10.0,-15.0],[0.0,-10.0],[10.0,-18.0],[20.0,-20.0]],

  // South Atlantic
  brazil_atlantic: [[-24.0,-44.0],[-20.0,-35.0],[-15.0,-25.0],[-10.0,-15.0]],

  // North Atlantic
  n_atlantic: [[20.0,-20.0],[30.0,-35.0],[35.0,-45.0],[40.0,-50.0],[42.0,-55.0]],
  atlantic_usec: [[42.0,-55.0],[41.0,-65.0],[40.0,-72.0]],
  atlantic_europe: [[42.0,-55.0],[45.0,-40.0],[48.0,-20.0],[49.0,-5.0],[50.0,0.0]],

  // Caribbean / Panama
  caribbean: [[40.0,-72.0],[35.0,-75.0],[30.0,-80.0],[25.0,-80.0],[18.0,-75.0],[15.0,-70.0],[12.0,-68.0],[10.0,-75.0],[9.5,-79.5]],
  panama_pacific: [[9.0,-79.8],[8.0,-82.0],[8.0,-85.0],[10.0,-90.0]],

  // Trans-Pacific
  pacific_north: [[10.0,-90.0],[15.0,-110.0],[20.0,-130.0],[25.0,-140.0],[30.0,-145.0],[33.0,-135.0],[34.0,-120.0]],
  pacific_asia: [[37.0,145.0],[38.0,160.0],[40.0,170.0],[42.0,180.0],[42.0,-170.0],[40.0,-160.0],[38.0,-150.0],[35.0,-140.0],[33.0,-130.0],[34.0,-120.0]],
  pacific_south: [[34.0,-120.0],[30.0,-130.0],[25.0,-140.0],[15.0,-155.0],[5.0,-160.0],[-5.0,-165.0],[-15.0,-170.0],[-25.0,178.0],[-30.0,165.0],[-35.0,155.0],[-37.5,145.0]],

  // Australia
  aus_approach: [[-20.0,115.0],[-25.0,113.0],[-30.0,114.0],[-34.0,118.0],[-36.0,130.0],[-38.0,142.0],[-37.8,145.0]],
  aus_indian: [[6.0,95.0],[0.0,95.0],[-5.0,97.0],[-10.0,100.0],[-15.0,108.0],[-20.0,115.0]],

  // US East Coast
  usec_coast: [[40.5,-73.5],[38.0,-75.0],[35.0,-76.0],[32.5,-80.0],[30.0,-81.5]],
  gulf_mexico: [[30.0,-81.5],[27.0,-84.0],[26.0,-88.0],[27.0,-93.0],[29.5,-94.5]],

  // Cape → Indian Ocean → Asia (eastbound)
  cape_indian_e: [[-34.8,18.5],[-33.0,25.0],[-30.0,35.0],[-25.0,45.0],[-18.0,55.0],[-10.0,65.0],[-5.0,75.0],[0.0,85.0],[3.0,93.0],[6.0,95.0]],
};

// ── ROUTE DEFINITIONS: origin → destination via lane segments ──
const ROUTES = [
  // Asia ↔ Europe (Suez)
  {from:['BUS','SHA','QIN','YOK'],to:['RTM','HAM','ANT','FEL','LEH'],via:['korea_japan','japan_pacific','!japan_pacific','!korea_japan','china_coast','south_china_sea','malacca','indian_east','indian_central','indian_west','gulf_aden','bab_mandeb','red_sea','suez_med','med_east','med_central','med_west','gibraltar_biscay','biscay_english','english_north']},
  {from:['HKG','KHH'],to:['RTM','HAM','ANT','FEL','LEH'],via:['south_china_sea','malacca','indian_east','indian_central','indian_west','gulf_aden','bab_mandeb','red_sea','suez_med','med_east','med_central','med_west','gibraltar_biscay','biscay_english','english_north']},
  {from:['SIN','TPP'],to:['RTM','HAM','ANT','FEL','LEH'],via:['malacca','indian_east','indian_central','indian_west','gulf_aden','bab_mandeb','red_sea','suez_med','med_east','med_central','med_west','gibraltar_biscay','biscay_english','english_north']},

  // Asia ↔ US West Coast (Trans-Pacific)
  {from:['BUS','SHA','QIN','YOK'],to:['LAX','VAN'],via:['pacific_asia']},
  {from:['HKG','KHH','SIN','TPP'],to:['LAX','VAN'],via:['south_china_sea','!south_china_sea','!malacca','!indian_east','pacific_asia']},

  // Asia ↔ Middle East
  {from:['BUS','SHA','HKG','SIN'],to:['DXB','JED'],via:['south_china_sea','malacca','indian_east','indian_central','hormuz_indian','!hormuz_indian','hormuz']},
  {from:['SIN','TPP'],to:['DXB'],via:['malacca','indian_east','indian_central','hormuz_indian','!hormuz_indian','hormuz']},

  // Europe ↔ US East Coast (Trans-Atlantic)
  {from:['RTM','HAM','ANT','FEL','LEH'],to:['NYC','SAV','HOU'],via:['english_north','!english_north','biscay_english','!biscay_english','atlantic_europe','!atlantic_europe','n_atlantic','!n_atlantic','atlantic_usec','usec_coast','gulf_mexico']},

  // Middle East → Europe
  {from:['DXB','JED'],to:['RTM','HAM','PIR','ALG'],via:['hormuz','hormuz_indian','gulf_aden','bab_mandeb','red_sea','suez_med','med_east','med_central','med_west','gibraltar_biscay','biscay_english','english_north']},

  // Asia → Australia
  {from:['SHA','HKG','SIN'],to:['MEL'],via:['south_china_sea','!south_china_sea','aus_indian','aus_approach']},

  // Africa routes
  {from:['DUR','CPT'],to:['RTM','HAM'],via:['durban_cape','cape_atlantic','w_africa_up','n_atlantic','!n_atlantic','atlantic_europe','english_north']},
  {from:['DUR','CPT'],to:['SHA','BUS','SIN'],via:['!durban_cape','cape_indian_e','malacca','south_china_sea']},

  // South America
  {from:['SAN'],to:['RTM','HAM'],via:['brazil_atlantic','cape_atlantic','!cape_atlantic','w_africa_up','n_atlantic','!n_atlantic','atlantic_europe','english_north']},
  {from:['SAN'],to:['NYC','SAV'],via:['brazil_atlantic','!brazil_atlantic','!cape_atlantic','n_atlantic','atlantic_usec']},

  // India/Sri Lanka
  {from:['MUM','CMB'],to:['RTM','HAM'],via:['indian_mumbai','!indian_mumbai','indian_central','indian_west','gulf_aden','bab_mandeb','red_sea','suez_med','med_east','med_central','med_west','gibraltar_biscay','biscay_english','english_north']},
  {from:['MUM','CMB'],to:['SIN','HKG','SHA'],via:['indian_mumbai','!indian_mumbai','indian_east','!indian_east','malacca','!malacca','south_china_sea']},

  // Panama route
  {from:['NYC','SAV'],to:['LAX','VAN'],via:['usec_coast','!usec_coast','!gulf_mexico','caribbean','panama_pacific','pacific_north']},
  {from:['LAX'],to:['NYC','SAV'],via:['!pacific_north','panama_pacific','!panama_pacific','caribbean','!caribbean','atlantic_usec','!atlantic_usec','usec_coast']},
];

// ── Build full waypoint chain for a route ──
function buildChain(fromPort, toPort, viaLanes) {
  var chain = [{lat:fromPort.lat,lon:fromPort.lon}];

  for (var i = 0; i < viaLanes.length; i++) {
    var laneName = viaLanes[i];
    var reverse = laneName.startsWith('!');
    if (reverse) laneName = laneName.slice(1);

    var pts = LANE[laneName];
    if (!pts) continue;

    var segment = pts.map(function(p){return{lat:p[0],lon:p[1]};});
    if (reverse) segment = segment.slice().reverse();

    // Skip first point if same as last chain point (avoid duplicate)
    var start = 0;
    if (chain.length > 0) {
      var last = chain[chain.length-1];
      if (Math.abs(last.lat - segment[0].lat) < 1 && Math.abs(last.lon - segment[0].lon) < 1) {
        start = 1;
      }
    }
    for (var j = start; j < segment.length; j++) {
      chain.push(segment[j]);
    }
  }

  chain.push({lat:toPort.lat,lon:toPort.lon});
  return chain;
}

// ── Vessel Types ──
var TYPES = [
  {type:"Container",prefix:"MV",color:"#3b82f6"},
  {type:"Tanker",prefix:"MT",color:"#ef4444"},
  {type:"Bulk Carrier",prefix:"MV",color:"#22c55e"},
  {type:"LNG Carrier",prefix:"LNG",color:"#a855f7"},
  {type:"Car Carrier",prefix:"MV",color:"#f59e0b"},
  {type:"General Cargo",prefix:"MV",color:"#06b6d4"}
];
var NAMES=["Pacific Explorer","Atlantic Pioneer","Orient Star","Nordic Voyager","Arabian Wind","Coral Maiden","Golden Gate","Silver Wave","Crystal Bay","Iron Phoenix","Blue Horizon","Ocean Pride","Sea Dragon","Storm Runner","Cape Fortune","Emerald Spirit","Jade Emperor","Tiger Shark","Pearl River","Sunrise Glory","Maersk Aurora","Evergreen Faith","COSCO Harmony","Yang Ming Unity","MSC Diana","Hyundai Courage","K-Line Breeze","NYK Stellar","MOL Triumph","HMM Victory","Northern Light","Southern Cross","Eastern Promise","Western Frontier","Polar Star","Equator Sun","Monsoon Wind","Trade Arrow","Silk Road","Spice Route","Global Spirit","World Bridge","Neptune Force","Poseidon Grace","Triton Wave","Coral Reef","Deep Current","Tidal Express","Gulf Stream","Arctic Fox","Pacific Gem","Indian Ocean","Red Sea Star","Baltic Queen","Caspian Gold","Bosphorus Gate","Malacca Dawn","Sunda Spirit","Lombok Tide","Tsugaru Mist","Dover Knight","Gibraltar Sun","Hormuz Passage","Panama Light","Suez Champion","Santos Bay","Rio Grande","Amazon Queen","Yangtze King","Mekong Spirit","Danube Prince","Rhine Valley","Thames Trader","Seine Voyager","Elbe Pioneer","Han River","Nakdong Star","Sumida Wave","Huangpu Gold","Victoria Peak","Table Mountain","Fuji Spirit","Kilimanjaro","Denali Force","Everest Crown","Sahara Wind","Gobi Express","Tundra Ice","Savanna Sun","Rainforest Dream","Typhoon Rider","Cyclone Path","Tsunami Guard","Earthquake Shield","Volcano Fire","Constellation","Andromeda","Orion Belt","Sirius Bright","Polaris North"];

// ── Math ──
function toRad(d){return d*Math.PI/180;}
function toDeg(r){return r*180/Math.PI;}
function gcBearing(la1,lo1,la2,lo2){var dL=toRad(lo2-lo1);var y=Math.sin(dL)*Math.cos(toRad(la2));var x=Math.cos(toRad(la1))*Math.sin(toRad(la2))-Math.sin(toRad(la1))*Math.cos(toRad(la2))*Math.cos(dL);return(toDeg(Math.atan2(y,x))+360)%360;}
function gcDist(la1,lo1,la2,lo2){var R=3440.065,dLa=toRad(la2-la1),dLo=toRad(lo2-lo1);var a=Math.sin(dLa/2)**2+Math.cos(toRad(la1))*Math.cos(toRad(la2))*Math.sin(dLo/2)**2;return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));}
function moveTo(la,lo,brg,d){var R=3440.065,dr=d/R,b=toRad(brg),la1=toRad(la),lo1=toRad(lo);var la2=Math.asin(Math.sin(la1)*Math.cos(dr)+Math.cos(la1)*Math.sin(dr)*Math.cos(b));var lo2=lo1+Math.atan2(Math.sin(b)*Math.sin(dr)*Math.cos(la1),Math.cos(dr)-Math.sin(la1)*Math.sin(la2));return{lat:+toDeg(la2).toFixed(5),lon:+toDeg(lo2).toFixed(5)};}
function rand(a,b){return a+Math.random()*(b-a);}

// ── Pick route for a vessel ──
function pickRoute() {
  var r = ROUTES[Math.floor(Math.random() * ROUTES.length)];
  var fromId = r.from[Math.floor(Math.random() * r.from.length)];
  var toId = r.to[Math.floor(Math.random() * r.to.length)];
  var fromPort = P[fromId]; if(!fromPort) return null;
  var toPort = P[toId]; if(!toPort) return null;
  var chain = buildChain({lat:fromPort.lat,lon:fromPort.lon},{lat:toPort.lat,lon:toPort.lon},r.via);
  return {fromId:fromId,toId:toId,chain:chain};
}

// ── Init Fleet ──
function initFleet(){
  var vessels = [];
  for(var i=0;i<100;i++){
    var vt = TYPES[i%TYPES.length];
    var rt = pickRoute();
    if(!rt) { rt = pickRoute(); } // retry once

    var chain = rt.chain;
    var speed = +(rand(15,20)).toFixed(1);

    // Calculate total chain distance
    var totalDist = 0;
    for(var w=1;w<chain.length;w++){
      totalDist += gcDist(chain[w-1].lat,chain[w-1].lon,chain[w].lat,chain[w].lon);
    }

    // Place vessel at random progress along chain
    var targetDist = totalDist * Math.random();
    var pos = chain[0];
    var wpIdx = 0;
    var remaining = targetDist;
    for(var w=1;w<chain.length;w++){
      var segDist = gcDist(chain[w-1].lat,chain[w-1].lon,chain[w].lat,chain[w].lon);
      if(remaining <= segDist){
        var brg = gcBearing(chain[w-1].lat,chain[w-1].lon,chain[w].lat,chain[w].lon);
        pos = moveTo(chain[w-1].lat,chain[w-1].lon,brg,remaining);
        wpIdx = w;
        break;
      }
      remaining -= segDist;
      wpIdx = w;
      pos = {lat:chain[w].lat,lon:chain[w].lon};
    }

    var nextWp = wpIdx < chain.length ? chain[wpIdx] : chain[chain.length-1];
    var heading = +(gcBearing(pos.lat,pos.lon,nextWp.lat,nextWp.lon)).toFixed(1);

    vessels.push({
      mmsi:"2100"+String(i).padStart(5,"0"),
      name:vt.prefix+" "+NAMES[i],
      type:vt.type,color:vt.color,
      speed:speed,heading:heading,
      lat:pos.lat,lon:pos.lon,
      fromId:rt.fromId,toId:rt.toId,
      origin:rt.fromId,destination:rt.toId,
      chain:chain,wpIdx:wpIdx,
      track:[[pos.lon,pos.lat,new Date().toISOString()]]
    });
  }
  return vessels;
}

// ── Update Fleet ──
function updateFleet(vessels,hours){
  var now = new Date().toISOString();
  for(var i=0;i<vessels.length;i++){
    var v = vessels[i];
    var dist = v.speed * hours;
    var chain = v.chain;
    var wpIdx = v.wpIdx || 0;

    while(dist > 0 && wpIdx < chain.length){
      var target = chain[wpIdx];
      var d = gcDist(v.lat,v.lon,target.lat,target.lon);
      if(dist >= d){
        v.lat=target.lat;v.lon=target.lon;
        dist-=d; wpIdx++;
      } else {
        var brg=gcBearing(v.lat,v.lon,target.lat,target.lon);
        brg+=rand(-0.5,0.5);
        var np=moveTo(v.lat,v.lon,brg,dist);
        v.lat=np.lat;v.lon=np.lon;
        v.heading=+((brg+360)%360).toFixed(1);
        dist=0;
      }
    }
    v.wpIdx=wpIdx;

    // Arrived → new voyage
    if(wpIdx >= chain.length){
      var rt = pickRoute();
      if(rt){
        v.fromId=rt.fromId;v.toId=rt.toId;
        v.origin=rt.fromId;v.destination=rt.toId;
        v.chain=rt.chain;v.wpIdx=0;
        v.lat=rt.chain[0].lat;v.lon=rt.chain[0].lon;
        v.speed=+(rand(15,20)).toFixed(1);
        if(rt.chain.length>1){
          v.heading=+(gcBearing(v.lat,v.lon,rt.chain[1].lat,rt.chain[1].lon)).toFixed(1);
        }
      }
    }

    // Speed drift
    v.speed=+Math.max(15,Math.min(20,v.speed+rand(-0.2,0.2))).toFixed(1);

    // Heading to next wp
    if(v.wpIdx<v.chain.length){
      var nwp=v.chain[v.wpIdx];
      v.heading=+(gcBearing(v.lat,v.lon,nwp.lat,nwp.lon)).toFixed(1);
    }

    v.track.push([v.lon,v.lat,now]);
    if(v.track.length>72) v.track=v.track.slice(-72);
  }
  return vessels;
}

// ── Main ──
function main(){
  var vessels;
  if(fs.existsSync(STATE_PATH)){
    console.log('Loading fleet...');
    vessels=JSON.parse(fs.readFileSync(STATE_PATH,'utf8')).vessels;
    vessels=updateFleet(vessels,1);
  }else{
    console.log('Init 100 vessels...');
    vessels=initFleet();
  }

  fs.writeFileSync(STATE_PATH,JSON.stringify({vessels:vessels}));

  // Port name lookup
  var portNames={};Object.keys(P).forEach(function(k){portNames[k]=k;});
  portNames.SIN="Singapore";portNames.SHA="Shanghai";portNames.BUS="Busan";
  portNames.RTM="Rotterdam";portNames.HAM="Hamburg";portNames.DXB="Dubai";
  portNames.HKG="Hong Kong";portNames.LAX="Los Angeles";portNames.NYC="New York";
  portNames.YOK="Yokohama";portNames.KHH="Kaohsiung";portNames.ANT="Antwerp";
  portNames.FEL="Felixstowe";portNames.JED="Jeddah";portNames.MUM="Mumbai";
  portNames.CMB="Colombo";portNames.CPT="Cape Town";portNames.SAN="Santos";
  portNames.PAN="Panama";portNames.SUE="Suez";portNames.PIR="Piraeus";
  portNames.ALG="Algeciras";portNames.VAN="Vancouver";portNames.MEL="Melbourne";
  portNames.DUR="Durban";portNames.HOU="Houston";portNames.SAV="Savannah";
  portNames.LEH="Le Havre";portNames.TPP="Tanjung Pelepas";portNames.QIN="Qingdao";

  var pub=vessels.map(function(v){
    var nwp=v.wpIdx<v.chain.length?v.chain[v.wpIdx]:null;
    return{mmsi:v.mmsi,name:v.name,type:v.type,color:v.color,
      speed:v.speed,heading:v.heading,lat:v.lat,lon:v.lon,
      origin:portNames[v.fromId]||v.fromId,
      destination:portNames[v.toId]||v.toId,
      nextWp:nwp,track:v.track};
  });

  fs.writeFileSync(OUTPUT_PATH,JSON.stringify({updated:new Date().toISOString(),count:pub.length,vessels:pub}));
  console.log('Saved '+pub.length+' vessels');
  var sample=vessels.slice(0,5);
  sample.forEach(function(v){console.log(' ',v.name,v.lat.toFixed(1),v.lon.toFixed(1),'→',v.toId,v.speed+'kn','HDG'+v.heading);});
}

main();
