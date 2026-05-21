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
const ALWAYS_AVAILABLE = new Set(['feudalage', 'castleage', 'imperialage', 'wonder']);
function isMissing(id) { return !ALWAYS_AVAILABLE.has(id) && !getCiv().available.includes(id); }

// ── Helper: locale data for a civ ────────────────────────────────────────────
function civLocale(civId) {
  return LOCALE[currentLang]?.civs?.[civId ?? currentCiv] || {};
}

let displayNodes = NODES.filter(n => n.type !== 'building').map(n => ({ ...n }));

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
    if (ut1) { 
      ut1.name = lcT1.name || ''; 
      ut1.cost = civ.uniqueTechs[0].cost; 
      ut1.effect = lcT1.effect || ''; 
      ut1.imgPath = civ.uniqueTechs[0].imgPic !== undefined ? `img/Tech/${civ.uniqueTechs[0].imgPic}.png` : `img/Tech/33.png`;
      IMG_MAP['uniquetech1'] = ut1.imgPath;
    }
  }
  if (civ.uniqueTechs && civ.uniqueTechs[1]) {
    const lcT2 = lc.uniqueTechs?.[1] || {};
    if (ut2) { 
      ut2.name = lcT2.name || ''; 
      ut2.cost = civ.uniqueTechs[1].cost; 
      ut2.effect = lcT2.effect || ''; 
      ut2.imgPath = civ.uniqueTechs[1].imgPic !== undefined ? `img/Tech/${civ.uniqueTechs[1].imgPic}.png` : `img/Tech/107.png`;
      IMG_MAP['uniquetech2'] = ut2.imgPath;
    }
  }
  // Sincronizar unidades únicas también
  const uuNode = displayNodes.find(n => n.id === 'uniqueunit');
  const euNode = displayNodes.find(n => n.id === 'eliteunique');
  if (uuNode?.imgPath) IMG_MAP['uniqueunit'] = uuNode.imgPath;
  if (euNode?.imgPath) IMG_MAP['eliteunique'] = euNode.imgPath;
}

