import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Gallery.css';

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
  // Add more items here
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/product-details/${item.id}`, { state: { item } });
  };

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/" className="logo">StreetLegendsNY</Link>
        <div className="gallery-actions">
          <input type="text" placeholder="Search" className="search-bar" />
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart (0)</Link> {/* Updated to link to the cart page */}
        </div>
      </header>

      <div className="gallery-sort-filter">
        <h2>IN STOCK</h2>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => handleClick(item)}>
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
