import React, { useEffect } from 'react';
import { useCart } from './context/cartContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';
import './Productdetails.css';
import './Cart.css';

const Cart = () => {
  const { cart, setCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage when the component mounts
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    // Save cart to localStorage whenever the cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return navigate('/login');
    }

    try {
      await axios.post(
        'http://localhost:3000/api/orders', // Ensure this URL is correct
        {
          items: cart.map(item => ({
            product: item._id,
            quantity: item.quantity,
            image: item.image
          })),
          totalAmount: getTotalAmount()
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      clearCart();
      alert('Order placed successfully!');
      navigate('/checkout');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div>
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
      <div className="Container">
        <h1 className="Cart">Cart</h1>
        <ul>
          {cart.map(item => (
            <li key={item._id}>
              {item.title} - {item.quantity} x ${item.price}
              <button onClick={() => removeFromCart(item._id)} className="rvmbtn">Remove</button>
              <img src={`http://localhost:3000/images/${item.image}`} alt={item.name} className="product-photos" />
            </li>
          ))}
        </ul>
        <h2>Total: ${getTotalAmount()}</h2>
        <button onClick={handleCheckout} className="checkoutbtn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
