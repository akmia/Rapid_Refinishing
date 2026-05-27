//src/components/home/Hero.jsx
import hero from "../../assets/images/Hero.jpg";
import "../../components/home/css/hero.css";
import Button from "../common/estimatebutton/estimateButton";
import { Link } from "react-router-dom";


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
            <Button>Get a Free Estimate</Button>
            <Link to="/services" className="secondary-btn">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}