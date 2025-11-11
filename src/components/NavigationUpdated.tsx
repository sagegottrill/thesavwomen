import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavigationUpdated: React.FC = () => {
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-green-900 via-green-800 to-green-900 backdrop-blur-md shadow-xl border-b border-green-950">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between container-xl mx-auto h-[4.5rem]">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-90 transition-all duration-300 group">
              <img
                src="/SAV WOMEN.pdf.png"
                alt="SAV WOMEN Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Navigation items in the center/right */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  isActive(item.href)
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/join" className="ml-4">
              <Button className="bg-white text-green-900 hover:bg-white/90 font-semibold transition-colors shadow-lg">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile navigation - simplified horizontal scroll */}
          <div className="flex lg:hidden items-center overflow-x-auto space-x-1 flex-1 ml-4 scrollbar-hide">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 whitespace-nowrap",
                  isActive(item.href)
                    ? "text-white bg-white/20"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationUpdated;