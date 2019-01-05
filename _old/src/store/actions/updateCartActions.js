import { UPDATE_CART} from './types';

import persistentCart from '../../persistentCart';


export const updateCart = (cartProducts) => dispatch => {
  let productQuantity = cartProducts.reduce( (sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.installments > greater ? p.installments : greater;
    return greater;
  }, 0);
  

  let cartTotals = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'USD',
    currencyFormat: '$',
  }

  persistentCart().persist(JSON.stringify(cartProducts));

  dispatch({
    type: UPDATE_CART,
    payload: cartTotals,
  });

}
