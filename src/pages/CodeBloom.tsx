import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code, Laptop, Smartphone, Globe, Terminal, Lightbulb } from 'lucide-react';

const CodeBloom = () => {
  const modules = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript, and modern frameworks',
      duration: '8 weeks'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Build apps for iOS and Android',
      duration: '10 weeks'
    },
    {
      icon: Terminal,
      title: 'Programming Fundamentals',
      description: 'Python, JavaScript, and problem-solving',
      duration: '6 weeks'
    },
    {
      icon: Code,
      title: 'Emerging Technologies',
      description: 'AI, Machine Learning, and Cloud Computing',
      duration: '12 weeks'
    }
  ];

  const benefits = [
    'Hands-on coding projects',
    'Industry-standard tools and practices',
    'Mentorship from tech professionals',
    'Certificate upon completion',
    'Job placement support',
    'Lifetime access to learning resources'
  ];

  return (
    <div className="relative overflow-x-hidden">
      <NavigationUpdated />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-12 h-12" />
                <span className="text-2xl font-semibold">CodeBloom</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Digital Literacy, Coding & Emerging Technologies
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Learn to code and master the technologies shaping our future
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  From Beginner to Tech-Savvy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  CodeBloom is our comprehensive digital literacy and coding program designed 
                  to take you from zero to confident coder. Whether you've never written a line 
                  of code or want to advance your skills, we've got you covered.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our curriculum covers everything from basic computer skills to advanced 
                  programming concepts, emerging technologies like AI and machine learning, 
                  and real-world application development.
                </p>
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-4">Program Highlights</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=1000&fit=crop"
                  alt="African women learning coding and technology"
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Learning Tracks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your path or learn them all - our modular approach lets you customize your journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="border-2 hover:border-black transition-colors">
                  <CardContent className="p-8">
                    <module.icon className="w-14 h-14 mb-4" />
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{module.title}</h3>
                      <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How CodeBloom Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Learn</h3>
                <p className="text-gray-600">
                  Follow structured lessons with video tutorials, interactive exercises, and projects
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Build</h3>
                <p className="text-gray-600">
                  Apply your skills by building real projects with guidance from mentors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Share</h3>
                <p className="text-gray-600">
                  Showcase your work, get certified, and join our tech community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Start Your Coding Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of women learning to code and building amazing things
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                Join CodeBloom
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CodeBloom;
