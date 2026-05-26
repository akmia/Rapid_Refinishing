// src/components/services/vanity/VanityHero.jsx
import "./css/vanityHero.css";
import vanityHero from "../../../assets/images/vanityHero.jpg";

export default function VanityHero() {
  return (
    <section className="vanity-hero">
      <img
        src={vanityHero}
        alt="Vanity refinishing"
        className="vanity-hero__image"
      />

      <div className="vanity-hero__overlay" />

      <div className="container vanity-hero__content">
        <span className="vanity-badge">
          Vanity & sink refinishing
        </span>

        <h1>
          A damaged vanity doesn't
          <br />
          need replacing, it needs
          <br />
          refinishing
        </h1>

        <p>
          Save up to 75% vs. replacement.
          Finished in less than a day.
          Built to last for years.
        </p>

        <button className="vanity-primary-btn">
          Get a Free Estimate
        </button>
      </div>
    </section>
  );
}