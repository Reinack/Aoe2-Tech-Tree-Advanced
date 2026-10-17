#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════════════════
// build-civ-trees.mjs
//
// Genera la arquitectura del árbol por civilización a partir de los árboles
// del juego que publica aoe2techtree (SiegeEngineers, licencia MIT):
//
//   <aoe2techtree>/data/trees/<CIV>.json   → grilla de cada edificio + estado
//   <aoe2techtree>/data/data.json          → costes, tiempos y stats base
//   <aoe2techtree>/data/locales/{es,en}/strings.json → nombres oficiales
//
// Salidas (se commitean; no editar a mano):
//   public/src/data/civ_trees.js      → CIV_TREES: edificios, grillas y estado por civ
//   public/src/data/upstream_nodes.js → UP_NODES: nombre/icono/coste/stats por id de nodo
//
// Uso:
//   node scripts/build-civ-trees.mjs <ruta-a-checkout-de-aoe2techtree> [commit]
// ═══════════════════════════════════════════════════════════════════════════

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const SRC = process.argv[2];
const COMMIT = process.argv[3] || 'unknown';
if (!SRC) {
  console.error('Uso: node scripts/build-civ-trees.mjs <ruta-a-aoe2techtree> [commit]');
  process.exit(1);
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'src', 'data');

const readJson = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const DATA = readJson(path.join(SRC, 'data', 'data.json'));
const STR = {
  es: readJson(path.join(SRC, 'data', 'locales', 'es', 'strings.json')),
  en: readJson(path.join(SRC, 'data', 'locales', 'en', 'strings.json')),
};

// ── Ids de edificio (building_id del juego → id del visor) ──────────────────
const BUILDING_IDS = {
  12: 'barracks', 45: 'dock', 49: 'siege', 50: 'farm', 68: 'mill', 70: 'house',
  72: 'palisadewall', 79: 'watchtower', 82: 'castle', 84: 'market', 87: 'archery',
  101: 'stable', 103: 'blacksmith', 104: 'monastery', 109: 'tc', 117: 'stonewall',
  155: 'fortifiedwall', 199: 'fishtrap', 209: 'university', 234: 'guardtower',
  235: 'keep', 236: 'bombardtower', 276: 'wonder', 487: 'gate', 562: 'lumber',
  584: 'mining', 598: 'outpost', 621: 'tc_castle', 792: 'palisadegate',
  1021: 'feitoria', 1189: 'harbor', 1251: 'krepost', 1665: 'donjon', 1734: 'folwark',
  1754: 'caravanserai', 1806: 'fortified_church', 1808: 'mulecart', 1889: 'pasture',
  2556: 'tahsili',
};

// ── Tecnologías (node_id → id del visor) ────────────────────────────────────
const TECH_IDS = {
  8: 'townwatch', 12: 'croprotation', 13: 'heavyplow', 14: 'horsecollar', 15: 'guilds',
  17: 'banking', 22: 'loom', 23: 'coinage', 34: 'medium_warships', 35: 'heavy_warships',
  39: 'husbandry', 45: 'faith', 46: 'devotion', 47: 'chemistry', 48: 'caravan',
  50: 'masonry', 51: 'architecture', 54: 'treadmillcrane', 55: 'goldmining',
  63: 'keep_tech', 64: 'bombardtower_tech', 65: 'gillnets', 67: 'forging',
  68: 'ironcasting', 74: 'scalemailarmor', 75: 'blastfurnace', 76: 'chainmailarmor',
  77: 'platemailarmor', 80: 'platebarding', 81: 'scalebarding', 82: 'chainbarding',
  93: 'ballistics', 101: 'feudalage', 102: 'castleage', 103: 'imperialage',
  140: 'guardtower_tech', 182: 'goldshaft', 194: 'fortifiedwall_tech', 199: 'fletching',
  200: 'bodkinarrow', 201: 'bracer', 202: 'doublebitaxe', 203: 'bowsaw',
  211: 'paddedarcharmor', 212: 'leatherarcharmor', 213: 'wheelbarrow', 215: 'squires',
  219: 'ringarcherarmor', 221: 'twomansaw', 230: 'blockprinting', 231: 'sanctity',
  233: 'illumination', 249: 'handcart', 252: 'fervor', 278: 'stonemining',
  279: 'stoneshaft', 280: 'townpatrol', 315: 'conscription', 316: 'redemption',
  319: 'atonement', 321: 'sappers', 322: 'murderhole', 373: 'shipwright',
  374: 'careening', 375: 'drydock', 377: 'siegeengineers', 379: 'hoardings',
  380: 'heatedshot', 408: 'spy', 435: 'bloodlines', 436: 'parthian', 437: 'thumbring',
  438: 'theocracy', 439: 'heresy', 441: 'herbalmedicine', 602: 'arson',
  608: 'arrowslits', 875: 'gambesons', 906: 'fishing_lines', 907: 'carvel_hull',
  908: 'clinker_construction', 909: 'siphons', 910: 'incendiaries',
  1012: 'transhumance', 1013: 'pastoralism', 1014: 'domestication', 1452: 'cranequins',
};

