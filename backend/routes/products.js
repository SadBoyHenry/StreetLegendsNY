const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Your Product model

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
