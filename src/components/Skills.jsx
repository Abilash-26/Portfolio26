import React from "react";
import "../styles/Skills.css"; 

const Skills = () => (
  <section className="skills" id="skills">
       <div className="projects-header">
        <div className="title">
         
          <h2>Skills</h2>
        </div>
        <div className="line" />
       
      </div>
    <div className="skills-grid">
      <div className="skill-box"><h3>Languages</h3><p>JavaScript, Python, Html5, Css3, SQL</p></div>
      <div className="skill-box"><h3>Frameworks</h3><p>React, React Router, Axios,  Flask, Node.js, Express.js, </p></div>
      <div className="skill-box"><h3>Databases</h3><p>MySQL, MariaDB, SQLAlchemy</p></div>
      <div className="skill-box"><h3>Tools & Technologies</h3><p>Git & Github, VSCode, RESTful APIs, Figma, Postman, Swagger</p></div>
    </div>
  </section>
);

export default Skills;
