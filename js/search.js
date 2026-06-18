/**
 * search.js - Search Functionality
 */

const globalSearchInput = document.getElementById('global-search');

globalSearchInput.addEventListener('input', debounce(function (e) {
  state.searchQuery = e.target.value;
  if (state.currentView === 'dashboard') {
    window.location.hash = '#papers';
    return;
  }
  applyFiltersAndRender();
}, 300));
