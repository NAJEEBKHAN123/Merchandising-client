import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo4.png";

// Custom NavLink component that handles scroll to top
const NavLink = ({ to, children, activeLink, onClick, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick();
    
    // If we're already on the target page, scroll to top
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`relative px-3 py-2 transition-all duration-300 group ${
        activeLink === to
          ? "text-pink-600 font-semibold"
          : "text-gray-700 hover:text-pink-600"
      }`}
      {...props}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-500 ${
          activeLink === to
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      ></span>
      <span className="absolute inset-0 bg-gradient-to-r from-pink-100 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  // Update active link based on current route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Handle scroll effect with better cleanup
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button[aria-expanded]")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Handle mobile menu link clicks with scroll to top
  const handleMobileLinkClick = (path) => {
    setIsOpen(false);
    
    // If we're already on the target page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portefeuille" },
    { path: "/testimonials", label: "Avis clients" },
    { path: "/faq", label: "FAQs" },
  ];
  
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-1"
          : "bg-white py-2"
      }`}
      style={{
        transform: isScrolled ? "translateY(0)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-1 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex-shrink-0 flex items-center md:flex-none absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 md:relative">
            <Link
              to="/"
              className="flex items-center group"
              onClick={() => {
                setIsOpen(false);
                // Scroll to top when clicking logo from home page
                if (location.pathname === "/") {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }
              }}
            >
              <img
                src={Logo}
                className="h-40 w-auto md:h-32 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
                alt="Company Logo"
                style={{
                  marginTop: "-8px",
                  marginBottom: "-8px",
                }}
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-0 lg:space-x-5 items-center font-medium">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                activeLink={activeLink}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="relative inline-flex items-center px-5 py-2.5 font-semibold text-white bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 
                        rounded-full shadow-lg transition-all duration-500 
                        hover:scale-105 hover:shadow-xl hover:from-pink-600 hover:via-red-600 hover:to-pink-700
                        transform hover:-translate-y-0.5 group"
            >
              <span className="relative z-10 flex items-center">
                Contactez-nous
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse"></span>
            </Link>
          </div>

          {/* Mobile Menu Button - Always on right side */}
          <div className="md:hidden flex items-center justify-end w-full">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                isOpen
                  ? "bg-pink-100 text-pink-600 rotate-90"
                  : "bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              } ${isAnimating ? "animate-pulse" : ""}`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6 transform transition-all duration-300">
                <span
                  className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100 py-4 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
          style={{
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 transform ${
                  activeLink === link.path
                    ? "bg-gradient-to-r from-pink-50 to-red-50 text-pink-600 border-l-4 border-pink-600 scale-105"
                    : "text-gray-700 hover:bg-gray-50 hover:text-pink-600 border-l-4 border-transparent hover:border-pink-300 hover:scale-105"
                } ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                }}
                onClick={() => handleMobileLinkClick(link.path)}
              >
                <span className="flex-1">{link.label}</span>
                {activeLink === link.path && (
                  <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse ml-2"></div>
                )}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 flex justify-center">
              <Link
                to="/contact"
                className="flex justify-center items-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 
                          rounded-xl shadow-lg transition-all duration-300 w-full max-w-xs
                          hover:scale-105 hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">Contactez-nous maintenant</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;