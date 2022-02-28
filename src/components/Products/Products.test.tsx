import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockProducts } from 'utils/test/mocks';

import Products from '.';

describe('[components] - Products', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <Products products={mockProducts} {...props} />
    );
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
