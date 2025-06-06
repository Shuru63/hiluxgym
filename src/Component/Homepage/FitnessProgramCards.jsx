import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Scale, Heart, Dumbbell, Shield } from 'lucide-react';
import AppDownload from './AppDownload';
// Custom hook for intersectiion observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

// Individual Program Card Component
const ProgramCard = ({ 
  title, 
  description, 
  bgColor, 
  textColor = "text-white",
  image,
  icon: Icon,
  animationDirection = "left",
  delay = 0,
  featured = false 
}) => {
  const [cardRef, isVisible] = useIntersectionObserver(0.1);
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationClass = () => {
    if (!isVisible) {
      return animationDirection === "left" ? "-translate-x-full opacity-0" : "translate-x-full opacity-0";
    }
    return "translate-x-0 opacity-100";
  };

  return (
    <div
      ref={cardRef}
      className={`relative group cursor-pointer transform transition-all duration-700 ease-out hover:scale-105 ${getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className={`relative h-80 lg:h-96 rounded-2xl overflow-hidden ${bgColor} shadow-2xl`}>
        
        {/* Background Image/Pattern */}
        {image && (
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className={`text-2xl lg:text-3xl font-bold ${textColor} mb-3 transform transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                {title}
              </h3>
              <p className={`text-base lg:text-lg ${textColor.includes('white') ? 'text-gray-200' : 'text-gray-600'} leading-relaxed transform transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                {description}
              </p>
            </div>
            
            {/* Arrow Icon */}
            <div className={`p-2 rounded-full bg-white/20 backdrop-blur-sm transform transition-all duration-300 ${isHovered ? 'rotate-45 scale-110' : ''}`}>
              <ChevronRight className={`w-6 h-6 ${textColor}`} />
            </div>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                FEATURED
              </div>
            </div>
          )}

          {/* Bottom Icon */}
          <div className="flex justify-center">
            <div className={`p-4 rounded-full bg-white/10 backdrop-blur-sm transform transition-all duration-500 ${isHovered ? 'scale-125 rotate-12' : ''}`}>
              <Icon className={`w-8 h-8 ${textColor}`} />
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Animated Border */}
        <div className={`absolute inset-0 rounded-2xl border-2 border-white/20 transition-all duration-300 ${isHovered ? 'border-white/40 shadow-lg' : ''}`} />
      </div>

      {/* Floating Elements */}
      <div className={`absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full transition-all duration-500 ${isHovered ? 'scale-150 animate-pulse' : ''}`} />
      <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-white/20 rounded-full transition-all duration-700 ${isHovered ? 'scale-125 animate-bounce' : ''}`} />
    </div>
  );
};

// Main Component
const FitnessProgramCards = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver(0.05);

  const programData = [
    {
      title: "cult transform",
      description: "Get coached to lose weight for good",
      bgColor: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format",
      icon: Scale,
      animationDirection: "left",
      delay: 100
    },
    {
      title: "The .fit way",
      description: "Making health easy, one day at a time",
      bgColor: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&auto=format",
      icon: Heart,
      animationDirection: "right",
      delay: 200,
      featured: true
    },
    {
      title: "Workout Gear",
      description: "Everything you need for your workout",
      bgColor: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format",
      icon: Dumbbell,
      animationDirection: "left",
      delay: 300
    },
    {
      title: "Sugar.fit",
      description: "Reverse Type 2 Diabetes and Prediabetes",
      bgColor: "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=400&fit=crop&auto=format",
      icon: Shield,
      animationDirection: "right",
      delay: 400
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 lg:py-24 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-500/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform
            </span>
            <span className="block text-white mt-2">Your Lifestyle</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive wellness programs designed for your success
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {programData.map((program, index) => (
            <div key={index} className="w-full">
              <ProgramCard {...program} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to start your transformation journey?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-teal-500/25">
                Explore Programs
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* Download App */}
          <AppDownload />

          {/* Footer CTA */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Join the hilux family</h2>
            <p className="text-gray-300 text-lg mb-8">
              At hilux fitness, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.
            </p>
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              #BeBetterEveryDay
            </div>
          </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default FitnessProgramCards;