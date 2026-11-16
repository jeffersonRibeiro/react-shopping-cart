import { act, fireEvent, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { AppThemeProvider, useThemeMode, THEME_STORAGE_KEY } from '..';

const Probe = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <button type="button" onClick={toggleTheme}>
      {mode}
    </button>
  );
};

const setup = () =>
  render(
    <AppThemeProvider>
      <Probe />
    </AppThemeProvider>
  );

describe('[contexts] - theme-context', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  test('should default to light mode when nothing is stored', () => {
    setup();

    expect(screen.getByRole('button')).toHaveTextContent('light');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });

  test('should start in the stored mode', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    setup();

    expect(screen.getByRole('button')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });

  test('should ignore an unrecognised stored value', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'purple');
    setup();

    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  test('should toggle the mode and persist the choice', () => {
    setup();
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveTextContent('dark');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    fireEvent.click(button);
    expect(button).toHaveTextContent('light');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });

  test('should end on the last choice after rapid toggling', () => {
    setup();
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveTextContent('dark');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  test('should fall back to light mode when storage cannot be read', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('storage blocked');
    });
    setup();

    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  test('should still toggle when storage cannot be written', () => {
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('storage full');
    });
    setup();
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('dark');
  });

  test('should follow a change made in another tab', () => {
    setup();

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: THEME_STORAGE_KEY,
          newValue: 'dark',
        })
      );
    });

    expect(screen.getByRole('button')).toHaveTextContent('dark');
  });

  test('should ignore storage events for other keys or invalid values', () => {
    setup();

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', { key: 'other', newValue: 'dark' })
      );
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: THEME_STORAGE_KEY,
          newValue: 'purple',
        })
      );
    });

    expect(screen.getByRole('button')).toHaveTextContent('light');
  });

  test('should throw when the hook is used outside the provider', () => {
    const { result } = renderHook(() => useThemeMode());

    expect(result.error).toEqual(
      Error('useThemeContext must be used within an AppThemeProvider')
    );
  });
});
