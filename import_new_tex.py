#!/usr/bin/env python3
"""Import new .tex answer files into data/questions.js."""

import re
import json
import sys
import os

# Add parent dir to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Reuse functions from convert_tex.py
from convert_tex import (
    parse_tex_questions, tex_to_html, format_step_headers,
    TOPIC_NORMALIZE, SUBTOPIC_TOPICS, BETA_GAMMA_PATTERNS, build_question_object, format_js_question
)

# Monkey-patch parse_tex_questions to handle 2-digit years
_original_parse = parse_tex_questions

def patched_parse_tex_questions(filepath):
    """Parse .tex with support for 2-digit years."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    start_indices = []
    for i, line in enumerate(lines):
        if 'QUESTION_START' in line and '%' in line:
            start_indices.append(i)
    
    blocks = []
    for idx in range(len(start_indices)):
        s = start_indices[idx]
        e = start_indices[idx + 1] if idx + 1 < len(start_indices) else len(lines)
        block_start = s + 2
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
        
        # Handle both 2-digit and 4-digit years
        year_match = re.search(r'^%\s*year=(\d{2,4})', block, re.MULTILINE)
        if year_match:
            yr = int(year_match.group(1))
            if yr < 100:
                yr = 2000 + yr
            question['year'] = yr
        
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
        
        body = re.sub(r'(?m)^%[^\n]*\n?', '', block)
        body = re.sub(r'\\documentclass[^}]*\}', '', body)
        body = re.sub(r'\\usepackage[^}]*\}', '', body)
        body = re.sub(r'\\begin\{document\}', '', body)
        body = re.sub(r'\\end\{document\}', '', body)
        body = re.sub(r'\r\n?', '\n', body)
        body = re.sub(r'\\par\s*', '\n\n', body)
        
        fa_match = re.search(r'Final Answer:\s*(.*?)(?:\\end\{document\}|$)', body, re.DOTALL)
        if fa_match:
            question['finalAnswerText'] = fa_match.group(1).strip()
        
        s_match = re.search(r'Solution:\s*(.*?)(?:\n\s*Final Answer:|\Z)', body, re.DOTALL)
        if s_match:
            question['solutionText'] = s_match.group(1).strip()
        
        q_match = re.search(r'Question:\s*(.*?)(?:\n\s*Solution:|\Z)', body, re.DOTALL)
        if q_match:
            question['questionText'] = q_match.group(1).strip()
        
        questions.append(question)
    
    return questions

# Override
import convert_tex
# Also need to fix the build_question_object's handling of examType for CT exams
# The original build_question_object hardcodes 'examType': 'Term Final'
# and 'examNumber': None. We need it to come from the parsed data.

import convert_tex

def strip_subsection_braces(text):
    """Remove \subsection*{...} by keeping content between balanced braces."""
    result = []
    i = 0
    while i < len(text):
        m = re.match(r'\\subsection\*\{', text[i:])
        if m:
            start = i + len(m.group(0))
            depth = 1
            j = start
            while j < len(text) and depth > 0:
                if text[j] == '{':
                    depth += 1
                elif text[j] == '}':
                    depth -= 1
                j += 1
            # j is now past the closing brace
            content = text[start:j-1]
            result.append(content + '\n')
            i = j
        else:
            result.append(text[i])
            i += 1
    return ''.join(result)


def improved_tex_to_html(text):
    """Enhanced tex_to_html that handles description environments and more."""
    if not text:
        return ''
    # Remove \begin{description} and \end{description} wrappers
    text = re.sub(r'\\begin\{description\}', '', text)
    text = re.sub(r'\\end\{description\}', '', text)
    # Convert \item[Step N:] to just "Step N:" text (so format_step_headers can process it)
    text = re.sub(r'\\item\[(Step \d+:[^\]]*)\]\s*(?:\\\s*\\\\|\\\\|\\\s*)?', r'\1\n', text)
    # Convert \item[Text:] to bold text + newline
    text = re.sub(r'\\item\[([^\]]+)\]\s*(?:\\\s*\\\\|\\\\|\\\s*)?', r'<strong>\1</strong>\n', text)
    # Convert \item to <li>
    # But handle enumerate vs itemize by context - we'll just do \item -> <li> for now
    text = re.sub(r'\\item\s+', r'<li>', text)
    # Handle \begin{enumerate} and \end{enumerate}
    text = re.sub(r'\\begin\{enumerate\}\[.*?\]', r'<ol class="list-decimal pl-5 space-y-1">', text)
    text = re.sub(r'\\begin\{enumerate\}', r'<ol class="list-decimal pl-5 space-y-1">', text)
    text = re.sub(r'\\end\{enumerate\}', r'</ol>', text)
    # Handle \begin{itemize} and \end{itemize}
    text = re.sub(r'\\begin\{itemize\}', r'<ul class="list-disc pl-5 space-y-1">', text)
    text = re.sub(r'\\end\{itemize\}', r'</ul>', text)
    text = re.sub(r'</li>\s*<li>', '</li>\n<li>', text)  # ensure li breaks
    # Wrap consecutive <li> in <ul> or <ol> if not already wrapped
    text = re.sub(r'((?:<li>.*?</li>(?:\s*</?[ul|ol]>)?\s*)+)', 
                  lambda m: f'<ul class="list-disc pl-5 space-y-1">{m.group(1)}</ul>' 
                  if not re.search(r'<[ul|o]l.*?>', m.group(1)[:20]) 
                  else m.group(1), text)
    # Handle \subsection*{...} with brace-balanced content
    text = strip_subsection_braces(text)
    # Handle \emph{...}
    text = re.sub(r'\\emph\{([^}]*)\}', r'<em>\1</em>', text)
    # Clean up extra backslashes at line endings (from \\\\)
    text = re.sub(r'\\\\\s*', '\n', text)
    # remove stray \\ 
    text = re.sub(r'\n\\\s*\n', '\n\n', text)
    text = re.sub(r'(?<!\n)\\\s*\n', '\n', text)
    # Now call the original tex_to_html for standard conversions
    text = convert_tex.tex_to_html(text)
    return text


def build_question_object_v2(q):
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
    
    question_html = improved_tex_to_html(q.get('questionText', ''))
    solution_raw = improved_tex_to_html(q.get('solutionText', ''))
    solution_html = format_step_headers(solution_raw)
    final_answer_html = improved_tex_to_html(q.get('finalAnswerText', ''))
    
    exam_type = q.get('examType', 'CT')
    is_ct = exam_type.upper() == 'CT'
    
    return {
        'id': id_str,
        'discipline': q.get('discipline', 'CSE'),
        'batch': batch,
        'year': q.get('year', 0),
        'examType': 'CT' if is_ct else 'Term Final',
        'examNumber': None,  # .tex files don't encode ct_number in metadata
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


def get_existing_ids():
    """Extract all question IDs from existing data/questions.js."""
    ids = set()
    with open('data/questions.js', 'r', encoding='utf-8') as f:
        content = f.read()
    for m in re.finditer(r'"id":\s*"([^"]+)"', content):
        ids.add(m.group(1))
    return ids


def main():
    files = [
        'answers/CSE-19_CT-1_SecA.tex',
        'answers/CSE-19_CT-2_SecA.tex',
        'answers/CSE-22_CT-1_SecA.tex',
        'answers/CSE-23_CT-1_SecA.tex',
        'answers/CSE-23_CT-1_SecB.tex',
        'answers/CSE-24_CT-1_SecA.tex',
    ]
    
    existing_ids = get_existing_ids()
    print(f"Existing questions: {len(existing_ids)}", file=sys.stderr)
    
    all_new = []
    file_counts = {}
    
    for filepath in files:
        questions = patched_parse_tex_questions(filepath)
        print(f"  {filepath}: {len(questions)} questions", file=sys.stderr)
        
        file_questions = []
        for q in questions:
            obj = build_question_object_v2(q)
            file_questions.append(obj)
        
        all_new.extend(file_questions)
        file_counts[os.path.basename(filepath)] = len(file_questions)
        
        # Check for duplicates
        for q in file_questions:
            qid = q['id']
            if qid in existing_ids:
                print(f"    DUPLICATE: {qid}", file=sys.stderr)
            else:
                existing_ids.add(qid)
    
    print(f"\nTotal new questions: {len(all_new)}", file=sys.stderr)
    
    # Output as JS for insertion into questions.js
    for i, q in enumerate(all_new):
        if i > 0:
            print(',')
        print(format_js_question(q))
    
    # Print summary
    print(f"\nSummary:", file=sys.stderr)
    for fname, count in file_counts.items():
        print(f"  {fname}: {count} questions", file=sys.stderr)
    print(f"  Total: {len(all_new)} questions", file=sys.stderr)


if __name__ == '__main__':
    main()
