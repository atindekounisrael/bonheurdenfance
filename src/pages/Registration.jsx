import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Registration/Hero';
import Benefits from '@/components/Registration/Benefits';
import RegistrationForm from '@/components/Registration/RegistrationForm';
import ContactInfo from '@/components/Registration/ContactInfo';
import Faq from '@/components/Registration/Faq';

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Inscription - Bonheur d'Enfance | Crèche Maternelle Cocody Abidjan</title>
        <meta name="description" content="Inscrivez votre enfant à la crèche maternelle Bonheur d'Enfance à Cocody, Abidjan. Formulaire d'inscription simple pour école maternelle privée en Côte d'Ivoire." />
        <meta property="og:title" content="Inscription - Bonheur d'Enfance | Crèche Maternelle Cocody Abidjan" />
        <meta property="og:description" content="Inscrivez votre enfant à la crèche maternelle Bonheur d'Enfance à Cocody, Abidjan. Formulaire d'inscription simple pour école maternelle privée en Côte d'Ivoire." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-16">
        <Hero />
        <div className="container mx-auto px-4 relative z-10">
          <Benefits />
        </div>
        <RegistrationForm />
        <ContactInfo />
        <Faq />
      </div>
    </>
  );
};

export default Registration;