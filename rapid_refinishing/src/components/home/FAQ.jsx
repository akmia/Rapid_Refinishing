//src/components/home/FAQ.jsx
import FAQItem from "../common/FAQItem";

export default function FAQ() {
  const faqs = [
    {
      question: "Why Having a Licensed Contractor is Important?",
      answer: "Licensed contractors provide protection and accountability.",
    },
    {
      question: "How long does the process take?",
      answer: "Most projects are completed within one day.",
    },
  ];

  return (
    <section className="faq section-spacing">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

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