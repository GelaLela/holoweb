import React from "react";
import insta from "../assets/instagram.png";
import dc from "../assets/discord.png";
import tiktok from "../assets/tik-tok.png";
import twitter from "../assets/twitter.png";

export default function Contact() {
  return (
      <>
      <h1 className="cont-title">CONTACT ME:</h1>
      <div className="section-contact">
      <div className="text-content2">
        <div className="icon-container">
          <a href="https://www.instagram.com/_teryu/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" className="icon-image" />@_teryu
          </a>
          <a href="https://discordapp.com/users/763989877598453760" target="_blank" rel="noopener noreferrer">
            <img src={dc} alt="Discord" className="icon-image" />teryuyuu
          </a>
          <a href="https://x.com/OikawaTeryu" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="icon-image" />@OikawaTeryu
          </a>
          <a href="https://www.tiktok.com/@yuyu.draws" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="icon-image" />@yuyu.draws
          </a>
        </div>
      </div>
    </div></>
  );
}
