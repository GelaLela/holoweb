import React, { useState } from "react";
import { Link } from 'react-router-dom';
import akutangaming from "../assets/aquagaming.jpg";
import raora from "../assets/raora.png";
import coding from "../assets/achan.jpg";

export default function About() {
  return (
    <>
    <h1 className="title-header">ABOUT ME</h1>

    <div className="section-about">
    <div className="gaming-content">
      <img className="image-main1"src={akutangaming} />
      <div className="text-gaming">
        <h1 className="portfolio-title">GAMING</h1>
        <p className="portfolio-description">
          Gaming is a passion of mine. I enjoy playing a variety of games, including FPS, RPG, Visual Novels, and rhythm games. I'm a very competitive person, and I love to challenge myself in games. My favorite games include Valorant, and Project SEKAI.
        </p>
      </div>
    </div>
    </div>

    <div className="section-about">
    <div className="drawing-content">
      <div className="text-drawing">
        <h1 className="portfolio-title">ARTS</h1>
        <p className="portfolio-description">
          Art is my hobby. I enjoy drawing and creating art in my free time. I love to draw characters from my favorite games and anime. I also enjoy creating original characters. I love drawing fan arts especially Kiritani Haruka.
        </p>
        <Link to="/gallery" className="cta-button">MY GALLERY</Link>
      </div>
        <img className="image-main2"src={raora} />
    </div>
    </div>

    <div className="section-about">
    <div className="coding-content">
      <img className="image-main1"src={coding} />
      <div className="text-gaming">
        <h1 className="portfolio-title">CODING</h1>
        <p className="portfolio-description">
          I code from time to time. I love to learn new things and improve my skills. I have experience in HTML, CSS, JavaScript, React, and Python. I also enjoy creating websites and designing websites. I really prefer designing than heavy coding. I love to create websites that are user-friendly and visually appealing.
        </p>
        <Link to="/projects" className="cta-button">MY PROJECTS</Link>
      </div>
    </div>
    </div>
    </>
  );
}