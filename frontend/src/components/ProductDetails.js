import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link for navigation
import { CartContext } from '../context/CartContext'; // Import Cart Context
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const { item } = location.state;

  const { addToCart } = useContext(CartContext); // Use CartContext
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addToCart({ ...item, selectedSize }, quantity); // Add item to cart
    alert("Item added to cart!");
  };

  return (
    <div className="product-details-container">
      {/* Header with Back to Gallery Link */}
      <header className="product-header">
        <Link to="/gallery" className="back-link">Back to Gallery</Link>
      </header>

      <div className="product-details-content">
        <div className="product-image">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="product-info">
          <h1>{item.title}</h1>
          <p className="product-price">${item.price.toFixed(2)}</p>
          <p className="product-description">{item.description}</p>

          <div className="product-size">
            <label>Select a Size:</label>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelection(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-quantity">
            <label>Quantity:</label>
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange('decrement')}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
          <button className="add-to-wishlist-btn">ADD TO WISHLIST</button>

          <div className="additional-info">
            <h3>SIZE & FIT</h3>
            <p>{item.sizeFit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;








