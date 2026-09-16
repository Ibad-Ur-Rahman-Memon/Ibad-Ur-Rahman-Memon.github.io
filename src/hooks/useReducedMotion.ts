import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Detects the user's `prefers-reduced-motion` setting.
 *
 * Returns `true` when the user has requested reduced motion. Components
 * should use this to swap entrance animations for static rendering and
 * to skip non-essential transitions.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return reduced;
}
