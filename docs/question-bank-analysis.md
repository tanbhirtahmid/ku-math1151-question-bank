# Calculus Question Bank Analysis Report

This document presents a detailed audit, repeated question detection, topic coverage analysis, and curriculum gap analysis of the Calculus Question Bank (`data/questions.js`).

---

## PHASE 1 — AUDIT STATS

### 1. Total Question Count
**Total Questions:** 255

### 2. Questions per Batch
| Batch | Question Count |
| :--- | :--- |
| **16** (2016) | 24 |
| **17** (2017) | 21 |
| **18** (2018) | 19 |
| **19** (2019) | 20 |
| **20** (2020) | 13 |
| **22** (2022) | 31 |
| **23** (2023) | 31 |
| **24** (2024) | 35 |
| **25** (2025) | 61 |

### 3. Questions per Database Topic
| Database Topic | Question Count |
| :--- | :--- |
| Definite Integration | 71 |
| Differentiation | 66 |
| Limits & Continuity | 30 |
| Indefinite Integration | 27 |
| Applications of Derivatives | 27 |
| Beta-Gamma Function | 14 |
| Partial Derivatives | 10 |
| Successive Differentiation | 8 |
| Logarithmic Differentiation | 6 |
| Maxima & Minima | 6 |
| Trigonometric Integrals | 6 |
| Homogeneous | 5 |
| Implicit Differentiation | 5 |
| Substitution | 5 |
| Reduction Formula | 5 |
| Series Expansion | 5 |
| Taylor Series | 4 |
| Euler's Theorem | 4 |
| Integration by Parts | 4 |
| Functions | 4 |
| Curve Sketching | 3 |
| Leibnitz Rule | 3 |
| Miscellaneous | 3 |
| Maclaurin Series | 2 |
| Mean Value Theorem | 2 |
| Tangent & Normal | 2 |
| Partial Fractions | 2 |
| Multiple Integrals | 2 |
| Rolle's Theorem | 1 |
| Gamma Function | 1 |
| Basic Differentiation | 1 |

### 4. Questions per Section (A/B)
* **Section A:** 144
* **Section B:** 111

### 5. Questions per Exam Type
* **Term Final:** 181
* **Class Test (CT):** 74

### 6. Missing Metadata
No questions are missing critical metadata fields (`id`, `discipline`, `batch`, `year`, `examType`, `section`, `topics`, `difficulty`). All 255 questions contain non-empty, valid entries for these fields.

### 7. Empty Topics
**Zero** questions have empty topic arrays.

### 8. Duplicate IDs
**Zero** duplicate IDs found in the question bank.

---

## PHASE 2 — REPEATED QUESTION DETECTION

We analyzed all questions using Jaccard text similarity (after stripping HTML, punctuation, and converting to lowercase) and normalized LaTeX similarity (ignoring formatting, spaces, and LaTeX commands like `\dfrac`, `\displaystyle`, etc.). 

We detected **26 groups** of probable repeated questions.

