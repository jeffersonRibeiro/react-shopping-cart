import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';

const CartProduct = ({ product, removeProduct }) => {
  const [isMouseOver, setMouseOver] = useState(false);

  const classes = ['shelf-item'];

  if (!!isMouseOver) {
    classes.push('shelf-item--mouseover');
  }

  return (
    <div className={classes.join(' ')}>
      <div
        className="shelf-item__del"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        onClick={() => removeProduct(product)}
      />
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../static/products/${product.sku}_2.jpg`)}
        alt={product.title}
      />
      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes[0]} | ${product.style}`} <br />
          Quantity: {product.quantity}
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default CartProduct;
