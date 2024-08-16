import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom
import './Login.css'; // Ensure your CSS file is linked

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token or user info in localStorage/sessionStorage
        localStorage.setItem('token', data.token);

        // Redirect the user after successful login
        navigate('/gallery');
      } else {
        // Handle failed login attempt
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <button className="back-link" onClick={() => navigate('/gallery')}>
          Back to Gallery
        </button>
      </header>

      <div className="login-container">
        <h1>Login</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <div className="toggle-form">
          <p>
            Don't have an account?{' '}
            <button onClick={() => navigate('/register')}>Register</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
