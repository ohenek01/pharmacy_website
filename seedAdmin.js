const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const seedAdmin = async () => {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const email = 'admin@pharmacy.com';
  const password = 'admin123';
  const role = 'admin';

  try {
    let user = await User.findOne({ email });

    if (user) {
      console.log('Admin user already exists');
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        email,
        password: hashedPassword,
        role,
      });

      await user.save();
      console.log('Admin user created');
    }
  } catch (err) {
    console.error(err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();
