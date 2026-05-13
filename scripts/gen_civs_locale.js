'use strict';
// ── Generates civs section for locale/es.js and locale/en.js ─────────────────
const fs = require('fs');

// ── Parse extraction JSON ─────────────────────────────────────────────────────
const raw = fs.readFileSync('ref/civs_text_extract.json', 'utf8');
const lines = raw.trim().split('\n');
const civData = {};
for (let i = 1; i < lines.length; i++) {
  if (!lines[i].trim()) continue;
  const obj = JSON.parse(lines[i]);
  const [key, val] = Object.entries(obj)[0];
  civData[key] = val;
}

// ── Fix Mojibake ──────────────────────────────────────────────────────────────
// These are specific triple-encoded sequences found in the source civs.js
const MOJI_X    = 'ÃƒÆ’—';           // → ×
const MOJI_A    = 'ÃƒÆ’Ã‚Â';  // → Á
const MOJI_O    = 'ÃƒÆ’Ã¢â‚¬Å“'; // → Ó

function fix(s) {
  if (!s) return s;
  return s
    .replace(new RegExp(MOJI_X, 'g'), '×')
    .replace(new RegExp(MOJI_A, 'g'), 'Á')
    .replace(new RegExp(MOJI_O, 'g'), 'Ó');
}

// ── English civ name map ──────────────────────────────────────────────────────
const EN_NAMES = {
  generic:      '— Generic (all civs) —',
  armenians:    'Armenians',
  aztecs:       'Aztecs',
  bengalis:     'Bengalis',
  berbers:      'Berbers',
  burmese:      'Burmese',
  byzantines:   'Byzantines',
  bohemians:    'Bohemians',
  burgundians:  'Burgundians',
  britons:      'Britons',
  bulgarians:   'Bulgarians',
  celts:        'Celts',
  chinese:      'Chinese',
  koreans:      'Koreans',
  cumans:       'Cumans',
  dravidians:   'Dravidians',
  slavs:        'Slavs',
  spanish:      'Spanish',
  ethiopians:   'Ethiopians',
  franks:       'Franks',
  georgians:    'Georgians',
  goths:        'Goths',
  gurjaras:     'Gurjaras',
  hindustanis:  'Hindustanis',
  huns:         'Huns',
  incas:        'Incas',
  italians:     'Italians',
  japanese:     'Japanese',
  jurchens:     'Jurchens',
  khmer:        'Khmer',
  khitans:      'Khitans',
  lithuanians:  'Lithuanians',
  magyars:      'Magyars',
  malay:        'Malay',
  malians:      'Malians',
  mapuche:      'Mapuche',
  mayans:       'Mayans',
  mongols:      'Mongols',
  muisca:       'Muisca',
  persians:     'Persians',
  poles:        'Poles',
  portuguese:   'Portuguese',
  romans:       'Romans',
  saracens:     'Saracens',
  shu:          'Shu',
  sicilians:    'Sicilians',
  tatars:       'Tatars',
  teutons:      'Teutons',
  turks:        'Turks',
  tupi:         'Tupí',
  vietnamese:   'Vietnamese',
  vikings:      'Vikings',
  wei:          'Wei',
  wu:           'Wu',
};

