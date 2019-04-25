import React from 'react';
import Header from './components/Header';
import Items from './components/Items';
import Cart from './components/Cart';
import ImageModal from './components/ImageModal';
import viralContent from './viral-content'

class App extends React.Component {
  state = {
    items: viralContent,
    cart: [],
    imageModal: {
      src: '/images/darth.png',
      display: false
    }
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
      this.priceGouger(item, 5000);
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

  viewImageModal = (show, source) => {
    const image = this.state.imageModal;
    image.display = show;
    image.src = source;
    this.setState({ image });
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

        <ImageModal src={this.state.imageModal.src} display={this.state.imageModal.display} viewImageModal={this.viewImageModal}/>

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
          viewImageModal={this.viewImageModal}
        />

      </div>
    )    
  }
}

export default App;