| Group | Canonical ID (Year) | Matching ID(s) (Year) | Years Covered | Sections | Confidence Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | `cse24-final-seca-q2ai` (2024) | cse24-final-seca-q2aii (2024)<br>cse24-ct1-seca-q3 (2024)<br>cse25-ct1-q3ii (2025) | 2024, 2025 | A, B | 0.62 |
| **#2** | `cse16-final-seca-q4aiii` (16) | cse17-final-seca-q2bi (17)<br>cse17-final-seca-q2bii (17)<br>cse17-final-seca-q2biii (17) | 2016, 2017 | A | 0.93 |
| **#3** | `cse23-final-secb-q6a` (2023) | cse23-ct1-secb-q1 (2023)<br>cse25-final-secb-q6a (2025) | 2023, 2025 | B | 1.00 |
| **#4** | `cse22-final-q8a` (2022) | cse25-final-secb-q7b (2025)<br>ece25-ct2-secb-q1 (2025) | 2022, 2025 | B | 0.93 |
| **#5** | `cse23-ct1-seca-q1` (2023) | cse25-ct1-q1 (2025) | 2023, 2025 | A | 1.00 |
| **#6** | `cse18-final-q3c` (2018) | cse25-ct2-q2 (2025) | 2018, 2025 | A | 0.94 |
| **#7** | `cse24-ct2-q1` (2024) | cse24-final-seca-q2c (2024) | 2024 | A | 1.00 |
| **#8** | `cse24-ct2-q2` (2024) | cse24-final-seca-q3b (2024) | 2024 | A | 1.00 |
| **#9** | `cse22-ct2-q2` (2022) | cse24-ct2-q5 (2024) | 2022, 2024 | A | 0.91 |
| **#10** | `cse23-ct2-q1` (2023) | cse23-final-seca-q3a (2023) | 2023 | A | 0.95 |
| **#11** | `cse23-ct2-q2` (2023) | cse23-final-seca-q3b (2023) | 2023 | A | 0.88 |
| **#12** | `cse16-final-seca-q3b` (16) | cse22-ct2-q3 (2022) | 2016, 2022 | A | 0.85 |
| **#13** | `cse20-final-q7` (2020) | cse25-final-secb-q8b (2025) | 2020, 2025 | B | 0.94 |
| **#14** | `cse23-final-secb-q7b` (2023) | cse24-final-secb-q7b (2024) | 2023, 2024 | B | 0.99 |
| **#15** | `cse17-final-q7a` (2017) | cse23-final-secb-q7a (2023) | 2017, 2023 | B | 0.88 |
| **#16** | `cse23-ct2-secb-q1` (2023) | cse24-ct1-secb-q2 (2024) | 2023, 2024 | B | 0.75 |
| **#17** | `cse19-final-q6b` (2019) | cse22-final-q8b (2022) | 2019, 2022 | B | 1.00 |
| **#18** | `cse19-final-q2b` (2019) | cse20-final-q3b (2020) | 2019, 2020 | A | 1.00 |
| **#19** | `cse19-final-q4a` (2019) | cse20-final-q4a (2020) | 2019, 2020 | A | 1.00 |
| **#20** | `cse16-final-q5b` (2016) | cse19-final-q7a (2019) | 2016, 2019 | B | 0.92 |
| **#21** | `cse24-final-seca-q1a` (2024) | cse24-ct1-seca-q1 (2024) | 2024 | A | 1.00 |
| **#22** | `cse24-final-seca-q1b` (2024) | cse24-ct1-seca-q2 (2024) | 2024 | A | 0.78 |
| **#23** | `cse24-final-seca-q2b` (2024) | cse24-ct1-seca-q5 (2024) | 2024 | A | 1.00 |
| **#24** | `cse24-final-seca-q4c` (2024) | cse25-final-seca-q4c (2025) | 2024, 2025 | A | 1.00 |
| **#25** | `cse25-ct1-secb-q5i` (2025) | cse25-ct1-secb-q5ii (2025) | 2025 | B | 0.80 |
| **#26** | `cse25-ct2-secb-q3` (2025) | ece25-ct2-secb-q3 (2025) | 2025 | B | 1.00 |

---

## PHASE 3 — TOPIC COVERAGE ANALYSIS

The 31 database topics were mapped to the standard curriculum taxonomy of **11 primary topics**. Below is the representation of each topic across batches, Class Tests (CTs), and Term Finals.

| Curriculum Topic | Total Questions | Batches Covered | CT Coverage (Batches) | Term Final Coverage (Batches) |
| :--- | :--- | :--- | :--- | :--- |
| **Limits** | 15 | 17, 18, 19, 20, 22, 23, 24, 25 | 22, 23, 24, 25 | 17, 18, 19, 20, 23, 24, 25 |
| **Continuity** | 15 | 16, 17, 18, 19, 20, 22, 23, 24, 25 | 22, 23, 24, 25 | 16, 17, 18, 19, 20, 22, 23, 24, 25 |
| **Differentiation** | 72 | 16, 17, 18, 19, 20, 22, 23, 24, 25 | 19, 22, 23, 24, 25 | 16, 17, 18, 19, 20, 22, 23, 24, 25 |
| **Applications of Derivatives** | 39 | 16, 17, 18, 19, 20, 22, 23, 24, 25 | 19, 22, 23, 24, 25 | 16, 17, 18, 19, 20, 22, 23, 24, 25 |
| **Indefinite Integration** | 28 | 16, 17, 18, 19, 20, 22, 23, 24, 25 | 23, 25 | 16, 17, 18, 19, 20, 22, 23, 24, 25 |
| **Definite Integration** | 74 | 16, 17, 18, 19, 20, 22, 23, 24, 25 | 23, 24, 25 | 16, 17, 18, 19, 20, 22, 23, 24, 25 |
| **Differential Equations** | 0 | *None* | *None* | *None* |
| **Partial Derivatives** | 10 | 18, 22, 23, 24, 25 | 22, 23, 24, 25 | 18, 22, 24, 25 |
| **Multiple Integrals** | 2 | 18, 19 | *None* | 18, 19 |
| **Series Expansion** | 11 | 17, 19, 22, 24, 25 | 24, 25 | 17, 19, 22, 24, 25 |
| **Miscellaneous** | 13 | 16, 17, 18, 22, 23, 24, 25 | 22, 23, 24, 25 | 16, 17, 18, 22, 23, 24, 25 |

