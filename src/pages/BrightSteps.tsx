import React from 'react';
import NavigationUpdated from '@/components/NavigationUpdated';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Users, Sparkles, Target, Award, CheckCircle } from 'lucide-react';

const BrightSteps = () => {
  const focus = [
    { 
      icon: BookOpen, 
      title: 'Educational Support', 
      description: 'Academic tutoring and learning resources' 
    },
    { 
      icon: Users, 
      title: 'Mentorship', 
      description: 'Positive role models and guidance' 
    },
    { 
      icon: Sparkles, 
      title: 'Life Skills', 
      description: 'Essential skills for personal growth' 
    },
    { 
      icon: Target, 
      title: 'Future Planning', 
      description: 'Career guidance and goal setting' 
    }
  ];

  const outcomes = [
    'Improved academic performance',
    'Increased self-confidence and self-esteem',
    'Strong mentorship relationships',
    'Life skills and leadership development',
    'Career awareness and planning',
    'Safe and supportive community'
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
                GIRL-CHILD EDUCATION
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-6">
                BrightSteps
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Empowering girl-children through education, mentorship, and holistic development
              </p>
              <Link to="/join">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Support BrightSteps
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
                  Nurturing Tomorrow's Leaders Today
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  BrightSteps is dedicated to empowering girl-children through comprehensive educational 
                  support, mentorship, and life skills development. We believe every girl deserves the 
                  opportunity to reach her full potential.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through tutoring, mentorship programs, extracurricular activities, and safe spaces, 
                  we help girls build confidence, develop essential skills, and envision bright futures 
                  for themselves.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                  <p className="text-lg font-semibold text-gray-900">
                    "Educate a girl, and you educate a generation."
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=1000&fit=crop"
                  alt="African young girls learning together"
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
                Supporting holistic development of girl-children
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focus.map((item, index) => (
                <Card key={index} className="border-2 hover:border-yellow-500 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-yellow-600" />
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
                What We Provide
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold mb-3">Academic Tutoring</h3>
                  <p className="text-gray-600">
                    Free after-school tutoring in Math, Science, English, and other core subjects
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">👩‍🏫</div>
                  <h3 className="text-xl font-bold mb-3">Mentorship Program</h3>
                  <p className="text-gray-600">
                    One-on-one mentorship with successful women role models and professionals
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-3">Extracurricular Activities</h3>
                  <p className="text-gray-600">
                    Arts, sports, coding clubs, and other activities for well-rounded development
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">💪</div>
                  <h3 className="text-xl font-bold mb-3">Life Skills Training</h3>
                  <p className="text-gray-600">
                    Leadership, communication, financial literacy, and personal development workshops
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold mb-3">Scholarship Support</h3>
                  <p className="text-gray-600">
                    Educational scholarships and financial aid for deserving students
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold mb-3">Safe Spaces</h3>
                  <p className="text-gray-600">
                    Community centers where girls can learn, play, and grow in a supportive environment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Age Groups */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Programs by Age Group
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-yellow-600 mb-4">Ages 6-10</div>
                  <h3 className="text-2xl font-bold mb-4">Foundation Years</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Basic literacy & numeracy</li>
                    <li>• Creative arts & expression</li>
                    <li>• Social skills development</li>
                    <li>• Introduction to STEM</li>
                    <li>• Confidence building activities</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-yellow-600 mb-4">Ages 11-14</div>
                  <h3 className="text-2xl font-bold mb-4">Growth Years</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advanced academic support</li>
                    <li>• Leadership development</li>
                    <li>• Digital literacy</li>
                    <li>• Health & wellness education</li>
                    <li>• Career exploration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-yellow-600 mb-4">Ages 15-18</div>
                  <h3 className="text-2xl font-bold mb-4">Transition Years</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• College prep & SAT support</li>
                    <li>• Career planning & internships</li>
                    <li>• Financial literacy</li>
                    <li>• Mentorship opportunities</li>
                    <li>• Scholarship applications</li>
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
                  Empowering the Next Generation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  BrightSteps participants thrive academically and personally
                </p>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="border-2 border-yellow-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Program Details</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <p className="font-semibold text-gray-900">Duration:</p>
                        <p>Year-round program (Academic year cycle)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Format:</p>
                        <p>In-person at community centers</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Schedule:</p>
                        <p>After-school & weekend sessions</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Includes:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Free tutoring services</li>
                          <li>• Learning materials & supplies</li>
                          <li>• Nutritious snacks/meals</li>
                          <li>• Transportation support</li>
                          <li>• Scholarship opportunities</li>
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
              Help a Girl Take BrightSteps
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Enroll your daughter or support our mission to empower girl-children
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-gray-100 font-semibold px-8 py-6">
                  Volunteer as Mentor
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

export default BrightSteps;
