import { useState, type ReactNode } from 'react';
import { manualSections, type ManualBlock, type ManualSection } from '../content/manualContent';

interface Props {
  onClose: () => void;
}

/** The in-app reader for the full study manual. */
export function Manual({ onClose }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = selectedId != null ? manualSections.find((s) => s.id === selectedId) : undefined;

  if (selected) {
    return (
      <Reader
        section={selected}
        onBack={() => setSelectedId(null)}
        onNavigate={(id) => setSelectedId(id)}
      />
    );
  }

  return <Contents onOpen={setSelectedId} onClose={onClose} />;
}

// ─── Table of contents ───────────────────────────────────────────────────────
function Contents({ onOpen, onClose }: { onOpen: (id: number) => void; onClose: () => void }) {
  let lastPhase = '';
  let refHeaderShown = false;
  const rows: ReactNode[] = [];

  for (const s of manualSections) {
    if (s.kind === 'day' && s.phase && s.phase !== lastPhase) {
      lastPhase = s.phase;
      rows.push(
        <h2 key={`phase-${s.id}`} className="mt-6 mb-1 px-1 font-serif text-sm font-semibold text-primary">
          {s.phase}
        </h2>,
      );
    }
    if ((s.kind === 'formulas' || s.kind === 'glossary') && !refHeaderShown) {
      refHeaderShown = true;
      rows.push(
        <h2 key="ref" className="mt-6 mb-1 px-1 font-serif text-sm font-semibold text-primary">
          Reference
        </h2>,
      );
    }
    rows.push(
      <button
        key={s.id}
        type="button"
        onClick={() => onOpen(s.id)}
        className="flex w-full items-center gap-3 rounded-2xl border border-ink/5 bg-surface px-4 py-3 text-left shadow-sm transition-all hover:border-primary/30 hover:shadow-card"
      >
        {s.day != null ? (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-sm font-bold text-primary">
            {s.day}
          </span>
        ) : (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
            <BookIcon className="h-4 w-4" />
          </span>
        )}
        <span className="min-w-0">
          <span className="block truncate font-semibold text-ink">{cleanTitle(s.title)}</span>
          {s.subtitle && (
            <span className="block truncate text-xs text-muted">{stripGoal(s.subtitle)}</span>
          )}
        </span>
        <ChevronIcon className="ml-auto h-4 w-4 shrink-0 text-muted" />
      </button>,
    );
  }

  return (
    <div className="min-h-screen app-bg pb-20">
      <header className="sticky top-0 z-20 border-b border-ink/5 bg-cream/85 backdrop-blur pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3.5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Back to map"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-ink/5 hover:text-ink"
          >
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>
          <div>
            <h1 className="font-serif text-xl font-semibold leading-none text-ink">The Manual</h1>
            <p className="mt-0.5 text-xs text-muted">Privatus In-Depth Prep — read any chapter</p>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-2xl space-y-2 px-4 py-5">{rows}</div>
    </div>
  );
}

