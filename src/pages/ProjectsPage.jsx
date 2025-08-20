import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LeftSocialBar from "../components/LeftSocialBar";
import Footer from "../components/Footer";
import "../styles/ProjectPage.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/Abilash-26/portfolio-projects/main/metadata.json"
        );
        if (!res.ok) throw new Error("Failed to fetch metadata.json");

        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching metadata.json:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <LeftSocialBar />
      <section className="projects-page">
        <div className="projects-header">
          <div className="title">
            <span className="hash">/</span>
            <h2>projects</h2>
          </div>
          <div className="line" />
          <p className="subtitle">List Of My projects</p>
        </div>

        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                {project.image && (
                  <div
                    className="project-banner"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
                <div className="project-tags">
                  {project.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="buttons">
                    {project.repo && (
                      <a
                        className="btn live"
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub &lt;~&gt;
                      </a>
                    )}
                    {project.live && (
                      <a
                        className="btn demo"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo |&gt;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
