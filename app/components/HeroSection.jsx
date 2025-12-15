"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin, Phone, Mail, Award, Users, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "./hero.jpg",
      title: "Excellence in Education",
      subtitle: "Disney Victors Junior School",
      description: "Nurturing young minds for a brighter future",
      ctaText: "Admissions Open",
      color: "from-blue-900/70 to-purple-900/60"
    },
    {
      id: 2,
      image: "./student3.jpg",
      title: "Modern Learning Environment",
      subtitle: "State-of-the-Art Facilities",
      description: "Interactive classrooms and well-equipped laboratories",
      ctaText: "View Facilities",
      color: "from-green-900/70 to-blue-900/60"
    },
    {
      id: 3,
      image: "./student1.jpg",
      title: "Holistic Development",
      subtitle: "Beyond Academics",
      description: "Sports, arts, and character-building programs",
      ctaText: "Our Programs",
      color: "from-purple-900/70 to-pink-900/60"
    },
    {
      id: 4,
      image: "./hero2.jpg",
      title: "Experienced Faculty",
      subtitle: "Dedicated Educators",
      description: "Passionate teachers guiding students to success",
      ctaText: "Meet Our Staff",
      color: "from-red-900/70 to-orange-900/60"
    }
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Carousel */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3">
                      Premier Education
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                      Disney Victors
                      <span className="block text-yellow-300">Junior School</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 text-gray-100 font-light">
                      {slide.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                      {slide.ctaText}
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold rounded-lg transition-all flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Watch Video Tour
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-yellow-500 w-8'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>

    
  );
};

export default HeroSection;