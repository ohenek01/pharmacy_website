import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importing the CSS file

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem(username);
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, );
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

      {/* Main Content */}
      <main className="main">
        <section className="landing-page">
          <h1>PHARMACY LANDING PAGE</h1>
          <p>
          Welcome to License Over the Counter Pharmacy! 
          We are dedicated to providing you with the highest quality medications and healthcare products. 
          Our knowledgeable staff is here to assist you with all your health and wellness needs. 
          Explore our wide range of products and services, and experience the convenience and reliability that our pharmacy offers. 
          Thank you for choosing us as your trusted healthcare partner!
          </p>
          <Link to="/products" className="nav-link">
            <button className="get-started-btn">Get Started</button>
           </Link>
        </section>

        <aside className="illustration">
          <img
            src={require("./image/isometric-pharmacy-concept.png")}
            alt="Pharmacy Illustration"
            className="illustration-image"
          />
        </aside>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Pharmacy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
