// components/WorkflowProcess.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const WorkflowProcess = () => {
  const processSteps = [
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
  ];

  return (
    <>
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 lg:px-10 relative">
          {processSteps.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full">
                <div className="text-4xl mb-6 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
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

      {/* Section Appel à l'action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre Espace de Vente ?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Collaborons pour créer des expériences d'achat exceptionnelles qui favorisent la croissance et fidélisent vos clients.
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
                  Nous Contacter
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
                  Voir Nos Réalisations
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WorkflowProcess;