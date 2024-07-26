import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/forgot-password', { email });
      if (response.status === 200) {
        alert('Password reset link has been sent to your email');
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (err) {
      console.error('Password reset failed', err);
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="brand"> License Over the Counter Pharmacy</div>
        <ul className="nav-links">
        <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Drugs</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
      </nav>
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;
