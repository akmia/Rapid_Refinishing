// src/pages/Services/Services.jsx

import ServiceCard from "../../components/common/ServiceCard";

import bathtub from "../../assets/images/bathtub.jpg";
import counter from "../../assets/images/counter.jpg";
import sink from "../../assets/images/sink.jpg";
import cabinet from "../../assets/images/cabinet.jpg";

export default function Services() {
  const services = [
    {
      title: "Bathtub & Shower Resurfacing",
      image: bathtub,
      path: "/services/bathtub",
    },
    {
      title: "Countertops",
      image: counter,
      path: "/services/counter",
    },
    {
      title: "Vanity & Sink Resurfacing",
      image: sink,
      path: "/services/vanity",
    },
    {
      title: "Cabinet Refacing",
      image: cabinet,
      path: "/services/cabinet",
    },
  ];

  return (
    <section className="services section-spacing">
      <div className="container">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              to={service.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}