// ─────────────────────────────────────────────────────────────────────────────
// Question bank type definitions.
//
// These are the single source of truth for the shape of every question in the
// app. The generated bank lives in `units.ts` (which aggregates the per-phase
// unit files). Every answer must be verifiable from the Privatus In-Depth Prep
// Study Manual — no invented finance facts.
// ─────────────────────────────────────────────────────────────────────────────

/** Multiple choice — exactly one correct option. */
export interface McqQuestion {
  type: 'mcq';
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/** True / false statement. */
export interface TrueFalseQuestion {
  type: 'trueFalse';
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

/** Fill in the blank — use `___` in the prompt to mark the gap. Lenient typed answer. */
export interface FillBlankQuestion {
  type: 'fillBlank';
  id: string;
  prompt: string;
  accepted: string[];
  explanation: string;
}

/** Type the formula. Checked leniently on spacing/symbols (× ↔ *, − ↔ -, ÷ ↔ /). */
export interface FormulaQuestion {
  type: 'formula';
  id: string;
  prompt: string;
  accepted: string[];
  explanation: string;
}

/** Match each term to its definition. */
export interface MatchingQuestion {
  type: 'matching';
  id: string;
  prompt: string;
  pairs: { left: string; right: string }[];
  explanation?: string;
}

/** Put the items in the correct order (e.g. M&A lifecycle, DCF steps). */
export interface OrderingQuestion {
  type: 'ordering';
  id: string;
  prompt: string;
  correctOrder: string[];
  explanation?: string;
}

/** Tap words to build a sentence/definition. */
export interface WordBankQuestion {
  type: 'wordBank';
  id: string;
  prompt: string;
  answerTokens: string[];
  distractors: string[];
  explanation?: string;
}

/** Open writing — self-graded against a model answer + key points. */
export interface WritingQuestion {
  type: 'writing';
  id: string;
  prompt: string;
  modelAnswer: string;
  keyPoints: string[];
}

export type Question =
  | McqQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | FormulaQuestion
  | MatchingQuestion
  | OrderingQuestion
  | WordBankQuestion
  | WritingQuestion;

export type QuestionType = Question['type'];

export interface Unit {
  id: number;
  day: number;
  title: string;
  subtitle: string;
  questions: Question[];
}
