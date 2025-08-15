import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Shield, BookOpen, Music, Palette, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const values = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Un environnement chaleureux et sécurisé pour chaque enfant'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Des programmes éducatifs de qualité adaptés à chaque âge'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Une équipe pédagogique expérimentée et passionnée'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Des installations sécurisées et un suivi personnalisé'
    }
  ];

  const activities = [
    {
      icon: BookOpen,
      title: 'Langage & Communication',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Music,
      title: 'Éveil Musical',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Palette,
      title: 'Arts & Créativité',
      color: 'from-purple-400 to-violet-400'
    },
    {
      icon: Globe,
      title: 'Découverte du Monde',
      color: 'from-green-400 to-emerald-400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bonheur d'Enfance - Crèche Maternelle Privée à Cocody, Abidjan</title>
        <meta name="description" content="Crèche maternelle privée à Cocody Riviera 3, Abidjan. École maternelle de qualité en Côte d'Ivoire offrant éducation préscolaire, éveil musical, arts et développement harmonieux." />
        <meta property="og:title" content="Bonheur d'Enfance - Crèche Maternelle Privée à Cocody, Abidjan" />
        <meta property="og:description" content="Crèche maternelle privée à Cocody Riviera 3, Abidjan. École maternelle de qualité en Côte d'Ivoire offrant éducation préscolaire, éveil musical, arts et développement harmonieux." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-60 floating-animation"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-60 floating-animation" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-200 rounded-full opacity-60 floating-animation" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 bg-green-200 rounded-full opacity-60 floating-animation" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl lg:text-6xl font-bold font-fredoka gradient-text leading-tight"
                  >
                    Bienvenue au Bonheur d'Enfance
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-600 leading-relaxed"
                  >
                    La crèche maternelle privée de référence à Cocody, Abidjan. 
                    Nous accompagnons votre enfant dans son épanouissement et son développement 
                    dans un environnement sécurisé, bienveillant et stimulant.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/inscription">
                    <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 pulse-animation">
                      Inscrire mon enfant
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
                      Découvrir nos services
                    </Button>
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="grid grid-cols-3 gap-6 pt-8"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold font-fredoka text-pink-500">5+</div>
                    <div className="text-sm text-gray-600">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-fredoka text-blue-500">100+</div>
                    <div className="text-sm text-gray-600">Enfants épanouis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold font-fredoka text-green-500">15+</div>
                    <div className="text-sm text-gray-600">Éducateurs qualifiés</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img
                    className="w-full h-auto rounded-3xl shadow-2xl"
                    alt="Enfants heureux jouant dans une crèche moderne et colorée"
                    src="/assets/image4.jpg"
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-80 bounce-animation"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-300 to-blue-300 rounded-full opacity-80 bounce-animation" style={{ animationDelay: '1s' }}></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                Nos Valeurs Éducatives
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chez Bonheur d'Enfance, nous croyons en une approche holistique du développement de l'enfant, 
                basée sur des valeurs fortes et une pédagogie bienveillante.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover text-center p-6 h-full">
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold font-fredoka text-gray-800">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Preview */}
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
                Nos Activités Éducatives
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des programmes variés et adaptés pour stimuler tous les aspects du développement de votre enfant.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="card-hover text-center p-6 h-full bg-white/80">
                    <CardContent className="space-y-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <activity.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold font-fredoka text-gray-800">
                        {activity.title}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/services">
                <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Voir tous nos services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Preview */}
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
                Ce que disent les parents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La satisfaction de nos familles est notre plus belle récompense.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Aminata Koné",
                  text: "Une équipe formidable ! Ma fille s'épanouit chaque jour davantage. Je recommande vivement cette crèche.",
                  rating: 5
                },
                {
                  name: "Jean-Baptiste Ouattara",
                  text: "Environnement sécurisé et bienveillant. Mon fils adore aller à la crèche chaque matin !",
                  rating: 5
                },
                {
                  name: "Fatou Traoré",
                  text: "Excellent suivi pédagogique. Les progrès de mon enfant sont remarquables depuis qu'il est ici.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover p-6 h-full">
                    <CardContent className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.text}"</p>
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/temoignages">
                <Button variant="outline" className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
                  Lire tous les témoignages
                </Button>
              </Link>
            </motion.div>
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
                Prêt à offrir le meilleur à votre enfant ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Rejoignez notre grande famille et donnez à votre enfant les meilleures bases pour son avenir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/inscription">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Inscrire maintenant
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
                  <a href="https://agent.jotform.com/01988709aa62748f9aaabe8614aa7178710a" target="_self" rel="noopener noreferrer">
                    Nous contacter
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
