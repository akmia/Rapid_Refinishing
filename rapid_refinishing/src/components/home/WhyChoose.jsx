//src/components/home/Whychoose.jsx
import before from "../../assets/images/before.jpg";
import after from "../../assets/images/after.jpg";

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container why-grid">
        <div>
          <h2>Why choose to refinish over replace?</h2>

          <div className="benefit">
            <h4>Refinishing saves money!</h4>
            <p>
              You can save up to 75% over the cost of replacement.
            </p>
          </div>

          <div className="benefit">
            <h4>Refinishing is Rapid</h4>
            <p>
              Most projects can be completed in a single day.
            </p>
          </div>

          <div className="benefit">
            <h4>The Result are Stunning!</h4>
            <p>
              Our refinishing process leaves surfaces looking brand new.
            </p>
          </div>
        </div>

        <div className="before-after">
          <div>
            <span>BEFORE</span>
            <img src={before} alt="Before" />
          </div>

          <div>
            <span>AFTER</span>
            <img src={after} alt="After" />
          </div>
        </div>
      </div>
    </section>
  );
}