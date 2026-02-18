<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maritime Hub Final Stable</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>

<link href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js"></script>

<script src="https://api.windy.com/assets/map-forecast/libBoot.js"></script>

<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root { 
    --accident: #1a6fb5; 
    --news: #ea7317; 
    --event: #2d9f6b; 
    --brand-blue: #7ab8f5; 
    --panel-bg: rgba(22, 28, 36, 0.95);
  }
  body { font-family: 'Inter', sans-serif; overflow: hidden; background: #000; color: #fff; }

  /* TOP BAR */
  .top-bar {
    position: fixed; top: 0; left: 0; right: 0; height: 40px;
    background: var(--panel-bg); backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex; align-items: center; padding: 0 16px; z-index: 1000;
  }
  .logo-area { display: flex; align-items: center; gap: 8px; }
  .compass-icon { width: 18px; height: 18px; stroke: var(--brand-blue); fill: none; }
  .logo-text { font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 500; letter-spacing: 0.5px; }
  .logo-sub { font-size: 9px; color: rgba(255,255,255,0.3); margin-left: 4px; font-weight: 300; }
  
  .legend { margin-left: auto; display: flex; gap: 15px; }
  .legend-item { display: flex; align-items: center; gap: 5px; font-size: 10px; color: rgba(255,255,255,0.6); }
  .legend-dot { width: 6px; height: 6px; border-radius: 50%; }

  /* CALENDAR BAR */
  .calendar-bar {
    position: fixed; top: 40px; left: 0; right: 0; height: 60px;
    background: rgba(22,28,36,0.92); backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    z-index: 999; padding: 0 16px; display: flex; align-items: center; gap: 15px;
  }
  .date-controls { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); }
  .year-display { font-family: 'IBM Plex Mono'; font-size: 12px; color: var(--brand-blue); font-weight: 600; padding-right: 8px; border-right: 1px solid rgba(255,255,255,0.2); }
  .month-btn { background: none; border: none; color: #fff; cursor: pointer; padding: 0 4px; font-size: 10px; }
  .month-name { font-family: 'IBM Plex Mono'; font-size: 11px; min-width: 40px; text-align: center; }

  .days-strip { flex: 1; display: grid; grid-template-columns: repeat(31, 1fr); gap: 2px; height: 42px; }
  .day-item { display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 3px; cursor: pointer; font-size: 10px; transition: 0.2s; }
  .day-item:hover { background: rgba(255,255,255,0.08); }
  .day-item.active { border-color: var(--brand-blue); background: rgba(122,184,245,0.15); }

  /* MAP */
  #map { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: 1; }

  /* Mapbox Default Controls Custom Styling (Dark Theme) */
  .mapboxgl-ctrl-group {
    background-color: #1e1e1e !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
  }
  .mapboxgl-ctrl-icon {
    filter: invert(1) brightness(2); /* 아이콘 흰색으로 변경 */
  }
  .mapboxgl-ctrl button:not(:disabled):hover {
    background-color: #333 !important;
  }

  /* WEATHER CONTROLS (LEFT SIDE) */
  .weather-controls { 
    position: fixed; 
    top: 220px; /* Mapbox 컨트롤 아래 */
    left: 10px; 
    z-index: 998; 
    display: flex; flex-direction: column; gap: 8px; 
  }
  .control-btn { 
    width: 34px; height: 34px; 
    background: #1e1e1e; border: 1px solid rgba(255,255,255,0.2); 
    border-radius: 4px; cursor: pointer; 
    display: flex; align-items: center; justify-content: center; 
    color: rgba(255,255,255,0.7); transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  .control-btn:hover { background: #333; color: #fff; border-color: rgba(255,255,255,0.5); }
  .control-btn.active { background: rgba(122, 184, 245, 0.15); border-color: var(--brand-blue); color: var(--brand-blue); }
  .control-btn svg { width: 18px; height: 18px; stroke-width: 2px; }

  /* SIDE PANEL */
  .side-panel { position: fixed; top: 40px; right: 0; width: 350px; height: calc(100vh - 40px); background: rgba(15,20,26,0.98); border-left: 1px solid var(--brand-blue); z-index: 997; transform: translateX(100%); transition: 0.3s ease; display: flex; flex-direction: column; }
  .side-panel.open { transform: translateX(0); }
  .panel-header { padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; }
  .panel-content { flex: 1; overflow-y: auto; padding: 16px; }

  /* MODAL */
  .detail-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 9999; display: none; align-items: center; justify-content: center; backdrop-filter: blur(4px); }
  .detail-modal.open { display: flex; }
  .modal-content { background: #161c24; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; width: 90%; max-width: 600px; padding: 40px; position: relative; }
  .modal-title { font-size: 20px; font-weight: 600; margin-bottom: 15px; color: #fff; }
  .modal-text { font-size: 13.5px; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 25px; font-weight: 300; }
  .news-link { display: inline-block; color: var(--brand-blue); font-size: 12px; text-decoration: none; border-bottom: 1px solid var(--brand-blue); padding-bottom: 2px; transition: 0.2s; }
  
  .version-tag { 
    position: fixed; bottom: 10px; right: 10px; 
    font-size: 10px; color: #fff; z-index: 1001; 
    font-family: 'IBM Plex Mono'; text-shadow: 0 1px 3px rgba(0,0,0,0.8); 
  }
</style>
</head>
<body onclick="closePanel()">

<div class="top-bar">
  <div class="logo-area">
    <svg class="compass-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
    <div class="logo-text">MARITIME HUB <span class="logo-sub">| powered by autonomousship.org</span></div>
  </div>
  <div class="legend">
    <div class="legend-item"><div class="legend-dot" style="background:var(--accident)"></div>Accident</div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--news)"></div>News</div>
    <div class="legend-item"><div class="legend-dot" style="background:var(--event)"></div>Event</div>
  </div>
</div>

<div class="calendar-bar" onclick="event.stopPropagation()">
  <div class="date-controls">
    <span class="year-display" id="year-display">2026</span>
    <button class="month-btn" onclick="changeMonth(-1)">◀</button>
    <div class="month-name" id="month-name">JAN</div>
    <button class="month-btn" onclick="changeMonth(1)">▶</button>
  </div>
  <div class="days-strip" id="days-strip"></div>
</div>

<div id="map"></div>

<div class="weather-controls">
  <button class="control-btn" onclick="toggleStyle()" title="Map Style">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
  </button>
  <div style="height:1px; background:rgba(255,255,255,0.1); margin:2px 0;"></div>
  
  <button class="control-btn weather-btn" id="layer-wind" onclick="toggleWeatherLayer('wind')" title="Wind">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9.5 9c0-1.7-1.3-3-3-3S3.5 7.3 3.5 9s1.3 3 3 3H19M6.5 15c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3H2"/></svg>
  </button>
  <button class="control-btn weather-btn" id="layer-wave" onclick="toggleWeatherLayer('wave')" title="Waves">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1M2 16c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 1.9.5 2.5 1"/></svg>
  </button>
  <button class="control-btn weather-btn" id="layer-temp" onclick="toggleWeatherLayer('temp')" title="Temperature">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
  </button>
  <button class="control-btn weather-btn" id="layer-current" onclick="toggleWeatherLayer('current')" title="Currents">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 7h20M2 12h20M2 17h20M17 2l5 5-5 5M17 12l5 5-5 5"/></svg>
  </button>
</div>

<div class="side-panel" id="side-panel" onclick="event.stopPropagation()">
  <div class="panel-header">
    <div id="panel-title" style="font-size:11px; color:var(--brand-blue); font-family:'IBM Plex Mono';">DATE</div>
    <button onclick="closePanel()" style="background:none; border:none; color:rgba(255,255,255,0.3); cursor:pointer;">✕</button>
  </div>
  <div class="panel-content" id="panel-content"></div>
</div>

<div class="detail-modal" id="detail-modal" onclick="closeDetail()">
  <div class="modal-content" onclick="event.stopPropagation()">
    <div id="modal-type" style="font-size:9px; font-weight:600; text-transform:uppercase; margin-bottom:10px; letter-spacing:1px;">TYPE</div>
    <h2 class="modal-title" id="modal-title">TITLE</h2>
    <div class="modal-text" id="modal-text"></div>
    <a id="modal-link" href="#" target="_blank" class="news-link">READ FULL ARTICLE →</a>
  </div>
</div>

<div class="version-tag">v2.5.0 (Stable & Clean)</div>

<script src="data.js"></script>
<script src="app.js"></script>
</body>
</html>