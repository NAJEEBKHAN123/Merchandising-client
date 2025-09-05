import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Shield,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Send,
  Star,
  ThumbsUp,
  BriefcaseBusiness,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show scroll-to-top button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const quickLinks = [
    "Services",
    "Portfolio",
    "Testimonials",
    "About Us",
    "FAQs",
    "Contact",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Additional floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: 50 + i * 20,
              height: 50 + i * 20,
              top: `${20 + i * 15}%`,
              left: `${5 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: 360,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-3 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
              >
                <Award className="w-7 h-7" />
              </motion.div>
              <div className="flex justify-center items-end gap-1">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                  MIRAGE
                </h3>
                <span className="text-lg">erchandising</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming retail spaces into engaging shopping experiences. We
              specialize in strategic merchandising solutions that drive sales
              and enhance brand presence.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  icon: Facebook,
                  color: "hover:bg-blue-600",
                  label: "Facebook",
                },
                { icon: Twitter, color: "hover:bg-blue-400", label: "Twitter" },
                {
                  icon: Instagram,
                  color: "hover:bg-pink-600",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  color: "hover:bg-blue-700",
                  label: "LinkedIn",
                },
              ].map((Social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-indigo-800/70 flex items-center justify-center transition-colors backdrop-blur-sm ${Social.color} group`}
                  aria-label={Social.label}
                >
                  <Social.icon className="w-5 h-5" />
                  <span className="absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {Social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden md:block"
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Accordions for Mobile */}
          <div className="md:hidden space-y-4">
            {/* Quick Links Accordion */}
            <motion.div
              className="bg-indigo-900/30 rounded-lg overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full px-4 py-3 flex justify-between items-center text-left font-semibold"
              >
                <span>Quick Links</span>
                <motion.div
                  animate={{ rotate: activeAccordion === 0 ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeAccordion === 0 ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence>
                {activeAccordion === 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-3"
                  >
                    <ul className="space-y-2">
                      {quickLinks.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <a
                            href="#"
                            className="text-gray-300 hover:text-white transition-colors flex items-center py-1"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 text-indigo-400" />
                            {item}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Retail Street, Commerce City, CC 90210",
                },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "info@merchelevate.com" },
                { icon: Clock, text: "Mon-Fri: 9AM - 6PM\nSat: 10AM - 4PM" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-800/70 flex items-center justify-center mr-3 mt-1 group-hover:bg-indigo-700 transition-colors">
                    <item.icon className="w-4 h-4 text-indigo-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors whitespace-pre-line">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 pt-8 border-t border-indigo-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 flex items-center justify-center md:justify-start">
                <Send className="w-5 h-5 mr-2 text-indigo-400" />
                Stay Updated with Retail Trends
              </h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for industry insights and tips
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row w-full md:w-auto gap-3"
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border border-indigo-700 focus:ring-indigo-400 text-gray-100 w-full bg-indigo-900/30 backdrop-blur-sm placeholder-indigo-300/70"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-indigo-700/30 flex items-center justify-center"
              >
                Subscribe <Send className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
          </div>

          {/* Success message */}
          <AnimatePresence>
            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-3 bg-green-900/30 border border-green-700/30 rounded-lg text-green-300 text-center backdrop-blur-sm"
              >
                <div className="flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Thank you for subscribing! Check your email for confirmation.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-indigo-900/40 py-8 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              {
                icon: Shield,
                text: "Certified Retail Merchandisers",
                color: "text-green-400",
              },
              {
                icon: Users,
                text: "200+ Clients Nationwide",
                color: "text-blue-400",
              },
              {
                icon: Award,
                text: "Industry Award Winners 2023",
                color: "text-yellow-400",
              },
              {
                icon: Star,
                text: "4.9/5 Customer Rating",
                color: "text-amber-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center bg-indigo-900/30 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <item.icon className={`w-6 h-6 mr-3 ${item.color}`} />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-r from-indigo-950 to-purple-900 py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center justify-center flex-wrap">
              Designed & Developed by <span className="ml-1 text-gray-400 font-bold">Najeeb Ullah</span>
              <a
                href="https://personal-portfolio-six-delta-17.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1"
              >
                <BriefcaseBusiness className="w-5 h-5 text-blue-400 hover:text-blue-600" />
              </a>
              <span className="mx-2 max-[400px]:hidden">•</span>©{" "}
              {new Date().getFullYear()} MIRAGE erchandising
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {/* Scroll to Top Button */}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center w-14 h-14 shadow-indigo-700/50 border-2 border-white/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
