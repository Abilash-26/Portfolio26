import React from 'react';
import '../styles/Hero.css';
// import heroImage from '../assets/image-removebg-preview.png'; // use your actual path

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Elias</div>
        <nav className="nav-links">
          <span><span className="hashtag">#</span>home</span>
          <span><span className="hashtag">#</span>about</span>
          <span><span className="hashtag">#</span>work</span>
          <span><span className="hashtag">#</span>contact</span>
        </nav>
        <div className="lang-switcher">
          <span>EN</span>
          <div className="dropdown-icon">
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
        </div>
      </header>

      {/* Social Media */}
      <div className="social-icons">
        <div className="icon github"></div>
        <div className="icon dribble"></div>
        <div className="icon figma"></div>
      </div>

      {/* Image & Quote */}
      <div className="hero-content">
        {/* <img src={heroImage} alt="hero" className="hero-img" /> */}
        <div className="status-box">
          <div className="dot"></div>
          <span>Currently working on Portfolio</span>
        </div>
        <div className="quote-box">
          <div className="quote-mark">“</div>
          <p>With great power comes great electricity bill</p>
          <div className="quote-author">- Dr. Who</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
