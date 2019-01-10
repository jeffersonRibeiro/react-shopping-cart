import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';
import ShelfHeader from '../components/Shelf/ShelfHeader';
import Product from '../components/Shelf/ProductList/Product';
import CartProduct from '../components/FloatCart/CartProduct';

import { productsAPI } from '../services/util';

/*
  - Request the products;
  - check if the quantity returned is correct;
  - add 1 product to the cart and make sure it has been added correctly.
*/

const productsMock = {
  products: [
    {
      id: 12,
      sku: 12064273040195392,
      title: 'Cat Tee Black T-Shirt',
      description: '4 MSL',
      availableSizes: ['S', 'XS'],
      style: 'Black with custom print',
      price: 10.9,
      installments: 9,
      currencyId: 'USD',
      currencyFormat: '$',
      isFreeShipping: true
    },
    {
      id: 13,
      sku: 51498472915966366,
      title: 'Dark Thug Blue-Navy T-Shirt',
      description: '',
      availableSizes: ['M'],
      style: 'Front print and paisley print',
      price: 29.45,
      installments: 5,
      currencyId: 'USD',
      currencyFormat: '$',
      isFreeShipping: true
    }
  ]
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(productsAPI, {
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
        .simulate('click');

      /* Then after one product is added to cart, it should have 1 in it */
      expect(wrapped.find(CartProduct).length).toEqual(1);

      wrapped.unmount();
      done();
    });
  });
});
