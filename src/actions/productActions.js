import { FETCH_PRODUCTS } from "./types";

async function _fetch(callback){
  const res = await fetch('//localhost:8001/api/products');
  const json = await res.json();

  return json;
}

export const fetchProducts = () => dispatch => {
  _fetch()
    .then(json => dispatch({
      type: FETCH_PRODUCTS,
      payload: json.products
    }))
    .catch(err => {
      console.log(err);
      throw new Error("Não foi possível obter os prodtos. Tente novamente mais tarde.");
    });
}