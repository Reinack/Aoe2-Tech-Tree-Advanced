// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

let currentCiv = 'generic';
let viewMode = 'classic';

window.addEventListener('load', () => {
  updateUniqueForCiv();
  populateCivSelect();
  buildCivInfo();
  render();
  populateExtraPanel();
});

// Bind language selector
document.getElementById('lang-select').addEventListener('change', e => {
  currentLang = e.target.value;
  render();
  populateCivSelect();
  buildCivInfo();
  populateExtraPanel();
});


// ═══════════════════════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════════════════════

const svgEl = document.getElementById('svg-tree');
const svgD3 = d3.select(svgEl);

// ── Pattern definition for parchment texture ────────────────
const defs = svgD3.append('defs');
defs.append('pattern')
  .attr('id', 'paper-pattern')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', 256)
  .attr('height', 256)
  .append('image')
  .attr('href', 'img/Backgrounds/bg_aoe2_hd_paper.jpg')
  .attr('width', 256)
  .attr('height', 256);

const root = svgD3.append('g').attr('id', 'root');

let lockedTY = 10;

const zoom = d3.zoom()
  .scaleExtent([0.15, 4])
  .filter(event => event.type !== 'wheel' || event.ctrlKey)
  .on('zoom', e => {
    const t = e.transform;
    root.attr('transform', `translate(${t.x},${lockedTY}) scale(${t.k})`);
  });
svgD3.call(zoom);

// Rueda del ratón → desplazamiento horizontal (Ctrl+rueda → zoom)
svgD3.on('wheel', event => {
  if (event.ctrlKey) return;
  event.preventDefault();
  const delta = event.deltaX !== 0 ? event.deltaX : event.deltaY;
  const t = d3.zoomTransform(svgEl);
  svgD3.call(zoom.transform,
    d3.zoomIdentity.translate(t.x - delta * 0.8, lockedTY).scale(t.k));
}, { passive: false });

function getCiv() { return CIVS[currentCiv] || CIVS.generic; }
function isMissing(id) { return !getCiv().available.includes(id); }

// ── Helper: locale data for a civ ────────────────────────────────────────────
function civLocale(civId) {
  return LOCALE[currentLang]?.civs?.[civId ?? currentCiv] || {};
}

let displayNodes = NODES.map(n => ({ ...n }));

function updateUniqueForCiv() {
  const civ = getCiv();
  const lc = civLocale(currentCiv);
  const uu = displayNodes.find(n => n.id === 'uniqueunit');
  const eu = displayNodes.find(n => n.id === 'eliteunique');
  const ut1 = displayNodes.find(n => n.id === 'uniquetech1');
  const ut2 = displayNodes.find(n => n.id === 'uniquetech2');

  if (civ.uniqueUnits && civ.uniqueUnits.length > 0) {
    const mainUU = civ.uniqueUnits[0];
    const lcUU = lc.uniqueUnits?.[0] || {};
    const civName = lc.name || currentCiv;
    if (uu) {
      uu.name = lcUU.name || 'Unique Unit';
      uu.cost = mainUU.cost || { food: 60, gold: 30 };
      uu.effect = currentLang === 'es'
        ? `Unidad única de ${civName}.${lcUU.subtitle ? ' (' + lcUU.subtitle + ')' : ''}`
        : `Unique unit of ${civName}.${lcUU.subtitle ? ' (' + lcUU.subtitle + ')' : ''}`;
      uu.imgPath = mainUU.imgPic !== undefined ? `img/Unit/${mainUU.imgPic}.png` : null;
    }
    if (eu) {
      eu.name = lcUU.upgradeName || `${lcUU.name || 'Unique Unit'} Elite`;
      eu.cost = mainUU.elite_cost || { food: 300, gold: 500 };
      eu.effect = currentLang === 'es'
        ? `Versión elite de ${lcUU.name || 'Unidad Única'}.`
        : `Elite version of ${lcUU.name || 'Unique Unit'}.`;
      eu.imgPath = mainUU.eliteImgPic !== undefined ? `img/Unit/${mainUU.eliteImgPic}.png`
        : mainUU.imgPic !== undefined ? `img/Unit/${mainUU.imgPic}.png` : null;
    }
  }

  if (civ.uniqueTechs && civ.uniqueTechs[0]) {
    const lcT1 = lc.uniqueTechs?.[0] || {};
    if (ut1) { ut1.name = lcT1.name || ''; ut1.cost = civ.uniqueTechs[0].cost; ut1.effect = lcT1.effect || ''; }
  }
  if (civ.uniqueTechs && civ.uniqueTechs[1]) {
    const lcT2 = lc.uniqueTechs?.[1] || {};
    if (ut2) { ut2.name = lcT2.name || ''; ut2.cost = civ.uniqueTechs[1].cost; ut2.effect = lcT2.effect || ''; }
  }
}

