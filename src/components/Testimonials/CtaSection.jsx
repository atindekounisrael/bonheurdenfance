import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => (
  <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-white"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-fredoka mb-6">
          Rejoignez notre famille !
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Faites comme ces parents satisfaits et offrez à votre enfant 
          la meilleure éducation préscolaire à Cocody.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/inscription">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Inscrire mon enfant
            </Button>
          </Link>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
            Planifier une visite
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;