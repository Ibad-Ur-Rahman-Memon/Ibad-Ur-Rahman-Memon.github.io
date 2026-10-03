import { type ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Milliseconds between each child's entrance. */
  stagger?: number;
}

/**
 * Staggered children container.
 *
 * Each direct `motion` child is delayed by `stagger` milliseconds. When
 * `prefers-reduced-motion` is set, children render immediately with no
 * stagger and no animation.
 */
export function Stagger({ children, className, stagger = 0.06 }: StaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: { transition: { staggerChildren: reduced ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered-child variant. Apply to each direct child of a `Stagger`.
 */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as unknown as (t: number) => number },
  },
};
