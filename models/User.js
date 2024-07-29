const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true // Ensure this is set to true if username is necessary
  },
  contact: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: 'user'
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

module.exports = mongoose.model('User', UserSchema);
