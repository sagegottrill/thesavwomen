import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TrendingUp, Lightbulb, Rocket, DollarSign, Users, Target, CheckCircle } from 'lucide-react';

const ThriveMakers = () => {
  const skills = [
    { 
      icon: Lightbulb, 
      title: 'Business Innovation', 
      description: 'Transform ideas into viable business models' 
    },
    { 
      icon: DollarSign, 
      title: 'Financial Management', 
      description: 'Master business finances and funding strategies' 
    },
    { 
      icon: Rocket, 
      title: 'Growth Strategy', 
      description: 'Scale your business for sustainable growth' 
    },
    { 
      icon: Users, 
      title: 'Market Development', 
      description: 'Build and expand your customer base' 
    }
  ];

  const outcomes = [
    'Launch or scale a successful business',
    'Access to startup funding and investors',
    'Strong business plan and financial model',
    'Marketing and sales expertise',
    'Business network and partnerships',
    'Ongoing mentorship and support'
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
                ENTREPRENEURSHIP & INNOVATION
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                ThriveMakers
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Empowering women entrepreneurs to build, grow, and scale innovative businesses
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join ThriveMakers
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
                  From Idea to Impact
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  ThriveMakers is a comprehensive entrepreneurship program that supports women 
                  at every stage of their business journey—from ideation to scaling. We provide 
                  the tools, knowledge, and network needed to build successful, sustainable businesses.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're starting your first business or looking to scale an existing one, 
                  ThriveMakers provides hands-on training, mentorship from successful entrepreneurs, 
                  and access to funding opportunities.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "Women-owned businesses drive economic growth and create lasting community impact."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=800&h=1000&fit=crop"
                  alt="African woman entrepreneur working"
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
                Entrepreneurial Skills
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the skills to build and grow your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-2 hover:border-green-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                      <skill.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Phases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Entrepreneurial Journey
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">Ideation & Validation</h3>
                  <p className="text-gray-600 mb-4">4 weeks</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Business idea development</li>
                    <li>• Market research & validation</li>
                    <li>• Customer discovery</li>
                    <li>• Business model canvas</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Business Launch</h3>
                  <p className="text-gray-600 mb-4">8 weeks</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Business plan creation</li>
                    <li>• Financial planning & budgeting</li>
                    <li>• Legal & registration</li>
                    <li>• Marketing & sales strategy</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Growth & Scaling</h3>
                  <p className="text-gray-600 mb-4">8 weeks</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Growth hacking strategies</li>
                    <li>• Funding & investment</li>
                    <li>• Team building & management</li>
                    <li>• Expansion planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Support
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-3">Funding Access</h3>
                  <p className="text-gray-600">
                    Connect with angel investors, VCs, and access to startup grants and competitions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">👥</div>
                  <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
                  <p className="text-gray-600">
                    One-on-one guidance from successful entrepreneurs and business leaders
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold mb-3">Business Network</h3>
                  <p className="text-gray-600">
                    Join a community of entrepreneurs, access to co-working spaces and resources
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Build a Thriving Business
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  ThriveMakers graduates launch and grow successful businesses
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-green-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>20 weeks (5 months)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>Hybrid (Workshops + Online modules + 1-on-1 coaching)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Time Commitment:</p>
                        <p>10-12 hours per week</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Business plan & pitch deck</li>
                          <li>• Investor pitch coaching</li>
                          <li>• Co-working space access</li>
                          <li>• Seed funding opportunities</li>
                          <li>• Lifetime alumni network</li>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join ThriveMakers and turn your business dreams into reality
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                Apply for ThriveMakers
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ThriveMakers;
