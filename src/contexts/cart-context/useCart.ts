import { useContext } from 'react';

import { CartContext, ICartContext } from './CartContextProvider';
import useCartProducts from './useCartProducts';
import useCartTotal from './useCartTotal';

const useCart = () => {
  const { isOpen, setIsOpen } = useContext(CartContext) as ICartContext;
  const {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartProducts();
  const { total, updateCartTotal } = useCartTotal();

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return {
    isOpen,
    openCart,
    closeCart,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    total,
    updateCartTotal,
  };
};

export default useCart;
