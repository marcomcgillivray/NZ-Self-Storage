const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel'); // Your user model
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

exports.signUpUser = async (req, res) => {
    const { username, password, firstName, lastName, emailAddress, phone } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ emailAddress });
  
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Hash the password before saving it
  
      // Create a new user
      const newUser = new User({
        username,
        password,
        firstName,
        lastName,
        emailAddress,
        phone,
        // Add other user properties if needed
      });
  
      // Save the user to the database
      await newUser.save();
  
      // Create a JWT token for the newly registered user
      const token = jwt.sign(
        {
          userId: newUser._id,
          username: newUser.username,
          // Add other user information if needed
        },
        process.env.SECRET_KEY, // Replace with your secret key (should be stored securely)
        { expiresIn: '1h' } // Token expiration time
      );
  
      // Send the token back to the client
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  


// Login endpoint
exports.loginUser = async (req, res, next) => {
    const { emailAddress, password } = req.body;
  
    if (!emailAddress || !password) {
      next(console.log('Email Does not exist'));
    };
  
    try {
      const user = await User.findOne({ emailAddress });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);

  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

  
      const token = jwt.sign(
        {
          userId: user._id,
          username: user.emailAddress,
        },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
      );

      const userId = user._id;
  
      // Send both the token and userId back to the client
      
      res.status(200).json({
         token,
         userId
        });
      
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


  