import { renderWithThemeProvider } from 'utils/test/test-utils';
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
});
