import React, { Component } from 'react';

class FloatCart extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let classes = ['float-cart'];

    if(!!this.props.isOpen)
      classes.push('float-cart--open');
    
    return (
      <div className={classes.join(" ")}>
        <div onClick={this.props.closeFloatCart} className="float-cart__close-btn">
          X
        </div>
        <div className="float-cart__content">
          <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">3</span>
          </span>
          <span className="header-title">SACOLA</span>
          </div>
          <div className="float-cart__shelf-container">
            <div className="shelf-item">
              <div className="shelf-item__thumb">
                <img src="#" />
              </div>
              <div className="shelf-item__details">
                <p className="title">Camisetas Corinthians 77</p>
                <p className="desc">
                  GGG | Preto e branco <br />
                  Quantidade: 2
                </p>
              </div>
              <div className="shelf-item__price">
                <p>R$ 149,90</p>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">R$ 379,70</p>
              <small className="sub-price__installment">
                OU EM ATÉ 10 x R$ 37,97
              </small>
            </div>
            <div className="buy-btn">Finalizar Pedido</div>
          </div>
        </div>
      </div>
    );
  }

}

export default FloatCart;

