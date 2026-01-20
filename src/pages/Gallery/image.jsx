"use client";
import { useState, useMemo, memo, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import images from "../../const";

// ✅ Optimized Image Component
const GalleryImage = memo(({ src, onClick }) => (
  <div
    className="break-inside-avoid mb-4 cursor-pointer rounded-2xl overflow-hidden shadow-md"
    onClick={onClick}
  >
    <LazyLoadImage
      src={`${src}?w=600&q=70`}
      srcSet={`
        ${src}?w=400&q=60 400w,
        ${src}?w=800&q=70 800w,
        ${src}?w=1200&q=80 1200w
      `}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      alt="Gallery image"
      effect="blur"
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-200 scale-110 hover:scale-125"
    />
  </div>
));

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // ✅ Reset selected image when category changes
  useEffect(() => {
    setSelectedImage(null);
  }, [selectedCategory]);
  
  // ✅ Filter images by category (memoized)
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return images;
    return images.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  // ✅ Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Reset selected image when category changes
    setSelectedImage(null);
  };

  return (
    <section className="scroll-mt-32 mt-20 w-full px-6 md:px-12 py-12">
      {/* Title & Dropdown */}
      <div className="text-center md:text-left mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          📸 Image Gallery
        </h2>
        {/* Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-full text-sm md:text-base font-semibold shadow-xl transition-all duration-300 cursor-pointer"
          >
            {selectedCategory === "all" && "🌟 All"}
            {selectedCategory === "rafting" && "🚣‍♂️ Rafting"}
            {selectedCategory === "stays" && "🏕️ Stays"}
            {selectedCategory === "trekking" && "🥾 Trekking"}
            {selectedCategory === "bungee" && "🪂 Bungee"}
            <span
              className={`ml-2 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              👇
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
              {["all", "rafting", "stays", "trekking", "bungee"].map((cat) => (
                <div
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className="block px-5 py-3 text-sm hover:bg-gray-100 font-medium transition cursor-pointer"
                >
                  {cat === "all" && "🌟 All"}
                  {cat === "rafting" && "🚣‍♂️ Rafting"}
                  {cat === "stays" && "🏕️ Stays"}
                  {cat === "trekking" && "🥾 Trekking"}
                  {cat === "bungee" && "🪂 Bungee"}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* ✅ Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
        {filteredImages.map((img, index) => (
          <GalleryImage
            key={`${selectedCategory}-${index}`} // ✅ Unique key with category
            src={img.src}
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>
      
      {/* ✅ Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-10 right-6 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-60 transition z-50"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <LazyLoadImage
              src={`${selectedImage}?w=1000&q=80`}
              srcSet={`
                ${selectedImage}?w=800&q=70 800w,
                ${selectedImage}?w=1200&q=80 1200w,
                ${selectedImage}?w=1600&q=85 1600w
              `}
              sizes="(max-width: 768px) 100vw, 80vw"
              alt="Full View"
              effect="blur"
              className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;