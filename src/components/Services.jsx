import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Award,
  Clock,
  Users,
  MessageCircle,
} from "lucide-react";
import services from "../constants/servicesData";
import WorkflowProcess from "../components/WorkflowProcess";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête de page */}
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
            Nos Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mt-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Des solutions complètes de merchandising pour booster votre marque,
            améliorer l'expérience client et générer des résultats mesurables.
          </motion.p>

          {/* Statistiques */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {[
              { icon: Users, value: "50+", label: "Clients" },
              { icon: Award, value: "98%", label: "Satisfaction" },
              { icon: Star, value: "4.9/5", label: "Évaluation" },
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

      {/* Section Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={`/services/${service.id}`}>
                <div className="relative group overflow-hidden shadow-lg rounded-lg cursor-pointer">
                  {/* Image */}
                  <div className="h-64 lg:h-96 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl text-center font-bold text-white mb-4 px-4">
                      {service.title}
                    </h3>

                    {/* Single Button - Only "En savoir plus" */}
                    <button
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1"
                      style={{
                        boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      En savoir plus
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Professional CTA Button Section */}
      <section className="py-12 bg-gradient-to-t from-gray-400 to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à Démarrer Votre Projet ?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins en merchandising et créons ensemble une solution sur mesure pour votre entreprise.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
              >
                <MessageCircle className="w-6 h-6" />
                Obtenir un Devis Gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <p className="text-blue-200 text-sm mt-4">
              Réponse sous 24 heures • Devis personnalisé • Sans engagement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Process Component */}
      <WorkflowProcess />
    </div>
  );
};

export default Services;