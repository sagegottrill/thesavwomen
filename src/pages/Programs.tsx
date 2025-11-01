import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Sparkles, 
  Crown, 
  TrendingUp, 
  Heart, 
  BookOpen, 
  Megaphone, 
  DollarSign,
  ArrowRight 
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Code,
      title: 'CodeBloom',
      description: 'Digital literacy, coding, and emerging technologies (AI, Data Science)',
      color: 'bg-blue-50',
      link: '/programs/codebloom',
      featured: true,
      ndeps: 'Digital Literacy & Skills'
    },
    {
      icon: Sparkles,
      title: 'Rise & Radiate',
      description: 'Confidence, communication, and personal branding',
      color: 'bg-pink-50',
      link: '/programs/rise-and-radiate',
      ndeps: 'Soft Infrastructure'
    },
    {
      icon: Crown,
      title: 'CrownHer',
      description: 'Leadership and governance development',
      color: 'bg-purple-50',
      link: '/programs/crownher',
      ndeps: 'Developmental Regulation'
    },
    {
      icon: TrendingUp,
      title: 'ThriveMakers',
      description: 'Women entrepreneurship and innovation support',
      color: 'bg-green-50',
      link: '/programs/thrivemakers',
      ndeps: 'Digital Services Development'
    },
    {
      icon: Heart,
      title: 'WellSpring',
      description: 'Wellness and mental health awareness (Resilience-Engineered Workforce)',
      color: 'bg-red-50',
      link: '/programs/wellspring',
      ndeps: 'Soft Infrastructure'
    },
    {
      icon: BookOpen,
      title: 'BrightSteps',
      description: 'Girl-child education and mentorship',
      color: 'bg-yellow-50',
      link: '/programs/brightsteps',
      ndeps: 'Digital Society'
    },
    {
      icon: Megaphone,
      title: 'EchoHer',
      description: 'Advocacy and women\'s voice amplification',
      color: 'bg-indigo-50',
      link: '/programs/echoher',
      ndeps: 'Digital Society & Emerging Tech'
    },
    {
      icon: DollarSign,
      title: 'WealthWise',
      description: 'Financial literacy and economic empowerment',
      color: 'bg-emerald-50',
      link: '/programs/wealthwise',
      ndeps: 'Service Infrastructure'
    }
  ];

  return (
    <div className="relative overflow-x-hidden">
      <NavigationUpdated />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                Eight structured programs designed to empower women and girls with skills, 
                confidence, and digital knowledge to thrive in today's innovation-driven world.
              </p>
              <div className="bg-white/10 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg text-gray-200">
                  <strong className="text-white">Strategically aligned with Nigeria's NDEPS 2020-2030:</strong> Our programs address 7 of 8 pillars of the National Digital Economy Policy, making us an essential partner for federal and state digital inclusion goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Program Highlight */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black text-white rounded-2xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="bg-white/20 text-sm font-semibold px-4 py-2 rounded-full">
                    FLAGSHIP PROGRAM
                  </span>
                  <h2 className="text-4xl font-bold mt-6 mb-6">
                    Girls of Impact
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    A digital mentorship and innovation ecosystem designed to equip young women 
                    with future-ready tech skills through our Train-the-Trainer model.
                  </p>
                  <ul className="space-y-3 text-lg text-gray-300 mb-8">
                    <li>• Web & Mobile App Development</li>
                    <li>• Data Analytics & Data Science</li>
                    <li>• Artificial Intelligence (AI)</li>
                    <li>• UI/UX Design & Cyber Safety</li>
                    <li>• Digital Branding & Entrepreneurship</li>
                  </ul>
                  <Link to="/programs/girls-of-impact">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                      Learn More About Girls of Impact
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&h=800&fit=crop"
                    alt="African women collaborating in tech program"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Programs Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Eight Programs, Endless Possibilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each program is designed to be sustainable, replicable, and locally impactful
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <Link key={index} to={program.link}>
                  <Card className="h-full border-2 hover:border-black transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                        <program.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                      {program.ndeps && (
                        <div className="mb-3 bg-green-50 border border-green-200 rounded px-2 py-1">
                          <p className="text-xs text-green-800 font-medium">
                            NDEPS: {program.ndeps}
                          </p>
                        </div>
                      )}
                      <span className="text-sm font-semibold flex items-center">
                        Learn more
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Measurable Impact & Strategic Value
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver both Return on Investment (ROI) and Return on Stability (RoS) through verifiable metrics
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-700 mb-2">10,000+</div>
                <p className="text-xl text-gray-600">Women & Girls by 2030</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-700 mb-2">27%</div>
                <p className="text-xl text-gray-600">Income Increase Target</p>
                <p className="text-sm text-gray-500 mt-2">(World Bank benchmark)</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-700 mb-2">100+</div>
                <p className="text-xl text-gray-600">Girls of Impact Clubs</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-700 mb-2">7/8</div>
                <p className="text-xl text-gray-600">NDEPS Pillars Aligned</p>
              </div>
            </div>
            
            {/* TTT Model Highlight */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Indigenous Scalability: Train-the-Trainer Model</h3>
                <p className="text-gray-600 mt-2">Every participant becomes a Girl of Impact Ambassador, multiplying impact through peer-to-peer training</p>
              </div>
              <div className="flex justify-center items-center space-x-4 text-lg font-semibold text-gray-700">
                <span>1 Participant</span>
                <ArrowRight className="w-6 h-6 text-green-600" />
                <span>Trains 5+</span>
                <ArrowRight className="w-6 h-6 text-green-600" />
                <span>Who Train 25+</span>
                <ArrowRight className="w-6 h-6 text-green-600" />
                <span className="text-green-700 font-bold">Exponential Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Join a Program?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey with The SAV Women Foundation today
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

export default Programs;
