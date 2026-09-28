import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";

export default function Projects() {
  const projectList = [
    {
      title: "ART PORTFOLIO",
      link: "https://teryu-artportfolio.netlify.app/",
      image: proj1,
      isPrivate: false,
    },
    {
      title: "MANGA LIBRARY",
      link: "https://teryu-mangalibrary.netlify.app/",
      image: proj2,
      isPrivate: false,
    },
    {
      title: "RESPONSIVE PROFILE",
      link: "https://gelalela.github.io/profile-responsive/",
      image: proj3,
      isPrivate: true,
    },
    {
      title: "RESPONSIVE WEBSITE",
      link: "https://gelalela.github.io/reponsive-website/",
      image: proj5,
      isPrivate: false,
    },
    {
      title: "PORTFOLIO",
      link: "https://gelalela.github.io/portfolio/#home",
      image: proj4,
      isPrivate: true,
    },
  ];

  return (
    <>
      <h1 className="title-header">PROJECTS</h1>

      <div className="section-projects">
        <div className="projects-container">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">

              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`project-image ${
                    project.isPrivate ? "private-image" : ""
                  }`}
                />

                {/* Private Project Overlay */}
                {project.isPrivate && (
                  <div className="private-overlay">
                    <span>THIS PROJECT IS PRIVATE</span>
                  </div>
                )}
              </div>

              {/* Project Title */}
              <h2>{project.title}</h2>

              {/* Public / Private Action */}
              {project.isPrivate ? (
                <span className="private-label">
                  PRIVATE
                </span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW PROJECT
                </a>
              )}

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
