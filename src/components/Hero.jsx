import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "../styles/Hero.css";
import heroImage from "../assets/hero.png"; // or your actual image

const Hero = () => {
    
    const handleDownload = () => {
        // Trigger the backend to send the resume and log the event
        window.open('http://localhost:5000/api/analytics/download-resume', '_blank');
    };

    return (
       <section className="hero" id="home">
  <div className="main-text">
    <h1>Hi, I’m Abilash. I'm a <span className="hero-soft">Software Engineer.</span></h1>
    <p>Front-End focused developer crafting clean and modern UIs using React, JavaScript, and Python.</p>
    <ScrollLink to="contact" smooth={true} duration={500} offset={-30}>
      <button className="cta-btn">Contact Me</button>
    </ScrollLink>
    <button onClick={handleDownload} className="cta-btn secondary">
      Download CV
    </button>
  </div>

  <div className="image-frame">
    <img src={heroImage} alt="Hero" /> 
    <div className="status">
      <div className="dot"></div>
      <div className="text">Available for  Full-time & Freelance </div>
    </div>
  </div>
</section>

    );
};

export default Hero;
