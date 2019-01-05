import Shelf from '..';
import Root from '../../../Root';
import ShelfHeader from '../ShelfHeader';
import Filter from '../Filter';
import Sort from '../Sort';
import Product from '../Product';

const initialState = {
  shelf: {
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
      <Shelf />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows 2 products component', () => {
  expect(wrapped.find(Product).length).toEqual(2);
});

it('shows a shelf header with 2 products', () => {
  expect(wrapped.find(ShelfHeader).props().productsLength).toEqual(2);
});

it('shows a filter component', () => {
  expect(wrapped.find(Filter).length).toEqual(1);
});

it('shows a sort component', () => {
  expect(wrapped.find(Sort).length).toEqual(1);
});
