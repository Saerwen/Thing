// ─────────────────────────────────────────────────────────────────────────────
// Build the readable Manual content (src/content/manualContent.ts) from the
// parsed manual Markdown (source/manual.md). Run with:  npm run build-manual
//
// The output is structured, typed data the in-app Manual reader renders — so the
// whole manual ships in the bundle and works offline. Re-run after the manual
// changes (npm run extract-manual first).
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'node:fs';

const SRC = 'source/manual.md';
const OUT = 'src/content/manualContent.ts';

const raw = fs.readFileSync(SRC, 'utf8');

// Undo mammoth's backslash escaping (\(, \-, \. …) but keep real words intact.
const unescape = (s) => s.replace(/\\([^A-Za-z0-9\s])/g, '$1');

const lines = raw.split('\n').map(unescape);

const CALLOUTS = {
  'Watch out': 'watch',
  'Privatus angle': 'privatus',
  'Practice today': 'practice',
  'Worked example': 'worked',
};

const isBoldOnly = (l) => /^__.+__$/.test(l.trim());
const boldLabel = (l) => l.trim().replace(/^__/, '').replace(/__$/, '').trim();

// A line is a formula if it has = or ≈ and reads like math, not prose.
function looksLikeFormula(l) {
  const t = l.trim();
  if (!/[=≈]/.test(t)) return false;
  if (/[×÷−√βΔ%]/.test(t)) return true; // explicit math symbols
  // short, no trailing sentence punctuation, has an operator
  const words = t.split(/\s+/).length;
  return words <= 14 && /[+/*()]/.test(t) && !/[.:]$/.test(t);
}

const sections = [];
let cur = null; // current section
let curPhase = '';
let pendingCallout = null; // accumulate paragraphs into a callout
let pendingList = null; // accumulate consecutive list items

function endList() {
  pendingList = null;
}
function pushBlock(block) {
  endList();
  if (pendingCallout && (block.type === 'paragraph' || block.type === 'formula')) {
    pendingCallout.body.push(block);
  } else {
    pendingCallout = null;
    cur.blocks.push(block);
  }
}

let inFormulaAppendix = false;
let inGlossary = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const t = line.trim();
  if (!t) {
    endList();
    continue;
  }

  // Headings
  if (t.startsWith('# ')) {
    const title = t.replace(/^#\s+/, '');
    pendingCallout = null;
    endList();
    inFormulaAppendix = /^Appendix 1/i.test(title);
    inGlossary = /^Appendix 2/i.test(title);
    if (/^Phase /i.test(title)) {
      curPhase = title;
      continue; // phase is just a grouping label
    }
    let kind = 'intro';
    if (inFormulaAppendix) kind = 'formulas';
    else if (inGlossary) kind = 'glossary';
    cur = { id: sections.length, kind, phase: '', day: null, title, subtitle: '', blocks: [] };
    sections.push(cur);
    continue;
  }
  if (t.startsWith('## ')) {
    const title = t.replace(/^##\s+/, '');
    pendingCallout = null;
    endList();
    const m = title.match(/^Day\s+(\d+)/i);
    cur = {
      id: sections.length,
      kind: m ? 'day' : 'section',
      phase: m ? curPhase : '',
      day: m ? Number(m[1]) : null,
      title,
      subtitle: '',
      blocks: [],
    };
    sections.push(cur);
    continue;
  }
  if (!cur) continue; // skip preamble before first heading

  if (t.startsWith('### ')) {
    pushBlock({ type: 'subheading', text: t.replace(/^###\s+/, '') });
    continue;
  }

  // Italic goal/note line: *...*
  if (/^\*.+\*$/.test(t)) {
    const text = t.replace(/^\*/, '').replace(/\*$/, '').trim();
    if (cur.kind === 'day' && !cur.subtitle && cur.blocks.length === 0) {
      cur.subtitle = text;
    } else {
      pushBlock({ type: 'note', text });
    }
    continue;
  }

  // Callout labels
  if (isBoldOnly(t) && CALLOUTS[boldLabel(t)]) {
    endList();
    pendingCallout = { type: 'callout', variant: CALLOUTS[boldLabel(t)], label: boldLabel(t), body: [] };
    cur.blocks.push(pendingCallout);
    continue;
  }

  // Glossary: a bold-only line is a term, next paragraph is the definition.
  if (inGlossary) {
    if (boldLabel(t) === 'Term' || boldLabel(t) === 'Meaning') continue; // table headers
    if (isBoldOnly(t)) {
      // find next non-empty line as the definition
      let j = i + 1;
      while (j < lines.length && !lines[j].trim()) j++;
      const def = j < lines.length ? lines[j].trim() : '';
      cur.blocks.push({ type: 'definition', term: boldLabel(t), def });
      i = j;
      continue;
    }
  }

  // Lists
  const ol = t.match(/^(\d+)\.\s+(.*)$/);
  if (ol) {
    if (!pendingList || !pendingList.ordered) {
      pendingList = { type: 'list', ordered: true, items: [] };
      if (pendingCallout) pendingCallout.body.push(pendingList);
      else cur.blocks.push(pendingList);
    }
    pendingList.items.push(ol[2]);
    continue;
  }
  const ul = t.match(/^[-•]\s+(.*)$/);
  if (ul) {
    if (!pendingList || pendingList.ordered) {
      pendingList = { type: 'list', ordered: false, items: [] };
      if (pendingCallout) pendingCallout.body.push(pendingList);
      else cur.blocks.push(pendingList);
    }
    pendingList.items.push(ul[1]);
    continue;
  }
  endList();

  // Formula (in appendix, every content line is one; elsewhere by heuristic)
  if (inFormulaAppendix || looksLikeFormula(t)) {
    pushBlock({ type: 'formula', text: t.replace(/\s{2,}/g, ' ') });
    continue;
  }

  // Default: paragraph
  pushBlock({ type: 'paragraph', text: t });
}

const banner =
  '// AUTO-GENERATED from source/manual.md by scripts/build-manual.mjs — do not edit by hand.\n' +
  '// Re-generate with: npm run build-manual\n\n';

const types = `export type ManualBlock =
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'note'; text: string }
  | { type: 'formula'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'definition'; term: string; def: string }
  | { type: 'callout'; variant: 'watch' | 'privatus' | 'practice' | 'worked'; label: string; body: ManualBlock[] };

export interface ManualSection {
  id: number;
  kind: 'intro' | 'day' | 'section' | 'formulas' | 'glossary';
  phase: string;
  day: number | null;
  title: string;
  subtitle: string;
  blocks: ManualBlock[];
}

`;

const body = `export const manualSections: ManualSection[] = ${JSON.stringify(sections, null, 2)};\n`;

fs.writeFileSync(OUT, banner + types + body);
console.log(`Wrote ${OUT}: ${sections.length} sections.`);
const counts = sections.reduce((a, s) => ((a[s.kind] = (a[s.kind] || 0) + 1), a), {});
console.log('Section kinds:', counts);
