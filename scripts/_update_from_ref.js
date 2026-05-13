'use strict';
const fs = require('fs');
const path = require('path');

// ── 1. Raw HTML from ref_data ──────────────────────────────────────────────
const RAW = {
120150:"Foot Archer civilization<br>\n<br>\n• Shepherds work +25% faster<br>\n• Town Centers cost -50% wood starting in Castle Age<br>\n• Foot Archers +1/+2 range in Castle/Imperial Age <br>\n<br>\n<b>Unique Unit:</b> <br>\nLongbowman (Foot Archer)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Yeomen (Foot Archers and Skirmisher-line +1 range; Watch Tower-line +2 attack)<br>\n• Warwolf (Trebuchets deal blast damage and are more accurate)<br>\n<br>\n<b>Team Bonus:</b> <br>\nArchery Ranges work +10% faster",
120151:"Cavalry civilization<br>\n<br>\n• Foragers work +15% faster<br>\n• Mill technologies free<br>\n• Mounted Units +20% HP starting in Feudal Age<br>\n• Castles cost -15/25% in Castle/Imperial Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nThrowing Axeman (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Bearded Axe (Throwing Axemen +2 range)<br>\n• Chivalry (Stables work +40% faster)<br>\n<br>\n<b>Team Bonus:</b> <br>\nKnight-line +2 line of sight",
120152:"Infantry civilization<br>\n<br>\n• Loom is researched instantly<br>\n• Hunters carry +15; hunted animals last +20% longer<br>\n• Infantry costs -15/20/25/30% in Dark/Feudal/Castle/Imperial Age<br>\n• Infantry +1/+2/+3 attack vs. buildings in Feudal/Castle/Imperial Age<br>\n• +10 population space in Imperial Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nHuskarl (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Anarchy (Huskarls can be trained at Barracks)<br>\n• Perfusion (Barracks work +100% faster)<br>\n<br>\n<b>Team Bonus:</b> <br>\nBarracks work +20% faster",
120153:"Infantry and Defensive civilization<br>\n<br>\n• Farms cost -40%<br>\n• Town Centers +10 garrison capacity; Towers +5 garrison capacity<br>\n• Barracks and Stable Units +1/+2 melee armor in Castle/Imperial Age<br>\n• Monks +100% healing range<br>\n• Murder Holes, Herbal Medicine free<br>\n<br>\n<b>Unique Unit:</b> <br>\nTeutonic Knight (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Ironclad (Siege Weapons +4 melee armor)<br>\n• Crenellations (Castles +3 range, garrisoned Infantry fires arrows)<br>\n<br>\n<b>Team Bonus:</b> <br>\nUnits more resistant to conversion",
120154:"Infantry civilization<br>\n<br>\n• Mills, Lumber- and Mining Camps cost -50%<br>\n• Infantry attacks +33% faster starting in Feudal Age<br>\n• Cavalry Archers +2 attack vs. Ranged Soldiers (except Skirmishers)<br>\n• Fishing Ships work +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age; +100% HP<br>\n<br>\n<b>Unique Unit:</b> <br>\nSamurai (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Yasama (Watch Tower-line fires additional arrows)<br>\n• Kataparuto (Trebuchets attack and pack/unpack faster)<br>\n<br>\n<b>Team Bonus:</b> <br>\nGalley-line +4 line of sight",
120155:"Archer and Gunpowder civilization<br>\n<br>\n• Start with +3 Villagers, but -50 wood and -200 food<br>\n• Technologies cost -5/10/15% in Feudal/Castle/Imperial Age<br>\n• Town Centers +7 line of sight and provide +15 population space<br>\n• Fire Lancers and Fire Ships move +5/10% faster in Castle/Imperial Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nChu Ko Nu (Foot Archer), Dragon Ship (Warship)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Great Wall (Walls, Watch Tower-line and Bombard Towers +30% HP)<br>\n• Rocketry (Scorpions, Rocket Carts and Lou Chuans +25% attack; Lou Chuans fire rockets)<br>\n<br>\n<b>Team Bonus:</b> <br>\nFarms +10% food",
120156:"Defensive civilization<br>\n<br>\n• Buildings +10/20/30/40% HP in Dark/Feudal/Castle/Imperial Age<br>\n• Camel Riders, Skirmishers and Spearman-line cost -25%<br>\n• Town Watch, Town Patrol free<br>\n• Advancing to Imperial Age costs -33%<br>\n• Fire Ships and Dromons attack +25% faster<br>\n<br>\n<b>Unique Unit:</b> <br>\nCataphract (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Greek Fire (Fire Ships +1 range; Dromons and Bombard Towers increased blast radius)<br>\n• Logistica (Cataphracts deal trample damage, +6 attack vs. Infantry)<br>\n<br>\n<b>Team Bonus:</b> <br>\nMonks heal +100% faster",
120157:"Cavalry civilization<br>\n<br>\n• Start with +50 wood and +50 food<br>\n• Town Centers and Docks +100% HP and work +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age<br>\n• Parthian Tactics available in Castle Age<br>\n• Can build Caravanserai in Imperial Age<br>\n<br>\n<b>Unique Units:</b> <br>\nWar Elephant (Cavalry), Savar (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Kamandaran (Archer-line gold cost replaced by additional wood cost)<br>\n• Citadels (Castles +4 attack, +3 vs. Rams, +3 vs. Infantry and receive -25% bonus damage)<br>\n<br>\n<b>Team Bonus:</b> <br>\nKnight-line +2 attack vs. Ranged Soldiers",
120158:"Camel and Naval civilization<br>\n<br>\n• Market trading fee only 5%; Markets cost -100 wood<br>\n• Camel Units +25% HP<br>\n• Galley-line attacks +25% faster<br>\n• Transport Ships +100% HP, +20 carry capacity<br>\n<br>\n<b>Unique Unit:</b> <br>\nMameluke (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Bimaristan (Monks passively heal multiple nearby units)<br>\n• Counterweights (Trebuchets and Mangonel-line +15% attack)<br>\n<br>\n<b>Team Bonus:</b> <br>\nFoot Archers and Skirmishers +2 attack vs. buildings",
120159:"Gunpowder civilization<br>\n<br>\n• Gold miners work +25% faster<br>\n• Scout Cavalry-line +1 pierce armor and upgrades free<br>\n• Chemistry free; Gunpowder technologies costs -50%<br>\n• Gunpowder Units +25% HP<br>\n<br>\n<b>Unique Unit:</b> <br>\nJanissary (Foot Gunner)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Sipahi (Mounted Archers +20 HP)<br>\n• Artillery (Bombard Towers, Bombard Cannons, Cannon Galleons +2 range)<br>\n<br>\n<b>Team Bonus:</b> <br>\nGunpowder Units train +25% faster",
120160:"Infantry and Naval civilization<br>\n<br>\n• Wheelbarrow, Hand Cart free<br>\n• Infantry +20% HP starting in Feudal Age<br>\n• Warships cost -10/15/20% in Feudal/Castle/Imperial Age<br>\n<br>\n<b>Unique Units:</b> <br>\nBerserk (Infantry), Longboat (Warship)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Chieftains (Infantry +5 attack vs. Cavalry, +4 vs. Camel Units; generate +5 gold when defeating Villagers, Trade Units and Monks)<br>\n• Bogsveigar (Archer-line and Longboats +1 attack)<br>\n<br>\n<b>Team Bonus:</b> <br>\nDocks cost -15%",
120161:"Cavalry Archer civilization<br>\n<br>\n• Hunters work +40% faster<br>\n• Cavalry Archers attack +25% faster<br>\n• Scout Cavalry-line and Steppe Lancers +20/30% HP in Castle/Imperial Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nMangudai (Mounted Archer)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Nomads (Lost Houses do not decrease population space)<br>\n• Drill (Siege Workshop Units move +50% faster)<br>\n<br>\n<b>Team Bonus:</b> <br>\nScout Cavalry-line +2 line of sight",
120162:"Infantry and Siege civilization<br>\n<br>\n• Lumberjacks work +15% faster<br>\n• Livestock animals within Celt unit line of sight cannot be stolen<br>\n• Infantry moves +5/10/15/20% faster in Dark/Feudal/Castle/Imperial Age<br>\n• Siege Weapons attack +25% faster<br>\n<br>\n<b>Unique Unit:</b> <br>\nWoad Raider (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Stronghold (Castles and Watch Tower-line attack +33% faster; Castles heal allied Infantry in a 7 tile radius)<br>\n• Furor Celtica (Siege Weapons +40% HP)<br>\n<br>\n<b>Team Bonus:</b> <br>\nSiege Workshops work +20% faster",
120163:"Gunpowder and Monk civilization<br>\n<br>\n• Builders work +30% faster<br>\n• Receive +20 gold for each technology researched<br>\n• Blacksmith upgrades cost no gold<br>\n• Gunpowder Units attack +18% faster<br>\n• Cannon Galleons fire more accurately at moving targets<br>\n<br>\n<b>Unique Units:</b> <br>\nConquistador (Mounted Gunner), Missionary (Mounted Monk)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Inquisition (Monks and Missionaries convert faster; Missionaries +1 range)<br>\n• Supremacy (Villagers +40 HP, +6 attack, +2 melee/+2 pierce armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nTrade Units generate +25% gold",
120164:"Infantry and Monk civilization<br>\n<br>\n• Start with +50 gold<br>\n• Villagers carry +3<br>\n• Military Units train +15% faster<br>\n• Monks gain +5 HP for each researched Monastery technology<br>\n<br>\n<b>Unique Unit:</b> <br>\nJaguar Warrior (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Atlatl (Skirmishers +1 attack, +1 range)<br>\n• Garland Wars (Infantry +4 attack)<br>\n<br>\n<b>Team Bonus:</b> <br>\nRelics generate +33% gold",
120165:"Archer civilization<br>\n<br>\n• Start with +1 Villager, but -50 food<br>\n• Resources last +15% longer<br>\n• Foot Archers cost -10/20/30% in Feudal/Castle/Imperial Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nPlumed Archer (Foot Archer)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Hul'che Javelineers (Skirmishers fire an additional projectile)<br>\n• Holcans (Eagle Warriors +40 HP)<br>\n<br>\n<b>Team Bonus:</b> <br>\nWalls cost -50%",
120166:"Cavalry civilization<br>\n<br>\n• Do not need houses, but start with -100 wood<br>\n• Cavalry Archers cost -10/20% in Castle/Imperial Age<br>\n• Trebuchets fire more accurately at units and small targets<br>\n• On Nomadic maps, the first Town Center spawns a scouting Horse<br>\n<br>\n<b>Unique Unit:</b> <br>\nTarkan (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Marauders (Tarkans can be trained at Stables)<br>\n• Atheism (Enemy Relics generate -50% resources; Wonder and Relic victory takes +100 years)<br>\n<br>\n<b>Team Bonus:</b> <br>\nStables work +20% faster",
120167:"Defensive and Naval civilization<br>\n<br>\n• Stone miners work +20% faster<br>\n• Ranged Soldiers and Infantry cost -50% wood<br>\n• Archer armor and tower upgrades free (Bombard Tower requires Chemistry)<br>\n• Warships cost -20% wood<br>\n<br>\n<b>Unique Units:</b> <br>\nWar Wagon (Mounted Archer), Turtle Ship (Warship)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Eupseong (Watch Tower-line +2 range)<br>\n• Shinkichon (Rocket Carts and Turtle Ships +1 range, fire additional projectiles)<br>\n<br>\n<b>Team Bonus:</b> <br>\nVillagers +3 line of sight",
120168:"Archer and Naval civilization<br>\n<br>\n• Advancing to the next Age costs -15%<br>\n• Foot Archers and Condottieri +1 melee/+1 pierce armor<br>\n• Dock and University technologies cost -25%<br>\n• Gunpowder Units cost -20%<br>\n• Fishing Ships cost -15%<br>\n<br>\n<b>Unique Units:</b> <br>\nGenoese Crossbowman (Foot Archer), Condottiero (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Silk Road (Trade Units cost -50%)<br>\n• Pirotechnia (Hand Cannoneers deal +15% pass through damage and are more accurate)<br>\n<br>\n<b>Team Bonus:</b> <br>\nCondottiero available at the Barracks in Imperial Age",
120169:"Camel and Gunpowder civilization<br>\n<br>\n• Villagers cost -8/13/18/23% in Dark/Feudal/Castle/Imperial Age<br>\n• Camel Riders attack +20% faster<br>\n• Gunpowder Units +1 melee/+1 pierce armor<br>\n• Can build Caravanserai in Imperial Age<br>\n<br>\n<b>Unique Units:</b> <br>\nGhulam (Infantry), Imperial Camel Rider (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Grand Trunk Road (All gold income +10% faster; Market trading fee reduced to 10%)<br>\n• Shatagni (Hand Cannoneers +2 range)<br>\n<br>\n<b>Team Bonus:</b> <br>\nScout Cavalry-line and Camel Units +2 attack vs. buildings",
120170:"Infantry civilization<br>\n<br>\n• Houses and Settlements provide +5 population space<br>\n• Buildings cost -15% stone<br>\n• Military Units cost -5/10/15/20% food in Dark/Feudal/Castle/Imperial Age<br>\n• Villagers affected by Infantry Blacksmith upgrades starting in Castle Age<br>\n<br>\n<b>Unique Units:</b> <br>\nKamayuk (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Andean Sling (Skirmishers and Slingers no minimum range; Slingers +1 attack)<br>\n• Fabric Shields (Kamayuks, Slingers and Champi Warriors +1 melee/+1 pierce armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nStart with a free Llama",
120171:"Cavalry civilization<br>\n<br>\n• Villagers defeat wolves with one strike<br>\n• Scout Cavalry-line costs -15%<br>\n• Melee attack upgrades free<br>\n<br>\n<b>Unique Unit:</b> <br>\nMagyar Huszar (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Corvinian Army (Magyar Huszar gold cost is replaced by additional food cost)<br>\n• Recurve Bow (Mounted Archers +1 attack, +1 range)<br>\n<br>\n<b>Team Bonus:</b> <br>\nMounted Archers train +25% faster",
120172:"Infantry and Siege civilization<br>\n<br>\n• Farmers work +15% faster<br>\n• Arson, Gambesons free<br>\n• Siege Workshop Units cost -15%<br>\n• Monks move +20% faster<br>\n<br>\n<b>Unique Unit:</b> <br>\nBoyar (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Detinets (Replaces 40% of Castle and Watch Tower-line stone cost with additional wood cost)<br>\n• Druzhina (Infantry deals trample damage)<br>\n<br>\n<b>Team Bonus:</b> <br>\nMilitary buildings (except Castles) provide +5 population space",
120173:"Naval and Gunpowder civilization<br>\n<br>\n• Foragers generate wood in addition to food<br>\n• All units cost -20% gold<br>\n• Can build Feitoria in Imperial Age<br>\n• Ships +10/15/20% HP in Feudal/Castle/Imperial Age<br>\n<br>\n<b>Unique Units:</b> <br>\nOrgan Gun (Siege Gunpowder Unit), Caravel (Warship)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Circumnavigation (Sets the entire map to explored; Ships train +33% faster)<br>\n• Arquebus (Gunpowder Units fire more accurately at moving targets)<br>\n<br>\n<b>Team Bonus:</b> <br>\nTechnologies research +25% faster",
120174:"Archer civilization<br>\n<br>\n• Receive +100 gold and +100 food when advancing to the next Age<br>\n• Foot Archers attack +18% faster<br>\n• Pikeman upgrade free<br>\n<br>\n<b>Unique Unit:</b> <br>\nShotel Warrior (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Royal Heirs (Shotel Warriors and Camel Riders receive -3 damage from Mounted Units)<br>\n• Torsion Engines (Siege Workshop Units' blast radius increased)<br>\n<br>\n<b>Team Bonus:</b> <br>\nOutposts +3 line of sight and cost no stone",
120175:"Infantry civilization<br>\n<br>\n• Buildings cost -15% wood<br>\n• Villagers drop off +10% more gold<br>\n• Barracks Units +1/+2/+3 pierce armor in Feudal/Castle/Imperial Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nGbeto (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Tigui (Town Centers fire arrows without garrison)<br>\n• Farimba (Cavalry +5 attack)<br>\n<br>\n<b>Team Bonus:</b> <br>\nUniversities work +80% faster",
120176:"Cavalry and Naval civilization<br>\n<br>\n• Villagers move +5% faster in Dark Age, +10% faster starting in Feudal Age<br>\n• Stable Units cost -15/20% in Castle/Imperial Age<br>\n• Ships move +10% faster<br>\n<br>\n<b>Unique Units:</b> <br>\nCamel Archer (Mounted Archer), Genitour (Mounted Skirmisher)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Kasbah (Team Castles work +25% faster)<br>\n• Maghrebi Camels (Camel Units regenerate 15 HP per minute)<br>\n<br>\n<b>Team Bonus:</b> <br>\nGenitour available at the Archery Range starting in Castle Age",
120177:"Siege and Elephant civilization<br>\n<br>\n• No buildings required to advance to the next Age or to unlock other buildings<br>\n• Farmers don't require Mills or Town Centers to drop off food<br>\n• Villagers can garrison in Houses<br>\n• Battle Elephants move +10% faster<br>\n<br>\n<b>Unique Unit:</b> <br>\nBallista Elephant (Siege Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Tusk Swords (Battle Elephants +3 attack)<br>\n• Double Crossbow (Ballista Elephants and Scorpions fire an additional projectile)<br>\n<br>\n<b>Team Bonus:</b> <br>\nScorpions +1 range",
120178:"Naval civilization<br>\n<br>\n• Advancing to the next Age is +66% faster<br>\n• Infantry armor upgrades free<br>\n• Battle Elephants cost -25/35% in Castle/Imperial Age<br>\n• Fish Traps cost -33% and provide +200% food<br>\n<br>\n<b>Unique Unit:</b> <br>\nKarambit Warrior (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Thalassocracy (Docks are upgraded to Harbors)<br>\n• Forced Levy (Militia-line gold cost is replaced by additional food cost)<br>\n<br>\n<b>Team Bonus:</b> <br>\nDocks +6 line of sight",
120179:"Infantry and Cavalry civilization<br>\n<br>\n• Lumber Camp technologies free<br>\n• Infantry +1/+2/+3 attack in Feudal/Castle/Imperial Age<br>\n• Battle Elephants +1 melee/+1 pierce armor<br>\n• Monastery technologies cost -50%<br>\n<br>\n<b>Unique Unit:</b> <br>\nArambai (Ranged Mounted Unit)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Manipur Cavalry (Cavalry +4 attack vs. Ranged Soldiers)<br>\n• Howdah (Battle Elephants +1 melee/+1 pierce armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nRelics visible on the map at the start of the game",
120180:"Archer civilization<br>\n<br>\n• Enemy Town Centers are revealed at the start of the game<br>\n• Economic upgrades cost no wood and research +100% faster<br>\n• Archery Range units and Fire Lancers +20% HP<br>\n• Conscription free<br>\n<br>\n<b>Unique Units:</b> <br>\nRattan Archer (Foot Archer), Imperial Skirmisher (Skirmisher)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Chatras (Battle Elephants +100 HP)<br>\n• Paper Money (Lumberjacks slowly generate gold in addition to wood)<br>\n<br>\n<b>Team Bonus:</b> <br>\nImperial Skirmisher upgrade available in Imperial Age",
120181:"Infantry and Cavalry civilization<br>\n<br>\n• Militia-line upgrades free<br>\n• Blacksmith and Siege Workshop technologies cost -50% food<br>\n• Town Centers cost -50% stone<br>\n• Can build Krepost in Castle Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nKonnik (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Stirrups (Cavalry attacks +33% faster)<br>\n• Bagains (Militia-line +5 melee armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nBlacksmiths work +80% faster",
120182:"Cavalry Archer civilization<br>\n<br>\n• Livestock animals last +50% longer<br>\n• Units deal +25% damage when fighting from higher elevation<br>\n• New Town Centers spawn 2 Sheep starting in Castle Age<br>\n• Thumb Ring, Parthian Tactics free<br>\n<br>\n<b>Unique Units:</b> <br>\nKeshik (Cavalry), Flaming Camel (Siege Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Silk Armor (Scout Cavalry-line, Steppe Lancers and Cavalry Archers +1 melee/+1 pierce armor)<br>\n• Timurid Siegecraft (Trebuchets +2 range)<br>\n<br>\n<b>Team Bonus:</b> <br>\nMounted Archers +2 line of sight",
120183:"Cavalry civilization<br>\n<br>\n• One additional Town Center can be built in Feudal Age<br>\n• Mounted Units move +5/10/15% faster in Feudal/Castle/Imperial Age<br>\n• Archery Ranges and Stables cost -75 wood<br>\n• Siege Workshop and Battering Ram available in Feudal Age; Capped Ram available in Castle Age<br>\n<br>\n<b>Unique Unit:</b> <br>\nKipchak (Mounted Archer)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Steppe Husbandry (Scout Cavalry-line, Steppe Lancers and Cavalry Archers train +100% faster)<br>\n• Cuman Mercenaries (All team members can train 5 free Elite Kipchaks per Castle)<br>\n<br>\n<b>Team Bonus:</b> <br>\nPalisade Walls +33% HP",
120184:"Cavalry and Monk civilization<br>\n<br>\n• Each Town Center provides +100 food<br>\n• Spearman-line and Skirmisher-line move +10% faster<br>\n• Each garrisoned Relic provides +1 attack to Knight-line and Leitis (maximum +4)<br>\n<br>\n<b>Unique Units:</b> <br>\nLeitis (Cavalry), Winged Hussar (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Hill Forts (Town Centers +3 range)<br>\n• Tower Shields (Spearman-line and Skirmishers +2 pierce armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nMonasteries work +20% faster",
120185:"Cavalry civilization<br>\n<br>\n• Economic upgrades available one age earlier and cost -33% food<br>\n• Stable technologies cost -50%<br>\n• Cavalier upgrade available in Castle Age<br>\n• Gunpowder Units +25% attack<br>\n<br>\n<b>Unique Units:</b> <br>\nCoustillier (Cavalry), Flemish Militia (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Burgundian Vineyards (Farmers slowly generate gold in addition to food)<br>\n• Flemish Revolution (All existing Villagers are transformed to Flemish Militia)<br>\n<br>\n<b>Team Bonus:</b> <br>\nRelics generate food in addition to gold",
120186:"Infantry and Cavalry civilization<br>\n<br>\n• Start with +100 stone<br>\n• Farm upgrades provide +125% additional food<br>\n• Soldiers receive -40% bonus damage<br>\n• Can build Donjon in Dark Age, replaces Watch Tower-line<br>\n• Fortifications built +50% faster; Town Centers built +100% faster<br>\n<br>\n<b>Unique Unit:</b> <br>\nSerjeant (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• First Crusade (Up to 5 Town Centers spawn 5 Serjeants each; units more resistant to conversion)<br>\n• Hauberk (Knight-line +1 melee/+2 pierce armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nTransport Ships +5 line of sight and cost -50%",
120187:"Cavalry civilization<br>\n<br>\n• Folwark replaces Mill<br>\n• Villagers regenerate 10/15/20 HP in Feudal/Castle/Imperial Age<br>\n• Stone Miners generate gold in addition to stone<br>\n• Bloodlines and Scout Cavalry-line upgrades cost -50% food<br>\n<br>\n<b>Unique Units:</b> <br>\nObuch (Infantry), Winged Hussar (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Szlachta Privileges (Knight-line costs -60% gold)<br>\n• Lechitic Legacy (Scout Cavalry-line deals trample damage)<br>\n<br>\n<b>Team Bonus:</b> <br>\nScout Cavalry-line +1 attack vs. Ranged Soldiers",
120188:"Gunpowder and Monk civilization<br>\n<br>\n• Mining Camp technologies free<br>\n• Blacksmiths and Universities cost -100 wood<br>\n• Spearman-line deals +25% bonus damage<br>\n• Fervor and Sanctity affect Villagers<br>\n• Chemistry and Hand Cannoneer available in Castle Age<br>\n<br>\n<b>Unique Units:</b> <br>\nHussite Wagon (Siege Gunpowder Unit), Houfnice (Siege Gunpowder Unit)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Wagenburg Tactics (Gunpowder Units move +15% faster)<br>\n• Hussite Reforms (Monks and Monastery technologies gold cost is replaced by food cost)<br>\n<br>\n<b>Team Bonus:</b> <br>\nMarkets work +80% faster",
120189:"Infantry and Naval civilization<br>\n<br>\n• Fishermen and Fishing Ships carry +15<br>\n• Receive +200 wood when advancing to the next Age<br>\n• Skirmishers and Elephant Archers attack +25% faster<br>\n• Barracks technologies cost -50%<br>\n• Siege Weapons cost -33% wood<br>\n<br>\n<b>Unique Units:</b> <br>\nUrumi Swordsman (Infantry), Thirisadai (Warship)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Medical Corps (Elephant Units regenerate 30 HP per minute)<br>\n• Wootz Steel (Infantry and Cavalry attacks ignore armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nDocks provide +5 population space",
120190:"Elephant and Naval civilization<br>\n<br>\n• Town Centers spawn 2 Villagers when the next Age is reached<br>\n• Cavalry +2 attack vs. Skirmishers<br>\n• Elephant Units receive -25% bonus damage and are more resistant to conversion<br>\n• Monks +3 melee/+3 pierce armor<br>\n• Ships regenerate 15 HP per minute<br>\n<br>\n<b>Unique Unit:</b> <br>\nRatha (Mounted Archer)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Paiks (Rathas and Elephant Units attack +20% faster)<br>\n• Mahayana (Villagers and Monks take -10% population space)<br>\n<br>\n<b>Team Bonus:</b> <br>\nTrade Units generate +10% food in addition to gold",
120191:"Cavalry and Camel civilization<br>\n<br>\n• Start with 2 Forage Bushes<br>\n• Can garrison livestock in Mills to passively produce food<br>\n• Mounted Units deal +20/30/40% bonus damage in Feudal/Castle/Imperial Age<br>\n• Docks +5 garrison capacity<br>\n<br>\n<b>Unique Units:</b> <br>\nChakram Thrower (Infantry), Shrivamsha Rider (Cavalry), Camel Scout (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Kshatriyas (Military Units cost -25% food)<br>\n• Frontier Guards (Camel Riders and Elephant Archers +4 melee armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nCamel and Elephant Units train +25% faster",
120192:"Infantry and Cavalry civilization<br>\n<br>\n• Villagers gather, build, and repair +5% faster<br>\n• Infantry armor upgrade effects are doubled<br>\n• Scorpions cost -50% gold<br>\n• Galley-line and Dromons +1 melee/+1 pierce armor<br>\n<br>\n<b>Unique Unit:</b> <br>\nCenturion (Cavalry), Legionary (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Ballistas (Scorpions attack +33% faster; Galley-line +2 attack)<br>\n• Comitatenses (Militia-line, Knight-line, and Centurions train +50% faster and receive a charge attack)<br>\n<br>\n<b>Team Bonus:</b> <br>\nScorpions minimum range reduced",
120193:"Infantry and Naval civilization<br>\n<br>\n• Mule Carts cost -25%<br>\n• Mule Cart technologies are +40% more effective<br>\n• Spearman- and Militia-line upgrades (except Man-at-Arms) available one age earlier<br>\n• First Fortified Church receives a free Relic<br>\n• Galley-line and Dromons fire an additional projectile<br>\n<br>\n<b>Unique Unit:</b> <br>\nComposite Bowman (Foot Archer), Warrior Priest (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Cilician Fleet (Demolition Ships +20% blast radius; Galley-line and Dromons +1 range)<br>\n• Fereters (Infantry (except Spearman-line) +30 HP; Warrior Priests heal +100% faster)<br>\n<br>\n<b>Team Bonus:</b> <br>\nInfantry +2 line of sight",
120194:"Defensive and Cavalry civilization<br>\n<br>\n• Start with a Mule Cart<br>\n• Units and buildings receive -15% damage when located on higher elevation<br>\n• Mounted Units regenerate 2/8/14 HP per minute in Feudal/Castle/Imperial Age<br>\n• Fortified Churches provide Villagers in a 9 tiles radius with +10% work rate<br>\n<br>\n<b>Unique Unit:</b> <br>\nMonaspa (Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Svan Towers (Fortifications +2 attack; Watch Tower-line deals pass through damage)<br>\n• Aznauri Cavalry (Mounted Units take -20% population space)<br>\n<br>\n<b>Team Bonus:</b> <br>\nBuilding repairs cost -25%",
120198:"Archer and Siege civilization<br>\n<br>\n• Lumberjacks generate food in addition to wood<br>\n• Archery Unit technologies at the Archery Range and Blacksmith cost -25%<br>\n• Siege Weapons and Siege Warships move +10/15% faster in Castle/Imperial Age<br>\n<br>\n<b>Unique Units:</b> <br>\nWhite Feather Guard (Infantry), War Chariot (Siege Weapon), Liu Bei (Hero)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Coiled Serpent Array (Spearman-line and White Feather Guards gain additional HP when near each other)<br>\n• Bolt Magazine (Archer-line, War Chariots and Lou Chuans fire additional projectiles)<br>\n<br>\n<b>Team Bonus:</b> <br>\nFoot Archers +2 line of sight",
120199:"Infantry and Naval civilization<br>\n<br>\n• Military production buildings and Docks provide +55 food<br>\n• Infantry regenerates 10/15/30 HP per minute in Feudal/Castle/Imperial Age<br>\n• Jian Swordsmen and Hei Guang Cavalry +2 attack in Imperial Age<br>\n• Careening, Dry Dock free<br>\n<br>\n<b>Unique Units:</b> <br>\nFire Archer (Foot Archer), Jian Swordsman (Infantry), Sun Jian (Hero)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Red Cliffs Tactics (Demolition Ships and Fire Archers deal fire damage to ships and buildings)<br>\n• Sitting Tiger (Traction Trebuchets and Lou Chuan trebuchet weapons fire additional projectiles)<br>\n<br>\n<b>Team Bonus:</b> <br>\nHouses built +100% faster",
120200:"Cavalry civilization<br>\n<br>\n• Receive one free Villager for each economic upgrade researched<br>\n• Hei Guang Cavalry and Xianbei Raider +20/30% HP in Castle/Imperial Age<br>\n• Traction Trebuchets and Lou Chuans cost -25%<br>\n<br>\n<b>Unique Units:</b> <br>\nTiger Cavalry (Cavalry), Xianbei Raider (Mounted Archer), Cao Cao (Hero)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Tuntian (Soldiers passively produce food)<br>\n• Ming Guang Armor (Mounted Units +4 melee armor)<br>\n<br>\n<b>Team Bonus:</b> <br>\nCavalry +2 attack vs. Siege Weapons",
120201:"Cavalry and Gunpowder civilization<br>\n<br>\n• Meat of hunted and livestock animals doesn't decay<br>\n• Mounted Units and Fire Lancers attack +25% faster starting in Feudal Age<br>\n• Siege Engineers available in Castle Age<br>\n• Siege and Fortification upgrades cost -75% wood and research +100% faster<br>\n• Units receive -50% friendly fire damage<br>\n<br>\n<b>Unique Units:</b> <br>\nIron Pagoda (Cavalry), Grenadier (Gunpowder Unit)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Fortified Bastions (Fortifications regenerate 500 HP per minute)<br>\n• Thunderclap Bombs (Rocket Carts, Grenadiers and Lou Chuans detonate when defeated; projectiles produce additional explosions)<br>\n<br>\n<b>Team Bonus:</b> <br>\nGunpowder Units +2 line of sight",
120202:"Infantry and Cavalry civilization<br>\n<br>\n• Pastures replace Farms<br>\n• Melee attack upgrade effects are doubled<br>\n• Skirmishers, Spearman-, and Scout Cavalry-line train and upgrade +15% faster<br>\n• Heavy Cavalry Archer upgrade available in Castle Age and costs -50%<br>\n<br>\n<b>Unique Units:</b> <br>\nLiao Dao (Infantry), Mounted Trebuchet (Siege Cavalry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Lamellar Armor (Infantry and Skirmishers reflect 25% melee damage back to the attacker)<br>\n• Ordo Cavalry (Cavalry regenerates HP in combat)<br>\n<br>\n<b>Team Bonus:</b> <br>\nInfantry +2 attack vs. Ranged Soldiers",
120206:"Archer and Monk civilization<br>\n<br>\n• Advancing to the next Age costs -50% gold<br>\n• Settlements cost -25% and heal nearby units<br>\n• Champi Warriors and Archery Range Units +1/2/3 melee armor in Feudal/Castle/Imperial Age<br>\n• Monks regain faith +50% faster<br>\n• Caravan, Guilds free<br>\n<br>\n<b>Unique Units:</b> <br>\nGuecha Warrior (Skirmisher), Temple Guard (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Herbalism (Archer-line and Champi Warriors move +15% faster)<br>\n• Huaracas (Slingers +1 range; train +25% faster)<br>\n<br>\n<b>Team Bonus:</b> <br>\nNatural gold sources last +15% longer",
120207:"Cavalry and Counter-Units civilization<br>\n<br>\n• Foragers drop off +20% food<br>\n• Settlements can train Spearman-line and Skirmishers<br>\n• Infantry, Slingers and Skirmishers +5/10/15 HP in Feudal/Castle/Imperial Age<br>\n• Mounted Units generate +3 gold when defeating military units<br>\n• Enemy Castles are revealed on the map<br>\n<br>\n<b>Unique Units:</b> <br>\nKona (Cavalry), Bolas Rider (Mounted Archer)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Malon (Bolas Riders, Slingers and Skirmishers deal pass through damage)<br>\n• Butalmapu (Team Castle Unique Units and Bolas Riders cost -15%)<br>\n<br>\n<b>Team Bonus:</b> <br>\nSpearman-line and Skirmishers +2 line of sight",
120208:"Archer and Infantry civilization<br>\n<br>\n• Start with +25 of each resource<br>\n• Villagers can garrison in Settlements<br>\n• Fallen units return 15% of their cost<br>\n• Archery Range and Barracks upgrades cost -50% food<br>\n<br>\n<b>Unique Units:</b> <br>\nBlackwood Archer (Foot Archer), Ibirapema Warrior (Infantry)<br>\n<br>\n<b>Unique Techs:</b> <br>\n• Caciques (Champi Warriors and Slingers attack +25% faster)<br>\n• Curare (Foot Archers and Fortifications deal poison damage)<br>\n<br>\n<b>Team Bonus:</b> <br>\nTowers and Castles provide +10 population space",
};

