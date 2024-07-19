const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as necessary

const mongoURI = process.env.MONGO_URI; 
mongoose.connect(mongoURI, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true 
});


const products = [
  {
    name: 'Amoxicillin',
    description: 'This is a great product.',
    price: 19.99,
    image: './DRUGS/ANTIBIOTICS/amoxcillin.jpg',
  },
  {
    name: 'Ciprofloxacin',
    description: 'This is another great product.',
    price: 29.99,
    image: './DRUGS/ANTIBIOTICS/Ciprofloxacin-500.png',
  },
  {
    name: 'Azithromycin',
    description: 'This is another great product.',
    price: 29.99,
    image: './DRUGS/ANTIBIOTICS/azithromycin',
  },
  {
    name: 'Doxycycline',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Cephalexin',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Clindaxycin',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Metronidazole',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Lisonopril',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Enalapril',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Lolsartan',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Atenolol',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Valsartan',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Metoprolol',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Furosemide',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Diltiazem',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Amlodipine',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Humulin R',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Humulin N',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Novolin N',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Novolin R',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'Lantus',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
  },
  {
    name: 'levemir',
    description: 'This is another great product.',
    price: 29.99,
    image: 'uploads/product2.jpg',
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
