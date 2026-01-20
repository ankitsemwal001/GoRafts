import { useEffect, useState, useRef, memo, useCallback } from "react";
import { Link } from "react-router-dom";

// Memoize the items array since it doesn't change
const items = [
  {
    id: 1,
    name: "Rafting",
    description: "Ride roaring rapids and conquer wild Himalayan rivers.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img1.webp",
    tag: "🌊 River Thrill",
    path: "/rafting",
  },
  {
    id: 2,
    name: "Trekking",
    description: "Ascend rugged trails and witness majestic summit views.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_img3.webp",
    tag: "🥾 Summit Quest",
    path: "/trek",
  },
  {
    id: 3,
    name: "Bungee Jumping",
    description: "Freefall from dizzying heights in adrenaline-pumping leaps.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img4.webp",
    tag: "🪂 Gravity Drop",
    path: "/bungee",
  },
  {
    id: 4,
    name: "Kayaking",
    description: "Navigate twisting river bends and paddle through serenity.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img5.webp",
    tag: "🚣 River Drift",
    path: "/kayaking",
  },
  {
    id: 5,
    name: "Zipline",
    description: "Soar over forests and valleys with breathtaking speed.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_Img6.webp",
    tag: "⚡ Sky Glide",
    path: "/zipline",
  },
  {
    id: 6,
    name: "Stays",
    description: "Unwind in cozy cabins nestled in nature's lap.",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Home%20Page/sliding_img2.webp",
    tag: "🏕️ Nature Retreat",
    path: "/stays",
  },
];

// Extract SlideContent to a separate memoized component
const SlideContent = memo(({ item, isActive }) => {
  return (
    <>
      <img
        src={item.image}
        alt={item.name}
        fetchPriority={isActive ? "high" : "auto"}
        loading={isActive ? "eager" : "lazy"}
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform"
      />
      
      {/* Text content with optimized animations */}
      <div className="absolute top-1/2 left-8 md:left-20 transform -translate-y-1/2 text-white z-10">
        <h2
          className={`text-xl md:text-4xl font-bold uppercase transition-all duration-700 will-change-transform ${
            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {item.name}
        </h2>
        <p
          className={`text-sm md:text-base mt-2 mb-4 max-w-md transition-all duration-700 delay-150 will-change-transform ${
            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {item.description}
        </p>
        
        <Link
          to={item.path}
          className={`inline-block px-4 py-2 bg-white text-black hover:bg-orange-600 hover:text-white rounded transition-all duration-700 delay-300 will-change-transform ${
            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          aria-label={`Learn more about ${item.name}`}
        >
          See More
        </Link>
      </div>
      
      {/* Tag with optimized animations */}
      <div
        className={`absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1.5 rounded-full shadow-lg border border-white/30 z-10 transition-all duration-700 delay-500 will-change-transform ${
          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        {item.tag}
      </div>
      
      <div className="absolute inset-0 bg-black/30 z-0" />
    </>
  );
});

// Main ImageSlider component
const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  
  // Preload images efficiently
  useEffect(() => {
    // Preload current and next images for smoother transitions
    const preloadImages = () => {
      const currentIndex = index;
      const nextIndex = (index + 1) % items.length;
      
      [currentIndex, nextIndex].forEach(i => {
        const img = new Image();
        img.src = items[i].image;
      });
    };
    
    preloadImages();
  }, [index]);
  
  // Auto-slide with optimized transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setIsTransitioning(false);
      }, 300); // Short delay to allow transition to start
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle slide change with useCallback
  const goToSlide = useCallback((newIndex) => {
    if (isTransitioning || newIndex === index) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  }, [index, isTransitioning]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToSlide((index - 1 + items.length) % items.length);
      } else if (e.key === "ArrowRight") {
        goToSlide((index + 1) % items.length);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToSlide, index]);
  
  return (
    <div
      className="w-full overflow-hidden relative josefin-sans"
      ref={sliderRef}
      aria-roledescription="carousel"
      aria-label="Adventure activities slideshow"
    >
      {/* Side Glows - optimized with will-change */}
      <div className="absolute top-0 left-0 h-full w-4 z-30 bg-gradient-to-r from-orange-400/40 to-transparent blur-lg pointer-events-none will-change-opacity" />
      <div className="absolute top-0 right-0 h-full w-4 z-30 bg-gradient-to-l from-orange-400/40 to-transparent blur-lg pointer-events-none will-change-opacity" />
      
      {/* Slider Container */}
      <div className="w-full h-[400px] md:h-[600px] relative">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out will-change-transform ${
              i === index
                ? "opacity-100 translate-x-0 z-20"
                : "opacity-0 translate-x-full z-10"
            }`}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}: ${item.name}`}
          >
            <SlideContent item={item} isActive={i === index} />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots with improved accessibility */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30" 
        role="tablist"
        aria-label="Slide navigation"
      >
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}: ${items[i].name}`}
            aria-selected={i === index}
            role="tab"
            tabIndex={i === index ? 0 : -1}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ImageSlider);