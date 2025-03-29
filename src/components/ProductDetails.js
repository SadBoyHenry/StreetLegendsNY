import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state;

  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = () => {
    addToCart({ ...item }, 1);
    alert("Item added to cart!");
  };

  return (
    <div className="product-details-container">
      <header className="product-header">
        <Link to="/" className="logo">
          StreetLegendsNY
        </Link>
        <div className="product-actions">
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

      <div className="product-details-content">
        <div className="product-image">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="product-info">
          <h1>{item.title}</h1>
          <p className="product-price">${item.price.toFixed(2)}</p>
          <p className="product-description">{item.description}</p>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="add-to-wishlist-btn">Add to Wishlist</button>

          <div className="additional-info">
            <h3>Size & Fit</h3>
            <p>{item.sizeFit} (One Size Available)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;