// ── 2. ID → civs.js key ────────────────────────────────────────────────────
const ID_TO_KEY = {
  120150:'britons',120151:'franks',120152:'goths',120153:'teutons',120154:'japanese',
  120155:'chinese',120156:'byzantines',120157:'persians',120158:'saracens',120159:'turks',
  120160:'vikings',120161:'mongols',120162:'celts',120163:'spanish',120164:'aztecs',
  120165:'mayans',120166:'huns',120167:'koreans',120168:'italians',120169:'hindustanis',
  120170:'incas',120171:'magyars',120172:'slavs',120173:'portuguese',120174:'ethiopians',
  120175:'malians',120176:'berbers',120177:'khmer',120178:'malay',120179:'burmese',
  120180:'vietnamese',120181:'bulgarians',120182:'tatars',120183:'cumans',120184:'lithuanians',
  120185:'burgundians',120186:'sicilians',120187:'poles',120188:'bohemians',120189:'dravidians',
  120190:'bengalis',120191:'gurjaras',120192:'romans',120193:'armenians',120194:'georgians',
  120198:'shu',120199:'wu',120200:'wei',120201:'jurchens',120202:'khitans',
  120206:'muisca',120207:'mapuche',120208:'tupi',
};

// ── 3. Parse HTML → {civType, bullets, teamBonus} ─────────────────────────
function parseHTML(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<b>|<\/b>/gi, '')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    .replace(/<[^>]+>/g,'')
    .replace(/\r/g,'');
}

