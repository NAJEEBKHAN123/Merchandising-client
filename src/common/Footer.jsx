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
  Home,
  FileText,
  Users as UsersIcon,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Composant d'icône TikTok personnalisé
const TikTokIcon = ({ size = 20, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.525 2H8.475V16.4C8.475 17.72 7.445 18.8 6.175 18.8C4.905 18.8 3.875 17.72 3.875 16.4C3.875 15.08 4.905 14 6.175 14C6.675 14 7.125 14.12 7.525 14.36V10.04C7.075 10 6.625 10 6.175 10C2.765 10 0 12.92 0 16.4C0 19.88 2.765 22.8 6.175 22.8C9.585 22.8 12.35 19.88 12.35 16.4V8.48C13.45 9.44 14.875 10.04 16.475 10.04V6.08C14.325 6.08 12.525 4.16 12.525 2Z"
      fill={color}
    />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Fonction de défilement vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Afficher le bouton de défilement vers le haut lors du défilement
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

  // Gérer la navigation pour les liens rapides
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Défiler vers le haut après la navigation
  };

  // Liens rapides avec chemins et icônes
  const quickLinks = [
    { name: "Accueil", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: FileText },
    { name: "Portfolio", path: "/portfolio", icon: BriefcaseBusiness },
    { name: "Témoignages", path: "/testimonials", icon: UsersIcon },
    { name: "À Propos", path: "/about", icon: Users },
    { name: "FAQ", path: "/faq", icon: HelpCircle },
    { name: "Contact", path: "/contact", icon: MessageCircle },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan améliorés */}
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
        {/* Éléments flottants supplémentaires */}
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

      {/* Contenu principal du pied de page */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-8  lg:gap-20">
          {/* Informations sur l'entreprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1"
          >
            <div className="flex items-start mb-6">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-3 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
              >
                <Award className="w-7 h-7" />
              </motion.div>
              <div>
                <div className="flex items-end">
                  <h3 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-200">
                    M I R A G E
                  </h3>
                </div>
                <p className="text-lg ml-3 -mt-1">erchandising</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformer les espaces de vente au détail en expériences d'achat engageantes. Nous nous spécialisons dans
              des solutions stratégiques de merchandising qui stimulent les ventes et améliorent la présence de la
              marque.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  icon: Facebook,
                  color: "hover:bg-blue-600",
                  label: "Facebook",
                },
                {
                  icon: Twitter,
                  color: "hover:bg-blue-400",
                  label: "Twitter",
                },
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
                {
                  icon: TikTokIcon,
                  color: "hover:bg-black",
                  label: "TikTok",
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

          {/* Liens rapides - Bureau */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="hidden md:block"
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center group w-full text-left"
                  >
                    <ArrowRight className="w-4 h-4 mr-2  text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Accordéons pour mobile */}
          <div className="md:hidden space-y-4">
            {/* Accordéon des liens rapides */}
            <motion.div
              className="bg-indigo-900/30 rounded-lg overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full px-4 py-3 flex justify-between items-center text-left font-semibold"
              >
                <span>Liens Rapides</span>
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
                      {quickLinks.map((link, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <button
                            onClick={() => handleNavigation(link.path)}
                            className="text-gray-300 hover:text-white transition-colors flex items-center py-1 w-full text-left"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 text-indigo-400" />
                            {link.name}
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-indigo-700">
              Contactez-Nous
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Rue du Commerce, Ville Commerce, CC 90210",
                },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "info@merchelevate.com" },
                { icon: Clock, text: "Lun-Ven: 9h - 18h\nSam: 10h - 16h" },
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

        {/* Section Newsletter */}
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
                Restez Informé des Tendances Retail
              </h4>
              <p className="text-gray-300">
                Abonnez-vous à notre newsletter pour des insights et conseils du secteur
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
                  placeholder="Votre adresse e-mail"
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
                S'abonner <Send className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
          </div>

          {/* Message de succès */}
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
                  Merci de votre abonnement ! Vérifiez votre e-mail pour confirmation.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Badges de confiance */}
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
                text: "Merchandisers Retail Certifiés",
                color: "text-green-400",
              },
              {
                icon: Users,
                text: "200+ Clients à l'Échelle Nationale",
                color: "text-blue-400",
              },
              {
                icon: Award,
                text: "Lauréats des Prix du Secteur 2023",
                color: "text-yellow-400",
              },
              {
                icon: Star,
                text: "4.9/5 Note Clients",
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

      {/* Pied de page inférieur */}
      <div className="bg-gradient-to-r from-indigo-950 to-purple-900 py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center justify-center flex-wrap">
              Conçu & Développé par{" "}
              <a
                href="https://personal-portfolio-six-delta-17.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1"
              >
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-bold hover:from-blue-300 hover:to-green-300 transition-all duration-300">
                  Najeeb Ullah
                </span>
              </a>
              <span className="mx-2 max-[400px]:hidden">•</span>©{" "}
              {new Date().getFullYear()} MIRAGE erchandising
            </p>
          </div>
        </div>
      </div>

      {/* Boutons d'action flottants */}
      <AnimatePresence>
        {/* Bouton de défilement vers le haut */}
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
              aria-label="Défiler vers le haut"
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