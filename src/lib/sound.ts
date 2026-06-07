// ─────────────────────────────────────────────────────────────────────────────
// Tiny WebAudio sound effects — no audio files needed. Respects the sound
// toggle in Settings (passed in by the caller).
// ─────────────────────────────────────────────────────────────────────────────

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq: number, start: number, duration: number, gain = 0.06, type: OscillatorType = 'sine') {
  const ac = getCtx();
  if (!ac) return;
  const osc = ac.createOscillator();
  const g = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0, ac.currentTime + start);
  g.gain.linearRampToValueAtTime(gain, ac.currentTime + start + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + duration);
  osc.connect(g);
  g.connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + duration + 0.02);
}

export function playCorrect(enabled: boolean): void {
  if (!enabled) return;
  // pleasant ascending chime
  tone(659.25, 0, 0.12, 0.05, 'triangle');
  tone(987.77, 0.08, 0.18, 0.05, 'triangle');
}

export function playWrong(enabled: boolean): void {
  if (!enabled) return;
  tone(196, 0, 0.18, 0.05, 'sawtooth');
  tone(146.83, 0.1, 0.22, 0.04, 'sawtooth');
}

export function playComplete(enabled: boolean): void {
  if (!enabled) return;
  tone(523.25, 0, 0.14, 0.05, 'triangle');
  tone(659.25, 0.12, 0.14, 0.05, 'triangle');
  tone(783.99, 0.24, 0.14, 0.05, 'triangle');
  tone(1046.5, 0.36, 0.3, 0.06, 'triangle');
}
