import React from 'react';
import Navigation from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import PageHero from '@/components/ui/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  GraduationCap, 
  Sparkles, 
  Globe, 
  Clock, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Women Empowered', value: '500+' },
    { label: 'Programs Completed', value: '50+' },
    { label: 'Communities Reached', value: '25+' },
    { label: 'Success Stories', value: '200+' }
  ];

  const milestones = [
    { year: '2024', title: 'Founded', description: 'SAV WOMEN initiative launched' },
    { year: '2025', title: 'First Program', description: '50 women completed leadership training' },
    { year: '2025', title: 'Community Growth', description: 'Expanded to 10 communities' },
    { year: '2025', title: 'Digital Platform', description: 'Launched online resources and tools' },
    { year: '2025', title: 'Global Reach', description: 'Supporting women across 25+ communities' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton />
          </div>

          <PageHero 
            title={{
              main: "About",
              highlight: "SAV WOMEN"
            }}
            description="A social innovation startup empowering women and girls in Northern Nigeria through cutting-edge digital skills, leadership development, and economic empowerment—not charity, but sustainable, scalable impact."
          />

          {/* Strategic Positioning Section */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-700 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Social Innovation Startup, Not a Charity</h2>
            <p className="text-lg text-gray-700 mb-4">
              Operating from <strong>Maiduguri, Borno State</strong>, The SAV Women Foundation is strategically positioned at the nexus of technology growth and socio-economic stabilization in Northern Nigeria. We operate like a startup—agile, results-oriented, and innovation-driven—with measurable outcomes and replicable models.
            </p>
            <p className="text-lg text-gray-700">
              Investment in SAV is not charity—it's an <strong>investment in security, stability, and Nigeria's digital future</strong>, delivering both Return on Investment (ROI) and Return on Stability (RoS).
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-neutral-900">
                  <Target className="w-6 h-6 text-neutral-600" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-600">
                  The SAV Women Foundation closes the gender gap in technology, leadership, and opportunity by empowering women and girls in Northern Nigeria to become capable leaders of innovation and economic drivers in their communities.
                </p>
                <p className="text-neutral-600">
                  We don't just teach women to use technology—we teach them to own the future through our indigenous Train-the-Trainer (TTT) model, creating a self-sustaining cycle of empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-neutral-900">
                  <Heart className="w-6 h-6 text-neutral-600" />
                  <span>Our Strategic Approach</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Measurable outcomes over charity dependency',
                    'Indigenous, scalable Train-the-Trainer (TTT) model',
                    'High-value digital skills (AI, Data Science, Coding)',
                    'Holistic development: technical + mental resilience',
                    'Alignment with Nigeria\'s NDEPS 2020-2030 policy',
                    'Return on Stability (RoS) in conflict-affected zones'
                  ].map((value, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-4 h-4 text-green-700" />
                      </div>
                      <span className="text-neutral-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* TTT Model Section */}
          <div className="mb-16 bg-black text-white rounded-2xl p-12">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">The Train-the-Trainer (TTT) Model</h2>
              <p className="text-xl text-gray-300 mb-6">
                Our indigenous scalability mechanism: Every participant becomes a <strong>Girl of Impact Ambassador</strong>, training others in her community or school—creating a self-sustaining cycle of empowerment.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-400 mb-2">1</div>
                  <h3 className="text-lg font-bold mb-2">Learn</h3>
                  <p className="text-gray-300">Participants master high-value tech skills</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-400 mb-2">2</div>
                  <h3 className="text-lg font-bold mb-2">Become Ambassador</h3>
                  <p className="text-gray-300">Graduate as Girl of Impact Ambassador</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-green-400 mb-2">3</div>
                  <h3 className="text-lg font-bold mb-2">Train Others</h3>
                  <p className="text-gray-300">Multiply impact through peer-to-peer training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Impact Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Women Empowered', value: '500+', icon: Users },
                { label: 'Income Increase Target', value: '27%', icon: TrendingUp },
                { label: 'Communities Reached', value: '25+', icon: Globe },
                { label: 'NDEPS Pillars Aligned', value: '7/8', icon: Award }
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center bg-white shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-600"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-green-100 flex items-center justify-center mb-4">
                      <stat.icon className="h-6 w-6 text-green-700" />
                    </div>
                    <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Location & Strategic Value */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Globe className="w-6 h-6 text-green-700" />
                  <span>Maiduguri, Borno State</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our strategic location in Maiduguri positions us at the intersection of technology growth and post-conflict recovery in Northern Nigeria.
                </p>
                <p className="text-gray-700">
                  <strong>Return on Stability (RoS):</strong> By providing high-value digital skills and economic empowerment, we address root causes of instability—poverty and illiteracy—delivering measurable security dividends alongside economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Target className="w-6 h-6 text-blue-700" />
                  <span>NDEPS Alignment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our 8 programs directly align with Nigeria's National Digital Economy Policy and Strategy (NDEPS) 2020-2030, making us an ideal implementation partner for federal and state mandates.
                </p>
                <p className="text-gray-700 font-semibold">
                  We provide the execution mechanism for national digital inclusion goals in the North-East.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Section */}
          <Card className="mb-16 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-yellow-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-3xl">
                <Clock className="w-8 h-8 text-green-600" />
                <span>Our Journey</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-12 relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 to-green-800" />
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-8 group/item">
                    {/* Year bubble */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform group-hover/item:scale-110 transition-transform">
                        {milestone.year}
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute -inset-2 border-2 border-green-200 rounded-full animate-pulse opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg transform group-hover/item:-translate-y-1 transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
                        <span>{milestone.title}</span>
                        <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;