import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PostCard from './PostCard';

const PostGrid = ({ posts, onReadMore, onLoadMore }) => (
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
          Derniers Articles
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Restez informés avec nos dernières publications sur l'éducation et le développement de l'enfant.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} onReadMore={onReadMore} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button 
          onClick={onLoadMore}
          variant="outline" 
          className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
        >
          Charger plus d'articles
        </Button>
      </motion.div>
    </div>
  </section>
);

export default PostGrid;