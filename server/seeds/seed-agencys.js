require('dotenv').config();
const mongoose = require('mongoose');
const UserModel = require('../models/User'); // Update the path to your model
const bcrypt = require('bcrypt');
const connectDB = require('../config/db');

const agencyUsers = [
  {
    name: 'Ana Medel',
    email: 'ana@woundcareconnects.com',
    password: 'admin', // This will be hashed
    role: 'agency',
  },
  {
    name: 'Ron',
    email: 'ron@woundcareconnects.com',
    password: 'admin', // This will be hashed
    role: 'agency',
  },
  // Add more agency users as needed
];

const seedAgencys = async () => {
  try {
      // Connect to MongoDB
      await connectDB();

      for (const user of agencyUsers) {
          // Check if the user already exists
          const existingUser = await UserModel.findOne({ email: user.email });
          if (existingUser) {
              console.log(`User with email ${user.email} already exists.`);
              continue;
          }

          // Hash the password
          const hashedPassword = await bcrypt.hash(user.password, 10);

          // Create a new user
          const newUser = new UserModel({
              ...user,
              password: hashedPassword,
          });

          // Save the user to the database
          await newUser.save();
          console.log(`User ${user.email} created.`);
      }

      // Disconnect from MongoDB
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
  } catch (error) {
      console.error('Error during seeding:', error);
      process.exit(1);
  }
};

// Run the seeder script
seedAgencys();
