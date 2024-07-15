import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importing the CSS file

const Home = () => {
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

      {/* Main Content */}
      <main className="main">
        <section className="landing-page">
          <h1>PHARMACY LANDING PAGE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit loborti.
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
