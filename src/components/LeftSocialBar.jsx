import React from "react";
import "../styles/SocialBar.css"; 
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const LeftSocialBar = () => {
  return (
    <div className="left-social-bar">
      <div className="line" />
      <div className="icons">
        <a href="https://github.com/Abilash-26" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/abilash-r-828020105" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        {/* <a href="https://figma.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/figma-icon.svg" alt="Figma" />
        </a> */}
      </div>
    </div>
  );
};

export default LeftSocialBar;
