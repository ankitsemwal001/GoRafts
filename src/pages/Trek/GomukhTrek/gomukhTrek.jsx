import { useCallback, lazy, Suspense } from 'react';
import ScrollDownButton from "../button";

// Lazy load non-critical components
const LazyTrekPage = lazy(() => import("../TrekPage"));
const LazySpecialSection = lazy(() => import('../points'));
const LazyForm = lazy(() => import("../../../components/form/Form"));

function GomukhTrek() {
  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className='josefin-sans'>
      {/* Hero section */}
      <section className="relative josefin-sans w-full h-[90vh] overflow-hidden font-josefin text-white snap-start">
        {/* Background Image with optimization */}
        <img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/new/4.webp"
          alt="Gaumukh Tapovan Trek - Beautiful Himalayan landscape with snow-capped mountains"
          className="absolute w-full h-full object-cover z-10 animate-bgZoom"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20" />
        
        {/* Text Content */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full px-6 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-kalnia tracking-wider drop-shadow-lg animate-fadeInUp delay-200">
            Into the Gaumukh Tapovan
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl text-white/90 animate-fadeInUp delay-400">
            Trek deep into nature's heart. Let the trails test your spirit.
          </p>
          <button
            onClick={handleScroll}
            className="mt-8 px-6 py-3 cursor-pointer rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-md border border-white/10 transform-gpu hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            aria-label="Start the journey to Gaumukh Tapovan"
          >
            Start the Journey
          </button>
        </div>
        
        {/* Mountain silhouette */}
        <div
          className="absolute bottom-0 left-0 w-full h-28 bg-no-repeat bg-bottom bg-cover z-30 opacity-60"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/ajaymarathe/mountain-silhouettes/main/mountain-3.svg')",
          }}
          aria-hidden="true"
        />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        
        {/* Optimized CSS animations */}
        <style jsx>{`
          @keyframes bgZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-bgZoom { animation: bgZoom 20s linear infinite; }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(80px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
          .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
        `}</style>
      </section>

      {/* Scroll button */}
      <ScrollDownButton />
      
      {/* Second section */}
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

      <section className="bg-[#fdfaf6] py-16 px-4 md:px-12 font-josefin">
        <div className="text-center mb-14 max-w-5xl mx-auto px-4 opacity-0 animate-fadeUp">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Embark on a Sacred Journey to Gaumukh
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Experience the spiritual source of the Ganges River. Trek through stunning Himalayan landscapes, 
            ancient glaciers, and sacred sites. This challenging pilgrimage offers breathtaking views and 
            profound spiritual significance.
          </p>
        </div>
        
        <div className="w-full min-h-screen flex items-center justify-center relative bg-transparent px-6 py-16 font-josefin-sans xl:-mt-30">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-14 relative z-10">
            {/* Image Section */}
            <div className="relative group w-full max-w-sm lg:max-w-md opacity-0 animate-fadeUp">
              <div className="absolute -inset-3 rounded-2xl  from-blue-400 via-blue-600 to-indigo-800 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
              <img
                src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/new/12.webp"
                loading='lazy'
                decoding="async"
                alt="Gaumukh Glacier - Sacred source of the Ganges River in the Himalayas"
                className="relative rounded-2xl border-4 border-black shadow-2xl object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Text Section */}
            <div className="bg-transparent rounded-3xl p-10 shadow-2xl max-w-2xl border border-white/20 relative josefin-sans text-black opacity-0 animate-fadeUp">
              <div className="absolute top-4 right-4 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg text-xl font-bold">
                ₹12,999 /-
              </div>
              
              <h3 className="text-5xl font-bold mt-7 md:mt-10 mb-10 text-center">
                Gaumukh Trek
                <span className="block w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-3xl" aria-hidden="true">📍</span> 
                  <span>Location: Gangotri, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-3xl" aria-hidden="true">⛰️</span> 
                  <span>Altitude: ~13,200 ft</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-3xl" aria-hidden="true">🗓️</span> 
                  <span>Duration: 6-8 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-3xl" aria-hidden="true">💪</span> 
                  <span>Difficulty: Moderate–Difficult</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-3xl" aria-hidden="true">🏠</span> 
                  <span>Base Camp: Gangotri</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-3xl" aria-hidden="true">📏</span> 
                  <span>Distance: ~46 km (round trip)</span>
                </div>
              </div>
              
              <button
                className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-semibold shadow-xl hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 mx-auto animate-pulseBtn focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                onClick={() => {
                  // WhatsApp integration
                  const phoneNumber = "7078287331";
                  const message = "Hi, I'm interested in booking the Gaumukh Trek. Can you provide more details?";
                  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                aria-label="Book Gaumukh Trek on WhatsApp"
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
            0%, 100% { transform: scale(1); box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35); }
            50% { transform: scale(1.07); box-shadow: 0 8px 24px rgba(59, 130, 246, 0.45); }
          }
          .animate-pulseBtn {
            animation: pulseBtn 1.8s ease-in-out infinite;
          }
        `}</style>
      </section>
      
      {/* Third section with lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading trek details...</div>}>
        <LazyTrekPage />
      </Suspense>
      
      {/* Fourth section with lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading special features...</div>}>
        <LazySpecialSection />
      </Suspense>
      
      {/* Fifth section */}
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

      {/* Form section with lazy loading */}
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

export default GomukhTrek;