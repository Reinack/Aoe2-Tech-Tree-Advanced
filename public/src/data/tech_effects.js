export const UNIT_CLASSES = {
  // --- Clases Base ---
  'infantry': [
    'militia', 'manatarms', 'longsword', 'twohanded', 'champion',
    'spearman', 'pikeman', 'halberdier',
    'eaglescout', 'eaglewarrior', 'eliteeagle',
    'condottiero', 'flemish_militia', 'gbeto', 'woad_raider', 'shotel', 'karambit', 'obuch',
    'fire_lancer', 'elite_fire_lancer',
    'champiscout', 'champirunner', 'champiwarrior', 'elitechampi',
    'jian_swordsman'
  ],
  'mounted': [
    'scout', 'lightcav', 'hussar', 'winged_hussar', 'knight', 'cavalier', 'paladin', 'savar',
    'camel', 'heavycamel', 'imp_camel', 'battleeleph', 'eliteeleph', 'steppe_lancer', 'elite_steppe_lancer',
    'cavarcher', 'hcavarcher', 'elephant_archer', 'elite_elephant_archer', 'genitour', 'missionary',
    'hei_guang', 'heavy_hei_guang', 'war_chariot_s', 'xianbei_raider', 'bolas_rider', 'elite_bolas_rider'
  ],
  'archer': [
    'archer', 'crossbow', 'arbalester', 'skirmisher', 'eliteskirm', 'imp_skirmisher',
    'cavarcher', 'hcavarcher', 'elephant_archer', 'elite_elephant_archer', 'genitour', 'handcannon',
    'slinger', 'bolas_rider', 'elite_bolas_rider'
  ],
  'siege': [
    'batteram', 'cappedram', 'siegeram', 'mangonel', 'onager', 'siegeonager',
    'scorpion', 'heavyscorp', 'bombadcannon', 'trebuchet', 'petard',
    'rocket_cart', 'heavy_rocket_cart', 'traction_treb', 'war_chariot_s'
  ],
  'navy': [
    'galley', 'wargalley', 'galleon', 'firegalley', 'fireship', 'fastfireship',
    'demoraft', 'demoship', 'heavydemo', 'cannongalleon', 'elitecannon',
    'dromon', 'turtle_ship', 'longboat', 'carvel_hull', 'lou_chuan'
  ],
  'civilians': [
    'villager', 'tradecart', 'tradecog', 'fishingship'
  ],
  'religious': [
    'monk', 'missionary', 'warrior_priest'
  ],

  // --- Sub-clases y Combinaciones ---
  'foot_archer': [
    'archer', 'crossbow', 'arbalester', 'skirmisher', 'eliteskirm', 'imp_skirmisher',
    'slinger'
  ],
  'mounted_archer': [
    'cavarcher', 'hcavarcher', 'elephant_archer', 'elite_elephant_archer', 'genitour',
    'xianbei_raider', 'bolas_rider', 'elite_bolas_rider'
  ],
  'cavalry': [
    'scout', 'lightcav', 'hussar', 'winged_hussar', 'knight', 'cavalier', 'paladin', 'savar',
    'camel', 'heavycamel', 'imp_camel', 'battleeleph', 'eliteeleph', 'steppe_lancer', 'elite_steppe_lancer',
    'hei_guang', 'heavy_hei_guang', 'war_chariot_s'
  ],
  'skirmishers': [
    'skirmisher', 'eliteskirm', 'imp_skirmisher', 'genitour', 'slinger'
  ],
  'gunpowder': [
    'handcannon', 'bombadcannon', 'cannongalleon', 'elitecannon', 'bombardtower', 'janissary', 'conquistador',
    'rocket_cart', 'heavy_rocket_cart'
  ],
  'trade_units': [
    'tradecart', 'tradecog'
  ],
  'buildings': [
    'watchtower', 'guardtower', 'keep', 'bombardtower', 'castle', 'tc', 'krepost', 'donjon'
  ],

  // --- Clases de Edificios ---
  'towers': [
    'watchtower', 'guardtower', 'keep', 'bombardtower'
  ],
  'castles': [
    'castle', 'krepost', 'donjon'
  ],
  'town_centers': [
    'tc'
  ],
  'walls': [
    'stonewall', 'gate', 'fortifiedwall'
  ]
};

