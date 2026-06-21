# Calculus Question Bank — Project Snapshot

> Generated: June 21, 2026
> Repo: https://github.com/tanbhirtahmid/ku-math1151-question-bank
> Deployed: https://tanbhirtahmid.github.io/ku-math1151-question-bank/

---

## 1. Project Structure

```
├── .github/
│   └── workflows/
│       └── static.yml                  # GitHub Actions deploy to Pages
├── answers/                            # LaTeX/Markdown answer files (source of truth)
│   ├── CSE-16_Term-Final_SecA.tex
│   ├── CSE-16_Term-Final_SecB.tex
│   ├── CSE-17_Term-Final_SecA.tex
│   ├── CSE-17_Term-Final_SecB.tex
│   ├── CSE-18_Term-Final_SecA.tex
│   ├── CSE-18_Term-Final_SecB.tex
│   ├── CSE-19_CT-1_SecA.tex
│   ├── CSE-19_CT-2_SecA.tex
│   ├── CSE-19_Term-Final_SecA.tex
│   ├── CSE-19_Term-Final_SecB.tex
│   ├── CSE-20_Term-Final.tex
│   ├── CSE-22_CT-1_SecA.tex
│   ├── CSE-22_CT-2_SecA.tex
│   ├── CSE-22_Term-Final_SecA.tex
│   ├── CSE-22_Term-Final_SecB.tex
│   ├── CSE-23_CT-1_SecA.tex
│   ├── CSE-23_CT-1_SecB.tex
│   ├── CSE-23_CT-2_SecA.md
│   ├── CSE-23_CT-2_SecB.tex
│   ├── CSE-23_Term-Final_SecA.tex
│   ├── CSE-23_Term-Final_SecB.tex
│   ├── CSE-24_CT-1_SecA.tex
│   ├── CSE-24_CT-1_SecB.tex
│   ├── CSE-24_CT-2_SecA.md
│   ├── CSE-24_Term-Final_SecA.tex
│   ├── CSE-24_Term-Final_SecB.tex
│   ├── CSE-25_CT-1.md
│   ├── CSE-25_CT-1_SecB.tex
│   ├── CSE-25_CT-2.md
│   ├── CSE-25_CT-2_SecB.tex
│   ├── CSE-25_Term-Final_SecA.tex
│   ├── CSE-25_Term-Final_SecB.tex
│   └── ECE-25_CT-2_SecB.tex
├── css/
│   ├── style.css                      # Custom styles + dark mode overrides (404 lines)
│   └── tailwind.css                   # Pre-compiled Tailwind CSS v2.2.19 output
├── data/
│   └── questions.js                   # Question database (551 KB, 255 questions)
├── docs/
│   ├── AGENTS.md                      # Agent workflow rules & repo conventions
│   ├── project-snapshot.md            # This file
│   └── question-bank-analysis.md
├── js/
│   ├── app.js                         # Bootstrap + global event delegation (160 lines)
│   ├── filters.js                     # Filter logic (46 lines)
│   ├── renderer.js                    # UI rendering + MathJax integration (278 lines)
│   ├── router.js                      # Hash-based routing (5 lines)
│   ├── search.js                      # Debounced search (14 lines)
│   ├── state.js                       # Shared state + constants + caches (51 lines)
│   └── toc.js                         # TOC generation & rendering (85 lines)
├── vendor/
│   └── mathjax/                       # Self-hosted MathJax v3.2.2 (CHTML output)
├── Formulas and Extra Resources/
│   ├── Hyperbolic Functions Reference Guide.tex
│   └── Trigonometry_Angle_Formulas.tex
├── convert_tex.py
├── fix_questions.py
├── import_md.py
├── import_new_tex.py
├── repeated_questions_report.txt
├── update-version.sh
└── index.html                         # Single-page entry point (124 lines)
```

---

## 2. Tech Stack Summary

**No `package.json` exists.** This is a zero-build-step, vanilla frontend:

