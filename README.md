# Age of Empires II — Advanced Tech Tree Viewer

Visor web del árbol tecnológico de *Age of Empires II*, con datos por civilización
(unidades, edificios, tecnologías y estadísticas de juego) y soporte multi-idioma.
Reimplementación propia del renderizado y el layout sobre los datos e imágenes del juego.

🌐 **Demo en vivo:** https://aoe2-tech-tree-advanced.onrender.com/

## Características

- Árbol tecnológico interactivo por civilización con la **arquitectura del árbol del juego**:
  cada civ tiene su propia grilla por edificio, lo no disponible aparece tachado y las
  unidades regionales/únicas solo aparecen en las civs que las tienen.
- Al pasar el mouse sobre un nodo se resalta su ruta de requisitos.
- Estadísticas de juego por nodo (coste, HP, ataque, investigación…) y simulador de tecnologías.
- Localización (español / inglés) vía archivos de `public/src/locales/`.
- Layout y render propios (`public/src/layout.js`, `public/src/app.js`) — no depende del visor original.
- Actualizado a **Update 185872 — The Viking Sagas** (Daneses, Sajones, Varegos, Ballestero
  Montado, Guardia Varega, Drakkar regional).

Este visor es además la capa visual integrada en
[aoe2-codex](https://github.com/Reinack/aoe2-codex), donde el árbol se cablea a un grafo
Neo4j + GraphRAG.

## Estructura

```
public/             index.html, style.css, img/  (assets servidos)
  src/              Código fuente (layout.js, app.js, stats-panel.js, tech-sim.js, civ-panel.js, aoe-select.js)
    data/           Datos (nodes, units, tech_data, civ/ con los bonus de cada civ)
      civ_trees.js      ← generado: arquitectura y disponibilidad por civ
      upstream_nodes.js ← generado: nombre, icono, coste y stats base por nodo
    locales/        Traducciones
scripts/            Scripts de build de datos
docs/               GUIA-DE-ESTILO.md (principios visuales, tokens y componentes)
```

Cualquier cambio visual sigue la [guía de estilo](docs/GUIA-DE-ESTILO.md).

## Desarrollo

Levantá el servidor local con `node server.js` y abrí http://localhost:8000.

### Actualizar a un parche nuevo

1. Cloná o descargá [aoe2techtree](https://github.com/SiegeEngineers/aoe2techtree) en la versión
   del parche (necesita `data/trees/`, `data/data.json` y `data/locales/{es,en}/strings.json`).
2. Regenerá los datos del árbol:
   ```bash
   node scripts/build-civ-trees.mjs <ruta-a-aoe2techtree> <commit>
   ```
   Si aparece un nodo sin id del visor, agregalo a los mapas del script.
3. Ajustá a mano lo curado: bonus de civ (`public/src/data/civ/`), textos (`locales/`),
   stats (`units.js`) y efectos de tecnologías (`tech_data.js`).

## Atribuciones

- **Imágenes** y **datos del árbol** (arquitectura por civilización, unidades, edificios,
  tecnologías, costes y nombres oficiales) provienen del proyecto [aoe2techtree](https://github.com/SiegeEngineers/aoe2techtree)
  (SiegeEngineers), bajo licencia **MIT**. El layout y el renderizado de este repo son una
  implementación propia.
- *Age of Empires II*, sus imágenes, nombres y datos de juego son © **Microsoft Corporation**.
  Proyecto educativo / no comercial, sin afiliación ni respaldo de Microsoft.
- Código propio de este repositorio: licencia **MIT** (ver [`LICENSE`](LICENSE)).

## Licencia

[MIT](LICENSE) © Reinack
