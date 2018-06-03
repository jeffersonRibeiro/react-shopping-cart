import { UPDATE_CART } from '../actions/types';


const initialState = {
  item: {
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
        item: action.payload
      };
    default:
      return state;
  }
}
