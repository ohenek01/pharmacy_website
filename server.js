const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Pharmacy API');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Add this line below other middleware
app.use('/api/products', require('./routes/products'));
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

