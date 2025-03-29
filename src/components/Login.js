import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // For icons
import './Login.css';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // For the search bar in the header

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Registering with:', { email, password });
  };

  return (
    <div className="login-page">
      {/* Header (same as Home.js, ProductDetails.js, and Cart.js) */}
      <header className="login-header">
        <Link to="/" className="logo">
          StreetLegendsNY
        </Link>
        <div className="login-actions">
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

      {/* Back to Home Link */}
      <div className="back-link-container">
        <Link to="/" className="back-link">Back to Home</Link>
      </div>

      {/* Login/Register Form */}
      <div className="login-container">
        <h1>{isRegister ? 'Register' : 'Login'}</h1>

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isRegister && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        </form>

        <div className="toggle-form">
          {isRegister ? (
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsRegister(false)}>Log in</button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setIsRegister(true)}>Register</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;