import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="card-hover h-full relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <Quote className="w-8 h-8 text-pink-200" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <div className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
          {testimonial.highlight}
        </div>

        <p className="text-gray-600 italic leading-relaxed">
          "{testimonial.text}"
        </p>

        <div className="flex items-center space-x-4 pt-4 border-t border-pink-100">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
            <img
              className="w-12 h-12 rounded-full object-cover"
              alt={testimonial.image}
              src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
          </div>
          <div>
            <div className="font-semibold text-gray-800">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">
              {testimonial.role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default TestimonialCard;