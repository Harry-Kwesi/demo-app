import { SHOW_CONTENT_FLAGS } from '../data/site';

/** Visible marker for content awaiting verification by SICIM. */
export default function Pending({ label = 'Placeholder — to be verified', className = '' }: { label?: string; className?: string }) {
  if (!SHOW_CONTENT_FLAGS) return null;
  return (
    <span
      className={`inline-flex items-center gap-2 border border-dashed border-gold/60 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
      {label}
    </span>
  );
}
