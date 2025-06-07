import React, { useState, useEffect } from 'react';
import { Heart, Clock, Zap, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardioComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeClass, setActiveClass] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardioClasses = [
    {
      id: 1,
      name: "HIIT Cardio Blast",
      duration: "45 min",
      intensity: "High",
      participants: "12-15",
      schedule: "Mon, Wed, Fri - 6:00 AM",
      instructor: "Sarah Johnson",
      description: "High-Intensity Interval Training that combines bursts of intense activity with periods of rest. Perfect for burning calories and improving cardiovascular fitness.",
      benefits: ["Burns 400-600 calories", "Improves heart health", "Boosts metabolism", "Time efficient"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Spin Cycle Pro",
      duration: "50 min",
      intensity: "Medium-High",
      participants: "15-20",
      schedule: "Tue, Thu, Sat - 7:00 AM",
      instructor: "Mike Rodriguez",
      description: "Indoor cycling class with energetic music and motivating instruction. Ride through virtual terrains and challenge your endurance.",
      benefits: ["Low impact on joints", "Builds leg strength", "Improves endurance", "Great music motivation"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Aqua Cardio",
      duration: "40 min",
      intensity: "Medium",
      participants: "8-12",
      schedule: "Mon, Wed, Fri - 5:00 PM",
      instructor: "Lisa Chen",
      description: "Water-based cardio workout that's easy on joints while providing excellent resistance training. Perfect for all fitness levels.",
      benefits: ["Joint-friendly", "Full body workout", "Cooling effect", "Great for recovery"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Dance Cardio Fusion",
      duration: "55 min",
      intensity: "Medium",
      participants: "15-25",
      schedule: "Tue, Thu, Sun - 6:30 PM",
      instructor: "Emma Thompson",
      description: "Fun, high-energy dance workout combining various dance styles. Get your heart pumping while learning new moves.",
      benefits: ["Improves coordination", "Fun and engaging", "Stress relief", "Social atmosphere"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-red-700 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full animate-pulse">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
              CARDIO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
              Elevate your heart rate, burn calories, and boost your cardiovascular health with our dynamic cardio classes
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2 animate-fadeInUp animation-delay-500">
                <Zap className="w-5 h-5" />
                <span>High Energy</span>
              </div>
              <div className="flex items-center gap-2 animate-fadeInUp animation-delay-700">
                <Users className="w-5 h-5" />
                <span>Group Classes</span>
              </div>
              <div className="flex items-center gap-2 animate-fadeInUp animation-delay-900">
                <Clock className="w-5 h-5" />
                <span>40-55 Minutes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Classes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Cardio Classes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our variety of cardio classes designed to challenge and motivate you
          </p>
        </div>

        {/* Class Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cardioClasses.map((classItem, index) => (
            <button
              key={classItem.id}
              onClick={() => setActiveClass(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeClass === index
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-300'
              }`}
            >
              {classItem.name}
            </button>
          ))}
        </div>

        {/* Active Class Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={cardioClasses[activeClass].image}
                alt={cardioClasses[activeClass].name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{cardioClasses[activeClass].name}</h3>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {cardioClasses[activeClass].duration}
                  </span>
                  <span className="px-3 py-1 bg-red-600 rounded-full text-sm">
                    {cardioClasses[activeClass].intensity}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 animation-delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {cardioClasses[activeClass].name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {cardioClasses[activeClass].description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-gray-900">Class Size</h4>
                  </div>
                  <p className="text-gray-600">{cardioClasses[activeClass].participants} people</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-pink-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-pink-600" />
                    <h4 className="font-semibold text-gray-900">Schedule</h4>
                  </div>
                  <p className="text-gray-600">{cardioClasses[activeClass].schedule}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  Key Benefits
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {cardioClasses[activeClass].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to ="/contact" className="flex-1 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Book This Class
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Heart, label: "Classes/Week", value: "28+" },
            { icon: Users, label: "Members", value: "500+" },
            { icon: Zap, label: "Avg Calories", value: "450" },
            { icon: Clock, label: "Class Duration", value: "45min" }
          ].map((stat, index) => (
            <div key={index} className={`text-center transform transition-all duration-700 animation-delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white">
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
      `}</style>
    </div>
  );
};

export default CardioComponent;