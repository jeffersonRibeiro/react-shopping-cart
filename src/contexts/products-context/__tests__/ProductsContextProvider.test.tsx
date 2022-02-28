import { render } from '@testing-library/react';
import { ProductsProvider } from 'contexts/products-context';

describe('[contexts] - products-context', () => {
  const setup = () => {
    return render(<ProductsProvider />);
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
