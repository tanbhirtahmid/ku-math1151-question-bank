# Calculus Course Answers

Single static HTML page — no build, no server, no tests.

## View

Open `calculus_answers_canvas.html` in any browser. Requires internet (Tailwind CSS, MathJax 3, Google Fonts loaded from CDN).

## Structure

- `calculus_answers_canvas.html` — the entire site, ~1900 lines.
- Batches CSE-25 (current) down to CSE-16 (archived), each in a `<section id="cse-XX">`.
- Each question is an `<article class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-8">`.
- Answers use MathJax: `$...$` inline, `$$...$$` display.
- Step-by-step proofs with a green result box (`bg-emerald-50`).

## Section setup

- **Section A** = Differential Calculus (course teacher: Firoz sir).
- **Section B** = Integral Calculus (course teacher: Laskar sir).
- CTs for Section A are labeled `CT1 (Sec A) - Q1`, `CT2 (Sec A) - Q1`, etc.
- ECE CTs are labeled `ECE CT1 - Q1`, `ECE CT2 - Q1`, etc.
- Term Final uses `bg-indigo-100` badges with `Term Final — Q1(a)` format.

## Edit conventions

- Add new batch sections following the existing pattern (TOC link + `<section>` with articles).
- Label badges: `bg-amber-100` for regular questions, `bg-indigo-100` for term final.
- Keep the `scroll-mt-6` class on sections for anchor scroll.
- Final answer boxes use `bg-emerald-50 p-4 rounded-xl border border-emerald-100`.
- No JavaScript logic — purely static HTML+CSS.

## Answer workflow

- New answers arrive in `answers.md` (Markdown, Gemini-generated).
- Convert each answer into an `<article>` following the existing HTML structure.
  - Write the question in `<h4>`, wrap display math in `<div class="overflow-x-auto">`.
  - Badge labels: `CT (Sec A) - Q1`, `CT (Sec A) - Q2`, etc. for Section A CTs; `ECE CT - Q1`, etc. for ECE CTs.
  - Final result box: `<div class="bg-emerald-50 p-4 rounded-xl border border-emerald-100">`.
  - Always include the "Back to Table of Contents" link at the bottom.
- Insert under the correct batch `<section>` — for CSE-25 CT questions, place after CT2 Q2 and before the Term Final divider.
- Commit every change with `git add calculus_answers_canvas.html AGENTS.md && git commit -m "..."`.
- Repo-local git identity is already configured; no `--global` needed.
