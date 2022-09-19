import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Products from './components/Products';
import productList from './productList';

function App() {
    const [cart, setCart] = useState([]);
    const [priceTotal, setPriceTotal] = useState(0);
    const [productNum, setProductNum] = useState(0);

    useEffect(() => {
      let price = 0;
      cart.forEach(item => (price += item.quantity * item.product.price));
      setPriceTotal(price);
    }, [productNum]);

    const handleAddToCart = (e) => {
      let inCart = false;
      if (cart.length > 0) {
        cart.forEach((item) => {
          if (item.product.name === e.name) {
            item.quantity += 1;
            setProductNum(productNum + 1);
            inCart = true;
          }
        });
      }
      if (!inCart) {
        setCart([...cart, { product: e, quantity: 1}]);
        setProductNum(productNum + 1);
      }
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Header productNum={productNum} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/shop" 
                        element={
                            <Shop 
                                {...productList.map((e) => {
                                    return (
                                      <Products 
                                          key={uniqid()}
                                          e={e}
                                          handleAddToCart={handleAddToCart}
                                      />
                                    )
                                })}
                            />
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
                              setPriceTotal={setPriceTotal}
                          />
                      } 
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;