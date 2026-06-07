// ─────────────────────────────────────────────────────────────────────────────
// One-off manual extractor.
//
// Parses the study manual .docx in ./source into clean Markdown + plain text,
// which are the source of truth used to author the question bank in
// src/content/. Run with:  npm run extract-manual
//
// If you replace the manual, drop the new file in ./source, update the path
// below if needed, re-run this, then update src/content/units/*.ts accordingly.
// ─────────────────────────────────────────────────────────────────────────────

import mammoth from 'mammoth';
import fs from 'node:fs';
import path from 'node:path';

const SOURCE_DIR = 'source';

function findDocx() {
  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.toLowerCase().endsWith('.docx'));
  if (files.length === 0) {
    console.error(`No .docx found in ./${SOURCE_DIR}. Place the manual there first.`);
    process.exit(1);
  }
  return path.join(SOURCE_DIR, files[0]);
}

const docxPath = findDocx();
console.log(`Parsing ${docxPath} ...`);

const md = await mammoth.convertToMarkdown({ path: docxPath });
fs.writeFileSync(path.join(SOURCE_DIR, 'manual.md'), md.value);
console.log(`Wrote ${SOURCE_DIR}/manual.md (${md.value.length} chars)`);

const txt = await mammoth.extractRawText({ path: docxPath });
fs.writeFileSync(path.join(SOURCE_DIR, 'manual.txt'), txt.value);
console.log(`Wrote ${SOURCE_DIR}/manual.txt (${txt.value.length} chars)`);

if (md.messages.length) {
  console.log('Conversion messages:', md.messages.slice(0, 10));
}
