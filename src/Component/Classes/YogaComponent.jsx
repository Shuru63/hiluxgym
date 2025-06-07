import React, { useState, useEffect } from 'react';
import { Flower, Leaf, Sun, Moon, Users, Calendar, Heart, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const YogaComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeClass, setActiveClass] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const yogaClasses = [
    {
      id: 1,
      name: "Hatha Yoga Basics",
      duration: "60 min",
      level: "Beginner",
      participants: "15-20",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      instructor: "Priya Namaste",
      description: "Traditional Hatha yoga focusing on basic postures, breathing techniques, and meditation. Perfect for beginners seeking mind-body connection.",
      benefits: ["Improves flexibility", "Reduces stress", "Better posture", "Mental clarity"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      props: ["Yoga Mats", "Blocks", "Straps", "Bolsters"],
      intensity: "Gentle"
    },
    {
      id: 2,
      name: "Vinyasa Flow",
      duration: "75 min",
      level: "Intermediate",
      participants: "12-16",
      schedule: "Tue, Thu, Sat - 6:30 PM",
      instructor: "Alex Flow",
      description: "Dynamic sequence of poses linked with breath. Experience flowing movements that build strength, flexibility, and mindfulness.",
      benefits: ["Builds strength", "Improves balance", "Increases flexibility", "Stress relief"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      props: ["Yoga Mats", "Blocks", "Water"],
      intensity: "Moderate"
    },
    {
      id: 3,
      name: "Hot Yoga Power",
      duration: "90 min",
      level: "Advanced",
      participants: "10-15",
      schedule: "Mon, Wed, Fri - 7:00 PM",
      instructor: "Maya Heat",
      description: "Challenging yoga practice in a heated room (95-100°F). Detoxify your body while building incredible strength and flexibility.",
      benefits: ["Deep detoxification", "Enhanced flexibility", "Mental resilience", "Weight management"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      props: ["Yoga Mats", "Towels", "Water Bottle"],
      intensity: "High"
    },
    {
      id: 4,
      name: "Restorative Yoga",
      duration: "60 min",
      level: "All Levels",
      participants: "8-12",
      schedule: "Tue, Thu, Sun - 8:00 PM",
      instructor: "Luna Calm",
      description: "Gentle, therapeutic practice using props to support the body in restful poses. Perfect for recovery and deep relaxation.",
      benefits: ["Deep relaxation", "Stress reduction", "Better sleep", "Emotional healing"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      props: ["Bolsters", "Blankets", "Eye Pillows", "Blocks"],
      intensity: "Gentle"
    }
  ];

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Gentle': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-purple-100 text-purple-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-r from-green-600 via-teal-600 to-purple-600 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full animate-pulse">
                <Flower className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
              YOGA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
              Find balance, strength, and inner peace through ancient practices adapted for modern life
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2 animate-fadeInUp animation-delay-500">
                <Leaf className="w-5 h-5" />
                <span>Mind-Body Connection</span>
              </div>
              <div className="flex items-center gap-2 animate-fadeInUp animation-delay-700">
                <Heart className="w-5 h-5" />
                <span>Stress Relief</span>
              </div>
              <div className="flex items-center gap-2 animate-fadeInUp animation-delay-900">
                <Wind className="w-5 h-5" />
                <span>Breath Work</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Classes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yoga Classes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From gentle restorative sessions to challenging hot yoga, discover your perfect practice
          </p>
        </div>

        {/* Class Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {yogaClasses.map((classItem, index) => (
            <button
              key={classItem.id}
              onClick={() => setActiveClass(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeClass === index
                  ? 'bg-gradient-to-r from-green-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
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
                src={yogaClasses[activeClass].image}
                alt={yogaClasses[activeClass].name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{yogaClasses[activeClass].name}</h3>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Sun className="w-4 h-4" />
                    {yogaClasses[activeClass].duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getIntensityColor(yogaClasses[activeClass].intensity)}`}>
                    {yogaClasses[activeClass].intensity}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-700 animation-delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {yogaClasses[activeClass].name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {yogaClasses[activeClass].description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Class Size</h4>
                  </div>
                  <p className="text-gray-600">{yogaClasses[activeClass].participants} people</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Schedule</h4>
                  </div>
                  <p className="text-gray-600">{yogaClasses[activeClass].schedule}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  Key Benefits
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {yogaClasses[activeClass].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-purple-600" />
                  Props Provided
                </h4>
                <div className="flex flex-wrap gap-2">
                  {yogaClasses[activeClass].props.map((prop, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {prop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to ="/contact" className="flex-1 bg-gradient-to-r from-green-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Join Class
                </Link>
                
              </div>
            </div>
          </div>
        </div>

        {/* Yoga Philosophy Section */}
        <div className="mt-20 bg-gradient-to-r from-green-100 via-white to-purple-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Eight Limbs of Yoga</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the complete yoga practice beyond physical postures
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Wind, title: "Pranayama", desc: "Breath control and energy regulation" },
              { icon: Flower, title: "Asanas", desc: "Physical postures for strength and flexibility" },
              { icon: Heart, title: "Meditation", desc: "Mindfulness and inner awareness" },
              { icon: Sun, title: "Philosophy", desc: "Ancient wisdom for modern living" }
            ].map((limb, index) => (
              <div key={index} className={`text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-700 animation-delay-${index * 200} hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full text-white">
                    <limb.icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{limb.title}</h4>
                <p className="text-gray-600 text-sm">{limb.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time-based Classes */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Practice Throughout Your Day</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Sun className="w-8 h-8" />
                <h4 className="text-2xl font-bold">Morning Yoga</h4>
              </div>
              <p className="text-white/90 mb-4">
                Start your day with energizing sun salulations and invigorating flows
              </p>
              <div className="space-y-2 text-sm">
                <div>🌅 6:00 AM - 7:00 AM (Mon, Wed, Fri)</div>
                <div>🧘‍♀️ Focus: Energy & Vitality</div>
                <div>⭐ Level: All Levels Welcome</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Moon className="w-8 h-8" />
                <h4 className="text-2xl font-bold">Evening Yoga</h4>
              </div>
              <p className="text-white/90 mb-4">
                Unwind with gentle stretches and restorative poses for better sleep
              </p>
              <div className="space-y-2 text-sm">
                <div>🌙 8:00 PM - 9:00 PM (Tue, Thu, Sun)</div>
                <div>🧘‍♂️ Focus: Relaxation & Recovery</div>
                <div>⭐ Level: Beginner Friendly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Flower, label: "Weekly Classes", value: "25+", color: "from-green-500 to-teal-500" },
            { icon: Users, label: "Yoga Members", value: "400+", color: "from-purple-500 to-pink-500" },
            { icon: Heart, label: "Certified Instructors", value: "6", color: "from-blue-500 to-indigo-500" },
            { icon: Sun, label: "Years Experience", value: "10+", color: "from-yellow-500 to-orange-500" }
          ].map((stat, index) => (
            <div key={index} className={`text-center transform transition-all duration-700 animation-delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-full text-white`}>
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

export default YogaComponent;