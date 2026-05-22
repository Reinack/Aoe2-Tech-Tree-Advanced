// ═══════════════════════════════════════════════════════════
// TECH SIMULATOR
// ═══════════════════════════════════════════════════════════

let simUnit       = null;
let simActiveTechs = new Set();
let simMaxAge      = 3;
let simExpanded    = false;
let simBaseStats   = null;   // raw unit stats (before any bonuses)
let simCivStats    = null;   // stats after civ stat_modifier bonuses
let simBaseCost    = null;   // raw unit train cost (before any bonuses)
let simCivCost     = null;   // train cost after civ cost_modifier bonuses

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
  for (const [techId, entry] of Object.entries(TECHS)) {
    // Civ-specific unique techs (e.g. 'britons_uniquetech1') are not nodes in the tree.
    // They're available only if they belong to the current civ.
    const civMatch = techId.match(/^(.+)_uniquetech[12]$/);
    if (civMatch) {
      if (civMatch[1] !== currentCiv) continue;
    } else if (isMissing(techId)) continue;

    const mod = entry.mod;
    if (!mod || Object.keys(mod).length === 0) continue;

    const targets = entry.affects || [];
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

// Applies active tech cost modifiers to a cost object.
// Returns a modified copy if anything changed, otherwise null.
function applyTechsToCost(rawCost, activeTechs) {
  if (!rawCost || activeTechs.size === 0) return null;

  const c = { ...rawCost };
  let modified = false;

  for (const tid of activeTechs) {
    const mod = TECHS[tid]?.mod;
    if (!mod) continue;

    // ── All-resource percentage reduction (cost_pct, trade_cost_pct) ─────────
    const allPct = mod.cost_pct ?? mod.trade_cost_pct;
    if (allPct != null) {
      const mult = 1 + allPct / 100;
      for (const r of ['food', 'wood', 'gold', 'stone']) {
        if (c[r] != null) { c[r] = Math.max(0, Math.round(c[r] * mult)); modified = true; }
      }
    }

    // ── Per-resource percentage reductions ────────────────────────────────────
    if (mod.food_cost_pct  != null && c.food  != null) {
      c.food  = Math.max(0, Math.round(c.food  * (1 + mod.food_cost_pct  / 100))); modified = true;
    }
    if (mod.wood_cost_pct  != null && c.wood  != null) {
      c.wood  = Math.max(0, Math.round(c.wood  * (1 + mod.wood_cost_pct  / 100))); modified = true;
    }
    if (mod.gold_cost_pct  != null && c.gold  != null) {
      c.gold  = Math.max(0, Math.round(c.gold  * (1 + mod.gold_cost_pct  / 100))); modified = true;
    }
    if (mod.stone_cost_pct != null && c.stone != null) {
      c.stone = Math.max(0, Math.round(c.stone * (1 + mod.stone_cost_pct / 100))); modified = true;
    }

    // ── Gold → Food (Magyar Corvinian Army, Malay Forced Levy, Bohemians Hussite Reforms) ─
    if (mod.replace_gold_with_food && c.gold) {
      c.food = (c.food || 0) + c.gold;
      c.gold = 0;
      modified = true;
    }

    // ── Gold → Wood (Persian Kamandaran — gold replaced by approx. equivalent wood) ────────
    if (mod.replace_gold_with_wood && c.gold) {
      c.wood = (c.wood || 0) + c.gold;
      c.gold = 0;
      modified = true;
    }
  }

  return modified ? c : null;
}

function applyTechs(base, activeTechs, unitId = '') {
  const s = {
    hp:           base.hp,
    attack:       base.attack,          // keep undefined for buildings with no attack
    armor:        base.armor ? [...base.armor] : [0, 0],
    range:        base.range,
    speed:        base.speed,
    rof:          base.rof,
    blast_radius: base.blast_radius,    // kept undefined for non-siege units
    los:          base.los,
    train:        base.train,           // training time (seconds); reduced by production_speed_pct
    bonuses:      base.bonuses ? base.bonuses.map(b => ({ ...b })) : undefined,
  };
  for (const tid of activeTechs) {
    const mod = TECHS[tid]?.mod;
    if (!mod) continue;

    // ── Standard stat deltas ────────────────────────────────────────────────
    if (mod.hp)           s.hp       = (s.hp ?? 0) + mod.hp;
    if (mod.hp_pct)       s.hp       = Math.round((s.hp ?? 0) * (1 + mod.hp_pct / 100));
    if (mod.attack_pct)   s.attack   = Math.round((s.attack ?? 0) * (1 + mod.attack_pct / 100));
    if (mod.armor_melee)  s.armor[0] += mod.armor_melee;
    if (mod.armor_pierce) s.armor[1] += mod.armor_pierce;
    if (mod.range  && s.range  !== undefined) s.range  += mod.range;
    if (mod.los    && s.los    !== undefined) s.los    += mod.los;
    if (mod.speed_pct && s.speed !== undefined)
      s.speed = +(s.speed * (1 + mod.speed_pct / 100)).toFixed(2);
    if (mod.rof_pct && s.rof !== undefined)
      s.rof = +(s.rof * (1 + mod.rof_pct / 100)).toFixed(2);
    if (mod.blast_radius != null && s.blast_radius !== undefined)
      s.blast_radius = +(s.blast_radius + mod.blast_radius).toFixed(2);

    // attack_speed_pct: e.g. 20 means attacks 20 % faster → ROF × (1 / 1.20)
    if (mod.attack_speed_pct && s.rof !== undefined)
      s.rof = +(s.rof / (1 + mod.attack_speed_pct / 100)).toFixed(2);

    // production_speed_pct: building works faster → train time / (1 + pct/100)
    if (mod.production_speed_pct && s.train != null)
      s.train = Math.round(s.train / (1 + mod.production_speed_pct / 100));

    // ── Attack: flat (general + tower-specific) ──────────────────────────────
    // General flat attack (archers, siege, navy, etc.)
    if (mod.attack && !mod.watchtower_attack) {
      s.attack = (s.attack ?? 0) + mod.attack;
    }
    // Tower-specific attack from Arrowslits (different bonus per tower tier)
    if (mod.watchtower_attack && unitId === 'watchtower')
      s.attack = (s.attack ?? 0) + mod.watchtower_attack;
    if (mod.guardtower_attack && unitId === 'guardtower')
      s.attack = (s.attack ?? 0) + mod.guardtower_attack;
    if (mod.keep_attack && (unitId === 'keep' || unitId === 'donjon' || unitId === 'krepost'))
      s.attack = (s.attack ?? 0) + mod.keep_attack;

    // ── Attack bonuses vs specific targets (e.g. Sappers for Villagers) ──────
    if (mod.vs_bonuses && s.bonuses) {
      for (const vb of mod.vs_bonuses) {
        const existing = s.bonuses.find(b => b.vs === vb.vs);
        if (existing) {
          existing.value += vb.add;
        } else {
          s.bonuses = [...s.bonuses, { vs: vb.vs, value: vb.add }];
        }
      }
    }
  }
  return s;
}

// Recomputes simCivStats / simCivCost based on the simulator's currently selected age.
// Called on unit open and whenever the age selector changes.
function recomputeSimCivBonuses() {
  if (!simUnit || !simBaseStats) return;
  simCivStats = computeCivModifiedStats(simBaseStats, simUnit.id, simMaxAge, simUnit.building ?? null);
  simCivCost  = simBaseCost
    ? computeModifiedCost(simBaseCost, simUnit.id, simMaxAge, 'cost_modifier')
    : null;
}

function initSim(unitNode) {
  if (simUnit?.id !== unitNode.id) simMaxAge = 3;
  simUnit = unitNode;

  const simEl = document.getElementById('sp-tech-sim');
  if (!simBaseStats || getApplicableTechs(unitNode.id).length === 0) {
    simEl.style.display = 'none';
    return;
  }
  recomputeSimCivBonuses();
  simEl.style.display = 'block';
  updateSimToggleLabel();
  renderSimBody();
}

function updateSimToggleLabel() {
  const label = simExpanded ? '▼ ' : '▶ ';
  const text = currentLang === 'es' ? 'Simular con tecnologías' : 'Simulate with technologies';
  document.getElementById('sp-sim-toggle-label').textContent = label + text;
}

function renderSimBody() {
  const body = document.getElementById('sp-sim-body');
  if (!simExpanded) { body.style.display = 'none'; return; }
  body.style.display = 'block';

  const applicable = getApplicableTechs(simUnit.id);

  const ageLabels = currentLang === 'es'
    ? ['Oscura', 'Feudal', 'Castillos', 'Imperial']
    : ['Dark', 'Feudal', 'Castle', 'Imperial'];
  document.querySelectorAll('.sim-age-btn').forEach(btn => {
    const age = parseInt(btn.dataset.age);
    btn.textContent = ageLabels[age];
    btn.classList.toggle('sim-age-active', age === simMaxAge);
  });

  const filtered = applicable.filter(techId => {
    const node = NODES.find(n => n.id === techId);
    return node ? node.age <= simMaxAge : true;
  });

  const chipsEl = document.getElementById('sp-sim-chips');
  chipsEl.innerHTML = filtered.map(techId => {
    // Civ-specific unique tech IDs (e.g. 'britons_uniquetech1') have no direct
    // IMG_MAP entry — fall back to the generic slot key ('uniquetech1'/'uniquetech2').
    const slotKey = techId.replace(/^.+_(uniquetech[12])$/, '$1');
    const img  = IMG_MAP[techId] || IMG_MAP[slotKey];
    const node = NODES.find(n => n.id === techId) || NODES.find(n => n.id === slotKey);
    const name = node ? tData(node, 'name', 'techs') : techId;
    const active = simActiveTechs.has(techId);
    return `<button class="sim-tech-chip${active ? ' active' : ''}" data-tech="${techId}" title="${name}">
      ${img ? `<img src="${img}" alt="${name}">` : `<span class="sim-chip-icon">⚗</span>`}
    </button>`;
  }).join('');

  refreshSimStats();
}

// Applies active techs on top of civ-modified (or base) stats and updates the main grid
function refreshSimStats() {
  if (!simBaseStats) return;
  const isUnit = simUnit?.type === 'unit' || simUnit?.type === 'upgrade'
    || simUnit?.id === 'uniqueunit' || simUnit?.id === 'eliteunique'
    || simUnit?.type === 'building' || simUnit?.type === 'defencive';

  const startFrom = simCivStats || simBaseStats;
  const combined  = simActiveTechs.size > 0
    ? applyTechs(startFrom, simActiveTechs, simUnit?.id ?? '')
    : startFrom;

  const civName = (currentCiv !== 'generic')
    ? (LOCALE[currentLang]?.civs?.[currentCiv]?.name || currentCiv)
    : null;

  let label = null;
  if (simCivStats && civName && simActiveTechs.size > 0) {
    label = currentLang === 'es'
      ? `★ Bonuses de ${civName} + ${simActiveTechs.size} tecn.`
      : `★ ${civName} bonuses + ${simActiveTechs.size} tech(s)`;
  } else if (simCivStats && civName) {
    label = currentLang === 'es'
      ? `★ Bonuses de ${civName}`
      : `★ ${civName} bonuses`;
  } else if (simActiveTechs.size > 0) {
    label = currentLang === 'es'
      ? `★ ${simActiveTechs.size} tecnología(s) activa(s)`
      : `★ ${simActiveTechs.size} active tech(s)`;
  }

  renderStatsGrid(simBaseStats, combined, isUnit, label);
  refreshSimCost();
}

// Rebuilds #sp-cost to reflect both civ bonuses and currently active sim techs.
function refreshSimCost() {
  if (!simUnit) return;
  const n = simUnit;
  const isBuilding = n.type === 'building' || n.type === 'defencive';

  // Chain: raw → civ bonus → tech bonus
  const baseCostForTechs = simCivCost || simBaseCost;
  const techCost = applyTechsToCost(baseCostForTechs, simActiveTechs);
  // Final displayed cost; raw cost is the baseline for strikethrough deltas
  const displayCost = techCost || baseCostForTechs;
  const rawCost     = simBaseCost;

  // Current sim train time (base → civ → techs)
  const simStartFrom = simCivStats || simBaseStats;
  const simCombined  = simActiveTechs.size > 0 ? applyTechs(simStartFrom, simActiveTechs, n.id ?? '') : simStartFrom;
  const simTrainTime = simCombined?.train ?? null;
  const timeIcon     = `<img src="img/Icon/reload.webp" class="res-icon" alt="time">`;

  let html = '';

  // Build cost (buildings): only civ modifier applies in the sim
  if (n.build_cost) {
    const modBC = computeModifiedCost(n.build_cost, n.id, n.age ?? 0, 'building_cost_modifier');
    html += `<strong>${t('build_cost')}:</strong> ${costStr(modBC || n.build_cost, modBC ? n.build_cost : null)} `;
  }

  // Train cost: show final cost vs raw baseline, plus current train time
  if (n.train_cost && (displayCost || rawCost)) {
    const showCost = displayCost || rawCost;
    const tStr = simTrainTime != null ? `  ${timeIcon} ${simTrainTime}s` : '';
    html += `<strong>${t('train_cost')}:</strong> ${costStr(showCost, rawCost)}${tStr} `;
  }

  // Fallback (n.cost used when no explicit build/train/research_cost)
  if (!html && n.cost) {
    const label = isBuilding ? t('build_cost') : (n.type === 'unit' || n.type === 'upgrade' ? t('train_cost') : t('research_cost'));
    const showCost = displayCost || rawCost || n.cost;
    const isTrain = label === t('train_cost');
    const tStr = isTrain && simTrainTime != null ? `  ${timeIcon} ${simTrainTime}s` : '';
    html = `<strong>${label}:</strong> ${costStr(showCost, rawCost || null)}${tStr} `;
  }

  if (html) document.getElementById('sp-cost').innerHTML = html;
}

document.getElementById('sp-sim-toggle').addEventListener('click', () => {
  simExpanded = !simExpanded;
  updateSimToggleLabel();
  if (simUnit) renderSimBody();
});

document.getElementById('sp-sim-ages').addEventListener('click', e => {
  const btn = e.target.closest('.sim-age-btn');
  if (!btn) return;
  simMaxAge = parseInt(btn.dataset.age);
  simActiveTechs.forEach(tid => {
    const node = NODES.find(n => n.id === tid);
    if (node && node.age > simMaxAge) simActiveTechs.delete(tid);
  });
  recomputeSimCivBonuses();
  if (simUnit) renderSimBody();
});

document.getElementById('sp-sim-chips').addEventListener('click', e => {
  const chip = e.target.closest('.sim-tech-chip');
  if (!chip) return;
  const techId = chip.dataset.tech;
  if (simActiveTechs.has(techId)) simActiveTechs.delete(techId);
  else simActiveTechs.add(techId);
  chip.classList.toggle('active', simActiveTechs.has(techId));
  refreshSimStats();
});