function render() {
  root.selectAll('*').remove();
  const civ = getCiv();

  // Clone and apply overrides
  let activeBuildings = BUILDINGS.map(b => ({ ...b }));
  let activeNodes = NODES.map(n => ({ ...n }));

  if (civ.overrides) {
    Object.entries(civ.overrides).forEach(([id, ov]) => {
      // Check if it's a building
      const bld = activeBuildings.find(b => b.id === id);
      if (bld) {
        if (ov.age !== undefined) bld.age = ov.age;
      }
      // Check if it's a node
      const node = activeNodes.find(n => n.id === id);
      if (node) {
        if (ov.age !== undefined) node.age = ov.age;
        if (ov.row !== undefined) node.row = ov.row;
      }
    });
  }

  displayNodes = activeNodes
    .filter(n => {
      // Hide special units if they are missing for this civ (unless generic view)
      if (n.special && isMissing(n.id) && currentCiv !== 'generic') return false;
      return true;
    });

  updateUniqueForCiv();

  const { bldX, bldPos, pos, ageYStart, ageHArray, totalH, totalW } = computeLayout(displayNodes, activeBuildings);

  // ── Actualizar límites de Zoom (Bloquear límites horizontales) ─────────
  const svgWidth = svgEl.clientWidth || 800;
  const svgHeight = svgEl.clientHeight || 600;
  zoom.extent([[0, 0], [svgWidth, svgHeight]]);
  // Constreñir el desplazamiento al contenido exacto
  zoom.translateExtent([[0, 0], [totalW, totalH]]);

  // ── Fondo de papel único para todo el árbol ─────────────────
  root.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', totalW)
    .attr('height', totalH)
    .attr('fill', 'url(#paper-pattern)');

  // ── Sombras para las edades ────────────────────────────────
  for (let i = 0; i < 4; i++) {
    const y = ageYStart[i];
    const ah = ageHArray[i];

    root.append('rect')
      .attr('class', `age-stripe-${i}`)
      .attr('x', 0)
      .attr('y', y)
      .attr('width', totalW)
      .attr('height', ah);
  }

  // ── Age headers (Left sidebar inside svg) ────────────────
  const ageImageFiles = ['base_dark_age.png', 'base_feudal_age.png', 'base_castle_age.png', 'base_imperial_age.png'];
  AGES.forEach((_, i) => {
    const g = root.append('g')
      .attr('class', 'age-label-group')
      .attr('transform', `translate(20, ${ageYStart[i] + ageHArray[i] / 2 - 25})`);

    g.append('image')
      .attr('href', `img/Ages/${ageImageFiles[i]}`)
      .attr('width', 50)
      .attr('height', 50)
      .attr('x', 0)
      .attr('y', 0);

    g.append('text')
      .attr('class', 'age-label')
      .attr('x', 60)
      .attr('y', 25)
      .text(t(i, 'ages'));
  });

  // ── Edges ────────────────────────────────────────────────
  // 1. Building to Building Prereqs
  BUILDINGS.forEach(b => {
    if (isMissing(b.id)) return;
    const prereqs = civ.noBuildingPrereqs ? [] : (b.prereqs || []);
    prereqs.forEach(pid => {
      if (isMissing(pid)) return;
      const fp = bldPos[pid];
      const tp = bldPos[b.id];
      if (!fp || !tp) return;

      const x1 = fp.x + NW / 2, y1 = fp.y + NH;
      const x2 = tp.x + NW / 2, y2 = tp.y;
      const my = (y1 + y2) / 2;

      root.append('path')
        .attr('class', 'edge-building')
        .attr('d', `M${x1},${y1} L${x1},${my} L${x2},${my} L${x2},${y2}`)
        .attr('stroke', '#8b5a2b')
        .attr('stroke-width', 3)
        .attr('fill', 'none')
        .attr('opacity', 0.6);
    });
  });

  // 2. Node to Prereq Edges
  displayNodes.forEach(n => {
    n.prereqs.forEach(pid => {
      const fp = pos[pid] || bldPos[pid]; // Could be a building
      const tp = pos[n.id];
      if (!fp || !tp) return;
      const miss = isMissing(n.id) || isMissing(pid);

      const x1 = fp.x + NW / 2, y1 = fp.y + (pos[pid] ? NH : NH);
      const x2 = tp.x + NW / 2, y2 = tp.y;
      const my = (y1 + y2) / 2;

      root.append('path')
        .attr('class', 'edge')
        .attr('d', `M${x1},${y1} L${x1},${my} L${x2},${my} L${x2},${y2}`)
        .attr('stroke', miss ? 'rgba(0,0,0,0.1)' : '#fff')
        .attr('opacity', miss ? 0.3 : 1);
    });

    // Connect to building if no prereqs
    if (n.prereqs.length === 0 && bldPos[n.building]) {
      const fp = bldPos[n.building];
      const tp = pos[n.id];
      const miss = isMissing(n.id);

      const x1 = fp.x + NW / 2, y1 = fp.y + NH;
      const x2 = tp.x + NW / 2, y2 = tp.y;
      const my = (y1 + y2) / 2;

      root.append('path')
        .attr('class', 'edge')
        .attr('d', `M${x1},${y1} L${x1},${my} L${x2},${my} L${x2},${y2}`)
        .attr('stroke', miss ? 'rgba(0,0,0,0.1)' : '#fff')
        .attr('opacity', miss ? 0.3 : 1);
    }
  });

  // ── Helper to draw node ──────────────────────────────────
  function drawNode(g, id, label, iconText, typeClass, miss, evData) {
    const isStatNode = ['unit', 'upgrade', 'unique'].includes(evData.type);
    g.attr('class', `node ${typeClass} ${miss ? 'unavailable' : ''}`)
      .on('mouseover', ev => showTip(ev, evData))
      .on('mousemove', ev => moveTip(ev))
      .on('mouseout', hideTip)
      .on('click', ev => {
        ev.stopPropagation();
        if (isStatNode) showStatsPanel(ev, evData);
      })
      .style('cursor', isStatNode ? 'pointer' : 'default');

    // Main icon background
    g.append('rect')
      .attr('class', 'node-icon-bg')
      .attr('width', NW).attr('height', NH - 20)
      .attr('x', 0).attr('y', 0);

    // Text background bar
    g.append('rect')
      .attr('class', 'node-text-bg')
      .attr('width', NW).attr('height', 20)
      .attr('x', 0).attr('y', NH - 20);

    // Node outline
    g.append('rect')
      .attr('width', NW).attr('height', NH)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(0,0,0,0.5)');

    const imgSrc = evData.imgPath || IMG_MAP[id];
    if (imgSrc) {
      g.append('image')
        .attr('href', imgSrc)
        .attr('x', 0).attr('y', 0)
        .attr('width', NW).attr('height', NH - 20)
        .attr('preserveAspectRatio', 'xMidYMid meet');
    } else {
      g.append('text')
        .attr('class', 'node-icon')
        .attr('x', NW / 2).attr('y', (NH - 20) / 2)
        .text(iconText);
    }

    const txt = g.append('text')
      .attr('x', NW / 2).attr('y', NH - 10)
      .text(label);

    // Adjust text if too long
    if (label.length > 10) {
      txt.attr('font-size', '8px');
    }
  }

  // ── Buildings as Root Nodes ──────────────────────────────
  activeBuildings.forEach(b => {
    const p = bldPos[b.id];
    if (!p) return;
    const g = root.append('g').attr('transform', `translate(${p.x},${p.y})`);

    const bName = t(b.id, 'buildings');
    const miss = isMissing(b.id);
    // Buildings are usually always available, we just pass an empty node for tip
    const bNode = { name: bName, age: 0, type: 'building', cost: null, effect: currentLang === 'es' ? 'Produce unidades o tecnologías.' : 'Produces units or technologies.', prereqs: [] };
    drawNode(g, b.id, bName, b.icon, 'n-building', miss, bNode);
  });

  // ── Nodes ────────────────────────────────────────────────
  displayNodes.forEach(n => {
    const p = pos[n.id];
    if (!p) return;
    const miss = isMissing(n.id);
    const label = tData(n, 'name', n.type === 'unit' ? 'units' : 'techs');
    const iconStr = n.type === 'unit' ? '⚔️' : n.type === 'tech' ? '🧪' : n.type === 'upgrade' ? '⭐' : '🌟';

    // Clases de variante: castle slots usan type:'unique'; especiales usan n.variant
    const variant = n.type === 'unique' ? '' :
      n.variant === 'unique' ? ' n-civ-unique' :
        n.variant === 'regional' ? ' n-regional' : '';

    const g = root.append('g').attr('transform', `translate(${p.x},${p.y})`);
    drawNode(g, n.id, label, iconStr, `n-${n.type}${variant}`, miss, n);
  });
}

