import { useEffect, useRef, useState } from "react";
import "./Rafting.css";

const AdventureAltHero = () => {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="hero-container relative overflow-hidden">
      {/* 🎥 Slow Zoom BG Image */}
      <img
        src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Hero_img.webp"
        alt="Group enjoying rafting adventure in Rishikesh"
        className="hero-bg"
        loading="lazy"
        fetchPriority="high"
      />

      {/* 🌌 Gradient Overlay */}
      <div className="hero-overlay" aria-hidden="true"></div>

      {/* 💥 Cinematic Entry Text */}
      <div
        className={`hero-text transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <h1 className="text-white text-6xl md:text-8xl xl:text-9xl font-kalnia font-medium drop-shadow-xl">
            Rafting
          </h1>
          <p className="text-white text-lg md:text-2xl mt-3 drop-shadow-md josefin-sans">
            Paddle through adrenaline. Ride the rapids of Shivpuri. Discover the
            Ganga like never before.
          </p>
        </div>
      </div>

      {/* 🌊 Animated Waves Behind Text */}
      <div
        className={`waves transition-all duration-1000 delay-200 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        aria-hidden="true"
      ></div>

      {/* 🌊 Wave SVG Foreground */}
      <div
        className={`wave-svg transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        role="presentation"
        aria-hidden="true"
      >
        <svg
          className="block w-full h-[100px] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fafafa" />
              <stop offset="100%" stopColor="#B2EBF2" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AdventureAltHero;
