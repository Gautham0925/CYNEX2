const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const cors = require('cors');
const signupRoute = require('./routes/signup');  // Import the signup route
const loginRoute = require('./routes/login');  // Import the login route

dotenv.config();

// Create an express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests from the frontend
app.use(express.json());  // Parse JSON bodies

// Middleware for signup route
app.use('/signup', signupRoute);  // Use the signup route for '/signup' endpoint
app.use('/login', loginRoute); // Use the login route for '/login' endpoint

// Server listening on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