// ── English type map (from Spanish type strings) ──────────────────────────────
// Map full Spanish type strings directly to English to avoid partial-replace bugs
const TYPE_MAP = {
  'Civilización de infantería y naval':         'Infantry and Naval civilization',
  'Civilización de infantería y monjes':        'Infantry and Monk civilization',
  'Civilización de infantería y caballería':    'Infantry and Cavalry civilization',
  'Civilización de infantería y asedio':        'Infantry and Siege civilization',
  'Civilización de infantería y defensiva':     'Infantry and Defensive civilization',
  'Civilización de infantería':                 'Infantry civilization',
  'Civilización de caballería y monjes':        'Cavalry and Monk civilization',
  'Civilización de caballería y naval':         'Cavalry and Naval civilization',
  'Civilización de caballería y camellos':      'Cavalry and Camel civilization',
  'Civilización de caballería y contra-unidades': 'Cavalry and Counter-Unit civilization',
  'Civilización de caballería y pólvora':       'Cavalry and Gunpowder civilization',
  'Civilización de caballería':                 'Cavalry civilization',
  'Civilización de arqueros a pie':             'Foot Archer civilization',
  'Civilización de arqueros a caballo':         'Cavalry Archer civilization',
  'Civilización de arqueros y pólvora':         'Archer and Gunpowder civilization',
  'Civilización de arqueros y naval':           'Archer and Naval civilization',
  'Civilización de arqueros y monjes':          'Archer and Monk civilization',
  'Civilización de arqueros e infantería':      'Archer and Infantry civilization',
  'Civilización de arqueros y asedio':          'Archer and Siege civilization',
  'Civilización de arqueros':                   'Archer civilization',
  'Civilización de elefantes y naval':          'Elephant and Naval civilization',
  'Civilización de asedio y elefantes':         'Siege and Elephant civilization',
  'Civilización de camellos y pólvora':         'Camel and Gunpowder civilization',
  'Civilización de camellos y naval':           'Camel and Naval civilization',
  'Civilización naval y de pólvora':            'Naval and Gunpowder civilization',
  'Civilización naval':                         'Naval civilization',
  'Civilización defensiva y naval':             'Defensive and Naval civilization',
  'Civilización defensiva y de caballería':     'Defensive and Cavalry civilization',
  'Civilización defensiva':                     'Defensive civilization',
  'Civilización de pólvora y monjes':           'Gunpowder and Monk civilization',
  'Civilización de pólvora':                    'Gunpowder civilization',
  'Civilización de monjes':                     'Monk civilization',
};

function translateType(esType) {
  if (!esType) return '';
  return TYPE_MAP[esType.trim()] || esType;
}

