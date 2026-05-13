# Age of Empires II Technology Tree Viewer

A web application for viewing Age of Empires 2 technology trees with civilization-specific data.

## Project Structure

- `src/` - Source code
  - `layout.js` - Layout computation functions
  - `tree.js` - Tree rendering and UI
  - `ui.js` - User interface handlers
  - `app.js` - Main application entry
  - `data/` - Data files
    - `index.js` - Main data exports
    - `ages.js` - Age definitions
    - `buildings.js` - Building definitions
    - `nodes.js` - Technology tree nodes
    - `units.js` - Unit statistics
    - `img_map.js` - Image mappings
    - `civ/` - Civilization definitions
  - `locales/` - Translation files
- `public/` - Public assets and built files
  - `index.html` - Main HTML file
  - `style.css` - Stylesheet
  - `img/` - Images
- `scripts/` - Build and utility scripts
- `ref/` - Reference data and original files

## Development

To run the application, open `public/index.html` in a web browser.

## Building

Run build scripts in `scripts/` to update data files.