//src/components/services/bathtub/BathtubHero.jsx
import "./css/bathtub.css";
import bathtubHero from "../../../assets/images/bathtubhero.jpg";
import Button from "../../common/estimatebutton";

export default function BathtubHero() {
  return (
    <section
      className="bathtub-hero"
      style={{
        backgroundImage: `url(${bathtubHero})`,
      }}
    >
      <div className="bathtub-overlay">
        <div className="bathtub-container bathtub-content">
          <div className="bathtub-text">


            <h1>
              Transform Your Old
              <br />
              Bathtub Without
              <br />
              Replacing It
            </h1>

            <p>
              Professional refinishing that saves you
              time, money, and demolition headaches.
            </p>

            <div className="hero-benefits">

              <div className="benefit-item">
                <span>✔</span>
                <p>Save up to 80%</p>
              </div>

              <div className="benefit-item">
                <span>✔</span>
                <p>Finished in 1 day</p>
              </div>

              <div className="benefit-item">
                <span>✔</span>
                <p>25+ years experience</p>
              </div>

            </div>

            <div className="hero-actions">

              <Button>
                Get a Free Estimate
              </Button>

              <button className="bathtub-secondary-btn">
                View Gallery
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}