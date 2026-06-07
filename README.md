# Privatus Trainer

A personal, local, single-user web app that drills the **Privatus Capital Partners — In-Depth Prep Study Manual** to exhaustion, Duolingo-style. No backend, no accounts, no analytics — everything runs in your browser and persists to `localStorage`.

The goal: finishing all **20 units** means you have drilled **every** concept, formula, pitfall, worked example and relevant glossary term from the manual — sourced *only* from the manual.

---

## Quick start

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production (`dist/`) |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check without emitting |
| `npm run extract-manual` | Re-parse the manual `.docx` → `source/manual.md` + `.txt` |

> Requires Node 18+ (developed on Node 22).

---

## How it works

### The mastery loop (drill to exhaustion)
Open any unit (no sequential locking) and its questions are presented in a shuffled sequence. **Every question you get wrong is re-queued.** After the main pass, you drill the review queue (reshuffled), and it keeps cycling — the header shows a live **"remaining"** count and a **"Review round N"** badge — until **zero questions are outstanding**. Only then is the unit complete.

There are **8 question types**, all implemented: multiple choice, true/false, fill-the-blank, type-the-formula, matching (term ↔ definition), ordering, word-bank (tap to build), and self-graded writing.

- **Typed answers are lenient on format, strict on content.** Fill-blanks normalise case/whitespace/trailing punctuation. Formulas additionally strip *all* spaces and treat `×`↔`*`, `−`↔`-`, `÷`↔`/` as equal. See `src/lib/answerCheck.ts`.
- **Writing** questions have no auto-grade: you write, reveal the model answer + key points, then self-grade with **Got it / Missed it** (Missed it re-queues).

### The daily deadline + failure/reset
When you **start** a unit, `startedAt` and a `deadline` are recorded. **By default the deadline is the next local midnight (00:00).** A live countdown shows in the lesson header and on the unit's map node, turning urgent as time runs out.

If the deadline passes while a unit is in progress (on load, or as a timer tick crosses midnight), a **failure modal** fires, the unit's in-progress state is **discarded entirely**, and it returns to "not started" — no partial credit. **Completed units are never touched.** You can pause/resume an in-progress unit freely *within* its window.

> **Changing the deadline rule** — edit the single constant `DEADLINE_MODE` in **`src/lib/deadline.ts`**:
> - `'midnight'` (default) → next local midnight after start
> - `'plus24h'` → start + 24 hours

### Persistence
`localStorage` stores completed unit IDs, the current in-progress unit (state + deadline), and settings. On load, an expired in-progress unit is reset before the UI renders. Completing all 20 units shows the **victory screen**. Reset everything from **Settings**.

### Dev/test time switch
You don't have to wait for real midnight to test the deadline flow. **Settings → Time travel (DEV)** overrides "now" (persisted) with buttons like *+1 hour*, *1 min to midnight*, *Cross midnight*, and *Reset clock*. The whole app reads time through `now()` in `src/lib/time.ts`.

---

## The content (question bank)

The bank is typed data in **`src/content/`**:

- `types.ts` — the `Question` union and `Unit` interface (the contract).
- `units/phase1.ts … phase5.ts` — the generated units (Phase 1 = Days 1–4, … Phase 5 = Days 17–20).
- `units.ts` — aggregates and sorts all 20 units; exposes `units`, `TOTAL_UNITS`, `getUnit()`.

There are **~400 questions across 20 units** (18–30 per unit), covering every concept sub-section, every formula (day-level + the global formula sheet), every "Watch out" pitfall, every worked example, the relevant glossary terms, and each "Practice today" task.

### Regenerating the bank if the manual changes
1. Drop the new manual into **`./source/`** (a `.docx`).
2. Run `npm run extract-manual` to produce `source/manual.md` (and `.txt`) via the `mammoth` parser (`scripts/extract-manual.mjs`).
3. Update the affected `src/content/units/phaseN.ts` files from the new Markdown. **Every answer must be verifiable from the manual — do not invent finance facts.**

---

## Install on your phone (PWA via GitHub Pages)

The app is an installable **Progressive Web App** — it works offline and can live on your home screen like a native app.

**One-time repo setup:** in GitHub → **Settings → Pages → Build and deployment → Source → "GitHub Actions"**. (The repo must be public, or on a plan that allows Pages for private repos.)

After that, every push to `main` (or the dev branch) runs `.github/workflows/deploy.yml`, which builds and publishes to Pages. The site URL is **`https://<your-user>.github.io/Thing/`** (shown in the workflow's deploy step and under Settings → Pages).

**On your iPhone:** open that URL in **Safari → Share → Add to Home Screen**. Launch it from the new icon and it runs full-screen, offline, with progress saved on the device. (Android/Chrome: menu → *Install app*.)

> The Pages base path is `/Thing/`, set in `vite.config.ts` (`base`) when the `GITHUB_PAGES` env var is present — the deploy workflow sets it. Local `npm run dev`/`build` stays at `/`. PWA config (manifest, icons, offline precache) lives in `vite.config.ts` under `VitePWA`.

## Project structure

```
source/                     the manual (.docx) + extracted manual.md / .txt
scripts/extract-manual.mjs  one-off docx → markdown extractor (npm run extract-manual)
src/
  content/                  types.ts, units.ts, units/phase1..5.ts (the question bank)
  lib/                      answerCheck, deadline, storage, time, sound, confetti, shuffle
  state/                    useProgress (progress + mastery + persistence)
  components/               CountdownTimer, ProgressRing, Modal, questions/ renderers
  screens/                  HomeMap, Lesson, UnitResults, Victory, Settings
  App.tsx                   screen router + failure modal
```

## Aesthetic

Boutique merchant bank meets Duolingo — Fraunces serif headings + Inter body, deep purple `#4B2E83`, gold `#C9A24B` for correct/XP/completion, teal secondary, cream background, gold progress rings, soft shadows, a winding unit map, satisfying check animations, gentle shake on wrong, and tasteful confetti. Fully responsive and keyboard-friendly (Enter submits/continues; number keys pick MCQ/true-false options). Design tokens live in `tailwind.config.js`.

## Tech

Vite + React + TypeScript + Tailwind CSS, client-side only. Confetti via `canvas-confetti`; sound via the Web Audio API (no asset files).
