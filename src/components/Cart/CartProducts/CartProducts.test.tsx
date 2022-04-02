import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockCartProducts } from 'utils/test/mocks';

import { CartProvider } from 'contexts/cart-context';
import CartProducts from '.';

describe('[components] - CartProducts', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <CartProvider>
        <CartProducts products={mockCartProducts} {...props} />
      </CartProvider>
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  test('should render call to action text when cart is empty', () => {
    const { getByText } = setup({ products: [] });
    expect(getByText(/Add some products in the cart/i)).toBeTruthy();
  });
});
