const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    console.log('No token provided'); // Debug log
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token'); // Debug log

    const user = await User.findById(decoded.user.id).select('-password');
    console.log('User found'); // Debug log

    if (!user) {
      console.log('User not found'); // Debug log
      return res.status(401).json({ msg: 'User not found' });
    }

    req.user = user;
    console.log('Authenticated user:', req.user); // Debug log
    next();
  } catch (err) {
    console.error('Token validation error:', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
