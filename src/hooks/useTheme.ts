import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light';
  } catch {
    return 'dark';
  }
}

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Dark-first theme hook.
 *
 * - Reads the saved preference from localStorage, falling back to the
 *   system color scheme when nothing is stored.
 * - Persists any explicit user choice.
 * - Applies the theme to `<html data-theme="...">` before paint when possible.
 */
export function useTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable (private mode, quota). Fail silently.
    }
  }, [theme]);

  return [theme, setTheme];
}
