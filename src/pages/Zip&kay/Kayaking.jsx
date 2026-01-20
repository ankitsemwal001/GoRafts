import { memo, useCallback, useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { lazy, Suspense } from "react";
import "./Zipline.css";

// Lazy load components that aren't immediately visible
const Feedback = lazy(() => import("../../components/Feedback"));
const Form = lazy(() => import("../../components/form/Form"));

// Move static data outside component to prevent recreation on each render
const STATIC_DATA = {
  bgHero: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/kayking%20page/hero_img1.webp",
  img1: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/kayking%20page/kayking_1.webp",
  img2: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/kayking%20page/kayking_2.webp",
  videoSrc: "https://videos.pexels.com/video-files/2286307/2286307-hd_1280_720_24fps.mp4",
  whatsappUrl: "https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour",
  whatsappUrlCertification: "https://wa.me/917078287331"
};

// Extract Hero Section to a memoized component
const HeroSection = memo(() => {
  const handleBookNow = useCallback(() => {
    window.open(STATIC_DATA.whatsappUrl, '_blank');
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden text-white animate-fade-in">
      {/* Preload hero image */}
      <link
        rel="preload"
        href={STATIC_DATA.bgHero}
        as="image"
      />
      
      {/* Background with optimized loading */}
      <img
        src={STATIC_DATA.bgHero}
        alt="Kayaking adventure in Shivpuri, Rishikesh"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-zoom-out will-change-transform"
        fetchPriority="high"
        loading="eager"
      />
      
      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-kalnia opacity-0 animate-slide-up [animation-delay:0.5s]">
          Discover the Thrill of Kayaking in <br /> Shivpuri, Rishikesh
        </h1>
        <p className="text-white/90 text-sm md:text-lg max-w-2xl mb-6 josefin-sans opacity-0 animate-slide-up [animation-delay:0.8s]">
          Glide through the Ganges with breathtaking Himalayan views. Your adventure
          begins where the river calls.
        </p>
        <button
          onClick={handleBookNow}
          className="opacity-0 animate-slide-up [animation-delay:1.1s] bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-110 hover:shadow-[0_0_28px_rgba(234,88,12,0.6)] active:scale-95"
          aria-label="Book kayaking tour"
        >
          📩 Book Now
        </button>
      </div>
    </section>
  );
});

// Extract ScrollButton to a memoized component
const ScrollButton = memo(() => {
  const handleScroll = useCallback(() => {
    const element = document.getElementById("next-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <button
      onClick={handleScroll}
      className="mx-auto mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#E0F7FA] hover:bg-[#C5EEF4] text-black shadow-lg animate-bounce-slow"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-6 h-6" />
    </button>
  );
});

// Extract AdventureSection to a memoized component
const AdventureSection = memo(() => {
  const handleBookNow = useCallback(() => {
    window.open(STATIC_DATA.whatsappUrlCertification, '_blank', 'noopener noreferrer');
  }, []);

  return (
    <section id="next-section" className="w-full px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Images with optimized loading */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={STATIC_DATA.img1}
            alt="Kayaking adventure in the Ganges river"
            loading="lazy"
            className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[320px] aspect-square object-cover rounded-2xl rotate-[18deg] md:rotate-[22deg] shadow-xl will-change-transform"
            width="320"
            height="320"
          />
          <img
            src={STATIC_DATA.img2}
            alt="Kayaking in Shivpuri, Rishikesh"
            loading="lazy"
            className="absolute w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px] aspect-square object-cover rounded-2xl rotate-[-16deg] md:rotate-[-20deg] translate-x-16 translate-y-16 sm:translate-x-20 sm:translate-y-20 md:translate-x-24 md:translate-y-24 lg:translate-x-32 lg:translate-y-24 shadow-lg will-change-transform"
            width="300"
            height="300"
          />
        </div>
        
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl mt-6 md:text-4xl font-bold font-josefin opacity-0 animate-slide-up [animation-delay:0.2s]">
            The Adventure Capital of India
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed opacity-0 animate-slide-up [animation-delay:0.5s]">
            Shivpuri, just a few kilometers upstream from Rishikesh, is known
            for its pristine natural beauty, powerful river currents, and
            serene Himalayan backdrop... <br />
            <br />
            Experience the thrill of kayaking on the <b>Ganga maa</b> with{" "}
            <b>
              <i>certified and expert guides</i>
            </b>{" "}
            who prioritize your safety and fun. <br />
            <br />
            You can also join our one-week{" "}
            <b>
              <u> Certification Course </u>
            </b>{" "}
            with expert teachers and guides who will help you to bring your
            own kayak in the <b> white water rapids. </b> <br />
          </p>
          <div className="pt-4 flex justify-center md:justify-start">
            <a
              href={STATIC_DATA.whatsappUrlCertification}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-10 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-95"
              aria-label="Book kayaking certification course"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

// Extract VideoSection to a memoized component with optimized video loading
const VideoSection = memo(() => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  
  const handleBookNow = useCallback(() => {
    window.open(STATIC_DATA.whatsappUrl, "_blank");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoLoaded) {
          setVideoLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoLoaded]);

  return (
    <section 
      ref={videoRef}
      className="relative sm:mt-50 w-full h-[70vh] overflow-hidden flex items-center justify-center px-4 text-black josefin-sans"
    >
      {videoLoaded ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster={STATIC_DATA.bgHero}
        >
          <source src={STATIC_DATA.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-teal-800 z-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-4">🚣</div>
            <p className="text-xl">Loading video...</p>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/25 z-10" />
      <div className="relative z-20 text-center max-w-2xl flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold mb-4">
          Ride the Rapids of Shivpuri
        </h1>
        <p className="text-sm md:text-base text-white leading-relaxed mb-8">
          Experience the ultimate rush on the Ganges with our thrilling kayaking adventure. Get ready to paddle, splash, and conquer the exhilarating rapids of Shivpuri.
        </p>
        <button
          onClick={handleBookNow}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center gap-2"
          aria-label="Book kayaking tour"
        >
          📩 Book Now
        </button>
      </div>
    </section>
  );
});

// Main Kayaking component
const Kayaking = () => {
  return (
    <section className="josefin-sans bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-100">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Scroll Button */}
      <ScrollButton />
      
      {/* Adventure Section */}
      <AdventureSection />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Lazy-loaded components */}
      <Suspense fallback={<div className="text-center py-10">Loading feedback...</div>}>
        <Feedback />
      </Suspense>
      
      <Suspense fallback={<div className="text-center py-10">Loading form...</div>}>
        <Form
          boxClass="bg-gradient-to-b from-white via-cyan-50 to-teal-100"
          headingClass="text-black"
          buttonClass="bg-blue-600 hover:bg-blue-700"
          focusClass="focus:outline-blue-500"
        />
      </Suspense>
    </section>
  );
};

export default memo(Kayaking);