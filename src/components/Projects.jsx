import React, { useState, useEffect, useRef } from "react";
import { TechBadge, VerseBox } from "./Shared";

// Hook d'animation natif React (Celui que tu avais créé !)
function useInView(offset = 80) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (el.getBoundingClientRect().top <= window.innerHeight - offset)
        setVisible(true);
    };
    window.addEventListener("scroll", check);
    check();
    return () => window.removeEventListener("scroll", check);
  }, [offset]);
  return [ref, visible];
}

const ProjectCard = ({ title, description, techs, links, collab, index }) => {
  const [ref, visible] = useInView(60);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : `translateY(${30 + index * 10}px)`,
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s, background 0.4s, border-color 0.4s, box-shadow 0.4s`,
        background: hovered
          ? "rgba(226,185,111,0.07)"
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(226,185,111,0.5)"
          : "1px solid rgba(226,185,111,0.18)",
        borderRadius: 14,
        padding: "1.7rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: hovered ? "0 8px 40px rgba(226,185,111,0.12)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <span
          style={{
            fontFamily: "'Amiri', serif",
            fontSize: "2.2rem",
            color: "rgba(226,185,111,0.22)",
            lineHeight: 1,
            minWidth: 38,
          }}
        >
          0{index + 1}
        </span>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "#fff",
            letterSpacing: "0.5px",
          }}
        >
          {title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "0.85rem",
          color: "rgba(232,226,213,0.72)",
          lineHeight: 1.85,
          borderLeft: "3px solid rgba(226,185,111,0.3)",
          paddingLeft: "0.9rem",
        }}
      >
        {description}
      </p>
      {collab && (
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.78rem",
            color: "rgba(226,185,111,0.7)",
            letterSpacing: "0.4px",
          }}
        >
          👥 {collab}
        </p>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {techs.map((t) => (
          <TechBadge key={t} tech={t} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.7rem",
          flexWrap: "wrap",
          marginTop: "0.2rem",
        }}
      >
        {links.map(({ label, url, icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1.1rem",
              borderRadius: 30,
              border: "1px solid rgba(226,185,111,0.4)",
              color: "#e2b96f",
              fontSize: "0.78rem",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              textDecoration: "none",
              background: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(226,185,111,0.15)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.boxShadow =
                "0 0 14px rgba(226,185,111,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#e2b96f";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [titleRef, titleVisible] = useInView(80);

  const PROJECTS_DATA = [
    {
      title: "Portfolio Photographe — Site Web Statique",
      description:
        "Site vitrine élégant pour un photographe professionnel. Galerie d'images responsive, navigation fluide et mise en page soignée.",
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Responsive",
        "GitHub Pages",
      ],
      collab: "Avec Mohamed Amin Rougi & Ahmed Benrami",
      links: [
        {
          label: "Démo Live",
          url: "https://ahmedbenrami.github.io/Pages/offer.html",
          icon: "🌐",
        },
      ],
    },
    {
      title: "Chase Game — Mini Jeu 2D en C++",
      description:
        "Jeu de poursuite 2D développé avec la bibliothèque Raylib. Application concrète des principes de la POO.",
      techs: ["C++", "POO", "Raylib"],
      collab: "Avec Ahmed Benrami",
      links: [
        {
          label: "GitHub",
          url: "https://github.com/AhmedBenRami/Chace-Game/tree/main",
          icon: "🐙",
        },
      ],
    },
  ];

  return (
    <section
      id="experiences"
      style={{
        padding: "6rem 2rem",
        fontFamily: "'Poppins', sans-serif",
        color: "#e8e2d5",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 1rem" }}>
        <div
          ref={titleRef}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Expé<span style={{ color: "#e2b96f" }}>riences</span>
          </h2>
          <div
            style={{
              width: 60,
              height: 3,
              background: "#e2b96f",
              margin: "0.8rem auto 0",
              borderRadius: 2,
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {PROJECTS_DATA.map((p, i) => (
            <ProjectCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
