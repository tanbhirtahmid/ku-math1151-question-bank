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

// Debounce Utility
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
