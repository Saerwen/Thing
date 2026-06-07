// ─────────────────────────────────────────────────────────────────────────────
// Answer checking — lenient on format, strict on content.
//
// For fillBlank / formula we normalise both sides before comparing. Formulas
// additionally strip ALL whitespace and treat ×↔*, −↔-, ÷↔/ (and a few common
// equivalents) as equal so the user can type with whatever symbols are handy.
// ─────────────────────────────────────────────────────────────────────────────

/** Lowercase, trim, collapse internal whitespace, strip trailing punctuation. */
export function normalizeText(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?]+$/g, '')
    .trim();
}

/**
 * Normalise a formula: lowercase, strip ALL whitespace, and canonicalise
 * symbols so that multiplication (× x · *), minus (− – -) and division (÷ /)
 * variants all compare equal, plus a few notational tidy-ups.
 */
export function normalizeFormula(input: string): string {
  return input
    .toLowerCase()
    .replace(/\s+/g, '')
    // multiplication
    .replace(/[×x·*]/g, '*')
    // minus / dashes
    .replace(/[−–—-]/g, '-')
    // division
    .replace(/[÷/]/g, '/')
    // common notational tidy-ups
    .replace(/[，]/g, ',')
    .replace(/[（]/g, '(')
    .replace(/[）]/g, ')')
    .replace(/\^/g, '^')
    // strip trailing punctuation
    .replace(/[.;]+$/g, '');
}

/** Check a typed free-text (fillBlank) answer against accepted variants. */
export function checkText(input: string, accepted: string[]): boolean {
  const a = normalizeText(input);
  if (!a) return false;
  return accepted.some((acc) => normalizeText(acc) === a);
}

/** Check a typed formula against accepted variants (symbol/space lenient). */
export function checkFormula(input: string, accepted: string[]): boolean {
  const a = normalizeFormula(input);
  if (!a) return false;
  return accepted.some((acc) => normalizeFormula(acc) === a);
}

/** Whether an ordering answer matches the correct order exactly. */
export function checkOrdering(answer: string[], correctOrder: string[]): boolean {
  if (answer.length !== correctOrder.length) return false;
  return answer.every((item, i) => item === correctOrder[i]);
}

/** Whether a word-bank token sequence matches the target token sequence. */
export function checkWordBank(answer: string[], answerTokens: string[]): boolean {
  if (answer.length !== answerTokens.length) return false;
  return answer.every((tok, i) => normalizeText(tok) === normalizeText(answerTokens[i]));
}
