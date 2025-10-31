import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Brain, Users, Activity, Smile, CheckCircle } from 'lucide-react';

const WellSpring = () => {
  const focus = [
    { 
      icon: Brain, 
      title: 'Mental Health', 
      description: 'Understanding and managing mental wellness' 
    },
    { 
      icon: Heart, 
      title: 'Emotional Wellness', 
      description: 'Build emotional resilience and balance' 
    },
    { 
      icon: Activity, 
      title: 'Physical Health', 
      description: 'Holistic approach to physical well-being' 
    },
    { 
      icon: Smile, 
      title: 'Self-Care', 
      description: 'Practical self-care strategies and habits' 
    }
  ];

  const outcomes = [
    'Improved mental health awareness',
    'Stress and anxiety management skills',
    'Healthy coping mechanisms',
    'Work-life balance strategies',
    'Self-care routines and practices',
    'Access to professional support resources'
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
                WELLNESS & MENTAL HEALTH
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                WellSpring
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A holistic wellness program focusing on mental health, emotional balance, and self-care
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join WellSpring
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
                  Your Wellness Journey Starts Here
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  WellSpring is a comprehensive wellness program that addresses the mental, emotional, 
                  and physical health needs of women. In a world that demands so much, we create a 
                  safe space for healing, growth, and self-care.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through workshops, therapy sessions, peer support groups, and wellness activities, 
                  we help women build resilience, manage stress, and cultivate lasting well-being.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "You cannot pour from an empty cup. Take care of yourself first."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&h=1000&fit=crop"
                  alt="African woman in wellness and meditation"
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
                Holistic Wellness Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Addressing all dimensions of well-being
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focus.map((item, index) => (
                <Card key={index} className="border-2 hover:border-red-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-red-600" />
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
                What We Offer
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🧘‍♀️</div>
                  <h3 className="text-xl font-bold mb-3">Mindfulness & Meditation</h3>
                  <p className="text-gray-600">
                    Weekly guided meditation sessions, breathing exercises, and mindfulness practices
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold mb-3">Counseling Support</h3>
                  <p className="text-gray-600">
                    Access to professional counselors and therapists specializing in women's wellness
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">👭</div>
                  <h3 className="text-xl font-bold mb-3">Peer Support Groups</h3>
                  <p className="text-gray-600">
                    Safe spaces to share experiences and connect with other women on similar journeys
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold mb-3">Wellness Workshops</h3>
                  <p className="text-gray-600">
                    Educational sessions on stress management, emotional intelligence, and self-care
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏃‍♀️</div>
                  <h3 className="text-xl font-bold mb-3">Fitness & Nutrition</h3>
                  <p className="text-gray-600">
                    Yoga classes, fitness routines, and nutrition guidance for physical wellness
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold mb-3">24/7 Resources</h3>
                  <p className="text-gray-600">
                    Online resources, crisis helplines, and digital wellness tools available anytime
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Topics Covered */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Topics We Address
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Mental Health Challenges</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Anxiety and depression</li>
                    <li>• Stress management</li>
                    <li>• Burnout prevention</li>
                    <li>• Trauma healing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Life Balance</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Work-life balance</li>
                    <li>• Relationship wellness</li>
                    <li>• Setting boundaries</li>
                    <li>• Time management</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Self-Care Practices</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Daily wellness routines</li>
                    <li>• Sleep hygiene</li>
                    <li>• Healthy habits</li>
                    <li>• Mindfulness techniques</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Emotional Wellness</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emotional intelligence</li>
                    <li>• Resilience building</li>
                    <li>• Positive psychology</li>
                    <li>• Gratitude practices</li>
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
                  Transform Your Well-Being
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  WellSpring participants experience lasting positive changes
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-red-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>12 weeks (3 months) - Ongoing support available</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>Hybrid (In-person sessions + Online resources)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Time Commitment:</p>
                        <p>Flexible - 2-4 hours per week</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Professional counseling sessions</li>
                          <li>• Wellness toolkit & resources</li>
                          <li>• Peer support community</li>
                          <li>• Fitness & yoga classes</li>
                          <li>• 24/7 crisis support access</li>
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
              Prioritize Your Well-Being
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join WellSpring and start your journey to holistic wellness
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                Join WellSpring
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WellSpring;
