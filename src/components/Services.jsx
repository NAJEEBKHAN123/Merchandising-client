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
            améliorer l’expérience client et générer des résultats mesurables.
          </motion.p>

          {/* Statistiques */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {[
              { icon: Users, value: "250+", label: "Clients" },
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={`/services/${service.id}`}>
                <div className="relative group overflow-hidden shadow-lg rounded-lg">
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

                    {/* Bouton En savoir plus */}
                    <button
                      className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white/10 font-medium py-2 px-6 sm:px-8 rounded-md transition-all duration-300 transform hover:-translate-y-1"
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

      {/* Section Processus */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* En-tête de section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            FLUX DE TRAVAIL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Processus Éprouvé
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une approche structurée qui garantit des résultats exceptionnels pour chaque projet de merchandising.
          </p>
        </motion.div>

        {/* Étapes du processus */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {[
            {
              step: "01",
              title: "Découverte & Consultation",
              desc: "Nous commençons par une analyse approfondie de votre marque, de votre cible et de vos objectifs commerciaux afin de comprendre vos besoins uniques.",
              icon: "🔍",
              color: "from-blue-500 to-blue-600",
              features: ["Analyse de la marque", "Définition des objectifs", "Étude de marché"]
            },
            {
              step: "02",
              title: "Planification Stratégique",
              desc: "Nos experts développent une stratégie de merchandising personnalisée, adaptée à votre environnement commercial et à vos objectifs.",
              icon: "📊",
              color: "from-purple-500 to-purple-600",
              features: ["Stratégie personnalisée", "Planification des agencements", "Conception visuelle"]
            },
            {
              step: "03",
              title: "Exécution & Mise en œuvre",
              desc: "Notre équipe qualifiée concrétise le plan avec des installations précises, un placement optimal des produits et du merchandising visuel.",
              icon: "⚡",
              color: "from-teal-500 to-teal-600",
              features: ["Installation précise", "Mise en place des produits", "Contrôle qualité"]
            },
            {
              step: "04",
              title: "Support Continu",
              desc: "Nous assurons un suivi régulier, une maintenance et des optimisations continues pour garantir un succès durable et un bon retour sur investissement.",
              icon: "🔄",
              color: "from-green-500 to-green-600",
              features: ["Suivi des performances", "Mises à jour régulières", "Optimisation continue"]
            }
          ].map((item, index) => (
            <motion.div key={index} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                <div className="text-4xl mb-6 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6  leading-relaxed">
                  {item.desc}
                </p>
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Appel à l’action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre Espace de Vente ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Collaborons pour créer des expériences d’achat exceptionnelles qui favorisent la croissance et fidélisent vos clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div>
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Nous Contacter
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Voir Nos Réalisations
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
