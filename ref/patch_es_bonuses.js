'use strict';
// Patches locale/es.js — replaces English bonus/teamBonus strings with Spanish translations
const fs = require('fs');

// ── Spanish translations for all civ bonuses and team bonuses ─────────────────
const ES_BONUSES = {
  armenians: {
    bonuses: [
      "Los carros de mulas cuestan -25%",
      "Las tecnologías de carros de mulas son +40% más efectivas",
      "Mejoras de línea de lanceros y milicia (excepto Hombre de Armas) disponibles una era antes",
      "La primera Iglesia Fortificada recibe una Reliquia gratis",
      "La línea de galeras y los Dromones disparan un proyectil adicional",
    ],
    teamBonus: "Infantería +2 de alcance visual",
  },
  aztecs: {
    bonuses: [
      "Empiezan con +50 de oro",
      "Los aldeanos transportan +3 recursos",
      "Las unidades militares se entrenan +15% más rápido",
      "Los monjes ganan +5 PV por cada tecnología de monasterio investigada",
    ],
    teamBonus: "Las Reliquias generan +33% de oro",
  },
  bengalis: {
    bonuses: [
      "Los Centros Urbanos crean 2 aldeanos al avanzar de era",
      "Caballería +2 de ataque vs. escaramuzadores",
      "Las unidades de elefante reciben -25% de daño adicional y son más resistentes a la conversión",
      "Monjes +3 armadura cuerpo a cuerpo/+3 armadura perforante",
      "Los barcos regeneran 15 PV por minuto",
    ],
    teamBonus: "Las unidades de comercio generan +10% de comida además de oro",
  },
  berbers: {
    bonuses: [
      "Los aldeanos se mueven +5% más rápido en la Alta Edad Media y +10% más rápido desde la Edad Feudal",
      "Las unidades de establo cuestan -15/20% en la Edad de los Castillos/Imperial",
      "Los barcos se mueven +10% más rápido",
    ],
    teamBonus: "El Genitour disponible en la Galería de Tiro desde la Edad de los Castillos",
  },
  burmese: {
    bonuses: [
      "Las tecnologías del Campamento Maderero son gratuitas",
      "Infantería +1/+2/+3 de ataque en Edad Feudal/Castillos/Imperial",
      "Los Elefantes de Batalla tienen +1 armadura cuerpo a cuerpo/+1 armadura perforante",
      "Las tecnologías del Monasterio cuestan -50%",
    ],
    teamBonus: "Las Reliquias son visibles en el mapa al inicio de la partida",
  },
  byzantines: {
    bonuses: [
      "Edificios con +10/20/30/40% de PV en Alta Edad Media/Feudal/Castillos/Imperial",
      "Los Jinetes de Camello, Escaramuzadores y línea de Lanceros cuestan -25%",
      "Vigilancia Urbana y Patrulla Urbana son gratuitas",
      "Avanzar a la Edad Imperial cuesta -33%",
      "Los Barcos de Fuego y los Dromones atacan +25% más rápido",
    ],
    teamBonus: "Los monjes curan +100% más rápido",
  },
  bohemians: {
    bonuses: [
      "Las tecnologías del Campamento Minero son gratuitas",
      "Las Herrerías y las Universidades cuestan -100 de madera",
      "La línea de Lanceros causa +25% de daño adicional",
      "Fervor y Santidad afectan a los aldeanos",
      "Química y Arcabucero disponibles en la Edad de los Castillos",
    ],
    teamBonus: "Los Mercados trabajan +80% más rápido",
  },
  burgundians: {
    bonuses: [
      "Las mejoras económicas están disponibles una era antes y cuestan -33% de comida",
      "Las tecnologías del Establo cuestan -50%",
      "La mejora de Caballero disponible en la Edad de los Castillos",
      "Las unidades de pólvora tienen +25% de ataque",
    ],
    teamBonus: "Las Reliquias generan comida además de oro",
  },
  britons: {
    bonuses: [
      "Los pastores trabajan +25% más rápido",
      "Los Centros Urbanos cuestan -50% de madera desde la Edad de los Castillos",
      "Los arqueros a pie tienen +1/+2 de rango en la Edad de los Castillos/Imperial",
    ],
    teamBonus: "Las Galerías de Tiro trabajan +10% más rápido",
  },
  bulgarians: {
    bonuses: [
      "Las mejoras de la línea de Milicia son gratuitas",
      "Las tecnologías de Herrería y Taller de Asedio cuestan -50% de comida",
      "Los Centros Urbanos cuestan -50% de piedra",
      "Puede construir Krepost en la Edad de los Castillos",
    ],
    teamBonus: "Las Herrerías trabajan +80% más rápido",
  },
  celts: {
    bonuses: [
      "Los leñadores trabajan +15% más rápido",
      "Los animales de granja en el alcance visual de unidades celtas no pueden ser robados",
      "La infantería se mueve +5/10/15/20% más rápido en Alta Edad Media/Feudal/Castillos/Imperial",
      "Las armas de asedio atacan +25% más rápido",
    ],
    teamBonus: "Los Talleres de Asedio trabajan +20% más rápido",
  },
  chinese: {
    bonuses: [
      "Empiezan con +3 aldeanos, pero -50 de madera y -200 de comida",
      "Las tecnologías cuestan -5/10/15% en Edad Feudal/Castillos/Imperial",
      "Los Centros Urbanos tienen +7 de alcance visual y proporcionan +15 de espacio de población",
      "Los Lanceros de Fuego y los Barcos de Fuego se mueven +5/10% más rápido en Edad de los Castillos/Imperial",
    ],
    teamBonus: "Las granjas producen +10% de comida",
  },
  koreans: {
    bonuses: [
      "Los mineros de piedra trabajan +20% más rápido",
      "Los soldados a distancia e infantería cuestan -50% de madera",
      "Las mejoras de armadura de arquero y de torres son gratuitas (la Torre de Bombardeo requiere Química)",
      "Los barcos de guerra cuestan -20% de madera",
    ],
    teamBonus: "Los aldeanos tienen +3 de alcance visual",
  },
  cumans: {
    bonuses: [
      "Se puede construir un Centro Urbano adicional en la Edad Feudal",
      "Las unidades montadas se mueven +5/10/15% más rápido en Edad Feudal/Castillos/Imperial",
      "Las Galerías de Tiro y los Establos cuestan -75 de madera",
      "El Taller de Asedio y el Ariete disponibles en Edad Feudal; el Ariete Reforzado disponible en Edad de los Castillos",
    ],
    teamBonus: "Las Murallas de Estacas tienen +33% de PV",
  },
  dravidians: {
    bonuses: [
      "Los pescadores y los barcos de pesca transportan +15 recursos",
      "Reciben +200 de madera al avanzar de era",
      "Los escaramuzadores y los arqueros de elefante atacan +25% más rápido",
      "Las tecnologías del Cuartel cuestan -50%",
      "Las armas de asedio cuestan -33% de madera",
    ],
    teamBonus: "Los Muelles proporcionan +5 de espacio de población",
  },
  slavs: {
    bonuses: [
      "Los agricultores trabajan +15% más rápido",
      "Incendio y Gambesones son gratuitos",
      "Las unidades del Taller de Asedio cuestan -15%",
      "Los monjes se mueven +20% más rápido",
    ],
    teamBonus: "Los edificios militares (excepto Castillos) proporcionan +5 de espacio de población",
  },
  spanish: {
    bonuses: [
      "Los constructores trabajan +30% más rápido",
      "Reciben +20 de oro por cada tecnología investigada",
      "Las mejoras de la Herrería no cuestan oro",
      "Las unidades de pólvora atacan +18% más rápido",
      "Las Galeras de Cañón disparan con más precisión a objetivos en movimiento",
    ],
    teamBonus: "Las unidades de comercio generan +25% de oro",
  },
  ethiopians: {
    bonuses: [
      "Reciben +100 de oro y +100 de comida al avanzar de era",
      "Los arqueros a pie atacan +18% más rápido",
      "La mejora de Piquero es gratuita",
    ],
    teamBonus: "Los Puestos de Avanzada tienen +3 de alcance visual y no cuestan piedra",
  },
  franks: {
    bonuses: [
      "Los recolectores trabajan +15% más rápido",
      "Las tecnologías del Molino son gratuitas",
      "Las unidades montadas tienen +20% de PV desde la Edad Feudal",
      "Los Castillos cuestan -15/25% en la Edad de los Castillos/Imperial",
    ],
    teamBonus: "La línea de Caballeros tiene +2 de alcance visual",
  },
  georgians: {
    bonuses: [
      "Empiezan con un Carro de Mulas",
      "Las unidades y edificios reciben -15% de daño cuando están en terreno elevado",
      "Las unidades montadas regeneran 2/8/14 PV por minuto en Edad Feudal/Castillos/Imperial",
      "Las Iglesias Fortificadas otorgan +10% de velocidad de trabajo a los aldeanos en un radio de 9 casillas",
    ],
    teamBonus: "Las reparaciones de edificios cuestan -25%",
  },
  goths: {
    bonuses: [
      "El Telar se investiga al instante",
      "Los cazadores transportan +15 recursos; los animales cazados duran +20% más",
      "La infantería cuesta -15/20/25/30% en Alta Edad Media/Feudal/Castillos/Imperial",
      "Infantería +1/+2/+3 de ataque vs. edificios en Edad Feudal/Castillos/Imperial",
      "+10 de espacio de población en la Edad Imperial",
    ],
    teamBonus: "Los Cuarteles trabajan +20% más rápido",
  },
  gurjaras: {
    bonuses: [
      "Empiezan con 2 arbustos de recolección",
      "Pueden guarnecer ganado en Molinos para producir comida pasivamente",
      "Las unidades montadas causan +20/30/40% de daño adicional en Edad Feudal/Castillos/Imperial",
      "Los Muelles tienen +5 de capacidad de guarnición",
    ],
    teamBonus: "Las unidades de camello y elefante se entrenan +25% más rápido",
  },
  hindustanis: {
    bonuses: [
      "Los aldeanos cuestan -8/13/18/23% en Alta Edad Media/Feudal/Castillos/Imperial",
      "Los Jinetes de Camello atacan +20% más rápido",
      "Las unidades de pólvora tienen +1 armadura cuerpo a cuerpo/+1 armadura perforante",
      "Pueden construir Caravanserai en la Edad Imperial",
    ],
    teamBonus: "La línea de Caballería Exploradora y las unidades de camello tienen +2 de ataque vs. edificios",
  },
  huns: {
    bonuses: [
      "No necesitan casas, pero empiezan con -100 de madera",
      "Los Arqueros a Caballo cuestan -10/20% en la Edad de los Castillos/Imperial",
      "Los Trebuchets disparan con más precisión a unidades y objetivos pequeños",
      "En mapas nómadas, el primer Centro Urbano crea un Caballo explorador",
    ],
    teamBonus: "Los Establos trabajan +20% más rápido",
  },
  incas: {
    bonuses: [
      "Las casas y asentamientos proporcionan +5 de espacio de población",
      "Los edificios cuestan -15% de piedra",
      "Las unidades militares cuestan -5/10/15/20% de comida en Alta Edad Media/Feudal/Castillos/Imperial",
      "Los aldeanos se benefician de las mejoras de infantería de la Herrería desde la Edad de los Castillos",
    ],
    teamBonus: "Empiezan con una Llama gratis",
  },
  italians: {
    bonuses: [
      "Avanzar a la siguiente era cuesta -15%",
      "Los Arqueros a pie y los Condotieros tienen +1 armadura cuerpo a cuerpo/+1 armadura perforante",
      "Las tecnologías del Muelle y la Universidad cuestan -25%",
      "Las unidades de pólvora cuestan -20%",
      "Los barcos pesqueros cuestan -15%",
    ],
    teamBonus: "El Condotiero disponible en el Cuartel en la Edad Imperial",
  },
  japanese: {
    bonuses: [
      "Los Molinos, Campamentos Madereros y Mineros cuestan -50%",
      "La infantería ataca +33% más rápido desde la Edad Feudal",
      "Los Arqueros a Caballo tienen +2 de ataque vs. soldados a distancia (excepto escaramuzadores)",
      "Los barcos pesqueros trabajan +5/10/15/20% más rápido en Alta Edad Media/Feudal/Castillos/Imperial; +100% de PV",
    ],
    teamBonus: "La línea de Galeras tiene +4 de alcance visual",
  },
  jurchens: {
    bonuses: [
      "La carne de animales cazados y de granja no se descompone",
      "Las unidades montadas y los Lanceros de Fuego atacan +25% más rápido desde la Edad Feudal",
      "Los Ingenieros de Asedio disponibles en la Edad de los Castillos",
      "Las mejoras de asedio y fortificación cuestan -75% de madera y se investigan +100% más rápido",
      "Las unidades reciben -50% de daño de fuego amigo",
    ],
    teamBonus: "Las unidades de pólvora tienen +2 de alcance visual",
  },
  khmer: {
    bonuses: [
      "No se requieren edificios para avanzar de era ni para desbloquear otros edificios",
      "Los agricultores no necesitan Molinos ni Centros Urbanos para depositar comida",
      "Los aldeanos pueden guarnecer en casas",
      "Los Elefantes de Batalla se mueven +10% más rápido",
    ],
    teamBonus: "Los Escorpiones tienen +1 de rango",
  },
  khitans: {
    bonuses: [
      "Los Pastos reemplazan a las Granjas",
      "Los efectos de las mejoras de ataque cuerpo a cuerpo se duplican",
      "Los escaramuzadores, la línea de Lanceros y de Caballería Exploradora se entrenan y mejoran +15% más rápido",
      "La mejora de Arquero de Caballería Pesada disponible en la Edad de los Castillos y cuesta -50%",
    ],
    teamBonus: "Infantería +2 de ataque vs. soldados a distancia",
  },
  lithuanians: {
    bonuses: [
      "Cada Centro Urbano proporciona +100 de comida",
      "La línea de Lanceros y la línea de Escaramuzadores se mueven +10% más rápido",
      "Cada Reliquia guarnecida otorga +1 de ataque a la línea de Caballeros y a los Leitis (máximo +4)",
    ],
    teamBonus: "Los Monasterios trabajan +20% más rápido",
  },
  magyars: {
    bonuses: [
      "Los aldeanos matan a los lobos de un golpe",
      "La línea de Caballería Exploradora cuesta -15%",
      "Las mejoras de ataque cuerpo a cuerpo son gratuitas",
    ],
    teamBonus: "Los Arqueros Montados se entrenan +25% más rápido",
  },
  malay: {
    bonuses: [
      "Avanzar a la siguiente era es +66% más rápido",
      "Las mejoras de armadura de infantería son gratuitas",
      "Los Elefantes de Batalla cuestan -25/35% en la Edad de los Castillos/Imperial",
      "Las trampas de peces cuestan -33% y proporcionan +200% de comida",
    ],
    teamBonus: "Los Muelles tienen +6 de alcance visual",
  },
  malians: {
    bonuses: [
      "Los edificios cuestan -15% de madera",
      "Los aldeanos depositan +10% más de oro",
      "Las unidades del Cuartel tienen +1/+2/+3 de armadura perforante en Edad Feudal/Castillos/Imperial",
    ],
    teamBonus: "Las Universidades trabajan +80% más rápido",
  },
  mapuche: {
    bonuses: [
      "Los recolectores depositan +20% más de comida",
      "Los asentamientos pueden entrenar la línea de Lanceros y Escaramuzadores",
      "Infantería, Honderos y Escaramuzadores +5/10/15 PV en Edad Feudal/Castillos/Imperial",
      "Las unidades montadas generan +3 de oro al derrotar unidades militares",
      "Los Castillos enemigos se revelan en el mapa",
    ],
    teamBonus: "La línea de Lanceros y los Escaramuzadores tienen +2 de alcance visual",
  },
  mayans: {
    bonuses: [
      "Empiezan con +1 aldeano, pero -50 de comida",
      "Los recursos duran +15% más",
      "Los arqueros a pie cuestan -10/20/30% en Edad Feudal/Castillos/Imperial",
    ],
    teamBonus: "Las murallas cuestan -50%",
  },
  mongols: {
    bonuses: [
      "Los cazadores trabajan +40% más rápido",
      "Los Arqueros a Caballo atacan +25% más rápido",
      "La línea de Caballería Exploradora y los Lanceros de Estepa tienen +20/30% de PV en Edad de los Castillos/Imperial",
    ],
    teamBonus: "La línea de Caballería Exploradora tiene +2 de alcance visual",
  },
  muisca: {
    bonuses: [
      "Avanzar a la siguiente era cuesta -50% de oro",
      "Los asentamientos cuestan -25% y curan las unidades cercanas",
      "Los Guerreros Champi y las unidades de Galería de Tiro tienen +1/2/3 de armadura cuerpo a cuerpo en Edad Feudal/Castillos/Imperial",
      "Los monjes recuperan fe +50% más rápido",
      "Caravana y Gremios son gratuitos",
    ],
    teamBonus: "Las fuentes de oro naturales duran +15% más",
  },
  persians: {
    bonuses: [
      "Empiezan con +50 de madera y +50 de comida",
      "Los Centros Urbanos y Muelles tienen +100% de PV y trabajan +5/10/15/20% más rápido en Alta Edad Media/Feudal/Castillos/Imperial",
      "Tácticas Partas disponibles en la Edad de los Castillos",
      "Pueden construir Caravanserai en la Edad Imperial",
    ],
    teamBonus: "La línea de Caballeros tiene +2 de ataque vs. soldados a distancia",
  },
  poles: {
    bonuses: [
      "El Folwark reemplaza al Molino",
      "Los aldeanos regeneran 10/15/20 PV en Edad Feudal/Castillos/Imperial",
      "Los mineros de piedra generan oro además de piedra",
      "Línea de Sangre y las mejoras de la línea de Caballería Exploradora cuestan -50% de comida",
    ],
    teamBonus: "La línea de Caballería Exploradora tiene +1 de ataque vs. soldados a distancia",
  },
  portuguese: {
    bonuses: [
      "Los recolectores generan madera además de comida",
      "Todas las unidades cuestan -20% de oro",
      "Pueden construir Feitoria en la Edad Imperial",
      "Los barcos tienen +10/15/20% de PV en Edad Feudal/Castillos/Imperial",
    ],
    teamBonus: "Las tecnologías se investigan +25% más rápido",
  },
  romans: {
    bonuses: [
      "Los aldeanos recolectan, construyen y reparan +5% más rápido",
      "Los efectos de las mejoras de armadura de infantería se duplican",
      "Los Escorpiones cuestan -50% de oro",
      "La línea de Galeras y los Dromones tienen +1 armadura cuerpo a cuerpo/+1 armadura perforante",
    ],
    teamBonus: "El rango mínimo de los Escorpiones se reduce",
  },
  saracens: {
    bonuses: [
      "La tarifa comercial del Mercado es solo del 5%; los Mercados cuestan -100 de madera",
      "Las unidades de camello tienen +25% de PV",
      "La línea de Galeras ataca +25% más rápido",
      "Los Barcos de Transporte tienen +100% de PV y +20 de capacidad de carga",
    ],
    teamBonus: "Los Arqueros a pie y los Escaramuzadores tienen +2 de ataque vs. edificios",
  },
  shu: {
    bonuses: [
      "Los leñadores generan comida además de madera",
      "Las tecnologías de unidades de arqueros en la Galería de Tiro y la Herrería cuestan -25%",
      "Las armas de asedio y los barcos de guerra de asedio se mueven +10/15% más rápido en Edad de los Castillos/Imperial",
    ],
    teamBonus: "Los arqueros a pie tienen +2 de alcance visual",
  },
  sicilians: {
    bonuses: [
      "Empiezan con +100 de piedra",
      "Las mejoras de granjas proporcionan +125% de comida adicional",
      "Los soldados reciben -40% de daño adicional",
      "Pueden construir Donjon en la Alta Edad Media, reemplaza la línea de Torres de Vigilancia",
      "Las fortificaciones se construyen +50% más rápido; los Centros Urbanos se construyen +100% más rápido",
    ],
    teamBonus: "Los Barcos de Transporte tienen +5 de alcance visual y cuestan -50%",
  },
  tatars: {
    bonuses: [
      "Los animales de granja duran +50% más",
      "Las unidades causan +25% de daño cuando combaten desde terreno elevado",
      "Los nuevos Centros Urbanos crean 2 Ovejas desde la Edad de los Castillos",
      "Anillo Pulgar y Tácticas Partas son gratuitos",
    ],
    teamBonus: "Los Arqueros Montados tienen +2 de alcance visual",
  },
  teutons: {
    bonuses: [
      "Las granjas cuestan -40%",
      "Los Centros Urbanos tienen +10 de capacidad de guarnición; las Torres tienen +5 de capacidad de guarnición",
      "Las unidades del Cuartel y del Establo tienen +1/+2 de armadura cuerpo a cuerpo en Edad de los Castillos/Imperial",
      "Los monjes tienen +100% de rango de curación",
      "Aspilleras y Medicina Herbal son gratuitas",
    ],
    teamBonus: "Las unidades son más resistentes a la conversión",
  },
  turks: {
    bonuses: [
      "Los mineros de oro trabajan +25% más rápido",
      "La línea de Caballería Exploradora tiene +1 de armadura perforante y sus mejoras son gratuitas",
      "Química es gratuita; las tecnologías de pólvora cuestan -50%",
      "Las unidades de pólvora tienen +25% de PV",
    ],
    teamBonus: "Las unidades de pólvora se entrenan +25% más rápido",
  },
  tupi: {
    bonuses: [
      "Empiezan con +25 de cada recurso",
      "Los aldeanos pueden guarnecer en asentamientos",
      "Las unidades caídas devuelven el 15% de su costo",
      "Las mejoras de Galería de Tiro y Cuartel cuestan -50% de comida",
    ],
    teamBonus: "Las Torres y Castillos proporcionan +10 de espacio de población",
  },
  vietnamese: {
    bonuses: [
      "Los Centros Urbanos enemigos se revelan al inicio de la partida",
      "Las mejoras económicas no cuestan madera y se investigan +100% más rápido",
      "Las unidades de Galería de Tiro y los Lanceros de Fuego tienen +20% de PV",
      "El Reclutamiento es gratuito",
    ],
    teamBonus: "La mejora de Escaramuzador Imperial disponible en la Edad Imperial",
  },
  vikings: {
    bonuses: [
      "La Carretilla y el Carrito de Mano son gratuitos",
      "La infantería tiene +20% de PV desde la Edad Feudal",
      "Los barcos de guerra cuestan -10/15/20% en Edad Feudal/Castillos/Imperial",
    ],
    teamBonus: "Los Muelles cuestan -15%",
  },
  wei: {
    bonuses: [
      "Reciben un aldeano gratis por cada mejora económica investigada",
      "La Caballería Hei Guang y el Xianbei Raider tienen +20/30% de PV en Edad de los Castillos/Imperial",
      "Los Trebuchets de Tracción y los Lou Chuans cuestan -25%",
    ],
    teamBonus: "La caballería tiene +2 de ataque vs. armas de asedio",
  },
  wu: {
    bonuses: [
      "Los edificios de producción militar y los Muelles proporcionan +55 de comida",
      "La infantería regenera 10/15/30 PV por minuto en Edad Feudal/Castillos/Imperial",
      "Los Espadachines Jian y la Caballería Hei Guang tienen +2 de ataque en la Edad Imperial",
      "Carenado y Dique Seco son gratuitos",
    ],
    teamBonus: "Las casas se construyen +100% más rápido",
  },
};

