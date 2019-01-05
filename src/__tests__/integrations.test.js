import moxios from 'moxios';
import axios from '../services/axios';

import Root from '../Root';
import App from '../components/App';
import ShelfHeader from '../components/Shelf/ShelfHeader';
import Product from '../components/Shelf/Product';
import CartProduct from '../components/FloatCart/CartProduct';

/* 
  Faz request dos produtos, verifica se a quantidade
  retornada esta correta, adiciona 1 produto ao carrinho e
  verifica se foi adicionado corretamente.
*/

const productsMock = {
  products: [
    {
      id: 0,
      sku: 8552515751438644,
      title: 'Camisa Nike Corinthians I',
      description: '14/15 s/nº',
      availableSizes: ['S', 'G', 'GG', 'GGG'],
      style: 'Branco com listras pretas',
      price: 229.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true
    },
    {
      id: 1,
      sku: 18644119330491312,
      title: 'Camisa Nike Corinthians II',
      description: '14/15 s/nº',
      availableSizes: ['S', 'G', 'GG', 'GGG'],
      style: 'Preta com listras brancas',
      price: 229.9,
      installments: 9,
      currencyId: 'BRL',
      currencyFormat: 'R$',
      isFreeShipping: true
    }
  ]
};

beforeEach(() => {
  moxios.install(axios);
  moxios.stubRequest('http://localhost:8001/api/products', {
    status: 200,
    response: productsMock
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('Integrations', () => {
  it('should fetch 2 products and add 1 to cart', done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    /* Before fetch the shelf should contain 0 products in it */
    expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(0);

    moxios.wait(() => {
      wrapped.update();

      /* and then after fetch, should contain 2 */
      expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);

      /* Cart should start with 0 products */
      expect(wrapped.find(CartProduct).length).toEqual(0);

      /* Click to add product to cart */
      wrapped
        .find(Product)
        .at(0)
        .find('.shelf-item__buy-btn')
        .simulate('click');

      /* Then after one product is added to cart, it should have 1 in it */
      expect(wrapped.find(CartProduct).length).toEqual(1);

      wrapped.unmount();
      done();
    });
  });
});
