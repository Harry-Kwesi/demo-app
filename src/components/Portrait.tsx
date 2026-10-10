import Art from './Art';

/**
 * Portrait slot. Until approved photography is supplied, shows a muted
 * architectural field with the person's initials — never a stock face.
 */
export default function Portrait({ name, initials, seed, src }: { name: string; initials: string; seed: number; src?: string }) {
  return (
    <div className="zoom grain relative aspect-[4/5] overflow-hidden bg-ink">
      {src ? (
        <img src={src} alt={`Portrait of ${name}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 opacity-80">
            <Art variant="colonnade" seed={seed} />
          </div>
          <span role="img" aria-label={`Portrait placeholder for ${name}`} className="absolute bottom-5 left-6 text-[clamp(44px,5vw,80px)] font-extrabold leading-none text-white/85">
            {initials}
          </span>
          <span className="absolute right-5 top-5 bg-white/10 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">Portrait to come</span>
        </>
      )}
    </div>
  );
}
