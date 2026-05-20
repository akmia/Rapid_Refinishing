// src/components/common/ServiceCard.jsx
import { Link } from "react-router-dom";

export default function ServiceCard({ image, title, to = "/services" }) {
  return (
    <Link to={to} className="service-card-link">
      <div className="service-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}