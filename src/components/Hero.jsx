import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "../styles/Hero.css";
// import heroImage from "../assets/hero.png"; // or your actual image

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="main-text">
                <h1>Hi, I’m Abilash. I'm a <span className="hero-soft">Software Engineer.</span></h1>
                <p>Front-End focused developer crafting clean and modern UIs using React, JavaScript, and Python.</p>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-30}>
                    <button className="cta-btn" >Contact Me</button>
                </ScrollLink>
                <a href="/Abi Resume.pdf" download className="cta-btn secondary">
                    Download CV
                </a>
            </div>

            <div className="image-frame">
                {/* <img src={heroImage} alt="Hero" /> */}
            </div>

            <div className="status">
                <div className="dot"></div>
                <div className="text">Available for freelance & full-time</div>
            </div>
        </section>
    );
};

export default Hero;
