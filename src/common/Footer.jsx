import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Heart,
  Shield,
  Award,
  Users,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mr-3">
                <Award className="w-6 h-6" />
              </div>
              MerchElevate
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming retail spaces into engaging shopping experiences. We specialize in strategic merchandising solutions that drive sales and enhance brand presence.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -3, scale: 1.05 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.05 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.05 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.05 }}
                href="#" 
                className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Portfolio', 'Testimonials', 'Case Studies', 'Our Team', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">Our Services</h4>
            <ul className="space-y-3">
              {['Store Layout Design', 'Visual Merchandising', 'Seasonal Displays', 'Inventory Optimization', 'Brand Implementation', 'Retail Analytics'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 mt-1 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300">123 Retail Street, Commerce City, CC 90210</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-4 mt-1 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-4 mt-1 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300">info@merchelevate.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-4 mt-1 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9AM - 6PM<br />Sat: 10AM - 4PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-indigo-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-xl font-semibold mb-2">Stay Updated with Retail Trends</h4>
              <p className="text-gray-300">Subscribe to our newsletter for industry insights and tips</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 border border-white focus:ring-white text-gray-100 w-full md:w-64"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-r-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-indigo-800 py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 mr-3 text-green-400" />
              <span className="text-sm">Certified Retail Merchandisers</span>
            </div>
            <div className="flex items-center">
              <Users className="w-8 h-8 mr-3 text-blue-400" />
              <span className="text-sm">200+ Clients Nationwide</span>
            </div>
            <div className="flex items-center">
              <Award className="w-8 h-8 mr-3 text-yellow-400" />
              <span className="text-sm">Industry Award Winners 2023</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-indigo-950 to-purple-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MerchElevate. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <motion.a 
                whileHover={{ color: "#ffffff" }}
                href="#" 
                className="transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ color: "#ffffff" }}
                href="#" 
                className="transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a 
                whileHover={{ color: "#ffffff" }}
                href="#" 
                className="transition-colors"
              >
                Cookie Policy
              </motion.a>
              <motion.a 
                whileHover={{ color: "#ffffff" }}
                href="#" 
                className="transition-colors"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button 
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-16 h-16"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;