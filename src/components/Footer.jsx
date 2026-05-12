import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        background: "#0b0f1a",
        borderTop: "1px solid rgba(226,185,111,0.15)",
        color: "rgba(232,226,213,0.6)",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.85rem",
      }}
    >
      <p>© {new Date().getFullYear()} Adam Benmezi. Tous droits réservés.</p>
      <p style={{ marginTop: "0.5rem" }}>
        Projet L2 réalisé avec{" "}
        <span style={{ color: "#e2b96f", fontWeight: 600 }}>React</span> &{" "}
        <span style={{ color: "#e2b96f", fontWeight: 600 }}>jQuery</span>.
      </p>
    </footer>
  );
};

export default Footer;