// ── English unique data ───────────────────────────────────────────────────────
const EN_DATA = {
  generic: {
    bonuses:     ['Shows the full tech tree without restrictions.'],
    teamBonus:   null,
    uniqueTechs: [
      { name: 'Unique Technology I',  effect: 'Castle Age exclusive technology.' },
      { name: 'Unique Technology II', effect: 'Imperial Age exclusive technology.' },
    ],
    uniqueUnits: [
      { name: 'Unique Unit', upgradeName: 'Elite Unique Unit' },
    ],
  },
  armenians: {
    uniqueTechs: [
      { name: 'Cilician Fleet',  effect: 'Demolition Ships: +20% blast radius; Dromons and Galley-line: +1 range.' },
      { name: 'Feretorios',      effect: 'Infantry except Spearman-line: +30 HP; War Monks: +100% healing speed.' },
    ],
    uniqueUnits: [
      { name: 'Composite Bowman', subtitle: 'foot archer', upgradeName: 'Elite Composite Bowman' },
      { name: 'War Monk',         subtitle: 'infantry' },
    ],
  },
  aztecs: {
    uniqueTechs: [
      { name: 'Atlatl',        effect: 'Skirmishers +1 attack and +1 range.' },
      { name: 'Garland Wars',  effect: 'Infantry +4 attack.' },
    ],
    uniqueUnits: [
      { name: 'Jaguar Warrior', upgradeName: 'Elite Jaguar Warrior' },
    ],
  },
  bengalis: {
    uniqueTechs: [
      { name: 'Paiks',     effect: 'Ratha and Elephant Archers 10% faster.' },
      { name: 'Mahayana',  effect: 'Houses provide +10 extra population space.' },
    ],
    uniqueUnits: [
      { name: 'Ratha', upgradeName: 'Elite Ratha' },
    ],
  },
  berbers: {
    uniqueTechs: [
      { name: 'Kasbah',           effect: 'Unique buildings work 25% faster.' },
      { name: 'Maghrebi Camels',  effect: 'Camels regenerate HP.' },
    ],
    uniqueUnits: [
      { name: 'Camel Archer', upgradeName: 'Elite Camel Archer' },
    ],
  },
  burmese: {
    uniqueTechs: [
      { name: 'Howdah',           effect: 'Battle Elephants +1/+1 armor.' },
      { name: 'Manipur Cavalry',  effect: 'Cavalry and Arambai +6 attack vs buildings.' },
    ],
    uniqueUnits: [
      { name: 'Arambai', upgradeName: 'Elite Arambai' },
    ],
  },
  byzantines: {
    uniqueTechs: [
      { name: 'Greek Fire',  effect: 'Fire Ships +1 range.' },
      { name: 'Logistica',   effect: 'Cataphracts deal trample damage; +6 attack vs infantry.' },
    ],
    uniqueUnits: [
      { name: 'Cataphract', upgradeName: 'Elite Cataphract' },
    ],
  },
  bohemians: {
    uniqueTechs: [
      { name: 'Wagenburg Tactics',  effect: 'Hand Cannoneers move 15% faster.' },
      { name: 'Hussite Reforms',    effect: 'Monks cost wood instead of gold.' },
    ],
    uniqueUnits: [
      { name: 'Hussite Wagon', upgradeName: 'Elite Hussite Wagon' },
    ],
  },
  burgundians: {
    uniqueTechs: [
      { name: 'Burgundian Vineyards',  effect: 'Farms also generate small amounts of gold.' },
      { name: 'Flemish Revolution',    effect: 'Transform all Villagers into Flemish Militia.' },
    ],
    uniqueUnits: [
      { name: 'Coustillier', upgradeName: 'Elite Coustillier' },
    ],
  },
  britons: {
    uniqueTechs: [
      { name: 'Yeomen',   effect: 'Foot archers +1 range; Towers attack 20% faster.' },
      { name: 'Warwolf',  effect: 'Trebuchets 100% accuracy and deal area damage.' },
    ],
    uniqueUnits: [
      { name: 'Longbowman', upgradeName: 'Elite Longbowman' },
    ],
  },
  bulgarians: {
    uniqueTechs: [
      { name: 'Stirrups',  effect: 'Cavalry attack 33% faster.' },
      { name: 'Bagains',   effect: 'Militia-line +5 melee armor.' },
    ],
    uniqueUnits: [
      { name: 'Konnik', upgradeName: 'Elite Konnik' },
    ],
  },
  celts: {
    uniqueTechs: [
      { name: 'Stronghold',     effect: 'Towers and Castles fire 33% faster.' },
      { name: 'Furor Celtica',  effect: 'Ships and Siege +50% HP.' },
    ],
    uniqueUnits: [
      { name: 'Woad Raider', upgradeName: 'Elite Woad Raider' },
    ],
  },
  chinese: {
    uniqueTechs: [
      { name: 'Great Wall',  effect: 'Walls +30% HP.' },
      { name: 'Rocketry',    effect: 'Scorpions +4 attack and +2 range; Chu Ko Nu +2 attack.' },
    ],
    uniqueUnits: [
      { name: 'Chu Ko Nu', upgradeName: 'Elite Chu Ko Nu' },
    ],
  },
  koreans: {
    uniqueTechs: [
      { name: 'Eupseong',    effect: 'Towers and Castles +2 range.' },
      { name: 'Shinkichon',  effect: 'Mangonels and Onagers +1 range.' },
    ],
    uniqueUnits: [
      { name: 'War Wagon', upgradeName: 'Elite War Wagon' },
    ],
  },
  cumans: {
    uniqueTechs: [
      { name: 'Steppe Husbandry',   effect: 'Steppe Lancers and Light Cavalry are created 2× faster.' },
      { name: 'Cuman Mercenaries',  effect: 'Allies can create Elite Kipchaks from their Castles.' },
    ],
    uniqueUnits: [
      { name: 'Kipchak', upgradeName: 'Elite Kipchak' },
    ],
  },
  dravidians: {
    uniqueTechs: [
      { name: 'Medical Corps',  effect: 'Siege/Battle Elephants regenerate HP.' },
      { name: 'Wootz Steel',    effect: 'Infantry and Cavalry ignore enemy armor.' },
    ],
    uniqueUnits: [
      { name: 'Urumi Swordsman', upgradeName: 'Elite Urumi Swordsman' },
    ],
  },
  slavs: {
    uniqueTechs: [
      { name: 'Detinets',  effect: 'Towers cost -25%.' },
      { name: 'Druzhina',  effect: 'Infantry deals trample damage.' },
    ],
    uniqueUnits: [
      { name: 'Boyar', upgradeName: 'Elite Boyar' },
    ],
  },
  spanish: {
    uniqueTechs: [
      { name: 'Inquisition',  effect: 'Monks convert faster.' },
      { name: 'Supremacy',    effect: 'Villagers improved attack, armor and HP.' },
    ],
    uniqueUnits: [
      { name: 'Conquistador', upgradeName: 'Elite Conquistador' },
    ],
  },
  ethiopians: {
    uniqueTechs: [
      { name: 'Royal Heirs',      effect: 'Shotel Warriors start already trained from the Castle.' },
      { name: 'Torsion Engines',  effect: 'Siege Workshop units fire extra projectiles.' },
    ],
    uniqueUnits: [
      { name: 'Shotel Warrior', upgradeName: 'Elite Shotel Warrior' },
    ],
  },
  franks: {
    uniqueTechs: [
      { name: 'Chivalry',      effect: 'Stables work 40% faster.' },
      { name: 'Beeldenstorm',  effect: 'Monasteries demolished; Monks cost -100%.' },
    ],
    uniqueUnits: [
      { name: 'Throwing Axeman', upgradeName: 'Elite Throwing Axeman' },
    ],
  },
  georgians: {
    uniqueTechs: [
      { name: 'Svan Towers',       effect: 'Guard Towers +5 attack and garrison more units.' },
      { name: 'Aznauri Cavalry',   effect: 'Cavalry gains HP when attacking buildings.' },
    ],
    uniqueUnits: [
      { name: 'Monaspa', upgradeName: 'Elite Monaspa' },
    ],
  },
  goths: {
    uniqueTechs: [
      { name: 'Anarchy',    effect: 'Huskarls can be produced at Barracks.' },
      { name: 'Perfusion',  effect: 'Barracks work 100% faster.' },
    ],
    uniqueUnits: [
      { name: 'Huskarl', upgradeName: 'Elite Huskarl' },
    ],
  },
  gurjaras: {
    uniqueTechs: [
      { name: 'Kshatriyas',       effect: 'Military units cost -25% food.' },
      { name: 'Frontier Guards',  effect: 'Imperial Camel Rider +4 melee armor.' },
    ],
    uniqueUnits: [
      { name: 'Chakram Thrower', upgradeName: 'Elite Chakram Thrower' },
    ],
  },
  hindustanis: {
    uniqueTechs: [
      { name: 'Grand Trunk Road',  effect: 'Traders generate +10 gold per trip.' },
      { name: 'Shatagni',          effect: 'Hand Cannoneers +1 range.' },
    ],
    uniqueUnits: [
      { name: 'Ghulam', upgradeName: 'Elite Ghulam' },
    ],
  },
  huns: {
    uniqueTechs: [
      { name: 'Marauders',  effect: 'Tarkans producible at Stables.' },
      { name: 'Atheism',    effect: 'Wonders need 50 extra years; Spies -50%.' },
    ],
    uniqueUnits: [
      { name: 'Tarkan', upgradeName: 'Elite Tarkan' },
    ],
  },
  incas: {
    uniqueTechs: [
      { name: 'Tapiales',      effect: 'Stone Walls and Fortifications are built 5× faster.' },
      { name: 'Andean Sling',  effect: 'Slingers have no minimum attack range.' },
    ],
    uniqueUnits: [
      { name: 'Kamayuk', upgradeName: 'Elite Kamayuk' },
    ],
  },
  italians: {
    uniqueTechs: [
      { name: 'Pavise',     effect: 'Foot Archers and Genoese Crossbowmen +1/+1 armor.' },
      { name: 'Silk Road',  effect: 'Trade Carts cost -50%.' },
    ],
    uniqueUnits: [
      { name: 'Genoese Crossbowman', upgradeName: 'Elite Genoese Crossbowman' },
    ],
  },
  japanese: {
    uniqueTechs: [
      { name: 'Yasama',      effect: 'Towers fire extra projectiles.' },
      { name: 'Kataparuto',  effect: 'Trebuchets fire/pack 4× faster; 100% accuracy.' },
    ],
    uniqueUnits: [
      { name: 'Samurai', upgradeName: 'Elite Samurai' },
    ],
  },
  jurchens: {
    uniqueTechs: [
      { name: 'Unique Technology I',  effect: 'Mod effect.' },
      { name: 'Unique Technology II', effect: 'Mod effect.' },
    ],
    uniqueUnits: [
      { name: 'Unique Unit', upgradeName: 'Elite Unique Unit' },
    ],
  },
  khmer: {
    uniqueTechs: [
      { name: 'Tusk Swords',      effect: 'Battle Elephants +3 attack.' },
      { name: 'Double Crossbow',  effect: 'Ballista Elephants and Scorpions fire 2 projectiles.' },
    ],
    uniqueUnits: [
      { name: 'Ballista Elephant', upgradeName: 'Elite Ballista Elephant' },
    ],
  },
  khitans: {
    uniqueTechs: [
      { name: 'Unique Technology I',  effect: 'Mod effect.' },
      { name: 'Unique Technology II', effect: 'Mod effect.' },
    ],
    uniqueUnits: [
      { name: 'Unique Unit', upgradeName: 'Elite Unique Unit' },
    ],
  },
  lithuanians: {
    uniqueTechs: [
      { name: 'Hill Forts',      effect: 'Town Centers +3 attack range.' },
      { name: 'Tower Shields',   effect: 'Spearmen/Pikemen/Halberdiers +2 pierce armor.' },
    ],
    uniqueUnits: [
      { name: 'Leitis', upgradeName: 'Elite Leitis' },
    ],
  },
  magyars: {
    uniqueTechs: [
      { name: 'Magyar Mercenaries',  effect: 'Magyar Huszar costs no gold.' },
      { name: 'Recurve Bow',         effect: 'Cavalry Archers +1 range and +1 attack.' },
    ],
    uniqueUnits: [
      { name: 'Magyar Huszar', upgradeName: 'Elite Magyar Huszar' },
    ],
  },
  malay: {
    uniqueTechs: [
      { name: 'Thalassocracy',  effect: 'Docks convert into Harbors that attack.' },
      { name: 'Forced Levy',    effect: 'Two-Handed Swordsmen cost wood instead of gold.' },
    ],
    uniqueUnits: [
      { name: 'Karambit Warrior', upgradeName: 'Elite Karambit Warrior' },
    ],
  },
  malians: {
    uniqueTechs: [
      { name: 'Tigui',    effect: 'Town Centers fire arrows even when empty.' },
      { name: 'Farimba',  effect: 'Cavalry +5 attack.' },
    ],
    uniqueUnits: [
      { name: 'Gbeto', upgradeName: 'Elite Gbeto' },
    ],
  },
  mapuche: {
    uniqueTechs: [
      { name: 'Malón',       effect: 'Bolas Riders, Slingers, and Skirmishers deal area damage.' },
      { name: 'Butalmapu',   effect: 'Reduces cost of unique units for the whole team.' },
    ],
    uniqueUnits: [
      { name: 'Kona',        subtitle: 'heavy cavalry',   upgradeName: 'Elite Kona' },
      { name: 'Bolas Rider', subtitle: 'ranged cavalry',  upgradeName: 'Elite Bolas Rider' },
    ],
  },
  mayans: {
    uniqueTechs: [
      { name: 'Obsidian Arrows',  effect: 'Archers +6 attack vs buildings.' },
      { name: 'El Dorado',        effect: 'Eagle Warriors +40 HP.' },
    ],
    uniqueUnits: [
      { name: 'Plumed Archer', upgradeName: 'Elite Plumed Archer' },
    ],
  },
  mongols: {
    uniqueTechs: [
      { name: 'Nomads',  effect: 'Houses are not destroyed when their inhabitants die.' },
      { name: 'Drill',   effect: 'Siege Workshop units move 50% faster.' },
    ],
    uniqueUnits: [
      { name: 'Mangudai', upgradeName: 'Elite Mangudai' },
    ],
  },
  muisca: {
    uniqueTechs: [
      { name: 'Herbalismo',  effect: 'Increases movement speed of Archers and Champi Warriors.' },
      { name: 'Huaracas',    effect: 'Increases range and training speed of Slingers.' },
    ],
    uniqueUnits: [
      { name: 'Guecha Warrior',    subtitle: 'skirmisher',      upgradeName: 'Elite Guecha Warrior' },
      { name: 'Temple Guard',      subtitle: 'heavy infantry',  upgradeName: 'Elite Temple Guard' },
    ],
  },
  persians: {
    uniqueTechs: [
      { name: 'Mahout',    effect: 'War Elephants +30% speed.' },
      { name: 'Citadels',  effect: 'Town Centers +35 pierce armor.' },
    ],
    uniqueUnits: [
      { name: 'War Elephant', upgradeName: 'Elite War Elephant' },
    ],
  },
  poles: {
    uniqueTechs: [
      { name: 'Szlachta Privileges',  effect: 'Light Cavalry costs -60% gold.' },
      { name: 'Lechitic Legacy',      effect: 'Cavalry generates gold when killing enemies.' },
    ],
    uniqueUnits: [
      { name: 'Obuch', upgradeName: 'Elite Obuch' },
    ],
  },
  portuguese: {
    uniqueTechs: [
      { name: 'Carrack',    effect: 'Ships +1/+1 armor.' },
      { name: 'Arquebus',   effect: 'Gunpowder units 100% accuracy.' },
    ],
    uniqueUnits: [
      { name: 'Organ Gun', upgradeName: 'Elite Organ Gun' },
    ],
  },
  romans: {
    uniqueTechs: [
      { name: 'Ballistas',      effect: 'Scorpions and War Galleys fire 33% faster.' },
      { name: 'Comitatenses',   effect: 'Infantry and cavalry created 50% faster; charge attack.' },
    ],
    uniqueUnits: [
      { name: 'Legionary', upgradeName: 'Centurion' },
    ],
  },
  saracens: {
    uniqueTechs: [
      { name: 'Bimaristan',  effect: 'Medical Caravan heals nearby units.' },
      { name: 'Madrasah',    effect: 'Monks refund 33% of their cost upon death.' },
    ],
    uniqueUnits: [
      { name: 'Mameluke', upgradeName: 'Elite Mameluke' },
    ],
  },
  shu: {
    uniqueTechs: [
      { name: 'Unique Technology I',  effect: 'Mod effect.' },
      { name: 'Unique Technology II', effect: 'Mod effect.' },
    ],
    uniqueUnits: [
      { name: 'Unique Unit', upgradeName: 'Elite Unique Unit' },
    ],
  },
  sicilians: {
    uniqueTechs: [
      { name: 'First Crusade',  effect: 'Each Town Center spawns 7 Serjeants when researched.' },
      { name: 'Scutage',        effect: 'Each ally receives 15 gold per tributed unit.' },
    ],
    uniqueUnits: [
      { name: 'Serjeant', upgradeName: 'Elite Serjeant' },
    ],
  },
  tatars: {
    uniqueTechs: [
      { name: 'Silk Armor',          effect: 'Steppe Lancers and Light Cavalry +1/+1 armor.' },
      { name: 'Timurid Siegecraft',  effect: 'Trebuchets +2 range; enables Flaming Camels.' },
    ],
    uniqueUnits: [
      { name: 'Keshik', upgradeName: 'Elite Keshik' },
    ],
  },
  teutons: {
    uniqueTechs: [
      { name: 'Ironclad',       effect: 'Siege +4 melee armor.' },
      { name: 'Crenellations',  effect: 'Castles +3 range; garrisoned infantry can shoot.' },
    ],
    uniqueUnits: [
      { name: 'Teutonic Knight', upgradeName: 'Elite Teutonic Knight' },
    ],
  },
  turks: {
    uniqueTechs: [
      { name: 'Sipahi',     effect: 'Cavalry Archers +20 HP.' },
      { name: 'Artillery',  effect: 'Bombard Cannons +2 range.' },
    ],
    uniqueUnits: [
      { name: 'Janissary', upgradeName: 'Elite Janissary' },
    ],
  },
  tupi: {
    uniqueTechs: [
      { name: 'Caciques',  effect: 'Champi Warriors and Slingers attack faster.' },
      { name: 'Curare',    effect: 'Foot Archers and fortifications deal poison damage.' },
    ],
    uniqueUnits: [
      { name: 'Blackwood Archer',     subtitle: 'economic archer',  upgradeName: 'Elite Blackwood Archer' },
      { name: 'Ibirapema Warrior',    subtitle: 'area infantry',    upgradeName: 'Elite Ibirapema Warrior' },
    ],
  },
  vietnamese: {
    uniqueTechs: [
      { name: 'Chatras',      effect: 'Battle Elephants +50 HP.' },
      { name: 'Paper Money',  effect: 'Each ally receives 500 gold.' },
    ],
    uniqueUnits: [
      { name: 'Rattan Archer', upgradeName: 'Elite Rattan Archer' },
    ],
  },
  vikings: {
    uniqueTechs: [
      { name: 'Chieftains',     effect: 'Infantry +5 attack vs cavalry.' },
      { name: 'Berserkergang',  effect: 'Berserks regenerate HP automatically.' },
    ],
    uniqueUnits: [
      { name: 'Berserk', upgradeName: 'Elite Berserk' },
    ],
  },
  wei: {
    uniqueTechs: [
      { name: 'Unique Technology I',  effect: 'Mod effect.' },
      { name: 'Unique Technology II', effect: 'Mod effect.' },
    ],
    uniqueUnits: [
      { name: 'Unique Unit', upgradeName: 'Elite Unique Unit' },
    ],
  },
  wu: {
    uniqueTechs: [
      { name: 'Unique Technology I',  effect: 'Mod effect.' },
      { name: 'Unique Technology II', effect: 'Mod effect.' },
    ],
    uniqueUnits: [
      { name: 'Unique Unit', upgradeName: 'Elite Unique Unit' },
    ],
  },
};

