import React, { useState, useEffect, useRef } from 'react';
import slide1 from "../assets/hero/banner.jpg";
import slide2 from "../assets/hero/slide2.jpg";
import slide3 from "../assets/hero/slide3.jpg";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef(null);
  
  const content = [
    {
      title: "Building Brand Loyalty",
      highlight: "Just Got Easier!",
      description: "We create exceptional value for our partners through detailed planning and superior execution",
      color: "from-amber-500 to-orange-600",
      image: slide1
    },
    {
      title: "Premium Branding Solutions",
      highlight: "Elevate Your Identity",
      description: "Transform your brand with our innovative merchandise and marketing solutions",
      color: "from-blue-500 to-purple-700",
      image: slide2
    },
    {
      title: "Quality Apparel & Products",
      highlight: "Crafted With Care",
      description: "Discover our collection of high-quality branded products that represent your values",
      image: slide3,
      color: "from-emerald-500 to-teal-700"
    }
  ];

  useEffect(() => {
    // Content rotation
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % content.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [content.length]);

  // Parallax effect on mouse move
  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 6 + 2;
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 10 + 10}s`
      };
      
      const colors = [
        'bg-amber-400/40', 'bg-blue-400/40', 'bg-purple-400/40', 
        'bg-emerald-400/40', 'bg-rose-400/40'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push(
        <div
          key={i}
          className={`absolute rounded-full ${color} animate-float`}
          style={style}
        />
      );
    }
    return particles;
  };

  return (
    <div 
      ref={heroRef}
      className="relative h-screen overflow-hidden w-full bg-black"
    >
      {/* Animated background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url(${content[activeIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/70 via-black/40 to-black/20"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/40 to-transparent"></div>
      
      {/* Animated particles */}
      {generateParticles()}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {content.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                <span className="block">{item.title}</span>
                <span className={`block bg-clip-text text-transparent bg-gradient-to-r ${item.color} mt-4`}>
                  {item.highlight}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden group">
                  <span className="relative z-10">Explore Solutions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group overflow-hidden">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 relative overflow-hidden ${
              index === activeIndex 
                ? `bg-gradient-to-r ${content[index].color} scale-125` 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Show content ${index + 1}`}
          >
            {index === activeIndex && (
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
        }
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;