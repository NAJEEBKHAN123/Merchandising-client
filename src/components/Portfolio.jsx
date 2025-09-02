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
  Award,
  X,
  ArrowRight,
  Play
} from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Categories for filtering
  const categories = ['All', 'Retail Transformations', 'Seasonal Displays', 'Window Designs', 'Product Merchandising'];
  
  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion Boutique Transformation',
      category: 'Retail Transformations',
      client: 'Elena Fashion Boutique',
      duration: '3 weeks',
      results: '32% sales increase, 45% longer customer dwell time',
      description: 'Complete store redesign focusing on luxury customer experience with enhanced lighting, custom fixtures, and strategic product placement.',
      challenges: 'Limited space, high-end product display requirements, maintaining brand elegance',
      solutions: 'Custom modular displays, strategic lighting plan, optimized customer flow',
      featured: true,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Department Store Holiday Display',
      category: 'Seasonal Displays',
      client: 'Metro Department Store',
      duration: '2 weeks',
      results: '78% increase in holiday sales YoY',
      description: 'Large-scale holiday transformation across all departments with thematic consistency and interactive elements.',
      challenges: 'Tight timeline, coordinating multiple departments, creating wow factor',
      solutions: 'Pre-fabricated display elements, dedicated installation teams, interactive digital elements',
      featured: true,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Jewelry Store Window Design',
      category: 'Window Designs',
      client: 'Diamond Gallery',
      duration: '1 week',
      results: 'Tripled window engagement, 15% traffic increase',
      description: 'Luxury jewelry window displays with custom lighting, security integration, and dramatic presentation.',
      challenges: 'Security requirements, small item visibility, creating luxury appeal',
      solutions: 'Integrated security displays, specialized lighting, rotating platforms',
      featured: true,
      image: 'https://images.unsplash.com/photo-1606760227093-3cbfb79f2f0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80'
    },
    {
      id: 4,
      title: 'Sportswear Store Layout Optimization',
      category: 'Retail Transformations',
      client: 'ActiveLife Sports',
      duration: '2 weeks',
      results: '28% sales increase, better product visibility',
      description: 'Reorganized store layout to improve customer flow and highlight key product categories.',
      challenges: 'High inventory turnover, diverse product categories, active customer demographic',
      solutions: 'Zoned layout, dynamic signage, interactive product testing areas',
      featured: false,
      image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1179&q=80'
    },
    {
      id: 5,
      title: 'Spring Collection Launch',
      category: 'Seasonal Displays',
      client: 'Nature\'s Blossom Boutique',
      duration: '1 week',
      results: '42% sales increase for featured collection',
      description: 'Seasonal launch with floral themes, custom props, and coordinated color storytelling.',
      challenges: 'Quick seasonal transition, limited budget, creating Instagrammable moments',
      solutions: 'Multi-use display elements, botanical rentals, social media integration',
      featured: false,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 6,
      title: 'Product Line Merchandising',
      category: 'Product Merchandising',
      client: 'HomeStyle Living',
      duration: '4 days',
      results: '65% sell-through rate for featured products',
      description: 'Strategic placement and presentation of new home goods product line across multiple stores.',
      challenges: 'Consistent execution across locations, training staff, competitive market',
      solutions: 'Detailed planograms, video training modules, performance tracking',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    },
  ];

  // Filter projects based on selected category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort projects
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
                  Featured Project
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
                      <h4 className="font-semibold text-gray-800">Project Duration</h4>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Results Achieved</h4>
                      <p className="text-teal-600 font-medium">{project.results}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Challenges</h4>
                  <p className="text-gray-600">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Our Solutions</h4>
                  <p className="text-gray-600">{project.solutions}</p>
                </div>
              </div>
              
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center">
                View Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
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
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our successful merchandising transformations that have driven measurable results for retail businesses nationwide.
          </p>
        </motion.div>

        {/* Filters and Search */}
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
                placeholder="Search projects..."
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
                Filters
                <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="recent">Sort by: Recent</option>
              </select>
            </div>
          </div>
          
          {/* Expanded Filters */}
          {isFilterOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <h4 className="font-medium text-gray-700 mb-3">Filter by Category</h4>
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

        {/* Projects Grid */}
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
                        Featured
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
                      <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">Results</h4>
                      <p className="text-teal-600 font-medium text-sm">{project.results}</p>
                    </div>
                    
                    <button className="mt-4 w-full flex items-center justify-center text-teal-600 hover:text-teal-700 font-medium py-2 text-sm group-hover:bg-gray-50 rounded-lg transition-colors">
                      View Details <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No projects found matching your criteria</div>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">{projects.length}+</div>
              <div className="text-teal-100">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">28%</div>
              <div className="text-teal-100">Average Sales Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold">97%</div>
              <div className="text-teal-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15</div>
              <div className="text-teal-100">Industries Served</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to transform your retail space?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our merchandising expertise can elevate your brand and drive sales.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </button>
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