// ═══════════════════════════════════════════════════════════
// TOOLTIP
// ═══════════════════════════════════════════════════════════

const tipEl = document.getElementById('tooltip');
const ttName = document.getElementById('tt-name');
const ttAge = document.getElementById('tt-age');
const ttCost = document.getElementById('tt-cost');
const ttEffect = document.getElementById('tt-effect');
const ttPrereq = document.getElementById('tt-prereq');
const ttMissing = document.getElementById('tt-missing');

function costStr(c) {
  if (!c) return '—';
  const p = [];
  if (c.food) p.push(`🌾 ${c.food}`);
  if (c.wood) p.push(`🪵 ${c.wood}`);
  if (c.gold) p.push(`💰 ${c.gold}`);
  if (c.stone) p.push(`🪨 ${c.stone}`);
  return p.join('  ') || 'Gratis';
}

function showTip(ev, n) {
  ttName.textContent = tData(n, 'name', n.type === 'unit' ? 'units' : 'techs');
  ttAge.textContent = n.type === 'building' ? t('building') : `${t(n.age, 'ages')} · ${t(n.type)}`;

  let costHtml = '';
  if (n.build_cost)    costHtml += `<div><strong>${t('build_cost')}:</strong> ${costStr(n.build_cost)}</div>`;
  if (n.research_cost) costHtml += `<div><strong>${t('research_cost')}:</strong> ${costStr(n.research_cost)}</div>`;
  if (n.train_cost)    costHtml += `<div><strong>${t('train_cost')}:</strong> ${costStr(n.train_cost)}</div>`;

  // Fallback para nodos que aún usen la clave genérica 'cost'
  if (!costHtml && n.cost) {
    const label = n.type === 'building' ? t('build_cost') : (n.type === 'unit' ? t('train_cost') : t('research_cost'));
    costHtml = `<div><strong>${label}:</strong> ${costStr(n.cost)}</div>`;
  }

  ttCost.innerHTML = costHtml || '—';
  ttEffect.textContent = tData(n, 'effect');
  const prereqNames = (n.prereqs || []).map(pid => {
    const p = displayNodes.find(x => x.id === pid) || BUILDINGS.find(b => b.id === pid);
    if (!p) return pid;
    if (p.id in LOCALE[currentLang].buildings) return t(p.id, 'buildings');
    return tData(p, 'name', p.type === 'unit' ? 'units' : 'techs');
  });
  ttPrereq.textContent = prereqNames.length ? `${t('prereq')}: ${prereqNames.join(', ')}` : '';
  ttMissing.textContent = isMissing(n.id) ? `⚠ ${t('missing')}` : '';

  // ── Stats ──────────────────
  let stats = UNIT_STATS[n.id] || REGIONAL_UNIT_STATS[n.id] || UNIQUE_UNIT_STATS[n.id];

  // Lookup for unique units (stats keyed by Spanish name)
  if (n.id === 'uniqueunit' || n.id === 'eliteunique') {
    const civ = getCiv();
    if (civ.uniqueUnits && civ.uniqueUnits.length > 0) {
      const lcUU = LOCALE['es']?.civs?.[currentCiv]?.uniqueUnits?.[0] || {};
      const lookupKey = n.id === 'uniqueunit'
        ? (lcUU.name || '')
        : (lcUU.upgradeName || (lcUU.name ? lcUU.name + ' Elite' : ''));
      stats = UNIQUE_UNIT_STATS[lookupKey];
    }
  }

  const statsContainer = document.getElementById('tt-stats-container') || createStatsContainer();

  if (stats && (n.type === 'unit' || n.type === 'unique')) {
    statsContainer.style.display = 'block';
    statsContainer.innerHTML = `
      <div class="tt-stats-grid">
        <div class="tt-stat-item"><span class="stat-icon">❤️</span> <span class="stat-val">${stats.hp}</span></div>
        <div class="tt-stat-item"><span class="stat-icon">⚔️</span> <span class="stat-val">${stats.attack}</span></div>
        <div class="tt-stat-item"><span class="stat-icon">🛡️</span> <span class="stat-val">${stats.armor[0]}/${stats.armor[1]}</span></div>
        ${stats.range ? `<div class="tt-stat-item"><span class="stat-icon">🏹</span> <span class="stat-val">${stats.range}</span></div>` : ''}
        <div class="tt-stat-item"><span class="stat-icon">🏃</span> <span class="stat-val">${stats.speed}</span></div>
        ${stats.rof ? `<div class="tt-stat-item"><span class="stat-icon">⏱️</span> <span class="stat-val">${stats.rof}s</span></div>` : ''}
      </div>
    `;
  } else {
    statsContainer.style.display = 'none';
  }

  tipEl.style.display = 'block';
  moveTip(ev);
}

