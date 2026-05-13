const SICILIANS = {
  "bonuses": [
    {
      "type": "start_resources",
      "resource": "stone",
      "op": "add",
      "value": 100
    },
    {
      "type": "special"
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
    "donjon"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 300,
        "gold": 600
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 400,
        "gold": 400
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
