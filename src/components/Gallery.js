import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // For icons
import './Gallery.css';

// Sample data (you can move this to a separate file as suggested earlier)
const galleryItems = [
  {
    id: 1,
    title: "USA HOME KIT",
    imageUrl: "/images/item1.jpg",
    price: 90.00,
    description: "Home Of The Free Land Of The Brave.",
    sizeFit: "Regular fit, size up for a looser fit."
  },
  {
    id: 2,
    title: "FC BARELONA KIT",
    imageUrl: "/images/item2.jpg",
    price: 90.00,
    description: ".",
    sizeFit: "Relaxed fit, order your usual size."
  },
  {
    id: 3,
    title: "AC MILAN KIT",
    imageUrl: "/images/item3.jpg",
    price: 90.00,
    description: "A minimalistic graphic t-shirt with eco-forward technologies.",
    sizeFit: "Regular fit, order your usual size."
  },
];

// Reusable GalleryItem component
const GalleryItem = ({ item, onClick }) => (
  <div className="gallery-item" onClick={() => onClick(item)}>
    <img src={item.imageUrl} alt={item.title} />
    <h3>{item.title}</h3>
    <p>${item.price.toFixed(2)}</p>
  </div>
);

const Gallery = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (item) => {
    navigate(`/product-details/${item.id}`, { state: { item } });
  };

  const filteredItems = galleryItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery-page">
      {/* Top Bar (Promotions) */}
      <div className="top-bar">
        <span>JOIN OUR LOYALTY PROGRAM, EARN 20% CASH BACK ✨</span>
        <span>FREE U.S. STANDARD SHIPPING ON ORDERS $150+</span>
      </div>

      {/* Navigation Bar */}
      <header className="gallery-header">
        <Link to="/" className="logo">
          StreetLegendsNY
        </Link>
        <div className="gallery-actions">
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

      {/* Main Content */}
      <main className="gallery-main">
        <h1>Shop Our Kits</h1>
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} onClick={handleClick} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;