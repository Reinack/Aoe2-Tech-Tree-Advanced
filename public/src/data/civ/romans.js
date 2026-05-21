const ROMANS = {
  "bonuses": [
    {
      "type": "special"
    },
    {
      "type": "special"
    },
    {
      "type": "cost_modifier",
      "scope": "unit",
      "resource": "all",
      "op": "multiply",
      "value": 0.5
    },
    {
      "type": "special"
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
    "spearman",
    "pikeman",
    "halberdier",
    "squires",
    "gambesons",
    "legionary",
    "archer",
    "crossbow",
    "skirmisher",
    "eliteskirm",
    "cavarcher",
    "hcavarcher",
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
    "galleon",
    "firegalley",
    "fastfireship",
    "shipwright",
    "hulk",
    "war_hulk",
    "dromon",
    "masonry",
    "architecture",
    "ballistics",
    "chemistry",
    "guardtower",
    "murderhole",
    "siegeengineers",
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
        "wood": 400,
        "gold": 300
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 700,
        "gold": 800
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 405,
      "eliteImgPic": 521,
      "cost": { "food": 75, "gold": 85 }
    }
  ]
};




window.ROMANS = ROMANS;
export default ROMANS;

