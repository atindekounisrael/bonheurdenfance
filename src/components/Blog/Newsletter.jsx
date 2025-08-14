import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Newsletter = ({ onSubscribe }) => (
  <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold font-fredoka gradient-text mb-6">
          Restez informés !
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Recevez nos derniers articles et conseils directement dans votre boîte mail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 px-4 py-3 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none"
          />
          <Button 
            onClick={onSubscribe}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-medium"
          >
            S'abonner
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Newsletter;