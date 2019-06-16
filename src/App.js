import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import CrashModal from "./components/CrashModal";
import viralContent from "./viral-content";

class App extends React.Component {
  state = {
    items: viralContent,
    cart: [],
    imageModal: {
      src: "",
      display: false
    },
    crashModal: {
      display: false
    }
  };

  formatPrice = cents => {
    return (cents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  // Increases the increment value of an individual item.
  priceGouger = (itemId, amount) => {
    const items = this.state.items;
    let myItem = items.find(item => {
      return item.id === itemId;
    });
    myItem.increment += amount;
    this.setState({ items });
  };

  // Increases the increment value of every item in the cart.
  cartGouger = amount => {
    const cart = this.state.cart;
    cart.forEach(item => {
      this.priceGouger(item, amount);
    });
  };

  addToCart = itemId => {
    const cart = this.state.cart;
    cart.push(itemId);
    this.setState({ cart });
  };

  shutItDown = () => {
    // 1. Stop the insanity
    clearInterval(this.raiser);
    // 2. Display "sorry" modal
    this.viewCrashModal();
  };

  componentDidMount() {
    this.raiser = setInterval(() => {
      const items = this.state.items;
      items.forEach(item => {
        item.price += item.increment;
      });
      this.setState({ items });
    }, 10);
  }

  viewImageModal = (show, source) => {
    const image = this.state.imageModal;
    image.display = show;
    image.src = source;
    this.setState({ image });
  };

  viewCrashModal = () => {
    const crash = this.state.crashModal;
    crash.display = !crash.display;
    this.setState({ crash });
  };

  render() {
    const total = this.state.items.reduce((prevTotal, item) => {
      if (this.state.cart.includes(item.id)) {
        return prevTotal + item.price;
      }
      return prevTotal;
    }, 0);

    if (total > 9007199254740991) {
      this.shutItDown();
    }

    return (
      <div className="App">
        <ImageModal
          src={this.state.imageModal.src}
          display={this.state.imageModal.display}
          viewImageModal={this.viewImageModal}
        />

        <CrashModal display={this.state.crashModal.display} />

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

        <Footer />
      </div>
    );
  }
}

export default App;
