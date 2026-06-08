import type { Unit } from '../content/types';
import type { InProgressUnit } from '../lib/storage';
import type { UnitStatus } from '../state/useProgress';
import { ProgressRing } from '../components/ProgressRing';
import { CountdownTimer } from '../components/CountdownTimer';

interface Props {
  units: Unit[];
  statusOf: (id: number) => UnitStatus;
  inProgress: InProgressUnit | null;
  completedCount: number;
  onOpenUnit: (id: number) => void;
  onOpenSettings: () => void;
  onOpenManual: () => void;
  onDeadlineMiss: () => void;
}

export function HomeMap({
  units,
  statusOf,
  inProgress,
  completedCount,
  onOpenUnit,
  onOpenSettings,
  onOpenManual,
  onDeadlineMiss,
}: Props) {
  const total = units.length;
  return (
    <div className="min-h-screen app-bg pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-ink/5 bg-cream/85 backdrop-blur pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-4 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-serif text-xl font-bold text-gold shadow-node">
              P
            </div>
            <div>
              <h1 className="font-serif text-lg font-semibold leading-none text-ink">
                Privatus Trainer
              </h1>
              <p className="mt-0.5 text-xs text-muted">Drill the manual to exhaustion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ProgressRing progress={total ? completedCount / total : 0} size={48} stroke={5}>
              <span className="text-[11px] font-bold tabular-nums text-ink">
                {completedCount}/{total}
              </span>
            </ProgressRing>
            <button
              type="button"
              onClick={onOpenManual}
              aria-label="Read the manual"
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v15l-5-2.5L8 20V5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={onOpenSettings}
              aria-label="Settings"
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* The winding path */}
      <div className="relative mx-auto max-w-2xl px-4 pt-8">
        {/* central guide line */}
        <div
          className="pointer-events-none absolute bottom-8 left-1/2 top-12 w-1 -translate-x-1/2 rounded-full"
          style={{
            background:
              'repeating-linear-gradient(to bottom, rgba(75,46,131,0.18) 0 10px, transparent 10px 22px)',
          }}
        />
        <ol className="relative flex flex-col items-center gap-7">
          {units.map((unit, i) => {
            const status = statusOf(unit.id);
            const offset = Math.round(Math.sin(i * 0.7) * 96);
            const labelOnLeft = offset > 4;
            return (
              <li key={unit.id} className="flex w-full items-center justify-center">
                {/* Shift only the node cluster, not the full-width row, so the
                    zig-zag offset never overflows the viewport on the right. */}
                <div
                  className="flex items-center justify-center"
                  style={{ transform: `translateX(${offset}px)` }}
                >
                  {labelOnLeft && <UnitLabel unit={unit} status={status} align="right" />}
                  <UnitNode
                    unit={unit}
                    status={status}
                    inProgress={status === 'inProgress' ? inProgress : null}
                    onClick={() => onOpenUnit(unit.id)}
                    onDeadlineMiss={onDeadlineMiss}
                  />
                  {!labelOnLeft && <UnitLabel unit={unit} status={status} align="left" />}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function UnitLabel({
  unit,
  status,
  align,
}: {
  unit: Unit;
  status: UnitStatus;
  align: 'left' | 'right';
}) {
  return (
    <div
      className={`hidden w-40 shrink-0 sm:block ${align === 'right' ? 'pr-4 text-right' : 'pl-4 text-left'}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
        Unit {unit.id}
      </p>
      <p className="text-sm font-semibold leading-tight text-ink">{unit.title}</p>
      {status === 'completed' && (
        <p className="mt-0.5 text-xs font-medium text-gold">Mastered</p>
      )}
    </div>
  );
}

function UnitNode({
  unit,
  status,
  inProgress,
  onClick,
  onDeadlineMiss,
}: {
  unit: Unit;
  status: UnitStatus;
  inProgress: InProgressUnit | null;
  onClick: () => void;
  onDeadlineMiss: () => void;
}) {
  const base =
    'group relative flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center rounded-full font-serif text-2xl font-bold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30';

  let look = '';
  let inner: React.ReactNode = unit.id;

  if (status === 'completed') {
    look = 'bg-gold text-white shadow-node hover:-translate-y-0.5 hover:brightness-105';
    inner = (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (status === 'inProgress') {
    look = 'bg-primary text-gold shadow-node ring-4 ring-gold/40 hover:-translate-y-0.5';
  } else {
    look =
      'border-[3px] border-dashed border-primary/30 bg-surface text-primary/70 hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-card';
  }

  return (
    <div className="relative flex flex-col items-center">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Unit ${unit.id}: ${unit.title} — ${status}`}
        className={`${base} ${look}`}
      >
        {inner}
        {status === 'inProgress' && (
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-cream text-[10px] shadow">
            ✎
          </span>
        )}
      </button>
      {/* mobile title */}
      <span className="mt-1.5 max-w-[120px] text-center text-[11px] font-semibold leading-tight text-ink sm:hidden">
        {unit.title}
      </span>
      {status === 'inProgress' && inProgress && (
        <div className="mt-1">
          <CountdownTimer deadline={inProgress.deadline} onExpire={onDeadlineMiss} variant="pill" />
        </div>
      )}
    </div>
  );
}