// Las mejoras económicas del Carro de mulas / Asentamiento conservan ids propios
// (_m / _t): el simulador aplica el +40% de eficacia de Armenios/Georgianos a los _m.
const ECO_TECH_SUFFIX = { 1808: '_m', 2556: '_t' };
const ECO_TECHS = new Set(['doublebitaxe', 'bowsaw', 'twomansaw', 'goldmining', 'goldshaft',
  'stonemining', 'stoneshaft', 'horsecollar', 'heavyplow', 'croprotation']);

// ── Unidades (node_id → id del visor) ───────────────────────────────────────
const UNIT_IDS = {
  4: 'archer', 5: 'handcannon', 6: 'eliteskirm', 7: 'skirmisher', 13: 'fishingship',
  17: 'tradecog', 21: 'wargalley', 24: 'crossbow', 36: 'bombcannon', 38: 'knight',
  39: 'cavarcher', 74: 'militia', 75: 'manatarms', 77: 'longsword', 83: 'villager',
  93: 'spearman', 125: 'monk', 128: 'tradecart', 185: 'slinger', 250: 'longship',
  279: 'scorpion', 280: 'mangonel', 283: 'cavalier', 329: 'camel', 330: 'heavycamel',
  331: 'trebuchet', 358: 'pikeman', 359: 'halberdier', 420: 'cannongalleon',
  422: 'cappedram', 440: 'petard', 441: 'hussar', 442: 'galleon', 448: 'scout',
  473: 'twohanded', 474: 'hcavarcher', 492: 'arbalester', 527: 'demoship',
  528: 'heavydemo', 529: 'fireship', 532: 'fastfireship', 533: 'elite_longship',
  539: 'galley', 542: 'heavyscorpion', 545: 'transportship', 546: 'lightcav',
  548: 'siegeram', 550: 'onager', 567: 'champion', 569: 'paladin', 588: 'siegeonager',
  691: 'elitecannon', 751: 'eaglescout', 752: 'eliteeagle', 753: 'eaglewarrior',
  873: 'elephant_archer', 875: 'elite_elephant_archer', 1103: 'firegalley',
  1104: 'demoraft', 1105: 'siegetower', 1132: 'battleeleph', 1134: 'eliteeleph',
  1258: 'batteringram', 1370: 'steppe_lancer', 1372: 'elite_steppe_lancer',
  1744: 'armored_elephant', 1746: 'siege_elephant', 1786: 'spearman', 1787: 'pikeman',
  1788: 'halberdier', 1795: 'dromon', 1901: 'fire_lancer', 1903: 'elite_fire_lancer',
  1904: 'rocket_cart', 1907: 'heavy_rocket_cart', 1942: 'traction_treb',
  1944: 'hei_guang', 1946: 'heavy_hei_guang', 1948: 'lou_chuan', 2550: 'champiscout',
  2552: 'champiwarrior', 2554: 'elitechampi', 2588: 'champirunner', 2626: 'hulk',
  2627: 'war_hulk', 2628: 'carrack', 2633: 'catapult_gall',
  2700: 'mounted_crossbow', 2701: 'heavy_mounted_crossbow',
  2703: 'varangian_guard', 2704: 'elite_varangian_guard',
  // Únicas fuera del slot principal del Castillo
  207: 'imp_camel', 759: 'huskarl_b', 775: 'missionary', 831: 'turtle_ship',
  832: 'elite_turtle_ship', 882: 'condottiero', 886: 'tarkan_s', 1004: 'caravel_d',
  1006: 'elite_caravel', 1010: 'genitour', 1012: 'elite_genitour',
  1155: 'imp_skirmisher', 1260: 'kipchak_c', 1263: 'flaming_camel', 1302: 'dragon_ship',
  1699: 'flemish_militia', 1707: 'winged_hussar', 1709: 'houfnice', 1750: 'thirisadai',
  1751: 'shrivamsha', 1753: 'elite_shrivamsha', 1755: 'camel_scout', 1793: 'legionary',
  1811: 'warrior_priest', 1813: 'savar', 1911: 'grenadier', 1923: 'mounted_treb',
  1952: 'xianbei_raider', 1954: 'cao_cao', 1962: 'war_chariot_s', 1966: 'liu_bei',
  1974: 'jian_swordsman', 1978: 'sun_jian', 2569: 'bolas_rider',
  2571: 'elite_bolas_rider', 2582: 'ibirapema', 2584: 'elite_ibirapema',
  2586: 'temple_guard', 2587: 'elite_temple_guard',
};
// Elites entrenadas fuera del Castillo que son la misma mejora que la UU del Castillo
const ELITE_OF_CASTLE_UU = new Set([761 /* Huskarl (Cuartel) */, 887 /* Tarkan (Establo) */]);
// Edificios únicos que reentrenan la UU del Castillo
const UU_BUILDINGS = new Set([82, 1251, 1665]);