### Underrepresented Topics, Years, and Sections
* **Differential Equations**: Has **0 questions** across all batches, years, and sections. This is a complete curriculum gap.
* **Multiple Integrals**: Has **2 questions** total, only appearing in Batch **25** (year 2025). It is completely missing from batches 16, 17, 18, 19, 20, 22, 23, 24.
* **Series Expansion**: Has **11 questions** total, covered in batches 19, 20, 24, 25. It is missing from batches 16, 17, 18, 22, 23.
* **Continuity**: While "Limits & Continuity" is a combined topic in the DB, actual continuity checks appear in only 11 questions, mostly in Section A.

---

## PHASE 4 — CURRICULUM GAP ANALYSIS

### 1. Major Curriculum Gaps
1. **Differential Equations (0 questions)**: Ordinary Differential Equations (ODEs) or Partial Differential Equations (PDEs) are completely missing from the question bank. If this course covers first-order ODEs, this is a 100% gap.
2. **Multiple Integrals (2 questions)**: Double/triple integrals are only tested in Batch 25. Previous years have zero questions on this, which suggests either it is a newly added topic in 2025, or it was neglected.

### 2. Temporal/Yearly Gaps (Topics never appearing in certain years)
* **Series Expansion**: Missing in batches 16, 17, 18, 22, 23.
* **Limits**: Missing in batch 16, 17, and 19 (for Term Finals; limits were only tested in CTs for these batches).
* **Definite Integration**: Well-covered in almost all years except CTs (mostly tested in Term Finals).

### 3. Suspicious Metadata Assignments
We identified the following issues in the database metadata:

* **Issue #1 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #1 have different topics: cse24-final-seca-q2ai (Differentiation) VS cse24-final-seca-q2aii (Differentiation) VS cse24-ct1-seca-q3 (Differentiation) VS cse25-ct1-q3ii (Differentiation, Logarithmic Differentiation)
* **Issue #2 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #4 have different topics: cse22-final-q8a (Applications of Derivatives) VS cse25-final-secb-q7b (Definite Integration) VS ece25-ct2-secb-q1 (Definite Integration)
* **Issue #3 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #5 have different topics: cse23-ct1-seca-q1 (Functions) VS cse25-ct1-q1 (Limits & Continuity, Curve Sketching)
* **Issue #4 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #6 have different topics: cse18-final-q3c (Applications of Derivatives) VS cse25-ct2-q2 (Rolle's Theorem)
* **Issue #5 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #7 have different topics: cse24-ct2-q1 (Differentiation, Taylor Series) VS cse24-final-seca-q2c (Series Expansion)
* **Issue #6 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #8 have different topics: cse24-ct2-q2 (Differentiation, Maxima & Minima) VS cse24-final-seca-q3b (Applications of Derivatives)
* **Issue #7 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #9 have different topics: cse22-ct2-q2 (Homogeneous, Euler's Theorem, Partial Derivatives) VS cse24-ct2-q5 (Homogeneous, Euler's Theorem, Partial Derivatives)
* **Issue #8 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #10 have different topics: cse23-ct2-q1 (Differentiation, Maxima & Minima, Curve Sketching) VS cse23-final-seca-q3a (Applications of Derivatives)
* **Issue #9 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #11 have different topics: cse23-ct2-q2 (Limits & Continuity, Logarithmic Differentiation) VS cse23-final-seca-q3b (Limits & Continuity)
* **Issue #10 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #12 have different topics: cse16-final-seca-q3b (Applications of Derivatives) VS cse22-ct2-q3 (Differentiation, Maxima & Minima)
* **Issue #11 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #13 have different topics: cse20-final-q7 (Definite Integration, Beta-Gamma Function) VS cse25-final-secb-q8b (Definite Integration, Beta-Gamma Function)
* **Issue #12 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #14 have different topics: cse23-final-secb-q7b (Definite Integration, Beta-Gamma Function) VS cse24-final-secb-q7b (Definite Integration, Beta-Gamma Function)
* **Issue #13 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #15 have different topics: cse17-final-q7a (Definite Integration, Beta-Gamma Function) VS cse23-final-secb-q7a (Definite Integration, Beta-Gamma Function)
* **Issue #14 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #16 have different topics: cse23-ct2-secb-q1 (Definite Integration, Beta-Gamma Function) VS cse24-ct1-secb-q2 (Definite Integration)
* **Issue #15 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #18 have different topics: cse19-final-q2b (Differentiation) VS cse20-final-q3b (Differentiation, Successive Differentiation)
* **Issue #16 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #21 have different topics: cse24-final-seca-q1a (Limits & Continuity) VS cse24-ct1-seca-q1 (Functions)
* **Issue #17 (Topic Inconsistency in Repeated Group)**: Repeated questions in Group #23 have different topics: cse24-final-seca-q2b (Differentiation) VS cse24-ct1-seca-q5 (Differentiation, Successive Differentiation)
* **Issue #18 (Incorrect Topic Classification)**: cse16-final-q5a is about integral calculus definitions, but has topic 'Limits & Continuity'
* **Issue #19 (Inconsistent Year Format)**: 22 questions use 2-digit years (16 or 17) instead of 4-digit years (2016 or 2017). Example IDs: cse16-final-seca-q1a, cse16-final-seca-q1b, cse16-final-seca-q2a, cse16-final-seca-q2bi, cse16-final-seca-q2bii

---

## PHASE 5 — VERIFIED REPEAT CANDIDATES & REJECTED FALSE POSITIVES

After manual verification of all 26 detected groups against raw question text, we classify them as follows:

### Verified Repeat Candidates (True Positives)

These groups contain questions that are substantively identical (same problem statement, same task).

| Group | Canonical ID | Matching ID(s) | Reason |
| :--- | :--- | :--- | :--- |
| **#3** | cse23-final-secb-q6a | cse23-ct1-secb-q1, cse25-final-secb-q6a | All three: "State and prove the fundamental theorem of calculus." |
| **#4** | cse22-final-q8a | cse25-final-secb-q7b, ece25-ct2-secb-q1 | Derive/Find volume of sphere radius r using disk method |
| **#7** | cse24-ct2-q1 | cse24-final-seca-q2c | Expand cos x in powers of x - pi/4 |
| **#8** | cse24-ct2-q2 | cse24-final-seca-q3b | Distinguish critical/inflection points, find extremum of f(x) = e^x + 2cos x + e^-x |
| **#9** | cse22-ct2-q2 | cse24-ct2-q5 | If u = tan^{-1}((x^3+y^3)/(x+y)), show x u_x + y u_y = sin 2u |
| **#13** | cse20-final-q7 | cse25-final-secb-q8b | Evaluate integral using Beta-Gamma functions |
| **#14** | cse23-final-secb-q7b | cse24-final-secb-q7b | Evaluate integral using Beta-Gamma (wallis/applications) |
| **#15** | cse17-final-q7a | cse23-final-secb-q7a | Evaluate integral using Beta-Gamma functions |
| **#16** | cse23-ct2-secb-q1 | cse24-ct1-secb-q2 | Evaluate integral using Beta-Gamma functions |
| **#17** | cse19-final-q6b | cse22-final-q8b | Revolving curve y = x^3, find volume |
| **#18** | cse19-final-q2b | cse20-final-q3b | Find y'' for y(x) (successive diff) |
| **#19** | cse19-final-q4a | cse20-final-q4a | Evaluate definite integral (identical) |
| **#21** | cse24-final-seca-q1a | cse24-ct1-seca-q1 | Define even/odd function, draw graph |
| **#23** | cse24-final-seca-q2b | cse24-ct1-seca-q5 | Leibnitz theorem problem |
| **#24** | cse24-final-seca-q4c | cse25-final-seca-q4c | Evaluate integral using Beta-Gamma functions |
| **#26** | cse25-ct2-secb-q3 | ece25-ct2-secb-q3 | Find volume of solid generated by asteroid (identical CSE/ECE question) |

