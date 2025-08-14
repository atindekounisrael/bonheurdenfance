import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const PostCard = ({ post, onReadMore, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
    viewport={{ once: true }}
  >
    <Card className="card-hover h-full overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          alt={post.image}
          src="https://images.unsplash.com/photo-1702819073926-d9225ebd1760" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            post.category === 'Développement' ? 'bg-pink-100 text-pink-600' :
            post.category === 'Parentalité' ? 'bg-blue-100 text-blue-600' :
            post.category === 'Éducation' ? 'bg-green-100 text-green-600' :
            post.category === 'Psychologie' ? 'bg-purple-100 text-purple-600' :
            post.category === 'Activités' ? 'bg-yellow-100 text-yellow-600' :
            'bg-orange-100 text-orange-600'
          }`}>
            {post.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center text-gray-500 text-sm space-x-4 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold font-fredoka text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 text-sm">{post.author}</span>
          </div>
          <Button 
            onClick={() => onReadMore(post.id)}
            variant="outline" 
            size="sm"
            className="text-pink-600 border-pink-200 hover:bg-pink-50"
          >
            Lire plus
            <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default PostCard;