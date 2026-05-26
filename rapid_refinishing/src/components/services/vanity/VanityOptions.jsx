// src/components/services/cabinet/VanityOptions.jsx

import "./css/vanityOptions.css";

import vanity from "../../../assets/images/sink.jpg";
import sprayStone from "../../../assets/images/counter.jpg";

export default function VanityOptions() {
  const cards = [
    {
      title: "Solid colors",
      image: vanity,
      text:
        "Give your vanity a fresh, modern look with gloss or matte solid color finishes, available in two topcoat options."
    },
    {
      title: "Spray Stone",
      image: sprayStone,
      badge: "Most Popular",
      text:
        "3-dimensional natural stone look, 60+ colors, stain resistant, non-porous, and backed by a 3-year limited warranty."
    }
  ];

  return (
    <section className="vanity-options section-spacing">
      <div className="container">
        <div className="vanity-options-grid">
          {cards.map((card, index) => (
            <article
              className="vanity-card"
              key={index}
            >
              <div className="vanity-card-image">
                <img
                  src={card.image}
                  alt={card.title}
                />
              </div>

              <div className="vanity-card-content">
                <div className="vanity-card-header">
                  <h3>{card.title}</h3>

                  {card.badge && (
                    <span className="vanity-badge-pill">
                      {card.badge}
                    </span>
                  )}
                </div>

                <p>{card.text}</p>

                <button>
                  See our work
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}