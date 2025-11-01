import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  Globe, 
  Handshake,
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Heart,
  Briefcase
} from 'lucide-react';

const Partners = () => {
  const stakeholders = [
    {
      category: 'Federal Government',
      icon: Building2,
      lead: 'NITDA (National Information Technology Development Agency)',
      color: 'blue',
      value: 'Policy Alignment & National Replication',
      proposition: 'SAV provides a scalable, audited, indigenous delivery mechanism for NDEPS goals in the North-East, enabling NITDA to fulfill its commitment to inclusive growth and enhance partnerships by 150% by 2027.',
      ask: 'Memorandum of Understanding (MOU) for national replication of the Girls of Impact TTT model'
    },
    {
      category: 'Borno State Government',
      icon: GraduationCap,
      lead: 'Ministry of Education, Science, Technology and Innovation (MOESTI)',
      color: 'green',
      value: 'Curriculum Integration & Teacher Training',
      proposition: 'SAV directly addresses Governor Zulum\'s agenda for rebuilding lives and ending conflict root causes by providing the indispensable technical curriculum component for the state\'s ₦1 Billion teacher training package.',
      ask: 'B2G contract for CodeBloom curriculum delivery to 2,700 teachers'
    },
    {
      category: 'Development Partners',
      icon: Globe,
      lead: 'UN Women, World Bank, EU',
      color: 'purple',
      value: 'Program Funding & Impact Validation',
      proposition: 'SAV offers a proven, data-driven model linking advanced digital skills to verifiable income increase (27% benchmark) and psycho-social resilience for conflict-affected populations.',
      ask: 'Multi-year program funding and M&E collaboration for regional replication'
    },
    {
      category: 'Private Sector & VCs',
      icon: Briefcase,
      lead: 'Tech Companies, Telecom, Impact Investors',
      color: 'yellow',
      value: 'Talent Pipeline & Local Content Compliance',
      proposition: 'Access to a high-quality pipeline of rigorously trained, future-ready female tech talent (AI, Data Science) in an untapped geopolitical hub, fulfilling CSR goals and mandatory 80% local content requirements.',
      ask: 'B2B service contracts, internship programs, and impact investment'
    }
  ];

  const partnershipBenefits = {
    government: [
      'Turn-key solution for NDEPS policy execution',
      'Proven indigenous scalability model (TTT)',
      'Measurable ROI and RoS metrics',
      'Regional balancing and political visibility',
      'Low-cost, high-impact deployment mechanism'
    ],
    corporate: [
      'Pre-vetted pipeline of AI/Data Science talent',
      'NITDA local content compliance (80% requirement)',
      'CSR impact with measurable outcomes',
      'Access to underserved markets in North-East',
      'Workforce development tax benefits'
    ],
    development: [
      '27% income increase benchmark validation',
      'Resilience-engineered workforce model',
      'Conflict-zone implementation expertise',
      'Gender-responsive digital inclusion',
      'Scalable blueprint for regional replication'
    ]
  };

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-300',
    green: 'bg-green-50 border-green-300',
    purple: 'bg-purple-50 border-purple-300',
    yellow: 'bg-yellow-50 border-yellow-300'
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
                Strategic Partnerships & Stakeholders
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                The SAV Women Foundation is positioned as a pre-vetted, strategic partner ready to execute Nigeria's digital economy policy and deliver measurable socio-economic impact.
              </p>
              <div className="bg-white/10 border-l-4 border-green-400 p-6 rounded">
                <p className="text-lg font-semibold">
                  We offer institutional partners a "plug-and-play" solution for NDEPS implementation, regional balancing, and conflict-zone stabilization—not charity, but strategic infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Partner with SAV?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven, indigenous model delivering both Return on Investment (ROI) and Return on Stability (RoS)
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">NDEPS Alignment</h3>
                  <p className="text-gray-600">
                    7 of 8 pillars covered—we are the execution mechanism for federal digital economy policy in the North-East
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Proven Scalability</h3>
                  <p className="text-gray-600">
                    Indigenous Train-the-Trainer model provides cost-effective, exponential growth without heavy infrastructure
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-500 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-red-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Measurable Impact</h3>
                  <p className="text-gray-600">
                    27% income increase benchmark, KPI tracking, and Return on Stability metrics for security-focused investment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with SAV?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's formalize institutional partnerships, secure MOUs, and scale impact across Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Schedule Partnership Discussion
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/impact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6">
                  View Our Impact Metrics
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

export default Partners;
