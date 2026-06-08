import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Question, Unit } from '../content/types';
import type { InProgressUnit } from '../lib/storage';
import { QuestionRenderer } from '../components/questions/QuestionRenderer';
import { evaluate, isAnswered, typeLabel } from '../components/questions/evaluate';
import { CountdownTimer } from '../components/CountdownTimer';
import { shuffle } from '../lib/shuffle';
import { playCorrect, playWrong } from '../lib/sound';

export interface SessionStats {
  answered: number;
  correct: number;
  xp: number;
  elapsedMs: number;
  total: number;
}

interface Props {
  unit: Unit;
  /** Present in normal (deadline) mode; null in practice mode. */
  inProgress: InProgressUnit | null;
  practice: boolean;
  soundOn: boolean;
  /** Persist one answer (normal mode only). */
  onAnswer: (questionId: string, correct: boolean) => void;
  onComplete: (stats: SessionStats) => void;
  onDeadlineMiss: () => void;
  onExit: () => void;
}

type Phase = 'answering' | 'feedback';

export function Lesson({
  unit,
  inProgress,
  practice,
  soundOn,
  onAnswer,
  onComplete,
  onDeadlineMiss,
  onExit,
}: Props) {
  const byId = useMemo(() => {
    const m = new Map<string, Question>();
    unit.questions.forEach((q) => m.set(q.id, q));
    return m;
  }, [unit]);

  const initialOutstanding = useMemo(
    () => (practice ? unit.questions.map((q) => q.id) : (inProgress?.outstandingIds ?? [])),
    // only at mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [remaining, setRemaining] = useState<Set<string>>(() => new Set(initialOutstanding));
  const [queue, setQueue] = useState<string[]>(() => shuffle(initialOutstanding));
  const [pos, setPos] = useState(0);
  const [round, setRound] = useState(1);

  const [answer, setAnswer] = useState<unknown>(null);
  const [phase, setPhase] = useState<Phase>('answering');
  const [correct, setCorrect] = useState<boolean | null>(null);

  // Local session stats (per-session accuracy / XP / time).
  const [stats, setStats] = useState<SessionStats>({
    answered: 0,
    correct: 0,
    xp: 0,
    elapsedMs: 0,
    total: unit.questions.length,
  });
  const [startedAt] = useState(() => Date.now());

  const total = unit.questions.length;
  const masteredCount = total - remaining.size;
  const progress = total === 0 ? 0 : masteredCount / total;

  const currentId = queue[pos];
  const question = currentId ? byId.get(currentId) : undefined;

  const buildStats = useCallback(
    (override?: Partial<SessionStats>): SessionStats => ({
      ...stats,
      elapsedMs: Date.now() - startedAt,
      ...override,
    }),
    [stats, startedAt],
  );

  const advance = useCallback(() => {
    setAnswer(null);
    setCorrect(null);
    setPhase('answering');
    if (pos + 1 < queue.length) {
      setPos(pos + 1);
      return;
    }
    // Round finished. Anything still outstanding → start a review round.
    const left = [...remaining];
    if (left.length > 0) {
      setQueue(shuffle(left));
      setPos(0);
      setRound((r) => r + 1);
    } else {
      onComplete(buildStats());
    }
  }, [pos, queue.length, remaining, onComplete, buildStats]);

  const applyResult = useCallback(
    (c: boolean) => {
      if (!question) return;
      setStats((s) => ({
        ...s,
        answered: s.answered + 1,
        correct: s.correct + (c ? 1 : 0),
        xp: s.xp + (c ? 10 : 0),
      }));
      if (!practice) onAnswer(question.id, c);
      if (c) {
        setRemaining((prev) => {
          const next = new Set(prev);
          next.delete(question.id);
          return next;
        });
      }
      if (c) playCorrect(soundOn);
      else playWrong(soundOn);
    },
    [question, practice, onAnswer, soundOn],
  );

  const submit = useCallback(() => {
    if (!question || phase !== 'answering' || !isAnswered(question, answer)) return;
    setPhase('feedback');
    if (question.type === 'writing') {
      // Reveal model answer; correctness comes from Got it / Missed it.
      setCorrect(null);
      return;
    }
    const c = evaluate(question, answer);
    setCorrect(c);
    applyResult(c);
  }, [question, phase, answer, applyResult]);

  const selfGrade = useCallback(
    (got: boolean) => {
      // Record the result and fall through to the standard graded-feedback view
      // (with a Continue button). We deliberately do NOT auto-advance here so we
      // never act on a stale `remaining`/`stats` closure for the final question.
      setCorrect(got);
      applyResult(got);
    },
    [applyResult],
  );

  // Keyboard support: Enter submits/continues; digits pick MCQ/TF options.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === 'TEXTAREA';
      if (e.key === 'Enter') {
        if (phase === 'answering') {
          if (question && isAnswered(question, answer)) {
            e.preventDefault();
            submit();
          }
        } else if (phase === 'feedback' && !(question?.type === 'writing' && correct === null)) {
          // Continue is available once a graded result exists (writing requires
          // a Got it / Missed it self-grade first).
          e.preventDefault();
          advance();
        }
        return;
      }
      if (phase === 'answering' && !typing && question) {
        if (question.type === 'mcq' && /^[1-9]$/.test(e.key)) {
          const idx = Number(e.key) - 1;
          if (idx < question.options.length) setAnswer(idx);
        } else if (question.type === 'trueFalse') {
          if (e.key === '1' || e.key.toLowerCase() === 't') setAnswer(true);
          if (e.key === '2' || e.key.toLowerCase() === 'f') setAnswer(false);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, question, answer, correct, submit, advance]);

  if (!question) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted">Loading…</p>
      </div>
    );
  }

  const canSubmit = isAnswered(question, answer);
  const isWriting = question.type === 'writing';

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header: exit, progress bar, remaining, countdown */}
      <header className="sticky top-0 z-20 border-b border-ink/5 bg-cream/90 backdrop-blur pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={onExit}
            aria-label="Pause and return to map"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-gold transition-all duration-500"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
          {practice ? (
            <span className="shrink-0 rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold text-teal">
              Practice
            </span>
          ) : inProgress ? (
            <CountdownTimer
              deadline={inProgress.deadline}
              onExpire={onDeadlineMiss}
              variant="pill"
            />
          ) : null}
        </div>
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 pb-2 text-xs">
          <span className="font-semibold text-primary">
            {unit.title}
          </span>
          <span className="flex items-center gap-2 text-muted">
            {round > 1 && (
              <span className="rounded-full bg-error/10 px-2 py-0.5 font-semibold text-error">
                Review round {round}
              </span>
            )}
            <span className="font-semibold text-ink">{remaining.size}</span> remaining
          </span>
        </div>
      </header>

      {/* Question */}
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">
        <div
          key={`${question.id}-${round}`}
          className={`animate-slide-up ${phase === 'feedback' && correct === false ? 'animate-shake' : ''}`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {typeLabel(question.type)}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-ink">
            {questionPrompt(question)}
          </h2>
          <div className="mt-6">
            <QuestionRenderer
              question={question}
              answer={answer}
              setAnswer={setAnswer}
              submitted={phase === 'feedback'}
            />
          </div>
        </div>
      </main>

      {/* Feedback / action bar */}
      <FeedbackBar
        phase={phase}
        question={question}
        correct={correct}
        canSubmit={canSubmit}
        isWriting={isWriting}
        onSubmit={submit}
        onContinue={advance}
        onSelfGrade={selfGrade}
      />
    </div>
  );
}

