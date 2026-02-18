// app.js - Maritime Hub v3.1.0
// Windy 제거 → OWM 1.0 무료 타일 + RainViewer 레이더
// 주의: MONTHS, events 변수는 data.js에 이미 있습니다. 절대 재선언하지 마세요.

let map, markers = [];
let currentYear = 2026;
let currentMonth = 0; // 0 = JAN
let currentStyle = 'light';

// ── Weather Layer State ──
const OWM_APP_ID = 'c1c9d245aa905fef239db16721c930a7'; // ← OWM 무료 API 키를 여기에 넣으세요 (openweathermap.org 가입 후 발급)
let activeWeatherLayers = new Set();
let rainviewerFrames = [];

// OWM 1.0 타일 레이어 정의 (무료)
const OWM_LAYERS = {
  wind:     { id: 'owm-wind',     layer: 'wind_new' },
  pressure: { id: 'owm-pressure', layer: 'pressure_new' },
  clouds:   { id: 'owm-clouds',   layer: 'clouds_new' },
  temp:     { id: 'owm-temp',     layer: 'temp_new' }
};

function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [127, 36.5],
    zoom: 4,
    attributionControl: false
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
  }), 'top-left');
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

  document.body.addEventListener('click', function() {
    closePanel();
  });

  map.on('load', () => {
    if (typeof MONTHS !== 'undefined' && typeof events !== 'undefined') {
      renderMonth();
      renderMarkers();
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
  });

  // 스타일 변경 후 레이어 재등록
  map.on('style.load', () => {
    addWeatherSources();
    // 활성화된 레이어 다시 표시
    activeWeatherLayers.forEach(key => {
      if (key === 'radar') {
        showRainViewerLayer();
      } else {
        showOWMLayer(key);
      }
    });
    renderMarkers();
  });
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
    } else {
      hideOWMLayer(key);
    }
  } else {
    // 켜기
    if (!OWM_APP_ID && key !== 'radar') {
      alert('OWM API 키가 필요합니다.\napp.js 상단의 OWM_APP_ID에 키를 입력하세요.\nhttps://openweathermap.org 에서 무료 발급 가능합니다.');
      return;
    }
    activeWeatherLayers.add(key);
    if (btn) btn.classList.add('active');
    if (key === 'radar') {
      showRainViewerLayer();
    } else {
      showOWMLayer(key);
    }
  }
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
}

function renderMarkers() {
  if (typeof markers !== 'undefined') markers.forEach(function(m) { m.remove(); });
  markers = [];

  if (typeof events === 'undefined') return;

  Object.entries(events).forEach(function([date, list]) {
    list.forEach(function(e) {
      if (!e.coords) return;

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
        openSidePanel(date, list);
      });
      markers.push(marker);
    });
  });
}

function openSidePanel(date, list) {
  var panel = document.getElementById('side-panel');
  var content = document.getElementById('panel-content');
  document.getElementById('panel-title').textContent = date;

  content.innerHTML = list.length ? list.map(function(e) {
    return '<div style="background:rgba(0,0,0,0.02); padding:12px; border-radius:6px; margin-bottom:10px; cursor:pointer; border:1px solid rgba(0,0,0,0.06); transition:0.2s;" onclick="showDetail(' + JSON.stringify(e).replace(/"/g, '&quot;') + ')" onmouseover="this.style.background=\'rgba(9,132,227,0.06)\'" onmouseout="this.style.background=\'rgba(0,0,0,0.02)\'">' +
      '<div style="font-size:9px; color:var(--' + e.type + '); font-weight:600; margin-bottom:4px;">' + e.type.toUpperCase() + '</div>' +
      '<div style="font-size:13px; font-weight:500; color:var(--text-primary);">' + e.title + '</div>' +
    '</div>';
  }).join('') : '<div style="text-align:center; color:#aaa; margin-top:40px; font-size:11px;">No Data</div>';

  panel.classList.add('open');
}

function showDetail(e) {
  document.getElementById('modal-type').textContent = e.type;
  document.getElementById('modal-type').style.color = 'var(--' + e.type + ')';
  document.getElementById('modal-title').textContent = e.title;
  document.getElementById('modal-text').innerHTML = e.content;

  var linkBtn = document.getElementById('modal-link');
  if (e.link) {
    linkBtn.href = e.link;
    linkBtn.style.display = 'inline-block';
  } else {
    linkBtn.style.display = 'none';
  }

  document.getElementById('detail-modal').classList.add('open');
}

function closePanel() {
  document.getElementById('side-panel').classList.remove('open');
  document.querySelectorAll('.day-item').forEach(function(i) { i.classList.remove('active'); });
}

function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }

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
let isGlobe = false;

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
  isGlobe = !isGlobe;
  map.setProjection(isGlobe ? 'globe' : 'mercator');

  var btn = document.getElementById('btn-globe');
  if (btn) {
    if (isGlobe) {
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

init();
