import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  DollarSign, 
  Globe,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Sparkles
} from 'lucide-react';

const Impact = () => {
  const kpis = [
    {
      title: 'Reach & Engagement',
      icon: Users,
      description: 'Customer acquisition and market penetration',
      metrics: [
        'Number of girls trained',
        'Girls of Impact Clubs formed',
        'Users actively engaged on digital platform',
        'Geographic coverage expansion'
      ],
      color: 'blue'
    },
    {
      title: 'Skill Development',
      icon: Target,
      description: 'Product effectiveness and talent quality',
      metrics: [
        'Pre- and post-program assessment scores',
        'Advanced skills mastery (AI, Data Science)',
        'Further study pursuit rate',
        'Professional certification achievements'
      ],
      color: 'purple'
    },
    {
      title: 'Employment & Innovation',
      icon: DollarSign,
      description: 'Return on Investment (ROI) - Core financial metric',
      metrics: [
        'Businesses launched by participants',
        '27% income increase benchmark (World Bank)',
        'Job placements secured',
        'Verified aggregate economic injection into Borno State'
      ],
      color: 'green',
      highlight: true
    },
    {
      title: 'Community Multiplication',
      icon: Sparkles,
      description: 'Scalability and replicability validation',
      metrics: [
        'Peer-to-peer training cycles completed',
        'Number of active Ambassadors',
        'TTT Model audit trail',
        'Geographic replication success rate'
      ],
      color: 'yellow'
    },
    {
      title: 'Return on Stability (RoS)',
      icon: Award,
      description: 'Security and conflict resolution impact',
      metrics: [
        'Economic injection in conflict-affected zones',
        'Community risk profile reduction',
        'Correlation with local stability indicators',
        'Post-conflict recovery acceleration'
      ],
      color: 'red',
      highlight: true
    }
  ];

  const ndepsAlignment = [
    {
      pillar: 'Digital Literacy & Skills',
      program: 'CodeBloom',
      impact: 'Cultivates high-value technical talent (AI, Data Science) crucial for national AI ecosystem'
    },
    {
      pillar: 'Indigenous Content Development',
      program: 'TTT Model',
      impact: 'Proof point of local, scalable, cost-effective replication model'
    },
    {
      pillar: 'Digital Services Development',
      program: 'ThriveMakers',
      impact: 'Nurtures grassroots digital entrepreneurship, contributing to non-oil GDP growth (ICT sector: 20%)'
    },
    {
      pillar: 'Soft Infrastructure',
      program: 'WellSpring',
      impact: 'Addresses psychological impact of conflict, creating resilience-engineered workforce'
    },
    {
      pillar: 'Developmental Regulation',
      program: 'CrownHer',
      impact: 'Nurtures future female policymakers for gender-responsive regulation'
    },
    {
      pillar: 'Service Infrastructure',
      program: 'WealthWise',
      impact: 'Bridges financial inclusion gap by enabling digital payments and mobile money'
    },
    {
      pillar: 'Digital Society & Emerging Tech',
      program: 'EchoHer',
      impact: 'Amplifies women\'s voices in policy formulation and tech adoption'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    red: 'bg-red-50 border-red-200 text-red-700'
  };

  return (
    <div className="relative overflow-x-hidden">
      <NavigationUpdated />
      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Measurable Impact & Strategic Value
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                We operate like a startup—tracking KPIs, ROI, and Return on Stability (RoS) with rigorous, auditable metrics designed for investors and policy evaluation.
              </p>
              <div className="bg-white/10 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg font-semibold">
                  Investment in SAV is not charity—it's optimized expenditure on national policy execution, economic growth, and security stabilization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Investment Thesis */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Dual Investment Thesis
              </h2>
              <p className="text-xl text-gray-600">
                ROI + RoS = Complete Strategic Value
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-500">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <DollarSign className="w-8 h-8 text-green-700" />
                    <span>Return on Investment (ROI)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>27% income increase benchmark</strong> (World Bank validation for similar programs in Northern Nigeria)
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Participants launching businesses and startups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Job placements in high-value tech roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Aggregate economic injection into Borno State</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Contribution to non-oil GDP growth (ICT sector: 20%)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-500">
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Award className="w-8 h-8 text-red-700" />
                    <span>Return on Stability (RoS)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4 text-lg">
                    <strong>Investment in security and stabilization</strong> in Maiduguri, Borno State—addressing root causes of conflict
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Economic empowerment reduces desperation and risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">High-value skills combat endemic poverty and illiteracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Correlation with local stability and conflict resolution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Direct alignment with Governor Zulum's recovery agenda</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5-Point KPI Framework */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Five-Point KPI Framework
              </h2>
              <p className="text-xl text-gray-600">
                Investment language, not charity metrics
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kpis.map((kpi, index) => (
                <Card 
                  key={index} 
                  className={`${kpi.highlight ? 'border-4 border-green-500 shadow-xl' : 'border-2'} hover:shadow-lg transition-all`}
                >
                  <CardHeader className={colorClasses[kpi.color]}>
                    <CardTitle className="flex items-center gap-3">
                      <kpi.icon className="w-6 h-6" />
                      <span className="text-lg">{kpi.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-600 mb-4 font-semibold">{kpi.description}</p>
                    <ul className="space-y-2">
                      {kpi.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-1.5" />
                          <span className="text-gray-700">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NDEPS Alignment Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                NDEPS 2020-2030 Alignment
              </h2>
              <p className="text-xl text-gray-600">
                7 of 8 Pillars: We are the execution mechanism for Nigeria's digital economy policy
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">NDEPS Pillar</th>
                      <th className="px-6 py-4 text-left font-semibold">SAV Program</th>
                      <th className="px-6 py-4 text-left font-semibold">Strategic Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ndepsAlignment.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.pillar}</td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.program}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-lg text-gray-800">
                <strong>8th Pillar - Solid Infrastructure:</strong> The Foundation acts as the <strong>Demand Generation Engine</strong>—by training 10,000 digitally skilled women, we create market justification for telecom and government investment in broadband infrastructure in the North-East.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Projections */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                2030 Impact Projections
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-green-700 mb-3">10,000+</div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Women Empowered</p>
                  <p className="text-sm text-gray-600">Across North-East Nigeria</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-green-700 mb-3">100+</div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Impact Clubs</p>
                  <p className="text-sm text-gray-600">Community hubs nationwide</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-green-700 mb-3">₦2B+</div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Economic Injection</p>
                  <p className="text-sm text-gray-600">Into Borno State economy</p>
                </CardContent>
              </Card>
              <Card className="text-center border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8">
                  <div className="text-5xl font-bold text-green-700 mb-3">5,000+</div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Active Ambassadors</p>
                  <p className="text-sm text-gray-600">Multiplying impact via TTT</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Partner with SAV for Measurable Impact
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're seeking institutional partnerships with NITDA, Borno State MOESTI, development partners, and impact investors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Partner with Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6">
                  View Our Programs
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

export default Impact;
