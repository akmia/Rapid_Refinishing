// src/components/common/FAQItem.jsx
import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>

      {/* IMPORTANT: always render, don't conditionally remove */}
      <div className={`faq-answer-wrapper ${open ? "open" : ""}`}>
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
}