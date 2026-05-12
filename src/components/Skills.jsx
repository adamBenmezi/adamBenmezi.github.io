import React from "react";
import { SkillBar, SoftSkill, VerseBox } from "./Shared";

const Skills = () => (
  <section id="skills">
    <div className="about-container">
      <div className="about-title">
        <h2>
          Compé<span>tences</span>
        </h2>
        <div className="title-line"></div>
      </div>
      <div className="skills-wrapper">
        <div className="skills-col">
          <h3 className="skills-subtitle">Techniques</h3>
          <SkillBar label="HTML / CSS" percent="65" />
          <SkillBar label="JavaScript / jQuery" percent="50" />
          <SkillBar label="Python" percent="50" />
          <SkillBar label="Algorithmique" percent="50" />
          <SkillBar label="Intégrale & Différentielle" percent="70" />
          <SkillBar label="C++ / POO" percent="30" />
          <SkillBar label="React" percent="15" />
        </div>
        <div className="skills-col">
          <h3 className="skills-subtitle">Personnelles</h3>
          <div className="soft-skills">
            <SoftSkill name="Discipline" stars="5" />
            <SoftSkill name="Persévérance" stars="5" />
            <SoftSkill name="Travail en équipe" stars="4" />
            <SoftSkill name="Apprentissage rapide" stars="5" />
            <SoftSkill name="Résolution de problèmes" stars="4" />
            <SoftSkill name="Patience" stars="4" />
            <SoftSkill name="Respect" stars="5" />
            <SoftSkill name="Communication" stars="3" />
          </div>

          <h3 className="skills-subtitle" style={{ marginTop: "2rem" }}>
            Langues
          </h3>
          <div className="tags-wrap">
            <span className="tag tag-gold">Arabe — Natif</span>
            <span className="tag tag-blue">Français — Intermédiaire</span>
            <span className="tag tag-green">Anglais — Courant</span>
          </div>
        </div>
      </div>
    </div>
    <VerseBox
      ar="﴿ وَقُل رَّبِّ زِدْنِي عِلْمًا ﴾"
      fr='"Et dis : Seigneur, augmente-moi en savoir."'
      refVerse="— Sourate Taha (20:114)"
    />
  </section>
);

export default Skills;
