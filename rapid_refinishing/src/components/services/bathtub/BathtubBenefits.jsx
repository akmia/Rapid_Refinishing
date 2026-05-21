//src/components/services/bathtub/BathtubBenefits.jsx
import "./css/bathtubbenefits.css";

import beforeImg from "../../../assets/images/bathtubbefore1.jpg";
import afterImg from "../../../assets/images/bathtubafter1.jpg";

import {
  FaDollarSign,
  FaClock,
  FaTools,
} from "react-icons/fa";

export default function BathtubBenefits() {
  return (
    <section className="bathtub-benefits-section">
      <div className="bathtub-container">
        <div className="benefits-header">

          <h2>
            Why Refinish Instead of Replace?
          </h2>

          <p>
            Smarter, faster, and a fraction of the cost,
            here's why refinishing wins.
          </p>

        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon green">
              <FaDollarSign />
            </div>

            <h3>Save up to 80%</h3>

            <p>
              A factory-new finish at a fraction
              of replacement cost.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon blue">
              <FaClock />
            </div>

            <h3>Done in 1 day</h3>

            <p>
              Hours, not weeks. Your tub is ready
              to use in 48 hours.
            </p>

          </div>
          <div className="benefit-card">

            <div className="benefit-icon gray">
              <FaTools />
            </div>

            <h3>Zero demolition</h3>

            <p>
              No pipes touched. No walls opened.
              No mess left behind.
            </p>
          </div>
        </div>

        <div className="before-after-grid">
          <div className="before-after-card">
            <img
              src={beforeImg}
              alt="Bathtub before refinishing"
            />

            <div className="before-after-label">
              <span className="status-dot red"></span>
              <p>Before</p>
            </div>
          </div>

          <div className="before-after-card">
            <img
              src={afterImg}
              alt="Bathtub after refinishing"
            />

            <div className="before-after-label">
              <span className="status-dot green"></span>
              <p>After</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}