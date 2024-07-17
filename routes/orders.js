// routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth'); // Correct import path for auth
const { check, validationResult } = require('express-validator');

// Place an order
router.post(
  '/',
  [auth, check('items', 'Items are required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { items } = req.body;

    try {
      const newOrder = new Order({
        user: req.user.id,
        items
      });

      const order = await newOrder.save();

      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Get orders for a user
router.get('/user-orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all orders (Admin)
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find().populate('user', ['email']);
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