/**
 * Clasificación de Unidades Únicas por Clase.
 * Se usa para determinar si la UU de una civilización debe mostrarse en "Afecta a".
 * Las claves deben coincidir con los nombres en Spanish (que es como se indexan en UNIQUE_UNIT_STATS).
 */
export const UNIQUE_UNIT_CLASSES = {
  'Longbowman': ['archer', 'foot_archer'],
  'Catafracto': ['cavalry', 'mounted'],
  'Guerrero Jaguar': ['infantry'],
  'Arqueros con arco compuesto': ['archer', 'foot_archer'],
  'Sacerdotes guerreros': ['infantry', 'religious'],
  'Hacha Arrojadiza': ['infantry'],
  'Samurái': ['infantry'],
  'Berserk': ['infantry'],
  'Tarkán': ['cavalry', 'mounted'],
  'Conquistador': ['mounted_archer', 'gunpowder', 'mounted'],
  'Caballero Teutónico': ['infantry'],
  'Boyar': ['cavalry', 'mounted'],
  'Balistario': ['siege', 'mounted'],
  'Ballestero Genovés': ['archer', 'foot_archer'],
  'Chu Ko Nu': ['archer', 'foot_archer'],
  'Arquero de Plumas': ['archer', 'foot_archer'],
  'Mangudai': ['mounted_archer', 'mounted'],
  'Elefante de Guerra': ['cavalry', 'mounted'],
  'Órgano de Cañones': ['siege', 'gunpowder'],
  'Ratha': ['mounted_archer', 'cavalry', 'mounted'],
  'Arquero en Camello': ['mounted_archer', 'mounted'],
  'Arambai': ['mounted_archer', 'mounted'],
  'Carro Husita': ['siege', 'gunpowder'],
  'Coustillier': ['cavalry', 'mounted'],
  'Konnik': ['cavalry', 'mounted'],
  'Woad Raider': ['infantry'],
  'Kipchak': ['mounted_archer', 'mounted'],
  'Urumi Swordsman': ['infantry'],
  'Guerrero Shotel': ['infantry'],
  'Monaspa': ['cavalry', 'mounted'],
  'Chakram Thrower': ['infantry'],
  'Ghulam': ['infantry'],
  'Kamayuk': ['infantry'],
  'Leitis': ['cavalry', 'mounted'],
  'Huszar Magiar': ['cavalry', 'mounted'],
  'Karambit Warrior': ['infantry'],
  'Gbeto': ['infantry'],
  'Obuch': ['infantry'],
  'Legionario': ['infantry'],
  'Centurión': ['cavalry', 'mounted'],
  'Mameluco': ['cavalry', 'mounted'],
  'Sargento': ['infantry'],
  'Keshik': ['cavalry', 'mounted'],
  'Jenízaro': ['foot_archer', 'gunpowder'],
  'Rattan Archer': ['archer', 'foot_archer'],
  'Kona': ['cavalry', 'mounted'],
  'Bolas Rider': ['mounted_archer', 'mounted'],
  'Guerrero Guecha': ['archer', 'foot_archer'],
  'Guardia del Templo': ['infantry'],
  'Arquero de Madera Negra': ['archer', 'foot_archer'],
  'Guerrero Ibirapema': ['infantry'],
  'Champi Warrior': ['infantry'],
  'Pagoda de Hierro': ['cavalry', 'mounted'],
  'Arquero de Fuego': ['archer', 'foot_archer'],
  'Liao Dao': ['infantry'],
  'Caballería Tigre': ['cavalry', 'mounted'],
  'Guardián de Pluma Blanca': ['infantry'],
  'Liu Bei': ['infantry']
};

