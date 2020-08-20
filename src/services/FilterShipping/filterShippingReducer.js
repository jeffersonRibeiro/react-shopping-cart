import { UPDATE_SHIPPING } from './filterShippingActionTypes';

const initialState = {
  type: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SHIPPING:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
