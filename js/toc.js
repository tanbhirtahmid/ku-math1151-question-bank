/**
 * toc.js - Table of Contents Management
 */

function getTOC() {
  if (tocHtmlCache) return tocHtmlCache;
  var data = buildTOCData();
  tocHtmlCache = renderTOC(data);
  return tocHtmlCache;
}

function buildTOCData() {
  var map = {};
  questions.forEach(function (q) {
    var groupKey = q.discipline + '-' + q.batch;
    if (!map[groupKey]) {
      map[groupKey] = {
        discipline: q.discipline,
        batch: q.batch,
        exams: {}
      };
    }
    // Include section in key to separate Sec A and Sec B
    var examKey = q.examType + (q.examNumber ? '-' + q.examNumber : '') + '-' + q.section;
    if (!map[groupKey].exams[examKey]) {
      map[groupKey].exams[examKey] = {
        examType: q.examType,
        examNumber: q.examNumber || null,
        section: q.section,
        count: 0
      };
    }
    map[groupKey].exams[examKey].count++;
  });

  var groups = Object.values(map).sort(function (a, b) {
    if (a.batch !== b.batch) return b.batch - a.batch;
    return a.discipline.localeCompare(b.discipline);
  });

  groups.forEach(function (g) {
    g.exams = Object.values(g.exams).sort(function (a, b) {
      // Sort by Exam Type (CT before Final)
      if (a.examType !== b.examType) return a.examType === 'CT' ? -1 : 1;
      // Sort by Exam Number
      if (a.examNumber !== b.examNumber) return (a.examNumber || 0) - (b.examNumber || 0);
      // Sort by Section
      return a.section.localeCompare(b.section);
    });
  });

  return groups;
}

function renderTOC(tocData) {
  return tocData.map(function (group) {
    var examsHtml = group.exams.map(function (exam) {
      var label = exam.examType + (exam.examNumber ? ' ' + exam.examNumber : '');
      return [
        '<li class="toc-exam-item"',
            ' data-discipline="' + group.discipline + '"',
            ' data-batch="' + group.batch + '"',
            ' data-examtype="' + exam.examType + '"',
            ' data-examnumber="' + (exam.examNumber || '') + '"',
            ' data-section="' + exam.section + '"',
            ' role="button" tabindex="0">',
          label + ' (Sec ' + exam.section + ')',
          '<span class="toc-exam-count">(' + exam.count + ')</span>',
        '</li>',
      ].join('');
    }).join('');

    return [
      '<div class="toc-group mb-1">',
        '<div class="toc-group-label" data-group="' + group.discipline + '-' + group.batch + '">',
          '<svg class="toc-chevron open" viewBox="0 0 20 20" fill="currentColor">',
            '<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>',
          '</svg>',
          group.discipline + '-' + group.batch,
        '</div>',
        '<ul class="toc-children">' + examsHtml + '</ul>',
      '</div>',
    ].join('');
  }).join('');
}
