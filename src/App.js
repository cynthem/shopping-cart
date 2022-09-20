import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Ordered from './components/Ordered';
import productList from "./productList";

function App() {
  const [cart, setCart] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);
  const [productNum, setProductNum] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach(item => {
      price += item.quantity * item.product.price;
    });
    setPriceTotal(price);
  }, [productNum]);

  const handleAddToCart = (obj) => {
    let inCart = false;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.product.name === obj.name) {
          item.quantity += 1;
          setProductNum(productNum + 1);
          inCart = true;
        }
      });
    }
    if (!inCart) {
      setCart([...cart, { product: obj, quantity: 1 }]);
      setProductNum(productNum + 1);
    }
  }

  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
        <Header productNum={productNum} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/shop" 
            element={
              <Shop>
                {productList.map((product) => {
                  return (
                    <div className="product" key={uniqid()} product={product}>
                      <img className="product-img" alt={product.name} src={product.image} />
                      <div className="product-info">
                        <h3 className="product-title">{product.name}</h3>
                        <p className="product-price">{`$${product.price} ${product.rate}`}</p>
                      </div>
                      <p className="product-description">{product.description}</p>
                      <button 
                        className="add-cart-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  )
                })}
              </Shop>
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart}
                setCart={setCart}
                productNum={productNum}
                setProductNum={setProductNum}
                priceTotal={priceTotal}
              />
            } 
          />
          <Route path="/ordered" element={<Ordered />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;