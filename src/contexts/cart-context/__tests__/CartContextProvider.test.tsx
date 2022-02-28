import { render } from '@testing-library/react';
import { CartProvider } from '..';

describe('[contexts] - cart-context', () => {
  const setup = () => {
    return render(<CartProvider />);
  };

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});
