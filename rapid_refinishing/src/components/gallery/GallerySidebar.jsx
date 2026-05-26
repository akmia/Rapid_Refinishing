// src/components/gallery/GallerySidebar.jsx

import "./css/gallerySidebar.css";

export default function GallerySidebar({
  selectedCategory,
  setSelectedCategory
}) {
  const categories = [
    {
      label: "All",
      value: "all"
    },
    {
      label: "Bathtub & Shower Refinishing",
      value: "bathroom"
    },
    {
      label: "Cabinet Refinishing",
      value: "cabinet"
    },
    {
      label: "Countertop Refinishing",
      value: "countertop"
    },
    {
      label: "Vanity & Sink Refinishing",
      value: "vanity"
    }
  ];

  return (
    <aside className="gallery-sidebar">
      {categories.map(category => (
        <button
          key={category.value}
          className={
            selectedCategory === category.value
              ? "active"
              : ""
          }
          onClick={() =>
            setSelectedCategory(category.value)
          }
        >
          {category.label}
        </button>
      ))}
    </aside>
  );
}