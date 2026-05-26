// src/components/contact/ContactSection.jsx

import "./css/contactSection.css";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}