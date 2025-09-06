import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import productsData from "./products";
import ProductDetail from "./ProductDetail";
import CartPage from "./CartPage";
import "./Ecommerce.css";

function Ecommerce() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateCartQty = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + delta } : item
      ).filter(item => item.qty > 0)
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="ecommerce-container">
      <header className="header">
        <h1>MyClassicStore</h1>
        <div className="cart-button">
          <Link to="/task8/cart">🛒 Cart ({totalCartCount})</Link>
        </div>
      </header>

      <Routes>
        <Route path="" element={
          <div>
            <h2>Products</h2>
            <div className="products-grid">
              {productsData.map(p => (
                <div key={p.id} className="product-card">
                  <img src={p.img} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p>₹{p.price}</p>
                  <div className="product-buttons">
                    <button onClick={() => addToCart(p)}>Add to Cart</button>
                    <Link to={`/task8/product/${p.id}`}>
                      <button>View</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }/>

        <Route path="product/:id" element={<ProductDetail addToCart={addToCart} cartCount={totalCartCount} />} />
        <Route path="cart" element={<CartPage cart={cart} updateCartQty={updateCartQty} />} />
      </Routes>
    </div>
  );
}

export default Ecommerce;
