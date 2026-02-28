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
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [127, 36.5],
    zoom: 1.5,
    projection: 'globe',
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
  var speed = 0.12; // degrees per frame (~60초에 한 바퀴)

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
        openSidePanel(date, list);
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

function openSidePanel(date, list) {
  var panel = document.getElementById('side-panel');
  var content = document.getElementById('panel-content');
  document.getElementById('panel-title').textContent = date;

  var enriched = list.map(function(e) { var copy = Object.assign({}, e); copy._dateKey = date; return copy; });

  content.innerHTML = enriched.length ? enriched.map(function(e) {
    return '<div style="background:rgba(0,0,0,0.02); padding:12px; border-radius:6px; margin-bottom:10px; cursor:pointer; border:1px solid rgba(0,0,0,0.06); transition:0.2s;" onclick="flyToAndShowDetail(' + JSON.stringify(e).replace(/"/g, '&quot;') + ')" onmouseover="this.style.background=\'rgba(9,132,227,0.06)\'" onmouseout="this.style.background=\'rgba(0,0,0,0.02)\'">' +
      '<div style="font-size:9px; color:var(--' + e.type + '); font-weight:600; margin-bottom:4px;">' + e.type.toUpperCase() + '</div>' +
      '<div style="font-size:13px; font-weight:500; color:var(--text-primary);">' + e.title + '</div>' +
      (e.location ? '<div style="font-size:10px; color:var(--text-secondary); margin-top:4px;">📍 ' + e.location + '</div>' : '') +
    '</div>';
  }).join('') : '<div style="text-align:center; color:#aaa; margin-top:40px; font-size:11px;">No Data</div>';

  panel.classList.add('open');
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
  s = s.replace(/^> (.+)$/gm, '<blockquote style="border-left:3px solid var(--brand-blue);padding-left:12px;margin:8px 0;color:var(--text-secondary);font-style:italic;">$1</blockquote>');
  s = s.replace(/\n/g, '<br>');
  return '<div style="font-weight:300; line-height:1.85;">' + s + '</div>';
}

function showDetail(e) {
  var typeEl = document.getElementById('modal-type');
  typeEl.textContent = e.type;
  typeEl.style.color = 'var(--' + e.type + ')';
  document.getElementById('modal-title').textContent = e.title;

  // Meta line (date + source)
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

  // AI Summary (left) — convert markdown if needed
  document.getElementById('modal-text').innerHTML = mdToHtml(e.content);

  // Source card (right)
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

function closeDetail() {
  document.getElementById('detail-modal').classList.remove('open');
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
  
  // 날짜 표시
  var latestDate = items[0].date;
  var dateObj = new Date(latestDate + 'T00:00:00');
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  document.getElementById('headlines-date-day').textContent = days[dateObj.getDay()];
  document.getElementById('headlines-date-full').textContent = months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();

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

init();
