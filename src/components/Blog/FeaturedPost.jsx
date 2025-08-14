import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedPost = ({ post, onReadMore }) => (
  <section className="py-20 bg-white/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-fredoka gradient-text mb-6 text-center">
          Article à la Une
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="card-hover overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                className="w-full h-64 lg:h-full object-cover"
                alt={post.image}
                src="https://images.unsplash.com/photo-1619199059624-7335464ea7b0" />
              <div className="absolute top-4 left-4">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  À la Une
                </span>
              </div>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold font-fredoka text-gray-800 mb-4">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 text-sm">{post.author}</span>
                </div>
                <Button 
                  onClick={() => onReadMore(post.id)}
                  className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
);

export default FeaturedPost;