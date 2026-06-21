/**
 * renderer.js - UI Rendering Logic
 */

const appContainer = document.getElementById('app-container');
const navLinks = document.querySelectorAll('.nav-link');

function renderApp() {
  const hash = window.location.hash.replace('#', '') || 'dashboard';
  state.currentView = hash;

  // Update active nav link
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + hash) {
      link.classList.add('text-blue-600', 'border-blue-600');
      link.classList.remove('border-transparent');
    } else {
      link.classList.remove('text-blue-600', 'border-blue-600');
      link.classList.add('border-transparent');
    }
  });

  switch (hash) {
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
    batchOptionsCache = ['All'].concat(
      Array.from(new Set(questions.map(function (q) { return q.batch; })))
    ).sort(function (a, b) { return b - a; });
  }

  appContainer.innerHTML = [
    '<div class="max-w-6xl mx-auto px-4 md:px-6 py-8">',
      '<div class="flex flex-col lg:flex-row gap-8">',

        // Left Sidebar: TOC
        '<aside class="explorer-sidebar lg:w-56 flex-shrink-0 lg:order-1">',
          '<div>',
            '<h2 class="text-2xl font-extrabold text-slate-900 mb-1">' + title + '</h2>',
            '<p id="result-count" class="text-slate-500 text-sm mb-6">' + filteredQuestions.length + ' questions found</p>',
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
            renderFilterDropdown('examNumber', 'Exam Number', getExamNumberOptions()),
            '<div>',
              '<label class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Section</label>',
              '<select data-filter="section" class="filter-select w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-2.5">',
                '<option value="All"' + (state.filters.section === 'All' ? ' selected' : '') + '>All Sections</option>',
                '<option value="A"' + (state.filters.section === 'A' ? ' selected' : '') + '>Section A (Diff)</option>',
                '<option value="B"' + (state.filters.section === 'B' ? ' selected' : '') + '>Section B (Int)</option>',
              '</select>',
            '</div>',
            '<div class="pt-4 border-t border-slate-100">',
              '<h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Special Functions</h3>',
              '<div class="space-y-2">',
                '<button class="quick-filter-btn w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all flex items-center gap-2" data-topic="Beta Function">',
                  '<span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Beta Function',
                '</button>',
                '<button class="quick-filter-btn w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all flex items-center gap-2" data-topic="Gamma Function">',
                  '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Gamma Function',
                '</button>',
                '<button class="quick-filter-btn w-full text-left px-3 py-2 text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all flex items-center gap-2" data-topic="Beta-Gamma Function">',
                  '<span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Beta-Gamma Questions',
                '</button>',
              '</div>',
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
          '<div class="text-lg font-medium text-slate-900 leading-relaxed">',
            '<span class="text-blue-600 font-bold mr-2">Q' + q.questionNumber + '.</span>',
            q.questionHtml,
          '</div>',
        '</div>',
        '<div class="flex flex-wrap gap-2 mb-8">',
          q.topics.map(function (t) {
            return '<span class="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">#' + t + '</span>';
          }).join(''),
        '</div>',
        '<div class="border-t border-slate-100 pt-6">',
          '<button class="toggle-solution-btn flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors" data-qid="' + q.id + '">',
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">',
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>',
            '</svg>',
            '<span>View Step-by-Step Solution</span>',
          '</button>',
          '<div id="sol-' + q.id + '" class="solution-container hidden mt-6 space-y-6"></div>',
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

function getExamNumberOptions() {
  if (!examNumberOptionsCache) {
    examNumberOptionsCache = ['All'].concat(
      Array.from(new Set(questions.map(function (q) { return q.examNumber; })))
        .filter(function (n) { return n !== null && n !== undefined; })
        .sort(function (a, b) { return a - b; })
    );
  }
  return examNumberOptionsCache;
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
function renderTopicsView() { applyFiltersAndRender(); }
function renderRepeatedView() { applyFiltersAndRender(); }
function renderRevisionView() { applyFiltersAndRender(); }
