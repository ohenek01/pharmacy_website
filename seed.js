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
    name: 'Amoxicillin',
    description: 'This is a great product.',
    price: 19.99,
    image: '/images/ANTIBIOTICS/amoxcillin.jpg',
  },
  {
    name: 'Ciprofloxacin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Ciprofloxacin-500.png',
  },
  {
    name: 'Azithromycin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/azithromycin.jpg',
  },
  {
    name: 'Doxycycline',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/doxycycline.jpg',
  },
  {
    name: 'Cephalexin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Cephalexin.jpg',
  },
  {
    name: 'Clindaxycin',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Clindaxycin.jpg',
  },
  {
    name: 'Metronidazole',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Metronidazole.jpg',
  },
  {
    name: 'Lisonopril',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Lisonopril.jpg',
  },
  {
    name: 'Enalapril',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Enalapril.png',
  },
  {

    name: 'Lolsartan',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/losartan.jpg',
  },
  {

    name: 'Atenolol',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Atenolol.jpg',
  },
  {

    name: 'Valsartan',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Valsartan.png',
  },
  {

    name: 'Metoprolol',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Metoprolol.jpg',
  },
  {

    name: 'Furosemide',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Furosemide,.jpg',
  },
  {

    name: 'Diltiazem',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Diltiazem.jpg',
  },
  {

    name: 'Amlodipine',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/Antihypertensives/Amlodipine.png',
  },
  {

    name: 'Humulin R',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Humulin R.jpg',
  },
  {

    name: 'Humulin N',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Humulin N.jpg',
  },
  {

    name: 'Novolin N',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Novolin N.jpg',
  },
  {

    name: 'Novolin R',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Novolin R.png',
  },
  {

    name: 'Lantus',
    description: 'This is another great product.',
    price: 29.99,
    image: '/images/INSULIN/Lantus-solostar.png',
  },
  {

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