function createStatsContainer() {
  const div = document.createElement('div');
  div.id = 'tt-stats-container';
  div.className = 'tt-stats-container';
  tipEl.appendChild(div);
  return div;
}

function hideTip() { tipEl.style.display = 'none'; }
function moveTip(ev) {
  const x = ev.clientX + 16, y = ev.clientY - 10;
  tipEl.style.left = `${Math.min(x, window.innerWidth - 340)}px`;
  tipEl.style.top = `${Math.min(y, window.innerHeight - 220)}px`;
}

// ═══════════════════════════════════════════════════════════
// STATS PANEL (click)
// ═══════════════════════════════════════════════════════════

const statsPanel = document.getElementById('stats-panel');

// Cierra al hacer click fuera del panel
document.addEventListener('click', e => {
  if (statsPanel.style.display !== 'none' && !statsPanel.contains(e.target)) {
    closeStatsPanel();
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeStatsPanel(); });

function closeStatsPanel() { statsPanel.style.display = 'none'; }

function getStatsForNode(n) {
  // Castle slots → look up in UNIQUE_UNIT_STATS by Spanish name (stats are keyed in Spanish)
  if (n.id === 'uniqueunit' || n.id === 'eliteunique') {
    const civ = getCiv();
    if (civ.uniqueUnits && civ.uniqueUnits.length > 0) {
      const lcUU = LOCALE['es']?.civs?.[currentCiv]?.uniqueUnits?.[0] || {};
      const key = n.id === 'uniqueunit'
        ? (lcUU.name || '')
        : (lcUU.upgradeName || (lcUU.name ? lcUU.name + ' Elite' : ''));
      return UNIQUE_UNIT_STATS[key] || null;
    }
  }
  // Direct lookup by node ID — generic → regional → unique
  return UNIT_STATS[n.id] || REGIONAL_UNIT_STATS[n.id] || UNIQUE_UNIT_STATS[n.id] || n.stats || null;
}

function statRow(icon, label, val, sub) {
  return `<div class="sp-stat">
    <span class="sp-stat-icon">${icon}</span>
    <span class="sp-stat-label">${label}</span>
    <span class="sp-stat-val">${val}</span>
    ${sub !== undefined ? `<span class="sp-stat-sub">${sub}</span>` : ''}
  </div>`;
}

function showStatsPanel(ev, n) {
  hideTip();

  // Nombre y subtítulo
  // 'unique' nodes (uniqueunit/eliteunique/uniquetech1/uniquetech2) carry civ-specific
  // names set by updateUniqueForCiv — pass no category so tData returns the value directly.
  const nameCategory = n.type === 'tech'
    ? 'techs'
    : (n.type === 'unit' || n.type === 'upgrade')
      ? 'units'
      : null;  // 'unique' → use direct value
  const name = tData(n, 'name', nameCategory);
  document.getElementById('sp-name').textContent = name;
  document.getElementById('sp-sub').textContent =
    n.type === 'building' ? t('building') : `${t(n.age, 'ages')} · ${t(n.type)}`;

  // Icono
  const spIcon = document.getElementById('sp-icon');
  const src = n.imgPath || IMG_MAP[n.id];
  if (src) { spIcon.src = src; spIcon.style.display = 'block'; }
  else { spIcon.style.display = 'none'; }

  // Stats
  const stats = getStatsForNode(n);
  const gridEl = document.getElementById('sp-stats-grid');
  const noStats = document.getElementById('sp-no-stats');

  if (stats) {
    noStats.style.display = 'none';
    gridEl.style.display = 'grid';
    gridEl.innerHTML =
      statRow('❤️', t('hp'), stats.hp) +
      statRow('⚔️', t('attack'), stats.attack) +
      statRow('🛡️', t('armor_m'), stats.armor[0]) +
      statRow('🔰', t('armor_p'), stats.armor[1]) +
      (stats.range ? statRow('🏹', t('range'), stats.range) : statRow('⚔️', t('melee_range'), '—')) +
      statRow('🏃', t('speed'), stats.speed) +
      statRow('👁️', t('los'), stats.los);
  } else {
    gridEl.style.display = 'none';
    noStats.style.display = 'block';
    noStats.textContent = currentLang === 'es'
      ? 'Stats no disponibles para esta unidad.'
      : 'Stats not available for this unit.';
  }

  // Coste + tiempo de producción
  let costHtml = '';
  if (n.build_cost)    costHtml += `<strong>${t('build_cost')}:</strong> ${costStr(n.build_cost)} `;
  if (n.research_cost) costHtml += `<strong>${t('research_cost')}:</strong> ${costStr(n.research_cost)} `;
  if (n.train_cost)    costHtml += `<strong>${t('train_cost')}:</strong> ${costStr(n.train_cost)} `;

  // Fallback
  if (!costHtml && n.cost) {
    const label = n.type === 'building' ? t('build_cost') : (n.type === 'unit' ? t('train_cost') : t('research_cost'));
    costHtml = `<strong>${label}:</strong> ${costStr(n.cost)} `;
  }

  const trainStr = stats && stats.train ? `  ⏱️ ${stats.train}s` : '';
  document.getElementById('sp-cost').innerHTML =
    (costHtml + trainStr)
      .replace(/🌾/g, '<span>🌾</span>')
      .replace(/🪵/g, '<span>🪵</span>')
      .replace(/💰/g, '<span>💰</span>')
      .replace(/🪨/g, '<span>🪨</span>')
      .replace(/⏱️/g, '<span>⏱️</span>');

  // Efecto
  const effEl = document.getElementById('sp-effect');
  const eff = tData(n, 'effect');
  if (eff) { effEl.textContent = eff; effEl.style.display = 'block'; }
  else { effEl.style.display = 'none'; }

  // Posición: aparece junto al cursor sin salirse de pantalla
  const PW = 274, PH = 260;
  let x = ev.clientX + 18;
  let y = ev.clientY - 20;
  if (x + PW > window.innerWidth) x = ev.clientX - PW - 10;
  if (y + PH > window.innerHeight) y = window.innerHeight - PH - 10;
  if (y < 0) y = 8;
  statsPanel.style.left = `${x}px`;
  statsPanel.style.top = `${y}px`;
  statsPanel.style.display = 'block';
}

// ═══════════════════════════════════════════════════════════
// CIV SELECTOR
// ═══════════════════════════════════════════════════════════

const civSelect = document.getElementById('civ-select');
const civInfo = document.getElementById('civ-info');
const langSelect = document.getElementById('lang-select');

// ── Populate civ <select> from locale ────────────────────────────────────────
function populateCivSelect() {
  const saved = civSelect.value;
  civSelect.innerHTML = '';
  Object.keys(CIVS).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = LOCALE[currentLang]?.civs?.[key]?.name || key;
    civSelect.appendChild(opt);
  });
  civSelect.value = saved || 'generic';
}

