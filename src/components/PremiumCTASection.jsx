// components/PremiumCTASection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  FileText, 
  Shield,
  Star,
  CheckCircle2
} from "lucide-react";

const PremiumCTASection = () => {
  const features = [
    {
      icon: Clock,
      text: "Réponse sous 24 heures",
      description: "Notre équipe vous répond rapidement"
    },
    {
      icon: FileText,
      text: "Devis personnalisé",
      description: "Adapté à vos besoins spécifiques"
    },
    {
      icon: Shield,
      text: "Sans engagement",
      description: "Évaluation gratuite et sans obligation"
    }
  ];

  const stats = [
    { value: "50+", label: "Projets Réalisés" },
    { value: "98%", label: "Clients Satisfaits" },
    { value: "24/7", label: "Support Client" }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <span className="text-sm font-semibold">DEVIS GRATUIT</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Prêt à{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Démarrer
              </span>{" "}
              Votre Projet ?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg"
            >
              Discutons de vos besoins en merchandising et créons ensemble une solution 
              <span className="font-semibold text-white"> sur mesure </span>
              pour transformer votre espace de vente.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{feature.text}</div>
                    <div className="text-blue-200 text-sm">{feature.description}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main CTA Card */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full blur-sm"></div>
              
              <div className="relative z-10">
                {/* Card Header */}
                <div className="text-center mb-8">
                  <MessageCircle className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Consultation Gratuite
                  </h3>
                  <p className="text-blue-100">
                    Obtenez votre devis personnalisé
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  {[
                    "Analyse complète de vos besoins",
                    "Solution sur mesure",
                    "Estimation précise des coûts",
                    "Plan de mise en œuvre"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center"
                >
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Obtenir un Devis Gratuit
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>

                {/* Trust Badge */}
                <div className="text-center mt-4">
                  <p className="text-blue-200 text-sm">
                    🔒 Confidentialité garantée
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg"
            >
              <div className="text-center">
                <div className="text-cyan-400 font-bold text-lg">50+</div>
                <div className="text-blue-200 text-xs">Projets</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg"
            >
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg">98%</div>
                <div className="text-blue-200 text-xs">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTASection;