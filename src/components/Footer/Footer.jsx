/**
 * © 2025 Kshitiz Kothari & Aman Nakoti. Website design & development by Kshitiz Kothari and Aman Nakoti.
 * Licensed to GoRafts for use and management.
 * All rights reserved.
 */

import { Facebook, Instagram, PhoneCall, Mail, MapPin, Twitter } from "lucide-react";

const FooterBackground = () => {
  return (
    <svg
      width="1920"
      height="180"
      viewBox="0 0 1920 180"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-[180px] z-0"
    >
      {/* Jagged mountains */}
      <g id="mountains">
        <path
          d="M0,100 L80,60 L160,90 L240,50 L320,80 L400,55 L480,85 L560,60 L640,80 L720,55 L800,90 L880,65 L960,85 L1040,60 L1120,80 L1200,55 L1280,75 L1360,50 L1440,80 L1520,55 L1600,85 L1680,60 L1760,90 L1840,65 L1920,95 L1920,180 L0,180 Z"
          fill="#C0D6E4"
          opacity="0.8"
        />
      </g>

      {/* Adventure checkpoints */}
      <g id="checkpoints">
        {[100, 400, 700, 1000, 1300, 1600, 1900].map((cx, i) => (
          <circle
            key={i}
            cx={cx}
            cy={140 - (i % 3) * 8}
            r="7"
            fill={i % 2 === 0 ? "#FF7F50" : "#00C2A0"}
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        ))}
      </g>
    </svg>
  );
};

const Footer = ({ bgClass = "bg-transparent" }) => {
  return (
    <footer
      className={`${bgClass} text-gray-700 px-4 sm:px-6 py-4 md:py-6 font-sans relative min-h-[180px] overflow-hidden`}
    >
      <FooterBackground />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center relative z-10">
        {/* Brand + Socials */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-light tracking-wide font-serif">GoRafts</h3>
          <p className="text-sm opacity-80">Beyond Limits, Into the Wild.</p>
          <div className="flex justify-center space-x-3">
            {[
              { icon: Twitter, link: "https://x.com/yourprofile" },
              { icon: Facebook, link: "https://www.facebook.com/Cristiano/" },
              { icon: Instagram, link: "https://instagram.com/yourprofile" }
            ].map((social, idx) => (
              <a
                key={idx}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition-all duration-300"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.icon.name}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-light tracking-wide font-serif">Navigation</h3>
          <ul className="space-y-1 text-sm">
            {[
              { name: "Home", link: "#" },
              { name: "About", link: "#contact" },
              { name: "Adventures", link: "#Rafting" },
              { name: "Contact", link: "#contact" }
            ].map((item, i) => (
              <li key={i} className="transition-all duration-300 hover:translate-x-1">
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-gray-800 transition-colors inline-block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-light tracking-wide font-serif">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-center items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" /> 
              <span>Rishikesh, Tapovan</span>
            </li>
            <li className="flex justify-center items-center gap-2">
              <PhoneCall className="w-4 h-4 flex-shrink-0" /> 
              <span>(+91) 7078287331</span>
            </li>
            <li className="flex justify-center items-center gap-2 break-all">
              <Mail className="w-4 h-4 flex-shrink-0" /> 
              <span>gorafts001@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + Credits */}
      <div className="max-w-6xl mx-auto mt-4 pt-3 border-t border-gray-200 flex flex-col items-center text-center text-sm text-gray-600 relative z-10">
        <p>© {new Date().getFullYear()} <span className="font-medium">GoRafts</span>. All rights reserved.</p>
        {/* Fully visible Designer/Developer Credit */}
        <p className="mt-1 font-medium">
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/kshitiz-kothari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            Ankit Semwal
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/amannakoti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            Ankit Semwal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
