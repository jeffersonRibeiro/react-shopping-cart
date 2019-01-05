import Root from '../../../Root';
import FloatCart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
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
