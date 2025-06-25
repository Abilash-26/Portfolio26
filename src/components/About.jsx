import React from "react";
import "../styles/About.css";
// import profileImg from "../assets/profile.png"; // Replace with your image path

const AboutMe = () => {
  return (
    <section className="about-section" id="aboutme">
        
      <div className="about-header">
        <h2><span className="hash">#</span>about-me</h2>
        <div className="line"></div>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            Hello, I’m Abi! I’m a self-taught front-end developer. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            <br /><br />
            Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
          </p>
          <a href="#contact" className="about-btn">Read More &lt;~&gt;</a>
        </div>

        <div className="about-image-wrapper">
          {/* <img src={profileImg} alt="Profile" className="about-image" /> */}
          <div className="pixel-deco"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
