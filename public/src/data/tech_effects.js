export const UNIT_CLASSES = {
  // --- Clases Base ---
  'infantry': [
    'militia', 'manatarms', 'longsword', 'twohanded', 'champion', 
    'spearman', 'pikeman', 'halberdier',
    'eaglescout', 'eaglewarrior', 'eliteeagle',
    'condottiero', 'gbeto', 'woad_raider', 'shotel', 'karambit', 'obuch'
  ],
  'mounted': [
    'scout', 'lightcav', 'hussar', 'winged_hussar', 'knight', 'cavalier', 'paladin', 'savar',
    'camel', 'heavycamel', 'imp_camel', 'battleeleph', 'eliteeleph', 'steppe_lancer', 'elite_steppe_lancer',
    'cavarcher', 'hcavarcher', 'elephant_archer', 'elite_elephant_archer', 'genitour', 'missionary'
  ],
  'archer': [
    'archer', 'crossbow', 'arbalester', 'skirmisher', 'eliteskirm', 'imp_skirmisher',
    'cavarcher', 'hcavarcher', 'elephant_archer', 'elite_elephant_archer', 'genitour', 'handcannon'
  ],
  'siege': [
    'batteram', 'cappedram', 'siegeram', 'mangonel', 'onager', 'siegeonager',
    'scorpion', 'heavyscorp', 'bombadcannon', 'trebuchet', 'petard'
  ],
  'navy': [
    'galley', 'wargalley', 'galleon', 'firegalley', 'fireship', 'fastfireship',
    'demoraft', 'demoship', 'heavydemo', 'cannongalleon', 'elitecannon',
    'dromon', 'turtle_ship', 'longboat', 'carvel_hull'
  ],
  'civilians': [
    'villager', 'tradecart', 'tradecog', 'fishingship'
  ],
  'religious': [
    'monk', 'missionary', 'warrior_priest'
  ],

  // --- Sub-clases y Combinaciones ---
  'foot_archer': [
    'archer', 'crossbow', 'arbalester', 'skirmisher', 'eliteskirm', 'imp_skirmisher', 'handcannon'
  ],
  'mounted_archer': [
    'cavarcher', 'hcavarcher', 'elephant_archer', 'elite_elephant_archer', 'genitour'
  ],
  'cavalry': [
    'scout', 'lightcav', 'hussar', 'winged_hussar', 'knight', 'cavalier', 'paladin', 'savar',
    'camel', 'heavycamel', 'imp_camel', 'battleeleph', 'eliteeleph', 'steppe_lancer', 'elite_steppe_lancer'
  ],
  'skirmishers': [
    'skirmisher', 'eliteskirm', 'imp_skirmisher', 'genitour'
  ],
  'gunpowder': [
    'handcannon', 'bombadcannon', 'cannongalleon', 'elitecannon', 'bombardtower_b', 'janissary', 'conquistador'
  ],
  'trade_units': [
    'tradecart', 'tradecog'
  ],
  'buildings': [
    'watchtower', 'guardtower_b', 'keep_b', 'bombardtower_b', 'castle', 'tc', 'krepost', 'donjon'
  ],

  // --- Clases de Edificios ---
  'towers': [
    'watchtower', 'guardtower_b', 'keep_b', 'bombardtower_b'
  ],
  'castles': [
    'castle', 'krepost', 'donjon'
  ],
  'town_centers': [
    'tc'
  ],
  'walls': [
    'stonewall', 'gate', 'fortifiedwall_b'
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
  'Champi Warrior': ['infantry']
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
  'fletching': ['foot_archer', 'mounted_archer', 'buildings'],
  'bodkinarrow': ['foot_archer', 'mounted_archer', 'buildings'],
  'bracer': ['foot_archer', 'mounted_archer', 'buildings'],
  'forging': ['infantry', 'cavalry'],
  'ironcasting': ['infantry', 'cavalry'],
  'blastfurnace': ['infantry', 'cavalry'],

  // Herrería - Armadura
  'paddedarcharmor': ['foot_archer', 'mounted_archer'],
  'leatherarcharmor': ['foot_archer', 'mounted_archer'],
  'ringarcherarmor': ['foot_archer', 'mounted_archer'],
  'scalemailarmor': ['infantry'],
  'chainmailarmor': ['infantry'],
  'platemailarmor': ['infantry'],
  'scalebarding': ['cavalry'],
  'chainbarding': ['cavalry'],
  'platebarding': ['cavalry'],

  // Universidad
  'ballistics': ['foot_archer', 'mounted_archer', 'buildings', 'navy', 'siege'],
  'chemistry': ['foot_archer', 'mounted_archer', 'gunpowder', 'buildings', 'navy'],
  'siegeengineers': ['siege'],
  'masonry': ['buildings'],
  'architecture': ['buildings'],
  'fortifiedwall': ['walls'],
  'guardtower': ['watchtower'],
  'keep': ['guardtower_b'],
  'bombardtower': ['keep_b'],
  'murderhole': ['buildings'],
  'treadmillcrane': ['buildings'],
  'heatedshot': ['buildings'],
  'careening': ['navy'],
  'drydock': ['navy'],
  'clinker_construction': ['navy'],
  'carvel_hull': ['navy'],
  'siphons': ['navy'],
  'incendiaries': ['navy'],

  // Muelle
  'shipwright': ['navy'],

  // Monasterio
  'sanctity': ['monk'],
  'fervor': ['monk'],
  'theocracy': ['monk'],
  'blockprinting': ['monk'],
  'redemption': ['monk'],
  'atonement': ['monk'],
  'heresy': ['monk'],
  'herbalmedicine': ['monk'],
  'illumination': ['monk'],
  'faith': ['monk'],

  // --- TECNOLOGÍAS ÚNICAS POR CIVILIZACIÓN ---

  // Armenios
  'armenians_uniquetech1': ['demoship', 'galley', 'wargalley', 'galleon', 'dromon'], // Cilician Fleet
  'armenians_uniquetech2': ['infantry', 'religious'], // Fereters (+HP inf, +heal monks)

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
  'britons_uniquetech1': ['foot_archer', 'watchtower', 'guardtower_b', 'keep_b'], // Yeomen
  'britons_uniquetech2': ['trebuchet'], // Warwolf

  // Búlgaros
  'bulgarians_uniquetech1': ['cavalry'], // Stirrups
  'bulgarians_uniquetech2': ['twohanded'], // Bagains (actualmente solo 2H, pero a veces Champion si se desbloquea)

  // Borgoñones
  'burgundians_uniquetech1': ['civilians'], // Burgundian Vineyards
  'burgundians_uniquetech2': ['flemish_militia'], // Flemish Revolution

  // Birmanos
  'burmese_uniquetech1': ['cavalry'], // Manipur Cavalry
  'burmese_uniquetech2': ['battleeleph', 'eliteeleph'], // Howdah

  // Bizantinos
  'byzantines_uniquetech1': ['firegalley', 'fireship', 'fastfireship', 'bombardtower_b', 'dromon'], // Greek Fire
  'byzantines_uniquetech2': ['uniqueunit', 'eliteunique'], // Logistica

  // Celtas
  'celts_uniquetech1': ['castle', 'watchtower', 'guardtower_b', 'keep_b'], // Stronghold
  'celts_uniquetech2': ['siege'], // Furor Celtica

  // Chinos
  'chinese_uniquetech1': ['stonewall', 'gate', 'watchtower', 'guardtower_b', 'keep_b'], // Great Wall
  'chinese_uniquetech2': ['scorpion', 'heavyscorp', 'uniqueunit', 'eliteunique'], // Rocketry

  // Cumanos
  'cumans_uniquetech1': ['scout', 'lightcav', 'hussar', 'steppe_lancer', 'elite_steppe_lancer', 'cavarcher', 'hcavarcher'], // Steppe Husbandry
  'cumans_uniquetech2': ['castle'], // Cuman Mercenaries

  // Dravídicos
  'dravidians_uniquetech1': ['battleeleph', 'eliteeleph', 'elephant_archer', 'elite_elephant_archer'], // Medical Corps
  'dravidians_uniquetech2': ['infantry', 'cavalry'], // Wootz Steel

  // Etíopes
  'ethiopians_uniquetech1': ['uniqueunit', 'eliteunique', 'camel', 'heavycamel'], // Royal Heirs
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
  'gurjaras_uniquetech1': ['infantry', 'archer', 'cavalry', 'siege', 'navy'], // Kshatriyas (Military cost)
  'gurjaras_uniquetech2': ['camel', 'heavycamel', 'elephant_archer', 'elite_elephant_archer'], // Frontier Guards

  // Industaníes
  'hindustanis_uniquetech1': ['civilians', 'trade_units', 'religious'], // Grand Trunk Road
  'hindustanis_uniquetech2': ['handcannon'], // Shatagni

  // Hunos
  'huns_uniquetech1': ['stable'], // Marauders
  'huns_uniquetech2': ['religious'], // Atheism

  // Incas
  'incas_uniquetech1': ['skirmishers', 'uniqueunit', 'eliteunique'], // Andean Sling
  'incas_uniquetech2': ['uniqueunit', 'eliteunique', 'champiscout', 'champirunner', 'champiwarrior', 'elitechampi'], // Fabric Shields

  // Italianos
  'italians_uniquetech1': ['trade_units'], // Silk Road
  'italians_uniquetech2': ['handcannon'], // Pirotechnia

  // Japoneses
  'japanese_uniquetech1': ['watchtower', 'guardtower_b', 'keep_b'], // Yasama
  'japanese_uniquetech2': ['trebuchet'], // Kataparuto

  // Jurchens
  'jurchens_uniquetech1': ['buildings'], // Fortified Bastions
  'jurchens_uniquetech2': ['uniqueunit', 'eliteunique'], // Thunderclap Bombs

  // Khitán
  'khitans_uniquetech1': ['infantry', 'skirmishers'], // Lamellar Armor
  'khitans_uniquetech2': ['cavalry'], // Ordo Cavalry

  // Jemer
  'khmer_uniquetech1': ['battleeleph', 'eliteeleph'], // Tusk Swords
  'khmer_uniquetech2': ['uniqueunit', 'eliteunique', 'scorpion', 'heavyscorp'], // Double Crossbow

  // Coreanos
  'koreans_uniquetech1': ['watchtower', 'guardtower_b', 'keep_b'], // Eupseong
  'koreans_uniquetech2': ['uniqueunit', 'eliteunique', 'navy'], // Shinkichon

  // Lituanos
  'lithuanians_uniquetech1': ['tc'], // Hill Forts
  'lithuanians_uniquetech2': ['spearman', 'pikeman', 'halberdier', 'skirmishers'], // Tower Shields

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
  'mapuche_uniquetech1': ['uniqueunit', 'eliteunique', 'skirmishers'], // Malon
  'mapuche_uniquetech2': ['castle'], // Butalmapu

  // Mayas
  'mayans_uniquetech1': ['skirmishers'], // Hul'che Javelineers
  'mayans_uniquetech2': ['eaglescout', 'eaglewarrior', 'eliteeagle'], // Holcans (El Dorado)

  // Mongoles
  'mongols_uniquetech1': ['civilians'], // Nomads
  'mongols_uniquetech2': ['siege'], // Drill

  // Muisca
  'muisca_uniquetech1': ['archer', 'champiscout', 'champirunner', 'champiwarrior', 'elitechampi'], // Herbalism
  'muisca_uniquetech2': ['uniqueunit', 'eliteunique'], // Huaracas

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
  'romans_uniquetech2': ['militia', 'manatarms', 'longsword', 'twohanded', 'champion', 'knight', 'cavalier', 'paladin', 'uniqueunit', 'eliteunique'], // Comitatenses

  // Sarracenos
  'saracens_uniquetech1': ['monk'], // Bimaristan
  'saracens_uniquetech2': ['trebuchet', 'mangonel', 'onager', 'siegeonager'], // Counterweights

  // Shu
  'shu_uniquetech1': ['spearman', 'pikeman', 'halberdier', 'uniqueunit', 'eliteunique'], // Coiled Serpent Array
  'shu_uniquetech2': ['archer', 'crossbow', 'arbalester', 'uniqueunit', 'eliteunique', 'navy'], // Bolt Magazine

  // Sicilianos
  'sicilians_uniquetech1': ['tc', 'uniqueunit', 'eliteunique'], // First Crusade
  'sicilians_uniquetech2': ['knight', 'cavalier', 'paladin'], // Hauberk

  // Eslavos
  'slavs_uniquetech1': ['castle', 'watchtower', 'guardtower_b', 'keep_b'], // Detinets
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
  'tupi_uniquetech1': ['champiscout', 'champirunner', 'champiwarrior', 'elitechampi', 'uniqueunit', 'eliteunique'], // Caciques
  'tupi_uniquetech2': ['foot_archer', 'buildings'], // Curare

  // Turcos
  'turks_uniquetech1': ['mounted_archer'], // Sipahi
  'turks_uniquetech2': ['bombardtower_b', 'bombadcannon', 'cannongalleon'], // Artillery

  // Vietnamitas
  'vietnamese_uniquetech1': ['battleeleph', 'eliteeleph'], // Chatras
  'vietnamese_uniquetech2': ['civilians'], // Paper Money

  // Vikingos
  'vikings_uniquetech1': ['infantry'], // Chieftains
  'vikings_uniquetech2': ['archer', 'crossbow', 'arbalester', 'uniqueunit', 'eliteunique', 'navy'], // Bogsveigar

  // Wei
  'wei_uniquetech1': ['infantry', 'archer', 'cavalry', 'siege', 'navy'], // Tuntian (Military generate food)
  'wei_uniquetech2': ['mounted'], // Ming Guang Armor

  // Wu
  'wu_uniquetech1': ['demoship', 'archer'], // Red Cliffs Tactics
  'wu_uniquetech2': ['trebuchet', 'navy'], // Sitting Tiger
};
