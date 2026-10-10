import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
};

/** Bold text link with an arrow that nudges forward on hover/focus. */
export default function ArrowLink({ to, children, className = '', tone = 'dark' }: Props) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-[15px] font-bold ${tone === 'dark' ? 'text-ink' : 'text-white'} ${className}`}
    >
      <span className="u-link pb-0.5">{children}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
