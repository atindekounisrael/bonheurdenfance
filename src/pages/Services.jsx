import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Music, 
  Palette, 
  Globe, 
  Heart, 
  Users, 
  Brain, 
  Zap,
  Languages,
  Flower2,
  Clock,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const mainServices = [
    {
      icon: BookOpen,
      title: 'Langage et Communication',
      description: 'Développement du vocabulaire, expression orale, écoute active et préparation à la lecture et l\'écriture.',
      features: ['Contes et histoires', 'Jeux de langage', 'Expression créative', 'Communication non-verbale'],
      color: 'from-pink-400 to-rose-400',
      age: '2-6 ans'
    },
    {
      icon: Zap,
      title: 'Motricité Fine et Globale',
      description: 'Activités pour développer la coordination, l\'équilibre et la précision des gestes.',
      features: ['Parcours moteurs', 'Manipulation d\'objets', 'Coordination œil-main', 'Équilibre et posture'],
      color: 'from-blue-400 to-cyan-400',
      age: '18 mois-6 ans'
    },
    {
      icon: Palette,
      title: 'Arts et Créativité',
      description: 'Expression artistique à travers la peinture, le dessin, la sculpture et les activités manuelles.',
      features: ['Peinture et dessin', 'Modelage et sculpture', 'Collages créatifs', 'Arts plastiques'],
      color: 'from-purple-400 to-violet-400',
      age: '2-6 ans'
    },
    {
      icon: Music,
      title: 'Éveil Musical',
      description: 'Découverte des sons, rythmes, chants et instruments pour développer la sensibilité musicale.',
      features: ['Chants et comptines', 'Instruments de musique', 'Rythme et danse', 'Écoute musicale'],
      color: 'from-green-400 to-emerald-400',
      age: '12 mois-6 ans'
    },
    {
      icon: Heart,
      title: 'Éveil Sensoriel',
      description: 'Stimulation des cinq sens pour une meilleure perception et compréhension du monde.',
      features: ['Exploration tactile', 'Découverte gustative', 'Éveil olfactif', 'Stimulation visuelle'],
      color: 'from-yellow-400 to-orange-400',
      age: '6 mois-4 ans'
    },
    {
      icon: Globe,
      title: 'Découverte du Monde',
      description: 'Exploration de l\'environnement, des cultures, de la nature et des sciences.',
      features: ['Sciences naturelles', 'Géographie ludique', 'Cultures du monde', 'Environnement'],
      color: 'from-indigo-400 to-blue-400',
      age: '3-6 ans'
    },
    {
      icon: Languages,
      title: 'Anglais',
      description: 'Initiation ludique à la langue anglaise à travers jeux, chansons et activités interactives.',
      features: ['Vocabulaire de base', 'Chansons en anglais', 'Jeux linguistiques', 'Immersion douce'],
      color: 'from-red-400 to-pink-400',
      age: '3-6 ans'
    },
    {
      icon: Flower2,
      title: 'Yoga et Relaxation',
      description: 'Techniques de relaxation, respiration et postures adaptées aux enfants.',
      features: ['Postures simples', 'Respiration consciente', 'Méditation guidée', 'Gestion des émotions'],
      color: 'from-teal-400 to-green-400',
      age: '3-6 ans'
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: 'Socialisation',
      description: 'Apprentissage du vivre ensemble, partage et respect des autres.'
    },
    {
      icon: Brain,
      title: 'Développement Cognitif',
      description: 'Stimulation de la mémoire, logique et capacités de raisonnement.'
    },
    {
      icon: Clock,
      title: 'Routine Structurée',
      description: 'Emploi du temps équilibré entre activités et temps de repos.'
    },
    {
      icon: Shield,
      title: 'Environnement Sécurisé',
      description: 'Espaces adaptés et surveillance constante pour la sécurité.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Services - Bonheur d'Enfance | Crèche Maternelle Cocody</title>
        <meta name="description" content="Découvrez nos services éducatifs : éveil musical, arts créatifs, anglais, yoga, motricité. École maternelle privée à Cocody offrant éducation préscolaire complète à Abidjan." />
        <meta property="og:title" content="Nos Services - Bonheur d'Enfance | Crèche Maternelle Cocody" />
        <meta property="og:description" content="Découvrez nos services éducatifs : éveil musical, arts créatifs, anglais, yoga, motricité. École maternelle privée à Cocody offrant éducation préscolaire complète à Abidjan." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-40 floating-animation"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-40 floating-animation" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-200 rounded-full opacity-40 floating-animation" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl lg:text-6xl font-bold font-fredoka gradient-text mb-6">
                Nos Services Éducatifs
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Chez Bonheur d'Enfance, nous proposons un programme éducatif complet et varié, 
                conçu pour stimuler tous les aspects du développement de votre enfant dans un 
                environnement bienveillant et sécurisé.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold font-fredoka text-gray-800 mb-2">8 Activités</h3>
                <p className="text-gray-600">Programmes éducatifs variés</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold font-fredoka text-gray-800 mb-2">Petits Groupes</h3>
                <p className="text-gray-600">Suivi personnalisé</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold font-fredoka text-gray-800 mb-2">Bienveillance</h3>
                <p className="text-gray-600">Approche respectueuse</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Services */}
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
                Nos Programmes Principaux
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque programme est soigneusement conçu pour répondre aux besoins spécifiques 
                de chaque tranche d'âge et favoriser un développement harmonieux.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover h-full overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl font-fredoka text-gray-800">
                              {service.title}
                            </CardTitle>
                            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full font-medium">
                              {service.age}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 text-sm">Activités incluses :</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
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
                Services Complémentaires
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En plus de nos programmes principaux, nous offrons des services 
                qui garantissent le bien-être et l'épanouissement de chaque enfant.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover text-center p-6 h-full">
                    <CardContent className="space-y-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold font-fredoka text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
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
                Emploi du Temps Type
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une journée bien structurée qui alterne activités éducatives, 
                jeux libres, repas et temps de repos.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {[
                      { time: '7h00 - 8h30', activity: 'Accueil et jeux libres', color: 'bg-pink-100' },
                      { time: '8h30 - 9h00', activity: 'Petit-déjeuner', color: 'bg-blue-100' },
                      { time: '9h00 - 10h30', activity: 'Activités éducatives', color: 'bg-green-100' },
                      { time: '10h30 - 11h00', activity: 'Récréation', color: 'bg-yellow-100' },
                      { time: '11h00 - 12h00', activity: 'Ateliers créatifs', color: 'bg-purple-100' },
                      { time: '12h00 - 13h00', activity: 'Déjeuner', color: 'bg-orange-100' },
                      { time: '13h00 - 15h00', activity: 'Sieste / Repos', color: 'bg-indigo-100' },
                      { time: '15h00 - 16h30', activity: 'Activités d\'éveil', color: 'bg-pink-100' },
                      { time: '16h30 - 17h00', activity: 'Goûter', color: 'bg-blue-100' },
                      { time: '17h00 - 18h00', activity: 'Jeux et départ', color: 'bg-green-100' }
                    ].map((slot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-6 ${slot.color} border-b border-white last:border-b-0`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800">{slot.time}</span>
                          <span className="text-gray-700">{slot.activity}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Intéressé par nos services ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Contactez-nous pour une visite de nos locaux et découvrez comment 
                nous pouvons accompagner votre enfant dans son développement.
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
      </div>
    </>
  );
};

export default Services;