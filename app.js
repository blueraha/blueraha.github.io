// app.js - Optimized Maritime Hub
let map, markers = [];
let currentYear = 2026;
let currentMonth = 0;
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
    center: [127, 35.5],
    zoom: 4,
    attributionControl: false
  });

  map.on('load', () => {
    renderMonth();
    renderMarkers();
    initWindy();
  });
}

function initWindy() {
  const options = {
    key: "aMpcNHv9Ki6q8dtdnjVL5Q1EwXZYQuDQ",
    lat: map.getCenter().lat,
    lon: map.getCenter().lng,
    zoom: map.getZoom(),
    verbose: false
  };

  windyInit(options, windyAPI => {
    windyAPIInstance = windyAPI;
    map.on('move', () => {
      const center = map.getCenter();
      windyAPIInstance.map.setView([center.lat, center.lng], map.getZoom());
    });
  });
}

function renderMonth() {
  document.getElementById('month-name').textContent = MONTHS[currentMonth];
  document.getElementById('year-label').textContent = currentYear;
  const strip = document.getElementById('days-strip');
  strip.innerHTML = '';

  for (let d = 1; d <= 31; d++) {
    const dateKey = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayEvents = events[dateKey] || [];
    
    const item = document.createElement('div');
    item.className = 'day-item';
    const bars = dayEvents.map(e => `<div class="event-bar bar-${e.type}"></div>`).join('');
    item.innerHTML = `<span class="day-num">${d}</span><div class="day-events">${bars}</div>`;
    
    // 31일까지 그리드를 채우되, 실제 존재하지 않는 날짜는 비활성화
    const actualDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    if (d > actualDays) {
      item.style.opacity = '0.1';
      item.style.pointerEvents = 'none';
    } else {
      item.onclick = (e) => {
        e.stopPropagation();
        openSidePanel(dateKey, dayEvents);
        document.querySelectorAll('.day-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      };
    }
    strip.appendChild(item);
  }
}

function openSidePanel(date, list) {
  const panel = document.getElementById('side-panel');
  const content = document.getElementById('panel-content');
  document.getElementById('panel-title').textContent = date;
  
  content.innerHTML = list.length ? list.map(e => `
    <div class="event-card" onclick="showDetail(${JSON.stringify(e).replace(/"/g, '&quot;')})">
      <div style="font-size:10px; color:var(--${e.type}); font-weight:600; margin-bottom:5px;">${e.type.toUpperCase()}</div>
      <h4>${e.title}</h4>
      <p>${e.content.replace(/<[^>]*>/g, '').substring(0, 80)}...</p>
    </div>
  `).join('') : `<div style="text-align:center; color:rgba(255,255,255,0.3); margin-top:50px;">No events scheduled</div>`;
  
  panel.classList.add('open');
}

function handleGlobalClick(e) {
  if (!document.getElementById('side-panel').contains(e.target)) {
    closePanel();
  }
}

function showDetail(e) {
  document.getElementById('modal-type').textContent = e.type;
  document.getElementById('modal-type').style.color = `var(--${e.type})`;
  document.getElementById('modal-title').textContent = e.title;
  document.getElementById('modal-text').innerHTML = e.content;
  document.getElementById('detail-modal').classList.add('open');
}

function closePanel() { 
  document.getElementById('side-panel').classList.remove('open');
  document.querySelectorAll('.day-item').forEach(i => i.classList.remove('active'));
}
function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }

function toggleWeatherLayer(layer) {
  if (!windyAPIInstance) return;
  const overlayMap = { wind: "wind", wave: "waves", temp: "temp", current: "currents" };
  windyAPIInstance.store.set("overlay", overlayMap[layer] || "wind");
  document.querySelectorAll('.weather-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`layer-${layer}`).classList.add('active');
}

function toggleProjection() { isGlobe = !isGlobe; map.setProjection(isGlobe ? 'globe' : 'mercator'); }
function cycleStyle() { currentStyle = (currentStyle + 1) % MAP_STYLES.length; map.setStyle(MAP_STYLES[currentStyle].url); }
function changeMonth(dir) { 
  currentMonth += dir; 
  if(currentMonth > 11) { currentMonth = 0; currentYear++; }
  else if(currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderMonth(); 
}

function renderMarkers() {
  markers.forEach(m => m.remove());
  markers = [];
  Object.entries(events).forEach(([date, list]) => {
    list.forEach(e => {
      if (!e.coords) return;
      const marker = new mapboxgl.Marker({ color: e.type === 'accident' ? '#1a6fb5' : '#2d9f6b' })
        .setLngLat(e.coords)
        .addTo(map);
      marker.getElement().addEventListener('click', () => openSidePanel(date, list));
      markers.push(marker);
    });
  });
}

init();