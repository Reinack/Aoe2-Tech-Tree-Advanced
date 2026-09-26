# Guía de estilo visual

> La interfaz tiene que parecer **un objeto histórico digitalizado**, no una
> aplicación moderna a la que le pegaron pergaminos.

Esta guía es la referencia para cualquier cambio visual del visor. Los valores
viven como tokens en `public/style.css` (`:root`); si un valor cambia allá, se
actualiza acá.

---

## 1. Principios

1. **Fondos oscuros y terrosos.** El fondo general es madera oscura, nunca negro
   plano ni gris.
2. **Pergamino para el contenido histórico.** Ficha de la civ, lámina del árbol,
   datos del panel, leyenda y unidades relevantes.
3. **Rojo profundo para acciones.** Botones y cualquier cosa que se pueda
   accionar (hover, ruta de requisitos).
4. **Oro para jerarquía y selección.** Títulos de diálogo, filetes de marco y lo
   seleccionado o fijado.
5. **Serif clásica para títulos.** Cinzel.
6. **Nada de esquinas redondeadas modernas.** `border-radius: 0` siempre. La única
   excepción es el sello circular de la civ, porque es un sello.
7. **Ilustraciones tipo grabado, no fantasy digital.** Se usan ornamentos de
   imprenta: filetes, rombos, rayado.
8. **Transparencia para conectar fondo e interfaz.** El tooltip es traslúcido y
   los nodos dejan ver apenas el papel.
9. **Texturas sutiles en lugar de superficies perfectamente limpias.** La madera
   tiene veta y el pergamino tiene manchas y bordes quemados.
10. **El oro debe ser escaso.** Sólo hilos finos y letras. Nunca rellenos ni
    resplandores grandes.

### Referencias

Las referencias son las pantallas del menú de *AoE2 DE*:

| Pantalla | Qué tomamos |
|---|---|
| Menú principal | Botones rojo profundo con filete dorado y letra romana |
| **Fila con clasificación** | Fondo de tablones de madera oscura; pergamino con bordes gastados; desplegables de papiro |
| **Elegir civilización** | Diálogo negro liso con marco dorado y arcos en las esquinas; casillas de ícono con rótulo en franja roja |
| Desplegable de civilización | Papiro, escudo de la civ antes del nombre, ítem actual en rojo, barra de desplazamiento de acero |
| Árbol del juego | Sólo como guía parcial (lámina, bandas por edad). No se copia tal cual |

---

## 2. Superficies

Hay cuatro superficies y cada una tiene un solo uso.

| Superficie | Token | Uso |
|---|---|---|
| **Madera** | `--wood` | Fondo global (`body`) y cabeceras que deben fundirse con él (`#extra-header`, con `background-attachment: fixed` para alinear la veta) |
| **Pergamino** | `--parchment` + `--burnt-edge` | Contenido: ficha de la civ, lámina del árbol, hoja del panel de stats, leyenda, unidades relevantes |
| **Papiro** | `--papyrus` | Controles de formulario: los desplegables |
| **Negro de diálogo** | `--dialog-black` | Panel de stats (marco) y simulador. El tooltip usa el mismo negro al 80% |

**Prohibido:** grano, ruido o textura "piedra/papiro" sobre superficies oscuras.
Se probó y dificulta la lectura (tooltip, simulador, fondo global). Las superficies
oscuras son lisas; la textura va en la madera y el pergamino.

### Pergamino

- Es la imagen de papel (`--paper`) con un velo claro, manchas (`--stain`) y
  bordes quemados (`--burnt-edge`, sombras internas marrones).
- Siempre lleva un filete dorado fino (`1px solid var(--gold-line)`) y un borde
  oscuro exterior (`0 0 0 1px #0b0603`), como las ilustraciones enmarcadas del
  menú.
- La **lámina del árbol** se dibuja dentro del SVG (`render()` en
  `src/app.js`). Lleva:
  - una sombra;
  - la textura de papel en su tamaño natural (1060×145);
  - degradés de borde quemado (`burn-x`, `burn-y`);
  - bandas de edad alternas con doble filete;
  - un margen izquierdo con rayado de grabado (`#hatch`).

---

## 3. Color

### Tokens

