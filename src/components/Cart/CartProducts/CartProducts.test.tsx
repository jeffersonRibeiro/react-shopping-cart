import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockCartProducts } from 'utils/test/mocks';

import CartProducts from '.';

describe('[components] - CartProducts', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <CartProducts products={mockCartProducts} {...props} />
    );
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render call to action text when cart is empty', () => {
    const { getByText } = setup({ products: [] });
    expect(getByText(/Add some products in the cart/i)).toBeTruthy();
  });
});
