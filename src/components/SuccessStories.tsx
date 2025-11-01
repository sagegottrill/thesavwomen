import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: 'Amina Mustapha',
      role: 'Founder & CEO',
      quote: 'I founded SAV WOMEN with a vision to empower young women and create lasting positive change in our communities. Together, we\'re building a future where every woman can achieve her dreams.',
      image: '/founder.png',
      achievements: ['500+ Women Empowered', '10+ Programs Launched', 'Community Impact Award']
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-green-50 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            The visionary leader behind SAV WOMEN
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl border border-gray-100">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 md:p-12 flex flex-col justify-center space-y-8">
                    <div>
                      <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200 px-4 py-2 text-sm font-semibold rounded-full">
                        {story.role}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                        {story.name}
                      </h3>

                      <div className="relative">
                        <div className="absolute -left-2 top-0 text-6xl text-green-600 opacity-20 font-serif">"</div>
                        <p className="text-neutral-700 text-lg md:text-xl leading-relaxed pl-6">
                          {story.quote}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="group/item flex items-center gap-4 text-neutral-700 transition-all duration-300 hover:translate-x-2">
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover/item:bg-green-600 transition-colors duration-300">
                            <Award className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-base font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
              <Users className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="text-base font-semibold text-neutral-800">Join Our Growing Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
