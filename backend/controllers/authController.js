const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ user: newUser, token });
    } catch (error) {
      console.error("Error during registration:", error); // This will log the error in the console
      res.status(500).json({ message: 'Server error', error: error.message }); // Pass the error message to the response
    }
  };
  
  exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ user, token });
    } catch (error) {
      console.error("Error during login:", error); // This will log the error in the console
      res.status(500).json({ message: 'Server error', error: error.message }); // Pass the error message to the response
    }
  };
  