function render() {
  root.selectAll('*').remove();
  const civ = getCiv();

  // Clone and apply overrides
  let activeBuildings = NODES.filter(n => n.type === 'building').map(b => ({ ...b }));
  let activeNodes = NODES.filter(n => n.type !== 'building').map(n => ({ ...n }));

  // Handle regional replacement buildings (e.g. tahsili, mulecart):
  // - If a civ has one available, remove the buildings it replaces from the layout
  // - If a civ doesn't have it, remove the replacement building itself (don't show grey column)
  const replacedIds = new Set();
  activeBuildings.forEach(b => {
    if (b.replaces && !isMissing(b.id)) b.replaces.forEach(id => replacedIds.add(id));
  });
  const buildingRemap = {};
  activeBuildings.forEach(b => {
    if (b.replaces && !isMissing(b.id)) {
      b.replaces.forEach(id => { buildingRemap[id] = b.id; });
    }
  });
  activeBuildings = activeBuildings.filter(b => {
    if (replacedIds.has(b.id)) return false;
    if (b.replaces && isMissing(b.id)) return false;
    return true;
  });
  activeNodes.forEach(n => {
    if (buildingRemap[n.building]) n.building = buildingRemap[n.building];
  });

  if (civ.overrides) {
    Object.entries(civ.overrides).forEach(([id, ov]) => {
      // Check if it's a building
      const bld = activeBuildings.find(b => b.id === id);
      if (bld) {
        if (ov.age !== undefined) {
          const subRow = (bld.row ?? bld.age * 2) % 2;
          bld.age = ov.age;
          if (ov.row === undefined) bld.row = ov.age * 2 + subRow;
        }
        if (ov.row !== undefined) bld.row = ov.row;
      }
      // Check if it's a node
      const node = activeNodes.find(n => n.id === id);
      if (node) {
        if (ov.age !== undefined) {
          const subRow = node.row % 2;
          node.age = ov.age;
          if (ov.row === undefined) {
            node.row = ov.age * 2 + subRow;
          }
        }
        if (ov.row !== undefined) node.row = ov.row;
        if (ov.col !== undefined) node.col = ov.col;
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

    // Connect to building if no prereqs — only when node is in the same age as its building
    if (n.prereqs.length === 0 && bldPos[n.building]) {
      const bld = activeBuildings.find(b => b.id === n.building);
      const bldAge = bld ? (bld.age ?? 0) : 0;
      if (n.age !== bldAge) return; // Skip false cross-age connections

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
    const isStatNode = ['unit', 'upgrade', 'unique', 'building', 'tech', 'defencive'].includes(evData.type);
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
    const bNode = { 
      ...b, 
      name: bName, 
      type: 'building', 
      effect: b.effect || (currentLang === 'es' ? 'Produce unidades o tecnologías.' : 'Produces units or technologies.'),
      prereqs: b.prereqs || [] 
    };
    drawNode(g, b.id, bName, b.icon, 'n-building', miss, bNode);
  });

  // ── Nodes ────────────────────────────────────────────────
  displayNodes.forEach(n => {
    const p = pos[n.id];
    if (!p) return;
    const miss = isMissing(n.id);
    const label = n.type === 'defencive' ? n.name : tData(n, 'name', n.type === 'unit' ? 'units' : 'techs');
    const iconStr = n.type === 'unit' ? '⚔️' : n.type === 'tech' ? '🧪' : n.type === 'upgrade' ? '⭐' : n.type === 'defencive' ? '🏰' : '🌟';

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
  if (c.food)  p.push(`<img src="img/food.png" class="res-icon" alt="Comida"> ${c.food}`);
  if (c.wood)  p.push(`<img src="img/wood.png" class="res-icon" alt="Madera"> ${c.wood}`);
  if (c.gold)  p.push(`<img src="img/gold.png" class="res-icon" alt="Oro"> ${c.gold}`);
  if (c.stone) p.push(`<img src="img/stone.png" class="res-icon" alt="Piedra"> ${c.stone}`);
  return p.join('  ') || (currentLang === 'es' ? 'Gratis' : 'Free');
}

function showTip(ev, n) {
  ttName.textContent = tData(n, 'name', n.type === 'unit' ? 'units' : 'techs');
  ttAge.textContent = (n.type === 'building' || n.type === 'defencive') ? t('building') : `${t(n.age, 'ages')} · ${t(n.type)}`;

  let costHtml = '';
  if (n.build_cost)    costHtml += `<div><strong>${t('build_cost')}:</strong> ${costStr(n.build_cost)}</div>`;
  if (n.research_cost) costHtml += `<div><strong>${t('research_cost')}:</strong> ${costStr(n.research_cost)}</div>`;
  if (n.train_cost)    costHtml += `<div><strong>${t('train_cost')}:</strong> ${costStr(n.train_cost)}</div>`;

  // Fallback para nodos que aún usen la clave genérica 'cost'
  if (!costHtml && n.cost) {
    const label = (n.type === 'building' || n.type === 'defencive') ? t('build_cost') : (n.type === 'unit' ? t('train_cost') : t('research_cost'));
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

const STAT_ICONS = {
  hp:            'img/Icon/hp.webp',
  attack:        'img/Icon/attack.webp',
  armor:         'img/Icon/armor.webp',
  parmor:        'img/Icon/pierce_armor.webp',
  range:         'img/Icon/range.webp',
  speed:         'img/Icon/speed.webp',
  rof:           'img/Icon/reload.webp',
  pierce_attack: 'img/Icon/pierce_attack.webp',
  garrison:      'img/Icon/garrison.webp',
  los:           'img/Icon/los.webp',
};

function statIcon(key) {
  const src = STAT_ICONS[key];
  if (src) return `<img src="${src}" class="stat-img-icon" alt="${key}">`;
  return key;
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
    (n.type === 'building' || n.type === 'defencive') ? t('building') : `${t(n.age, 'ages')} · ${t(n.type)}`;

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
    const rows = [];
    rows.push(statRow(statIcon('hp'), t('hp'), stats.hp || '—'));
    if (stats.attack !== undefined) rows.push(statRow(statIcon('attack'), t('attack'), stats.attack));
    rows.push(statRow(statIcon('armor'), t('armor_m'), (stats.armor && stats.armor[0] !== undefined) ? stats.armor[0] : '—'));
    rows.push(statRow(statIcon('parmor'), t('armor_p'), (stats.armor && stats.armor[1] !== undefined) ? stats.armor[1] : '—'));

    if (stats.range) {
      rows.push(statRow(statIcon('range'), t('range'), stats.range));
    } else if (n.type === 'unit') {
      rows.push(statRow(statIcon('attack'), t('melee_range'), '—'));
    }

    if (stats.speed) rows.push(statRow(statIcon('speed'), t('speed'), stats.speed));
    if (stats.los)   rows.push(statRow(statIcon('los'), t('los'), stats.los));

    if (stats.bonuses && stats.bonuses.length) {
      for (const b of stats.bonuses) {
        const target = t(b.vs, 'bonus_targets');
        rows.push(statRow(statIcon('attack'), target, `+${b.value}`));
      }
    }

    gridEl.innerHTML = rows.join('');
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
    const label = (n.type === 'building' || n.type === 'defencive') ? t('build_cost') : (n.type === 'unit' ? t('train_cost') : t('research_cost'));
    costHtml = `<strong>${label}:</strong> ${costStr(n.cost)} `;
  }

  const trainStr = stats && stats.train ? `  ⏱️ ${stats.train}s` : '';
  document.getElementById('sp-cost').innerHTML = costHtml + trainStr;

  // Efecto
  const effEl = document.getElementById('sp-effect');
  const eff = tData(n, 'effect');
  if (eff) { effEl.textContent = eff; effEl.style.display = 'block'; }
  else { effEl.style.display = 'none'; }

  // Afecta a (solo para tecnologías)
  const appEl = document.getElementById('sp-applies');
  if (n.type === 'tech' || n.type === 'upgrade' || n.type === 'unique') {
    let affects = TECH_AFFECTS[n.id] || [];
    // Si es una tecnología única genérica, buscar la específica de la civ
    if (n.id === 'uniquetech1' || n.id === 'uniquetech2') {
      const compositeId = `${currentCiv}_${n.id}`;
      if (TECH_AFFECTS[compositeId]) affects = TECH_AFFECTS[compositeId];
    }

    if (affects.length > 0) {
      // Resolver clases a unidades individuales
      let unitIds = [];
      affects.forEach(a => {
        if (UNIT_CLASSES[a]) {
          unitIds = unitIds.concat(UNIT_CLASSES[a]);
        } else {
          unitIds.push(a);
        }
      });

      // Incluir unidad única si su clase coincide con las clases afectadas
      const uuName = LOCALE['es']?.civs?.[currentCiv]?.uniqueUnits?.[0]?.name;
      if (uuName && UNIQUE_UNIT_CLASSES[uuName]) {
        const uuClasses = UNIQUE_UNIT_CLASSES[uuName];
        const hasMatch = affects.some(a => uuClasses.includes(a));
        if (hasMatch) {
          unitIds.push('uniqueunit', 'eliteunique');
        }
      }

      // Filtrar por disponibilidad y resolver placeholders únicos
      const availableUnits = [...new Set(unitIds)].filter(uid => !isMissing(uid));
      
      if (availableUnits.length > 0) {
        appEl.style.display = 'block';
        let html = `<div class="sp-applies-title">${currentLang === 'es' ? 'Afecta a:' : 'Applies to:'}</div>`;
        html += `<div class="sp-applies-grid">`;
        availableUnits.forEach(uid => {
          const img = IMG_MAP[uid];
          if (img) {
            html += `<div class="sp-applies-icon" title="${uid}"><img src="${img}"></div>`;
          }
        });
        html += `</div>`;
        appEl.innerHTML = html;
      } else {
        appEl.style.display = 'none';
      }
    } else {
      appEl.style.display = 'none';
    }
  } else {
    appEl.style.display = 'none';
  }

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

  // Show simulator only for units/upgrades
  const isSimulable = n.type === 'unit' || n.type === 'upgrade'
    || n.id === 'uniqueunit' || n.id === 'eliteunique';
  if (isSimulable) initSim(n);
  else document.getElementById('sp-tech-sim').style.display = 'none';
}

// ═══════════════════════════════════════════════════════════
// TECH SIMULATOR
// ═══════════════════════════════════════════════════════════

let simUnit = null;
let simActiveTechs = new Set();
let simMaxAge = 3;
let simExpanded = false;

function getApplicableTechs(unitId) {
  // For unique unit slots, resolve actual class membership from the civ's UU
  let extraClasses = [];
  if (unitId === 'uniqueunit' || unitId === 'eliteunique') {
    const uuName = LOCALE['es']?.civs?.[currentCiv]?.uniqueUnits?.[0]?.name;
    extraClasses = uuName ? (UNIQUE_UNIT_CLASSES[uuName] || []) : [];
  }

  // Class membership of this unit in UNIT_CLASSES
  const unitClasses = Object.entries(UNIT_CLASSES)
    .filter(([, ids]) => ids.includes(unitId))
    .map(([cls]) => cls)
    .concat(extraClasses);

  const applicable = [];
  for (const [techId, targets] of Object.entries(TECH_AFFECTS)) {
    // Civ-specific unique techs (e.g. 'britons_uniquetech1') are not nodes in the tree.
    // They're available only if they belong to the current civ.
    const civMatch = techId.match(/^(.+)_uniquetech[12]$/);
    if (civMatch) {
      if (civMatch[1] !== currentCiv) continue;
    } else if (isMissing(techId)) continue;

    const mod = TECH_MODIFIERS[techId];
    if (!mod || Object.keys(mod).length === 0) continue;

    const hits = targets.some(target => {
      if (target === unitId) return true;
      if (unitClasses.includes(target)) return true;
      if (UNIT_CLASSES[target]) return UNIT_CLASSES[target].includes(unitId);
      return false;
    });
    if (hits) applicable.push(techId);
  }
  return applicable;
}

function applyTechs(base, activeTechs) {
  const s = {
    hp: base.hp,
    attack: base.attack ?? 0,
    armor: [...(base.armor || [0, 0])],
    range: base.range ?? 0,
    speed: base.speed,
  };
  for (const tid of activeTechs) {
    const mod = TECH_MODIFIERS[tid];
    if (!mod) continue;
    if (mod.hp)           s.hp += mod.hp;
    if (mod.hp_pct)       s.hp = Math.round(s.hp * (1 + mod.hp_pct / 100));
    if (mod.attack)       s.attack += mod.attack;
    if (mod.attack_pct)   s.attack = Math.round(s.attack * (1 + mod.attack_pct / 100));
    if (mod.armor_melee)  s.armor[0] += mod.armor_melee;
    if (mod.armor_pierce) s.armor[1] += mod.armor_pierce;
    if (mod.range)        s.range += mod.range;
    if (mod.speed_pct)    s.speed = +(s.speed * (1 + mod.speed_pct / 100)).toFixed(2);
  }
  return s;
}

function initSim(unitNode) {
  if (simUnit?.id !== unitNode.id) {
    simActiveTechs.clear();
    simMaxAge = 3;
  }
  simUnit = unitNode;

  const simEl = document.getElementById('sp-tech-sim');
  const base = getStatsForNode(unitNode);
  if (!base || getApplicableTechs(unitNode.id).length === 0) {
    simEl.style.display = 'none';
    return;
  }
  simEl.style.display = 'block';
  updateSimToggleLabel();
  renderSimBody(base);
}

function updateSimToggleLabel() {
  const label = simExpanded ? '▼ ' : '▶ ';
  const text = currentLang === 'es' ? 'Simular con tecnologías' : 'Simulate with technologies';
  document.getElementById('sp-sim-toggle-label').textContent = label + text;
}

function renderSimBody(base) {
  const body = document.getElementById('sp-sim-body');
  if (!simExpanded) { body.style.display = 'none'; return; }
  body.style.display = 'block';

  const applicable = getApplicableTechs(simUnit.id);

  // Age buttons
  const ageLabels = currentLang === 'es'
    ? ['Oscura', 'Feudal', 'Castillos', 'Imperial']
    : ['Dark', 'Feudal', 'Castle', 'Imperial'];
  document.querySelectorAll('.sim-age-btn').forEach(btn => {
    const age = parseInt(btn.dataset.age);
    btn.textContent = ageLabels[age];
    btn.classList.toggle('sim-age-active', age === simMaxAge);
  });

  // Tech chips filtered by age
  const filtered = applicable.filter(techId => {
    const node = NODES.find(n => n.id === techId);
    return node ? node.age <= simMaxAge : true;
  });

  const chipsEl = document.getElementById('sp-sim-chips');
  chipsEl.innerHTML = filtered.map(techId => {
    const img = IMG_MAP[techId];
    const node = NODES.find(n => n.id === techId);
    const name = node ? tData(node, 'name', 'techs') : techId;
    const active = simActiveTechs.has(techId);
    return `<button class="sim-tech-chip${active ? ' active' : ''}" data-tech="${techId}" title="${name}">
      ${img ? `<img src="${img}" alt="${name}">` : `<span class="sim-chip-icon">⚗</span>`}
    </button>`;
  }).join('');

  renderSimResult(base);
}

function renderSimResult(base) {
  const resultEl = document.getElementById('sp-sim-result');
  if (simActiveTechs.size === 0) { resultEl.innerHTML = ''; return; }

  const mod = applyTechs(base, simActiveTechs);
  const parts = [];

  const addRow = (label, orig, curr, fmt = v => v) => {
    const diff = +(curr - orig).toFixed(2);
    if (diff === 0) return;
    const sign = diff > 0 ? '+' : '';
    parts.push(`<div class="sim-res-item">
      <span class="sim-res-label">${label}</span>
      <span class="sim-res-val">${fmt(curr)}</span>
      <span class="sim-res-delta ${diff > 0 ? 'pos' : 'neg'}">${sign}${fmt(diff)}</span>
    </div>`);
  };

  addRow('HP', base.hp, mod.hp);
  addRow(t('attack') || 'ATK', base.attack, mod.attack);

  const dm = mod.armor[0] - base.armor[0];
  const dp = mod.armor[1] - base.armor[1];
  if (dm !== 0 || dp !== 0) {
    parts.push(`<div class="sim-res-item">
      <span class="sim-res-label">ARM</span>
      <span class="sim-res-val">${mod.armor[0]}/${mod.armor[1]}</span>
      <span class="sim-res-delta pos">${dm >= 0 ? '+' : ''}${dm}/${dp >= 0 ? '+' : ''}${dp}</span>
    </div>`);
  }

  if (base.range) addRow(t('range') || 'RNG', base.range, mod.range);

  if (base.speed !== mod.speed) {
    const pct = Math.round((mod.speed / base.speed - 1) * 100);
    parts.push(`<div class="sim-res-item">
      <span class="sim-res-label">${t('speed') || 'SPD'}</span>
      <span class="sim-res-val">${mod.speed}</span>
      <span class="sim-res-delta pos">${pct >= 0 ? '+' : ''}${pct}%</span>
    </div>`);
  }

  resultEl.innerHTML = parts.length
    ? `<div class="sim-result-grid">${parts.join('')}</div>`
    : `<div class="sim-no-change">${currentLang === 'es' ? 'Sin cambios en stats.' : 'No stat changes.'}</div>`;
}

document.getElementById('sp-sim-toggle').addEventListener('click', () => {
  simExpanded = !simExpanded;
  updateSimToggleLabel();
  if (simUnit) renderSimBody(getStatsForNode(simUnit));
});

document.getElementById('sp-sim-ages').addEventListener('click', e => {
  const btn = e.target.closest('.sim-age-btn');
  if (!btn) return;
  simMaxAge = parseInt(btn.dataset.age);
  // Remove from activeTechs any that exceed the new age limit
  simActiveTechs.forEach(tid => {
    const node = NODES.find(n => n.id === tid);
    if (node && node.age > simMaxAge) simActiveTechs.delete(tid);
  });
  if (simUnit) renderSimBody(getStatsForNode(simUnit));
});

document.getElementById('sp-sim-chips').addEventListener('click', e => {
  const chip = e.target.closest('.sim-tech-chip');
  if (!chip) return;
  const techId = chip.dataset.tech;
  if (simActiveTechs.has(techId)) simActiveTechs.delete(techId);
  else simActiveTechs.add(techId);
  chip.classList.toggle('active', simActiveTechs.has(techId));
  if (simUnit) renderSimResult(getStatsForNode(simUnit));
});

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
  const activeBuildings = NODES.filter(n => n.type === 'building').map(b => ({ ...b }));
  const nodes = displayNodes.length ? displayNodes : NODES.filter(n => n.type !== 'building').map(n => ({ ...n }));
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
    div.textContent = typeClass.includes('tech') ? '🔬' : '⌚';
  }
  return div;
}

function costStr(c) {
  if (!c) return '—';
  const p = [];
  if (c.food)  p.push(`<img src="img/food.png" class="res-icon" alt="Comida"> ${c.food}`);
  if (c.wood)  p.push(`<img src="img/wood.png" class="res-icon" alt="Madera"> ${c.wood}`);
  if (c.gold)  p.push(`<img src="img/gold.png" class="res-icon" alt="Oro"> ${c.gold}`);
  if (c.stone) p.push(`<img src="img/stone.png" class="res-icon" alt="Piedra"> ${c.stone}`);
  return p.join('  ') || (currentLang === 'es' ? 'Gratis' : 'Free');
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
