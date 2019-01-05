import Product from '..';

const productMock = {
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
};

it('mount without crashing', () => {
  const wrapped = mount(
    <Product product={productMock} addProduct={() => {}} />
  );
  wrapped.unmount();
});
