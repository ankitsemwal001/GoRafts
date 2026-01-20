import React ,  { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ArrowRight } from "lucide-react";

// Move cards data outside component to prevent recreation on renders
const cards = [
  {
    id: 1,
    title: "A.C Deluxe Cottage's",
    desc: "Unwind in our AC Cottages, your cool retreat with a beautiful view. Enjoy a complete three-time meal plan—breakfast, lunch, and dinner—along with evening snacks and morning tea. It's the perfect blend of comfort and convenience.",
    shortDesc: "There are many variations of passages of Lorem Ipsum available.",
    price: 2000,
    bigImg: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Rafting%20Page/Hero_img.webp",
    smallImg: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/hero_img_1.webp",
  },
  {
    id: 2,
    title: "Coller Cottage's",
    desc: "Escape into the mountains with cozy cottages surrounded by nature's beauty...",
    shortDesc: "Escape into the mountains with cozy cottages.",
    price: 1500,
    bigImg: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/river_side_camps.webp",
    smallImg: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/river_side_camps2.webp",
  },
  {
    id: 3,
    title: "River View Cottage",
    desc: "Stay by the riverside and enjoy the calm sound of flowing water all day long...",
    shortDesc: "Stay by the riverside and enjoy the calm.",
    price: 2499,
    bigImg: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/stays_cottage_1.webp",
    smallImg: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Stay%20Page/river_side_camps2.webp",
  },
];

const whatsappNumber = "7078287331";
const whatsappMessage = "Hello! I want to book this cottage.";

export default function CottageCards() {
  // Memoize WhatsApp URL to prevent recreation
  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  }, []);

  // Memoize cards rendering to prevent unnecessary recalculations
  const renderedCards = useMemo(() => {
    return cards.map((card, idx) => {
      const isReversed = idx % 2 === 1;
      return (
        <FadeIn key={card.id}>
          <div
            className={`flex flex-col ${
              isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10`}
          >
            {/* Image Section */}
            <div className="relative w-[calc(clamp(220px,55vw,650px)*1.15)] h-[calc(clamp(220px,40vw,520px)*1.15)]">
              {/* Big funky image */}
              <div className="absolute inset-0 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] border border-black p-1">
                <img
                  src={card.bigImg}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-[40%_60%_55%_45%/60%_40%_60%_40%]"
                  loading="lazy"
                  decoding="async"
                  fetchpriority={idx === 0 ? "high" : "low"}
                />
              </div>
              {/* Small image + gallery button */}
              <div
                className={`absolute bottom-2 ${
                  isReversed ? "left-2" : "right-2"
                } w-[clamp(90px,14vw,160px)] h-[clamp(90px,14vw,160px)] border-2 border-white rounded-full shadow-md z-[3]`}
              >
                <img
                  src={card.smallImg}
                  alt="Small preview"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gallery Button */}
                <a
                  href="/#gallery"
                  className={`absolute bottom-[-30%] ${
                    isReversed ? "left-[-30%]" : "right-[-30%]"
                  } z-[10]`}
                  aria-label="View gallery"
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-[#ff6b4a]/40 blur-md"></span>
                    <button 
                      className="relative h-[clamp(32px,6vw,52px)] w-[clamp(32px,6vw,52px)] bg-[#ff6b4a] hover:bg-[#ff3b00] rounded-full flex justify-center items-center shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6b4a]"
                      aria-label="View gallery"
                    >
                      <ArrowRight
                        className={`w-[clamp(16px,3vw,24px)] h-[clamp(16px,3vw,24px)] text-black ${
                          isReversed ? "rotate-[213deg]" : "-rotate-[33deg]"
                        }`}
                      />
                    </button>
                  </div>
                </a>
              </div>
            </div>
            {/* Text Section */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {card.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                {card.desc}
              </p>
              {/* Price */}
              <p className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                ₹{card.price} / per person
              </p>
              {/* Book Now Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                aria-label={`Book ${card.title} on WhatsApp`}
              >
                Book Now
              </a>
            </div>
          </div>
        </FadeIn>
      );
    });
  }, [whatsappUrl]);

  return (
    <section className="px-4 sm:px-10 py-16 bg-gradient-to-r from-white via-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {renderedCards}
      </div>
    </section>
  );
}

// Optimized Fade-in Wrapper
const FadeIn = React.memo(({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the observer callback
  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px' // Start revealing slightly before element comes into view
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleIntersection]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
});

FadeIn.displayName = 'FadeIn';