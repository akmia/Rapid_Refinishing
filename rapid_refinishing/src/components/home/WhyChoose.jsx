// src/components/home/WhyChoose.jsx
import before from "../../assets/images/before.jpg";
import after from "../../assets/images/after.jpg";
import "../../components/home/css/whychoose.css";

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-grid">

        {/* Left - Text */}
        <div className="why-text">
          <h2>Why choose to refinish over replace?</h2>

          <div className="benefit">
            <div className="benefit-header">
              <span className="checkmark">✔</span>
              <h4>Refinishing saves money!</h4>
            </div>
            <p>
              You can expect to save up to 75% over the cost of replacement.
              Bottom line our customers will save thousands!
            </p>
          </div>

          <div className="benefit">
            <div className="benefit-header">
              <span className="checkmark">✔</span>
              <h4>Refinishing is Rapid!</h4>
            </div>
            <p>
              Not only will you save money, you will also save time! Almost all
              refinishing projects are complete within 2-3 days.
            </p>
          </div>

          <div className="benefit">
            <div className="benefit-header">
              <span className="checkmark">✔</span>
              <h4>The Results are Stunning!</h4>
            </div>
            <p>
              Our Spray Stone product line offers a variety of unique colors and
              finishes to choose from that will give you a one of a kind finish.
              We refinish your existing bathtubs, countertops, showers, vanities,
              and sinks. They will be up to date and as good as new!
            </p>
          </div>
        </div>

        {/* Right - Before/After Images */}
        <div className="before-after">
          <div className="ba-image">
            <img src={before} alt="Before" />
          </div>
          <div className="ba-image">
            <img src={after} alt="After" />
          </div>
        </div>

      </div>
    </section>
  );
}