// ── Build civ info HTML from locale ──────────────────────────────────────────
function buildCivInfo(civId) {
  const c = CIVS[civId] || CIVS.generic;
  const lc = LOCALE[currentLang]?.civs?.[civId] || {};

  let html = '';
  if (lc.name) html += `<div class="civ-name">${lc.name}</div>`;
  if (lc.type) html += `<div class="civ-type">${lc.type}</div>`;

  // Bonuses from locale
  if (lc.bonuses && lc.bonuses.length) {
    html += `<ul class="bonus-list">`;
    lc.bonuses.forEach(b => { if (b) html += `<li class="bonus-item">${b}</li>`; });
    html += `</ul>`;
  }

  // Unique Units from locale
  if (lc.uniqueUnits && lc.uniqueUnits.length > 0) {
    html += `<div class="civ-section-title">${currentLang === 'es' ? 'Unidad única:' : 'Unique Unit:'}</div>`;
    lc.uniqueUnits.forEach(u => {
      html += `<div class="unique-item">${u.name}${u.subtitle ? ` <span class="unique-subtitle">(${u.subtitle})</span>` : ''}</div>`;
    });
  }

  // Unique Techs from locale
  if (lc.uniqueTechs && lc.uniqueTechs.length > 0) {
    html += `<div class="civ-section-title">${currentLang === 'es' ? 'Tecnologías únicas:' : 'Unique Technologies:'}</div>`;
    lc.uniqueTechs.forEach(tech => {
      html += `<div class="unique-item"><b>${tech.name}</b>: ${tech.effect}</div>`;
    });
  }

  // Team Bonus from locale
  if (lc.teamBonus) {
    html += `<div class="civ-section-title">${currentLang === 'es' ? 'Bono de equipo:' : 'Team Bonus:'}</div>`;
    html += `<div class="team-bonus-box">${lc.teamBonus}</div>`;
  }

  return html;
}

