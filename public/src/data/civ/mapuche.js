const MAPUCHE = {
  "bonuses": [
    {
      "type": "stat_modifier",
      "scope": "villager",
      "stat": "food",
      "op": "multiply",
      "value": 1.2
    },   // Los recolectores entregan +20% más de comida
    // Settlements (Tahsili) can train Spearman-line and Skirmishers
    {
      "type": "unit_availability",
      "scope": "spearman_skirmisher",
      "building": "tahsili"
    },
    {
      "type": "stat_modifier",
      "scope": ["infantry", "skirmisher"],
      "stat": "hp",
      "op": "add",
      "value": 15
    },
    // Mounted Units generate +3 gold when defeating enemy military units
    {
      "type": "stat_modifier",
      "scope": "cavalry",
      "stat": "gold_on_kill",
      "op": "add",
      "value": 3
    },
    // Enemy Castles are revealed on the map at all times
    {
      "type": "map_reveal",
      "scope": "enemy_castle"
    },
    "house",
  ],
  "teamBonus": {
    "type": "stat_modifier",
    "scope": "spearman",
    "stat": "los",
    "op": "add",
    "value": 2
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
    "skirmisher",
    "eliteskirm",
    "bolas_rider",
    "elite_bolas_rider",
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
    "demoraft",
    "demoship",
    "shipwright",
    "hulk",
    "war_hulk",
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
    "bombardtower",
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
    "fastfireship",
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
    "incendiaries"
  ],
  "uniqueTechs": [
    {
      "age": 2,
      "cost": {
        "food": 300,
        "gold": 350
      }
    },
    {
      "age": 3,
      "cost": {
        "food": 500,
        "gold": 450
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 545,
      "eliteImgPic": 546,
      "cost": { "food": 65, "gold": 40 }
    },
    {
      "age": 2
    }
  ]
};




window.MAPUCHE = MAPUCHE;
export default MAPUCHE;

