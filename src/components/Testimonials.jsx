import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    message: "MSCO has completely transformed our retail operations. Their team's attention to detail and commitment to excellence is unmatched in the industry. We've seen a 34% increase in customer satisfaction scores since implementing their merchandising strategies across all our locations.",
    client: "HEARTLAND RETAIL GROUP",
    rating: 5
  },
  {
    message: "The team handled everything professionally and efficiently. Highly recommend their services!",
    client: "JOHNSON GROUP",
    rating: 5
  },
  {
    message: "Amazing service! They kept everything neat and on time. Very reliable team.",
    client: "GREEN MART",
    rating: 4
  },
  {
    message: "We have been partnering with MSCO for over five years now, and they consistently exceed our expectations. Their ability to adapt to our changing needs while maintaining the highest standards of quality and efficiency has made them an indispensable part of our success story.",
    client: "SUNRISE STORES INTERNATIONAL",
    rating: 5
  },
  {
    message: "The best merchandising team we have ever partnered with. Highly cooperative.",
    client: "CITY RETAIL",
    rating: 5
  },
  {
    message: "Great experience overall. They understood our requirements and delivered perfectly.",
    client: "RIVER VALLEY",
    rating: 4
  },
  {
    message: "Very professional and quick. Communication was smooth and clear throughout.",
    client: "HIGHLAND",
    rating: 5
  },
  {
    message: "MSCO's comprehensive approach to visual merchandising revolutionized our in-store experience. Their innovative display solutions and strategic product placement resulted in a 27% increase in impulse purchases and significantly improved overall store aesthetics.",
    client: "MEGA STORES CORPORATION",
    rating: 5
  },
  {
    message: "Dependable and trustworthy team. Always satisfied with their work.",
    client: "GLOBAL MART",
    rating: 4
  },
  {
    message: "Absolutely wonderful experience working with them. Highly recommend.",
    client: "FRESH MARKET",
    rating: 5
  },
  {
    message: "After implementing MSCO's retail optimization strategies across our chain of stores, we saw a dramatic improvement in both customer engagement and sales metrics. Their data-driven approach combined with creative solutions has delivered measurable ROI that far exceeded our initial expectations.",
    client: "NATIONAL RETAIL PARTNERS",
    rating: 5
  },
  {
    message: "What sets MSCO apart is their unparalleled commitment to client success. They don't just execute tasks—they truly partner with you to understand your business objectives and develop customized solutions that drive real results. Their team feels like an extension of our own company.",
    client: "PREMIUM RETAIL SOLUTIONS",
    rating: 5
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (idx) => {
    if (isTransitioning || idx === index) return;
    setIsTransitioning(true);
    setIndex(idx);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
      />
    ));
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center text-white overflow-hidden py-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1515705576963-95cad62945b6?fit=crop&w=1600&q=80')",
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full border border-white border-opacity-10"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${15 + i * 5}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mt-12 max-w-6xl px-4 w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Client Testimonials
          </h2>
          <p className="text-xl text-green-300 max-w-2xl mx-auto">
            Discover what our valued partners have to say about their experience working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Navigation Buttons - Left */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <button
              onClick={prevSlide}
              className="bg-green-600 hover:bg-green-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="lg:col-span-10">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 transform transition-all duration-500 hover:shadow-xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white p-3 rounded-full shadow-lg">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="min-h-[220px] flex flex-col justify-center items-center">
                <div className="flex mb-6">
                  {renderStars(testimonials[index].rating)}
                </div>
                
                <p className={`text-xl md:text-2xl leading-relaxed transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  "{testimonials[index].message}"
                </p>
                
                <div className={`mt-8 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mb-4 rounded-full"></div>
                  <p className="font-bold text-2xl uppercase tracking-widest text-green-400">
                    {testimonials[index].client}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">Valued Client</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${index === idx ? 'bg-green-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Right */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <button
              onClick={nextSlide}
              className="bg-green-600 hover:bg-green-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Client Logos Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {testimonials.slice(0, 6).map((testimonial, i) => (
              <div key={i} className="text-xl font-bold text-gray-300 hover:text-green-400 transition-colors">
                {testimonial.client}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(1); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;