langSelect.value = currentLang;
updateUIStrings();
populateCivSelect();

langSelect.addEventListener('change', () => {
  setLanguage(langSelect.value);
  populateCivSelect();
  civInfo.innerHTML = buildCivInfo(currentCiv);
});

civSelect.addEventListener('change', () => {
  currentCiv = civSelect.value;

  // Update civ shield
  const shield = document.getElementById('civ-shield');
  if (shield) {
    if (currentCiv !== 'generic') {
      shield.src = `img/Civs/${currentCiv}.png`;
      shield.style.display = 'block';
    } else {
      shield.src = '';
      shield.style.display = 'none';
    }
  }

  civInfo.innerHTML = buildCivInfo(currentCiv);
  render();
  if (viewMode === 'extra') populateExtraPanel();
});

// ═══════════════════════════════════════════════════════════
// ZOOM CONTROLS
// ═══════════════════════════════════════════════════════════

function fitView() {
  const activeBuildings = BUILDINGS.map(b => ({ ...b }));
  const nodes = displayNodes.length ? displayNodes : NODES.map(n => ({ ...n }));
  const { totalH, totalW } = computeLayout(nodes, activeBuildings);
  const W = svgEl.clientWidth, H = svgEl.clientHeight;
  // Escalar para que todas las edades quepan verticalmente
  const scale = (H - 20) / totalH;
  lockedTY = 10;
  // Centrar horizontalmente
  const tx = (W - totalW * scale) / 2;
  svgD3.call(zoom.transform, d3.zoomIdentity.translate(tx, lockedTY).scale(scale));
}

document.getElementById('btn-zoom-in').addEventListener('click', () => svgD3.transition().duration(250).call(zoom.scaleBy, 1.4));
document.getElementById('btn-zoom-out').addEventListener('click', () => svgD3.transition().duration(250).call(zoom.scaleBy, 0.7));
document.getElementById('btn-fit').addEventListener('click', fitView);

// ═══════════════════════════════════════════════════════════
// EXTRA PANEL — Unidades Relevantes
// ═══════════════════════════════════════════════════════════

// Keyword patterns (ES) → IDs de nodos afectados por bonus
const BONUS_UNIT_KEYWORDS = [
  {
    re: /milicia.línea|línea.milicia|infant[eé]r[ií]a con espada/i,
    ids: ['militia', 'manatarms', 'longsword', 'twohanded', 'champion']
  },
  {
    re: /lancero|piquero|alabardero/i,
    ids: ['spearman', 'pikeman', 'halberdier']
  },
  {
    re: /infant[eé]r[ií]a(?! con)/i,
    ids: ['militia', 'manatarms', 'longsword', 'twohanded', 'champion', 'spearman', 'pikeman', 'halberdier']
  },
  {
    re: /caballería ligera|húsar|husar/i,
    ids: ['lightcav', 'hussar']
  },
  {
    re: /caballero|paladín/i,
    ids: ['knight', 'cavalier', 'paladin']
  },
  {
    re: /caball[eé]r[ií]a(?! ligera)/i,
    ids: ['scout', 'lightcav', 'hussar', 'knight', 'cavalier', 'paladin']
  },
  {
    re: /camello/i,
    ids: ['camel', 'heavycamel']
  },
  {
    re: /elefante de asedio/i,
    ids: ['armored_elephant', 'siege_elephant']
  },
  {
    re: /elefante.*batalla|elefante.*combate/i,
    ids: ['battleeleph', 'eliteeleph']
  },
  {
    re: /arquero.*elefante|elefante.*arquero/i,
    ids: ['elephant_archer', 'elite_elephant_archer']
  },
  {
    re: /arquero.*caballo|cav.*arquero/i,
    ids: ['cavarcher', 'hcavarcher']
  },
  {
    re: /escaramuzador/i,
    ids: ['skirmisher', 'eliteskirm']
  },
  {
    re: /arquero.*pie|arquero(?!.*caballo)/i,
    ids: ['archer', 'crossbow', 'arbalester']
  },
  {
    re: /ariete/i,
    ids: ['batteringram', 'cappedram', 'siegeram']
  },
  {
    re: /mangonela|onagro/i,
    ids: ['mangonel', 'onager', 'siegeonager']
  },
  {
    re: /escorpión/i,
    ids: ['scorpion', 'heavyscorpion']
  },
  {
    re: /trebuchet/i,
    ids: ['trebuchet']
  },
  {
    re: /taller de asedio|unidades de asedio/i,
    ids: ['batteringram', 'cappedram', 'siegeram', 'mangonel', 'onager', 'siegeonager', 'scorpion', 'heavyscorpion', 'bombcannon']
  },
  {
    re: /brulote|barco.*fuego/i,
    ids: ['firegalley', 'fastfireship']
  },
  {
    re: /barco.*demolición|demolición/i,
    ids: ['demoship', 'heavydemo']
  },
  {
    re: /galera|galeras/i,
    ids: ['galley', 'wargalley', 'galleon']
  },
  {
    re: /barco|nav[ií]o|navíos/i,
    ids: ['galley', 'wargalley', 'galleon', 'firegalley', 'fastfireship', 'demoship', 'heavydemo', 'cannongalleon']
  },
  {
    re: /monje/i,
    ids: ['monk']
  },
  {
    re: /aldeano/i,
    ids: ['villager']
  },
  {
    re: /unidades militares/i,
    ids: ['militia', 'manatarms', 'longsword', 'twohanded', 'champion',
      'spearman', 'pikeman', 'halberdier',
      'archer', 'crossbow', 'arbalester', 'skirmisher', 'eliteskirm',
      'scout', 'lightcav', 'hussar', 'knight', 'cavalier', 'paladin',
      'cavarcher', 'hcavarcher', 'monk']
  },
];

