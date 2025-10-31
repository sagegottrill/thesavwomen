import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      src: '/the sav women initAITIVE.jpg',
      alt: 'Women Leadership Workshop',
      caption: 'Empowering Women Leaders'
    },
    {
      src: '/founder.png',
      alt: 'Women Mentorship Session',
      caption: 'Mentorship & Growth'
    },
    {
      src: '/the sav women initAITIVE.jpg',
      alt: 'Community Building Activities',
      caption: 'Building Strong Communities'
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
    <section className="relative min-h-[100dvh] w-full pt-16 flex items-center bg-white text-slate-900">
      <div className="w-full h-full flex items-center py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-sm font-medium text-green-700 uppercase tracking-wider">SAV Women Initiative</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Empowering Women to Echo Brilliance
            </h1>

            <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed text-gray-600">
              Building confidence, leadership, and community for the next generation of powerful women through comprehensive programs and mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/join" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-black hover:bg-gray-900 text-white font-semibold px-8 py-6 rounded-md transition-colors">
                  Join the Movement
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-2 border-black text-black hover:bg-gray-100 font-semibold px-8 py-6 rounded-md transition-colors">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-white text-2xl font-bold">{image.caption}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
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