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
    return (
      <li className="item">
        {this.props.formatPrice(this.props.item.price)} 
        <button onClick={this.viewImage}>LOOK</button>  
        <button disabled={this.props.cart.includes(this.props.item.id)} onClick={this.addToCart}>ADD</button>
      </li>
    )
  }
}

export default Item;