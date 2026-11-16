import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppThemeProvider } from 'contexts/theme-context';
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from '.';

describe('[components] - App', () => {
  const setup = () => {
    return render(
      <AppThemeProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </AppThemeProvider>
    );
  };

  afterEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });

  test('should keep the cart contents when the theme changes', async () => {
    setup();

    const [firstBuyButton] = await screen.findAllByText('Add to cart');
    userEvent.click(firstBuyButton);

    const getCartText = () =>
      screen.getByText('Cart').parentElement?.parentElement?.textContent;

    const cartTextBefore = getCartText();
    expect(cartTextBefore).toContain('Checkout');
    expect(cartTextBefore).not.toContain('Add some products in the cart');

    userEvent.click(screen.getByRole('button', { name: 'Dark mode' }));

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(getCartText()).toBe(cartTextBefore);
  });
});
