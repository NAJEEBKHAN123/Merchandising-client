import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Star,
  Award,
  Clock,
  Users,
} from "lucide-react";
import services from "../constants/servicesData";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Premium Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mt-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Comprehensive retail merchandising solutions designed to elevate
            your brand, enhance customer experience, and drive measurable
            results.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {[
              { icon: Users, value: "250+", label: "Clients" },
              { icon: Award, value: "98%", label: "Satisfaction" },
              { icon: Star, value: "4.9/5", label: "Rating" },
              { icon: Clock, value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={`/services/${service.id}`}>
                <div className="relative group overflow-hidden shadow-lg rounded-lg">
                  {/* Image */}
                  <div className="h-64 lg:h-96 overflow-hidden">
                    <img
                      src={service.images}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl text-center font-bold text-white mb-4 px-4">
                      {service.title}
                    </h3>

                    {/* Learn More Button */}
                    <button
                      className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white/10 font-medium py-2 px-6 sm:px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1"
                      style={{
                        boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        OUR WORKFLOW
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Proven Process
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A structured approach that ensures exceptional results for every retail merchandising project
      </p>
    </motion.div>

    {/* Process Steps */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
      {/* Connecting line */}
      <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
      
      {[
        {
          step: "01",
          title: "Discovery & Consultation",
          desc: "We begin with an in-depth analysis of your brand, target audience, and retail objectives to understand your unique needs.",
          icon: "🔍",
          color: "from-blue-500 to-blue-600",
          features: ["Brand Analysis", "Goal Setting", "Market Research"]
        },
        {
          step: "02",
          title: "Strategic Planning",
          desc: "Our experts develop a customized merchandising strategy tailored to your specific retail environment and business goals.",
          icon: "📊",
          color: "from-purple-500 to-purple-600",
          features: ["Custom Strategy", "Layout Planning", "Visual Design"]
        },
        {
          step: "03",
          title: "Execution & Implementation",
          desc: "Our skilled team brings the plan to life with precision installation, product placement, and visual merchandising.",
          icon: "⚡",
          color: "from-teal-500 to-teal-600",
          features: ["Precision Installation", "Product Placement", "Quality Assurance"]
        },
        {
          step: "04",
          title: "Ongoing Support",
          desc: "We provide continuous monitoring, maintenance, and optimization to ensure long-term success and ROI.",
          icon: "🔄",
          color: "from-green-500 to-green-600",
          features: ["Performance Monitoring", "Regular Updates", "Continuous Optimization"]
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Step connector (mobile) */}
          <div className="lg:hidden absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-teal-400"></div>
          
          {/* Step Number */}
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
            {item.step}
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
            {/* Icon */}
            <div className="text-4xl mb-6 text-center">{item.icon}</div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              {item.desc}
            </p>
            
            {/* Features */}
            <div className="space-y-2">
              {item.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Hover effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <p className="text-lg text-gray-600 mb-8">
        Ready to implement this proven process for your business?
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg"
      >
        Start Your Project Today
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Space?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Let's collaborate to create exceptional shopping experiences that
              drive growth and customer loyalty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
