const GOTHS = {
  "bonuses": [
    {
      "type": "special"
    },
    {
      "type": "special"
    },
    {
      "type": "cost_modifier",
      "scope": "infantry",
      "resource": "all",
      "op": "multiply",
      "value": 0.85
    },
    {
      "type": "stat_modifier",
      "scope": "infantry",
      "stat": "attack",
      "op": "add",
      "value": 3
    },
    {
      "type": "special"
    }
  ],
  "teamBonus": {
    "type": "building_work_speed",
    "scope": "building",
    "op": "multiply",
    "value": 1.2
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
    "huskarl_b",
    "archer",
    "crossbow",
    "skirmisher",
    "eliteskirm",
    "cavarcher",
    "hcavarcher",
    "scout",
    "lightcav",
    "hussar",
    "knight",
    "cavalier",
    "paladin",
    "bloodlines",
    "husbandry",
    "batteringram",
    "cappedram",
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
    "firegalley",
    "fastfireship",
    "demoraft",
    "demoship",
    "heavydemo",
    "drydock",
    "shipwright",
    "hulk",
    "war_hulk",
    "dromon",
    "masonry",
    "architecture",
    "ballistics",
    "chemistry",
    "murderhole",
    "siegeengineers",
    "heatedshot",
    "monk",
    "sanctity",
    "fervor",
    "herbalmedicine",
    "illumination",
    "theocracy",
    "faith",
    "trebuchet",
    "petard",
    "uniqueunit",
    "eliteunique",
    "uniquetech1",
    "uniquetech2",
    "conscription",
    "sappers",
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
    "watchtower",
    "palisadewall",
    "palisadegate",
    "outpost"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 450,
        "gold": 250
      }
    },
    {
      "age": 3,
      "cost": {
        "wood": 400,
        "gold": 600
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 50,
      "eliteImgPic": 478
    }
  ]
};




window.GOTHS = GOTHS;
export default GOTHS;

