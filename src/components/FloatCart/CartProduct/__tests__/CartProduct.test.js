import CartProduct from '../';

const productMock = {
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
