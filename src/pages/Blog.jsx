import React from 'react';
import { Helmet } from 'react-helmet';
import { useToast } from '@/components/ui/use-toast';
import Hero from '@/components/Blog/Hero';
import Categories from '@/components/Blog/Categories';
import FeaturedPost from '@/components/Blog/FeaturedPost';
import PostGrid from '@/components/Blog/PostGrid';
import Newsletter from '@/components/Blog/Newsletter';
import CtaSection from '@/components/Blog/CtaSection';
import matter from 'gray-matter';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Lire les fichiers Markdown dynamiquement avec Vite
  const importAll = (r) => r.keys().map((key, index) => {
    const fileContents = r(key);
    const { data: frontmatter, content } = matter(fileContents.default);
    return {
      id: index + 1,
      slug: key.replace(/^\.\/|\.md$/g, ''),
      frontmatter,
      content,
      readTime: `${Math.ceil(content.split(' ').length / 200)} min`,
    };
  });

  const blogPosts = importAll(import.meta.glob('../components/Blog/*.md', { as: 'raw', eager: true }))
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  // Article à la une (premier article)
  const featuredPost = blogPosts[0] ? {
    id: blogPosts[0].id,
    title: blogPosts[0].frontmatter.title,
    excerpt: blogPosts[0].frontmatter.excerpt,
    author: blogPosts[0].frontmatter.author,
    date: new Date(blogPosts[0].frontmatter.date).toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'long', year: 'numeric'
    }),
    readTime: blogPosts[0].readTime,
    category: blogPosts[0].frontmatter.category,
    image: blogPosts[0].frontmatter.image || "public/assets/image9.jpg",
    tags: blogPosts[0].frontmatter.tags || [],
  } : null;

  // Calculer les catégories
  const categories = [
    { name: "Développement", count: blogPosts.filter(p => p.frontmatter.category === "Développement").length, color: "bg-pink-100 text-pink-600" },
    { name: "Parentalité", count: blogPosts.filter(p => p.frontmatter.category === "Parentalité").length, color: "bg-blue-100 text-blue-600" },
    { name: "Éducation", count: blogPosts.filter(p => p.frontmatter.category === "Éducation").length, color: "bg-green-100 text-green-600" },
    { name: "Psychologie", count: blogPosts.filter(p => p.frontmatter.category === "Psychologie").length, color: "bg-purple-100 text-purple-600" },
    { name: "Activités", count: blogPosts.filter(p => p.frontmatter.category === "Activités").length, color: "bg-yellow-100 text-yellow-600" },
    { name: "Santé", count: blogPosts.filter(p => p.frontmatter.category === "Santé").length, color: "bg-orange-100 text-orange-600" },
  ];

  // Gérer la navigation vers les articles
  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const handleAction = () => {
    toast({
      title: "Action en cours de développement",
      description: "Cette fonctionnalité (catégories, chargement, abonnement) sera bientôt disponible !",
      duration: 10000,
    });
  };

  // Adapter les articles pour les composants
  const adaptedPosts = blogPosts.map(post => ({
    id: post.id,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    author: post.frontmatter.author,
    date: new Date(post.frontmatter.date).toLocaleDateString('fr-FR', {
      day: 'numeric', month: 'long', year: 'numeric'
    }),
    readTime: post.readTime,
    category: post.frontmatter.category,
    image: post.frontmatter.image || "https://images.unsplash.com/photo-1702819073926-d9225ebd1760",
    tags: post.frontmatter.tags || [],
  }));

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
        {featuredPost && <FeaturedPost post={featuredPost} onReadMore={handleReadMore} />}
        <PostGrid posts={adaptedPosts} onReadMore={handleReadMore} onLoadMore={handleAction} />
        <Newsletter onSubscribe={handleAction} />
        <CtaSection />
      </div>
    </>
  );
};

export default Blog;
