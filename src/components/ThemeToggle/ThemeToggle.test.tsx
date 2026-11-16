import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppThemeProvider, THEME_STORAGE_KEY } from 'contexts/theme-context';

import ThemeToggle from '.';

describe('[components] - ThemeToggle', () => {
  const setup = () => {
    return render(
      <AppThemeProvider>
        <ThemeToggle />
      </AppThemeProvider>
    );
  };

  afterEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  test('should render correctly in dark mode', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  test('should expose its name and state to assistive technology', () => {
    setup();
    const toggle = screen.getByRole('button', { name: 'Dark mode' });

    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    expect(toggle).toHaveAttribute('title', 'Switch to dark mode');
  });

  test('should switch theme when clicked', () => {
    setup();
    const toggle = screen.getByRole('button', { name: 'Dark mode' });

    userEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(toggle).toHaveAttribute('title', 'Switch to light mode');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

    userEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  });

  test('should be operable with the keyboard', () => {
    setup();
    const toggle = screen.getByRole('button', { name: 'Dark mode' });

    userEvent.tab();
    expect(toggle).toHaveFocus();

    userEvent.keyboard('{enter}');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');

    userEvent.keyboard('{space}');
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });
});
