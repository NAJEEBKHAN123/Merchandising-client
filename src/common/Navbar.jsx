import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logoo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

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

    // Add passive event listener for better performance
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

  // Close mobile menu when a link is clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About Us" },
    { id: "testimonials", label: "Testimonials"},
    { id: "faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full  z-100 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100 shadow-lg py-1"
          : "bg-gradient-to-r from-gray-50 to-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex items-center space-x-2"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("home");
              }}
            >
              <img
                src={Logo}
                className="h-10 w-10 md:h-12 md:w-12 " // Responsive sizing
                alt="Company Logo"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex sm:space-x-2 lg:space-x-6 items-center font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3 py-2 transition-all duration-300 ${
                  activeLink === link.id
                    ? "text-pink-600 font-medium"
                    : "text-gray-700 hover:text-pink-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.label}
                {/* {activeLink === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600"></span>
                )} */}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#quote"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-pink-700 hover:to-pink-700"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
              }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 bg-white rounded-lg mt-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeLink === link.id
                    ? "bg-blue-50 text-pink-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-pink-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              className="block text-center mt-4 bg-gradient-to-r from-pink-600 to-pink-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("contact");
                setIsOpen(false);
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