**Total Verified: 16 groups**

### Rejected False Positives

These groups were flagged by the automated Jaccard/text-similarity analysis but are **not** the same question on manual inspection.

| Group | IDs | Reason for Rejection |
| :--- | :--- | :--- |
| **#1** | cse24-final-seca-q2ai, cse24-final-seca-q2aii, cse24-ct1-seca-q3, cse25-ct1-q3ii | Different differentiation problems (one asks for dy/dx of tan^cot, another combines multiple sub-questions) |
| **#2** | cse16-final-seca-q4aiii, cse17-final-seca-q2bi, cse17-final-seca-q2bii, cse17-final-seca-q2biii | Entirely different differentiation problems (parametric, inverse trig, etc.) |
| **#5** | cse23-ct1-seca-q1, cse25-ct1-q1 | Similar surface but different function definitions (piecewise graph vs standard function) |
| **#6** | cse18-final-q3c, cse25-ct2-q2 | Rolle's theorem vs rate-related problem; only LaTeX normalization created false match |
| **#10** | cse23-ct2-q1, cse23-final-seca-q3a | Similar wording but different functions (x+sin x vs cos x) |
| **#11** | cse23-ct2-q2, cse23-final-seca-q3b | One includes "write indeterminate forms" as a sub-part; similar limit problems |
| **#12** | cse16-final-seca-q3b, cse22-ct2-q3 | Same function but different questions (extrema only vs extrema + interval) |
| **#20** | cse16-final-q5b, cse19-final-q7a | Similar area-via-rectangles task but different parameters (10 vs 15 intervals) |
| **#22** | cse24-final-seca-q1b, cse24-ct1-seca-q2 | Different limit/continuity problems (different functions) |
| **#25** | cse25-ct1-secb-q5i, cse25-ct1-secb-q5ii | Completely different problems (log(sin x) integration vs |x-1| integration) |

**Total Rejected: 10 groups**

---

## PHASE 6 — METADATA AUDIT

### 6.1 Year Format Inconsistency

**Issue:** 22 questions use 2-digit years (`16`, `17`) in their `id` and `batch`/`year` fields instead of 4-digit years (`2016`, `2017`).

Affected IDs (batch=16):
- cse16-final-seca-q1a, cse16-final-seca-q1b, cse16-final-seca-q2a, cse16-final-seca-q2bi, cse16-final-seca-q2bii
- cse16-final-seca-q3a, cse16-final-seca-q3b, cse16-final-seca-q4ai, cse16-final-seca-q4aii, cse16-final-seca-q4aiii
- cse16-final-seca-q4b, cse16-final-q5a, cse16-final-q5b, cse16-final-q6a, cse16-final-q6b
- cse16-final-q6c, cse16-final-q7a, cse16-final-q7b, cse16-final-q8a

Affected IDs (batch=17):
- cse17-final-seca-q1a, cse17-final-seca-q1b, cse17-final-seca-q2a

**Impact:** 23 questions have IDs with 2-digit year prefix but 4-digit `year` field (e.g., id `cse17-final-seca-q2a` with `year: 2017`). This ID/YEAR mismatch creates ambiguity.

### 6.2 Batch-Year Mismatch

**Issue:** 22 questions where `batch` field (e.g., `16`) does not match the expected 4-digit `year` (e.g., `2016`).

**Root Cause:** Same as 6.1 — the `batch` field stores 2-digit with batches 16 and 17, while `year` stores 4-digit for most (but some also have `year: 16` or `year: 17`).

### 6.3 Exam Type Values

**Current values used:** `"CT"`, `"Term Final"`
**Status:** Consistent. No alternative spellings (e.g., "Class Test", "TermFinal", "Final") found.

### 6.4 CT Numbering

