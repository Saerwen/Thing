import { useState } from 'react';
import { DEADLINE_MODE } from '../lib/deadline';
import { advanceClock, getClockOffsetMs, now, resetClock, setClockOffsetMs } from '../lib/time';

interface Props {
  soundOn: boolean;
  onToggleSound: () => void;
  onReset: () => void;
  onClose: () => void;
}

export function Settings({ soundOn, onToggleSound, onReset, onClose }: Props) {
  const [, force] = useState(0);
  const rerender = () => force((n) => n + 1);
  const [confirming, setConfirming] = useState(false);

  const offset = getClockOffsetMs();
  const simulated = new Date(now());

  const jumpToBeforeMidnight = () => {
    const d = new Date(now());
    const nextMidnight = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0, 0);
    const target = nextMidnight.getTime() - 60 * 1000; // 1 min before midnight
    setClockOffsetMs(target - Date.now());
    rerender();
  };

  const crossMidnight = () => {
    const d = new Date(now());
    const justAfter = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 30, 0);
    setClockOffsetMs(justAfter.getTime() - Date.now());
    rerender();
  };

  return (
    <div className="min-h-screen app-bg pb-20">
      <header className="sticky top-0 z-20 border-b border-ink/5 bg-cream/85 backdrop-blur pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex max-w-xl items-center gap-3 px-4 py-3.5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-ink/5 hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="font-serif text-xl font-semibold text-ink">Settings</h1>
        </div>
      </header>

      <div className="mx-auto max-w-xl space-y-6 px-4 py-6">
        {/* Sound */}
        <section className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg font-semibold text-ink">Sound effects</h2>
              <p className="text-sm text-muted">Chimes on correct, complete and victory.</p>
            </div>
            <Toggle on={soundOn} onClick={onToggleSound} label="Sound effects" />
          </div>
        </section>

        {/* Deadline mode (configured via a constant in code) */}
        <section className="card p-5">
          <h2 className="font-serif text-lg font-semibold text-ink">Deadline rule</h2>
          <p className="mt-1 text-sm text-muted">
            You must finish a unit before the upcoming midnight. Current mode:{' '}
            <span className="font-semibold text-primary">{DEADLINE_MODE}</span>.
          </p>
          <p className="mt-2 text-xs text-muted">
            To switch between <code className="rounded bg-ink/5 px-1">'midnight'</code> and{' '}
            <code className="rounded bg-ink/5 px-1">'plus24h'</code>, edit{' '}
            <code className="rounded bg-ink/5 px-1">DEADLINE_MODE</code> in{' '}
            <code className="rounded bg-ink/5 px-1">src/lib/deadline.ts</code>.
          </p>
        </section>

        {/* Dev / test time travel */}
        <section className="card border-2 border-dashed border-teal/30 p-5">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold text-teal">
              DEV
            </span>
            <h2 className="font-serif text-lg font-semibold text-ink">Time travel</h2>
          </div>
          <p className="mt-1 text-sm text-muted">
            Override “now” to test the countdown, deadline and failure-reset flow without waiting for
            real midnight.
          </p>
          <p className="mt-3 rounded-xl bg-ink/5 px-3 py-2 text-sm">
            Simulated now:{' '}
            <span className="font-semibold tabular-nums text-ink">
              {simulated.toLocaleString()}
            </span>
            {offset !== 0 && (
              <span className="ml-2 text-xs text-teal">
                (offset {(offset / 3600000).toFixed(1)}h)
              </span>
            )}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <DevBtn onClick={() => { advanceClock(60 * 60 * 1000); rerender(); }}>+1 hour</DevBtn>
            <DevBtn onClick={() => { advanceClock(6 * 60 * 60 * 1000); rerender(); }}>+6 hours</DevBtn>
            <DevBtn onClick={jumpToBeforeMidnight}>1 min to midnight</DevBtn>
            <DevBtn onClick={crossMidnight}>Cross midnight</DevBtn>
            <DevBtn onClick={() => { resetClock(); rerender(); }}>Reset clock</DevBtn>
          </div>
          <p className="mt-2 text-xs text-muted">
            “Cross midnight” will trigger the failure modal for any in-progress unit on the next tick
            or reload.
          </p>
        </section>

        {/* Reset everything */}
        <section className="card border border-error/20 p-5">
          <h2 className="font-serif text-lg font-semibold text-error">Reset everything</h2>
          <p className="mt-1 text-sm text-muted">
            Permanently clears completed units, any in-progress unit, and settings.
          </p>
          {confirming ? (
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  onReset();
                  setConfirming(false);
                }}
                className="btn bg-error text-white hover:brightness-110"
              >
                Yes, wipe it all
              </button>
              <button type="button" onClick={() => setConfirming(false)} className="btn-outline">
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="btn-outline mt-3 border-error/30 text-error hover:bg-error/5"
            >
              Reset progress
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className={`relative h-7 w-12 rounded-full transition-colors ${on ? 'bg-success' : 'bg-ink/20'}`}
    >
      <span
        className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          on ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

function DevBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border border-teal/30 bg-teal/5 px-3 py-2 text-sm font-semibold text-teal transition-colors hover:bg-teal/10"
    >
      {children}
    </button>
  );
}
