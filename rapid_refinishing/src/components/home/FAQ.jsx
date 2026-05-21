// src/components/home/FAQ.jsx
import FAQItem from "../common/FAQItem";
import "./css/faq.css";

export default function FAQ() {
  const faqs = [
    {
      question: "Why Having a Licensed Contractor Is Important?",
      answer: "Hiring an unlicensed contractor can put homeowners at serious risk. Many unlicensed contractors do not carry proper licensing, bonding, liability insurance, or workers’ compensation coverage, which may leave the customer financially responsible if problems or accidents occur during the project.",
    },
    {
      question: "Does Rapid Refinishing Co. Have a Standard Warranty?",
      answer: "Yes. We include a 5-year warranty with complete resurfacing services for bathtubs, countertops, cabinets, and vanities covering defects or improper workmanship. With proper care and maintenance, our coatings are designed to last 10–15 years or more. Repairs also include a 1-year warranty.",
    },
    {
      question: "What Options Do I Have With Refinishing My Countertops?",
      answer: "Rapid Refinishing Co. stands strongly behind its main product line 'Spray Stone' due do its durability, versatility, and ease of repair if damage were to occur. It can be applied to countertops, backsplashes and vanities to give you the appearance and texture of natural stone. Multiple colors are available, check out the colors tab for the whole line up.",
    },
    {
      question: "How Durable Is a Refinished Surface Compared to the Original Surface?",
      answer: "Everybody has seen the classic basic white bathtub with the outdated marble or white enclosure. Boring! With Rapid refinishing Co. we give you the option to choose almost any color! Plus, we can do the same for the enclosure or give it much more contrast with our durable natural stone like product line, Spray Stone. Contact us today to go over all your color options.",
    },
    {
      question: "What Options Do I Have With Refinishing My Bathtub?",
      answer: "Everybody has seen the classic basic white bathtub with the outdated marble or white enclosure. Boring! With Rapid refinishing Co. we give you the option to choose almost any color! Plus, we can do the same for the enclosure or give it much more contrast with our durable natural stone like product line, Spray Stone. Contact us today to go over all your color options.",
    },
    {
      question: "How Long Does the Process Take?",
      answer: "Most refinishing projects can be completed within 1–2 days, with many surfaces restored in as little as one day. Additional curing time is recommended afterward to ensure the finish fully hardens before regular use.",
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