// ── Build ES civs section ─────────────────────────────────────────────────────
const esCivs = {};
for (const [key, civ] of Object.entries(civData)) {
  const entry = {};
  if (civ.name)      entry.name      = fix(civ.name);
  if (civ.type)      entry.type      = fix(civ.type);
  if (civ.bonuses && civ.bonuses.length) {
    entry.bonuses = civ.bonuses.map(b => fix(b)).filter(Boolean);
  }
  if (civ.teamBonus) entry.teamBonus = fix(civ.teamBonus);
  if (civ.uniqueTechs && civ.uniqueTechs.length) {
    entry.uniqueTechs = civ.uniqueTechs.map(t => ({ name: fix(t.name), effect: fix(t.effect) }));
  }
  if (civ.uniqueUnits && civ.uniqueUnits.length) {
    entry.uniqueUnits = civ.uniqueUnits.map(u => {
      const x = { name: fix(u.name) };
      if (u.subtitle)    x.subtitle    = fix(u.subtitle);
      if (u.upgradeName) x.upgradeName = fix(u.upgradeName);
      return x;
    });
  }
  esCivs[key] = entry;
}

// ── Override Mojibake strings in esCivs ──────────────────────────────────────
esCivs.cumans.uniqueTechs[0].effect     = 'Lanceros de Estepa y Cav. Ligera se crean 2× más rápido.';
esCivs.mayans.uniqueTechs[1].effect     = 'Guerreros Águila +40 PV.';
esCivs.incas.uniqueTechs[0].effect      = 'Muros de Piedra y Fortif. se construyen 5× más rápido.';
esCivs.japanese.uniqueTechs[1].effect   = 'Trebuchets disparan/pliegan 4× más rápido; 100% precisión.';
esCivs.portuguese.uniqueUnits[0].name        = 'Órgano de Cañones';
esCivs.portuguese.uniqueUnits[0].upgradeName = 'Órgano de Cañones Elite';