const TYPE_CODE = {
  BuildingTech: 'B', BuildingNonTech: 'BN', RegionalBuilding: 'RB', UniqueBuilding: 'QB',
  Unit: 'U', UnitUpgrade: 'UU', RegionalUnit: 'RU', UniqueUnit: 'QU',
  Research: 'T', RegionalTech: 'RT', UniqueTech: 'QT',
};

const STATUS = { ResearchedCompleted: 1, ResearchRequired: 1, NotAvailable: 0 };

const cleanName = s => (s || '').replace(/<br>/g, ' ').replace(/\s+/g, ' ').trim();
const nameOf = n => ({
  es: cleanName(STR.es[n.name_string_id]) || n.name,
  en: cleanName(STR.en[n.name_string_id]) || n.name,
});

function costOf(obj) {
  if (!obj) return null;
  const c = {};
  for (const [k, v] of Object.entries(obj)) if (v) c[k.toLowerCase()] = v;
  return Object.keys(c).length ? c : null;
}

// Clases de armadura del juego → claves de `bonus_targets` del visor
const BONUS_CLASS = {
  1: 'infantry', 2: 'heavy_warships', 5: 'elephants', 8: 'cavalry', 11: 'all_buildings',
  13: 'stone_defense', 15: 'archers', 16: 'ships', 17: 'rams', 19: 'unique_units',
  20: 'siege_weapons', 21: 'standard_buildings', 22: 'walls', 23: 'gunpowder', 25: 'monks',
  26: 'castles', 27: 'spearmen', 28: 'cavalry_archers', 29: 'shock_infantry', 30: 'camel_units',
  34: 'fishing_ships', 35: 'mamelukes', 36: 'heroes', 37: 'heavy_siege', 38: 'skirmishers',
  40: 'houses', 41: 'fire_ships', 60: 'long_range_warship',
};

