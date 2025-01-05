import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    about: false,
    events: false,
    academics: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (key) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li className="dropdown-container">
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        </li>
        <li className="dropdown-container">
          <Link to="/events" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          <ul className="dropdown">
            <li><Link to="/events/quiz" onClick={() => setMobileMenuOpen(false)}>Quiz</Link></li>
            <li><Link to="/events/ctf" onClick={() => setMobileMenuOpen(false)}>CTF</Link></li>
            <li><Link to="/events/other" onClick={() => setMobileMenuOpen(false)}>Others</Link></li>
          </ul>
        </li>
        <li className="dropdown-container">
          <Link to="/home" onClick={() => setMobileMenuOpen(false)}>Academics</Link>
          <ul className="dropdown">
            <li><Link to="/academics/attendance" onClick={() => setMobileMenuOpen(false)}>Attendance</Link></li>
            <li><Link to="/academics/leave" onClick={() => setMobileMenuOpen(false)}>Leave Application</Link></li>
            <li><Link to="/academics/others" onClick={() => setMobileMenuOpen(false)}>Others</Link></li>
          </ul>
        </li>
        <li><Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link></li>
        <li><Link to="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;