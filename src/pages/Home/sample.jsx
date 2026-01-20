import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import {
  MountainSnow,
  Waves,
  TentTree,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    icon: MountainSnow,
    end: 100,
    suffix: "+",
    label: "Treks Completed",
    color: "text-blue-500",
    glow: "hover:shadow-[0_0_30px_#3b82f6]",
  },
  {
    icon: Waves,
    end: 4000,
    suffix: "+",
    label: "Rafting Trips",
    color: "text-cyan-500",
    glow: "hover:shadow-[0_0_30px_#06b6d4]",
  },
  {
    icon: TentTree,
    end: 25,
    suffix: "+",
    label: "Campsites",
    color: "text-green-500",
    glow: "hover:shadow-[0_0_30px_#22c55e]",
  },
  {
    icon: UsersRound,
    end: 5000,
    suffix: "+",
    label: "Happy Explorers",
    color: "text-yellow-500",
    glow: "hover:shadow-[0_0_30px_#eab308]",
  },
];

export default function HighlightsStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current.querySelectorAll(".stat-card, .fade-title");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full md:mt-15 mt-10 py-12 px-4 sm:px-6 md:px-10 lg:px-20 josefin-sans bg-transparent"
    >
      <h2 className="fade-title opacity-0 text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 text-black">
        ✨ Adventure <u>Highlights</u>
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
        {stats.map(({ icon: Icon, end, suffix, label, color, glow }, index) => (
          <div
            key={index}
            className={`stat-card opacity-0 flex flex-col items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-sm transition-all duration-300 ${glow} hover:scale-[1.03] group`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div
              className={`mb-2 sm:mb-3 p-2 sm:p-3 rounded-full border border-black/10 bg-black/10 transition-all duration-300 group-hover:scale-110`}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-black mb-0.5">
              <CountUp end={end} duration={3.5} suffix={suffix} />
            </h3>
            <p className="text-black/70 text-xs sm:text-sm text-center font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* 🔥 CSS Animations */}
      <style>
        {`
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fade-up 0.7s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
