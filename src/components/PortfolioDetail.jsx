// PortfolioDetail.jsx - WITH AUTO-SLIDESHOW & SCROLL TO TOP
import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  Tag,
  Store,
  Package,
  Settings,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowUp,
} from "lucide-react";
import projects from "../constants/portfolioData";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const intervalRef = useRef(null);

  const project = projects.find((p) => p.id === parseInt(id));

  // Auto-slideshow functionality
  useEffect(() => {
    if (isPlaying && project?.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, project?.images.length]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Projet non trouvé
          </h2>
          <Link to="/portfolio" className="text-teal-600 hover:text-teal-700">
            Retour au portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };

  const getServiceIcon = (category) => {
    switch (category) {
      case "Implantation de produits":
        return <Store className="w-8 h-8" />;
      case "Réassort et mise en rayon":
        return <Package className="w-8 h-8" />;
      case "Montage de mobilier métallique":
        return <Settings className="w-8 h-8" />;
      default:
        return <Store className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:px-6 py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour au portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN - IMAGE GALLERY */}
          <div className="space-y-6">
            {/* MAIN LARGE IMAGE WITH AUTO-SLIDESHOW */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 lg:h-[500px] object-cover transition-opacity duration-500"
                key={currentImageIndex}
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Slideshow Controls */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/50 rounded-full px-3 py-2">
                  <button
                    onClick={toggleSlideshow}
                    className="text-white hover:text-teal-200 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>

                  {/* Progress Dots */}
                  <div className="flex gap-1">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* THUMBNAIL GRID - ALL IMAGES VISIBLE BELOW */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Toutes les photos ({project.images.length})
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-teal-500 scale-105 shadow-md"
                        : "border-gray-200 hover:border-teal-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - PROJECT DETAILS */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="text-teal-600 mt-1">
                {getServiceIcon(project.category)}
              </div>
              <div>
                <span className="text-sm text-teal-600 font-semibold uppercase tracking-wide">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Description du Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Stats - REMOVED Durée Typique */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Résultats
                  </h3>
                </div>
                <p className="text-teal-600 font-medium">{project.results}</p>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Type de Service
                  </h3>
                </div>
                <p className="text-gray-700">{project.serviceType}</p>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Notre Processus
              </h2>
              <motion.ul className="space-y-3 list-none">
                {project.process.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg leading-relaxed">
                      {step}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        {/* CTA - Full Width & Centered */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-teal-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Intéressé par ce service ?
            </h3>
            <p className="text-teal-100 mb-6 text-lg">
              Contactez-nous pour discuter de votre projet
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-teal-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300 hover:scale-110"
            aria-label="Remonter en haut"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioDetail;