// ─────────────────────────────────────────────────────────────────────────────
// Persistence (localStorage). This is a real local single-user app, so
// localStorage is the correct and expected store.
//
// We persist:
//   • the set of COMPLETED unit ids (kept forever until reset)
//   • the current IN-PROGRESS unit's state + its deadline (for pause/resume)
//   • user settings (sound, optional deadline mode)
//
// On load, App checks whether an in-progress unit's deadline has passed and, if
// so, fires the failure flow and discards that unit's state before rendering.
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'privatus.progress.v1';

/** Live, persisted state for the unit currently being drilled. */
export interface InProgressUnit {
  unitId: number;
  startedAt: number;
  deadline: number;
  /** Question ids not yet answered correctly (the mastery loop's outstanding set). */
  outstandingIds: string[];
  /** Total questions in the unit (for the progress bar). */
  totalQuestions: number;
  // Live session stats.
  answered: number;
  correct: number;
  xp: number;
}

export interface Settings {
  sound: boolean;
}

export interface ProgressState {
  completed: number[];
  inProgress: InProgressUnit | null;
  settings: Settings;
}

const DEFAULT_STATE: ProgressState = {
  completed: [],
  inProgress: null,
  settings: { sound: true },
};

export function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      inProgress: parsed.inProgress ?? null,
      settings: {
        sound: parsed.settings?.sound ?? true,
      },
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function saveState(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota / private-mode failures */
  }
}

/** Wipe all progress (Settings → "Reset everything"). */
export function clearAll(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