// Stats base del juego (valores de datos, antes de bonus por edad/civ).
// Solo se usan como respaldo para nodos sin ficha curada en units.js.
function statsOf(u, isBuilding = false) {
  if (!u || u.HP === undefined) return null;
  const s = { hp: u.HP, armor: [u.MeleeArmor, u.PierceArmor] };
  if (!isBuilding || u.Attack > 0) s.attack = u.Attack;
  if (u.Range > 0 || !isBuilding) s.range = u.Range;
  if (!isBuilding) s.speed = +(+u.Speed).toFixed(2);
  if (!isBuilding || u.Attack > 0) s.rof = u.ReloadTime;
  s.los = u.LineOfSight;
  if (!isBuilding) s.train = u.TrainTime;
  const bonuses = (u.Attacks || [])
    .filter(a => BONUS_CLASS[a.Class] && a.Amount)
    .map(a => ({ vs: BONUS_CLASS[a.Class], value: a.Amount }));
  if (bonuses.length) s.bonuses = bonuses;
  return s;
}

// Información genérica del nodo (coste, tiempo, icono, stats) desde data.json
function nodeInfo(n) {
  const info = { n: nameOf(n), pic: `img/${n.use_type}/${n.picture_index}.png` };
  const id = String(n.node_id);
  if (n.use_type === 'Unit') {
    const u = DATA.data.Unit[id];
    const upg = DATA.data.unit_upgrades[id];
    if (n.node_type === 'UnitUpgrade' && upg) {
      info.rc = costOf(upg.Cost); info.rt = upg.ResearchTime;
    }
    if (u) { info.tc = costOf(u.Cost); info.tt = u.TrainTime; info.s = statsOf(u); }
    // Las mejoras de UU (Elite) figuran como UniqueUnit: su investigación está en unit_upgrades
    if (n.node_type !== 'UnitUpgrade' && upg && n.link_id != null && n.link_id !== -1) {
      info.rc = costOf(upg.Cost); info.rt = upg.ResearchTime;
    }
  } else if (n.use_type === 'Tech') {
    const t = DATA.data.Tech[id];
    if (t) { info.rc = costOf(t.Cost); info.rt = t.ResearchTime; }
  } else if (n.use_type === 'Building') {
    const b = DATA.data.Building[id];
    if (b) { info.bc = costOf(b.Cost); info.bt = b.TrainTime; info.s = statsOf(b, true); }
  }
  return info;
}

function appIdFor(n, buildingId) {
  if (n.use_type === 'Building') return BUILDING_IDS[n.node_id] ?? null;
  if (n.use_type === 'Tech') {
    if (n.node_type === 'UniqueTech') return n.age_id >= 4 ? 'uniquetech2' : 'uniquetech1';
    const base = TECH_IDS[n.node_id];
    if (!base) return null;
    const suf = ECO_TECH_SUFFIX[buildingId];
    return suf && ECO_TECHS.has(base) ? base + suf : base;
  }
  // Unidades
  if (UNIT_IDS[n.node_id]) return UNIT_IDS[n.node_id];
  if (ELITE_OF_CASTLE_UU.has(n.node_id)) return 'eliteunique';
  if (n.node_type === 'UniqueUnit' && UU_BUILDINGS.has(buildingId)) {
    return (n.link_id == null || n.link_id === -1) ? 'uniqueunit' : 'eliteunique';
  }
  return null;
}

// Ids cuyo contenido depende de la civ (nombre/icono/coste van en CIV_TREES[civ].u)
const CIV_SLOTS = new Set(['uniqueunit', 'eliteunique', 'uniquetech1', 'uniquetech2']);

const civFiles = fs.readdirSync(path.join(SRC, 'data', 'trees')).filter(f => f.endsWith('.json')).sort();
const CIV_TREES = {};
const UP_NODES = {};
const unmapped = new Map();

for (const file of civFiles) {
  const civKey = file.replace(/\.json$/, '').toLowerCase();
  const tree = readJson(path.join(SRC, 'data', 'trees', file));
  const index = {};
  for (const n of [...tree.buildings, ...tree.units_techs]) index[n.id] = n;

  const civ = { b: [], u: {} };

  for (const b of tree.buildings) {
    const bid = appIdFor(b, b.building_id);
    if (!bid) { unmapped.set(b.id, b.name); continue; }
    if (!UP_NODES[bid]) UP_NODES[bid] = nodeInfo(b);

    const linkB = b.link_id != null && b.link_id !== -1
      ? tree.buildings.find(x => x.node_id === b.link_id) : null;
    const fromB = b.building_upgraded_from_id != null && b.building_upgraded_from_id !== -1
      ? tree.buildings.find(x => x.node_id === b.building_upgraded_from_id) : null;

    const grid = (b.grid || []).map((row, r) => row.map((cellId, c) => {
      if (!cellId) return 0;
      const n = index[cellId];
      const id = appIdFor(n, b.building_id);
      if (!id) { unmapped.set(cellId, n.name); return 0; }

      // Conexión: con el ítem de arriba si mejora desde él, o con el edificio si no hay nada arriba
      let link = '';
      let above = null;
      for (let rr = r - 1; rr >= 0; rr--) {
        if (b.grid[rr][c]) { above = index[b.grid[rr][c]]; break; }
      }
      if (n.link_id != null && n.link_id !== -1) {
        if (above && above.node_id === n.link_id && above.node_type === n.link_node_type) link = 'a';
      } else if (!above) {
        link = 'b';
      }

      if (CIV_SLOTS.has(id)) {
        // El Castillo manda: ahí figura el coste de la mejora Elite
        if (!civ.u[id] || b.building_id === 82) civ.u[id] = nodeInfo(n);
      } else if (!UP_NODES[id]) {
        UP_NODES[id] = nodeInfo(n);
      }
      // [id, disponible(1/0), tipo, conexión('a' ítem de arriba | 'b' edificio | '')]
      return [id, STATUS[n.node_status] ?? 1, TYPE_CODE[n.node_type] || 'U', link];
    }));

    civ.b.push({
      id: bid,
      r: b.row,
      s: STATUS[b.node_status] ?? 1,
      t: TYPE_CODE[b.node_type] || 'B',
      nc: b.building_in_new_column,
      l: linkB ? appIdFor(linkB, linkB.building_id) : null,
      f: fromB ? appIdFor(fromB, fromB.building_id) : null,
      pic: b.picture_index,
      g: grid.some(row => row.some(Boolean)) ? grid : null,
    });
  }

  // Nombre oficial de la civ y descripción (para fichas nuevas)
  const dc = Object.values(DATA.civs).find(x => x.internal_name.toLowerCase() === civKey);
  if (dc) civ.name = { es: STR.es[dc.name_string_id], en: STR.en[dc.name_string_id] };

  CIV_TREES[civKey] = civ;
}

if (unmapped.size) {
  console.error('Nodos sin id del visor (revisar mapas):');
  for (const [k, v] of unmapped) console.error(`  ${k}  ${v}`);
  process.exit(2);
}

// ── Escritura ───────────────────────────────────────────────────────────────
const header = `// AUTO-GENERADO por scripts/build-civ-trees.mjs — no editar a mano.
// Fuente: SiegeEngineers/aoe2techtree (MIT) @ ${COMMIT}
`;

// Un edificio por línea para que los diffs de futuros parches sean legibles
function civToJs(civ) {
  const lines = [];
  lines.push('  {');
  if (civ.name) lines.push(`    name: ${JSON.stringify(civ.name)},`);
  lines.push('    u: ' + JSON.stringify(civ.u) + ',');
  lines.push('    b: [');
  for (const b of civ.b) lines.push('      ' + JSON.stringify(b) + ',');
  lines.push('    ],');
  lines.push('  }');
  return lines.join('\n');
}

let out = header + '\nexport const CIV_TREES = {\n';
for (const [k, civ] of Object.entries(CIV_TREES)) out += `  ${k}:${civToJs(civ).slice(1)},\n`;
out += '};\n';
fs.writeFileSync(path.join(OUT_DIR, 'civ_trees.js'), out);

let out2 = header + '\nexport const UP_NODES = {\n';
for (const [k, v] of Object.entries(UP_NODES).sort(([a], [b]) => a.localeCompare(b))) {
  out2 += `  ${JSON.stringify(k)}: ${JSON.stringify(v)},\n`;
}
out2 += '};\n';
fs.writeFileSync(path.join(OUT_DIR, 'upstream_nodes.js'), out2);

console.log(`OK: ${Object.keys(CIV_TREES).length} civs, ${Object.keys(UP_NODES).length} nodos.`);
