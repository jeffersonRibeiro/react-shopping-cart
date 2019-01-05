import CartProduct from '../';

const productMock = {
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
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CartProduct product={productMock} removeProduct={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('append class shelf-item--mouseover when mouseover x button', () => {
  expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
    false
  );
  wrapped.find('.shelf-item__del').simulate('mouseover');
  expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
    true
  );
});
