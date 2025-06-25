import React from "react";
import "../styles/Projects.css"; 
import drowsinessImage from "../assets/drowsiness.png";
import sliderImage from "../assets/slider.png";
import obj from "../assets/object.png";

const projects = [
  {
    id: 1,
    title: "Drowsiness Detection",
    description: "AI-powered app that monitors driver alertness using webcam and triggers alarms.",
    tags: ['Python','React', 'Flask', 'MySQL'],
    image: drowsinessImage,
    live: true,
    github: 'https://github.com/Abilash-26/Drowsiness-Detection.git',
  },
  {
    id: 2,
    title: "Image Slider",
    description: "A simple image slider built ",
    tags: ["HTML", "CSS", "Js"],
    image: sliderImage,
    live: true,
    github: 'https://github.com/Abilash-26/Image-Slider.git',
  },
  {
    id: 3,
    title: "Camouflaged Object Detection",
    description: "Web app for detecting camouflaged objects in images using advanced computer vision techniques.",
    tags: ["Python", "HTML", "CSS"],
    image: obj,
    live: true,
    github: 'https://github.com/Abilash-26/camouflaged-object-detection.git',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <div className="title">
          <span className="hash">#</span>
          <h2>projects</h2>
        </div>
        <div className="line" />
        <span className="view-all">View all ~~&gt;</span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-banner"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                {project.github && (
                  <a
                    className="btn live"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Hub &lt;~&gt;
                  </a>
                )}
                {project.demo && (
                  <button className="btn demo">Demo |&gt;</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
