/**
 * filters.js - Filtering Logic
 */

function applyFiltersAndRender() {
  var filtered = questions.filter(function (q) {
    var dMatch = state.filters.discipline === 'All' || q.discipline === state.filters.discipline;
    var bMatch = state.filters.batch === 'All' || q.batch.toString() === state.filters.batch.toString();
    var tMatch = state.filters.topic === 'All' || q.topics.indexOf(state.filters.topic) !== -1;
    var diffMatch = state.filters.difficulty === 'All' || q.difficulty === state.filters.difficulty;
    var etMatch = state.filters.examType === 'All' || q.examType === state.filters.examType;
    
    // Fix: Handle null examNumber and compare safely
    var enMatch = state.filters.examNumber === 'All' || !state.filters.examNumber ||
      (q.examNumber !== null && q.examNumber !== undefined && q.examNumber.toString() === state.filters.examNumber.toString());

    // Fix: Added section matching
    var secMatch = state.filters.section === 'All' || q.section === state.filters.section;

    var query = state.searchQuery.toLowerCase();
    var sMatch = !query ||
      q.questionHtml.toLowerCase().indexOf(query) !== -1 ||
      q.topics.some(function (t) { return t.toLowerCase().indexOf(query) !== -1; }) ||
      q.id.toLowerCase().indexOf(query) !== -1;

    return dMatch && bMatch && tMatch && diffMatch && etMatch && enMatch && secMatch && sMatch;
  });

  if (state.currentView === 'repeated') {
    filtered = filtered.filter(function (q) { return q.frequency > 1; });
  } else if (state.currentView === 'revision') {
    var revisionTags = ["last-minute", "top-integration", "essential"];
    filtered = filtered.filter(function (q) {
      return q.tags && q.tags.some(function (tag) { return revisionTags.indexOf(tag) !== -1; });
    });
  }

  var titleMap = {
    'papers': 'Question Papers',
    'topics': 'Topic Explorer',
    'repeated': 'Repeated Questions',
    'revision': 'Revision Mode'
  };

  renderExplorer(filtered, titleMap[state.currentView] || 'Explorer');
}
