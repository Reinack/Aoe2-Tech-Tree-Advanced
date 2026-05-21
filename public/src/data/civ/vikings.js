const VIKINGS = {
  "bonuses": [
    // Wheelbarrow and Hand Cart free
    {
      "type": "free_tech"
    },
    // Infantry +20% HP starting in Feudal Age
    {
      "type": "stat_modifier",
      "scope": "infantry",
      "stat": "hp",
      "op": "multiply",
      "value": 1.2
    },
    // Warships cost -10/15/20% in Feudal/Castle/Imperial Age
    {
      "type": "cost_modifier",
      "scope": "ship",
      "resource": "all",
      "op": "multiply",
      "value": 0.9
    }
  ],
  // Team bonus: Docks cost -15%
  "teamBonus": {
    "type": "cost_modifier",
    "scope": "ship",
    "resource": "all",
    "op": "multiply",
    "value": 0.85
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
    "squires",
    "arson",
    "gambesons",
    "archer",
    "crossbow",
    "arbalester",
    "skirmisher",
    "eliteskirm",
    "cavarcher",
    "scout",
    "lightcav",
    "knight",
    "cavalier",
    "siegetower",
    "batteringram",
    "cappedram",
    "siegeram",
    "mangonel",
    "onager",
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
    "fletching",
    "bodkinarrow",
    "bracer",
    "fishingship",
    "transportship",
    "tradecog",
    "galley",
    "wargalley",
    "galleon",
    "firegalley",
    "demoraft",
    "demoship",
    "cannongalleon",
    "drydock",
    "shipwright",
    "hulk",
    "war_hulk",
    "masonry",
    "ballistics",
    "chemistry",
    "guardtower",
    "arrowslits",
    "murderhole",
    "siegeengineers",
    "treadmillcrane",
    "fortifiedwall",
    "heatedshot",
    "monk",
    "redemption",
    "heresy",
    "fervor",
    "herbalmedicine",
    "devotion",
    "blockprinting",
    "theocracy",
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
    "longboat",
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
    "architecture",
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
        "food": 600,
        "gold": 450
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 650,
        "gold": 500
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 38,
      "eliteImgPic": 485
    }
  ]
};




window.VIKINGS = VIKINGS;
export default VIKINGS;