| Layer | Technology |
| :--- | :--- |
| Markup | Plain HTML5 (`index.html`) |
| Styling | Tailwind CSS v2.2.19 (pre-compiled, vendored) + custom CSS with dark mode |
| JavaScript | Vanilla ES5/ES6+ (no modules, no bundler, no framework) |
| Math Rendering | MathJax v3.2.2 (self-hosted, CHTML output) |
| Routing | Hash-based (`#dashboard`, `#papers`, `#topics`, `#repeated`, `#revision`) |
| Deployment | GitHub Pages via GitHub Actions (`static.yml`) |
| Data pipeline | Python scripts (`import_md.py`, `import_new_tex.py`, `convert_tex.py`, `fix_questions.py`) |

**Package manager:** None. No npm/yarn/pnpm. All dependencies are vendored.

---

## 3. Data File Stats (`data/questions.js`)

**File size:** 550,973 bytes (~538 KB)

### Total Questions: 255

### Topics (with counts)

All 255 questions have `topics` as an **array of strings**. The topic taxonomy defined in `state.js` has 27 topics. Questions are tagged with these in their `topics` array.

The defined taxonomy in `state.js`:

```
Limits & Continuity, Differentiation, Successive Differentiation,
Leibnitz Rule, Implicit Differentiation, Logarithmic Differentiation,
Tangent & Normal, Maxima & Minima, Rolle's Theorem,
Mean Value Theorem, Curve Sketching, Substitution,
Integration by Parts, Partial Fractions, Trigonometric Integrals,
Reduction Formula, Definite Integration, Beta Function,
Gamma Function, Beta-Gamma Function, Variable Separable,
Homogeneous, Linear Differential Equations, Euler's Theorem,
Partial Derivatives, Taylor Series, Maclaurin Series
```

### Batches (with counts)

| Batch | Count |
| :--- | :--- |
| 25 | 61 |
| 24 | 35 |
| 22 | 31 |
| 23 | 31 |
| 16 | 24 |
| 17 | 21 |
| 19 | 20 |
| 18 | 19 |
| 20 | 13 |

### Exam Types (with counts)

| Exam Type | Count |
| :--- | :--- |
| Term Final | 181 |
| CT | 74 |

### Sections (with counts)

| Section | Count |
| :--- | :--- |
| A | 144 |
| B | 111 |

### Sample Question Object (full schema)

```json
{
  "id": "cse25-ct1-q1",
  "discipline": "CSE",
  "batch": 25,
  "year": 2025,
  "examType": "CT",
  "examNumber": 1,
  "section": "A",
  "questionNumber": "1",
  "topics": ["Limits & Continuity", "Curve Sketching"],
  "difficulty": "Medium",
  "length": "Medium",
  "frequency": 1,
  "appearances": [],
  "tags": [],
  "questionHtml": "<p>...math HTML with inline LaTeX...</p>",
  "solutionHtml": "<p>...step-by-step solution HTML...</p>",
  "finalAnswerHtml": ""
}
```

### Field Population

| Field | Populated | Notes |
| :--- | :--- | :--- |
| `frequency` | 255 / 255 (100%) | Integer count of how many times the question appeared |
| `appearances` | 12 / 255 (~4.7%) | Array of exam identifiers where question was seen |
| `tags` | 0 / 255 (0%) | Empty on all questions — revision mode is non-functional |

---

## 4. Key Source Files

All application files are under 500 lines (largest: `css/style.css` at 404 lines). Full contents follow.

### 4a. `js/app.js` — Bootstrap & Global Event Delegation (160 lines)

