// src/components/about/AboutContent.jsx
import "../../components/about/css/AboutContent.css";

const values = [
  {
    title: "Family owned",
    text:
      "Real people, not a franchise. We take personal pride in every project we complete."
  },
  {
    title: "Licensed & insured",
    text:
      "Fully covered for your peace of mind. We operate to the highest industry standards."
  },
  {
    title: "Fast turnaround",
    text:
      "Most jobs done in 2–3 days. No weeks-long projects disrupting your home."
  },
  {
    title: "Quality guarantee",
    text:
      "We don't consider a job done until you're completely satisfied with the results."
  }
];

export default function AboutContent() {
  return (
    <section className="about-content section-spacing">
      <div className="container">

        <div className="about-grid">

          <div className="about-left">

            <span className="about-section-label">
              About Us
            </span>

            <h2>
              Built on referrals,
              not ads
            </h2>

            <p>
              Rapid Refinishing has been serving the Valley
              of the Sun for over 20 years as a family-owned
              business. Our highly qualified office staff and
              technicians are committed to delivering the
              highest level of service, making every job a
              pleasant, stress-free experience.
            </p>

            <p>
              Whether your bathtub, shower, vanity,
              or cabinets seem beyond repair,
              refinishing is often the smartest choice.
              We help homeowners save money,
              avoid demolition, and enjoy beautiful
              results that last.
            </p>

            <div className="about-quote">
              "We've grown almost entirely through
              word-of-mouth. That's the standard
              we hold ourselves to on every single job."
            </div>

          </div>

          <div className="about-values">

            {values.map((item, index) => (
              <div
                key={index}
                className="about-value-card"
              >
                <div className="value-icon">
                  ✓
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}