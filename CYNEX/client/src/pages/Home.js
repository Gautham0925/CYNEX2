import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Innovation</h1>
          <p>Transforming the future with cutting-edge technology and expertise.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At our core, we are pioneers of innovation, creating impactful solutions that redefine industries and connect communities. Join us on a journey of growth and excellence.
            </p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/600x400" alt="About Us" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <i className="feature-icon">💡</i>
            <h3>Innovative Solutions</h3>
            <p>Bringing creative ideas to life.</p>
          </div>
          <div className="feature-item">
            <i className="feature-icon">⚙️</i>
            <h3>Robust Systems</h3>
            <p>Ensuring seamless and reliable operations.</p>
          </div>
          <div className="feature-item">
            <i className="feature-icon">🌍</i>
            <h3>Global Reach</h3>
            <p>Connecting people and businesses worldwide.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Connect With Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>We're here to help you succeed. Get in touch today:</p>
            <p><strong>Email:</strong> contact@innovationhub.com</p>
            <p><strong>Phone:</strong> +1 800-123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
