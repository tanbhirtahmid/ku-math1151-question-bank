/**
 * app.js - Application Bootstrap and Global Event Listeners
 */

document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Theme Toggle Logic ---
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

  // --- 2. Event Delegation (single listeners, never re-attached) ---

  // Filter selects
  document.addEventListener('change', function (e) {
    const select = e.target.closest('.filter-select');
    if (!select || !appContainer.contains(select)) return;
    state.filters[select.dataset.filter] = select.value;
    
    // If examType is changed from the sidebar, reset examNumber since there is no dropdown for it
    if (select.dataset.filter === 'examType') {
      state.filters.examNumber = 'All';
    }
    
    applyFiltersAndRender();
    // Update URL to reflect current filters
    var newHash = serializeFilterState();
    history.replaceState(null, '', newHash);
  });

  // All click interactions inside app-container
  appContainer.addEventListener('click', function (e) {
    // --- Topic Card Click ---
    const topicCard = e.target.closest('.topic-card');
    if (topicCard) {
      state.filters.topic = topicCard.dataset.topic;
      state._fromTopicCard = true;
      var newHash = serializeFilterState('topics');
      history.replaceState(null, '', newHash);
      renderTopicsView();
      return;
    }

    // --- Back to All Topics ---
    const backBtn = e.target.closest('#back-to-all-topics');
    if (backBtn) {
      state.filters.topic = 'All';
      state._fromTopicCard = false;
      history.replaceState(null, '', '#topics');
      renderTopicsView();
      return;
    }

    // --- Filter Chip Click (dismiss) ---
    const chip = e.target.closest('.filter-chip');
    if (chip && appContainer.contains(chip)) {
      var key = chip.dataset.filterKey;
      if (key === 'search') {
        state.searchQuery = '';
        if (globalSearchInput) globalSearchInput.value = '';
        if (globalSearchMobileInput) globalSearchMobileInput.value = '';
      } else {
        state.filters[key] = 'All';
      }
      applyFiltersAndRender();
      var newHash = serializeFilterState();
      history.replaceState(null, '', newHash);
      return;
    }

    // --- Copy Question Link ---
    const copyBtn = e.target.closest('.copy-link-btn');
    if (copyBtn) {
      var qid = copyBtn.dataset.qid;
      var url = window.location.origin + window.location.pathname + '#papers?q=' + qid;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          var originalHtml = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span class="text-emerald-600 font-semibold">Copied!</span>';
          setTimeout(function () { copyBtn.innerHTML = originalHtml; }, 2000);
        });
      }
      return;
    }

    // --- Clear Filters ---
    if (e.target.closest('#clear-filters')) {
      Object.keys(state.filters).forEach(key => state.filters[key] = 'All');
      applyFiltersAndRender();
      var newHash = serializeFilterState();
      history.replaceState(null, '', newHash);
      return;
    }

    // --- Quick Filter Button ---
    const qfBtn = e.target.closest('.quick-filter-btn');
    if (qfBtn) {
      state.filters.topic = qfBtn.dataset.topic;
      applyFiltersAndRender();
      return;
    }

    // --- Solution Toggle (lazy load) ---
    const solBtn = e.target.closest('.toggle-solution-btn');
    if (solBtn) {
      const qid = solBtn.dataset.qid;
      const target = document.getElementById('sol-' + qid);
      if (!target) return;
      const icon = solBtn.querySelector('svg');
      const span = solBtn.querySelector('span');

      if (target.classList.contains('hidden')) {
        // Lazy-load solution HTML on first open
        if (!target.dataset.loaded) {
          const data = solCache[qid];
          if (data) {
            target.innerHTML =
              '<div class="p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 leading-relaxed">' +
                data.solutionHtml +
              '</div>' +
              (data.finalAnswerHtml
                ? '<div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-900">' +
                    '<h4 class="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">Final Answer</h4>' +
                    data.finalAnswerHtml +
                  '</div>'
                : '');
          }
          target.dataset.loaded = 'true';
          // Typeset only the newly inserted content
          if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([target]);
          }
        }
        target.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
        if (span) span.textContent = 'Hide Solution';
      } else {
        target.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
        if (span) span.textContent = 'View Step-by-Step Solution';
      }
      return;
    }

    // --- TOC Exam Item Click ---
    const tocItem = e.target.closest('.toc-exam-item');
    if (tocItem) {
      const wasPapers = state.currentView === 'papers';
      state.filters.discipline = tocItem.dataset.discipline;
      state.filters.batch = tocItem.dataset.batch;
      state.filters.examType = tocItem.dataset.examtype;
      state.filters.examNumber = tocItem.dataset.examnumber || 'All';
      state.filters.section = tocItem.dataset.section || 'All';
      state.filters.topic = 'All';
      state.filters.difficulty = 'All';
      state.searchQuery = '';
      if (globalSearchInput) globalSearchInput.value = '';
      if (globalSearchMobileInput) globalSearchMobileInput.value = '';

      // Close mobile TOC after selection
      const tocContainer = document.querySelector('.toc-container');
      const mobToggle = document.getElementById('toc-mobile-toggle');
      if (tocContainer) tocContainer.classList.remove('open');
      if (mobToggle) mobToggle.classList.remove('open');

      var newHash = serializeFilterState('papers');
      if (wasPapers) {
        // Already on papers: update URL silently + re-render directly
        history.replaceState(null, '', newHash);
        applyFiltersAndRender();
      } else {
        // Navigate: set hash to trigger hashchange → renderApp
        window.location.hash = newHash;
      }
      return;
    }

    // --- TOC Group Collapse/Expand ---
    const tocLabel = e.target.closest('.toc-group-label');
    if (tocLabel) {
      const chevron = tocLabel.querySelector('.toc-chevron');
      const children = tocLabel.nextElementSibling;
      if (children) {
        children.classList.toggle('hidden');
        if (chevron) chevron.classList.toggle('open');
      }
      return;
    }

    // --- Mobile TOC Toggle ---
    const mobToggle = e.target.closest('#toc-mobile-toggle');
    if (mobToggle) {
      const tocContainer = document.querySelector('.toc-container');
      if (tocContainer) {
        tocContainer.classList.toggle('open');
        mobToggle.classList.toggle('open');
      }
      return;
    }

    // --- Mobile Search Toggle ---
    const searchToggle = e.target.closest('#mobile-search-toggle');
    if (searchToggle) {
      const mobileSearch = document.getElementById('global-search-mobile');
      if (mobileSearch) {
        mobileSearch.classList.toggle('hidden');
        if (!mobileSearch.classList.contains('hidden')) {
          const input = document.getElementById('global-search-mobile-input');
          if (input) setTimeout(function() { input.focus(); }, 100);
        }
      }
      return;
    }
  });

  // Close mobile search when clicking outside
  document.addEventListener('click', function (e) {
    const mobileSearch = document.getElementById('global-search-mobile');
    const searchToggle = document.getElementById('mobile-search-toggle');
    if (mobileSearch && !mobileSearch.classList.contains('hidden')) {
      if (!e.target.closest('#global-search-mobile') && !e.target.closest('#mobile-search-toggle')) {
        mobileSearch.classList.add('hidden');
      }
    }
  });

  // --- 3. Initial Load ---
  renderApp();

  // --- 4. Deep-link: auto-expand solution for the question if ?q= present ---
  function autoExpandDeepLink() {
    var qid = state._deepLinkQid || state._shouldAutoExpand;
    if (!qid) return;
    var toggleBtn = document.querySelector('.toggle-solution-btn[data-qid="' + qid + '"]');
    if (toggleBtn) {
      toggleBtn.click();
      // Scroll to the question card
      setTimeout(function () {
        var card = toggleBtn.closest('article');
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
    state._deepLinkQid = null;
    state._shouldAutoExpand = null;
  }

  // Override renderApp to trigger auto-expand after each render
  var _autoExpandTimer = null;
  var origRenderApp = renderApp;
  renderApp = function () {
    origRenderApp();
    if (_autoExpandTimer) clearTimeout(_autoExpandTimer);
    _autoExpandTimer = setTimeout(autoExpandDeepLink, 400);
  };
  window.renderApp = renderApp;

  // Also trigger after initial render
  setTimeout(autoExpandDeepLink, 400);
});