// ── Build EN civs section ─────────────────────────────────────────────────────
const enCivs = {};
for (const [key, civ] of Object.entries(civData)) {
  const enExtra = EN_DATA[key] || {};
  const entry = {};
  entry.name = EN_NAMES[key] || (civ.name ? fix(civ.name) : key);
  if (civ.type) entry.type = translateType(fix(civ.type));
  if (civ.bonuses && civ.bonuses.length) {
    // Bonuses were already in English in the source
    entry.bonuses = (enExtra.bonuses || civ.bonuses.map(b => fix(b))).filter(Boolean);
  }
  if (civ.teamBonus) {
    entry.teamBonus = enExtra.teamBonus !== undefined ? enExtra.teamBonus : fix(civ.teamBonus);
  }
  if (enExtra.uniqueTechs) entry.uniqueTechs = enExtra.uniqueTechs;
  else if (civ.uniqueTechs && civ.uniqueTechs.length) {
    entry.uniqueTechs = civ.uniqueTechs.map(t => ({ name: fix(t.name), effect: fix(t.effect) }));
  }
  if (enExtra.uniqueUnits) entry.uniqueUnits = enExtra.uniqueUnits;
  else if (civ.uniqueUnits && civ.uniqueUnits.length) {
    entry.uniqueUnits = civ.uniqueUnits.map(u => {
      const x = { name: fix(u.name) };
      if (u.subtitle)    x.subtitle    = fix(u.subtitle);
      if (u.upgradeName) x.upgradeName = fix(u.upgradeName);
      return x;
    });
  }
  enCivs[key] = entry;
}

