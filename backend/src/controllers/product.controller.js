const Product = require("../models/Product");

// Add a product for logged-in user
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Use logged-in user ID from auth middleware
    const product = await Product.create({ 
      name, 
      description, 
      price, 
      UserId: req.user.id 
    });

    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get products of logged-in user
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { UserId: req.user.id } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
