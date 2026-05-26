import "./css/cabinetProcess.css";

export default function CabinetProcess() {
  const steps = [
    {
      title: "Free in-home consultation",
      text: "We come to you, assess your cabinets, discuss finishes and colors, and provide a transparent quote, no pressure.",
    },
    {
      title: "Prep and protection",
      text: "We protect your countertops, appliances, and flooring before any work begins. Your home stays clean throughout.",
    },
    {
      title: "Refinishing and finishing",
      text: "Our crew strips, sands, primes, and applies your chosen finish with professional spray equipment for a flawless result.",
    },
    {
      title: "Final walkthrough",
      text: "We review every detail with you. No job is done until you're completely happy with the results.",
    },
  ];

  return (
    <section className="cabinet-process">
      <div className="container">
        <span className="process-label">HOW IT WORKS</span>

        <h2 className="process-title">Our process</h2>

        <p className="process-subtitle">
          Simple, fast, and transparent, from your first call to the final reveal.
        </p>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-item" key={index}>
              <div className="process-number">{index + 1}</div>

              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}