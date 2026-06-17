#!/usr/bin/env python3
"""Convert .tex answer files to JavaScript question objects for questions.js."""

import re
import json
import sys

TOPIC_NORMALIZE = {
    'Limits': 'Limits & Continuity',
    'Continuity': 'Limits & Continuity',
    'Indefinite Integration': 'Indefinite Integration',
    'Definite Integration': 'Definite Integration',
    'Applications of Derivatives': 'Applications of Derivatives',
    'Multiple Integrals': 'Multiple Integrals',
}

SUBTOPIC_TOPICS = {
    'General': None,
    'Basic Differentiation': 'Differentiation',
    'Implicit Differentiation': 'Implicit Differentiation',
    'Logarithmic Differentiation': 'Logarithmic Differentiation',
    'Successive Differentiation': 'Successive Differentiation',
    "Tangent & Normal": 'Tangent & Normal',
    'Maxima & Minima': 'Maxima & Minima',
    'Reduction Formula': 'Reduction Formula',
    'Trigonometric Integrals': 'Trigonometric Integrals',
    'Integration by Parts': 'Integration by Parts',
    'Partial Fractions': 'Partial Fractions',
    'Substitution': 'Substitution',
}

BETA_GAMMA_PATTERNS = [r'[Bb]eta', r'[Gg]amma']


