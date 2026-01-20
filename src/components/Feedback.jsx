import { useState, useEffect } from "react";

const feedbackData = [
  {
    name: "Mukul Thapliyal",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/feedbackImage/MukulThapliyal.webp",
    feedback: "Yaar, rafting with them was absolutely mind-blowing! I've never screamed that much and enjoyed every moment of it. Total paisa vasool!"
  },
  {
    name: "Ayush Chauhan",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/feedbackImage/AyushChauhan.webp",
    feedback: "What an experience yaar! The safety measures were top-notch, scenery was beautiful, and the thrill was just too good. Highly recommend to everyone!"
  },
  {
    name: "Anushka Deshwal",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/feedbackImage/AnushkaDeshwal.webp",
    feedback: "The rapids, the crew, the vibe - sab kuch perfect tha! Would definitely come again. Best adventure trip I've had in Rishikesh!"
  },
  {
    name: "Ajay Singh",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/feedbackImage/AjaySingh.webp",
    feedback: "OMG! This was my first time rafting and I was so scared, but the guides made me feel so safe. The experience was just out of this world!"
  },
  {
    name: "Subham Sendwal",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/feedbackImage/SubhamSendwal.webp",
    feedback: "Chalo yaar, what a ride! The Ganges mai rafting karne ka alag hi mazza hai. The team was very professional and fun. Thumbs up!"
  },
  {
    name: "Sushil Bhandari",
    image: "https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/feedbackImage/Sushil%20Bhandari.webp",
    feedback: "I went with my family and we all loved it! The kids were so excited. The instructors were very patient and explained everything nicely. Great experience!"
  }
];

export default function Feedback() {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedFeedback = [...feedbackData, ...feedbackData]; // duplicate for looping scroll

  // Pause animation on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative py-20 px-0 mt-10 overflow-hidden bg-transparent josefin-sans">
      {/* Heading */}
      <div className="mb-16 text-center px-4 md:px-10 xl:px-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
          What Our <span className="text-orange-500">Adventurers</span> Say
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-orange-500 rounded-full scale-x-0 origin-left animate-grow" />
        </h2>
        <p className="mt-4 text-gray-600 text-lg josefin-sans md:text-xl max-w-2xl mx-auto">
          Real words from the wild — every splash, scream, and smile captured in their stories.
        </p>
      </div>

      {/* Infinite Scrolling Feedback */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex gap-10 font-josefin w-max text-gray-900 px-4 md:px-10 xl:px-24 ${isPaused ? '' : 'animate-scroll'}`}
        >
          {duplicatedFeedback.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-sm bg-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-sm"
                />
              </div>
              <h3 className="text-lg font-bold text-center underline underline-offset-4 mb-2">
                {item.name}
              </h3>
              <p className="text-sm md:text-base italic text-center text-gray-600 leading-relaxed">
                "{item.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}