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
    <div className="w-full bg-green-800 text-white py-20 border-t-4 border-green-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <span className="text-sm font-semibold text-green-200 uppercase tracking-wider">Stay Connected</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Join Our Community
          </h2>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-green-100">
            Get the latest updates, success stories, and opportunities delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900 border-0 rounded-md h-14 px-6 text-base placeholder:text-gray-500"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-black hover:bg-gray-900 text-white font-semibold px-8 h-14 rounded-md transition-colors whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>

        <p className="text-sm text-green-200 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;