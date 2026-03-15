// app.js - Maritime Hub v3.5.0
// Windy 제거 → OWM 1.0 무료 타일 + RainViewer 레이더
// 주의: MONTHS, events 변수는 data.js에 이미 있습니다. 절대 재선언하지 마세요.

let map, markers = [];
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth(); // 오늘 날짜의 달로 초기화
let currentStyle = 'light';
let activeTypeFilters = new Set(['accident', 'news', 'event']); // 마커 필터 상태

// ── Weather Layer State ──
const OWM_APP_ID = 'c1c9d245aa905fef239db16721c930a7'; // ← OWM 무료 API 키를 여기에 넣으세요 (openweathermap.org 가입 후 발급)
let activeWeatherLayers = new Set();
let rainviewerFrames = [];
let dayNightEnabled = false;
let dayNightInterval = null;

// OWM 1.0 타일 레이어 정의 (무료)
const OWM_LAYERS = {
  wind:     { id: 'owm-wind',     layer: 'wind_new' },
  pressure: { id: 'owm-pressure', layer: 'pressure_new' },
  clouds:   { id: 'owm-clouds',   layer: 'clouds_new' },
  temp:     { id: 'owm-temp',     layer: 'temp_new' }
};

function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21tOG4xdHF2MGt3cjJyc2FxYnFqYnNkMSJ9._ilWg4sgPgozWPYf1FWeJw';

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [127, 36.5],
    zoom: 1.5,
    maxZoom: 18,
    projection: 'globe',
    attributionControl: false
  });

  map.addControl(new mapboxgl.NavigationControl({ showCompass: true, showZoom: true }), 'top-left');
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

  document.body.addEventListener('click', function() {
    closePanel();
  });

  map.on('load', () => {
    // ── Geocoder (Location Search) ──
    if (typeof MapboxGeocoder !== 'undefined') {
      map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        placeholder: 'Search location...',
        collapsed: true,
        marker: { color: '#0984e3' },
        zoom: 8
      }), 'top-left');
    }

    // ── Atmosphere / Fog ──
    map.setFog({
      color: 'rgb(186, 210, 235)',        // 지평선 색
      'high-color': 'rgb(36, 92, 223)',    // 우주 방향 색
      'horizon-blend': 0.02,               // 지평선 블렌드
      'space-color': 'rgb(11, 11, 25)',    // 우주 색
      'star-intensity': 0.6                // 별 강도
    });

    if (typeof MONTHS !== 'undefined' && typeof events !== 'undefined') {
      renderMonth();
      renderMarkers();
      // 첫 방문 시 오늘의 뉴스 헤드라인 표시
      showTodayHeadlines();
    } else {
      console.error("data.js not loaded properly.");
    }

    // 기상 레이어 소스 등록
    addWeatherSources();

    // 초기 스타일 버튼 활성화
    var initBtn = document.getElementById('style-light');
    if (initBtn) initBtn.classList.add('active');

    // RainViewer 초기화
    initRainViewer();

    // Globe 회전 시작
    startSpin();

    // Globe 버튼 초기 활성화
    var globeBtn = document.getElementById('btn-globe');
    if (globeBtn) globeBtn.classList.add('active');
  });

  // 사용자 조작 시 회전 멈추고 줌인, 무조작 30초 후 재회전
  ['mousedown', 'touchstart', 'wheel'].forEach(function(evt) {
    map.getCanvas().addEventListener(evt, function() {
      if (spinEnabled) {
        stopSpinAndZoomIn();
      }
      resetIdleTimer();
    }, { passive: true });
  });

  // 맵 이동/줌 등 모든 조작에도 idle 리셋
  map.on('movestart', function(e) {
    if (e.originalEvent) resetIdleTimer(); // 사용자 조작만
  });

  // 스타일 변경 후 레이어 재등록
  map.on('style.load', () => {
    // Atmosphere 복원
    map.setFog({
      color: 'rgb(186, 210, 235)',
      'high-color': 'rgb(36, 92, 223)',
      'horizon-blend': 0.02,
      'space-color': 'rgb(11, 11, 25)',
      'star-intensity': 0.6
    });
    addWeatherSources();
    // 활성화된 레이어 다시 표시
    activeWeatherLayers.forEach(key => {
      if (key === 'radar') {
        showRainViewerLayer();
      } else {
        showOWMLayer(key);
      }
    });
    // Day/Night 복원
    if (dayNightEnabled) updateDayNight();
    renderMarkers();
  });
}

// ── Globe Spin ──

function startSpin() {
  spinEnabled = true;
  isGlobe = true;
  map.setProjection('globe');
  var speed = 0.03; // degrees per frame (부드럽고 느린 자전)

  // Globe 버튼 활성화
  var globeBtn = document.getElementById('btn-globe');
  if (globeBtn) globeBtn.classList.add('active');

  function spin() {
    if (!spinEnabled) return;
    var center = map.getCenter();
    center.lng += speed;
    map.setCenter(center);
    spinRAF = requestAnimationFrame(spin);
  }
  spin();
}

function stopSpinAndZoomIn() {
  spinEnabled = false;
  if (spinRAF) {
    cancelAnimationFrame(spinRAF);
    spinRAF = null;
  }
  // 부드럽게 한국 중심으로 줌인
  map.flyTo({
    center: [127, 36.5],
    zoom: 4,
    duration: 2000,
    essential: true
  });
  resetIdleTimer();
}

function resumeSpin() {
  // 패널이 열려있으면 회전하지 않음
  var panel = document.getElementById('side-panel');
  if (panel && panel.classList.contains('open')) return;
  var modal = document.getElementById('detail-modal');
  if (modal && modal.classList.contains('open')) return;

  // Globe로 전환 후 줌아웃하며 회전 시작
  map.flyTo({
    center: map.getCenter(),
    zoom: 1.5,
    duration: 2000,
    essential: true
  });
  setTimeout(function() {
    startSpin();
  }, 2000);
}

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(function() {
    if (!spinEnabled) {
      resumeSpin();
    }
  }, IDLE_TIMEOUT);
}

// ── Day / Night Terminator ──

function getSunPosition(date) {
  // 태양 적위(declination)와 경도 계산
  var rad = Math.PI / 180;
  var dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  // 태양 적위 (근사)
  var declination = -23.44 * Math.cos(rad * (360 / 365) * (dayOfYear + 10));
  // 태양 경도 = UTC 시간 기반
  var hours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  var sunLng = -(hours / 24) * 360 + 180;
  return { lat: declination, lng: sunLng };
}