const AGE_NAMES = ['Oscura', 'Feudal', 'Castillos', 'Imperial'];

function getNodeDisplayName(id) {
  const n = NODES.find(x => x.id === id);
  if (!n) return id;
  return tData(n, 'name') || id;
}

// Maps structured bonus scope values to arrays of unit node IDs
const SCOPE_TO_IDS = {
  // ── Economy (no tree nodes → empty, keeps getBonusAffectedUnits clean)
  villager: ['villager'],
  farmer: [], shepherd: [], forager: [],
  lumberjack: [], miner: [], hunter: [],
  fishing_ship: ['fishingship'],
  trade_unit: ['tradecart', 'tradecog'],
  relic: [],
  // ── Military
  military_unit: ['militia', 'manatarms', 'longsword', 'twohanded', 'champion',
    'spearman', 'pikeman', 'halberdier', 'scout', 'lightcav', 'hussar',
    'knight', 'cavalier', 'paladin', 'archer', 'crossbow', 'arbalester',
    'skirmisher', 'eliteskirm', 'cavarcher', 'hcavarcher', 'monk'],
  infantry: ['militia', 'manatarms', 'longsword', 'twohanded', 'champion',
    'spearman', 'pikeman', 'halberdier'],
  sword_infantry: ['militia', 'manatarms', 'longsword', 'twohanded', 'champion'],
  spear_infantry: ['spearman', 'pikeman', 'halberdier'],
  archer: ['archer', 'crossbow', 'arbalester'],
  foot_archer: ['archer', 'crossbow', 'arbalester', 'skirmisher', 'eliteskirm'],
  skirmisher: ['skirmisher', 'eliteskirm'],
  cavalry: ['scout', 'lightcav', 'hussar', 'knight', 'cavalier', 'paladin'],
  cavalry_archer: ['cavarcher', 'hcavarcher'],
  light_cavalry: ['lightcav', 'hussar'],
  knight: ['knight', 'cavalier', 'paladin'],
  camel: ['camelrider', 'heavycamel'],
  gunpowder: ['handcannon', 'bombcannon'],
  monk: ['monk'],
  siege: ['mangonel', 'onager', 'siegeonager', 'scorpion', 'heavyscorpion',
    'batteringram', 'cappedram', 'siegeram', 'trebuchet', 'bombcannon'],
  ship: ['galley', 'wargalley', 'galleon', 'firegalley', 'fastfireship',
    'demoship', 'heavydemo', 'cannongalleon'],
};

function getBonusAffectedUnits(civ) {
  if (!Array.isArray(civ.bonuses)) return [];

  // Bonus note text lives in locale (indexed by position, same order as civ.bonuses)
  const lcBonuses = LOCALE[currentLang]?.civs?.[currentCiv]?.bonuses || [];

  const result = [];
  const seen = new Set();

  civ.bonuses.forEach((bonus, idx) => {
    if (typeof bonus !== 'object' || !bonus.scope) return;

    const note = lcBonuses[idx] || '';

    // scope can be a string key, an array of ids, or a free string
    let ids = [];
    if (Array.isArray(bonus.scope)) {
      ids = bonus.scope;
    } else {
      ids = SCOPE_TO_IDS[bonus.scope] || [];
      // fallback: treat scope as a single node ID
      if (!ids.length && bonus.scope) ids = [bonus.scope];
    }

    ids.forEach(id => {
      if (!seen.has(id) && !isMissing(id)) {
        seen.add(id);
        result.push({ id, name: getNodeDisplayName(id), bonus: note });
      }
    });
  });

  return result;
}

function makeEuIcon(id, typeClass) {
  const div = document.createElement('div');
  div.className = `eu-icon ${typeClass}`;
  const src = IMG_MAP[id];
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    div.appendChild(img);
  } else {
    div.textContent = typeClass.includes('tech') ? '🔬' : '⚔️';
  }
  return div;
}