```javascript
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
  });

  // All click interactions inside app-container
  appContainer.addEventListener('click', function (e) {
    // --- Clear Filters ---
    if (e.target.closest('#clear-filters')) {
      Object.keys(state.filters).forEach(key => state.filters[key] = 'All');
      applyFiltersAndRender();
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
      state.filters.discipline = tocItem.dataset.discipline;
      state.filters.batch = tocItem.dataset.batch;
      state.filters.examType = tocItem.dataset.examtype;
      state.filters.examNumber = tocItem.dataset.examnumber || 'All';
      state.filters.section = tocItem.dataset.section || 'All';
      state.filters.topic = 'All';
      state.filters.difficulty = 'All';
      state.searchQuery = '';
      if (globalSearchInput) globalSearchInput.value = '';

      const wasPapers = state.currentView === 'papers';
      window.location.hash = '#papers';

      // Close mobile TOC after selection
      const tocContainer = document.querySelector('.toc-container');
      const mobToggle = document.getElementById('toc-mobile-toggle');
      if (tocContainer) tocContainer.classList.remove('open');
      if (mobToggle) mobToggle.classList.remove('open');

      if (wasPapers) {
        applyFiltersAndRender();
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
  });

  // --- 3. Initial Load ---
  renderApp();
});
```

### 4b. `js/router.js` — Hash Routing (5 lines)

```javascript
/**
 * router.js - Hash-based Routing
 */

window.addEventListener('hashchange', renderApp);
```

### 4c. `js/state.js` — Shared State & Constants (51 lines)

```javascript
/**
 * state.js - Application State Management
 */

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

// Global constants & caches
const topicTaxonomy = [
  "Limits & Continuity", "Differentiation", "Successive Differentiation",
  "Leibnitz Rule", "Implicit Differentiation", "Logarithmic Differentiation",
  "Tangent & Normal", "Maxima & Minima", "Rolle's Theorem",
  "Mean Value Theorem", "Curve Sketching", "Substitution",
  "Integration by Parts", "Partial Fractions", "Trigonometric Integrals",
  "Reduction Formula", "Definite Integration", "Beta Function",
  "Gamma Function", "Beta-Gamma Function", "Variable Separable",
  "Homogeneous", "Linear Differential Equations", "Euler's Theorem", "Partial Derivatives",
  "Taylor Series", "Maclaurin Series"
];

// Lazy solution cache: populated during renderQuestionCard, consumed on first click
let solCache = {};

// TOC HTML cache: built once from questions data (never changes at runtime)
let tocHtmlCache = null;

// Batch options for filter dropdown (computed once)
let batchOptionsCache = null;

// Exam number options for filter dropdown (computed once)
let examNumberOptionsCache = null;

// Debounce Utility
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

### 4d. `js/toc.js` — TOC Generation & Rendering (85 lines)

```javascript
/**
 * toc.js - Table of Contents Management
 */

function getTOC() {
  if (tocHtmlCache) return tocHtmlCache;
  var data = buildTOCData();
  tocHtmlCache = renderTOC(data);
  return tocHtmlCache;
}

function buildTOCData() {
  var map = {};
  questions.forEach(function (q) {
    var groupKey = q.discipline + '-' + q.batch;
    if (!map[groupKey]) {
      map[groupKey] = {
        discipline: q.discipline,
        batch: q.batch,
        exams: {}
      };
    }
    // Include section in key to separate Sec A and Sec B
    var examKey = q.examType + (q.examNumber ? '-' + q.examNumber : '') + '-' + q.section;
    if (!map[groupKey].exams[examKey]) {
      map[groupKey].exams[examKey] = {
        examType: q.examType,
        examNumber: q.examNumber || null,
        section: q.section,
        count: 0
      };
    }
    map[groupKey].exams[examKey].count++;
  });

  var groups = Object.values(map).sort(function (a, b) {
    if (a.batch !== b.batch) return b.batch - a.batch;
    return a.discipline.localeCompare(b.discipline);
  });

  groups.forEach(function (g) {
    g.exams = Object.values(g.exams).sort(function (a, b) {
      // Sort by Exam Type (CT before Final)
      if (a.examType !== b.examType) return a.examType === 'CT' ? -1 : 1;
      // Sort by Exam Number
      if (a.examNumber !== b.examNumber) return (a.examNumber || 0) - (b.examNumber || 0);
      // Sort by Section
      return a.section.localeCompare(b.section);
    });
  });

  return groups;
}

