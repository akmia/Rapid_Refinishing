// src/components/about/AboutHero.jsx

// src/components/about/AboutHero.jsx
import "../../components/about/css/AboutHero.css";
import heroImage from "../../assets/images/rapid_logo.jpg";

export default function AboutHero() {
  const stats = [
    {
      number: "20+",
      label: "Years in business"
    },
    {
      number: "500+",
      label: "Projects completed"
    },
    {
      number: "4.9★",
      label: "Average review score"
    },
    {
      number: "AZ #1",
      label: "Most referred company"
    }
  ];

  return (
    <section className="about-hero">
      <img
        src={heroImage}
        alt="Rapid Refinishing"
        className="about-hero-image"
      />

      <div className="about-hero-overlay" />

      <div className="container">
        <div className="about-hero-content">

          <span className="about-badge">
            About Us
          </span>

          <h1>
            Family-owned. Phoenix-proud.
            <br />
            20+ years of craft.
          </h1>

          <p>
            We're not a franchise or a call center.
            We're a local team that shows up,
            does excellent work, and treats your
            home like our own.
          </p>

          <div className="about-stats">
            {stats.map((item, index) => (
              <div key={index}>
                <h3>{item.number}</h3>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}