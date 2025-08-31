import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import slide1 from "../assets/hero/banner.jpg";
import slide2 from "../assets/hero/slide2.jpg";
import slide3 from "../assets/hero/slide3.jpg";

// 3D Particle Background Component
function ParticleBackground(props) {
  const ref = useRef();
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffa500"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Interactive Floating Elements
const FloatingElement = ({ delay, children }) => {
  return (
    <div 
      className="absolute opacity-0 animate-float-in"
      style={{ 
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.4))'
      }}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const content = [
    {
      title: "Building Brand Loyalty",
      highlight: "Just Got Easier!",
      description: "We create exceptional value for our partners through detailed planning and superior execution",
      image: slide1,
      color: "from-amber-500/20 to-orange-600/20"
    },
    {
      title: "Premium Branding Solutions",
      highlight: "Elevate Your Identity",
      description: "Transform your brand with our innovative merchandise and marketing solutions",
      image: slide2,
      color: "from-blue-500/20 to-indigo-600/20"
    },
    {
      title: "Quality Apparel & Products",
      highlight: "Crafted With Care",
      description: "Discover our collection of high-quality branded products that represent your values",
      image: slide3,
      color: "from-emerald-500/20 to-teal-600/20"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % content.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [content.length]);

  const current = content[activeContent];

  return (
    <div 
      ref={heroRef}
      className="relative h-screen overflow-hidden w-full bg-black"
    >
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Dynamic Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${current.color} z-1 transition-all duration-1000`}
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`
        }}
      ></div>

      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center scale-110"
        style={{ 
          backgroundImage: `url(${current.image})`,
          transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      {/* Floating Elements */}
      <FloatingElement delay={0.2}>
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 blur-xl opacity-40"></div>
      </FloatingElement>
      
      <FloatingElement delay={0.5}>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg blur-xl opacity-40"></div>
      </FloatingElement>
      
      <FloatingElement delay={0.8}>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-xl opacity-40"></div>
      </FloatingElement>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <div className="mb-8 overflow-hidden">
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)`,
                transition: 'transform 0.1s ease-out',
                textShadow: '0 5px 15px rgba(0,0,0,0.5)'
              }}
            >
              {current.title}
            </h1>
          </div>
          
          <div className="mb-8 overflow-hidden">
            <div 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 8}px, ${(mousePosition.y - 0.5) * 8}px)`,
                transition: 'transform 0.1s ease-out',
                filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.7))'
              }}
            >
              {current.highlight}
            </div>
          </div>
          
          <div className="mb-10 overflow-hidden">
            <p 
              className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 6}px, ${(mousePosition.y - 0.5) * 6}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {current.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden group"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 5}px, ${(mousePosition.y - 0.5) * 5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group overflow-hidden"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 5}px, ${(mousePosition.y - 0.5) * 5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Content Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveContent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === activeContent 
                ? 'bg-white w-8 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to content ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-in {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-float-in {
          animation: float-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;