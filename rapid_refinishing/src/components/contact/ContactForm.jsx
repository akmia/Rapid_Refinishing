// src/components/contact/ContactForm.jsx

import "./css/contactForm.css";
import { ImagePlus } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="contact-form-wrapper">

      <h2>
        Tell Us About Your Project
      </h2>

      <p>
        Fill out the form below and we'll
        prepare a custom estimate for you.
      </p>

      <form className="contact-form">

        <div className="form-grid">

          <div>
            <label>First Name</label>
            <input type="text" />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>

        </div>

        <label>Email Address</label>
        <input type="email" />

        <label>Phone Number</label>
        <input type="tel" />

        <label>
          Area of work needed.
          ( select all that apply )
        </label>

        <div className="service-tags">
          <button type="button">Bathtub</button>
          <button type="button">Vanity</button>
          <button type="button">Bathtub & Enclosure</button>
          <button type="button">Single Sink</button>
          <button type="button">Shower Pan</button>
          <button type="button">Walk-In Shower</button>
          <button type="button">Kitchen Countertop</button>
          <button type="button">Double Sink</button>
          <button type="button">Bathroom Countertop</button>
          <button type="button">Other</button>
        </div>

        <div className="upload-box">
          <ImagePlus size={28} />

          <h4>Upload photos of the work area</h4>

            <p>
                Up to 4 images · JPG or PNG
            </p>

            <span>
                Helps us give a more accurate estimate
            </span>
        </div>

        <label>
          Short description of work needed
        </label>

        <textarea rows="5"></textarea>

        <button
          type="submit"
          className="submit-btn"
        >
          Submit Request
        </button>

      </form>
    </div>
  );
}