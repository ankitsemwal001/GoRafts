import { useRef, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import './Zipline.css';

// Lazy load components that aren't immediately visible
const ImageSlider = lazy(() => import("./slider"));
const Feedback = lazy(() => import("../../components/Feedback"));
const Form = lazy(() => import("../../components/form/Form"));

// Extract Hero Section to a memoized component
const HeroSection = memo(({ scrollToBottom }) => {
  const handleBookNow = useCallback(() => {
    window.open(
      "https://wa.me/7078287331?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20rafting%20packages",
      "_blank"
    );
  }, []);

  return (
    <section
      className="relative w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-20 pb-32 overflow-hidden bg-cover bg-center animate-hero-fade-zoom"
      style={{
        backgroundImage: `url(https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/hero_img.webp)`,
      }}
    >
      {/* Preload hero image */}
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/hero_img.webp"
        as="image"
      />
      
      {/* Title */}
      <h1 className="text-white text-4xl sm:text-6xl font-semibold font-kalnia drop-shadow-lg leading-tight z-10 opacity-0 animate-slide-up [animation-delay:0.3s]">
        Feel the Freedom, <br /> Fly Above Rishikesh
      </h1>
      
      {/* Subtitle */}
      <p className="max-w-2xl text-lg sm:text-2xl text-white font-medium mt-6 mb-8 z-10 opacity-0 animate-slide-up [animation-delay:0.6s]">
        Experience the thrill of ziplining over lush valleys and mighty ganga in Shivpuri.
      </p>
      
      {/* Book Now Button */}
      <button
        onClick={handleBookNow}
        className="relative px-10 py-3 text-white font-bold rounded-full shadow-xl bg-gradient-to-r from-green-500 to-emerald-600 overflow-hidden transition-all duration-700 transform group hover:scale-110 hover:-rotate-1 z-10 opacity-0 animate-slide-up [animation-delay:0.9s]"
        aria-label="Book zipline adventure"
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>
        {/* Glow on Hover */}
        <span className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-125 group-hover:blur-2xl transition-all duration-700"></span>
        {/* Button Text */}
        <span className="relative z-10 tracking-wide group-hover:tracking-widest group-hover:animate-pulse">
          WhatsApp Us
        </span>
      </button>
      
      {/* Scroll Button */}
      <div className="mt-12 z-10">
        <button
          onClick={scrollToBottom}
          className="bg-orange-300 text-white p-4 rounded-full text-2xl shadow-lg transition-all duration-700 hover:bg-orange-500 hover:rotate-[360deg] hover:scale-150 hover:shadow-2xl hover:animate-bounce"
          aria-label="Scroll to next section"
        >
          ↓
        </button>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#FDF7EC] z-10" />
    </section>
  );
});

// Extract Mid Section to a memoized component
const MidSection = memo(() => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-slide");
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full px-6 py-40 overflow-hidden font-josefin">
      {/* Left Trapezoid */}
      <div
        className="absolute -left-24 top-[10%] w-[80vw] max-w-[550px] h-[300px] z-0 opacity-0 blur-sm bg-teal-500 animate-trapezoid-left"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          transform: "rotate(18deg)",
        }}
      />
      {/* Right Trapezoid */}
      <div
        className="absolute -right-24 bottom-[10%] w-[80vw] max-w-[550px] h-[300px] z-0 opacity-0 blur-sm bg-teal-500 animate-trapezoid-right"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        }}
      />
      {/* Paragraphs Section */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        {/* Zipline / Paragliding */}
        <div className="text-left w-full md:w-[70%] opacity-0 animate-fade-left reveal">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            Soar through the skies with an electrifying{" "}
            <span className="text-teal-600 font-bold">zipline</span> across the
            majestic Ganga or experience the thrill of{" "}
            <span className="text-teal-600 font-bold">paragliding</span> over the
            lush Himalayan foothills. Rishikesh offers you adrenaline from the sky,
            with panoramic views that'll leave you breathless.
          </p>
        </div>
        {/* Rafting / Rishikesh Vibe */}
        <div className="text-right w-full md:w-[70%] ml-auto opacity-0 animate-fade-right reveal [animation-delay:0.2s]">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            Ride the wild rapids with{" "}
            <span className="text-teal-600 font-bold">white water rafting</span>{" "}
            that made Rishikesh a global thrill destination. From Grade I to Grade
            IV rapids, the Ganga challenges you to conquer it. Combine this with
            serene sunsets and a spiritual vibe that's uniquely Rishikesh.
          </p>
        </div>
        {/* Accommodations / Local Experience */}
        <div className="text-left w-full md:w-[70%] opacity-0 animate-fade-left reveal [animation-delay:0.4s]">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            After your adventures, unwind in our cozy{" "}
            <span className="text-teal-600 font-bold">accommodations</span> ranging
            from riverside tents to boutique cottages. Wake up to the sound of the
            Ganga and fresh mountain air. The perfect mix of comfort and adventure
            in the heart of Rishikesh.
          </p>
        </div>
      </div>
    </div>
  );
});

