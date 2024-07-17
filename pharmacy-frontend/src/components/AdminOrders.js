import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      try {
        const res = await axios.get('/api/orders', config);
        setOrders(res.data);
        setIsAdmin(res.data.length > 0 && res.data[0].user.role === 'admin')
      } catch (err) {
        console.error('Error fetching orders', err);
      }
    };

    fetchOrders();
  }, []);

  if (!isAdmin) {
    return <div>Access denied</div>;
  }

  return (
    <div className="admin-orders-container">
      <h1>All Orders</h1>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <h2>Order by: {order.user.email}</h2>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.product} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
