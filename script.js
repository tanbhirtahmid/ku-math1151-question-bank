/**
 * Calculus Question Bank - Dynamic Script
 * Handles state, routing, rendering, and interaction.
 */

document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Core State ---
  const state = {
    currentView: 'dashboard',
    filters: {
      discipline: 'All',
      topic: 'All',
      difficulty: 'All',
      batch: 'All',
      examType: 'All',
      examNumber: 'All',
      section: 'All'
    },
    searchQuery: '',
  };

  const appContainer = document.getElementById('app-container');
  const globalSearchInput = document.getElementById('global-search');
  const navLinks = document.querySelectorAll('.nav-link');

  const topicTaxonomy = [
    "Limits & Continuity", "Differentiation", "Successive Differentiation", 
    "Leibnitz Rule", "Implicit Differentiation", "Logarithmic Differentiation", 
    "Tangent & Normal", "Maxima & Minima", "Rolle's Theorem", 
    "Mean Value Theorem", "Curve Sketching", "Substitution", 
    "Integration by Parts", "Partial Fractions", "Trigonometric Integrals", 
    "Reduction Formula", "Variable Separable", "Homogeneous", 
    "Linear Differential Equations", "Euler's Theorem", "Partial Derivatives", 
    "Taylor Series", "Maclaurin Series"
  ];

  // --- 2. Theme Toggle Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  function updateToggleIcons(theme) {
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateToggleIcons(initialTheme);

  themeToggleBtn.addEventListener('click', function () {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateToggleIcons(nextTheme);
  });

  // --- 3. Rendering Engine ---

  function renderApp() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    state.currentView = hash;
    
    // Update active nav link
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${hash}`) {
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

    appContainer.innerHTML = `
      <div class="max-w-6xl mx-auto px-6 py-10">
        <section class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          ${renderStatCard('Total Questions', stats.total, 'blue')}
          ${renderStatCard('Batches', stats.batches, 'emerald')}
          ${renderStatCard('Topics', stats.topics, 'indigo')}
          ${renderStatCard('CSE Problems', stats.cse, 'slate')}
          ${renderStatCard('ECE Problems', stats.ece, 'slate')}
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${renderNavCard('Browse by Topic', 'Explore questions categorized by mathematical concepts.', '#topics', 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10')}
          ${renderNavCard('Browse by Paper', 'Find questions from specific years, exams, and batches.', '#papers', 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z')}
          ${renderNavCard('Repeated Questions', 'Focus on problems that appeared in multiple examinations.', '#repeated', 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15')}
          ${renderNavCard('Revision Mode', 'Hand-picked problems for quick last-minute preparation.', '#revision', 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4')}
        </section>
      </div>
    `;
  }

  function renderStatCard(label, value, color) {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-100',
      emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      slate: 'bg-slate-100 text-slate-700 border-slate-200'
    };
    return `
      <div class="p-4 rounded-2xl border ${colors[color] || colors.slate} text-center">
        <div class="text-2xl font-bold">${value}</div>
        <div class="text-xs uppercase tracking-wider font-semibold opacity-70">${label}</div>
      </div>
    `;
  }

  function renderNavCard(title, desc, link, iconPath) {
    return `
      <a href="${link}" class="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex items-start gap-6">
        <div class="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}" />
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700">${title}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">${desc}</p>
        </div>
      </a>
    `;
  }

  function renderExplorer(filteredQuestions, title) {
    const tocData = buildTOCData();

    appContainer.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Sidebar -->
          <aside class="explorer-sidebar md:w-72 flex-shrink-0 space-y-6">
            <div>
              <h2 class="text-2xl font-extrabold text-slate-900 mb-1">${title}</h2>
              <p class="text-slate-500 text-sm">${filteredQuestions.length} questions found</p>
            </div>
            
            <!-- TOC Section -->
            <div class="toc-wrapper">
              <button id="toc-mobile-toggle" class="toc-mobile-toggle" aria-label="Toggle table of contents">
                <span>Table of Contents</span>
              </button>
              <div class="toc-container bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div class="toc-header px-6 py-3 border-b border-slate-100">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-slate-400">Table of Contents</h3>
                </div>
                <div class="p-2">
                  ${renderTOC(tocData)}
                </div>
              </div>
            </div>
            
            <!-- Filters Section -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              ${renderFilterDropdown('discipline', 'Discipline', ['All', 'CSE', 'ECE'])}
              ${renderFilterDropdown('batch', 'Batch', ['All', ...new Set(questions.map(q => q.batch))].sort().reverse())}
              ${renderFilterDropdown('topic', 'Topic', ['All', ...topicTaxonomy])}
              ${renderFilterDropdown('difficulty', 'Difficulty', ['All', 'Easy', 'Medium', 'Hard'])}
              ${renderFilterDropdown('examType', 'Exam Type', ['All', 'CT', 'TERM'])}
              <div>
                <label class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Section</label>
                <select data-filter="section" class="filter-select w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-2.5">
                  <option value="All" ${state.filters.section === 'All' ? 'selected' : ''}>All Sections</option>
                  <option value="A" ${state.filters.section === 'A' ? 'selected' : ''}>Section A (Diff)</option>
                  <option value="B" ${state.filters.section === 'B' ? 'selected' : ''}>Section B (Int)</option>
                </select>
              </div>
              
              <button id="clear-filters" class="w-full py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Clear Filters
              </button>
            </div>
          </aside>

          <!-- Question List -->
          <main class="flex-grow space-y-6">
            ${filteredQuestions.length > 0 ? 
              filteredQuestions.map(q => renderQuestionCard(q)).join('') : 
              renderEmptyState()}
          </main>
        </div>
      </div>
    `;

    // Attach event listeners for filters
    document.querySelectorAll('.filter-select').forEach(select => {
      select.addEventListener('change', (e) => {
        state.filters[e.target.dataset.filter] = e.target.value;
        applyFiltersAndRender();
      });
    });

    document.getElementById('clear-filters').addEventListener('click', () => {
      Object.keys(state.filters).forEach(key => state.filters[key] = 'All');
      applyFiltersAndRender();
    });

    // Initialize TOC interactions
    initTOC();
    
    // Re-initialize solutions toggles
    initSolutionToggles();
    
    // Typeset LaTeX
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  function renderFilterDropdown(key, label, options) {
    return `
      <div>
        <label class="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">${label}</label>
        <select data-filter="${key}" class="filter-select w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-2.5">
          ${options.map(opt => `<option value="${opt}" ${state.filters[key] == opt ? 'selected' : ''}>${opt}</option>`).join('')}
        </select>
      </div>
    `;
  }

  function renderQuestionCard(q) {
    const difficultyColors = {
      'Easy': 'bg-emerald-100 text-emerald-700',
      'Medium': 'bg-amber-100 text-amber-700',
      'Hard': 'bg-rose-100 text-rose-700'
    };

    return `
      <article class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div class="p-6 md:p-8">
          <div class="flex flex-wrap items-center gap-2 mb-6">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full">${q.discipline} ${q.batch}</span>
            <span class="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-full">${q.examType} ${q.examNumber || ''} (Sec ${q.section})</span>
            <span class="px-3 py-1 ${difficultyColors[q.difficulty] || 'bg-slate-100 text-slate-600'} text-[10px] font-bold uppercase tracking-wider rounded-full">${q.difficulty}</span>
            <span class="ml-auto text-slate-400 text-xs font-medium">#${q.id}</span>
          </div>

          <div class="prose prose-slate max-w-none mb-8">
            <div class="text-lg font-medium text-slate-900 leading-relaxed">
              <span class="text-blue-600 font-bold mr-2">Q${q.questionNumber}.</span>
              ${q.questionHtml}
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mb-8">
            ${q.topics.map(t => `<span class="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">#${t}</span>`).join('')}
          </div>

          <div class="border-t border-slate-100 pt-6">
            <button class="toggle-solution-btn flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors" data-target="sol-${q.id}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              <span>View Step-by-Step Solution</span>
            </button>
            
            <div id="sol-${q.id}" class="solution-container hidden mt-6 space-y-6">
              <div class="p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 leading-relaxed">
                ${q.solutionHtml}
              </div>
              ${q.finalAnswerHtml ? `
                <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-900">
                  <h4 class="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">Final Answer</h4>
                  ${q.finalAnswerHtml}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderEmptyState() {
    return `
      <div class="bg-white rounded-3xl border border-dashed border-slate-300 p-20 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">No matching questions</h3>
        <p class="text-slate-500 max-w-xs mx-auto">Try adjusting your filters or search query to find what you're looking for.</p>
      </div>
    `;
  }

  // --- 4. Table of Contents ---

  function buildTOCData() {
    const map = {};

    questions.forEach(q => {
      const groupKey = `${q.discipline}-${q.batch}`;
      if (!map[groupKey]) {
        map[groupKey] = {
          discipline: q.discipline,
          batch: q.batch,
          exams: {}
        };
      }
      const examKey = q.examType + (q.examNumber ? '-' + q.examNumber : '');
      if (!map[groupKey].exams[examKey]) {
        map[groupKey].exams[examKey] = {
          examType: q.examType,
          examNumber: q.examNumber || null,
          count: 0
        };
      }
      map[groupKey].exams[examKey].count++;
    });

    const groups = Object.values(map).sort((a, b) => {
      if (a.batch !== b.batch) return b.batch - a.batch;
      return a.discipline.localeCompare(b.discipline);
    });

    groups.forEach(g => {
      g.exams = Object.values(g.exams).sort((a, b) => {
        if (a.examType !== b.examType) {
          return a.examType === 'CT' ? -1 : 1;
        }
        return (a.examNumber || 0) - (b.examNumber || 0);
      });
    });

    return groups;
  }

  function renderTOC(tocData) {
    return tocData.map(group => `
      <div class="toc-group mb-1">
        <div class="toc-group-label" data-group="${group.discipline}-${group.batch}">
          <svg class="toc-chevron open" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          ${group.discipline}-${group.batch}
        </div>
        <ul class="toc-children">
          ${group.exams.map(exam => `
            <li class="toc-exam-item"
                data-discipline="${group.discipline}"
                data-batch="${group.batch}"
                data-examtype="${exam.examType}"
                data-examnumber="${exam.examNumber || ''}"
                role="button"
                tabindex="0">
              ${exam.examType}${exam.examNumber ? ' ' + exam.examNumber : ''}
              <span class="toc-exam-count">(${exam.count})</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // --- 5. View Logic ---

  function applyFiltersAndRender() {
    let filtered = questions.filter(q => {
      // Filter logic
      const dMatch = state.filters.discipline === 'All' || q.discipline === state.filters.discipline;
      const bMatch = state.filters.batch === 'All' || q.batch.toString() === state.filters.batch.toString();
      const tMatch = state.filters.topic === 'All' || q.topics.includes(state.filters.topic);
      const diffMatch = state.filters.difficulty === 'All' || q.difficulty === state.filters.difficulty;
      const etMatch = state.filters.examType === 'All' || q.examType === state.filters.examType;
      const enMatch = state.filters.examNumber === 'All' || !state.filters.examNumber || 
        q.examNumber.toString() === state.filters.examNumber.toString();

      // Search logic
      const query = state.searchQuery.toLowerCase();
      const sMatch = !query || 
        q.questionHtml.toLowerCase().includes(query) || 
        q.topics.some(t => t.toLowerCase().includes(query)) ||
        q.id.toLowerCase().includes(query);

      return dMatch && bMatch && tMatch && diffMatch && etMatch && enMatch && sMatch;
    });

    // Sub-view specific filtering
    if (state.currentView === 'repeated') {
      filtered = filtered.filter(q => q.frequency > 1);
    } else if (state.currentView === 'revision') {
      const revisionTags = ["last-minute", "top-integration", "essential"];
      filtered = filtered.filter(q => q.tags && q.tags.some(tag => revisionTags.includes(tag)));
    }

    const titleMap = {
      'papers': 'Question Papers',
      'topics': 'Topic Explorer',
      'repeated': 'Repeated Questions',
      'revision': 'Revision Mode'
    };

    renderExplorer(filtered, titleMap[state.currentView] || 'Explorer');
  }

  function renderPapersView() { applyFiltersAndRender(); }
  function renderTopicsView() { applyFiltersAndRender(); }
  function renderRepeatedView() { applyFiltersAndRender(); }
  function renderRevisionView() { applyFiltersAndRender(); }

  // --- 6. Interactions & Utilities ---

  function initSolutionToggles() {
    document.querySelectorAll('.toggle-solution-btn').forEach(btn => {
      btn.onclick = function() {
        const targetId = this.dataset.target;
        const target = document.getElementById(targetId);
        const icon = this.querySelector('svg');
        const span = this.querySelector('span');
        
        const isHidden = target.classList.contains('hidden');
        
        if (isHidden) {
          target.classList.remove('hidden');
          icon.classList.add('rotate-180');
          span.textContent = 'Hide Solution';
        } else {
          target.classList.add('hidden');
          icon.classList.remove('rotate-180');
          span.textContent = 'View Step-by-Step Solution';
        }
      };
    });
  }

  function initTOC() {
    // TOC exam item click — sets filters and navigates to papers view
    document.querySelectorAll('.toc-exam-item').forEach(item => {
      item.addEventListener('click', function() {
        state.filters.discipline = this.dataset.discipline;
        state.filters.batch = this.dataset.batch;
        state.filters.examType = this.dataset.examtype;
        state.filters.examNumber = this.dataset.examnumber || 'All';
        state.filters.topic = 'All';
        state.filters.difficulty = 'All';
        state.filters.section = 'All';
        state.searchQuery = '';
        if (globalSearchInput) globalSearchInput.value = '';

        // Force re-render: hashchange won't fire if already on papers
        const wasPapers = state.currentView === 'papers';
        window.location.hash = '#papers';
        if (wasPapers) {
          applyFiltersAndRender();
        }
      });
    });

    // TOC group collapse/expand
    document.querySelectorAll('.toc-group-label').forEach(label => {
      label.addEventListener('click', function() {
        const chevron = this.querySelector('.toc-chevron');
        const children = this.nextElementSibling;
        if (children) {
          children.classList.toggle('hidden');
          chevron.classList.toggle('open');
        }
      });
    });

    // Mobile TOC toggle
    const tocToggle = document.getElementById('toc-mobile-toggle');
    const tocContainer = document.querySelector('.toc-container');
    if (tocToggle && tocContainer) {
      tocToggle.addEventListener('click', function() {
        tocContainer.classList.toggle('open');
        this.classList.toggle('open');
      });
    }
  }

  // Handle Search Input
  globalSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.currentView === 'dashboard') {
      window.location.hash = '#papers'; // Jump to explorer if searching from dashboard
    }
    applyFiltersAndRender();
  });

  // Handle Hash Changes
  window.addEventListener('hashchange', renderApp);

  // Initial Load
  renderApp();
});
