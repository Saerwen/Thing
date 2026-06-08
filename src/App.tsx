import { useState } from 'react';
import { units, getUnit, TOTAL_UNITS } from './content/units';
import { useProgress } from './state/useProgress';
import { HomeMap } from './screens/HomeMap';
import { Lesson, type SessionStats } from './screens/Lesson';
import { UnitResults } from './screens/UnitResults';
import { Victory } from './screens/Victory';
import { Settings } from './screens/Settings';
import { Manual } from './screens/Manual';
import { Modal } from './components/Modal';

type Screen = 'map' | 'lesson' | 'results' | 'victory' | 'settings' | 'manual';

export default function App() {
  const progress = useProgress();
  const { state } = progress;

  const [screen, setScreen] = useState<Screen>('map');
  const [activeUnitId, setActiveUnitId] = useState<number | null>(null);
  const [practice, setPractice] = useState(false);
  const [lastStats, setLastStats] = useState<SessionStats | null>(null);

  const soundOn = state.settings.sound;
  const activeUnit = activeUnitId != null ? getUnit(activeUnitId) : undefined;

  const openUnit = (id: number) => {
    const status = progress.statusOf(id);
    setActiveUnitId(id);
    if (status === 'completed') {
      setPractice(true);
    } else {
      setPractice(false);
      if (status === 'notStarted') progress.startUnit(id);
    }
    setScreen('lesson');
  };

  const handleComplete = (stats: SessionStats) => {
    setLastStats(stats);
    if (practice) {
      setScreen('results');
      return;
    }
    const wasLast = state.completed.length + 1 >= TOTAL_UNITS;
    progress.finishUnit();
    setScreen(wasLast ? 'victory' : 'results');
  };

  const handleDeadlineMiss = () => {
    // Fail the in-progress unit (works whether the timer expires in the lesson
    // or while the user is looking at the map node).
    const id = state.inProgress?.unitId ?? activeUnitId;
    if (id != null) progress.failUnit(id);
    setScreen('map');
  };

  const failedUnit =
    progress.justFailedUnitId != null ? getUnit(progress.justFailedUnitId) : undefined;

  return (
    <>
      {screen === 'map' && (
        <HomeMap
          units={units}
          statusOf={progress.statusOf}
          inProgress={state.inProgress}
          completedCount={state.completed.length}
          onOpenUnit={openUnit}
          onOpenSettings={() => setScreen('settings')}
          onOpenManual={() => setScreen('manual')}
          onDeadlineMiss={handleDeadlineMiss}
        />
      )}

      {screen === 'lesson' && activeUnit && (
        <Lesson
          key={`${activeUnit.id}-${practice ? 'practice' : 'live'}`}
          unit={activeUnit}
          inProgress={practice ? null : state.inProgress}
          practice={practice}
          soundOn={soundOn}
          onAnswer={progress.recordAnswer}
          onComplete={handleComplete}
          onDeadlineMiss={handleDeadlineMiss}
          onExit={() => setScreen('map')}
        />
      )}

      {screen === 'results' && activeUnit && lastStats && (
        <UnitResults
          unit={activeUnit}
          stats={lastStats}
          practice={practice}
          soundOn={soundOn}
          onBackToMap={() => setScreen('map')}
        />
      )}

      {screen === 'victory' && (
        <Victory
          soundOn={soundOn}
          onBackToMap={() => setScreen('map')}
          onReset={() => {
            progress.resetEverything();
            setScreen('map');
          }}
        />
      )}

      {screen === 'manual' && <Manual onClose={() => setScreen('map')} />}

      {screen === 'settings' && (
        <Settings
          soundOn={soundOn}
          onToggleSound={progress.toggleSound}
          onReset={() => {
            progress.resetEverything();
            setScreen('map');
          }}
          onClose={() => setScreen('map')}
        />
      )}

      {/* Failure modal — shows over whatever screen is active (usually the map). */}
      <Modal open={failedUnit != null} dismissable={false}>
        <div className="card overflow-hidden">
          <div className="bg-error px-6 py-7 text-center text-white">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="16.5" r="1.2" fill="currentColor" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-semibold">Time's up — this unit resets</h2>
          </div>
          <div className="p-6 text-center">
            <p className="text-ink/80">
              The midnight deadline passed while{' '}
              <span className="font-semibold text-ink">
                Unit {failedUnit?.id} · {failedUnit?.title}
              </span>{' '}
              was in progress. Its progress has been discarded — no partial credit. Your completed
              units are untouched. Start it fresh whenever you're ready.
            </p>
            <button
              type="button"
              onClick={progress.clearJustFailed}
              className="btn-primary mt-6 w-full"
              autoFocus
            >
              Back to the map
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
