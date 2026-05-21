//src/components/services/bathtub/BathtubProcess.jsx
import "./css/bathtubprocess.css";
import {
  FaShieldAlt,
  FaTint,
  FaMagic,
  FaCheck,
} from "react-icons/fa"; 

export default function BathtubProcess() {
  return (
    <section className="bathtub-process-section">
      <div className="bathtub-container">
        <div className="process-header">
          <h2>
            How we refinish and why it lasts
          </h2>
          <p>
            We don't just coat your surfaces.
            We chemically bond a new finish that
            looks factory-new and holds up for years.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <span className="step-badge">
              Step 1
            </span>

            <div className="process-icon">
              <FaShieldAlt />
            </div>

            <h3>
              Mask & protect
            </h3>

            <p>
              Every inch of your bathroom is covered
              before we touch a surface, zero overspray,
              zero mess.
            </p>

          </div>

          <div className="process-card">
            <span className="step-badge">
              Step 2
            </span>
            <div className="process-icon">
              <FaTint />
            </div>

            <h3>
              Prime & bond
            </h3>

            <p>
              Our self-etching primer creates maximum
              adhesion between the old surface and the
              new glaze. No peeling. No lifting.
            </p>

          </div>

          <div className="process-card">
            <span className="step-badge">
              Step 3
            </span>
            <div className="process-icon">
              <FaMagic />
            </div>

            <h3>
              Glaze & restore
            </h3>

            <p>
              Our exclusive resin glaze eliminates stains,
              damage, and outdated colors, adding real value
              to your home.
            </p>

          </div>

        </div>

        <div className="surface-box">
          <h4>
            We refinish every major surface
          </h4>
          <div className="surface-grid">
            <div className="surface-item">
              <FaCheck />
              <span>Bathtubs & surrounds</span>
            </div>

            <div className="surface-item">
              <FaCheck />
              <span>Tile walls & flooring</span>
            </div>

            <div className="surface-item">
              <FaCheck />
              <span>Showers & enclosures</span>
            </div>

            <div className="surface-item">
              <FaCheck />
              <span>Vanities & sinks</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}