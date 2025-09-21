import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MessageCircle, Send, 
  User, Calendar, Award,
  CheckCircle, Loader
} from "lucide-react";
import axios from 'axios'

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    urgency: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const urgencyOptions = [
    { value: "urgent", label: "Urgent (Dans 1 semaine)" },
    { value: "soon", label: "Bientôt (Dans 2-3 semaines)" },
    { value: "planning", label: "Planification (Le mois prochain)" },
    { value: "future", label: "Futur (Juste en recueil d'infos)" }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email est invalide";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!formData.urgency) newErrors.urgency = "Veuillez sélectionner un délai";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Appel API
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData,
         { headers: { "Content-Type": "application/json" } }
      )
      if(response.data.success){
      console.log("✅ Demande de devis soumise:", response.data);
      setIsSubmitted(true);
      } else {
      console.error("❌ Échec de la soumission:", response.data.message);
      alert(response.data.message || "Quelque chose s'est mal passé. Veuillez réessayer.");
    }
    }  catch (error) {
    console.error("❌ Erreur de soumission:", error);
    alert(
      error.response?.data?.message || "Erreur serveur. Veuillez réessayer plus tard."
    );
  } finally {
    setIsSubmitting(false);
  }
};

   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "", urgency: "" });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mt-8 mx-auto p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-2xl border border-green-200"
      >
        <div className="text-center ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Demande Envoyée !</h2>
          <p className="text-lg text-gray-600 mb-8">
            Merci pour votre intérêt. Nous vous contacterons dans les 24 heures pour discuter de votre projet.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetForm}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            Soumettre une Autre Demande
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* Section En-tête */}
      <div className="bg-gradient-to-r from-blue-600 mt-20 to-teal-600 text-white p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Award className="w-8 h-8" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-2">Obtenez Votre Devis Personnalisé</h2>
        <p className="text-blue-100">Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures</p>
      </div>

      <div className="p-8">
        {/* Indicateurs de Progression */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div className="w-16 h-1 bg-blue-600 mx-2"></div>
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div className="w-16 h-1 bg-gray-300 mx-2"></div>
            <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
          </div>
        </div>

        {/* Formulaire de Devis */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <User className="w-4 h-4 mr-2 text-blue-600" />
                Nom Complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom complet"
                className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                Adresse Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@exemple.com"
                className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                Numéro de Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 1 23 45 67 89"
                className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                Délai du Projet *
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className={`w-full p-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.urgency ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'
                }`}
              >
                <option value="">Quand avez-vous besoin de ce service ?</option>
                {urgencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.urgency && <p className="text-red-500 text-sm mt-1">{errors.urgency}</p>}
            </div>
          </div>
         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Détails du Projet (Optionnel)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Parlez-nous de votre projet, des exigences spécifiques ou de toute question que vous avez..."
              rows="4"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full py-4 text-white cursor-pointer font-semibold rounded-xl transition-all flex items-center justify-center ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-lg'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Traitement en cours...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Obtenez Votre Devis Maintenant
              </>
            )}
          </motion.button>
        </form>

        {/* Options de Contact Direct */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-6 font-medium">Vous préférez nous contacter directement ?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.a
              href="mailto:info@merchelevate.com"
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-medium text-blue-700">Envoyez-nous un Email</span>
              <span className="text-sm text-blue-600">info@merchelevate.com</span>
            </motion.a>

            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border border-green-200"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="font-medium text-green-700">WhatsApp</span>
              <span className="text-sm text-green-600">+33 1 23 45 67 89</span>
            </motion.a>

            <motion.a
              href="tel:+33123456789"
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <span className="font-medium text-purple-700">Appelez-nous</span>
              <span className="text-sm text-purple-600">+33 1 23 45 67 89</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GetQuote;