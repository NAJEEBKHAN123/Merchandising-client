import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Award, 
  BarChart3, 
  Globe, 
  Shield,
  Heart,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-10 md:top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-2xl md:blur-3xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-20 md:top-40 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-2xl md:blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute bottom-10 md:bottom-20 left-8 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-700 rounded-full mix-blend-overlay filter blur-2xl md:blur-3xl opacity-30"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-16 md:pt-20">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We Transform Retail Spaces
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Leading the merchandising industry with innovation, precision, and excellence for over a decade
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Users, value: "250+", label: "Dedicated Team Members" },
              { icon: Globe, value: "1.2k+", label: "Stores Nationwide" },
              { icon: Award, value: "15+", label: "Industry Awards" },
              { icon: BarChart3, value: "98%", label: "Client Retention Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 md:p-6"
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <stat.icon className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="w-full lg:w-1/2"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl md:rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-600 rounded-xl md:rounded-2xl overflow-hidden border-4 md:border-8 border-white shadow-lg md:shadow-xl"
                  initial={{ opacity: 0, x: 50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  whileHover={{ rotate: 1, scale: 1.05 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our Work" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6"
                variants={fadeInVariants}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed"
                variants={fadeInVariants}
              >
                Founded in 2010, MSCO began with a simple mission: to revolutionize retail merchandising through innovative strategies and flawless execution. What started as a small team of passionate experts has grown into a industry leader serving major retailers across the nation.
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed"
                variants={fadeInVariants}
              >
                Our journey has been guided by core values of integrity, excellence, and client success. We believe that exceptional merchandising isn't just about product placement—it's about creating immersive shopping experiences that drive results.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                variants={containerVariants}
              >
                {["Quality Assurance", "Innovation Focus", "Client First"].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="text-blue-600 w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span className="text-sm md:text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10 md:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Target, title: "Excellence in Execution", description: "We don't just meet expectations—we exceed them. Every planogram, display, and merchandising solution is executed with precision and attention to detail." },
              { icon: Heart, title: "Client Partnership", description: "Your success is our success. We work collaboratively with our clients, becoming an extension of your team and invested in achieving your business goals." },
              { icon: Shield, title: "Integrity & Trust", description: "We build relationships on a foundation of honesty and transparency. Our clients trust us to represent their brands with the same care they would." }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <value.icon className="text-blue-600 w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Retail Space?</h2>
          <p className="text-lg md:text-xl max-w-2xl md:max-w-3xl mx-auto mb-8 md:mb-10">
            Let's discuss how our merchandising expertise can elevate your brand and drive sales
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link to='/contact' className="bg-white text-blue-700 cursor-pointer font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base inline-block">
                Schedule a Consultation
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link to='/services' className="border-2 border-white cursor-pointer text-white font-bold py-3 px-6 md:px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-700 text-sm md:text-base inline-block">
                View Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;