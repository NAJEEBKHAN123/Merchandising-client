import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowLeftCircle, CheckCircle } from "lucide-react";
import services from "../constants/servicesData";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentIndex(0);
    
    // Set up the interval for automatic image change
    let interval;
    if (autoPlay && service && service.images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === service.images.length - 1 ? 0 : prev + 1
        );
      }, 3000); // Change image every 3 seconds
    }
    
    // Clean up the interval on component unmount or when service changes
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [id, autoPlay, service]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Service not found</h2>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  // Pause auto-play when user hovers over the image
  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  // Resume auto-play when user moves mouse away
  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16 px-6 md:px-8">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          {service.title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {service.tagline || "Professional solution for your needs"}
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl p-6 md:p-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            About this service
          </h2>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>

          {/* Key Features */}
          {service.features && service.features.length > 0 && (
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Key Features
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mt-1 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Image Slider */}
        <div 
          className="md:w-1/2 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={service.images[currentIndex]}
            alt={service.title}
            className="rounded-xl shadow-md w-full h-80 object-cover transition-opacity duration-500"
          />

          {/* Navigation Dots */}
          {service.images.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {service.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Slider Buttons */}
          {service.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous image"
              >
                <ArrowLeftCircle size={28} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight size={28} />
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;