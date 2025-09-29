import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  X,
  Filter,
  Sparkles,
  BookOpen,
  MessageCircle,
  Zap,
  ArrowRight,
  Star,
  HelpCircle,
  Lightbulb,
  Mail,
  Phone,
} from "lucide-react";

const FAQ = () => {
  const [idActif, setIdActif] = useState(null);
  const [termeRecherche, setTermeRecherche] = useState("");
  const [categorieSelectionnee, setCategorieSelectionnee] = useState("Tout");
  const [idSurvole, setIdSurvole] = useState(null);
  const rechercheRef = useRef(null);

  // Données FAQ
  const faqs = [
    {
      id: "general-1",
      question: "Qu'est-ce que le marchandisage de détail et comment peut-il bénéficier à mon entreprise ?",
      answer: "Le marchandisage de détail consiste à présenter stratégiquement les produits en magasin afin de maximiser les ventes et d'améliorer l'expérience client. Cela inclut le placement des produits, la conception des présentoirs, les stratégies de tarification et la gestion des stocks. Pour votre entreprise, un marchandisage efficace peut augmenter les ventes de 15 à 30 %, améliorer la perception de la marque, réduire les coûts d'inventaire et créer un environnement d'achat engageant qui favorise la fidélité des clients.",
      categorie: "Général",
      icone: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      id: "processus-2",
      question: "Combien de temps dure généralement un projet de marchandisage en magasin ?",
      answer: "La durée varie en fonction de la taille du magasin et de l'ampleur du projet. Une petite mise à jour de magasin peut prendre 2 à 3 jours, tandis qu'une refonte complète d'un grand magasin peut durer 2 à 4 semaines. Cela inclut l'évaluation initiale, le développement de la stratégie, la mise en œuvre et la formation du personnel. Nous travaillons toujours efficacement afin de minimiser les perturbations tout en garantissant des résultats de haute qualité.",
      categorie: "Processus",
      icone: <Sparkles className="w-5 h-5 text-blue-500" />,
    },
    {
      id: "clients-3",
      question: " Travaillez-vous avec les petites entreprises locales ainsi qu’avec les grandes chaînes de distribution ?",
      answer: "Oui, nous accompagnons des entreprises de toutes tailles. Nous proposons des solutions adaptées aux petites boutiques locales ainsi que des programmes évolutifs pour les chaînes nationales. Notre approche est toujours personnalisée en fonction de vos besoins, de votre budget et de vos objectifs. Nous pensons que le marchandisage efficace ne dépend pas de la taille de votre entreprise, mais de la compréhension de vos clients et de la manière de présenter vos produits de façon attrayante.",
      categorie: "Clients",
      icone: <Star className="w-5 h-5 text-purple-500" />,
    },
    {
      id: "services-4",
      question: "Qu'est-ce qui est inclus dans vos forfaits de services de marchandisage ?",
      answer: "Nos forfaits complets incluent : la planification de l'aménagement du magasin, la stratégie de placement des produits, la conception et l'installation des présentoirs, la signalétique et les visuels, l'évaluation des stocks, la stratégie de tarification, la formation du personnel et l'analyse des performances. Nous proposons différents niveaux de service pour que vous puissiez choisir ce qui correspond le mieux à vos besoins et à votre budget. Tous les forfaits incluent un suivi post-implémentation et une assistance continue de 30 jours.",
      categorie: "Services",
      icone: <Lightbulb className="w-5 h-5 text-green-500" />,
    },
    {
      id: "demarrage-5",
      question: "Comment pouvons-nous commencer à travailler avec vos services ?",
      answer: "C'est très simple ! Tout commence par une consultation gratuite durant laquelle nous : 1) Discutons de vos objectifs et défis commerciaux, 2) Réalisons une évaluation préliminaire de votre espace actuel (en virtuel ou sur place), 3) Proposons des solutions potentielles et des estimations d'investissement, et 4) Répondons à toutes vos questions. Si nous correspondons à vos attentes, nous créerons une proposition personnalisée. Il n'y a aucune obligation tant que vous ne décidez pas de poursuivre avec nos services.",
      categorie: "Processus",
      icone: <Sparkles className="w-5 h-5 text-blue-500" />,
    },
    {
      id: "saisonnier-6",
      question: "Pouvez-vous aider au merchandising saisonnier et aux promotions ?",
      answer: "Absolument ! Le marchandisage saisonnier est l'une de nos spécialités. Nous aidons les entreprises à tirer parti des fêtes, des saisons et des événements spéciaux grâce à des présentations et promotions ciblées. Nos services saisonniers incluent : le développement de concepts, la création de présentoirs thématiques, la planification promotionnelle et l'exécution. Nous planifions généralement 2 à 3 mois à l'avance afin de préparer parfaitement votre magasin à chaque opportunité saisonnière.",
      categorie: "Services",
      icone: <Lightbulb className="w-5 h-5 text-green-500" />,
    },
    {
      id: "support-7",
      question: "Proposez-vous un accompagnement continu ou uniquement des projets ponctuels ?",
      answer: "Nous offrons les deux options selon vos besoins. De nombreux clients commencent par une mise à jour ponctuelle de leur magasin, puis choisissent un accompagnement continu pour maintenir les standards et s'adapter aux tendances. Nos forfaits d'accompagnement incluent : des audits réguliers de marchandisage, des mises à jour de présentations, des formations de rafraîchissement pour le personnel et des transformations saisonnières. Cela garantit que votre magasin reste attrayant et continue de stimuler efficacement les ventes.",
      categorie: "Services",
      icone: <Lightbulb className="w-5 h-5 text-green-500" />,
    },
    {
      id: "tarification-8",
      question: "Comment fonctionne votre structure tarifaire ?",
      answer: "Nous proposons une tarification transparente avec plusieurs options : prix au projet pour les interventions ponctuelles, forfaits mensuels pour un accompagnement continu et solutions personnalisées pour les grandes chaînes. Le prix des projets dépend de la taille du magasin, de l'ampleur des travaux et des matériaux nécessaires. Nous fournissons des devis détaillés sans coûts cachés. La plupart de nos clients constatent un retour sur investissement en 3 à 6 mois grâce à l'augmentation des ventes et à une meilleure efficacité.",
      categorie: "Tarifs",
      icone: <HelpCircle className="w-5 h-5 text-red-500" />,
    },
    {
      id: "differentiation-9",
      question: "En quoi vos services de merchandising se distinguent-ils de ceux de vos concurrents ?",
      answer: "Notre approche combine des stratégies basées sur les données et une conception créative, le tout soutenu par plus de 15 ans d'expérience en commerce de détail. Contrairement à de nombreux concurrents, nous : 1) Utilisons l'analyse des flux clients pour guider les décisions d'aménagement, 2) Fournissons une formation détaillée du personnel, 3) Proposons des garanties de performance, 4) Intégrons des stratégies de marchandisage physique et digital, et 5) Mettons l'accent sur la création d'expériences uniques de marque plutôt que sur le simple placement de produits. Nous devenons de véritables partenaires dans le succès de nos clients.",
      categorie: "Différenciation",
      icone: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      id: "resultats-10",
      question: "Comment mesurez-vous le succès de vos stratégies de merchandising ?",
      answer: "Nous utilisons plusieurs indicateurs pour mesurer le succès, notamment : l'analyse des données de ventes (avant et après la mise en œuvre), les retours et enquêtes clients, le temps passé en magasin, les taux de conversion et les taux d'écoulement des produits spécifiques. Nous fournissons des rapports détaillés montrant le retour sur investissement de nos actions de marchandisage et proposons des recommandations pour une amélioration continue.",
      categorie: "Résultats",
      icone: <Star className="w-5 h-5 text-purple-500" />,
    },
  ];

  // Catégories pour le filtre
  const categories = ["Tout", ...new Set(faqs.map((faq) => faq.categorie))];

  // FAQs filtrées
  const faqsFiltrees = useMemo(() => {
    return faqs.filter(
      (faq) =>
        (categorieSelectionnee === "Tout" || faq.categorie === categorieSelectionnee) &&
        (faq.question.toLowerCase().includes(termeRecherche.toLowerCase()) ||
          faq.answer.toLowerCase().includes(termeRecherche.toLowerCase()))
    );
  }, [termeRecherche, categorieSelectionnee]);

  // Gérer l'ouverture/fermeture (un seul ouvert à la fois)
  const basculerFAQ = (id) => {
    setIdActif(idActif === id ? null : id);
  };

  // Effacer la recherche
  const effacerRecherche = () => {
    setTermeRecherche("");
    rechercheRef.current.focus();
  };

  // Variantes d'animation du conteneur
  const variantesConteneur = {
    cache: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Variantes d'animation des éléments
  const variantesElement = {
    cache: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mt-16 mx-auto">
        {/* Section En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="w-16 h-16  max-[588px]:hidden rounded-full bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg flex items-center justify-center mr-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              Foire aux questions
            </h1>
          </motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Trouvez des réponses aux questions fréquentes concernant nos services et nos solutions de merchandising de détail.
          </motion.p>
        </motion.div>

        {/* Section Recherche & Filtre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={rechercheRef}
                type="text"
                placeholder="Recherchez une question ou une réponse..."
                className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                value={termeRecherche}
                onChange={(e) => setTermeRecherche(e.target.value)}
              />
              {termeRecherche && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={effacerRecherche}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </motion.button>
              )}
            </div>

            <motion.div
              className="relative md:w-64"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none appearance-none transition-all duration-300 bg-white cursor-pointer"
                value={categorieSelectionnee}
                onChange={(e) => setCategorieSelectionnee(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Liste FAQ */}
        <motion.div
          variants={variantesConteneur}
          initial="cache"
          animate="visible"
          className="space-y-4"
        >
          {faqsFiltrees.length > 0 ? (
            faqsFiltrees.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={variantesElement}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl"
                whileHover={{ y: -3 }}
                onHoverStart={() => setIdSurvole(faq.id)}
                onHoverEnd={() => setIdSurvole(null)}
              >
                <button
                  onClick={() => basculerFAQ(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="p-2 rounded-lg mt-0.5"
                      animate={{
                        rotate: idSurvole === faq.id ? [0, -10, 10, -10, 0] : 0,
                        scale: idSurvole === faq.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {faq.icone}
                    </motion.div>
                    <div className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: idActif === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="flex-shrink-0 ml-2"
                  >
                    <motion.div
                      className="bg-teal-100 p-1.5 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronDown className="w-5 h-5 text-teal-600" />
                    </motion.div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {idActif === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                        <motion.div
                          className="flex"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex-shrink-0 mr-4 mt-1">
                            <Sparkles className="w-5 h-5 text-teal-400" />
                          </div>
                          <div>{faq.answer}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <motion.div
                className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <Search className="w-8 h-8 text-teal-500" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Aucun résultat trouvé
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Essayez de modifier votre recherche ou vos filtres pour trouver ce que vous cherchez.
              </p>
              <motion.button
                onClick={() => {
                  setTermeRecherche("");
                  setCategorieSelectionnee("Tout");
                }}
                className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réinitialiser les filtres
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Section Aide supplémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Éléments d'arrière-plan animés */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                backgroundSize: "50% 50%",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">
               Vous avez encore des questions ?
              </h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                Vous ne trouvez pas la réponse que vous cherchez ? Notre équipe est là pour vous aider concernant nos services.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="mailto:Sveta@mymirage.fr"
                  className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-md flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Email
                </motion.a>
                <motion.a
                  href="tel:+40749111592"
                  className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-md flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Appelez-nous
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;