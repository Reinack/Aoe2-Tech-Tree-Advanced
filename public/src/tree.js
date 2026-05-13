// ═══════════════════════════════════════════════════════════
// TREE RENDERING
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

const root  = svgD3.append('g').attr('id','root');

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

let currentCiv = 'generic';
let viewMode   = 'classic';

function getCiv()     { return CIVS[currentCiv] || CIVS.generic; }
function isMissing(id){ return !getCiv().available.includes(id); }

// ── Helper: locale data for a civ ────────────────────────────────────────────
function civLocale(civId) {
  return LOCALE[currentLang]?.civs?.[civId ?? currentCiv] || {};
}

let displayNodes = NODES.map(n => ({...n}));

function updateUniqueForCiv() {
  const civ  = getCiv();
  const lc   = civLocale(currentCiv);
  const uu   = displayNodes.find(n => n.id === 'uniqueunit');
  const eu   = displayNodes.find(n => n.id === 'eliteunique');
  const ut1  = displayNodes.find(n => n.id === 'uniquetech1');
  const ut2  = displayNodes.find(n => n.id === 'uniquetech2');

  if (civ.uniqueUnits && civ.uniqueUnits.length > 0) {
    const mainUU = civ.uniqueUnits[0];
    const lcUU   = lc.uniqueUnits?.[0] || {};
    const civName = lc.name || currentCiv;
    if (uu) {
      uu.name   = lcUU.name || 'Unique Unit';
      uu.cost   = mainUU.cost || {food:60, gold:30};
      uu.effect = currentLang === 'es'
        ? `Unidad única de ${civName}.${lcUU.subtitle ? ' (' + lcUU.subtitle + ')' : ''}`
        : `Unique unit of ${civName}.${lcUU.subtitle ? ' (' + lcUU.subtitle + ')' : ''}`;
      uu.imgPath = mainUU.imgPic !== undefined ? `img/Unit/${mainUU.imgPic}.png` : null;
    }
    if (eu) {
      eu.name   = lcUU.upgradeName || `${lcUU.name || 'Unique Unit'} Elite`;
      eu.cost   = mainUU.elite_cost || {food:300, gold:500};
      eu.effect = currentLang === 'es'
        ? `Versión elite de ${lcUU.name || 'Unidad Única'}.`
        : `Elite version of ${lcUU.name || 'Unique Unit'}.`;
      eu.imgPath = mainUU.eliteImgPic !== undefined ? `img/Unit/${mainUU.eliteImgPic}.png`
                  : mainUU.imgPic      !== undefined ? `img/Unit/${mainUU.imgPic}.png` : null;
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
  let activeBuildings = BUILDINGS.map(b => ({...b}));
  let activeNodes = NODES.map(n => ({...n}));

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
      
      const x1 = fp.x + NW/2, y1 = fp.y + NH;
      const x2 = tp.x + NW/2, y2 = tp.y;
      const my = (y1 + y2) / 2;
      
      root.append('path')
        .attr('class','edge-building')
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
        .attr('class','edge')
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
        .attr('class','edge')
        .attr('d', `M${x1},${y1} L${x1},${my} L${x2},${my} L${x2},${y2}`)
        .attr('stroke', miss ? 'rgba(0,0,0,0.1)' : '#fff')
        .attr('opacity', miss ? 0.3 : 1);
    }
  });

  // ── Helper to draw node ──────────────────────────────────
  function drawNode(g, id, label, iconText, typeClass, miss, evData) {
    const isStatNode = ['unit','upgrade','unique'].includes(evData.type);
    g.attr('class', `node ${typeClass} ${miss ? 'unavailable' : ''}`)
      .on('mouseover', ev => showTip(ev, evData))
      .on('mousemove', ev => moveTip(ev))
      .on('mouseout',  hideTip)
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
    const variant = n.type === 'unique'        ? '' :
                    n.variant === 'unique'     ? ' n-civ-unique' :
                    n.variant === 'regional'   ? ' n-regional'   : '';

    const g = root.append('g').attr('transform', `translate(${p.x},${p.y})`);
    drawNode(g, n.id, label, iconStr, `n-${n.type}${variant}`, miss, n);
  });
}

// Expose globally
window.getCiv = getCiv;
window.isMissing = isMissing;
window.civLocale = civLocale;
window.updateUniqueForCiv = updateUniqueForCiv;
window.render = render;
window.currentCiv = currentCiv;
window.viewMode = viewMode;
window.displayNodes = displayNodes;