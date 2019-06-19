import React from "react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart-holder">
        <div className="cart">
          <h1>
            <span role="img" aria-label="Eyeballs">
              🛍️
            </span>{" "}
            Shopping Cart
          </h1>

          {this.props.cart.length === 0 ? (
            <p>Your shopping cart is empty!</p>
          ) : (
            <>
              <ul className="cart__list">
                {this.props.cart.map(key => {
                  const item = this.props.items.find(e => e.id === key);
                  return (
                    <CartItem
                      key={item.id}
                      index={item.id}
                      item={item}
                      priceGouger={this.props.priceGouger}
                      formatPrice={this.props.formatPrice}
                    />
                  );
                })}
              </ul>

              <div className="cart__total">
                Total: {this.props.formatPrice(this.props.total)}
              </div>

              <h3>Checkout:</h3>

              <div className="creditCard">
                <input
                  className="creditCard__number"
                  type="text"
                  placeholder="Credit Card Number"
                  onChange={() => this.props.cartGouger(100000)}
                />
                <input
                  className="creditCard__expiration"
                  type="text"
                  placeholder="Expiration"
                  onChange={() => this.props.cartGouger(1000000)}
                />
                <input
                  className="creditCard__CVV"
                  type="text"
                  placeholder="CVV"
                  onChange={() => this.props.cartGouger(1000000)}
                />
                <button
                  className="creditCard__pay"
                  onClick={this.props.shutItDown}
                >
                  PAY
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  formatPrice: PropTypes.func,
  priceGouger: PropTypes.func,
  shutItDown: PropTypes.func,
  items: PropTypes.array,
  total: PropTypes.number
};

export default Cart;
