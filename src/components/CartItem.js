import React from "react";
import PropTypes from "prop-types";

class CartItem extends React.Component {
  gougeHarder = () => {
    // This just makes the item price increase faster.
    this.props.priceGouger(this.props.item.id, 250);
  };

  render() {
    return (
      <li className="cart__items">
        <span className="cart__title">{this.props.item.title}</span>
        <span className="cart__price">
          {this.props.formatPrice(this.props.item.price)}
        </span>
        <span className="cart__remove" onClick={this.gougeHarder}>
          &times;
        </span>
      </li>
    );
  }
}

CartItem.propTypes = {
  priceGouger: PropTypes.func,
  formatPrice: PropTypes.func,
  gougeHarder: PropTypes.func,
  item: PropTypes.object
};

export default CartItem;
