import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: CheckCircle,
    title: "Réponse rapide",
    description: "Nous vous contactons sous 24h"
  },
  {
    icon: Heart,
    title: "Visite gratuite",
    description: "Découvrez nos locaux avant l'inscription"
  },
  {
    icon: Clock,
    title: "Flexibilité",
    description: "Horaires adaptés à vos besoins"
  },
  {
    icon: User,
    title: "Accompagnement",
    description: "Suivi personnalisé de votre enfant"
  }
];

const Benefits = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    {benefits.map((benefit, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      >
        <Card className="card-hover text-center p-6">
          <CardContent className="space-y-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
              <benefit.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold font-fredoka text-gray-800">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {benefit.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default Benefits;