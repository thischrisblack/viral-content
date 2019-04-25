import React from 'react';
import MagnifyingGlass from './MagnifyingGlass';
import ShoppingCart from './ShoppingCart';

class Item extends React.Component {

  viewImage = () => {
    this.props.priceGouger(this.props.item.id, 5);
    this.props.viewImageModal(true, this.props.item.src);
  }

  addToCart = () => {
    this.props.priceGouger(this.props.item.id, 15);
    this.props.addToCart(this.props.item.id);
  }

  render() {

    const {src, title, price} = this.props.item;
    return (
      <li className="item">
        <div className="item__controls">
          <button className="item__controls--blue"  onClick={this.viewImage}><MagnifyingGlass width={50} /></button>
          <button className="item__controls--red" onClick={this.addToCart}><ShoppingCart width={50}/></button>
        </div>
        <img className="item__image" alt={title} onClick={this.viewImage} src={src}></img>
        <div className="item__title">{title}</div>
        <div className="item__price">{this.props.formatPrice(price)} </div>
      </li>
    )
  }
}

export default Item;