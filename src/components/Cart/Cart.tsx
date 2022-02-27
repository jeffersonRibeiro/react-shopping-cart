import { ICartContext, useCartContext } from 'contexts/cart-context';

import formatPrice from 'utils/formatPrice';
import CartProducts from './CartProducts';
import * as S from './style';

const Cart = () => {
  const { total, isOpen, openCart, closeCart } =
    useCartContext() as ICartContext;

  const handleCheckout = () => {
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

  const handleToggleCart = (isOpen: boolean) => () =>
    isOpen ? closeCart() : openCart();

  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={handleToggleCart(isOpen)}>
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
          <S.HeaderTitle>Cart</S.HeaderTitle>
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
          <S.CheckoutButton onClick={handleCheckout}>Checkout</S.CheckoutButton>
        </S.CartFooter>
      </S.CartContent>
    </S.Container>
  );
};

export default Cart;
