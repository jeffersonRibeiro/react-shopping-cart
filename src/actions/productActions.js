import { FETCH_PRODUCTS } from './types';


const productsAPI = "//localhost:8001/api/products";

async function _fetch(callback){
  const res = await fetch(productsAPI);
  const json = await res.json();

  return json;
}

const compare = {
  'menorpreco': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'maiorpreco': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchProducts = (filters, sortBy) => dispatch => {

  _fetch()
    .then(json => {
      let { products } = json;

      if(filters && filters.length > 0){
        products = products.filter( p => filters.find( f => p.availableSizes.find( size => size === f ) ) )
      }

      if(!!sortBy){
        products = products.sort(compare[sortBy]);
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Não foi possível obter os produtos. Tente novamente mais tarde.');
    });
}