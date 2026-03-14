// ═══════════════════════════════════════════════════════════════
// simulate-ais.js v2.0 — Maritime Route AIS Fleet Simulator
// 100 vessels on realistic ocean routes with waypoints
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const STATE_PATH = path.join(__dirname, 'ais-state.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'ais-data.json');

// ── Ports ──
const PORTS = [
  {id:"SIN",name:"Singapore",lat:1.26,lon:103.84,region:"SEA"},
  {id:"SHA",name:"Shanghai",lat:31.23,lon:121.47,region:"EA"},
  {id:"BUS",name:"Busan",lat:35.10,lon:129.04,region:"EA"},
  {id:"RTM",name:"Rotterdam",lat:51.90,lon:4.50,region:"EU"},
  {id:"HAM",name:"Hamburg",lat:53.55,lon:9.99,region:"EU"},
  {id:"DXB",name:"Dubai",lat:25.27,lon:55.30,region:"ME"},
  {id:"HKG",name:"Hong Kong",lat:22.30,lon:114.17,region:"EA"},
  {id:"LAX",name:"Los Angeles",lat:33.74,lon:-118.27,region:"USWC"},
  {id:"NYC",name:"New York",lat:40.67,lon:-74.02,region:"USEC"},
  {id:"YOK",name:"Yokohama",lat:35.44,lon:139.64,region:"EA"},
  {id:"KHH",name:"Kaohsiung",lat:22.62,lon:120.30,region:"EA"},
  {id:"ANT",name:"Antwerp",lat:51.23,lon:4.40,region:"EU"},
  {id:"FEL",name:"Felixstowe",lat:51.96,lon:1.33,region:"EU"},
  {id:"JED",name:"Jeddah",lat:21.49,lon:39.19,region:"ME"},
  {id:"MUM",name:"Mumbai",lat:19.00,lon:72.87,region:"SA"},
  {id:"CMB",name:"Colombo",lat:6.94,lon:79.85,region:"SA"},
  {id:"CPT",name:"Cape Town",lat:-33.92,lon:18.42,region:"AF"},
  {id:"SAN",name:"Santos",lat:-23.95,lon:-46.30,region:"SA_AM"},
  {id:"PAN",name:"Panama Canal",lat:9.08,lon:-79.68,region:"CA"},
  {id:"SUE",name:"Suez",lat:29.97,lon:32.55,region:"ME"},
  {id:"PIR",name:"Piraeus",lat:37.94,lon:23.65,region:"EU"},
  {id:"ALG",name:"Algeciras",lat:36.13,lon:-5.44,region:"EU"},
  {id:"VAN",name:"Vancouver",lat:49.29,lon:-123.11,region:"USWC"},
  {id:"MEL",name:"Melbourne",lat:-37.82,lon:144.96,region:"OC"},
  {id:"DUR",name:"Durban",lat:-29.87,lon:31.03,region:"AF"},
  {id:"HOU",name:"Houston",lat:29.76,lon:-95.07,region:"USEC"},
  {id:"SAV",name:"Savannah",lat:32.08,lon:-81.09,region:"USEC"},
  {id:"LEH",name:"Le Havre",lat:49.49,lon:0.11,region:"EU"},
  {id:"TPP",name:"Tanjung Pelepas",lat:1.36,lon:103.55,region:"SEA"},
  {id:"QIN",name:"Qingdao",lat:36.07,lon:120.38,region:"EA"}
];

// ── Ocean Waypoints (chokepoints & sea lanes) ──
const WP = {
  malacca_w:  {lat:5.50, lon:95.50},   // Malacca Strait west entry
  malacca_e:  {lat:1.30, lon:104.00},   // Malacca Strait east
  indian_w:   {lat:8.00, lon:77.00},    // South India
  indian_c:   {lat:5.00, lon:65.00},    // Central Indian Ocean
  arabian:    {lat:13.00, lon:50.00},   // Gulf of Aden
  bab:        {lat:12.60, lon:43.30},   // Bab el-Mandeb
  red_sea_n:  {lat:27.50, lon:34.00},   // North Red Sea
  suez_s:     {lat:29.90, lon:32.55},   // Suez south
  med_e:      {lat:34.00, lon:28.00},   // East Mediterranean
  med_c:      {lat:36.00, lon:16.00},   // Central Mediterranean
  gibraltar:  {lat:36.00, lon:-5.50},   // Gibraltar
  biscay:     {lat:45.00, lon:-5.00},   // Bay of Biscay
  english:    {lat:50.00, lon:-1.00},   // English Channel
  north_sea:  {lat:52.00, lon:3.00},    // North Sea
  cape_good:  {lat:-34.50, lon:18.50},  // Cape of Good Hope
  cape_ag:    {lat:-35.00, lon:20.00},  // Cape Agulhas
  s_atlantic: {lat:-25.00, lon:-10.00}, // South Atlantic
  w_africa:   {lat:5.00, lon:-10.00},   // West Africa
  c_atlantic: {lat:20.00, lon:-40.00},  // Central Atlantic
  n_atlantic: {lat:40.00, lon:-50.00},  // North Atlantic
  caribbean:  {lat:15.00, lon:-70.00},  // Caribbean
  panama_e:   {lat:9.30, lon:-79.50},   // Panama east
  panama_w:   {lat:8.50, lon:-80.00},   // Panama west
  e_pacific:  {lat:15.00, lon:-110.00}, // East Pacific
  n_pacific:  {lat:35.00, lon:-150.00}, // North Pacific mid
  w_pacific:  {lat:20.00, lon:140.00},  // West Pacific
  nw_pacific: {lat:35.00, lon:145.00},  // NW Pacific (Japan east)
  se_asia:    {lat:5.00, lon:110.00},   // South China Sea south
  scs_n:      {lat:18.00, lon:115.00},  // South China Sea north
  taiwan_s:   {lat:22.00, lon:120.50},  // Taiwan Strait south
  korea_s:    {lat:34.00, lon:128.00},  // Korea Strait
  aus_sw:     {lat:-35.00, lon:115.00}, // SW Australia
  aus_se:     {lat:-38.00, lon:145.00}, // SE Australia
  hormuz:     {lat:26.50, lon:56.50},   // Strait of Hormuz
  s_indian:   {lat:-20.00, lon:60.00},  // South Indian Ocean
  brazil_e:   {lat:-20.00, lon:-35.00}, // Brazil east coast
};

// ── Route Templates (port-to-port via waypoints) ──
function getRoute(fromId, toId) {
  var key = fromId + '-' + toId;
  var routes = {
    // Asia → Europe (via Suez)
    'EA-EU': ['korea_s','scs_n','se_asia','malacca_e','malacca_w','indian_w','indian_c','arabian','bab','red_sea_n','suez_s','med_e','med_c','gibraltar','biscay','english','north_sea'],
    'SEA-EU': ['malacca_w','indian_w','indian_c','arabian','bab','red_sea_n','suez_s','med_e','med_c','gibraltar','biscay','english','north_sea'],
    // Europe → Asia (reverse)
    'EU-EA': ['north_sea','english','biscay','gibraltar','med_c','med_e','suez_s','red_sea_n','bab','arabian','indian_c','indian_w','malacca_w','malacca_e','se_asia','scs_n','korea_s'],
    'EU-SEA': ['north_sea','english','biscay','gibraltar','med_c','med_e','suez_s','red_sea_n','bab','arabian','indian_c','indian_w','malacca_w'],
    // Asia → US West Coast (trans-Pacific)
    'EA-USWC': ['nw_pacific','n_pacific'],
    'SEA-USWC': ['se_asia','scs_n','taiwan_s','nw_pacific','n_pacific'],
    // US West → Asia
    'USWC-EA': ['n_pacific','nw_pacific','korea_s'],
    'USWC-SEA': ['n_pacific','nw_pacific','taiwan_s','scs_n','se_asia'],
    // Asia → US East Coast (via Panama)
    'EA-USEC': ['nw_pacific','n_pacific','panama_w','panama_e','caribbean'],
    'SEA-USEC': ['se_asia','scs_n','nw_pacific','n_pacific','panama_w','panama_e','caribbean'],
    // Europe → US East Coast (trans-Atlantic)
    'EU-USEC': ['english','n_atlantic'],
    'USEC-EU': ['n_atlantic','english'],
    // Middle East → Asia
    'ME-EA': ['hormuz','arabian','indian_c','indian_w','malacca_w','malacca_e','se_asia','scs_n','korea_s'],
    'ME-SEA': ['hormuz','arabian','indian_c','indian_w','malacca_w'],
    'ME-EU': ['hormuz','arabian','bab','red_sea_n','suez_s','med_e','med_c','gibraltar','biscay','english','north_sea'],
    // South Asia
    'SA-EA': ['indian_w','malacca_w','malacca_e','se_asia','scs_n','korea_s'],
    'SA-EU': ['indian_c','arabian','bab','red_sea_n','suez_s','med_e','med_c','gibraltar','biscay','english','north_sea'],
    'SA-SEA': ['indian_w','malacca_w'],
    // Africa (Cape route)
    'AF-EU': ['cape_ag','s_atlantic','w_africa','c_atlantic','biscay','english','north_sea'],
    'AF-EA': ['cape_ag','s_indian','indian_w','malacca_w','malacca_e','se_asia','scs_n','korea_s'],
    'AF-USEC': ['cape_ag','s_atlantic','brazil_e','c_atlantic','caribbean'],
    // South America
    'SA_AM-EU': ['brazil_e','c_atlantic','biscay','english','north_sea'],
    'SA_AM-USEC': ['brazil_e','caribbean'],
    'SA_AM-EA': ['brazil_e','s_atlantic','cape_ag','s_indian','indian_w','malacca_w','malacca_e','se_asia','scs_n','korea_s'],
    // Oceania
    'OC-EA': ['aus_se','se_asia','scs_n','korea_s'],
    'OC-SEA': ['aus_se','aus_sw','se_asia'],
    'OC-EU': ['aus_sw','s_indian','arabian','bab','red_sea_n','suez_s','med_e','med_c','gibraltar','biscay','english','north_sea'],
    // Central America
    'CA-USWC': ['panama_w'],
    'CA-USEC': ['panama_e','caribbean'],
    'CA-EA': ['panama_w','e_pacific','n_pacific','nw_pacific','korea_s'],
  };

  var from = PORTS.find(function(p){return p.id===fromId;});
  var to = PORTS.find(function(p){return p.id===toId;});
  if (!from || !to) return [];

  // Try direct route key
  var rKey = from.region + '-' + to.region;
  var rKeyRev = to.region + '-' + from.region;

  var wpNames = routes[rKey];
  if (!wpNames) {
    // Try reverse
    wpNames = routes[rKeyRev];
    if (wpNames) wpNames = wpNames.slice().reverse();
  }
  if (!wpNames) {
    // Same region — direct
    return [{lat:to.lat, lon:to.lon}];
  }

  var waypoints = wpNames.map(function(n){ return WP[n]; }).filter(Boolean);
  waypoints.push({lat:to.lat, lon:to.lon});
  return waypoints;
}

// ── Vessel Definitions ──
var TYPES = [
  {type:"Container",prefix:"MV",color:"#3b82f6"},
  {type:"Tanker",prefix:"MT",color:"#ef4444"},
  {type:"Bulk Carrier",prefix:"MV",color:"#22c55e"},
  {type:"LNG Carrier",prefix:"LNG",color:"#a855f7"},
  {type:"Car Carrier",prefix:"MV",color:"#f59e0b"},
  {type:"General Cargo",prefix:"MV",color:"#06b6d4"}
];

var NAMES = [
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
  "Constellation","Andromeda","Orion Belt","Sirius Bright","Polaris North"
];

// ── Math ──
function toRad(d){return d*Math.PI/180;}
function toDeg(r){return r*180/Math.PI;}
function gcBearing(la1,lo1,la2,lo2){
  var dL=toRad(lo2-lo1);
  var y=Math.sin(dL)*Math.cos(toRad(la2));
  var x=Math.cos(toRad(la1))*Math.sin(toRad(la2))-Math.sin(toRad(la1))*Math.cos(toRad(la2))*Math.cos(dL);
  return (toDeg(Math.atan2(y,x))+360)%360;
}
function gcDist(la1,lo1,la2,lo2){
  var R=3440.065,dLa=toRad(la2-la1),dLo=toRad(lo2-lo1);
  var a=Math.sin(dLa/2)**2+Math.cos(toRad(la1))*Math.cos(toRad(la2))*Math.sin(dLo/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function moveTo(la,lo,brg,distNM){
  var R=3440.065,d=distNM/R,b=toRad(brg),la1=toRad(la),lo1=toRad(lo);
  var la2=Math.asin(Math.sin(la1)*Math.cos(d)+Math.cos(la1)*Math.sin(d)*Math.cos(b));
  var lo2=lo1+Math.atan2(Math.sin(b)*Math.sin(d)*Math.cos(la1),Math.cos(d)-Math.sin(la1)*Math.sin(la2));
  return{lat:+toDeg(la2).toFixed(5),lon:+toDeg(lo2).toFixed(5)};
}
function rand(a,b){return a+Math.random()*(b-a);}

function pickRandom(arr,excludeIdx){
  var i; do{i=Math.floor(Math.random()*arr.length);}while(i===excludeIdx);
  return i;
}

// ── Init Fleet ──
function initFleet(){
  var vessels=[];
  for(var i=0;i<100;i++){
    var vt=TYPES[i%TYPES.length];
    var oi=Math.floor(Math.random()*PORTS.length);
    var di=pickRandom(PORTS,oi);
    var origin=PORTS[oi], dest=PORTS[di];
    var route=getRoute(origin.id,dest.id);
    var speed=+(rand(15,20)).toFixed(1);

    // Random progress along route
    var totalWps=[{lat:origin.lat,lon:origin.lon}].concat(route);
    var totalDist=0;
    for(var w=1;w<totalWps.length;w++){
      totalDist+=gcDist(totalWps[w-1].lat,totalWps[w-1].lon,totalWps[w].lat,totalWps[w].lon);
    }
    var targetDist=totalDist*Math.random();
    var pos={lat:origin.lat,lon:origin.lon};
    var wpIdx=0;
    var remaining=targetDist;
    for(var w=1;w<totalWps.length;w++){
      var segDist=gcDist(totalWps[w-1].lat,totalWps[w-1].lon,totalWps[w].lat,totalWps[w].lon);
      if(remaining<=segDist){
        var brg=gcBearing(totalWps[w-1].lat,totalWps[w-1].lon,totalWps[w].lat,totalWps[w].lon);
        pos=moveTo(totalWps[w-1].lat,totalWps[w-1].lon,brg,remaining);
        wpIdx=w;
        break;
      }
      remaining-=segDist;
      wpIdx=w;
      pos={lat:totalWps[w].lat,lon:totalWps[w].lon};
    }

    var nextWp=wpIdx<route.length?route[wpIdx]:{lat:dest.lat,lon:dest.lon};
    var heading=+(gcBearing(pos.lat,pos.lon,nextWp.lat,nextWp.lon)).toFixed(1);

    vessels.push({
      mmsi:"2100"+String(i).padStart(5,"0"),
      name:vt.prefix+" "+NAMES[i],
      type:vt.type,color:vt.color,
      speed:speed,heading:heading,
      lat:pos.lat,lon:pos.lon,
      originIdx:oi,destIdx:di,
      origin:origin.name,destination:dest.name,
      routeWaypoints:route,
      currentWpIdx:wpIdx,
      track:[[pos.lon,pos.lat,new Date().toISOString()]]
    });
  }
  return vessels;
}

// ── Update Fleet ──
function updateFleet(vessels,hours){
  var now=new Date().toISOString();
  for(var i=0;i<vessels.length;i++){
    var v=vessels[i];
    var distToTravel=v.speed*hours;
    var wps=v.routeWaypoints;
    var wpIdx=v.currentWpIdx||0;

    while(distToTravel>0&&wpIdx<wps.length){
      var target=wps[wpIdx];
      var d=gcDist(v.lat,v.lon,target.lat,target.lon);
      if(distToTravel>=d){
        v.lat=target.lat;v.lon=target.lon;
        distToTravel-=d;
        wpIdx++;
      }else{
        var brg=gcBearing(v.lat,v.lon,target.lat,target.lon);
        brg+=rand(-1,1); // small drift
        var np=moveTo(v.lat,v.lon,brg,distToTravel);
        v.lat=np.lat;v.lon=np.lon;
        v.heading=+(brg+360)%360;
        v.heading=+v.heading.toFixed(1);
        distToTravel=0;
      }
    }
    v.currentWpIdx=wpIdx;

    // Arrived at destination
    if(wpIdx>=wps.length){
      var dest=PORTS[v.destIdx];
      v.lat=dest.lat;v.lon=dest.lon;
      // New voyage
      var newOi=v.destIdx;
      var newDi=pickRandom(PORTS,newOi);
      v.originIdx=newOi;v.destIdx=newDi;
      v.origin=PORTS[newOi].name;v.destination=PORTS[newDi].name;
      v.routeWaypoints=getRoute(PORTS[newOi].id,PORTS[newDi].id);
      v.currentWpIdx=0;
      v.speed=+(rand(15,20)).toFixed(1);
      if(v.routeWaypoints.length>0){
        var nxt=v.routeWaypoints[0];
        v.heading=+(gcBearing(v.lat,v.lon,nxt.lat,nxt.lon)).toFixed(1);
      }
    }

    // Speed variation
    v.speed=+Math.max(15,Math.min(20,v.speed+rand(-0.2,0.2))).toFixed(1);

    // Update heading toward next waypoint
    if(v.currentWpIdx<v.routeWaypoints.length){
      var nwp=v.routeWaypoints[v.currentWpIdx];
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
    console.log('Loading fleet state...');
    vessels=JSON.parse(fs.readFileSync(STATE_PATH,'utf8')).vessels;
    vessels=updateFleet(vessels,1);
  }else{
    console.log('Initializing 100 vessels...');
    vessels=initFleet();
  }

  fs.writeFileSync(STATE_PATH,JSON.stringify({vessels:vessels}));

  var pub=vessels.map(function(v){
    return{mmsi:v.mmsi,name:v.name,type:v.type,color:v.color,
      speed:v.speed,heading:v.heading,lat:v.lat,lon:v.lon,
      origin:v.origin,destination:v.destination,
      nextWp:v.currentWpIdx<v.routeWaypoints.length?v.routeWaypoints[v.currentWpIdx]:null,
      track:v.track};
  });

  var out={updated:new Date().toISOString(),count:pub.length,vessels:pub};
  fs.writeFileSync(OUTPUT_PATH,JSON.stringify(out));
  console.log('Saved '+pub.length+' vessels to ais-data.json');

  var types={};vessels.forEach(function(v){types[v.type]=(types[v.type]||0)+1;});
  console.log('Fleet:',JSON.stringify(types));
  console.log('Sample:',vessels[0].name,'@',vessels[0].lat,vessels[0].lon,'→',vessels[0].destination,vessels[0].speed+'kn HDG'+vessels[0].heading);
}

main();
