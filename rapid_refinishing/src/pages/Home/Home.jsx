// src/pages/Home/Home.jsx

import { useEffect, useState } from "react";

import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import WhyChoose from "../../components/home/WhyChoose";
import Reviews from "../../components/home/Reviews";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";

import RapidRefinishingLoader from "../../components/loaders/RapidRefinishingLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <>
      {/* LOADER */}
      {loading && (
        <RapidRefinishingLoader
          onFinish={() => setLoading(false)}
        />
      )}

      {/* HOMEPAGE CONTENT */}
      <main
        className={`transition-all duration-1000 ${
          loading
            ? "opacity-0 scale-[1.01]"
            : "opacity-100 scale-100"
        }`}
      >
        <Hero />
        <Services />
        <WhyChoose />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}