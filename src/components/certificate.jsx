// CertificateMarquee.jsx
import React from "react";
import './Navbar/Navbar.css'; 

const certificates = [
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    image: "https://via.placeholder.com/300x200?text=Certificate+1",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coursera",
    image: "https://via.placeholder.com/300x200?text=Certificate+2",
  },
  {
    title: "Machine Learning",
    issuer: "Stanford Online",
    image: "https://via.placeholder.com/300x200?text=Certificate+3",
  },
  {
    title: "React & Three.js",
    issuer: "Udemy",
    image: "https://via.placeholder.com/300x200?text=Certificate+4",
  },
];

const CertificateMarquee = () => {
  return (
<section className="py-12 bg-transparent relative overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-12 relative">
    <h2 className="inline-block text-3xl md:text-4xl font-bold text-gray-800 relative z-10 
                   tracking-wide px-6 py-2 border-4 border-green-700 rounded-full 
                   shadow-[0_0_15px_rgba(0,0,0,0.2)] ">
      🛶 Rafting Certificates
    </h2>
    <p className="mt-4 text-gray-500 text-sm">Achievements earned on the river</p>
  </div>

  {/* Marquee */}
  <div className="relative overflow-hidden">
    <div className="flex gap-6 animate-marquee">
      {certificates.concat(certificates).map((cert, index) => (
        <div
          key={index}
          className="min-w-[260px] md:min-w-[300px] bg-white/80 backdrop-blur-md rounded-xl 
                     shadow-md border border-gray-200 hover:scale-105 hover:rotate-1 
                     transition-transform duration-300"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-40 object-cover border-b border-gray-200"
          />
          <div className="p-3 text-center">
            <h3 className="text-base font-semibold text-gray-800">{cert.title}</h3>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default CertificateMarquee;
