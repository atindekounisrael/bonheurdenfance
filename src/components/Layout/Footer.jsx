import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-purple-50 border-t border-pink-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold font-fredoka gradient-text">
                  Bonheur d'Enfance
                </span>
                <p className="text-xs text-gray-600">Crèche Maternelle Privée</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Une crèche maternelle privée dédiée à l'épanouissement et au développement harmonieux de votre enfant dans un environnement sécurisé et bienveillant.
            </p>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-300 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-300 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <span className="text-lg font-semibold font-fredoka text-gray-800">Navigation</span>
            <div className="space-y-2">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Nos Services', path: '/services' },
                { name: 'Témoignages', path: '/temoignages' },
                { name: 'Blog', path: '/blog' },
                { name: 'Inscription', path: '/inscription' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-600 hover:text-pink-600 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Informations de contact */}
          <div className="space-y-4">
            <span className="text-lg font-semibold font-fredoka text-gray-800">Contact</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <p>Cocody Riviera 3</p>
                  <p>Cité Copraci, Villa n°210</p>
                  <p>Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-gray-600">+225 07 03 06 66 65</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-gray-600">bonhenfanceriv3@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-4">
            <span className="text-lg font-semibold font-fredoka text-gray-800">Horaires</span>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-pink-500" />
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Lundi - Vendredi</p>
                  <p>7h00 - 18h00</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 ml-7">
                <p className="font-medium">Samedi</p>
                <p>9h00 - 16h00</p>
              </div>
              <div className="text-sm text-gray-600 ml-7">
                <p className="font-medium text-pink-600">Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-pink-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Bonheur d'Enfance. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <Link to="#" className="hover:text-pink-600 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="#" className="hover:text-pink-600 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;