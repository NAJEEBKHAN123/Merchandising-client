import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Categories for filtering
  const categories = ['All', 'Retail Transformations', 'Seasonal Displays', 'Window Designs', 'Product Merchandising'];
  
  // Portfolio projects - 8 total as recommended
  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion Boutique Transformation',
      category: 'Retail Transformations',
      client: 'Elena Fashion Boutique',
      duration: '3 weeks',
      results: '32% sales increase, 45% longer customer dwell time',
      // This would be your FEATURED project (1 of 3-4)
      featured: true
    },
    {
      id: 2,
      title: 'Department Store Holiday Display',
      category: 'Seasonal Displays',
      client: 'Metro Department Store',
      duration: '2 weeks',
      results: '78% increase in holiday sales YoY',
      featured: true
    },
    {
      id: 3,
      title: 'Jewelry Store Window Design',
      category: 'Window Designs',
      client: 'Diamond Gallery',
      duration: '1 week',
      results: 'Tripled window engagement, 15% traffic increase',
      featured: true
    },
    {
      id: 4,
      title: 'Sportswear Store Layout Optimization',
      category: 'Retail Transformations',
      client: 'ActiveLife Sports',
      duration: '2 weeks',
      results: '28% sales increase, better product visibility',
      featured: false
    },
    {
      id: 5,
      title: 'Spring Collection Launch',
      category: 'Seasonal Displays',
      client: 'Nature\'s Blossom Boutique',
      duration: '1 week',
      results: '42% sales increase for featured collection',
      featured: false
    },
    {
      id: 6,
      title: 'Product Line Merchandising',
      category: 'Product Merchandising',
      client: 'HomeStyle Living',
      duration: '4 days',
      results: '65% sell-through rate for featured products',
      featured: false
    },
  
  ];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

    useEffect(() => {  
      window.scrollTo(0,0)
    
    }, [])
    

  return (
    <div className="min-h-screen bg-gray-50 lg:px-6 py-16 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore {projects.length} successful merchandising transformations that have driven results for retail businesses.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                Project Image
                {project.featured && (
                  <span className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <span className="text-sm text-pink-600 font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{project.title}</h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Client:</span> {project.client}</p>
                  <p><span className="font-medium">Duration:</span> {project.duration}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Results Achieved:</h4>
                  <p className="text-pink-600 font-medium">{project.results}</p>
                </div>
                
                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-lg transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Our Portfolio By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600">{projects.length}</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">28%</div>
              <div className="text-gray-600">Average Sales Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">97%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">15</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;