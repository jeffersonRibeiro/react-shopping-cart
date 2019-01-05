import { UPDATE_CART } from './actionTypes';


const initialState = {
  data: {
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}