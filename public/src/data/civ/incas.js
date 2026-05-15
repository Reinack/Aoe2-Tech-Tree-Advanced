const INCAS = {
  "bonuses": [
    {
      "type": "special"
    },
    {
      "type": "cost_modifier",
      "scope": "unit",
      "resource": "all",
      "op": "multiply",
      "value": 0.85
    },
    {
      "type": "cost_modifier",
      "scope": "military_unit",
      "resource": "all",
      "op": "multiply",
      "value": 0.95
    },
    {
      "type": "special"
    },
    "house",
  ],
  "teamBonus": {
    "type": "free_tech"
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
    "tahsili",
    "spearman",
    "pikeman",
    "halberdier",
    "squires",
    "arson",
    "champiscout",
    "champirunner",
    "champiwarrior",
    "elitechampi",
    "archer",
    "crossbow",
    "arbalester",
    "skirmisher",
    "eliteskirm",
    "thumbring",
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
    "fastfireship",
    "demoraft",
    "demoship",
    "drydock",
    "shipwright",
    "catapult_gall",
    "masonry",
    "ballistics",
    "chemistry",
    "guardtower",
    "arrowslits",
    "murderhole",
    "treadmillcrane",
    "fortifiedwall",
    "keep",
    "heatedshot",
    "monk",
    "redemption",
    "heresy",
    "sanctity",
    "fervor",
    "herbalmedicine",
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
    "slinger",
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
    "horsecollar_t",
    "heavyplow_t",
    "croprotation_t",
    "doublebitaxe_t",
    "bowsaw_t",
    "twomansaw_t",
    "goldmining_t",
    "goldshaft_t",
    "stonemining_t",
    "stoneshaft_t",
    "carrack",
    "fireship",
    "hulk",
    "war_hulk",
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
    "gate"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 400,
        "stone": 200
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 400,
        "gold": 300
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 97,
      "eliteImgPic": 495
    }
  ]
};




window.INCAS = INCAS;
export default INCAS;

