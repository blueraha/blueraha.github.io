// ═══════════════════════════════════════════════════════════════
// APP.JS - Main application logic
// ═══════════════════════════════════════════════════════════════

// ─── State ───
let map, markers = [];
let currentYear = 2026;
let currentMonth = 1; // February (0-indexed)
let selectedDay = null;
let isGlobe = false;
let filters = { accident: true, event: true, news: false };
let weatherLayers = { wind: false, wave: false, temp: false, current: false };
let currentStyle = 0;

// Mapbox styles
const MAP_STYLES = [
  { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v11' },
  { name: 'Light', url: 'mapbox://styles/mapbox/light-v11' },
  { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-streets-v12' },
  { name: 'Navigation', url: 'mapbox://styles/mapbox/navigation-night-v1' },
  { name: 'Outdoors', url: 'mapbox://styles/mapbox/outdoors-v12' }
];

// ─── Init ───
function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';
  
  map = new mapboxgl.Map({
    container: 'map',
    style: MAP_STYLES[0].url,
    center: [20, 30],
    zoom: 2,
    projection: 'mercator'
  });

  // Add Mapbox built-in controls
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  map.addControl(new mapboxgl.FullscreenControl(), 'bottom-right');
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

  map.on('load', () => {
    renderMonth();
    renderMarkers();
  });
}

// ─── Month Navigation ───
function changeMonth(dir) {
  currentMonth += dir;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  selectedDay = null;
  closePanel();
  renderMonth();
}

function renderMonth() {
  document.getElementById('month-name').textContent = MONTHS[currentMonth];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const strip = document.getElementById('days-strip');
  strip.innerHTML = '';

  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayEvents = events[dateKey] || [];

    const item = document.createElement('div');
    item.className = 'day-item';
    if (selectedDay === d) item.classList.add('active');

    const barsHTML = dayEvents.map(e => `<div class="event-bar bar-${e.type}"></div>`).join('');
    item.innerHTML = `<span class="day-num">${d}</span><div class="day-events">${barsHTML}</div>`;
    item.onclick = () => selectDay(d, dateKey, dayEvents);
    strip.appendChild(item);
  }
}

// ─── Day Selection ───
function selectDay(day, dateKey, dayEvents) {
  selectedDay = day;
  renderMonth();

  if (dayEvents.length === 0) {
    closePanel();
    return;
  }

  document.getElementById('panel-title').textContent = `${MONTHS[currentMonth]} ${day}, ${currentYear}`;
  const content = document.getElementById('panel-content');
  content.innerHTML = dayEvents.map((e, i) => `
    <div class="event-card" onclick="showDetail(${i}, '${dateKey}')">
      <div class="event-type-badge badge-${e.type}">
        ${e.type === 'accident' ? 'ACCIDENT' : e.type === 'event' ? 'EVENT' : 'NEWS'}
      </div>
      <div class="event-title">${e.title}</div>
      <div class="event-source">${e.source}</div>
    </div>
  `).join('');
  
  document.getElementById('side-panel').classList.add('open');

  if (dayEvents[0].coords) {
    map.flyTo({ center: dayEvents[0].coords, zoom: 6, duration: 1200 });
  }
}

function closePanel() {
  document.getElementById('side-panel').classList.remove('open');
}

// ─── Detail Modal ───
function showDetail(index, dateKey) {
  const e = events[dateKey][index];
  document.getElementById('modal-source').textContent = e.sourceMeta;
  document.getElementById('modal-title').textContent = e.title;
  document.getElementById('modal-text').innerHTML = e.content;

  const footer = document.getElementById('modal-footer');
  footer.innerHTML = (e.link && e.link !== '#' ? 
    `<a href="${e.link}" target="_blank" class="modal-link">View Source →</a>` : '') +
    (e.tags || []).map(t => `<span class="modal-tag">#${t}</span>`).join('');

  document.getElementById('detail-modal').classList.add('open');
}

function closeDetail() {
  document.getElementById('detail-modal').classList.remove('open');
}

function closeIfOverlay(e) {
  if (e.target.id === 'detail-modal') closeDetail();
}

// ─── Map Controls ───
function toggleProjection() {
  isGlobe = !isGlobe;
  map.setProjection(isGlobe ? 'globe' : 'mercator');
}