| Token | Valor | Uso |
|---|---|---|
| `--ink-900` | `#22150b` | Texto principal sobre pergamino |
| `--ink-700` | `#4b331c` | Texto secundario, títulos de sección |
| `--ink-500` | `#6f5234` | Subtextos, etiquetas en versalitas |
| `--rule` / `--rule-soft` | tinta al 42% / 20% | Filetes sobre pergamino |
| `--on-dark` | `#e4d4b0` | Texto sobre madera o negro |
| `--on-dark-dim` | `#c2ab84` | Subtextos sobre oscuro (no bajar de este valor: legibilidad) |
| `--hair` | crema al 16% | Filetes sobre oscuro |
| `--red-600` / `--red-500` / `--red-400` | `#6e100c` / `#8a1812` / `#a8261b` | Acciones y hover |
| `--gold` | `#c69b45` | Filetes de marco, selección |
| `--gold-hi` | `#ecd08a` | Contorno del nodo seleccionado o fijado |
| `--gold-text` | `#eed59a` | Título del diálogo, edad activa del simulador |
| `--btn-text` | `#f1e2c4` | Letra de los botones rojos (crema, no oro) |
| `--papyrus-text` | `#3a1c0e` | Texto de los desplegables |
| `--good` / `--bad` | `#3d6b17` / `#9b2b1a` | Deltas de stats (mejora / empeora) |

### Semántica de estados

| Estado | Tratamiento |
|---|---|
| **Hover / acción** | Rojo. Filete rojo en el nodo, ruta de requisitos en tinta roja, marca roja a la izquierda en la ficha |
| **Seleccionado / fijado** | Oro. Contorno `--gold-hi` en el nodo, filete dorado a la izquierda en la ficha, borde dorado en casillas del simulador |
| **Ítem actual en una lista de papiro** | Rojo (`--red-500`), como en el juego: el oro no se lee sobre papiro |
| **No disponible** | Nodo desaturado, velo oscuro y cruz; líneas punteadas y tenues |
| **Deshabilitado** | Opacidad 0,55 |
| **Foco de teclado** | `outline: 2px` crema (`--parch-100`) sobre oscuro; rojo sobre pergamino |

### Nodos del árbol: pigmentos

Mantienen las familias de color del juego (unidades azules, tecnologías verdes,
edificios rojos), en tonos de pigmento histórico. Son una aguada al 93% con
contorno de tinta.

| | Común | Regional | Único |
|---|---|---|---|
| Unidad | `--unit-c` `#2a5d86` | `--unit-r` `#43437a` | `--unit-u` `#5d2a63` |
| Tecnología | `--tech-c` `#2e6a45` | `--tech-r` `#53682a` | `--tech-u` `#83551d` |
| Edificio | `--bld-c` `#7b3a22` | `--bld-r` `#8a2a1b` | `--bld-u` `#792243` |

La leyenda de la barra lateral usa los mismos tokens.

---

## 4. Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Títulos, botones, rótulos de sección | **Cinzel** 700 | Capitales romanas. Títulos de sección con `letter-spacing` ≈ 1,5px entre filetes |
| Texto, etiquetas de nodo, desplegables | **Crimson Pro** 400/600/700 | Etiquetas de coste/stats en versalitas (`font-variant: small-caps`) |
| Números en contadores | Crimson Pro 700, `lining-nums` | Cinzel no se usa para números: su "11" se lee "II" |

- Ambas fuentes se cargan de Google Fonts en `index.html`.
- Las etiquetas de los nodos se miden con `canvas.measureText` (`wrapLabel` en
  `src/app.js`). Si se cambia la fuente o el peso, hay que cambiar `LABEL_FONT` y
  la medición.

---

## 5. Componentes

### Botón de acción (`.aoe-btn`, `.aoe-close`, `.aoe-square`, `.sp-sim-toggle`)
- Degradé rojo profundo liso (sin grano), filete dorado de 1px, borde exterior
  casi negro y sombra interna.
- Letra Cinzel en crema (`--btn-text`).
- El estado "abierto/activo" suma un doble filete dorado interno.

### Desplegable de papiro (`src/aoe-select.js` + `.aoe-select*`)
- Envuelve un `<select>` nativo, que sigue siendo la fuente de verdad (`value` y
  el evento `change`).
- Se usa en el selector de civilización, el de idioma y el de aliados del
  simulador.
- **Botón:**
  - papiro;
  - ícono opcional (escudo de la civ);
  - nombre en Crimson Pro 700;
  - flecha en un botón de acero (la misma pieza de la barra de desplazamiento).
- **Lista:**
  - papiro con posición fija, así ningún panel la recorta;
  - se abre hacia arriba si abajo no hay lugar;
  - el ítem actual va en rojo y el ítem bajo el cursor en una banda más oscura;
  - `data-sub` en la `<option>` agrega una segunda línea en itálica (el bono de
    equipo del aliado).
