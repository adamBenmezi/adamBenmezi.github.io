import React from "react";
import { VerseBox } from "./Shared";

const Formation = () => (
  <section id="formation">
    <div className="about-container">
      <div className="about-title">
        <h2>
          For<span>mation</span>
        </h2>
        <div className="title-line"></div>
      </div>
      <div className="accordion">
        <div className="acc-item">
          <div className="acc-header">
            <div className="acc-left">
              <span className="acc-year">2024 – Présent</span>
              <span className="acc-title">
                Licence en Sciences Informatiques
              </span>
            </div>
            <span className="acc-arrow">▼</span>
          </div>
          <div className="acc-body">
            <p>
              <strong>Établissement :</strong> FSSM – Université Cadi Ayyad,
              Marrakech
            </p>
            <p>
              <strong>Niveau :</strong> 2ème année
            </p>
            <p>
              <strong>Modules :</strong> Algorithmique, C++, POO, Développement
              Web, Mathématiques, Bases de données, Systèmes d'exploitation.
            </p>
          </div>
        </div>

        <div className="acc-item">
          <div className="acc-header">
            <div className="acc-left">
              <span className="acc-year">2023 – 2024</span>
              <span className="acc-title">Baccalauréat Sciences Physiques</span>
            </div>
            <span className="acc-arrow">▼</span>
          </div>
          <div className="acc-body">
            <p>
              <strong>Établissement :</strong> Lycée Abtih – Aït Ourir
            </p>
            <p>
              <strong>Résultat :</strong> Mention Bien — 15,10/20
            </p>
            <p>
              <strong>Filière :</strong> Sciences Physiques et Chimie.
            </p>
          </div>
        </div>

        <div className="acc-item">
          <div className="acc-header">
            <div className="acc-left">
              <span className="acc-year">2021 – 2023</span>
              <span className="acc-title">Tronc Commun — Collège</span>
            </div>
            <span className="acc-arrow">▼</span>
          </div>
          <div className="acc-body">
            <p>
              <strong>Établissement :</strong> Collège Moatamid Ibn Abas – Aït
              Ourir
            </p>
            <p>
              <strong>Matières :</strong> Mathématiques, Physique-Chimie,
              Sciences naturelles, Langue française et arabe.
            </p>
          </div>
        </div>

        <div className="acc-item">
          <div className="acc-header">
            <div className="acc-left">
              <span className="acc-year">2015 – 2021</span>
              <span className="acc-title">École Primaire</span>
            </div>
            <span className="acc-arrow">▼</span>
          </div>
          <div className="acc-body">
            <p>
              <strong>Établissement :</strong> École Afaq – Aït Ourir
            </p>
            <p>
              <strong>Formation :</strong> Lecture, écriture, mathématiques de
              base, éveil aux sciences et à la langue française.
            </p>
          </div>
        </div>
      </div>
    </div>
    <VerseBox
      ar="﴿ اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴾"
      fr='"Lis au nom de ton Seigneur qui a créé."'
      refVerse="— Sourate Al-'Alaq (96:1)"
    />
  </section>
);

export default Formation;
