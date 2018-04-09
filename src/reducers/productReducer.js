import { FETCH_PRODUCTS } from '../actions/types';

const initialState = {
  items: []
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}