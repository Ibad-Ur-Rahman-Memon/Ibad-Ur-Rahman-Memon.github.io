import { type ReactNode, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationControls } from 'motion/react';
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
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const y = useMotionValue(distance);
  const opacity = useMotionValue(0);

  useEffect(() => {
    if (reduced) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
        });
        observer.disconnect();
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, controls, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity, willChange: 'transform, opacity' }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
