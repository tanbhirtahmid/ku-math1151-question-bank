/**
 * scripts/apply-tags.js
 * 
 * Applies tags to all questions in data/questions.js based on Phase 8 criteria.
 * 
 * Usage: node scripts/apply-tags.js
 */

const fs = require('fs');
const path = require('path');

// Read the questions file
const questionsFilePath = path.join(__dirname, '..', 'data', 'questions.js');
let content = fs.readFileSync(questionsFilePath, 'utf8');

// Extract the questions array using eval-like parsing (safe since it's our own data)
// We need to parse the JS file - let's use a more robust approach
// The file exports `const questions = [...]` - we'll eval it in a sandbox
let questions;
eval('questions = ' + content.replace('const questions =', '').replace(/;$/, ''));

// Tagging criteria
const integrationTopics = [
  'Substitution',
  'Integration by Parts',
  'Partial Fractions',
  'Trigonometric Integrals',
  'Reduction Formula',
  'Beta Function',
  'Gamma Function',
  'Beta-Gamma Function'
];

const essentialTopics = [
  'Limits & Continuity',
  'Differentiation',
  'Definite Integration',
  'Indefinite Integration'
];

let counts = {
  essential: 0,
  'last-minute': 0,
  'top-integration': 0,
  repeated: 0,
  difficult: 0
};

questions.forEach(q => {
  const tags = [];

  // essential: topics includes any of the core curriculum topics
  if (q.topics.some(t => essentialTopics.indexOf(t) !== -1)) {
    tags.push('essential');
    counts.essential++;
  }

  // last-minute: Easy difficulty OR Short length
  if (q.difficulty === 'Easy' || q.length === 'Short') {
    tags.push('last-minute');
    counts['last-minute']++;
  }

  // top-integration: 2+ integration subtopics, OR (any integration + Hard)
  const matchedIntegrationTopics = q.topics.filter(t => integrationTopics.indexOf(t) !== -1);
  if (matchedIntegrationTopics.length >= 2) {
    tags.push('top-integration');
    counts['top-integration']++;
  } else if (matchedIntegrationTopics.length >= 1 && q.difficulty === 'Hard') {
    tags.push('top-integration');
    counts['top-integration']++;
  }

  // repeated: frequency > 1
  if (q.frequency > 1) {
    tags.push('repeated');
    counts.repeated++;
  }

  // difficult: Hard difficulty OR Long length
  if (q.difficulty === 'Hard' || q.length === 'Long') {
    tags.push('difficult');
    counts.difficult++;
  }

  q.tags = tags;
});

// Print counts
console.log('\n=== Tag Application Results ===\n');
Object.keys(counts).forEach(tag => {
  console.log(`  ${tag}: ${counts[tag]} questions`);
});

console.log('\n=== Comparison with Phase 8 Estimates ===\n');
const estimates = {
  essential: 150,
  'last-minute': 35,
  'top-integration': 28,
  repeated: 32,
  difficult: 55
};

Object.keys(estimates).forEach(tag => {
  const actual = counts[tag];
  const est = estimates[tag];
  const diff = actual - est;
  const pct = Math.round((diff / est) * 100);
  const flag = Math.abs(diff) > 10 ? ' ⚠️ FLAG: deviation > 10' : '';
  console.log(`  ${tag}: ${actual} (estimated ${est}, ${diff >= 0 ? '+' : ''}${diff}, ${pct >= 0 ? '+' : ''}${pct}%)${flag}`);
});

// Serialize back - manually build the JS file content
// We need to preserve the original structure as much as possible
// Let's do a targeted replacement of the tags field in each question object

// First, build a map of id -> tags
const idToTags = {};
questions.forEach(q => {
  idToTags[q.id] = q.tags;
});

// Now do targeted string replacements
// Each question object starts with `    "id": "..."` - find each one and replace its tags field
let modifiedContent = content;
let replaceCount = 0;

// Use regex to find and replace tags array in each question
// Pattern: finds "tags": [...] and replaces with the correct tags
const tagPattern = /"tags":\s*\[([^\]]*)\]/g;

modifiedContent = modifiedContent.replace(tagPattern, (match) => {
  // This is the old tags - we need to find which question this belongs to
  // Since we're doing global replacement and questions are in order, 
  // we need a different approach
  return match; // Placeholder - we'll do proper replacement below
});

// Better approach: find each question ID and update its tags
// Let's iterate through questions and do targeted replacements
let result = content;
questions.forEach(q => {
  const idPattern = new RegExp(`"id":\\s*"${q.id}"`);
  // Find the position of this question's id
  const idMatch = result.match(idPattern);
  if (!idMatch) {
    console.error(`Could not find question with id: ${q.id}`);
    return;
  }
  
  // Find the tags field in this question object
  // We need to find the "tags": [...] after this ID but before the next question
  const startPos = idMatch.index;
  const searchFrom = result.substring(startPos);
  
  // Find the "tags" field
  const tagsPattern = /"tags":\s*\[([^\]]*)\]/;
  const tagsMatch = searchFrom.match(tagsPattern);
  
  if (!tagsMatch) {
    console.error(`Could not find tags field for question: ${q.id}`);
    return;
  }
  
  const oldTagsStr = tagsMatch[0];
  const tagsStr = JSON.stringify(q.tags);
  const newTagsStr = `"tags": ${tagsStr}`;
  
  if (oldTagsStr !== newTagsStr) {
    const before = result.substring(0, startPos + tagsMatch.index);
    const after = result.substring(startPos + tagsMatch.index + oldTagsStr.length);
    result = before + newTagsStr + after;
    replaceCount++;
  }
});

fs.writeFileSync(questionsFilePath, result, 'utf8');
console.log(`\nReplaced ${replaceCount} tags fields.`);
console.log('Done! Tags applied to data/questions.js\n');
