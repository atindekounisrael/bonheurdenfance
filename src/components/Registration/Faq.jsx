import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const faqItems = [
  {
    question: "À partir de quel âge acceptez-vous les enfants ?",
    answer: "Nous accueillons les enfants de 6 mois à 6 ans dans nos différents programmes adaptés à chaque tranche d'âge."
  },
  {
    question: "Quels sont les documents nécessaires pour l'inscription ?",
    answer: "Vous aurez besoin de l'acte de naissance de l'enfant, du carnet de vaccination à jour, d'une photo d'identité et d'une attestation d'assurance."
  },
  {
    question: "Proposez-vous des repas ?",
    answer: "Oui, nous proposons des repas équilibrés et adaptés à l'âge des enfants, préparés selon des normes d'hygiène strictes."
  },
  {
    question: "Puis-je visiter la crèche avant l'inscription ?",
    answer: "Absolument ! Nous encourageons les visites. Contactez-nous pour planifier un rendez-vous et découvrir nos installations."
  }
];

const Faq = () => (
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
          Questions Fréquentes
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold font-fredoka text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;