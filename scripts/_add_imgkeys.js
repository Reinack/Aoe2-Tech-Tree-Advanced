'use strict';
const fs   = require('fs');
const path = require('path');

const civsPath = path.join(__dirname, '..', 'ref', 'civs.js');
const src = fs.readFileSync(civsPath, 'utf8');

const tmpPath = path.join(__dirname, '_tmp_imgkey.js');
fs.writeFileSync(tmpPath, src + '\nmodule.exports = CIVS;');
const CIVS = require(tmpPath);
fs.unlinkSync(tmpPath);

// imgKey for uniqueUnits[0] → points at the img_map.js key for the castle icon
const IMG_KEYS = {
  // Classic AoK civs — very confident (existing img_map entries)
  goths:     'huskarl_b',
  huns:      'tarkan_s',
  cumans:    'kipchak_c',
  romans:    'legionary',
  // Classic AoK civs — confident (new img_map entries added)
  britons:   'longbowman',
  teutons:   'teutonic_knight',
  chinese:   'chu_ko_nu',
  japanese:  'samurai',
  saracens:  'mameluke',
  turks:     'janissary',
  persians:  'war_elephant',
  spanish:   'conquistador',
  italians:  'genoese_crossbow',
  // Conquerors civs — best-guess
  mongols:   'mangudai',
  aztecs:    'jaguar_warrior',
  mayans:    'plumed_archer',
  koreans:   'war_wagon',
  // Forgotten Empires civs — best-guess
  slavs:     'boyar',
  magyars:   'magyar_huszar',
};

let changed = 0;
for (const [civKey, imgKey] of Object.entries(IMG_KEYS)) {
  const civ = CIVS[civKey];
  if (!civ) { console.warn('  ✗ civ not found:', civKey); continue; }
  if (!civ.uniqueUnits || !civ.uniqueUnits[0]) { console.warn('  ✗ no uniqueUnits[0]:', civKey); continue; }
  civ.uniqueUnits[0].imgKey = imgKey;
  changed++;
  console.log(`  ✓ ${civKey}: imgKey="${imgKey}"`);
}

// ── Serializer (same as _update_from_ref.js) ──────────────────────────────
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

const lines = ['const CIVS = {'];
for (const [key, civ] of Object.entries(CIVS)) {
  lines.push(`  ${key}: ${ser(civ, 1)},`);
}
lines.push('};');

const out = lines.join('\n') + '\n';
fs.writeFileSync(civsPath, out, 'utf8');
console.log(`\ncivs.js updated: ${Buffer.byteLength(out)} bytes, ${changed} civs got imgKey.`);
