import type { Question } from '../../content/types';
import { checkText, checkFormula, checkOrdering, checkWordBank } from '../../lib/answerCheck';

/** Matching answers map each left term to the selected right term. */
export type MatchingAnswer = Record<string, string>;

/** Whether the user has provided enough of an answer to submit. */
export function isAnswered(q: Question, a: unknown): boolean {
  switch (q.type) {
    case 'mcq':
      return typeof a === 'number';
    case 'trueFalse':
      return typeof a === 'boolean';
    case 'fillBlank':
    case 'formula':
      return typeof a === 'string' && a.trim().length > 0;
    case 'matching': {
      const m = (a as MatchingAnswer) ?? {};
      return q.pairs.every((p) => m[p.left] != null && m[p.left] !== '');
    }
    case 'ordering':
      return Array.isArray(a) && a.length === q.correctOrder.length;
    case 'wordBank':
      return Array.isArray(a) && (a as string[]).length > 0;
    case 'writing':
      // Writing is self-graded; we allow submit (reveal) any time.
      return true;
  }
}

/** Auto-grade a non-writing question. Writing is graded by the user (Got it / Missed it). */
export function evaluate(q: Question, a: unknown): boolean {
  switch (q.type) {
    case 'mcq':
      return a === q.correctIndex;
    case 'trueFalse':
      return a === q.isTrue;
    case 'fillBlank':
      return checkText(String(a ?? ''), q.accepted);
    case 'formula':
      return checkFormula(String(a ?? ''), q.accepted);
    case 'matching': {
      const m = (a as MatchingAnswer) ?? {};
      return q.pairs.every((p) => m[p.left] === p.right);
    }
    case 'ordering':
      return checkOrdering((a as string[]) ?? [], q.correctOrder);
    case 'wordBank':
      return checkWordBank((a as string[]) ?? [], q.answerTokens);
    case 'writing':
      return false;
  }
}

/** Human-readable label for a question type (shown as a small chip). */
export function typeLabel(type: Question['type']): string {
  switch (type) {
    case 'mcq':
      return 'Multiple choice';
    case 'trueFalse':
      return 'True or false';
    case 'fillBlank':
      return 'Fill the blank';
    case 'formula':
      return 'Type the formula';
    case 'matching':
      return 'Match the pairs';
    case 'ordering':
      return 'Put in order';
    case 'wordBank':
      return 'Build the answer';
    case 'writing':
      return 'Write it out';
  }
}
