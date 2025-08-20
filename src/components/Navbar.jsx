import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="navbar">

            <div className="nav-logo">
                <ScrollLink to="home" smooth={true} duration={500}>
                   
                </ScrollLink>
            </div>



            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                {/* Home */}
                {location.pathname === "/" ? (
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-30}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="hash">/</span>Home
                    </ScrollLink>
                ) : (
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <span className="hash">/</span>Home
                    </Link>
                )}

                {/* Projects → Always goes to /projects */}
                <Link to="/projects" onClick={() => setMenuOpen(false)}>
                    <span className="hash">/</span>Projects
                </Link>

                {/* Skills */}
                {location.pathname === "/" && (
                    <ScrollLink
                        to="skills"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="hash">/</span>Skills
                    </ScrollLink>
                )}

                {/* About Me */}
                {location.pathname === "/" && (
                    <ScrollLink
                        to="aboutme"
                        smooth={true}
                        duration={500}
                        offset={-30}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="hash">/</span>About Me
                    </ScrollLink>
                )}

                {/* Contact */}
                {location.pathname === "/" && (
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="hash">/</span>Contact
                    </ScrollLink>
                )}
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
