import { renderWithThemeProvider } from 'utils/test/test-utils';
import { darkTheme } from 'commons/style/theme';
import { CartProvider } from 'contexts/cart-context';

import Cart from '.';

describe('[components] - Cart', () => {
  const setup = () => {
    return renderWithThemeProvider(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  test('should render correctly in dark mode', () => {
    const view = renderWithThemeProvider(
      <CartProvider>
        <Cart />
      </CartProvider>,
      darkTheme
    );
    expect(view).toMatchSnapshot();
  });
});
