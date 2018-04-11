import { combineReducers } from 'redux';
import productReducer from './productReducer';
import floatCartReducer from './floatCartReducer';
import updateCartReducer from './updateCartReducer';
import filterReducer from './filterReducer';


export default combineReducers({
  products: productReducer,
  cartProducts: floatCartReducer,
  cartTotals: updateCartReducer,
  filters: filterReducer
});