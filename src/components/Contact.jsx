import React, { useState } from "react";
import "../styles/Contact.css";
// import discordIcon from "../assets/discord-icon.svg";
import emailIcon from "../assets/email1.png";
import phoneIcon from "../assets/phone.png";

const Contact = () => {
  const [tooltip, setTooltip] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setTooltip(`${type} copied!`);
    setTimeout(() => setTooltip(""), 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>
          <span className="hash">/</span>contact
        </h2>
        <div className="line"></div>
      </div>

      <p className="contact-message">
        I’m interested in freelance opportunities. However, if you have another
        request or question, don’t hesitate to contact me.
      </p>

      <div className="contact-box">
        <div className="contact-box-title">Message me here</div>
        <div className="contact-links">
          <div className="contact-link"></div>

          <div
            className="contact-link"
            onClick={() =>
              handleCopy("abilashabi.ab@gmail.com", "Email")
            }
            title="Click to copy email"
          >
            <img src={emailIcon} alt="Email" className="email-icon" />
            <span> abilashabi.ab@gmail.com</span>
          </div>

          <div
            className="contact-link"
            onClick={() => handleCopy("+91-9535332273", "Phone")}
            title="Click to copy number"
          >
            <img src={phoneIcon} alt="Phone" className="email-icon" />
            <span>+91-9535332273</span>
          </div>

          {tooltip && <div className="tooltip">{tooltip}</div>}
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Name"
            className="form-input half-width"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input half-width"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="form-input full-width"
        />
        <textarea
          placeholder="Message"
          className="form-textarea"
        ></textarea>
        <button type="submit" className="form-button">
          Send {">"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
