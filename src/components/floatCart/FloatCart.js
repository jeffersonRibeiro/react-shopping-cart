import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../../actions/floatCartActions';
import { updateCart } from '../../actions/updateCartActions';

import CartProduct from './CartProduct';

import persistentCart from "../../persistentCart";

import util from '../../util';


class FloatCart extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.openFloatCart = this.openFloatCart.bind(this);
    this.closeFloatCart = this.closeFloatCart.bind(this);

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);

    this.proceedToCheckout = this.proceedToCheckout.bind(this);
  }

  componentWillMount() {
    this.props.loadCart(JSON.parse(persistentCart().get()) || []);
  }

  componentDidMount() {
    /*
      Reconheço que o setTimeout 0 não é legal,
      perdi um bom tempo tentando encontrar o momento correto
      de acessar props.cartProducts para dar update no carrinho...
      Aceito ajuda kkk
    */
    setTimeout(() => {
      this.props.updateCart(this.props.cartProducts);
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openFloatCart() {
    this.setState({ isOpen: true });
  }

  closeFloatCart() {
    this.setState({ isOpen: false });
  }

  addProduct(product) {
    const cartProducts = this.props.cartProducts;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.sku === product.sku) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      this.props.cartProducts.push(product);
    }

    this.props.updateCart(cartProducts);
    this.openFloatCart();
  }

  removeProduct(product) {
    const cartProducts = this.props.cartProducts;

    const index = cartProducts.findIndex(p => p.sku === product.sku);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      this.props.updateCart(cartProducts);
    }
  }

  proceedToCheckout() {
    const subtotal = this.props.cartTotals.totalPrice;

    if (!this.props.cartTotals.productQuantity) {
      alert("Adicione algum produto na sacola!");
    }else {
      alert(`Checkout - Subtotal: R$ ${util.formatPrice(subtotal)}`);
    }
  }

  render() {
    const cartTotals = this.props.cartTotals;

    const cartProducts = this.props.cartProducts.map(p => {
      return (
        <CartProduct
          product={p}
          removeProduct={this.props.removeProduct}
          key={p.sku}
        />
      );
    });

    let classes = ["float-cart"];

    if (!!this.state.isOpen) {
      classes.push("float-cart--open");
    }

    return (
      <div className={classes.join(" ")}>
        {/* Se carrinho aberto, mostrar botão (x) de fechar */}
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}

        {/* Se carrinho fechado, mostrar sacola com quantidade de produto e ação de abrir carrinho */}
        {!this.state.isOpen && (
          <span
            onClick={() => this.openFloatCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotals.productQuantity}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">
                {cartTotals.productQuantity}
              </span>
            </span>
            <span className="header-title">SACOLA</span>
          </div>

          <div className="float-cart__shelf-container">
            {cartProducts}
            {!cartProducts.length && (
              <p className="shelf-empty">
                Adicione algum produto na sacola <br />:)
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                R$ {util.formatPrice(cartTotals.totalPrice)}
              </p>
              <small className="sub-price__installment">
                {!!cartTotals.installments && (
                  <span>
                    OU EM ATÉ {cartTotals.installments} x R${" "}
                    {util.formatPrice(
                      cartTotals.totalPrice / cartTotals.installments
                    )}
                  </span>
                )}
              </small>
            </div>
            <div onClick={() => this.proceedToCheckout()} className="buy-btn">
              Finalizar Pedido
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FloatCart.propTypes = {
  loadCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  removeProduct: PropTypes.func,
  productToRemove: PropTypes.object,
};

const mapStateToProps = state => ({
  cartProducts: state.cartProducts.items,
  newProduct: state.cartProducts.item,
  productToRemove: state.cartProducts.itemToRemove,
  cartTotals: state.cartTotals.item
});

export default connect(mapStateToProps, { loadCart, updateCart, removeProduct})(FloatCart);

