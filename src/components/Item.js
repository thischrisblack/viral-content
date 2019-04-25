import React from 'react';

class Item extends React.Component {

  viewImage = () => {
    this.props.priceGouger(this.props.item.id, 5);
  }

  addToCart = () => {
    this.props.priceGouger(this.props.item.id, 15);
    this.props.addToCart(this.props.item.id);
  }

  render() {
    const {id, src, title, price} = this.props.item;
    return (
      <li className="item">
        <img className="item__image" alt={title} onClick={this.viewImage} src={src}></img>
        <div className="item__title">{title}</div>
        <div className="item__price">{this.props.formatPrice(price)} </div>
        
        {/* <button onClick={this.viewImage}>LOOK</button>   */}
        <button className="item__button" disabled={this.props.cart.includes(id)} onClick={this.addToCart}>ADD TO CART</button>
      </li>
    )
  }
}

export default Item;