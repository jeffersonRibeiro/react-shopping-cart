import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'commons/style/styled-components';
import { theme, StyleClosetTheme } from 'commons/style/theme';

export const renderWithThemeProvider = (
  children: ReactNode,
  activeTheme: StyleClosetTheme = theme
) => {
  return render(<ThemeProvider theme={activeTheme}>{children}</ThemeProvider>);
};