// ── Serialize ─────────────────────────────────────────────────────────────────
// Pretty-print but compact each civ entry to keep files readable
function serializeCivs(civs, indent2) {
  const i1 = '  ';  // civs: {
  const i2 = '    '; // civKey: {
  const i3 = '      '; // name: ...
  const i4 = '        '; // bonus items

  let out = `${i1}civs: {\n`;
  const keys = Object.keys(civs);
  keys.forEach((key, ki) => {
    const c = civs[key];
    out += `${i2}${key}: {\n`;
    const fields = Object.keys(c);
    fields.forEach((f, fi) => {
      const val = c[f];
      const comma = fi < fields.length - 1 ? ',' : '';
      if (f === 'bonuses') {
        out += `${i3}bonuses: [\n`;
        val.forEach((b, bi) => {
          out += `${i4}${JSON.stringify(b)}${bi < val.length - 1 ? ',' : ''}\n`;
        });
        out += `${i3}]${comma}\n`;
      } else if (f === 'uniqueTechs') {
        out += `${i3}uniqueTechs: [\n`;
        val.forEach((t, ti) => {
          out += `${i4}{ name: ${JSON.stringify(t.name)}, effect: ${JSON.stringify(t.effect)} }${ti < val.length - 1 ? ',' : ''}\n`;
        });
        out += `${i3}]${comma}\n`;
      } else if (f === 'uniqueUnits') {
        out += `${i3}uniqueUnits: [\n`;
        val.forEach((u, ui) => {
          let uStr = `{ name: ${JSON.stringify(u.name)}`;
          if (u.subtitle)    uStr += `, subtitle: ${JSON.stringify(u.subtitle)}`;
          if (u.upgradeName) uStr += `, upgradeName: ${JSON.stringify(u.upgradeName)}`;
          uStr += ' }';
          out += `${i4}${uStr}${ui < val.length - 1 ? ',' : ''}\n`;
        });
        out += `${i3}]${comma}\n`;
      } else if (val === null) {
        out += `${i3}${f}: null${comma}\n`;
      } else {
        out += `${i3}${f}: ${JSON.stringify(val)}${comma}\n`;
      }
    });
    out += `${i2}}${ki < keys.length - 1 ? ',' : ''}\n`;
  });
  out += `${i1}},\n`;
  return out;
}

const esSection = serializeCivs(esCivs);
const enSection = serializeCivs(enCivs);

fs.writeFileSync('ref/civs_locale_es.txt', esSection, 'utf8');
fs.writeFileSync('ref/civs_locale_en.txt', enSection, 'utf8');

console.log('ES lines:', esSection.split('\n').length);
console.log('EN lines:', enSection.split('\n').length);
console.log('Done.');
