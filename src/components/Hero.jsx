import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');
  const intervalRef = useRef(null);
  
  const slides = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661901543371-0d1279a79645?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Merchandise Hub & Solution",
      subtitle: "MSCO provides exceptional custom merchandise and professional printing services designed specifically for your business growth and success today.",
      stats: "15+ Years of Excellence"
    },
    {
      image: "https://www.flexecutioninc.com/webp/custom_1920x700_exactflexecution-branding-and-displays-Ruger-Gun-Display-v1-id89.webp",
      title: "Premium Branding Solutions",
      subtitle: "We create memorable brand experiences with our innovative expert merchandising marketing solutions and creative design services for clients.",
      stats: "500+ Successful Projects"
    },
    {
      image: "https://images.unsplash.com/photo-1637666573804-746f69e79463?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Quality Apparel & Products",
      subtitle: "From custom t-shirts to promotional items and corporate gifts, we deliver quality products with complete assurance and timely delivery always.",
      stats: "10,000+ Products Delivered"
    }
  ];

  // Enhanced slide transition with direction tracking
  const goToSlide = (index, direction) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setAnimationDirection(direction);
    setCurrentSlide(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  // Auto-advance slides with pause on hover
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isTransitioning && !hoverEffect) {
        goToSlide((currentSlide + 1) % slides.length, 'next');
      }
    }, 6000);
    
    return () => clearInterval(intervalRef.current);
  }, [currentSlide, isTransitioning, slides.length, hoverEffect]);

  // Navigation functions with direction
  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length, 'next');
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length, 'prev');

  return (
    <div 
      className="relative h-screen overflow-hidden w-full group"
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
    >
      {/* Background Slides with optimized transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 z-0' 
              : 'opacity-0 z-0'
          }`}
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            // Ensure background covers entire area without gaps
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Prevent any horizontal movement that could cause flickering
            transform: 'none'
          }}
        ></div>
      ))}
      
      {/* Animated gradient overlay - fixed positioning */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/15 z-1"></div>
      
      {/* Animated decorative elements - positioned safely */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-yellow-400 mix-blend-overlay opacity-20 animate-ping-slow z-1"></div>
      <div className="hidden md:block absolute bottom-20 right-20 w-24 h-24 bg-red-500 mix-blend-lighten opacity-15 animate-bounce-uneven z-1"></div>
      
      {/* Navigation Arrows with enhanced hover animations */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-all duration-300 opacity-70 group-hover:opacity-100 backdrop-blur-sm hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300 opacity-70 group-hover:opacity-100 backdrop-blur-sm hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 h-full flex lg:mt-10 items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          
          {/* Animated Text with directional and staggered animations */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute left-0 right-0 mx-auto w-full max-w-5xl px-4 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 z-10 translate-y-0'
                  : animationDirection === 'next'
                    ? 'opacity-0 z-0 translate-y-8'
                    : 'opacity-0 z-0 -translate-y-8'
              }`}
              style={{ 
                top: '50%',
                transform: 'translateY(-50%)',
                transition: 'opacity 0.7s ease, transform 0.7s ease'
              }}
            >
              <div className="text-center md:text-left">
                {/* Title with staggered animation */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight"
                    style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 #000',
                      fontFamily: 'Arial, sans-serif',
                      letterSpacing: '0.05em'
                    }}>
                  {slide.title}
                </h1>
                
                {/* Subtitle with staggered animation */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-10 mx-auto md:mx-0 leading-relaxed max-w-2xl"
                   style={{ 
                     fontStyle: 'italic',
                     textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                   }}>
                  {slide.subtitle}
                </p>
                
                {/* Stats with staggered animation */}
                <div className="text-yellow-400 font-semibold text-lg md:text-xl mb-8 md:mb-10">
                  {slide.stats}
                </div>
                
                {/* Buttons with staggered animation */}
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 sm:px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                          style={{ border: '2px solid rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                    Get Started
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 sm:px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1"
                          style={{ boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Bottom Indicators with enhanced animation */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentSlide ? 'next' : 'prev')}
            className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-yellow-400 scale-125 border-2 border-white' 
                : 'bg-white/50 hover:bg-white/70 border border-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative elements with enhanced animations - hidden on small screens */}
      <div className="hidden md:block absolute top-10 left-10 w-12 h-12 border-4 border-red-500 rounded-full animate-spin-slow z-1"></div>
      <div className="hidden md:block absolute bottom-10 left-10 w-16 h-16 border-4 border-blue-500 rotate-45 opacity-60 z-1 animate-pulse"></div>
      <div className="hidden md:block absolute top-1/2 right-16 w-8 h-8 bg-green-500 rounded-full opacity-10 animate-ping z-1"></div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 0.4; }
          100% { transform: scale(0.8); opacity: 0.8; }
        }
        @keyframes bounce-uneven {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-uneven {
          animation: bounce-uneven 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;