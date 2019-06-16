import React from "react";
import MagnifyingGlass from "./MagnifyingGlass";
import ShoppingCart from "./ShoppingCart";

class Item extends React.Component {
  viewImage = () => {
    this.props.priceGouger(this.props.item.id, 0.5);
    this.props.viewImageModal(true, this.props.item.src);
  };

  addToCart = () => {
    this.props.priceGouger(this.props.item.id, 5);
    this.props.addToCart(this.props.item.id);
  };

  render() {
    const { id, src, title, price } = this.props.item;
    const isInCart = this.props.cart.includes(id);
    return (
      <li className="item">
        <div className="item__controls">
          <button className="item__controls--icon" onClick={this.viewImage}>
            <MagnifyingGlass width={50} />
          </button>
          <button
            className="item__controls--icon"
            disabled={isInCart}
            onClick={this.addToCart}
          >
            <ShoppingCart width={50} />
          </button>
        </div>
        <img
          className="item__image"
          alt={title}
          onClick={this.viewImage}
          src={src}
        />
        <div className="item__title">{title}</div>
        <div className="item__price">{this.props.formatPrice(price)} </div>
      </li>
    );
  }
}

export default Item;
