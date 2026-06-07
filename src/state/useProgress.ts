import { useCallback, useEffect, useRef, useState } from 'react';
import {
  clearAll,
  loadState,
  saveState,
  type InProgressUnit,
  type ProgressState,
} from '../lib/storage';
import { computeDeadline, isExpired } from '../lib/deadline';
import { now } from '../lib/time';
import { getUnit, TOTAL_UNITS } from '../content/units';

const XP_PER_CORRECT = 10;

export type UnitStatus = 'notStarted' | 'inProgress' | 'completed';

export interface ProgressApi {
  state: ProgressState;
  /** A unit that just expired on load/tick and needs the failure modal. */
  justFailedUnitId: number | null;
  clearJustFailed: () => void;
  statusOf: (unitId: number) => UnitStatus;
  startUnit: (unitId: number) => void;
  /** Record one answer for the in-progress unit; returns true if the unit is now complete. */
  recordAnswer: (questionId: string, correct: boolean) => boolean;
  /** Mark the in-progress unit complete and clear it (returns its final stats). */
  finishUnit: () => InProgressUnit | null;
  /** Abandon the in-progress unit (e.g. deadline missed) without completing it. */
  failUnit: (unitId: number) => void;
  toggleSound: () => void;
  resetEverything: () => void;
  allComplete: boolean;
}

export function useProgress(): ProgressApi {
  const [state, setState] = useState<ProgressState>(() => loadState());
  const [justFailedUnitId, setJustFailedUnitId] = useState<number | null>(null);
  const checkedExpiryOnLoad = useRef(false);

  // Persist on every change.
  useEffect(() => {
    saveState(state);
  }, [state]);

  // On first load: if an in-progress unit's deadline has passed, fail it.
  useEffect(() => {
    if (checkedExpiryOnLoad.current) return;
    checkedExpiryOnLoad.current = true;
    const ip = state.inProgress;
    if (ip && isExpired(ip.deadline, now())) {
      setJustFailedUnitId(ip.unitId);
      setState((s) => ({ ...s, inProgress: null }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusOf = useCallback(
    (unitId: number): UnitStatus => {
      if (state.completed.includes(unitId)) return 'completed';
      if (state.inProgress?.unitId === unitId) return 'inProgress';
      return 'notStarted';
    },
    [state],
  );

  const startUnit = useCallback((unitId: number) => {
    const unit = getUnit(unitId);
    if (!unit) return;
    const startedAt = now();
    const fresh: InProgressUnit = {
      unitId,
      startedAt,
      deadline: computeDeadline(startedAt),
      outstandingIds: unit.questions.map((q) => q.id),
      totalQuestions: unit.questions.length,
      answered: 0,
      correct: 0,
      xp: 0,
    };
    // Single active unit at a time: starting a new one replaces any previous
    // in-progress unit (which returns to not-started).
    setState((s) => ({ ...s, inProgress: fresh }));
  }, []);

  const recordAnswer = useCallback((questionId: string, correct: boolean): boolean => {
    let complete = false;
    setState((s) => {
      const ip = s.inProgress;
      if (!ip) return s;
      const outstandingIds = correct
        ? ip.outstandingIds.filter((id) => id !== questionId)
        : ip.outstandingIds;
      const next: InProgressUnit = {
        ...ip,
        outstandingIds,
        answered: ip.answered + 1,
        correct: ip.correct + (correct ? 1 : 0),
        xp: ip.xp + (correct ? XP_PER_CORRECT : 0),
      };
      complete = outstandingIds.length === 0;
      return { ...s, inProgress: next };
    });
    return complete;
  }, []);

  const finishUnit = useCallback((): InProgressUnit | null => {
    let finished: InProgressUnit | null = null;
    setState((s) => {
      const ip = s.inProgress;
      if (!ip) return s;
      finished = ip;
      const completed = s.completed.includes(ip.unitId)
        ? s.completed
        : [...s.completed, ip.unitId];
      return { ...s, completed, inProgress: null };
    });
    return finished;
  }, []);

  const failUnit = useCallback((unitId: number) => {
    setState((s) => {
      if (s.inProgress?.unitId !== unitId) return s;
      return { ...s, inProgress: null };
    });
    setJustFailedUnitId(unitId);
  }, []);

  const clearJustFailed = useCallback(() => setJustFailedUnitId(null), []);

  const toggleSound = useCallback(() => {
    setState((s) => ({ ...s, settings: { ...s.settings, sound: !s.settings.sound } }));
  }, []);

  const resetEverything = useCallback(() => {
    clearAll();
    setState({ completed: [], inProgress: null, settings: { sound: true } });
    setJustFailedUnitId(null);
  }, []);

  const allComplete = state.completed.length >= TOTAL_UNITS && TOTAL_UNITS > 0;

  return {
    state,
    justFailedUnitId,
    clearJustFailed,
    statusOf,
    startUnit,
    recordAnswer,
    finishUnit,
    failUnit,
    toggleSound,
    resetEverything,
    allComplete,
  };
}
