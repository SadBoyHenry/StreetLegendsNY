import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <header className="cart-header">
        <Link to="/" className="logo">
          StreetLegendsNY
        </Link>
        <div className="cart-actions">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search products"
          />
          <Link to="/login" aria-label="Login">
            <FaUser className="icon" />
          </Link>
          <Link to="/cart" aria-label="View cart">
            <FaShoppingCart className="icon" />
          </Link>
        </div>
      </header>

      <div className="back-link-container">
        <Link to="/" className="back-link">Back to Home</Link>
      </div>

      <main className="cart-main">
        <h1>Your Cart</h1>
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <div className="cart-summary">
              <h2>Total: ${totalAmount.toFixed(2)}</h2>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </main>
    </div>
  );
};

export default Cart;