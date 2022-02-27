import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockCartProducts } from 'utils/test/mocks';

import CartProducts from '.';

describe('[components] - CartProducts', () => {
  const setup = () => {
    return renderWithThemeProvider(
      <CartProducts products={mockCartProducts} />
    );
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
