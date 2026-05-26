// src/components/services/cabinet/CabinetComparison.jsx

import { Check, X } from "lucide-react";
import "./css/cabinetComparison.css";

export default function CabinetComparison() {
  return (
    <section className="comparison section-spacing">
      <div className="container">

        <span className="comparison-label">
          WHY REFINISH?
        </span>

        <h2 className="comparison-title">
          Refinishing vs. replacing
        </h2>

        <p className="comparison-description">
          Replacing cabinets is expensive, slow, and wasteful.
          Refinishing gives you the same visual transformation
          at a fraction of the cost.
        </p>

        <div className="comparison-grid">

          <article className="comparison-card comparison-card--success">

            <span className="recommendation-badge">
              Recommended
            </span>

            <h3>Cabinet refinishing</h3>

            <p className="price">
              Starting at <strong>$1,500</strong>
            </p>

            <ul>
              <li>
                <Check />
                Done in 2–3 days
              </li>

              <li>
                <Check />
                80% less than replacement
              </li>

              <li>
                <Check />
                No construction mess
              </li>

              <li>
                <Check />
                Endless color options
              </li>

              <li>
                <Check />
                Eco-friendly choice
              </li>
            </ul>
          </article>

          <article className="comparison-card">

            <h3>Full cabinet replacement</h3>

            <p className="price">
              Starting at <strong>$8,000+</strong>
            </p>

            <ul>
              <li>
                <X />
                Takes weeks to complete
              </li>

              <li>
                <X />
                High material & labor cost
              </li>

              <li>
                <X />
                Major construction disruption
              </li>

              <li>
                <X />
                Generates cabinet landfill waste
              </li>

              <li>
                <X />
                Full structural change
              </li>
            </ul>
          </article>

        </div>
      </div>
    </section>
  );
}