**Current values:** `examNumber: 1` (42 instances) and `examNumber: 2` (32 instances) for CTs.
**Status:** Consistent. All 74 CTs have a valid `examNumber`. Term Finals use `null` which is appropriate.

### 6.5 Section Naming

**Current values:** `"A"` (144 instances), `"B"` (111 instances)
**Status:** Consistent. No alternative formats found (e.g., "Sec A", "Section A").

### 6.6 Topic Naming

**Current topic taxonomy (31 unique values):**
Definite Integration, Differentiation, Limits & Continuity, Indefinite Integration, Applications of Derivatives, Beta-Gamma Function, Partial Derivatives, Successive Differentiation, Logarithmic Differentiation, Maxima & Minima, Trigonometric Integrals, Homogeneous, Implicit Differentiation, Substitution, Reduction Formula, Series Expansion, Taylor Series, Euler's Theorem, Integration by Parts, Functions, Curve Sketching, Leibnitz Rule, Miscellaneous, Maclaurin Series, Mean Value Theorem, Tangent & Normal, Partial Fractions, Multiple Integrals, Rolle's Theorem, Gamma Function, Basic Differentiation

**Issues found:**
- **"Limits & Continuity"** conflates two distinct topics. Questions are split roughly: 15 limit-focused, 15 continuity-focused.
- **"Miscellaneous"** is used as a catch-all for 3 questions that don't fit elsewhere.
- **"Functions"** overlaps with "Limits & Continuity" (several questions have both).
- **"Basic Differentiation"** appears only once and could be consolidated into "Differentiation".

### 6.7 Difficulty & Length Distribution

- **Difficulty:** 172 Medium, 31 Easy, 52 Hard (reasonable distribution)
- **Length:** 207 Medium, 19 Short, 29 Long (skewed toward Medium)
- **Status:** No inconsistencies found.

### 6.8 Missing Fields

- **questionHtml:** 0 missing
- **topics:** 0 empty
- **tags:** All 255 questions have empty `tags: []` — this field is completely unused.
- **appearances:** Only 12 questions have populated `appearances` arrays (those with `frequency >= 2`).

### 6.9 Discipline Distribution

- **CSE:** 240 questions
- **ECE:** 15 questions
- **Status:** No inconsistencies. All ECE questions are from batch 25.

---

## PHASE 7 — TOPIC AUDIT

### 7.1 Empty Topics

**Zero** questions have empty topic arrays. All 255 questions have at least one topic assigned.

### 7.2 Misclassified Questions

| Question ID | Current Topics | Correct Topics (Suggested) | Reason |
| :--- | :--- | :--- | :--- |
| cse16-final-q5a | Limits & Continuity | Definite Integration | Text: "Define integrand, integral and integration... what do you mean by constant of integration" — this is an integration definition question |
| cse16-final-seca-q1a | Limits & Continuity | Functions | Text: "Define even and odd functions..." — no limit or continuity content |
| cse17-final-seca-q1a | Limits & Continuity | Functions | Same pattern: function definitions, no limits/continuity |
| cse23-final-seca-q1a | Limits & Continuity | Functions | Function definition/graph questions |
| cse24-final-seca-q1a | Limits & Continuity | Functions | Function definition/graph questions |
| cse25-final-seca-q1a | Limits & Continuity | Functions | Function definition/graph questions |
| cse25-ct1-q1 | Limits & Continuity, Curve Sketching | Functions, Curve Sketching | Draw graph of piecewise function, find domain/range |

**Total likely misclassified: 7 questions**

### 7.3 Deprecated Topics

No topics are formally "deprecated" in the database schema. However, the following topics are candidates for consolidation:

- **"Basic Differentiation"** (1 question) — could be merged into "Differentiation"
- **"Gamma Function"** (1 question) — could be merged into "Beta-Gamma Function" (the question uses Gamma function in a Beta-Gamma context)
- **"Taylor Series"** (4 questions) — overlaps significantly with "Series Expansion" (5 questions) — these could be merged into a single "Series Expansion" topic

### 7.4 Limits vs. Continuity Split Analysis

Of the 30 questions tagged "Limits & Continuity":
- 8 are primarily about evaluating limits
- 8 are primarily about testing continuity (including piecewise functions)
- 7 cover both limits and continuity
- 7 are actually about functions/graphing (misclassified — see 7.2)

