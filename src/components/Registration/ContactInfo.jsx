import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Phone,
    title: "Appelez-nous",
    details: "+225 07 03 06 66 65",
    availability: "Lun-Ven : 7h-18h | Sam : 8h-16h",
    gradient: "from-pink-400 to-purple-400"
  },
  {
    icon: Mail,
    title: "Écrivez-nous",
    details: "bonhenfanceriv3@gmail.com",
    availability: "Réponse sous 24h",
    gradient: "from-blue-400 to-green-400"
  },
  {
    icon: MapPin,
    title: "Visitez-nous",
    details: "Cocody Riviera 3<br />Cité Copraci, Villa n°210<br />Abidjan, Côte d'Ivoire",
    availability: "",
    gradient: "from-yellow-400 to-orange-400"
  }
];

const ContactInfo = () => (
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
          Besoin d'aide ?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Notre équipe est là pour vous accompagner dans votre démarche d'inscription.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover text-center p-6 h-full">
              <CardContent className="space-y-4 flex flex-col items-center justify-center h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center mx-auto`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-fredoka text-gray-800">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: method.details }}></p>
                {method.availability && <p className="text-sm text-gray-500">{method.availability}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfo;