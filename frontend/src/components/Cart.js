import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      {/* Header with Back to Gallery Link */}
      <header className="cart-header">
        <Link to="/gallery" className="back-link">Back to Gallery</Link>
      </header>

      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.title} - {item.selectedSize}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <span>Quantity: {item.quantity}</span>
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
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