function makeCostStr(cost) {
  if (!cost) return '';
  const p = [];
  if (cost.food) p.push(`🍖 ${cost.food}`);
  if (cost.wood) p.push(`🪵 ${cost.wood}`);
  if (cost.gold) p.push(`💰 ${cost.gold}`);
  if (cost.stone) p.push(`🪨 ${cost.stone}`);
  return p.join('  ');
}

function makeAgeBadge(age) {
  const span = document.createElement('span');
  span.className = `eu-age-badge age-b-${age}`;
  span.textContent = AGE_NAMES[age] ?? '';
  return span;
}

function makeCard(iconEl, fields) {
  // fields: [{cls, text}]
  const card = document.createElement('div');
  card.className = 'eu-card';
  card.appendChild(iconEl);
  const info = document.createElement('div');
  info.className = 'eu-info';
  fields.forEach(f => {
    if (f.el) { info.appendChild(f.el); return; }
    if (!f.text) return;
    const d = document.createElement('div');
    d.className = f.cls;
    d.textContent = f.text;
    info.appendChild(d);
  });
  card.appendChild(info);
  return card;
}

function makeSection(titleText) {
  const sec = document.createElement('div');
  sec.className = 'eu-section';
  const h = document.createElement('div');
  h.className = 'eu-section-title';
  h.textContent = titleText;
  sec.appendChild(h);
  return sec;
}

function populateExtraPanel() {
  const civ = getCiv();
  const container = document.getElementById('extra-content');
  if (!container) return;
  container.innerHTML = '';

  // ── 1. Unidades Únicas ──────────────────────────────────
  if (civ.uniqueUnits && civ.uniqueUnits.length > 0) {
    const sec = makeSection('⚔ Unidades Únicas');
    const lcUUs = civLocale(currentCiv).uniqueUnits || [];

    civ.uniqueUnits.forEach((u, i) => {
      const lcU = lcUUs[i] || {};
      const badge = makeAgeBadge(u.age ?? 2);
      const fallbackSub = currentLang === 'es' ? 'Unidad única' : 'Unique unit';
      sec.appendChild(makeCard(makeEuIcon('uniqueunit', 'type-unique'), [
        { cls: 'eu-name', text: lcU.name || '' },
        { cls: 'eu-sub', text: lcU.subtitle || fallbackSub },
        { el: badge },
      ]));
      // Elite
      if (lcU.upgradeName) {
        sec.appendChild(makeCard(makeEuIcon('eliteunique', 'type-elite'), [
          { cls: 'eu-name', text: lcU.upgradeName },
          { cls: 'eu-sub', text: currentLang === 'es' ? 'Versión Elite' : 'Elite Version' },
        ]));
      }
    });

    container.appendChild(sec);
  }

  // ── 2. Tecnologías Únicas ────────────────────────────────
  if (civ.uniqueTechs && civ.uniqueTechs.length > 0) {
    const sec = makeSection('🔬 Tecnologías Únicas');
    const lcTechs = civLocale(currentCiv).uniqueTechs || [];

    civ.uniqueTechs.forEach((tech, i) => {
      const lcT = lcTechs[i] || {};
      const badge = makeAgeBadge(tech.age ?? 2);
      sec.appendChild(makeCard(makeEuIcon('uniquetech1', 'type-tech'), [
        { cls: 'eu-name', text: lcT.name || '' },
        { el: badge },
        { cls: 'eu-cost', text: makeCostStr(tech.cost) },
        { cls: 'eu-effect', text: lcT.effect || '' },
      ]));
    });

    container.appendChild(sec);
  }

  // ── 3. Afectadas por Bonus ───────────────────────────────
  const bonusUnits = getBonusAffectedUnits(civ);
  if (bonusUnits.length > 0) {
    const sec = makeSection('⚡ Afectadas por Bonus');

    bonusUnits.forEach(({ id, name, bonus }) => {
      const n = NODES.find(x => x.id === id);
      const typeClass = n ? `type-${n.type}` : 'type-unit';
      sec.appendChild(makeCard(makeEuIcon(id, typeClass), [
        { cls: 'eu-name', text: name },
        { cls: 'eu-bonus', text: bonus },
      ]));
    });

    container.appendChild(sec);
  }

  // ── Estado vacío ─────────────────────────────────────────
  if (container.children.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'eu-empty';
    empty.textContent = 'Sin datos específicos para esta civilización.';
    container.appendChild(empty);
  }
}

function toggleView() {
  viewMode = viewMode === 'classic' ? 'extra' : 'classic';
  const isExtra = viewMode === 'extra';

  document.body.classList.toggle('mode-extra', isExtra);

  const btn = document.getElementById('btn-toggle-view');
  btn.classList.toggle('active', isExtra);
  btn.textContent = isExtra ? '🗺 Árbol Clásico' : '⚔ Unidades Relevantes';

  if (isExtra) populateExtraPanel();

  // Re-fit una vez terminada la transición CSS
  setTimeout(fitView, 340);
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════

// Trigger initial info render
civSelect.dispatchEvent(new Event('change'));

setTimeout(fitView, 50);
window.addEventListener('resize', fitView);
