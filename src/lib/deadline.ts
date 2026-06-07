// ─────────────────────────────────────────────────────────────────────────────
// Deadline logic.
//
// ASSUMPTION (stated to the user): "You must finish a unit before the upcoming
// midnight." A unit started any time today must be completed before 00:00
// tonight (local time).
//
// To change the rule, edit the single constant DEADLINE_MODE below:
//   'midnight'  → deadline = the next local midnight after startedAt (default)
//   'plus24h'   → deadline = startedAt + 24 hours
// ─────────────────────────────────────────────────────────────────────────────

export type DeadlineMode = 'midnight' | 'plus24h';

/** Change this one constant to switch how the deadline is computed. */
export const DEADLINE_MODE: DeadlineMode = 'midnight';

const HOURS_24_MS = 24 * 60 * 60 * 1000;

/**
 * Compute the deadline (ms since epoch) for a unit started at `startedAt`.
 * Uses local time for the midnight calculation.
 */
export function computeDeadline(startedAt: number): number {
  if (DEADLINE_MODE === 'plus24h') {
    return startedAt + HOURS_24_MS;
  }
  // 'midnight' — next local 00:00 strictly after startedAt.
  const d = new Date(startedAt);
  const nextMidnight = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0, 0);
  return nextMidnight.getTime();
}

/** Whether `deadline` is in the past relative to the supplied `nowMs`. */
export function isExpired(deadline: number, nowMs: number): boolean {
  return nowMs >= deadline;
}

/** Milliseconds remaining until the deadline (never negative). */
export function msRemaining(deadline: number, nowMs: number): number {
  return Math.max(0, deadline - nowMs);
}

export interface Countdown {
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  /** True when under 60 minutes remain — used to render urgent styling. */
  urgent: boolean;
  /** True when under 5 minutes remain — most urgent styling. */
  critical: boolean;
}

/** Break remaining time into H/M/S plus urgency flags for the UI. */
export function formatCountdown(deadline: number, nowMs: number): Countdown {
  const totalMs = msRemaining(deadline, nowMs);
  const totalSeconds = Math.floor(totalMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    hours,
    minutes,
    seconds,
    totalMs,
    urgent: totalMs <= 60 * 60 * 1000,
    critical: totalMs <= 5 * 60 * 1000,
  };
}

/** Render a countdown as "Hh Mm Ss" / "Mm Ss" for compact display. */
export function countdownLabel(c: Countdown): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  if (c.hours > 0) return `${c.hours}:${pad(c.minutes)}:${pad(c.seconds)}`;
  return `${c.minutes}:${pad(c.seconds)}`;
}
