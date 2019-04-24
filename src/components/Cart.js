import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

  render() {

    return (

      <div className="cart">

        <h1>Shopping Cart</h1>

          {
            this.props.cart.length === 0 
            ? 
            <p>Your shopping cart is empty!</p> 
            :
            <>
              <ul className="cart__items">
                {
                  this.props.cart.map(key => {
                    const item = this.props.items.find(e => e.id === key);
                    return <CartItem 
                              key={item.id} 
                              index={item.id} 
                              item={item} 
                              priceGouger={this.props.priceGouger} 
                              formatPrice={this.props.formatPrice} 
                            />
                  })
                }
              </ul>

              <div className="cart__total">Total: {this.props.formatPrice(this.props.total)}</div>

              <h3>Checkout</h3>

              <input type="text" placeholder="Credit Card Number" onChange={this.props.cartGouger}></input>
              <input type="text" placeholder="Expiration" onChange={this.props.cartGouger}></input>
              <input type="text" placeholder="CVV" onChange={this.props.cartGouger}></input>
              <button onClick={this.props.shutItDown}>PAY</button>

            </>            
          }

        </div>   
    )

  }

}

export default Cart;