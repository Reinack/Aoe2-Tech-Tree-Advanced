// Stat deltas produced by each technology.
// ─────────────────────────────────────────────────────────────────────────────
// Standard fields:
//   hp                          Flat HP increase
//   hp_pct                      HP % increase  (10 = +10 %)
//   attack                      Flat attack increase
//   attack_pct                  Attack % increase  (25 = +25 %)
//   armor_melee                 Flat melee armor increase
//   armor_pierce                Flat pierce armor increase
//   range                       Flat range increase
//   speed_pct                   Movement speed % faster  (10 = +10 %)
//   attack_speed_pct            Attack speed % faster  (33 = fires 33 % faster → ROF × 0.75)
//   production_speed_pct        Unit training % faster
//   build_speed_pct             Building construction % faster
//   vs_X_attack                 Bonus attack vs unit class X
//   vs_building_attack_pct      Bonus attack % vs buildings
//   additional_projectiles      Extra projectiles fired per shot
//   trample_damage              Flat trample damage to adjacent units
//   trample_damage_pct          Trample damage as % of base attack
//   trample_radius              Trample blast radius (tiles)
//   regeneration_per_minute     HP regeneration per minute
//   replace_gold_with_food      Gold cost replaced by food cost
//   replace_gold_with_wood      Gold cost replaced by wood cost
//   ignore_armor                Attacks ignore armor
//   minimum_range               Minimum attack range override (0 = no minimum)
//   accuracy_vs_stationary      Accuracy vs stationary targets (%)
//   accuracy                    Flat accuracy value (%)
//   passive_effect              Non-stat mechanic — string tag for UI/tooltip
// ─────────────────────────────────────────────────────────────────────────────