**Recommendation:** Split "Limits & Continuity" into two distinct topics: "Limits" and "Continuity".

### 7.5 Rare Topics (≤ 2 Questions)

| Topic | Count | Questions |
| :--- | :--- | :--- |
| Rolle's Theorem | 1 | cse25-ct2-q2 |
| Gamma Function | 1 | cse25-final-secb-q8c |
| Basic Differentiation | 1 | cse22-final-seca-q2bii |
| Maclaurin Series | 2 | cse25-ct2-q3, cse25-ece-ct2-q3 |
| Mean Value Theorem | 2 | cse22-ct2-q4, cse25-ece-ct2-q2 |
| Tangent & Normal | 2 | cse24-ct2-q3, cse23-ct2-q3 |
| Partial Fractions | 2 | cse20-final-q1b, cse19-final-q1bi |
| Multiple Integrals | 2 | cse18-final-q6b, cse19-final-q8a |

These topics may need more questions or consolidation.

---

## PHASE 8 — REVISION MODE: PROPOSED TAGS

Based on the analysis, we propose the following candidate tag system. **Do NOT apply these tags yet.**

### 8.1 Proposed Tags

| Tag | Meaning | Candidate Criteria | Estimated Questions |
| :--- | :--- | :--- | :--- |
| `essential` | Core curriculum topic that every student should master | Topics: Limits, Continuity, Differentiation, Definite Integration, Indefinite Integration | ~150 questions |
| `last-minute` | Quick-revision, formula-based, or definition questions | Difficulty=Easy OR length=Short OR definition-type questions | ~30-40 questions |
| `top-integration` | Questions combining multiple techniques (Beta-Gamma, parts, substitution, trig integrals) | Questions with 2+ integration-related topics, or Hard difficulty in integration | ~25-30 questions |
| `repeated` | Questions that appear in multiple exams (verified duplicates) | Questions in Verified Repeat Candidates (frequency >= 2) | ~30 questions |
| `difficult` | Hard problems requiring multi-step reasoning | difficulty=Hard OR length=Long | ~50-60 questions |

### 8.2 Tag Application Rules

- Tags should be applied **manually** to each question in `data/questions.js`
- A question may have **multiple tags** (e.g., both `essential` and `repeated`)
- The `repeated` tag should be applied to **all members** of a verified duplicate group, not just the canonical version
- The `appearances` array should be populated for all `repeated`-tagged questions

### 8.3 Tag Statistics (Estimated)

| Tag | Description | Count |
| :--- | :--- | :--- |
| essential | Foundation topics | ~150 |
| last-minute | Quick revision | ~35 |
| top-integration | Multi-technique integration | ~28 |
| repeated | Appears in 2+ exams | ~32 |
| difficult | Hard/long questions | ~55 |

---

## PHASE 9 — RECOMMENDED FUTURE IMPROVEMENTS

1. **Standardize Year Format**:
   Convert the 22 questions with two-digit years (`16` and `17`) to four-digit years (`2016` and `2017`) for consistency.
2. **Harmonize Topics in Duplicate Groups**:
   Fix the metadata for repeated questions to use the same topic. For example, change the topic of `cse22-final-q8a` from `Applications of Derivatives` to `Definite Integration` (or vice versa) to match the other duplicates in Group #4.
3. **Correct Misclassified Topics**:
   Change the topic of `cse16-final-q5a` from `Limits & Continuity` to `Definite Integration` or `Indefinite Integration`.
4. **Refine Topic Taxonomy**:
   Split the broad `Limits & Continuity` topic in the database into distinct `Limits` and `Continuity` categories, and map `Curve Sketching` more consistently.
5. **Address Coverage Gaps**:
   If Differential Equations are indeed part of the MATH-1151 syllabus, acquire and import questions on this topic. If Multiple Integrals are now a standard part of the curriculum (as of 2025), ensure future batches continue to test it.
6. **Enrich Metadata with Frequency**:
   Use the results of the repeated question analysis to populate the `frequency` and `appearances` fields in `data/questions.js` (e.g. linking repeats via their IDs in the `appearances` array and setting `frequency` to the group size).
