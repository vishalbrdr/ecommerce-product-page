import { useState } from "react";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { ReactComponent as CloseIcon } from './images/icon-close.svg'
function App() {

  const [quantity, setQuantity] = useState(1)
  const [isOverlay, setIsOverlay] = useState(true)
  return (
    <div className="App">
      <Navbar quantity={quantity} setQuantity={setQuantity} />
      <main className="main">
        <div className="container">
          <Gallery isOverlay={isOverlay} setIsOverlay={setIsOverlay} />
          <div className="product-info">
            <h1> Sneaker Company </h1>
            <h2>
              Fall Limited Edition Sneakers
            </h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion. Featuring a
              durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price">
              <div className="discounted-price">$125.00</div>
              <div className="discount"> 50% </div>
              <div className="cost">$250.00</div>
            </div>
            <div className="product-cart">
              <Counter quantity={quantity} setQuantity={setQuantity} />
              <button className="btn btn-primary">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {isOverlay && (
          <div className="overlay" >
            <button onClick={() => setIsOverlay(false)} className="btn"><CloseIcon className="close" /></button>
            <Gallery />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
