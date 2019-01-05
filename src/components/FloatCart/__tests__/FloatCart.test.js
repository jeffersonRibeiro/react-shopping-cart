import Root from '../../../Root';
import FloatCart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
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
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <FloatCart />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should mount with 2 products in it', () => {
  expect(wrapped.find(CartProduct).length).toEqual(2);
});
