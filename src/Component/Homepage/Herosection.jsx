import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Dumbbell, Users, Award, Clock } from 'lucide-react';
import vedio1 from "../../assets/GymFitnessVideo.mp4"
import vedio2 from "../../assets/Visualmodo.mp4"
import { Link } from 'react-router-dom';
const HiluxFitnessHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const stats = [
    { icon: Users, number: '2000+', label: 'Happy Members' },
    { icon: Dumbbell, number: '50+', label: 'Equipment' },
    { icon: Award, number: '15+', label: 'Expert Trainers' },
    { icon: Clock, number: '24/7', label: 'Access' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dc2626;stop-opacity:0.3' /%3E%3Cstop offset='50%25' style='stop-color:%23000000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e40af;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)' /%3E%3C/svg%3E"
        >
          {/* Multiple video sources for better compatibility */}
          <source src={vedio2} type="video/mp4" />
          <source src={vedio1} type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50"></div>
        
        {/* Fallback background if video doesn't load */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-blue-900/30">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
          </div>
        )}
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-18">
            
            {/* Left Content */}
            <div className={`text-white transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-red-600/30 border border-red-500/40 rounded-full mb-6 backdrop-blur-md animate-pulse">
                <Dumbbell className="w-4 h-4 mr-2 text-red-400" />
                <span className="text-sm font-medium text-red-200">Premium Fitness Experience</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent animate-pulse">
                  HILUX
                </span>
                <span className="block text-white mt-2 transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl">
                  FITNESS
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed drop-shadow-lg">
                Transform your body, elevate your mind, and unlock your potential with our state-of-the-art equipment and expert guidance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to ="/contact" className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 flex items-center justify-center backdrop-blur-sm">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link to ="/pricing" className="group px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg font-semibold text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Tour
                </Link>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`text-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                        currentStat === index ? 'ring-2 ring-red-500/60 bg-red-500/20' : ''
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${currentStat === index ? 'text-red-400' : 'text-white'} transition-colors duration-300 drop-shadow-lg`} />
                      <div className={`text-xl font-bold ${currentStat === index ? 'text-red-400' : 'text-white'} transition-colors duration-300 drop-shadow-lg`}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Interactive Elements */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              
              {/* Feature Cards */}
              <div className="space-y-6">
                {[
                  {
                    title: "Personal Training",
                    description: "One-on-one sessions with certified trainers",
                    icon: "🏋️",
                    delay: "delay-100"
                  },
                  {
                    title: "Group Classes",
                    description: "High-energy classes for all fitness levels",
                    icon: "👥",
                    delay: "delay-200"
                  },
                  {
                    title: "Modern Equipment",
                    description: "Latest technology and premium machines",
                    icon: "⚡",
                    delay: "delay-300"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`group p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up ${feature.delay}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-red-300 transition-colors drop-shadow-lg">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pulsing Call-to-Action */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-xl border border-red-500/40 backdrop-blur-md">
                <div className="text-center">
                  <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">Ready to Transform?</h3>
                  <p className="text-gray-200 text-sm mb-4">Join thousands who've achieved their fitness goals</p>
                  <div className="flex justify-center">
                    <div className="relative">
                      <Link to ="/contact" className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Get Started Today
                      </Link>
                      <div className="absolute inset-0 bg-red-600 rounded-lg animate-ping opacity-25"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Video Loading Indicator */}
      {!videoLoaded && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center space-x-2 px-3 py-2 bg-black/50 backdrop-blur-sm rounded-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white text-xs">Loading video...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiluxFitnessHero;