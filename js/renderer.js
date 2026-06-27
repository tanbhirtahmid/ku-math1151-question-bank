/**
 * renderer.js - UI Rendering Logic
 */

const appContainer = document.getElementById('app-container');
const navLinks = document.querySelectorAll('.nav-link');

function renderApp() {
  var parsed = parseHashParams();
  var view = parsed.view || 'dashboard';
  state.currentView = view;

  // Update active nav link
  navLinks.forEach(function (link) {
    var linkView = link.getAttribute('href').replace('#', '').split('?')[0];
    if (linkView === view) {
      link.classList.add('text-blue-600', 'border-blue-600');
      link.classList.remove('border-transparent');
    } else {
      link.classList.remove('text-blue-600', 'border-blue-600');
      link.classList.add('border-transparent');
    }
  });

  // Deep-link to a specific question (auto-expand its solution)
  state._shouldAutoExpand = state._deepLinkQid || parsed.params.q;

  switch (view) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'papers':
      renderPapersView();
      break;
    case 'topics':
      renderTopicsView();
      break;
    case 'repeated':
      renderRepeatedView();
      break;
    case 'revision':
      renderRevisionView();
      break;
    default:
      renderDashboard();
  }

  window.scrollTo(0, 0);
}

function renderDashboard() {
  const stats = {
    total: questions.length,
    batches: new Set(questions.map(q => q.batch)).size,
    topics: new Set(questions.flatMap(q => q.topics)).size,
    cse: questions.filter(q => q.discipline === 'CSE').length,
    ece: questions.filter(q => q.discipline === 'ECE').length
  };

  appContainer.innerHTML = [
    '<div class="max-w-6xl mx-auto px-6 py-10">',
      '<section class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">',
        renderStatCard('Total Questions', stats.total, 'blue'),
        renderStatCard('Batches', stats.batches, 'emerald'),
        renderStatCard('Topics', stats.topics, 'indigo'),
        renderStatCard('CSE Problems', stats.cse, 'slate'),
        renderStatCard('ECE Problems', stats.ece, 'slate'),
      '</section>',
      '<section class="grid grid-cols-1 md:grid-cols-2 gap-6">',
        renderNavCard('Browse by Topic', 'Explore questions categorized by mathematical concepts.', '#topics', 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'),
        renderNavCard('Browse by Paper', 'Find questions from specific years, exams, and batches.', '#papers', 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'),
        renderNavCard('Repeated Questions', 'Focus on problems that appeared in multiple examinations.', '#repeated', 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'),
        renderNavCard('Revision Mode', 'Hand-picked problems for quick last-minute preparation.', '#revision', 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'),
      '</section>',
    '</div>',
  ].join('');
}

function renderStatCard(label, value, color) {
  var colors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    slate: 'bg-slate-100 text-slate-700 border-slate-200'
  };
  return [
    '<div class="p-4 rounded-2xl border ' + (colors[color] || colors.slate) + ' text-center">',
      '<div class="text-2xl font-bold">' + value + '</div>',
      '<div class="text-xs uppercase tracking-wider font-semibold opacity-70">' + label + '</div>',
    '</div>',
  ].join('');
}

function renderNavCard(title, desc, link, iconPath) {
  return [
    '<a href="' + link + '" class="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex items-start gap-6">',
      '<div class="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">',
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">',
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="' + iconPath + '" />',
        '</svg>',
      '</div>',
      '<div>',
        '<h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700">' + title + '</h3>',
        '<p class="text-slate-500 text-sm leading-relaxed">' + desc + '</p>',
      '</div>',
    '</a>',
  ].join('');
}

function renderExplorer(filteredQuestions, title) {
  solCache = {};

  var tocHtml = getTOC();
  if (!batchOptionsCache) {
    var batches = Array.from(new Set(questions.map(function (q) { return q.batch; })));
    batches.sort(function (a, b) { return b - a; });
    batchOptionsCache = ['All'].concat(batches);
  }

  appContainer.innerHTML = [
    '<div class="max-w-6xl mx-auto px-4 md:px-6 py-8">',
      '<div class="flex flex-col lg:flex-row gap-8">',

        // Left Sidebar: TOC
        '<aside class="explorer-sidebar lg:w-56 flex-shrink-0 lg:order-1">',
          '<div>',
            (state.currentView === 'topics' && state._fromTopicCard
              ? '<button id="back-to-all-topics" class="mb-3 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg> All Topics</button>'
              : ''),
            '<h2 class="text-2xl font-extrabold text-slate-900 mb-1">' + title + '</h2>',
            '<p id="result-count" class="text-slate-500 text-sm mb-3">' + filteredQuestions.length + ' questions found</p>',
            renderFilterChips(),
          '</div>',
          '<div class="toc-wrapper">',
            '<button id="toc-mobile-toggle" class="toc-mobile-toggle" aria-label="Toggle table of contents"><span>Table of Contents</span></button>',
            '<div class="toc-container bg-white rounded-2xl border border-slate-200 shadow-sm">',
              '<div class="toc-header hidden lg:block px-6 py-3 border-b border-slate-100">',
                '<h3 class="text-xs font-bold uppercase tracking-widest text-slate-400">Table of Contents</h3>',
              '</div>',
              '<div class="p-2">' + tocHtml + '</div>',
            '</div>',
          '</div>',
        '</aside>',

        // Right Sidebar: Filters
        '<aside class="explorer-sidebar lg:w-56 flex-shrink-0 lg:order-3">',
          '<div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">',
            '<h3 class="text-xs font-bold uppercase tracking-widest text-slate-400">Filters</h3>',
            renderFilterDropdown('discipline', 'Discipline', ['All', 'CSE', 'ECE']),
            renderFilterDropdown('batch', 'Batch', batchOptionsCache),
            renderFilterDropdown('topic', 'Topic', ['All'].concat(topicTaxonomy)),
            renderFilterDropdown('difficulty', 'Difficulty', ['All', 'Easy', 'Medium', 'Hard']),
            renderFilterDropdown('examType', 'Exam Type', ['All', 'CT', 'Term Final']),
            (state.filters.examType === 'Term Final'
              ? '<div><label class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Exam Number</label><div class="text-xs text-slate-400 italic px-2.5 py-2.5">N/A for Term Finals</div></div>'
              : renderFilterDropdown('examNumber', 'Exam Number', getExamNumberOptions(state.filters.examType))),
            '<div>',
              '<label class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Section</label>',
              '<select data-filter="section" class="filter-select w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-2.5">',
                '<option value="All"' + (state.filters.section === 'All' ? ' selected' : '') + '>All Sections</option>',
                '<option value="A"' + (state.filters.section === 'A' ? ' selected' : '') + '>Section A (Diff)</option>',
                '<option value="B"' + (state.filters.section === 'B' ? ' selected' : '') + '>Section B (Int)</option>',
              '</select>',
            '</div>',
            '<button id="clear-filters" class="w-full py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Clear Filters</button>',
          '</div>',
        '</aside>',

        // Center: Questions
        '<main id="questions-area" class="flex-grow space-y-6 min-w-0 lg:order-2">',
          filteredQuestions.length > 0
            ? filteredQuestions.map(function (q) { return renderQuestionCard(q); }).join('')
            : renderEmptyState(),
        '</main>',

      '</div>',
    '</div>',
  ].join('');

  // MathJax: typeset only the questions area (avoids re-typesetting sidebar/nav/footer)
  var questionsArea = document.getElementById('questions-area');
  if (questionsArea && window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([questionsArea]);
  }
}

function renderQuestionCard(q) {
  var difficultyColors = {
    'Easy': 'bg-emerald-100 text-emerald-700',
    'Medium': 'bg-amber-100 text-amber-700',
    'Hard': 'bg-rose-100 text-rose-700'
  };

  // Store solution/finalAnswer in cache for lazy loading
  solCache[q.id] = {
    solutionHtml: q.solutionHtml,
    finalAnswerHtml: q.finalAnswerHtml
  };

  return [
    '<article class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">',
      '<div class="p-6 md:p-8">',
        '<div class="flex flex-wrap items-center gap-2 mb-6">',
          '<span class="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">' + q.discipline + ' ' + q.batch + '</span>',
          '<span class="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">' + q.examType + ' ' + (q.examNumber || '') + ' (Sec ' + q.section + ')</span>',
          '<span class="px-3 py-1 ' + (difficultyColors[q.difficulty] || 'bg-slate-100 text-slate-600') + ' text-[10px] font-bold uppercase tracking-wider rounded-full">' + q.difficulty + '</span>',
          '<span class="ml-auto text-slate-400 text-xs font-medium">#' + q.id + '</span>',
        '</div>',
        '<div class="prose prose-slate max-w-none mb-8">',
          '<div class="question-text text-lg font-medium text-slate-900 leading-relaxed">',
            '<span class="text-blue-600 font-bold mr-2">Q' + q.questionNumber + '.</span>',
            q.questionHtml,
          '</div>',
        '</div>',
        '<div class="flex flex-wrap gap-2 mb-6">',
          q.topics.map(function (t) {
            return '<span class="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">#' + t + '</span>';
          }).join(''),
        '</div>',
        // Repeat-linking: show appearance IDs if frequency > 1
        (q.frequency > 1 && q.appearances && q.appearances.length > 0
          ? '<div class="mb-6 flex flex-wrap items-center gap-1.5 text-xs"><span class="font-semibold text-amber-600">Also appeared in:</span> ' +
            q.appearances.map(function (aid) {
              return '<a href="#papers?q=' + aid + '" class="inline-block px-2 py-0.5 bg-amber-50 text-amber-700 rounded-md border border-amber-200 hover:bg-amber-100 transition-colors font-mono">' + aid + '</a>';
            }).join('') +
            '</div>'
          : ''),
        '<div class="border-t border-slate-100 pt-6 flex flex-wrap items-center justify-between gap-3">',
          '<button class="toggle-solution-btn flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors" data-qid="' + q.id + '">',
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">',
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>',
            '</svg>',
            '<span>View Step-by-Step Solution</span>',
          '</button>',
          '<button class="copy-link-btn flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-blue-600 transition-colors" data-qid="' + q.id + '" title="Copy link to this question">',
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">',
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>',
            '</svg>',
            '<span>Copy link</span>',
          '</button>',
          '<div id="sol-' + q.id + '" class="solution-container hidden mt-6 w-full space-y-6"></div>',
        '</div>',
      '</div>',
    '</article>',
  ].join('');
}

function renderEmptyState() {
  return [
    '<div class="bg-white rounded-3xl border border-dashed border-slate-300 p-20 text-center">',
      '<div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-400 mb-4">',
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">',
          '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>',
        '</svg>',
      '</div>',
      '<h3 class="text-xl font-bold text-slate-900 mb-2">No matching questions</h3>',
      '<p class="text-slate-500 max-w-xs mx-auto">Try adjusting your filters or search query to find what you\'re looking for.</p>',
    '</div>',
  ].join('');
}

function renderFilterChips() {
  var chips = [];
  var labelMap = {
    discipline: 'Discipline',
    batch: 'Batch',
    topic: 'Topic',
    difficulty: 'Difficulty',
    examType: 'Exam Type',
    examNumber: 'Exam #',
    section: 'Section'
  };

  Object.keys(state.filters).forEach(function (key) {
    var val = state.filters[key];
    if (val !== 'All' && val !== '' && val !== null && val !== undefined) {
      chips.push({
        label: (labelMap[key] || key) + ': ' + val,
        filterKey: key,
        filterVal: val
      });
    }
  });

  if (state.searchQuery) {
    chips.push({
      label: 'Search: "' + state.searchQuery + '"',
      filterKey: 'search',
      filterVal: state.searchQuery
    });
  }

  if (chips.length === 0) return '';

  return '<div class="flex flex-wrap gap-1.5 mb-4">' +
    chips.map(function (chip) {
      return '<button class="filter-chip inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors" data-filter-key="' + chip.filterKey + '" data-filter-val="' + chip.filterVal + '">' +
        chip.label +
        '<svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>' +
        '</button>';
    }).join('') +
    '</div>';
}

function getExamNumberOptions(examType) {
  // Filter exam numbers based on current examType
  var filtered = questions;
  if (examType && examType !== 'All') {
    filtered = questions.filter(function (q) { return q.examType === examType; });
  }
  return ['All'].concat(
    Array.from(new Set(filtered.map(function (q) { return q.examNumber; })))
      .filter(function (n) { return n !== null && n !== undefined; })
      .sort(function (a, b) { return a - b; })
  );
}

function renderFilterDropdown(key, label, options) {
  var current = state.filters[key];
  var opts = options.map(function (opt) {
    return '<option value="' + opt + '"' + (current == opt ? ' selected' : '') + '>' + opt + '</option>';
  }).join('');
  return [
    '<div>',
      '<label class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">' + label + '</label>',
      '<select data-filter="' + key + '" class="filter-select w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-2.5">' + opts + '</select>',
    '</div>',
  ].join('');
}

function renderPapersView() { applyFiltersAndRender(); }

function renderTopicsView() {
  if (state.filters.topic !== 'All') {
    // Filtered by a topic: render explorer with a back button
    state._fromTopicCard = true;
    applyFiltersAndRender();
    return;
  }
  state._fromTopicCard = false;
  renderTopicGrid();
}

function renderTopicGrid() {
  // Compute topic stats
  var topicData = {};
  questions.forEach(function (q) {
    q.topics.forEach(function (t) {
      if (!topicData[t]) {
        topicData[t] = { total: 0, Easy: 0, Medium: 0, Hard: 0 };
      }
      topicData[t].total++;
      topicData[t][q.difficulty]++;
    });
  });

  // Sort by count descending
  var sortedTopics = Object.keys(topicData).sort(function (a, b) {
    return topicData[b].total - topicData[a].total;
  });

  var maxCount = sortedTopics.length > 0 ? topicData[sortedTopics[0]].total : 1;

  var cardsHtml = sortedTopics.map(function (topic) {
    var data = topicData[topic];
    // Opacity based on density relative to max
    var ratio = data.total / maxCount;
    var opacityClass = ratio < 0.05 ? 'opacity-40' : ratio < 0.15 ? 'opacity-65' : ratio < 0.3 ? 'opacity-85' : '';
    
    return [
      '<div class="topic-card cursor-pointer bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all p-5 ' + opacityClass + '" data-topic="' + topic.replace(/"/g, '&quot;') + '">',
        '<h3 class="text-base font-bold text-slate-900 mb-2 line-clamp-2">' + topic + '</h3>',
        '<div class="text-2xl font-extrabold text-blue-600 mb-3">' + data.total + '</div>',
        '<div class="flex flex-wrap gap-1.5 text-xs">',
          data.Easy > 0 ? '<span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">' + data.Easy + ' Easy</span>' : '',
          data.Medium > 0 ? '<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-medium">' + data.Medium + ' Med</span>' : '',
          data.Hard > 0 ? '<span class="px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full font-medium">' + data.Hard + ' Hard</span>' : '',
        '</div>',
      '</div>',
    ].join('');
  }).join('');

  appContainer.innerHTML = [
    '<div class="max-w-6xl mx-auto px-4 md:px-6 py-8">',
      '<div class="mb-8">',
        '<h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Topic Explorer</h2>',
        '<p class="text-slate-500 text-sm mt-1">' + sortedTopics.length + ' topics &mdash; click a card to browse its questions</p>',
      '</div>',
      '<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">',
        cardsHtml,
      '</div>',
    '</div>',
  ].join('');
}

function renderRepeatedView() { applyFiltersAndRender(); }
function renderRevisionView() { applyFiltersAndRender(); }
