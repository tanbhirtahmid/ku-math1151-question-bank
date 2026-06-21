# Calculus Question Bank - AGENT INSTRUCTIONS

This file contains workflow rules and repository conventions for all coding agents working on this project.

A task is NOT complete until it is committed.

---

# Project Purpose

This repository hosts a Calculus Question Bank and Solution Website for Khulna University students.

The most important asset in this repository is the question and solution data.

UI improvements are secondary.

Never risk data loss while modifying the UI.

---

# Repository Structure

Core content:

* answers/
* data/questions.js

Frontend:

* index.html
* css/
* js/

Documentation:

* docs/AGENTS.md

Utilities:

* import_md.py
* convert_tex.py
* update-version.sh

---

# Mandatory Startup Procedure

Before starting ANY task:

1. Read docs/AGENTS.md completely.
2. Run:

git status

3. Run:

git log --oneline -5

4. Report repository state.

Do not begin coding before repository state is known.

---

# Mandatory Completion Procedure

Before ending ANY task:

1. Run:

git status

2. Verify intended changes exist.

3. Commit completed work.

4. Report:

* commit hash
* commit message

A task is NOT complete until a git commit exists.

Never leave finished work uncommitted.

---

# Git Rules

Always commit completed work.

Use logical commit messages.

Examples:

Import CSE-22 Term Final questions

Fix TOC filtering

Optimize search rendering

Modularize frontend architecture

Never push.

The repository owner handles git push manually.

---

# Content Protection Rules

The question database is the highest priority asset.

Before modifying:

* data/questions.js
* answers/

verify backups exist through git history.

Never:

* overwrite questions
* delete questions
* remove metadata

unless explicitly instructed.

---

# Import Workflow

When importing answer files:

1. Scan answers/
2. Determine which files are not yet imported.
3. Import only missing content.
4. Avoid duplicate question IDs.
5. Verify data/questions.js remains valid.
6. Commit import separately.

Always report:

* files imported
* question count added

---

# Metadata Rules

Every question should have:

* discipline
* year
* examType
* section
* topic
* difficulty

Use UNKNOWN only when information genuinely cannot be determined.

Never invent metadata.

---

# TOC Rules

Table of Contents is the primary navigation system.

Structure:

Batch
→ Exam
→ Section

Example:

CSE-25

* CT-1 (Sec A)
* CT-1 (Sec B)
* CT-2 (Sec A)
* CT-2 (Sec B)
* Term Final (Sec A)
* Term Final (Sec B)

Do not remove TOC functionality.

Do not replace TOC with filters.

Filters supplement navigation.

TOC remains primary.

---

# Mobile Support Rules

This project is heavily used on phones.

All UI work must be tested conceptually for:

* Desktop
* Mobile

Particular attention:

* MathJax overflow
* Horizontal scrolling
* Filter usability
* TOC usability

A desktop-only solution is unacceptable.

---

# Offline-First Philosophy

The website should eventually function fully offline.

Avoid introducing unnecessary CDN dependencies.

Prefer local assets whenever practical.

---

# Frontend Architecture

JavaScript modules:

state.js

* shared application state
* caches
* global constants

router.js

* hash routing

toc.js

* TOC generation
* TOC rendering

filters.js

* filter logic

search.js

* search logic
* debounce

renderer.js

* UI rendering
* MathJax integration

app.js

* bootstrap
* initialization

When adding functionality:

* state changes → state.js
* routing → router.js
* TOC work → toc.js
* filtering → filters.js
* search → search.js
* rendering → renderer.js

---

# What To Avoid

Do not:

* redesign UI without request
* restructure question schema without request
* remove metadata
* remove TOC
* replace existing workflows unnecessarily
* leave completed work uncommitted

---

# Final Rule

If unsure:

Preserve data.
Make smaller changes.
Commit often.
Report clearly.


Before ending any task:

1. Run git status
2. Commit all completed work
3. Report commit hash

A task is NOT considered complete until a git commit exists.

Never leave completed work uncommitted.
Never start a new feature if previous work is uncommitted.