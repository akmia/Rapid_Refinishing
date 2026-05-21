// src/components/home/Reviews.jsx
import { useState } from "react";
import counter from "../../assets/images/counter.jpg";
import bathtub from "../../assets/images/bathtub.jpg";
import "./css/reviews.css";

const reviews = [
  {
    quote: "Ray is great to work with. Our countertops came out beautiful.",
    name: "GARY CAROTENUTI",
    image: counter,
  },
  {
    quote: "Ray and Nick were great! On time, efficient, and true professionals. They were very knowledgeable about their processes and I felt no pressure when trying to make a decision. My refinished bathtub looks stunning. Highly recommend “Rapid Refinishing” to anybody looking to refinish their bathtub",
    name: "JESSICA",
    image: counter,
  },
  {
    quote: "We get so many complements on our countertops. People are amazed it’s not real stone! I highly recommend this as an alternative to granite",
    name: "ERIN",
    image: counter,
  },
  {
    quote: "I got my old bathtub refinished by Rapid Refinishing and I am very pleased with their work! It looks like new! I first was a little sceptical because I had an estimate from another company which was much higher, but I thought I'll take the risk and go with the lower bid! I really do not regret and will certainly refer this company to others!",
    name: "GERLINDE FOLTIN",
    image: bathtub,
  },
  {
    quote: "These guys really get after it and get the job done with the highest quality. I would recommend this business to anyone in the Phoenix area without a doubt. Thank you guys so much!",
    name: "ANTHONY",
    image: counter,
  },
  {
    quote: "Nick was very responsive and accommodating! We had had this service done once before from another company and it was not done well. He asked for pictures and was able to quote us based on the the current condition of the tub. He did a beautiful job and it was 10 times better than the first time! Money well spent!",
    name: "JACLYN BACKER",
    image: bathtub,
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((current + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section className="reviews">
      <div className="reviews-inner">

        {/* Title */}
        <h2 className="reviews-title">Reviews</h2>

        {/* Carousel */}
        <div className="reviews-carousel">
          <button className="arrow-btn" onClick={prev}>&#8249;</button>

          <div className="review-content">
            <p className="review-quote">"{review.quote}"</p>
            <span className="review-name">- {review.name}</span>
          </div>

          <div className="review-image">
            <img src={review.image} alt={review.name} />
          </div>

          <button className="arrow-btn" onClick={next}>&#8250;</button>
        </div>

      </div>
    </section>
  );
}