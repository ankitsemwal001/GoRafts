import { useRef, useState, useEffect, useCallback, memo } from 'react';
import Form from '../../components/form/Form';
import './Gallery.css';
import GallerySection from './image';
import "react-lazy-load-image-component/src/effects/blur.css";

// Extract constants to avoid inline definitions
const ACTIVITY_IMAGES = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_3.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_4.webp",
];

const CENTER_IMAGE = "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_5.webp";

const WHY_CHOOSE_US_IMAGES = [
  { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_6.webp", className: "rounded-br-3xl" },
  { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_7.webp", className: "rounded-bl-3xl" },
  { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_8.webp", className: "rounded-tr-3xl" },
  { src: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_9.webp", className: "rounded-tl-3xl" }
];

const CENTER_IMAGE_2 = "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Gallery/rafting/gallery_10.webp";

const YOUTUBE_VIDEO_IDS = ["OsEk0y4a2XU", "fPN1amZokEw", "2BY0nQNL9-Y", "L3yRmPJ9YGw"];

const FEATURES = [
  { 
    icon: "👥", 
    gradient: "from-orange-400 to-yellow-400",
    title: "Expert Guides", 
    description: "Certified professionals with decades of experience" 
  },
  { 
    icon: "📍", 
    gradient: "from-teal-400 to-green-400",
    title: "Premium Locations", 
    description: "Access to exclusive wilderness destinations" 
  },
  { 
    icon: "⭐", 
    gradient: "from-green-400 to-yellow-300",
    title: "Safety First", 
    description: "Industry-leading safety protocols and equipment" 
  }
];

// Optimized Image Grid Component
const ImageGrid = memo(({ images, centerImage, centerImageClass = "w-36 h-36" }) => (
  <div className="flex-1 relative grid grid-cols-2 gap-[2px] w-full max-w-md bg-white rounded-3xl p-[2px] animate-fade-in">
    {images.map((src, i) => (
      <div
        key={i}
        className={`overflow-hidden shadow-lg h-48 md:h-64 ${
          i === 0
            ? "rounded-br-3xl"
            : i === 1
            ? "rounded-bl-3xl"
            : i === 2
            ? "rounded-tr-3xl"
            : "rounded-tl-3xl"
        }`}
      >
        <img
          src={src}
          alt={`img${i}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    ))}
    {/* Center Circle */}
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${centerImageClass} rounded-full overflow-hidden border-[2px] border-white shadow-xl z-10 bg-white animate-fade-in`}>
      <img
        src={centerImage}
        alt="center"
        loading="eager"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
));

// Optimized Video Grid Component
const VideoGrid = memo(({ videoIds }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {videoIds.map((id, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-2xl shadow-lg bg-black hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300 cursor-pointer aspect-[9/16]"
        onClick={(e) => {
          e.currentTarget.innerHTML = `
            <iframe
              src="https://www.youtube.com/embed/${id}?autoplay=1&mute=1&modestbranding=1&rel=0"
              class="w-full h-full rounded-2xl"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>
          `;
        }}
      >
        {/* Thumbnail */}
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg transition-transform duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8 md:w-10 md:h-10 ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </div>
));

// Optimized Feature Item Component
const FeatureItem = memo(({ icon, gradient, title, description }) => (
  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 items-center text-center sm:text-left gap-2">
    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xl`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-black text-lg">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
));

// Custom hook for intersection observer
const useIntersectionObserver = (refs, options = {}) => {
  const [visibleElements, setVisibleElements] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    refs.forEach(ref => {
      if (ref.current) {
        ref.current.dataset.id = ref.current.id || `element-${Math.random().toString(36).substr(2, 9)}`;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refs, options]);

  return visibleElements;
};

const Gallery = () => {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const bottomRef = useRef(null);
  const tutanRef = useRef(null);

  // Use single intersection observer for multiple elements
  const visibleElements = useIntersectionObserver([ref, headingRef, paraRef]);
  
  // Extract visibility states
  const isVisible = !!visibleElements[ref.current?.dataset.id];
  const showHeading = !!visibleElements[headingRef.current?.dataset.id];
  const showPara = !!visibleElements[paraRef.current?.dataset.id];

  // Memoize scroll function
  const scrollToBottom = () => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='bg-gradient-to-r from-[#ffffff] to-[#f1daff] pt-20 josefin-sans'>
      {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 -mt-15">

          {/* Left Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight heading-animated fade-in">
              Find Your Adventure.<br /> Find Yourself. <br /> In Rishikesh.
            </h1>
            <p className="text-gray-700 text-base md:text-lg max-w-lg mx-auto md:mx-0 fade-in fade-in-delay-200">
              Experience the ultimate adrenaline rush with white-water rafting,
              bungee jumping, kayaking, and trekking in the heart of Rishikesh.
              Whether you're chasing rapids or scaling trails, every moment here
              is packed with energy, nature, and unforgettable memories.
            </p>

            <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4 fade-in fade-in-delay-400">
              {/* Book Now Button */}
              <a href="https://wa.me/7078287331?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <button className="relative group cursor-pointer overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-transform duration-300 hover:scale-105 w-full md:w-auto">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700"></span>
                  <span className="relative z-10">Book Now</span>
                </button>
              </a>

              {/* View Gallery Button (hidden on mobile) */}
              <button
                onClick={() => tutanRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="hidden md:inline-block relative cursor-pointer group overflow-hidden bg-gradient-to-r from-blue-700 to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition duration-700 scale-125"></span>
                <span className="relative z-10">View Gallery 🖼️</span>
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <ImageGrid images={ACTIVITY_IMAGES} centerImage={CENTER_IMAGE} />
        </div>

  
      {/* Scroll Button */}
        <div className="hidden sm:flex justify-center sm:mt-1 mt-12 z-10">
          <button
            onClick={scrollToBottom}
            className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg
            transition-all duration-700
            hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150
            hover:shadow-2xl hover:animate-bounce"
          >
            ↓
          </button>
        </div>


      {/* Scroll Target */}
      <div ref={bottomRef} className="h-[300px] w-full bg-transparent" />
      
      {/* Description Section */}
      <div
        ref={ref}
        className={`max-w-5xl mx-auto -mt-60 px-4 py-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
          Discover the pulse of Rishikesh through an unforgettable journey of
          adventure. From heart-racing{" "}
          <span className="text-blue-700 font-medium">white-water rafting</span>{" "}
          on the Ganges, scenic{" "}
          <span className="text-blue-700 font-medium">treks</span> through the
          Himalayas, thrilling{" "}
          <span className="text-blue-700 font-medium">kayaking</span> escapes, to
          the extreme rush of{" "}
          <span className="text-blue-700 font-medium">bungee jumping</span> — this
          gallery captures the raw beauty and adrenaline of nature and sport
          colliding in one epic destination.
        </p>
      </div>
      
      {/* Video Gallery Section */}
      <section className="relative josefin-sans md:mt-25 py-12 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
          <h2
            ref={headingRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold font-josefin text-black transition-all duration-700 ${
              showHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            Experience the Adventure
          </h2>
          
          <VideoGrid videoIds={YOUTUBE_VIDEO_IDS} />
          
          <p
            ref={paraRef}
            className={`text-sm sm:text-base max-w-2xl mx-auto text-gray-700 font-josefin leading-relaxed px-2 transition-all duration-700 delay-300 ${
              showPara ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            These real clips showcase our adventure experiences – live from
            Rishikesh's whitewater. Play, pause, and feel the adrenaline.
          </p>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <div className="w-full px-4 -mt-10 md:mt-10 py-10 md:py-20 overflow-hidden josefin-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          {/* Mobile Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black md:hidden mb-4 transition-transform duration-700 transform hover:scale-105">
            WHY ADVENTURERS <br /> <span className="text-green-600">CHOOSE US</span>
          </h2>
          
          {/* Image Grid */}
          <div className="flex-1 relative grid grid-cols-2 gap-[2px] w-full max-w-md mx-auto md:ml-20 bg-white rounded-3xl p-[2px]">
            {WHY_CHOOSE_US_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden shadow-lg h-44 md:h-56 ${img.className} transition-transform duration-500 hover:scale-105`}
              >
                <img 
                  src={img.src} 
                  alt={`img${i + 1}`} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            ))}
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-white transition-transform duration-500 hover:scale-110">
              <img 
                src={CENTER_IMAGE_2} 
                alt="center" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className="flex-1 flex items-center justify-center">
            <div className="space-y-6 text-center md:text-left">
              {/* Desktop Heading */}
              <h2 className="text-3xl md:text-5xl font-extrabold hidden md:block text-black leading-tight transition-transform duration-700 transform hover:scale-105">
                WHY ADVENTURERS <br /> <span className="text-green-600">CHOOSE US</span>
              </h2>
              
              <p className="text-base md:text-lg text-black leading-relaxed max-w-xl font-medium">
                With over 15 years of wilderness expertise, we've guided thousands of adventurers through unforgettable journeys. Our certified guides, premium equipment, and commitment to safety ensure every expedition exceeds expectations.
              </p>
              
              <div className="space-y-6">
                {FEATURES.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon={feature.icon}
                    gradient={feature.gradient}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Section */}
      <section className="scroll -mt-25 sm:mt-8" 
        ref={tutanRef}>
        <GallerySection />
      </section>
      
      <Form
        boxClass="bg-gradient-to-b from-[#ffffff] to-[#f1daff]"
        headingClass="text-[#000000]"
        buttonClass="bg-[#AA336A] hover:bg-[#E75480]"
        focusClass="focus:outline-[#00786F]"
      />
    </section>
  );
};

export default Gallery;