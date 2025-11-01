import React from 'react';

const ValueProposition: React.FC = () => {
  const valueProps = [
    {
      title: 'Empowerment',
      description: 'Building confidence and self-worth through mentorship, workshops, and personal development programs.'
    },
    {
      title: 'Community',
      description: 'Connecting young women with like-minded peers, mentors, and role models in a supportive environment.'
    },
    {
      title: 'Growth Tools',
      description: 'Access to resources, scholarships, career guidance, and leadership development opportunities.'
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering the Next Generation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building confidence, fostering leadership, and creating lasting community connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((valueProp, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-600 hover:-translate-y-2"
            >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <div className="w-8 h-8 bg-green-600 rounded-lg group-hover:bg-white transition-colors"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {valueProp.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {valueProp.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;