import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

import App from 'components/App';

import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
);
