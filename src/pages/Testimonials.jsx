import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Testimonials/Hero';
import Stats from '@/components/Testimonials/Stats';
import TestimonialGrid from '@/components/Testimonials/TestimonialGrid';
import VideoTestimonials from '@/components/Testimonials/VideoTestimonials';
import TrustIndicators from '@/components/Testimonials/TrustIndicators';
import CtaSection from '@/components/Testimonials/CtaSection';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Aminata Koné",
      role: "Maman de Fatoumata (4 ans)",
      text: "Une équipe formidable ! Ma fille s'épanouit chaque jour davantage. L'approche pédagogique est excellente et l'environnement très sécurisé. Je recommande vivement cette crèche à tous les parents de Cocody.",
      rating: 5,
      image: "Portrait d'une femme africaine souriante avec son enfant",
      highlight: "Équipe formidable"
    },
    {
      name: "Jean-Baptiste Ouattara",
      role: "Papa de Kouassi (3 ans)",
      text: "Environnement sécurisé et bienveillant. Mon fils adore aller à la crèche chaque matin ! Les activités sont variées et adaptées à son âge. L'équipe éducative est très professionnelle.",
      rating: 5,
      image: "Portrait d'un homme africain souriant tenant son enfant",
      highlight: "Environnement sécurisé"
    },
    {
      name: "Fatou Traoré",
      role: "Maman d'Awa (5 ans)",
      text: "Excellent suivi pédagogique. Les progrès de mon enfant sont remarquables depuis qu'elle est ici. L'éveil musical et les activités créatives ont vraiment développé sa créativité.",
      rating: 5,
      image: "Portrait d'une femme africaine élégante avec sa fille",
      highlight: "Progrès remarquables"
    },
    {
      name: "Mamadou Diabaté",
      role: "Papa de Sekou (2 ans)",
      text: "La transition de la maison à la crèche s'est faite en douceur grâce à l'équipe bienveillante. Mon fils a rapidement trouvé ses repères et s'est fait de nouveaux amis.",
      rating: 5,
      image: "Portrait d'un homme africain avec son jeune fils",
      highlight: "Transition en douceur"
    },
    {
      name: "Aïcha Sanogo",
      role: "Maman de Mariam (4 ans)",
      text: "Les activités d'éveil sont fantastiques ! Ma fille rentre à la maison en chantant les comptines apprises et en racontant ses découvertes. C'est un plaisir de la voir si épanouie.",
      rating: 5,
      image: "Portrait d'une femme africaine joyeuse avec sa fille",
      highlight: "Activités fantastiques"
    },
    {
      name: "Youssouf Coulibaly",
      role: "Papa de Ibrahim (3 ans)",
      text: "Communication excellente avec les parents. Nous recevons régulièrement des nouvelles des activités et des progrès de notre fils. L'équipe est très à l'écoute de nos préoccupations.",
      rating: 5,
      image: "Portrait d'un homme africain professionnel avec son enfant",
      highlight: "Communication excellente"
    },
    {
      name: "Salimata Keita",
      role: "Maman de Adama (5 ans)",
      text: "Préparation parfaite pour l'école primaire. Mon fils a acquis de bonnes bases en lecture et en mathématiques. Il est maintenant confiant et prêt pour la grande école.",
      rating: 5,
      image: "Portrait d'une femme africaine confiante avec son fils",
      highlight: "Préparation parfaite"
    },
    {
      name: "Brahima Touré",
      role: "Papa de Khadija (4 ans)",
      text: "L'initiation à l'anglais est un vrai plus ! Ma fille commence déjà à dire quelques mots en anglais et elle adore les chansons qu'elle apprend. C'est un excellent investissement pour son avenir.",
      rating: 5,
      image: "Portrait d'un homme africain éduqué avec sa fille",
      highlight: "Initiation à l'anglais"
    },
    {
      name: "Rokia Bamba",
      role: "Maman de Moussa (3 ans)",
      text: "Hygiène et sécurité irréprochables. Je suis rassurée de savoir mon fils dans un environnement si propre et sécurisé. L'équipe fait vraiment attention à tous les détails.",
      rating: 5,
      image: "Portrait d'une femme africaine rassurée avec son enfant",
      highlight: "Hygiène irréprochable"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Témoignages Parents - Bonheur d'Enfance | Crèche Maternelle Cocody</title>
        <meta name="description" content="Découvrez les avis des parents sur notre crèche maternelle à Cocody. Témoignages authentiques sur l'éducation préscolaire de qualité à Abidjan, Côte d'Ivoire." />
        <meta property="og:title" content="Témoignages Parents - Bonheur d'Enfance | Crèche Maternelle Cocody" />
        <meta property="og:description" content="Découvrez les avis des parents sur notre crèche maternelle à Cocody. Témoignages authentiques sur l'éducation préscolaire de qualité à Abidjan, Côte d'Ivoire." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Hero />
          <Stats />
        </div>
        
        <TestimonialGrid testimonials={testimonialsData} />
        <VideoTestimonials />
        <TrustIndicators />
        <CtaSection />
      </div>
    </>
  );
};

export default Testimonials;