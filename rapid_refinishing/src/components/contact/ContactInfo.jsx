// src/components/contact/ContactInfo.jsx

import "./css/contactInfo.css";
import { Phone, Mail, Tag } from "lucide-react";

export default function ContactInfo() {
  return (
    <aside className="contact-info">

      <div className="contact-block">
        <h3>Reach Us Directly</h3>

        <div className="contact-contact-item">
          <div className="contact-icon">
            <Phone size={15} />
          </div>

          <div>
            <span className="contact-label">
              Phone
            </span>

            <p>(602) 570-9821</p>
          </div>
        </div>

        <div className="contact-contact-item">
          <div className="contact-icon">
            <Mail size={15} />
          </div>

          <div>
            <span className="contact-label">
              Email
            </span>

            <p>
              customerservice@rapidrefinishingco.com
            </p>
          </div>
        </div>
      </div>

      <div className="contact-block">
        <h3>Working Hours</h3>

        <div className="contact-row">
          <span>Monday – Saturday</span>
          <span>9:00am – 5:00pm</span>
        </div>

        <div className="contact-row">
          <span>Phone support until</span>
          <span>4:30pm</span>
        </div>

        <div className="contact-row">
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>

      <div className="contact-block">
        <h3>Areas We Serve</h3>

        <p>
          Phoenix, Scottsdale, Avondale, Tempe,
          Chandler, Mesa, Peoria, Cave Creek,
          Tucson, Flagstaff, Prescott, and
          surrounding areas.
        </p>

        <div className="discount-pill">
          <Tag size={14} />
          More areas = bigger discounts
        </div>
      </div>

      <div className="contact-map">
        <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1!2d-112.07!3d33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzAwLjAiTiAxMTLCsDA0JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>

    </aside>
  );
}