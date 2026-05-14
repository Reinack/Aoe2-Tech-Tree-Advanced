const TEUTONS = {
  "bonuses": [
    {
      "type": "cost_modifier",
      "scope": "farmer",
      "resource": "all",
      "op": "multiply",
      "value": 0.6
    },
    {
      "type": "special"
    },
    {
      "type": "stat_modifier",
      "scope": "unit",
      "stat": "armor_melee",
      "op": "add",
      "value": 2
    },
    {
      "type": "special"
    },
    {
      "type": "free_tech"
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
    "archer",
    "crossbow",
    "skirmisher",
    "eliteskirm",
    "handcannon",
    "cavarcher",
    "scout",
    "knight",
    "cavalier",
    "paladin",
    "bloodlines",
    "batteringram",
    "cappedram",
    "siegeram",
    "mangonel",
    "onager",
    "siegeonager",
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
    "fortifiedwall",
    "keep",
    "heatedshot",
    "monk",
    "redemption",
    "heresy",
    "sanctity",
    "fervor",
    "herbalmedicine",
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
    "heavydemo",
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
    "bombardtower"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 400,
        "gold": 350
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 600,
        "stone": 400
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 45,
      "eliteImgPic": 477
    }
  ]
};




window.TEUTONS = TEUTONS;
export default TEUTONS;

