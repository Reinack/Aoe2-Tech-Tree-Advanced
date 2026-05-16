export const NODES = [

  // ── BARRACKS ────────────────────────────────────────────
  { id: 'militia', type: 'unit', age: 0, building: 'barracks', row: 1, col: 0, prereqs: [], train_cost: { food: 60, gold: 20 } },
  { id: 'manatarms', type: 'upgrade', age: 1, building: 'barracks', row: 2, col: 0, prereqs: ['militia'], research_cost: { food: 100, gold: 40 }, train_cost: { food: 60, gold: 20 } },
  { id: 'longsword', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 0, prereqs: ['manatarms'], research_cost: { food: 200, gold: 100 }, train_cost: { food: 60, gold: 20 } },
  { id: 'twohanded', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 0, prereqs: ['longsword'], research_cost: { food: 300, gold: 150 }, train_cost: { food: 60, gold: 20 } },
  { id: 'champion', type: 'upgrade', age: 3, building: 'barracks', row: 7, col: 0, prereqs: ['twohanded'], research_cost: { food: 600, gold: 200 }, train_cost: { food: 60, gold: 20 } },
  { id: 'spearman', type: 'unit', age: 1, building: 'barracks', row: 2, col: 1, prereqs: [], train_cost: { food: 35, wood: 25 } },
  { id: 'pikeman', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 1, prereqs: ['spearman'], research_cost: { food: 160, gold: 60 }, train_cost: { food: 35, wood: 25 } },
  { id: 'halberdier', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 1, prereqs: ['pikeman'], research_cost: { food: 75, gold: 25 }, train_cost: { food: 35, wood: 25 } },
  { id: 'squires', type: 'tech', age: 2, building: 'barracks', row: 5, col: 5, prereqs: [], research_cost: { food: 100 } },
  { id: 'arson', type: 'tech', age: 1, building: 'barracks', row: 2, col: 5, prereqs: [], research_cost: { food: 150, gold: 50 } },
  { id: 'gambesons', type: 'tech', age: 2, building: 'barracks', row: 4, col: 5, prereqs: [], research_cost: { food: 100, gold: 40 } },

  // ── Eagle Line (Mesoamerican regional) ──────────────────
  { id: 'eaglescout', type: 'unit', age: 1, building: 'barracks', row: 2, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 20, gold: 50 } },
  { id: 'eaglewarrior', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 3, special: true, variant: 'regional', prereqs: ['eaglescout'], research_cost: { food: 200, gold: 100 }, train_cost: { food: 20, gold: 50 } },
  { id: 'eliteeagle', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['eaglewarrior'], research_cost: { food: 500, gold: 400 }, train_cost: { food: 20, gold: 50 } },

  // ── Champi Line (South American regional) ───────────────
  { id: 'champiscout', type: 'unit', age: 0, building: 'barracks', row: 1, col: 0, special: true, variant: 'regional', prereqs: [], train_cost: { food: 50, gold: 20 } },
  { id: 'champirunner', type: 'upgrade', age: 1, building: 'barracks', row: 2, col: 0, special: true, variant: 'regional', prereqs: ['champiscout'], research_cost: { food: 100, gold: 40 }, train_cost: { food: 50, gold: 20 } },
  { id: 'champiwarrior', type: 'upgrade', age: 2, building: 'barracks', row: 4, col: 0, special: true, variant: 'regional', prereqs: ['champirunner'], research_cost: { food: 150, gold: 80 }, train_cost: { food: 50, gold: 20 } },
  { id: 'elitechampi', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 0, special: true, variant: 'regional', prereqs: ['champiwarrior'], research_cost: { food: 400, gold: 200 }, train_cost: { food: 50, gold: 20 } },

  // ── Barracks special / unique ────────────────────────────
  { id: 'legionary', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 0, special: true, variant: 'unique', prereqs: ['longsword'], research_cost: { food: 300, gold: 200 }, train_cost: { food: 60, gold: 20 } },
  { id: 'fire_lancer', type: 'unit', age: 2, building: 'barracks', row: 4, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 60, gold: 20 } },
  { id: 'elite_fire_lancer', type: 'upgrade', age: 3, building: 'barracks', row: 6, col: 2, special: true, variant: 'regional', prereqs: ['fire_lancer'], research_cost: { food: 300, gold: 200 }, train_cost: { food: 60, gold: 20 } },
  { id: 'flemish_militia', type: 'unit', age: 1, building: 'barracks', row: 2, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 60, gold: 25 } },
  { id: 'jian_swordsman', type: 'unit', age: 2, building: 'barracks', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 45, gold: 20 } },
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
  { id: 'thumbring', type: 'tech', age: 2, building: 'archery', row: 4, col: 4, prereqs: [], research_cost: { food: 300, gold: 250 } },
  { id: 'parthian', type: 'tech', age: 3, building: 'archery', row: 6, col: 4, prereqs: ['thumbring'], research_cost: { food: 200, gold: 250 } },

  // ── Archery Range special / unique ──────────────────────
  { id: 'imp_skirmisher', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 1, special: true, variant: 'unique', prereqs: ['eliteskirm'], research_cost: { food: 300, gold: 450 }, train_cost: { food: 35, wood: 25 } },
  { id: 'elephant_archer', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 100, gold: 70 } },
  { id: 'elite_elephant_archer', type: 'upgrade', age: 3, building: 'archery', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['elephant_archer'], research_cost: { food: 1000, gold: 800 }, train_cost: { food: 100, gold: 70 } },
  { id: 'grenadier', type: 'unit', age: 2, building: 'archery', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 60, gold: 60 } },
  { id: 'xianbei_raider', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 40, gold: 35 } },
  { id: 'bolas_rider', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 50, gold: 50 } },
  { id: 'slinger', type: 'unit', age: 2, building: 'archery', row: 4, col: 4, special: true, variant: 'regional', prereqs: [], train_cost: { food: 30, gold: 40 } },
  { id: 'genitour', type: 'unit', age: 2, building: 'archery', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 50, wood: 35 } },


  // ── STABLE ──────────────────────────────────────────────
  { id: 'scout', type: 'unit', age: 1, building: 'stable', row: 3, col: 0, prereqs: [], train_cost: { food: 80 } },
  { id: 'lightcav', type: 'upgrade', age: 2, building: 'stable', row: 4, col: 0, prereqs: ['scout'], research_cost: { food: 150, gold: 75 }, train_cost: { food: 80 } },
  { id: 'hussar', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 0, prereqs: ['lightcav'], research_cost: { food: 250, gold: 300 }, train_cost: { food: 80 } },
  { id: 'knight', type: 'unit', age: 2, building: 'stable', row: 4, col: 1, prereqs: [], train_cost: { food: 60, gold: 75 } },
  { id: 'cavalier', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 1, prereqs: ['knight'], research_cost: { food: 300, gold: 300 }, train_cost: { food: 60, gold: 75 } },
  { id: 'paladin', type: 'upgrade', age: 3, building: 'stable', row: 7, col: 1, prereqs: ['cavalier'], research_cost: { food: 750, gold: 550 }, train_cost: { food: 60, gold: 75 } },
  { id: 'camel', type: 'unit', age: 2, building: 'stable', row: 4, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 55, gold: 60 } },
  { id: 'heavycamel', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 2, special: true, variant: 'regional', prereqs: ['camel'], research_cost: { food: 150, gold: 50 }, train_cost: { food: 55, gold: 60 } },
  { id: 'battleeleph', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 120, gold: 75 } },
  { id: 'eliteeleph', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 3, special: true, variant: 'regional', prereqs: ['battleeleph'], research_cost: { food: 500, gold: 600 }, train_cost: { food: 120, gold: 75 } },
  { id: 'bloodlines', type: 'tech', age: 2, building: 'stable', row: 3, col: 4, prereqs: [], research_cost: { food: 150, gold: 100 } },
  { id: 'husbandry', type: 'tech', age: 3, building: 'stable', row: 4, col: 4, prereqs: [], research_cost: { food: 250 } },

  // ── Stable special / unique ──────────────────────────────
  { id: 'winged_hussar', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 0, special: true, variant: 'regional', prereqs: ['lightcav'], research_cost: { food: 600, gold: 400 }, train_cost: { food: 80 } },
  { id: 'savar', type: 'upgrade', age: 3, building: 'stable', row: 7, col: 1, special: true, variant: 'unique', prereqs: ['cavalier'], research_cost: { food: 1000, gold: 600 }, train_cost: { food: 60, gold: 75 } },
  { id: 'camel_scout', type: 'unit', age: 1, building: 'stable', row: 3, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 70, gold: 30 } },
  { id: 'imp_camel', type: 'upgrade', age: 3, building: 'stable', row: 7, col: 2, special: true, variant: 'regional', prereqs: ['heavycamel'], research_cost: { food: 1200, gold: 600 }, train_cost: { food: 55, gold: 60 } },
  { id: 'steppe_lancer', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 70, gold: 45 } },
  { id: 'elite_steppe_lancer', type: 'upgrade', age: 3, building: 'stable', row: 3, col: 4, special: true, variant: 'regional', prereqs: ['steppe_lancer'], research_cost: { food: 900, gold: 550 }, train_cost: { food: 70, gold: 45 } },
  { id: 'xolotl_warrior', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { food: 60, gold: 75 } },
  { id: 'shrivamsha', type: 'unit', age: 2, building: 'stable', row: 4, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 70, gold: 40 } },
  { id: 'elite_shrivamsha', type: 'upgrade', age: 3, building: 'stable', row: 3, col: 2, special: true, variant: 'unique', prereqs: ['shrivamsha'], research_cost: { food: 600, gold: 400 }, train_cost: { food: 70, gold: 40 } },
  { id: 'hei_guang', type: 'unit', age: 2, building: 'stable', row: 4, col: 2, special: true, variant: 'regional', prereqs: [], train_cost: { food: 80, gold: 40 } },
  { id: 'heavy_hei_guang', type: 'upgrade', age: 3, building: 'stable', row: 6, col: 2, special: true, variant: 'regional', prereqs: ['hei_guang'], research_cost: { food: 500, gold: 300 }, train_cost: { food: 80, gold: 40 } },
  { id: 'tarkan_s', type: 'unit', age: 2, building: 'stable', row: 4, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { food: 60, gold: 60 } },


  // ── SIEGE WORKSHOP ──────────────────────────────────────
  { id: 'batteringram', type: 'unit', age: 2, building: 'siege', row: 5, col: 0, prereqs: [], train_cost: { wood: 160, gold: 75 } },
  { id: 'cappedram', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 0, prereqs: ['batteringram'], research_cost: { wood: 300, gold: 225 }, train_cost: { wood: 160, gold: 75 } },
  { id: 'siegeram', type: 'upgrade', age: 3, building: 'siege', row: 7, col: 1, prereqs: ['cappedram'], research_cost: { wood: 500, gold: 250 }, train_cost: { wood: 160, gold: 75 } },
  { id: 'mangonel', type: 'unit', age: 2, building: 'siege', row: 5, col: 1, prereqs: [], train_cost: { wood: 160, gold: 135 } },
  { id: 'onager', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 1, prereqs: ['mangonel'], research_cost: { wood: 375, gold: 200 }, train_cost: { wood: 160, gold: 135 } },
  { id: 'siegeonager', type: 'upgrade', age: 3, building: 'siege', row: 7, col: 1, prereqs: ['onager'], research_cost: { wood: 850, gold: 750 }, train_cost: { wood: 160, gold: 135 } },
  { id: 'scorpion', type: 'unit', age: 2, building: 'siege', row: 5, col: 2, prereqs: [], train_cost: { wood: 75, gold: 75 } },
  { id: 'heavyscorpion', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 2, prereqs: ['scorpion'], research_cost: { wood: 300, gold: 300 }, train_cost: { wood: 75, gold: 75 } },
  { id: 'bombcannon', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, prereqs: [], train_cost: { wood: 225, gold: 225 } },
  { id: 'siegetower', type: 'unit', age: 2, building: 'siege', row: 5, col: 3, prereqs: [], train_cost: { wood: 160, gold: 160 } },

  // ── Siege special / unique ───────────────────────────────
  { id: 'houfnice', type: 'upgrade', age: 3, building: 'siege', row: 7, col: 3, special: true, variant: 'unique', prereqs: ['bombcannon'], research_cost: { food: 950, gold: 750 }, train_cost: { wood: 225, gold: 225 } },
  { id: 'traction_treb', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 200, gold: 200 } },
  { id: 'mounted_treb', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 200, gold: 200 } },
  { id: 'rocket_cart', type: 'unit', age: 2, building: 'siege', row: 5, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 200, gold: 150 } },
  { id: 'heavy_rocket_cart', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 1, special: true, variant: 'regional', prereqs: ['rocket_cart'], research_cost: { food: 500, gold: 400 }, train_cost: { wood: 200, gold: 150 } },
  { id: 'flaming_camel', type: 'unit', age: 3, building: 'siege', row: 6, col: 3, special: true, variant: 'unique', prereqs: [], train_cost: { food: 75, gold: 30 } },
  { id: 'armored_elephant', type: 'unit', age: 2, building: 'siege', row: 5, col: 0, special: true, variant: 'regional', prereqs: [], train_cost: { food: 120, gold: 95 } },
  { id: 'siege_elephant', type: 'upgrade', age: 3, building: 'siege', row: 6, col: 0, special: true, variant: 'regional', prereqs: ['armored_elephant'], research_cost: { food: 650, gold: 0 }, train_cost: { food: 120, gold: 95 } },
  { id: 'war_chariot_s', type: 'unit', age: 2, building: 'siege', row: 5, col: 2, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 150, gold: 150 } },


  // ── BLACKSMITH ──────────────────────────────────────────
  { id: 'forging', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 0, prereqs: [], research_cost: { food: 150 } },
  { id: 'ironcasting', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 0, prereqs: ['forging'], research_cost: { food: 220, gold: 75 } },
  { id: 'blastfurnace', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 0, prereqs: ['ironcasting'], research_cost: { food: 275, gold: 225 } },
  { id: 'scalemailarmor', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 1, prereqs: [], research_cost: { food: 100 } },
  { id: 'chainmailarmor', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 1, prereqs: ['scalemailarmor'], research_cost: { food: 200, gold: 100 } },
  { id: 'platemailarmor', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 1, prereqs: ['chainmailarmor'], research_cost: { food: 300, gold: 200 } },
  { id: 'paddedarcharmor', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 2, prereqs: [], research_cost: { food: 100 } },
  { id: 'leatherarcharmor', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 2, prereqs: ['paddedarcharmor'], research_cost: { food: 150, gold: 100 } },
  { id: 'ringarcherarmor', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 2, prereqs: ['leatherarcharmor'], research_cost: { food: 250, gold: 250 } },
  { id: 'scalebarding', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 3, prereqs: [], research_cost: { food: 150 } },
  { id: 'chainbarding', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 3, prereqs: ['scalebarding'], research_cost: { food: 250, gold: 130 } },
  { id: 'platebarding', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 3, prereqs: ['chainbarding'], research_cost: { food: 350, gold: 200 } },
  { id: 'fletching', type: 'tech', age: 1, building: 'blacksmith', row: 3, col: 4, prereqs: [], research_cost: { food: 100, gold: 50 } },
  { id: 'bodkinarrow', type: 'tech', age: 2, building: 'blacksmith', row: 4, col: 4, prereqs: ['fletching'], research_cost: { food: 200, gold: 100 } },
  { id: 'bracer', type: 'tech', age: 3, building: 'blacksmith', row: 6, col: 4, prereqs: ['bodkinarrow'], research_cost: { food: 300, gold: 200 } },


  // ── DOCK ────────────────────────────────────────────────

  { id: 'medium_warships', type: 'tech', age: 2, building: 'dock', row: 4, col: 5, prereqs: [], research_cost: { wood: 150, gold: 100 } },
  { id: 'heavy_warships', type: 'tech', age: 3, building: 'dock', row: 6, col: 5, prereqs: ['medium_warships'], research_cost: { wood: 400, gold: 315 } },
  { id: 'fishingship', type: 'unit', age: 0, building: 'dock', row: 1, col: 0, prereqs: [], train_cost: { wood: 75 } },
  { id: 'transportship', type: 'unit', age: 0, building: 'dock', row: 1, col: 1, prereqs: [], train_cost: { wood: 125, gold: 50 } },
  { id: 'tradecog', type: 'unit', age: 1, building: 'dock', row: 2, col: 5, prereqs: [], train_cost: { wood: 80, gold: 80 } },

  { id: 'galley', type: 'unit', age: 1, building: 'dock', row: 2, col: 2, prereqs: [], train_cost: { wood: 90, gold: 30 } },
  { id: 'wargalley', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 2, prereqs: ['galley'], research_cost: { food: 230, gold: 100 }, train_cost: { wood: 90, gold: 30 } },
  { id: 'galleon', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 2, prereqs: ['wargalley'], research_cost: { food: 400, gold: 315 }, train_cost: { wood: 90, gold: 30 } },

  { id: 'firegalley', type: 'unit', age: 1, building: 'dock', row: 2, col: 1, prereqs: [], train_cost: { wood: 75, gold: 45 } },
  { id: 'fireship', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 1, prereqs: ['firegalley'], research_cost: { food: 230, gold: 100 }, train_cost: { wood: 75, gold: 45 } },
  { id: 'fastfireship', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 1, prereqs: ['fireship'], research_cost: { food: 280, gold: 250 }, train_cost: { wood: 75, gold: 45 } },

  { id: 'hulk', type: 'unit', age: 1, building: 'dock', row: 2, col: 3, prereqs: [], train_cost: { wood: 90, gold: 30 } },
  { id: 'war_hulk', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 3, prereqs: ['hulk'], research_cost: { food: 100, wood: 50 }, train_cost: { wood: 90, gold: 30 } },
  { id: 'carrack', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 3, prereqs: ['war_hulk'], research_cost: { food: 400, gold: 300 }, train_cost: { wood: 90, gold: 30 } },

  { id: 'demoraft', type: 'unit', age: 1, building: 'dock', row: 2, col: 4, prereqs: [], train_cost: { wood: 70, gold: 50 } },
  { id: 'demoship', type: 'upgrade', age: 2, building: 'dock', row: 4, col: 4, prereqs: ['demoraft'], research_cost: { food: 230, gold: 100 }, train_cost: { wood: 70, gold: 50 } },
  { id: 'heavydemo', type: 'upgrade', age: 3, building: 'dock', row: 6, col: 4, prereqs: ['demoship'], research_cost: { food: 200, gold: 200 }, train_cost: { wood: 70, gold: 50 } },

  { id: 'cannongalleon', type: 'unit', age: 3, building: 'dock', row: 6, col: 6, prereqs: [], train_cost: { wood: 200, gold: 150 } },
  { id: 'elitecannon', type: 'upgrade', age: 3, building: 'dock', row: 7, col: 6, prereqs: ['cannongalleon'], research_cost: { food: 525, gold: 500 }, train_cost: { wood: 200, gold: 150 } },


  { id: 'fishing_lines', type: 'tech', age: 1, building: 'dock', row: 3, col: 0, prereqs: [], research_cost: { wood: 100, gold: 100 } },
  { id: 'gillnets', type: 'tech', age: 2, building: 'dock', row: 4, col: 0, prereqs: ['fishing_lines'], research_cost: { food: 150, gold: 200 } },

  // ── Dock special / unique ────────────────────────────────
  { id: 'dragon_ship', type: 'unit', age: 3, building: 'dock', row: 6, col: 1, special: true, variant: 'unique', prereqs: ['fireship'], train_cost: { wood: 75, gold: 45 } },
  { id: 'dromon', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 175, gold: 150 } },
  { id: 'lou_chuan', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 200, gold: 150 } },
  { id: 'catapult_gall', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'regional', prereqs: [], train_cost: { wood: 200, gold: 150 } },
  { id: 'turtle_ship', type: 'unit', age: 2, building: 'dock', row: 4, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 180, gold: 180 } },
  { id: 'longboat', type: 'unit', age: 2, building: 'dock', row: 4, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 75, gold: 40 } },
  { id: 'caravel_d', type: 'unit', age: 2, building: 'dock', row: 4, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 90, gold: 40 } },
  { id: 'thirisadai', type: 'unit', age: 3, building: 'dock', row: 7, col: 1, special: true, variant: 'unique', prereqs: [], train_cost: { wood: 300, gold: 250 } },


  // ── UNIVERSITY ──────────────────────────────────────────────
  { id: 'masonry', type: 'tech', age: 2, building: 'university', row: 5, col: 0, prereqs: [], research_cost: { wood: 175 } },
  { id: 'architecture', type: 'tech', age: 3, building: 'university', row: 6, col: 0, prereqs: ['masonry'], research_cost: { wood: 175, gold: 150 } },
  { id: 'ballistics', type: 'tech', age: 2, building: 'university', row: 5, col: 1, prereqs: [], research_cost: { food: 300, gold: 175 } },
  { id: 'chemistry', type: 'tech', age: 3, building: 'university', row: 6, col: 1, prereqs: ['ballistics'], research_cost: { food: 300, gold: 200 } },
  { id: 'murderhole', type: 'tech', age: 2, building: 'university', row: 5, col: 2, prereqs: [], research_cost: { food: 200, stone: 75 } },
  { id: 'siegeengineers', type: 'tech', age: 3, building: 'university', row: 6, col: 2, prereqs: ['murderhole'], research_cost: { food: 600, wood: 500 } },
  { id: 'treadmillcrane', type: 'tech', age: 2, building: 'university', row: 5, col: 3, prereqs: [], research_cost: { food: 300, wood: 400 } },
  { id: 'heatedshot', type: 'tech', age: 2, building: 'university', row: 5, col: 4, prereqs: [], research_cost: { food: 350, gold: 100 } },
  { id: 'careening', type: 'tech', age: 2, building: 'university', row: 5, col: 5, prereqs: [], research_cost: { food: 250, gold: 150 } },
  { id: 'drydock', type: 'tech', age: 3, building: 'university', row: 6, col: 5, prereqs: ['careening'], research_cost: { food: 600, gold: 400 } },
  { id: 'clinker_construction', type: 'tech', age: 2, building: 'university', row: 5, col: 6, prereqs: [], research_cost: { wood: 200, gold: 100 } },
  { id: 'carvel_hull', type: 'tech', age: 3, building: 'university', row: 6, col: 6, prereqs: ['clinker_construction'], research_cost: { wood: 300, gold: 200 } },
  { id: 'siphons', type: 'tech', age: 2, building: 'university', row: 5, col: 7, prereqs: [], research_cost: { wood: 150, gold: 100 } },
  { id: 'incendiaries', type: 'tech', age: 3, building: 'university', row: 6, col: 7, prereqs: ['siphons'], research_cost: { wood: 250, gold: 200 } },
  { id: 'arrowslits', type: 'tech', age: 3, building: 'university', row: 6, col: 4, prereqs: [], research_cost: { food: 250, wood: 250 } },
  { id: 'shipwright', type: 'tech', age: 3, building: 'university', row: 6, col: 8, prereqs: [], research_cost: { food: 200, gold: 300 } },


  // ── MONASTERY ───────────────────────────────────────────
  { id: 'monk', type: 'unit', age: 2, building: 'monastery', row: 5, col: 0, prereqs: [], train_cost: { gold: 100 } },
  { id: 'redemption', type: 'tech', age: 2, building: 'monastery', row: 5, col: 1, prereqs: [], research_cost: { gold: 475 } },
  { id: 'atonement', type: 'tech', age: 2, building: 'monastery', row: 5, col: 2, prereqs: [], research_cost: { gold: 325 } },
  { id: 'heresy', type: 'tech', age: 2, building: 'monastery', row: 5, col: 3, prereqs: [], research_cost: { gold: 1000 } },
  { id: 'sanctity', type: 'tech', age: 2, building: 'monastery', row: 5, col: 4, prereqs: [], research_cost: { gold: 120 } },
  { id: 'fervor', type: 'tech', age: 2, building: 'monastery', row: 5, col: 5, prereqs: [], research_cost: { gold: 140 } },
  { id: 'herbalmedicine', type: 'tech', age: 2, building: 'monastery', row: 5, col: 6, prereqs: [], research_cost: { gold: 350 } },
  { id: 'illumination', type: 'tech', age: 3, building: 'monastery', row: 6, col: 1, prereqs: ['redemption'], research_cost: { food: 120, gold: 150 } },
  { id: 'blockprinting', type: 'tech', age: 3, building: 'monastery', row: 6, col: 2, prereqs: ['atonement'], research_cost: { gold: 200 } },
  { id: 'theocracy', type: 'tech', age: 3, building: 'monastery', row: 6, col: 4, prereqs: ['sanctity'], research_cost: { food: 200, gold: 250 } },
  { id: 'faith', type: 'tech', age: 3, building: 'monastery', row: 6, col: 5, prereqs: ['fervor'], research_cost: { food: 750, gold: 900 } },

  // ── Monastery special / unique ───────────────────────────
  { id: 'warrior_priest', type: 'unit', age: 2, building: 'monastery', row: 5, col: 7, special: true, variant: 'unique', prereqs: [], train_cost: { gold: 100 } },
  { id: 'missionary', type: 'unit', age: 2, building: 'monastery', row: 5, col: 7, special: true, variant: 'unique', prereqs: [], train_cost: { gold: 100 } },


  // ── CASTLE ──────────────────────────────────────────────
  { id: 'trebuchet', type: 'unit', age: 2, building: 'castle', row: 5, col: 2, prereqs: [], train_cost: { food: 200, gold: 200 } },
  { id: 'petard', type: 'unit', age: 2, building: 'castle', row: 5, col: 3, prereqs: [], train_cost: { food: 65, gold: 35 } },
  { id: 'uniqueunit', type: 'unique', age: 2, building: 'castle', row: 5, col: 4, prereqs: [], train_cost: { food: 0, gold: 0 } },
  { id: 'eliteunique', type: 'unique', age: 3, building: 'castle', row: 6, col: 4, prereqs: ['uniqueunit'], research_cost: { food: 0, gold: 0 }, train_cost: { food: 0, gold: 0 } },
  { id: 'uniquetech1', type: 'unique', age: 2, building: 'castle', row: 5, col: 5, prereqs: [], research_cost: { food: 300, gold: 300 } },
  { id: 'uniquetech2', type: 'unique', age: 3, building: 'castle', row: 6, col: 5, prereqs: ['uniquetech1'], research_cost: { food: 500, gold: 500 } },
  
  { id: 'hoardings', type: 'tech', age: 3, building: 'castle', row: 6, col: 6, prereqs: [], research_cost: { food: 400, stone: 400 } },
  { id: 'conscription', type: 'tech', age: 3, building: 'castle', row: 6, col: 7, prereqs: [], research_cost: { food: 150, gold: 150 } },
  { id: 'sappers', type: 'tech', age: 3, building: 'castle', row: 7, col: 6, prereqs: [], research_cost: { food: 75, gold: 75 } },
  { id: 'spy', type: 'tech', age: 3, building: 'castle', row: 7, col: 7, prereqs: [], research_cost: { gold: 200 } },

  // ── Castle special / unique ──────────────────────────────
  { id: 'kipchak_c', type: 'unit', age: 3, building: 'castle', row: 6, col: 6, special: true, variant: 'unique', prereqs: [], train_cost: { food: 40, gold: 35 } },
  { id: 'krepost', type: 'unit', age: 2, building: 'castle', row: 4, col: 7, special: true, variant: 'unique', prereqs: [], build_cost: { stone: 350 } },
  { id: 'donjon', type: 'unit', age: 1, building: 'barracks', row: 2, col: 5, special: true, variant: 'unique', prereqs: [], build_cost: { wood: 75, stone: 175 } },


  // ── MARKET ──────────────────────────────────────────────
  { id: 'tradecart', type: 'unit', age: 1, building: 'market', row: 3, col: 0, prereqs: [], train_cost: { food: 100, wood: 50 } },
  { id: 'coinage', type: 'tech', age: 2, building: 'market', row: 4, col: 0, prereqs: [], research_cost: { food: 200, gold: 50 } },
  { id: 'banking', type: 'tech', age: 3, building: 'market', row: 6, col: 0, prereqs: ['coinage'], research_cost: { food: 300, gold: 200 } },
  { id: 'guilds', type: 'tech', age: 3, building: 'market', row: 7, col: 0, prereqs: [], research_cost: { food: 150, gold: 100 } },
  { id: 'feitoria', type: 'unit', age: 3, building: 'market', row: 6, col: 3, special: true, variant: 'unique', prereqs: [], build_cost: { wood: 250, gold: 250, stone: 250 } },
  { id: 'caravanserai', type: 'unit', age: 3, building: 'market', row: 6, col: 4, special: true, variant: 'regional', prereqs: [], build_cost: { wood: 150 } },

  { id: 'villager', type: 'unit', age: 0, building: 'tc', row: 1, col: 0, prereqs: [], train_cost: { food: 50 } },
  { id: 'loom', type: 'tech', age: 0, building: 'tc', row: 1, col: 2, prereqs: [], research_cost: { gold: 50 } },
  { id: 'wheelbarrow', type: 'tech', age: 1, building: 'tc', row: 2, col: 0, prereqs: [], research_cost: { food: 175, wood: 50 } },
  { id: 'townwatch', type: 'tech', age: 1, building: 'tc', row: 2, col: 2, prereqs: [], research_cost: { food: 75 } },
  { id: 'handcart', type: 'tech', age: 2, building: 'tc', row: 4, col: 0, prereqs: ['wheelbarrow'], research_cost: { food: 300, wood: 200 } },
  { id: 'townpatrol', type: 'tech', age: 2, building: 'tc', row: 4, col: 2, prereqs: ['townwatch'], research_cost: { food: 500 } },



  // ── Age Advancement Techs ────────────────────────────────
  { id: 'feudalage', type: 'tech', age: 0, building: 'tc', row: 1, col: 1, prereqs: [], research_cost: { food: 500 } },
  { id: 'castleage', type: 'tech', age: 1, building: 'tc', row: 2, col: 1, prereqs: ['feudalage'], research_cost: { food: 800, gold: 200 } },
  { id: 'imperialage', type: 'tech', age: 2, building: 'tc', row: 4, col: 1, prereqs: ['castleage'], research_cost: { food: 1000, gold: 800 } },


  // ── MILL ────────────────────────────────────────────────
  { id: 'horsecollar', type: 'tech', age: 1, building: 'mill', row: 2, col: 0, prereqs: [], research_cost: { food: 75, wood: 75 } },
  { id: 'heavyplow', type: 'tech', age: 2, building: 'mill', row: 4, col: 0, prereqs: ['horsecollar'], research_cost: { food: 125, wood: 125 } },
  { id: 'croprotation', type: 'tech', age: 3, building: 'mill', row: 6, col: 0, prereqs: ['heavyplow'], research_cost: { food: 250, wood: 250, gold: 60 } },
 
  // ── LUMBER CAMP ─────────────────────────────────────────
  { id: 'doublebitaxe', type: 'tech', age: 1, building: 'lumber', row: 2, col: 0, prereqs: [], research_cost: { food: 100, wood: 50 } },
  { id: 'bowsaw', type: 'tech', age: 2, building: 'lumber', row: 4, col: 0, prereqs: ['doublebitaxe'], research_cost: { food: 150, wood: 100 } },
  { id: 'twomansaw', type: 'tech', age: 3, building: 'lumber', row: 6, col: 0, prereqs: ['bowsaw'], research_cost: { food: 300, wood: 200 } },

  // ── MINING CAMP ─────────────────────────────────────────
  { id: 'goldmining', type: 'tech', age: 1, building: 'mining', row: 2, col: 0, prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'goldshaft', type: 'tech', age: 2, building: 'mining', row: 4, col: 0, prereqs: ['goldmining'], research_cost: { food: 200, wood: 100 } },
  { id: 'stonemining', type: 'tech', age: 1, building: 'mining', row: 2, col: 1, prereqs: [], research_cost: { food: 100, wood: 75 } },
  { id: 'stoneshaft', type: 'tech', age: 2, building: 'mining', row: 4, col: 1, prereqs: ['stonemining'], research_cost: { food: 200, wood: 100 } },

  // ── TAHSILI (Asentamiento) ────────────────────────────────
  { id: 'horsecollar_t',  type: 'tech', age: 1, building: 'tahsili', row: 2, col: 3, variant: 'regional', prereqs: [], research_cost: { food: 75, wood: 75 } },
  { id: 'heavyplow_t',    type: 'tech', age: 2, building: 'tahsili', row: 4, col: 3,  variant: 'regional',prereqs: ['horsecollar_t'], research_cost: { food: 125, wood: 125 } },
  { id: 'croprotation_t', type: 'tech', age: 3, building: 'tahsili', row: 6, col: 3,  variant: 'regional',prereqs: ['heavyplow_t'], research_cost: { food: 250, wood: 250, gold: 60 } },
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
  { type: 'building', id: 'dock',       name: 'Muelle',            icon: '⚓', age: 0, row: 0, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 1500, armor: [0, 7] } },
  { type: 'building', id: 'harbor',     name: 'Puerto',            icon: '⚓', age: 0, row: 0, prereqs: [],           build_cost: { wood: 150 }, stats: { hp: 2000, armor: [0, 7], attack: 4, range: 6 }, replaces: ['dock'] },
  { type: 'building', id: 'university', name: 'Universidad',       icon: '🎓', age: 2, row: 4, prereqs: [],           build_cost: { wood: 200 }, stats: { hp: 2100, armor: [0, 7] } },
  // ── Torres (columna vertical compartida) ──────────────────
  { type: 'building', id: 'outpost',       name: 'Puesto Avanz.',   icon: '🗼', age: 0, row: 0, col: 0, prereqs: [],              build_cost: { wood: 25,  stone: 5   }, stats: { hp:  500, armor: [0, 0]               } },
  { type: 'defencive', id: 'watchtower',    name: 'Torre Vigía',     icon: '🏗️', age: 1, row: 2, col: 0,prereqs: [],              build_cost: { wood: 125, stone: 50  }, stats: { hp: 1020, armor: [1, 7], attack:   5, range: 8 } },
  { type: 'defencive', id: 'guardtower',    name: 'Torre Guardia',   icon: '🏗️', age: 2, row: 4, col: 0,prereqs: ['watchtower'],  build_cost: { wood: 125, stone: 50  }, stats: { hp: 1500, armor: [2, 8], attack:   7, range: 8 } },
  { type: 'defencive', id: 'keep',          name: 'Torreón',         icon: '🏗️', age: 3, row: 6, col: 0, prereqs: ['guardtower'],  build_cost: { wood: 125, stone: 50  }, stats: { hp: 2250, armor: [3, 9], attack:   8, range: 8 } },
  { type: 'defencive', id: 'bombardtower',  name: 'Torre Bombarda',  icon: '💣', age: 3, row: 7, col: 0, prereqs: [],              build_cost: { wood: 125, stone: 125 }, stats: { hp: 2220, armor: [3, 9], attack: 120, range: 12 } },
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
  { type: 'building', id: 'fortified_church', name: 'Iglesia Fort.',variant: 'regional',  icon: '⛪', age: 2, row: 4, prereqs: [],         build_cost: { wood: 200 }, stats: { hp: 2500, armor: [0, 8] }, replaces: ['monastery'] },
  // ── Economía ──────────────────────────────────────────────
  { type: 'building', id: 'tc',      name: 'Centro Urbano', icon: '🏰', age: 0, row: 0, prereqs: [], build_cost: { wood: 275, stone: 100 }, stats: { hp: 2400, armor: [3, 5], attack: 5, range: 6 } },
  { type: 'building', id: 'house',   name: 'Casa',          icon: '',   age: 0, row: 0, prereqs: [], build_cost: { wood: 25  }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'mining',  name: 'Camp. Minero',  icon: '⛏️', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'lumber',  name: 'Camp. Maderero',icon: '🪵', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'tahsili', name: 'Asentamiento',  icon: '🏠', variant: 'regional',age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['lumber', 'mining', 'mill', 'mulecart'] },
  { type: 'building', id: 'mulecart',name: 'Mula de Carga', icon: '🫏', variant: 'regional',age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['lumber', 'mining', 'tahsili'] },
  { type: 'building', id: 'market',  name: 'Mercado',       icon: '💰', age: 1, row: 2, prereqs: ['mill'], build_cost: { wood: 175 }, stats: { hp: 2100, armor: [0, 7] } },
  { type: 'building', id: 'mill',    name: 'Molino',        icon: '🌾', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] } },
  { type: 'building', id: 'folwark', name: 'Folwark',       icon: '🌾', age: 0, row: 0, prereqs: [], build_cost: { wood: 100 }, stats: { hp: 1000, armor: [0, 7] }, replaces: ['mill'] },
];