function parseCiv(html) {
  const text = parseHTML(html);
  const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
  const civType = lines[0];
  const bullets = [];
  let teamBonus = '';
  let section = 'bonus';
  for (let i=1;i<lines.length;i++) {
    const l = lines[i];
    if (/^Unique (Unit|Units|Tech|Techs)/i.test(l)) { section='skip'; continue; }
    if (/^Team Bonus/i.test(l)) { section='team'; continue; }
    if (section==='bonus' && l.startsWith('•')) bullets.push(l.replace(/^[•·]\s*/,''));
    else if (section==='team' && l) { teamBonus=l; section='done'; }
  }
  return { civType, bullets, teamBonus };
}

// ── 4. Bonus text → structured object ────────────────────────────────────
// Scope keyword map (English → scope value)
const SCOPE_MAP = [
  [/foot archer/i,'foot_archer'],[/cavalry archer|mounted archer/i,'cavalry_archer'],
  [/skirmisher.line|skirmisher/i,'skirmisher'],[/spearman.line/i,'spear_infantry'],
  [/militia.line/i,'sword_infantry'],[/scout cavalry.line/i,'light_cavalry'],
  [/knight.line/i,'knight'],[/camel unit/i,'camel'],[/camel rider/i,'camel'],
  [/mounted unit/i,'cavalry'],[/cavalry/i,'cavalry'],[/infantry/i,'infantry'],
  [/villager/i,'villager'],[/monk/i,'monk'],[/ship|warship|galley|dock/i,'ship'],
  [/siege weapon|siege workshop/i,'siege'],[/gunpowder unit/i,'gunpowder'],
  [/trade unit/i,'trade_unit'],[/military unit/i,'military_unit'],
  [/archer.line|archer/i,'archer'],[/builder/i,'villager'],
  [/farmer|farm/i,'farmer'],[/lumberjack/i,'lumberjack'],
  [/miner|mining/i,'miner'],[/hunter/i,'hunter'],
  [/forager/i,'forager'],[/shepherd/i,'shepherd'],
  [/fishing ship/i,'fishing_ship'],[/relic/i,'relic'],
];

