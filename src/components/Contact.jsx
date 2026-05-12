import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="about-container">
        <div className="about-title">
          <h2>
            Con<span>tact</span>
          </h2>
          <div className="title-line"></div>
          <p className="contact-sub">
            Une idée ? Un projet ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div
          className="contact-card"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="contact-field">
            <label htmlFor="c-name">Nom</label>
            <input type="text" id="c-name" placeholder="Votre nom complet" />
            <span className="c-error" id="err-name"></span>
          </div>
          <div className="contact-field">
            <label htmlFor="c-email">Email</label>
            <input type="email" id="c-email" placeholder="exemple@email.com" />
            <span className="c-error" id="err-email"></span>
          </div>
          <div className="contact-field">
            <label htmlFor="c-message">Message</label>
            <textarea
              id="c-message"
              rows="5"
              placeholder="Votre message ici..."
            ></textarea>
            <span className="c-error" id="err-message"></span>
          </div>
          <button id="contact-btn">✉ Envoyer le message</button>

          <div id="contact-success" style={{ display: "none" }}>
            <div className="success-icon">✅</div>
            <p className="success-title">Message envoyé avec succès !</p>
            <button id="contact-reset">Nouveau message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
