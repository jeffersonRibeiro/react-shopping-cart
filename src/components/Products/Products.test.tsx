import { renderWithThemeProvider } from 'utils/test/test-utils';
import { darkTheme } from 'commons/style/theme';
import { mockProducts } from 'utils/test/mocks';

import { CartProvider } from 'contexts/cart-context';
import Products from '.';

describe('[components] - Products', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <CartProvider>
        <Products products={mockProducts} {...props} />
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
        <Products products={mockProducts} />
      </CartProvider>,
      darkTheme
    );
    expect(view).toMatchSnapshot();
  });
});
