const BURGUNDIANS = {
  "bonuses": [
    {
      "type": "tech_cost_modifier",
      "scope": "economic_tech",
      "resource": "food",
      "op": "multiply",
      "value": 0.67
    },
    {
      "type": "tech_cost_modifier",
      "scope": "stable",
      "resource": "all",
      "op": "multiply",
      "value": 0.5
    },
    {
      "type": "special"
    },
    {
      "type": "stat_modifier",
      "scope": "gunpowder",
      "stat": "attack",
      "op": "multiply",
      "value": 1.25
    }
  ],
  "teamBonus": {
    "type": "special"
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
    "gambesons",
    "flemish_militia",
    "archer",
    "crossbow",
    "skirmisher",
    "eliteskirm",
    "handcannon",
    "cavarcher",
    "hcavarcher",
    "thumbring",
    "scout",
    "lightcav",
    "hussar",
    "knight",
    "cavalier",
    "paladin",
    "bloodlines",
    "husbandry",
    "siegetower",
    "batteringram",
    "cappedram",
    "siegeram",
    "mangonel",
    "onager",
    "scorpion",
    "heavyscorpion",
    "bombcannon",
    "forging",
    "ironcasting",
    "blastfurnace",
    "scalemailarmor",
    "chainmailarmor",
    "platemailarmor",
    "paddedarcharmor",
    "leatherarcharmor",
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
    "cannongalleon",
    "shipwright",
    "hulk",
    "war_hulk",
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
    "bombardtower",
    "monk",
    "redemption",
    "atonement",
    "sanctity",
    "fervor",
    "herbalmedicine",
    "devotion",
    "illumination",
    "blockprinting",
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
        "food": 400,
        "gold": 300
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 200,
        "gold": 150
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 355,
      "eliteImgPic": 511,
      "cost": { "food": 55, "gold": 55 }
    }
  ],
  "overrides": {
    "cavalier": {
      "age": 2,
      "row": 5
    },
    "caravan": {
      "age": 1
    },
    "guilds": {
      "age": 2
    },
    "fishing_lines": {
      "age": 0
    },
    "gillnets": {
      "age": 1
    },
    "wheelbarrow": {
      "age": 0
    },
    "handcart": {
      "age": 1
    }
  }
};




window.BURGUNDIANS = BURGUNDIANS;
export default BURGUNDIANS;

