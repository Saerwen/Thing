import { useEffect } from 'react';
import type { Unit } from '../content/types';
import type { SessionStats } from './Lesson';
import { ProgressRing } from '../components/ProgressRing';
import { burstUnitComplete } from '../lib/confetti';
import { playComplete } from '../lib/sound';

interface Props {
  unit: Unit;
  stats: SessionStats;
  practice: boolean;
  soundOn: boolean;
  onBackToMap: () => void;
}

export function UnitResults({ unit, stats, practice, soundOn, onBackToMap }: Props) {
  useEffect(() => {
    burstUnitComplete();
    playComplete(soundOn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const accuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 100;
  const minutes = Math.floor(stats.elapsedMs / 60000);
  const seconds = Math.floor((stats.elapsedMs % 60000) / 1000);
  const timeLabel = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  return (
    <div className="flex min-h-screen app-bg items-center justify-center px-4 py-10">
      <div className="card w-full max-w-lg overflow-hidden animate-pop">
        <div className="bg-primary px-6 py-8 text-center text-white">
          <ProgressRing progress={1} size={96} stroke={7} color="#C9A24B" className="mx-auto">
            <svg viewBox="0 0 24 24" className="h-12 w-12 text-gold" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ProgressRing>
          <h1 className="mt-4 font-serif text-3xl font-semibold">
            {practice ? 'Practice complete' : 'Unit complete'}
          </h1>
          <p className="mt-1 text-white/80">
            Unit {unit.id} · {unit.title}
          </p>
          {!practice && (
            <p className="mt-2 text-sm text-gold">Every question mastered — nothing outstanding.</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-px bg-ink/5">
          <Stat label="XP earned" value={`+${stats.xp}`} accent />
          <Stat label="Accuracy" value={`${accuracy}%`} />
          <Stat label="Time" value={timeLabel} />
        </div>

        <div className="p-6">
          <p className="mb-4 text-center text-sm text-muted">
            You answered {stats.answered} times across {stats.total} questions
            {stats.answered > stats.total
              ? ` — ${stats.answered - stats.total} retries to lock in mastery.`
              : '.'}
          </p>
          <button type="button" onClick={onBackToMap} className="btn-primary w-full">
            Back to map
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="bg-surface px-3 py-5 text-center">
      <p className={`font-serif text-2xl font-bold ${accent ? 'text-gold' : 'text-ink'}`}>{value}</p>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}