- **Teclado:** flechas, Inicio/Fin, RePág/AvPág, Enter/Espacio, Escape y búsqueda
  tipeando las primeras letras.

### Barra de desplazamiento (global, `::-webkit-scrollbar`)
- Riel oscuro.
- Botones de acero con flecha (`--sb-up`, `--sb-down`).
- Pulgar de acero con un ornamento de estrella de cuatro puntas (`--sb-knob`).
- **Importante:** no usar `scrollbar-width` ni `scrollbar-color`, porque Chrome
  ignora `::-webkit-scrollbar` si están. Firefox recibe sólo los colores dentro
  de `@supports not selector(::-webkit-scrollbar)`.

### Tooltip (`#tooltip`)
- Negro liso al 80%, sin textura.
- Filete crema tenue y sombra de texto para leerse sobre el pergamino.
- Nombre en Cinzel; edad y tipo en versalitas.
- Abajo a la derecha lleva una pista chiquita en itálica:
  - "Click para simular" si el panel va a mostrar el simulador;
  - si no, "Click para ver detalles" (`canSimulate()` en `src/tech-sim.js`).

### Panel de stats (`#stats-panel`)
- **Marco:** diálogo de "Elegir civilización". Negro liso, filete dorado, arcos
  dorados en las cuatro esquinas y título en oro (`--gold-text`) sobre un filete
  dorado que se desvanece.
- **Hoja (`.sp-sheet`):** los datos van sobre pergamino. Los stats se ven como
  un libro de cuentas: casillas separadas por filetes de tinta, sin cajas. Una
  mejora se marca con fondo verde tenue y una barra verde.
- **Simulador:**
  - queda sobre el negro;
  - las edades son casillas como las de civilización: emblema en color sobre
    negro y rótulo en una franja roja, con la activa enmarcada en oro;
  - las tecnologías se ven con color parcial cuando están apagadas y con borde
    dorado y ✓ cuando están activas;
  - debajo de las tecnologías, la lista **"Otros efectos (no numéricos)"**
    (`#sp-sim-notes`) muestra el texto de cada tecnología activa cuyo efecto no
    cambia los números del panel (regeneración, conversión, daño de área…). Va
    dentro de un recuadro con filete crema tenue, el título en Cinzel y viñetas
    en rombo dorado.

### Ficha de la civ (`#civ-info`)
- Hoja de pergamino sobre la madera.
- Nombre en Cinzel; tipo en itálica con un filete engrosado de imprenta y un
  rombo central (`--ornament`).
- Viñetas en rombo de tinta.
- Bono de equipo en un recuadro de doble filete, como una nota al margen.
- Los ítems vinculados al árbol siguen la semántica de estados: hover en rojo,
  fijado o seleccionado en oro. El contador de nodos va en un recuadro de tinta.

### Leyenda + idioma (`#legend`)
- Recuadro de pergamino con la grilla de colores de nodo.
- Debajo, separado por un filete, va el desplegable de idioma.

### Emblemas de edad
- **En la lámina:** conservan el color, apenas envejecidos
  (`sepia(.25) saturate(.85)`), con `mix-blend-mode: multiply` para que parezcan
  impresos.
- **En el simulador:** apagados a medio color (`saturate(.55)`) y a color pleno
  en hover o cuando están activos.

---

## 6. Ornamentos

- **Filete engrosado con rombo** (`--ornament`): separa el título de la ficha.
- **Títulos de sección entre filetes** que se desvanecen hacia afuera.
- **Doble filete** entre edades en la lámina y en el recuadro del bono de equipo.
- **Rayado de grabado** en el margen de las edades (patrón SVG a 45°).
- **Arcos dorados en las esquinas** de los diálogos (degradés radiales de 1px).

---

## 7. Checklist para cambios nuevos

- [ ] ¿La superficie es la correcta? (madera = fondo, pergamino = contenido,
      papiro = control, negro = diálogo o tooltip)
- [ ] ¿Sin grano ni textura sobre oscuro?
- [ ] ¿Esquinas rectas?
- [ ] ¿El oro aparece sólo como hilo, letra o selección?
- [ ] ¿Las acciones son rojas y la selección dorada?
- [ ] ¿Títulos en Cinzel y texto en Crimson Pro? ¿Números fuera de Cinzel?
- [ ] ¿Los subtextos sobre oscuro usan al menos `--on-dark-dim`?
- [ ] ¿Funciona con teclado y tiene `:focus-visible`?
- [ ] ¿Se probó en español e inglés (los textos cambian de largo)?
