import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./Rafting.css";

const stats = [
  { number: 5000, text: "Happy Clients", duration: 10 },
  { number: 28, text: "Years Of Experience", suffix: " +", duration: 15 },
  { number: 4000, text: "River Rafted", duration: 10 },
];

const Expe = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="josefin-sans">
      <div
        className={`transition-all duration-700 py-6 px-6 text-white text-center
        bg-[#5656eb] hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 hover:bg-white/20 rounded-xl py-5 px-4 shadow-lg backdrop-blur-lg transition-transform hover:scale-105"
            >
              <h3 className="text-3xl font-extrabold text-white">
                {visible && (
                  <CountUp
                    end={item.number}
                    duration={item.duration}
                    suffix={item.suffix || ""}
                  />
                )}
              </h3>
              <p className="text-base mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expe;
