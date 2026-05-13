// _build_bonuses.js — genera civs.js con bonuses estructurados
// Ejecutar: node _build_bonuses.js
const fs = require('fs');

// ── Cargar civs.js actual ─────────────────────────────────
const raw = fs.readFileSync('ref/civs.js', 'utf8');
const tmp = 'D:/Practicas/AOE/_tmp_b.js';
fs.writeFileSync(tmp, raw + '\nmodule.exports = CIVS;');
const CIVS = require(tmp);
fs.unlinkSync(tmp);

// ══════════════════════════════════════════════════════════
// BONUSES ESTRUCTURADOS  (type / scope / resource / stat /
//                          op / value / condition / note)
//
// Convenciones de valor:
//  cost_modifier  multiply  0.75 → -25% costo
//  stat_modifier  multiply  1.20 → +20% stat
//  stat_modifier  add       3    → +3 plano
//  creation_speed multiply  0.89 → 11% más rápido (tiempo × 0.89)
//  building_work_speed  multiply  1.80 → 80% más rápido (tasa × 1.80)
// ══════════════════════════════════════════════════════════
const SB = {

  generic: {
    bonuses:   [{ type:'special', note:'Muestra el árbol completo sin restricciones.' }],
    teamBonus: null,
  },

  armenians: {
    bonuses: [
      { type:'cost_modifier',  scope:['lumber','mining'],  resource:'all', op:'multiply', value:0.75, note:'Carretas de Mulas cuestan -25%' },
      { type:'special',        scope:['lumber','mining'],  note:'Tecnologías de Carretas de Mulas son +40% más eficientes' },
      { type:'special',        scope:['spearman','pikeman','halberdier','longsword','twohanded','champion'], note:'Mejoras disponibles una edad antes (excepto Hombres de Armas)' },
      { type:'special',        note:'Primera Iglesia Fortificada recibe una reliquia gratis' },
      { type:'stat_modifier',  scope:['galley','wargalley','galleon','dromon'], stat:'extra_projectiles', op:'add', value:1, note:'Línea de galeras y dromones disparan un proyectil adicional' },
    ],
    teamBonus: { type:'stat_modifier', scope:'infantry', stat:'los', op:'add', value:2, note:'La infantería recibe +2 de campo de visión' },
  },

  aztecs: {
    bonuses: [
      { type:'stat_modifier',  scope:'villager', stat:'carry_capacity', op:'add', value:3, note:'Aldeanos llevan +3 de recursos' },
      { type:'creation_speed', scope:'military_unit', op:'multiply', value:0.89, note:'Unidades militares se crean un 11% más rápido' },
      { type:'stat_modifier',  scope:'monk', stat:'hp', op:'add', value:5, condition:{per_monastery_tech:true}, note:'Monjes +5 PV por cada tecnología del Monasterio' },
      { type:'start_resources', resource:'gold', op:'add', value:50, note:'Empiezan con +50 de oro' },
    ],
    teamBonus: { type:'stat_modifier', scope:'relic', stat:'gold_rate', op:'multiply', value:1.33, note:'Las reliquias generan +33% de oro' },
  },

  bengalis: {
    bonuses: [
      { type:'special',       scope:'villager', note:'Reciben 2 aldeanos al avanzar de edad' },
      { type:'stat_modifier', scope:'elephant', stat:'armor_pierce', op:'multiply', value:0.75, note:'Elefantes reciben -25% daño de proyectiles' },
      { type:'stat_modifier', scope:'ship',     stat:'hp',           op:'multiply', value:1.15, note:'Barcos +15% PV' },
    ],
    teamBonus: { type:'stat_modifier', scope:['elephant_archer','elite_elephant_archer'], stat:'armor_pierce', op:'add', value:1, note:'Arqueros de Elefante +1 armadura perforante' },
  },

  berbers: {
    bonuses: [
      { type:'cost_modifier', scope:'cavalry', resource:'all', op:'multiply', value:0.85, condition:{minAge:2}, note:'Caballería cuesta -15% desde Castillos' },
      { type:'cost_modifier', scope:'cavalry', resource:'all', op:'multiply', value:0.80, condition:{minAge:3}, note:'Caballería cuesta -20% en Imperial' },
      { type:'building_work_speed', scope:'dock', op:'multiply', value:1.25, note:'Barcos pesqueros trabajan 25% más rápido' },
    ],
    teamBonus: { type:'building_work_speed', scope:'stable', op:'multiply', value:1.25, note:'Establo trabaja 25% más rápido' },
  },

  burmese: {
    bonuses: [
      { type:'stat_modifier', scope:'elephant', stat:'hp', op:'multiply', value:1.5, note:'Elefantes +50% PV' },
      { type:'free_tech',     scope:'lumber',   note:'Mejoras de Campo Maderero gratuitas' },
      { type:'special',       scope:'monk',     note:'Monjes revelan el mapa del enemigo al convertir unidades' },
    ],
    teamBonus: { type:'stat_modifier', scope:'monk', stat:'hp', op:'multiply', value:1.5, note:'Monjes +50% PV' },
  },

  byzantines: {
    bonuses: [
      { type:'stat_modifier', scope:'building', stat:'hp', op:'multiply', value:1.1,  condition:{minAge:0}, note:'Edificios +10% PV en Edad Oscura' },
      { type:'stat_modifier', scope:'building', stat:'hp', op:'multiply', value:1.2,  condition:{minAge:1}, note:'Edificios +20% PV en Feudal' },
      { type:'stat_modifier', scope:'building', stat:'hp', op:'multiply', value:1.3,  condition:{minAge:2}, note:'Edificios +30% PV en Castillos' },
      { type:'stat_modifier', scope:'building', stat:'hp', op:'multiply', value:1.4,  condition:{minAge:3}, note:'Edificios +40% PV en Imperial' },
      { type:'cost_modifier', scope:['camel','heavycamel','skirmisher','eliteskirm','spearman','pikeman','halberdier'], resource:'all', op:'multiply', value:0.75, note:'Camellos, escaramuzadores y lanceros cuestan -25%' },
      { type:'stat_modifier', scope:'fire_ship', stat:'rof', op:'multiply', value:0.8, note:'Brulotes atacan 25% más rápido' },
      { type:'cost_modifier', scope:'age_advance', resource:'food', op:'multiply', value:0.67, condition:{minAge:3}, note:'Avanzar a Imperial cuesta -33%' },
      { type:'free_tech',     tech:'townwatch', note:'Guardia Urbana gratis' },
    ],
    teamBonus: { type:'stat_modifier', scope:'monk', stat:'heal_rate', op:'multiply', value:2.0, note:'Los monjes curan un 100% más rápido' },
  },

  bohemians: {
    bonuses: [
      { type:'free_tech', tech:'chemistry', condition:{minAge:2}, note:'Química gratis al llegar a Castillos' },
      { type:'stat_modifier', scope:'monk', stat:'relic_capacity', op:'add', value:1, note:'Monjes pueden llevar más reliquias' },
      { type:'special',       scope:'gunpowder', note:'Unidades de pólvora disponibles una edad antes' },
    ],
    teamBonus: { type:'building_work_speed', scope:'blacksmith', op:'multiply', value:1.8, note:'Herrería trabaja 80% más rápido' },
  },

  burgundians: {
    bonuses: [
      { type:'special', scope:'eco_tech', note:'Tecnologías económicas disponibles una era antes' },
      { type:'special', scope:['knight','cavalier'], note:'Caballeros pueden mejorarse a Paladines en Castillos' },
    ],
    teamBonus: { type:'stat_modifier', scope:'flemish_militia', stat:'hp', op:'add', value:5, note:'Monjes Flamencos +5 PV' },
  },

  britons: {
    bonuses: [
      { type:'cost_modifier', scope:'tc',          resource:'wood', op:'multiply', value:0.5,  condition:{minAge:2}, note:'Centros Urbanos -50% madera desde Castillos' },
      { type:'stat_modifier', scope:'foot_archer', stat:'range',    op:'add',      value:1,    condition:{minAge:2}, note:'Arqueros a pie +1 rango en Castillos' },
      { type:'stat_modifier', scope:'foot_archer', stat:'range',    op:'add',      value:2,    condition:{minAge:3}, note:'Arqueros a pie +2 rango en Imperial' },
      { type:'building_work_speed', scope:'shepherd', op:'multiply', value:1.25, note:'Pastores trabajan 25% más rápido' },
    ],
    teamBonus: { type:'building_work_speed', scope:'archery', op:'multiply', value:1.2, note:'Galerías de tiro trabajan 20% más rápido' },
  },

  bulgarians: {
    bonuses: [
      { type:'free_tech',     scope:'blacksmith', note:'Mejoras de Herrería gratuitas' },
      { type:'creation_speed', scope:'ram', op:'multiply', value:0.5, note:'Arietes se construyen 50% más rápido' },
      { type:'special',       note:'Konnik producido por el Krepost' },
    ],
    teamBonus: { type:'stat_modifier', scope:'sword_infantry', stat:'attack_vs_building', op:'add', value:4, note:'Infantería con espada +4 ataque vs edificios' },
  },

  celts: {
    bonuses: [
      { type:'stat_modifier',       scope:'infantry', stat:'speed',         op:'multiply', value:1.15, note:'Infantería +15% velocidad' },
      { type:'building_work_speed', scope:'villager_lumber', op:'multiply', value:1.15, note:'Leñadores trabajan 15% más rápido' },
      { type:'creation_speed',      scope:'siege',    op:'multiply',        value:0.8,  note:'Asedio se construye 20% más rápido' },
    ],
    teamBonus: { type:'building_work_speed', scope:'siege', op:'multiply', value:1.2, note:'Talleres de Asedio trabajan 20% más rápido' },
  },

  chinese: {
    bonuses: [
      { type:'start_resources', resource:'food', op:'add', value:-200, note:'Empiezan con -200 comida' },
      { type:'start_resources', resource:'wood', op:'add', value:-50,  note:'Empiezan con -50 madera' },
      { type:'special',         scope:'villager', note:'Empiezan con +6 aldeanos' },
      { type:'cost_modifier',   scope:'tech', resource:'all', op:'multiply', value:0.95, condition:{minAge:1}, note:'Tecnologías -5% en Feudal' },
      { type:'cost_modifier',   scope:'tech', resource:'all', op:'multiply', value:0.90, condition:{minAge:2}, note:'Tecnologías -10% en Castillos' },
      { type:'cost_modifier',   scope:'tech', resource:'all', op:'multiply', value:0.85, condition:{minAge:3}, note:'Tecnologías -15% en Imperial' },
      { type:'stat_modifier',   scope:'demo_ship', stat:'hp', op:'multiply', value:1.5, note:'Barcos Demolición +50% PV' },
    ],
    teamBonus: { type:'stat_modifier', scope:'farm', stat:'food', op:'add', value:45, note:'Granjas +45 comida' },
  },

  koreans: {
    bonuses: [
      { type:'stat_modifier', scope:['guardtower','keep','bombardtower'], stat:'range', op:'add', value:2, note:'Torres +2 rango' },
      { type:'cost_modifier', scope:'wall',        resource:'all', op:'multiply', value:0.67, note:'Muros y Torres cuestan -33%' },
      { type:'cost_modifier', scope:'turtle_ship', resource:'all', op:'multiply', value:0.80, note:'Barco Tortuga -20% costo' },
    ],
    teamBonus: { type:'stat_modifier', scope:'ram', stat:'hp', op:'multiply', value:1.4, note:'Arietes +40% PV' },
  },

  cumans: {
    bonuses: [
      { type:'special',       note:'Pueden construir un Centro Urbano extra en Edad Feudal' },
      { type:'stat_modifier', scope:'ram', stat:'hp', op:'multiply', value:1.5, note:'Arietes +50% PV' },
      { type:'building_work_speed', scope:'siege', op:'multiply', value:2.0, note:'Taller de Asedio trabaja 100% más rápido' },
    ],
    teamBonus: { type:'stat_modifier', scope:'militia', stat:'hp', op:'multiply', value:1.5, note:'Milicia +50% PV' },
  },

  dravidians: {
    bonuses: [
      { type:'per_age_resources', resource:'wood', op:'add', value:200, note:'Reciben +200 madera al avanzar de edad' },
      { type:'cost_modifier', scope:['elephant_archer','elite_elephant_archer'], resource:'all', op:'multiply', value:0.75, note:'Arqueros de Elefante cuestan -25%' },
      { type:'cost_modifier', scope:['crossbow','arbalester'], resource:'all', op:'multiply', value:0.5, note:'Ballestas cuestan -50%' },
      { type:'cost_modifier', scope:'siege', resource:'all', op:'multiply', value:0.5, note:'Asedio cuesta -50%' },
    ],
    teamBonus: { type:'stat_modifier', scope:'spear_infantry', stat:'attack', op:'add', value:3, note:'Lanceros +3 ataque' },
  },

  slavs: {
    bonuses: [
      { type:'building_work_speed', scope:'villager_farm', op:'multiply', value:1.1,  note:'Aldeanos trabajan en granja +10% más rápido' },
      { type:'creation_speed',      scope:'siege',         op:'multiply', value:0.85, note:'Asedio se construye 15% más rápido' },
      { type:'stat_modifier',       scope:'monk', stat:'heal_range', op:'multiply', value:1.5, note:'Monjes curan desde mayor distancia' },
    ],
    teamBonus: { type:'building_work_speed', scope:'siege', op:'multiply', value:1.15, note:'Talleres de Asedio trabajan 15% más rápido' },
  },

  spanish: {
    bonuses: [
      { type:'stat_modifier', scope:'villager', stat:'build_speed', op:'multiply', value:1.3, note:'Constructores trabajan 30% más rápido' },
      { type:'free_tech',     scope:'blacksmith', note:'Mejoras de Herrería sin costo de oro' },
      { type:'stat_modifier', scope:'bombcannon', stat:'rof', op:'multiply', value:0.8, note:'Bombardas disparan más rápido' },
    ],
    teamBonus: { type:'stat_modifier', scope:'trade', stat:'gold_bonus', op:'multiply', value:1.25, note:'Comercio +25% oro adicional' },
  },

  ethiopians: {
    bonuses: [
      { type:'per_age_resources', resource:'food', op:'add', value:100, note:'Reciben +100 comida al avanzar de edad' },
      { type:'per_age_resources', resource:'gold', op:'add', value:100, note:'Reciben +100 oro al avanzar de edad' },
      { type:'stat_modifier', scope:'foot_archer', stat:'range', op:'add', value:1, condition:{minAge:2}, note:'Arqueros +1 rango en Castillos' },
      { type:'stat_modifier', scope:'foot_archer', stat:'range', op:'add', value:2, condition:{minAge:3}, note:'Arqueros +2 rango en Imperial' },
    ],
    teamBonus: { type:'stat_modifier', scope:['guardtower','keep','bombardtower','castle'], stat:'rof', op:'multiply', value:0.833, note:'Torres y Castillos disparan +20% más rápido' },
  },

  franks: {
    bonuses: [
      { type:'stat_modifier',       scope:'cavalry', stat:'hp', op:'multiply', value:1.2,   note:'Caballería +20% PV' },
      { type:'building_work_speed', scope:'villager_forage', op:'multiply', value:1.25, note:'Recolectores silvestres +25% velocidad' },
      { type:'free_tech',           scope:'mill', note:'Mejoras de granja (Molino) gratuitas' },
    ],
    teamBonus: { type:'stat_modifier', scope:'knight', stat:'los', op:'add', value:2, note:'Caballeros +2 LDV' },
  },

  georgians: {
    bonuses: [
      { type:'special',       note:'Empiezan con una Carreta de Mulas' },
      { type:'stat_modifier', scope:'cavalry', stat:'attack', op:'add', value:2, condition:{on_hill:true}, note:'Caballería +2 ataque en colinas' },
      { type:'cost_modifier', scope:['tc','castle'], resource:'stone', op:'multiply', value:0.75, note:'CU y Castillos -25% costo de piedra' },
    ],
    teamBonus: { type:'stat_modifier', scope:'cavalry', stat:'armor_melee', op:'add', value:1, condition:{on_hill:true}, note:'Caballería +1 armadura en colinas' },
  },

  goths: {
    bonuses: [
      { type:'cost_modifier', scope:'infantry', resource:'all', op:'multiply', value:0.80, condition:{minAge:0}, note:'Infantería -20% costo en Edad Oscura' },
      { type:'cost_modifier', scope:'infantry', resource:'all', op:'multiply', value:0.75, condition:{minAge:1}, note:'Infantería -25% costo en Feudal' },
      { type:'cost_modifier', scope:'infantry', resource:'all', op:'multiply', value:0.70, condition:{minAge:2}, note:'Infantería -30% costo en Castillos' },
      { type:'cost_modifier', scope:'infantry', resource:'all', op:'multiply', value:0.65, condition:{minAge:3}, note:'Infantería -35% costo en Imperial' },
      { type:'special', scope:['huskarl_b'], condition:{minAge:3}, note:'Huskarls producibles en Barracas en Edad Imperial' },
      { type:'special', scope:'villager', note:'Aldeanos +10 ataque al matar animales salvajes' },
    ],
    teamBonus: { type:'stat_modifier', scope:'infantry', stat:'attack_vs_building', op:'add', value:1, note:'Infantería +1 ataque vs edificios' },
  },

  gurjaras: {
    bonuses: [
      { type:'special',       note:'Empiezan con un Camello Explorador gratuito' },
      { type:'stat_modifier', scope:'villager', stat:'animal_food_rate', op:'multiply', value:1.25, note:'Aldeanos recolectan alimentos animales +25%' },
      { type:'cost_modifier', scope:'camel',    resource:'all', op:'multiply', value:0.75, note:'Camellos cuestan -25%' },
    ],
    teamBonus: { type:'stat_modifier', scope:'camel', stat:'attack_vs_cavalry', op:'add', value:5, note:'Camellos +5 ataque vs caballería' },
  },

  hindustanis: {
    bonuses: [
      { type:'stat_modifier', scope:'gunpowder', stat:'range',  op:'add', value:1, note:'Pólvora +1 rango' },
      { type:'stat_modifier', scope:'gunpowder', stat:'attack', op:'add', value:1, note:'Pólvora +1 ataque' },
      { type:'cost_modifier', scope:'camel', resource:'all', op:'multiply', value:0.80, note:'Camellos cuestan -20%' },
      { type:'special', scope:'villager', note:'Aldeanos capturan rebaños más rápido' },
    ],
    teamBonus: { type:'stat_modifier', scope:'camel', stat:'attack_vs_building', op:'add', value:6, note:'Camellos +6 ataque vs edificios' },
  },

  huns: {
    bonuses: [
      { type:'special',       note:'No se requieren Casas para población' },
      { type:'start_resources', resource:'wood', op:'add', value:-100, note:'Empiezan con -100 madera' },
      { type:'cost_modifier', scope:'cavalry_archer', resource:'all', op:'multiply', value:0.90, condition:{minAge:2}, note:'Arqueros a Caballo -10% costo en Castillos' },
      { type:'cost_modifier', scope:'cavalry_archer', resource:'all', op:'multiply', value:0.80, condition:{minAge:3}, note:'Arqueros a Caballo -20% costo en Imperial' },
      { type:'building_work_speed', scope:'stable', op:'multiply', value:1.2, note:'Establo trabaja 20% más rápido' },
    ],
    teamBonus: { type:'stat_modifier', scope:'trebuchet', stat:'accuracy', op:'multiply', value:1.3, note:'Trebuchets +30% precisión' },
  },

  incas: {
    bonuses: [
      { type:'stat_modifier', scope:'house', stat:'population', op:'add', value:5, note:'Casas dan +5 población extra' },
      { type:'building_work_speed', scope:'villager_stone', op:'multiply', value:1.1, note:'Aldeanos minando piedra +10% más rápido' },
      { type:'building_work_speed', scope:'villager_farm',  op:'multiply', value:1.1, note:'Granjeros trabajan más rápido' },
    ],
    teamBonus: { type:'building_work_speed', scope:'barracks', op:'multiply', value:1.8, note:'Barracas trabajan 80% más rápido' },
  },

  italians: {
    bonuses: [
      { type:'cost_modifier', scope:'age_advance', resource:'all', op:'multiply', value:0.85, note:'Avanzar de edad cuesta -15%' },
      { type:'cost_modifier', scope:'ship',         resource:'all', op:'multiply', value:0.85, note:'Navíos y pescadores cuestan -15%' },
      { type:'cost_modifier', scope:['trebuchet','cannongalleon','elitecannon'], resource:'all', op:'multiply', value:0.80, note:'Trebuchets y Cañones de Bombarda -20% costo' },
    ],
    teamBonus: { type:'special', scope:'condottiero', note:'Condottiero disponible en Barracas para todos los aliados' },
  },

  japanese: {
    bonuses: [
      { type:'stat_modifier', scope:'fishingship', stat:'hp',  op:'multiply', value:2.0,  note:'Barcos pesqueros ×2 PV' },
      { type:'stat_modifier', scope:'galley',      stat:'rof', op:'multiply', value:0.75, note:'Galeras atacan 33% más rápido' },
      { type:'stat_modifier', scope:'infantry',    stat:'rof', op:'multiply', value:0.75, condition:{minAge:1}, note:'Infantería ataca 33% más rápido desde Feudal' },
    ],
    teamBonus: { type:'building_work_speed', scope:'mill', op:'multiply', value:1.1, note:'Molinos trabajan 10% más rápido' },
  },

  jurchens: {
    bonuses:   [{ type:'special', note:'Civilización regional (Mod).' }],
    teamBonus: { type:'special', note:'Bonus de equipo (Mod).' },
  },

  khmer: {
    bonuses: [
      { type:'special',       note:'No se requieren edificios previos para avanzar de edad' },
      { type:'stat_modifier', scope:'elephant', stat:'speed', op:'multiply', value:1.2, note:'Elefantes de Batalla +20% velocidad' },
      { type:'special',       scope:'farm', note:'Granjas no requieren Molino' },
    ],
    teamBonus: { type:'stat_modifier', scope:'demo_ship', stat:'hp', op:'multiply', value:1.5, note:'Barcos Demolición +50% PV' },
  },

  khitans: {
    bonuses:   [{ type:'special', note:'Civilización regional (Mod).' }],
    teamBonus: { type:'special', note:'Bonus de equipo (Mod).' },
  },

  lithuanians: {
    bonuses: [
      { type:'stat_modifier',  scope:'cavalry', stat:'attack', op:'add', value:1, condition:{per_relic:true, max_value:4}, note:'Caballería +1 ataque por reliquia (hasta +4)' },
      { type:'start_resources', resource:'food', op:'add', value:150, note:'Empiezan con +150 comida' },
      { type:'stat_modifier',  scope:'monk', stat:'hp', op:'add', value:15, note:'Monjes +15 PV' },
    ],
    teamBonus: { type:'stat_modifier', scope:'light_cavalry', stat:'armor_pierce', op:'add', value:1, note:'Caballería Ligera +1 armadura perforante' },
  },

  magyars: {
    bonuses: [
      { type:'free_tech',     scope:'blacksmith', note:'Mejoras de ataque de Herrería gratis' },
      { type:'cost_modifier', scope:'light_cavalry', resource:'all', op:'multiply', value:0.85, note:'Caballería ligera -15% costo' },
      { type:'special',       scope:'villager', note:'Aldeanos matan lobos de 1 golpe' },
    ],
    teamBonus: { type:'creation_speed', scope:'cavalry_archer', op:'multiply', value:0.8, note:'Arqueros a caballo se crean 25% más rápido' },
  },

  malay: {
    bonuses: [
      { type:'creation_speed', scope:'age_advance', op:'multiply', value:0.6,  note:'Avanzar de edad 66% más rápido' },
      { type:'cost_modifier',  scope:'elephant',    resource:'all', op:'multiply', value:0.70, note:'Elefantes de Batalla cuestan -30%' },
      { type:'stat_modifier',  scope:'fishingship', stat:'hp', op:'multiply', value:2.0, note:'Barcos pesqueros ×2 PV' },
    ],
    teamBonus: { type:'stat_modifier', scope:'armored_ship', stat:'hp', op:'multiply', value:1.5, note:'Acorazados +50% PV' },
  },

  malians: {
    bonuses: [
      { type:'stat_modifier', scope:'infantry', stat:'armor_pierce', op:'add', value:1, condition:{minAge:1}, note:'Infantería +1 armadura perforante en Feudal' },
      { type:'stat_modifier', scope:'infantry', stat:'armor_pierce', op:'add', value:2, condition:{minAge:2}, note:'Infantería +2 armadura perforante en Castillos' },
      { type:'stat_modifier', scope:'infantry', stat:'armor_pierce', op:'add', value:3, condition:{minAge:3}, note:'Infantería +3 armadura perforante en Imperial' },
      { type:'special',       scope:'gold_mine', note:'Minas de oro duran +30%' },
    ],
    teamBonus: { type:'building_work_speed', scope:'university', op:'multiply', value:1.8, note:'Universidad trabaja 80% más rápido' },
  },

  mapuche: {
    bonuses: [
      { type:'stat_modifier', scope:'villager', stat:'food_gather_rate', op:'multiply', value:1.2, note:'Recolectores de alimento entregan +20%' },
      { type:'special', scope:['spearman','pikeman','halberdier','skirmisher','eliteskirm'], note:'Asentamientos pueden entrenar lanceros y escaramuzadores' },
      { type:'stat_modifier', scope:['spearman','pikeman','halberdier','skirmisher','eliteskirm'], stat:'hp', op:'add', value:5,  condition:{minAge:1}, note:'Unidades relevantes +5 PV en Feudal' },
      { type:'stat_modifier', scope:['spearman','pikeman','halberdier','skirmisher','eliteskirm'], stat:'hp', op:'add', value:10, condition:{minAge:2}, note:'Unidades relevantes +10 PV en Castillos' },
      { type:'stat_modifier', scope:['spearman','pikeman','halberdier','skirmisher','eliteskirm'], stat:'hp', op:'add', value:15, condition:{minAge:3}, note:'Unidades relevantes +15 PV en Imperial' },
      { type:'special', scope:'cavalry', note:'Caballería genera oro por cada unidad enemiga eliminada' },
      { type:'special', note:'Castillos enemigos revelados en el mapa' },
    ],
    teamBonus: { type:'stat_modifier', scope:['spearman','pikeman','halberdier','skirmisher','eliteskirm'], stat:'los', op:'add', value:2, note:'Lanceros y escaramuzadores mayor campo de visión' },
  },

  mayans: {
    bonuses: [
      { type:'start_resources', resource:'food', op:'add', value:-50, note:'Empiezan con -50 comida' },
      { type:'special',         scope:'villager', note:'Empiezan con +1 aldeano' },
      { type:'special',         scope:'animal_resource', note:'Recursos animales duran +15%' },
      { type:'cost_modifier',   scope:'foot_archer', resource:'all', op:'multiply', value:0.90, condition:{minAge:1}, note:'Arqueros cuestan -10% en Feudal' },
      { type:'cost_modifier',   scope:'foot_archer', resource:'all', op:'multiply', value:0.80, condition:{minAge:2}, note:'Arqueros cuestan -20% en Castillos' },
      { type:'cost_modifier',   scope:'foot_archer', resource:'all', op:'multiply', value:0.70, condition:{minAge:3}, note:'Arqueros cuestan -30% en Imperial' },
    ],
    teamBonus: { type:'cost_modifier', scope:'stone_wall', resource:'stone', op:'multiply', value:0.5, note:'Muros de Piedra cuestan -50%' },
  },

  mongols: {
    bonuses: [
      { type:'stat_modifier', scope:'cavalry_archer', stat:'rof', op:'multiply', value:0.8,  note:'Arqueros a Caballo 25% más rápidos' },
      { type:'stat_modifier', scope:'scout',          stat:'los', op:'add',      value:2,    note:'Exploradores +2 LDV' },
      { type:'stat_modifier', scope:'light_cavalry',  stat:'hp',  op:'multiply', value:1.30, note:'Caballería Ligera/Húsar +30% PV' },
    ],
    teamBonus: { type:'stat_modifier', scope:'scout', stat:'los', op:'add', value:2, note:'Caballería Explorador +2 LDV' },
  },

  muisca: {
    bonuses: [
      { type:'cost_modifier',  scope:'age_advance', resource:'gold', op:'multiply', value:0.5, note:'Avanzar de edad cuesta -50% de oro' },
      { type:'cost_modifier',  scope:'tc',  resource:'all', op:'multiply', value:0.75, note:'Asentamientos cuestan -25%' },
      { type:'special',        scope:'tc',  note:'Asentamientos curan unidades cercanas' },
      { type:'stat_modifier',  scope:['champiwarrior','elitechampi','foot_archer'], stat:'armor_melee', op:'add', value:1, condition:{per_age:true}, note:'Champi Warriors y arqueros +1 armadura por edad' },
      { type:'free_tech',      tech:['guilds','coinage'], note:'Caravana y Gremios son gratuitas' },
    ],
    teamBonus: { type:'stat_modifier', scope:'gold_mine', stat:'gold_amount', op:'multiply', value:1.15, note:'Minas de oro contienen +15% de oro' },
  },

  persians: {
    bonuses: [
      { type:'start_resources', resource:'food', op:'add', value:50, note:'Empiezan con +50 comida' },
      { type:'start_resources', resource:'wood', op:'add', value:50, note:'Empiezan con +50 madera' },
      { type:'stat_modifier',   scope:'tc', stat:'hp', op:'multiply', value:2.0, note:'Centros Urbanos tienen el doble de PV' },
      { type:'building_work_speed', scope:'tc',   op:'multiply', value:1.25, condition:{minAge:2}, note:'CU trabajan 25% más rápido en Castillos' },
      { type:'building_work_speed', scope:'tc',   op:'multiply', value:1.40, condition:{minAge:3}, note:'CU trabajan 40% más rápido en Imperial' },
      { type:'building_work_speed', scope:'dock', op:'multiply', value:1.25, condition:{minAge:1}, note:'Muelles trabajan 25% más rápido desde Feudal' },
    ],
    teamBonus: { type:'stat_modifier', scope:'heavy_cavalry', stat:'attack_vs_archer', op:'add', value:2, note:'Caballería pesada +2 ataque vs arqueros' },
  },

  poles: {
    bonuses: [
      { type:'special', scope:'stone_mine', note:'Minería de Piedra genera oro automáticamente' },
      { type:'special', scope:'villager',   condition:{carrying_stone:true}, note:'Aldeanos con piedra regeneran PV' },
      { type:'free_tech', tech:'light_cavalry_upgrade', note:'Mejora Scout→Caballería Ligera gratis' },
    ],
    teamBonus: { type:'stat_modifier', scope:'mangonel', stat:'los', op:'add', value:2, note:'Mangonelas +2 LDV' },
  },

  portuguese: {
    bonuses: [
      { type:'cost_modifier',   scope:'all_unit', resource:'gold', op:'multiply', value:0.8,  note:'Todas las unidades cuestan -20% oro' },
      { type:'per_age_resources', resource:'gold', op:'add', value:200, note:'Avanzar de edad otorga +200 oro' },
      { type:'stat_modifier',   scope:'ship', stat:'hp', op:'multiply', value:1.1, note:'Navíos +10% PV' },
    ],
    teamBonus: { type:'stat_modifier', scope:'ship', stat:'los', op:'add', value:1, note:'Navíos +1 LDV' },
  },

  romans: {
    bonuses: [
      { type:'stat_modifier', scope:'villager', stat:'work_speed',    op:'multiply', value:1.05, note:'Aldeanos recolectan, construyen y reparan 5% más rápido' },
      { type:'stat_modifier', scope:'galley',   stat:'armor_melee',   op:'add',      value:1,    note:'Galeras +1 armadura' },
      { type:'stat_modifier', scope:'galley',   stat:'armor_pierce',  op:'add',      value:1,    note:'Galeras +1 armadura perforante' },
      { type:'cost_modifier', scope:'blacksmith_tech', resource:'food', op:'multiply', value:0.5, note:'Mejoras de Herrería cuestan -50% comida' },
    ],
    teamBonus: { type:'stat_modifier', scope:'sword_infantry', stat:'armor_melee', op:'add', value:1, note:'Milicia-línea +1 armadura cuerpo a cuerpo' },
  },

  saracens: {
    bonuses: [
      { type:'special',       scope:'market', note:'Mercado genera más oro por transacciones' },
      { type:'stat_modifier', scope:'camel',       stat:'attack_vs_cavalry',  op:'add', value:5, note:'Camellos +5 ataque vs caballería' },
      { type:'stat_modifier', scope:'combat_ship', stat:'attack_vs_building', op:'add', value:5, note:'Galeras de combate +5 ataque vs edificios' },
    ],
    teamBonus: { type:'stat_modifier', scope:'trade_cart', stat:'gold_carry', op:'add', value:5, note:'Carros de Comercio llevan +5 oro' },
  },

  shu: {
    bonuses:   [{ type:'special', note:'Civilización regional (Mod).' }],
    teamBonus: { type:'special', note:'Bonus de equipo (Mod).' },
  },

  sicilians: {
    bonuses: [
      { type:'special',       scope:'sergeant', note:'Sargentos pueden construir Donjons' },
      { type:'stat_modifier', scope:'building', stat:'ram_resistance', op:'multiply', value:1.5, note:'Edificios +50% resistencia a embestidas' },
      { type:'special',       note:'Donjon disponible desde la Edad Oscura' },
    ],
    teamBonus: { type:'stat_modifier', scope:'melee_unit', stat:'armor_vs_ram', op:'add', value:3, note:'Unidades de primera línea +3 armadura vs embestida' },
  },

  tatars: {
    bonuses: [
      { type:'stat_modifier', scope:'cavalry', stat:'los',      op:'add',      value:1,   condition:{on_hill:true}, note:'Caballería +1 LDV en colinas' },
      { type:'stat_modifier', scope:'sheep',   stat:'food',     op:'multiply', value:1.5, note:'Ovejas +50% comida' },
      { type:'stat_modifier', scope:'trebuchet', stat:'accuracy', op:'multiply', value:1.0, note:'Trebuchets 100% precisión' },
    ],
    teamBonus: { type:'stat_modifier', scope:'cavalry', stat:'armor_pierce', op:'add', value:4, condition:{on_hill:true}, note:'Caballería en colinas +4 armadura perforante' },
  },

  teutons: {
    bonuses: [
      { type:'stat_modifier', scope:'monk',          stat:'heal_range',       op:'multiply', value:2.0, note:'Monjes curan desde más lejos' },
      { type:'stat_modifier', scope:'tower',          stat:'garrison_capacity', op:'add',     value:10,  note:'Torres guarnicionales +10 capacidad' },
      { type:'stat_modifier', scope:'sword_infantry', stat:'armor_melee',      op:'add',     value:1,   note:'Infantería cuerpo a cuerpo +1 armadura' },
    ],
    teamBonus: { type:'special', scope:'tower', note:'Torres guarnicionales disparan activamente' },
  },

  turks: {
    bonuses: [
      { type:'free_tech',           tech:'chemistry', note:'Química gratis' },
      { type:'stat_modifier',       scope:'gunpowder', stat:'hp', op:'multiply', value:1.25, note:'Artillería +25% PV' },
      { type:'building_work_speed', scope:'gold_mining', op:'multiply', value:1.15, note:'Minería de Oro +15%' },
      { type:'free_tech',           tech:'light_cavalry_upgrade', note:'Mejora de Caballería Ligera gratis' },
    ],
    teamBonus: { type:'stat_modifier', scope:'bombcannon', stat:'hp', op:'multiply', value:1.25, note:'Bombardas +25% PV' },
  },

  tupi: {
    bonuses: [
      { type:'start_resources', resource:'food',  op:'add', value:25, note:'Comienzan con +25 comida' },
      { type:'start_resources', resource:'wood',  op:'add', value:25, note:'Comienzan con +25 madera' },
      { type:'start_resources', resource:'gold',  op:'add', value:25, note:'Comienzan con +25 oro' },
      { type:'start_resources', resource:'stone', op:'add', value:25, note:'Comienzan con +25 piedra' },
      { type:'special',         scope:'tc', note:'Unidades pueden guarecerse en los asentamientos' },
      { type:'cost_modifier',   scope:'archery_tech',  resource:'food', op:'multiply', value:0.5, note:'Mejoras de Galería de Tiro -50% comida' },
      { type:'cost_modifier',   scope:'barracks_tech', resource:'food', op:'multiply', value:0.5, note:'Mejoras de Cuartel -50% comida' },
      { type:'stat_modifier',   scope:['tc','castle'], stat:'population', op:'add', value:10, note:'CU y Castillos +10 espacio de población' },
      { type:'special',         note:'Unidades eliminadas devuelven 20% de su costo' },
    ],
    teamBonus: { type:'stat_modifier', scope:'dock', stat:'population', op:'add', value:5, note:'Muelles +5 espacio de población' },
  },

  vietnamese: {
    bonuses: [
      { type:'stat_modifier', scope:'foot_archer', stat:'hp', op:'multiply', value:1.2, note:'Arqueros +20% PV' },
      { type:'special',       note:'Exploración enemiga visible desde el inicio' },
      { type:'free_tech',     tech:'arbalester_upgrade', note:'Arbalestero se mejora gratis' },
    ],
    teamBonus: { type:'stat_modifier', scope:'skirmisher', stat:'los', op:'add', value:1, note:'Escaramuzadores +1 LDV' },
  },

  vikings: {
    bonuses: [
      { type:'stat_modifier', scope:'galley',   stat:'hp', op:'multiply', value:1.1,  note:'Galeras +10% PV' },
      { type:'stat_modifier', scope:'ram',       stat:'hp', op:'multiply', value:1.4,  note:'Arietes +40% PV' },
      { type:'cost_modifier', scope:'infantry',  resource:'all', op:'multiply', value:0.90, condition:{minAge:1}, note:'Infantería -10% costo en Feudal' },
      { type:'cost_modifier', scope:'infantry',  resource:'all', op:'multiply', value:0.85, condition:{minAge:2}, note:'Infantería -15% costo en Castillos' },
      { type:'cost_modifier', scope:'infantry',  resource:'all', op:'multiply', value:0.80, condition:{minAge:3}, note:'Infantería -20% costo en Imperial' },
    ],
    teamBonus: { type:'stat_modifier', scope:['mill','lumber'], stat:'hp', op:'add', value:200, note:'Molinos y Campos Madereros +200 PV' },
  },

  wei: {
    bonuses:   [{ type:'special', note:'Civilización regional (Mod).' }],
    teamBonus: { type:'special', note:'Bonus de equipo (Mod).' },
  },

  wu: {
    bonuses:   [{ type:'special', note:'Civilización regional (Mod).' }],
    teamBonus: { type:'special', note:'Bonus de equipo (Mod).' },
  },
};

