import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const RegistrationForm = () => {
  const files = [
    {
      text: "Fiche de Renseignement",
      link: "https://drive.google.com/uc?export=download&id=1fu2KT17pufw0JMWXoTh4JTw7cxhWJwRN"
    },
    {
      text: "Formulaire d'Inscription à la Crèche NIDO (6 mois à 18 mois)",
      link: "https://drive.google.com/uc?export=download&id=15U8CeIcYbIZbso6xlb8EjanRygFWv5ZI"
    },
    {
      text: "Formulaire d'Inscription à la Toute Petite Section (2 ans à 3 ans)",
      link: "https://drive.google.com/uc?export=download&id=1z1tIzGwomB1-bmO7PacyUrOlSCbWGR2I"
    },
    {
      text: "Formulaire d'Inscription à la Maternelle (3 ans à 6 ans)",
      link: "https://drive.google.com/uc?export=download&id=1IIZvqPmqropuo5S2neKSSrN22-Pd_p8B"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="card-hover overflow-hidden">
            <CardContent className="p-8 space-y-8">
              <h2 className="text-3xl font-bold font-fredoka gradient-text text-center mb-6">
                Téléchargez les Formulaires d'Inscription
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Téléchargez le formulaire approprié, remplissez-le et contactez-nous pour finaliser l'inscription.
              </p>
              <div className="space-y-6">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-pink-50 p-4 rounded-xl">
                    <span className="text-gray-800 font-medium">{file.text}</span>
                    <a href={file.link} download>
                      <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
                        <Download className="w-4 h-4 mr-2" /> Télécharger
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
