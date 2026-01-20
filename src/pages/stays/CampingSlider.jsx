import React ,  { useState, useMemo , useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Move images array outside component to prevent recreation on renders
const images = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_1.webp",
];

const CampingSlider = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const intervalRef = useRef(null);

  // Memoize navigation handlers to prevent recreation on each render
  const handleNext = useCallback(() => {
    setPrev(current);
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  }, [current]);

  const handlePrev = useCallback(() => {
    setPrev(current);
    setCurrent((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [current]);

  // Set up and clean up the auto-slide interval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleNext]);

  return (
    <section className="text-gray-900 py-16 mt-20 relative">
      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(1.05);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
          will-change: opacity, transform;
        }
        .animate-fadeOut {
          animation: fadeOut 1.2s ease-in-out forwards;
          will-change: opacity, transform;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          will-change: opacity, transform;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center px-6 relative z-20 opacity-0 translate-y-10 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl josefin-sans font-extrabold mb-6 text-emerald-900">
          Camping in Rishikesh – Shivpuri
        </h2>
      </div>
      
      {/* Image Slider */}
      <div className="mt-19 w-full max-w-full mx-auto px-2 relative">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white h-[65vh]">
          {/* Previous fading out */}
          {prev !== null && (
            <img
              key={`prev-${prev}`}
              src={images[prev]}
              alt={`Camping slide ${prev + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-100 scale-100 animate-fadeOut"
              loading="lazy"
              decoding="async"
            />
          )}
          
          {/* Current fading in */}
          <img
            key={`current-${current}`}
            src={images[current]}
            alt={`Camping slide ${current + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 scale-110 animate-fadeIn"
            loading="lazy"
            decoding="async"
            fetchpriority={current === 0 ? "high" : "low"}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          
          {/* Bottom Tagline */}
          <div className="absolute bottom-6 right-6 text-white z-20 text-right opacity-0 translate-y-6 animate-fadeInUp delay-500">
            <p className="text-lg font-semibold">
              Stays • Camp • Bonfire • Adventure
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition-all z-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setPrev(current);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CampingSlider);