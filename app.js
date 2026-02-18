// app.js - Maritime Hub v2.4.0 Final Key Fix
// 주의: MONTHS, events 변수는 data.js에 있으므로 재선언하지 않음

let map, markers = [];
let currentYear = 2026;
let currentMonth = 0; // 0 = JAN
let windyAPIInstance = null;
let currentStyle = 'standard';

function init() {
  // [NEW KEY APPLIED]
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  // Mapbox Standard Style with 'Dusk' preset
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    center: [127, 36.5],
    zoom: 4,
    pitch: 0,
    attributionControl: false,
    config: {
      basemap: {
        lightPreset: 'dusk', // Dusk 테마 적용
        showPointOfInterestLabels: false
      }
    }
  });

  // [요청사항] 기본 컨트롤 좌측 상단 배치
  map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
  }), 'top-left');
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

  map.on('load', () => {
    // data.js 로드 확인 (충돌 방지)
    if (typeof events !== 'undefined' && typeof MONTHS !== 'undefined') {
      renderMonth();
      renderMarkers();
    } else {
      console.error("data.js not loaded.");
    }
    
    // Windy API Init (Safe Mode)
    try {
      initWindy();
    } catch (e) {
      console.warn("Windy Init Error:", e);
    }
  });
}

function initWindy() {
  const options = {
    key: "aMpcNHv9Ki6q8dtdnjVL5Q1EwXZYQuDQ",
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
  }
}

function renderMonth() {
  if (typeof MONTHS !== 'undefined') {
    document.getElementById('month-name').textContent = MONTHS[currentMonth];
  }
  document.getElementById('year-display').textContent = currentYear;
  
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