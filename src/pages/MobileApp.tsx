import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { 
  Smartphone, 
  Download, 
  CheckCircle, 
  Users, 
  BookOpen, 
  TrendingUp,
  Wifi,
  WifiOff,
  Award,
  BarChart3,
  Target,
  MapPin,
  Clock,
  Shield
} from 'lucide-react';

const MobileApp: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'CodeBloom Curriculum',
      description: 'Access AI, Data Science, and UI/UX courses offline with automatic sync',
      userType: 'All Users'
    },
    {
      icon: Award,
      title: 'Certification Tracking',
      description: 'Automated skill assessments and digital certificates for completed modules',
      userType: 'Girls of Impact & Teachers'
    },
    {
      icon: Users,
      title: 'TTT Audit Engine',
      description: 'Log peer training sessions, track Ambassadors, and verify community multiplication',
      userType: 'Ambassadors'
    },
    {
      icon: BarChart3,
      title: 'Impact Dashboard',
      description: 'Real-time KPI tracking: employment, income increase, and community reach',
      userType: 'All Users'
    },
    {
      icon: Target,
      title: 'WellSpring Tracker',
      description: 'Mental health check-ins and resilience monitoring for workforce reliability',
      userType: 'Girls of Impact'
    },
    {
      icon: MapPin,
      title: 'Geo-Verified Training',
      description: 'Location-tagged session logs for auditable community engagement proof',
      userType: 'Ambassadors'
    },
    {
      icon: Shield,
      title: 'Teacher Enablement',
      description: 'MOESTI compliance tracking for 2,700 teachers with audit-ready reports',
      userType: 'Educators'
    },
    {
      icon: TrendingUp,
      title: 'Employment Reporting',
      description: 'Track job placements, business launches, and 27% income increase benchmark',
      userType: 'All Users'
    }
  ];

  const userTypes = [
    {
      type: 'Girls of Impact',
      color: 'green',
      icon: Users,
      features: [
        'Access CodeBloom curriculum offline',
        'Complete micro-assessments and earn certificates',
        'Track personal progress and skill development',
        'Report employment and income updates',
        'WellSpring wellness check-ins'
      ]
    },
    {
      type: 'Ambassadors',
      color: 'blue',
      icon: Target,
      features: [
        'Log peer training sessions with geo-tagging',
        'Track community multiplication KPI',
        'Monitor club formation and member growth',
        'Access Ambassador-specific training materials',
        'View personal impact dashboard'
      ]
    },
    {
      type: 'Teachers (MOESTI)',
      color: 'purple',
      icon: BookOpen,
      features: [
        'Digital literacy training package',
        'Student progress tracking tools',
        'Automated compliance reporting',
        'Educator performance analytics',
        'Certification renewal automation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block bg-green-50 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  Ambassador Audit Engine
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  The SAV Women Mobile App
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Built for resilience in Maiduguri. Designed for scale across Nigeria. 
                  <strong className="text-gray-900"> Offline-first. Audit-ready. Impact-proven.</strong>
                </p>
              </div>

              <div className="flex items-start gap-4 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <WifiOff className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Works Offline</h3>
                  <p className="text-gray-700">
                    Download CodeBloom content, complete assessments, and log training sessions without internet. 
                    Auto-syncs when connected.
                  </p>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Download Now</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Google Play Store
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download APK
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  <Clock className="inline w-4 h-4 mr-1" />
                  iOS version coming soon
                </p>
              </div>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Welcome back,</p>
                      <h3 className="text-xl font-bold text-gray-900">Fatima A.</h3>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                      <BookOpen className="w-8 h-8 text-green-600 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">12</p>
                      <p className="text-sm text-gray-600">Modules Done</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <Users className="w-8 h-8 text-blue-600 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">5</p>
                      <p className="text-sm text-gray-600">Girls Trained</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">AI Fundamentals</p>
                        <p className="text-sm text-gray-600">Completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">Data Science</p>
                        <p className="text-sm text-gray-600">In Progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <Wifi className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-600">Status</p>
                    <p className="font-bold text-gray-900">Synced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Impact, Designed for Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is engineered to track, verify, and multiply the impact of digital empowerment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-600">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                    <span className="inline-block text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {feature.userType}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Designed for Three User Types
            </h2>
            <p className="text-xl text-gray-600">
              Role-based access ensures everyone gets exactly what they need
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {userTypes.map((userType, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-green-600">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 bg-${userType.color}-100 rounded-2xl flex items-center justify-center group-hover:bg-${userType.color}-600 transition-colors duration-300`}>
                    <userType.icon className={`w-8 h-8 text-${userType.color}-600 group-hover:text-white transition-colors duration-300`} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{userType.type}</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
                  </div>

                  <ul className="space-y-3">
                    {userType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mobile App Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why a Mobile App for Maiduguri?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Operational resilience in a challenging infrastructure environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-white/20">
              <WifiOff className="w-12 h-12 text-white" />
              <h3 className="text-2xl font-bold">Offline-First Design</h3>
              <p className="text-green-100">
                Download entire curriculum modules and work without internet. All data syncs automatically when connection is restored.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-white/20">
              <Shield className="w-12 h-12 text-white" />
              <h3 className="text-2xl font-bold">Audit-Ready Compliance</h3>
              <p className="text-green-100">
                Every action is logged, timestamped, and verified. Perfect for the MOESTI ₦1 Billion contract and institutional reporting.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4 border border-white/20">
              <Users className="w-12 h-12 text-white" />
              <h3 className="text-2xl font-bold">TTT Multiplication</h3>
              <p className="text-green-100">
                Track every Ambassador training session with geo-verification, proving the scalability of the Train-the-Trainer model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Download?
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of Girls of Impact, Ambassadors, and Teachers already using the app
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-900 text-white font-semibold px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <Download className="mr-2 h-6 w-6" />
              Download for Android
            </Button>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <Smartphone className="mr-2 h-6 w-6" />
                Learn About SAV Women
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-600">
            Need help? Contact us at <a href="mailto:tech@savwomen.org" className="text-green-600 hover:underline font-semibold">tech@savwomen.org</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileApp;
