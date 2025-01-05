const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

// Create a new router instance
const router = express.Router();

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Add your password here
  database: 'cynextrail',
});

// Login route (user login)
router.post('/', (req, res) => {
  const { email, password } = req.body;  // Get data from request body

  // Validate input
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }

  // Check if the email exists in the database
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Error checking email in database:', err);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(400).send('Invalid email or password');
    }

    const user = results[0];  // Assuming there's only one user with this email

    // Compare the provided password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).send('Server error');
      }

      if (!isMatch) {
        return res.status(400).send('Invalid email or password');
      }

      // Generate a JWT token (set an expiration time for the token)
      const token = jwt.sign({ id: user.id, name: user.name, role: user.role }, 'your_jwt_secret', {
        expiresIn: '1h',  // Token will expire in 1 hour
      });

      // Send the token as a response
      res.status(200).json({ message: 'Login successful', token });
    });
  });
});

module.exports = router;
