//src/components/services/counter/CounterBenefits.jsx
import "./css/counterbenefits.css";
import { FaDollarSign, FaClock, FaPalette, FaStar, FaCheck, FaArrowUpRightFromSquare, } from "react-icons/fa6";


export default function CounterBenefits() {

  const benefits = [
    {
      icon: <FaDollarSign />,
      title: "Save up to 80%",
      description: "vs. full replacement",
      green: true,
    },

    {
      icon: <FaClock />,
      title: "Done in 1 day",
      description: "Ready to use in 48 hrs",
    },

    {
      icon: <FaPalette />,
      title: "60+ colors",
      description: "Gloss or matte finish",
      purple: true,
    },

    {
      icon: <FaStar />,
      title: "25+ years exp.",
      description: "500+ jobs in Phoenix",
      gold: true,
    },
  ];

  return (
    <section className="counter-benefits-section">
      <div className="counter-container">
        <div className="counter-benefits-grid">
          {benefits.map((item, index) => (

            <div
              className="counter-benefit-card"
              key={index}
            >

              <div
                className={`
                  counter-benefit-icon
                  ${item.green ? "green" : ""}
                  ${item.purple ? "purple" : ""}
                  ${item.gold ? "gold" : ""}
                `}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

        <div className="featured-product-card">
          <div className="featured-top">
            <span className="featured-badge">
              Featured Product
            </span>

            <span className="featured-title">
              Spray Stone
            </span>

          </div>

          <h2>
            Looks like natural stone.
            Costs a fraction of it.
          </h2>

          <p>
            Inspired by Arizona's Sonoran Desert,
            Spray Stone is 3-dimensional — unique
            flecks of color artfully blended to mimic
            granite, marble, and natural stone.
            Stain resistant, seamless, and non-porous.
          </p>

          <div className="featured-features">
            <div className="feature-item">
              <FaCheck />
              <span>Stain resistant</span>
            </div>

            <div className="feature-item">
              <FaCheck />
              <span>Seamless finish</span>
            </div>

            <div className="feature-item">
              <FaCheck />
              <span>60+ colors</span>
            </div>

            <div className="feature-item">
              <FaCheck />
              <span>Non-porous surface</span>
            </div>

          </div>

          <button className="spraystone-btn">

            Explore Spray Stone

            <FaArrowUpRightFromSquare />

          </button>

        </div>
      </div>
    </section>
  );
}