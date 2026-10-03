import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the animation starts, in milliseconds. */
  delay?: number;
  /** How far the element translates upward, in pixels. */
  distance?: number;
}

/**
 * Fade + slight vertical reveal on viewport entry.
 *
 * - Uses `transform` and `opacity` only (GPU-friendly, no layout thrash).
 * - Plays once when the element scrolls into view.
 * - Renders children statically when `prefers-reduced-motion` is set, so
 *   content is never hidden until an animation runs.
 */
export function Reveal({ children, className, delay = 0, distance = 18 }: RevealProps) {
  const reduced = useReducedMotion();
  const canObserveViewport = typeof IntersectionObserver !== 'undefined';

  if (reduced || !canObserveViewport) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
