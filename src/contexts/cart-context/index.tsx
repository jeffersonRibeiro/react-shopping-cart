import { createContext, FC, useContext, useState } from 'react';
import { ICartProduct, ICartTotal } from 'models';

export interface ICartContext {
  isOpen: boolean;
  openCart(): void;
  closeCart(): void;
  products: ICartProduct[];
  addProduct(product: ICartProduct): void;
  removeProduct(product: ICartProduct): void;
  increaseProductQuantity(productToIncrease: ICartProduct): void;
  decreaseProductQuantity(productToDecrease: ICartProduct): void;
  total: ICartTotal;
}

const CartContext = createContext<ICartContext | {}>({});
const totalInitialValues = {
  productQuantity: 0,
  installments: 0,
  totalPrice: 0,
  currencyId: 'USD',
  currencyFormat: '$',
};

const CartProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState<ICartTotal>(totalInitialValues);

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const addProduct = (newProduct: ICartProduct) => {
    let productAlreadyInCart = false;
    const updatedProducts = products.map((product: ICartProduct) => {
      if (product.id === newProduct.id) {
        product.quantity += 1;
        productAlreadyInCart = true;
      }

      return product;
    });

    if (!productAlreadyInCart) {
      updatedProducts.push(newProduct);
    }

    setProducts(updatedProducts);
    updateCartTotal(updatedProducts);
  };

  const removeProduct = (productToRemove: ICartProduct) => {
    const index = products.findIndex(
      (product: ICartProduct) => product.id === productToRemove.id
    );
    if (index >= 0) {
      products.splice(index, 1);
      updateCartTotal(products);
    }
  };

  const increaseProductQuantity = (productToIncrease: ICartProduct) => {
    const updatedProducts = products.map((product: ICartProduct) => {
      if (product.id === productToIncrease.id) {
        product.quantity += 1;
      }

      return product;
    });

    updateCartTotal(updatedProducts);
  };

  const decreaseProductQuantity = (productToDecrease: ICartProduct) => {
    const updatedProducts = products.map((product: ICartProduct) => {
      if (product.id === productToDecrease.id) {
        product.quantity -= 1;
      }

      return product;
    });

    updateCartTotal(updatedProducts);
  };

  const updateCartTotal = (products: ICartProduct[]) => {
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity;
        return sum;
      },
      0
    );

    const totalPrice = products.reduce((sum: number, product: ICartProduct) => {
      sum += product.price * product.quantity;
      return sum;
    }, 0);

    const installments = products.reduce(
      (greater: number, product: ICartProduct) => {
        greater =
          product.installments > greater ? product.installments : greater;
        return greater;
      },
      0
    );

    const total = {
      productQuantity,
      installments,
      totalPrice,
      currencyId: 'USD',
      currencyFormat: '$',
    };

    setTotal(total);
  };

  const CartContextValue: ICartContext = {
    isOpen,
    openCart,
    closeCart,
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    total,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
export default CartProvider;
