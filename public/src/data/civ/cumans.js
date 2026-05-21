const CUMANS = {
  "bonuses": [
    {
      "type": "special"
    },
    {
      "type": "stat_modifier",
      "scope": "cavalry",
      "stat": "speed",
      "op": "multiply",
      "value": 1.15
    },
    {
      "type": "building_cost_modifier",
      "scope": "archery",
      "resource": "wood",
      "op": "add",
      "value": -75
    },
    {
      "type": "building_cost_modifier",
      "scope": "stable",
      "resource": "wood",
      "op": "add",
      "value": -75
    },
    {
      "type": "special"
    }
  ],
  "teamBonus": {
    "type": "stat_modifier",
    "scope": "palisade",
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
    "devotion",
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
        "food": 200,
        "wood": 300
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

