import { renderWithThemeProvider } from 'utils/test/test-utils';
import { mockProducts } from 'utils/test/mocks';

import Products from '.';

describe('[components] - Products', () => {
  const setup = () => {
    return renderWithThemeProvider(<Products products={mockProducts} />);
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