// ── Serializador legible ───────────────────────────────────
function ser(v, indent) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'string')  return JSON.stringify(v);
  if (typeof v === 'number')  return String(v);
  if (typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    // Arrays cortos de strings/números en una línea
    if (v.every(x => typeof x === 'string' || typeof x === 'number'))
      return '[' + v.map(x => JSON.stringify(x)).join(', ') + ']';
    const inner = v.map(x => ' '.repeat(indent + 2) + ser(x, indent + 2)).join(',\n');
    return '[\n' + inner + '\n' + ' '.repeat(indent) + ']';
  }
  if (typeof v === 'object') {
    const keys = Object.keys(v);
    if (keys.length === 0) return '{}';
    const pairs = keys.map(k => ' '.repeat(indent + 2) + k + ':' + ser(v[k], indent + 2));
    return '{\n' + pairs.join(',\n') + '\n' + ' '.repeat(indent) + '}';
  }
  return String(v);
}

// ── Generar salida ─────────────────────────────────────────
let out = 'const CIVS = {\n';

for (const [key, civ] of Object.entries(CIVS)) {
  const sb = SB[key];
  out += `  ${key}: {\n`;
  out += `    name:${JSON.stringify(civ.name)},\n`;
  if (civ.type) out += `    type:${JSON.stringify(civ.type)},\n`;

  // bonuses estructurados
  if (sb) {
    const bArr = sb.bonuses.map(b => '      ' + ser(b, 6)).join(',\n');
    out += `    bonuses:[\n${bArr}\n    ],\n`;
  } else {
    // fallback: wrap string bonus as special
    const txt = Array.isArray(civ.bonuses)
      ? civ.bonuses : (civ.bonus ? [civ.bonus] : []);
    const bArr = txt.map(t => `      {type:'special',note:${JSON.stringify(t)}}`).join(',\n');
    out += `    bonuses:[\n${bArr}\n    ],\n`;
  }

  // teamBonus estructurado
  const tb = sb ? sb.teamBonus : null;
  if (tb) {
    out += `    teamBonus:${ser(tb, 4)},\n`;
  } else if (civ.teamBonus) {
    out += `    teamBonus:{type:'special',note:${JSON.stringify(civ.teamBonus)}},\n`;
  } else {
    out += `    teamBonus:null,\n`;
  }

  out += `    available:[${civ.available.map(id => `'${id}'`).join(', ')}],\n`;
  out += `    uniqueTechs:${JSON.stringify(civ.uniqueTechs)},\n`;
  out += `    uniqueUnits:${JSON.stringify(civ.uniqueUnits)},\n`;
  if (civ.overrides) out += `    overrides:${JSON.stringify(civ.overrides)},\n`;
  out += `  },\n`;
}

out += '};\n';

fs.writeFileSync('ref/civs.js', out, 'utf8');
console.log('civs.js generado:', out.length, 'bytes');

// Verificar que carga correctamente
const t2 = 'D:/Practicas/AOE/_tmp_verify2.js';
fs.writeFileSync(t2, out + '\nmodule.exports = CIVS;');
try {
  const C2 = require(t2);
  const keys = Object.keys(C2);
  console.log('Civs verificadas:', keys.length);
  // Spot checks
  const checks = ['aztecs','armenians','mongols','incas','turks'];
  checks.forEach(k => {
    const c = C2[k];
    console.log(`  ${k}: bonuses=${c.bonuses.length}, teamBonus.type=${c.teamBonus?.type}`);
  });
} finally {
  fs.unlinkSync(t2);
}
