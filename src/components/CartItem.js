import React from 'react';

class CartItem extends React.Component {

  gougeHarder = () => {
    // This just makes the item price increase faster.
    this.props.priceGouger(this.props.item.id, 50);
  }

  render() {

    return (
      <p>
        {this.props.item.title} 
        {this.props.formatPrice(this.props.item.price)} 
        <button onClick={this.gougeHarder}>&times;</button>
      </p>
    )

  }
}

export default CartItem;