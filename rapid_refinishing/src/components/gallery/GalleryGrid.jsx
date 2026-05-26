// src/components/gallery/GalleryGrid.jsx

import "./css/galleryGrid.css";

import { galleryImages }
  from "../../data/galleryData";

export default function GalleryGrid({
  selectedCategory
}) {
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          image =>
            image.category === selectedCategory
        );

  return (
    <div className="gallery-grid">
      {filteredImages.map(image => (
        <div
          key={image.id}
          className="gallery-card"
        >
          <img
            src={image.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}