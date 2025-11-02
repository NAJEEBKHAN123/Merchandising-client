// Portfolio.jsx - WITH AUTO-SLIDESHOW
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../constants/portfolioData';
import { 
  Eye, 
  Calendar, 
  Tag,
  TrendingUp, 
  X,
  ArrowRight,
  ArrowRightCircle,
  ArrowLeftCircle,
  Store,
  Package,
  Settings,
  ExternalLink,
  Play,
  Pause
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['Tous', 'Implantation de produits', 'Réassort et mise en rayon', 'Montage de mobilier métallique'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'Tous' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []);

  // Quick Image Preview Modal with Auto-Slideshow
  const ImagePreviewModal = ({ project, onClose }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);

    // Auto-play functionality
    useEffect(() => {
      if (isPlaying && project.images.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentImgIndex(prev => 
            prev === project.images.length - 1 ? 0 : prev + 1
          );
        }, 3000); // Change image every 3 seconds
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [isPlaying, project.images.length]);

    const nextImage = () => {
      setCurrentImgIndex(prev => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentImgIndex(prev => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    const toggleSlideshow = () => {
      setIsPlaying(!isPlaying);
    };

    const goToDetailPage = () => {
      onClose();
      navigate(`/portfolio/${project.id}`);
    };

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* IMAGE GALLERY WITH AUTO-SLIDESHOW */}
          <div className="relative h-80 bg-gray-900">
            <img 
              src={project.images[currentImgIndex]} 
              alt={`${project.title} - Image ${currentImgIndex + 1}`}
              className="w-full h-full object-contain transition-opacity duration-500"
              key={currentImgIndex} // Force re-render for smooth transition
            />
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all z-10"
                >
                  <ArrowLeftCircle className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all z-10"
                >
                  <ArrowRightCircle className="w-5 h-5" />
                </button>
              </>
            )}
            
            {/* Slideshow Controls */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <button 
                  onClick={toggleSlideshow}
                  className="bg-white/80 hover:bg-white rounded-full p-2 transition-all"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                
                {/* Progress Dots */}
                <div className="flex gap-1">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImgIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImgIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImgIndex + 1} / {project.images.length}
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Info & CTA */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm text-teal-600 font-semibold">{project.category}</span>
                <h2 className="text-xl font-bold text-gray-800 mt-1">{project.title}</h2>
              </div>
              <button 
                onClick={goToDetailPage}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Voir détails
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const getServiceIcon = (category) => {
    switch(category) {
      case 'Implantation de produits':
        return <Store className="w-6 h-6" />;
      case 'Réassort et mise en rayon':
        return <Package className="w-6 h-6" />;
      case 'Montage de mobilier métallique':
        return <Settings className="w-6 h-6" />;
      default:
        return <Store className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:px-6 py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nos Services en Images</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre expertise à travers des réalisations concrètes. Les images défilent automatiquement pour une meilleure visualisation.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* MAIN PROJECT IMAGE */}
                  <div 
                    className="h-64 relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Eye className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">Voir {project.images.length} photos</p>
                        <p className="text-sm mt-1">Défilement automatique</p>
                      </div>
                    </div>

                    {/* Image Count Badge */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                        +{project.images.length - 1}
                      </div>
                    )}

                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Vedette
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-teal-600 mr-2">
                        {getServiceIcon(project.category)}
                      </div>
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 line-clamp-2">{project.title}</h3>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Tag className="w-4 h-4 mr-2" />
                      <span>{project.serviceType}</span>
                    </div>

                    {/* Quick Results */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-teal-600 font-semibold text-sm">{project.results}</p>
                    </div>
                    
                    {/* Dual CTA Buttons */}
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center text-sm"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Diaporama
                      </button>
                      <Link 
                        to={`/portfolio/${project.id}`}
                        className="flex-1 border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-3 rounded-lg transition-colors flex items-center justify-center text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Détails
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">Aucun service ne correspond à vos critères</div>
            <button 
              onClick={() => {
                setActiveCategory('Tous');
                setSearchQuery('');
              }}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Vous avez besoin de nos services ?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Que ce soit pour l'ouverture d'un nouveau magasin, l'optimisation de vos rayons ou le montage de votre mobilier, notre équipe est à votre disposition.
          </p>
          <Link to='/contact' className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
            Discutons de votre projet <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Quick Image Preview Modal with Auto-Slideshow */}
      <AnimatePresence>
        {selectedProject && (
          <ImagePreviewModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;