import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-shopping-cart-67954.firebaseio.com/'
});

export default instance;
