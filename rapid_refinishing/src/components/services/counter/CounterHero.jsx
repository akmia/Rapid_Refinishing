//src/components/services/counter/CounterHero.jsx
import "./css/counterhero.css";
import counterHero from "../../../assets/images/cabinet.jpg";
import Button from "../../common/estimatebutton";

export default function CounterHero() {
  return (
    <section
      className="counter-hero"
      style={{
        backgroundImage: `url(${counterHero})`,
      }}
    >
      <div className="counter-overlay">
        <div className="counter-container">
          <div className="counter-content">
            <span className="counter-badge">
              Countertop Resurfacing • Phoenix, AZ
            </span>

            <h1>
              Transform Your Countertops
              <br />
              Without Replacing Them
            </h1>

            <p>
              Unique, durable finishes in two sheens,
              gloss or matte. A factory-new surface
              bonded to your original countertop.
            </p>

            <div className="counter-actions">

              <a
                className="counter-secondary-btn"
                href="/gallery#counter"
              >
                See our work
              </a>


              <Button>
                Get a Free Estimate
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}