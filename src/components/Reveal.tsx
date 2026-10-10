import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
} & Record<string, unknown>;

/** Fades content up when it enters the viewport. */
export default function Reveal({ as: Tag = 'div', children, className = '', delay = 0, ...rest }: Props) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
