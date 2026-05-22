const SICILIANS = {
  "bonuses": [
    // Start with +100 stone
    {
      "type": "start_resources",
      "resource": "stone",
      "op": "add",
      "value": 100
    },
    // Farm upgrades provide +125% additional food (2.25x the normal value)
    {
      "type": "tech_effectiveness",
      "scope": "farm_upgrades",
      "op": "multiply",
      "value": 2.25
    },
    // Soldiers receive -40% bonus damage from enemy attacks
    {
      "type": "stat_modifier",
      "scope": "soldier",
      "stat": "bonus_damage_reduction",
      "op": "multiply",
      "value": 0.6
    },
    // Can build Donjon in Dark Age (replaces Watch Tower-line)
    {
      "type": "building_unlock",
      "scope": "donjon",
      "age": 0
    },
    // Fortifications built +50% faster; Town Centers built +100% faster
    {
      "type": "building_work_speed",
      "scope": "fortification",
      "op": "multiply",
      "value": 1.5
    }
  ],
  "teamBonus": {
    "type": "cost_modifier",
    "scope": "ship",
    "resource": "all",
    "op": "multiply",
    "value": 0.5
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
    "galleon",
    "firegalley",
    "demoraft",
    "demoship",
    "heavydemo",
    "cannongalleon",
    "drydock",
    "shipwright",
    "hulk",
    "war_hulk",
    "masonry",
    "ballistics",
    "chemistry",
    "arrowslits",
    "murderhole",
    "siegeengineers",
    "heatedshot",
    "monk",
    "redemption",
    "sanctity",
    "fervor",
    "devotion",
    "illumination",
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
    "fireship",
    "fishing_lines",
    "gillnets",
    "medium_warships",
    "heavy_warships",
    "careening",
    "clinker_construction",
    "carvel_hull",
    "siphons",
    "donjon",
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
        "food": 700,
        "gold": 600
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 356,
      "eliteImgPic": 512
    }
  ]
};




window.SICILIANS = SICILIANS;
export default SICILIANS;

