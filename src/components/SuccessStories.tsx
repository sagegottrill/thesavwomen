import React from 'react';
import { Users } from 'lucide-react';

const SuccessStories: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
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