function generateNightPolygon(date) {
  var sun = getSunPosition(date);
  var rad = Math.PI / 180;
  var points = [];

  // terminator 라인 계산 (경도 0~360도를 따라)
  for (var i = 0; i <= 360; i += 2) {
    var lng = i - 180;
    // terminator 위도 계산
    var cosLHA = -Math.tan(sun.lat * rad) * Math.tan(0); // 지평선
    var hourAngle = (lng - sun.lng) * rad;
    var lat = Math.atan(-Math.cos(hourAngle) / Math.tan(sun.lat * rad)) / rad;
    points.push([lng, lat]);
  }

  // 밤 영역: terminator 아래(또는 위)를 폴리곤으로
  // 태양이 북반구에 있으면 남쪽이 밤, 반대도 마찬가지
  var nightSide = sun.lat >= 0 ? -90 : 90;
  var polygon = [];

  // terminator 라인
  for (var j = 0; j < points.length; j++) {
    polygon.push(points[j]);
  }
  // 밤쪽으로 닫기
  polygon.push([180, nightSide]);
  polygon.push([-180, nightSide]);
  polygon.push(points[0]); // 닫기

  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [polygon]
    }
  };
}

function updateDayNight() {
  var geojson = generateNightPolygon(new Date());

  if (map.getSource('daynight-src')) {
    map.getSource('daynight-src').setData(geojson);
  } else {
    map.addSource('daynight-src', {
      type: 'geojson',
      data: geojson
    });
    map.addLayer({
      id: 'daynight-layer',
      type: 'fill',
      source: 'daynight-src',
      paint: {
        'fill-color': '#191A2C',
        'fill-opacity': 0.3
      }
    });
  }
}

function removeDayNight() {
  try { if (map.getLayer('daynight-layer')) map.removeLayer('daynight-layer'); } catch(e) {}
  try { if (map.getSource('daynight-src')) map.removeSource('daynight-src'); } catch(e) {}
}

function toggleDayNight() {
  dayNightEnabled = !dayNightEnabled;
  var btn = document.getElementById('btn-daynight');

  if (dayNightEnabled) {
    updateDayNight();
    // 1분마다 갱신
    dayNightInterval = setInterval(updateDayNight, 60000);
    if (btn) btn.classList.add('active');
  } else {
    if (dayNightInterval) { clearInterval(dayNightInterval); dayNightInterval = null; }
    removeDayNight();
    if (btn) btn.classList.remove('active');
  }
}

// ── Weather Sources & Layers ──

function addWeatherSources() {
  if (!OWM_APP_ID) return; // 키 없으면 등록 생략
  Object.entries(OWM_LAYERS).forEach(([key, cfg]) => {
    if (!map.getSource(cfg.id)) {
      map.addSource(cfg.id, {
        type: 'raster',
        tiles: [
          `https://tile.openweathermap.org/map/${cfg.layer}/{z}/{x}/{y}.png?appid=${OWM_APP_ID}`
        ],
        tileSize: 256,
        attribution: '© <a href="https://openweathermap.org">OpenWeatherMap</a>'
      });
    }
  });
}

function showOWMLayer(key) {
  const cfg = OWM_LAYERS[key];
  if (!cfg) return;
  // 소스가 없으면 등록 시도
  if (!map.getSource(cfg.id)) {
    if (!OWM_APP_ID) return;
    map.addSource(cfg.id, {
      type: 'raster',
      tiles: [
        `https://tile.openweathermap.org/map/${cfg.layer}/{z}/{x}/{y}.png?appid=${OWM_APP_ID}`
      ],
      tileSize: 256
    });
  }
  if (!map.getLayer(cfg.id)) {
    map.addLayer({
      id: cfg.id,
      type: 'raster',
      source: cfg.id,
      paint: { 'raster-opacity': 0.6 }
    });
  }
}

function hideOWMLayer(key) {
  const cfg = OWM_LAYERS[key];
  if (!cfg) return;
  if (map.getLayer(cfg.id)) map.removeLayer(cfg.id);
}

// ── RainViewer (완전 무료, 키 불필요) ──

function initRainViewer() {
  fetch('https://api.rainviewer.com/public/weather-maps.json')
    .then(r => r.json())
    .then(data => {
      rainviewerFrames = data.radar.past || [];
      console.log('RainViewer: ' + rainviewerFrames.length + ' radar frames loaded');
    })
    .catch(e => console.warn('RainViewer init failed:', e));
}

function showRainViewerLayer() {
  if (rainviewerFrames.length === 0) {
    console.warn('RainViewer: no frames available yet');
    return;
  }
  const latest = rainviewerFrames[rainviewerFrames.length - 1];
  const tileUrl = 'https://tilecache.rainviewer.com' + latest.path + '/256/{z}/{x}/{y}/2/1_1.png';
  const srcId = 'rainviewer-src';
  const layId = 'rainviewer-layer';

  // 기존 레이어/소스 제거 후 재등록 (URL 갱신)
  try { if (map.getLayer(layId)) map.removeLayer(layId); } catch(e) {}
  try { if (map.getSource(srcId)) map.removeSource(srcId); } catch(e) {}

  map.addSource(srcId, {
    type: 'raster',
    tiles: [tileUrl],
    tileSize: 256,
    attribution: '© <a href="https://rainviewer.com">RainViewer</a>'
  });
  map.addLayer({
    id: layId,
    type: 'raster',
    source: srcId,
    paint: { 'raster-opacity': 0.6 }
  });
}

function hideRainViewerLayer() {
  try { if (map.getLayer('rainviewer-layer')) map.removeLayer('rainviewer-layer'); } catch(e) {}
  try { if (map.getSource('rainviewer-src')) map.removeSource('rainviewer-src'); } catch(e) {}
}

// ── Toggle Weather Layer (통합) ──

function toggleWeatherLayer(key) {
  var btn = document.getElementById('layer-' + key);

  if (activeWeatherLayers.has(key)) {
    // 끄기
    activeWeatherLayers.delete(key);
    if (btn) btn.classList.remove('active');
    if (key === 'radar') {
      hideRainViewerLayer();
    } else if (key === 'nasa') {
      hideNASALayer();
    } else if (key === 'typhoon') {
      hideTyphoonLayer();
    } else if (key === 'ais') {
      hideAISLayer();
    } else {
      hideOWMLayer(key);
    }
  } else {
    // 켜기
    if (!OWM_APP_ID && !['radar','nasa','typhoon','ais'].includes(key)) {
      alert('OWM API 키가 필요합니다.\napp.js 상단의 OWM_APP_ID에 키를 입력하세요.\nhttps://openweathermap.org 에서 무료 발급 가능합니다.');
      return;
    }
    activeWeatherLayers.add(key);
    if (btn) btn.classList.add('active');
    if (key === 'radar') {
      showRainViewerLayer();
    } else if (key === 'nasa') {
      showNASALayer();
    } else if (key === 'typhoon') {
      showTyphoonLayer();
    } else if (key === 'ais') {
      showAISLayer();
    } else {
      showOWMLayer(key);
    }
  }
}

// ── NASA GIBS Satellite Layer ──

function showNASALayer() {
  var today = new Date();
  // NASA GIBS는 보통 1~2일 전 데이터가 최신
  today.setDate(today.getDate() - 1);
  var dateStr = today.toISOString().split('T')[0];

  if (!map.getSource('nasa-gibs')) {
    map.addSource('nasa-gibs', {
      type: 'raster',
      tiles: [
        'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_SNPP_CorrectedReflectance_TrueColor/default/' + dateStr + '/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg'
      ],
      tileSize: 256,
      attribution: '© <a href="https://earthdata.nasa.gov/gibs">NASA GIBS</a>'
    });
  }
  if (!map.getLayer('nasa-gibs-layer')) {
    map.addLayer({
      id: 'nasa-gibs-layer',
      type: 'raster',
      source: 'nasa-gibs',
      paint: { 'raster-opacity': 0.7 }
    }, 'aeroway-line');
  }
  map.setLayoutProperty('nasa-gibs-layer', 'visibility', 'visible');
  console.log('🛰️ NASA satellite layer ON (' + dateStr + ')');
}

function hideNASALayer() {
  if (map.getLayer('nasa-gibs-layer')) {
    map.setLayoutProperty('nasa-gibs-layer', 'visibility', 'none');
  }
  console.log('🛰️ NASA satellite layer OFF');
}

// ── Typhoon / Active Tropical Cyclones Layer ──

var typhoonMarkers = [];

function showTyphoonLayer() {
  // NOAA NHC CurrentStorms.json
  fetch('https://www.nhc.noaa.gov/CurrentStorms.json')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var storms = data.activeStorms || [];
      if (storms.length === 0) {
        // 활성 태풍 없음 — JTWC/서태평양도 체크
        showTyphoonFallback();
        return;
      }
      storms.forEach(function(storm) {
        // 각 태풍에 대해 GIS 데이터 로드
        if (storm.forecastGraphics && storm.forecastGraphics.forecastTrack) {
          loadTyphoonTrack(storm);
        }
        // 현재 위치 마커
        if (storm.latitudeNumeric && storm.longitudeNumeric) {
          addTyphoonMarker(storm);
        }
      });
      console.log('🌀 Loaded ' + storms.length + ' active storms from NHC');
    })
    .catch(function(err) {
      console.warn('🌀 NHC fetch failed, trying fallback:', err.message);
      showTyphoonFallback();
    });
}

function showTyphoonFallback() {
  // NHC에 활성 태풍이 없을 때 안내
  var el = document.createElement('div');
  el.id = 'typhoon-notice';
  el.style.cssText = 'position:fixed; bottom:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.8); color:#fff; padding:10px 20px; border-radius:8px; font-size:12px; z-index:999; backdrop-filter:blur(4px);';
  el.textContent = '🌀 No active tropical cyclones at this time';
  document.body.appendChild(el);
  setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 4000);

  // NOAA ArcGIS MapServer에서 대서양 + 동태평양 활성 태풍 시도
  loadNOAAarcgis('https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_Atl_trop_cyclones_active/MapServer/2/query?where=1%3D1&outFields=*&f=geojson');
  loadNOAAarcgis('https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_E_Pac_trop_cyclones_active/MapServer/2/query?where=1%3D1&outFields=*&f=geojson');
}

function loadNOAAarcgis(url) {
  fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(geojson) {
      if (geojson.features && geojson.features.length > 0) {
        var srcId = 'typhoon-arcgis-' + Math.random().toString(36).slice(2, 8);
        map.addSource(srcId, { type: 'geojson', data: geojson });
        map.addLayer({
          id: srcId + '-line',
          type: 'line',
          source: srcId,
          paint: { 'line-color': '#ff4757', 'line-width': 3, 'line-opacity': 0.8 }
        });
        map.addLayer({
          id: srcId + '-point',
          type: 'circle',
          source: srcId,
          paint: { 'circle-radius': 6, 'circle-color': '#ff4757', 'circle-stroke-color': '#fff', 'circle-stroke-width': 2 }
        });
        console.log('🌀 ArcGIS typhoon data loaded: ' + geojson.features.length + ' features');
      }
    })
    .catch(function(err) { console.warn('ArcGIS typhoon error:', err.message); });
}

function addTyphoonMarker(storm) {
  var el = document.createElement('div');
  el.style.cssText = 'width:20px; height:20px; border-radius:50%; background:radial-gradient(circle, #ff4757 30%, rgba(255,71,87,0.3) 70%); border:2px solid #fff; cursor:pointer; animation:typhoon-pulse 1.5s infinite; box-shadow:0 0 10px rgba(255,71,87,0.6);';

  var marker = new mapboxgl.Marker(el)
    .setLngLat([storm.longitudeNumeric, storm.latitudeNumeric])
    .addTo(map);

  var popup = new mapboxgl.Popup({ offset: 15, closeButton: false })
    .setHTML(
      '<div style="font-size:12px; font-weight:600; color:#ff4757;">' + (storm.name || 'Unknown') + '</div>' +
      '<div style="font-size:10px; color:#666;">' + (storm.classification || '') + '</div>' +
      '<div style="font-size:10px;">Wind: ' + (storm.intensity || 'N/A') + ' kt</div>' +
      '<div style="font-size:10px;">Movement: ' + (storm.movement || 'N/A') + '</div>'
    );
  marker.getElement().addEventListener('mouseenter', function() { popup.addTo(map).setLngLat([storm.longitudeNumeric, storm.latitudeNumeric]); });
  marker.getElement().addEventListener('mouseleave', function() { popup.remove(); });

  typhoonMarkers.push(marker);
}

function loadTyphoonTrack(storm) {
  // NHC GIS shapefile → 일반적으로 KMZ/shapefile이라 직접 GeoJSON 사용 어려움
  // ArcGIS REST에서 해당 태풍 forecast track 로드
  var basin = storm.id && storm.id.startsWith('ep') ? 'E_Pac' : 'Atl';
  var url = 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Forecasts_Guidance_Warnings/NHC_' + basin + '_trop_cyclones_active/MapServer/1/query?where=1%3D1&outFields=*&f=geojson';
  loadNOAAarcgis(url);
}

function hideTyphoonLayer() {
  // 마커 제거
  typhoonMarkers.forEach(function(m) { m.remove(); });
  typhoonMarkers = [];
  // ArcGIS 레이어 제거
  map.getStyle().layers.forEach(function(layer) {
    if (layer.id.startsWith('typhoon-arcgis-')) {
      map.removeLayer(layer.id);
    }
  });
  Object.keys(map.getStyle().sources).forEach(function(src) {
    if (src.startsWith('typhoon-arcgis-')) {
      map.removeSource(src);
    }
  });
  // 알림 제거
  var notice = document.getElementById('typhoon-notice');
  if (notice) notice.parentNode.removeChild(notice);
  console.log('🌀 Typhoon layer OFF');
}

// ── AIS Virtual Fleet Layer (Mapbox Native) ──

var aisAnimationTimer = null;
var aisVessels = null;
var aisPopup = null;

// Create ship icon on canvas (small elegant triangle)
function createShipIcon() {
  var size = 32;
  var canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext('2d');

  // Ship shape — sleek pointed hull
  ctx.translate(size/2, size/2);
  ctx.beginPath();
  ctx.moveTo(0, -10);   // bow
  ctx.lineTo(4, 5);     // starboard
  ctx.lineTo(1, 8);     // stern right
  ctx.lineTo(-1, 8);    // stern left
  ctx.lineTo(-4, 5);    // port
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 1;
  ctx.stroke();

  return ctx.getImageData(0, 0, size, size);
}

function addShipImageToMap() {
  if (map.hasImage('ship-icon')) return;
  var imgData = createShipIcon();
  map.addImage('ship-icon', {
    width: imgData.width,
    height: imgData.height,
    data: imgData.data
  });
}

function showAISLayer() {
  fetch('ais-data.json?t=' + Date.now())
    .then(function(res) { return res.json(); })
    .then(function(data) {
      aisVessels = data.vessels;
      addShipImageToMap();
      renderAISNative();
      startAISInterpolation();
      console.log('🚢 AIS fleet: ' + data.count + ' vessels (' + data.updated + ')');
    })
    .catch(function(err) {
      console.warn('🚢 AIS load failed:', err.message);
      var el = document.createElement('div');
      el.id = 'ais-notice';
      el.style.cssText = 'position:fixed; bottom:80px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,0.85); color:#fff; padding:10px 20px; border-radius:8px; font-size:12px; z-index:999; backdrop-filter:blur(4px);';
      el.textContent = '🚢 AIS data not available yet';
      document.body.appendChild(el);
      setTimeout(function() { if (el.parentNode) el.parentNode.removeChild(el); }, 4000);
    });
}

function buildGeoJSON() {
  return {
    type: 'FeatureCollection',
    features: aisVessels.map(function(v) {
      return {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [v.lon, v.lat] },
        properties: {
          mmsi: v.mmsi, name: v.name, type: v.type,
          color: v.color, speed: v.speed, heading: v.heading,
          origin: v.origin, destination: v.destination
        }
      };
    })
  };
}

function buildTracksGeoJSON() {
  var features = [];
  aisVessels.forEach(function(v) {
    if (!v.track || v.track.length < 2) return;
    features.push({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: v.track.map(function(t) { return [t[0], t[1]]; })
      },
      properties: { color: v.color }
    });
  });
  return { type: 'FeatureCollection', features: features };
}

function renderAISNative() {
  var geojson = buildGeoJSON();
  var tracksGJ = buildTracksGeoJSON();

  // ── Track lines ──
  if (map.getSource('ais-tracks')) {
    map.getSource('ais-tracks').setData(tracksGJ);
  } else {
    map.addSource('ais-tracks', { type: 'geojson', data: tracksGJ });
    map.addLayer({
      id: 'ais-tracks-layer',
      type: 'line',
      source: 'ais-tracks',
      paint: {
        'line-color': ['get', 'color'],
        'line-width': 1,
        'line-opacity': 0.25,
        'line-dasharray': [2, 4]
      }
    });
  }

  // ── Vessel color circles (under ship icon) ──
  if (map.getSource('ais-fleet')) {
    map.getSource('ais-fleet').setData(geojson);
  } else {
    map.addSource('ais-fleet', { type: 'geojson', data: geojson });

    // Color dot (type indicator)
    map.addLayer({
      id: 'ais-dots',
      type: 'circle',
      source: 'ais-fleet',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 2, 2.5, 5, 4, 8, 5],
        'circle-color': ['get', 'color'],
        'circle-opacity': 0.9,
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 2, 0.5, 6, 1],
        'circle-stroke-opacity': 0.8
      }
    });

    // Ship icon with heading rotation (visible at higher zoom)
    map.addLayer({
      id: 'ais-ships',
      type: 'symbol',
      source: 'ais-fleet',
      minzoom: 4,
      layout: {
        'icon-image': 'ship-icon',
        'icon-size': ['interpolate', ['linear'], ['zoom'], 4, 0.4, 8, 0.7, 12, 1],
        'icon-rotate': ['get', 'heading'],
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
      }
    });

    // Vessel name label (high zoom only)
    map.addLayer({
      id: 'ais-labels',
      type: 'symbol',
      source: 'ais-fleet',
      minzoom: 7,
      layout: {
        'text-field': ['get', 'name'],
        'text-size': 9,
        'text-offset': [0, 1.5],
        'text-anchor': 'top',
        'text-font': ['DIN Pro Regular', 'Arial Unicode MS Regular'],
        'text-allow-overlap': false
      },
      paint: {
        'text-color': '#555',
        'text-halo-color': '#fff',
        'text-halo-width': 1
      }
    });

    // Click handler
    map.on('click', 'ais-dots', function(e) {
      var p = e.features[0].properties;
      var coords = e.features[0].geometry.coordinates;
      if (aisPopup) aisPopup.remove();
      aisPopup = new mapboxgl.Popup({ offset: 12, closeButton: true, maxWidth: '240px' })
        .setLngLat(coords)
        .setHTML(
          '<div style="font-size:12px; line-height:1.7;">' +
          '<div style="font-weight:700; color:' + p.color + '; font-size:13px;">' + p.name + '</div>' +
          '<div style="font-size:10px; color:#999; margin-bottom:4px;">MMSI ' + p.mmsi + ' · ' + p.type + '</div>' +
          '<div style="border-top:1px solid #eee; padding-top:4px;">⚓ ' + p.origin + ' → ' + p.destination + '</div>' +
          '<div>🧭 HDG ' + p.heading + '° · SOG ' + p.speed + ' kn</div>' +
          '<div style="margin-top:6px; border-top:1px solid #eee; padding-top:6px;">' +
          '<button onclick="openVDR(\'' + p.name.replace(/'/g,"\\'") + '\', \'' + p.mmsi + '\', \'' + p.type + '\', \'' + (p.origin||'').replace(/'/g,"\\'") + '\', \'' + (p.destination||'').replace(/'/g,"\\'") + '\', ' + p.heading + ', ' + p.speed + ')" style="width:100%;padding:6px 0;background:#16a34a;color:#fff;border:none;border-radius:4px;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:1px;">🖥 Shore VDR Playback</button>' +
          '</div>' +
          '</div>'
        )
        .addTo(map);
    });

    // Cursor
    map.on('mouseenter', 'ais-dots', function() { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', 'ais-dots', function() { map.getCanvas().style.cursor = ''; });
  }
}

function startAISInterpolation() {
  if (aisAnimationTimer) clearInterval(aisAnimationTimer);
  aisAnimationTimer = setInterval(function() {
    if (!aisVessels || !map.getSource('ais-fleet')) return;

    aisVessels.forEach(function(v) {
      var distNM = v.speed / 60;
      var hdg = v.heading;
      // If we have nextWp, use bearing to it instead of stored heading
      if (v.nextWp) {
        var dLon = (v.nextWp.lon - v.lon) * Math.PI / 180;
        var y = Math.sin(dLon) * Math.cos(v.nextWp.lat * Math.PI / 180);
        var x = Math.cos(v.lat * Math.PI / 180) * Math.sin(v.nextWp.lat * Math.PI / 180) -
                Math.sin(v.lat * Math.PI / 180) * Math.cos(v.nextWp.lat * Math.PI / 180) * Math.cos(dLon);
        hdg = (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
        v.heading = +hdg.toFixed(1);
      }
      var hdgRad = hdg * Math.PI / 180;
      var R = 3440.065, d = distNM / R;
      var la1 = v.lat * Math.PI / 180, lo1 = v.lon * Math.PI / 180;
      var la2 = Math.asin(Math.sin(la1)*Math.cos(d) + Math.cos(la1)*Math.sin(d)*Math.cos(hdgRad));
      var lo2 = lo1 + Math.atan2(Math.sin(hdgRad)*Math.sin(d)*Math.cos(la1), Math.cos(d)-Math.sin(la1)*Math.sin(la2));
      v.lat = +(la2 * 180 / Math.PI).toFixed(5);
      v.lon = +(lo2 * 180 / Math.PI).toFixed(5);
    });

    map.getSource('ais-fleet').setData(buildGeoJSON());
  }, 60000);
}

function hideAISLayer() {
  if (aisAnimationTimer) { clearInterval(aisAnimationTimer); aisAnimationTimer = null; }
  if (aisPopup) { aisPopup.remove(); aisPopup = null; }
  ['ais-labels','ais-ships','ais-dots','ais-tracks-layer'].forEach(function(id) {
    if (map.getLayer(id)) map.removeLayer(id);
  });
  ['ais-fleet','ais-tracks'].forEach(function(id) {
    if (map.getSource(id)) map.removeSource(id);
  });
  aisVessels = null;
  var notice = document.getElementById('ais-notice');
  if (notice) notice.parentNode.removeChild(notice);
  console.log('🚢 AIS fleet OFF');
}

// ── 기존 기능 (변경 없음) ──

function renderMonth() {
  if (typeof MONTHS !== 'undefined') {
    document.getElementById('month-name').textContent = MONTHS[currentMonth];
  }
  document.getElementById('year-display').textContent = currentYear;

  var strip = document.getElementById('days-strip');
  strip.innerHTML = '';
  var actualDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (var d = 1; d <= 31; d++) {
    var dateKey = currentYear + '-' + String(currentMonth+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var dayEvents = (typeof events !== 'undefined' && events[dateKey]) ? events[dateKey] : [];

    var item = document.createElement('div');
    item.className = 'day-item';

    var now = new Date();
    if (
     now.getFullYear() === currentYear &&
     now.getMonth() === currentMonth &&
     now.getDate() === d
    ) {
     item.classList.add('today');
    }
    if (d > actualDays) {
      item.style.opacity = '0';
      item.style.pointerEvents = 'none';
    } else {
      // 토/일 색상
      var dayOfWeek = new Date(currentYear, currentMonth, d).getDay();
      if (dayOfWeek === 6) item.classList.add('saturday');
      if (dayOfWeek === 0) item.classList.add('sunday');

      var bars = dayEvents.map(function(e) {
        return '<div style="height:2px; width:100%; background:var(--' + e.type + '); margin-top:1px;"></div>';
      }).join('');
      item.innerHTML = '<span>' + d + '</span><div style="width:80%;">' + bars + '</div>';
      (function(dk, de, el) {
        el.onclick = function(ev) {
          ev.stopPropagation();
          openSidePanel(dk, de);
          document.querySelectorAll('.day-item').forEach(function(i) { i.classList.remove('active'); });
          el.classList.add('active');
        };
      })(dateKey, dayEvents, item);
    }
    strip.appendChild(item);
  }

  // 오늘 날짜가 있으면 해당 위치로 스크롤 (모바일)
  var todayEl = strip.querySelector('.today');
  if (todayEl) {
    todayEl.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }
}

function renderMarkers() {
  if (typeof markers !== 'undefined') markers.forEach(function(m) { m.remove(); });
  markers = [];

  if (typeof events === 'undefined') return;

  Object.entries(events).forEach(function([date, list]) {
    list.forEach(function(e) {
      if (!e.coords) return;
      if (!activeTypeFilters.has(e.type)) return; // 필터 적용

      var markerEl = document.createElement('div');
      markerEl.style.width = '10px';
      markerEl.style.height = '10px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.backgroundColor = 'var(--' + e.type + ')';
      markerEl.style.border = '2px solid rgba(255,255,255,0.7)';
      markerEl.style.cursor = 'pointer';
      markerEl.style.boxShadow = '0 0 6px rgba(0,0,0,0.5)';

      var marker = new mapboxgl.Marker(markerEl)
        .setLngLat(e.coords)
        .addTo(map);

      marker.getElement().addEventListener('click', function(ev) {
        ev.stopPropagation();
        openSidePanel(date, list, e);
      });
      markers.push(marker);
    });
  });
}

function toggleTypeFilter(type) {
  if (activeTypeFilters.has(type)) {
    activeTypeFilters.delete(type);
  } else {
    activeTypeFilters.add(type);
  }
  // 버튼 상태 업데이트
  var btn = document.getElementById('filter-' + type);
  if (btn) {
    if (activeTypeFilters.has(type)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }
  renderMarkers();
}

function openSidePanel(date, list, highlightEvent) {
  var panel = document.getElementById('side-panel');
  var content = document.getElementById('panel-content');
  document.getElementById('panel-title').textContent = date;

  var enriched = list.map(function(e) { var copy = Object.assign({}, e); copy._dateKey = date; return copy; });
  var highlightIdx = -1;

  content.innerHTML = enriched.length ? enriched.map(function(e, idx) {
    var isHL = highlightEvent && e.title === highlightEvent.title;
    if (isHL) highlightIdx = idx;
    var bg = isHL ? 'rgba(9,132,227,0.10)' : 'rgba(0,0,0,0.02)';
    var bc = isHL ? 'rgba(9,132,227,0.5)' : 'rgba(0,0,0,0.06)';
    var bw = isHL ? '2px' : '1px';
    return '<div id="panel-item-' + idx + '" style="background:' + bg + '; padding:12px; border-radius:6px; margin-bottom:10px; cursor:pointer; border:' + bw + ' solid ' + bc + '; transition:0.2s;" onclick="flyToAndShowDetail(' + JSON.stringify(e).replace(/"/g, '&quot;') + ')" onmouseover="this.style.background=\'rgba(9,132,227,0.06)\'" onmouseout="this.style.background=\'' + bg + '\'">' +
      '<div style="font-size:9px; color:var(--' + e.type + '); font-weight:600; margin-bottom:4px;">' + e.type.toUpperCase() + '</div>' +
      '<div style="font-size:13px; font-weight:500; color:var(--text-primary);">' + e.title + '</div>' +
      (e.location ? '<div style="font-size:10px; color:var(--text-secondary); margin-top:4px;">📍 ' + e.location + '</div>' : '') +
    '</div>';
  }).join('') : '<div style="text-align:center; color:#aaa; margin-top:40px; font-size:11px;">No Data</div>';

  panel.classList.add('open');

  // 하이라이트된 기사로 스크롤
  if (highlightIdx >= 0) {
    setTimeout(function() {
      var el = document.getElementById('panel-item-' + highlightIdx);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
}

// ── Markdown to HTML converter ──
function mdToHtml(text) {
  if (!text) return '';
  if (text.indexOf('<p') !== -1 && text.indexOf('#') === -1) return text;
  var s = text;
  s = s.replace(/^<p[^>]*>/i, '').replace(/<\/p>$/i, '');
  s = s.replace(/^### (.+)$/gm, '<h4 style="color:var(--brand-blue);font-size:13px;font-weight:600;margin:16px 0 8px;">$1</h4>');
  s = s.replace(/^## (.+)$/gm, '<h3 style="color:var(--brand-blue);font-size:14px;font-weight:600;margin:18px 0 8px;">$1</h3>');
  s = s.replace(/^# (.+)$/gm, '<h3 style="color:var(--brand-blue);font-size:15px;font-weight:600;margin:18px 0 10px;">$1</h3>');
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/^---+$/gm, '<hr style="border:none;border-top:1px solid var(--border-color);margin:12px 0;">');
  s = s.replace(/\n/g, '<br>');
  return '<div style="font-weight:300; line-height:1.85;">' + s + '</div>';
}

function showDetail(e) {
  var typeEl = document.getElementById('modal-type');
  typeEl.textContent = e.type;
  typeEl.style.color = 'var(--' + e.type + ')';
  document.getElementById('modal-title').textContent = e.title;

  // Meta line
  var metaParts = [];
  if (e._dateKey) metaParts.push(e._dateKey);
  else if (e.sourceMeta) {
    var dateMatch = e.sourceMeta.match(/\d{4}-\d{2}-\d{2}/);
    if (dateMatch) metaParts.push(dateMatch[0]);
  }
  if (e.source && e.source !== 'AI Secretary') metaParts.push(e.source);
  document.getElementById('modal-meta').textContent = metaParts.join(' · ');

  // Tags
  var tagsEl = document.getElementById('modal-tags');
  if (e.tags && e.tags.length > 0) {
    tagsEl.innerHTML = e.tags.map(function(t) {
      return '<span class="modal-tag-chip">' + t + '</span>';
    }).join('');
    tagsEl.style.display = 'flex';
  } else {
    tagsEl.style.display = 'none';
  }

  // AI Summary (left)
  document.getElementById('modal-text').innerHTML = mdToHtml(e.content);

  // Source card (right)
  var sourceImg = document.getElementById('modal-source-img');
  var safeImage = false;
  if (e.image && e.image.length > 0) {
    var trustedDomains = [
      'gcaptain.com', 'marinelink.com', 'offshore-energy.biz',
      'maritime-executive.com', 'navalnews.com', 'seatrade-maritime.com',
      'windward.ai', 'reuters.com', 'bbc.co.uk', 'bbc.com',
      'cnn.com', 'euronews.com', 'defensenews.com', 'usni.org',
      'defence-blog.com', 'navaltoday.com', 'workboat.com',
      'gov.uk', 'static.euronews.com', 'defconalerts.com',
      'koreaittimes.com', 'thenationalnews.com', 'eurekalert.org',
      'mediasvc.eurekalert.org', 'img.youtube.com', 'i.ytimg.com',
      'meyka.com'
    ];
    try {
      var imgHost = new URL(e.image).hostname.replace('www.', '');
      safeImage = trustedDomains.some(function(d) { return imgHost.includes(d); });
    } catch(err) { safeImage = false; }
  }
  if (safeImage) {
    sourceImg.src = e.image;
    sourceImg.alt = e.title || 'Article image';
    sourceImg.style.display = 'block';
    sourceImg.onerror = function() { this.style.display = 'none'; };
  } else {
    sourceImg.src = '';
    sourceImg.style.display = 'none';
  }
  document.getElementById('modal-source-name').textContent = e.source || 'Source';
  document.getElementById('modal-source-meta').textContent = e.sourceMeta || '';

  var locEl = document.getElementById('modal-source-location');
  if (e.location && e.location !== 'Global') {
    locEl.innerHTML = '📍 ' + e.location;
    locEl.style.display = 'block';
  } else {
    locEl.style.display = 'none';
  }

  var linkBtn = document.getElementById('modal-link-main');
  if (e.link && e.link.length > 0) {
    linkBtn.href = e.link;
    linkBtn.style.display = 'inline-flex';
  } else {
    linkBtn.style.display = 'none';
  }

  document.getElementById('detail-modal').classList.add('open');
}

function flyToAndShowDetail(e) {
  if (e.coords && e.coords[0] !== 0 && e.coords[1] !== 0) {
    // Globe 모드면 먼저 2D로 전환
    if (spinEnabled) {
      spinEnabled = false;
      if (spinRAF) { cancelAnimationFrame(spinRAF); spinRAF = null; }
    }
    if (isGlobe) {
      isGlobe = false;
      map.setProjection('mercator');
      var btn = document.getElementById('btn-globe');
      if (btn) btn.classList.remove('active');
    }

    map.flyTo({
      center: e.coords,
      zoom: 6,
      duration: 1500,
      essential: true
    });
    // flyTo 완료 후 모달 열기
    setTimeout(function() { showDetail(e); }, 1600);
  } else {
    showDetail(e);
  }
}

function closePanel() {
  document.getElementById('side-panel').classList.remove('open');
  document.querySelectorAll('.day-item').forEach(function(i) { i.classList.remove('active'); });
}

function closeDetail() {
  document.getElementById('detail-modal').classList.remove('open');
}

function openAbout() { document.getElementById('about-modal').classList.add('open'); }
function closeAbout() { document.getElementById('about-modal').classList.remove('open'); }

// ── Map Style & Globe ──

const MAP_STYLES = {
  dark:        'mapbox://styles/mapbox/dark-v11',
  light:       'mapbox://styles/mapbox/light-v11',
  streets:     'mapbox://styles/mapbox/streets-v12',
  satellite:   'mapbox://styles/mapbox/satellite-streets-v12',
  outdoors:    'mapbox://styles/mapbox/outdoors-v12',
  'nav-day':   'mapbox://styles/mapbox/navigation-day-v1',
  'nav-night': 'mapbox://styles/mapbox/navigation-night-v1'
};
let isGlobe = true; // 초기 Globe로 시작
let spinEnabled = true;
let spinRAF = null;
let idleTimer = null;
const IDLE_TIMEOUT = 30000; // 30초 무조작 시 회전 재개

function setMapStyle(key) {
  if (!MAP_STYLES[key]) return;
  currentStyle = key;
  map.setStyle(MAP_STYLES[key]);

  // 버튼 활성화 표시
  document.querySelectorAll('[id^="style-"]').forEach(function(btn) { btn.classList.remove('active'); });
  var btn = document.getElementById('style-' + key);
  if (btn) btn.classList.add('active');
}

function toggleGlobe() {
  if (spinEnabled) {
    // 회전 중 → 멈추고 2D 전환
    spinEnabled = false;
    if (spinRAF) { cancelAnimationFrame(spinRAF); spinRAF = null; }
    isGlobe = false;
    map.setProjection('mercator');
    map.flyTo({ center: [127, 36.5], zoom: 4, duration: 1500, essential: true });
    if (idleTimer) clearTimeout(idleTimer);
  } else if (isGlobe) {
    // Globe인데 멈춰있으면 → 2D 전환
    isGlobe = false;
    map.setProjection('mercator');
  } else {
    // 2D → Globe 회전 시작
    resumeSpin();
  }

  var btn = document.getElementById('btn-globe');
  if (btn) {
    if (isGlobe || spinEnabled) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }
}

function changeMonth(dir) {
  currentMonth += dir;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  else if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderMonth();
}

// ── Today's Headlines Overlay ──

function getTodayDateKey() {
  var now = new Date();
  return now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
}

function getLatestNewsForHeadline() {
  // 오늘 이전 날짜만 역순으로 최신 뉴스 찾기
  if (typeof events === 'undefined') return [];
  
  var todayKey = getTodayDateKey();
  var allDates = Object.keys(events).filter(function(d) { return d <= todayKey; }).sort().reverse();
  var collected = [];
  
  for (var i = 0; i < allDates.length && collected.length < 5; i++) {
    var dateEvents = events[allDates[i]];
    for (var j = 0; j < dateEvents.length && collected.length < 5; j++) {
      collected.push({ date: allDates[i], event: dateEvents[j] });
    }
  }
  return collected;
}

function showTodayHeadlines() {
  var items = getLatestNewsForHeadline();
  if (items.length === 0) return;

  var overlay = document.getElementById('headlines-overlay');
  if (!overlay) return;

  var list = document.getElementById('headlines-list');
  
  // 날짜 표시 - 오늘 날짜 기준
  var now = new Date();
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  document.getElementById('headlines-date-day').textContent = days[now.getDay()];
  document.getElementById('headlines-date-full').textContent = months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();

  // 뉴스 수 카운트
  var accCount = 0, newsCount = 0, evtCount = 0;
  items.forEach(function(it) {
    if (it.event.type === 'accident') accCount++;
    else if (it.event.type === 'news') newsCount++;
    else if (it.event.type === 'event') evtCount++;
  });
  document.getElementById('headlines-stats').innerHTML = 
    (accCount ? '<span class="hl-stat"><span class="hl-stat-dot" style="background:var(--accident)"></span>' + accCount + ' Accident' + (accCount > 1 ? 's' : '') + '</span>' : '') +
    (newsCount ? '<span class="hl-stat"><span class="hl-stat-dot" style="background:var(--news)"></span>' + newsCount + ' News</span>' : '') +
    (evtCount ? '<span class="hl-stat"><span class="hl-stat-dot" style="background:var(--event)"></span>' + evtCount + ' Event' + (evtCount > 1 ? 's' : '') + '</span>' : '');

  list.innerHTML = items.map(function(it, idx) {
    var e = it.event;
    var typeColors = { accident: 'var(--accident)', news: 'var(--news)', event: 'var(--event)' };
    return '<div class="hl-item" style="animation-delay:' + (0.3 + idx * 0.1) + 's" onclick="dismissHeadlines(); setTimeout(function(){ flyToAndShowDetail(' + JSON.stringify(e).replace(/"/g, '&quot;') + '); }, 400);">' +
      '<div class="hl-item-indicator" style="background:' + (typeColors[e.type] || '#999') + '"></div>' +
      '<div class="hl-item-body">' +
        '<div class="hl-item-meta">' +
          '<span class="hl-item-type" style="color:' + (typeColors[e.type] || '#999') + '">' + e.type.toUpperCase() + '</span>' +
          (e.location ? '<span class="hl-item-loc">📍 ' + e.location + '</span>' : '') +
        '</div>' +
        '<div class="hl-item-title">' + e.title + '</div>' +
      '</div>' +
      '<svg class="hl-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>' +
    '</div>';
  }).join('');

  // 오버레이 표시
  requestAnimationFrame(function() {
    overlay.classList.add('show');
  });

  // 12초 후 자동 닫기
  setTimeout(function() {
    if (overlay.classList.contains('show')) {
      dismissHeadlines();
    }
  }, 12000);
}

function dismissHeadlines() {
  var overlay = document.getElementById('headlines-overlay');
  if (overlay) {
    overlay.classList.add('dismiss');
    setTimeout(function() {
      overlay.classList.remove('show', 'dismiss');
    }, 600);
  }
}

// ── Shore VDR Modal (Password Protected) ──
var _vdrAuth = false;

function openVDR(name, mmsi, type, origin, destination, hdg, sog) {
  if (aisPopup) { aisPopup.remove(); aisPopup = null; }
  if (!_vdrAuth) {
    var old = document.getElementById('vdr-auth-modal');
    if (old) old.remove();
    var overlay = document.createElement('div');
    overlay.id = 'vdr-auth-modal';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;';
    var box = document.createElement('div');
    box.style.cssText = 'background:#fff;border-radius:12px;padding:28px 32px;width:340px;box-shadow:0 20px 60px rgba(0,0,0,0.3);text-align:center;';
    box.innerHTML =
      '<div style="width:48px;height:48px;border-radius:50%;background:#f0fdf4;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;border:2px solid #16a34a;font-size:22px;">🔒</div>' +
      '<div style="font-size:16px;font-weight:700;color:#1a2e23;margin-bottom:4px;">Shore VDR Access</div>' +
      '<div style="font-size:12px;color:#6b8f74;margin-bottom:16px;">Authorized personnel only</div>' +
      '<input id="vdr-pw" type="password" placeholder="Enter access code" style="width:100%;padding:10px 14px;border:1.5px solid #d1ddd5;border-radius:6px;font-size:13px;outline:none;text-align:center;letter-spacing:2px;" onkeydown="if(event.key===\'Enter\')checkVDR(\'' + name.replace(/'/g,"\\'") + '\',\'' + mmsi + '\')" />' +
      '<div id="vdr-pw-err" style="font-size:11px;color:#dc2626;margin-top:6px;height:16px;"></div>' +
      '<div style="display:flex;gap:8px;margin-top:12px;">' +
      '<button onclick="document.getElementById(\'vdr-auth-modal\').remove()" style="flex:1;padding:8px 0;background:#f0f5f1;color:#4a6b52;border:1px solid #d1ddd5;border-radius:6px;font-size:12px;cursor:pointer;">Cancel</button>' +
      '<button onclick="checkVDR(\'' + name.replace(/'/g,"\\'") + '\',\'' + mmsi + '\')" style="flex:1;padding:8px 0;background:#16a34a;color:#fff;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">Authorize</button>' +
      '</div>';
    overlay.appendChild(box);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
    setTimeout(function() { document.getElementById('vdr-pw').focus(); }, 100);
    return;
  }
  _openVDRModal(name, mmsi);
}

function checkVDR(name, mmsi) {
  var pw = document.getElementById('vdr-pw').value;
  if (pw === 'vdr2026') {
    _vdrAuth = true;
    var authModal = document.getElementById('vdr-auth-modal');
    if (authModal) authModal.remove();
    _openVDRModal(name, mmsi);
  } else {
    var err = document.getElementById('vdr-pw-err');
    err.textContent = '⚠ Invalid access code';
    document.getElementById('vdr-pw').style.borderColor = '#ef4444';
    document.getElementById('vdr-pw').value = '';
    document.getElementById('vdr-pw').focus();
  }
}

function _openVDRModal(name, mmsi) {
  var old = document.getElementById('vdr-modal');
  if (old) old.remove();
  var modal = document.createElement('div');
  modal.id = 'vdr-modal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background:rgba(0,0,0,0.85);display:flex;flex-direction:column;';
  var topBar = document.createElement('div');
  topBar.style.cssText = 'height:32px;background:#064e3b;display:flex;align-items:center;justify-content:space-between;padding:0 12px;flex-shrink:0;';
  topBar.innerHTML = '<span style="color:#4ade80;font-size:11px;font-weight:600;letter-spacing:1px;">🖥 Shore VDR — ' + name + ' (MMSI ' + mmsi + ')</span>' +
    '<button onclick="closeVDR()" style="background:rgba(255,255,255,0.1);border:none;color:#fff;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:11px;">✕ Close</button>';
  modal.appendChild(topBar);
  var iframe = document.createElement('iframe');
  iframe.src = 'shore-vdr.html';
  iframe.style.cssText = 'flex:1;border:none;width:100%;background:#f4f7f5;';
  modal.appendChild(iframe);
  document.body.appendChild(modal);
  modal._escHandler = function(e) { if (e.key === 'Escape') closeVDR(); };
  document.addEventListener('keydown', modal._escHandler);
}

function closeVDR() {
  var modal = document.getElementById('vdr-modal');
  if (modal) {
    if (modal._escHandler) document.removeEventListener('keydown', modal._escHandler);
    modal.remove();
  }
}

init();