def parse_tex_questions(filepath):
    """Parse a .tex file and return a list of question metadata dicts."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by QUESTION_START markers
    # Find all positions of "% QUESTION_START" lines
    lines = content.split('\n')
    start_indices = []
    for i, line in enumerate(lines):
        if 'QUESTION_START' in line and '%' in line:
            start_indices.append(i)

    blocks = []
    for idx in range(len(start_indices)):
        s = start_indices[idx]
        e = start_indices[idx + 1] if idx + 1 < len(start_indices) else len(lines)
        # Skip the delimiter lines themselves (3 lines before and after)
        block_start = s + 2  # skip % QUESTION_START line and the %... delimiter after it
        block_end = e
        block_content = '\n'.join(lines[block_start:block_end])
        blocks.append(block_content)

    questions = []

    for block in blocks:
        question = {}

        id_match = re.search(r'^%\s*id=(\S+)', block, re.MULTILINE)
        if id_match:
            question['id'] = id_match.group(1)

        discipline_match = re.search(r'^%\s*discipline=(\S+)', block, re.MULTILINE)
        if discipline_match:
            question['discipline'] = discipline_match.group(1)

        year_match = re.search(r'^%\s*year=(\d{4})', block, re.MULTILINE)
        if year_match:
            question['year'] = int(year_match.group(1))

        exam_type_match = re.search(r'^%\s*exam_type=(.+)', block, re.MULTILINE)
        if exam_type_match:
            question['examType'] = exam_type_match.group(1).strip()

        section_match = re.search(r'^%\s*section=(\S+)', block, re.MULTILINE)
        if section_match:
            question['section'] = section_match.group(1)

        qnum_match = re.search(r'^%\s*question_number=(\S+)', block, re.MULTILINE)
        if qnum_match:
            question['questionNumber'] = qnum_match.group(1)

        topic_match = re.search(r'^%\s*topic=(.+)', block, re.MULTILINE)
        if topic_match:
            question['topic'] = topic_match.group(1).strip()

        subtopic_match = re.search(r'^%\s*subtopic=(.+)', block, re.MULTILINE)
        if subtopic_match:
            question['subtopic'] = subtopic_match.group(1).strip()

        difficulty_match = re.search(r'^%\s*difficulty=(\S+)', block, re.MULTILINE)
        if difficulty_match:
            question['difficulty'] = difficulty_match.group(1)

        length_match = re.search(r'^%\s*length=(\S+)', block, re.MULTILINE)
        if length_match:
            question['length'] = length_match.group(1)

        frequency_match = re.search(r'^%\s*frequency=(\d+)', block, re.MULTILINE)
        question['frequency'] = int(frequency_match.group(1)) if frequency_match else 1

        # Remove comment lines and LaTeX preamble
        body = re.sub(r'(?m)^%[^\n]*\n?', '', block)
        body = re.sub(r'\\documentclass[^}]*\}', '', body)
        body = re.sub(r'\\usepackage[^}]*\}', '', body)
        body = re.sub(r'\\begin\{document\}', '', body)
        body = re.sub(r'\\end\{document\}', '', body)

        # Normalize line endings and remove preamble artifacts
        body = re.sub(r'\r\n?', '\n', body)
        body = re.sub(r'\\par\s*', '\n\n', body)

        # Extract final answer (between "Final Answer:" and end of block)
        fa_match = re.search(r'Final Answer:\s*(.*?)(?:\\end\{document\}|$)', body, re.DOTALL)
        if fa_match:
            question['finalAnswerText'] = fa_match.group(1).strip()

        # Extract solution (between "Solution:" and "Final Answer:")
        s_match = re.search(r'Solution:\s*(.*?)(?:\n\s*Final Answer:|\Z)', body, re.DOTALL)
        if s_match:
            question['solutionText'] = s_match.group(1).strip()

        # Extract question (between "Question:" and "Solution:")
        q_match = re.search(r'Question:\s*(.*?)(?:\n\s*Solution:|\Z)', body, re.DOTALL)
        if q_match:
            question['questionText'] = q_match.group(1).strip()

        questions.append(question)

    return questions


def tex_to_html(text):
    if not text:
        return ''
    # Handle align, aligned, equation, gather environments
    text = re.sub(
        r'\\begin\{(align\*?|aligned\*?|gather\*?|equation\*?)\}\s*(.*?)\\end\{\1\}',
        r'<div class="overflow-x-auto">$$\n\2\n$$</div>',
        text, flags=re.DOTALL
    )
    # Handle cases environment
    text = re.sub(
        r'\\begin\{cases\}\s*(.*?)\\end\{cases\}',
        r'\\begin{cases}\1\\end{cases}',
        text, flags=re.DOTALL
    )
    # Handle \[ ... \] and $$ ... $$ display math
    text = re.sub(r'\\\[\s*(.*?)\s*\\\]', r'<div class="overflow-x-auto">$$\1$$</div>', text, flags=re.DOTALL)
    text = re.sub(r'\$\$\s*(.*?)\s*\$\$', r'<div class="overflow-x-auto">$$\1$$</div>', text, flags=re.DOTALL)
    text = re.sub(r'\\section\*\{[^}]*\}\s*', '', text)
    text = re.sub(r'\\textbf\{([^}]*)\}', r'<strong>\1</strong>', text)
    text = re.sub(r'\\textit\{([^}]*)\}', r'<em>\1</em>', text)
    text = re.sub(r'\\text\{([^}]*)\}', r'\1', text)
    # Remove remaining LaTeX commands that aren't inline math
    text = re.sub(r'\\(?:displaystyle|limits|left|right)\b', '', text)
    text = re.sub(r'\n{4,}', '\n\n\n', text)
    text = text.strip()
    return text


def format_step_headers(text):
    if not text:
        return ''
    text = re.sub(
        r'(?:^|\n)\s*Step (\d+):\s*(.*?)(?=\n(?:Step \d+:|$)|\Z)',
        r'\n<p class="font-semibold text-slate-900">Step \1: \2</p>',
        text,
        flags=re.DOTALL
    )
    return text.strip()


def build_question_object(q):
    id_str = q.get('id', '')
    id_parts = id_str.split('-')
    batch = None
    for part in id_parts:
        m = re.match(r'cse(\d+)', part)
        if m:
            batch = int(m.group(1))
            break

    raw_topic = q.get('topic', '')
    topic = TOPIC_NORMALIZE.get(raw_topic, raw_topic)
    topics = [topic] if topic else []

    raw_subtopic = q.get('subtopic', '')
    if raw_subtopic and raw_subtopic != 'General':
        extra = SUBTOPIC_TOPICS.get(raw_subtopic)
        if extra and extra not in topics:
            topics.append(extra)

    text_to_check = (q.get('questionText', '') + q.get('solutionText', '') + q.get('finalAnswerText', ''))
    for pat in BETA_GAMMA_PATTERNS:
        if re.search(pat, text_to_check):
            topics = ['Definite Integration', 'Beta-Gamma Function']
            break

    seen = set()
    unique_topics = []
    for t in topics:
        if t and t not in seen:
            seen.add(t)
            unique_topics.append(t)
    if not unique_topics:
        unique_topics = ['Miscellaneous']

    question_html = tex_to_html(q.get('questionText', ''))
    solution_html = format_step_headers(tex_to_html(q.get('solutionText', '')))
    final_answer_html = tex_to_html(q.get('finalAnswerText', ''))

    return {
        'id': id_str,
        'discipline': q.get('discipline', 'CSE'),
        'batch': batch,
        'year': q.get('year', 0),
        'examType': 'Term Final',
        'examNumber': None,
        'section': q.get('section', ''),
        'questionNumber': q.get('questionNumber', ''),
        'topics': unique_topics,
        'difficulty': q.get('difficulty', 'Medium'),
        'length': q.get('length', 'Medium'),
        'frequency': q.get('frequency', 1),
        'appearances': [],
        'tags': [],
        'questionHtml': question_html,
        'solutionHtml': solution_html,
        'finalAnswerHtml': final_answer_html
    }


def format_js_question(q):
    def esc(s):
        if not s:
            return '""'
        s = s.replace('\\', '\\\\')
        s = s.replace('"', '\\"')
        s = s.replace('\n', '\\n')
        s = s.replace('\r', '')
        s = s.replace('\t', '\\t')
        return '"' + s + '"'

    lines = [
        '  {',
        f'    "id": {esc(q["id"])},',
        f'    "discipline": {esc(q["discipline"])},',
        f'    "batch": {q["batch"]},',
        f'    "year": {q["year"]},',
        f'    "examType": {esc(q["examType"])},',
        f'    "examNumber": {json.dumps(q["examNumber"])},',
        f'    "section": {esc(q["section"])},',
        f'    "questionNumber": {esc(q["questionNumber"])},',
        f'    "topics": {json.dumps(q["topics"])},',
        f'    "difficulty": {esc(q["difficulty"])},',
        f'    "length": {esc(q["length"])},',
        f'    "frequency": {q["frequency"]},',
        f'    "appearances": {json.dumps(q["appearances"])},',
        f'    "tags": {json.dumps(q["tags"])},',
        f'    "questionHtml": {esc(q["questionHtml"])},',
        f'    "solutionHtml": {esc(q["solutionHtml"])},',
        f'    "finalAnswerHtml": {esc(q["finalAnswerHtml"])}',
        '  }'
    ]
    return '\n'.join(lines)


def main():
    files = [
        'answers/CSE-20_Term-Final.tex',
        'answers/CSE-19_Term-Final_SecB.tex',
        'answers/CSE-18_Term-Final_SecB.tex',
        'answers/CSE-17_Term-Final_SecB.tex',
        'answers/CSE-16_Term-Final_SecB.tex',
    ]

    all_questions = []
    for filepath in files:
        print(f"Processing {filepath}...", file=sys.stderr)
        questions = parse_tex_questions(filepath)
        print(f"  Found {len(questions)} questions", file=sys.stderr)
        for q in questions:
            obj = build_question_object(q)
            all_questions.append(obj)
            fa_status = bool(obj['finalAnswerHtml'])
            print(f"    {obj['id']}: {obj['topics']} | fa={fa_status}", file=sys.stderr)

    for i, q in enumerate(all_questions):
        if i > 0:
            print(',')
        print(format_js_question(q))


if __name__ == '__main__':
    main()
