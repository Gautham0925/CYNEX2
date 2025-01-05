import React from 'react';
import './css/About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-description">
        Welcome to our website! This is the about page where we tell you all about our department academics and event details.
      </p>
      <h2 className="about-subheading">Our Mission</h2>
      <p className="about-text">
        Our mission is to create innovative solutions that enhance people's lives and promote sustainability.
      </p>
      <h2 className="about-subheading">Our Vision</h2>
      <p className="about-text">
        We envision a future where technology is seamlessly integrated into every aspect of life, creating better experiences for everyone.
      </p>
      <h2 className="about-subheading">Our Values</h2>
      <ul className="about-values">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Sustainability</li>
      </ul>
    </div>
  );
};

export default About;
