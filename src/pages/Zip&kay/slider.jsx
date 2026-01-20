"use client";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";

const ImageSlider = () => {
  // Memoize the static images array
  const sliderImages = useMemo(() => [
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img01.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img02.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img03.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img04.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img05.webp",
    "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img06.webp",
  ], []);

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);
  const imageRef = useRef(null);

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      sliderImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, [sliderImages]);

  // Preload next image for smoother transitions
  useEffect(() => {
    const nextIndex = (current + 1) % sliderImages.length;
    const img = new Image();
    img.src = sliderImages[nextIndex];
  }, [current, sliderImages]);

  // Handle image loading
  const handleImageLoad = useCallback(() => {
    setLoading(false);
  }, []);

  // Auto slide with optimized interval management
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Navigation functions with useCallback
  const prevSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
      setFade(true);
    }, 200);
  }, [sliderImages.length]);

  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
      setFade(true);
    }, 200);
  }, [sliderImages.length]);

  // Go to specific slide
  const goToSlide = useCallback((index) => {
    if (index === current) return;
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 200);
  }, [current]);

  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      aria-label="Zipline adventure image gallery"
      role="region"
      aria-roledescription="carousel"
    >
      <div
        className="relative z-10 w-[90%] h-[70vh] rounded-3xl overflow-hidden bg-white/10 border border-white/20 shadow-[0_0_60px_rgba(0,255,255,0.25)] backdrop-blur-xl"
      >
        {/* Loading state */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Current image */}
        <img
          ref={imageRef}
          key={current}
          src={sliderImages[current]}
          alt={`Zipline adventure slide ${current + 1}`}
          className={`w-full h-full object-cover rounded-3xl transition-all duration-700 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          onLoad={handleImageLoad}
          loading="eager"
          fetchPriority="high"
        />
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Previous slide"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Next slide"
        >
          ▶
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : "false"}
            />
          ))}
        </div>
        
        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
          {current + 1} / {sliderImages.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;