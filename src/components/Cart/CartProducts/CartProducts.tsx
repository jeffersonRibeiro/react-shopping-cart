import { ICartContext, useCartContext } from 'contexts/cart-context';

import CartProduct from './CartProduct';
import * as S from './style';

const CartProducts = () => {
  const { products } = useCartContext() as ICartContext;

  return (
    <S.Container>
      {products?.length ? (
        products.map((p) => <CartProduct product={p} key={p.sku} />)
      ) : (
        <S.CartProductsEmpty>
          Add some products in the cart <br />
          :)
        </S.CartProductsEmpty>
      )}
    </S.Container>
  );
};

export default CartProducts;
