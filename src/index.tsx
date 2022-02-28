import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

import App from 'components/App';

import ProductsProvider from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
