import FAQItem from "../../common/FAQItem";
import "./css/counterfaq.css";

export default function CounterFAQ() {
  const faqs = [
    {
      question: "What Types of Finishes Can Be Applied to Dream Stone and Spray Stone Countertops?",
      answer:
        "To maximize durability, all custom coatings are finished with your choice of a satin or gloss topcoat, available in either a low-odor water-based or an ultra-rugged polyurethane formula.",
    },
    {
      question: "What Types of Existing Surfaces Can Be Refinished?",
      answer:
        "Both our premium Dream Stone and versatile Spray Stone product lines seamlessly coat over wood, concrete, Formica, Corian, laminate, and engineered stone surfaces like Granite, Silestone, and Quartz—with Spray Stone adding specialized coverage for tile.",
    },
    {
      question: "Do You Offer a Warranty?",
      answer:
        "Rest easy knowing Rapid Refinishing Co. covers installation and fabrication defects against lifting or separation with a 3-year limited warranty on Spray Stone and a 10-year limited warranty on Dream Stone (plus a supplier lifetime warranty)—excluding standard wear, scratches, or physical abuse.",
    },
    {
      question: "How Long Does the Process Take?",
      answer:
        "Depending on your product line, our meticulous installation and curing process takes a maximum of three days, ensuring multiple precision topcoats are applied for the strongest, most durable finish possible.",
    },
    {
      question: "How to Properly Maintain My Refinished Surface?",
      answer:
        "To preserve your new finish, avoid abrasive pads and highly acidic cleaners, opting instead for gentle, approved products like 409, Lysol Tub & Tile, or Scrubbing Bubbles rather than harsh scrubs like Ajax, Comet, or bleach.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

