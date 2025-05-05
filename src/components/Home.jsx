import React, { useState } from "react";
import { Link } from 'react-router-dom';
import akutan from "../assets/aqua.webp";
import akutanHover from "../assets/akutan.gif";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="section">
      <div className="home-content">
        <div className="text-content">
          <h1 className="portfolio-title">ATESHI NO PORTFOLIO!</h1>
          <p className="portfolio-description">
            I'm a freelancer artist and developer, specializing in creating unique and captivating designs. My work is a blend of creativity and functionality, aimed at delivering exceptional user experiences.
          </p>
          <Link to="/about" className="cta-button">More about me</Link>
        </div>
        <img
          src={isHovered ? akutanHover : akutan}
          className="image-main"
          alt="Avatar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
