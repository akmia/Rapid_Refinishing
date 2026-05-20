//src/pages/Services/Services.jsx
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
    },
    {
      title: "Countertops",
      image: counter,
    },
    {
      title: "Vanity & Sink Resurfacing",
      image: sink,
    },
    {
      title: "Cabinet Refacing",
      image: cabinet,
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}