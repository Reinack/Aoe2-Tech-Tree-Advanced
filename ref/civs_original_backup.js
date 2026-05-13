const CIVS = {
  generic: {
    name:"— Genérico (todas las civs) —",
    bonuses:[
      {
        type:"special",
        note:"Muestra el árbol completo sin restricciones."
      }
    ],
    teamBonus:null,
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "hulk", "war_hulk", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tecnología Única I",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Tecnología exclusiva Edad Castillos."
      },
      {
        name:"Tecnología Única II",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Tecnología exclusiva Edad Imperial."
      }
    ],
    uniqueUnits:[
      {
        name:"Unidad Única",
        upgradeName:"Unidad Única Elite",
        age:2
      }
    ]
  },
  armenians: {
    name:"Armenios",
    type:"Civilización de infantería y naval",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Mule Carts cost -25%"
      },
      {
        type:"special",
        note:"Mule Cart technologies are +40% more effective"
      },
      {
        type:"special",
        note:"Spearman- and Militia-line upgrades (except Man-at-Arms) available one age earlier"
      },
      {
        type:"free_tech",
        note:"First Fortified Church receives a free Relic"
      },
      {
        type:"special",
        note:"Galley-line and Dromons fire an additional projectile"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"infantry",
      stat:"los",
      op:"add",
      value:2,
      note:"Infantry +2 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "scout", "lightcav", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "carrack", "dromon", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "warrior_priest", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "mule_cart", "fortified_church"],
    uniqueTechs:[
      {
        name:"Flota ciliciana",
        age:2,
        cost:{
          food:400,
          wood:300
        },
        effect:"buques de demolición: +20% de radio de explosión; dromones y línea de galeras: +1 de alcance"
      },
      {
        name:"Feretorios",
        age:3,
        cost:{
          food:800,
          gold:500
        },
        effect:"infantería, excepto línea de lanceros: +30 PV; sacerdotes guerreros: +100% de velocidad de curación"
      }
    ],
    uniqueUnits:[
      {
        name:"Arqueros con arco compuesto",
        subtitle:"arqueros a pie",
        upgradeName:"Arquero Compuesto Elite",
        age:2,
        imgPic:407,
        eliteImgPic:522
      },
      {
        name:"Sacerdotes guerreros",
        subtitle:"infantería",
        age:2
      }
    ],
    overrides:{
      pikeman:{
        age:1
      },
      halberdier:{
        age:2
      },
      longsword:{
        age:1
      },
      twohanded:{
        age:2
      },
      lumber:{
        name:"Carreta de Mulas",
        icon:"ðŸ«"
      },
      mining:{
        name:"Carreta de Mulas",
        icon:"ðŸ«"
      },
      monastery:{
        name:"Iglesia Fortificada",
        icon:"ðŸ•"
      }
    }
  },
  aztecs: {
    name:"Aztecas",
    type:"Civilización de infantería y monjes",
    bonuses:[
      {
        type:"start_resources",
        resource:"gold",
        op:"add",
        value:50,
        note:"Start with +50 gold"
      },
      {
        type:"special",
        note:"Villagers carry +3"
      },
      {
        type:"creation_speed",
        scope:"military_unit",
        op:"multiply",
        value:0.85,
        note:"Military Units train +15% faster"
      },
      {
        type:"stat_modifier",
        scope:"monk",
        stat:"hp",
        op:"add",
        value:5,
        note:"Monks gain +5 HP for each researched Monastery technology"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Relics generate +33% gold"
    },
    available:["barracks", "archery", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "eaglescout", "eaglewarrior", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "fastfireship", "demoraft", "demoship", "drydock", "catapult_gall", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "warrior_priest", "", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "hulk", "war_hulk", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "shipwright"],
    uniqueTechs:[
      {
        name:"Atlatl",
        age:2,
        cost:{
          food:400,
          gold:350
        },
        effect:"Escaramuzadores +1 ataque y +1 rango."
      },
      {
        name:"Guerras de Guirnaldas",
        age:3,
        cost:{
          food:450,
          gold:750
        },
        effect:"Infantería +4 ataque."
      }
    ],
    uniqueUnits:[
      {
        name:"Guerrero Jaguar",
        upgradeName:"Guerrero Jaguar Elite",
        age:2,
        imgPic:110,
        eliteImgPic:486
      }
    ]
  },
  bengalis: {
    name:"Bengalíes",
    bonuses:[
      {
        type:"special",
        note:"Town Centers spawn 2 Villagers when the next Age is reached"
      },
      {
        type:"stat_modifier",
        scope:"skirmisher",
        stat:"attack",
        op:"add",
        value:2,
        note:"Cavalry +2 attack vs. Skirmishers"
      },
      {
        type:"special",
        note:"Elephant Units receive -25% bonus damage and are more resistant to conversion"
      },
      {
        type:"stat_modifier",
        scope:"monk",
        stat:"armor_melee_and_pierce",
        op:"add",
        value_melee:3,
        value_pierce:3,
        note:"Monks +3 melee/+3 pierce armor"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"regen",
        op:"add",
        value:15,
        note:"Ships regenerate 15 HP per minute"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Trade Units generate +10% food in addition to gold"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "elephant_archer", "elite_elephant_archer", "scout", "knight", "battleeleph", "eliteeleph", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "armored_elephant", "siege_elephant", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "cannongalleon", "elitecannon", "drydock", "shipwright", "hulk", "war_hulk", "carrack", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Paiks",
        age:2,
        cost:{
          food:300,
          gold:500
        },
        effect:"Ratha y Arqueros de Elefante 10% más rápidos."
      },
      {
        name:"Mahayana",
        age:3,
        cost:{
          food:400,
          gold:200
        },
        effect:"Casas dan +10 población extra."
      }
    ],
    uniqueUnits:[
      {
        name:"Ratha",
        upgradeName:"Ratha Elite",
        age:2,
        imgPic:389,
        eliteImgPic:520
      }
    ],
    type:"Civilización de elefantes y naval"
  },
  berbers: {
    name:"Bereberes",
    bonuses:[
      {
        type:"stat_modifier",
        scope:"villager",
        stat:"speed",
        op:"multiply",
        value:1.05,
        note:"Villagers move +5% faster in Dark Age, +10% faster starting in Feudal Age"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Stable Units cost -15/20% in Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"speed",
        op:"multiply",
        value:1.1,
        note:"Ships move +10% faster"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Genitour available at the Archery Range starting in Castle Age"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "camel", "heavycamel", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "cannongalleon", "elitecannon", "drydock", "shipwright", "hulk", "war_hulk", "carrack", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "fervor", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "genitour", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Kasbah",
        age:2,
        cost:{
          food:250,
          gold:250
        },
        effect:"Edificios únicos trabajan 25% más rápido."
      },
      {
        name:"Camellos Magrebi",
        age:3,
        cost:{
          food:700,
          gold:300
        },
        effect:"Camellos se auto-regeneran."
      }
    ],
    uniqueUnits:[
      {
        name:"Arquero en Camello",
        upgradeName:"Arquero en Camello Elite",
        age:2,
        imgPic:191,
        eliteImgPic:498
      }
    ],
    type:"Civilización de caballería y naval"
  },
  burmese: {
    name:"Birmanos",
    bonuses:[
      {
        type:"free_tech",
        note:"Lumber Camp technologies free"
      },
      {
        type:"stat_modifier",
        scope:"infantry",
        stat:"attack",
        op:"add",
        value:3,
        note:"Infantry +1/+2/+3 attack in Feudal/Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"unit",
        stat:"armor_melee_and_pierce",
        op:"add",
        value_melee:1,
        value_pierce:1,
        note:"Battle Elephants +1 melee/+1 pierce armor"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Monastery technologies cost -50%"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Relics visible on the map at the start of the game"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "battleeleph", "eliteeleph", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Howdah",
        age:2,
        cost:{
          food:400,
          gold:400
        },
        effect:"Elefantes de Combate +1/+1 armadura."
      },
      {
        name:"Caballería Manipur",
        age:3,
        cost:{
          food:650,
          gold:400
        },
        effect:"Caballería y Arambai +6 ataque vs edificios."
      }
    ],
    uniqueUnits:[
      {
        name:"Arambai",
        upgradeName:"Arambai Elite",
        age:2,
        imgPic:230,
        eliteImgPic:504
      }
    ],
    type:"Civilización de infantería y caballería"
  },
  byzantines: {
    name:"Bizantinos",
    type:"Civilización defensiva",
    bonuses:[
      {
        type:"special",
        note:"Buildings +10/20/30/40% HP in Dark/Feudal/Castle/Imperial Age"
      },
      {
        type:"cost_modifier",
        scope:"skirmisher",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Camel Riders, Skirmishers and Spearman-line cost -25%"
      },
      {
        type:"free_tech",
        note:"Town Watch, Town Patrol free"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.67,
        note:"Advancing to Imperial Age costs -33%"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"rof",
        op:"multiply",
        value:0.75,
        note:"Fire Ships and Dromons attack +25% faster"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Monks heal +100% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "camel", "heavycamel", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "dromon", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Fuego Griego",
        age:2,
        cost:{
          food:250,
          gold:300
        },
        effect:"Barcos de Fuego +1 rango."
      },
      {
        name:"Logística",
        age:3,
        cost:{
          food:750,
          gold:675
        },
        effect:"Catafractos causan daño de pisoteo; +6 ataque vs infantería."
      }
    ],
    uniqueUnits:[
      {
        name:"Catafracto",
        upgradeName:"Catafracto Elite",
        age:2,
        imgPic:35,
        eliteImgPic:476
      }
    ]
  },
  bohemians: {
    name:"Bohemios",
    bonuses:[
      {
        type:"free_tech",
        note:"Mining Camp technologies free"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:null,
        note:"Blacksmiths and Universities cost -100 wood"
      },
      {
        type:"special",
        note:"Spearman-line deals +25% bonus damage"
      },
      {
        type:"special",
        note:"Fervor and Sanctity affect Villagers"
      },
      {
        type:"special",
        note:"Chemistry and Hand Cannoneer available in Castle Age"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"building",
      op:"multiply",
      value:1.8,
      note:"Markets work +80% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "scout", "lightcav", "knight", "cavalier", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "houfnice", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Wagenburg Tactics",
        age:2,
        cost:{
          food:400,
          gold:200
        },
        effect:"Arcabuceros se mueven 15% más rápido."
      },
      {
        name:"Hussite Reforms",
        age:3,
        cost:{
          food:600,
          gold:600
        },
        effect:"Monjes cuestan madera en vez de oro."
      }
    ],
    uniqueUnits:[
      {
        name:"Carro Husita",
        upgradeName:"Carro Husita Elite",
        age:2,
        imgPic:370,
        eliteImgPic:514
      }
    ],
    type:"Civilización de pólvora y monjes"
  },
  burgundians: {
    name:"Borgoñones",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.67,
        note:"Economic upgrades available one age earlier and cost -33% food"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Stable technologies cost -50%"
      },
      {
        type:"special",
        note:"Cavalier upgrade available in Castle Age"
      },
      {
        type:"stat_modifier",
        scope:"gunpowder",
        stat:"attack",
        op:"multiply",
        value:1.25,
        note:"Gunpowder Units +25% attack"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Relics generate food in addition to gold"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "flemish_militia", "archer", "crossbow", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Viñedos Borgoñones",
        age:2,
        cost:{
          food:400,
          gold:300
        },
        effect:"Granjas también generan pequeñas cantidades de oro."
      },
      {
        name:"Revolución Flamenca",
        age:3,
        cost:{
          food:1200,
          gold:600
        },
        effect:"Transforma todos los aldeanos en Milicia Flamenca."
      }
    ],
    uniqueUnits:[
      {
        name:"Coustillier",
        upgradeName:"Coustillier Elite",
        age:2,
        imgPic:355,
        eliteImgPic:511
      }
    ],
    overrides:{
      cavalier:{
        age:2
      }
    },
    type:"Civilización de caballería"
  },
  britons: {
    name:"Britones",
    type:"Civilización de arqueros a pie",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"shepherd",
        op:"multiply",
        value:1.25,
        note:"Shepherds work +25% faster"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Town Centers cost -50% wood starting in Castle Age"
      },
      {
        type:"stat_modifier",
        scope:"foot_archer",
        stat:"range",
        op:"add",
        value:2,
        note:"Foot Archers +1/+2 range in Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"archer",
      op:"multiply",
      value:1.1,
      note:"Archery Ranges work +10% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "scout", "lightcav", "knight", "cavalier", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Yeomen",
        age:2,
        cost:{
          wood:750,
          gold:450
        },
        effect:"+1 rango arqueros a pie; Torres 20% más rápidas."
      },
      {
        name:"Warwolf",
        age:3,
        cost:{
          wood:800,
          gold:400
        },
        effect:"Trebuchets 100% precisión y daño en área."
      }
    ],
    uniqueUnits:[
      {
        name:"Longbowman",
        upgradeName:"Longbowman Elite",
        age:2,
        imgPic:41,
        eliteImgPic:472
      }
    ]
  },
  bulgarians: {
    name:"Búlgaros",
    bonuses:[
      {
        type:"free_tech",
        note:"Militia-line upgrades free"
      },
      {
        type:"cost_modifier",
        scope:"siege",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Blacksmith and Siege Workshop technologies cost -50% food"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Town Centers cost -50% stone"
      },
      {
        type:"special",
        note:"Can build Krepost in Castle Age"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"building",
      op:"multiply",
      value:1.8,
      note:"Blacksmiths work +80% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "krepost"],
    uniqueTechs:[
      {
        name:"Stirrups",
        age:2,
        cost:{
          food:400,
          gold:200
        },
        effect:"Caballería ataca 33% más rápido."
      },
      {
        name:"Bagains",
        age:3,
        cost:{
          food:900,
          gold:450
        },
        effect:"Milicia-línea +5 armadura cuerpo a cuerpo."
      }
    ],
    uniqueUnits:[
      {
        name:"Konnik",
        upgradeName:"Konnik Elite",
        age:2,
        imgPic:249,
        eliteImgPic:506
      }
    ],
    type:"Civilización de infantería y caballería"
  },
  celts: {
    name:"Celtas",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"lumberjack",
        op:"multiply",
        value:1.15,
        note:"Lumberjacks work +15% faster"
      },
      {
        type:"stat_modifier",
        scope:"unit",
        stat:"los",
        op:"add",
        value:null,
        note:"Livestock animals within Celt unit line of sight cannot be stolen"
      },
      {
        type:"special",
        note:"Infantry moves +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"siege",
        stat:"rof",
        op:"multiply",
        value:0.75,
        note:"Siege Weapons attack +25% faster"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"siege",
      op:"multiply",
      value:1.2,
      note:"Siege Workshops work +20% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "heresy", "sanctity", "fervor", "herbalmedicine", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Stronghold",
        age:2,
        cost:{
          food:300,
          gold:200
        },
        effect:"Torres y Castillos disparan 33% más rápido."
      },
      {
        name:"Furor Celticus",
        age:3,
        cost:{
          wood:750,
          gold:450
        },
        effect:"Barcos y Asedio +50% PV."
      }
    ],
    uniqueUnits:[
      {
        name:"Woad Raider",
        upgradeName:"Woad Raider Elite",
        age:2,
        imgPic:47,
        eliteImgPic:475
      }
    ],
    type:"Civilización de infantería y asedio"
  },
  chinese: {
    name:"Chinos",
    bonuses:[
      {
        type:"start_resources",
        resource:"all",
        op:"add",
        value:null,
        note:"Start with +3 Villagers, but -50 wood and -200 food"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.95,
        note:"Technologies cost -5/10/15% in Feudal/Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"unit",
        stat:"los",
        op:"add",
        value:7,
        note:"Town Centers +7 line of sight and provide +15 population space"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"speed",
        op:"multiply",
        value:1.1,
        note:"Fire Lancers and Fire Ships move +5/10% faster in Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Farms +10% food"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "scorpion", "heavyscorpion", "rocket_cart", "heavy_rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "dragon_ship", "hulk", "war_hulk", "lou_chuan", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Gran Muralla",
        age:2,
        cost:{
          food:400,
          wood:400
        },
        effect:"Muros +30% PV."
      },
      {
        name:"Cohetes",
        age:3,
        cost:{
          wood:750,
          gold:600
        },
        effect:"Escorpiones +4 atq y +2 rango; Chu Ko Nu +2 atq."
      }
    ],
    uniqueUnits:[
      {
        name:"Chu Ko Nu",
        upgradeName:"Chu Ko Nu Elite",
        age:2,
        imgPic:36,
        eliteImgPic:482
      }
    ],
    type:"Civilización de arqueros y pólvora"
  },
  koreans: {
    name:"Coreanos",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"miner",
        op:"multiply",
        value:1.2,
        note:"Stone miners work +20% faster"
      },
      {
        type:"cost_modifier",
        scope:"infantry",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Ranged Soldiers and Infantry cost -50% wood"
      },
      {
        type:"free_tech",
        note:"Archer armor and tower upgrades free (Bombard Tower requires Chemistry)"
      },
      {
        type:"cost_modifier",
        scope:"ship",
        resource:"all",
        op:"multiply",
        value:0.8,
        note:"Warships cost -20% wood"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"villager",
      stat:"los",
      op:"add",
      value:3,
      note:"Villagers +3 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "husbandry", "batteringram", "cappedram", "siegeram", "scorpion", "heavyscorpion", "bombcannon", "rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "sanctity", "fervor", "herbalmedicine", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "turtle_ship", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Eupseong",
        age:2,
        cost:{
          wood:300,
          gold:300
        },
        effect:"Torres y Castillos +2 rango."
      },
      {
        name:"Shinkichon",
        age:3,
        cost:{
          wood:800,
          gold:500
        },
        effect:"Mangonelas y Onagros +1 rango."
      }
    ],
    uniqueUnits:[
      {
        name:"Carro de Guerra",
        upgradeName:"Carro de Guerra Elite",
        age:2,
        imgPic:117,
        eliteImgPic:490
      }
    ],
    type:"Civilización defensiva y naval"
  },
  cumans: {
    name:"Cumanos",
    bonuses:[
      {
        type:"special",
        note:"One additional Town Center can be built in Feudal Age"
      },
      {
        type:"special",
        note:"Mounted Units move +5/10/15% faster in Feudal/Castle/Imperial Age"
      },
      {
        type:"cost_modifier",
        scope:"archer",
        resource:"all",
        op:"multiply",
        value:null,
        note:"Archery Ranges and Stables cost -75 wood"
      },
      {
        type:"special",
        note:"Siege Workshop and Battering Ram available in Feudal Age; Capped Ram available in Castle Age"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"unit",
      stat:"hp",
      op:"multiply",
      value:1.33,
      note:"Palisade Walls +33% HP"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "camel", "heavycamel", "bloodlines", "husbandry", "steppe_lancer", "elite_steppe_lancer", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "kipchak_c", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "catapult_gall", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Steppe Husbandry",
        age:2,
        cost:{
          food:300,
          gold:200
        },
        effect:"Lanceros de Estepa y Cav. Ligera se crean 2ÃƒÆ’— más rápido."
      },
      {
        name:"Cuman Mercenaries",
        age:3,
        cost:{
          food:650,
          gold:400
        },
        effect:"Aliados pueden crear Kipchaks Elite desde sus Castillos."
      }
    ],
    uniqueUnits:[
      {
        name:"Kipchak",
        upgradeName:"Kipchak Elite",
        age:2,
        imgPic:252,
        eliteImgPic:508
      }
    ],
    overrides:{
      siege:{
        age:1
      },
      cappedram:{
        age:1
      }
    },
    type:"Civilización de caballería"
  },
  dravidians: {
    name:"Dravídicos",
    bonuses:[
      {
        type:"special",
        note:"Fishermen and Fishing Ships carry +15"
      },
      {
        type:"special",
        note:"Receive +200 wood when advancing to the next Age"
      },
      {
        type:"stat_modifier",
        scope:"skirmisher",
        stat:"rof",
        op:"multiply",
        value:0.75,
        note:"Skirmishers and Elephant Archers attack +25% faster"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Barracks technologies cost -50%"
      },
      {
        type:"cost_modifier",
        scope:"siege",
        resource:"all",
        op:"multiply",
        value:0.67,
        note:"Siege Weapons cost -33% wood"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Docks provide +5 population space"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "elephant_archer", "elite_elephant_archer", "scout", "cavalier", "battleeleph", "eliteeleph", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "armored_elephant", "siege_elephant", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "cannongalleon", "elitecannon", "drydock", "shipwright", "hulk", "war_hulk", "carrack", "thirisadai", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "atonement", "heresy", "sanctity", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Medical Corps",
        age:2,
        cost:{
          food:300,
          gold:250
        },
        effect:"Elefantes de Asedio/Combate se auto-regeneran."
      },
      {
        name:"Wootz Steel",
        age:3,
        cost:{
          food:350,
          gold:350
        },
        effect:"Infantería y Caballería ignoran armadura del enemigo."
      }
    ],
    uniqueUnits:[
      {
        name:"Urumi Swordsman",
        upgradeName:"Urumi Elite",
        age:2,
        imgPic:386,
        eliteImgPic:515
      }
    ],
    type:"Civilización de infantería y naval"
  },
  slavs: {
    name:"Eslavos",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"farmer",
        op:"multiply",
        value:1.15,
        note:"Farmers work +15% faster"
      },
      {
        type:"free_tech",
        note:"Arson, Gambesons free"
      },
      {
        type:"cost_modifier",
        scope:"siege",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Siege Workshop Units cost -15%"
      },
      {
        type:"stat_modifier",
        scope:"monk",
        stat:"speed",
        op:"multiply",
        value:1.2,
        note:"Monks move +20% faster"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Military buildings (except Castles) provide +5 population space"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "heresy", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Detinets",
        age:2,
        cost:{
          food:300,
          gold:200
        },
        effect:"Torres cuestan -25%."
      },
      {
        name:"Druzhina",
        age:3,
        cost:{
          food:1200,
          gold:500
        },
        effect:"Infantería causa daño de pisoteo."
      }
    ],
    uniqueUnits:[
      {
        name:"Boyar",
        upgradeName:"Boyar Elite",
        age:2,
        imgPic:114,
        eliteImgPic:494
      }
    ],
    type:"Civilización de infantería y asedio"
  },
  spanish: {
    name:"Españoles",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"villager",
        op:"multiply",
        value:1.3,
        note:"Builders work +30% faster"
      },
      {
        type:"special",
        note:"Receive +20 gold for each technology researched"
      },
      {
        type:"special",
        note:"Blacksmith upgrades cost no gold"
      },
      {
        type:"stat_modifier",
        scope:"gunpowder",
        stat:"rof",
        op:"multiply",
        value:0.82,
        note:"Gunpowder Units attack +18% faster"
      },
      {
        type:"special",
        note:"Cannon Galleons fire more accurately at moving targets"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Trade Units generate +25% gold"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "missionary", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Inquisición",
        age:2,
        cost:{
          food:100,
          gold:300
        },
        effect:"Monjes convierten más rápido."
      },
      {
        name:"Supremacía",
        age:3,
        cost:{
          food:450,
          gold:250
        },
        effect:"Aldeanos mejoran ataque, armadura y PV."
      }
    ],
    uniqueUnits:[
      {
        name:"Conquistador",
        upgradeName:"Conquistador Elite",
        age:2,
        imgPic:106,
        eliteImgPic:489
      }
    ],
    type:"Civilización de pólvora y monjes"
  },
  ethiopians: {
    name:"Etíopes",
    bonuses:[
      {
        type:"special",
        note:"Receive +100 gold and +100 food when advancing to the next Age"
      },
      {
        type:"stat_modifier",
        scope:"foot_archer",
        stat:"rof",
        op:"multiply",
        value:0.82,
        note:"Foot Archers attack +18% faster"
      },
      {
        type:"free_tech",
        note:"Pikeman upgrade free"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"unit",
      stat:"los",
      op:"add",
      value:3,
      note:"Outposts +3 line of sight and cost no stone"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "camel", "bloodlines", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Royal Heirs",
        age:2,
        cost:{
          food:200,
          gold:300
        },
        effect:"Guerreros Shotel aparecen ya entrenados desde el CU."
      },
      {
        name:"Torsion Engines",
        age:3,
        cost:{
          food:350,
          gold:400
        },
        effect:"Unidades del Taller de Asedio disparan proyectiles extra."
      }
    ],
    uniqueUnits:[
      {
        name:"Guerrero Shotel",
        upgradeName:"Guerrero Shotel Elite",
        age:2,
        imgPic:195,
        eliteImgPic:501
      }
    ],
    type:"Civilización de arqueros"
  },
  franks: {
    name:"Francos",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"forager",
        op:"multiply",
        value:1.15,
        note:"Foragers work +15% faster"
      },
      {
        type:"free_tech",
        note:"Mill technologies free"
      },
      {
        type:"stat_modifier",
        scope:"cavalry",
        stat:"hp",
        op:"multiply",
        value:1.2,
        note:"Mounted Units +20% HP starting in Feudal Age"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Castles cost -15/25% in Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"knight",
      stat:"los",
      op:"add",
      value:2,
      note:"Knight-line +2 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "scout", "lightcav", "knight", "cavalier", "paladin", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "heavydemo", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Chivalry",
        age:2,
        cost:{
          food:600,
          gold:300
        },
        effect:"Establos trabajan 40% más rápido."
      },
      {
        name:"Beeldenstorm",
        age:3,
        cost:{
          wood:1000,
          gold:500
        },
        effect:"Monasterios demolidos; Monjes cuestan -100%."
      }
    ],
    uniqueUnits:[
      {
        name:"Hacha Arrojadiza",
        upgradeName:"Hacha Arrojadiza Elite",
        age:2,
        imgPic:46,
        eliteImgPic:473
      }
    ],
    type:"Civilización de caballería"
  },
  georgians: {
    name:"Georgianos",
    bonuses:[
      {
        type:"special",
        note:"Start with a Mule Cart"
      },
      {
        type:"special",
        note:"Units and buildings receive -15% damage when located on higher elevation"
      },
      {
        type:"stat_modifier",
        scope:"cavalry",
        stat:"regen",
        op:"add",
        value:14,
        note:"Mounted Units regenerate 2/8/14 HP per minute in Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Fortified Churches provide Villagers in a 9 tiles radius with +10% work rate"
      }
    ],
    teamBonus:{
      type:"cost_modifier",
      scope:"unit",
      resource:"all",
      op:"multiply",
      value:0.75,
      note:"Building repairs cost -25%"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "heresy", "sanctity", "fervor", "herbalmedicine", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "mule_cart", "fortified_church"],
    uniqueTechs:[
      {
        name:"Svan Towers",
        age:2,
        cost:{
          food:300,
          wood:200
        },
        effect:"Torres de Guardia con +5 ataque y garnisonan más unidades."
      },
      {
        name:"Aznauri Cavalry",
        age:3,
        cost:{
          food:500,
          gold:300
        },
        effect:"Caballería gana PV al atacar edificios."
      }
    ],
    uniqueUnits:[
      {
        name:"Monaspa",
        upgradeName:"Monaspa Elite",
        age:2,
        imgPic:408,
        eliteImgPic:523
      }
    ],
    type:"Civilización defensiva y de caballería"
  },
  goths: {
    name:"Godos",
    bonuses:[
      {
        type:"special",
        note:"Loom is researched instantly"
      },
      {
        type:"special",
        note:"Hunters carry +15; hunted animals last +20% longer"
      },
      {
        type:"cost_modifier",
        scope:"infantry",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Infantry costs -15/20/25/30% in Dark/Feudal/Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"infantry",
        stat:"attack",
        op:"add",
        value:3,
        note:"Infantry +1/+2/+3 attack vs. buildings in Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"+10 population space in Imperial Age"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"building",
      op:"multiply",
      value:1.2,
      note:"Barracks work +20% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "huskarl_b", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "dromon", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "sanctity", "fervor", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Anarchy",
        age:2,
        cost:{
          food:450,
          gold:250
        },
        effect:"Huskarls pueden producirse en Barracas."
      },
      {
        name:"Perfusion",
        age:3,
        cost:{
          wood:400,
          gold:600
        },
        effect:"Barracas trabajan 100% más rápido."
      }
    ],
    uniqueUnits:[
      {
        name:"Huskarl",
        upgradeName:"Huskarl Elite",
        age:2,
        imgPic:50,
        eliteImgPic:478
      }
    ],
    type:"Civilización de infantería"
  },
  gurjaras: {
    name:"Gurjaras",
    bonuses:[
      {
        type:"special",
        note:"Start with 2 Forage Bushes"
      },
      {
        type:"special",
        note:"Can garrison livestock in Mills to passively produce food"
      },
      {
        type:"special",
        note:"Mounted Units deal +20/30/40% bonus damage in Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Docks +5 garrison capacity"
      }
    ],
    teamBonus:{
      type:"creation_speed",
      scope:"military_unit",
      op:"multiply",
      value:0.75,
      note:"Camel and Elephant Units train +25% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "halberdier", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "elephant_archer", "elite_elephant_archer", "scout", "lightcav", "hussar", "cavalier", "camel", "heavycamel", "battleeleph", "eliteeleph", "bloodlines", "husbandry", "camel_scout", "shrivamsha", "elite_shrivamsha", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "armored_elephant", "siege_elephant", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "theocracy", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Kshatriyas",
        age:2,
        cost:{
          food:400,
          gold:400
        },
        effect:"Unidades militares cuestan -25% comida."
      },
      {
        name:"Frontier Guards",
        age:3,
        cost:{
          food:400,
          gold:600
        },
        effect:"Camello Imperial +4 armadura cuerpo a cuerpo."
      }
    ],
    uniqueUnits:[
      {
        name:"Chakram Thrower",
        upgradeName:"Chakram Thrower Elite",
        age:2,
        imgPic:390,
        eliteImgPic:517
      }
    ],
    type:"Civilización de caballería y camellos"
  },
  hindustanis: {
    name:"Hindustanís",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"villager",
        resource:"all",
        op:"multiply",
        value:0.92,
        note:"Villagers cost -8/13/18/23% in Dark/Feudal/Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"camel",
        stat:"rof",
        op:"multiply",
        value:0.8,
        note:"Camel Riders attack +20% faster"
      },
      {
        type:"stat_modifier",
        scope:"gunpowder",
        stat:"armor_melee_and_pierce",
        op:"add",
        value_melee:1,
        value_pierce:1,
        note:"Gunpowder Units +1 melee/+1 pierce armor"
      },
      {
        type:"special",
        note:"Can build Caravanserai in Imperial Age"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"light_cavalry",
      stat:"attack",
      op:"add",
      value:2,
      note:"Scout Cavalry-line and Camel Units +2 attack vs. buildings"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "elephant_archer", "elite_elephant_archer", "scout", "lightcav", "hussar", "cavalier", "camel", "heavycamel", "bloodlines", "husbandry", "imp_camel", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "armored_elephant", "siege_elephant", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "caravanserai"],
    uniqueTechs:[
      {
        name:"Grand Trunk Road",
        age:2,
        cost:{
          food:300,
          gold:200
        },
        effect:"Mercaderes generan +10 oro por viaje."
      },
      {
        name:"Shatagni",
        age:3,
        cost:{
          food:400,
          gold:400
        },
        effect:"Arcabuceros +1 rango."
      }
    ],
    uniqueUnits:[
      {
        name:"Ghulam",
        upgradeName:"Ghulam Elite",
        age:2,
        imgPic:385,
        eliteImgPic:518
      }
    ],
    type:"Civilización de camellos y pólvora"
  },
  huns: {
    name:"Hunos",
    bonuses:[
      {
        type:"special",
        note:"Do not need houses, but start with -100 wood"
      },
      {
        type:"cost_modifier",
        scope:"cavalry_archer",
        resource:"all",
        op:"multiply",
        value:0.9,
        note:"Cavalry Archers cost -10/20% in Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Trebuchets fire more accurately at units and small targets"
      },
      {
        type:"special",
        note:"On Nomadic maps, the first Town Center spawns a scouting Horse"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"building",
      op:"multiply",
      value:1.2,
      note:"Stables work +20% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "tarkan_s", "batteringram", "cappedram", "siegeram", "mangonel", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "dromon", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Marauders",
        age:2,
        cost:{
          food:300,
          gold:200
        },
        effect:"Tarkanes producibles en Establos."
      },
      {
        name:"Ateísmo",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Maravillas necesitan 50 años extra; Espías -50%."
      }
    ],
    uniqueUnits:[
      {
        name:"Tarkán",
        upgradeName:"Tarkán Elite",
        age:2,
        imgPic:105,
        eliteImgPic:487
      }
    ],
    type:"Civilización de caballería"
  },
  incas: {
    name:"Incas",
    bonuses:[
      {
        type:"special",
        note:"Houses and Settlements provide +5 population space"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Buildings cost -15% stone"
      },
      {
        type:"cost_modifier",
        scope:"military_unit",
        resource:"all",
        op:"multiply",
        value:0.95,
        note:"Military Units cost -5/10/15/20% food in Dark/Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Villagers affected by Infantry Blacksmith upgrades starting in Castle Age"
      }
    ],
    teamBonus:{
      type:"free_tech",
      note:"Start with a free Llama"
    },
    available:["barracks", "archery", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "spearman", "pikeman", "halberdier", "squires", "arson", "eaglescout", "eaglewarrior", "eliteeagle", "champiscout", "champirunner", "champiwarrior", "elitechampi", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "thumbring", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "drydock", "shipwright", "catapult_gall", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "heresy", "sanctity", "fervor", "herbalmedicine", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "slinger", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "hulk", "war_hulk", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tapiales",
        age:2,
        cost:{
          food:400,
          stone:200
        },
        effect:"Muros de Piedra y Fortif. se construyen 5ÃƒÆ’— más rápido."
      },
      {
        name:"Andean Sling",
        age:3,
        cost:{
          food:400,
          gold:300
        },
        effect:"Honderos sin distancia mínima de ataque."
      }
    ],
    uniqueUnits:[
      {
        name:"Kamayuk",
        upgradeName:"Kamayuk Elite",
        age:2,
        imgPic:97,
        eliteImgPic:495
      }
    ],
    type:"Civilización de infantería"
  },
  italians: {
    name:"Italianos",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Advancing to the next Age costs -15%"
      },
      {
        type:"stat_modifier",
        scope:"foot_archer",
        stat:"armor_melee_and_pierce",
        op:"add",
        value_melee:1,
        value_pierce:1,
        note:"Foot Archers and Condottieri +1 melee/+1 pierce armor"
      },
      {
        type:"cost_modifier",
        scope:"ship",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Dock and University technologies cost -25%"
      },
      {
        type:"cost_modifier",
        scope:"gunpowder",
        resource:"all",
        op:"multiply",
        value:0.8,
        note:"Gunpowder Units cost -20%"
      },
      {
        type:"cost_modifier",
        scope:"ship",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Fishing Ships cost -15%"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Condottiero available at the Barracks in Imperial Age"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "gambesons", "condottiero", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "cannongalleon", "elitecannon", "drydock", "shipwright", "hulk", "war_hulk", "carrack", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Pavise",
        age:2,
        cost:{
          food:300,
          gold:150
        },
        effect:"Arqueros de a pie y Genoveses +1/+1 armadura."
      },
      {
        name:"Silk Road",
        age:3,
        cost:{
          food:500,
          gold:250
        },
        effect:"Carros de Comercio cuestan -50%."
      }
    ],
    uniqueUnits:[
      {
        name:"Ballestero Genovés",
        upgradeName:"Ballestero Genovés Elite",
        age:2,
        imgPic:133,
        eliteImgPic:492
      }
    ],
    type:"Civilización de arqueros y naval"
  },
  japanese: {
    name:"Japoneses",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"miner",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Mills, Lumber- and Mining Camps cost -50%"
      },
      {
        type:"special",
        note:"Infantry attacks +33% faster starting in Feudal Age"
      },
      {
        type:"stat_modifier",
        scope:"cavalry_archer",
        stat:"attack",
        op:"add",
        value:2,
        note:"Cavalry Archers +2 attack vs. Ranged Soldiers (except Skirmishers)"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"hp",
        op:"multiply",
        value:1.2,
        note:"Fishing Ships work +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age; +100% HP"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"ship",
      stat:"los",
      op:"add",
      value:4,
      note:"Galley-line +4 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Yasama",
        age:2,
        cost:{
          food:300,
          wood:300
        },
        effect:"Torres disparan proyectiles extra."
      },
      {
        name:"Kataparuto",
        age:3,
        cost:{
          wood:750,
          gold:400
        },
        effect:"Trebuchets disparan/pliegan 4ÃƒÆ’— más rápido; 100% precisión."
      }
    ],
    uniqueUnits:[
      {
        name:"Samurái",
        upgradeName:"Samurái Elite",
        age:2,
        imgPic:44,
        eliteImgPic:483
      }
    ],
    type:"Civilización de infantería"
  },
  jurchens: {
    name:"Jurchens",
    bonuses:[
      {
        type:"special",
        note:"Meat of hunted and livestock animals doesn't decay"
      },
      {
        type:"stat_modifier",
        scope:"cavalry",
        stat:"rof",
        op:"multiply",
        value:0.75,
        note:"Mounted Units and Fire Lancers attack +25% faster starting in Feudal Age"
      },
      {
        type:"special",
        note:"Siege Engineers available in Castle Age"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.25,
        note:"Siege and Fortification upgrades cost -75% wood and research +100% faster"
      },
      {
        type:"special",
        note:"Units receive -50% friendly fire damage"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"gunpowder",
      stat:"los",
      op:"add",
      value:2,
      note:"Gunpowder Units +2 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "grenadier", "scout", "lightcav", "hussar", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "rocket_cart", "heavy_rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "lou_chuan", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tecnología Única I",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Efecto Mod."
      },
      {
        name:"Tecnología Única II",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Efecto Mod."
      }
    ],
    uniqueUnits:[
      {
        name:"Unidad Única",
        upgradeName:"Unidad Única Elite",
        age:2,
        imgPic:461,
        eliteImgPic:524
      }
    ],
    type:"Civilización de caballería y pólvora"
  },
  khmer: {
    name:"Jemer",
    bonuses:[
      {
        type:"special",
        note:"No buildings required to advance to the next Age or to unlock other buildings"
      },
      {
        type:"special",
        note:"Farmers don't require Mills or Town Centers to drop off food"
      },
      {
        type:"special",
        note:"Villagers can garrison in Houses"
      },
      {
        type:"stat_modifier",
        scope:"unit",
        stat:"speed",
        op:"multiply",
        value:1.1,
        note:"Battle Elephants move +10% faster"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"unit",
      stat:"range",
      op:"add",
      value:1,
      note:"Scorpions +1 range"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "arson", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "battleeleph", "eliteeleph", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "sanctity", "fervor", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tusk Swords",
        age:2,
        cost:{
          food:200,
          gold:300
        },
        effect:"Elefantes de Batalla +3 ataque."
      },
      {
        name:"Double Crossbow",
        age:3,
        cost:{
          food:500,
          gold:400
        },
        effect:"Balistarios y Escorpiones disparan 2 proyectiles."
      }
    ],
    uniqueUnits:[
      {
        name:"Balistario",
        upgradeName:"Balistario Elite",
        age:2,
        imgPic:231,
        eliteImgPic:502
      }
    ],
    type:"Civilización de asedio y elefantes"
  },
  khitans: {
    name:"Khitán",
    bonuses:[
      {
        type:"special",
        note:"Pastures replace Farms"
      },
      {
        type:"special",
        note:"Melee attack upgrade effects are doubled"
      },
      {
        type:"special",
        note:"Skirmishers, Spearman-, and Scout Cavalry-line train and upgrade +15% faster"
      },
      {
        type:"cost_modifier",
        scope:"cavalry_archer",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Heavy Cavalry Archer upgrade available in Castle Age and costs -50%"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"infantry",
      stat:"attack",
      op:"add",
      value:2,
      note:"Infantry +2 attack vs. Ranged Soldiers"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "cavalier", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "mounted_treb", "rocket_cart", "heavy_rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "blockprinting", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tecnología Única I",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Efecto Mod."
      },
      {
        name:"Tecnología Única II",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Efecto Mod."
      }
    ],
    uniqueUnits:[
      {
        name:"Unidad Única",
        upgradeName:"Unidad Única Elite",
        age:2,
        imgPic:463,
        eliteImgPic:525
      }
    ],
    type:"Civilización de infantería y caballería"
  },
  lithuanians: {
    name:"Lituanos",
    bonuses:[
      {
        type:"special",
        note:"Each Town Center provides +100 food"
      },
      {
        type:"stat_modifier",
        scope:"skirmisher",
        stat:"speed",
        op:"multiply",
        value:1.1,
        note:"Spearman-line and Skirmisher-line move +10% faster"
      },
      {
        type:"stat_modifier",
        scope:"knight",
        stat:"attack",
        op:"add",
        value:1,
        note:"Each garrisoned Relic provides +1 attack to Knight-line and Leitis (maximum +4)"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"building",
      op:"multiply",
      value:1.2,
      note:"Monasteries work +20% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "archer", "crossbow", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "winged_hussar", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Hill Forts",
        age:2,
        cost:{
          food:250,
          gold:250
        },
        effect:"CU +3 rango de ataque."
      },
      {
        name:"Tower Shields",
        age:3,
        cost:{
          food:500,
          gold:200
        },
        effect:"Lanceros/Piqueros/Alabarderos +2 armadura perforante."
      }
    ],
    uniqueUnits:[
      {
        name:"Leitis",
        upgradeName:"Leitis Elite",
        age:2,
        imgPic:253,
        eliteImgPic:509
      }
    ],
    type:"Civilización de caballería y monjes"
  },
  magyars: {
    name:"Magiares",
    bonuses:[
      {
        type:"special",
        note:"Villagers defeat wolves with one strike"
      },
      {
        type:"cost_modifier",
        scope:"light_cavalry",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Scout Cavalry-line costs -15%"
      },
      {
        type:"free_tech",
        note:"Melee attack upgrades free"
      }
    ],
    teamBonus:{
      type:"creation_speed",
      scope:"cavalry_archer",
      op:"multiply",
      value:0.75,
      note:"Mounted Archers train +25% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "arson", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "heatedshot", "monk", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Mercenarios Magiares",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Huszar Magiar no cuesta oro."
      },
      {
        name:"Arco Recurvo",
        age:3,
        cost:{
          food:600,
          gold:400
        },
        effect:"Arqueros a caballo +1 rango y +1 ataque."
      }
    ],
    uniqueUnits:[
      {
        name:"Huszar Magiar",
        upgradeName:"Huszar Magiar Elite",
        age:2,
        imgPic:99,
        eliteImgPic:493
      }
    ],
    type:"Civilización de caballería"
  },
  malay: {
    name:"Malayo",
    bonuses:[
      {
        type:"special",
        note:"Advancing to the next Age is +66% faster"
      },
      {
        type:"free_tech",
        note:"Infantry armor upgrades free"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Battle Elephants cost -25/35% in Castle/Imperial Age"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.67,
        note:"Fish Traps cost -33% and provide +200% food"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"ship",
      stat:"los",
      op:"add",
      value:6,
      note:"Docks +6 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "battleeleph", "eliteeleph", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "keep", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "herbalmedicine", "illumination", "blockprinting", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "harbor"],
    uniqueTechs:[
      {
        name:"Thalassocracy",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Muelles se convierten en Puertos que atacan."
      },
      {
        name:"Forced Levy",
        age:3,
        cost:{
          food:1000,
          gold:600
        },
        effect:"Espadachines 2 Manos cuestan madera en vez de oro."
      }
    ],
    uniqueUnits:[
      {
        name:"Karambit Warrior",
        upgradeName:"Karambit Elite",
        age:2,
        imgPic:233,
        eliteImgPic:503
      }
    ],
    type:"Civilización naval"
  },
  malians: {
    name:"Malienses",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.85,
        note:"Buildings cost -15% wood"
      },
      {
        type:"special",
        note:"Villagers drop off +10% more gold"
      },
      {
        type:"stat_modifier",
        scope:"unit",
        stat:"armor_pierce",
        op:"add",
        value:3,
        note:"Barracks Units +1/+2/+3 pierce armor in Feudal/Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"building",
      op:"multiply",
      value:1.8,
      note:"Universities work +80% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "camel", "heavycamel", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "heavydemo", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tigui",
        age:2,
        cost:{
          food:200,
          wood:300
        },
        effect:"CU disparan flechas aunque estén vacíos."
      },
      {
        name:"Farimba",
        age:3,
        cost:{
          food:650,
          gold:400
        },
        effect:"Caballería +5 ataque."
      }
    ],
    uniqueUnits:[
      {
        name:"Gbeto",
        upgradeName:"Gbeto Elite",
        age:2,
        imgPic:197,
        eliteImgPic:500
      }
    ],
    type:"Civilización de infantería"
  },
  mapuche: {
    name:"Mapuche",
    type:"Civilización de caballería y contra-unidades",
    bonuses:[
      {
        type:"special",
        note:"Foragers drop off +20% food"
      },
      {
        type:"special",
        note:"Settlements can train Spearman-line and Skirmishers"
      },
      {
        type:"special",
        note:"Infantry, Slingers and Skirmishers +5/10/15 HP in Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Mounted Units generate +3 gold when defeating military units"
      },
      {
        type:"special",
        note:"Enemy Castles are revealed on the map"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"skirmisher",
      stat:"los",
      op:"add",
      value:2,
      note:"Spearman-line and Skirmishers +2 line of sight"
    },
    available:["barracks", "archery", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "spearman", "pikeman", "halberdier", "squires", "arson", "champiscout", "champirunner", "champiwarrior", "elitechampi", "archer", "crossbow", "skirmisher", "eliteskirm", "bolas_rider", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "catapult_gall", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "slinger", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Malón",
        age:2,
        cost:{
          food:400,
          gold:300
        },
        effect:"Bolas Riders, honderos y escaramuzadores causan daño de área."
      },
      {
        name:"Butalmapu",
        age:3,
        cost:{
          food:600,
          gold:400
        },
        effect:"Disminuye el costo de unidades únicas para todo el equipo."
      }
    ],
    uniqueUnits:[
      {
        name:"Kona",
        upgradeName:"Kona Elite",
        age:2,
        subtitle:"caballería pesada",
        imgPic:545,
        eliteImgPic:546
      },
      {
        name:"Bolas Rider",
        upgradeName:"Bolas Rider Elite",
        age:2,
        subtitle:"caballería a distancia"
      }
    ]
  },
  mayans: {
    name:"Mayas",
    bonuses:[
      {
        type:"start_resources",
        resource:"all",
        op:"add",
        value:null,
        note:"Start with +1 Villager, but -50 food"
      },
      {
        type:"special",
        note:"Resources last +15% longer"
      },
      {
        type:"cost_modifier",
        scope:"foot_archer",
        resource:"all",
        op:"multiply",
        value:0.9,
        note:"Foot Archers cost -10/20/30% in Feudal/Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"cost_modifier",
      scope:"unit",
      resource:"all",
      op:"multiply",
      value:0.5,
      note:"Walls cost -50%"
    },
    available:["barracks", "archery", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "eaglescout", "eaglewarrior", "eliteeagle", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "thumbring", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "catapult_gall", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "heresy", "sanctity", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Flechas de Obsidiana",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Arqueros +6 ataque vs edificios."
      },
      {
        name:"El Dorado",
        age:3,
        cost:{
          food:750,
          gold:450
        },
        effect:"Guerreros ÃƒÆ’Ã‚Âguila +40 PV."
      }
    ],
    uniqueUnits:[
      {
        name:"Arquero de Plumas",
        upgradeName:"Arquero de Plumas Elite",
        age:2,
        imgPic:108,
        eliteImgPic:488
      }
    ],
    type:"Civilización de arqueros"
  },
  mongols: {
    name:"Mongoles",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"hunter",
        op:"multiply",
        value:1.4,
        note:"Hunters work +40% faster"
      },
      {
        type:"stat_modifier",
        scope:"cavalry_archer",
        stat:"rof",
        op:"multiply",
        value:0.75,
        note:"Cavalry Archers attack +25% faster"
      },
      {
        type:"stat_modifier",
        scope:"light_cavalry",
        stat:"hp",
        op:"multiply",
        value:1.3,
        note:"Scout Cavalry-line and Steppe Lancers +20/30% HP in Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"light_cavalry",
      stat:"los",
      op:"add",
      value:2,
      note:"Scout Cavalry-line +2 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "camel", "heavycamel", "bloodlines", "husbandry", "steppe_lancer", "elite_steppe_lancer", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "monk", "redemption", "heresy", "fervor", "herbalmedicine", "illumination", "blockprinting", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Nómadas",
        age:2,
        cost:{
          food:300,
          gold:150
        },
        effect:"Casas no se destruyen cuando sus habitantes mueren."
      },
      {
        name:"Taladro",
        age:3,
        cost:{
          food:400,
          gold:600
        },
        effect:"Unidades del Taller de Asedio se mueven 50% más rápido."
      }
    ],
    uniqueUnits:[
      {
        name:"Mangudai",
        upgradeName:"Mangudai Elite",
        age:2,
        imgPic:42,
        eliteImgPic:484
      }
    ],
    type:"Civilización de arqueros a caballo"
  },
  muisca: {
    name:"Muisca",
    type:"Civilización de arqueros y monjes",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Advancing to the next Age costs -50% gold"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Settlements cost -25% and heal nearby units"
      },
      {
        type:"special",
        note:"Champi Warriors and Archery Range Units +1/2/3 melee armor in Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Monks regain faith +50% faster"
      },
      {
        type:"free_tech",
        note:"Caravan, Guilds free"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Natural gold sources last +15% longer"
    },
    available:["barracks", "archery", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "spearman", "pikeman", "halberdier", "squires", "arson", "champiscout", "champirunner", "champiwarrior", "elitechampi", "temple_guard", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "catapult_gall", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "slinger", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "heavydemo", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Herbalismo",
        age:2,
        cost:{
          food:300,
          gold:200
        },
        effect:"Aumenta la velocidad de movimiento de arqueros y Champi Warriors."
      },
      {
        name:"Huaracas",
        age:3,
        cost:{
          food:500,
          gold:400
        },
        effect:"Aumenta el rango y la velocidad de entrenamiento de los honderos."
      }
    ],
    uniqueUnits:[
      {
        name:"Guerrero Guecha",
        upgradeName:"Guerrero Guecha Elite",
        age:2,
        subtitle:"hostigador",
        imgPic:543,
        eliteImgPic:544
      },
      {
        name:"Guardia del Templo",
        upgradeName:"Guardia del Templo Elite",
        age:2,
        subtitle:"infantería pesada"
      }
    ]
  },
  persians: {
    name:"Persas",
    bonuses:[
      {
        type:"start_resources",
        resource:"wood",
        op:"add",
        value:50,
        note:"Start with +50 wood and +50 food"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"hp",
        op:"multiply",
        value:2,
        note:"Town Centers and Docks +100% HP and work +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Parthian Tactics available in Castle Age"
      },
      {
        type:"special",
        note:"Can build Caravanserai in Imperial Age"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"knight",
      stat:"attack",
      op:"add",
      value:2,
      note:"Knight-line +2 attack vs. Ranged Soldiers"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "camel", "heavycamel", "bloodlines", "husbandry", "savar", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "heavydemo", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "caravanserai"],
    uniqueTechs:[
      {
        name:"Mahout",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Elefantes de guerra +30% velocidad."
      },
      {
        name:"Citadels",
        age:3,
        cost:{
          food:700,
          gold:200
        },
        effect:"Centros Urbanos +35 armadura perforante."
      }
    ],
    uniqueUnits:[
      {
        name:"Elefante de Guerra",
        upgradeName:"Elefante de Guerra Elite",
        age:2,
        imgPic:43,
        eliteImgPic:481
      }
    ],
    type:"Civilización de caballería"
  },
  poles: {
    name:"Polacos",
    bonuses:[
      {
        type:"special",
        note:"Folwark replaces Mill"
      },
      {
        type:"stat_modifier",
        scope:"villager",
        stat:"regen",
        op:"add",
        value:20,
        note:"Villagers regenerate 10/15/20 HP in Feudal/Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Stone Miners generate gold in addition to stone"
      },
      {
        type:"cost_modifier",
        scope:"light_cavalry",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Bloodlines and Scout Cavalry-line upgrades cost -50% food"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"light_cavalry",
      stat:"attack",
      op:"add",
      value:1,
      note:"Scout Cavalry-line +1 attack vs. Ranged Soldiers"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "bloodlines", "husbandry", "winged_hussar", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "monk", "redemption", "heresy", "sanctity", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "folwark"],
    uniqueTechs:[
      {
        name:"Szlachta Privileges",
        age:2,
        cost:{
          food:500,
          gold:100
        },
        effect:"Caballería Ligera cuesta -60% oro."
      },
      {
        name:"Lechitic Legacy",
        age:3,
        cost:{
          food:1000,
          gold:600
        },
        effect:"Caballería genera oro al matar enemigos."
      }
    ],
    uniqueUnits:[
      {
        name:"Obuch",
        upgradeName:"Obuch Elite",
        age:2,
        imgPic:369,
        eliteImgPic:513
      }
    ],
    type:"Civilización de caballería"
  },
  portuguese: {
    name:"Portugueses",
    bonuses:[
      {
        type:"special",
        note:"Foragers generate wood in addition to food"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.8,
        note:"All units cost -20% gold"
      },
      {
        type:"special",
        note:"Can build Feitoria in Imperial Age"
      },
      {
        type:"special",
        note:"Ships +10/15/20% HP in Feudal/Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"building_work_speed",
      scope:"tech_research",
      op:"multiply",
      value:1.25,
      note:"Technologies research +25% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "thumbring", "scout", "lightcav", "hussar", "knight", "cavalier", "paladin", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "carrack", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "atonement", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "caravel_d", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "feitoria"],
    uniqueTechs:[
      {
        name:"Carrack",
        age:2,
        cost:{
          wood:200,
          gold:300
        },
        effect:"Navíos +1/+1 armadura."
      },
      {
        name:"Arquebus",
        age:3,
        cost:{
          food:700,
          gold:500
        },
        effect:"Unidades de pólvora con 100% precisión."
      }
    ],
    uniqueUnits:[
      {
        name:"ÃƒÆ’Ã¢â‚¬Å“rgano de Cañones",
        upgradeName:"ÃƒÆ’Ã¢â‚¬Å“rgano de Cañones Elite",
        age:2,
        imgPic:190,
        eliteImgPic:496
      }
    ],
    type:"Civilización naval y de pólvora"
  },
  romans: {
    name:"Romanos",
    bonuses:[
      {
        type:"special",
        note:"Villagers gather, build, and repair +5% faster"
      },
      {
        type:"special",
        note:"Infantry armor upgrade effects are doubled"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Scorpions cost -50% gold"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"armor_melee_and_pierce",
        op:"add",
        value_melee:1,
        value_pierce:1,
        note:"Galley-line and Dromons +1 melee/+1 pierce armor"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Scorpions minimum range reduced"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "gambesons", "legionary", "archer", "crossbow", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "scout", "lightcav", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "fastfireship", "drydock", "shipwright", "hulk", "war_hulk", "dromon", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "fortifiedwall", "keep", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Ballistas",
        age:2,
        cost:{
          food:400,
          gold:300
        },
        effect:"Escorpiones y Galeras de guerra disparan 33% más rápido."
      },
      {
        name:"Comitatenses",
        age:3,
        cost:{
          food:800,
          gold:600
        },
        effect:"Infanteía y caballería se crean un 50% más rápido; carga de ataque."
      }
    ],
    uniqueUnits:[
      {
        name:"Legionario",
        upgradeName:"Centurión",
        age:2,
        imgPic:405,
        eliteImgPic:521
      }
    ],
    type:"Civilización de infantería y caballería"
  },
  saracens: {
    name:"Sarracenos",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:null,
        note:"Market trading fee only 5%; Markets cost -100 wood"
      },
      {
        type:"stat_modifier",
        scope:"camel",
        stat:"hp",
        op:"multiply",
        value:1.25,
        note:"Camel Units +25% HP"
      },
      {
        type:"special",
        note:"Galley-line attacks +25% faster"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"hp",
        op:"multiply",
        value:2,
        note:"Transport Ships +100% HP, +20 carry capacity"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"foot_archer",
      stat:"attack",
      op:"add",
      value:2,
      note:"Foot Archers and Skirmishers +2 attack vs. buildings"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "camel", "heavycamel", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "monk", "redemption", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "heavydemo", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Bimaristan",
        age:2,
        cost:{
          food:700,
          gold:175
        },
        effect:"Caravana médica cura unidades cercanas."
      },
      {
        name:"Madrasah",
        age:3,
        cost:{
          food:200,
          gold:100
        },
        effect:"Monjes devuelven 33% del costo al morir."
      }
    ],
    uniqueUnits:[
      {
        name:"Mameluco",
        upgradeName:"Mameluco Elite",
        age:2,
        imgPic:37,
        eliteImgPic:479
      }
    ],
    type:"Civilización de camellos y naval"
  },
  shu: {
    name:"Shu",
    bonuses:[
      {
        type:"special",
        note:"Lumberjacks generate food in addition to wood"
      },
      {
        type:"cost_modifier",
        scope:"archer",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Archery Unit technologies at the Archery Range and Blacksmith cost -25%"
      },
      {
        type:"stat_modifier",
        scope:"ship",
        stat:"speed",
        op:"multiply",
        value:1.15,
        note:"Siege Weapons and Siege Warships move +10/15% faster in Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"foot_archer",
      stat:"los",
      op:"add",
      value:2,
      note:"Foot Archers +2 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "scout", "lightcav", "knight", "cavalier", "husbandry", "hei_guang", "heavy_hei_guang", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "traction_treb", "rocket_cart", "heavy_rocket_cart", "war_chariot_s", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "lou_chuan", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "fortifiedwall", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tecnología Única I",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Efecto Mod."
      },
      {
        name:"Tecnología Única II",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Efecto Mod."
      }
    ],
    uniqueUnits:[
      {
        name:"Unidad Única",
        upgradeName:"Unidad Única Elite",
        age:2,
        imgPic:434,
        eliteImgPic:527
      }
    ],
    type:"Civilización de arqueros y asedio"
  },
  sicilians: {
    name:"Sicilianos",
    bonuses:[
      {
        type:"start_resources",
        resource:"stone",
        op:"add",
        value:100,
        note:"Start with +100 stone"
      },
      {
        type:"special",
        note:"Farm upgrades provide +125% additional food"
      },
      {
        type:"special",
        note:"Soldiers receive -40% bonus damage"
      },
      {
        type:"special",
        note:"Can build Donjon in Dark Age, replaces Watch Tower-line"
      },
      {
        type:"special",
        note:"Fortifications built +50% faster; Town Centers built +100% faster"
      }
    ],
    teamBonus:{
      type:"cost_modifier",
      scope:"ship",
      resource:"all",
      op:"multiply",
      value:0.5,
      note:"Transport Ships +5 line of sight and cost -50%"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "scout", "lightcav", "knight", "cavalier", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "arrowslits", "murderhole", "siegeengineers", "heatedshot", "monk", "redemption", "sanctity", "fervor", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries", "donjon"],
    uniqueTechs:[
      {
        name:"First Crusade",
        age:2,
        cost:{
          food:300,
          gold:600
        },
        effect:"Cada CU crea 7 Milicianos al investigar."
      },
      {
        name:"Scutage",
        age:3,
        cost:{
          food:400,
          gold:400
        },
        effect:"Cada aliado recibe 15 oro por unidad tributada."
      }
    ],
    uniqueUnits:[
      {
        name:"Sargento",
        upgradeName:"Sargento Elite",
        age:2,
        imgPic:356,
        eliteImgPic:512
      }
    ],
    type:"Civilización de infantería y caballería"
  },
  tatars: {
    name:"Tártaros",
    bonuses:[
      {
        type:"special",
        note:"Livestock animals last +50% longer"
      },
      {
        type:"special",
        note:"Units deal +25% damage when fighting from higher elevation"
      },
      {
        type:"special",
        note:"New Town Centers spawn 2 Sheep starting in Castle Age"
      },
      {
        type:"free_tech",
        note:"Thumb Ring, Parthian Tactics free"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"cavalry_archer",
      stat:"los",
      op:"add",
      value:2,
      note:"Mounted Archers +2 line of sight"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "archer", "crossbow", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "camel", "heavycamel", "bloodlines", "husbandry", "steppe_lancer", "elite_steppe_lancer", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "heatedshot", "monk", "redemption", "heresy", "sanctity", "fervor", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "flaming_camel", "incendiaries"],
    uniqueTechs:[
      {
        name:"Silk Armor",
        age:2,
        cost:{
          food:200,
          gold:300
        },
        effect:"Lanceros de Estepa y Cav. Ligera +1/+1 armadura."
      },
      {
        name:"Timurid Siegecraft",
        age:3,
        cost:{
          food:400,
          gold:300
        },
        effect:"Trebuchets +2 rango; habilita Camellos Ardientes."
      }
    ],
    uniqueUnits:[
      {
        name:"Keshik",
        upgradeName:"Keshik Elite",
        age:2,
        imgPic:251,
        eliteImgPic:507
      }
    ],
    type:"Civilización de arqueros a caballo"
  },
  teutons: {
    name:"Teutones",
    bonuses:[
      {
        type:"cost_modifier",
        scope:"farmer",
        resource:"all",
        op:"multiply",
        value:0.6,
        note:"Farms cost -40%"
      },
      {
        type:"special",
        note:"Town Centers +10 garrison capacity; Towers +5 garrison capacity"
      },
      {
        type:"stat_modifier",
        scope:"unit",
        stat:"armor_melee",
        op:"add",
        value:2,
        note:"Barracks and Stable Units +1/+2 melee armor in Castle/Imperial Age"
      },
      {
        type:"special",
        note:"Monks +100% healing range"
      },
      {
        type:"free_tech",
        note:"Murder Holes, Herbal Medicine free"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Units more resistant to conversion"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "gambesons", "archer", "crossbow", "skirmisher", "eliteskirm", "handcannon", "cavarcher", "scout", "knight", "cavalier", "paladin", "bloodlines", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "fastfireship", "carrack", "heavydemo", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Ironclad",
        age:2,
        cost:{
          food:400,
          gold:350
        },
        effect:"Asedio +4 armadura cuerpo a cuerpo."
      },
      {
        name:"Crenellations",
        age:3,
        cost:{
          food:600,
          stone:400
        },
        effect:"Castillos +3 rango; infantería garnisonada puede disparar."
      }
    ],
    uniqueUnits:[
      {
        name:"Caballero Teutónico",
        upgradeName:"Cab. Teutónico Elite",
        age:2,
        imgPic:45,
        eliteImgPic:477
      }
    ],
    type:"Civilización de infantería y defensiva"
  },
  turks: {
    name:"Turcos",
    bonuses:[
      {
        type:"building_work_speed",
        scope:"miner",
        op:"multiply",
        value:1.25,
        note:"Gold miners work +25% faster"
      },
      {
        type:"free_tech",
        note:"Scout Cavalry-line +1 pierce armor and upgrades free"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Chemistry free; Gunpowder technologies costs -50%"
      },
      {
        type:"stat_modifier",
        scope:"gunpowder",
        stat:"hp",
        op:"multiply",
        value:1.25,
        note:"Gunpowder Units +25% HP"
      }
    ],
    teamBonus:{
      type:"creation_speed",
      scope:"gunpowder",
      op:"multiply",
      value:0.75,
      note:"Gunpowder Units train +25% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "squires", "arson", "archer", "crossbow", "skirmisher", "handcannon", "cavarcher", "hcavarcher", "thumbring", "parthian", "scout", "lightcav", "hussar", "knight", "cavalier", "camel", "heavycamel", "bloodlines", "husbandry", "batteringram", "cappedram", "siegeram", "mangonel", "scorpion", "heavyscorpion", "bombcannon", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Sipahi",
        age:2,
        cost:{
          food:400,
          gold:300
        },
        effect:"Arqueros a Caballo +20 PV."
      },
      {
        name:"Artillery",
        age:3,
        cost:{
          food:500,
          gold:800
        },
        effect:"Cañones de Bombarda +2 rango."
      }
    ],
    uniqueUnits:[
      {
        name:"Jenízaro",
        upgradeName:"Jenízaro Elite",
        age:2,
        imgPic:39,
        eliteImgPic:480
      }
    ],
    type:"Civilización de pólvora"
  },
  tupi: {
    name:"Tupí",
    type:"Civilización de arqueros e infantería",
    bonuses:[
      {
        type:"start_resources",
        resource:"all",
        op:"add",
        value:null,
        note:"Start with +25 of each resource"
      },
      {
        type:"special",
        note:"Villagers can garrison in Settlements"
      },
      {
        type:"special",
        note:"Fallen units return 15% of their cost"
      },
      {
        type:"cost_modifier",
        scope:"archer",
        resource:"all",
        op:"multiply",
        value:0.5,
        note:"Archery Range and Barracks upgrades cost -50% food"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Towers and Castles provide +10 population space"
    },
    available:["barracks", "archery", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "spearman", "pikeman", "halberdier", "squires", "arson", "champiscout", "champirunner", "champiwarrior", "elitechampi", "temple_guard", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "siegeonager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "catapult_gall", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "bombardtower", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "slinger", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Caciques",
        age:2,
        cost:{
          food:400,
          gold:300
        },
        effect:"Champi Warriors y honderos atacan más rápido."
      },
      {
        name:"Curare",
        age:3,
        cost:{
          food:600,
          gold:500
        },
        effect:"Arqueros a pie y fortificaciones causan daño por veneno."
      }
    ],
    uniqueUnits:[
      {
        name:"Arquero de Madera Negra",
        upgradeName:"Arquero de Madera Negra Elite",
        age:2,
        subtitle:"arquero económico",
        imgPic:549,
        eliteImgPic:550
      },
      {
        name:"Guerrero Ibirapema",
        upgradeName:"Guerrero Ibirapema Elite",
        age:2,
        subtitle:"infantería de área"
      }
    ]
  },
  vietnamese: {
    name:"Vietnamitas",
    bonuses:[
      {
        type:"special",
        note:"Enemy Town Centers are revealed at the start of the game"
      },
      {
        type:"building_work_speed",
        scope:"tech_research",
        op:"multiply",
        value:2,
        note:"Economic upgrades cost no wood and research +100% faster"
      },
      {
        type:"stat_modifier",
        scope:"archer",
        stat:"hp",
        op:"multiply",
        value:1.2,
        note:"Archery Range units and Fire Lancers +20% HP"
      },
      {
        type:"free_tech",
        note:"Conscription free"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Imperial Skirmisher upgrade available in Imperial Age"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "hcavarcher", "thumbring", "imp_skirmisher", "scout", "lightcav", "knight", "cavalier", "battleeleph", "eliteeleph", "bloodlines", "husbandry", "batteringram", "cappedram", "mangonel", "onager", "scorpion", "heavyscorpion", "bombcannon", "rocket_cart", "heavy_rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "demoraft", "demoship", "heavydemo", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "sanctity", "fervor", "herbalmedicine", "illumination", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Chatras",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Elefantes de Batalla +50 PV."
      },
      {
        name:"Paper Money",
        age:3,
        cost:{
          food:750,
          gold:400
        },
        effect:"Cada aliado recibe 500 oro."
      }
    ],
    uniqueUnits:[
      {
        name:"Rattan Archer",
        upgradeName:"Rattan Archer Elite",
        age:2,
        imgPic:232,
        eliteImgPic:505
      }
    ],
    type:"Civilización de arqueros"
  },
  vikings: {
    name:"Vikingos",
    bonuses:[
      {
        type:"free_tech",
        note:"Wheelbarrow, Hand Cart free"
      },
      {
        type:"stat_modifier",
        scope:"infantry",
        stat:"hp",
        op:"multiply",
        value:1.2,
        note:"Infantry +20% HP starting in Feudal Age"
      },
      {
        type:"cost_modifier",
        scope:"ship",
        resource:"all",
        op:"multiply",
        value:0.9,
        note:"Warships cost -10/15/20% in Feudal/Castle/Imperial Age"
      }
    ],
    teamBonus:{
      type:"cost_modifier",
      scope:"ship",
      resource:"all",
      op:"multiply",
      value:0.85,
      note:"Docks cost -15%"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "squires", "arson", "gambesons", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "scout", "lightcav", "knight", "cavalier", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "galleon", "firegalley", "demoraft", "demoship", "cannongalleon", "drydock", "shipwright", "hulk", "war_hulk", "masonry", "ballistics", "chemistry", "guardtower", "arrowslits", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "heatedshot", "monk", "redemption", "heresy", "fervor", "herbalmedicine", "blockprinting", "theocracy", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "longboat", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Chieftains",
        age:2,
        cost:{
          food:400,
          gold:300
        },
        effect:"Infantería +5 ataque vs caballería."
      },
      {
        name:"Berserkergang",
        age:3,
        cost:{
          food:500,
          gold:450
        },
        effect:"Berserks regeneran PV automáticamente."
      }
    ],
    uniqueUnits:[
      {
        name:"Berserk",
        upgradeName:"Berserk Elite",
        age:2,
        imgPic:38,
        eliteImgPic:485
      }
    ],
    type:"Civilización de infantería y naval"
  },
  wei: {
    name:"Wei",
    bonuses:[
      {
        type:"free_tech",
        note:"Receive one free Villager for each economic upgrade researched"
      },
      {
        type:"stat_modifier",
        scope:"cavalry",
        stat:"hp",
        op:"multiply",
        value:1.3,
        note:"Hei Guang Cavalry and Xianbei Raider +20/30% HP in Castle/Imperial Age"
      },
      {
        type:"cost_modifier",
        scope:"unit",
        resource:"all",
        op:"multiply",
        value:0.75,
        note:"Traction Trebuchets and Lou Chuans cost -25%"
      }
    ],
    teamBonus:{
      type:"stat_modifier",
      scope:"cavalry",
      stat:"attack",
      op:"add",
      value:2,
      note:"Cavalry +2 attack vs. Siege Weapons"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "spearman", "pikeman", "halberdier", "squires", "arson", "fire_lancer", "elite_fire_lancer", "archer", "crossbow", "skirmisher", "eliteskirm", "thumbring", "parthian", "xianbei_raider", "scout", "lightcav", "hussar", "knight", "cavalier", "bloodlines", "husbandry", "hei_guang", "heavy_hei_guang", "batteringram", "cappedram", "siegeram", "mangonel", "onager", "scorpion", "heavyscorpion", "traction_treb", "rocket_cart", "heavy_rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "paddedarcharmor", "leatherarcharmor", "ringarcherarmor", "scalebarding", "chainbarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "fastfireship", "demoraft", "demoship", "drydock", "shipwright", "hulk", "war_hulk", "lou_chuan", "masonry", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "fortifiedwall", "keep", "heatedshot", "monk", "redemption", "heresy", "sanctity", "fervor", "herbalmedicine", "faith", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tecnología Única I",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Efecto Mod."
      },
      {
        name:"Tecnología Única II",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Efecto Mod."
      }
    ],
    uniqueUnits:[
      {
        name:"Unidad Única",
        upgradeName:"Unidad Única Elite",
        age:2,
        imgPic:432,
        eliteImgPic:526
      }
    ],
    type:"Civilización de caballería"
  },
  wu: {
    name:"Wu",
    bonuses:[
      {
        type:"special",
        note:"Military production buildings and Docks provide +55 food"
      },
      {
        type:"stat_modifier",
        scope:"infantry",
        stat:"regen",
        op:"add",
        value:30,
        note:"Infantry regenerates 10/15/30 HP per minute in Feudal/Castle/Imperial Age"
      },
      {
        type:"stat_modifier",
        scope:"cavalry",
        stat:"attack",
        op:"add",
        value:2,
        note:"Jian Swordsmen and Hei Guang Cavalry +2 attack in Imperial Age"
      },
      {
        type:"free_tech",
        note:"Careening, Dry Dock free"
      }
    ],
    teamBonus:{
      type:"special",
      note:"Houses built +100% faster"
    },
    available:["barracks", "archery", "stable", "siege", "blacksmith", "dock", "university", "monastery", "castle", "market", "tc", "mill", "lumber", "mining", "militia", "manatarms", "longsword", "twohanded", "champion", "spearman", "pikeman", "halberdier", "squires", "arson", "fire_lancer", "elite_fire_lancer", "jian_swordsman", "archer", "crossbow", "arbalester", "skirmisher", "eliteskirm", "cavarcher", "scout", "lightcav", "hussar", "knight", "cavalier", "bloodlines", "husbandry", "hei_guang", "heavy_hei_guang", "batteringram", "mangonel", "onager", "scorpion", "heavyscorpion", "traction_treb", "rocket_cart", "heavy_rocket_cart", "forging", "ironcasting", "blastfurnace", "scalemailarmor", "chainmailarmor", "platemailarmor", "paddedarcharmor", "leatherarcharmor", "scalebarding", "chainbarding", "platebarding", "fletching", "bodkinarrow", "bracer", "fishingship", "transportship", "tradecog", "galley", "wargalley", "firegalley", "fastfireship", "demoraft", "demoship", "heavydemo", "drydock", "shipwright", "hulk", "war_hulk", "lou_chuan", "masonry", "architecture", "ballistics", "chemistry", "guardtower", "murderhole", "siegeengineers", "treadmillcrane", "keep", "heatedshot", "monk", "redemption", "atonement", "heresy", "sanctity", "fervor", "theocracy", "trebuchet", "petard", "uniqueunit", "eliteunique", "uniquetech1", "uniquetech2", "hoardings", "conscription", "sappers", "tradecart", "coinage", "banking", "guilds", "villager", "loom", "wheelbarrow", "townwatch", "handcart", "townpatrol", "horsecollar", "heavyplow", "croprotation", "doublebitaxe", "bowsaw", "twomansaw", "goldmining", "goldshaft", "stonemining", "stoneshaft", "carrack", "galleon", "fireship", "fishing_lines", "gillnets", "medium_warships", "heavy_warships", "careening", "clinker_construction", "carvel_hull", "siphons", "incendiaries"],
    uniqueTechs:[
      {
        name:"Tecnología Única I",
        age:2,
        cost:{
          food:300,
          gold:300
        },
        effect:"Efecto Mod."
      },
      {
        name:"Tecnología Única II",
        age:3,
        cost:{
          food:500,
          gold:500
        },
        effect:"Efecto Mod."
      }
    ],
    uniqueUnits:[
      {
        name:"Unidad Única",
        upgradeName:"Unidad Única Elite",
        age:2,
        imgPic:436,
        eliteImgPic:528
      }
    ],
    type:"Civilización de infantería y naval"
  },
};
