// app.js - Maritime Hub v3.0.0
// 주의: MONTHS, events 변수는 data.js에 이미 있습니다. 절대 재선언하지 마세요.

let map, markers = [];
let currentYear = 2026;
let currentMonth = 0; // 0 = JAN
let windyAPIInstance = null;
let currentStyle = 'dark';

function init() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYmx1ZXJhaGEiLCJhIjoiY21scW5tOGRhMDJwMzNkcHVzeXVhcGw3dyJ9.3eBK-bIV99YgmxOycysRyA';

  // 검은 화면 해결을 위해 가장 안전한 'Dark' 스타일 사용
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [127, 36.5],
    zoom: 4,
    attributionControl: false
  });

  // 컨트롤 좌측 상단 배치
  map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
  }), 'top-left');
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

  map.on('load', () => {
    // data.js 로드 확인 (MONTHS 변수가 있는지 체크)
    if (typeof MONTHS !== 'undefined' && typeof events !== 'undefined') {
      renderMonth();
      renderMarkers();
    } else {
      console.error("data.js not loaded properly. Check index.html");
    }
    
    // Windy API Init (실패해도 앱이 멈추지 않도록 예외처리)
    try {
      initWindy();
    } catch (e) {
      console.warn("Windy Init Failed:", e);
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
        if(windyAPIInstance.map) {
             windyAPIInstance.map.setView([center.lat, center.lng], Math.round(map.getZoom()));
        }
      });
    });
  } else {
    console.warn("Windy Library not loaded");
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
        document.querySelectorAll('.day-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      };
    }
    strip.appendChild(item);
  }
}

function renderMarkers() {
  if (typeof markers !== 'undefined') markers.forEach(m => m.remove());
  markers = [];
  
  if (typeof events === 'undefined') return;

  Object.entries(events).forEach(([date, list]) => {
    list.forEach(e => {
      if (!e.coords) return;
      
      const markerEl = document.createElement('div');
      markerEl.style.width = '10px';
      markerEl.style.height = '10px';
      markerEl.style.borderRadius = '50%';
      markerEl.style.backgroundColor = `var(--${e.type})`;
      markerEl.style.border = '2px solid rgba(255,255,255,0.7)';
      markerEl.style.cursor = 'pointer';
      markerEl.style.boxShadow = '0 0 6px rgba(0,0,0,0.5)';

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
    <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:6px; margin-bottom:10px; cursor:pointer; border:1px solid rgba(255,255,255,0.05); transition:0.2s;" onclick="showDetail(${JSON.stringify(e).replace(/"/g, '&quot;')})" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
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
  if (!windyAPIInstance) { console.warn("Windy Not Ready"); return; }
  const overlayMap = { wind: "wind", wave: "waves", temp: "temp", current: "currents" };
  windyAPIInstance.store.set("overlay", overlayMap[layer]);
  
  document.querySelectorAll('.weather-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`layer-${layer}`).classList.add('active');
}

function toggleStyle() {
  if (currentStyle === 'dark') {
    map.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
    currentStyle = 'satellite';
  } else {
    map.setStyle('mapbox://styles/mapbox/dark-v11');
    currentStyle = 'dark';
  }
}

function changeMonth(dir) { 
  currentMonth += dir; 
  if(currentMonth > 11) { currentMonth = 0; currentYear++; }
  else if(currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderMonth(); 
}

init();