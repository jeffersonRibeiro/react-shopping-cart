import { FETCH_PRODUCTS } from './types';


const productsAPI = '//localhost:8001/api/products';

async function _fetch(callback){
  const res = await fetch(productsAPI);
  const json = await res.json();

  return json;
}

export const fetchProducts = (filters) => dispatch => {

  _fetch()
    .then(json => {
      let { products } = json;

      if(filters && filters.length > 0){
        products = products.filter( p => filters.find( f => p.availableSizes.find( size => size === f ) ) )
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Não foi possível obter os prodtos. Tente novamente mais tarde.');
    });
}