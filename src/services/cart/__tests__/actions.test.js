import * as actions from '../actions';
import * as types from '../actionTypes';

const mockProduct = {
  id: 2,
  sku: 11854078013954528,
  title: 'Camisa Feminina Nike Corinthians I',
  description: '14/15 s/nº',
  availableSizes: ['S', 'G'],
  style: 'Branco com listras pretas',
  price: 199.9,
  installments: 7,
  currencyId: 'BRL',
  currencyFormat: 'R$',
  isFreeShipping: true
};

describe('floatCart actions', () => {
  describe('loadCart', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.LOAD_CART,
        payload: mockProduct
      };

      expect(actions.loadCart(mockProduct)).toEqual(expectedAction);
    });
  });

  describe('addProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.ADD_PRODUCT,
        payload: mockProduct
      };

      expect(actions.addProduct(mockProduct)).toEqual(expectedAction);
    });
  });

  describe('removeProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.REMOVE_PRODUCT,
        payload: mockProduct
      };

      expect(actions.removeProduct(mockProduct)).toEqual(expectedAction);
    });
  });
});
