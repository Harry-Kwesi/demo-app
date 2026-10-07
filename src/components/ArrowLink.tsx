import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'dark';
};

/** Uppercase text link with an arrow that nudges forward on hover/focus. */
export default function ArrowLink({ to, children, className = '', tone = 'light' }: Props) {
  const color = tone === 'light' ? 'text-paper' : 'text-ink';
  return (
    <Link to={to} className={`group inline-flex items-center gap-3 ${color} eyebrow ${className}`}>
      <span className="link-line pb-1">{children}</span>
      <span className="arrow text-gold" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
