import { type ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul';
  /** Seconds between each child's entrance. */
  stagger?: number;
}

/**
 * Staggered children container.
 *
 * Each direct `motion` child is delayed by `stagger` milliseconds. When
 * `prefers-reduced-motion` is set, children render immediately with no
 * stagger and no animation.
 */
export function Stagger({ children, className, as = 'div', stagger = 0.04 }: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return as === 'ul' ? (
      <ul className={className}>{children}</ul>
    ) : (
      <div className={className}>{children}</div>
    );
  }

  const MotionContainer = as === 'ul' ? motion.ul : motion.div;

  return (
    <MotionContainer
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionContainer>
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