function renderTOC(tocData) {
  return tocData.map(function (group) {
    var examsHtml = group.exams.map(function (exam) {
      var label = exam.examType + (exam.examNumber ? ' ' + exam.examNumber : '');
      return [
        '<li class="toc-exam-item"',
            ' data-discipline="' + group.discipline + '"',
            ' data-batch="' + group.batch + '"',
            ' data-examtype="' + exam.examType + '"',
            ' data-examnumber="' + (exam.examNumber || '') + '"',
            ' data-section="' + exam.section + '"',
            ' role="button" tabindex="0">',
          label + ' (Sec ' + exam.section + ')',
          '<span class="toc-exam-count">(' + exam.count + ')</span>',
        '</li>',
      ].join('');
    }).join('');

    return [
      '<div class="toc-group mb-1">',
        '<div class="toc-group-label" data-group="' + group.discipline + '-' + group.batch + '">',
          '<svg class="toc-chevron open" viewBox="0 0 20 20" fill="currentColor">',
            '<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>',
          '</svg>',
          group.discipline + '-' + group.batch,
        '</div>',
        '<ul class="toc-children">' + examsHtml + '</ul>',
      '</div>',
    ].join('');
  }).join('');
}
```

### 4e. `js/filters.js` — Filter Logic (46 lines)

```javascript
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
```

### 4f. `js/search.js` — Search (14 lines)

```javascript
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
```

### 4g. `js/renderer.js` — UI Rendering + Question Cards (278 lines)

```javascript
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
    case 'dashboard':  renderDashboard(); break;
    case 'papers':     renderPapersView(); break;
    case 'topics':     renderTopicsView(); break;
    case 'repeated':   renderRepeatedView(); break;
    case 'revision':   renderRevisionView(); break;
    default:           renderDashboard();
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

  // MathJax: typeset only the questions area
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
```

### 4h. `css/style.css` — Custom Styles + Dark Mode (404 lines)

```css
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  scroll-behavior: smooth;
}

