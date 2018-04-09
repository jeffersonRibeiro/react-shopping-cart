import { combineReducers } from 'redux';
import productReducer from './productReducer';


export default combineReducers({
  products: productReducer
});