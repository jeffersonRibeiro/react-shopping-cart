import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  FC,
} from 'react';

import { ThemeProvider } from 'commons/style/styled-components';
import { themes, ThemeMode } from 'commons/style/theme';

export const THEME_STORAGE_KEY = 'theme';
const DEFAULT_MODE: ThemeMode = 'light';

export interface IThemeContext {
  mode: ThemeMode;
  toggleTheme(): void;
}

const isThemeMode = (value: unknown): value is ThemeMode =>
  value === 'light' || value === 'dark';

/* Storage can be blocked, full or disabled: never let it break the app */
const readStoredMode = (): ThemeMode => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeMode(stored) ? stored : DEFAULT_MODE;
  } catch {
    return DEFAULT_MODE;
  }
};

const writeStoredMode = (mode: ThemeMode) => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    /* The theme still applies for the current session */
  }
};

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const useThemeContext = (): IThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used within an AppThemeProvider');
  }

  return context;
};

const AppThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(readStoredMode);

  /* Keeps the pre-paint rule in public/index.html in sync with React */
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  /* Follow a change made in another tab */
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY && isThemeMode(event.newValue)) {
        setMode(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextMode: ThemeMode = mode === 'dark' ? 'light' : 'dark';

    setMode(nextMode);
    writeStoredMode(nextMode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={themes[mode]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { AppThemeProvider, useThemeContext };
