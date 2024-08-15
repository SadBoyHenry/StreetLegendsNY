import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Cart from './components/Cart'; // Import Cart component
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

function MainPage() {
  return (
    <>
      <HeroSection />
      <Footer />
      <ContactForm />
    </>
  );
}

export default App;