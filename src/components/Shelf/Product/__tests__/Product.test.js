import Product from '..';

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

it('mount without crashing', () => {
  const wrapped = mount(
    <Product product={productMock} addProduct={() => {}} />
  );
  wrapped.unmount();
});
