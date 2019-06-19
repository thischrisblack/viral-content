import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

class Items extends React.Component {
  render() {
    return (
      <ul className="items">
        {this.props.items.map(item => {
          return (
            <Item
              item={item}
              key={item.id}
              priceGouger={this.props.priceGouger}
              addToCart={this.props.addToCart}
              cart={this.props.cart}
              formatPrice={this.props.formatPrice}
              viewImageModal={this.props.viewImageModal}
            />
          );
        })}
      </ul>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array,
  priceGouger: PropTypes.func,
  addToCart: PropTypes.func,
  cart: PropTypes.array,
  formatPrice: PropTypes.func,
  viewImageModal: PropTypes.func
};

export default Items;
