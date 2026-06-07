import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  /** When false, clicking the backdrop / Escape won't close (e.g. failure modal). */
  dismissable?: boolean;
}

export function Modal({ open, onClose, children, dismissable = true }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dismissable) onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismissable, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={() => dismissable && onClose?.()}
      />
      <div className="relative z-10 w-full max-w-md animate-pop">{children}</div>
    </div>
  );
}
