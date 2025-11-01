import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Sparkles, Heart, Users, Target } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Newsletter signup:', { name, email });
    setName('');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <div className="w-full bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          <span className="inline-block bg-green-900/50 text-green-100 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            Stay Connected
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join Our Community
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-green-50 font-light">
            Get the latest updates, success stories, and opportunities delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/95 backdrop-blur-sm text-gray-900 border-0 rounded-xl h-16 px-6 text-base placeholder:text-gray-500 shadow-xl focus:shadow-2xl transition-all duration-300 focus:scale-[1.02]"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="group bg-black hover:bg-gray-900 text-white font-semibold px-10 h-16 rounded-xl transition-all duration-300 whitespace-nowrap shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {isSubmitting ? (
                'Subscribing...'
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              )}
            </Button>
          </div>
        </form>

        <p className="text-sm text-green-100 backdrop-blur-sm inline-block px-4 py-2 rounded-lg bg-green-900/30">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;