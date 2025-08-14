import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Star, Award, ThumbsUp } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    number: "150+",
    label: "Familles satisfaites",
    color: "from-pink-400 to-rose-400"
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Note moyenne",
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: Award,
    number: "98%",
    label: "Taux de satisfaction",
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: ThumbsUp,
    number: "95%",
    label: "Recommandations",
    color: "from-green-400 to-emerald-400"
  }
];

const Stats = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    {statsData.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      >
        <Card className="card-hover text-center p-6">
          <CardContent className="space-y-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold font-fredoka text-gray-800">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
);

export default Stats;