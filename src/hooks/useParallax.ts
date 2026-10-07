import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Translates the element vertically as its container scrolls through the
 * viewport. Writes the transform directly (no React re-render per frame).
 */
export function useParallax<T extends HTMLElement>(strength = 0.15) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const parent = el.parentElement ?? el;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = parent.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -strength;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      el.style.transform = '';
    };
  }, [strength, reduced]);

  return ref;
}
