// src/components/home/Services.jsx
import ServiceCard from "../common/ServiceCard";
import bathtub from "../../assets/images/bathtub.jpg";
import counter from "../../assets/images/counter.jpg";
import sink from "../../assets/images/sink.jpg";
import cabinet from "../../assets/images/cabinet.jpg";
import "../../components/home/css/services.css";

export default function Services() {   
  const services = [
  { title: "Bathtub & Shower Resurfacing", image: bathtub, to: "/services/bathtub" },
  { title: "Countertops", image: counter, to: "/services/countertops" },
  { title: "Vanity & Sink Resurfacing", image: sink, to: "/services/sink" },
  { title: "Cabinet Refacing", image: cabinet, to: "/services/cabinet" },
];


  return (
    <section className="services section-spacing">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} image={service.image} title={service.title}to={service.to} />
          ))}
        </div>
      </div>
    </section>
  );
}