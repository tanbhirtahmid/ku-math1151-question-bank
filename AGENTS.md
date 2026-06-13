# Calculus Course Answers

Single static HTML page — no build, no server, no tests.

## View

Open `calculus_answers_canvas.html` in any browser. Requires internet (Tailwind CSS, MathJax 3, Google Fonts loaded from CDN).

## Structure

- `calculus_answers_canvas.html` — the entire site, ~1520 lines.
- Batches CSE-25 (current) down to CSE-16 (archived), each in a `<section id="cse-XX">`.
- Each question is an `<article class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-8">`.
- Answers use MathJax: `$...$` inline, `$$...$$` display.
- Step-by-step proofs with a green result box (`bg-emerald-50`).

## Edit conventions

- Add new batch sections following the existing pattern (TOC link + `<section>` with articles).
- Label badges: `bg-amber-100` for regular questions, `bg-indigo-100` for term final.
- Keep the `scroll-mt-6` class on sections for anchor scroll.
- Final answer boxes use `bg-emerald-50 p-4 rounded-xl border border-emerald-100`.
- No JavaScript logic — purely static HTML+CSS.
