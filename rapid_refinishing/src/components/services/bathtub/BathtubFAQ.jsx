//src/components/services/bathtub/BathtubFAQ.jsx
import FAQItem from "../../common/FAQItem";
import "./css/bathtubfaq.css";

export default function bathtubFaq() {
  const faqs = [
    {
      question: "Do You Offer a Warranty?",
      answer: "Bathtub resurfacing can extend your tub's life by up to 15+ years, backed by a 5-year warranty on full refinishing and a 1-year warranty on repairs.",
    },
    {
      question: "How Long Does the Process Take?",
      answer: "The entire process takes a maximum of 48 hours, which includes up to 4 hours for the actual refinishing work on day one and the remaining time to ensure a full cure before use.",
    },
    {
      question: "Can You Refinish Plastic or Fiberglass Bathtubs?",
      answer: "We can service almost any bathroom surface, including porcelain, ceramic, fiberglass, cultured marble, wood, concrete, painted walls, metal, plastics, and composites.",
    },
    {
      question: "How Is My Price Determined?",
      answer: "Your final price depends on the tub's size, location, condition, and installation type; please [submit an estimate request] to receive the most accurate pricing for your project.",
    },
    {
      question: "Proper Maintenance of My Refinished Surface?",
      answer: "To protect your tub's finish, stick to safe cleaners and avoid abrasive products as detailed below: Approved Cleaners: Formula 409, scrub-free products, Lysol Tub & Tile, Dow Scrubbing Bubbles, and organic cleaners. Products to AVOID: Ajax, Comet, bleach-based products, Tilex, and abrasive cleaning pads.",
    },
    {
      question: "How Long Will My Newly Refinished Tub Last?",
      answer: "With proper maintenance, your surfaces will last up to 15–20 years or more, backed by a 5-year defect warranty for total peace of mind. We guarantee this longevity by etching the surface with a specialized, acid-bearing compound to create an ultra-strong, permanent bond.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}