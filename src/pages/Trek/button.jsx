import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function ScrollDownButton() {
  const buttonRef = useRef(null);

  const handleScroll = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleScroll();
      }
    };
    const button = buttonRef.current;
    if (button) button.addEventListener("keydown", handleKeyDown);
    return () => {
      if (button) button.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex justify-center mt-12">
      <button
        ref={buttonRef}
        type="button"
        onClick={handleScroll}
        aria-label="Scroll to target section"
        className="relative flex h-14 w-14 items-center justify-center rounded-full
                   bg-green-600 text-white shadow-lg cursor-pointer
                   hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300
                   animate-bounceDown transition-transform duration-300"
      >
        <ChevronDown className="h-7 w-7" />
      </button>

      <style>
        {`
          @keyframes bounceDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounceDown {
            animation: bounceDown 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
