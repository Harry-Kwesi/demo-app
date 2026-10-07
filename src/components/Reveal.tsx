import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'mask' | 'none';
} & Record<string, unknown>;

/** Fades/slides content in (or mask-reveals imagery) when it enters the viewport. */
export default function Reveal({ as: Tag = 'div', children, className = '', delay = 0, variant = 'up', ...rest }: Props) {
  const [ref, inView] = useInView<HTMLElement>();
  const style = { '--delay': `${delay}ms` } as CSSProperties;
  if (variant === 'mask') {
    // The observed wrapper stays unclipped: a fully clipped element never
    // registers as intersecting, so the clip lives on an inner layer.
    return (
      <Tag ref={ref} className={`${inView ? 'is-visible' : ''} ${className}`} style={style} {...rest}>
        <div className="reveal-mask relative h-full w-full overflow-hidden">{children}</div>
      </Tag>
    );
  }
  return (
    <Tag ref={ref} className={`${variant === 'up' ? 'reveal' : ''} ${inView ? 'is-visible' : ''} ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  );
}

/** Headline that rises line by line from behind a mask. */
export function SplitHeading({
  as: Tag = 'h2',
  lines,
  className = '',
  delay = 0,
  stagger = 90,
  id,
}: {
  as?: ElementType;
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
  id?: string;
}) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 });
  return (
    <Tag ref={ref} id={id} className={`${inView ? 'is-visible' : ''} ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask" style={{ '--delay': `${delay + i * stagger}ms` } as CSSProperties}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