function toggleFilter(type) {
  filters[type] = !filters[type];
  document.getElementById(`filter-${type}`).classList.toggle('active', filters[type]);
  renderMarkers();
}

function cycleStyle() {
  currentStyle = (currentStyle + 1) % MAP_STYLES.length;
  map.setStyle(MAP_STYLES[currentStyle].url);
  setTimeout(() => renderMarkers(), 1000); // Re-render after style loads
}

function toggle3D() {
  const pitch = map.getPitch();
  map.easeTo({
    pitch: pitch === 0 ? 60 : 0,
    duration: 1000
  });
}

// ─── Weather Layers ───
function toggleWeatherLayer(layer) {
  weatherLayers[layer] = !weatherLayers[layer];
  document.getElementById(`layer-${layer}`).classList.toggle('active', weatherLayers[layer]);
  
  if (weatherLayers[layer]) {
    addWeatherLayer(layer);
  } else {
    removeWeatherLayer(layer);
  }
}

function addWeatherLayer(layer) {
  // OpenWeatherMap tiles (free tier)
  const OWM_KEY = 'demo'; // Replace with actual key for production
  const layerConfigs = {
    wind: {
      id: 'weather-wind',
      url: `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
      opacity: 0.6
    },
    wave: {
      id: 'weather-wave',
      url: `https://tile.openweathermap.org/map/wave/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
      opacity: 0.5
    },
    temp: {
      id: 'weather-temp',
      url: `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
      opacity: 0.6
    },
    current: {
      id: 'weather-current',
      // Using wind as proxy for currents (in production, use marine current API)
      url: `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
      opacity: 0.4
    }
  };

  const config = layerConfigs[layer];
  if (!config) return;

  // Check if source already exists
  if (!map.getSource(config.id)) {
    map.addSource(config.id, {
      type: 'raster',
      tiles: [config.url],
      tileSize: 256
    });
  }

  // Add layer if not exists
  if (!map.getLayer(config.id)) {
    map.addLayer({
      id: config.id,
      type: 'raster',
      source: config.id,
      paint: {
        'raster-opacity': config.opacity
      }
    });
  }
  
  updateWeatherLegend();
}

function removeWeatherLayer(layer) {
  const layerId = `weather-${layer}`;
  if (map.getLayer(layerId)) {
    map.removeLayer(layerId);
  }
  updateWeatherLegend();
}

function updateWeatherLegend() {
  const activeLayers = Object.keys(weatherLayers).filter(k => weatherLayers[k]);
  const legend = document.getElementById('weather-legend');
  
  if (activeLayers.length === 0) {
    legend.style.display = 'none';
    return;
  }
  
  legend.style.display = 'block';
  const content = document.getElementById('legend-content');
  
  const layerInfo = {
    wind: { icon: '💨', label: 'Wind Speed', colors: ['#fff', '#7ab8f5', '#1a6fb5'] },
    wave: { icon: '🌊', label: 'Wave Height', colors: ['#6dd4a7', '#2d9f6b', '#1a5f44'] },
    temp: { icon: '🌡️', label: 'Sea Temp', colors: ['#ff6b6b', '#ffb380', '#fff'] },
    current: { icon: '🌀', label: 'Currents', colors: ['#fff', '#ea7317', '#d63b2f'] }
  };
  
  content.innerHTML = activeLayers.map(layer => {
    const info = layerInfo[layer];
    return `<div class="legend-row">
      <span>${info.icon}</span>
      <span>${info.label}</span>
    </div>`;
  }).join('');
}

// ─── Markers ───
function renderMarkers() {
  markers.forEach(m => m.remove());
  markers = [];

  Object.entries(events).forEach(([dateKey, evList]) => {
    evList.forEach(e => {
      if (!e.coords) return;
      if (e.type === 'news' || !filters[e.type]) return;

      const color = e.type === 'accident' ? '#1a6fb5' : '#2d9f6b';
      const marker = new mapboxgl.Marker({ color })
        .setLngLat(e.coords)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<strong>${e.title}</strong><br><small>${e.location || ''}</small>`))
        .addTo(map);
      markers.push(marker);
    });
  });
}

// ─── Start ───
init();
