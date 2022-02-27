import { render } from '@testing-library/react';
import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

import ProductsProvider from 'contexts/products-context';
import CartProvider from 'contexts/cart-context';

import App from '.';

describe('[commons] - App', () => {
  const setup = () => {
    return render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    );
  };

  test('should render correctly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
