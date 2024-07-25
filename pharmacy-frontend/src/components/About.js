import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'

const About = () => {
  return (
    <div className='container'>
         <nav className="navbar">
        <div className="brand"> License Over the Counter Pharmacy</div>
        <ul className="nav-links">
        <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/home" className="nav-link">Home</Link>
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
      <div className="about-container">
      <div className="screen-background-text-foreground">
              <div className="Containerbox">
                <h1 className="Abottxt">About Us</h1>
                <h3 className="text">
                  Welcome to our pharmacy! We are dedicated to providing the best healthcare services and products to our community. Our team of experienced pharmacists and healthcare professionals are here
                  to assist you with all your medical needs.
                </h3>
                <h3 className="text">
                  Our pharmacy offers a wide range of prescription medications, over-the-counter products, and health and wellness items. We are committed to ensuring that you receive the highest quality care
                  and personalized service.
                </h3>
                <div className="img-container">
                <img src={require("./image/download (1).jpeg")} alt="Pharmacy " className="img"/>
                <img src={require("./image/download.jpeg")} alt="Pharmacy Illustration" className="img"/>
                </div>
                <h2 className="contacttxt">Contact Us</h2>
                <form className="form">
                  <div>
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input1"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="input2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input3"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="input4">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="input5"
                      rows="4"
                      placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="input6">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

      </div>

      <footer className="footer">
        <p>&copy; 2023 Pharmacy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
