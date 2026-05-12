import React from "react";

const Header = () => (
  <header>
    <img className="profile-img" src="profile.jpeg" alt="Photo Adam Benmezi" />
    <h1 id="nom">Benmezi Adam</h1>
    <h2 id="filier">Développeur Web / Étudiant en Informatique</h2>
    <p id="email">✉ adambenmezi@gmail.com</p>
    <p id="acadimique">🎓 a.benmezi8335@uca.ac.ma</p>
    <div className="social-links">
      <a
        className="social-link"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="social-link"
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
    <p className="verse-ar">
      وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ ۝ وَأَنَّ سَعْيَهُ سَوْفَ
      يُرَىٰ
      <span>— سورة النجم 39-40</span>
    </p>
  </header>
);
export default Header;
