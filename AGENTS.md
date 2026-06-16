# Calculus Question Bank Redesign

Dynamic, data-driven Question Bank application — no build, no server. Works offline and on GitHub Pages.

## View

Open `index.html` in any browser. Requires internet for CDNs (Tailwind CSS, MathJax 3, Google Fonts).

## Architecture

### Files

| File | Purpose |
|------|---------|
| `data/questions.js` | **Source of Truth**. Array of question objects with metadata. |
| `index.html` | Application shell and dynamic view containers. |
| `script.js` | Routing, filtering, searching, and dynamic rendering logic. |
| `style.css` | Global styles and dark mode overrides. |

### Data Model (`data/questions.js`)

Each question is an object in the `questions` array:

```javascript
{
  id: "cse25-ct1-q1",
  discipline: "CSE", // "CSE" | "ECE"
  batch: 25,
  year: 2025,
  examType: "CT", // "CT" | "Term Final"
  examNumber: 1,
  section: "A",
  questionNumber: "1",
  topics: ["Limits & Continuity"],
  difficulty: "Medium", // "Easy" | "Medium" | "Hard"
  length: "Medium", // "Short" | "Medium" | "Long"
  frequency: 1,
  appearances: [],
  tags: [], // e.g., "last-minute"
  questionHtml: "...",
  solutionHtml: "...",
  finalAnswerHtml: "..."
}
```

