import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      src: '/hero-1.jpg',
      alt: 'Group of empowered Nigerian women in community',
      caption: 'Building Strong Communities'
    },
    {
      src: '/hero-2.jpg',
      alt: 'Nigerian women collaborating on digital skills',
      caption: 'Skills & Professional Development'
    },
    {
      src: '/hero-3.jpg',
      alt: 'Nigerian women in traditional attire celebrating unity',
      caption: 'Celebrating Our Heritage'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  return (
    <section className="relative min-h-[100dvh] w-full pt-16 flex items-center bg-gradient-to-b from-white via-gray-50 to-white text-slate-900">
      <div className="w-full h-full flex items-center py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <span className="inline-block bg-green-50 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                The SAV Women
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Empowering Women to Echo Brilliance
            </h1>

            <p className="text-xl md:text-2xl max-w-xl leading-relaxed text-gray-700 font-light">
              Building confidence, leadership, and community for the next generation of powerful women through comprehensive programs and mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link to="/join" className="w-full sm:w-auto group">
                <Button size="lg" className="w-full bg-black hover:bg-gray-900 text-white font-semibold px-10 py-7 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                  <span className="flex items-center gap-2">
                    Join the Movement
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto group">
                <Button size="lg" variant="outline" className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-10 py-7 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Carousel Images */}
                <div className="relative h-[450px] lg:h-[550px]">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-10 left-10 right-10">
                        <h3 className="text-white text-3xl font-bold drop-shadow-lg">{image.caption}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white w-10' : 'bg-white/60 w-2 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;