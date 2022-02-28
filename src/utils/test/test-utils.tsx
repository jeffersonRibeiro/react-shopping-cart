import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';

export const renderWithThemeProvider = (children: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
