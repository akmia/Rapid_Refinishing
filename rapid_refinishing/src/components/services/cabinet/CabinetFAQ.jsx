//src/components/services/bathtub/BathtubFAQ.jsx
import FAQItem from "../../common/FAQItem";
import "./css/cabinetfaq.css";

export default function cabinetfaq() {
  const faqs = [
    {
      question: "How long does the cabinet refinishing or refacing process take?",
      answer: "Most cabinet refinishing projects are completed in just a few days, while cabinet refacing typically takes one to two weeks, depending on the scope of work. Both options are much faster than full cabinet replacement, allowing homeowners to enjoy a refreshed look with minimal disruption.",
    },
    {
      question: "Can I change the color of my cabinets with refinishing?",
      answer: "Yes. Cabinet refinishing allows you to completely change the color of your cabinets with a new stain or paint finish. Whether you prefer a modern light color or a richer, darker tone, refinishing provides an affordable way to transform your kitchen while keeping your existing cabinet structure intact.",
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