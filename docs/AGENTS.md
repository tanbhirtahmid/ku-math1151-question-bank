# Calculus Question Bank Frontend - Technical Architecture

This directory details the modular frontend architecture of the Calculus Question Bank application.

## JavaScript Module Taxonomy

| Module | Location | Core Responsibility | Key State/Events |
| :--- | :--- | :--- | :--- |
| **`state.js`** | `js/state.js` | Source of truth for state objects, taxonomies, caches, and shared utilities. | `state.filters`, `state.searchQuery`, `solCache`, `tocHtmlCache` |
| **`router.js`** | `js/router.js` | Manages hash change events (`window.location.hash`) and triggers corresponding route renders. | `hashchange` event listener |
| **`toc.js`** | `js/toc.js` | Aggregates and builds hierarchical Table of Contents data without empty nodes. | `getTOC()`, `buildTOCData()`, `renderTOC()` |
| **`filters.js`** | `js/filters.js` | Combines global metadata fields and user selection logic to isolate matching question nodes. | `applyFiltersAndRender()` |
| **`search.js`** | `js/search.js` | Binds global search inputs to debounced lookups across question markup. | Input listener with `debounce` (300ms) |
| **`renderer.js`** | `js/renderer.js` | Handles view layouts, string interpolation for cards, stats computation, and MathJax integration. | `renderApp()`, `renderExplorer()`, `MathJax.typesetPromise()` |
| **`app.js`** | `js/app.js` | Initializes theme configurations and binds central delegated events across containers. | Central `DOMContentLoaded` event and delegation wireup |

## Architectural Flow & Data Integrity

1. **Bootstrap Phase**: `index.html` loads scripts sequentially. `app.js` catches `DOMContentLoaded`, sets active themes, and runs the initial `renderApp()` call.
2. **Navigation Phase**: User interactions change the hash or filter parameters. `router.js` captures `hashchange` and triggers `renderApp()`, while filter selections or TOC element clicks update the state object and fire `applyFiltersAndRender()`.
3. **Filter-Render Loop**: `applyFiltersAndRender()` computes matches from the full data array. It delegates UI assembly to `renderExplorer()`, which obtains cached or fresh TOC templates via `toc.js` before flushing updates to the view DOM and firing MathJax typesetting scopes.

Future feature enhancements should follow this structure strictly: updates to state variables or global static constants live in `state.js`, view rendering logic belongs to `renderer.js`, and specialized actions should reside in their isolated functional module.
