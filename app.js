// app.js - Full Integrated Version
let map, markers = [];
let currentYear = 2026;
let currentMonth = 0; // JAN
let windyAPIInstance = null;
let isGlobe = false;
let currentStyle = 0;

const MAP_STYLES = [
  { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v11' },
  { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-streets-v12' }
];

function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  map = new mapboxgl.Map({
    container: 'map',
    style: MAP_STYLES[0].url,
    center: [127, 35],
    zoom: 4,
    attributionControl: false
  });

  map.on('load', () => {
    renderMonth();
    renderMarkers();
    initWindy();
  });
}

// --- Windy Engine ---
function initWindy() {
  const options = {
    key: "aMpcNHv9Ki6q8dtdnjVL5Q1EwXZYQuDQ",
    lat: map.getCenter().lat,
    lon: map.getCenter().lng,
    zoom: map.getZoom(),
  };

  windyInit(options, windyAPI => {
    windyAPIInstance = windyAPI;
    map.on('move', () => {
      const center = map.getCenter();
      windyAPIInstance.map.setView([center.lat, center.lng], map.getZoom());
    });
  });
}

function toggleWeatherLayer(layer) {
  if (!windyAPIInstance) return;
  const { store } = windyAPIInstance;
  const overlayMap = { wind: "wind", wave: "waves", temp: "temp", current: "currents" };
  
  store.set("overlay", overlayMap[layer] || "wind");
  document.querySelectorAll('.weather-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`layer-${layer}`).classList.add('active');
}

// --- 기존 캘린더 & 뉴스 로직 유지 ---
function renderMonth() {
  document.getElementById('month-name').textContent = MONTHS[currentMonth];
  document.getElementById('year-label').textContent = currentYear;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const strip = document.getElementById('days-strip');
  strip.innerHTML = '';

  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayEvents = events[dateKey] || [];
    const item = document.createElement('div');
    item.className = 'day-item';
    const bars = dayEvents.map(e => `<div class="event-bar bar-${e.type}"></div>`).join('');
    item.innerHTML = `<span class="day-num">${d}</span><div class="day-events">${bars}</div>`;
    item.onclick = () => openSidePanel(dateKey, dayEvents);
    strip.appendChild(item);
  }
}

function renderMarkers() {
  markers.forEach(m => m.remove());
  markers = [];
  Object.entries(events).forEach(([date, list]) => {
    list.forEach(e => {
      if (!e.coords) return;
      const el = document.createElement('div');
      el.className = 'custom-marker';
      const marker = new mapboxgl.Marker({ color: e.type === 'accident' ? '#1a6fb5' : '#2d9f6b' })
        .setLngLat(e.coords)
        .setPopup(new mapboxgl.Popup().setHTML(`<b>${e.title}</b>`))
        .addTo(map);
      markers.push(marker);
    });
  });
}

function openSidePanel(date, list) {
  const panel = document.getElementById('side-panel');
  const content = document.getElementById('panel-content');
  document.getElementById('panel-title').textContent = date;
  content.innerHTML = list.length ? list.map(e => `
    <div style="padding:10px; border:1px solid #333; margin-bottom:8px; cursor:pointer;" onclick='showDetail(${JSON.stringify(e)})'>
      <div style="font-size:10px; color:var(--${e.type})">${e.type.toUpperCase()}</div>
      <div style="font-size:13px;">${e.title}</div>
    </div>
  `).join('') : "No events";
  panel.classList.add('open');
}

function showDetail(e) {
  document.getElementById('modal-title').textContent = e.title;
  document.getElementById('modal-text').innerHTML = e.content;
  document.getElementById('detail-modal').classList.add('open');
}

function closePanel() { document.getElementById('side-panel').classList.remove('open'); }
function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }
function changeMonth(dir) { 
  currentMonth += dir; 
  if(currentMonth > 11) { currentMonth = 0; currentYear++; }
  else if(currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderMonth(); 
}

function toggleProjection() { isGlobe = !isGlobe; map.setProjection(isGlobe ? 'globe' : 'mercator'); }
function cycleStyle() { currentStyle = (currentStyle + 1) % MAP_STYLES.length; map.setStyle(MAP_STYLES[currentStyle].url); }

init();