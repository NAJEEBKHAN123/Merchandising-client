import React, { useState, useEffect, useRef } from 'react';
import slide1 from "../assets/hero/banner.jpg";
import slide2 from "../assets/hero/slide2.jpg";
import slide3 from "../assets/hero/slide3.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  const intervalRef = useRef(null);
  
  const slides = [
    {
      image: slide1,
      title: "Building Brand Loyalty",
      subtitle: "Just Got Easier!",
      description: "We create exceptional value for our partners through detailed planning and superior execution"
    },
    {
      image: slide2,
      title: "Premium Branding Solutions",
      subtitle: "Elevate Your Identity",
      description: "Transform your brand with our innovative merchandise and marketing solutions"
    },
    {
      image: slide3,
      title: "Quality Apparel & Products",
      subtitle: "Crafted With Care",
      description: "Discover our collection of high-quality branded products that represent your values"
    }
  ];

  // Enhanced slide transition
  const goToSlide = (index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 800);
  };

  // Auto-advance slides with pause on hover
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isTransitioning && !hoverEffect) {
        goToSlide((currentSlide + 1) % slides.length);
      }
    }, 5000);
    
    return () => clearInterval(intervalRef.current);
  }, [currentSlide, isTransitioning, slides.length, hoverEffect]);

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div 
      className="relative h-screen overflow-hidden w-full group"
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
    >
      {/* Background Slides with Parallax Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-out ${
            index === currentSlide 
              ? 'opacity-100 z-0 scale-110' 
              : 'opacity-0 z-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 10s ease-out, opacity 1s ease-out'
          }}
        ></div>
      ))}
      
      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-1"></div>
      
      {/* Subtle Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-400/5 mix-blend-overlay animate-pulse-slow z-1"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/5 mix-blend-lighten animate-rotate-slow z-1"></div>
      
      {/* Elegant Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-4 rounded-full transition-all duration-500 opacity-80 group-hover:opacity-100 backdrop-blur-sm hover:scale-110 border border-white/10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-4 rounded-full transition-all duration-500 opacity-80 group-hover:opacity-100 backdrop-blur-sm hover:scale-110 border border-white/10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Premium Content Styling */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 md:px-10 text-center">
          
          {/* Animated Text Content */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out px-4 ${
                index === currentSlide
                  ? 'opacity-100 z-10 translate-y-0'
                  : 'opacity-0 z-0 translate-y-8'
              }`}
            >
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white tracking-wide uppercase">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-3 opacity-0 animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                    {word}
                  </span>
                ))}
              </h1>
              
              {/* Subtitle with Accent */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-amber-400 tracking-wide">
                {slide.subtitle.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-2 opacity-0 animate-fade-in-up" style={{animationDelay: `${0.4 + i * 0.1}s`}}>
                    {word}
                  </span>
                ))}
              </h2>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                {slide.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <button className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Solutions
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimalist Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;