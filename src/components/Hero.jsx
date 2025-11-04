import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Play,
  ArrowRight,
  ChevronLeft,
  X,
} from "lucide-react";
import slide1 from '/images/services/fixture-installations/12.jpg'
import slide2 from '/images/services/store-remodels/1.jpg'
import slide3 from '/images/services/new-store-launches/11.jpg'
import heroVideo from '/video/hero-video.mp4'; 

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const content = [
    {
      title: "Solutions de Merchandising Sur Mesure",
      highlight: "Transformez votre espace de vente.",
      description:
        "Des solutions qui optimisent l'expérience client et dynamisent vos ventes.",
      color: "from-blue-400 to-cyan-500",
      buttonColor: "from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700",
      textColor: "text-blue-100",
      highlightColor: "from-blue-300 to-cyan-400",
      image: slide2,
    },
    {
      title: "Lancement de Nouveaux Points de Vente",
      highlight: "Excellence Opérationnelle Garantie",
      description:
        "Ouverture réussie avec un merchandising optimisé, la formation de votre équipe et une mise en place clé-en-main.",
      color: "from-amber-400 to-orange-500",
      buttonColor: "from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700",
      textColor: "text-amber-100",
      highlightColor: "from-amber-300 to-orange-400",
      image: slide1,
    },
    {
      title: "Optimisation de l'Espace de Vente",
      highlight: "Augmentez Votre Chiffre d'Affaires",
      description:
        "Assistance stratégique, implantation des produits et signalétique pour convertir davantage de visiteurs.",
      color: "from-emerald-400 to-green-500",
      buttonColor: "from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700",
      textColor: "text-emerald-100",
      highlightColor: "from-emerald-300 to-green-400",
      image: slide3,
    },
  ];

  // Auto-rotation avec contrôle pause/play
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % content.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [content.length, isPlaying]);

  // Fonctions de navigation
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % content.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + content.length) % content.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  // Video modal functions
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative h-screen overflow-hidden w-full bg-gray-900"
    >
      {/* Images de fond */}
      <div className="absolute inset-0 z-0">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              scale: index === activeIndex ? 1.1 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Superposition dégradée améliorée */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-gray-900/80 to-transparent"></div>

      {/* Contenu */}
      <div className="relative z-10 h-full lg:mt-4 flex items-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="">
            {/* Contenu texte */}
            <div className="text-left max-w-5xl"> 
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    <span className="block">{content[activeIndex].title}</span>
                    <motion.span
                      className={`block text-3xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${content[activeIndex].highlightColor} mt-3`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                    >
                      {content[activeIndex].highlight}
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className={`text-lg md:text-xl ${content[activeIndex].textColor} mb-8 max-w-xl leading-relaxed`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    {content[activeIndex].description}
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4" 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    <Link to='/services'>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-3 w-full bg-gradient-to-r ${content[activeIndex].buttonColor} text-white font-semibold cursor-pointer rounded-lg hover:shadow-xl transition-all duration-300 shadow-md flex items-center justify-center sm:justify-start`} 
                    >
                        Démarrer un Projet
                       <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                      </Link>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={openVideoModal}
                      className="px-8 py-3 bg-white/10 cursor-pointer text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center sm:justify-start" 
                    >
                      <Play className="mr-2 w-5 h-5" /> Voir la Vidéo
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Flèches de navigation */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 bottom-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-6 bottom-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Indicateurs */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex justify-center gap-2">
        {content.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setIsPlaying(false);
              setTimeout(() => setIsPlaying(true), 8000);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? `bg-gradient-to-r ${content[index].color} w-8`
                : "bg-white/40 hover:bg-white/60"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Afficher le contenu ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + index * 0.1 }}
          />
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div
              className="relative bg-gray-900 rounded-xl max-w-4xl w-full overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[80vh]"
                controls
                autoPlay
                muted
                playsInline
              >
                <source src={heroVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {/* Video Title */}
              <div className="p-4 bg-gray-900">
                <h3 className="text-white text-lg font-semibold">
                  Présentation de nos services
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  Découvrez comment nous transformons vos espaces de vente
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;