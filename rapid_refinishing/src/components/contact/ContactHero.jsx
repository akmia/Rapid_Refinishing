// src/components/contact/ContactHero.jsx

import "./css/contactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero-content">
          <span className="contact-badge">
            Contact Us
          </span>

          <h1>
            Get your free estimate today
          </h1>

          <p>
            Tell us about your project and we'll get
            back to you within 1 business day,
            no pressure, no obligation.
          </p>
        </div>
      </div>
    </section>
  );
}