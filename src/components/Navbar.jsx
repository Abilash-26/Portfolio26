import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Navbar.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
             <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-30}
                onClick={() => setMenuOpen(false)}
                className="nav-logo"
            >
                {/* If you want to show the image: */}
                
            </ScrollLink>
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <ScrollLink to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)} offset={-30}><span className="hash">#</span>Home</ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)} offset={-50}><span className="hash">#</span>projects</ScrollLink>
                <ScrollLink to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)} offset={-50}><span className="hash">#</span>skills</ScrollLink>
                <ScrollLink to="aboutme" smooth={true} duration={500} onClick={() => setMenuOpen(false)} offset={-30}><span className="hash">#</span>about me</ScrollLink>
              
                <ScrollLink to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)} offset={-50}><span className="hash">#</span>contact</ScrollLink>
            </nav>


            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Navbar;
