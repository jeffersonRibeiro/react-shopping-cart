import React from 'react';

const Product = (props) => {
  const product = props.product;

  return (
    <div className="item" data-sku={product.sku}>
      <div className="item__thumb">
        <img src={require(`../static/products/${product.sku}_1.jpg`)} alt={product.title} />
      </div>
      <p className="item__title">{product.title}</p>
      <div className="item__price">
        <div className="val"><small>R$</small> <b>{product.price.toFixed(2)}</b></div>
        <div className="installment">
          <span>ou {product.installments} x</span><b> R$ {(product.price / product.installments).toFixed(2)}</b>
        </div>
      </div>
      <div onClick={() => props.addToCart(product.sku)} className="item__buy-btn">Adicionar ao carrinho</div>
    </div>
  );
}

export default Product;