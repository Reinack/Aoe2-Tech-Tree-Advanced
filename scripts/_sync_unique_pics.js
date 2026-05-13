'use strict';
/**
 * _sync_unique_pics.js
 * Lee los JSON de aoe2techtree, extrae picture_index de las UniqueUnit del castillo
 * y actualiza civs.js (imgPic / eliteImgPic) e img_map.js.
 */
const fs   = require('fs');
const path = require('path');

const TREES_DIR  = 'C:/Users/Usuario/Downloads/aoe2techtree-master/aoe2techtree-master/data/trees';
const CIVS_PATH  = path.join(__dirname, '..', 'ref', 'civs.js');
const MAP_PATH   = path.join(__dirname, '..', 'src', 'data', 'img_map.js');

// ── 1. Extraer datos de los árboles ───────────────────────────────────────
// Mapa de nombre de archivo (sin .json, lowercase) → clave en civs.js
// (la mayoría coinciden; exceptions below)
const FILE_TO_KEY = {
  // identical
  armenians:'armenians', aztecs:'aztecs', bengalis:'bengalis', berbers:'berbers',
  bohemians:'bohemians', britons:'britons', bulgarians:'bulgarians',
  burgundians:'burgundians', burmese:'burmese', byzantines:'byzantines',
  celts:'celts', chinese:'chinese', cumans:'cumans', dravidians:'dravidians',
  ethiopians:'ethiopians', franks:'franks', georgians:'georgians', goths:'goths',
  gurjaras:'gurjaras', hindustanis:'hindustanis', huns:'huns', incas:'incas',
  italians:'italians', japanese:'japanese', jurchens:'jurchens', khitans:'khitans',
  khmer:'khmer', koreans:'koreans', lithuanians:'lithuanians', magyars:'magyars',
  malay:'malay', malians:'malians', mapuche:'mapuche', mayans:'mayans',
  mongols:'mongols', muisca:'muisca', persians:'persians', poles:'poles',
  portuguese:'portuguese', romans:'romans', saracens:'saracens', shu:'shu',
  sicilians:'sicilians', slavs:'slavs', spanish:'spanish', tatars:'tatars',
  teutons:'teutons', tupi:'tupi', turks:'turks', vietnamese:'vietnamese',
  vikings:'vikings', wei:'wei', wu:'wu',
};

// Extraer picture_index del UniqueUnit del castillo (building_id = 82)
const civPics = {}; // civKey → { base, elite }

for (const [file, civKey] of Object.entries(FILE_TO_KEY)) {
  const jsonPath = path.join(TREES_DIR, file.toUpperCase() + '.json');
  if (!fs.existsSync(jsonPath)) { console.warn('  ✗ no JSON for', file); continue; }
  const d = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const castle = d.units_techs.filter(u => u.building_id === 82 && u.node_type === 'UniqueUnit');
  // first UniqueUnit = base; its upgrade (link_id points back) = elite
  // aoe2techtree marks them both as 'UniqueUnit'; the one with link_id == another unit's node_id is elite
  const base  = castle.find(u => u.link_node_type === 'BuildingTech' || u.link_id === -1 || u.link_id === 82);
  // elite = the one whose link_node_type is 'Unit' or 'UniqueUnit' (linked to base)
  const elite = castle.find(u => u !== base && (u.link_node_type === 'Unit' || u.link_node_type === 'UniqueUnit'));
  if (!base) { console.warn('  ✗ no base UniqueUnit for', file); continue; }
  civPics[civKey] = {
    basePic:  base.pic  ?? base.picture_index,
    elitePic: elite ? (elite.pic ?? elite.picture_index) : null,
    baseName: base.name,
    eliteName: elite ? elite.name : null,
  };
  console.log(`  ${civKey}: base=${civPics[civKey].basePic} (${civPics[civKey].baseName}) | elite=${civPics[civKey].elitePic} (${civPics[civKey].eliteName})`);
}

// ── 2. Cargar civs.js ─────────────────────────────────────────────────────
const src = fs.readFileSync(CIVS_PATH, 'utf8');
const tmpPath = path.join(__dirname, '_tmp_sync.js');
fs.writeFileSync(tmpPath, src + '\nmodule.exports = CIVS;');
const CIVS = require(tmpPath);
fs.unlinkSync(tmpPath);

// Inyectar imgPic y eliteImgPic; eliminar imgKey viejo (ya no hace falta)
let changed = 0;
for (const [civKey, pics] of Object.entries(civPics)) {
  const civ = CIVS[civKey];
  if (!civ || !civ.uniqueUnits || !civ.uniqueUnits[0]) continue;
  const u = civ.uniqueUnits[0];
  delete u.imgKey;   // eliminamos el campo anterior
  u.imgPic = pics.basePic;
  if (pics.elitePic !== null) u.eliteImgPic = pics.elitePic;
  changed++;
}
console.log(`\nCivs actualizadas con imgPic: ${changed}`);

// ── 3. Serializar civs.js ─────────────────────────────────────────────────
function ser(v, indent=0) {
  const sp = '  '.repeat(indent);
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (typeof v === 'string') return JSON.stringify(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    const flat = v.every(x => typeof x !== 'object' || x === null);
    if (flat) return '[' + v.map(x => ser(x, 0)).join(', ') + ']';
    return '[\n' + v.map(x => sp + '  ' + ser(x, indent + 1)).join(',\n') + '\n' + sp + ']';
  }
  const keys = Object.keys(v).filter(k => v[k] !== undefined);
  if (keys.length === 0) return '{}';
  const inner = keys.map(k => {
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    return sp + '  ' + key + ':' + ser(v[k], indent + 1);
  }).join(',\n');
  return '{\n' + inner + '\n' + sp + '}';
}
const civsLines = ['const CIVS = {'];
for (const [key, civ] of Object.entries(CIVS)) {
  civsLines.push(`  ${key}: ${ser(civ, 1)},`);
}
civsLines.push('};');
const civsOut = civsLines.join('\n') + '\n';
fs.writeFileSync(CIVS_PATH, civsOut, 'utf8');
console.log(`civs.js escrito: ${Buffer.byteLength(civsOut)} bytes`);

// ── 4. Actualizar img_map.js ──────────────────────────────────────────────
// Eliminar el bloque "CASTLE UNIQUE UNITS" anterior (incorrecto) e insertar correcto
let mapSrc = fs.readFileSync(MAP_PATH, 'utf8');

// Quitar el bloque erróneo que añadimos antes
mapSrc = mapSrc.replace(
  /\n\s*\/\/ ── CASTLE UNIQUE UNITS \(por icono.*?(?=\n\s*\/\/ ──)/s,
  '\n'
);

// Construir bloque correcto
const lines = [
  '',
  '  // ── CASTLE UNIQUE UNITS (picture_index de aoe2techtree) ──────────────────',
];
// también necesitamos añadir entradas para units que ya existen con otro key
// (huskarl_b=50, tarkan_s=105, kipchak_c=252, legionary=139) → no las duplicamos,
// el código buscará por imgPath construido desde imgPic directamente.
// Sólo documentamos aquí las especiales que además tienen un key propio:
lines.push('  // (El código construye la ruta con imgPic: \'img/Unit/\' + n + \'.png\')');

// Insertar el bloque antes de la sección MARKET
const insertBefore = '  // ── MARKET ──';
mapSrc = mapSrc.replace(insertBefore, lines.join('\n') + '\n\n  ' + insertBefore.trim());

fs.writeFileSync(MAP_PATH, mapSrc, 'utf8');
console.log('img_map.js actualizado (bloque incorrecto eliminado).');
