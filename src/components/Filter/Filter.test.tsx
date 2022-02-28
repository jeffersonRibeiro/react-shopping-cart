import { fireEvent } from '@testing-library/react';
import { renderWithThemeProvider } from 'utils/test/test-utils';
import ProductsProvider, { ProductsContext } from 'contexts/products-context';

import Filter from '.';
import { availableSizes } from './Filter';

describe('[components] - Filter', () => {
  const setup = () => {
    return renderWithThemeProvider(
      <ProductsProvider>
        <Filter />
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

  test('should call filterProducts() with filter as params', () => {
    const filterProducts = jest.fn();

    const { getAllByTestId } = renderWithThemeProvider(
      <ProductsContext.Provider value={{ filterProducts }}>
        <Filter />
      </ProductsContext.Provider>
    );
    const checkbox = getAllByTestId('checkbox')[0] as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(filterProducts).toHaveBeenNthCalledWith(1, [checkbox.value]);
  });
});
