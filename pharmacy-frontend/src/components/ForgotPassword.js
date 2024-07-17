import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';

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
  );
};

export default ForgotPassword;
