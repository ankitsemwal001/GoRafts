import { useCallback, lazy, Suspense } from 'react';
import ScrollDownButton from '../button';
// Lazy load non-critical components
const LazyTrekPage = lazy(() => import("../TrekPage"));
const LazySpecialSection = lazy(() => import('../points'));
const LazyForm = lazy(() => import("../../../components/form/Form"));

function TungnathTrek() {
  // Memoized WhatsApp booking handler
  const handleBookNow = useCallback(() => {
    window.open(
      "https://wa.me/7078287331?text=Hello%2C%20I%20would%20like%20to%20book%20a%20tour.%20Can%20you%20please%20share%20the%20details%3F",
      "_blank"
    );
  }, []);

  return (
    <main className='josefin-sans'>
      {/* Hero section */}
      <section className="relative w-full h-[90vh] overflow-hidden font-josefin bg-black">
        {/* Background image with optimization */}
        <img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath/hero_image.webp"
          alt="Tungnath Chandra Shila Trek - Highest Shiva temple with snow-capped Himalayan peaks"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 scale-125 animate-heroZoom mask-fade"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />

        {/* Diagonal gradient mask */}
        <div className="absolute inset-0 z-30 bg-gradient-to-br from-black/80 via-black/35 to-transparent [clip-path:polygon(0_0,50%_0,35%_100%,0_100%)]" />
        
        {/* Content */}
        <div className="absolute top-[25%] left-10 md:left-20 z-40 animate-fadeInLeft">
          <h1 className="text-white text-3xl md:text-6xl xl:text-5xl font-extrabold leading-tight drop-shadow-[0_3px_15px_rgba(0,0,0,0.7)]">
            Tungnath Chandra<br />Shila Trek
          </h1>
          
          <div className="flex items-center gap-3 mt-3">
            <span className="bg-blue-100 text-black text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow">
              📍 Uttarakhand, India
            </span>
            <div className="flex gap-1 text-yellow-400 text-base md:text-lg" aria-label="4.5 out of 5 stars">
              ★ ★ ★ ★ ☆
            </div>
          </div>
          
          <p className="text-white/80 text-lg md:text-xl mt-4 font-medium max-w-xl">
            Summit the world's highest Shiva temple and witness 360° Himalayan panoramas dusted in snow!
          </p>
          
          {/* Book Now Button */}
          <button
            className="relative mt-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500
                      text-white font-semibold px-10 py-3 rounded-full shadow-xl overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={handleBookNow}
            aria-label="Book Tungnath Chandra Shila Trek on WhatsApp"
          >
            {/* Shine Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                            -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out blur-sm"></span>
            <span className="relative z-10 flex items-center gap-2">Book Now</span>
          </button>
        </div>
        
        {/* Top flipped wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-40">
          <svg
            className="block w-full h-[100px] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path fill="#fdfaf6" d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z" />
          </svg>
        </div>
        
        {/* Optimized CSS animations */}
        <style jsx>{`
          @keyframes heroZoom {
            0%   { transform: scale(1.25); }
            100% { transform: scale(1); }
          }
          .animate-heroZoom {
            animation: heroZoom 10s ease-in-out forwards;
          }
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeInLeft {
            animation: fadeInLeft 1.2s ease-out forwards;
            animation-delay: 0.8s;
          }
          /* Smooth feather fade on all edges */
          .mask-fade {
            -webkit-mask-image: radial-gradient(
              ellipse farthest-corner at center,
              rgba(0,0,0,1) 60%,
              rgba(0,0,0,0) 100%
            );
            mask-image: radial-gradient(
              ellipse farthest-corner at center,
              rgba(0,0,0,1) 60%,
              rgba(0,0,0,0) 100%
            );
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
          }
        `}</style>
      </section>
      
      {/* Scroll button */}
      <ScrollDownButton />
      
      {/* Description section */}
      <section
        id="target-section"
        className="bg-[#fdfaf6] py-6 px-4 md:px-8 xl:px-20 md:mt-15 font-josefin opacity-0 animate-fadeUp"
      >
        <div className="text-center max-w-5xl mx-auto px-4">
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Discover epic trails, expert tips, and inspiring stories to fuel your next
            mountain adventure. Whether you're a beginner or a pro, we help you reach
            new heights with confidence. Discover epic trails, expert tips, and
            inspiring stories to fuel your next mountain adventure. Whether you're a
            beginner or a pro, we help you reach new heights with confidence.
          </p>
        </div>
        
        <style jsx>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease-out forwards;
          }
        `}</style>
      </section>
      
      {/* Trek info section */}
      <section className="bg-[#fdfaf6] py-16 px-4 md:px-12 font-josefin">
        <div className="text-center mb-14 max-w-5xl mx-auto px-4 opacity-0 animate-fadeUp">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Come Join Us for the Ultimate Climbing Adventure
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.
            Whether you're a beginner or a pro, we help you reach new heights with confidence.
          </p>
        </div>
        
        <div className="w-full min-h-screen flex items-center justify-center relative bg-transparent px-6 py-16 font-josefin-sans xl:-mt-30">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-14 relative z-10">
            {/* Image Section */}
            <div className="relative group w-full max-w-sm lg:max-w-md opacity-0 animate-fadeUp">
              <div className="absolute -inset-3 rounded-2xl bg-gradient from-green-400 via-green-600 to-green-800 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/Tungnath/price_image.webp"
                loading="lazy"
                decoding="async"
                alt="Tungnath Chandra Shila Trek - Ancient temple with panoramic mountain views"
                className="relative rounded-2xl border-4 border-black shadow-2xl object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Text Section */}
            <div className="bg-transparent rounded-3xl p-10 shadow-2xl max-w-2xl border border-white/20 relative josefin-sans text-black opacity-0 animate-fadeUp">
              <div className="absolute top-4 right-4 bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg text-xl font-bold">
                ₹7,999 /-
              </div>
              
              <h3 className="text-5xl font-bold mt-7 md:mt-10 mb-10 text-center">
                Tungnath Chandra Shila Trek
                <span className="block w-24 h-1 bg-green-500 mx-auto mt-3 rounded-full"></span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-3xl" aria-hidden="true">📍</span> 
                  <span>Location: Uttarkashi, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-3xl" aria-hidden="true">⛰️</span> 
                  <span>Altitude: ~2709 mtr</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-3xl" aria-hidden="true">🗓️</span> 
                  <span>Duration: 1 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-3xl" aria-hidden="true">💪</span> 
                  <span>Difficulty: Easy–Moderate</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-3xl" aria-hidden="true">🏠</span> 
                  <span>Base Camp: Rudrparyag  district</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-3xl" aria-hidden="true">📏</span> 
                  <span>Distance: ~6 km</span>
                </div>
              </div>
              
              <button
                className="mt-10 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-semibold shadow-xl hover:from-emerald-700 hover:to-green-600 transition-all duration-300 flex items-center gap-2 mx-auto animate-pulseBtn focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={handleBookNow}
                aria-label="Book Tungnath Chandra Shila Trek on WhatsApp"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease-out forwards;
          }
          @keyframes pulseBtn {
            0%, 100% { transform: scale(1); box-shadow: 0 4px 12px rgba(34,197,94,0.35); }
            50% { transform: scale(1.07); box-shadow: 0 8px 24px rgba(34,197,94,0.45); }
          }
          .animate-pulseBtn {
            animation: pulseBtn 1.8s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading trek details...</div>}>
        <LazyTrekPage />
      </Suspense>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading special features...</div>}>
        <LazySpecialSection />
      </Suspense>
      
      <section className="flex justify-center items-center mt-5 md:mt-[40px]">
        <div className="bg-[#E4EFE7] rounded-[40px] flex flex-col justify-center items-center text-center font-[Josefin_Sans] font-normal px-5 py-5 md:px-10 md:py-8 w-[clamp(250px,50vw,1000px)] h-[clamp(200px,57vw,270px)] opacity-0 animate-fadeInScale">
          <h3 className="underline font-bold mb-4 text-lg md:text-2xl">
            Best Time to Visit
          </h3>
          <p className="text-xs md:text-base lg:text-xl">
            Spring (Mar–Apr): Rhododendron blooms <br />
            Summer (May–Jun): Lush green meadows <br />
            Autumn (Sep–Nov): Clear skies, golden hues <br />
            Winter (Dec–Feb): Snow-covered wonderland
          </p>
          
          <style jsx>{`
            @keyframes fadeInScale {
              0% { opacity: 0; transform: scale(0.9); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-fadeInScale {
              animation: fadeInScale 0.6s ease-out forwards;
            }
          `}</style>
        </div>
      </section>

      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading booking form...</div>}>
        <LazyForm
          boxClass="bg-gradient-to-b from-[#fafafa] to-[#DBFCE7]"
          headingClass="text-[#00786F]"
          buttonClass="bg-[#00786F] hover:bg-[#00786F]"
          focusClass="focus:outline-[#00786F]"
        />
      </Suspense>
    </main>
  );
}

export default TungnathTrek;