// Extract Adventure Section to a memoized component
const AdventureSection = memo(() => {
  const handleBookNow = useCallback(() => {
    window.open(
      "https://wa.me/7078287331?text=Hi%2C%20I%20want%20to%20book%20a%20rafting%20tour!",
      "_blank"
    );
  }, []);

  return (
    <section className="w-full px-4 py-16 sm:py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row gap-14 lg:gap-20 items-center text-center lg:text-left">
        {/* Text Content */}
        <div className="w-full flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black leading-snug">
            Zipline Through Nature's Heart
          </h2>
          <div className="flex justify-center lg:justify-start px-4">
            <div className="max-w-md">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                Zipline
              </h3>
              <p className="text-black/80 mb-4">
                Experience the thrill of gliding over canopies, cliffs, and sparkling rivers. Our Rishikesh zipline adventure offers unmatched aerial views and pure excitement.
              </p>
              <h1 className="mt-5 mb-5"><b>Special Discount for Students : ₹1800 /-</b></h1>
              <button
                onClick={handleBookNow}
                className="relative inline-block px-6 py-3 font-semibold text-black group overflow-hidden rounded-full transition-transform duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                aria-label="Book zipline adventure"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 transition-opacity duration-500 group-hover:opacity-80"></span>
                <span className="absolute inset-0 w-full h-full -translate-x-full bg-white/20 blur-sm group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="absolute inset-0 rounded-full border border-black opacity-0 group-hover:opacity-100 transition duration-500"></span>
                <span className="relative z-10">Book</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Image Group */}
        <div className="flex flex-wrap justify-center gap-6 lg:w-auto">
          {/* Zipline image */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 transform rotate-6">
            <div className="absolute inset-0 rounded-2xl bg-black scale-105 translate-x-2 translate-y-2 z-0" />
            <img
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img07.webp"
              loading="lazy"
              alt="Zipline adventure in Rishikesh"
              className="relative w-full h-full object-cover rounded-2xl z-10 border-4 border-black"
              width="256"
              height="256"
            />
          </div>
          {/* Kayaking image */}
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 transform -rotate-6">
            <div className="absolute inset-0 rounded-2xl bg-black scale-105 translate-x-2 translate-y-2 z-0" />
            <img
              src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img08.webp"
              loading="lazy"
              alt="Kayaking in Rishikesh"
              className="relative w-full h-full object-cover rounded-2xl z-10 border-4 border-black"
              width="256"
              height="256"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

// Extract Ganga Zipline Section to a memoized component
const GangaZiplineSection = memo(() => {
  return (
    <div className="px-6 py-12 md:px-16 josefin-sans text-gray-800">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-pink-500">
            Ganga Zipline Adventure
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Experience the thrill of flying above the beautiful ganga maa in Rishikesh at 40-50 km/h speeds. 
            we asure you a safe and exciting adventure with our solid equipments and trained staff and with the blessings of Mother Ganga.
          </p>
          
          {/* Book Now Button */}
          <a
            href="https://wa.me/7078287331?text=Hi!%20I%20want%20to%20book%20the%20trip%20for%20%E2%82%B91,499.%20Please%20share%20the%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button 
              className="px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-pink-500 rounded-full shadow-lg relative overflow-hidden group mx-auto transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              aria-label="Book Ganga zipline adventure for ₹2000"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book Now – ₹2000 Only
              </span>
              {/* Hover Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>
          </a>
        </div>
        
        {/* Image Grid */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img09.webp"
                loading="lazy"
                alt="Zipline aerial view over Ganga river"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                width="300"
                height="300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs font-semibold text-white/90">150 meter's above from Ganga ji</span>
                <span className="text-[0.65rem] text-amber-300 mt-0.5">Breathtaking Views</span>
              </div>
            </div>
            {/* Secondary Image */}
            <div className="relative aspect-square w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] mx-auto overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all group">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Zipline%20Page/zipline_img05.webp"
                loading="lazy"
                alt="Zipline platform in Rishikesh"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out will-change-transform"
                width="300"
                height="300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs font-semibold text-white/90">750 meter's in Length</span>
                <span className="text-[0.65rem] text-amber-300 mt-0.5">Adrenaline Rush</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Main Zipline component
const Zipline = () => {
  const secondSectionRef = useRef(null);
  
  const scrollToBottom = useCallback(() => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[#fafafa] to-[#FFF5E4] josefin-sans">
      {/* Hero Section */}
      <HeroSection scrollToBottom={scrollToBottom} />
      
      {/* Mid Section */}
      <div ref={secondSectionRef}>
        <MidSection />
      </div>
      
      {/* Image Slider with lazy loading */}
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading gallery...</div>}>
        <ImageSlider />
      </Suspense>
      
      {/* Adventure Section */}
      <AdventureSection />
      
      {/* Ganga Zipline Section */}
      <GangaZiplineSection />
      
      {/* Lazy-loaded components */}
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading feedback...</div>}>
        <Feedback />
      </Suspense>
      
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading form...</div>}>
        <Form
          boxClass="bg-gradient-to-b from-[#fafafa] to-[#FFF5E4]"
          headingClass="text-black"
          buttonClass="bg-[#E26024] hover:bg-[#E26024]"
          focusClass="focus:outline-[#E26024]"
        />
      </Suspense>
    </div>
  );
};

export default memo(Zipline);