function detectScope(text) {
  for (const [re,val] of SCOPE_MAP) if (re.test(text)) return val;
  return null;
}

function parsePct(text) {
  const m = text.match(/([+-]?\d+(?:\.\d+)?)\s*%/);
  return m ? parseFloat(m[1]) : null;
}

function structureBonus(note) {
  const n = note;

  // work X% faster → building_work_speed
  if (/work \+?\d+.{0,3}% faster/i.test(n)) {
    const pct = parsePct(n);
    const scope = detectScope(n);
    return { type:'building_work_speed', scope: scope||'building', op:'multiply',
             value: pct ? parseFloat((1+pct/100).toFixed(4)) : null, note:n };
  }
  // train/create X% faster → creation_speed
  if (/train \+?\d+.{0,3}% faster|create \+?\d+.{0,3}% faster/i.test(n)) {
    const pct = parsePct(n);
    const scope = detectScope(n);
    return { type:'creation_speed', scope: scope||'military_unit', op:'multiply',
             value: pct ? parseFloat((1-pct/100).toFixed(4)) : null, note:n };
  }
  // attack X% faster → creation_speed (attack rate)
  if (/attack \+?\d+.{0,3}% faster/i.test(n)) {
    const pct = parsePct(n);
    const scope = detectScope(n);
    return { type:'stat_modifier', scope: scope||'unit', stat:'rof', op:'multiply',
             value: pct ? parseFloat((1-pct/100).toFixed(4)) : null, note:n };
  }
  // cost -X% → cost_modifier
  if (/cost.{0,15}-\d+/i.test(n) || /\d+.{0,5}% cheaper/i.test(n)) {
    const scope = detectScope(n);
    const m = n.match(/-(\d+(?:\/\d+)*)\s*%/);
    const pct = m ? parseFloat(m[1].split('/')[0]) : null;
    return { type:'cost_modifier', scope: scope||'unit', resource:'all', op:'multiply',
             value: pct ? parseFloat(((100-pct)/100).toFixed(4)) : null, note:n };
  }
  // X free → free_tech
  if (/\bfree\b/i.test(n) && !/^(do not|don't|no )/i.test(n)) {
    return { type:'free_tech', note:n };
  }
  // +X HP → stat hp
  if (/\+\d+\s*HP|HP\s*\+\d+|\+\d+\s*hit point/i.test(n)) {
    const scope = detectScope(n);
    const m = n.match(/\+(\d+)\s*HP/i);
    return { type:'stat_modifier', scope: scope||'unit', stat:'hp', op:'add',
             value: m ? parseInt(m[1]) : null, note:n };
  }
  // +X% HP → stat hp multiply
  if (/\+\d+.{0,3}% HP/i.test(n)) {
    const pct = parsePct(n);
    const scope = detectScope(n);
    return { type:'stat_modifier', scope: scope||'unit', stat:'hp', op:'multiply',
             value: pct ? parseFloat((1+pct/100).toFixed(4)) : null, note:n };
  }
  // +X attack → stat attack
  if (/\+\d+\s*attack/i.test(n)) {
    const scope = detectScope(n);
    const m = n.match(/\+(\d+)\s*attack/i);
    return { type:'stat_modifier', scope: scope||'unit', stat:'attack', op:'add',
             value: m ? parseInt(m[1]) : null, note:n };
  }
  // +X% attack → stat attack multiply
  if (/\+\d+.{0,3}% attack/i.test(n)) {
    const pct = parsePct(n);
    const scope = detectScope(n);
    return { type:'stat_modifier', scope: scope||'unit', stat:'attack', op:'multiply',
             value: pct ? parseFloat((1+pct/100).toFixed(4)) : null, note:n };
  }
  // +X range → stat range
  if (/\+\d+(?:\/\d+)?\s*range/i.test(n)) {
    const scope = detectScope(n);
    const m = n.match(/\+(\d+)(?:\/(\d+))?\s*range/i);
    return { type:'stat_modifier', scope: scope||'unit', stat:'range', op:'add',
             value: m ? parseInt(m[1]) : null, note:n };
  }
  // +X line of sight / +X LOS
  if (/line of sight/i.test(n)) {
    const scope = detectScope(n);
    const m = n.match(/\+(\d+)\s*line of sight/i);
    return { type:'stat_modifier', scope: scope||'unit', stat:'los', op:'add',
             value: m ? parseInt(m[1]) : null, note:n };
  }
  // +X melee/pierce armor
  if (/melee.{0,5}armor|pierce.{0,5}armor/i.test(n)) {
    const scope = detectScope(n);
    const mm = n.match(/\+(\d+)\s*melee/i);
    const pm = n.match(/\+(\d+)\s*pierce/i);
    if (mm && pm) return { type:'stat_modifier', scope: scope||'unit',
      stat:'armor_melee_and_pierce', op:'add',
      value_melee: parseInt(mm[1]), value_pierce: parseInt(pm[1]), note:n };
    if (mm) return { type:'stat_modifier', scope: scope||'unit', stat:'armor_melee', op:'add',
      value: parseInt(mm[1]), note:n };
    if (pm) return { type:'stat_modifier', scope: scope||'unit', stat:'armor_pierce', op:'add',
      value: parseInt(pm[1]), note:n };
  }
  // move X% faster → speed
  if (/move \+?\d+.{0,3}% faster/i.test(n)) {
    const pct = parsePct(n);
    const scope = detectScope(n);
    return { type:'stat_modifier', scope: scope||'unit', stat:'speed', op:'multiply',
             value: pct ? parseFloat((1+pct/100).toFixed(4)) : null, note:n };
  }
  // Start with +X resource
  if (/^start with \+/i.test(n)) {
    const rm = n.match(/\+(\d+)\s*(food|wood|gold|stone)/i);
    return { type:'start_resources',
             resource: rm ? rm[2].toLowerCase() : 'all',
             op:'add', value: rm ? parseInt(rm[1]) : null, note:n };
  }
  // per age advancing costs → special
  if (/advancing.{0,30}age.{0,30}costs?/i.test(n)) {
    return { type:'cost_modifier', scope:'age_advance', op:'multiply', note:n };
  }
  // research X% faster → research_speed
  if (/research \+?\d+.{0,3}% faster/i.test(n)) {
    const pct = parsePct(n);
    return { type:'building_work_speed', scope:'tech_research', op:'multiply',
             value: pct ? parseFloat((1+pct/100).toFixed(4)) : null, note:n };
  }
  // regenerate X HP
  if (/regenerat/i.test(n)) {
    const scope = detectScope(n);
    const m = n.match(/(\d+)\s*HP/i);
    return { type:'stat_modifier', scope: scope||'unit', stat:'regen', op:'add',
             value: m ? parseInt(m[1]) : null, note:n };
  }
  // default: special
  return { type:'special', note:n };
}

// ── 5. Translate civ type to Spanish ─────────────────────────────────────
const TYPE_ES = {
  'Foot Archer':'de arqueros a pie',
  'Archer and Gunpowder':'de arqueros y pólvora',
  'Archer and Naval':'de arqueros y naval',
  'Archer and Monk':'de arqueros y monjes',
  'Archer and Infantry':'de arqueros e infantería',
  'Archer and Siege':'de arqueros y asedio',
  'Archer':'de arqueros',
  'Cavalry Archer':'de arqueros a caballo',
  'Cavalry and Naval':'de caballería y naval',
  'Cavalry and Monk':'de caballería y monjes',
  'Cavalry and Camel':'de caballería y camellos',
  'Cavalry and Counter-Units':'de caballería y contra-unidades',
  'Cavalry and Gunpowder':'de caballería y pólvora',
  'Cavalry':'de caballería',
  'Infantry and Defensive':'de infantería y defensiva',
  'Infantry and Naval':'de infantería y naval',
  'Infantry and Monk':'de infantería y monjes',
  'Infantry and Siege':'de infantería y asedio',
  'Infantry and Cavalry':'de infantería y caballería',
  'Infantry':'de infantería',
  'Camel and Naval':'de camellos y naval',
  'Camel and Gunpowder':'de camellos y pólvora',
  'Gunpowder and Monk':'de pólvora y monjes',
  'Gunpowder':'de pólvora',
  'Naval and Gunpowder':'naval y de pólvora',
  'Naval':'naval',
  'Defensive and Naval':'defensiva y naval',
  'Defensive and Cavalry':'defensiva y de caballería',
  'Defensive':'defensiva',
  'Siege and Elephant':'de asedio y elefantes',
  'Elephant and Naval':'de elefantes y naval',
};

function translateType(englishType) {
  const base = englishType.replace(/\s*civilization$/i,'').trim();
  const es = TYPE_ES[base];
  return es ? `Civilización ${es}` : `Civilización ${base}`;
}

// ── 6. Load civs.js, apply updates, write back ────────────────────────────
const civsPath = path.join(__dirname, '..', 'ref', 'civs.js');
const src = fs.readFileSync(civsPath,'utf8');

// Parse using temp module
const tmpPath = path.join(__dirname, '_tmp_civs.js');
fs.writeFileSync(tmpPath, src + '\nmodule.exports = CIVS;');
const CIVS = require(tmpPath);
fs.unlinkSync(tmpPath);

// Serializer (same as _build_bonuses.js)
function ser(v, indent=0) {
  const sp = '  '.repeat(indent);
  if (v===null||v===undefined) return 'null';
  if (typeof v==='number'||typeof v==='boolean') return String(v);
  if (typeof v==='string') return JSON.stringify(v);
  if (Array.isArray(v)) {
    if (v.length===0) return '[]';
    const flat = v.every(x=>typeof x!=='object'||x===null);
    if (flat) return '['+v.map(x=>ser(x,0)).join(', ')+']';
    return '[\n'+v.map(x=>sp+'  '+ser(x,indent+1)).join(',\n')+'\n'+sp+']';
  }
  const keys = Object.keys(v).filter(k=>v[k]!==undefined);
  if (keys.length===0) return '{}';
  const inner = keys.map(k=>{
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k)?k:JSON.stringify(k);
    return sp+'  '+key+':'+ser(v[k],indent+1);
  }).join(',\n');
  return '{\n'+inner+'\n'+sp+'}';
}

