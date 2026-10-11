import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  action?: ReactNode;
  tone?: 'dark' | 'light';
  /** Use the smaller headline size for sentence-length titles. */
  size?: 'display' | 'headline';
};

/** Standard section header: eyebrow, bold title, optional intro and action link. */
export default function SectionHeading({ eyebrow, title, intro, id, action, tone = 'dark', size = 'display' }: Props) {
  const muted = tone === 'dark' ? 'text-mute-deep' : 'text-mute';
  return (
    <Reveal className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
      <div className={size === 'display' ? 'max-w-3xl' : 'max-w-4xl'}>
        {eyebrow && <p className={`eyebrow mb-5 ${tone === 'dark' ? 'text-gold-deep' : 'text-gold'}`}>{eyebrow}</p>}
        <h2 id={id} className={`${size === 'display' ? 'text-display' : 'text-headline'} font-extrabold`}>
          {title}
        </h2>
        {intro && <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${muted}`}>{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
