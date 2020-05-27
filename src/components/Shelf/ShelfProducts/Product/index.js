import React from 'react';

import { formatPrice } from '../../../../services/util';

import {
  Container,
  Stopper,
  Image,
  Title,
  Price,
  InstallmentStyle,
  Bold,
  BuyButton,
} from './styles.js';

function Product({ product, addProduct }) {
  let formattedPrice = formatPrice(product.price, product.currencyId);

  return (
    <Container onClick={() => addProduct(product)}>
      {product.isFreeShipping && <Stopper>Free shipping</Stopper>}
      <Image
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
        title={product.title}
      />
      <Title>{product.title}</Title>
      <Price>
        <div>
          <small>{product.currencyFormat}</small>
          <Bold>{formattedPrice}</Bold>
        </div>
        <Installment product={product} />
      </Price>
      <BuyButton>Add to cart</BuyButton>
    </Container>
  );
}

function Installment({ product }) {
  if (!product.installments) {
    return null;
  }

  const installmentPrice = product.price / product.installments;

  return (
    <InstallmentStyle>
      <span>or {product.installments} x </span>
      <Bold>
        {product.currencyFormat}
        {formatPrice(installmentPrice, product.currencyId)}
      </Bold>
    </InstallmentStyle>
  );
}

export default Product;
