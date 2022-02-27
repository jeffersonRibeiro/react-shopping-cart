import { fireEvent } from '@testing-library/react';
import { renderWithThemeProvider } from 'utils/test/test-utils';
import ProductsProvider from 'contexts/products-context';

import Filter from '.';
import { availableSizes } from './Filter';

describe('[components] - Filter', () => {
  const setup = (props = {}) => {
    return renderWithThemeProvider(
      <ProductsProvider>
        <Filter {...props} />
      </ProductsProvider>
    );
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render every filter size avaliable', () => {
    const { getByText } = setup();
    expect(availableSizes.every((size) => getByText(size))).toBe(true);
  });

  test('should call filterProducts() with filters as params', () => {
    const { getAllByTestId } = setup();
    const checkbox = getAllByTestId('checkbox')[0];

    fireEvent.click(checkbox);
  });
});
