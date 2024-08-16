import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gallery');
  };

  return (
    <div className="hero-container">
      <video src="/32 Legendary Goals in Football History.mp4" autoPlay loop muted />
      <h1>StreetLegendsNY</h1>
      <button onClick={handleButtonClick}>View Our Gallery</button>
    </div>
  );
};

export default HeroSection;







