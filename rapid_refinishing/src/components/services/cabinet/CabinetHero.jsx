// src/components/services/cabinet/CabinetHero.jsx

import "./css/cabinetHero.css";
import cabinetHero from "../../../assets/images/cabinet.jpg";
import {
  ShieldCheck,
  Clock3,
  MapPin,
  BadgeCheck,
} from "lucide-react";

export default function CabinetHero() {
  return (
    <section className="cabinet-hero">
      <img
        src={cabinetHero}
        alt="Cabinet Refinishing"
        className="cabinet-hero__image"
      />

      <div className="cabinet-hero__overlay" />

      <div className="cabinet-hero__content container">
        <span className="cabinet-hero__badge">
          #1 Cabinet Refinishing Company in Phoenix, AZ
        </span>

        <h1>
          Transform your cabinets.
          <br />
          Not your budget.
        </h1>

        <p>
          Phoenix's most trusted cabinet refinishing specialists.
          New look, new hardware, without the cost of full
          replacement.
        </p>

        <div className="cabinet-hero__buttons">
          <a href="tel:6029757963" className="btn-primary">
            (602) 975-7963 — Call now
          </a>

          <button className="btn-secondary">
            See our work
          </button>
        </div>

        <div className="cabinet-hero__stats">
          <div>
            <h3>500+</h3>
            <span>Projects completed</span>
          </div>

          <div>
            <h3>4.9★</h3>
            <span>Average rating</span>
          </div>

          <div>
            <h3>80%</h3>
            <span>Less than replacement</span>
          </div>
        </div>
      </div>

      <div className="cabinet-hero__features">
        <div className="feature-item">
            <ShieldCheck size={18} />
            <span>Licensed & insured</span>
        </div>

        <div className="feature-item">
            <Clock3 size={18} />
            <span>Most jobs in 2–3 days</span>
        </div>

        <div className="feature-item">
            <MapPin size={18} />
            <span>Serving Greater Phoenix area</span>
        </div>

        <div className="feature-item">
            <BadgeCheck size={18} />
            <span>Locally owned since 2010</span>
        </div>
        </div>
    </section>
  );
}