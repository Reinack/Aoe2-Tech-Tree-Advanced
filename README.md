# Age of Empires II — Advanced Tech Tree Viewer

Visor web del árbol tecnológico de *Age of Empires II*, con datos por civilización
(unidades, edificios, tecnologías y estadísticas de juego) y soporte multi-idioma.
Reimplementación propia del renderizado y el layout sobre los datos e imágenes del juego.

🌐 **Demo en vivo:** https://aoe2-tech-tree-advanced.onrender.com/

## Características

- Árbol tecnológico interactivo por civilización (unidades, edificios y tecnologías).
- Estadísticas de juego por nodo (coste, HP, ataque, investigación…).
- Localización (varios idiomas) vía archivos de `locales/`.
- Layout y render propios (`src/layout.js`, `src/tree.js`) — no depende del visor original.

Este visor es además la capa visual integrada en
[aoe2-codex](https://github.com/Reinack/aoe2-codex), donde el árbol se cablea a un grafo
Neo4j + GraphRAG.

## Estructura

```
src/        Código fuente (layout.js, tree.js, ui.js, app.js)
  data/     Datos del árbol (ages, buildings, nodes, units, civ/)
  locales/  Traducciones
public/     index.html, style.css, img/  (assets servidos)
scripts/    Scripts de build de datos
```

## Desarrollo

Abrí `public/index.html` en el navegador. Los scripts de `scripts/` regeneran los
archivos de datos.

## Atribuciones

- **Imágenes** y **datos del árbol** (unidades, edificios, tecnologías, localización)
  provienen del proyecto [aoe2techtree](https://github.com/SiegeEngineers/aoe2techtree)
  (SiegeEngineers), bajo licencia **MIT**. El layout y el renderizado de este repo son una
  implementación propia.
- *Age of Empires II*, sus imágenes, nombres y datos de juego son © **Microsoft Corporation**.
  Proyecto educativo / no comercial, sin afiliación ni respaldo de Microsoft.
- Código propio de este repositorio: licencia **MIT** (ver [`LICENSE`](LICENSE)).

## Licencia

[MIT](LICENSE) © Reinack