export const TECH_MODIFIERS = {

  // ── BLACKSMITH — Infantry / Cavalry Attack ────────────────────────────────
  'forging':              { attack: 1 },
  'ironcasting':          { attack: 1 },
  'blastfurnace':         { attack: 2 },

  // ── BLACKSMITH — Archer / Building / Ship Attack ──────────────────────────
  'fletching':            { attack: 1, range: 1 },
  'bodkinarrow':          { attack: 1, range: 1 },
  'bracer':               { attack: 1, range: 1 },

  // ── BLACKSMITH — Infantry Armor ───────────────────────────────────────────
  'scalemailarmor':       { armor_melee: 1, armor_pierce: 1 },
  'chainmailarmor':       { armor_melee: 1, armor_pierce: 1 },
  'platemailarmor':       { armor_melee: 2, armor_pierce: 1 },

  // ── BLACKSMITH — Cavalry Armor ────────────────────────────────────────────
  'scalebarding':         { armor_melee: 1, armor_pierce: 1 },
  'chainbarding':         { armor_melee: 1, armor_pierce: 1 },
  'platebarding':         { armor_melee: 2, armor_pierce: 1 },

  // ── BLACKSMITH — Archer Armor ─────────────────────────────────────────────
  'paddedarcharmor':      { armor_melee: 1, armor_pierce: 1 },
  'leatherarcharmor':     { armor_melee: 1, armor_pierce: 1 },
  'ringarcherarmor':      { armor_melee: 1, armor_pierce: 2 },

  // ── STABLE ────────────────────────────────────────────────────────────────
  'bloodlines':           { hp: 20 },
  'husbandry':            { speed_pct: 10 },

  // ── BARRACKS ──────────────────────────────────────────────────────────────
  'squires':              { speed_pct: 10 },
  'gambesons':            { armor_pierce: 1 },

  // ── ARCHERY RANGE ─────────────────────────────────────────────────────────
  'thumbring': {
    // Foot archers fire 17.65 % faster; Cavalry Archers 11.1 % faster
    attack_speed_pct:      17.65,
    accuracy_vs_stationary: 100    // 100 % accuracy vs stationary targets
  },
  'parthian': {
    armor_melee:        1,
    armor_pierce:       2,
    vs_spearman_attack: 2          // Cavalry Archers +2 attack vs Spearman-line
  },

  // ── UNIVERSITY ────────────────────────────────────────────────────────────
  'ballistics': {
    // All ranged units (archers, ships, scorpions, towers) hit moving targets accurately
    passive_effect: 'accuracy_moving_targets'
  },
  'masonry': {
    hp_pct:        10,
    armor_melee:    1,
    armor_pierce:   1,
    building_armor: 3              // +3 building armor vs melee siege
  },
  'architecture': {
    hp_pct:        10,
    armor_melee:    1,
    armor_pierce:   1,
    building_armor: 3
  },
  'siegeengineers': {
    range:                         1,   // Ranged siege +1 range
    vs_building_attack_pct:       20,   // Siege +20 % bonus damage vs buildings
    demolition_vs_building_attack_pct: 40  // Petards / Demo ships +40 % vs buildings
  },
  'chemistry': {
    attack: 1,                     // All projectile units (archers, towers, ships) +1 attack
    passive_effect: 'enables_gunpowder'
  },
  'arrowslits': {
    // Watch Towers +1, Guard Towers +2, Keeps/Donjons/Krepost +3 attack
    watchtower_attack: 1,
    guardtower_attack: 2,
    keep_attack:       3
  },
  'murderhole': {
    passive_effect: 'removes_minimum_range'  // Towers and TCs lose minimum attack range
  },
  'heatedshot': {
    attack: 3,                     // Towers and TCs +3 attack vs ships
    passive_effect: 'vs_ships_attack_bonus'
  },
  'hoardings': {
    hp: 1500                       // Castle/Krepost/Donjon +1500 HP
  },
  // ── CASTLE ───────────────────────────────────────────────────────────────────
  'conscription': { production_speed_pct: 33 },  // Military buildings (except Siege Workshop) work +33 % faster
  'treadmillcrane': {
    build_speed_pct: 20            // Villagers build +20 % faster
  },

  // ── DOCK ──────────────────────────────────────────────────────────────────
  'shipwright': {
    wood_cost_pct:   -20,          // Ships cost -20 % wood
    build_speed_pct:  50           // Ships build +50 % faster
  },
  'careening': {
    armor_pierce:   1,             // Warships +1 pierce armor
    transport_hp: 100              // Transport Ships +100 HP
  },
  'drydock': {
    speed_pct: 15                  // Ships +15 % movement speed
  },
  'clinker_construction': { speed_pct: 10 },  // Ships +10 % movement speed
  'carvel_hull':          { speed_pct: 10 },  // Ships +10 % movement speed
  'siphons':              { range: 1 },        // Fire Galley line +1 range
  'incendiaries':         { attack: 1 },       // Fire Galley line +1 attack
  'fishing_lines': {
    gather_speed_pct: 10,          // Fishing Ships gather +10 % faster
    carry_capacity:    5           // +5 carry capacity
  },
  'gillnets': {
    gather_speed_pct: 10,
    carry_capacity:    5
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UNIQUE TECHNOLOGIES
  // ═══════════════════════════════════════════════════════════════════════════

  // Armenians ────────────────────────────────────────────────────────────────
  'armenians_uniquetech1': {  // Cilician Fleet
    range:                       1,   // Galley-line and Dromons +1 range
    demolition_blast_radius_pct: 20   // Demo Ships +20 % blast radius
  },
  'armenians_uniquetech2': {  // Fereters
    hp:             30,            // Infantry (except Spearman-line) +30 HP
    heal_speed_pct: 100            // Warrior Priests heal 100 % faster
  },

  // Aztecs ───────────────────────────────────────────────────────────────────
  'aztecs_uniquetech1': { attack: 1, range: 1 },  // Atlatl: Skirmishers +1 attack +1 range
  'aztecs_uniquetech2': { attack: 4 },             // Garland Wars: Infantry +4 attack

  // Bengalis ─────────────────────────────────────────────────────────────────
  'bengalis_uniquetech1': {  // Paiks
    attack_speed_pct: 20    // Rathas and Elephant Units attack 20 % faster
  },
  'bengalis_uniquetech2': {  // Mahayana
    // Villagers and Monks take -10 % population space
    passive_effect: 'pop_space_reduction'
  },

  // Berbers ──────────────────────────────────────────────────────────────────
  'berbers_uniquetech1': {  // Kasbah
    // Team Castles work +25 % faster
    production_speed_pct: 25,
    passive_effect:       'team_castle_work_speed'
  },
  'berbers_uniquetech2': {  // Maghrebi Camels
    regeneration_per_minute: 15   // Camel Units regenerate 15 HP/min
  },

  // Bohemians ────────────────────────────────────────────────────────────────
  'bohemians_uniquetech1': { speed_pct: 15 },  // Wagenburg Tactics: Gunpowder units +15 % speed
  'bohemians_uniquetech2': {                   // Hussite Reforms
    replace_gold_with_food: true               // Monks and Monastery technologies gold cost → food
  },

  // Britons ──────────────────────────────────────────────────────────────────
  'britons_uniquetech1': {  // Yeomen
    range:             1,   // Foot Archers and Skirmisher-line +1 range
    watchtower_attack: 2    // Watch Tower-line +2 attack
  },
  'britons_uniquetech2': {  // Warwolf
    accuracy:     100,      // Trebuchets 100 % accurate
    blast_radius:   0.5     // Trebuchets deal blast damage
  },

  // Bulgarians ───────────────────────────────────────────────────────────────
  'bulgarians_uniquetech1': { attack_speed_pct: 33 }, // Stirrups: Cavalry attack 33 % faster
  'bulgarians_uniquetech2': { armor_melee: 5 },        // Bagains: Two-Handed Swordsman +5 melee armor

  // Burmese ──────────────────────────────────────────────────────────────────
  'burmese_uniquetech1': { vs_archer_attack: 4 },              // Manipur Cavalry: Cavalry +4 vs Archers
  'burmese_uniquetech2': { armor_melee: 1, armor_pierce: 1 },  // Howdah: Elephant Units +1/+1 armor

  // Byzantines ───────────────────────────────────────────────────────────────
  'byzantines_uniquetech1': {  // Greek Fire
    range:                   1,   // Fire Ships +1 range
    passive_effect:          'dromons_tower_blast_radius'  // Dromons/Bombard Towers +blast radius
  },
  'byzantines_uniquetech2': {  // Logistica
    vs_infantry_attack: 6,        // Cataphracts +6 attack vs Infantry
    passive_effect:     'cataphract_trample_damage'
  },

  // Celts ────────────────────────────────────────────────────────────────────
  'celts_uniquetech1': {  // Stronghold
    attack_speed_pct: 33,          // Castles and Watch Tower-line attack 33 % faster
    passive_effect:   'castle_heals_infantry'  // Castles heal nearby allied Infantry
  },
  'celts_uniquetech2': { hp_pct: 40 },  // Furor Celtica: Siege Workshop units +40 % HP

  // Chinese ──────────────────────────────────────────────────────────────────
  'chinese_uniquetech1': { hp_pct: 30 },  // Great Wall: Walls, Towers and Bombard Towers +30 % HP
  'chinese_uniquetech2': {                // Rocketry
    attack_pct:    25,
    passive_effect: 'rocket_projectiles'  // Scorpions, Rocket Carts and Lou Chuans +25 % attack; Lou Chuans fire rockets
  },

  // Cumans ───────────────────────────────────────────────────────────────────
  'cumans_uniquetech1': { production_speed_pct: 100 },         // Steppe Husbandry: Scout/Steppe Lancer/CA train 2× faster
  'cumans_uniquetech2': { passive_effect: 'free_elite_kipchaks' }, // Cuman Mercenaries: all team members train 5 free Elite Kipchaks

  // Dravidians ───────────────────────────────────────────────────────────────
  'dravidians_uniquetech1': { regeneration_per_minute: 30 },  // Medical Corps: Elephant units regenerate 30 HP/min
  'dravidians_uniquetech2': { ignore_armor: true },            // Wootz Steel: Infantry and Cavalry attacks ignore armor

  // Ethiopians ───────────────────────────────────────────────────────────────
  'ethiopians_uniquetech1': {  // Royal Heirs
    damage_reduction_vs_mounted: 3  // Shotel Warriors and Camel Riders receive -3 damage from Mounted Units
  },
  'ethiopians_uniquetech2': {  // Torsion Engines
    // Mangonel line/Rams/Scorpions gain increased blast radius
    passive_effect: 'siege_blast_radius_increase'
  },

  // Franks ───────────────────────────────────────────────────────────────────
  'franks_uniquetech1': { range: 2 },               // Bearded Axe: Throwing Axemen +2 range
  'franks_uniquetech2': { production_speed_pct: 40 }, // Chivalry: Stables work +40 % faster

  // Georgians ────────────────────────────────────────────────────────────────
  'georgians_uniquetech1': {  // Svan Towers
    attack:        2,          // Fortifications +2 attack
    passive_effect: 'tower_pass_through_damage'  // Watch Tower-line deals pass-through damage
  },
  'georgians_uniquetech2': {  // Aznauri Cavalry
    // Mounted Units take -20 % population space
    passive_effect: 'cavalry_pop_reduction'
  },

  // Goths ────────────────────────────────────────────────────────────────────
  'goths_uniquetech1': { passive_effect: 'huskarls_at_barracks' },  // Anarchy: Huskarls can be trained at Barracks
  'goths_uniquetech2': { production_speed_pct: 100 },                // Perfusion: Barracks work +100 % faster

  // Gurjaras ─────────────────────────────────────────────────────────────────
  'gurjaras_uniquetech1': { food_cost_pct: -25 },    // Kshatriyas: Military units cost -25 % food
  'gurjaras_uniquetech2': { armor_melee: 4 },         // Frontier Guards: Camels and Elephant Archers +4 melee armor

  // Hindustanis ──────────────────────────────────────────────────────────────
  'hindustanis_uniquetech1': {  // Grand Trunk Road
    gold_generation_pct: 10,   // All gold income +10 % faster
    market_fee_pct:      10    // Market trading fee reduced to 10 %
  },
  'hindustanis_uniquetech2': { range: 2 },  // Shatagni: Hand Cannoneers +2 range

  // Incas ────────────────────────────────────────────────────────────────────
  'incas_uniquetech1': {  // Andean Sling
    attack:        1,
    minimum_range: 0       // Skirmishers and Slingers have no minimum range
  },
  'incas_uniquetech2': { armor_melee: 1, armor_pierce: 1 },  // Fabric Shields: Kamayuks, Slingers, Champi Warriors +1/+1 armor

  // Italians ─────────────────────────────────────────────────────────────────
  'italians_uniquetech1': { trade_cost_pct: -50 },  // Silk Road: Trade Units cost -50 %
  'italians_uniquetech2': {                          // Pavise
    armor_melee:             1,    // Condottieri and Genoese Crossbowmen +1/+1 armor
    armor_pierce:            1,
    pass_through_damage_pct: 15,   // Hand Cannoneers +15 % pass-through damage
    accuracy:                90    // Hand Cannoneers 90 % accurate
  },

  // Japanese ─────────────────────────────────────────────────────────────────
  'japanese_uniquetech1': { additional_projectiles: 2 },  // Yasama: Watch Tower-line fires 2 extra arrows
  'japanese_uniquetech2': {                               // Kataparuto
    attack_speed_pct: 33,   // Trebuchets attack 33 % faster
    pack_time:         3    // Pack/unpack time reduced to ~3 seconds
  },

  // Jurchens ─────────────────────────────────────────────────────────────────
  'jurchens_uniquetech1': { regeneration_per_minute: 500 },     // Fortified Bastions: Fortifications regenerate 500 HP/min
  'jurchens_uniquetech2': { passive_effect: 'thunderclap_bombs' }, // Thunderclap Bombs: Rocket Carts/Lou Chuans/Grenadiers explode on death and on projectile impact

  // Khitan ───────────────────────────────────────────────────────────────────
  'khitans_uniquetech1': { reflect_damage_pct: 25 },       // Lamellar Armor: Infantry and Skirmishers reflect 25 % damage
  'khitans_uniquetech2': { passive_effect: 'ordo_cavalry_combat_regen' }, // Ordo Cavalry: cavalry regenerate 150 % max HP/min while attacking

  // Khmer ────────────────────────────────────────────────────────────────────
  'khmer_uniquetech1': { attack: 3 },                   // Tusk Swords: Battle Elephants +3 attack
  'khmer_uniquetech2': { additional_projectiles: 1 },   // Double Crossbow: Ballista Elephants and Scorpions fire 1 extra projectile

  // Koreans ──────────────────────────────────────────────────────────────────
  'koreans_uniquetech1': { range: 2 },   // Eupseong: Watch Tower-line +2 range
  'koreans_uniquetech2': {               // Shinkichon
    range:                  1,           // Rocket Cart and Turtle Ship +1 range
    additional_projectiles: 6            // Rocket Cart +6 projectiles; Turtle Ship +2 rocket projectiles
  },

  // Lithuanians ──────────────────────────────────────────────────────────────
  'lithuanians_uniquetech1': { range: 3 },         // Hill Forts: Town Centers +3 range
  'lithuanians_uniquetech2': { armor_pierce: 2 },  // Tower Shields: Spearman-line and Skirmishers +2 pierce armor

  // Magyars ──────────────────────────────────────────────────────────────────
  'magyars_uniquetech1': { replace_gold_with_food: true },  // Corvinian Army: Magyar Huszar gold cost → food
  'magyars_uniquetech2': { attack: 1, range: 1 },           // Recurve Bow: Mounted Archers +1 attack +1 range

  // Malay ────────────────────────────────────────────────────────────────────
  'malay_uniquetech1': { passive_effect: 'docks_to_harbors' }, // Thalassocracy: Docks upgraded to Harbors
  'malay_uniquetech2': { replace_gold_with_food: true },       // Forced Levy: Militia-line gold cost → food

  // Malians ──────────────────────────────────────────────────────────────────
  'malians_uniquetech1': {  // Tigui
    // Town Centers fire arrows without garrison (min 8, max 18)
    passive_effect:   'tc_fires_arrows',
    minimum_arrows:    8,
    maximum_arrows:   18
  },
  'malians_uniquetech2': { attack: 5 },  // Farimba: Cavalry +5 attack

  // Mapuche ──────────────────────────────────────────────────────────────────
  'mapuche_uniquetech1': { pass_through_damage_pct: 30 },  // Malon: Bolas Riders, Slingers and Skirmishers deal 30 % pass-through damage
  'mapuche_uniquetech2': { cost_pct: -15 },                // Butalmapu: team Castle unique units and Bolas Riders cost -15 %

  // Mayans ───────────────────────────────────────────────────────────────────
  'mayans_uniquetech1': { additional_projectiles: 1 },  // Hul'che Javelineers: Skirmishers fire 1 extra projectile
  'mayans_uniquetech2': { hp: 40 },                     // Holcans: Eagle Warriors +40 HP

  // Mongols ──────────────────────────────────────────────────────────────────
  'mongols_uniquetech1': { passive_effect: 'nomad_pop' },  // Nomads: lost Houses do not decrease population space
  'mongols_uniquetech2': { speed_pct: 50 },                // Drill: Siege Workshop units move +50 % faster

  // Muisca ───────────────────────────────────────────────────────────────────
  'muisca_uniquetech1': { speed_pct: 15 },  // Herbalismo: Archer-line +15 % movement speed
  'muisca_uniquetech2': { range: 1 },        // Huaracas: Slingers +1 range

  // Persians ─────────────────────────────────────────────────────────────────
  'persians_uniquetech1': { replace_gold_with_wood: true },  // Kamandaran: Archer-line gold cost → wood (50 wood)
  'persians_uniquetech2': {  // Citadels
    attack:                4,   // Castles +4 attack
    vs_ram_attack:         3,   // +3 vs Rams
    vs_infantry_attack:    3,   // +3 vs Infantry
    damage_reduction_pct: 25    // Castles receive -25 % bonus damage
  },

  // Poles ────────────────────────────────────────────────────────────────────
  'poles_uniquetech1': { gold_cost_pct: -60 },  // Szlachta Privileges: Knight-line -60 % gold cost
  'poles_uniquetech2': {                         // Lechitic Legacy
    trample_damage_pct: 33,    // Scout Cavalry-line deals 33 % trample damage
    trample_radius:      0.5
  },

  // Portuguese ───────────────────────────────────────────────────────────────
  'portuguese_uniquetech1': {  // Circumnavigation
    build_speed_pct: 33,        // Ships train +33 % faster
    passive_effect:  'map_explored'
  },
  'portuguese_uniquetech2': {  // Arquebus
    // Gunpowder units fire accurately at moving targets (+0.5 projectile speed; Bombard Towers/Cannons +0.2)
    passive_effect: 'gunpowder_accuracy_moving_targets'
  },

  // Romans ───────────────────────────────────────────────────────────────────
  'romans_uniquetech1': {  // Ballistas
    attack_speed_pct: 33,  // Scorpions attack 33 % faster
    galley_attack:     2   // Galley-line +2 attack
  },
  'romans_uniquetech2': {  // Comitatenses
    production_speed_pct: 50,  // Militia-line, Knight-line and Centurions train +50 % faster
    passive_effect:       'charge_attack'  // Units gain a charge attack
  },

  // Saracens ─────────────────────────────────────────────────────────────────
  'saracens_uniquetech1': {  // Bimaristan
    // Monks passively heal all friendly units in a 5-tile radius by 75 HP/min
    passive_effect:          'monk_passive_heal',
    passive_heal_radius:      5,
    passive_heal_per_minute: 75
  },
  'saracens_uniquetech2': { attack_pct: 15 },  // Counterweights: Trebuchets and Mangonel-line +15 % attack

  // Shu ──────────────────────────────────────────────────────────────────────
  'shu_uniquetech1': {  // Coiled Serpent Array
    // Spearman-line and White Feather Guards gain up to +15 % HP when 30 allies of the same type are nearby
    passive_effect: 'proximity_hp_bonus',
    max_hp_pct:     15
  },
  'shu_uniquetech2': { additional_projectiles: 2 },  // Bolt Magazine: Archer-line and War Chariots fire 2 extra projectiles; Lou Chuans +3

  // Sicilians ────────────────────────────────────────────────────────────────
  'sicilians_uniquetech1': {  // First Crusade
    // Up to 5 TCs each spawn 5 Serjeants; units more resistant to conversion
    passive_effect:       'spawn_serjeants',
    conversion_resistance: true
  },
  'sicilians_uniquetech2': { armor_melee: 1, armor_pierce: 2 },  // Hauberk: Knight-line +1 melee / +2 pierce armor

  // Slavs ────────────────────────────────────────────────────────────────────
  'slavs_uniquetech1': {  // Detinets
    // 40 % of Castle and Watch Tower-line stone cost replaced by wood
    passive_effect: 'stone_to_wood_construction'
  },
  'slavs_uniquetech2': {  // Druzhina
    trample_damage: 5,     // Infantry deal 5 trample damage to adjacent units
    trample_radius: 0.5
  },

  // Spanish ──────────────────────────────────────────────────────────────────
  'spanish_uniquetech1': {  // Inquisition
    // Monks and Missionaries convert faster; Missionaries +1 range
    passive_effect:   'faster_conversion',
    missionary_range: 1
  },
  'spanish_uniquetech2': {  // Supremacy
    hp:          40,
    attack:       6,
    armor_melee:  2,
    armor_pierce: 2
  },

  // Tatars ───────────────────────────────────────────────────────────────────
  'tatars_uniquetech1': { armor_melee: 1, armor_pierce: 1 },  // Silk Armor: Scout-line, Steppe Lancers and Cavalry Archers +1/+1 armor
  'tatars_uniquetech2': { range: 2 },                          // Timurid Siegecraft: Trebuchets +2 range

  // Teutons ──────────────────────────────────────────────────────────────────
  'teutons_uniquetech1': { armor_melee: 4 },  // Ironclad: Siege Weapons +4 melee armor
  'teutons_uniquetech2': {                    // Crenellations
    range:         3,                          // Castles +3 range
    passive_effect: 'infantry_fire_arrows_garrisoned'  // Garrisoned Infantry fires arrows from Castle
  },

  // Tupí ─────────────────────────────────────────────────────────────────────
  'tupi_uniquetech1': { attack_speed_pct: 25 },          // Caciques: Champi Warriors and Slingers attack 25 % faster
  'tupi_uniquetech2': { passive_effect: 'poison_damage' }, // Curare: Foot Archers and Fortifications deal poison damage

  // Turks ────────────────────────────────────────────────────────────────────
  'turks_uniquetech1': { hp: 20 },    // Sipahi: Mounted Archers +20 HP
  'turks_uniquetech2': { range: 2 },  // Artillery: Bombard Towers, Bombard Cannons and Cannon Galleons +2 range

  // Vietnamese ───────────────────────────────────────────────────────────────
  'vietnamese_uniquetech1': { hp: 100 },                         // Chatras: Battle Elephants +100 HP
  'vietnamese_uniquetech2': { passive_effect: 'wood_to_gold' },  // Paper Money: Lumberjacks generate ~1 gold per 68 s of woodcutting

  // Vikings ──────────────────────────────────────────────────────────────────
  'vikings_uniquetech1': {  // Chieftains
    vs_cavalry_attack: 5,  // Infantry +5 attack vs Cavalry
    vs_camel_attack:   4   // Infantry +4 attack vs Camel Units
  },
  'vikings_uniquetech2': { attack: 1 },  // Bogsveigar: Archer-line and Longboats +1 attack

  // Wei ──────────────────────────────────────────────────────────────────────
  'wei_uniquetech1': { passive_effect: 'soldiers_produce_food' },  // Tuntian: Infantry, Archers and Cavalry produce 1.8 food/min
  'wei_uniquetech2': { armor_melee: 4 },                            // Ming Guang Armor: Mounted units +4 melee armor

  // Wu ───────────────────────────────────────────────────────────────────────
  'wu_uniquetech1': { passive_effect: 'fire_damage_ships_buildings' },  // Red Cliffs Tactics: Demo Ships and Fire Archers inflict burning DoT on ships/buildings
  'wu_uniquetech2': { additional_projectiles: 2 },                       // Sitting Tiger: Traction Trebuchets and Lou Chuans fire 2 extra projectiles

};
