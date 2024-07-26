const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path as necessary
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    seedProducts();
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB', err);
  });

const products = [
  {
    id: 1,
    name: 'Amoxicillin',
    description: 'This is a great product.',
    price: 19.99,
    image: '/images/ANTIBIOTICS/amoxcillin.jpg',
  },
  {
    id: 2,
    name: 'Ciprofloxacin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Ciprofloxacin-500.png',
  },
  {
    id: 3,
    name: 'Azithromycin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/azithromycin.jpg',
  },
  {
    id: 4,
    name: 'Doxycycline',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/doxycycline.jpg',
  },
  {
    id: 5,
    name: 'Cephalexin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Cephalexin.jpg',
  },
  {
    id: 6,
    name: 'Clindaxycin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Clindaxycin.jpg',
  },
  {
    id: 7,
    name: 'Metronidazole',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Metronidazole.jpg',
  },
  {
    id: 8,
    name: 'Lisonopril',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Lisonopril.jpg',
  },
  {
    id: 9,
    name: 'Enalapril',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Enalapril.png',
  },
  {
    id: 10,
    name: 'Lolsartan',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/losartan.jpg',
  },
  {
    id: 11,
    name: 'Atenolol',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Atenolol.jpg',
  },
  {
    id: 12,
    name: 'Valsartan',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Valsartan.png',
  },
  {
    id: 13,
    name: 'Metoprolol',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Metoprolol.jpg',
  },
  {
    id: 14,
    name: 'Furosemide',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Furosemide,.jpg',
  },
  {
    id: 15,
    name: 'Diltiazem',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Diltiazem.jpg',
  },
  {
    id: 16,
    name: 'Amlodipine',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Amlodipine.png',
  },
  {
    id: 17,
    name: 'Humulin R',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Humulin R.jpg',
  },
  {
    id: 18,
    name: 'Humulin N',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Humulin N.jpg',
  },
  {
    id: 19,
    name: 'Novolin N',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Novolin N.jpg',
  },
  {
    id: 20,
    name: 'Novolin R',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Novolin R.png',
  },
  {
    id: 21,
    name: 'Lantus',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Lantus-solostar.png',
  },
  {
    id: 22,
    name: 'levemir',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Levemir.png',
  },
];

async function seedProducts() {
  try {
    await Product.insertMany(products);
    console.log('Data inserted');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting data', err);
    mongoose.connection.close();
  }
}
