// app.js - Maritime Hub v1.4.0 Stable Fix
let map, markers = [];
let currentYear = 2026;
let currentMonth = 0;
let windyAPIInstance = null;
let isGlobe = false;
let currentStyle = 0;

// ERROR FIX: MONTHS removed here because it is already in data.js

const MAP_STYLES = [
  { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v11' },
  { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-streets-v12' }
];

function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  map = new mapboxgl.Map({
    container: 'map',
    style: MAP_STYLES[0].url,
    center: [127, 36.5],
    zoom: 4,
    attributionControl: false
  });

  // Mapbox Controls Left
  map.addControl(new mapboxgl.NavigationControl(), 'top-left');

  map.on('load', () => {
    // Check if data.js loaded correctly
    if (typeof MONTHS !== 'undefined') {
      renderMonth();
    } else {
      console.error("data.js not loaded properly");
    }
    
    if (typeof events !== 'undefined') {
      renderMarkers();
    }
    
    // Try to init Windy, catch errors if key is bad
    try {
      initWindy();
    } catch (e) {
      console.warn("Windy Init Failed:", e);
    }
  });
}

function initWindy() {
  const options = {
    key: "aMpcNHv9Ki6q8dtdnjVL5Q1EwXZYQuDQ", // Note: This key is returning 401 (Unauthorized)
    lat: map.getCenter().lat,
    lon: map.getCenter().lng,
    zoom: Math.round(map.getZoom()),
    verbose: false
  };

  if (typeof windyInit === 'function') {
    windyInit(options, windyAPI => {
      windyAPIInstance = windyAPI;
      map.on('move', () => {
        const center = map.getCenter();
        windyAPIInstance.map.setView([center.lat, center.lng], Math.round(map.getZoom()));
      });
    });
  } else {
    console.warn("Windy Library not loaded");
  }
}

function renderMonth() {
  document.getElementById('month-name').textContent = MONTHS[currentMonth];
  const strip = document.getElementById('days-strip');
  strip.innerHTML = '';
  const actualDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let d = 1; d <= 31; d++) {
    const dateKey = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayEvents = (typeof events !== 'undefined' && events[dateKey]) ? events[dateKey] : [];
    
    const item = document.createElement('div');
    item.className = 'day-item';
    
    if (d > actualDays) {
      item.style.opacity = '0';
      item.style.pointerEvents = 'none';
    } else {
      const bars = dayEvents.map(e => `<div style="height:2px; width:100%; background:var(--${e.type}); margin-top:1px;"></div>`).join('');
      item.innerHTML = `<span>${d}</span><div style="width:80%;">${bars}</div>`;
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

function renderMarkers() {
  markers.forEach(m => m.remove());
  markers = [];
  
  if (typeof events === 'undefined') return;

  Object.entries(events).forEach(([date, list]) => {
    list.forEach(e => {
      if (!e.coords) return;
      
      const markerEl = document.createElement('div');
      markerEl.style.width = '8px';
      markerEl.style.height = '8px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.backgroundColor = `var(--${e.type})`;
      markerEl.style.border = '1.5px solid rgba(255,255,255,0.6)';
      markerEl.style.cursor = 'pointer';
      markerEl.style.boxShadow = '0 0 4px rgba(0,0,0,0.5)';

      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat(e.coords)
        .addTo(map);
        
      marker.getElement().addEventListener('click', (ev) => {
        ev.stopPropagation();
        openSidePanel(date, list);
      });
      markers.push(marker);
    });
  });
}

function openSidePanel(date, list) {
  const panel = document.getElementById('side-panel');
  const content = document.getElementById('panel-content');
  document.getElementById('panel-title').textContent = date;
  
  content.innerHTML = list.length ? list.map(e => `
    <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:6px; margin-bottom:10px; cursor:pointer; border:1px solid rgba(255,255,255,0.05);" onclick="showDetail(${JSON.stringify(e).replace(/"/g, '&quot;')})">
      <div style="font-size:9px; color:var(--${e.type}); font-weight:600; margin-bottom:4px;">${e.type.toUpperCase()}</div>
      <div style="font-size:13px; font-weight:500; color:#fff;">${e.title}</div>
    </div>
  `).join('') : `<div style="text-align:center; color:#555; margin-top:40px; font-size:11px;">No Data</div>`;
  
  panel.classList.add('open');
}

function showDetail(e) {
  document.getElementById('modal-type').textContent = e.type;
  document.getElementById('modal-type').style.color = `var(--${e.type})`;
  document.getElementById('modal-title').textContent = e.title;
  document.getElementById('modal-text').innerHTML = e.content;
  
  const linkBtn = document.getElementById('modal-link');
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
  document.querySelectorAll('.day-item').forEach(i => i.classList.remove('active'));
}

function closeDetail() { document.getElementById('detail-modal').classList.remove('open'); }

function toggleWeatherLayer(layer) {
  if (!windyAPIInstance) {
    console.warn("Windy API not initialized (Check Key)");
    return;
  }
  const overlayMap = { wind: "wind", wave: "waves", temp: "temp", current: "currents" };
  windyAPIInstance.store.set("overlay", overlayMap[layer]);
  
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

init();