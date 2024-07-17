const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as necessary

const mongoURI = process.env.MONGO_URI; 
mongoose.connect(mongoURI, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true 
});


const products = [
  {
    name: "Product1",
    description: "This is a great product.",
    price: 19.99,
    image: "path/to/image1.jpg",
  },
  {
    name: "Product2",
    description: "This is another great product.",
    price: 29.99,
    image: "path/to/image2.jpg",
  },
];

Product.insertMany(products)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
