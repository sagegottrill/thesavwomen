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
    <section className="w-full py-20 bg-white" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Empowering the Next Generation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Building confidence, fostering leadership, and creating lasting community connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((valueProp, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-green-700 transition-colors"
            >
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