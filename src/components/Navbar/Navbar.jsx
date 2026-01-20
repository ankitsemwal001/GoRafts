import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/21.svg";
import "../Navbar/Navbar.css";
import "../../index.css";
import { 
  Mountain, 
  Tent, 
  Camera, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Waves,
  ArrowRight
} from "lucide-react";

const LazyImage = ({ src, alt, className }) => (
  <img src={src} alt={alt} loading="lazy" className={className} />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const detailsRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (
      isOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleMouseEnter = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  }, []);

  const closeMobileDropdown = useCallback(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-[1000] w-full bg-white transition-all duration-300 josefin-sans border-b border-gray-100">
      <div className="w-full px-6 lg:px-10">
        <div className="mx-auto flex items-center justify-between py-3 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <LazyImage src={logo} alt="GoRafts logo" className="h-8 w-8" />
                <div className="relative inline-block">
                  {/* Brand Name */}
                  <span className="text-gray-900 font-extrabold text-2xl tracking-tight uppercase drop-shadow-md">
                    Go<span className="text-blue-700">Rafts</span>
                  </span>

                </div>

            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#Rafting" className="nav-link">
                  <Mountain className="w-4 h-4 mr-1.5 text-gray-500" />
                  <span>Rafting</span>
                </a>
              </li>
              <li>
                <a href="#trek" className="nav-link">
                  <Tent className="w-4 h-4 mr-1.5 text-gray-500" />
                  <span>Treks</span>
                </a>
              </li>
              
              {/* Adventure Sports Dropdown */}
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link flex items-center ${dropdownOpen ? 'text-gray-900' : ''}`}
                >
                  <Zap className="w-4 h-4 mr-1.5 text-gray-500" />
                  <span>Adventure Sports</span>
                  <ChevronDown className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-sm border border-gray-100 py-1 z-50 animate-fadeIn">
                    <a
                      href="#bungee"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <Zap className="w-4 h-4 mr-2 text-gray-500" />
                      Bungee Jumping
                    </a>
                    <a
                      href="#kayaking"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <Waves className="w-4 h-4 mr-2 text-gray-500" />
                      Kayaking
                    </a>
                    <a
                      href="#zipline"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-gray-500" />
                      Zipline
                    </a>
                  </div>
                )}
              </li>
              
              <li>
                <a href="#Stays" className="nav-link">
                  <Tent className="w-4 h-4 mr-1.5 text-gray-500" />
                  <span>Stays</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="nav-link">
                  <Camera className="w-4 h-4 mr-1.5 text-gray-500" />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  <MapPin className="w-4 h-4 mr-1.5 text-gray-500" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Toggle */}
          <div className="lg:hidden" ref={buttonRef}>
            <button 
              onClick={toggleMobileMenu}
              className="p-1.5 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div 
          ref={menuRef} 
          className="lg:hidden bg-white border-t border-gray-100 animate-slideDown"
        >
          <div className="px-6 py-3 space-y-1">
            <a
              href="#Rafting"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              <Mountain className="w-4 h-4 mr-3 text-gray-500" />
              <span>Rafting</span>
            </a>
            <a
              href="#trek"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              <Tent className="w-4 h-4 mr-3 text-gray-500" />
              <span>Treks</span>
            </a>
            
            {/* Mobile Dropdown */}
            <div className="py-1">
              <button
                onClick={() => setDropdownOpen(prev => !prev)}
                className="w-full mobile-nav-link flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-3 text-gray-500" />
                  <span>Adventure Sports</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {dropdownOpen && (
                <div className="pl-7 mt-1 space-y-1 animate-fadeIn">
                  <a
                    href="#bungee"
                    onClick={() => {
                      closeMobileMenu();
                      setDropdownOpen(false);
                    }}
                    className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center"
                  >
                    <Zap className="w-4 h-4 mr-2 text-gray-500" />
                    Bungee Jumping
                  </a>
                  <a
                    href="#kayaking"
                    onClick={() => {
                      closeMobileMenu();
                      setDropdownOpen(false);
                    }}
                    className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center"
                  >
                    <Waves className="w-4 h-4 mr-2 text-gray-500" />
                    Kayaking
                  </a>
                  <a
                    href="#zipline"
                    onClick={() => {
                      closeMobileMenu();
                      setDropdownOpen(false);
                    }}
                    className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-gray-500" />
                    Zipline
                  </a>
                </div>
              )}
            </div>
            
            <a
              href="#Stays"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              <Tent className="w-4 h-4 mr-3 text-gray-500" />
              <span>Stays</span>
            </a>
            <a
              href="#gallery"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              <Camera className="w-4 h-4 mr-3 text-gray-500" />
              <span>Gallery</span>
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mobile-nav-link"
            >
              <MapPin className="w-4 h-4 mr-3 text-gray-500" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;