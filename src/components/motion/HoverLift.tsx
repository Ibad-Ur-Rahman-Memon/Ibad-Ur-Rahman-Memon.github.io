import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
  /** Vertical lift on hover, in pixels. */
  lift?: number;
  /** Scale factor on hover. */
  scale?: number;
}

/**
 * Subtle hover lift for interactive cards.
 *
 * - Lifts and scales slightly on hover; taps back down on click.
 * - Uses `transform` and `opacity` only.
 * - When `prefers-reduced-motion` is set, renders children with no
 *   lift/scale — the element remains static.
 */
export function HoverLift({ children, className, lift = 3, scale = 1.01 }: HoverLiftProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift, scale }}
      whileTap={{ y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}
