import Art from './Art';
import { media } from '../data/site';
import type { ArtVariant } from '../data/site';

type Props = {
  slot?: keyof typeof media;
  variant?: ArtVariant;
  seed?: number;
  alt?: string;
  className?: string;
  /** Decorative imagery is hidden from assistive tech. */
  decorative?: boolean;
  eager?: boolean;
};

/**
 * Renders a photography slot: a licensed image when `media[slot].src` is set,
 * otherwise the generated architectural artwork. Always fills its container.
 */
export default function Media({ slot, variant, seed, alt, className = '', decorative = false, eager = false }: Props) {
  const entry = slot ? media[slot] : undefined;
  const label = decorative ? undefined : alt ?? entry?.alt;
  if (entry?.src) {
    return (
      <img
        src={entry.src}
        alt={decorative ? '' : label}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return <Art variant={variant ?? entry?.art ?? 'skyline'} seed={seed} label={label} className={className} />;
}
