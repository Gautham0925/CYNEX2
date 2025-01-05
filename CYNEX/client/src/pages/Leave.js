import React, { useState } from 'react';
import './css/Leave.css'; // Your custom styles

const Leave = () => {
  const [formData, setFormData] = useState({
    name: '',
    usn: '',
    reason: '',
    startDate: '',
    endDate: '',
  });

  const [message, setMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit the form and send data to Google Sheets
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.usn && formData.reason && formData.startDate && formData.endDate) {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzy3cJUYppVMLo7MCpTDtpd7QykOvdjeFoO3RaBspab/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.result === 'Success') {
          setMessage('Leave application submitted successfully!');
          setFormData({ name: '', usn: '', reason: '', startDate: '', endDate: '' });
        } else {
          setMessage('Failed to submit the application. Please try again.');
        }
      } catch (error) {
        setMessage('Error submitting the form. Please try again.');
      }
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="leave-form-container">
      <h1>Leave Application</h1>
      <form onSubmit={handleSubmit} className="leave-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>USN:</label>
          <input
            type="text"
            name="usn"
            value={formData.usn}
            onChange={handleChange}
            required
            placeholder="Enter your USN"
          />
        </div>
        <div className="form-group">
          <label>Leave From:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Leave To:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            placeholder="Enter reason for leave"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Leave;
