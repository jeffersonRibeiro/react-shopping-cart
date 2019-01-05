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
