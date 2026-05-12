import React from "react";

export const TechBadge = ({ tech }) => {
  const colors = {
    "C++": ["#00b4d8", "rgba(0,180,216,0.12)"],
    POO: ["#90e0ef", "rgba(144,224,239,0.12)"],
    Raylib: ["#48cae4", "rgba(72,202,228,0.12)"],
    HTML: ["#e2b96f", "rgba(226,185,111,0.12)"],
    CSS: ["#6bbfed", "rgba(107,191,237,0.12)"],
    JavaScript: ["#f9c74f", "rgba(249,199,79,0.12)"],
    jQuery: ["#5ed49a", "rgba(94,212,154,0.12)"],
    Responsive: ["#f77f00", "rgba(247,127,0,0.12)"],
  };
  const [color, bg] = colors[tech] || ["#e2b96f", "rgba(226,185,111,0.12)"];
  return (
    <span
      style={{
        padding: "0.28rem 0.75rem",
        borderRadius: 20,
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.8px",
        color,
        background: bg,
        border: `1px solid ${color}55`,
        whiteSpace: "nowrap",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {tech}
    </span>
  );
};

export const SkillBar = ({ label, percent }) => (
  <div className="skill-bar-wrap" style={{ opacity: 0 }}>
    <div className="skill-label">
      <span>{label}</span>
      <span className="skill-percent">{percent}%</span>
    </div>
    <div className="skill-bar">
      <div className="skill-fill" data-width={percent}></div>
    </div>
  </div>
);

export const SoftSkill = ({ name, stars }) => (
  <div className="soft-card" data-stars={stars} style={{ opacity: 0 }}>
    <span className="soft-name">{name}</span>
    <div className="stars-wrap"></div>
  </div>
);

export const VerseBox = ({ ar, fr, refVerse }) => (
  <div className="about-verse" style={{ opacity: 0 }}>
    <p className="verse-ar">{ar}</p>
    <p className="verse-fr">{fr}</p>
    <p className="verse-ref">{refVerse}</p>
  </div>
);
