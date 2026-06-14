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

### 3. Deployment
- Run `./update-version.sh` to update cache-busting strings in `index.html`.
- Commit changes: `git add . && git commit -m "Add [Batch] [Exam] solutions"`.
- Push to trigger GitHub Actions deployment.

## Technical Mandates
- **Static First**: No node_modules, no build step. The site must work when opened directly via `file://`.
- **Metadata Integrity**: Every question must have at least one topic and correct exam metadata.
- **MathJax Consistency**: Always wrap display math in `<div class="overflow-x-auto">$$...$$</div>` within content strings.
- **Security**: Never include sensitive data in the repo.
- **GitHub Actions**: Do not modify `.github/workflows/static.yml`.
