import React from 'react';
import { useCart } from './context/cartContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'
import './ProductList.css'

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const getTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return navigate('/login');
    }

    try {
      await axios.post('http://localhost:5000/api/orders', {
        products: cart.map(item => ({ product: item._id, quantity: item.quantity, image: item.image })),
        totalAmount: getTotalAmount()
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      clearCart();
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
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
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            {item.title} - {item.quantity} x ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${getTotalAmount()}</h2>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
