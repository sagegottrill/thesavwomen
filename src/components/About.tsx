import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      title: 'Leadership development programs',
      description: 'Comprehensive training to build confidence and leadership skills through interactive workshops and mentorship.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mentorship opportunities',
      description: 'Connect with experienced mentors who guide your journey and provide personalized career development support.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Community networking events',
      description: 'Build lasting relationships in our supportive community through exclusive events and collaborative programs.',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-24 border-t-4 border-green-700">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Content */}
          <div className="space-y-12">
            <div className="max-w-4xl">
              {/* 'About SAV Women' badge removed per content update */}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 mb-8 leading-tight">
                Empowering Every Voice
              </h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p className="text-2xl font-medium text-gray-800">
                  SAV WOMEN was founded with a powerful mission: to create a world where every young woman has the confidence, resources, and community support to achieve her dreams.
                </p>
                <p>
                  When women are empowered, communities thrive. Through our programs, mentorship, and network, we're building the next generation of confident leaders.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                      <BookOpen className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 'Learn More About Our Mission' CTA removed per content update */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;