import React from 'react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';
import Hero from '@/components/Blog/Hero';
import Categories from '@/components/Blog/Categories';
import FeaturedPost from '@/components/Blog/FeaturedPost';
import PostGrid from '@/components/Blog/PostGrid';
import Newsletter from '@/components/Blog/Newsletter';
import CtaSection from '@/components/Blog/CtaSection';

const Blog = () => {
  const { toast } = useToast();

  const featuredPost = {
    id: 1,
    title: "Les 5 étapes clés du développement de l'enfant de 2 à 6 ans",
    excerpt: "Découvrez les principales phases de développement cognitif, émotionnel et social que traverse votre enfant pendant ses années préscolaires.",
    author: "Dr. Aïcha Konaté",
    date: "15 Janvier 2024",
    readTime: "8 min",
    category: "Développement",
    image: "Enfant en train d'apprendre avec des jouets éducatifs colorés",
    tags: ["développement", "éducation", "psychologie"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "Comment préparer votre enfant pour sa première rentrée en crèche",
      excerpt: "Conseils pratiques pour faciliter l'adaptation de votre enfant à son nouvel environnement éducatif.",
      author: "Mariam Diabaté",
      date: "12 Janvier 2024",
      readTime: "6 min",
      category: "Parentalité",
      image: "Parent accompagnant son enfant le premier jour de crèche",
      tags: ["adaptation", "rentrée", "conseils"]
    },
    {
      id: 3,
      title: "L'importance de l'éveil musical dans l'éducation préscolaire",
      excerpt: "Pourquoi la musique joue un rôle crucial dans le développement cognitif et émotionnel des jeunes enfants.",
      author: "Kouadio N'Guessan",
      date: "10 Janvier 2024",
      readTime: "5 min",
      category: "Éducation",
      image: "Enfants jouant avec des instruments de musique en classe",
      tags: ["musique", "éveil", "créativité"]
    },
    {
      id: 4,
      title: "Gérer les émotions de votre enfant : guide pour les parents",
      excerpt: "Techniques et stratégies pour aider votre enfant à comprendre et exprimer ses émotions de manière saine.",
      author: "Dr. Fatou Sanogo",
      date: "8 Janvier 2024",
      readTime: "7 min",
      category: "Psychologie",
      image: "Parent consolant son enfant avec bienveillance",
      tags: ["émotions", "psychologie", "communication"]
    },
    {
      id: 5,
      title: "Activités créatives à faire à la maison avec votre enfant",
      excerpt: "15 idées d'activités artistiques simples pour stimuler la créativité de votre enfant pendant les weekends.",
      author: "Salimata Keita",
      date: "5 Janvier 2024",
      readTime: "4 min",
      category: "Activités",
      image: "Enfant et parent faisant de la peinture ensemble à la maison",
      tags: ["créativité", "activités", "famille"]
    },
    {
      id: 6,
      title: "L'alimentation équilibrée pour les enfants de 2 à 6 ans",
      excerpt: "Guide nutritionnel complet pour assurer une croissance saine et un développement optimal de votre enfant.",
      author: "Dr. Brahima Touré",
      date: "3 Janvier 2024",
      readTime: "9 min",
      category: "Santé",
      image: "Repas coloré et équilibré pour enfants",
      tags: ["nutrition", "santé", "croissance"]
    },
    {
      id: 7,
      title: "Développer l'autonomie chez l'enfant : méthodes et conseils",
      excerpt: "Comment encourager l'indépendance de votre enfant tout en maintenant un environnement sécurisé et bienveillant.",
      author: "Aminata Coulibaly",
      date: "1 Janvier 2024",
      readTime: "6 min",
      category: "Développement",
      image: "Enfant s'habillant seul avec fierté",
      tags: ["autonomie", "indépendance", "confiance"]
    }
  ];

  const categories = [
    { name: "Développement", count: 12, color: "bg-pink-100 text-pink-600" },
    { name: "Parentalité", count: 8, color: "bg-blue-100 text-blue-600" },
    { name: "Éducation", count: 15, color: "bg-green-100 text-green-600" },
    { name: "Psychologie", count: 6, color: "bg-purple-100 text-purple-600" },
    { name: "Activités", count: 10, color: "bg-yellow-100 text-yellow-600" },
    { name: "Santé", count: 7, color: "bg-orange-100 text-orange-600" }
  ];

  const handleAction = () => {
    toast({
      title: "Ces articles ne sont pas encore disponible pour le moment! Soyez les premiers à écrire une histoire avec Bonheur d'Enfance!",
      duration: 10000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog Éducation - Bonheur d'Enfance | Conseils Parentalité Abidjan</title>
        <meta name="description" content="Blog éducatif sur la parentalité et le développement de l'enfant. Conseils d'experts pour parents à Abidjan, Côte d'Ivoire. Articles sur l'éducation préscolaire." />
        <meta property="og:title" content="Blog Éducation - Bonheur d'Enfance | Conseils Parentalité Abidjan" />
        <meta property="og:description" content="Blog éducatif sur la parentalité et le développement de l'enfant. Conseils d'experts pour parents à Abidjan, Côte d'Ivoire. Articles sur l'éducation préscolaire." />
      </Helmet>

      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Hero />
          <Categories categories={categories} onCategoryClick={handleAction} />
        </div>
        
        <FeaturedPost post={featuredPost} onReadMore={handleAction} />
        <PostGrid posts={blogPosts} onReadMore={handleAction} onLoadMore={handleAction} />
        <Newsletter onSubscribe={handleAction} />
        <CtaSection />
      </div>
    </>
  );
};

export default Blog;