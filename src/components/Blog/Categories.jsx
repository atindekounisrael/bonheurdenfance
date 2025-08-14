import React from 'react';
import { motion } from 'framer-motion';

const Categories = ({ categories, onCategoryClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex flex-wrap justify-center gap-4 mb-16"
  >
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => onCategoryClick(category.name)}
        className={`${category.color} px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300`}
      >
        {category.name} ({category.count})
      </button>
    ))}
  </motion.div>
);

export default Categories;