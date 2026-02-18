// ═══════════════════════════════════════════════════════════════
// APP.JS - Maritime Hub (Windy overlay version)
// ═══════════════════════════════════════════════════════════════

let map, markers = [];
let currentYear = 2026;
let currentMonth = 1;
let selectedDay = null;
let isGlobe = false;
let filters = { accident: true, event: true, news: false };
let windyAPIInstance = null;

// ─── Mapbox styles ───
const MAP_STYLES = [
  { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v11' },
  { name: 'Light', url: 'mapbox://styles/mapbox/light-v11' },
  { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-streets-v12' }
];

let currentStyle = 0;

// ─── Init ───
function init() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  map = new mapboxgl.Map({
    container: 'map',
    style: MAP_STYLES[0].url,
    center: [20, 30],
    zoom: 2
  });

  map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

  map.on('load', () => {
    renderMonth();
    renderMarkers();
    initWindy();
  });
}

// ─── Windy Init ───
function initWindy() {
  const options = {
    key: "aMpcNHv9Ki6q8dtdnjVL5Q1EwXZYQuDQ",
    lat: 30,
    lon: 130,
    zoom: 3
  };

  windyInit(options, windyAPI => {
    windyAPIInstance = windyAPI;
  });
}

// ─── Toggle Wind Layer ───
function toggleWeatherLayer(layer) {
  if (!windyAPIInstance) return;

  const { store } = windyAPIInstance;

  const overlayMap = {
    wind: "wind",
    wave: "waves",
    temp: "temp",
    current: "currents"
  };

  store.set("overlay", overlayMap[layer] || "wind");
}

// ─── Month UI ───
function changeMonth(dir) {
  currentMonth += dir;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  selectedDay = null;
  renderMonth();
}

function renderMonth() {
  document.getElementById('month-name').textContent = MONTHS[currentMonth];
  document.querySelector('.year-label').textContent = currentYear;

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const strip = document.getElementById('days-strip');
  strip.innerHTML = '';

  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey =
      `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

    const dayEvents = events[dateKey] || [];

    const item = document.createElement('div');
    item.className = 'day-item';

    const barsHTML = dayEvents
      .map(e => `<div class="event-bar bar-${e.type}"></div>`)
      .join('');

    item.innerHTML =
      `<span class="day-num">${d}</span><div class="day-events">${barsHTML}</div>`;

    item.onclick = () => selectDay(d, dateKey, dayEvents);

    strip.appendChild(item);
  }
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
          .setHTML(`<strong>${e.title}</strong><br>${e.location || ''}`))
        .addTo(map);

      markers.push(marker);
    });
  });
}

// ─── Map controls ───
function toggleProjection() {
  isGlobe = !isGlobe;
  map.setProjection(isGlobe ? 'globe' : 'mercator');
}

function cycleStyle() {
  currentStyle = (currentStyle + 1) % MAP_STYLES.length;
  map.setStyle(MAP_STYLES[currentStyle].url);
  setTimeout(renderMarkers, 800);
}

function toggle3D() {
  const pitch = map.getPitch();
  map.easeTo({ pitch: pitch === 0 ? 60 : 0, duration: 800 });
}

// ─── Start ───
init();
