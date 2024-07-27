import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from './context/cartContext';
import './CheckoutScreen.css'; // Importing the CSS file for styling

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
  if (cart.length === 0) return <div className="empty-cart">Your cart is empty.</div>;

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
      <div className="checkout">
        <h1 className="checkout-title">Checkout</h1>
        <ul className="checkout-items">
          {cart.map((item, index) => (
            <li key={index} className="checkout-item">
              <img src={`http://localhost:3000/images/${item.image}`} alt={item.title} className="checkout-item-image" />
              <button onClick={() => removeFromCart(item._id)} className='rvmbtn1'>Remove</button>
              <div className="checkout-item-details">
                <h2 className="checkout-item-title">{item.title}</h2>
                <p className="checkout-item-price">${item.price}</p>
                <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkout-summary">
          <h2 className="checkout-total">Total: ${getTotal()}</h2>
          <button className="checkout-btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
