import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching the product data:", error);
      }
    };
    fetchProducts();
  }, []);

  if (!products || products.length === 0) {
    return ( 
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <div className="loading-message">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="brand">License Over the Counter Pharmacy</div>
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

      {/* Product List */}
      <div className="product-list-container">
        <h1>Products</h1>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={`http://localhost:3000/images/${product.image}`} alt={product.title} className="product-image" />
                <div className="product-info">
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Pharmacy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ProductList;
