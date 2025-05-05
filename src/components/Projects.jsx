import React, { useState } from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";

export default function Projects() {
  const projectList = [
    { title: "ART PORTFOLIO", link: "https://teryu-artportfolio.netlify.app/", image: proj1 },
    { title: "MANGA LIBRARY", link: "https://teryu-mangalibrary.netlify.app/", image: proj2 },
    { title: "RESPONSIVE PROFILE", link: "https://gelalela.github.io/profile-responsive/#", image: proj3 },
    { title: "RESPONSIVE WEBSITE", link: "https://gelalela.github.io/reponsive-website/", image: proj5 },
    { title: "PORTFOLIO", link: "https://gelalela.github.io/portfolio/#home", image: proj4 },
  ];
  
  return (
    <>
      <h1 className="title-header">PROJECTS</h1>

      <div className="section-projects">
        <div className="projects-container">
          {projectList.map((projects, index) => (
            <div key={index} className="project-card">
              <img src={projects.image} alt={projects.title} className="project-image" />
              <h2>{projects.title}</h2>
              <a href={projects.link} target="_blank" rel="noopener noreferrer">
                VIEW PROJECT
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}