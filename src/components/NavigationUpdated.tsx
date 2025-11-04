import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationUpdated: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'App', href: '/app' },
    { name: 'Impact', href: '/impact' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events', href: '/events' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-green-900 via-green-800 to-green-900 backdrop-blur-md shadow-xl border-b border-green-950">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between container-xl mx-auto h-[4.5rem]">
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                isOpen ? "bg-white/20" : "hover:bg-white/20",
                "p-2"
              )}
            >
              <div className="relative transform transition-all duration-300">
                {isOpen ? (
                  <X className="h-6 w-6 text-white transform rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 text-white transform transition-transform duration-300" />
                )}
              </div>
            </Button>
          </div>

          <div className="flex-grow"></div>

          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-90 transition-all duration-300 group">
              <img
                src="/SAV WOMEN.pdf.png"
                alt="SAV WOMEN Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm top-[4.5rem]",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed left-0 top-[4.5rem] w-full max-w-sm h-[calc(100vh-4.5rem)]",
          "bg-white shadow-xl border-r border-gray-100",
          "transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg",
                  "transition-all duration-300 transform hover:scale-105",
                  isActive(item.href)
                    ? "text-green-800 bg-green-50/80"
                    : "text-gray-700 hover:text-green-800 hover:bg-gray-50/80"
                )}
              >
                {item.name}
                <ChevronDown className="inline-block w-4 h-4 ml-2 transform -rotate-90" />
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link to="/join" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-black hover:bg-gray-900 text-white font-semibold transition-colors">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationUpdated;