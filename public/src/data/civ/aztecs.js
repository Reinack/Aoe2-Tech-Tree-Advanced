const AZTECS = {
  "bonuses": [
    {
      "type": "start_resources",
      "resource": "gold",
      "op": "add",
      "value": 50
    },
    {
      "type": "special"
    },
    {
      "type": "creation_speed",
      "scope": "military_unit",
      "op": "multiply",
      "value": 0.85
    },
    {
      "type": "stat_modifier",
      "scope": "monk",
      "stat": "hp",
      "op": "add",
      "value": 5
    }
  ],
  "teamBonus": {
    "type": "special"
  },
  "available": [
    "barracks",
    "archery",
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
    "eaglescout",
    "eaglewarrior",
    "archer",
    "crossbow",
    "arbalester",
    "skirmisher",
    "eliteskirm",
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
    "drydock",
    "catapult_gall",
    "ballistics",
    "chemistry",
    "guardtower",
    "arrowslits",
    "murderhole",
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
    "",
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
    "hulk",
    "war_hulk",
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
    "shipwright"
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
        "food": 450,
        "gold": 750
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 110,
      "eliteImgPic": 486
    }
  ]
};




window.AZTECS = AZTECS;
export default AZTECS;
