import React from 'react';
import Header from './components/Header';
import Items from './components/Items';
import Cart from './components/Cart';

class App extends React.Component {
  state = {
    items: [
      {
        id: 'img1',
        src: '',
        title: 'Monkey',
        price: 2799,
        increment: 1, 
        inCart: false
      },
      {
        id: 'img2',
        src: '',
        title: 'Kitty',
        price: 3999,
        increment: 1,
        inCart: false
      }
    ],
    cart: []
  }

  formatPrice = (cents) => {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

  priceGouger = (itemId, amount) => {    
    const items = this.state.items;
    let myItem = items.find(item => {
      return item.id === itemId;
    });
    myItem.increment += amount;
    this.setState({ items });
  }

  cartGouger = () => {
    const cart = this.state.cart;
    cart.forEach(item => {
      this.priceGouger(item, 2500);
    });
  }

  addToCart = (itemId) => {
    const cart = this.state.cart;
    cart.push(itemId);
    this.setState({ cart });
  }

  shutItDown = () => {
    // 1. Stop the insanity
    clearInterval(this.raiser);
    // 2. Display "sorry" modal

  }

  componentDidMount() {
    this.raiser = setInterval(() => {
      const items = this.state.items;
      items.forEach(item => {
        item.price += item.increment;
      });
      this.setState({items});
    }, 10);
  }

  render() {
    const total = this.state.items.reduce((prevTotal, item) => {
      if (this.state.cart.includes(item.id)) {
        return prevTotal + item.price;
      }
      return prevTotal;
    }, 0);

    if (total > 100000000) {
      this.shutItDown();
    }

    return (
      <div className="App">

        <Header />

        <Cart 
          cart={this.state.cart} 
          items={this.state.items} 
          priceGouger={this.priceGouger} 
          formatPrice={this.formatPrice} 
          cartGouger={this.cartGouger} 
          total={total} 
          shutItDown={this.shutItDown}
        />

        <Items 
          items={this.state.items} 
          priceGouger={this.priceGouger} 
          addToCart={this.addToCart} 
          cart={this.state.cart} 
          formatPrice={this.formatPrice} 
        />

      </div>
    )    
  }
}

export default App;
