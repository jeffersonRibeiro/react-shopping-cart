import { IProduct } from 'models';

const mockProducts: IProduct[] = [
  {
    availableSizes: ['S', 'L', 'XL', 'XXL'],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº',
    id: 0,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 8552515751438644,
    style: 'White T-shirt',
    title: 'Cropped Stay Groovy off white',
  },
  {
    availableSizes: ['X', 'ML', 'L'],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 11,
    installments: 3,
    isFreeShipping: true,
    price: 13.25,
    sku: 39876704341265610,
    style: 'Wine',
    title: 'Basic Cactus White T-shirt',
  },
  {
    availableSizes: ['XL'],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº - Jogador',
    id: 4,
    installments: 12,
    isFreeShipping: false,
    price: 25.9,
    sku: 9197907543445676,
    style: 'Tony Hawk',
    title: 'Skater Black Sweatshirt',
  },
];

export default mockProducts;
