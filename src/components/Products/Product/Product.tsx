import formatPrice from 'utils/formatPrice';

import { ICartContext, useCartContext } from 'contexts/cart-context';
import { IProduct } from 'models';
import * as S from './style';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { addProduct, openCart } = useCartContext() as ICartContext;
  const {
    sku,
    title,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
  } = product;

  const formattedPrice = formatPrice(price, currencyId);
  let productInstallment;

  if (installments) {
    const installmentPrice = price / installments;

    productInstallment = (
      <S.Installment>
        <span>or {installments} x</span>
        <b>
          {currencyFormat}
          {formatPrice(installmentPrice, currencyId)}
        </b>
      </S.Installment>
    );
  }

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  return (
    <S.Container>
      {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}
      <S.Image src={require(`static/products/${sku}_1.jpg`)} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Price>
        <S.Val>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct}>Add to cart</S.BuyButton>
    </S.Container>
  );
};

export default Product;
