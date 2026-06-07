// ─────────────────────────────────────────────────────────────────────────────
// The question bank — aggregated from the per-phase unit files.
//
// Each phase file is generated from the Privatus In-Depth Prep Study Manual
// (source/manual.md). To regenerate after the manual changes:
//   1. drop the new .docx into ./source and run `npm run extract-manual`
//   2. update the affected src/content/units/phaseN.ts files
//
// Every answer in these units is verifiable from the manual; no invented facts.
// ─────────────────────────────────────────────────────────────────────────────

import type { Unit } from './types';
import { unitsPhase1 } from './units/phase1';
import { unitsPhase2 } from './units/phase2';
import { unitsPhase3 } from './units/phase3';
import { unitsPhase4 } from './units/phase4';
import { unitsPhase5 } from './units/phase5';

export const units: Unit[] = [
  ...unitsPhase1,
  ...unitsPhase2,
  ...unitsPhase3,
  ...unitsPhase4,
  ...unitsPhase5,
].sort((a, b) => a.id - b.id);

export const TOTAL_UNITS = units.length;

export function getUnit(id: number): Unit | undefined {
  return units.find((u) => u.id === id);
}
