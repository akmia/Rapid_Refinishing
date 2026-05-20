//src/components/common/FAQItem.jsx
import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)}>
        {question}
      </button>

      {open && <p>{answer}</p>}
    </div>
  );
}