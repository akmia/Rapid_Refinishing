// src/components/services/cabinet/VanityCTA.jsx
import "./css/vanityCTA.css";
import EstimateButton from "../../common/estimatebutton/estimateButton";

export default function VanityCTA() {
  return (
    <section className="vanity-cta">
      <div className="container">
        <div className="vanity-cta-box">
          <h3>
            Most jobs done in 1 day. No obligation.
          </h3>

          <p>
            Join 500+ Phoenix homeowners who chose
            refinishing over replacement.
          </p>

          <EstimateButton>
            Get a Free Estimate
          </EstimateButton>
        </div>
      </div>
    </section>
  );
}