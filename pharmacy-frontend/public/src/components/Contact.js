import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  return (
    <div className='container'>
      <nav className="navbar">
        <div className="brand">Pharmacy</div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className="contact-container">
      <h1>Contact Us</h1>
      <p>This is the Contact page.</p>
      </div>

      <footer className="footer">
        <p>&copy; 2023 Pharmacy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
