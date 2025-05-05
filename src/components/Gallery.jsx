import React from 'react';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";
import project11 from "../assets/project11.png";
import project12 from "../assets/project12.png";
import project13 from "../assets/project13.png";

const Gallery = () => {
  const images = [
    { src: project7, alt: "Newyear Art 2023" },
    { src: project11, alt: "Kuri Debut Fanart 2023" },
    { src: project6, alt: "Birthday Art 2024" },
    { src: project5, alt: "Christmas Art 2024" },
    { src: project9, alt: "06/22/2024" },
    { src: project12, alt: "09/03/2024" },
    { src: project10, alt: "02/05/2025" },
    { src: project8, alt: "02/07/2025" },
    { src: project4, alt: "04/03/2025" },
    { src: project3, alt: "04/11/2025" },
    { src: project2, alt: "04/17/2025" },
    { src: project1, alt: "04/23/2025" },
    { src: project13, alt: "04/28/2025" },
  ];

  return (
    <>
    <h1 className="gallery-title">ILLUSTRATIONS</h1>
    <div className="section-gallery">
      <div className="gallery-container">
        <p className="gallery-subtitle">MY ARTWORKS:</p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
              <div className="overlay">
                <span className="overlay-text">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  );
};

export default Gallery;