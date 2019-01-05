import * as actions from '../actions';
import * as types from '../actionTypes';

const mockProduct = {
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
