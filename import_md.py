#!/usr/bin/env python3
"""Import .md answer files and output JS question objects for questions.js.

Usage:
    python3 import_md.py < answers/CSE-25_CT-1.md
    python3 import_md.py answers/*.md 2>/dev/null
"""

import re
import sys
import json


def parse_md_questions(text):
    blocks = re.split(
        r'\n(?=(?:CSE|ECE)[-\s]\d+ .*? Question \d+|CT\d+ \(Sec \w+\) - Q\d+)',
        text.strip()
    )
    questions = []
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        q = {}

        meta = {}
        for line in block.split('\n'):
            m = re.match(r'^\s*(\w+)\s*:\s*(.+)$', line)
            if m:
                key = m.group(1).strip().lower()
                val = m.group(2).strip()
                meta[key] = val

        q['question_number'] = meta.get('question_number', '')

        # If no discipline in metadata, guess from block header
        discipline = meta.get('discipline', '')
        if not discipline:
            dm = re.search(r'^(CSE|ECE)[-\s]', block)
            discipline = dm.group(1) if dm else 'CSE'
        q['discipline'] = discipline

        year_raw = meta.get('year', '')
        ym = re.search(r'(?:^|\D)(\d{4})(?:\D|$)', year_raw) if year_raw else None
        if not ym:
            ym = re.search(r'(?:^|\D)(\d{2})(?:\D|$)', block)
            if ym:
                yr = int(ym.group(1))
                yr = 2000 + yr if yr < 100 else yr
                q['year'] = yr
            else:
                q['year'] = 0
        else:
            q['year'] = int(ym.group(1))

        exam_type = meta.get('exam_type', 'CT')
        q['exam_type'] = exam_type

        ct_num = meta.get('ct_number', '')
        try:
            q['ct_number'] = int(ct_num) if ct_num and ct_num.upper() != 'UNKNOWN' else None
        except ValueError:
            q['ct_number'] = None

        q['section'] = meta.get('section', 'A')
        if q['section'].upper() == 'UNKNOWN':
            q['section'] = 'A'

        # Parse classification section at the end of a question block
        cls_match = re.search(r'\nClassification\n(.*?)(?:\n\nCSE |\Z)', block, re.DOTALL)
        if cls_match:
            cls_text = cls_match.group(1)
            cm = re.search(r'topic\s*:\s*(.+)', cls_text, re.IGNORECASE)
            q['topic'] = cm.group(1).strip() if cm else ''
            dm = re.search(r'difficulty\s*:\s*(.+)', cls_text, re.IGNORECASE)
            q['difficulty'] = dm.group(1).strip() if dm else 'Medium'
        else:
            q['topic'] = ''
            q['difficulty'] = 'Medium'

        # Extract Question section
        qm = re.search(r'\nQuestion[:\s]*\n(.*?)(?=\n\nSolution)', block, re.DOTALL)
        if qm:
            q['question'] = qm.group(1).strip()

        # Extract Solution section
        sm = re.search(r'\nSolution[:\s]*\n(.*?)(?=\n\n(?:Answer|Final Answer|Classification))', block, re.DOTALL)
        if sm:
            q['solution'] = sm.group(1).strip()

        # Extract Answer/Final Answer section
        fm = re.search(r'\n(?:Answer|Final Answer)[:\s]*\n(.*?)(?=\n\n(?:Classification|\Z))', block, re.DOTALL)
        if fm:
            q['final_answer'] = fm.group(1).strip()

        if q.get('question'):
            questions.append(q)

    return questions


def md_to_html(text):
    if not text:
        return ''
    # Convert $$...$$ display math
    text = re.sub(r'\$\$\s*(.*?)\s*\$\$', r'<div class="overflow-x-auto">$$\1$$</div>', text, flags=re.DOTALL)
    # Convert **bold**
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    # Convert *italic*
    text = re.sub(r'(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)', r'<em>\1</em>', text)
    # Convert bullet lists
    text = re.sub(r'(?m)^\s*[-*]\s+(.*?)$', r'<li>\1</li>', text)
    # Wrap consecutive <li> in <ul>
    text = re.sub(r'((?:<li>.*?</li>\s*)+)', r'<ul class="list-disc pl-5 space-y-1">\1</ul>', text)
    # Convert numbered lists
    text = re.sub(r'(?m)^\s*\d+[.)]\s+(.*?)$', r'<li>\1</li>', text)
    text = re.sub(r'((?:<li>.*?</li>\s*)+)(?!.*</ul>)', r'<ol class="list-decimal pl-5 space-y-1">\1</ol>', text)
    # Split into paragraphs by double newlines, wrap each non-HTML-block paragraph in <p>
    paragraphs = re.split(r'\n{2,}', text)
    result = []
    for para in paragraphs:
        para = para.strip()
        if not para:
            continue
        # If it starts with an HTML block tag, leave as-is
        if re.match(r'<(div|ul|ol|p|table|h[1-6])', para):
            result.append(para)
        else:
            result.append(f'<p>{para}</p>')
    return '\n'.join(result)


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


def build_id(q):
    dis = q.get('discipline', 'CSE').lower()
    year = q.get('year', 0)
    batch = year % 100 if year >= 2000 else year
    et = q.get('exam_type', 'CT').lower().replace(' ', '-')
    if et == 'ct':
        ct = q.get('ct_number', '')
        et_part = f'ct{ct}' if ct else 'ct'
    elif et == 'term-final':
        et_part = 'final'
    else:
        et_part = et
    sec = q.get('section', '').lower()
    qn = q.get('question_number', '').lower().replace(' ', '').replace('.', '').replace('(', '').replace(')', '')
    return f'{dis}{batch}-{et_part}-{sec}-q{qn}'


def build_topics(q):
    raw = q.get('topic', '')
    topic_map = {
        'limits': 'Limits & Continuity',
        'continuity': 'Limits & Continuity',
        'differentiation': 'Differentiation',
        'partial derivative': 'Partial Derivatives',
        'euler': 'Partial Derivatives',
        'homogeneous': 'Partial Derivatives',
        'successive': 'Successive Differentiation',
        'leibnitz': 'Successive Differentiation',
        'rolle': 'Applications of Derivatives',
        'mean value': 'Applications of Derivatives',
        'tangent': 'Applications of Derivatives',
        'normal': 'Applications of Derivatives',
        'maxima': 'Applications of Derivatives',
        'minima': 'Applications of Derivatives',
        'curve sketching': 'Applications of Derivatives',
        'taylor': 'Series Expansion',
        'maclaurin': 'Series Expansion',
        'series': 'Series Expansion',
        'substitution': 'Integration',
        'by parts': 'Integration',
        'partial fraction': 'Integration',
        'trigonometric': 'Integration',
        'reduction': 'Integration',
        'differential equation': 'Differential Equations',
        'beta': 'Definite Integration',
        'gamma': 'Definite Integration',
        'definite': 'Definite Integration',
        'indefinite': 'Indefinite Integration',
        'integration': 'Indefinite Integration',
    }
    for key, val in topic_map.items():
        if key in raw.lower():
            return [val]
    if raw:
        return [raw]
    return ['Miscellaneous']


def build_question_object(q):
    sol_raw = q.get('solution', '')
    sol_html = md_to_html(format_step_headers(sol_raw))
    q_html = md_to_html(q.get('question', ''))
    fa_html = md_to_html(q.get('final_answer', ''))

    return {
        'id': build_id(q),
        'discipline': q.get('discipline', 'CSE'),
        'batch': q.get('year', 2025) % 100 if q.get('year', 0) >= 2000 else q.get('year'),
        'year': q.get('year', 0),
        'examType': 'CT' if q.get('exam_type', '').upper() == 'CT' else q.get('exam_type', 'CT'),
        'examNumber': q.get('ct_number'),
        'section': q.get('section', 'A'),
        'questionNumber': q.get('question_number', ''),
        'topics': build_topics(q),
        'difficulty': q.get('difficulty', 'Medium'),
        'length': 'Medium',
        'frequency': 1,
        'appearances': [],
        'tags': [],
        'questionHtml': q_html,
        'solutionHtml': sol_html,
        'finalAnswerHtml': fa_html,
    }


def format_js_question(q):
    def esc(s):
        if not s:
            return '""'
        s = s.replace('\\', '\\\\')
        s = s.replace('"', '\\"')
        s = s.replace('\n', '\\n')
        s = s.replace('\r', '')
        return '"' + s + '"'

    return '  {\n' + '\n'.join([
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
    ]) + '\n  }'


def main():
    if len(sys.argv) > 1:
        paths = sys.argv[1:]
    else:
        paths = ['/dev/stdin']

    all_questions = []
    for filepath in paths:
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        questions = parse_md_questions(text)
        for q in questions:
            obj = build_question_object(q)
            all_questions.append(obj)

    for i, q in enumerate(all_questions):
        if i > 0:
            print(',')
        print(format_js_question(q))


if __name__ == '__main__':
    main()
