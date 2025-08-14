import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-40 floating-animation"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-40 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-200 rounded-full opacity-40 floating-animation" style={{ animationDelay: '4s' }}></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl lg:text-6xl font-bold font-fredoka gradient-text mb-6">
          Inscription
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Rejoignez la famille Bonheur d'Enfance ! Téléchargez rapidement le formulaire qui convient à votre enfant, imprimez-le et remplissez-le avec les informations demandées. Appelez-nous au +2250703066665 pour une prise de rendez-vous.
          Vous pouvez nnous trouver sur YANGO ou GOOGLE MAPS en tapent "Crèche-garderie Bonheur d'Enfance" afin de vous rendre chez Bonheur d'Enfance sans souci.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
