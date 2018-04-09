import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT } from "./types";



export const loadCart = () => dispatch => {
  dispatch({
    type: LOAD_CART,
    payload: []
  });
}

export const addProduct = (productData) => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    payload: productData
  });
}

export const removeProduct = (productData) => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: productData
  });
}
