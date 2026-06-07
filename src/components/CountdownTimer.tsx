import { useEffect, useState } from 'react';
import { formatCountdown, countdownLabel } from '../lib/deadline';
import { now } from '../lib/time';

interface Props {
  deadline: number;
  /** Called once when the countdown crosses the deadline. */
  onExpire?: () => void;
  /** Compact pill (for unit nodes) vs full (in lesson header). */
  variant?: 'pill' | 'full';
  className?: string;
}

/** Live ticking countdown to a deadline; escalates styling as time runs out. */
export function CountdownTimer({ deadline, onExpire, variant = 'full', className = '' }: Props) {
  const [nowMs, setNowMs] = useState(() => now());

  useEffect(() => {
    const id = setInterval(() => setNowMs(now()), 1000);
    return () => clearInterval(id);
  }, []);

  const c = formatCountdown(deadline, nowMs);

  // Fire onExpire exactly once when we hit zero.
  useEffect(() => {
    if (c.totalMs <= 0) onExpire?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c.totalMs <= 0]);

  const urgencyColor = c.critical
    ? 'text-error'
    : c.urgent
      ? 'text-error/90'
      : 'text-muted';

  if (variant === 'pill') {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums ${
          c.critical
            ? 'bg-error/10 text-error animate-pulse-urgent'
            : c.urgent
              ? 'bg-error/10 text-error'
              : 'bg-primary/5 text-primary'
        } ${className}`}
      >
        <ClockIcon className="h-3 w-3" />
        {countdownLabel(c)}
      </span>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 ${c.critical ? 'animate-pulse-urgent' : ''} ${className}`}
      aria-label="Time remaining until deadline"
    >
      <ClockIcon className={`h-4 w-4 ${urgencyColor}`} />
      <span className={`text-sm font-semibold tabular-nums ${urgencyColor}`}>
        {countdownLabel(c)}
      </span>
      <span className="text-xs text-muted">to midnight</span>
    </div>
  );
}

function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
