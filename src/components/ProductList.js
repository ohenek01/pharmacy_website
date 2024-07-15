import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Importing the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      {/* Navigation Bar */}
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

      {/* Product List */}
      <div className="product-list-container">
        <h1>Products</h1>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <Link to={`/products/${product.id}`} className="product-link">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-info">
                  <h2 className="product-title">{product.title}</h2>
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
