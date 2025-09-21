import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  Eye, 
  Calendar, 
  User, 
  TrendingUp, 
  X,
  ArrowRight,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Catégories
  const categories = ['Tous', 'Transformations de magasins', 'Vitrines saisonnières', 'Designs de vitrines', 'Marchandisage de produits'];
  
  // Projets du portfolio
  const projects = [
    {
      id: 1,
      title: "Ouverture d’un hypermarché",
      category: "Transformations de magasins",
      client: "MegaMart International",
      duration: "4 semaines",
      results: "40% de ventes supplémentaires la semaine d’ouverture, 60k visiteurs",
      description: "Mise en place complète d’un nouvel hypermarché incluant la planification des espaces, l’installation de mobilier et le merchandising visuel afin de créer un parcours client fluide.",
      challenges: "Coordination à grande échelle, délais stricts, intégration de plusieurs départements",
      solutions: "Équipes projet dédiées, planogrammes détaillés, stratégie d’exécution par phases",
      featured: true,
      image: "https://images.unsplash.com/photo-1679954570743-fadc1f2953f4?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Grande vitrine de la saison des fêtes",
      category: "Vitrines saisonnières",
      client: "CityMall",
      duration: "2 semaines",
      results: "85% d’augmentation des ventes de produits saisonniers",
      description: "Création de décorations de Noël et Nouvel An à grande échelle avec storytelling thématique, zones interactives et accessoires attractifs.",
      challenges: "Délais serrés, expériences clients engageantes, forte affluence",
      solutions: "Accessoires préfabriqués, décors modulaires festifs, bornes digitales interactives",
      featured: true,
      image: "https://images.unsplash.com/photo-1622020619472-1ce723164183?q=80&w=870&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Design de vitrine pour une marque de cosmétiques de luxe",
      category: "Designs de vitrines",
      client: "Glow Cosmetics",
      duration: "1 semaine",
      results: "Taux d’engagement triplé, +20% d’entrées en magasin",
      description: "Vitrines élégantes avec éclairage premium, accessoires en acrylique et branding saisonnier pour mettre en avant les nouveaux lancements.",
      challenges: "Petite surface vitrine, exigences premium, clientèle haut de gamme",
      solutions: "Éclairage sur mesure, présentoirs rotatifs, visuels à thème luxe",
      featured: true,
      image: "https://images.unsplash.com/photo-1593214451196-37e0651f8ef2?w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Optimisation des allées de supermarché",
      category: "Transformations de magasins",
      client: "FreshMart",
      duration: "3 semaines",
      results: "+25% de ventes dans les catégories clés, navigation plus fluide",
      description: "Réorganisation des allées et du placement des produits afin d’augmenter leur visibilité et améliorer le parcours client.",
      challenges: "Grand volume de références, continuité opérationnelle, confort d’achat",
      solutions: "Refonte des planogrammes, signalétique claire, placement stratégique des produits à forte demande",
      featured: false,
      image: "https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Lancement de la collection printemps",
      category: "Vitrines saisonnières",
      client: "Urban Chic",
      duration: "1 semaine",
      results: "+50% de ventes pour les nouveautés",
      description: "Merchandising à thème floral avec palettes de couleurs coordonnées et vitrines adaptées aux réseaux sociaux pour lancer la collection printemps.",
      challenges: "Budget limité, rotation saisonnière rapide, buzz sur les réseaux sociaux",
      solutions: "Éléments réutilisables, location de décors floraux, zones photo-friendly pour influenceurs",
      featured: false,
      image: "https://plus.unsplash.com/premium_photo-1724220736623-3dec690300c7?w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Merchandising de produits électroniques",
      category: "Marchandisage de produits",
      client: "TechZone",
      duration: "5 jours",
      results: "70% de taux de vente dans le premier mois",
      description: "Placement stratégique des produits électroniques et accessoires avec zones de démonstration interactives.",
      challenges: "Installation technique complexe, formation du personnel, forte concurrence",
      solutions: "Comptoirs de démonstration interactifs, optimisation du flux clients, manuels de formation",
      featured: false,
      image: "https://images.unsplash.com/photo-1713387918705-18caf0b377df?w=600&auto=format&fit=crop"
    },
  ];

  // Filtrage
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'Tous' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Tri
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'featured') {
      return b.featured - a.featured;
    } else if (sortBy === 'recent') {
      return b.id - a.id;
    }
    return 0;
  });

  useEffect(() => {  
    window.scrollTo(0, 0);
  }, []);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <div className="h-64 md:h-80 w-full bg-gradient-to-r from-teal-500 to-blue-600 relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              {project.featured && (
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Projet vedette
                </div>
              )}
            </div>
            
            <div className="p-6">
              <span className="text-sm text-teal-600 font-semibold">{project.category}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2 mb-4">{project.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Client</h4>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Durée du projet</h4>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Résultats obtenus</h4>
                      <p className="text-teal-600 font-medium">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Aperçu du projet</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Défis</h4>
                  <p className="text-gray-600">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Nos solutions</h4>
                  <p className="text-gray-600">{project.solutions}</p>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center">
                Voir l’étude de cas complète <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:px-6 py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Notre Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos transformations réussies en merchandising qui ont généré des résultats mesurables pour les enseignes à travers le pays.
          </p>
        </motion.div>

        {/* Filtres et recherche */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 bg-white rounded-2xl p-6 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filtres
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="featured">Trier par : Vedette</option>
                <option value="recent">Trier par : Récent</option>
              </select>
            </div>
          </div>
          
          {/* Filtres développés */}
          {isFilterOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <h4 className="font-medium text-gray-700 mb-3">Filtrer par catégorie</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Grille de projets */}
        {sortedProjects.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            <AnimatePresence>
              {sortedProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button className="bg-white text-teal-600 rounded-full p-2 shadow-md">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
                        Vedette
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{project.category}</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2 line-clamp-1">{project.title}</h3>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span>{project.client}</span>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">Résultats</h4>
                      <p className="text-teal-600 font-medium text-sm">{project.results}</p>
                    </div>
                    
                    <button className="mt-4 w-full flex items-center justify-center text-teal-600 hover:text-teal-700 font-medium py-2 text-sm group-hover:bg-gray-50 rounded-lg transition-colors">
                      Voir les détails <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">Aucun projet ne correspond à vos critères</div>
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

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Notre impact en chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">{projects.length}+</div>
              <div className="text-teal-100">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold">28%</div>
              <div className="text-teal-100">Hausse moyenne des ventes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">97%</div>
              <div className="text-teal-100">Satisfaction client</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15</div>
              <div className="text-teal-100">Secteurs desservis</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Prêt à transformer votre espace de vente ?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discutons ensemble de la manière dont notre expertise en merchandising peut valoriser votre marque et stimuler vos ventes.
          </p>
          <Link to='/contact' className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
            Contactez-nous <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
