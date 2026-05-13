const ARMENIANS = {
  "bonuses": [
    {
      "type": "cost_modifier",
      "scope": "unit",
      "resource": "all",
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
      "type": "free_tech"
    },
    {
      "type": "special"
    }
  ],
  "teamBonus": {
    "type": "stat_modifier",
    "scope": "infantry",
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
    "batteringram",
    "cappedram",
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
    "heavydemo",
    "drydock",
    "shipwright",
    "hulk",
    "war_hulk",
    "carrack",
    "dromon",
    "masonry",
    "ballistics",
    "chemistry",
    "guardtower",
    "arrowslits",
    "murderhole",
    "siegeengineers",
    "treadmillcrane",
    "fortifiedwall",
    "keep",
    "heatedshot",
    "bombardtower",
    "monk",
    "redemption",
    "atonement",
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
    "warrior_priest",
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
    "mule_cart",
    "fortified_church"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 400,
        "wood": 300
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 800,
        "gold": 500
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 407,
      "eliteImgPic": 522
    },
    {
      "age": 2
    }
  ],
  "overrides": {
    "pikeman": {
      "age": 1
    },
    "halberdier": {
      "age": 2
    },
    "longsword": {
      "age": 1
    },
    "twohanded": {
      "age": 2
    }
  }
};




window.ARMENIANS = ARMENIANS;
export default ARMENIANS;
