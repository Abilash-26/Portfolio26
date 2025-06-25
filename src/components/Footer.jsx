import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import githubIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedin.png";
import instaIcon from "../assets/insta.png";
// import figmaIcon from "../assets/figma.svg";
// import discordIcon from "../assets/discord.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-left">
            <div className="logo-section">
              <img src={logo} alt="Logo" />
              <span>Abi</span>
            </div>
            <div className="email">abilashabi.ab@gmail.com</div>
            <div className="desc">Web designer and front-end developer</div>
          </div>

          <div className="footer-right">
            <div className="title">Social Media</div>
            <div className="icons">
              <a href="https://github.com/Abilash-26" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
               <a href="https://www.linkedin.com/in/abilash-r-828020105" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="Figma" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Discord" />
              </a> 
            </div>
          </div>
        </div>

        <div className="footer-bottom">© Copyright 2022. Made by Abi</div>
      </div>
    </footer>
  );
};

export default Footer;
