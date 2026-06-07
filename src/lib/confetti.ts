import confetti from 'canvas-confetti';

const GOLD = ['#C9A24B', '#E2C879', '#B8902F'];
const PURPLE = ['#4B2E83', '#6B4BA8', '#C9A24B'];

/** Subtle burst for finishing a unit. */
export function burstUnitComplete(): void {
  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.6 },
    colors: GOLD,
    scalar: 0.9,
  });
}

/** Full-screen celebration for finishing all 20 units. */
export function burstVictory(): void {
  const end = Date.now() + 2500;
  const frame = () => {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 60,
      origin: { x: 0 },
      colors: PURPLE,
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 60,
      origin: { x: 1 },
      colors: GOLD,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
  confetti({ particleCount: 160, spread: 100, origin: { y: 0.5 }, colors: PURPLE });
}
