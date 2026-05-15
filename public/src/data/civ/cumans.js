const CUMANS = {
  "bonuses": [
    {
      "type": "special"
    },
    {
      "type": "special"
    },
    {
      "type": "cost_modifier",
      "scope": "archer",
      "resource": "all",
      "op": "multiply",
      "value": null
    },
    {
      "type": "special"
    }
  ],
  "teamBonus": {
    "type": "stat_modifier",
    "scope": "unit",
    "stat": "hp",
    "op": "multiply",
    "value": 1.33
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
    "manatarms",
    "longsword",
    "twohanded",
    "champion",
    "spearman",
    "pikeman",
    "halberdier",
    "squires",
    "arson",
    "archer",
    "crossbow",
    "skirmisher",
    "eliteskirm",
    "cavarcher",
    "hcavarcher",
    "thumbring",
    "parthian",
    "scout",
    "lightcav",
    "hussar",
    "knight",
    "cavalier",
    "paladin",
    "camel",
    "heavycamel",
    "bloodlines",
    "husbandry",
    "steppe_lancer",
    "elite_steppe_lancer",
    "siegetower",
    "batteringram",
    "cappedram",
    "siegeram",
    "mangonel",
    "onager",
    "siegeonager",
    "scorpion",
    "heavyscorpion",
    "forging",
    "ironcasting",
    "blastfurnace",
    "scalemailarmor",
    "chainmailarmor",
    "platemailarmor",
    "paddedarcharmor",
    "leatherarcharmor",
    "ringarcherarmor",
    "scalebarding",
    "chainbarding",
    "platebarding",
    "fletching",
    "bodkinarrow",
    "fishingship",
    "transportship",
    "tradecog",
    "galley",
    "wargalley",
    "firegalley",
    "demoraft",
    "demoship",
    "drydock",
    "shipwright",
    "hulk",
    "war_hulk",
    "masonry",
    "ballistics",
    "chemistry",
    "murderhole",
    "siegeengineers",
    "heatedshot",
    "monk",
    "atonement",
    "heresy",
    "sanctity",
    "fervor",
    "herbalmedicine",
    "faith",
    "trebuchet",
    "petard",
    "uniqueunit",
    "eliteunique",
    "uniquetech1",
    "uniquetech2",
    "hoardings",
    "conscription",
    "sappers",
    "kipchak_c",
    "tradecart",
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
    "fastfireship",
    "carrack",
    "galleon",
    "catapult_gall",
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
        "food": 300,
        "gold": 200
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 650,
        "gold": 400
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 252,
      "eliteImgPic": 508
    }
  ],
  "overrides": {
    "siege": {
      "age": 1
    },
    "cappedram": {
      "age": 1
    }
  }
};




window.CUMANS = CUMANS;
export default CUMANS;

