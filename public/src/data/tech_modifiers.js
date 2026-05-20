// Stat deltas produced by each technology.
// Fields: hp, hp_pct, attack, attack_pct, armor_melee, armor_pierce, range, speed_pct
// *_pct fields are percentages (10 = +10%, applied multiplicatively).
export const TECH_MODIFIERS = {

  // ── HERRERÍA — Ataque (infantería/caballería) ─────────────────────────────
  'forging':              { attack: 1 },
  'ironcasting':          { attack: 1 },
  'blastfurnace':         { attack: 2 },

  // ── HERRERÍA — Ataque (arqueros / edificios / navíos) ────────────────────
  'fletching':            { attack: 1, range: 1 },
  'bodkinarrow':          { attack: 1, range: 1 },
  'bracer':               { attack: 1, range: 1 },

  // ── HERRERÍA — Armadura infantería ───────────────────────────────────────
  'scalemailarmor':       { armor_melee: 1 },
  'chainmailarmor':       { armor_melee: 1 },
  'platemailarmor':       { armor_melee: 2, armor_pierce: 1 },

  // ── HERRERÍA — Armadura caballería ───────────────────────────────────────
  'scalebarding':         { armor_melee: 1 },
  'chainbarding':         { armor_melee: 1 },
  'platebarding':         { armor_melee: 2, armor_pierce: 1 },

  // ── HERRERÍA — Armadura arqueros ─────────────────────────────────────────
  'paddedarcharmor':      { armor_melee: 1 },
  'leatherarcharmor':     { armor_melee: 1 },
  'ringarcherarmor':      { armor_melee: 1, armor_pierce: 2 },

  // ── ESTABLO ───────────────────────────────────────────────────────────────
  'bloodlines':           { hp: 20 },
  'husbandry':            { speed_pct: 10 },

  // ── CUARTEL ───────────────────────────────────────────────────────────────
  'squires':              { speed_pct: 10 },
  'gambesons':            { armor_pierce: 1 },

  // ── GALERÍA DE TIRO ───────────────────────────────────────────────────────
  'parthian':             { armor_melee: 1, armor_pierce: 2 },

  // ── UNIVERSIDAD ───────────────────────────────────────────────────────────
  'chemistry':            { attack: 1 },
  'siegeengineers':       { attack_pct: 20, range: 1 },

  // ── MUELLE ────────────────────────────────────────────────────────────────
  'careening':            { armor_melee: 1, armor_pierce: 1 },
  'drydock':              { speed_pct: 15 },
  'clinker_construction': { armor_pierce: 3 },
  'incendiaries':         { attack: 1 },
  'siphons':              { attack: 2 },

  // ═══════════════════════════════════════════════════════════════════════════
  // TECNOLOGÍAS ÚNICAS
  // ═══════════════════════════════════════════════════════════════════════════

  // Armenios ─────────────────────────────────────────────────────────────────
  // armenians_uniquetech2 (Fereters): +3 PV por golpe — efecto pasivo complejo

  // Aztecas ──────────────────────────────────────────────────────────────────
  'aztecs_uniquetech1':      { attack: 1, range: 1 },    // Atlatl: tiradores +1 atq +1 rng
  'aztecs_uniquetech2':      { attack: 4 },              // Garland Wars: inf +4 atq

  // Bohemios ─────────────────────────────────────────────────────────────────
  'bohemians_uniquetech1':   { speed_pct: 15 },           // Wagenburg Tactics: pólvora +15% velocidad

  // Britanos ─────────────────────────────────────────────────────────────────
  'britons_uniquetech1':     { range: 1 },               // Yeomen: arq pie +1 rng

  // Búlgaros ─────────────────────────────────────────────────────────────────
  'bulgarians_uniquetech2':  { armor_melee: 5 },         // Bagains: 2H espadachín +5 arm cuerpo

  // Birmanos ─────────────────────────────────────────────────────────────────
  'burmese_uniquetech2':     { armor_melee: 1, armor_pierce: 1 }, // Howdah: elefantes +1/+1 arm

  // Celtas ───────────────────────────────────────────────────────────────────
  'celts_uniquetech2':       { hp_pct: 40 },             // Furor Celtica: asedio +40% PV

  // Chinos ───────────────────────────────────────────────────────────────────
  'chinese_uniquetech1':     { hp_pct: 30 },              // Great Wall: muros/torres +30% PV
  'chinese_uniquetech2':     { attack_pct: 25 },          // Rocketry: escorpión/asedio +25% atq

  // Francos ──────────────────────────────────────────────────────────────────
  'franks_uniquetech1':      { range: 2 },               // Bearded Axe: Hacha Arrojadiza +2 rng

  // Gurjaras ─────────────────────────────────────────────────────────────────
  'gurjaras_uniquetech2':    { armor_melee: 4 },         // Frontier Guards: camellos/arq elef +4 arm

  // Industaníes ──────────────────────────────────────────────────────────────
  'hindustanis_uniquetech2': { range: 2 },               // Shatagni: cañón de mano +2 rng

  // Incas ────────────────────────────────────────────────────────────────────
  'incas_uniquetech2':       { armor_melee: 1, armor_pierce: 1 }, // Fabric Shields: hondero/UU +1/+1 arm

  // Italianos ────────────────────────────────────────────────────────────────
  'italians_uniquetech2':    { attack: 2 },              // Pirotechnia: cañón de mano +2 atq

  // Khitán ───────────────────────────────────────────────────────────────────
  // khitans_uniquetech1 (Lamellar Armor): reflect 25% melee damage — COMPLEJO
  // khitans_uniquetech2 (Ordo Cavalry): cav cuerpo a cuerpo regen 150% PV/min en combate — COMPLEJO

  // Jemer ────────────────────────────────────────────────────────────────────
  'khmer_uniquetech1':       { attack: 3 },              // Tusk Swords: elefantes +3 atq

  // Coreanos ─────────────────────────────────────────────────────────────────
  'koreans_uniquetech1':     { range: 2 },               // Eupseong: línea Torres de Vigilancia +2 rng
  'koreans_uniquetech2':     { range: 1 },               // Shinkichon: Barco Tortuga/Carro Cohetes +1 rng

  // Lituanos ─────────────────────────────────────────────────────────────────
  'lithuanians_uniquetech2': { armor_pierce: 2 },        // Tower Shields: lanceros/esc +2 arm pierce

  // Magiares ─────────────────────────────────────────────────────────────────
  'magyars_uniquetech2':     { attack: 1, range: 1 },    // Recurve Bow: arq montado +1 atq +1 rng

  // Malienses ────────────────────────────────────────────────────────────────
  'malians_uniquetech2':     { attack: 5 },              // Farimba: caballería +5 atq

  // Mayas ────────────────────────────────────────────────────────────────────
  'mayans_uniquetech1':      { attack: 1 },              // Hul'che Javelineers: tiradores +1 atq
  'mayans_uniquetech2':      { hp: 40 },                 // Holcans: guerreros águila +40 PV

  // Mongoles ─────────────────────────────────────────────────────────────────
  'mongols_uniquetech2':     { speed_pct: 50 },          // Drill: asedio +50% vel

  // Muisca ───────────────────────────────────────────────────────────────────
  'muisca_uniquetech1':      { speed_pct: 15 },           // Herbalismo: línea arquero +15% vel
  'muisca_uniquetech2':      { range: 1 },               // Huaracas: honderos +1 rng (entrenamiento más rápido = COMPLEJO)

  // Romanos ──────────────────────────────────────────────────────────────────
  'romans_uniquetech1':      { attack: 2 },              // Ballistas: escorpiones/galeras +2 atq

  // Sarracenos ───────────────────────────────────────────────────────────────
  'saracens_uniquetech2':    { attack_pct: 15 },         // Counterweights: mangonela/trebs +15% atq

  // Sicilianos ───────────────────────────────────────────────────────────────
  'sicilians_uniquetech2':   { armor_melee: 1, armor_pierce: 2 }, // Hauberk: caballeros +1/+2 arm

  // Tártaros ─────────────────────────────────────────────────────────────────
  'tatars_uniquetech1':      { armor_melee: 1, armor_pierce: 1 }, // Silk Armor: cab ligera/arq montado +1/+1 arm
  'tatars_uniquetech2':      { range: 2 },               // Timurid Siegecraft: trebuchets +2 rng

  // Teutones ─────────────────────────────────────────────────────────────────
  'teutons_uniquetech1':     { armor_melee: 4 },         // Ironclad: asedio +4 arm cuerpo

  // Tupí ─────────────────────────────────────────────────────────────────────
  // tupi_uniquetech1 (Caciques): Champi/honderos atacan 25% más rápido — COMPLEJO (velocidad de ataque)
  // tupi_uniquetech2 (Curare): arqueros a pie y fortifs causan veneno — COMPLEJO

  // Turcos ───────────────────────────────────────────────────────────────────
  'turks_uniquetech1':       { hp: 20 },                 // Sipahi: arq a caballo +20 PV
  'turks_uniquetech2':       { range: 2 },               // Artillery: cañón bombardeo +2 rng

  // Vietnamitas ──────────────────────────────────────────────────────────────
  'vietnamese_uniquetech1':  { hp: 100 },                // Chatras: elefantes combate +100 PV

  // Wei ──────────────────────────────────────────────────────────────────────
  'wei_uniquetech2':         { armor_melee: 4 },          // Ming Guang Armor: montados +4 arm cuerpo
};
