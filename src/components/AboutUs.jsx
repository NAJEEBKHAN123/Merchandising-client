import React, { useEffect } from "react";
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
  CheckCircle
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

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-y-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-10 left-4 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-500 rounded-full mix-blend-overlay filter blur-lg sm:blur-xl opacity-30"
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
            className="absolute top-20 right-4 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-300 rounded-full mix-blend-overlay filter blur-lg sm:blur-xl opacity-20"
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
            className="absolute bottom-10 left-8 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-700 rounded-full mix-blend-overlay filter blur-lg sm:blur-xl opacity-30"
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
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 md:pt-20">
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We Transform Retail Spaces
          </motion.h1>
          <motion.p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2"
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
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Users, value: "250+", label: "Team Members" },
              { icon: Globe, value: "1.2k+", label: "Stores Nationwide" },
              { icon: Award, value: "15+", label: "Industry Awards" },
              { icon: BarChart3, value: "98%", label: "Client Retention" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm"
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="text-blue-600 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-xs xs:text-sm text-gray-600 leading-tight px-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12"
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
                  className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-gray-100 rounded-lg md:rounded-xl overflow-hidden"
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
                  className="absolute -bottom-2 -right-2 xs:-bottom-3 xs:-right-3 w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-blue-600 rounded-lg md:rounded-xl overflow-hidden border-2 xs:border-4 border-white shadow-md"
                  initial={{ opacity: 0, x: 20, y: 20 }}
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
              className="w-full lg:w-1/2 mt-8 lg:mt-0"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-6"
                variants={fadeInVariants}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-sm xs:text-base md:text-lg text-gray-600 mb-3 md:mb-6 leading-relaxed"
                variants={fadeInVariants}
              >
                Founded in 2010, MSCO began with a simple mission: to revolutionize retail merchandising through innovative strategies and flawless execution. What started as a small team of passionate experts has grown into a industry leader serving major retailers across the nation.
              </motion.p>
              <motion.p 
                className="text-sm xs:text-base md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed"
                variants={fadeInVariants}
              >
                Our journey has been guided by core values of integrity, excellence, and client success. We believe that exceptional merchandising isn't just about product placement—it's about creating immersive shopping experiences that drive results.
              </motion.p>
              <motion.div 
                className="flex flex-col xs:flex-row gap-2 xs:gap-3 md:gap-4 flex-wrap"
                variants={containerVariants}
              >
                {["Quality Assurance", "Innovation Focus", "Client First"].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle className="text-blue-600 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                    <span className="text-xs xs:text-sm md:text-base font-medium">{item}</span>
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
            className="text-center mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Our Core Values</h2>
            <p className="text-sm xs:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-2">
              These principles guide everything we do and define who we are as a company
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8"
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
                className="bg-white p-4 xs:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-blue-100 w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 xs:mb-4">
                  <value.icon className="text-blue-600 w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-base xs:text-lg md:text-xl font-bold text-gray-800 mb-2 xs:mb-3">{value.title}</h3>
                <p className="text-xs xs:text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
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
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">Ready to Transform Your Retail Space?</h2>
          <p className="text-sm xs:text-base md:text-lg lg:text-xl max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-8 px-2">
            Let's discuss how our merchandising expertise can elevate your brand and drive sales
          </p>
          <motion.div 
            className="flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link 
                to='/contact' 
                className="inline-flex items-center bg-white text-blue-700 font-semibold py-2 px-4 xs:py-3 xs:px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm md:text-base"
              >
                Contact Us <ArrowRight className="ml-1 xs:ml-2 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                to='/services' 
                className="inline-flex items-center border border-white xs:border-2 text-white font-semibold py-2 px-4 xs:py-3 xs:px-6 md:px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-700 text-xs xs:text-sm md:text-base"
              >
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