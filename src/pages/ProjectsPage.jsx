import React from "react";
import { useEffect } from "react";


import Navbar from "../components/Navbar";
import LeftSocialBar from "../components/LeftSocialBar";
import Footer from "../components/Footer";

import "../styles/ProjectPage.css";

import drowsinessImage from "../assets/drowsiness.png";
import sliderImage from "../assets/slider.png";
import obj from "../assets/object.png";

const allProjects = [
  {
    id: 1,
    title: "Drowsiness Detection",
    description: "AI-powered app that monitors driver alertness using webcam and triggers alarms.",
    tags: ["Python", "React", "Flask", "MySQL"],
    image: drowsinessImage,
    github: "https://github.com/Abilash-26/Drowsiness-Detection.git",
    live: true,
  },
  {
    id: 2,
    title: "Image Slider",
    description: "A simple image slider built.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: sliderImage,
    github: "https://github.com/Abilash-26/Image-Slider.git",
    live: true,
  },
  {
    id: 3,
    title: "Camouflaged Object Detection",
    description: "Web app for detecting camouflaged objects using advanced CV techniques.",
    tags: ["Python", "HTML", "CSS"],
    image: obj,
    github: "https://github.com/Abilash-26/camouflaged-object-detection.git",
    live: true,
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Personal developer portfolio built with React.",
    tags: ["React", "CSS"],
    github: "https://github.com/Abilash-26/Portfolio.git",
  },
];

const ProjectsPage = () => {

      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <LeftSocialBar/>
      <section className="projects-page">
        <div className="projects-header">
          <div className="title">
            <span className="hash">/</span>
            <h2>projects</h2>
          </div>
          <div className="line" />
          <p className="subtitle">List Of My projects</p>
        </div>

        <div className="projects-grid">
          {allProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {project.image && (
                <div
                  className="project-banner"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}
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
                      GitHub &lt;~&gt;
                    </a>
                  )}
                  {/* {project.live && (
                    <a
                      className="btn demo"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live |&gt;
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