code, pre, .math-container, .mjx-container {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/* --- Navigation --- */
.nav-link.text-blue-600 {
  border-bottom-color: currentColor;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* --- MathJax & Equation Containers --- */
.mjx-container {
  max-width: 100% !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.math-container,
.overflow-x-auto {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* Prevent page-level horizontal scroll */
body {
  overflow-x: hidden;
}

/* Reduce equation size on small screens */
@media (max-width: 480px) {
  .overflow-x-auto {
    font-size: 90%;
  }
  .math-container {
    font-size: 90%;
  }
  mjx-container {
    font-size: 90% !important;
  }
}

/* === Sidebar (Desktop) === */
@media (min-width: 1024px) {
  .explorer-sidebar {
    position: sticky;
    top: 56px;
    max-height: calc(100vh - 56px);
    overflow-y: auto;
    align-self: start;
  }
  .explorer-sidebar::-webkit-scrollbar {
    width: 4px;
  }
  .explorer-sidebar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }
}

/* === Table of Contents Styles === */
.toc-wrapper { position: relative; }

.toc-group-label {
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #1e293b;
  transition: background 0.15s;
}
.toc-group-label:hover { background-color: #f1f5f9; }
.toc-group-label .toc-chevron {
  width: 1rem; height: 1rem;
  transition: transform 0.2s;
  flex-shrink: 0; color: #94a3b8;
}
.toc-group-label .toc-chevron.open { transform: rotate(90deg); }
.toc-children { margin-left: 1.25rem; }

.toc-exam-item {
  cursor: pointer; user-select: none;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem;
  font-size: 0.875rem; color: #475569;
  transition: all 0.15s;
  display: flex; align-items: center; gap: 0.25rem;
}
.toc-exam-item:hover { background-color: #eff6ff; color: #2563eb; }
.toc-exam-item.active { background-color: #dbeafe; color: #2563eb; font-weight: 600; }
.toc-exam-count { font-size: 0.75rem; color: #94a3b8; }

/* Mobile TOC toggle */
.toc-mobile-toggle {
  display: none; width: 100%; padding: 0.75rem 1rem;
  background: white; border: 1px solid #e2e8f0;
  border-radius: 1rem; text-align: left;
  font-weight: 600; font-size: 0.875rem; color: #1e293b;
  cursor: pointer; transition: all 0.15s;
  align-items: center; justify-content: space-between;
}
.toc-mobile-toggle:hover { background: #f8fafc; }
.toc-mobile-toggle::after { content: "▼"; font-size: 0.75rem; transition: transform 0.2s; }
.toc-mobile-toggle.open::after { transform: rotate(180deg); }

@media (max-width: 1023px) {
  .toc-mobile-toggle { display: flex; }
  .toc-container { display: none; }
  .toc-container.open { display: block; max-height: 60vh; overflow-y: auto; }
}
@media (min-width: 1024px) {
  .toc-mobile-toggle { display: none !important; }
  .toc-container { display: block !important; }
}

/* --- Typography --- */
.prose { color: #475569; }
.prose strong { color: #1e293b; }

/* === Dark Mode Overrides === */
[data-theme="dark"] body { background-color: #0d1117; color: #e6edf3; }
[data-theme="dark"] .bg-white { background-color: #161b22; }
[data-theme="dark"] .bg-slate-50 { background-color: #0d1117; }
[data-theme="dark"] .bg-slate-100 { background-color: #1c2128; }
[data-theme="dark"] .border-slate-200,
[data-theme="dark"] .border-slate-100 { border-color: #30363d; }
[data-theme="dark"] .text-slate-900 { color: #e6edf3; }
[data-theme="dark"] .text-slate-800 { color: #e6edf3; }
[data-theme="dark"] .text-slate-700 { color: #c9d1d9; }
[data-theme="dark"] .text-slate-600 { color: #8b949e; }
[data-theme="dark"] .text-slate-500 { color: #6e7681; }
[data-theme="dark"] .text-slate-400 { color: #484f58; }

[data-theme="dark"] .from-blue-900 { --tw-gradient-from: #0c2d6b; }
[data-theme="dark"] .to-indigo-950 { --tw-gradient-to: #111827; }
[data-theme="dark"] nav.bg-white { background-color: #0d1117; border-color: #30363d; }

[data-theme="dark"] .bg-blue-50 { background-color: #0c2d6b; }
[data-theme="dark"] .text-blue-700 { color: #79c0ff; }
[data-theme="dark"] .border-blue-100 { border-color: #1f6feb; }
[data-theme="dark"] .bg-emerald-50 { background-color: #0d2818; }
[data-theme="dark"] .text-emerald-700 { color: #3fb950; }
[data-theme="dark"] .border-emerald-100 { border-color: #238636; }
[data-theme="dark"] .bg-indigo-50 { background-color: #111827; }
[data-theme="dark"] .text-indigo-700 { color: #a5d6ff; }
[data-theme="dark"] .filter-select { background-color: #1c2128; border-color: #30363d; color: #e6edf3; }

[data-theme="dark"] .bg-emerald-100 { background-color: #0d2818; color: #3fb950; }
[data-theme="dark"] .bg-amber-100 { background-color: #3d2700; color: #d29922; }
[data-theme="dark"] .bg-rose-100 { background-color: #490202; color: #ffa198; }
[data-theme="dark"] .bg-blue-100 { background-color: #0c2d6b; color: #58a6ff; }
[data-theme="dark"] .prose-slate { color: #c9d1d9; }
[data-theme="dark"] .prose-slate strong { color: #e6edf3; }

.theme-toggle-btn {
  background: none; border: none; cursor: pointer;
  padding: 0.375rem; border-radius: 0.5rem; color: #e6edf3;
  transition: background 0.15s;
  display: flex; align-items: center; justify-content: center;
}
.theme-toggle-btn:hover { background: rgba(255,255,255,0.1); }
[data-theme="dark"] .theme-toggle-btn { color: #f0c040; }
.theme-toggle-btn svg { width: 1.25rem; height: 1.25rem; }

[data-theme="dark"] mjx-container,
[data-theme="dark"] mjx-container * { color: #e6edf3 !important; }

@media (min-width: 1024px) {
  [data-theme="dark"] .explorer-sidebar::-webkit-scrollbar-thumb { background: #30363d; }
}
[data-theme="dark"] .toc-group-label { color: #e6edf3; }
[data-theme="dark"] .toc-group-label:hover { background-color: #1c2128; }
[data-theme="dark"] .toc-group-label .toc-chevron { color: #484f58; }
[data-theme="dark"] .toc-exam-item { color: #8b949e; }
[data-theme="dark"] .toc-exam-item:hover { background-color: #1c2128; color: #58a6ff; }
[data-theme="dark"] .toc-exam-item.active { background-color: #0c2d6b; color: #58a6ff; }
[data-theme="dark"] .toc-mobile-toggle { background: #161b22; border-color: #30363d; color: #e6edf3; }
[data-theme="dark"] .toc-mobile-toggle:hover { background: #1c2128; }
```

### 4i. `index.html` — Entry Point (124 lines)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculus Question Bank - KU CSE</title>

  <!-- Flash-prevention: apply theme before any paint -->
  <script>
    (function() {
      var t = localStorage.getItem('theme');
      if (!t) { t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
      document.documentElement.setAttribute('data-theme', t);
    })();
  </script>

  <link rel="stylesheet" href="css/tailwind.css">
  
  <!-- MathJax Configuration -->
  <script>
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      },
      svg: {
        fontCache: 'global'
      }
    };
  </script>
  <script src="vendor/mathjax/tex-mml-chtml.js" async></script>

  <link rel="stylesheet" href="css/style.css?v=31">
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col">

  <!-- Header -->
  <header id="top" class="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-8 px-6 shadow-md border-b-4 border-emerald-500">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span class="bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">KU CSE Academic Resources</span>
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mt-2">Calculus Question Bank</h1>
        <p class="text-slate-300 mt-1 text-sm md:text-base">Dynamic archive of solved problems for study & preparation</p>
      </div>
      <div class="flex items-center gap-3">
        <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle dark mode">
          <svg id="theme-icon-sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg id="theme-icon-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="display:none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Navigation Bar -->
  <nav class="bg-white border-b border-slate-200 sticky top-0 z-40">
    <div class="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
      <div class="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar text-sm font-bold uppercase tracking-wide">
        <a href="#dashboard" class="nav-link py-1 border-b-2 border-transparent hover:text-blue-600 transition-colors whitespace-nowrap">Dashboard</a>
        <a href="#papers" class="nav-link py-1 border-b-2 border-transparent hover:text-blue-600 transition-colors whitespace-nowrap">Papers</a>
        <a href="#topics" class="nav-link py-1 border-b-2 border-transparent hover:text-blue-600 transition-colors whitespace-nowrap">Topics</a>
        <a href="#repeated" class="nav-link py-1 border-b-2 border-transparent hover:text-blue-600 transition-colors whitespace-nowrap">Repeated</a>
        <a href="#revision" class="nav-link py-1 border-b-2 border-transparent hover:text-blue-600 transition-colors whitespace-nowrap">Revision</a>
      </div>
      <div class="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-1.5 border border-slate-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" id="global-search" placeholder="Search questions..." class="bg-transparent border-none focus:ring-0 text-sm ml-2 w-48 text-slate-700">
      </div>
    </div>
  </nav>

  <!-- Main Content Area -->
  <div id="app-container" class="flex-grow">
    <!-- Dynamic views will be injected here -->
    <div class="flex items-center justify-center min-h-[50vh]">
      <div class="animate-pulse text-slate-400 font-medium">Loading Question Bank...</div>
    </div>
  </div>

  <!-- Persistent Sticky Mobile Back to Top -->
  <div class="fixed bottom-6 right-6 z-50">
    <a href="#top" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span class="hidden sm:inline">Back to Top</span>
    </a>
  </div>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 py-10 px-6 text-center text-xs border-t border-slate-800">
    <div class="max-w-6xl mx-auto space-y-4">
      <div class="flex justify-center gap-6 text-slate-500 font-medium uppercase tracking-widest mb-4">
        <a href="#dashboard" class="hover:text-white transition-colors">Home</a>
        <a href="#papers" class="hover:text-white transition-colors">Question Papers</a>
        <a href="#topics" class="hover:text-white transition-colors">Topic Explorer</a>
      </div>
      <p>Calculus problem solutions for personal study. Not affiliated with any university.</p>
      <p class="text-slate-600">&copy; 2026 KU CSE Question Bank</p>
    </div>
  </footer>

  <!-- Data and Application Scripts -->
  <script src="data/questions.js"></script>
  <script src="js/state.js"></script>
  <script src="js/toc.js"></script>
  <script src="js/renderer.js"></script>
  <script src="js/filters.js"></script>
  <script src="js/search.js"></script>
  <script src="js/router.js"></script>
  <script src="js/app.js"></script>

</body>
</html>
```

---

## 5. Known Issues / TODOs

**No TODO, FIXME, XXX, HACK, WORKAROUND, or TEMP comments found anywhere in the codebase.**

However, functional issues observed during analysis:

| Issue | Location | Description |
| :--- | :--- | :--- |
| Topics all "UNKNOWN" | `data/questions.js` | The `topic` (singular) field on questions is absent or unused — topics are only in the `topics` (plural) array field. The filter dropdown for "Topic" works via the array. |
| `tags` never populated | `data/questions.js` | 0/255 questions have tags. The `#revision` view filters for `"last-minute"`, `"top-integration"`, `"essential"` tags but will always return empty results. |
| `appearances` sparsely populated | `data/questions.js` | Only 12/255 questions (~4.7%) have this field filled. |
| Mobile search hidden | `index.html` | The search input is `hidden md:flex`, meaning mobile users have no search bar. |
| No offline support | Global | The service worker / caching layer mentioned in `AGENTS.md` does not exist yet. |
| Leftover "Fix:" comments | `js/filters.js:25,28` | Comments say "Fix:" — leftover from bugfixes, could be cleaned up. |
| `css/tailwind.css` is 2.9MB on one line | Build artifact | Minified into a single line. Not human-editable. |

---

## 6. Build / Run Info

**There is no `package.json`, no dev server, and no build command.**

This is a purely static site with zero build steps.

| Item | Value |
| :--- | :--- |
| Dev server | None needed — just open `index.html` in a browser, or use `python -m http.server` / `npx serve .` |
| Build command | None. `css/tailwind.css` is pre-compiled. All JS is vanilla (no transpilation). |
| Deploy | GitHub Actions pushes the repo as-is to GitHub Pages on every push to `main`. |
| Deployed URL | https://tanbhirtahmid.github.io/ku-math1151-question-bank/ |
| Data pipeline | Python scripts (`import_md.py`, `import_new_tex.py`, `convert_tex.py`) parse `.tex`/`.md` answer files into `data/questions.js` |

### Script Load Order (in `index.html`)

```
data/questions.js  →  js/state.js  →  js/toc.js  →  js/renderer.js  →  js/filters.js  →  js/search.js  →  js/router.js  →  js/app.js
```

All scripts are global-scope (no ES modules). Load order matters because later files reference globals defined in earlier files.

---

**Report generated:** June 21, 2026
**Repo:** https://github.com/tanbhirtahmid/ku-math1151-question-bank
**Total JS (app code):** 639 lines across 7 files
**Total CSS (custom):** 404 lines
**Total data:** 551 KB / 255 questions
