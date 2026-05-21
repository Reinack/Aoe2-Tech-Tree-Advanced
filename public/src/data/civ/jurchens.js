const JURCHENS = {
  "bonuses": [
    {
      "type": "special"
    },
    {
      "type": "stat_modifier",
      "scope": "cavalry",
      "stat": "rof",
      "op": "multiply",
      "value": 0.75
    },
    {
      "type": "special"
    },
    {
      "type": "special"
    },
    {
      "type": "special"
    }
  ],
  "teamBonus": {
    "type": "stat_modifier",
    "scope": "gunpowder",
    "stat": "los",
    "op": "add",
    "value": 2
  },
  "available": [
    "barracks",
    "archery",
    "stable",
    "siege",
    "blacksmith",
    "dock",
    "university",
    "monastery",
    "castle",
    "market",
    "tc",
    "mill",
    "lumber",
    "mining",
    "militia",
    "spearman",
    "pikeman",
    "halberdier",
    "squires",
    "arson",
    "gambesons",
    "fire_lancer",
    "elite_fire_lancer",
    "archer",
    "crossbow",
    "arbalester",
    "skirmisher",
    "eliteskirm",
    "cavarcher",
    "hcavarcher",
    "thumbring",
    "grenadier",
    "scout",
    "lightcav",
    "hussar",
    "steppe_lancer",
    "elite_steppe_lancer",
    "cavalier",
    "bloodlines",
    "husbandry",
    "siegetower",
    "batteringram",
    "cappedram",
    "siegeram",
    "mangonel",
    "onager",
    "siegeonager",
    "scorpion",
    "heavyscorpion",
    "bombcannon",
    "rocket_cart",
    "heavy_rocket_cart",
    "forging",
    "ironcasting",
    "blastfurnace",
    "scalemailarmor",
    "chainmailarmor",
    "platemailarmor",
    "paddedarcharmor",
    "scalebarding",
    "chainbarding",
    "platebarding",
    "fletching",
    "bodkinarrow",
    "bracer",
    "fishingship",
    "transportship",
    "tradecog",
    "galley",
    "wargalley",
    "firegalley",
    "demoraft",
    "demoship",
    "heavydemo",
    "drydock",
    "shipwright",
    "hulk",
    "war_hulk",
    "lou_chuan",
    "masonry",
    "architecture",
    "ballistics",
    "chemistry",
    "guardtower",
    "arrowslits",
    "murderhole",
    "siegeengineers",
    "treadmillcrane",
    "fortifiedwall",
    "keep",
    "monk",
    "redemption",
    "atonement",
    "heresy",
    "sanctity",
    "fervor",
    "herbalmedicine",
    "devotion",
    "illumination",
    "blockprinting",
    "trebuchet",
    "petard",
    "uniqueunit",
    "eliteunique",
    "uniquetech1",
    "uniquetech2",
    "hoardings",
    "conscription",
    "sappers",
    "tradecart",
    "caravan",
    "coinage",
    "banking",
    "guilds",
    "villager",
    "loom",
    "wheelbarrow",
    "townwatch",
    "handcart",
    "townpatrol",
    "horsecollar",
    "heavyplow",
    "croprotation",
    "doublebitaxe",
    "bowsaw",
    "twomansaw",
    "goldmining",
    "goldshaft",
    "stonemining",
    "stoneshaft",
    "carrack",
    "galleon",
    "fireship",
    "fishing_lines",
    "gillnets",
    "medium_warships",
    "heavy_warships",
    "careening",
    "clinker_construction",
    "carvel_hull",
    "siphons",
    "incendiaries",
    "stonewall",
    "watchtower",
    "palisadewall",
    "palisadegate",
    "outpost",
    "house"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 350,
        "wood": 250
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 900,
        "gold": 600
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 461,
      "eliteImgPic": 524,
      "cost": { "food": 80, "gold": 55 },
      "elite_cost": { "food": 950, "gold": 550 }
    }
  ],
  "overrides": {
    "siegeengineers": {
      "age": 2
    }
  }
};




window.JURCHENS = JURCHENS;
export default JURCHENS;

