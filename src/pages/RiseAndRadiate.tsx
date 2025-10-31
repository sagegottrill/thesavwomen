import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Sparkles, Users, MessageCircle, Briefcase, Star, CheckCircle } from 'lucide-react';

const RiseAndRadiate = () => {
  const skills = [
    { 
      icon: Sparkles, 
      title: 'Personal Branding', 
      description: 'Build a powerful personal brand that stands out' 
    },
    { 
      icon: MessageCircle, 
      title: 'Communication Skills', 
      description: 'Master public speaking and effective communication' 
    },
    { 
      icon: Star, 
      title: 'Confidence Building', 
      description: 'Develop unshakeable self-confidence and presence' 
    },
    { 
      icon: Briefcase, 
      title: 'Professional Etiquette', 
      description: 'Navigate professional spaces with grace and confidence' 
    }
  ];

  const outcomes = [
    'Enhanced self-confidence and self-awareness',
    'Strong personal brand and online presence',
    'Excellent communication and presentation skills',
    'Professional networking capabilities',
    'Leadership presence and influence',
    'Career advancement readiness'
  ];

  return (
    <div className="relative overflow-x-hidden">
      <NavigationUpdated />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="bg-white/20 text-sm font-semibold px-4 py-2 rounded-full">
                PERSONAL DEVELOPMENT
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                Rise & Radiate
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Confidence, communication, and personal branding program designed to help women shine in every space they enter
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join Rise & Radiate
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
                  Discover Your Power, Amplify Your Voice
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Rise & Radiate is a transformative program focused on building confidence, 
                  developing communication skills, and establishing a strong personal brand. 
                  We empower women to step into their power and shine authentically.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through workshops, mentorship, and practical exercises, participants learn 
                  to articulate their value, build meaningful connections, and navigate professional 
                  and personal spaces with confidence.
                </p>
                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "The way we communicate and present ourselves can open doors we never knew existed."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop"
                  alt="Confident Nigerian woman speaking"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What You'll Master
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Develop the skills to radiate confidence and influence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-2 hover:border-pink-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-pink-50 rounded-lg flex items-center justify-center mb-4">
                      <skill.icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Program Structure
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-pink-600 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">Foundation Phase</h3>
                  <p className="text-gray-600 mb-4">4 weeks</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Self-awareness & confidence building</li>
                    <li>• Communication fundamentals</li>
                    <li>• Personal brand discovery</li>
                    <li>• Goal setting & vision clarity</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-pink-600 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Development Phase</h3>
                  <p className="text-gray-600 mb-4">6 weeks</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Public speaking mastery</li>
                    <li>• Professional networking</li>
                    <li>• Digital presence building</li>
                    <li>• Personal style & presentation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-pink-600 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Impact Phase</h3>
                  <p className="text-gray-600 mb-4">2 weeks</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Final brand showcase</li>
                    <li>• Community presentation</li>
                    <li>• Mentorship opportunities</li>
                    <li>• Career advancement planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Transform Your Presence
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Graduates of Rise & Radiate leave with tangible skills and a renewed sense of purpose
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-pink-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>12 weeks (3 months)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>Hybrid (In-person workshops + Online sessions)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Time Commitment:</p>
                        <p>4-6 hours per week</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Personal brand photoshoot</li>
                          <li>• Professional portfolio</li>
                          <li>• 1-on-1 mentorship sessions</li>
                          <li>• Networking event access</li>
                          <li>• Certificate of completion</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Rise and Radiate?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join a community of confident, empowered women
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                Apply Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RiseAndRadiate;
