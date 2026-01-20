import { Link } from "react-router-dom";
import React,  { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { lazy, Suspense } from 'react';
import './Rafting.css';

// Lazy load components
const GuidesSection = lazy(() => import("../Trek/guide"));
const Form = lazy(() => import('../../components/form/Form'));
const Expe = lazy(() => import('./Expe'));
const AdventureAltHero = lazy(() => import('./hero'));
const FAQSection = lazy(() => import('./faq'));

// Static data moved outside component
const marqueeItems = [
  'Scenic river views', 'Expert guides lead', 'Safe family fun', 'Top gear provided',
  'Memories await you', 'Thrill-packed journeys', 'Unleash your wild side',
  'Nature rollercoaster ride', 'Waves. Laughs. Memories.', 'Guided by river pros',
  'Unmatched river thrills', 'Where fun meets adrenaline', 'Dive into the excitement',
  'Breathtaking river trails', 'Experience. Explore. Enjoy.',
];

const dummyImages = [
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img2.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img3.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Memo_img4.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img1.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card3.webp",
  "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/card4.webp"
];
const Rafting = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Optimized intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Memoized scroll function
  const scrollToSection = useCallback(() => {
    document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Memoized image grid
  const imageGrid = useMemo(() => (
    <div
      ref={sectionRef}
      className={`mx-auto w-fit grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {dummyImages.map((src, i) => {
        const shapeClass =
          i % 4 === 0
            ? "rounded-full"
            : i % 4 === 1
            ? "rounded-2xl"
            : i % 4 === 2
            ? "rounded-[40%_60%_50%_50%/60%_40%_60%_40%]"
            : "rounded-full sm:rounded-[20%]";

        return (
          <div
            key={i}
            className={`p-[2px] sm:p-[3px] bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 ${shapeClass} ${
              i > 3 ? "hidden sm:block" : ""
            }`}
          >
            <div
              className={`overflow-hidden bg-white ${shapeClass}
                w-[140px] h-[140px]    /* Mobile */
                xs:w-[130px] xs:h-[130px] 
                sm:w-[150px] sm:h-[150px] 
                md:w-[180px] md:h-[180px] 
                lg:w-[200px] lg:h-[200px] 
                xl:w-[220px] xl:h-[220px]
                transition-transform hover:scale-105
                shadow-[0_3px_12px_rgba(0,0,0,0.1)]
                hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                duration-300 ease-out
              `}
            >
              <img
                src={src}
                alt={`Rafting adventure memory ${i + 1}`}
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover will-change-transform"
              />
            </div>
          </div>
        );
      })}
    </div>
  ), [isVisible]);

  // Rafting plans data
  const raftingPlans = useMemo(() => [
    {
      title: "Marine drive to shivpuri",
      description: "Come and feel the glowing arc of Marine Drive to the thrilling rapids of Shivpuri.",
      distance: "12 km",
      cost: "₹599",
      image: "card1.webp",
      link: "/rafting/shivpuri"
    },
    {
      title: "Shivpuri To Nim Beach",
      description: "From the thrilling rapids of Shivpuri to the calm banks of Nim Beach",
      distance: "16 km",
      cost: "₹799",
      image: "card2.webp",
      link: "/rafting/nim"
    },
    {
      title: "Marine Drive to Nim Beach",
      description: "Longer stretch with thrilling rapids and scenic views.",
      distance: "24 km",
      cost: "₹1200",
      image: "card3.webp",
      link: "/rafting/marine"
    },
    {
      title: "Kaudiala To Nim Beach",
      description: "The longest rafting stretch with extreme adventure thrills.",
      distance: "36 km",
      cost: "₹2400",
      image: "card4.webp",
      link: "/rafting/kodilyla"
    }
  ], []);

  // Booking cards data
  const bookingCards = useMemo(() => [
    {
      title: "Devprayag To Nim Beach (Rishikesh)",
      description: "on ganga river, perfect for families and beginners.",
      distance: "50 km",
      image: "card1.webp",
      message: "Hello, I want to book Marine Drive to Shivpuri rafting trip."
    },
    {
      title: "Koteshwar to Rishikesh",
      description: "on Bhagirathi river, ideal for thrill-seekers.",
      distance: "100 km",
      image: "card2.webp",
      message: "Hello, I want to book Shivpuri to Nim Beach rafting trip."
    },
    {
      title: "Bagwan to Rishikesh",
      description: "on alaknanda river, perfect for adventure lovers.",
      distance: "100 km",
      image: "card3.webp",
      message: "Hello, I want to book Marine Drive to Shivpuri (24 km) rafting trip."
    }
  ], []);

  return (
    <section className="bg-gradient-to-r from-[#fafafa] to-[#B2EBF2] relative">  
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading adventure...</div>}>
        <AdventureAltHero />
      </Suspense>
      
      <div className="py-20 px-4 md:mt-10 md:px-20 xl:px-40 relative text-black overflow-hidden">
        <div onClick={scrollToSection} className="absolute top-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer group">
          <div className="md:-mt-5 relative w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-xl overflow-hidden transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 active:scale-90 active:-rotate-12">
            <span className="text-white text-2xl z-10">↓</span>
            <div className="absolute inset-0 bg-blue-400 opacity-40 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 rounded-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl mt-3 xl:text-5xl josefin-sans md:text-left text-center font-bold mb-3 xl:mb-5 animate-fade-up">
              About Our Passion
            </h2>
            <p className="text-base md:text-lg xl:text-xl leading-relaxed text-gray-700 josefin-sans animate-fade-up [animation-delay:200ms]">
              Our passion flows with the river. We believe every splash tells a story and every current brings you closer to nature. Rafting is not just a sport for us—it's a journey of thrill, freedom, and connection. We aim to make every trip unforgettable, filled with laughter, courage, and breathtaking moments.
            </p>
          </div>
          
          <div className="relative w-full md:mt-30 h-[400px] md:h-[460px] xl:h-[530px]">
            <div className="absolute top-0 right-14 bg-white/20 backdrop-blur-lg rounded-3xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ring-2 ring-white ring-offset-4 ring-offset-blue-100 animate-fade-up [animation-delay:300ms]">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img1.webp"
                alt="Rafting adventure on river rapids"
                loading="lazy"
                decoding="async"
                className="w-80 h-52 md:w-96 md:h-60 xl:w-[420px] xl:h-[270px] object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-44 md:top-48 right-0 bg-white/20 backdrop-blur-lg rounded-3xl p-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)] ring-2 ring-white ring-offset-4 ring-offset-rose-100 animate-fade-up [animation-delay:600ms]">
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/About_img2.webp"
                alt="Group rafting experience with guides"
                loading="lazy"
                decoding="async"
                className="w-80 h-52 md:w-96 md:h-60 xl:w-[420px] xl:h-[270px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div id="next-section" className="mt-20" />
      </div>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading experiences...</div>}>
        <Expe />
      </Suspense>
      
      <div className="josefin-sans md:mt-12 overflow-hidden mt-9 py-3">
        <div className="flex whitespace-nowrap text-black font-medium text-3xl gap-12 px-6 animate-marquee">
          {Array(3).fill(marqueeItems).flat().map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
      <div className="sm:mt-15 mt-10 px-4 py-10 md:px-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold josefin-sans mb-12 
                      text-black tracking-tight relative text-center
                      opacity-0 translate-y-[-30px] animate-fadeInUp">
          Rafting Plans
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 sm:w-40 h-1.5 
                          bg-black rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-25">
          {raftingPlans.map((card, index) => (
            <div
              key={index}
              className="w-[85%] sm:w-full mx-auto bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col snap-start 
                        h-[400px] sm:h-[420px] md:h-[430px] 
                        group transition-transform duration-500 hover:scale-105 
                        opacity-0 translate-y-[80px] animate-fadeInCard"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-[65%] sm:h-[58%] overflow-hidden">
                <img
                  src={`https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/${card.image}`}
                  alt={`${card.title} rafting experience`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-95"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/95 via-white/60 to-transparent pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3">{card.description}</p>
                  <div className="mb-2">
                    <span className="inline-block bg-black text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                      Dist {card.distance}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm sm:text-base font-bold">Cost : {card.cost}</p>
                  <Link
                    to={card.link}
                    className="flex items-center justify-center text-sm sm:text-base px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
                  >
                    more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="relative josefin-sans mt-22 px-4 md:px-20 py-12 bg-[url('https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/bg.webp')] bg-cover bg-center bg-fixed">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold josefin-sans mb-12 
                        text-black tracking-tight relative text-center
                        opacity-0 translate-y-[-30px] animate-fadeInUp">
            Rafting Expenditure
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-28 sm:w-40 h-1.5 
                            bg-black rounded-full"></span>
          </h2>


        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 -mt-5">
          {bookingCards.map((card, index) => (
            <div
              key={index}
              className="w-[85%] sm:w-full mx-auto bg-white rounded-3xl shadow-2xl flex flex-col h-[400px] group hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="relative h-[45%] overflow-hidden rounded-t-3xl">
                <img
                  src={`https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/${card.image}`}
                  alt={`${card.title} rafting adventure`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/95 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                  <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">
                    Dist {card.distance}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-bold"></p>
                  <a
                    href={`https://wa.me/917078287331?text=${encodeURIComponent(card.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                    aria-label={`Book ${card.title} rafting trip`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 sm:mt-2 px-4 md:px-2 -mt-10">
        <h2 className="jolly-font text-3xl md:text-4xl font-bold text-center mb-12 josefin-sans">
          Rafting Memories to Inspire You
        </h2>
        {imageGrid}
      </div>    
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading guides...</div>}>
        <GuidesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading FAQs...</div>}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading form...</div>}>
        <Form
          boxClass="bg-gradient-to-b from-[#fafafa] to-[#B2EBF2]"
          headingClass="text-black"
          buttonClass="bg-blue-600 hover:bg-blue-700"
          focusClass="focus:outline-blue-500"
        />
      </Suspense>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInCard {
          animation: fadeInCard 0.8s ease-out forwards;
        }
        .river-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .river-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .river-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Rafting;