// src/components/services/cabinet/CabinetBenefits.jsx

import {
  Paintbrush,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

import cabinet from "../../../assets/images/cabinet.jpg";
import doors from "../../../assets/images/cabinet-doors.png";
import hardware from "../../../assets/images/cabinet-hardware.png";

import "./css/cabinetBenefits.css";

export default function CabinetBenefits() {
  const benefits = [
    {
      title: "Cabinet refinishing",
      image: cabinet,
      icon: <Paintbrush size={20} />,
      text:
        "Expert stripping, sanding, and recoating that restores and enhances your existing cabinet surfaces.",
    },
    {
      title: "New doors",
      image: doors,
      icon: <PanelsTopLeft size={20} />,
      text:
        "Custom-designed doors installed to match your preferred style, modern, shaker, raised panel, and more.",
    },
    {
      title: "Hardware upgrades",
      image: hardware,
      icon: <Wrench size={20} />,
      text:
        "Curated selection of premium handles, pulls, and hinges to complete your kitchen's new look.",
    },
  ];

  return (
    <section className="cabinet-benefits section-spacing">
      <div className="container">
        <h2 className="cabinet-benefits__title">
          Our services
        </h2>

        <p className="cabinet-benefits__subtitle">
          From a fresh coat of paint to full hardware replacement,
          we restore and upgrade your cabinetry with expert
          craftsmanship.
        </p>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <article
              key={index}
              className="benefit-card"
            >
              <div className="benefit-card__image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="benefit-card__content">
                <div className="benefit-card__icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}