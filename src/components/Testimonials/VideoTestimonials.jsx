import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const videos = [
  {
    title: "L'expérience de Maman Aminata",
    description: "Découvrez pourquoi elle a choisi notre crèche",
    duration: "2:30"
  },
  {
    title: "Papa Jean-Baptiste témoigne",
    description: "Les progrès de son fils en 6 mois",
    duration: "1:45"
  },
  {
    title: "Maman Fatou raconte",
    description: "L'évolution créative de sa fille",
    duration: "3:15"
  }
];

const VideoTestimonials = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-fredoka gradient-text mb-6">
          Témoignages Vidéo
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Écoutez directement les parents partager leur expérience avec Bonheur d'Enfance.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  alt="Aperçu vidéo témoignage parent crèche"
                  src="https://images.unsplash.com/photo-1676664487686-d4cee5079c46" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button className="bg-white/90 text-gray-800 hover:bg-white rounded-full p-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold font-fredoka text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoTestimonials;