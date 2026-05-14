export const BUILDINGS = [
  // ── Militares ─────────────────────────────────────────────
  { id: 'archery',    name: 'Galería de Tiro',   icon: '🏹', age: 1, prereqs: ['barracks'], build_cost: { wood: 175 }, stats: { hp: 1500, armor: [0, 7] } },
  { id: 'barracks',  name: 'Cuartel',            icon: '⚔️', age: 0, prereqs: [],           build_cost: { wood: 175 }, stats: { hp: 1500, armor: [0, 7] } },
  { id: 'stable',    name: 'Establo',            icon: '🐴', age: 1, prereqs: ['barracks'], build_cost: { wood: 175 }, stats: { hp: 1500, armor: [0, 7] } },
  { id: 'blacksmith',name: 'Herrería',           icon: '🔨', age: 1, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 2100, armor: [0, 7] } },
  { id: 'siege',     name: 'Taller de Asedio',   icon: '⚒️', age: 2, prereqs: ['blacksmith'], build_cost: { wood: 200 }, stats: { hp: 2100, armor: [0, 7] } },
  { id: 'dock',      name: 'Muelle',             icon: '⚓', age: 0, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 1500, armor: [0, 7] } },
  { id: 'university',name: 'Universidad',        icon: '🎓', age: 2, prereqs: [],           build_cost: { wood: 200 }, stats: { hp: 2100, armor: [0, 7] } },
  { id: 'monastery', name: 'Monasterio',         icon: '⛪', age: 2, prereqs: [],           build_cost: { wood: 175 }, stats: { hp: 2100, armor: [0, 7] } },
  { id: 'castle',    name: 'Castillo',           icon: '🏯', age: 2, prereqs: [],           build_cost: { stone: 650 }, stats: { hp: 4800, armor: [8, 11], attack: 11, range: 8 } },
  { id: 'market',    name: 'Mercado',            icon: '💰', age: 1, prereqs: ['mill'],     build_cost: { wood: 175 }, stats: { hp: 2100, armor: [0, 7] } },
  // ── Economía ──────────────────────────────────────────────
  { id: 'tc',      name: 'Centro Urbano',  icon: '🏰', age: 0, prereqs: [], build_cost: { wood: 275, stone: 100 }, stats: { hp: 2400, armor: [3, 5], attack: 5, range: 6 } },
  { id: 'mill',    name: 'Molino',         icon: '🌾', age: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { id: 'lumber',  name: 'Camp. Maderero', icon: '🪵', age: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { id: 'mining',  name: 'Camp. Minero',   icon: '⛏️', age: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { id: 'tahsili', name: 'Asentamiento',   icon: '🏠', age: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['lumber', 'mining', 'mill', 'mulecart'] },
  { id: 'mulecart',name: 'Mula de Carga',  icon: '🫏', age: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['lumber', 'mining', 'tahsili'] },
  // ── Torres (columna vertical compartida) ──────────────────
  { id: 'outpost',      name: 'Puesto Avanz.',   icon: '🗼', age: 0, prereqs: [],              build_cost: { wood: 25,  stone: 5   }, stats: { hp:  500, armor: [0, 0]               }, layout_col: 'towers' },
  { id: 'watchtower',   name: 'Torre Vigía',     icon: '🏗️', age: 1, prereqs: ['outpost'],     build_cost: { wood: 125, stone: 50  }, stats: { hp: 1020, armor: [1, 7], attack:   5, range: 8 }, layout_col: 'towers' },
  { id: 'guardtower',   name: 'Torre Guardia',   icon: '🏗️', age: 2, prereqs: ['watchtower'],  build_cost: { wood: 125, stone: 50  }, stats: { hp: 1500, armor: [2, 8], attack:   7, range: 8 }, layout_col: 'towers' },
  { id: 'keep',         name: 'Torreón',         icon: '🏗️', age: 3, prereqs: ['guardtower'],  build_cost: { wood: 125, stone: 50  }, stats: { hp: 2250, armor: [3, 9], attack:   8, range: 8 }, layout_col: 'towers' },
  { id: 'bombardtower', name: 'Torre Bombarda',  icon: '💣', age: 3, prereqs: [],              build_cost: { wood: 125, stone: 125 }, stats: { hp: 2220, armor: [3, 9], attack: 120, range: 12 }, layout_col: 'towers' },
  // ── Murallas (columna vertical compartida) ────────────────
  { id: 'palisadewall', name: 'Empalizada',       icon: '🪵', age: 0, prereqs: [],               build_cost: { wood: 2   }, stats: { hp:  250, armor: [ 2,  2] }, layout_col: 'walls' },
  { id: 'palisadegate', name: 'Puerta Empaliz.',  icon: '🚪', age: 0, prereqs: [],               build_cost: { wood: 20  }, stats: { hp:  400, armor: [ 2,  2] }, layout_col: 'walls' },
  { id: 'stonewall',    name: 'Muro de Piedra',   icon: '🧱', age: 1, prereqs: ['palisadewall'], build_cost: { stone: 5  }, stats: { hp: 1800, armor: [ 8, 10] }, layout_col: 'walls' },
  { id: 'gate',         name: 'Puerta',           icon: '🚪', age: 1, prereqs: [],               build_cost: { stone: 30 }, stats: { hp: 2750, armor: [ 6,  6] }, layout_col: 'walls' },
  { id: 'fortifiedwall',name: 'Muro Fortificado', icon: '🧱', age: 2, prereqs: ['stonewall'],    build_cost: { stone: 5  }, stats: { hp: 3000, armor: [12, 12] }, layout_col: 'walls' },
];
