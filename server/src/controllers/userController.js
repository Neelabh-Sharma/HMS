const User = require('../models/userModel');
const bcrypt = require('bcrypt');


const getUsers = (req, res) => {
     res.json({ message: 'Working on API 1.0' });
  };
  
  const createUser = async (req, res, next) => {
    try {
      const { name, email, phoneNo, password, bloodGroup, gender, address, dateOfBirth } = req.body;
  
      if (!name || !email || !phoneNo || !password || !bloodGroup || !gender || !address || !dateOfBirth) {
        throw { status: 400, message: "All fields are required" };
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        name,
        email,
        phoneNo,
        password: hashedPassword,
        bloodGroup,
        gender,
        address,
        dateOfBirth,
      });
  
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      if (error.code === 11000) {
        error.status = 400;
        error.message = `Duplicate field value: ${Object.keys(error.keyValue).join(', ')} already exists`;
      }
      next(error);
    }
  };
  

  const getUserByEmailAndPassword = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      // Validate input
      if (!email || !password) {
        throw { status: 400, message: 'Email and password are required' };
      }
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw { status: 404, message: 'User not found' };
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw { status: 401, message: 'Invalid credentials' };
      }
  
      // Return user details (excluding password)
      const { password: _, ...userWithoutPassword } = user.toObject();
      res.status(200).json({ success: true, user: userWithoutPassword });
    } catch (error) {
      next(error);
    }
  };
  const getUserByEmail = async (req, res) => {
    try {
      const { email } = req.params; // Extract email from the route parameter
  
      // Validate the input
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
  
      // Fetch the user by email
      const user = await User.findOne({ email });
  
      // If user not found, return a 404 error
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user data
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error.message);
  
      // Return a 500 error for unexpected issues
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const updateUserByEmail = async (req, res, next) => {
    try {
      const { email } = req.params; // User's email from the route parameter
      const updateData = req.body; // Fields to update
  
      // Validate required parameters
      if (!email) {
        throw { status: 400, message: 'Email is required' };
      }
  
      // Find and update the user by email
      const updatedUser = await User.findOneAndUpdate({ email }, updateData, {
        new: true, // Return the updated document
        runValidators: true, // Ensure schema validations are applied
      });
  
      if (!updatedUser) {
        throw { status: 404, message: 'User not found' };
      }
  
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        user: updatedUser,
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        error.status = 400;
        error.message = `Validation error: ${Object.values(error.errors)
          .map((e) => e.message)
          .join(', ')}`;
      }
      next(error);
    }
  };
  
  module.exports = { getUsers, createUser ,getUserByEmailAndPassword ,updateUserByEmail ,getUserByEmail };
  