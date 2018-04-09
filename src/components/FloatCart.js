import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../actions/floatCartActions';

import CartProduct from './CartProduct';

class FloatCart extends Component {
  constructor(){
    super();

    this.state = {
      isOpen: false
    }

    this.openFloatCart = this.openFloatCart.bind(this);

  }

  componentWillMount() {
    this.props.loadCart();
  }

  componentWillReceiveProps(nextProps) {
    let cartProducts = this.props.cartProducts;

    if (nextProps.newProduct) {
      console.log("newProduct");
      let newProduct = nextProps.newProduct;
      let productAlreadyInCart = false;

      // Procura se o produto já tem no carrinho e soma quantidade
      for (var i = 0; i < cartProducts.length; i++) {
        if (cartProducts[i].sku === newProduct.sku) {
          cartProducts[i].quantity += newProduct.quantity;
          productAlreadyInCart = true;
        }
      }

      if (!productAlreadyInCart) {
        cartProducts.push(newProduct);
      }

      this.openFloatCart();
    }

    if(nextProps.productToRemove){
      let productToRemove = nextProps.productToRemove;
      console.log('productToRemove: ', productToRemove);
    }

  }

  openFloatCart() {
    document.body.style.overflow = "hidden";
    this.setState({ isOpen: true });
  }

  closeFloatCart() {
    document.body.style.overflow = "initial";
    this.setState({ isOpen: false });
  }

  render() {
    const cartProducts = this.props.cartProducts.map(p => {
      return <CartProduct
        product={p}
        removeProduct={this.props.removeProduct}
        key={p.sku}
      />;
    });

    let classes = ["float-cart"];

    if (!!this.state.isOpen){
      classes.push("float-cart--open");
    }


    return (
      <div className={classes.join(" ")}>
        <div onClick={() => this.closeFloatCart()} className="float-cart__close-btn">
          X
        </div>
        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">3</span>
            </span>
            <span className="header-title">SACOLA</span>
          </div>
          <div className="float-cart__shelf-container">{cartProducts}</div>
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

FloatCart.propTypes = {
  loadCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  removeProduct: PropTypes.func,
  productToRemove: PropTypes.object
};

const mapStateToProps = state => ({
  cartProducts: state.cartProducts.items,
  newProduct: state.cartProducts.item,
  productToRemove: state.cartProducts.itemToRemove
});

export default connect(mapStateToProps, { loadCart, removeProduct })(FloatCart);

