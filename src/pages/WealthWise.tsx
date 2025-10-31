import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { DollarSign, PiggyBank, TrendingUp, Briefcase, CreditCard, Target, CheckCircle } from 'lucide-react';

const WealthWise = () => {
  const focus = [
    { 
      icon: PiggyBank, 
      title: 'Financial Literacy', 
      description: 'Master the fundamentals of money management' 
    },
    { 
      icon: TrendingUp, 
      title: 'Investment & Wealth', 
      description: 'Build wealth through smart investments' 
    },
    { 
      icon: Briefcase, 
      title: 'Business Finance', 
      description: 'Manage finances for your business' 
    },
    { 
      icon: Target, 
      title: 'Financial Planning', 
      description: 'Plan for long-term financial security' 
    }
  ];

  const outcomes = [
    'Strong financial literacy and confidence',
    'Effective budgeting and saving habits',
    'Investment knowledge and portfolio',
    'Debt management and credit building',
    'Business financial management skills',
    'Long-term wealth building strategy'
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
                FINANCIAL EMPOWERMENT
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                WealthWise
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Building financial literacy and economic empowerment for women through education and smart money management
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Join WealthWise
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
                  Your Path to Financial Freedom
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  WealthWise is a comprehensive financial literacy and economic empowerment program 
                  designed to help women take control of their finances, build wealth, and achieve 
                  financial independence.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  From basic budgeting to investment strategies, from debt management to 
                  retirement planning, we cover everything you need to know to secure your 
                  financial future and create generational wealth.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "Financial independence is not about having money—it's about having choices."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573496546735-21e8e3e3660b?w=800&h=1000&fit=crop"
                  alt="African woman managing finances professionally"
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
                Core Financial Skills
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master the essentials of financial management
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focus.map((item, index) => (
                <Card key={index} className="border-2 hover:border-emerald-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Modules */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Curriculum
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <CreditCard className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Financial Basics</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Budgeting fundamentals</li>
                    <li>• Banking and savings</li>
                    <li>• Credit management</li>
                    <li>• Debt reduction strategies</li>
                    <li>• Financial goal setting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Investment & Growth</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stock market basics</li>
                    <li>• Real estate investing</li>
                    <li>• Mutual funds & ETFs</li>
                    <li>• Retirement accounts</li>
                    <li>• Risk management</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <Briefcase className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Business Finance</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Business accounting</li>
                    <li>• Cash flow management</li>
                    <li>• Pricing strategies</li>
                    <li>• Tax planning</li>
                    <li>• Funding & capital</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Retirement Planning</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pension strategies</li>
                    <li>• 401(k) optimization</li>
                    <li>• IRA accounts</li>
                    <li>• Social security</li>
                    <li>• Estate planning</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <DollarSign className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Income Streams</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multiple income sources</li>
                    <li>• Passive income ideas</li>
                    <li>• Side hustle strategies</li>
                    <li>• Freelancing & consulting</li>
                    <li>• Digital products</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <PiggyBank className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Wealth Building</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Asset accumulation</li>
                    <li>• Net worth growth</li>
                    <li>• Financial independence</li>
                    <li>• Generational wealth</li>
                    <li>• Legacy planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Journey */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Financial Journey
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-3">Week 1-4</div>
                  <h3 className="text-lg font-bold mb-2">Foundation</h3>
                  <p className="text-sm text-gray-600">Financial literacy basics and money mindset</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-3">Week 5-8</div>
                  <h3 className="text-lg font-bold mb-2">Management</h3>
                  <p className="text-sm text-gray-600">Budgeting, saving, and debt management</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-3">Week 9-12</div>
                  <h3 className="text-lg font-bold mb-2">Growth</h3>
                  <p className="text-sm text-gray-600">Investment strategies and portfolio building</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-600 mb-3">Week 13-16</div>
                  <h3 className="text-lg font-bold mb-2">Wealth</h3>
                  <p className="text-sm text-gray-600">Long-term planning and wealth strategies</p>
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
                  Transform Your Financial Future
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  WealthWise graduates achieve financial confidence and independence
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-emerald-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>16 weeks (4 months)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>Hybrid (Workshops + Online modules + Personal coaching)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Time Commitment:</p>
                        <p>4-6 hours per week</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Financial planning toolkit</li>
                          <li>• Personal finance coach</li>
                          <li>• Investment simulation account</li>
                          <li>• Budget templates & calculators</li>
                          <li>• Financial wellness certificate</li>
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
              Start Your Journey to Financial Freedom
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join WealthWise and take control of your financial future today
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                Enroll in WealthWise
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WealthWise;