function questionPrompt(q: Question): string {
  if (q.type === 'trueFalse') return q.statement;
  return q.prompt;
}

// ─── Bottom feedback / action bar ────────────────────────────────────────────
function FeedbackBar({
  phase,
  question,
  correct,
  canSubmit,
  isWriting,
  onSubmit,
  onContinue,
  onSelfGrade,
}: {
  phase: Phase;
  question: Question;
  correct: boolean | null;
  canSubmit: boolean;
  isWriting: boolean;
  onSubmit: () => void;
  onContinue: () => void;
  onSelfGrade: (got: boolean) => void;
}) {
  const explanation = 'explanation' in question ? question.explanation : undefined;

  // Answering state
  if (phase === 'answering') {
    return (
      <footer className="sticky bottom-0 border-t border-ink/5 bg-surface/95 backdrop-blur pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-2xl justify-end px-4 py-4">
          <button
            type="button"
            disabled={!canSubmit}
            onClick={onSubmit}
            className="btn-primary min-w-[10rem]"
          >
            {isWriting ? 'Reveal model answer' : 'Check'}
          </button>
        </div>
      </footer>
    );
  }

  // Feedback state for writing (self-grade)
  if (isWriting && correct === null) {
    return (
      <footer className="sticky bottom-0 border-t-2 border-gold/30 bg-gold/5 backdrop-blur pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-2xl px-4 py-4">
          <p className="mb-3 text-center font-serif text-lg font-semibold text-ink">
            Did you cover the key points?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => onSelfGrade(false)} className="btn-outline">
              Missed it
            </button>
            <button type="button" onClick={() => onSelfGrade(true)} className="btn-gold">
              Got it
            </button>
          </div>
        </div>
      </footer>
    );
  }

  // Feedback state for graded questions
  const good = correct === true;
  return (
    <footer
      className={`sticky bottom-0 border-t-2 backdrop-blur pb-[env(safe-area-inset-bottom)] ${
        good ? 'border-success/30 bg-success/5' : 'border-error/30 bg-error/5'
      }`}
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
              good ? 'bg-success text-white' : 'bg-error text-white'
            }`}
          >
            {good ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="48"
                  className="animate-check-draw"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div>
            <p className={`font-serif text-lg font-semibold ${good ? 'text-success' : 'text-error'}`}>
              {good ? 'Correct' : 'Not quite'}
            </p>
            {explanation && <p className="mt-0.5 text-sm leading-relaxed text-ink/80">{explanation}</p>}
          </div>
        </div>
        <button type="button" onClick={onContinue} className="btn-primary shrink-0 min-w-[8rem]">
          Continue
        </button>
      </div>
    </footer>
  );
}
