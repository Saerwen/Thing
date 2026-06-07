import { useEffect } from 'react';
import { burstVictory } from '../lib/confetti';
import { playComplete } from '../lib/sound';

interface Props {
  soundOn: boolean;
  onBackToMap: () => void;
  onReset: () => void;
}

export function Victory({ soundOn, onBackToMap, onReset }: Props) {
  useEffect(() => {
    burstVictory();
    playComplete(soundOn);
    const t = setTimeout(() => burstVictory(), 1200);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-dark px-4 py-10 text-center">
      <div className="max-w-lg animate-pop">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gold font-serif text-5xl font-bold text-primary shadow-node">
          ★
        </div>
        <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl">
          You've drilled the whole manual
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/80">
          All 20 units mastered — every concept, formula, pitfall and worked example from the
          Privatus In-Depth Prep Study Manual is now committed to memory. Walk in ready.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={onBackToMap} className="btn-gold min-w-[12rem]">
            View the golden map
          </button>
          <button
            type="button"
            onClick={onReset}
            className="btn text-white/80 hover:bg-white/10"
          >
            Reset and drill again
          </button>
        </div>
      </div>
    </div>
  );
}
