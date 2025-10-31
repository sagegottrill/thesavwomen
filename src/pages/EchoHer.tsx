import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Megaphone, Users, Vote, Mic, MessageSquare, BookOpen, CheckCircle } from 'lucide-react';

const EchoHer = () => {
  const focus = [
    { 
      icon: Megaphone, 
      title: 'Advocacy Training', 
      description: 'Learn to advocate for yourself and your community' 
    },
    { 
      icon: Mic, 
      title: 'Public Speaking', 
      description: 'Master the art of speaking truth to power' 
    },
    { 
      icon: Vote, 
      title: 'Civic Engagement', 
      description: 'Participate actively in democratic processes' 
    },
    { 
      icon: MessageSquare, 
      title: 'Media & Communication', 
      description: 'Use media platforms to amplify your message' 
    }
  ];

  const outcomes = [
    'Confidence to speak on public platforms',
    'Understanding of policy and advocacy',
    'Strong communication and persuasion skills',
    'Network of fellow advocates',
    'Media presence and influence',
    'Active participation in community issues'
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
                ADVOCACY & VOICE AMPLIFICATION
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                EchoHer
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Amplifying women's voices through advocacy training, civic engagement, and media platforms
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join EchoHer
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
                  Your Voice Matters, Make It Heard
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  EchoHer is an advocacy and voice amplification program that empowers women to 
                  speak up on issues that matter, influence policy, and drive meaningful change 
                  in their communities and beyond.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through training in advocacy, public speaking, media engagement, and civic 
                  participation, we equip women with the skills and platforms to make their 
                  voices heard at every level—from local communities to national stages.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "When women speak, the world changes. Let's make sure the world is listening."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop"
                  alt="African woman speaking and advocating"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Program Focus Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Developing powerful advocates and change-makers
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focus.map((item, index) => (
                <Card key={index} className="border-2 hover:border-indigo-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Components */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How We Amplify Your Voice
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎤</div>
                  <h3 className="text-xl font-bold mb-3">Public Speaking Mastery</h3>
                  <p className="text-gray-600">
                    Intensive training in public speaking, presentation skills, and commanding an audience
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📢</div>
                  <h3 className="text-xl font-bold mb-3">Advocacy Campaigns</h3>
                  <p className="text-gray-600">
                    Design and lead advocacy campaigns on issues affecting women and communities
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📺</div>
                  <h3 className="text-xl font-bold mb-3">Media Training</h3>
                  <p className="text-gray-600">
                    Learn to engage with traditional and social media to spread your message effectively
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold mb-3">Policy & Governance</h3>
                  <p className="text-gray-600">
                    Understand policy-making processes and how to influence government decisions
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">✍️</div>
                  <h3 className="text-xl font-bold mb-3">Content Creation</h3>
                  <p className="text-gray-600">
                    Create compelling content for blogs, op-eds, social media, and publications
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-3">Coalition Building</h3>
                  <p className="text-gray-600">
                    Build alliances and coalitions to amplify impact and drive systemic change
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advocacy Tracks */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Advocacy Track
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Women's Rights Advocacy</h3>
                  <p className="text-gray-600 mb-4">Focus on gender equality and women's empowerment</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Gender-based violence prevention</li>
                    <li>• Economic empowerment</li>
                    <li>• Reproductive rights</li>
                    <li>• Equal pay and workplace rights</li>
                    <li>• Political participation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Community Development</h3>
                  <p className="text-gray-600 mb-4">Drive change in your local community</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Education advocacy</li>
                    <li>• Healthcare access</li>
                    <li>• Environmental justice</li>
                    <li>• Youth empowerment</li>
                    <li>• Local governance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Policy & Legislation</h3>
                  <p className="text-gray-600 mb-4">Influence laws and policies</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Legislative advocacy</li>
                    <li>• Policy analysis</li>
                    <li>• Lobbying strategies</li>
                    <li>• Bill drafting support</li>
                    <li>• Government relations</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Digital Advocacy</h3>
                  <p className="text-gray-600 mb-4">Leverage digital platforms for change</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Social media campaigns</li>
                    <li>• Online petition drives</li>
                    <li>• Digital storytelling</li>
                    <li>• Influencer activism</li>
                    <li>• Tech for social good</li>
                  </ul>
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
                  Become a Powerful Voice for Change
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  EchoHer graduates lead advocacy efforts and drive real change
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-indigo-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>12 weeks (3 months)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>Hybrid (Workshops + Field advocacy + Online campaigns)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Time Commitment:</p>
                        <p>6-8 hours per week</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Media and presentation training</li>
                          <li>• Campaign toolkit & resources</li>
                          <li>• Platform for your advocacy</li>
                          <li>• Mentorship from activists</li>
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Make Your Voice Echo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join EchoHer and become an advocate for the change you want to see
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                Join the Movement
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EchoHer;
