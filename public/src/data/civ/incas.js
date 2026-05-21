const INCAS = {
  "bonuses": [
    {
      "type": "stat_modifier",
      "scope": "house",
      "stat": "pop",
      "op": "add",
      "value": 5
    },
    {
      "type": "building_cost_modifier",
      "scope": "building",
      "resource": "stone",
      "op": "multiply",
      "value": 0.85
    },
    {
      "type": "cost_modifier",
      "scope": "military_unit",
      "resource": "food",
      "op": "multiply",
      "value": 0.8
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
    "xolotl_warrior",
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
    "devotion",
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
        "food": 200,
        "gold": 300
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 600,
        "gold": 600
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

