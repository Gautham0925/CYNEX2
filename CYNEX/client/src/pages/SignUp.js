import React, { useState } from 'react';
import axios from 'axios';
import './css/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(1); // Default role set to 'student'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend to create a new user
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
        role_id: role, // Send role_id instead of role
      });

      alert('User registered successfully');
      // Redirect to login page or show success message
    } catch (error) {
      console.error('Error registering user:', error.response || error);
      alert('There was an error registering the user: ' + (error.response?.data || error.message || 'Unknown error'));
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name  </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email  </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password  </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Role  </label>
          <select value={role} onChange={(e) => setRole(Number(e.target.value))}>
            <option value={1}>Student</option>
            <option value={2}>Faculty</option>
            <option value={3}>Head of Department (HoD)</option>
            <option value={4}>Admin</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
