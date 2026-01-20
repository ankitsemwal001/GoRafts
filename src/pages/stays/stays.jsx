import styles from "./stays.module.css";
import React, { useRef, useEffect, useMemo, useCallback } from "react";
import Feedback from '../../components/Feedback';
import Form from '../../components/form/Form';
import CampingSlider from "./CampingSlider";
import CottageCards from "./card";

// Move data outside component to prevent recreation on renders
const marqueeItems = [
  'Cozy mountain stays', 'Wake up to sunrise views', 'Your perfect nature escape',
  'Comfort meets adventure', 'Luxury in the wild', 'Campfires & starry nights',
  'Peaceful jungle retreats', 'Stay close to the river', 'Escape. Relax. Reconnect.',
  'Rustic charm, modern comfort', 'Tranquil forest cabins', 'Adventure starts from your room',
  'Sleep under the stars', 'Hospitality in the hills', 'Your home in the Himalayas',
];

const imageGrid = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/mini_hero_img_1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/mini_hero_img_2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/mini_hero_img_3.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/mini_hero_img_4.webp",
];

const whatsappNumber = "7078287331";
const whatsappMessage = "Hello! I'm interested in booking a stay at your campsite in Rishikesh.";

function Stays() {
  const videoRef = useRef(null);

  // Optimize IntersectionObserver with useCallback
  const handleVideoIntersection = useCallback((entries) => {
    const video = videoRef.current;
    if (!video) return;
    
    if (entries[0].isIntersecting) {
      video.play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    } else {
      video.pause();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleVideoIntersection, {
      threshold: 0.5,
      rootMargin: '0px' // Added for better performance
    });
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [handleVideoIntersection]);

  // Memoize WhatsApp URL to prevent recreation
  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  }, []);

  return (
    <main className={styles.main}>
      <section className="relative text-gray-800">
        {/* Background Image with optimized animation */}
        <div
          className="absolute inset-0 bg-cover bg-center rounded-b-3xl will-change-transform"
          style={{
            backgroundImage: "url('https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_2.webp')",
          }}
        ></div>
        
        {/* Hero Content */}
        <div className="relative h-[70vh] md:h-[75vh] flex flex-col items-center justify-center text-center px-4 md:px-8 rounded-b-3xl">
          <div className="opacity-0 translate-y-10 animate-fade-in-up text-center">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-kalnia font-bold mb-3 md:mb-4 drop-shadow-sm text-white leading-snug">
              Your Peaceful Retreat.<br /> Cozy Camping by the Ganges.
            </h1>
            <p className="text-sm sm:text-base md:text-xl max-w-sm sm:max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-6 text-gray-100">
              Campfires, luxury tents, and starlit skies — your cozy escape into nature starts here.
            </p>
            
            {/* Optimized Book Now Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white rounded-full shadow-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transform transition-transform duration-300 hover:scale-105 active:scale-95 animate-fade-in-up delay-200"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 transition-opacity duration-500 hover:opacity-80"></span>
              <span className="relative z-10">Book Now</span>
            </a>
          </div>
        </div>
        
        {/* Optimized Image Grid */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5%] sm:bottom-[-10%] md:bottom-[-15%] z-20 
                    grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-[90%] sm:w-[80%] md:w-[70%] opacity-0 translate-y-10 animate-fade-in-up delay-300">
          {imageGrid.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                i < 2 ? "hidden md:block" : "block"
              }`}
            >
              <img
                src={src}
                alt={`Stay option ${i + 1}`}
                className="w-full h-36 sm:h-44 md:h-44 object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority={i < 2 ? "high" : "low"} // Prioritize loading of visible images
              />
            </div>
          ))}
        </div>
        
        {/* Optimized Animations */}
        <style jsx>{`
          @keyframes heroZoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .will-change-transform {
            will-change: transform;
            animation: heroZoom 1.5s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}</style>
      </section>
      
      {/* Optimized Marquee */}
      <div className="relative josefin-sans md:mt-42 overflow-hidden mt-20 py-6">
        <style jsx>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: flex;
            white-space: nowrap;
            animation: marqueeScroll 40s linear infinite;
            will-change: transform;
          }
        `}</style>
        
        <div className="animate-marquee text-black font-semibold text-2xl md:text-3xl gap-16 px-8">
          {marqueeItems.map((text, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500 hover:scale-105 transition-transform duration-500"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
     
      {/* Components */}
      <CottageCards />
      <section className="-mt-40 md:-mt-25">
        <CampingSlider />
      </section>
      
      <section className="-mt-25">
        <Feedback />
      </section>
      
      <Form 
      boxClass="bg-gradient-to-b from-white via-amber-50 to-orange-100"
      buttonClass="bg-black hover:bg-[#E26024]"/>
    </main>
  );
}

export default React.memo(Stays); 