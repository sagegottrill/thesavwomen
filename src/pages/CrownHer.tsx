import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Crown, Users, TrendingUp, Target, Scale, Award, CheckCircle } from 'lucide-react';

const CrownHer = () => {
  const skills = [
    { 
      icon: Crown, 
      title: 'Leadership Excellence', 
      description: 'Develop powerful leadership skills and presence' 
    },
    { 
      icon: Scale, 
      title: 'Governance & Ethics', 
      description: 'Understand governance structures and ethical leadership' 
    },
    { 
      icon: Target, 
      title: 'Strategic Thinking', 
      description: 'Master strategic planning and decision-making' 
    },
    { 
      icon: Users, 
      title: 'Team Management', 
      description: 'Lead and inspire high-performing teams' 
    }
  ];

  const outcomes = [
    'Executive leadership readiness',
    'Board membership qualification',
    'Strategic decision-making capabilities',
    'Governance expertise',
    'Organizational transformation skills',
    'Mentorship and succession planning'
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
                LEADERSHIP & GOVERNANCE
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                CrownHer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Empowering women to take their rightful place in leadership and governance positions across all sectors
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join CrownHer
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
                  Lead with Purpose, Govern with Impact
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  CrownHer is a comprehensive leadership and governance program designed to prepare 
                  women for executive roles, board positions, and influential decision-making positions 
                  in both public and private sectors.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We bridge the leadership gap by equipping women with the skills, knowledge, and 
                  networks needed to excel in governance roles and drive organizational transformation.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "Women in leadership positions don't just change organizations—they transform entire systems."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?w=800&h=1000&fit=crop"
                  alt="African woman leader in professional setting"
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
                Leadership Competencies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Develop the skills required for executive leadership
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="border-2 hover:border-purple-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                      <skill.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Tracks */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Program Tracks
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Executive Leadership Track</h3>
                  <p className="text-gray-600 mb-4">16 weeks</p>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Executive presence and influence</li>
                    <li>• Strategic organizational leadership</li>
                    <li>• Change management and innovation</li>
                    <li>• Executive communication</li>
                    <li>• Financial acumen for leaders</li>
                    <li>• Crisis management</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <Scale className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Governance & Board Track</h3>
                  <p className="text-gray-600 mb-4">16 weeks</p>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Corporate governance frameworks</li>
                    <li>• Board dynamics and effectiveness</li>
                    <li>• Fiduciary responsibilities</li>
                    <li>• Risk management and compliance</li>
                    <li>• Stakeholder engagement</li>
                    <li>• Board-level decision making</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Methods */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How We Develop Leaders
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="text-xl font-bold mb-3">Intensive Workshops</h3>
                  <p className="text-gray-600">
                    Bi-weekly leadership workshops with industry experts and successful leaders
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">👥</div>
                  <h3 className="text-xl font-bold mb-3">Executive Mentorship</h3>
                  <p className="text-gray-600">
                    One-on-one mentorship with C-suite executives and board members
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-3">Real-World Projects</h3>
                  <p className="text-gray-600">
                    Lead actual organizational projects and present to executive boards
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
                  Career Advancement Outcomes
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  CrownHer graduates are positioned for significant career advancement
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-purple-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>16 weeks (4 months)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>Executive seminars + Virtual sessions</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Time Commitment:</p>
                        <p>8-10 hours per week</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Executive coaching sessions</li>
                          <li>• Leadership assessment tools</li>
                          <li>• Board placement support</li>
                          <li>• Executive network access</li>
                          <li>• Professional certification</li>
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
              Ready to Lead at the Highest Level?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join CrownHer and take your place at the leadership table
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                Apply for CrownHer
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CrownHer;
