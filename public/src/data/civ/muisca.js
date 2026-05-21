const MUISCA = {
  "bonuses": [
    // Advancing to the next Age costs -50% gold
    {
      "type": "age_advance_cost",
      "resource": "gold",
      "op": "multiply",
      "value": 0.5
    },
    // Settlements cost -25%
    {
      "type": "building_cost_modifier",
      "scope": "tahsili",
      "resource": "all",
      "op": "multiply",
      "value": 0.75
    },
    // Settlements heal nearby units within a small radius
    {
      "type": "building_effect",
      "scope": "tahsili",
      "effect": "heal_nearby_units"
    },
    // Champi Warriors and Archery Range Units +1 melee armor in Feudal Age
    {
      "type": "stat_modifier",
      "scope": ["champiwarrior", "elitechampi", "archer", "crossbow", "arbalester"],
      "stat": "armor_melee",
      "op": "add",
      "value": 1,
      "age": 1
    },
    // +1 additional melee armor in Castle Age (cumulative: +2)
    {
      "type": "stat_modifier",
      "scope": ["champiwarrior", "elitechampi", "archer", "crossbow", "arbalester"],
      "stat": "armor_melee",
      "op": "add",
      "value": 1,
      "age": 2
    },
    // +1 additional melee armor in Imperial Age (cumulative: +3)
    {
      "type": "stat_modifier",
      "scope": ["champiwarrior", "elitechampi", "archer", "crossbow", "arbalester"],
      "stat": "armor_melee",
      "op": "add",
      "value": 1,
      "age": 3
    },
    // Monks regain faith +50% faster
    {
      "type": "stat_modifier",
      "scope": "monk",
      "stat": "faith",
      "op": "multiply",
      "value": 1.5
    },
    // Caravan free
    {
      "type": "free_tech",
      "tech": "caravan"
    },
    // Guilds free
    {
      "type": "free_tech",
      "tech": "guilds"
    },
    "house",
  ],
  // Team bonus: Natural gold sources last +15% longer
  "teamBonus": {
    "type": "stat_modifier",
    "scope": "gold_source",
    "stat": "duration",
    "op": "multiply",
    "value": 1.15
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
    "temple_guard",
    "archer",
    "crossbow",
    "arbalester",
    "skirmisher",
    "eliteskirm",
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
    "drydock",
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
    "siphons",
    "incendiaries",
    "watchtower",
    "palisadewall",
    "palisadegate",
    "outpost", 
    "stonewall",
    "gate",
    "house"
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
        "wood": 450,
        "gold": 350
      }
    }
  ],
  "uniqueUnits": [
    {
      "age": 2,
      "imgPic": 543,
      "eliteImgPic": 544
    },
    {
      "age": 2
    }
  ]
};




window.MUISCA = MUISCA;
export default MUISCA;

