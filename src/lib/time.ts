// ─────────────────────────────────────────────────────────────────────────────
// Time source with a dev/test override.
//
// All deadline + countdown logic reads "now" through `now()` so that the dev
// test switch (Settings → "Time travel") can fast-forward the clock and let you
// exercise the midnight-deadline / failure-reset flow without waiting for real
// midnight. The offset is persisted so a reload keeps the simulated time.
// ─────────────────────────────────────────────────────────────────────────────

const OFFSET_KEY = 'privatus.devClockOffsetMs';

let offsetMs = 0;
try {
  const raw = localStorage.getItem(OFFSET_KEY);
  offsetMs = raw ? Number(raw) || 0 : 0;
} catch {
  offsetMs = 0;
}

/** Current time in ms since epoch, including any dev offset. */
export function now(): number {
  return Date.now() + offsetMs;
}

/** Current dev offset in milliseconds (0 in normal use). */
export function getClockOffsetMs(): number {
  return offsetMs;
}

/** Add to the simulated clock (e.g. jump forward by hours during testing). */
export function advanceClock(ms: number): void {
  offsetMs += ms;
  persist();
}

/** Set an absolute offset (ms). */
export function setClockOffsetMs(ms: number): void {
  offsetMs = ms;
  persist();
}

/** Reset the simulated clock back to real time. */
export function resetClock(): void {
  offsetMs = 0;
  persist();
}

function persist(): void {
  try {
    if (offsetMs === 0) localStorage.removeItem(OFFSET_KEY);
    else localStorage.setItem(OFFSET_KEY, String(offsetMs));
  } catch {
    /* ignore storage failures */
  }
}
