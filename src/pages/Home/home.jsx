"use client";
import { lazy, Suspense, useState, useEffect, useCallback, memo, useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGES, PICS, CARDS, YOUTUBE_VIDEOS, PARAGRAPH_TEXTS } from "../../const";
import HighlightsStats from "./sample";
import Feedback from "../../components/Feedback";
import CertificateMarquee from "../../components/certificate";
import "./home.css";

// Lazy load components that aren't immediately visible
const ImageSlider = lazy(() => import("./imageslider"));

// Define CSS animation keyframes in JS to avoid missing CSS errors
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  .animate-fade-up {
    animation: fadeUp 0.8s ease forwards;
  }
  .animate-fadeIn {
    animation: fadeIn 0.8s ease forwards;
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease forwards;
  }
  .animate-float-slow {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-fast {
    animation: float 4s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

// Memoize the hero slider to prevent unnecessary re-renders
const ImageSliderBox = memo(() => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  
  // Auto-slide with cleanup
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prevIndex) => (prevIndex + 1) % IMAGES.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  // Scroll button with useCallback
  const handleScrollClick = useCallback(() => {
    const target = document.getElementById("second-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);
  
  // Preload the next image for smoother transitions
  useEffect(() => {
    if (IMAGES.length === 0) return;
    
    const nextIndex = (current + 1) % IMAGES.length;
    const img = new Image();
    img.src = IMAGES[nextIndex];
  }, [current]);
  
  return (
    <div className="relative w-full h-[93vh] overflow-hidden bg-black">
      {/* Images with optimized loading */}
      {IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1600ms] ease-in-out ${
            index === current ? "opacity-100 scale-100 z-30" : "opacity-0 scale-105 z-20"
          }`}
          style={{ 
            willChange: 'transform, opacity',
            transform: index === current ? 'scale(1)' : 'scale(1.05)'
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-40" />
      
      {/* Text content */}
      <div className="absolute inset-0 z-50 text-white text-center px-4 flex flex-col 
                      items-center justify-start sm:justify-center md:justify-center 
                      pt-43 md:pt-0">
        <h1 className="reveal-text text-3xl md:text-6xl font-medium font-kalnia drop-shadow-xl leading-tight opacity-0 translate-y-[30px] animate-fade-up">
          GoRafts.. <br /> Beyond Limits. Into the Wild.
        </h1>
        <p className="reveal-text text-base md:text-xl mt-3 md:mt-4 max-w-2xl text-white/80 opacity-0 translate-y-[20px] animate-fade-up delay-200">
          Trek. Raft. Jump. Explore. The adventure of a lifetime starts here.
        </p>
        <button
          onClick={handleScrollClick}
          className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base md:text-lg rounded-xl shadow-lg shadow-orange-300/30 transition-transform duration-500 hover:scale-105 animate-fade-up delay-500 cursor-pointer"
        >
          Start Your Journey
        </button>
      </div>
    </div>
  );
});

// Memoize the stays section with mobile optimizations
const StaysSection = memo(() => {
  // Use useRef to prevent recreation on each render
  const stays = useRef([
    {
      title: "Luxury A.C Cottages",
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_1.webp",
    },
    {
      title: "Coller Cottages",
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_2.webp",
    },
    {
      title: "Adventure Rive Side Camp / Cottages",
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/stays_cottage_1.webp",
    },
  ]).current;
  
  return (
    <div>
      <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
        Stays
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 justify-center">
        {stays.map((stay, i) => (
          <div
            key={stay.title}
            className="group w-full flex flex-col items-center opacity-0 translate-y-10 animate-fadeInUp"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
              <img
                src={stay.img}
                alt={stay.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                style={{ willChange: 'transform' }}
              />
              <Link to="/stays">
                <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400 cursor-pointer">
                  More
                </button>
              </Link>
            </div>
            <p className="mt-2 text-lg opacity-80">{stay.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

// Memoize the packages section with mobile optimizations
const PackagesSection = memo(() => {
  return (
    <div>
      <h2 className="text-3xl font-semibold josefin-sans mb-6 text-center md:text-left">
        Packages
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 justify-center">
        {CARDS.map((item, index) => (
          <div
            key={item.label}
            className="group w-full flex flex-col items-center opacity-0 translate-y-10 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/3] bg-gray-100 transition-all duration-500 group-hover:shadow-xl">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                style={{ willChange: 'transform' }}
              />
              <Link to={item.link}>
                <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-2 text-sm rounded-md shadow transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-400 cursor-pointer">
                  More
                </button>
              </Link>
            </div>
            <p className="mt-2 text-lg font-medium opacity-80">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

// Memoize the video section with mobile optimizations
const VideoSection = memo(() => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 animate-fadeInUp">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Experience the <u>Adventure</u>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {YOUTUBE_VIDEOS.slice(0, 4).map((yt, i) => (
            <div
              key={`video-${i}`}
              className="overflow-hidden rounded-2xl shadow-lg bg-black transition-transform hover:scale-[1.03] mx-auto
                        max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[300px] w-full"
            >
              <div className="aspect-[9/16] w-full"> {/* 👈 shorts layout */}
                <iframe
                  src={yt}
                  className="w-full h-full rounded-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Adventure video ${i + 1}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-2xl mx-auto text-gray-700">
          These are genuine clips captured from our actual trips — get ready to picture yourself on the water with us!
        </p>
      </div>
    </section>
  );
});


// Main Home component with mobile optimizations
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const resizeTimeoutRef = useRef(null);
  
  // Check if mobile on mount and resize with debounce
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(checkMobile, 100);
    };
    
    checkMobile();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <section className="home josein-sans bg-gradient-to-r from-[#ffffff] via-[#f6fbf9] to-[#e9f5f1]">
      {/* Hero Slider */}
      <ImageSliderBox />
      
      {/* Paragraph Section */}
      <div id="second-section" className="md:mt-24 py-10 px-4 mt-10 text-center josefin-sans text-gray-800">
        <div className="max-w-4xl mx-auto space-y-4 text-base md:text-lg leading-relaxed">
          {PARAGRAPH_TEXTS.map((text, index) => (
            <p key={index} className="opacity-0 translate-y-6 animate-fade-up" style={{ animationDelay: `${index * 0.25}s` }}>
              {text}
            </p>
          ))}
        </div>
      </div>
      
      {/* Adventure Pulse Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center md:mt-32 mt-10 px-3 md:px-10 xl:px-24">
        {/* Text (left side) */}
        <div className="px-2 md:px-6 xl:px-10 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-800 mb-2">
            GoRafts
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-3">
            Based in Shivpuri, Rishikesh — India's Adventure Capital
          </p>
          {/* Mobile text */}
          <p className="text-gray-700 leading-relaxed text-[1rem] block md:hidden">
            <span className="font-semibold">GoRafts</span> brings adrenaline to life with rafting, hiking, kayaking, and more.
          </p>
          {/* Desktop text */}
          <p className="text-gray-700 leading-relaxed text-[1rem] hidden md:block">
            <span className="font-semibold">GoRafts</span> is your adventure base in Shivpuri, <strong>Rishikesh</strong> — a hotspot for thrill-seekers across India.
            We have been helping thousands of customers experience their first memorable adventure since <strong><em>1997</em></strong>. <br />
            We have completed over <strong>4000+</strong> successful rafting trips on the Ganges, and our expert guides ensure safety and fun for all skill levels. <br />
          </p>
        </div>
        {/* Images (right side) - Optimized for mobile */}
        <div className="flex justify-center md:justify-end items-center gap-2 sm:gap-4 flex-row flex-nowrap">
          {PICS.slice(0, isMobile ? 2 : PICS.length).map((src, i) => (
            <img
              key={i}
              src={src}
              loading="lazy"
              alt={`Adventure activity ${i + 1}`}
              className={`w-[150px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg ${
                i % 2 === 0 ? "animate-float-slow" : "animate-float-fast"
              }`}
              style={{ willChange: 'transform' }}
            />
          ))}
        </div>
      </div>
      
      {/* Stats */}
      <HighlightsStats />
      
      {/* Video Section */}
      <VideoSection />
      
      <CertificateMarquee />
      
      {/* Cards Section */}
      <section className="py-16 px-4 md:px-10 xl:px-24 josefin-sans space-y-20">
        <PackagesSection />
        <StaysSection />
      </section>
      
      {/* Image slider with lazy loading */}
      <section className="mt-10">
        <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading gallery...</div>}>
          <ImageSlider />
        </Suspense>
      </section>
      
      {/* Feedback component */}
      <Feedback />
    </section>
  );
};

export default memo(Home);