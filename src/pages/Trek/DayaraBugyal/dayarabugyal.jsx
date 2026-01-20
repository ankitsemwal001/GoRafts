import { lazy, Suspense, useCallback } from 'react';
import ScrollDownButton from '../button';
// Lazy load non-critical components
const LazySpecialSection = lazy(() => import('../points'));
const LazyTrekPage = lazy(() => import("../TrekPage"));
const LazyForm = lazy(() => import('../../../components/form/Form'));

function DayaraBugyal() {
  // Memoized click handler for WhatsApp button
  const handleBookNow = useCallback(() => {
    window.open(
      "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
      "_blank"
    );
  }, []);

  return (
    <main className='josefin-sans'>
      {/* Hero section */}
      <section className="relative w-full h-[93vh] overflow-hidden font-josefin">
        {/* Background Image with optimization */}
        <img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/new/5.webp"
          alt="Dayara Bugyal Trek - Beautiful mountain landscape with snow-capped peaks"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 animate-bgZoom"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-30 animate-fadeIn" />
        
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-40 text-white text-center px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold font-kalnia drop-shadow-xl leading-tight animate-fadeInUp">
            Dayara Bugyal Trek
          </h1>
          
          <p className="text-base md:text-lg mt-6 max-w-2xl text-white/90 animate-fadeInUp">
            Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Whether you're a beginner or a pro, we help you reach new heights with confidence.
          </p>
          {/* <p className="text-base md:text-lg mt-2 max-w-2xl text-white/90 animate-fadeInUp delay-200">
            Whether you're a beginner or a pro, we help you reach new heights with confidence.
          </p> */}

          <button
            className="mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg backdrop-blur-md border border-white/20 shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={handleBookNow}
            aria-label="Book Dayara Bugyal Trek on WhatsApp"
          >
            Book Now
          </button>
        </div>
        
        {/* Bottom Wave SVG */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50 animate-fadeInUp">
          <svg
            className="block w-full h-[100px] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#FDFAF6"
              d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
        
        {/* Optimized CSS animations */}
        <style jsx>{`
          @keyframes bgZoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-bgZoom { animation: bgZoom 1.6s ease-in-out forwards; }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
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
      Discover the Enchanting Dayara Bugyal Trek
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
      Experience one of India's most beautiful high-altitude meadows. Trek through lush forests, 
      pristine alpine grasslands, and witness breathtaking Himalayan views. Perfect for both beginners 
      and experienced trekkers seeking natural beauty and tranquility.
      </p>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center relative bg-transparent px-6 py-16 xl:-mt-30 font-josefin-sans">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-14 relative z-10">
        {/* Image Section */}
        <div className="relative group w-full max-w-sm lg:max-w-md opacity-0 animate-fadeUp">
        <div className="absolute -inset-3 rounded-2xl  from-green-400 via-green-600 to-green-800 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
        <img
        src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks%20Page/new/7.webp"
        loading='lazy'
        decoding="async"
        alt="Dayara Bugyal Trek - Beautiful alpine meadow with snow-capped Himalayan peaks in background"
        className="relative rounded-2xl border-4 border-black shadow-2xl object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
        />
        </div>

        {/* Text Section */}
        <div className="bg-transparent rounded-3xl p-10 shadow-2xl max-w-2xl border border-white/20 relative josefin-sans text-black opacity-0 animate-fadeUp">
        <div className="absolute top-4 right-4 bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg text-xl font-bold">
        ₹8,999 /-
        </div>

        <h3 className="text-5xl font-bold mt-7 md:mt-10 mb-10 text-center">
        Dayara Bugyal Trek
        <span className="block w-24 h-1 bg-green-500 mx-auto mt-3 rounded-full"></span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center gap-3">
        <span className="text-green-400 text-3xl" aria-hidden="true">📍</span> 
        <span>Location: Uttarkashi, Uttarakhand</span>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-green-400 text-3xl" aria-hidden="true">⛰️</span> 
        <span>Altitude: ~12,000 ft</span>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-green-400 text-3xl" aria-hidden="true">🗓️</span> 
        <span>Duration: 5-6 days</span>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-green-400 text-3xl" aria-hidden="true">💪</span> 
        <span>Difficulty: Easy–Moderate</span>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-green-400 text-3xl" aria-hidden="true">🏠</span> 
        <span>Base Camp: Raithal / Barsu</span>
        </div>
        <div className="flex items-center gap-3">
        <span className="text-green-400 text-3xl" aria-hidden="true">📏</span> 
        <span>Distance: ~21 km (round trip)</span>
        </div>
        </div>

        <button
        className="mt-10 px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full font-semibold shadow-xl hover:from-emerald-700 hover:to-green-600 transition-all duration-300 flex items-center gap-2 mx-auto animate-pulseBtn focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 cursor-pointer"
        onClick={() => {
        // WhatsApp integration
        const phoneNumber = "7078287331";
        const message = "Hi, I'm interested in booking the Dayara Bugyal Trek. Can you provide more details?";
        const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        }}
        aria-label="Book Dayara Bugyal Trek on WhatsApp"
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
      0%, 100% { transform: scale(1); box-shadow: 0 4px 12px rgba(34, 197, 94, 0.35); }
      50% { transform: scale(1.07); box-shadow: 0 8px 24px rgba(34, 197, 94, 0.45); }
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
      
      {/* Fifth section with lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading special features...</div>}>
        <LazySpecialSection />
      </Suspense>
      
      {/* Sixth section */}
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

export default DayaraBugyal;