import Art from './Art';

/**
 * Portrait slot. Until approved photography is supplied, shows a muted
 * architectural field with the person's initials — never a stock face.
 */
export default function Portrait({ name, initials, seed, src }: { name: string; initials: string; seed: number; src?: string }) {
  return (
    <div className="grain relative aspect-[4/5] overflow-hidden bg-ink-2">
      {src ? (
        <img
          src={src}
          alt={`Portrait of ${name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover grayscale transition-[filter,transform] duration-[1200ms] ease-quiet group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-70 grayscale transition-[filter,opacity,transform] duration-[1200ms] ease-quiet group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0">
            <Art variant="colonnade" seed={seed} />
          </div>
          <span
            role="img"
            aria-label={`Portrait placeholder for ${name}`}
            className="absolute bottom-6 left-6 text-[clamp(48px,6vw,96px)] font-light leading-none tracking-[-0.04em] text-paper/80"
          >
            {initials}
          </span>
          <span className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.2em] text-mute">Portrait to come</span>
        </>
      )}
    </div>
  );
}
