export const NODES = [

  // ── BARRACKS ────────────────────────────────────────────

  { id: 'militia', type: 'unit', age: 0, building: 'barracks', row: 0, prereqs: [], cost: { food: 60, gold: 20 } },
  { id: 'manatarms', type: 'upgrade', age: 1, building: 'barracks', row: 0, prereqs: ['militia'], cost: { food: 100, gold: 40 } },
  { id: 'longsword', type: 'upgrade', age: 2, building: 'barracks', row: 0, prereqs: ['manatarms'], cost: { food: 200, gold: 100 } },
  { id: 'twohanded', type: 'upgrade', age: 3, building: 'barracks', row: 0, prereqs: ['longsword'], cost: { food: 300, gold: 150 } },
  { id: 'champion', type: 'upgrade', age: 3, building: 'barracks', row: 1, prereqs: ['twohanded'], cost: { food: 600, gold: 200 } },

  { id: 'spearman', type: 'unit', age: 1, building: 'barracks', row: 2, prereqs: [], cost: { food: 35, wood: 25 } },
  { id: 'pikeman', type: 'upgrade', age: 2, building: 'barracks', row: 2, prereqs: ['spearman'], cost: { food: 160, gold: 60 } },
  { id: 'halberdier', type: 'upgrade', age: 3, building: 'barracks', row: 2, prereqs: ['pikeman'], cost: { food: 75, gold: 25 } },

  { id: 'squires', type: 'tech', age: 2, building: 'barracks', row: 4, prereqs: [], cost: { food: 100 } },
  { id: 'arson', type: 'tech', age: 1, building: 'barracks', row: 4, prereqs: [], cost: { food: 150, gold: 50 } },
  { id: 'gambesons', type: 'tech', age: 2, building: 'barracks', row: 1, prereqs: [], cost: { food: 100, gold: 40 } },

  // ── Eagle Line (Mesoamerican regional) ──────────────────
  { id: 'eaglescout', type: 'unit', age: 1, building: 'barracks', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 20, gold: 50 } },
  { id: 'eaglewarrior', type: 'upgrade', age: 2, building: 'barracks', row: 3, special: true, variant: 'regional', prereqs: ['eaglescout'], cost: { food: 200, gold: 100 } },
  { id: 'eliteeagle', type: 'upgrade', age: 3, building: 'barracks', row: 3, special: true, variant: 'regional', prereqs: ['eaglewarrior'], cost: { food: 500, gold: 400 } },

  // ── Champi Line (South American regional) ───────────────
  { id: 'champiscout', type: 'unit', age: 0, building: 'barracks', row: 0, special: true, variant: 'regional', prereqs: [], cost: { food: 50, gold: 20 } },
  { id: 'champirunner', type: 'upgrade', age: 1, building: 'barracks', row: 0, special: true, variant: 'regional', prereqs: ['champiscout'], cost: { food: 100, gold: 40 } },
  { id: 'champiwarrior', type: 'upgrade', age: 2, building: 'barracks', row: 0, special: true, variant: 'regional', prereqs: ['champirunner'], cost: { food: 150, gold: 80 } },
  { id: 'elitechampi', type: 'upgrade', age: 3, building: 'barracks', row: 0, special: true, variant: 'regional', prereqs: ['champiwarrior'], cost: { food: 400, gold: 200 } },

  // ── Barracks special / unique ────────────────────────────
  { id: 'legionary', type: 'upgrade', age: 3, building: 'barracks', row: 0, special: true, variant: 'unique', prereqs: ['longsword'], cost: { food: 300, gold: 200 } },
  { id: 'fire_lancer', type: 'unit', age: 2, building: 'barracks', row: 3, special: true, variant: 'regional', prereqs: [], cost: { food: 60, gold: 20 } },
  { id: 'elite_fire_lancer', type: 'upgrade', age: 3, building: 'barracks', row: 3, special: true, variant: 'regional', prereqs: ['fire_lancer'], cost: { food: 300, gold: 200 } },
  { id: 'flemish_militia', type: 'unit', age: 1, building: 'barracks', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 60, gold: 25 } },
  { id: 'jian_swordsman', type: 'unit', age: 2, building: 'barracks', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 45, gold: 20 } },
  { id: 'temple_guard', type: 'unit', age: 2, building: 'barracks', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 50, gold: 30 } },
  { id: 'ibirapema', type: 'unit', age: 2, building: 'barracks', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 40, gold: 20 } },
  { id: 'condottiero', type: 'unit', age: 3, building: 'barracks', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 50, gold: 35 } },
  { id: 'huskarl_b', type: 'unit', age: 2, building: 'barracks', row: 1, special: true, variant: 'unique', prereqs: [], cost: { food: 52, gold: 26 } },


  // ── ARCHERY RANGE ───────────────────────────────────────

  { id: 'archer', type: 'unit', age: 1, building: 'archery', row: 0, prereqs: [], cost: { wood: 25, gold: 45 } },
  { id: 'crossbow', type: 'upgrade', age: 2, building: 'archery', row: 0, prereqs: ['archer'], cost: { food: 125, gold: 75 } },
  { id: 'arbalester', type: 'upgrade', age: 3, building: 'archery', row: 0, prereqs: ['crossbow'], cost: { food: 300, gold: 700 } },

  { id: 'skirmisher', type: 'unit', age: 1, building: 'archery', row: 1, prereqs: [], cost: { food: 35, wood: 25 } },
  { id: 'eliteskirm', type: 'upgrade', age: 2, building: 'archery', row: 1, prereqs: ['skirmisher'], cost: { food: 240, gold: 60 } },

  { id: 'handcannon', type: 'unit', age: 3, building: 'archery', row: 2, prereqs: [], cost: { food: 45, gold: 50 } },

  { id: 'cavarcher', type: 'unit', age: 2, building: 'archery', row: 3, prereqs: [], cost: { wood: 40, gold: 60 } },
  { id: 'hcavarcher', type: 'upgrade', age: 3, building: 'archery', row: 3, prereqs: ['cavarcher'], cost: { food: 400, gold: 175 } },

  { id: 'thumbring', type: 'tech', age: 2, building: 'archery', row: 4, prereqs: [], cost: { food: 300, gold: 250 } },
  { id: 'parthian', type: 'tech', age: 3, building: 'archery', row: 4, prereqs: ['thumbring'], cost: { food: 200, gold: 250 } },

  // ── Archery Range special / unique ──────────────────────
  { id: 'imp_skirmisher', type: 'upgrade', age: 3, building: 'archery', row: 1, special: true, variant: 'unique', prereqs: ['eliteskirm'], cost: { food: 300, gold: 450 } },
  { id: 'elephant_archer', type: 'unit', age: 2, building: 'archery', row: 3, special: true, variant: 'regional', prereqs: [], cost: { food: 100, gold: 70 } },
  { id: 'elite_elephant_archer', type: 'upgrade', age: 3, building: 'archery', row: 3, special: true, variant: 'regional', prereqs: ['elephant_archer'], cost: { food: 1000, gold: 800 } },
  { id: 'grenadier', type: 'unit', age: 2, building: 'archery', row: 2, special: true, variant: 'unique', prereqs: [], cost: { food: 60, gold: 60 } },
  { id: 'xianbei_raider', type: 'unit', age: 2, building: 'archery', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 40, gold: 35 } },
  { id: 'bolas_rider', type: 'unit', age: 2, building: 'archery', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 50, gold: 50 } },
  { id: 'slinger', type: 'unit', age: 2, building: 'archery', row: 2, special: true, variant: 'regional', prereqs: [], cost: { food: 30, gold: 40 } },
  { id: 'genitour', type: 'unit', age: 2, building: 'archery', row: 5, special: true, variant: 'unique', prereqs: [], cost: { food: 50, wood: 35 } },


  // ── STABLE ──────────────────────────────────────────────

  { id: 'scout', type: 'unit', age: 1, building: 'stable', row: 0, prereqs: [], cost: { food: 80 } },
  { id: 'lightcav', type: 'upgrade', age: 2, building: 'stable', row: 0, prereqs: ['scout'], cost: { food: 150, gold: 75 } },
  { id: 'hussar', type: 'upgrade', age: 3, building: 'stable', row: 0, prereqs: ['lightcav'], cost: { food: 250, gold: 300 } },

  { id: 'knight', type: 'unit', age: 2, building: 'stable', row: 2, prereqs: [], cost: { food: 60, gold: 75 } },
  { id: 'cavalier', type: 'upgrade', age: 3, building: 'stable', row: 2, prereqs: ['knight'], cost: { food: 300, gold: 300 } },
  { id: 'paladin', type: 'upgrade', age: 3, building: 'stable', row: 3, prereqs: ['cavalier'], cost: { food: 750, gold: 550 } },

  { id: 'camel', type: 'unit', age: 2, building: 'stable', row: 3, special: true, variant: 'regional', prereqs: [], cost: { food: 55, gold: 60 } },
  { id: 'heavycamel', type: 'upgrade', age: 3, building: 'stable', row: 3, special: true, variant: 'regional', prereqs: ['camel'], cost: { food: 150, gold: 50 } },

  { id: 'battleeleph', type: 'unit', age: 2, building: 'stable', row: 4, special: true, variant: 'regional', prereqs: [], cost: { food: 120, gold: 75 } },
  { id: 'eliteeleph', type: 'upgrade', age: 3, building: 'stable', row: 4, special: true, variant: 'regional', prereqs: ['battleeleph'], cost: { food: 500, gold: 600 } },

  { id: 'bloodlines', type: 'tech', age: 2, building: 'stable', row: 1, prereqs: [], cost: { food: 150, gold: 100 } },
  { id: 'husbandry', type: 'tech', age: 3, building: 'stable', row: 1, prereqs: [], cost: { food: 250 } },

  // ── Stable special / unique ──────────────────────────────
  { id: 'winged_hussar', type: 'upgrade', age: 3, building: 'stable', row: 0, special: true, variant: 'regional', prereqs: ['lightcav'], cost: { food: 600, gold: 400 } },
  { id: 'savar', type: 'upgrade', age: 3, building: 'stable', row: 3, special: true, variant: 'unique', prereqs: ['cavalier'], cost: { food: 1000, gold: 600 } },
  { id: 'camel_scout', type: 'unit', age: 1, building: 'stable', row: 3, special: true, variant: 'regional', prereqs: [], cost: { food: 70, gold: 30 } },
  { id: 'imp_camel', type: 'upgrade', age: 3, building: 'stable', row: 5, special: true, variant: 'regional', prereqs: ['heavycamel'], cost: { food: 1200, gold: 600 } },
  { id: 'steppe_lancer', type: 'unit', age: 2, building: 'stable', row: 4, special: true, variant: 'regional', prereqs: [], cost: { food: 70, gold: 45 } },
  { id: 'elite_steppe_lancer', type: 'upgrade', age: 3, building: 'stable', row: 4, special: true, variant: 'regional', prereqs: ['steppe_lancer'], cost: { food: 900, gold: 550 } },
  { id: 'xolotl_warrior', type: 'unit', age: 2, building: 'stable', row: 2, special: true, variant: 'regional', prereqs: [], cost: { food: 60, gold: 75 } },
  { id: 'shrivamsha', type: 'unit', age: 2, building: 'stable', row: 2, special: true, variant: 'unique', prereqs: [], cost: { food: 70, gold: 40 } },
  { id: 'elite_shrivamsha', type: 'upgrade', age: 3, building: 'stable', row: 2, special: true, variant: 'unique', prereqs: ['shrivamsha'], cost: { food: 600, gold: 400 } },
  { id: 'hei_guang', type: 'unit', age: 2, building: 'stable', row: 2, special: true, variant: 'regional', prereqs: [], cost: { food: 80, gold: 40 } },
  { id: 'heavy_hei_guang', type: 'upgrade', age: 3, building: 'stable', row: 2, special: true, variant: 'regional', prereqs: ['hei_guang'], cost: { food: 500, gold: 300 } },
  { id: 'tarkan_s', type: 'unit', age: 2, building: 'stable', row: 4, special: true, variant: 'unique', prereqs: [], cost: { food: 60, gold: 60 } },


  // ── SIEGE WORKSHOP ──────────────────────────────────────

  { id: 'batteringram', type: 'unit', age: 2, building: 'siege', row: 0, prereqs: [], cost: { wood: 160, gold: 75 } },
  { id: 'cappedram', type: 'upgrade', age: 3, building: 'siege', row: 0, prereqs: ['batteringram'], cost: { wood: 300, gold: 225 } },
  { id: 'siegeram', type: 'upgrade', age: 3, building: 'siege', row: 1, prereqs: ['cappedram'], cost: { wood: 500, gold: 250 } },

  { id: 'mangonel', type: 'unit', age: 2, building: 'siege', row: 1, prereqs: [], cost: { wood: 160, gold: 135 } },
  { id: 'onager', type: 'upgrade', age: 3, building: 'siege', row: 1, prereqs: ['mangonel'], cost: { wood: 375, gold: 200 } },
  { id: 'siegeonager', type: 'upgrade', age: 3, building: 'siege', row: 1, prereqs: ['onager'], cost: { wood: 850, gold: 750 } },

  { id: 'scorpion', type: 'unit', age: 2, building: 'siege', row: 2, prereqs: [], cost: { wood: 75, gold: 75 } },
  { id: 'heavyscorpion', type: 'upgrade', age: 3, building: 'siege', row: 2, prereqs: ['scorpion'], cost: { wood: 300, gold: 300 } },

  { id: 'bombcannon', type: 'unit', age: 3, building: 'siege', row: 3, prereqs: [], cost: { wood: 225, gold: 225 } },

  // ── Siege special / unique ───────────────────────────────
  { id: 'houfnice', type: 'upgrade', age: 3, building: 'siege', row: 3, special: true, variant: 'unique', prereqs: ['bombcannon'], cost: { food: 950, gold: 750 } },
  { id: 'traction_treb', type: 'unit', age: 3, building: 'siege', row: 3, special: true, variant: 'regional', prereqs: [], cost: { wood: 200, gold: 200 } },
  { id: 'mounted_treb', type: 'unit', age: 3, building: 'siege', row: 3, special: true, variant: 'unique', prereqs: [], cost: { wood: 200, gold: 200 } },
  { id: 'rocket_cart', type: 'unit', age: 2, building: 'siege', row: 1, special: true, variant: 'regional', prereqs: [], cost: { wood: 200, gold: 150 } },
  { id: 'heavy_rocket_cart', type: 'upgrade', age: 3, building: 'siege', row: 1, special: true, variant: 'regional', prereqs: ['rocket_cart'], cost: { food: 500, gold: 400 } },
  { id: 'flaming_camel', type: 'unit', age: 3, building: 'siege', row: 3, special: true, variant: 'unique', prereqs: [], cost: { food: 75, gold: 30 } },
  { id: 'armored_elephant', type: 'unit', age: 2, building: 'siege', row: 0, special: true, variant: 'regional', prereqs: [], cost: { food: 120, gold: 95 } },
  { id: 'siege_elephant', type: 'upgrade', age: 3, building: 'siege', row: 0, special: true, variant: 'regional', prereqs: ['armored_elephant'], cost: { food: 650, gold: 0 } },
  { id: 'war_chariot_s', type: 'unit', age: 2, building: 'siege', row: 2, special: true, variant: 'unique', prereqs: [], cost: { wood: 150, gold: 150 } },


  // ── BLACKSMITH ──────────────────────────────────────────

  { id: 'forging', type: 'tech', age: 1, building: 'blacksmith', row: 0, prereqs: [], cost: { food: 150 } },
  { id: 'ironcasting', type: 'tech', age: 2, building: 'blacksmith', row: 0, prereqs: ['forging'], cost: { food: 220, gold: 75 } },
  { id: 'blastfurnace', type: 'tech', age: 3, building: 'blacksmith', row: 0, prereqs: ['ironcasting'], cost: { food: 275, gold: 225 } },
  { id: 'scalemailarmor', type: 'tech', age: 1, building: 'blacksmith', row: 1, prereqs: [], cost: { food: 100 } },
  { id: 'chainmailarmor', type: 'tech', age: 2, building: 'blacksmith', row: 1, prereqs: ['scalemailarmor'], cost: { food: 200, gold: 100 } },
  { id: 'platemailarmor', type: 'tech', age: 3, building: 'blacksmith', row: 1, prereqs: ['chainmailarmor'], cost: { food: 300, gold: 200 } },
  { id: 'paddedarcharmor', type: 'tech', age: 1, building: 'blacksmith', row: 2, prereqs: [], cost: { food: 100 } },
  { id: 'leatherarcharmor', type: 'tech', age: 2, building: 'blacksmith', row: 2, prereqs: ['paddedarcharmor'], cost: { food: 150, gold: 100 } },
  { id: 'ringarcherarmor', type: 'tech', age: 3, building: 'blacksmith', row: 2, prereqs: ['leatherarcharmor'], cost: { food: 250, gold: 250 } },
  { id: 'scalebarding', type: 'tech', age: 1, building: 'blacksmith', row: 3, prereqs: [], cost: { food: 150 } },
  { id: 'chainbarding', type: 'tech', age: 2, building: 'blacksmith', row: 3, prereqs: ['scalebarding'], cost: { food: 250, gold: 130 } },
  { id: 'platebarding', type: 'tech', age: 3, building: 'blacksmith', row: 3, prereqs: ['chainbarding'], cost: { food: 350, gold: 200 } },
  { id: 'fletching', type: 'tech', age: 1, building: 'blacksmith', row: 4, prereqs: [], cost: { food: 100, gold: 50 } },
  { id: 'bodkinarrow', type: 'tech', age: 2, building: 'blacksmith', row: 4, prereqs: ['fletching'], cost: { food: 200, gold: 100 } },
  { id: 'bracer', type: 'tech', age: 3, building: 'blacksmith', row: 4, prereqs: ['bodkinarrow'], cost: { food: 300, gold: 200 } },


  // ── DOCK ────────────────────────────────────────────────

  { id: 'medium_warships', type: 'tech', age: 2, building: 'dock', row: 2, prereqs: [], cost: { wood: 150, gold: 100 } },
  { id: 'heavy_warships', type: 'tech', age: 3, building: 'dock', row: 2, prereqs: ['medium_warships'], cost: { wood: 400, gold: 315 } },
  { id: 'fishingship', type: 'unit', age: 0, building: 'dock', row: 0, prereqs: [], cost: { wood: 75 } },
  { id: 'transportship', type: 'unit', age: 1, building: 'dock', row: 1, prereqs: [], cost: { wood: 125, gold: 50 } },
  { id: 'tradecog', type: 'unit', age: 1, building: 'dock', row: 2, prereqs: [], cost: { wood: 80, gold: 80 } },

  { id: 'galley', type: 'unit', age: 1, building: 'dock', row: 4, prereqs: [], cost: { wood: 75, gold: 35 } },
  { id: 'wargalley', type: 'upgrade', age: 2, building: 'dock', row: 4, prereqs: ['galley'], cost: { food: 100, wood: 50 } },
  { id: 'galleon', type: 'upgrade', age: 3, building: 'dock', row: 4, prereqs: ['wargalley'], cost: { food: 400, gold: 300 } },

  { id: 'firegalley', type: 'unit', age: 1, building: 'dock', row: 3, prereqs: [], cost: { wood: 75, gold: 45 } },
  { id: 'fireship', type: 'upgrade', age: 2, building: 'dock', row: 3, prereqs: ['firegalley'], cost: { food: 150, wood: 100 } },
  { id: 'fastfireship', type: 'upgrade', age: 3, building: 'dock', row: 3, prereqs: ['fireship'], cost: { food: 150, wood: 100 } },

  { id: 'hulk', type: 'unit', age: 1, building: 'dock', row: 5, prereqs: [], cost: { wood: 90, gold: 30 } },
  { id: 'war_hulk', type: 'upgrade', age: 2, building: 'dock', row: 5, prereqs: ['hulk'], cost: { food: 100, wood: 50 } },
  { id: 'carrack', type: 'upgrade', age: 3, building: 'dock', row: 5, prereqs: ['war_hulk'], cost: { food: 400, gold: 300 } },

  { id: 'demoraft', type: 'unit', age: 1, building: 'dock', row: 6, prereqs: [], cost: { wood: 45, gold: 80 } },
  { id: 'demoship', type: 'upgrade', age: 2, building: 'dock', row: 6, prereqs: ['demoraft'], cost: { wood: 75, gold: 50 } },
  { id: 'heavydemo', type: 'upgrade', age: 3, building: 'dock', row: 6, prereqs: ['demoship'], cost: { food: 200, gold: 200 } },

  { id: 'cannongalleon', type: 'unit', age: 3, building: 'dock', row: 7, prereqs: [], cost: { wood: 200, gold: 150 } },
  { id: 'elitecannon', type: 'upgrade', age: 3, building: 'dock', row: 7, prereqs: ['cannongalleon'], cost: { food: 525, gold: 500 } },

  { id: 'shipwright', type: 'tech', age: 3, building: 'dock', row: 9, prereqs: [], cost: { food: 200, gold: 300 } },

  { id: 'fishing_lines', type: 'tech', age: 1, building: 'dock', row: 11, prereqs: [], cost: { wood: 100, gold: 100 } },
  { id: 'gillnets', type: 'tech', age: 2, building: 'dock', row: 11, prereqs: ['fishing_lines'], cost: { food: 150, gold: 200 } },

  // ── Dock special / unique ────────────────────────────────
  { id: 'dragon_ship', type: 'unit', age: 3, building: 'dock', row: 4, special: true, variant: 'unique', prereqs: ['fireship'], cost: { wood: 75, gold: 45 } },
  { id: 'dromon', type: 'unit', age: 3, building: 'dock', row: 7, special: true, variant: 'regional', prereqs: [], cost: { wood: 175, gold: 150 } },
  { id: 'lou_chuan', type: 'unit', age: 3, building: 'dock', row: 7, special: true, variant: 'regional', prereqs: [], cost: { wood: 200, gold: 150 } },
  { id: 'catapult_gall', type: 'unit', age: 3, building: 'dock', row: 7, special: true, variant: 'regional', prereqs: [], cost: { wood: 200, gold: 150 } },
  { id: 'turtle_ship', type: 'unit', age: 2, building: 'dock', row: 6, special: true, variant: 'unique', prereqs: [], cost: { wood: 180, gold: 180 } },
  { id: 'longboat', type: 'unit', age: 2, building: 'dock', row: 6, special: true, variant: 'unique', prereqs: [], cost: { wood: 100, gold: 50 } },
  { id: 'caravel_d', type: 'unit', age: 2, building: 'dock', row: 6, special: true, variant: 'unique', prereqs: [], cost: { wood: 90, gold: 40 } },
  { id: 'thirisadai', type: 'unit', age: 3, building: 'dock', row: 10, special: true, variant: 'unique', prereqs: [], cost: { wood: 300, gold: 250 } },


  // ── UNIVERSITY ──────────────────────────────────────────────
  { id: 'masonry', type: 'tech', age: 2, building: 'university', row: 0, prereqs: [], cost: { wood: 175 } },
  { id: 'architecture', type: 'tech', age: 3, building: 'university', row: 0, prereqs: ['masonry'], cost: { wood: 175, gold: 150 } },
  { id: 'ballistics', type: 'tech', age: 2, building: 'university', row: 1, prereqs: [], cost: { food: 300, gold: 175 } },
  { id: 'chemistry', type: 'tech', age: 3, building: 'university', row: 1, prereqs: ['ballistics'], cost: { food: 300, gold: 200 } },
  { id: 'murderhole', type: 'tech', age: 2, building: 'university', row: 2, prereqs: [], cost: { food: 200, stone: 75 } },
  { id: 'siegeengineers', type: 'tech', age: 3, building: 'university', row: 2, prereqs: ['murderhole'], cost: { food: 600, wood: 500 } },
  { id: 'treadmillcrane', type: 'tech', age: 2, building: 'university', row: 3, prereqs: [], cost: { food: 300, wood: 400 } },
  { id: 'heatedshot', type: 'tech', age: 2, building: 'university', row: 4, prereqs: [], cost: { food: 350, gold: 100 } },
  { id: 'careening', type: 'tech', age: 2, building: 'university', row: 5, prereqs: [], cost: { food: 250, gold: 150 } },
  { id: 'drydock', type: 'tech', age: 3, building: 'university', row: 5, prereqs: ['careening'], cost: { food: 600, gold: 400 } },
  { id: 'clinker_construction', type: 'tech', age: 2, building: 'university', row: 6, prereqs: [], cost: { wood: 200, gold: 100 } },
  { id: 'carvel_hull', type: 'tech', age: 3, building: 'university', row: 6, prereqs: ['clinker_construction'], cost: { wood: 300, gold: 200 } },
  { id: 'siphons', type: 'tech', age: 2, building: 'university', row: 7, prereqs: [], cost: { wood: 150, gold: 100 } },
  { id: 'incendiaries', type: 'tech', age: 3, building: 'university', row: 7, prereqs: ['siphons'], cost: { wood: 250, gold: 200 } },


  // ── Torres ────────────────────────────────────
  { id: 'watchtower', type: 'tech', building: 'outpost', name: 'Torre Vigía', icon: '🏗️', age: 1,  row: 0, prereqs: [],cost: { wood: 35, stone: 125 }},
  { id: 'guardtower_b', type: 'tech', name: 'Torre Guardia', icon: '🏗️', row: 0,  prereqs: ['watchtower'], cost: { wood: 35, stone: 125 }},
  { id: 'keep_b', type: 'tech', name: 'Torreón', icon: '🏗️', age: 3, row: 0, prereqs: ['guardtower_b'] ,cost: { wood: 35, stone: 125 } },
  { id: 'bombardtower_b', type: 'tech', name: 'Torre Bombarda', icon: '💣', age: 3, row: 0, cost: { gold: 100, stone: 125 } },


  // ── MONASTERY ───────────────────────────────────────────

  { id: 'monk', type: 'unit', age: 2, building: 'monastery', row: 0, prereqs: [], cost: { gold: 100 } },
  { id: 'redemption', type: 'tech', age: 2, building: 'monastery', row: 1, prereqs: [], cost: { gold: 475 } },
  { id: 'atonement', type: 'tech', age: 2, building: 'monastery', row: 2, prereqs: [], cost: { gold: 325 } },
  { id: 'heresy', type: 'tech', age: 2, building: 'monastery', row: 3, prereqs: [], cost: { gold: 1000 } },
  { id: 'sanctity', type: 'tech', age: 2, building: 'monastery', row: 4, prereqs: [], cost: { gold: 120 } },
  { id: 'fervor', type: 'tech', age: 2, building: 'monastery', row: 5, prereqs: [], cost: { gold: 140 } },
  { id: 'herbalmedicine', type: 'tech', age: 2, building: 'monastery', row: 6, prereqs: [], cost: { gold: 350 } },
  { id: 'illumination', type: 'tech', age: 3, building: 'monastery', row: 1, prereqs: ['redemption'], cost: { food: 120, gold: 150 } },
  { id: 'blockprinting', type: 'tech', age: 3, building: 'monastery', row: 2, prereqs: ['atonement'], cost: { gold: 200 } },
  { id: 'theocracy', type: 'tech', age: 3, building: 'monastery', row: 4, prereqs: ['sanctity'], cost: { food: 200, gold: 250 } },
  { id: 'faith', type: 'tech', age: 3, building: 'monastery', row: 5, prereqs: ['fervor'], cost: { food: 750, gold: 900 } },

  // ── Monastery special / unique ───────────────────────────
  { id: 'warrior_priest', type: 'unit', age: 2, building: 'monastery', row: 8, special: true, variant: 'unique', prereqs: [], cost: { gold: 100 } },
  { id: 'missionary', type: 'unit', age: 2, building: 'monastery', row: 7, special: true, variant: 'unique', prereqs: [], cost: { gold: 100 } },
  { id: 'fortified_church', type: 'unit', age: 2, building: 'monastery', row: 9, special: true, variant: 'regional', prereqs: [], cost: { wood: 200 } },


  // ── CASTLE ──────────────────────────────────────────────

  { id: 'trebuchet', type: 'unit', age: 2, building: 'castle', row: 0, prereqs: [], cost: { food: 200, gold: 200 } },
  { id: 'petard', type: 'unit', age: 2, building: 'castle', row: 1, prereqs: [], cost: { food: 65, gold: 35 } },
  { id: 'uniqueunit', type: 'unique', age: 2, building: 'castle', row: 2, prereqs: [], cost: { food: 0, gold: 0 } },
  { id: 'eliteunique', type: 'unique', age: 3, building: 'castle', row: 2, prereqs: ['uniqueunit'], cost: { food: 0, gold: 0 } },
  { id: 'uniquetech1', type: 'unique', age: 2, building: 'castle', row: 3, prereqs: [], cost: { food: 300, gold: 300 } },
  { id: 'uniquetech2', type: 'unique', age: 3, building: 'castle', row: 3, prereqs: ['uniquetech1'], cost: { food: 500, gold: 500 } },
  { id: 'hoardings', type: 'tech', age: 3, building: 'castle', row: 4, prereqs: [], cost: { food: 400, stone: 400 } },
  { id: 'conscription', type: 'tech', age: 3, building: 'castle', row: 5, prereqs: [], cost: { food: 150, gold: 150 } },
  { id: 'sappers', type: 'tech', age: 3, building: 'castle', row: 6, prereqs: [], cost: { food: 75, gold: 75 } },

  // ── Castle special / unique ──────────────────────────────
  { id: 'kipchak_c', type: 'unit', age: 3, building: 'castle', row: 6, special: true, variant: 'unique', prereqs: [], cost: { food: 40, gold: 35 } },
  { id: 'krepost', type: 'unit', age: 2, building: 'castle', row: 7, special: true, variant: 'unique', prereqs: [], cost: { stone: 350 } },
  { id: 'donjon', type: 'unit', age: 1, building: 'barracks', row: 5, special: true, variant: 'unique', prereqs: [], cost: { wood: 75, stone: 175 } },


  // ── MARKET ──────────────────────────────────────────────

  { id: 'tradecart', type: 'unit', age: 1, building: 'market', row: 0, prereqs: [], cost: { food: 100, wood: 50 } },
  { id: 'coinage', type: 'tech', age: 2, building: 'market', row: 1, prereqs: [], cost: { food: 200, gold: 50 } },
  { id: 'banking', type: 'tech', age: 3, building: 'market', row: 1, prereqs: ['coinage'], cost: { food: 300, gold: 200 } },
  { id: 'guilds', type: 'tech', age: 3, building: 'market', row: 2, prereqs: [], cost: { food: 150, gold: 100 } },
  { id: 'feitoria', type: 'unit', age: 3, building: 'market', row: 3, special: true, variant: 'unique', prereqs: [], cost: { wood: 250, gold: 250, stone: 250 } },
  { id: 'caravanserai', type: 'unit', age: 3, building: 'market', row: 4, special: true, variant: 'regional', prereqs: [], cost: { wood: 150 } },


  // ── TOWN CENTER ─────────────────────────────────────────

  { id: 'villager', type: 'unit', age: 0, building: 'tc', row: 0, prereqs: [], cost: { food: 50 } },
  { id: 'loom', type: 'tech', age: 0, building: 'tc', row: 1, prereqs: [], cost: { gold: 50 } },
  { id: 'wheelbarrow', type: 'tech', age: 1, building: 'tc', row: 0, prereqs: [], cost: { food: 175, wood: 50 } },
  { id: 'townwatch', type: 'tech', age: 1, building: 'tc', row: 1, prereqs: [], cost: { food: 75 } },
  { id: 'handcart', type: 'tech', age: 2, building: 'tc', row: 0, prereqs: ['wheelbarrow'], cost: { food: 300, wood: 200 } },
  { id: 'townpatrol', type: 'tech', age: 2, building: 'tc', row: 1, prereqs: ['townwatch'], cost: { food: 500 } },


  // ── MILL ────────────────────────────────────────────────

  { id: 'horsecollar', type: 'tech', age: 1, building: 'mill', row: 0, prereqs: [], cost: { food: 75, wood: 75 } },
  { id: 'heavyplow', type: 'tech', age: 2, building: 'mill', row: 0, prereqs: ['horsecollar'], cost: { food: 125, wood: 125 } },
  { id: 'croprotation', type: 'tech', age: 3, building: 'mill', row: 0, prereqs: ['heavyplow'], cost: { food: 250, wood: 250, gold: 60 } },
  { id: 'folwark', type: 'unit', age: 1, building: 'mill', row: 1, special: true, variant: 'unique', prereqs: [], cost: { wood: 100 } },
  { id: 'mule_cart', type: 'unit', age: 0, building: 'lumber', row: 1, special: true, variant: 'regional', prereqs: [], cost: { wood: 100, food: 20 } },


  // ── LUMBER CAMP ─────────────────────────────────────────

  { id: 'doublebitaxe', type: 'tech', age: 1, building: 'lumber', row: 0, prereqs: [], cost: { food: 100, wood: 50 } },
  { id: 'bowsaw', type: 'tech', age: 2, building: 'lumber', row: 0, prereqs: ['doublebitaxe'], cost: { food: 150, wood: 100 } },
  { id: 'twomansaw', type: 'tech', age: 3, building: 'lumber', row: 0, prereqs: ['bowsaw'], cost: { food: 300, wood: 200 } },


  // ── MINING CAMP ─────────────────────────────────────────

  { id: 'goldmining', type: 'tech', age: 1, building: 'mining', row: 0, prereqs: [], cost: { food: 100, wood: 75 } },
  { id: 'goldshaft', type: 'tech', age: 2, building: 'mining', row: 0, prereqs: ['goldmining'], cost: { food: 200, wood: 100 } },
  { id: 'stonemining', type: 'tech', age: 1, building: 'mining', row: 1, prereqs: [], cost: { food: 100, wood: 75 } },
  { id: 'stoneshaft', type: 'tech', age: 2, building: 'mining', row: 1, prereqs: ['stonemining'], cost: { food: 200, wood: 100 } },

  // ── TAHSILI ─────────────────────────────────────────
  // Lumber camp techs under Tahsili
  { id: 'doublebitaxe_t', type: 'tech', age: 1, building: 'tahsili', row: 0, prereqs: [], cost: { food: 100, wood: 50 } },
  { id: 'bowsaw_t', type: 'tech', age: 2, building: 'tahsili', row: 0, prereqs: ['doublebitaxe_t'], cost: { food: 150, wood: 100 } },
  { id: 'twomansaw_t', type: 'tech', age: 3, building: 'tahsili', row: 0, prereqs: ['bowsaw_t'], cost: { food: 300, wood: 200 } },

  // Mining camp techs under Tahsili
  { id: 'goldmining_t', type: 'tech', age: 1, building: 'tahsili', row: 1, prereqs: [], cost: { food: 100, wood: 75 } },
  { id: 'goldshaft_t', type: 'tech', age: 2, building: 'tahsili', row: 1, prereqs: ['goldmining_t'], cost: { food: 200, wood: 100 } },
  { id: 'stonemining_t', type: 'tech', age: 1, building: 'tahsili', row: 2, prereqs: [], cost: { food: 100, wood: 75 } },
  { id: 'stoneshaft_t', type: 'tech', age: 2, building: 'tahsili', row: 2, prereqs: ['stonemining_t'], cost: { food: 200, wood: 100 } },
];