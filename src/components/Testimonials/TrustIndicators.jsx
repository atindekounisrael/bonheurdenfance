import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Star, ThumbsUp, Quote } from 'lucide-react';

const trustItems = [
  {
    icon: Heart,
    title: "5 ans d'expérience",
    description: "Une expertise reconnue dans l'éducation préscolaire à Abidjan"
  },
  {
    icon: Users,
    title: "Équipe qualifiée",
    description: "Des éducateurs formés et passionnés par le développement de l'enfant"
  },
  {
    icon: Award,
    title: "Méthodes éprouvées",
    description: "Des programmes pédagogiques basés sur les meilleures pratiques"
  },
  {
    icon: Star,
    title: "Suivi personnalisé",
    description: "Une attention particulière portée à chaque enfant et sa famille"
  },
  {
    icon: ThumbsUp,
    title: "Résultats concrets",
    description: "Des progrès visibles et mesurables chez tous nos enfants"
  },
  {
    icon: Quote,
    title: "Transparence totale",
    description: "Communication ouverte et régulière avec les parents"
  }
];

const TrustIndicators = () => (
  <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-fredoka gradient-text mb-6">
          Pourquoi nous faire confiance ?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover text-center p-6 h-full">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-fredoka text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;