### Topic Taxonomy
- **Limits & Continuity**
- **Differentiation** (Basic, Successive, Leibnitz Rule, Implicit, Logarithmic)
- **Applications of Derivatives** (Tangent & Normal, Maxima & Minima, Rolle's Theorem, Mean Value Theorem, Curve Sketching)
- **Integration** (Substitution, By Parts, Partial Fractions, Trigonometric, Reduction Formula)
- **Differential Equations** (Variable Separable, Homogeneous, Linear)
- **Partial Derivatives** (Euler's Theorem, Homogeneous Functions, Total Derivatives)
- **Series Expansion** (Taylor, Maclaurin)
- **Miscellaneous**

## Rendering Engine (`script.js`)

- **Routing**: Uses `window.location.hash` to switch views (`#dashboard`, `#papers`, `#topics`, `#repeated`, `#revision`).
- **Filtering**: Combines sidebar filters and global search query to filter the `questions` array.
- **MathJax**: Calls `MathJax.typesetPromise()` after every DOM update to render LaTeX equations.

## Navigation Views

1.  **Dashboard**: Landing page with statistics and quick-navigation cards.
2.  **Papers Explorer**: Browse questions grouped by Batch and Examination.
3.  **Topic Explorer**: Find questions categorized by mathematical concepts.
4.  **Repeated Questions**: Infrastructure for identifying high-frequency exam questions.
5.  **Revision Mode**: Specialized view for "Last Minute Revision" and curated "Top Questions".

## Theme System (Light / Dark)

Dark mode uses the `data-theme` attribute on `<html>`:
- `data-theme="light"` (default)
- `data-theme="dark"` (GitHub Dark Dimmed-inspired)

### Flash prevention
An inline script in `<head>` sets `data-theme` from `localStorage` before the first paint.

## Answer Workflow

### 1. New Answer Intake
- New solutions arrive as individual Markdown files in `answers/`.
- Naming convention: `{YEAR}_{EXAM_TYPE}-{NUMBER}.md`.

### 2. Processing & Appending
- Convert Markdown content to HTML strings.
- Create a new question object with proper metadata.
- **Append** the new object to the `questions` array in `data/questions.js`.
- Update the `id` following the convention: `{discipline}{batch}-{examType}{examNumber}-q{number}`.
- **Special Functions Tagging**:
  - For questions involving Beta functions: `topics: ["Definite Integration", "Beta Function"]`.
  - For Gamma functions: `topics: ["Definite Integration", "Gamma Function"]`.
  - For both or relationships: `topics: ["Definite Integration", "Beta-Gamma Function"]`.

### 3. Deployment
- Run `./update-version.sh` to update cache-busting strings in `index.html`.
- Commit changes: `git add . && git commit -m "Add [Batch] [Exam] solutions"`.
- Push to trigger GitHub Actions deployment.

## UX Priorities

### Mobile-First Philosophy
The site targets students studying on-the-go (walking to campus, on a bus, quick revision before a CT). The mobile experience is a **first-class experience**, not secondary.

### Prioritized Work Order
1. **Mobile equation rendering** — no layout breakage on small screens
2. **Table of Contents navigation** — restore hierarchical exam browsing
3. **Mobile TOC usability** — responsive accordion/drawer
4. **Further feature work**

---

### Dual Navigation System

Both systems coexist and serve different purposes:

| System | Purpose |
|--------|---------|
| **Table of Contents** | **Navigation** — known-path browsing by batch/exam |
| **Filters + Search** | **Discovery** — finding questions by topic, difficulty, etc. |

#### Desktop sidebar layout

```
Table of Contents
-----------------
CSE-25
  CT 1
  CT 2
  Term Final

CSE-24
  CT 1
  CT 2
  Term Final

...

-----------------

Filters
-----------------
Discipline
Topic
Difficulty
Length
Search
```

The TOC is the primary navigation structure. Filters appear below it.

#### Mobile TOC behavior
- Collapsible accordion panel or drawer
- Activated by a toggle button
- Easy to collapse after navigation
- Does not consume excessive screen space

---

### Mobile Equation Rendering (High Priority)

#### Requirements
- Math expressions must work properly on Android phones, iPhones, and small screens (~360–430px width).
- The page itself must **never** horizontally scroll.
- Only the equation container may scroll horizontally.

#### Per-equation container rules
- `max-width: 100%`
- `overflow-x: auto`
- `overflow-y: hidden`
- `-webkit-overflow-scrolling: touch` (smooth touch scrolling)
- `scroll-behavior: smooth`
- Container must stay inside its card boundary

#### Mobile typography
- Reduce equation font-size slightly on screens ≤480px wide
- Do NOT make equations unreadably small

#### Long derivations
- Multi-line content: allow wrapping when mathematically reasonable
- Otherwise place inside a horizontally scrollable container
- Container must never break the layout

---

### Study Flow Preservation

Common use cases that must work seamlessly:
| Scenario | Requirement |
|----------|-------------|
| Walking to campus | One-handed navigation, readable equations |
| Bus commute | No horizontal scrolling, fast load |
| Pre-CT quick revision | Quick access to specific batch/exam via TOC |
| Pre-final revision | Browse by topic or repeated questions |

---

### Cross-Platform UX

Both desktop and mobile are first-class experiences — neither platform should be sacrificed for the other.

#### Desktop expectations (1366×768 and 1920×1080)
- Sidebar is **sticky** and **independently scrollable** (mouse wheel, trackpad, keyboard arrows work natively)
- TOC remains visible alongside question content in a two-column layout
- No horizontal scroll; equations scroll within their container
- No drag-scrollbars-required behavior

#### Mobile expectations (390×844 and 412×915)
- TOC collapses into a toggle-activated drawer
- Equations are slightly smaller (90%) but still readable
- No horizontal page scroll

#### TOC scrolling implementation
- The sidebar itself is the scroll container on desktop (`overflow-y: auto`, `max-height: calc(100vh - nav-height)`)
- The TOC container inside it has no overflow constraints — it expands naturally
- This avoids `overflow` shorthand conflicts and keeps wheel/trackpad events working

---

## Technical Mandates
- **Static First**: No node_modules, no build step. The site must work when opened directly via `file://`.
- **Metadata Integrity**: Every question must have at least one topic and correct exam metadata.
- **MathJax Consistency**: Always wrap display math in `<div class="overflow-x-auto">$$...$$</div>` within content strings.
- **Security**: Never include sensitive data in the repo.
- **GitHub Actions**: Do not modify `.github/workflows/static.yml`.
