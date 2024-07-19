import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import AdminOrders from './components/AdminOrders';
import Cart from './components/Cart';
import { CartProvider } from './components/context/cartContext';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/admin-orders' element={<AdminOrders/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
