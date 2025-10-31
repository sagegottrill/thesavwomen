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
      description: 'Build lasting relationships in our supportive community through exclusive events and collaborative initiatives.',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="w-full bg-white py-20 border-t-4 border-green-700">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Content */}
          <div className="space-y-10">
            <div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">About SAV Women</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Empowering Every Voice
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  SAV WOMEN was founded with a powerful mission: to create a world where every young woman has the confidence, resources, and community support to achieve her dreams.
                </p>
                <p>
                  When women are empowered, communities thrive. Through our programs, mentorship, and network, we're building the next generation of confident leaders.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/about">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6 rounded-md transition-colors">
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;