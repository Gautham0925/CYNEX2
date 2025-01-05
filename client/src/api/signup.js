const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database'); // Replace with your database connection
const secretKey = 'your_secret_key'; // Replace with an environment variable

router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // Check if the user already exists
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [
      name,
      email,
      hashedPassword,
      role,
    ]);

    // Generate JWT token
    const token = jwt.sign({ email, role }, secretKey, { expiresIn: '1h' });

    res.json({ token, role });
  } catch (err) {
    res.status(500).json({ message: 'Error signing up user' });
  }
});

module.exports = router;