// ─── Reader ──────────────────────────────────────────────────────────────────
function Reader({
  section,
  onBack,
  onNavigate,
}: {
  section: ManualSection;
  onBack: () => void;
  onNavigate: (id: number) => void;
}) {
  const idx = manualSections.findIndex((s) => s.id === section.id);
  const prev = idx > 0 ? manualSections[idx - 1] : undefined;
  const next = idx < manualSections.length - 1 ? manualSections[idx + 1] : undefined;

  return (
    <div className="min-h-screen app-bg pb-24">
      <header className="sticky top-0 z-20 border-b border-ink/5 bg-cream/90 backdrop-blur pt-[env(safe-area-inset-top)]">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to contents"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-ink/5 hover:text-ink"
          >
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>
          <span className="truncate text-sm font-semibold text-primary">Contents</span>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-4 py-6">
        {section.phase && (
          <p className="text-xs font-semibold uppercase tracking-wide text-gold">{cleanTitle(section.phase)}</p>
        )}
        <h1 className="mt-1 font-serif text-3xl font-semibold leading-tight text-ink">
          {cleanTitle(section.title)}
        </h1>
        {section.subtitle && (
          <p className="mt-2 text-base italic text-muted">{stripGoal(section.subtitle)}</p>
        )}
        <div className="mt-6 space-y-4">
          {section.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>

        {/* prev / next */}
        <nav className="mt-10 flex items-stretch gap-3">
          {prev ? (
            <button type="button" onClick={() => onNavigate(prev.id)} className="btn-outline flex-1 flex-col items-start gap-0 py-3 text-left">
              <span className="text-xs text-muted">Previous</span>
              <span className="truncate text-sm font-semibold text-ink">{cleanTitle(prev.title)}</span>
            </button>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <button type="button" onClick={() => onNavigate(next.id)} className="btn-outline flex-1 flex-col items-end gap-0 py-3 text-right">
              <span className="text-xs text-muted">Next</span>
              <span className="truncate text-sm font-semibold text-ink">{cleanTitle(next.title)}</span>
            </button>
          ) : (
            <span className="flex-1" />
          )}
        </nav>
      </article>
    </div>
  );
}

// ─── Block renderer ──────────────────────────────────────────────────────────
const CALLOUT_STYLE: Record<string, { box: string; label: string }> = {
  watch: { box: 'border-[#E0B775] bg-[#FBF1E0]', label: 'text-[#9A6512]' },
  privatus: { box: 'border-primary/25 bg-primary/5', label: 'text-primary' },
  practice: { box: 'border-teal/30 bg-teal/5', label: 'text-teal' },
  worked: { box: 'border-gold/40 bg-gold/10', label: 'text-[#876A2B]' },
};

function Block({ block }: { block: ManualBlock }) {
  switch (block.type) {
    case 'subheading':
      return <h3 className="pt-2 font-serif text-xl font-semibold text-ink">{block.text}</h3>;
    case 'paragraph':
      return <p className="leading-relaxed text-ink/90">{inline(block.text)}</p>;
    case 'note':
      return <p className="text-sm italic leading-relaxed text-muted">{inline(block.text)}</p>;
    case 'formula':
      return (
        <pre className="overflow-x-auto rounded-xl border border-primary/15 bg-primary/[0.04] px-4 py-3 font-mono text-sm text-primary-dark">
          {block.text}
        </pre>
      );
    case 'list':
      return block.ordered ? (
        <ol className="ml-1 list-inside list-decimal space-y-1.5 marker:font-semibold marker:text-primary">
          {block.items.map((it, i) => (
            <li key={i} className="leading-relaxed text-ink/90">
              {inline(it)}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-1.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-ink/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{inline(it)}</span>
            </li>
          ))}
        </ul>
      );
    case 'definition':
      return (
        <p className="leading-relaxed text-ink/90">
          <span className="font-semibold text-ink">{block.term}</span>
          <span className="text-muted"> — </span>
          {inline(block.def)}
        </p>
      );
    case 'callout': {
      const st = CALLOUT_STYLE[block.variant] ?? CALLOUT_STYLE.privatus;
      return (
        <div className={`rounded-2xl border-2 p-4 ${st.box}`}>
          <p className={`mb-2 text-xs font-bold uppercase tracking-wide ${st.label}`}>{block.label}</p>
          <div className="space-y-2">
            {block.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </div>
      );
    }
  }
}

// ─── helpers ─────────────────────────────────────────────────────────────────
/** Render `__bold__` inline markup. */
function inline(text: string): ReactNode[] {
  return text.split('__').map((seg, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {seg}
      </strong>
    ) : (
      <span key={i}>{seg}</span>
    ),
  );
}

const stripGoal = (s: string) => s.replace(/^Goal:\s*/i, '');
const cleanTitle = (s: string) => s.replace(/\s*—\s*/g, ' — ');

function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M4 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v15l-5-2.5L8 20V5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