let updated = 0;
for (const [idStr, html] of Object.entries(RAW)) {
  const key = ID_TO_KEY[idStr];
  if (!key || !CIVS[key]) { console.warn(`No civ key for ID ${idStr}`); continue; }
  const { civType, bullets, teamBonus } = parseCiv(html);
  const civ = CIVS[key];

  // Update type (Spanish)
  civ.type = translateType(civType);

  // Rebuild bonuses array from bullets
  civ.bonuses = bullets.map(b => structureBonus(b));

  // Update teamBonus
  if (teamBonus) {
    const tb = structureBonus(teamBonus);
    civ.teamBonus = tb;
  }
  updated++;
}

// Reassemble civs.js
const lines = [];
lines.push('const CIVS = {');
for (const [key, civ] of Object.entries(CIVS)) {
  lines.push(`  ${key}: ${ser(civ, 1)},`);
}
lines.push('};');

const out = lines.join('\n') + '\n';
fs.writeFileSync(civsPath, out, 'utf8');
console.log(`civs.js updated: ${Buffer.byteLength(out)} bytes, ${updated} civs refreshed.`);

// Quick verify
const tmpV = path.join(__dirname,'_tmp_civs2.js');
fs.writeFileSync(tmpV, out+'\nmodule.exports=CIVS;');
const V = require(tmpV);
fs.unlinkSync(tmpV);
const sample = ['aztecs','britons','armenians','jurchens','muisca'];
sample.forEach(k=>{
  const c=V[k];
  if(!c){console.warn('MISSING:',k);return;}
  console.log(`  ${k}: type="${c.type}", bonuses=${c.bonuses.length}, teamBonus.type=${c.teamBonus&&c.teamBonus.type}`);
});
