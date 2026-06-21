/**
 * search.js - Search Functionality
 */

const globalSearchInput = document.getElementById('global-search');
const globalSearchMobileInput = document.getElementById('global-search-mobile-input');

function onSearchInput(e) {
  state.searchQuery = e.target.value;
  // Sync the other input
  if (e.target === globalSearchInput && globalSearchMobileInput) {
    globalSearchMobileInput.value = e.target.value;
  } else if (globalSearchInput) {
    globalSearchInput.value = e.target.value;
  }
  if (state.currentView === 'dashboard') {
    window.location.hash = '#papers';
    return;
  }
  applyFiltersAndRender();
}

globalSearchInput.addEventListener('input', debounce(onSearchInput, 300));

if (globalSearchMobileInput) {
  globalSearchMobileInput.addEventListener('input', debounce(onSearchInput, 300));
}
