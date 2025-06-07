import React, { useState, useEffect } from 'react';
import { Dumbbell, Users, Clock, Target, Star, ArrowRight, CheckCircle, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const StrengthTraining = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeClass, setActiveClass] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const classes = [
    {
      id: 1,
      name: "Beginner Strength",
      level: "Beginner",
      duration: "45 min",
      participants: "8-12",
      instructor: "Alex Johnson",
      time: "Mon, Wed, Fri - 9:00 AM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Perfect for those new to weightlifting. Learn proper form and build foundational strength.",
      benefits: ["Proper form training", "Basic compound movements", "Progressive overload", "Safety techniques"]
    },
    {
      id: 2,
      name: "Powerlifting Focus",
      level: "Advanced",
      duration: "60 min",
      participants: "6-10",
      instructor: "Sarah Mitchell",
      time: "Tue, Thu, Sat - 6:00 PM",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
      description: "Master the big three: squat, bench press, and deadlift with advanced techniques.",
      benefits: ["Competition prep", "Max strength focus", "Advanced techniques", "1-on-1 coaching"]
    },
    {
      id: 3,
      name: "Functional Strength",
      level: "Intermediate",
      duration: "50 min",
      participants: "10-15",
      instructor: "Mike Rodriguez",
      time: "Mon, Wed, Fri - 7:00 PM",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      description: "Build real-world strength with functional movements and athletic training.",
      benefits: ["Athletic performance", "Injury prevention", "Mobility focus", "Sport-specific training"]
    }
  ];

  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Professional Equipment",
      description: "State-of-the-art strength training equipment from leading manufacturers"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Trainers",
      description: "Certified strength coaches with years of experience and proven results"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Programs",
      description: "Customized training plans tailored to your goals and fitness level"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track your progress with regular assessments and milestone celebrations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-red-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-red-500/30">
            <Dumbbell className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-red-400 font-medium">HILUX FITNESS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            STRENGTH
            <span className="block text-red-500">TRAINING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Build unstoppable strength with our comprehensive training programs designed for all fitness levels
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to ="/contact" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-32 right-16 animate-pulse">
          <div className="w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Choose Our Strength Training?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference with our world-class facilities and expert guidance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Strength Classes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our diverse range of strength training programs
            </p>
          </div>

          {/* Class Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {classes.map((cls, index) => (
              <button
                key={cls.id}
                onClick={() => setActiveClass(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeClass === index
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {cls.name}
              </button>
            ))}
          </div>

          {/* Active Class Display */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={classes[activeClass].image}
                  alt={classes[activeClass].name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    classes[activeClass].level === 'Beginner' ? 'bg-green-500/80' :
                    classes[activeClass].level === 'Intermediate' ? 'bg-yellow-500/80' :
                    'bg-red-500/80'
                  }`}>
                    {classes[activeClass].level}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {classes[activeClass].name}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {classes[activeClass].description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-red-400" />
                    <span>{classes[activeClass].duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-red-400" />
                    <span>{classes[activeClass].participants} people</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Star className="w-5 h-5 mr-3 text-red-400" />
                    <span>{classes[activeClass].instructor}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Target className="w-5 h-5 mr-3 text-red-400" />
                    <span>{classes[activeClass].time}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-white">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {classes[activeClass].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link to ="/contact" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Book This Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-3xl p-12 border border-red-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Build Your Strength?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of members who have transformed their lives through our strength training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to ="/contact" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Link>
              <Link to ="/contact" className="border-2 border-gray-400 hover:border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default StrengthTraining;