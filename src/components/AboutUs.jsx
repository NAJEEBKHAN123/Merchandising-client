// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   Users, 
//   Target, 
//   Award, 
//   BarChart3, 
//   Globe, 
//   Shield,
//   Heart,
//   ArrowRight,
//   CheckCircle
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const fadeInVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

// const AboutUs = () => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-y-hidden">
//       {/* Hero Section */}
//       <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
//         <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>
        
//         <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 md:pt-20">
//           <motion.h1 
//             className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             Nous transformons les espaces de vente
//           </motion.h1>
//           <motion.p 
//             className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             Leader du merchandising depuis plus d’une décennie grâce à l’innovation, la précision et l’excellence.
//           </motion.p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//           >
//             {[
//               { icon: Users, value: "250+", label: "Membres de l’équipe" },
//               { icon: Globe, value: "1.2k+", label: "Magasins à l’échelle nationale" },
//               { icon: Award, value: "15+", label: "Récompenses de l’industrie" },
//               { icon: BarChart3, value: "98%", label: "Taux de fidélisation" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="p-3 sm:p-4 md:p-6 bg-white rounded-lg shadow-sm"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="bg-blue-100 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-2">
//                   <stat.icon className="text-blue-600 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
//                 </div>
//                 <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
//                 <p className="text-xs xs:text-sm text-gray-600 leading-tight px-1">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-12 md:py-16 lg:py-20">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//             variants={containerVariants}
//           >
//             <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
//               <div className="relative">
//                 <motion.div 
//                   className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-gray-100 rounded-lg md:rounded-xl overflow-hidden"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <img 
//                     src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80" 
//                     alt="Notre équipe" 
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </div>
//             </motion.div>
            
//             <motion.div className="w-full lg:w-1/2 mt-8 lg:mt-0" variants={itemVariants}>
//               <motion.h2 
//                 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-6"
//                 variants={fadeInVariants}
//               >
//                 Notre Histoire
//               </motion.h2>
//               <motion.p 
//                 className="text-sm xs:text-base md:text-lg text-gray-600 mb-3 md:mb-6 leading-relaxed"
//                 variants={fadeInVariants}
//               >
//                 Fondée en 2010, <strong>Mirage erchandising</strong> est née d’une mission simple : révolutionner le merchandising en grande distribution grâce à des stratégies innovantes et une exécution irréprochable. Ce qui a commencé avec une petite équipe d’experts passionnés est devenu un leader de l’industrie au service des plus grands distributeurs du pays.
//               </motion.p>
//               <motion.p 
//                 className="text-sm xs:text-base md:text-lg text-gray-600 mb-4 md:mb-8 leading-relaxed"
//                 variants={fadeInVariants}
//               >
//                 Notre parcours a été guidé par des valeurs fondamentales : intégrité, excellence et réussite de nos clients. Pour nous, un merchandising exceptionnel ne se limite pas au placement des produits — il s’agit de créer des expériences d’achat immersives qui génèrent des résultats.
//               </motion.p>
//               <motion.div 
//                 className="flex flex-col xs:flex-row gap-2 xs:gap-3 md:gap-4 flex-wrap"
//                 variants={containerVariants}
//               >
//                 {["Assurance Qualité", "Innovation Continue", "Client Avant Tout"].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     className="flex items-center mb-2"
//                     whileHover={{ x: 5 }}
//                   >
//                     <CheckCircle className="text-blue-600 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
//                     <span className="text-xs xs:text-sm md:text-base font-medium">{item}</span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <motion.div 
//             className="text-center mb-8 md:mb-12 lg:mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
//               Nos Valeurs Fondamentales
//             </h2>
//             <p className="text-sm xs:text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-2">
//               Ces principes guident chacune de nos actions et définissent qui nous sommes en tant qu’entreprise.
//             </p>
//           </motion.div>
          
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-50px" }}
//           >
//             {[
//               { icon: Target, title: "Excellence dans l’Exécution", description: "Nous ne nous contentons pas de répondre aux attentes : nous les dépassons. Chaque planogramme, présentation et solution de merchandising est exécuté avec précision et souci du détail." },
//               { icon: Heart, title: "Partenariat Client", description: "Votre réussite est la nôtre. Nous travaillons en étroite collaboration avec nos clients, comme une extension de leur équipe, investis dans l’atteinte de leurs objectifs." },
//               { icon: Shield, title: "Intégrité & Confiance", description: "Nous bâtissons des relations sur l’honnêteté et la transparence. Nos clients nous confient leur marque en toute sérénité." }
//             ].map((value, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white p-4 xs:p-5 md:p-6 lg:p-8 rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//                 whileHover={{ y: -5, scale: 1.02 }}
//               >
//                 <div className="bg-blue-100 w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 xs:mb-4">
//                   <value.icon className="text-blue-600 w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7" />
//                 </div>
//                 <h3 className="text-base xs:text-lg md:text-xl font-bold text-gray-800 mb-2 xs:mb-3">{value.title}</h3>
//                 <p className="text-xs xs:text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
//         <motion.div 
//           className="container mx-auto px-4 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
//             Prêt à transformer votre espace de vente ?
//           </h2>
//           <p className="text-sm xs:text-base md:text-lg lg:text-xl max-w-2xl md:max-w-3xl mx-auto mb-4 md:mb-8 px-2">
//             Discutons de la manière dont notre expertise en merchandising peut valoriser votre marque et stimuler vos ventes.
//           </p>
//           <motion.div 
//             className="flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-3 sm:gap-4"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.div variants={itemVariants}>
//               <Link 
//                 to='/contact' 
//                 className="inline-flex items-center bg-white text-blue-700 font-semibold py-2 px-4 xs:py-3 xs:px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm md:text-base"
//               >
//                 Nous Contacter <ArrowRight className="ml-1 xs:ml-2 w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
//               </Link>
//             </motion.div>
//             <motion.div variants={itemVariants}>
//               <Link 
//                 to='/services' 
//                 className="inline-flex items-center border border-white xs:border-2 text-white font-semibold py-2 px-4 xs:py-3 xs:px-6 md:px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-700 text-xs xs:text-sm md:text-base"
//               >
//                 Voir Nos Services
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;
