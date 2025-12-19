const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Helper function to generate tokens (keeps code DRY)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // The fix you identified
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash the password
    const hashed = await bcrypt.hash(password, 10);
    
    // Create the user
    const user = await User.create({ name, email, password: hashed });
    
    // Generate token and respond
    const token = generateToken(user.id);
    
    res.status(201).json({ 
      token, 
      user: { id: user.id, name, email } 
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // 1. Find the user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 2. Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // 3. Generate token
    const token = generateToken(user.id);
    
    res.json({ 
      token, 
      user: { id: user.id, name: user.name, email: user.email } 
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};