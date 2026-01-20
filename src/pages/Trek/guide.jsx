import { useState, useEffect, useRef } from "react";

export default function GuidesSection() {
  const guides = [
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_5.webp",
      name: "Professional Rafting Guide 1",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_2.webp",
      name: "Professional Rafting Guide 2",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_3.webp",
      name: "Professional Rafting Guide 3",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Guides/Rafting_guide_4.webp",
      name: "Professional Rafting Guide 4",
    },
  ];

  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe if section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-slide (only when in view + mobile)
  useEffect(() => {
    if (!inView || window.innerWidth >= 768) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % guides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [guides.length, inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 flex  flex-col justify-center items-center text-center"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black drop-shadow-md">
        Your Guides, Your Travel Partners
      </h2>

      {/* Desktop: Tilted Images */}
      <div className="hidden md:flex justify-center gap-6 mb-8">
        {guides.map((guide, index) => (
          <img
            key={index}
            src={guide.img}
            alt={guide.name}
            className={`w-44 aspect-[3/4] object-cover rounded-2xl shadow-xl transition duration-500 hover:scale-105 
              ${index % 2 === 0 ? "rotate-[-5deg]" : "rotate-[5deg]"}`}
          />
        ))}
      </div>

      {/* Mobile: Auto sliding carousel */}
      <div className="md:hidden relative w-64 h-80 overflow-hidden mb-8 rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {guides.map((guide, index) => (
            <img
              key={index}
              src={guide.img}
              alt={guide.name}
              className="w-64 h-80 object-cover flex-shrink-0 rounded-2xl"
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="relative max-w-3xl mx-auto text-black leading-relaxed mb-6 px-4">
        Our expert guides are the heart of every journey—passionate storytellers,
        seasoned explorers, and friendly companions. With deep local knowledge and
        a love for discovery, they transform every trip into an immersive
        experience, ensuring you see the unseen and feel the spirit of each place.
      </p>

      {/* CTA Button */}
      <button className="px-6 py-2 bg-orange-500 cursor-pointer text-white rounded-full shadow-md hover:bg-orange-600 transition-transform duration-300 hover:scale-105 active:scale-95">
        Book Now
      </button>
    </section>
  );
}
