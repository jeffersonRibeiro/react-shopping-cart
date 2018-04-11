const persistentCart = () => {
  const key = 'cartProducts';
  
  return {
    persist: (data) => localStorage.setItem(key, data),
    get: () => localStorage.getItem(key),
  }

}

export default persistentCart;
