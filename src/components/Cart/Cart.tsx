import { ICartContext, useCartContext } from 'contexts/cart-context';
import CartProducts from './CartProducts';

import formatPrice from 'utils/formatPrice';

import * as S from './style';

const Cart = () => {
  const { total, isOpen, openCart, closeCart } =
    useCartContext() as ICartContext;

  const checkout = () => {
    if (total.productQuantity) {
      alert(
        `Checkout - Subtotal: ${total.currencyFormat} ${formatPrice(
          total.totalPrice,
          total.currencyId
        )}`
      );
    } else {
      alert('Add some product in the cart!');
    }
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={() => (isOpen ? closeCart() : openCart())}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <S.CartIcon>
            <S.CartQuantity>{total.productQuantity}</S.CartQuantity>
          </S.CartIcon>
        )}
      </S.CartButton>

      <S.CartContent>
        <S.CartContentHeader>
          <S.CartIcon large>
            <S.CartQuantity>{total.productQuantity}</S.CartQuantity>
          </S.CartIcon>
          <S.HeaderTitle className="header-title">Cart</S.HeaderTitle>
        </S.CartContentHeader>

        <CartProducts />

        <S.CartFooter>
          <S.Sub>SUBTOTAL</S.Sub>
          <S.SubPrice>
            <S.SubPriceValue>{`${total.currencyFormat} ${formatPrice(
              total.totalPrice,
              total.currencyId
            )}`}</S.SubPriceValue>
            <S.SubPriceInstallment>
              {total.installments ? (
                <span>
                  {`OR UP TO ${total.installments} x ${
                    total.currencyFormat
                  } ${formatPrice(
                    total.totalPrice / total.installments,
                    total.currencyId
                  )}`}
                </span>
              ) : null}
            </S.SubPriceInstallment>
          </S.SubPrice>
          <S.CheckoutButton onClick={checkout}>Checkout</S.CheckoutButton>
        </S.CartFooter>
      </S.CartContent>
    </S.Container>
  );
};

export default Cart;