export const TECH_AFFECTS = {
  // Cuartel
  'squires': ['infantry'],
  'arson': ['infantry'],
  'gambesons': ['militia', 'manatarms', 'longsword', 'twohanded', 'champion'],

  // Galería de Tiro
  'thumbring': ['foot_archer', 'mounted_archer'],
  'parthian': ['mounted_archer'],

  // Establo
  'bloodlines': ['mounted'],
  'husbandry': ['mounted'],

  // Herrería - Ataque
  'fletching': ['foot_archer', 'mounted_archer', 'buildings', 'lou_chuan'],   // Lou Chuan: modo anti-unidad
  'bodkinarrow': ['foot_archer', 'mounted_archer', 'buildings', 'lou_chuan'],
  'bracer': ['foot_archer', 'mounted_archer', 'buildings', 'lou_chuan'],
  'forging': ['infantry', 'cavalry'],
  'ironcasting': ['infantry', 'cavalry'],
  'blastfurnace': ['infantry', 'cavalry'],

  // Herrería - Armadura
  'paddedarcharmor': ['foot_archer', 'mounted_archer', 'handcannon', 'grenadier'],
  'leatherarcharmor': ['foot_archer', 'mounted_archer', 'handcannon', 'grenadier'],
  'ringarcherarmor': ['foot_archer', 'mounted_archer', 'handcannon', 'grenadier'],
  'scalemailarmor': ['infantry'],
  'chainmailarmor': ['infantry'],
  'platemailarmor': ['infantry'],
  'scalebarding': ['cavalry'],
  'chainbarding': ['cavalry'],
  'platebarding': ['cavalry'],

  // Universidad
  'ballistics': ['foot_archer', 'mounted_archer', 'buildings', 'navy', 'siege', 'grenadier'],
  'chemistry': ['foot_archer', 'mounted_archer', 'gunpowder', 'buildings', 'navy', 'traction_treb', 'war_chariot_s'],
  'siegeengineers': ['siege', 'lou_chuan', 'grenadier'], // Lou Chuan: modo anti-edificio; Grenadier: foot archer con bonus edificios
  'masonry': ['buildings'],
  'architecture': ['buildings'],
  'fortifiedwall': ['walls'],
  'guardtower': ['watchtower'],
  'keep': ['guardtower'],
  'bombardtower': ['keep'],
  'arrowslits': ['watchtower', 'guardtower', 'keep'],
  'murderhole': ['buildings'],
  'treadmillcrane': ['buildings'],
  'heatedshot': ['towers', 'town_centers'],
  'hoardings': ['castles'],
  'careening': ['navy', 'fishingship', 'tradecog'],
  'drydock': ['navy', 'fishingship', 'tradecog'],
  'clinker_construction': ['navy', 'fishingship', 'tradecog'],
  'carvel_hull': ['navy', 'fishingship', 'tradecog'],
  'siphons': ['navy'],
  'incendiaries': ['navy'],

  // Muelle
  'shipwright': ['navy', 'fishingship', 'tradecog'],
  'fishing_lines': ['fishingship'],
  'gillnets': ['fishingship'],

  // Monasterio
  'sanctity': ['monk', 'warrior_priest'],
  'fervor': ['monk', 'warrior_priest'],
  'theocracy': ['monk'],
  'blockprinting': ['monk'],
  'redemption': ['monk'],
  'atonement': ['monk'],
  'heresy': ['monk'],
  'herbalmedicine': ['monk'],
  'devotion': ['monk'],
  'illumination': ['monk'],
  'faith': ['monk'],

  // Centro Urbano
  'loom':        ['villager'],
  'wheelbarrow': ['villager'],
  'handcart':    ['villager'],

  // Mercado
  'caravan': ['tradecart', 'tradecog'],

  // Castillo
  'conscription': ['infantry', 'foot_archer', 'mounted_archer', 'cavalry'],
  'sappers': ['villager'],

  // --- TECNOLOGÍAS ÚNICAS POR CIVILIZACIÓN ---

  // Armenios
  'armenians_uniquetech1': ['demoship', 'galley', 'wargalley', 'galleon', 'dromon'], // Cilician Fleet
  'armenians_uniquetech2': ['infantry', 'warrior_priest'], // Fereters (+HP inf, +heal monks)

  // Aztecas
  'aztecs_uniquetech1': ['skirmishers'], // Atlatl
  'aztecs_uniquetech2': ['infantry'], // Garland Wars

  // Bengalíes
  'bengalis_uniquetech1': ['ratha', 'battleeleph', 'eliteeleph', 'elephant_archer', 'elite_elephant_archer'], // Paiks
  'bengalis_uniquetech2': ['civilians', 'religious'], // Mahayana

  // Bereberes
  'berbers_uniquetech1': ['castle'], // Kasbah
  'berbers_uniquetech2': ['camel', 'heavycamel', 'imp_camel'], // Maghrebi Camels

  // Bohemios
  'bohemians_uniquetech1': ['gunpowder'], // Wagenburg Tactics
  'bohemians_uniquetech2': ['religious'], // Hussite Reforms

  // Britanos
  'britons_uniquetech1': ['foot_archer', 'watchtower', 'guardtower', 'keep'], // Yeomen
  'britons_uniquetech2': ['trebuchet'], // Warwolf

  // Búlgaros
  'bulgarians_uniquetech1': ['cavalry'], // Stirrups
  'bulgarians_uniquetech2': ['militia', 'manatarms', 'longsword', 'twohanded', 'champion'], // Bagains

  // Borgoñones
  'burgundians_uniquetech1': ['civilians'], // Burgundian Vineyards
  'burgundians_uniquetech2': ['flemish_militia'], // Flemish Revolution

  // Birmanos
  'burmese_uniquetech1': ['cavalry'], // Manipur Cavalry
  'burmese_uniquetech2': ['battleeleph', 'eliteeleph'], // Howdah

  // Bizantinos
  'byzantines_uniquetech1': ['firegalley', 'fireship', 'fastfireship', 'bombardtower', 'dromon'], // Greek Fire
  'byzantines_uniquetech2': ['uniqueunit', 'eliteunique'], // Logistica

  // Celtas
  'celts_uniquetech1': ['infantry'], // Stronghold
  'celts_uniquetech2': ['siege'], // Furor Celtica

  // Chinos
  'chinese_uniquetech1': ['walls', 'watchtower', 'guardtower', 'keep', 'bombardtower'], // Great Wall (+30% HP muros + línea torres)
  'chinese_uniquetech2': ['scorpion', 'heavyscorp', 'rocket_cart', 'heavy_rocket_cart', 'lou_chuan'], // Rocketry

  // Cumanos
  'cumans_uniquetech1': ['scout', 'lightcav', 'hussar', 'steppe_lancer', 'elite_steppe_lancer', 'cavarcher', 'hcavarcher'], // Steppe Husbandry
  'cumans_uniquetech2': ['castle'], // Cuman Mercenaries

  // Dravídicos
  'dravidians_uniquetech1': ['battleeleph', 'eliteeleph', 'elephant_archer', 'elite_elephant_archer'], // Medical Corps
  'dravidians_uniquetech2': ['infantry'], // Wootz Steel

  // Etíopes
  'ethiopians_uniquetech1': ['uniqueunit', 'eliteunique'], // Royal Heirs
  'ethiopians_uniquetech2': ['siege'], // Torsion Engines

  // Francos
  'franks_uniquetech1': ['uniqueunit', 'eliteunique'], // Bearded Axe
  'franks_uniquetech2': ['stable'], // Chivalry

  // Georgianos
  'georgians_uniquetech1': ['buildings'], // Svan Towers
  'georgians_uniquetech2': ['cavalry'], // Aznauri Cavalry

  // Godos
  'goths_uniquetech1': ['barracks'], // Anarchy (Huskarls in barracks)
  'goths_uniquetech2': ['barracks'], // Perfusion

  // Gurjaras
  'gurjaras_uniquetech1': ['infantry'], // Kshatriyas
  'gurjaras_uniquetech2': ['camel', 'heavycamel', 'elephant_archer', 'elite_elephant_archer'], // Frontier Guards

  // Industaníes
  'hindustanis_uniquetech1': ['civilians', 'trade_units', 'religious'], // Grand Trunk Road
  'hindustanis_uniquetech2': ['handcannon'], // Shatagni

  // Hunos
  'huns_uniquetech1': ['stable'], // Marauders
  'huns_uniquetech2': ['religious'], // Atheism

  // Incas
  'incas_uniquetech1': ['skirmishers'], // Andean Sling (Kamayuk infantería NO se ve afectado)
  'incas_uniquetech2': ['uniqueunit', 'eliteunique', 'champiscout', 'champirunner', 'champiwarrior', 'elitechampi'], // Fabric Shields

  // Italianos
  'italians_uniquetech1': ['trade_units'], // Silk Road
  'italians_uniquetech2': ['handcannon'], // Pirotechnia

  // Japoneses
  'japanese_uniquetech1': ['watchtower', 'guardtower', 'keep'], // Yasama
  'japanese_uniquetech2': ['trebuchet'], // Kataparuto

  // Jurchens
  'jurchens_uniquetech1': ['buildings'], // Fortified Bastions
  'jurchens_uniquetech2': ['grenadier', 'navy', 'rocket_cart', 'heavy_rocket_cart'], // Thunderclap Bombs

  // Khitán
  'khitans_uniquetech1': ['infantry'], // Lamellar Armor
  'khitans_uniquetech2': ['cavalry'], // Ordo Cavalry

  // Jemer
  'khmer_uniquetech1': ['battleeleph', 'eliteeleph'], // Tusk Swords
  'khmer_uniquetech2': ['uniqueunit', 'eliteunique', 'scorpion', 'heavyscorp'], // Double Crossbow

  // Coreanos
  'koreans_uniquetech1': ['watchtower', 'guardtower', 'keep'], // Eupseong (+2 rango torres)
  'koreans_uniquetech2': ['turtle_ship', 'rocket_cart', 'heavy_rocket_cart'], // Shinkichon (+1 rng + proyectiles extra)

  // Lituanos
  'lithuanians_uniquetech1': ['tc'], // Hill Forts
  'lithuanians_uniquetech2': ['spearman', 'pikeman', 'halberdier'], // Tower Shields

  // Magiares
  'magyars_uniquetech1': ['uniqueunit', 'eliteunique'], // Corvinian Army
  'magyars_uniquetech2': ['mounted_archer'], // Recurve Bow

  // Malayos
  'malay_uniquetech1': ['dock'], // Thalassocracy
  'malay_uniquetech2': ['militia', 'manatarms', 'longsword', 'twohanded', 'champion'], // Forced Levy

  // Malienses
  'malians_uniquetech1': ['tc'], // Tigui
  'malians_uniquetech2': ['cavalry'], // Farimba

  // Mapuche
  'mapuche_uniquetech1': ['skirmishers'], // Malon (Kona caballería NO afectado; Bolas Rider sin ID genérico)
  'mapuche_uniquetech2': ['castle'], // Butalmapu

  // Mayas
  'mayans_uniquetech1': ['skirmishers'], // Hul'che Javelineers
  'mayans_uniquetech2': ['eaglescout', 'eaglewarrior', 'eliteeagle'], // Holcans (El Dorado)

  // Mongoles
  'mongols_uniquetech1': ['civilians'], // Nomads
  'mongols_uniquetech2': ['siege'], // Drill

  // Muisca
  'muisca_uniquetech1': ['champiscout', 'champirunner', 'champiwarrior', 'elitechampi'], // Herbalism
  'muisca_uniquetech2': ['uniqueunit', 'eliteunique', 'slinger'], // Huaracas (Guerrero Guecha = hondero; también afecta Hondero)

  // Persas
  'persians_uniquetech1': ['archer', 'crossbow', 'arbalester'], // Kamandaran
  'persians_uniquetech2': ['castle'], // Citadels

  // Polacos
  'poles_uniquetech1': ['knight', 'cavalier', 'paladin'], // Szlachta Privileges
  'poles_uniquetech2': ['scout', 'lightcav', 'hussar', 'winged_hussar'], // Lechitic Legacy

  // Portugueses
  'portuguese_uniquetech1': ['navy'], // Circumnavigation
  'portuguese_uniquetech2': ['gunpowder'], // Arquebus

  // Romanos
  'romans_uniquetech1': ['scorpion', 'heavyscorp', 'galley', 'wargalley', 'galleon'], // Ballistas
  'romans_uniquetech2': ['militia', 'manatarms', 'longsword', 'twohanded', 'champion', 'uniqueunit', 'eliteunique'], // Comitatenses

  // Sarracenos
  'saracens_uniquetech1': ['monk'], // Bimaristan
  'saracens_uniquetech2': ['trebuchet', 'mangonel', 'onager', 'siegeonager'], // Counterweights

  // Shu
  'shu_uniquetech1': ['spearman', 'pikeman', 'halberdier', 'uniqueunit', 'eliteunique'], // Coiled Serpent Array
  'shu_uniquetech2': ['foot_archer', 'siege', 'navy'], // Bolt Magazine (Guardián de Pluma Blanca NO afectado; War Chariots = siege, Lou Chuans = navy)

  // Sicilianos
  'sicilians_uniquetech1': ['tc', 'uniqueunit', 'eliteunique'], // First Crusade
  'sicilians_uniquetech2': ['knight', 'cavalier', 'paladin'], // Hauberk

  // Eslavos
  'slavs_uniquetech1': ['castle', 'watchtower', 'guardtower', 'keep'], // Detinets
  'slavs_uniquetech2': ['infantry'], // Druzhina

  // Españoles
  'spanish_uniquetech1': ['monk', 'missionary'], // Inquisition
  'spanish_uniquetech2': ['villager'], // Supremacy

  // Tártaros
  'tatars_uniquetech1': ['scout', 'lightcav', 'hussar', 'winged_hussar', 'steppe_lancer', 'elite_steppe_lancer', 'mounted_archer'], // Silk Armor
  'tatars_uniquetech2': ['trebuchet'], // Timurid Siegecraft

  // Teutones
  'teutons_uniquetech1': ['siege'], // Ironclad
  'teutons_uniquetech2': ['castle', 'infantry'], // Crenellations

  // Tupi
  'tupi_uniquetech1': ['champiscout', 'champirunner', 'champiwarrior', 'elitechampi'], // Caciques
  'tupi_uniquetech2': ['foot_archer', 'buildings'], // Curare

  // Turcos
  'turks_uniquetech1': ['mounted_archer'], // Sipahi
  'turks_uniquetech2': ['bombadcannon'], // Artillery

  // Vietnamitas
  'vietnamese_uniquetech1': ['battleeleph', 'eliteeleph'], // Chatras
  'vietnamese_uniquetech2': ['civilians'], // Paper Money

  // Vikingos
  'vikings_uniquetech1': ['infantry'], // Chieftains
  'vikings_uniquetech2': ['foot_archer', 'navy'], // Bogsveigar (arqueros a pie + Longboats)

  // Wei
  'wei_uniquetech1': ['infantry', 'archer', 'cavalry', 'siege', 'navy'], // Tuntian (Military generate food)
  'wei_uniquetech2': ['mounted'], // Ming Guang Armor

  // Wu
  'wu_uniquetech1': ['demoship', 'uniqueunit', 'eliteunique'], // Red Cliffs Tactics (barcos demolición + Arqueros de Fuego)
  'wu_uniquetech2': ['traction_treb', 'navy'], // Sitting Tiger
};
