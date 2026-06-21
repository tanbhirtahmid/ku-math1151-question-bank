/**
 * router.js - Hash-based Routing
 */

// Parse query params from hash, e.g. "#papers?batch=25&topic=Definite+Integration"
function parseHashParams() {
  var hash = window.location.hash.replace('#', '');
  var parts = hash.split('?');
  var view = parts[0] || 'dashboard';
  var params = {};
  if (parts.length > 1) {
    parts[1].split('&').forEach(function (pair) {
      var kv = pair.split('=');
      if (kv.length === 2) {
        params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1].replace(/\+/g, ' '));
      }
    });
  }
  return { view: view, params: params };
}

// Serialize current filters/state into a query string for the URL
function serializeFilterState(view) {
  var params = [];
  if (state.filters.discipline !== 'All') params.push('discipline=' + encodeURIComponent(state.filters.discipline));
  if (state.filters.batch !== 'All') params.push('batch=' + encodeURIComponent(state.filters.batch));
  if (state.filters.topic !== 'All') params.push('topic=' + encodeURIComponent(state.filters.topic));
  if (state.filters.difficulty !== 'All') params.push('difficulty=' + encodeURIComponent(state.filters.difficulty));
  if (state.filters.examType !== 'All') params.push('examType=' + encodeURIComponent(state.filters.examType));
  if (state.filters.examNumber !== 'All') params.push('examNumber=' + encodeURIComponent(state.filters.examNumber));
  if (state.filters.section !== 'All') params.push('section=' + encodeURIComponent(state.filters.section));
  if (state.searchQuery) params.push('search=' + encodeURIComponent(state.searchQuery));
  
  var base = view || state.currentView || 'papers';
  return params.length > 0 ? '#' + base + '?' + params.join('&') : '#' + base;
}

function applyHashParamsToState(params) {
  var filterable = ['discipline', 'batch', 'topic', 'difficulty', 'examType', 'examNumber', 'section'];
  filterable.forEach(function (key) {
    if (params[key] !== undefined) {
      state.filters[key] = params[key];
    }
  });
  if (params.search !== undefined) {
    state.searchQuery = params.search;
    var searchInput = document.getElementById('global-search');
    var mobileInput = document.getElementById('global-search-mobile-input');
    if (searchInput) searchInput.value = params.search;
    if (mobileInput) mobileInput.value = params.search;
  }
  if (params.q !== undefined) {
    state._deepLinkQid = params.q;
  }
}

window.addEventListener('hashchange', function () {
  var parsed = parseHashParams();
  // Only apply params if they're present; otherwise preserve current state
  if (Object.keys(parsed.params).length > 0) {
    applyHashParamsToState(parsed.params);
  }
  renderApp();
});
