import React from 'react';

import util from '../util';


const Product = (props) => {
  const product = props.product;
  product.quantity = 1;
  let productInstallment;

  let formattedPrice = util.formatPrice(product.price);


  if(!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>ou {product.installments} x</span><b> R$ {util.formatPrice(installmentPrice)}</b>
      </div>
    );
  }

  /* TODO: fazer a separação da casa decimal para estilização de forma mais limpa */

  return (
    <div className="shelf-item" data-sku={product.sku}>
      <div className="shelf-item__thumb">
        <img src={require(`../static/products/${product.sku}_1.jpg`)} alt={product.title} />
      </div>
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val"><small>R$</small>
        
          <b>
            {formattedPrice.substr(0, formattedPrice.length - 3)}
          </b>
          <span>
            {formattedPrice.substr(formattedPrice.length - 3, 3)}
          </span>
        </div>
        {productInstallment}
      </div>
      <div onClick={() => props.addProduct(product)} className="shelf-item__buy-btn">Adicionar ao carrinho</div>
    </div>
  );
}

export default Product;