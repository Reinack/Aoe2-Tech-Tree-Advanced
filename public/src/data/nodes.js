export const NODES = [

  // ── BARRACKS ────────────────────────────────────────────
  { id: 'militia', type: 'unit', age: 0, building: 'barracks', row: 1, col: 0, prereqs: [], train_cost: { food: 60, gold: 20 } },
  { id: 'manatarms', type: 'upgrade', age: 1, building: 'barracks', row: 2, col: 0, prereqs: ['militia'], research_cost: { food: 100, gold: 40 }, train_cost: { food: 60, gold: 20 } },
  { id: 'longsword', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 0, prereqs: ['manatarms'], research_cost: { food: 150, gold: 65 }, train_cost: { food: 60, gold: 20 } },
  { id: 'twohanded', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 0, prereqs: ['longsword'], research_cost: { food: 200, gold: 100 }, train_cost: { food: 60, gold: 20 } },
  { id: 'champion', type: 'upgrade', age: 3, building: 'barracks', row: 7, col: 0, prereqs: ['twohanded'], research_cost: { food: 650, gold: 350 }, train_cost: { food: 60, gold: 20 } },
  { id: 'spearman', type: 'unit', age: 1, building: 'barracks', row: 2, col: 1, prereqs: [], train_cost: { food: 35, wood: 25 } },
  { id: 'pikeman', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 1, prereqs: ['spearman'], research_cost: { food: 160, gold: 60 }, train_cost: { food: 35, wood: 25 } },
  { id: 'halberdier', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 1, prereqs: ['pikeman'], research_cost: { food: 75, gold: 25 }, train_cost: { food: 35, wood: 25 } },
  { id: 'squires', type: 'tech', age: 2, building: 'barracks', row: 5, col: 5, prereqs: [], research_cost: { food: 100 } },
  { id: 'arson', type: 'tech', age: 1, building: 'barracks', row: 2, col: 5, prereqs: [], research_cost: { food: 75, gold: 25 } },
  { id: 'gambesons', type: 'tech', age: 2, building: 'barracks', row: 4, col: 5, prereqs: [], research_cost: { food: 100, gold: 100 } },

  // ── Eagle Line (Mesoamerican regional) ──────────────────
  { id: 'eaglescout', type: 'unit', age: 1, building: 'barracks', row: 2, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 20, gold: 50 } },
  { id: 'eaglewarrior', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 3, special: true, variant: 'regional', prereqs: ['eaglescout'], research_cost: { food: 200, gold: 200 }, train_cost: { food: 20, gold: 50 } },
  { id: 'eliteeagle', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['eaglewarrior'], research_cost: { food: 800, gold: 500 }, train_cost: { food: 20, gold: 50 } },

  // ── Champi Line (South American regional) ───────────────
  { id: 'champiscout', type: 'unit', age: 0, building: 'barracks', row: 1, col: 0, special: true, variant: 'regional', prereqs: [], train_cost: { food: 50, gold: 25 } },
  { id: 'champirunner', type: 'upgrade', age: 1, building: 'barracks', row: 2, col: 0, special: true, variant: 'regional', prereqs: ['champiscout'], research_cost: { food: 120, gold: 60 }, train_cost: { food: 50, gold: 25 } },
  { id: 'champiwarrior', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 0, special: true, variant: 'regional', prereqs: ['champirunner'], research_cost: { food: 200, gold: 175 }, train_cost: { food: 50, gold: 25 } },
  { id: 'elitechampi', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 0, special: true, variant: 'regional', prereqs: ['champiwarrior'], research_cost: { food: 650, gold: 450 }, train_cost: { food: 50, gold: 25 } },

  // ── Barracks special / unique ────────────────────────────
  { id: 'legionary', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 0, special: true, variant: 'unique', prereqs: ['longsword'], research_cost: { food: 300, gold: 200 }, train_cost: { food: 60, gold: 20 } },
  { id: 'fire_lancer', type: 'unit', age: 2, building: 'barracks', row: 4, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 45, gold: 45 } },
  { id: 'elite_fire_lancer', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 2, special: true, variant: 'regional', prereqs: ['fire_lancer'], research_cost: { food: 750, gold: 400 }, train_cost: { wood: 45, gold: 45 } },
  { id: 'flemish_militia', type: 'unit', age: 1, building: 'barracks', row: 2, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 30, gold: 25 } },
  { id: 'jian_swordsman', type: 'unit', age: 2, building: 'barracks', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 45, gold: 50 } },
  { id: 'temple_guard', type: 'unit', age: 2, building: 'barracks', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 50, gold: 30 } },
  { id: 'ibirapema', type: 'unit', age: 2, building: 'barracks', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 40, gold: 20 } },
  { id: 'condottiero', type: 'unit', age: 3, building: 'barracks', row: 6, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 50, gold: 35 } },
  { id: 'huskarl_b', type: 'unit', age: 2, building: 'barracks', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 52, gold: 26 } },


  // ── ARCHERY RANGE ───────────────────────────────────────
  { id: 'archer', type: 'unit', age: 1, building: 'archery', row: 3, col: 0, prereqs: [], train_cost: { wood: 25, gold: 45 } },
  { id: 'crossbow', type: 'upgrade', age: 2, building: 'archery', row: 4, col: 0, prereqs: ['archer'], research_cost: { food: 125, gold: 75 }, train_cost: { wood: 25, gold: 45 } },
  { id: 'arbalester', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 0, prereqs: ['crossbow'], research_cost: { food: 300, gold: 700 }, train_cost: { wood: 25, gold: 45 } },
  { id: 'skirmisher', type: 'unit', age: 1, building: 'archery', row: 3, col: 1, prereqs: [], train_cost: { food: 35, wood: 25 } },
  { id: 'eliteskirm', type: 'upgrade', age: 2, building: 'archery', row: 4, col: 1, prereqs: ['skirmisher'], research_cost: { food: 240, gold: 60 }, train_cost: { food: 35, wood: 25 } },
  { id: 'handcannon', type: 'unit', age: 3, building: 'archery', row: 6, col: 1, prereqs: [], train_cost: { food: 45, gold: 50 } },
  { id: 'cavarcher', type: 'unit', age: 2, building: 'archery', row: 4, col: 2, prereqs: [], train_cost: { wood: 40, gold: 60 } },
  { id: 'hcavarcher', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 2, prereqs: ['cavarcher'], research_cost: { food: 400, gold: 175 }, train_cost: { wood: 40, gold: 60 } },
  { id: 'thumbring', type: 'tech', age: 2, building: 'archery', row: 4, col: 4, prereqs: [], research_cost: { food: 300, wood: 250 } },
  { id: 'parthian', type: 'tech', age: 3, building: 'archery', row: 6, col: 4, prereqs: [], research_cost: { food: 200, gold: 250 } },

  // ── Archery Range special / unique ──────────────────────
  { id: 'imp_skirmisher', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 1, special: true, variant: 'unique', prereqs: ['eliteskirm'], research_cost: { food: 300, gold: 450 }, train_cost: { food: 35, wood: 25 } },
  { id: 'elephant_archer', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 100, gold: 70 } },
  { id: 'elite_elephant_archer', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['elephant_archer'], research_cost: { food: 1000, gold: 800 }, train_cost: { food: 100, gold: 70 } },
  { id: 'grenadier', type: 'unit', age: 2, building: 'archery', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 35, gold: 65 } },
  { id: 'xianbei_raider', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 60, gold: 25 } },
  { id: 'bolas_rider', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 45, gold: 50 } },
  { id: 'elite_bolas_rider', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 3, special: true, variant: 'unique', prereqs: ['bolas_rider'], research_cost: { food: 500, gold: 450 } },
  { id: 'slinger', type: 'unit', age: 2, building: 'archery', row: 4, col: 4, special: true, variant: 'regional', prereqs: [], train_cost: { food: 70, wood: 10 } },
  { id: 'genitour', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 50, wood: 35 } },


  // ── STABLE ──────────────────────────────────────────────
  { id: 'scout', type: 'unit', age: 1, building: 'stable', row: 3, col: 0, prereqs: [], train_cost: { food: 80 } },
  { id: 'lightcav', type: 'upgrade', age: 2, building: 'stable', row: 4, col: 0, prereqs: ['scout'], research_cost: { food: 150, gold: 75 }, train_cost: { food: 80 } },
  { id: 'hussar', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 0, prereqs: ['lightcav'], research_cost: { food: 250, gold: 300 }, train_cost: { food: 80 } },
  { id: 'knight', type: 'unit', age: 2, building: 'stable', row: 4, col: 1, prereqs: [], train_cost: { food: 60, gold: 75 } },
  { id: 'cavalier', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 1, prereqs: ['knight'], research_cost: { food: 300, gold: 300 }, train_cost: { food: 60, gold: 75 } },
  { id: 'paladin', type: 'upgrade', age: 3, building: 'stable', row: 7, col: 1, prereqs: ['cavalier'], research_cost: { food: 750, gold: 550 }, train_cost: { food: 60, gold: 75 } },
  { id: 'camel', type: 'unit', age: 2, building: 'stable', row: 4, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 55, gold: 60 } },
  { id: 'heavycamel', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 2, special: true, variant: 'regional', prereqs: ['camel'], research_cost: { food: 325, gold: 360 }, train_cost: { food: 55, gold: 60 } },
  { id: 'battleeleph', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 100, gold: 70 } },
  { id: 'eliteeleph', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['battleeleph'], research_cost: { food: 1100, gold: 700 }, train_cost: { food: 100, gold: 70 } },
  { id: 'bloodlines', type: 'tech', age: 2, building: 'stable', row: 3, col: 4, prereqs: [], research_cost: { food: 150, gold: 100 } },
  { id: 'husbandry', type: 'tech', age: 3, building: 'stable', row: 4, col: 4, prereqs: [], research_cost: { food: 150 } },

  // ── Stable special / unique ──────────────────────────────
  { id: 'winged_hussar', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 0, special: true, variant: 'regional', prereqs: ['lightcav'], research_cost: { food: 600, gold: 400 }, train_cost: { food: 80 } },
  { id: 'savar', type: 'upgrade', age: 3, building: 'stable', row: 7, col: 1, special: true, variant: 'unique', prereqs: ['cavalier'], research_cost: { food: 1000, gold: 600 }, train_cost: { food: 60, gold: 75 } },
  { id: 'camel_scout', type: 'unit', age: 1, building: 'stable', row: 3, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 55, gold: 60 } },
  { id: 'imp_camel', type: 'upgrade', age: 3, building: 'stable', row: 7, col: 2, special: true, variant: 'regional', prereqs: ['heavycamel'], research_cost: { food: 1000, gold: 500 }, train_cost: { food: 55, gold: 60 } },
  { id: 'steppe_lancer', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 70, gold: 40 } },
  { id: 'elite_steppe_lancer', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['steppe_lancer'], research_cost: { food: 600, gold: 550 }, train_cost: { food: 70, gold: 40 } },
  { id: 'xolotl_warrior', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 60, gold: 75 } },
  { id: 'shrivamsha', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 70, gold: 30 } },
  { id: 'elite_shrivamsha', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 3, special: true, variant: 'unique', prereqs: ['shrivamsha'], research_cost: { food: 600, gold: 400 }, train_cost: { food: 70, gold: 30 } },
  { id: 'hei_guang', type: 'unit', age: 2, building: 'stable', row: 4, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 65, gold: 65 } },
  { id: 'heavy_hei_guang', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 2, special: true, variant: 'regional', prereqs: ['hei_guang'], research_cost: { food: 350, gold: 250 }, train_cost: { food: 65, gold: 65 } },
  { id: 'tarkan_s', type: 'unit', age: 2, building: 'stable', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 60, gold: 60 } },


  // ── SIEGE WORKSHOP ──────────────────────────────────────
  { id: 'batteringram', type: 'unit', age: 2, building: 'siege', row: 5, col: 0, prereqs: [], train_cost: { wood: 160, gold: 75 } },
  { id: 'cappedram', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 0, prereqs: ['batteringram'], research_cost: { food: 300 }, research_time: 50, train_cost: { wood: 160, gold: 75 } },
  { id: 'siegeram', type: 'upgrade', age: 3, building: 'siege', row: 7, col: 1, prereqs: ['cappedram'], research_cost: { food: 1000 }, research_time: 75, train_cost: { wood: 160, gold: 75 } },
  { id: 'mangonel', type: 'unit', age: 2, building: 'siege', row: 5, col: 1, prereqs: [], train_cost: { wood: 160, gold: 135 } },
  { id: 'onager', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 1, prereqs: ['mangonel'], research_cost: { food: 800, gold: 500 }, research_time: 75, train_cost: { wood: 160, gold: 135 } },
  { id: 'siegeonager', type: 'upgrade', age: 3, building: 'siege', row: 7, col: 1, prereqs: ['onager'], research_cost: { food: 1450, gold: 1000 }, research_time: 150, train_cost: { wood: 160, gold: 135 } },
  { id: 'scorpion', type: 'unit', age: 2, building: 'siege', row: 5, col: 2, prereqs: [], train_cost: { wood: 75, gold: 75 } },
  { id: 'heavyscorpion', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 2, prereqs: ['scorpion'], research_cost: { food: 800, wood: 750 }, research_time: 50, train_cost: { wood: 75, gold: 75 } },
  { id: 'bombcannon', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, prereqs: [], train_cost: { wood: 225, gold: 225 } },
  { id: 'siegetower', type: 'unit', age: 2, building: 'siege', row: 5, col: 3, prereqs: [], train_cost: { wood: 200, gold: 160 } },

  // ── Siege special / unique ───────────────────────────────
  { id: 'houfnice', type: 'upgrade', age: 3, building: 'siege', row: 7, col: 3, special: true, variant: 'unique', prereqs: ['bombcannon'], research_cost: { food: 1100, gold: 800 }, research_time: 140, train_cost: { wood: 225, gold: 225 } },
  { id: 'traction_treb', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 175, gold: 210 } },
  { id: 'mounted_treb', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 200, gold: 200 } },
  { id: 'rocket_cart', type: 'unit', age: 2, building: 'siege', row: 5, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 135, gold: 155 } },
  { id: 'heavy_rocket_cart', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 1, special: true, variant: 'regional', prereqs: ['rocket_cart'], research_cost: { wood: 800, gold: 600 }, train_cost: { wood: 135, gold: 155 } },
  { id: 'flaming_camel', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 75, gold: 30 } },
  { id: 'armored_elephant', type: 'unit', age: 2, building: 'siege', row: 5, col: 0, special: true, variant: 'regional', prereqs: [], train_cost: { food: 120, gold: 95 } },
  { id: 'siege_elephant', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 0, special: true, variant: 'regional', prereqs: ['armored_elephant'], research_cost: { food: 650, gold: 0 }, train_cost: { food: 120, gold: 95 } },
  { id: 'war_chariot_s', type: 'unit', age: 2, building: 'siege', row: 5, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 65, gold: 90 } },


  // ── BLACKSMITH ──────────────────────────────────────────
  { id: 'forging', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 0, prereqs: [], research_cost: { food: 150 } },
  { id: 'ironcasting', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 0, prereqs: ['forging'], research_cost: { food: 220, gold: 120 } },
  { id: 'blastfurnace', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 0, prereqs: ['ironcasting'], research_cost: { food: 275, gold: 225 } },
  { id: 'scalemailarmor', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 1, prereqs: [], research_cost: { food: 100 } },
  { id: 'chainmailarmor', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 1, prereqs: ['scalemailarmor'], research_cost: { food: 200, gold: 100 } },
  { id: 'platemailarmor', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 1, prereqs: ['chainmailarmor'], research_cost: { food: 300, gold: 150 } },
  { id: 'paddedarcharmor', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 2, prereqs: [], research_cost: { food: 100 } },
  { id: 'leatherarcharmor', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 2, prereqs: ['paddedarcharmor'], research_cost: { food: 150, gold: 150 } },
  { id: 'ringarcherarmor', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 2, prereqs: ['leatherarcharmor'], research_cost: { food: 250, gold: 250 } },
  { id: 'scalebarding', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 3, prereqs: [], research_cost: { food: 150 } },
  { id: 'chainbarding', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 3, prereqs: ['scalebarding'], research_cost: { food: 250, gold: 150 } },
  { id: 'platebarding', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 3, prereqs: ['chainbarding'], research_cost: { food: 350, gold: 200 } },
  { id: 'fletching', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 4, prereqs: [], research_cost: { food: 100, gold: 50 } },
  { id: 'bodkinarrow', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 4, prereqs: ['fletching'], research_cost: { food: 200, gold: 100 } },
  { id: 'bracer', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 4, prereqs: ['bodkinarrow'], research_cost: { food: 300, gold: 200 } },


  // ── DOCK ────────────────────────────────────────────────

  { id: 'medium_warships', type: 'tech', age: 2, building: 'dock', row: 4, col: 5, prereqs: [], research_cost: { wood: 150, gold: 100 } },
  { id: 'heavy_warships', type: 'tech', age: 3, building: 'dock', row: 6, col: 5, prereqs: ['medium_warships'], research_cost: { wood: 400, gold: 315 } },
  { id: 'fishingship', type: 'unit', age: 0, building: 'dock', row: 1, col: 0, prereqs: [], train_cost: { wood: 75 } },
  { id: 'transportship', type: 'unit', age: 0, building: 'dock', row: 1, col: 1, prereqs: [], train_cost: { wood: 125, gold: 50 } },
  { id: 'tradecog', type: 'unit', age: 1, building: 'dock', row: 2, col: 5, prereqs: [], train_cost: { wood: 100, gold: 50 } },

  { id: 'galley', type: 'unit', age: 1, building: 'dock', row: 2, col: 2, prereqs: [], train_cost: { wood: 90, gold: 30 } },
  { id: 'wargalley', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 2, prereqs: ['galley', 'medium_warships'], research_cost: { wood: 150, gold: 100 }, research_time: 50, train_cost: { wood: 90, gold: 30 } },
  { id: 'galleon', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 2, prereqs: ['wargalley'], research_cost: { food: 400, gold: 315 }, train_cost: { wood: 90, gold: 30 } },

  { id: 'firegalley', type: 'unit', age: 1, building: 'dock', row: 2, col: 1, prereqs: [], train_cost: { wood: 75, gold: 45 } },
  { id: 'fireship', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 1, prereqs: ['firegalley'], research_cost: { food: 230, gold: 100 }, train_cost: { wood: 75, gold: 45 } },
  { id: 'fastfireship', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 1, prereqs: ['fireship'], research_cost: { food: 280, gold: 250 }, train_cost: { wood: 75, gold: 45 } },

  { id: 'hulk', type: 'unit', age: 1, building: 'dock', row: 2, col: 3, prereqs: [], train_cost: { wood: 75, gold: 35 } },
  { id: 'war_hulk', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 3, prereqs: ['hulk', 'medium_warships'], research_cost: { wood: 150, gold: 100 }, research_time: 50, train_cost: { wood: 75, gold: 35 } },
  { id: 'carrack', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 3, prereqs: ['war_hulk'], research_cost: { food: 400, gold: 300 }, train_cost: { wood: 75, gold: 35 } },

  { id: 'demoraft', type: 'unit', age: 1, building: 'dock', row: 2, col: 4, prereqs: [], train_cost: { wood: 70, gold: 50 } },
  { id: 'demoship', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 4, prereqs: ['demoraft'], research_cost: { food: 230, gold: 100 }, train_cost: { wood: 70, gold: 50 } },
  { id: 'heavydemo', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 4, prereqs: ['demoship'], research_cost: { food: 200, gold: 200 }, train_cost: { wood: 70, gold: 50 } },

  { id: 'cannongalleon', type: 'unit', age: 3, building: 'dock', row: 6, col: 6, prereqs: [], train_cost: { wood: 200, gold: 150 } },
  { id: 'elitecannon', type: 'upgrade', age: 3, building: 'dock', row: 7, col: 6, prereqs: ['cannongalleon'], research_cost: { food: 525, gold: 500 }, train_cost: { wood: 200, gold: 150 } },


  { id: 'fishing_lines', type: 'tech', age: 1, building: 'dock', row: 3, col: 0, prereqs: [], research_cost: { food: 50, wood: 100 } },
  { id: 'gillnets', type: 'tech', age: 2, building: 'dock', row: 4, col: 0, prereqs: ['fishing_lines'], research_cost: { food: 150, wood: 200 } },

  // ── Dock special / unique ────────────────────────────────
  { id: 'dragon_ship', type: 'unit', age: 3, building: 'dock', row: 6, col: 1, special: true, variant: 'unique', prereqs: ['fireship'], train_cost: { wood: 75, gold: 45 } },
  { id: 'dromon', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 175, gold: 150 } },
  { id: 'lou_chuan', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 250, gold: 225 } },
  { id: 'catapult_gall', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 200, gold: 150 } },
  { id: 'turtle_ship', type: 'unit', age: 2, building: 'dock', row: 4, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 180, gold: 180 } },
  { id: 'longboat', type: 'unit', age: 2, building: 'dock', row: 4, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 75, gold: 40 } },
  { id: 'caravel_d', type: 'unit', age: 2, building: 'dock', row: 4, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 90, gold: 40 } },
  { id: 'thirisadai', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 300, gold: 250 } },


  // ── UNIVERSITY ──────────────────────────────────────────────
  { id: 'masonry', type: 'tech', age: 2, building: 'university', row: 5, col: 0, prereqs: [], research_cost: { food: 150, wood: 175 } },
  { id: 'architecture', type: 'tech', age: 3, building: 'university', row: 6, col: 0, prereqs: ['masonry'], research_cost: { food: 300, wood: 200 } },
  { id: 'ballistics', type: 'tech', age: 2, building: 'university', row: 5, col: 1, prereqs: [], research_cost: { wood: 300, gold: 175 } },
  { id: 'chemistry', type: 'tech', age: 3, building: 'university', row: 6, col: 1, prereqs: ['ballistics'], research_cost: { food: 300, gold: 200 } },
  { id: 'murderhole', type: 'tech', age: 2, building: 'university', row: 5, col: 2, prereqs: [], research_cost: { food: 200, stone: 100 } },
  { id: 'siegeengineers', type: 'tech', age: 3, building: 'university', row: 6, col: 2, prereqs: ['murderhole'], research_cost: { food: 500, wood: 600 } },
  { id: 'treadmillcrane', type: 'tech', age: 2, building: 'university', row: 5, col: 3, prereqs: [], research_cost: { wood: 200, stone: 50 } },
  { id: 'heatedshot', type: 'tech', age: 2, building: 'university', row: 5, col: 4, prereqs: [], research_cost: { food: 350, gold: 100 } },
  { id: 'careening', type: 'tech', age: 2, building: 'university', row: 5, col: 5, prereqs: [], research_cost: { food: 100, gold: 200 } },
  { id: 'drydock', type: 'tech', age: 3, building: 'university', row: 6, col: 5, prereqs: ['careening'], research_cost: { food: 200, gold: 400 } },
  { id: 'clinker_construction', type: 'tech', age: 2, building: 'university', row: 5, col: 6, prereqs: [], research_cost: { food: 150, wood: 100 } },
  { id: 'carvel_hull', type: 'tech', age: 3, building: 'university', row: 6, col: 6, prereqs: ['clinker_construction'], research_cost: { food: 150, wood: 100 } },
  { id: 'siphons', type: 'tech', age: 2, building: 'university', row: 5, col: 7, prereqs: [], research_cost: { food: 100, gold: 175 }, research_time: 45 },
  { id: 'incendiaries', type: 'tech', age: 3, building: 'university', row: 6, col: 7, prereqs: ['siphons'], research_cost: { food: 100, gold: 175 }, research_time: 50 },
  { id: 'arrowslits', type: 'tech', age: 3, building: 'university', row: 6, col: 4, prereqs: [], research_cost: { food: 250, wood: 250 } },
  { id: 'shipwright', type: 'tech', age: 3, building: 'university', row: 6, col: 8, prereqs: [], research_cost: { food: 1000, gold: 300 } },


  // ── MONASTERY ───────────────────────────────────────────
  { id: 'monk', type: 'unit', age: 2, building: 'monastery', row: 5, col: 0, prereqs: [], train_cost: { gold: 100 } },
  { id: 'redemption', type: 'tech', age: 2, building: 'monastery', row: 5, col: 1, prereqs: [], research_cost: { gold: 475 } },
  { id: 'atonement', type: 'tech', age: 2, building: 'monastery', row: 5, col: 2, prereqs: [], research_cost: { gold: 325 } },
  { id: 'heresy', type: 'tech', age: 2, building: 'monastery', row: 5, col: 3, prereqs: [], research_cost: { gold: 1000 } },
  { id: 'sanctity', type: 'tech', age: 2, building: 'monastery', row: 5, col: 4, prereqs: [], research_cost: { gold: 175 } },
  { id: 'fervor', type: 'tech', age: 2, building: 'monastery', row: 5, col: 5, prereqs: [], research_cost: { gold: 140 } },
  { id: 'herbalmedicine', type: 'tech', age: 2, building: 'monastery', row: 5, col: 6, prereqs: [], research_cost: { gold: 200 } },
  { id: 'devotion', type: 'tech', age: 2, building: 'monastery', row: 5, col: 7, prereqs: [], research_cost: { food: 100, gold: 200 } },
  { id: 'illumination', type: 'tech', age: 3, building: 'monastery', row: 6, col: 1, prereqs: ['redemption'], research_cost: { gold: 120 } },
  { id: 'blockprinting', type: 'tech', age: 3, building: 'monastery', row: 6, col: 2, prereqs: ['atonement'], research_cost: { gold: 200 } },
  { id: 'theocracy', type: 'tech', age: 3, building: 'monastery', row: 6, col: 4, prereqs: ['sanctity'], research_cost: { gold: 200 } },
  { id: 'faith', type: 'tech', age: 3, building: 'monastery', row: 6, col: 5, prereqs: ['fervor'], research_cost: { food: 550, gold: 750 } },

  // ── Monastery special / unique ───────────────────────────
  { id: 'warrior_priest', type: 'unit', age: 2, building: 'monastery', row: 5, col: 7, special: true, variant: 'unique', prereqs: [], train_cost: { food: 40, gold: 50 } },
  { id: 'missionary', type: 'unit', age: 2, building: 'monastery', row: 5, col: 7, special: true, variant: 'unique', prereqs: [], train_cost: { gold: 100 } },


  // ── CASTLE ──────────────────────────────────────────────
  { id: 'trebuchet', type: 'unit', age: 3, building: 'castle', row: 6, col: 3, prereqs: [], train_cost: { wood: 200, gold: 200 } },
  { id: 'petard', type: 'unit', age: 2, building: 'castle', row: 5, col: 3, prereqs: [], train_cost: { food: 65, gold: 35 } },
  { id: 'uniqueunit', type: 'unique', age: 2, building: 'castle', row: 5, col: 2, prereqs: [], train_cost: { food: 0, gold: 0 } },
  { id: 'eliteunique', type: 'unique', age: 3, building: 'castle', row: 6, col: 2, prereqs: ['uniqueunit'], research_cost: { food: 0, gold: 0 }, train_cost: { food: 0, gold: 0 } },
  { id: 'uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [],},
  { id: 'uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [],},

  // ── Unique Techs by Civilization (Update 169123 costs from halfon) ────────
  // Castle Age (uniquetech1) — 53 civilizations
  { id: 'armenians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 350, gold: 250 } }, // Cilician Fleet
  { id: 'aztecs_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 350 } }, // Atlatl
  { id: 'bengalis_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 200 } }, // Paiks
  { id: 'berbers_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 400, stone: 200 } }, // Kasbah
  { id: 'bohemians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 350, gold: 300 } }, // Wagenburg Tactics
  { id: 'britons_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 300 } }, // Yeomen
  { id: 'bulgarians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 200, gold: 200 } }, // Stirrups
  { id: 'burgundians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 300 } }, // Burgundian Vineyards
  { id: 'burmese_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 350 } }, // Manipur Cavalry
  { id: 'byzantines_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 300 } }, // Greek Fire
  { id: 'celts_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 200 } }, // Stronghold
  { id: 'chinese_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 400, stone: 200 } }, // Great Wall
  { id: 'cumans_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 200, gold: 200 } }, // Steppe Husbandry
  { id: 'dravidians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 300 } }, // Medical Corps
  { id: 'ethiopians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 200 } }, // Royal Heirs
  { id: 'franks_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 300 } }, // Bearded Axe
  { id: 'georgians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 350, gold: 250 } }, // Svan Towers
  { id: 'goths_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 450, gold: 250 } }, // Anarchy
  { id: 'gurjaras_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 350 } }, // Kshatriyas
  { id: 'hindustanis_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 200 } }, // Grand Trunk Road
  { id: 'huns_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 200 } }, // Marauders
  { id: 'incas_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 200 } }, // Andean Sling
  { id: 'italians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 350, gold: 250 } }, // Silk Road
  { id: 'japanese_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 350, gold: 250 } }, // Yasama
  { id: 'jurchens_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 400, stone: 200 } }, // Fortified Bastions
  { id: 'khitans_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 350 } }, // Lamellar Armor
  { id: 'khmer_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 250 } }, // Tusk Swords
  { id: 'koreans_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 400, gold: 200 } }, // Eupseong
  { id: 'lithuanians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 200, gold: 150 } }, // Hill Forts
  { id: 'magyars_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 300 } }, // Corvinian Army
  { id: 'malay_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 350, gold: 300 } }, // Thalassocracy
  { id: 'malians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 200 } }, // Tigui
  { id: 'mapuche_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 350 } }, // Malon
  { id: 'mayans_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 350, gold: 300 } }, // Hul'che Javelineers
  { id: 'mongols_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { } }, // Nomads
  { id: 'muisca_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 350 } }, // Herbalism
  { id: 'persians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 350, gold: 300 } }, // Kamandaran
  { id: 'poles_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 250 } }, // Szlachta Privileges
  { id: 'portuguese_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 200 } }, // Circumnavigation
  { id: 'romans_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 300 } }, // Ballistas
  { id: 'saracens_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 300, gold: 200 } }, // Bimaristan
  { id: 'shu_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 350 } }, // Coiled Serpent Array
  { id: 'sicilians_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 300 } }, // First Crusade
  { id: 'slavs_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 400, gold: 200 } }, // Detinets
  { id: 'spanish_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 300 } }, // Inquisition
  { id: 'tatars_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { wood: 350, stone: 200 } }, // Silk Armor
  { id: 'teutons_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 300 } }, // Ironclad
  { id: 'tupi_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 200 } }, // Caciques
  { id: 'turks_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 350, gold: 150 } }, // Sipahi
  { id: 'vietnamese_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 350 } }, // Chatras
  { id: 'vikings_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 600, gold: 450 } }, // Chieftains
  { id: 'wei_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 200 } }, // Tuntian
  { id: 'wu_uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 400, gold: 250 } }, // Red Cliffs Tactics

  // Imperial Age (uniquetech2) — 53 civilizations
  { id: 'armenians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 800, gold: 600 } }, // Fereters
  { id: 'aztecs_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 450, gold: 750 } }, // Garland Wars
  { id: 'bengalis_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 800, gold: 700 } }, // Mahayana
  { id: 'berbers_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Maghrebi Camels
  { id: 'bohemians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 600 } }, // Hussite Reforms
  { id: 'britons_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 800, gold: 500 } }, // Warwolf
  { id: 'bulgarians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 550, gold: 450 } }, // Bagains
  { id: 'burgundians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Flemish Revolution
  { id: 'burmese_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Howdah
  { id: 'byzantines_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 800, gold: 600 } }, // Logistica
  { id: 'celts_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 450 } }, // Furor Celtica
  { id: 'chinese_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 1100, gold: 900 } }, // Rocketry
  { id: 'cumans_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Cuman Mercenaries
  { id: 'dravidians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 550 } }, // Wootz Steel
  { id: 'ethiopians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 600, gold: 500 } }, // Torsion Engines
  { id: 'franks_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 600 } }, // Chivalry
  { id: 'georgians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 600 } }, // Aznauri Cavalry
  { id: 'goths_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 400, gold: 600 } }, // Perfusion
  { id: 'gurjaras_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 650, gold: 600 } }, // Frontier Guards
  { id: 'hindustanis_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Shatagni
  { id: 'huns_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 300, food: 500 } }, // Atheism
  { id: 'incas_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 550, gold: 450 } }, // Fabric Shields
  { id: 'italians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 550 } }, // Pirotechnia
  { id: 'japanese_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 550, gold: 300 } }, // Kataparuto
  { id: 'jurchens_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 600 } }, // Thunderclap Bombs
  { id: 'khitans_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 800, gold: 700 } }, // Ordo Cavalry
  { id: 'khmer_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 600 } }, // Double Crossbow
  { id: 'koreans_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 700, gold: 400 } }, // Shinkichon
  { id: 'lithuanians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 400, gold: 300 } }, // Tower Shields
  { id: 'magyars_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 600 } }, // Recurve Bow
  { id: 'malay_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 600 } }, // Forced Levy
  { id: 'malians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Farimba
  { id: 'mapuche_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 500, gold: 450 } }, // Butalmapu
  { id: 'mayans_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 850, gold: 700 } }, // Holcans
  { id: 'mongols_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 500, gold: 450 } }, // Drill
  { id: 'muisca_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 450, gold: 350 } }, // Huaracas
  { id: 'persians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 600, gold: 300 } }, // Citadels
  { id: 'poles_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 600 } }, // Lechitic Legacy
  { id: 'portuguese_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 500 } }, // Arquebus
  { id: 'romans_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 800, gold: 600 } }, // Comitatenses
  { id: 'saracens_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 650, gold: 500 } }, // Counterweights
  { id: 'shu_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 850, gold: 700 } }, // Bolt Magazine
  { id: 'sicilians_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 550 } }, // Hauberk
  { id: 'slavs_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 600 } }, // Druzhina
  { id: 'spanish_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 400, gold: 250 } }, // Supremacy
  { id: 'tatars_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { wood: 600, gold: 500 } }, // Timurid Siegecraft
  { id: 'teutons_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, stone: 400 } }, // Crenellations
  { id: 'tupi_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 650, gold: 600 } }, // Curare
  { id: 'turks_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 600, gold: 650 } }, // Artillery
  { id: 'vietnamese_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 750, gold: 600 } }, // Paper Money
  { id: 'vikings_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 650, gold: 500 } }, // Bogsveigar
  { id: 'wei_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 700, gold: 600 } }, // Ming Guang Armor
  { id: 'wu_uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: [], research_cost: { food: 800, gold: 700 } }, // Sitting Tiger

  { id: 'hoardings', type: 'tech', age: 3, building: 'castle', row: 6, col: 6, prereqs: [], research_cost: { food: 400, wood: 400 } },
  { id: 'conscription', type: 'tech', age: 3, building: 'castle', row: 6, col: 7, prereqs: [], research_cost: { food: 150, gold: 150 } },
  { id: 'sappers', type: 'tech', age: 3, building: 'castle', row: 7, col: 6, prereqs: [], research_cost: { food: 400, wood: 200 } },
  { id: 'spy', type: 'tech', age: 3, building: 'castle', row: 7, col: 7, prereqs: [], research_cost: { gold: 200 } },

  // ── Castle special / unique ──────────────────────────────
  { id: 'kipchak_c', type: 'unit', age: 3, building: 'castle', row: 6, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { food: 40, gold: 35 } },
  { id: 'krepost', type: 'unit', age: 2, building: 'castle', row: 4, col: 7, special: true, variant: 'unique', prereqs: [], build_cost: { stone: 350 } },
  { id: 'donjon', type: 'unit', age: 1, building: 'barracks', row: 2, col: 5, special: true, variant: 'unique', prereqs: [], build_cost: { wood: 75, stone: 175 } },


  // ── MARKET ──────────────────────────────────────────────
  { id: 'tradecart', type: 'unit', age: 1, building: 'market', row: 3, col: 0, prereqs: [], train_cost: { wood: 100, gold: 50 } },
  { id: 'caravan', type: 'tech', age: 2, building: 'market', row: 5, col: 0, prereqs: [], research_cost: { food: 200, gold: 200 } },
  { id: 'coinage', type: 'tech', age: 2, building: 'market', row: 4, col: 0, prereqs: [], research_cost: { food: 200, gold: 100 } },
  { id: 'banking', type: 'tech', age: 3, building: 'market', row: 6, col: 0, prereqs: ['coinage'], research_cost: { food: 300, gold: 200 } },
  { id: 'guilds', type: 'tech', age: 3, building: 'market', row: 7, col: 0, prereqs: [], research_cost: { food: 300, gold: 200 } },
  { id: 'feitoria', type: 'unit', age: 3, building: 'market', row: 6, col: 3, special: true, variant: 'unique', prereqs: [], build_cost: { wood: 250, gold: 250, stone: 250 } },
  { id: 'caravanserai', type: 'unit', age: 3, building: 'market', row: 6, col: 4, special: true, variant: 'regional', prereqs: [], build_cost: { wood: 150 } },

  { id: 'villager', type: 'unit', age: 0, building: 'tc', row: 1, col: 0, prereqs: [], train_cost: { food: 50 } },
  { id: 'loom', type: 'tech', age: 0, building: 'tc', row: 1, col: 2, prereqs: [], research_cost: { gold: 50 } },
  { id: 'wheelbarrow', type: 'tech', age: 1, building: 'tc', row: 2, col: 0, prereqs: [], research_cost: { food: 175, wood: 50 } },
  { id: 'townwatch', type: 'tech', age: 1, building: 'tc', row: 2, col: 2, prereqs: [], research_cost: { food: 75 } },
  { id: 'handcart', type: 'tech', age: 2, building: 'tc', row: 4, col: 0, prereqs: ['wheelbarrow'], research_cost: { food: 300, wood: 200 } },
  { id: 'townpatrol', type: 'tech', age: 2, building: 'tc', row: 4, col: 2, prereqs: ['townwatch'], research_cost: { food: 300, gold: 100 } },



  // ── Age Advancement Techs ────────────────────────────────
  { id: 'feudalage', type: 'tech', age: 0, building: 'tc', row: 1, col: 1, prereqs: [], research_cost: { food: 500 } },
  { id: 'castleage', type: 'tech', age: 1, building: 'tc', row: 2, col: 1, prereqs: ['feudalage'], research_cost: { food: 800, gold: 200 } },
  { id: 'imperialage', type: 'tech', age: 2, building: 'tc', row: 4, col: 1, prereqs: ['castleage'], research_cost: { food: 1000, gold: 800 } },


  // ── MILL ────────────────────────────────────────────────
  { id: 'horsecollar', type: 'tech', age: 1, building: 'mill', row: 2, col: 0, prereqs: [], research_cost: { food: 75, wood: 75 } },
  { id: 'heavyplow', type: 'tech', age: 2, building: 'mill', row: 4, col: 0, prereqs: ['horsecollar'], research_cost: { food: 125, wood: 125 } },
  { id: 'croprotation', type: 'tech', age: 3, building: 'mill', row: 6, col: 0, prereqs: ['heavyplow'], research_cost: { food: 250, wood: 250 } },
 
  { id: 'domestication', type: 'tech', age: 1, building: 'mill', row: 2, col: 1, special: true, variant: 'regional', prereqs: [], research_cost: { food: 50, wood: 100 } },
  { id: 'pastoralism',   type: 'tech', age: 2, building: 'mill', row: 4, col: 1, special: true, variant: 'regional', prereqs: ['domestication'], research_cost: { food: 100, wood: 150 } },
  { id: 'transhumance',  type: 'tech', age: 3, building: 'mill', row: 6, col: 1, special: true, variant: 'regional', prereqs: ['pastoralism'], research_cost: { food: 175, wood: 325 } },

  // ── LUMBER CAMP ─────────────────────────────────────────
  { id: 'doublebitaxe', type: 'tech', age: 1, building: 'lumber', row: 2, col: 0, prereqs: [], research_cost: { food: 100, wood: 50 } },
  { id: 'bowsaw', type: 'tech', age: 2, building: 'lumber', row: 4, col: 0, prereqs: ['doublebitaxe'], research_cost: { food: 150, wood: 100 } },
  { id: 'twomansaw', type: 'tech', age: 3, building: 'lumber', row: 6, col: 0, prereqs: ['bowsaw'], research_cost: { food: 300, wood: 200 } },

  // ── MINING CAMP ─────────────────────────────────────────
  { id: 'goldmining', type: 'tech', age: 1, building: 'mining', row: 2, col: 0, prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'goldshaft', type: 'tech', age: 2, building: 'mining', row: 4, col: 0, prereqs: ['goldmining'], research_cost: { food: 175, wood: 75 } },
  { id: 'stonemining', type: 'tech', age: 1, building: 'mining', row: 2, col: 1, prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'stoneshaft', type: 'tech', age: 2, building: 'mining', row: 4, col: 1, prereqs: ['stonemining'], research_cost: { food: 175, wood: 75 } },

  // ── TAHSILI (Asentamiento) ────────────────────────────────
  { id: 'horsecollar_t',  type: 'tech', age: 1, building: 'tahsili', row: 2, col: 3, variant: 'regional', prereqs: [], research_cost: { food: 75, wood: 75 } },
  { id: 'heavyplow_t',    type: 'tech', age: 2, building: 'tahsili', row: 4, col: 3,  variant: 'regional',prereqs: ['horsecollar_t'], research_cost: { food: 125, wood: 125 } },
  { id: 'croprotation_t', type: 'tech', age: 3, building: 'tahsili', row: 6, col: 3,  variant: 'regional',prereqs: ['heavyplow_t'], research_cost: { food: 250, wood: 250 } },
  { id: 'doublebitaxe_t', type: 'tech', age: 1, building: 'tahsili', row: 2, col: 0, variant: 'regional', prereqs: [], research_cost: { food: 100, wood: 50 } },
  { id: 'bowsaw_t',       type: 'tech', age: 2, building: 'tahsili', row: 4, col: 0, variant: 'regional', prereqs: ['doublebitaxe_t'], research_cost: { food: 150, wood: 100 } },
  { id: 'twomansaw_t',   type: 'tech', age: 3, building: 'tahsili', row: 6, col: 0, variant: 'regional', prereqs: ['bowsaw_t'], research_cost: { food: 300, wood: 200 } },
  { id: 'goldmining_t',  type: 'tech', age: 1, building: 'tahsili', row: 2, col: 1,  variant: 'regional',prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'goldshaft_t',   type: 'tech', age: 2, building: 'tahsili', row: 4, col: 1,  variant: 'regional',prereqs: ['goldmining_t'], research_cost: { food: 200, wood: 100 } },
  { id: 'stonemining_t', type: 'tech', age: 1, building: 'tahsili', row: 2, col: 2,  variant: 'regional',prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'stoneshaft_t',  type: 'tech', age: 2, building: 'tahsili', row: 4, col: 2,  variant: 'regional',prereqs: ['stonemining_t'], research_cost: { food: 200, wood: 100 } },

  // ── MULECART (Mula de Carga) ──────────────────────────────
  { id: 'doublebitaxe_m', type: 'tech', age: 1, building: 'mulecart', row: 2, col: 0, variant: 'regional', prereqs: [], research_cost: { food: 100, wood: 50 } },
  { id: 'bowsaw_m',       type: 'tech', age: 2, building: 'mulecart', row: 4, col: 0, variant: 'regional', prereqs: ['doublebitaxe_m'], research_cost: { food: 150, wood: 100 } },
  { id: 'twomansaw_m',   type: 'tech', age: 3, building: 'mulecart', row: 6, col: 0, variant: 'regional', prereqs: ['bowsaw_m'], research_cost: { food: 300, wood: 200 } },
  { id: 'goldmining_m',  type: 'tech', age: 1, building: 'mulecart', row: 2, col: 1, variant: 'regional', prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'goldshaft_m',   type: 'tech', age: 2, building: 'mulecart', row: 4, col: 1, variant: 'regional', prereqs: ['goldmining_m'], research_cost: { food: 200, wood: 100 } },
  { id: 'stonemining_m', type: 'tech', age: 1, building: 'mulecart', row: 2, col: 2, variant: 'regional', prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'stoneshaft_m',  type: 'tech', age: 2, building: 'mulecart', row: 4, col: 2,  variant: 'regional',prereqs: ['stonemining_m'], research_cost: { food: 200, wood: 100 } },

  // ══════════════════════════════════════════════════════════
  // BUILDINGS (unified — formerly buildings.js)
  // ══════════════════════════════════════════════════════════
  // ── Militares ─────────────────────────────────────────────
  { type: 'building', id: 'archery',    name: 'Galería de Tiro',   icon: '🏹', age: 1, row: 2, prereqs: ['barracks'], build_cost: { wood: 175 }, stats: { hp: 1500, armor: [0, 7] } },
  { type: 'building', id: 'barracks',   name: 'Cuartel',           icon: '⚔️', age: 0, row: 0, prereqs: [],           build_cost: { wood: 175 }, stats: { hp: 1500, armor: [0, 7] } },
  { type: 'building', id: 'stable',     name: 'Establo',           icon: '🐴', age: 1, row: 2, prereqs: ['barracks'], build_cost: { wood: 175 }, stats: { hp: 1500, armor: [0, 7] } },
  { type: 'building', id: 'blacksmith', name: 'Herrería',          icon: '🔨', age: 1, row: 2, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 2100, armor: [0, 7] } },
  { type: 'building', id: 'siege',      name: 'Taller de Asedio',  icon: '⚒️', age: 2, row: 4, prereqs: ['blacksmith'], build_cost: { wood: 200 }, stats: { hp: 2100, armor: [0, 7] } },
  { type: 'building', id: 'dock',       name: 'Muelle',            icon: '⚓', age: 0, row: 0, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 1800, armor: [0, 7] } },
  { type: 'building', id: 'harbor',     name: 'Puerto',            icon: '⚓', age: 2, row: 0, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 2000, armor: [3, 10], attack: 3, range: 7 }, replaces: ['dock'] },
  { type: 'building', id: 'university', name: 'Universidad',       icon: '🎓', age: 2, row: 4, prereqs: [],           build_cost: { wood: 200 }, stats: { hp: 2100, armor: [2, 9] } },
  // ── Torres (columna vertical compartida) ──────────────────
  { type: 'building', id: 'outpost',       name: 'Puesto Avanz.',   icon: '🗼', age: 0, row: 0, col: 0, prereqs: [],              build_cost: { wood: 25,  stone: 5   }, stats: { hp:  500, armor: [0, 0]               } },
  { type: 'defencive', id: 'watchtower',    name: 'Torre Vigía',     icon: '🏗️', age: 1, row: 2, col: 0,prereqs: [],              build_cost: { wood: 35, stone: 125  }, stats: { hp: 850,  armor: [1, 7], attack:   5, range: 8, los: 10, bonuses: [{ vs: 'camel_units', value: 1 }, { vs: 'ships', value: 6 }, { vs: 'fishing_ships', value: 7 }] } },
  { type: 'defencive', id: 'guardtower',    name: 'Torre Guardia',   icon: '🏗️', age: 2, row: 4, col: 0,prereqs: ['watchtower'],  build_cost: { wood: 35,  stone: 125 }, stats: { hp: 1500, armor: [2, 8], attack:   7, range: 8, los: 10, bonuses: [{ vs: 'camel_units', value: 1 }, { vs: 'ships', value: 8 }, { vs: 'fishing_ships', value: 9 }] } },
  { type: 'defencive', id: 'keep',          name: 'Torreón',         icon: '🏗️', age: 3, row: 6, col: 0, prereqs: ['guardtower'],  build_cost: { wood: 35,  stone: 125 }, stats: { hp: 2250, armor: [3, 9], attack:   8, range: 8, los: 10, bonuses: [{ vs: 'camel_units', value: 1 }, { vs: 'ships', value: 9 }, { vs: 'fishing_ships', value: 10 }] } },
  { type: 'defencive', id: 'bombardtower',  name: 'Torre Bombarda',  icon: '💣', age: 3, row: 7, col: 0, prereqs: [],              build_cost: { stone: 125, gold: 100 }, stats: { hp: 2220, armor: [3, 9], attack: 120, range: 12, los: 10 } },
  // ── Murallas (columna vertical compartida) ────────────────
  { type: 'building', id: 'palisadewall',  name: 'Empalizada',      icon: '🪵', age: 0, row: 0,col: 1, prereqs: [],               build_cost: { wood: 2   }, stats: { hp:  250, armor: [ 2,  2] }},
  { type: 'defencive', id: 'palisadegate',  name: 'Puerta Empaliz.', icon: '🚪', age: 0, row: 1,col: 1, prereqs: [],               build_cost: { wood: 20  }, stats: { hp:  400, armor: [ 2,  2] }},
  { type: 'defencive', id: 'stonewall',     name: 'Muro de Piedra',  icon: '🧱', age: 1, row: 2,col: 1, prereqs: [], build_cost: { stone: 5  }, stats: { hp: 1800, armor: [ 8, 10] }},
  { type: 'defencive', id: 'gate',          name: 'Puerta',          icon: '🚪', age: 1, row: 3,col: 1, prereqs: [],               build_cost: { stone: 30 }, stats: { hp: 2750, armor: [ 6,  6] }},
  { type: 'defencive', id: 'fortifiedwall', name: 'Muro Fortificado',icon: '🧱', age: 2, row: 4, col: 1,prereqs: [],    build_cost: { stone: 5  }, stats: { hp: 3000, armor: [12, 12] }},
  // ── Castillo / Maravilla / Monasterio ─────────────────────
  { type: 'building', id: 'castle',         name: 'Castillo',         icon: '🏯', age: 2, row: 4, prereqs: [],         build_cost: { stone: 650 }, stats: { hp: 4800, armor: [8, 11], attack: 11, range: 8 } },
  { type: 'building', id: 'wonder',         name: 'Maravilla',        icon: '🏰', age: 3, row: 6, prereqs: [],         build_cost: { wood: 1000, stone: 1000, gold: 1000 }, stats: { hp: 4800, armor: [3, 5] } },
  { type: 'building', id: 'monastery',      name: 'Monasterio',       icon: '⛪', age: 2, row: 4, prereqs: [],         build_cost: { wood: 175 }, stats: { hp: 2100, armor: [0, 7] } },
  { type: 'building', id: 'fortified_church', name: 'Iglesia Fort.', variant: 'regional', icon: '⛪', age: 2, row: 4, prereqs: [], build_cost: { wood: 200 }, stats: { hp: 2400, armor: [4, 10], attack: 5, range: 4, los: 10, bonuses: [{ vs: 'ships', value: 5 }, { vs: 'camel_units', value: 1 }] }, replaces: ['monastery'] },
  // ── Economía ──────────────────────────────────────────────
  { type: 'building', id: 'tc',      name: 'Centro Urbano', icon: '🏰', age: 0, row: 0, prereqs: [], build_cost: { wood: 275, stone: 100 }, stats: { hp: 2400, armor: [3, 5], attack: 5, range: 6 } },
  { type: 'building', id: 'house',   name: 'Casa',          icon: '',   age: 0, row: 0, prereqs: [], build_cost: { wood: 25  }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'mining',  name: 'Camp. Minero',  icon: '⛏️', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'lumber',  name: 'Camp. Maderero',icon: '🪵', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'tahsili', name: 'Asentamiento',  icon: '🏠', variant: 'regional',age: 0, row: 0, prereqs: [], build_cost: { wood: 125 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['lumber', 'mining', 'mill', 'mulecart'] },
  { type: 'building', id: 'mulecart',name: 'Mula de Carga', icon: '🫏', variant: 'regional',age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['lumber', 'mining', 'tahsili'] },
  { type: 'building', id: 'market',  name: 'Mercado',       icon: '💰', age: 1, row: 2, prereqs: ['mill'], build_cost: { wood: 175 }, stats: { hp: 2100, armor: [1, 8] } },
  { type: 'building', id: 'mill',    name: 'Molino',        icon: '🌾', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'folwark', name: 'Folwark',       icon: '🌾', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['mill'] },
  { type: 'building', id: 'pasture', name: 'Pasto',         icon: '🐄', variant: 'regional', age: 0, row: 0, prereqs: [], build_cost: { wood: 110 }, stats: { hp: 560, armor: [0, 0] } },
];