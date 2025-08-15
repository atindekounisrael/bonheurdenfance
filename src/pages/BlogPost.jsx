import React from 'react';
import { useParams } from 'react-router-dom';
import matter from 'gray-matter';
import { Helmet } from 'react-helmet';

// Importer le fichier Markdown dynamiquement avec Vite
const BlogPost = () => {
  const { slug } = useParams();
  const markdownFile = import.meta.glob('../components/Blog/*.md', { as: 'raw', eager: true });
  const fileContents = markdownFile[`../components/Blog/${slug}.md`];
  
  if (!fileContents) {
    return <div>Article non trouvé</div>;
  }

  const { data: frontmatter, content } = matter(fileContents.default);

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - Bonheur d'Enfance</title>
        <meta name="description" content={frontmatter.excerpt} />
      </Helmet>
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-fredoka">{frontmatter.title}</h1>
          <p className="text-gray-600">{frontmatter.excerpt}</p>
          <p className="text-sm text-gray-500">
            Par {frontmatter.author} | {new Date(frontmatter.date).toLocaleDateString('fr-FR')}
          </p>
          {frontmatter.image && <img src={frontmatter.image} alt={frontmatter.title} className="w-full h-64 object-cover my-4" />}
          <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
