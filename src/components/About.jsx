import React from "react";

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="about-title">
        <h2>
          À <span>Propos</span>
        </h2>
        <div className="title-line"></div>
      </div>
      <p className="slamalaykom">﷽</p>
      <p className="slamalaykom">
        السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
      </p>
      <p class="salatAlaRasoul">
        وما أجمل أن نبدأ بالصلاة على الحبيب، خيرِ الخلق وأطهرِهم، سيدِنا محمدٍ
        اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ خَيْرُ بَدَايَةٍ
        لِكُلِّ كَلَامٍ
      </p>
      <div className="about-cards">
        <div className="info-card">
          <p className="card-label">Âge</p>
          <p className="card-value">19 ans</p>
        </div>
        <div className="info-card">
          <p className="card-label">Ville</p>
          <p className="card-value">Aït Ourir, Marrakech</p>
        </div>
        <div className="info-card">
          <p className="card-label">Bac 2024</p>
          <p className="card-value">Sciences Physiques — 15,10/20</p>
        </div>
        <div className="info-card">
          <p className="card-label">Université</p>
          <p className="card-value">FSSM — 2ème année Informatique</p>
        </div>
      </div>

      <div className="about-bio">
        <p className="bio-text">
          Je m'appelle <strong>Adam Benmezi</strong>, j'ai 19 ans et je suis né
          le 2 novembre 2006. J'habite à Aït Ourir, une petite ville près de
          Marrakech. J'ai obtenu mon baccalauréat en 2024 avec la mention{" "}
          <strong>Bien (15,10)</strong> en sciences physiques.
        </p>
        <p className="bio-text">
          Actuellement étudiant en <strong>2ème année à la FSSM</strong> en
          sciences informatiques, je développe mes compétences en programmation,
          algorithmique, développement web et logique informatique.
        </p>
        <p className="bio-text">
          En dehors des études, je suis passionné par les arts martiaux :{" "}
          <strong>Karaté Shotokan (ceinture noire)</strong>, Muay Thaï et
          Wrestling. Ces disciplines m'ont appris la discipline, la patience, le
          respect et la persévérance
        </p>
        <p class="bio-text">
          L'informatique occupe une place importante dans ma vie, et je cherche
          toujours à apprendre davantage pour construire un{" "}
          <strong>avenir solide et utile</strong> dans ce domaine.
        </p>
      </div>
    </div>
  </section>
);
export default About;
