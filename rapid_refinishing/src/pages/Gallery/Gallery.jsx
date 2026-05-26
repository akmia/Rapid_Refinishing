// src/pages/Gallery/Gallery.jsx

import { useState } from "react";

import GalleryHero from "../../components/gallery/GalleryHero";
import GallerySidebar from "../../components/gallery/GallerySidebar";
import GalleryGrid from "../../components/gallery/GalleryGrid";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  return (
    <>
      <GalleryHero />

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-layout">

            <GallerySidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <GalleryGrid
              selectedCategory={selectedCategory}
            />

          </div>
        </div>
      </section>
    </>
  );
}