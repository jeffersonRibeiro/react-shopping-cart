import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

/* Theme */
import GlobalStyle from 'commons/style/global-style';

/* Context Providers */
import { AppThemeProvider } from 'contexts/theme-context';
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </AppThemeProvider>
  </StrictMode>
);
