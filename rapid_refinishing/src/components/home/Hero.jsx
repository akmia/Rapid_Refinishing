//src/components/home/Hero.jsx
import hero from "../../assets/images/Hero.jpg";
import "../../components/home/css/hero.css";
import Button from "../common/estimatebutton/estimateButton";


export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">
        <div className="container hero-content">
          <h1>Fast and Affordable Refinishing Services</h1>

          <p>
            Our highly qualified office staff and technicians provide the
            highest level of customer service and always go above and beyond.
          </p>

          <div className="hero-buttons">
            <Button>
              Get a Free Estimate
            </Button>
            <button className="secondary-btn">View Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}