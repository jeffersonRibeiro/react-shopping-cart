import { renderWithThemeProvider } from 'utils/test/test-utils';
import { CartProvider } from 'contexts/cart-context';
import { mockCartProducts } from 'utils/test/mocks';

import CartProduct from '.';

describe('[components] - CartProduct', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <CartProvider>
        <CartProduct product={mockCartProducts[0]} {...props} />
      </CartProvider>
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
