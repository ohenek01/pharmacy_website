import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminOrders.css';
import { useNavigate } from 'react-router-dom';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      try {
        // Verify if the user is an admin
        const adminRes = await axios.get('http://localhost:3000/api/auth/isAdmin', config);
        if (!adminRes.data.isAdmin) {
          return;
        }
        setIsAdmin(true);

        // Fetch orders if the user is an admin
        const res = await axios.get('http://localhost:3000/api/orders', config);
        setOrders(res.data);
      } catch (err) {
        console.error('Error fetching orders', err);
      }
    };

    fetchOrders();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  if (!isAdmin) {
    return <div>Access denied</div>;
  }

  return (
    <div className="admin-orders-container">
      <h1>Order Confirmation</h1>
      {orders.length > 0 ? (
        orders.map(order => (
          <div key={order._id} className="container-order">
            <main className="card">
              <section className="sectcard">
                <h2 className="pendingbtn">Pending Orders</h2>
                <div className="space">
                  <div className="input-texts">
                    <div>
                      <p className="order-id">Order #{order._id}</p>
                      <p className="customer">Customer: {order.user.email}</p>
                      <p className="total">Total: ${order.total.toFixed(2)}</p>
                    </div>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.product} - Quantity: {item.quantity}
                        </li>
                      ))}
                    </ul>
                    <div className="confirm-container">
                      <button className="confirm-btn">Confirm</button>
                      <button className="cancelbtn">Cancel</button>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
      <button className="logoutbtn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminOrders;
