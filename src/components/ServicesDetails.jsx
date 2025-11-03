import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftCircle,
  CheckCircle,
} from "lucide-react";
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
  }, [id]);

  useEffect(() => {
    let interval;
    if (autoPlay && service && service.images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === service.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, service, currentIndex]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">Service non trouvé</h2>
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

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16 px-4 md:px-8">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour aux Services
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          {service.title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Solution professionnelle adaptée à vos besoins
        </p>

        {/* Contact Us Button */}
        <button
          onClick={handleContactClick}
          className="mt-6 relative bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 group overflow-hidden"
        >
          <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
            Contactez-nous
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        </button>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 bg-white shadow-lg rounded-2xl p-6 md:p-8">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            À propos de ce service
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            {service.description}
          </p>

          {/* Key Features */}
          {service.features && service.features.length > 0 && (
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Caractéristiques principales
              </h3>
              <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 border-l-4 border-blue-500"
                  >
                    <CheckCircle
                      size={24}
                      className="text-green-500 mt-1 mr-4 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-lg mb-2">
                        {typeof feature === 'object' ? feature.title : feature}
                      </h4>
                      {typeof feature === 'object' && feature.description && (
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Image Slider */}
        <div
          className="lg:w-1/2 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sticky top-8">
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
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-blue-600"
                        : "bg-gray-300 hover:bg-gray-400"
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
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ArrowLeftCircle size={28} className="text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300"
                  aria-label="Next image"
                >
                  <ArrowRight size={28} className="text-gray-700" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Additional Contact Button at Bottom */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et
            obtenir un devis personnalisé.
          </p>
          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 cursor-pointer text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 group overflow-hidden"
          >
            <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
              Demander un Devis
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;