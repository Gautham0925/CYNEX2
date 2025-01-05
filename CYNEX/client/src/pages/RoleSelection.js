import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    // Save the role to the database or local storage
    localStorage.setItem('userRole', role); // Example storage
    console.log('Selected Role:', role);

    // Redirect based on role
    if (role === 'student') {
      navigate('/home');
    } else if (role === 'faculty') {
      navigate('/faculty-dashboard'); // Replace with the faculty-specific page
    }
  };

  return (
    <div className="role-selection-container">
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelection('student')} className="role-button">
        Student
      </button>
      <button onClick={() => handleRoleSelection('faculty')} className="role-button">
        Faculty
      </button>
    </div>
  );
};

export default RoleSelection;
