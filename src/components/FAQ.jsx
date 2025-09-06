import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Search, X, Filter, Sparkles, 
  BookOpen, MessageCircle, Zap, ArrowRight,
  Star, HelpCircle, Lightbulb, Mail, Phone
} from "lucide-react";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const searchRef = useRef(null);

  // Dummy FAQ data
  const faqs = [
    {
      id: 'general-1',
      question: "What exactly is retail merchandising and how can it benefit my business?",
      answer: "Retail merchandising involves strategically presenting products in-store to maximize sales and enhance the customer experience. It includes product placement, display design, pricing strategies, and inventory management. For your business, effective merchandising can increase sales by 15-30%, improve brand perception, reduce inventory costs, and create a more engaging shopping environment that encourages repeat business.",
      category: "General",
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      id: 'process-2',
      question: "How long does a typical store merchandising project take?",
      answer: "The timeline varies based on store size and project scope. A small retail store refresh might take 2-3 days, while a complete large-store redesign could take 2-4 weeks. This includes the initial assessment, strategy development, implementation, and staff training. We always work efficiently to minimize disruption to your business operations while ensuring the highest quality results.",
      category: "Process",
      icon: <Sparkles className="w-5 h-5 text-blue-500" />
    },
    {
      id: 'clients-3',
      question: "Do you work with both small local businesses and large retail chains?",
      answer: "Yes, we serve businesses of all sizes. We have tailored solutions for small local boutiques as well as scalable programs for national retail chains. Our approach is always customized to your specific needs, budget, and goals. We believe that effective merchandising isn't about the size of your business, but about understanding your customers and presenting your products in the most appealing way.",
      category: "Clients",
      icon: <Star className="w-5 h-5 text-purple-500" />
    },
    {
      id: 'services-4',
      question: "What's included in your merchandising service packages?",
      answer: "Our comprehensive packages include: store layout planning, product placement strategy, display design and installation, signage and graphics, inventory assessment, pricing strategy, staff training, and performance analytics. We offer different tiers of service so you can choose what best fits your needs and budget. All packages include a post-implementation review and ongoing support for 30 days.",
      category: "Services",
      icon: <Lightbulb className="w-5 h-5 text-green-500" />
    },
    {
      id: 'getting-started-5',
      question: "How do we get started with your services?",
      answer: "Getting started is easy! It begins with a complimentary consultation where we: 1) Discuss your business goals and challenges, 2) Perform a preliminary assessment of your current space (can be virtual or in-person), 3) Outline potential solutions and investment ranges, and 4) Answer all your questions. If we're a good fit, we'll create a customized proposal. There's no obligation until you decide to move forward with our services.",
      category: "Process",
      icon: <Sparkles className="w-5 h-5 text-blue-500" />
    },
    {
      id: 'seasonal-6',
      question: "Can you help with seasonal merchandising and promotions?",
      answer: "Absolutely! Seasonal merchandising is one of our specialties. We help businesses capitalize on holidays, changing seasons, and special events with targeted displays and promotions. Our seasonal services include: concept development, thematic display creation, promotional planning, and execution. We typically plan 2-3 months in advance to ensure your store is perfectly prepared for each seasonal opportunity.",
      category: "Services",
      icon: <Lightbulb className="w-5 h-5 text-green-500" />
    },
    {
      id: 'support-7',
      question: "Do you provide ongoing support or just one-time projects?",
      answer: "We offer both options based on your needs. Many clients start with a one-time store refresh or redesign, then opt for ongoing support to maintain standards and adapt to changing trends. Our ongoing support packages include: regular merchandising audits, display updates, staff refresher training, and seasonal transformations. This ensures your store always looks its best and continues to drive sales effectively.",
      category: "Services",
      icon: <Lightbulb className="w-5 h-5 text-green-500" />
    },
    {
      id: 'pricing-8',
      question: "How does your pricing structure work?",
      answer: "We offer transparent pricing with several options: project-based pricing for one-time initiatives, monthly retainers for ongoing support, and customized enterprise solutions for larger chains. Project pricing is based on store size, scope of work, and materials required. We provide detailed quotes with no hidden costs. Most of our clients see a return on their investment within 3-6 months through increased sales and improved efficiency.",
      category: "Pricing",
      icon: <HelpCircle className="w-5 h-5 text-red-500" />
    },
    {
      id: 'differentiation-9',
      question: "What makes your merchandising services different from competitors?",
      answer: "Our approach combines data-driven strategies with creative design, all backed by 15+ years of retail experience. Unlike many competitors, we: 1) Use customer flow analytics to inform layout decisions, 2) Provide detailed staff training to maintain standards, 3) Offer performance guarantees, 4) Blend digital and physical merchandising strategies, and 5) Focus on creating unique brand experiences rather than just product placement. We become true partners in our clients' success.",
      category: "Differentiation",
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      id: 'results-10',
      question: "How do you measure the success of your merchandising strategies?",
      answer: "We use multiple metrics to measure success, including: sales data analysis (comparing pre and post-implementation figures), customer feedback and surveys, dwell time measurements, conversion rates, and sell-through rates for specific products. We provide detailed reports that show the ROI of our merchandising efforts and make recommendations for continuous improvement.",
      category: "Results",
      icon: <Star className="w-5 h-5 text-purple-500" />
    },
  ];

  // Categories for filter
  const categories = ["All", ...new Set(faqs.map((faq) => faq.category))];

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        (selectedCategory === "All" || faq.category === selectedCategory) &&
        (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedCategory]);

  // Handle toggle (only one open at a time)
  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    searchRef.current.focus();
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mt-16 mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="w-16 h-16  max-[588px]:hidden rounded-full bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg flex items-center justify-center mr-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              Frequently Asked Questions
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Find answers to common questions about our retail merchandising services and solutions.
          </motion.p>
        </motion.div>

        {/* Search & Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search questions or answers..."
                className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </motion.button>
              )}
            </div>

            <motion.div 
              className="relative md:w-64"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none appearance-none transition-all duration-300 bg-white cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl"
                whileHover={{ y: -3 }}
                onHoverStart={() => setHoveredId(faq.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="p-2 rounded-lg mt-0.5"
                      animate={{ 
                        rotate: hoveredId === faq.id ? [0, -10, 10, -10, 0] : 0,
                        scale: hoveredId === faq.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {faq.icon}
                    </motion.div>
                    <div className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="flex-shrink-0 ml-2"
                  >
                    <motion.div 
                      className="bg-teal-100 p-1.5 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronDown className="w-5 h-5 text-teal-600" />
                    </motion.div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, delay: 0.1 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                        <motion.div 
                          className="flex"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex-shrink-0 mr-4 mt-1">
                            <Sparkles className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>{faq.answer}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <motion.div 
                className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Search className="w-8 h-8 text-teal-500" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <motion.button
                onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear filters
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Help Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                backgroundSize: '50% 50%'
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our services.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <motion.a 
                  href="mailto:support@merchelevate.com"
                  className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-md flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Email Us
                </motion.a>
                <motion.a 
                  href="tel:+15551234567"
                  className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-md flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;