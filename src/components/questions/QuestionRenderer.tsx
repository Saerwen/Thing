import { useEffect, useMemo, useRef, useState } from 'react';
import type {
  Question,
  McqQuestion,
  TrueFalseQuestion,
  FillBlankQuestion,
  FormulaQuestion,
  MatchingQuestion,
  OrderingQuestion,
  WordBankQuestion,
  WritingQuestion,
} from '../../content/types';
import { shuffle } from '../../lib/shuffle';
import type { MatchingAnswer } from './evaluate';

interface RendererProps {
  question: Question;
  answer: unknown;
  setAnswer: (a: unknown) => void;
  submitted: boolean;
}

export function QuestionRenderer(props: RendererProps) {
  const { question } = props;
  switch (question.type) {
    case 'mcq':
      return <McqView {...props} question={question} />;
    case 'trueFalse':
      return <TrueFalseView {...props} question={question} />;
    case 'fillBlank':
    case 'formula':
      return <TextView {...props} question={question} />;
    case 'matching':
      return <MatchingView {...props} question={question} />;
    case 'ordering':
      return <OrderingView {...props} question={question} />;
    case 'wordBank':
      return <WordBankView {...props} question={question} />;
    case 'writing':
      return <WritingView {...props} question={question} />;
  }
}

// ─── Multiple choice ─────────────────────────────────────────────────────────
function McqView({
  question,
  answer,
  setAnswer,
  submitted,
}: RendererProps & { question: McqQuestion }) {
  const selected = answer as number | null;
  return (
    <div className="grid gap-3">
      {question.options.map((opt, i) => {
        const isSel = selected === i;
        const isCorrect = i === question.correctIndex;
        let cls = 'border-ink/10 bg-surface hover:border-primary/40 hover:bg-primary/5';
        if (submitted) {
          if (isCorrect) cls = 'border-success bg-success/10 text-success';
          else if (isSel) cls = 'border-error bg-error/10 text-error';
          else cls = 'border-ink/10 bg-surface opacity-60';
        } else if (isSel) {
          cls = 'border-primary bg-primary/5 ring-2 ring-primary/30';
        }
        return (
          <button
            key={i}
            type="button"
            disabled={submitted}
            onClick={() => setAnswer(i)}
            className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left font-medium transition-all ${cls}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current/30 text-sm font-bold">
              {String.fromCharCode(65 + i)}
            </span>
            <span>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── True / false ────────────────────────────────────────────────────────────
function TrueFalseView({
  question,
  answer,
  setAnswer,
  submitted,
}: RendererProps & { question: TrueFalseQuestion }) {
  const selected = answer as boolean | null;
  const opts: { label: string; val: boolean }[] = [
    { label: 'True', val: true },
    { label: 'False', val: false },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {opts.map((o) => {
        const isSel = selected === o.val;
        const isCorrect = question.isTrue === o.val;
        let cls = 'border-ink/10 bg-surface hover:border-primary/40 hover:bg-primary/5';
        if (submitted) {
          if (isCorrect) cls = 'border-success bg-success/10 text-success';
          else if (isSel) cls = 'border-error bg-error/10 text-error';
          else cls = 'border-ink/10 bg-surface opacity-60';
        } else if (isSel) {
          cls = 'border-primary bg-primary/5 ring-2 ring-primary/30';
        }
        return (
          <button
            key={o.label}
            type="button"
            disabled={submitted}
            onClick={() => setAnswer(o.val)}
            className={`rounded-2xl border-2 px-4 py-5 text-lg font-semibold transition-all ${cls}`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Fill blank / formula (typed) ────────────────────────────────────────────
function TextView({
  question,
  answer,
  setAnswer,
  submitted,
}: RendererProps & { question: FillBlankQuestion | FormulaQuestion }) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!submitted) ref.current?.focus();
  }, [submitted, question.id]);
  const value = (answer as string) ?? '';
  return (
    <div className="grid gap-3">
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        disabled={submitted}
        value={value}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={question.type === 'formula' ? 'Type the formula…' : 'Type your answer…'}
        className={`w-full rounded-2xl border-2 px-4 py-4 text-lg outline-none transition-all ${
          question.type === 'formula' ? 'font-mono' : ''
        } ${
          submitted
            ? 'border-ink/10 bg-cream'
            : 'border-ink/15 bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20'
        }`}
      />
      {submitted && (
        <p className="text-sm text-muted">
          Accepted answer:{' '}
          <span className={question.type === 'formula' ? 'font-mono text-ink' : 'text-ink'}>
            {question.accepted[0]}
          </span>
        </p>
      )}
    </div>
  );
}

// ─── Matching ────────────────────────────────────────────────────────────────
function MatchingView({
  question,
  answer,
  setAnswer,
  submitted,
}: RendererProps & { question: MatchingQuestion }) {
  // Shuffle the right-hand options once per question (re-shuffle only on change).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rights = useMemo(() => shuffle(question.pairs.map((p) => p.right)), [question.id]);
  const map = (answer as MatchingAnswer) ?? {};
  const update = (left: string, right: string) => {
    setAnswer({ ...map, [left]: right });
  };
  return (
    <div className="grid gap-3">
      {question.pairs.map((p) => {
        const chosen = map[p.left] ?? '';
        const correct = chosen === p.right;
        let border = 'border-ink/15';
        if (submitted) border = correct ? 'border-success' : 'border-error';
        return (
          <div
            key={p.left}
            className={`grid items-center gap-3 rounded-2xl border-2 bg-surface p-3 sm:grid-cols-2 ${border}`}
          >
            <div className="font-semibold text-ink">{p.left}</div>
            <select
              disabled={submitted}
              value={chosen}
              onChange={(e) => update(p.left, e.target.value)}
              className={`w-full rounded-xl border-2 bg-cream px-3 py-2.5 text-sm outline-none transition-all ${
                submitted
                  ? correct
                    ? 'border-success/40 text-success'
                    : 'border-error/40 text-error'
                  : 'border-ink/15 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }`}
            >
              <option value="">— choose —</option>
              {rights.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {submitted && !correct && (
              <p className="text-xs text-success sm:col-span-2">Correct: {p.right}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Tap-to-build (shared by ordering & wordBank) ────────────────────────────
function TapBuilder({
  chips,
  correctSeq,
  submitted,
  onChange,
}: {
  chips: string[];
  correctSeq: string[];
  submitted: boolean;
  onChange: (orderedTexts: string[]) => void;
}) {
  const items = useMemo(
    () => shuffle(chips.map((text, id) => ({ id, text }))),
    // re-shuffle only when the chip set changes
    [chips],
  );
  const [placedIds, setPlacedIds] = useState<number[]>([]);
  useEffect(() => {
    setPlacedIds([]);
  }, [chips]);

  const placedSet = new Set(placedIds);
  const pool = items.filter((it) => !placedSet.has(it.id));
  const textOf = (id: number) => items.find((it) => it.id === id)!.text;

  const sync = (ids: number[]) => {
    setPlacedIds(ids);
    onChange(ids.map(textOf));
  };

  return (
    <div className="grid gap-4">
      {/* answer tray */}
      <div className="flex min-h-[3.5rem] flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed border-ink/15 bg-cream p-3">
        {placedIds.length === 0 && (
          <span className="self-center text-sm text-muted">Tap below to build your answer…</span>
        )}
        {placedIds.map((id, idx) => {
          const text = textOf(id);
          let cls = 'border-primary/40 bg-primary/10 text-primary';
          if (submitted) {
            cls =
              text === correctSeq[idx]
                ? 'border-success bg-success/10 text-success'
                : 'border-error bg-error/10 text-error';
          }
          return (
            <button
              key={id}
              type="button"
              disabled={submitted}
              onClick={() => sync(placedIds.filter((_, i) => i !== idx))}
              className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all ${cls}`}
            >
              <span className="mr-1 text-xs opacity-60">{idx + 1}.</span>
              {text}
            </button>
          );
        })}
      </div>
      {/* token pool */}
      <div className="flex flex-wrap gap-2">
        {pool.map((it) => (
          <button
            key={it.id}
            type="button"
            disabled={submitted}
            onClick={() => sync([...placedIds, it.id])}
            className="rounded-xl border-2 border-ink/15 bg-surface px-3 py-2 text-sm font-semibold text-ink transition-all hover:border-primary/40 hover:bg-primary/5 disabled:opacity-40"
          >
            {it.text}
          </button>
        ))}
      </div>
      {submitted && (
        <p className="text-sm text-muted">
          Correct order:{' '}
          <span className="font-medium text-ink">{correctSeq.join('  →  ')}</span>
        </p>
      )}
    </div>
  );
}

function OrderingView({
  question,
  setAnswer,
  submitted,
}: RendererProps & { question: OrderingQuestion }) {
  return (
    <TapBuilder
      chips={question.correctOrder}
      correctSeq={question.correctOrder}
      submitted={submitted}
      onChange={(texts) => setAnswer(texts)}
    />
  );
}

function WordBankView({
  question,
  setAnswer,
  submitted,
}: RendererProps & { question: WordBankQuestion }) {
  const chips = useMemo(
    () => [...question.answerTokens, ...question.distractors],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [question.id],
  );
  return (
    <TapBuilder
      chips={chips}
      correctSeq={question.answerTokens}
      submitted={submitted}
      onChange={(texts) => setAnswer(texts)}
    />
  );
}

// ─── Writing (self-graded) ───────────────────────────────────────────────────
function WritingView({
  question,
  answer,
  setAnswer,
  submitted,
}: RendererProps & { question: WritingQuestion }) {
  const value = (answer as string) ?? '';
  return (
    <div className="grid gap-4">
      <textarea
        disabled={submitted}
        value={value}
        onChange={(e) => setAnswer(e.target.value)}
        rows={5}
        placeholder="Write your answer here, then reveal the model answer to self-check…"
        className={`w-full resize-y rounded-2xl border-2 px-4 py-3 text-base outline-none transition-all ${
          submitted
            ? 'border-ink/10 bg-cream'
            : 'border-ink/15 bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20'
        }`}
      />
      {submitted && (
        <div className="grid gap-3 rounded-2xl border-2 border-gold/40 bg-gold/5 p-4 animate-slide-up">
          <div>
            <h4 className="font-serif text-lg font-semibold text-ink">Model answer</h4>
            <p className="mt-1 text-sm leading-relaxed text-ink/90">{question.modelAnswer}</p>
          </div>
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wide text-muted">
              Key points to cover
            </h5>
            <ul className="mt-1.5 grid gap-1">
              {question.keyPoints.map((k, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink/90">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
