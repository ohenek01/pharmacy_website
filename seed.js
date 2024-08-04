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
    description: 'Amoxicillin is a penicillin antibiotic. It is used to treat bacterial infections, such as chest infections (including pneumonia) and dental abscesses. ',
    price: 19.99,
    image: '/images/ANTIBIOTICS/amoxcillin.jpg',
  },
  {
    name: 'Ciprofloxacin',
    description: "Ciprofloxacin is a broad-spectrum antibiotic which means that it's used to treat a number of bacterial infections, such as: uncomplicated urinary tract infections (UTIs) where other antibiotics are not suitable and complicated UTIs..",
    price: 29.99,
    image: '/images/ANTIBIOTICS/Ciprofloxacin-500.png',
  },
  {
    name: 'Azithromycin',
    description: 'Azithromycin is  used to treat infections including: chest infections such as pneumonia. ear, nose and throat and nose infections such as sinus infection (sinusitis)',
    price: 29.99,
    image: '/images/ANTIBIOTICS/azithromycin.jpg',
  },
  {
    name: 'Doxycycline',
    description: 'Doxycycline is in a class of medications called tetracycline antibiotics. It works to treat infections by preventing the growth and spread of bacteria.',
    price: 29.99,
    image: '/images/ANTIBIOTICS/doxycycline.jpg',
  },
  {
    name: 'Cephalexin',
    description: 'Cephalexin is used to treat bacterial infections in many different parts of the body',
    price: 29.99,
    image: '/images/ANTIBIOTICS/Cephalexin.jpg',
  },
  {
    name: 'Clindaxycin',
    description: 'Clindamycin is used to treat certain types of bacterial infections, including infections of the lungs, skin, blood, female reproductive organs, and internal organs',
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
    description: 'Lowering blood pressure can reduce the risk of strokes and heart attacks. ',
    price: 29.99,
    image: '/images/Antihypertensives/Lisonopril.jpg',
  },
  {
    name: 'Enalapril',
    description: 'Enalapril is an angiotensin converting enzyme (ACE) inhibitor. It works by blocking a substance in the body that causes the blood vessels to tighten.',
    price: 29.99,
    image: '/images/Antihypertensives/Enalapril.png',
  },
  {
    name: 'Lolsartan',
    description: "Losartan is a medicine called angiotensin receptor blocker (ARB). It's widely used to treat high blood pressure (hypertension) and heart failure.",
    price: 29.99,
    image: '/images/INSULIN/losartan.jpg',
  },
  {
    name: 'Atenolol',
    description: 'Atenolol is a beta blocker medicine, used to treat high blood pressure (hypertension) and irregular heartbeats (arrhythmia).',
    price: 29.99,
    image: '/images/Antihypertensives/Atenolol.jpg',
  },
  {
    name: 'Valsartan',
    description: 'Valsartan is an angiotensin receptor blocker (ARB) medicine widely used to treat high blood pressure (hypertension) and heart failure.',
    price: 29.99,
    image: '/images/Antihypertensives/Valsartan.png',
  },
  {
    name: 'Metoprolol',
    description: 'Metoprolol is a type of medicine called a beta blocker. Like other beta blockers, metoprolol works by changing the way your body responds to some nerve impulses, especially in the heart.',
    price: 29.99,
    image: '/images/Antihypertensives/Metoprolol.jpg',
  },
  {
    name: 'Furosemide',
    description: 'Furosemide is given to help treat fluid retention (edema) and swelling that is caused by congestive heart failure, liver disease, kidney disease, or other medical conditions',
    price: 29.99,
    image: '/images/Antihypertensives/Furosemide,.jpg',
  },
  {
    name: 'Diltiazem',
    description: 'Diltiazem treats high blood pressure and prevents chest pain (angina).',
    price: 29.99,
    image: '/images/Antihypertensives/Diltiazem.jpg',
  },
  {
    name: 'Amlodipine',
    description: 'Amlodipine is a calcium channel blocker used to treat high blood pressure (hypertension)',
    price: 29.99,
    image: '/images/Antihypertensives/Amlodipine.png',
  },
  {
    name: 'Humulin R',
    description: 'Humulin R (insulin regular) is a type of insulin used to control blood sugar for many hours during the day, but it might take time to find the right dose that works for you. Some forms of this medication are available over the counter without a prescription.',
    price: 29.99,
    image: '/images/INSULIN/Humulin R.jpg',
  },
  {
    name: 'Humulin N',
    description: "Humulin N is used in adults and children with type 1 and type 2 diabetes. The drug helps manage blood sugar levels. Diabetes is a condition that happens when your blood sugar level is too high. Normally, your pancreas releases a hormone called insulin to help your body's cells absorb blood sugar.",
    price: 29.99,
    image: '/images/INSULIN/Humulin N.jpg',
  },
  {
    name: 'Novolin N',
    description: "Novolin N releases a hormone called insulin into the body to lower blood sugar levels in the blood. It's an intermediate-acting insulin that works throughout the day to help lower your blood sugar levels.",
    price: 29.99,
    image: '/images/INSULIN/Novolin N.jpg',
  },
  {
    name: 'Novolin R',
    description: "Novolin R releases a hormone called insulin into the body to lower blood sugar levels in the blood. It's a short-acting insulin that starts to work in about 30 minutes and lasts for several hours to control your blood sugar levels when you eat meals.",
    price: 29.99,
    image: '/images/INSULIN/Novolin R.png',
  },
  {
    name: 'Lantus',
    description: 'Prescription LANTUS is a long-acting man-made-insulin used to control high blood sugar in adults and children with diabetes mellitus.',
    price: 29.99,
    image: '/images/INSULIN/Lantus-solostar.png',
  },
  {
    name: 'levemir',
    description: 'Levemir s a long-acting insulin that can be taken once or twice daily to control high blood sugar in adults and children with diabetes.',
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