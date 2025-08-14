import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const TestimonialGrid = ({ testimonials }) => (
  <section className="py-20 bg-white/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-fredoka gradient-text mb-6">
          Témoignages Authentiques
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Chaque témoignage reflète notre engagement quotidien envers l'excellence 
          éducative et le bien-être de chaque enfant.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialGrid;