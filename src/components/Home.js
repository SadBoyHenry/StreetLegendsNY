import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // For icons
import './Home.css';

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

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = (item) => {
    navigate(`/product-details/${item.id}`, { state: { item } });
  };

  const filteredItems = galleryItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <video src="/32 Legendary Goals in Football History.mp4" autoPlay loop muted playsInline />
        <div className="hero-overlay"></div>
        <header className="hero-header">
          <Link to="/" className="logo">
            StreetLegendsNY
          </Link>
          <div className="hero-actions">
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
        <h1>StreetLegendsNY</h1>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-content">
          <h2>Shop Our Men’s Kits</h2>
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} item={item} onClick={handleClick} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;