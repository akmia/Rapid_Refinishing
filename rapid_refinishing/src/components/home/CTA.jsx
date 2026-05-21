// src/components/home/CTA.jsx
import "../../components/home/css/cta.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-overlay">
        <div className="cta-content">

          <h2 className="cta-heading">
            Forget Replacement! Save money with Resurfacing
          </h2>

          <p className="cta-body">
            When your bathtub, shower, vanities, or sinks start looking dingy, run down,
            or just outdated. What do you do? You can replace them which involves
            demolition and not to mention it's costly and messy.
          </p>

          <p className="cta-body">
            Instead give us a call at Rapid Refinishing and have experienced technicians
            transform your bathroom or kitchen for a fraction of the cost and time of
            replacing them!
          </p>

          <p className="cta-badge-text">
            <strong>Licensed, Bonded, and Insured</strong>
          </p>

          <div className="cta-trust-row">
            <div className="cta-trust-badge1">
              <img src="../../src/assets/images/roc-logo.png" alt="ROC Licensed" />
              <span>ROC # 327003</span>
            </div>
            <div className="cta-trust-badge2">
              <img src="../../src/assets/images/acb-logo.png" alt="BBB Accredited Business" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}