import React from 'react';
import Item from './Item';

class Items extends React.Component {

  render () {

    return (

      <ul className="items">
        {this.props.items.map((item) => {
          return (
            <Item 
              item={item} 
              key={item.id} 
              priceGouger={this.props.priceGouger} 
              addToCart={this.props.addToCart} 
              cart={this.props.cart} 
              formatPrice={this.props.formatPrice} 
            />
          )
        })}
      </ul>
      
    )

  }

}

export default Items;