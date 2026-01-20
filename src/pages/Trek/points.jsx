import { useEffect, useRef } from "react";
import "./trek.css";

/* ─── Data (easy to edit, now with SVG icons instead of images) ───────── */
const specialPoints = [
  {
    title: "Meadows (Bugyals)",
    text: "Vast alpine grasslands that feel almost surreal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Forests",
    text: "Walk through pine, oak, maple, and rhododendron groves",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Panoramic Views",
    text: "Bandarpoonch, Kala Nag, Srikanth, and Draupadi Ka Danda peaks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "All-Season Beauty",
    text: "Snow in winter, wildflowers in summer, golden grass in autumn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Peaceful Trails",
    text: "Dayara offers solitude and serenity, perfect for reflection",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Cultural Charm",
    text: "Base villages like Raithal & Barsu showcase Garhwali traditions and festivals such as Butter Holi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

/* ─── Hook: Reusable Scroll Animation ───────────────────────────── */
function useInView(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("fade-up");
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

/* ─── Component ───────────────────────────────────────────────── */
export default function SpecialSection() {
  const headingRef = useRef(null);
  useInView(headingRef);
  
  return (
    <section className="josefin-sans py-16 px-6 md:mt-5 mt-10 md:px-20 max-w-6xl mx-auto">
      {/* Heading */}
      <h2
        ref={headingRef}
        className="fade-init text-3xl md:text-4xl font-bold text-center mb-12"
      >
        What Makes&nbsp;<span className="text-green-700">It&nbsp;Special</span>
      </h2>
      
      {/* Animated list */}
      <div className="grid md:grid-cols-2 gap-6">
        {specialPoints.map((item, i) => {
          const cardRef = useRef(null);
          useInView(cardRef);
          return (
            <article
              key={i}
              ref={cardRef}
              className="fade-init bg-[#fdfaf6] rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              style={{ animationDelay: `${i * 0.1}s` }} // stagger effect
            >
              {/* SVG Icon */}
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-700 text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}