const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');

// Create a new router instance
const router = express.Router();

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Add your password here
  database: 'cynextrail',
});

// SignUp route (registering a new user)
router.post('/', (req, res) => {
  const { name, email, password, role_id } = req.body;  // Get data from request body

  // Validate input
  if (!name || !email || !password || !role_id) {
    return res.status(400).send('All fields are required');
  }

  // Check if the email already exists
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Error checking email in database:', err);
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
      return res.status(400).send('Email is already registered');
    }

    // Hash the password (to avoid storing plain text)
    const hashedPassword = bcrypt.hashSync(password, 10); // Using bcrypt to hash password

    // Insert user data into the database
    const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, hashedPassword, role_id], (err, results) => {
      if (err) {
        console.error('Error inserting user into database:', err);
        return res.status(500).send('Server error');
      }
      res.status(201).send('User registered successfully');
    });
  });
});

module.exports = router;