// ── Load locale/es.js, patch it, write back ───────────────────────────────────
// We load it as a module, patch the civs section in-memory, then regenerate.
// Strategy: eval the file with var instead of const, then mutate LOCALE_ES.civs[id].
const esFile = fs.readFileSync('D:/Practicas/AOE/locale/es.js', 'utf8');

// Eval to get the object
let LOCALE_ES;
eval(esFile.replace(/^'use strict';\s*/, '').replace('const LOCALE_ES', 'LOCALE_ES'));

// Patch each civ's bonuses and teamBonus
let patched = 0;
for (const [civId, data] of Object.entries(ES_BONUSES)) {
  if (!LOCALE_ES.civs[civId]) { console.warn('Missing civ:', civId); continue; }
  if (data.bonuses)   LOCALE_ES.civs[civId].bonuses   = data.bonuses;
  if (data.teamBonus !== undefined) LOCALE_ES.civs[civId].teamBonus = data.teamBonus;
  patched++;
}
console.log('Patched', patched, 'civs');

// ── Re-serialize the full locale file ─────────────────────────────────────────
// We do this by regenerating the civs section and splicing it back into the file.
// Reuse the serialize helper from gen_civs_locale pattern.
function serializeCivEntry(key, c) {
  const i2 = '    ';
  const i3 = '      ';
  const i4 = '        ';
  let out = `${i2}${key}: {\n`;
  const fields = Object.keys(c);
  fields.forEach((f, fi) => {
    const val = c[f];
    const comma = fi < fields.length - 1 ? ',' : '';
    if (f === 'bonuses') {
      out += `${i3}bonuses: [\n`;
      val.forEach((b, bi) => {
        out += `${i4}${JSON.stringify(b)}${bi < val.length - 1 ? ',' : ''}\n`;
      });
      out += `${i3}]${comma}\n`;
    } else if (f === 'uniqueTechs') {
      out += `${i3}uniqueTechs: [\n`;
      val.forEach((t, ti) => {
        out += `${i4}{ name: ${JSON.stringify(t.name)}, effect: ${JSON.stringify(t.effect)} }${ti < val.length - 1 ? ',' : ''}\n`;
      });
      out += `${i3}]${comma}\n`;
    } else if (f === 'uniqueUnits') {
      out += `${i3}uniqueUnits: [\n`;
      val.forEach((u, ui) => {
        let uStr = `{ name: ${JSON.stringify(u.name)}`;
        if (u.subtitle)    uStr += `, subtitle: ${JSON.stringify(u.subtitle)}`;
        if (u.upgradeName) uStr += `, upgradeName: ${JSON.stringify(u.upgradeName)}`;
        uStr += ' }';
        out += `${i4}${uStr}${ui < val.length - 1 ? ',' : ''}\n`;
      });
      out += `${i3}]${comma}\n`;
    } else if (val === null || val === undefined) {
      // skip nulls (teamBonus: null for generic)
      if (val === null) out += `${i3}${f}: null${comma}\n`;
    } else {
      out += `${i3}${f}: ${JSON.stringify(val)}${comma}\n`;
    }
  });
  out += `${i2}},\n`;
  return out;
}

const civKeys = Object.keys(LOCALE_ES.civs);
let civSection = `  civs: {\n`;
civKeys.forEach((key, ki) => {
  let entry = serializeCivEntry(key, LOCALE_ES.civs[key]);
  // Remove trailing comma from last entry
  if (ki === civKeys.length - 1) entry = entry.replace(/},\n$/, '}\n');
  civSection += entry;
});
civSection += `  },\n`;

// Splice into file: replace everything from '  civs: {' to end before '};\n'
const civsStart = esFile.indexOf('\n  civs: {');
const newContent = esFile.slice(0, civsStart + 1) + civSection + '};\n';
fs.writeFileSync('D:/Practicas/AOE/locale/es.js', newContent, 'utf8');

console.log('Written. Lines:', newContent.split('\n').length);

// Syntax check
try {
  new Function(newContent);
  console.log('Syntax: OK');
} catch(e) {
  console.error('Syntax ERROR:', e.message);
}
