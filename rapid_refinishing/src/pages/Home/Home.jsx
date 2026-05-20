// src/pages/Home/Home.jsx
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import WhyChoose from "../../components/home/WhyChoose";
import Reviews from "../../components/home/Reviews";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}