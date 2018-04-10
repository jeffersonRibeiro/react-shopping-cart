import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import updateCartReducer from './updateCartReducer';


export default combineReducers({
  products: productReducer,
  cartProducts: cartReducer,
  cartTotals: updateCartReducer
});