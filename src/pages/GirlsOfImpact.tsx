import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Code, Database, Brain, Palette, Shield, TrendingUp, Users, Award } from 'lucide-react';

const GirlsOfImpact = () => {
  const skills = [
    { icon: Code, title: 'Web & Mobile Development', description: 'Build websites and mobile applications' },
    { icon: Database, title: 'Data Analytics & Science', description: 'Analyze data and extract insights' },
    { icon: Brain, title: 'Artificial Intelligence', description: 'Learn AI fundamentals and applications' },
    { icon: Palette, title: 'UI/UX Design', description: 'Design beautiful user experiences' },
    { icon: Shield, title: 'Cyber Safety', description: 'Stay safe in the digital world' },
    { icon: TrendingUp, title: 'Digital Branding', description: 'Build your personal brand online' }
  ];

  return (
    <div className="relative overflow-x-hidden">
      <NavigationUpdated />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Girls of Impact
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Our flagship program equipping young women with future-ready tech skills
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join the Program
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About the Program */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  A Digital Mentorship & Innovation Ecosystem
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Girls of Impact is the heart of The SAV Women Foundation. 
                  It's a comprehensive program designed to equip young women with the skills 
                  they need to thrive in today's innovation-driven world.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We use a <strong>Train-the-Trainer model</strong>, where every participant becomes 
                  a Girl of Impact Ambassador who goes on to mentor and train other girls in her 
                  school or community.
                </p>
                <p className="text-lg text-gray-600">
                  This creates a self-sustaining cycle of empowerment — where every girl we train 
                  multiplies her impact, turning learning into leadership.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=800&fit=crop"
                  alt="Young African women in tech workshop"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What You'll Learn
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive training in cutting-edge technologies and digital skills
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-2 hover:border-black transition-colors">
                  <CardContent className="p-6">
                    <skill.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ambassador Program */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black text-white rounded-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Award className="w-16 h-16 mb-6" />
                  <h2 className="text-4xl font-bold mb-6">
                    Become a Girl of Impact Ambassador
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    After completing the program, you'll have the opportunity to become 
                    an ambassador and mentor other girls in your community.
                  </p>
                  <ul className="space-y-4 text-lg text-gray-300 mb-8">
                    <li className="flex items-start">
                      <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span>Lead tech clubs in your school or community</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span>Mentor and train other girls</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                      <span>Build a lasting impact in your community</span>
                    </li>
                  </ul>
                  <Link to="/join">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                      Apply Now
                    </Button>
                  </Link>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                    <div className="text-6xl font-bold mb-2">10,000+</div>
                    <div className="text-xl text-gray-300">Women & Girls Empowered by 2030</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of young women learning tech skills and building their future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                  Join Girls of Impact
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default GirlsOfImpact;
