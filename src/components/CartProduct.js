import React, { Component } from 'react';

import util from '../util';

class CartProduct extends Component {
  render(){
    const product = this.props.product;

    return (
      <div onClick={() => this.props.removeProduct(product)} className="shelf-item">
        <div className="shelf-item__thumb">
          <img src={require(`../static/products/${product.sku}_2.jpg`)} alt={product.title} />
        </div>
        <div className="shelf-item__details">
          <p className="title">{product.title}</p>
          <p className="desc">
            GGG | Preto e branco <br />
            Quantidade: {product.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
          <p>R$ {util.formatPrice(product.price)}</p>
        </div>
        <div className="clearfix" />
      </div>
    )
  }
}

export default CartProduct;