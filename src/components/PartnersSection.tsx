import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: 'NITDA',
      logo: 'https://nitda.gov.ng/wp-content/uploads/2021/04/NITDA-LOGO.png',
      alt: 'National Information Technology Development Agency'
    },
    {
      name: 'UN Women',
      logo: 'https://www.unwomen.org/sites/default/files/2022-06/UN-Women-logo-blue-en.png',
      alt: 'UN Women Africa'
    },
    {
      name: 'World Bank',
      logo: 'https://logos-world.net/wp-content/uploads/2021/10/World-Bank-Group-Logo.png',
      alt: 'World Bank Group'
    },
    {
      name: 'NESG',
      logo: 'https://nesgroup.org/storage/app/public/logo/logo.png',
      alt: 'Nigerian Economic Summit Group'
    },
    {
      name: 'Borno State',
      logo: 'https://bornostate.gov.ng/wp-content/uploads/2023/09/borno-state-logo.png',
      alt: 'Borno State Government'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading organizations to scale digital inclusion and economic empowerment across Nigeria
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-24 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/partners">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold">
              Learn About Our Partnerships
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
