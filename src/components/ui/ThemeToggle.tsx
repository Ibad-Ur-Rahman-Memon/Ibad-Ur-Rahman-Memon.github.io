import { useEffect, useState, type SVGProps } from 'react';
import { useTheme } from '@/hooks/useTheme';

type Theme = 'dark' | 'light';

function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/**
 * Accessible dark/light theme toggle.
 *
 * - Dark-first: defaults to dark, with an explicit light option.
 * - Persists the user's choice in localStorage.
 * - Falls back to the system color scheme when no preference is stored.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering differently on the server / first client paint.
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';
  const nextTheme: Theme = isDark ? 'light' : 'dark';

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="icon-button inline-flex h-9 w-9 items-center justify-center rounded-md border border-control bg-surface text-muted transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        disabled
      >
        <span className="sr-only">Toggle theme</span>
        <ThemeIcon isDark={isDark} />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      className="icon-button inline-flex h-9 w-9 items-center justify-center rounded-md border border-control bg-surface text-muted transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="sr-only">Toggle theme</span>
      <ThemeIcon isDark={isDark} />
    </button>
  );
}

function ThemeIcon({ isDark }: { isDark: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-4">
      <SunIcon
        className={`absolute inset-0 h-4 w-4 transition-[opacity,transform] duration-200 ${
          isDark ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      />
      <MoonIcon
        className={`absolute inset-0 h-4 w-4 transition-[opacity,transform] duration-200 ${
          isDark ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
    </span>
  );
}
