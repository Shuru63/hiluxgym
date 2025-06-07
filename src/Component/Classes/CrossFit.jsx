import React, { useState, useEffect } from 'react';
import { Zap, Users, Clock, Target, Star, ArrowRight, CheckCircle, Trophy, Timer, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrossFit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeClass, setActiveClass] = useState(0);
  const [activeWod, setActiveWod] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const classes = [
    {
      id: 1,
      name: "CrossFit Foundations",
      level: "Beginner",
      duration: "60 min",
      participants: "8-12",
      instructor: "Emma Davis",
      time: "Mon, Wed, Fri - 8:00 AM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Learn the fundamentals of CrossFit with proper movement patterns and basic workouts.",
      benefits: ["Movement fundamentals", "Safety protocols", "Basic Olympic lifts", "Conditioning basics"]
    },
    {
      id: 2,
      name: "CrossFit WOD",
      level: "Intermediate",
      duration: "60 min",
      participants: "12-16",
      instructor: "Jake Thompson",
      time: "Daily - 6:00 AM, 12:00 PM, 6:00 PM",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
      description: "High-intensity workouts of the day designed to push your limits and build elite fitness.",
      benefits: ["High-intensity training", "Varied workouts", "Competition prep", "Elite conditioning"]
    },
    {
      id: 3,
      name: "CrossFit Competition",
      level: "Advanced",
      duration: "90 min",
      participants: "6-10",
      instructor: "Marcus Johnson",
      time: "Tue, Thu, Sat - 7:00 PM",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      description: "Elite training for competitive CrossFit athletes preparing for competitions.",
      benefits: ["Competition strategies", "Advanced techniques", "Performance optimization", "Mental preparation"]
    }
  ];

  const wods = [
    {
      name: "Fran",
      description: "21-15-9 Thrusters (95/65 lb) and Pull-ups",
      time: "Sub 5:00",
      difficulty: "Advanced",
      focus: "Power & Conditioning"
    },
    {
      name: "Murph",
      description: "1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run",
      time: "Sub 45:00",
      difficulty: "Hero WOD",
      focus: "Endurance & Mental"
    },
    {
      name: "Grace",
      description: "30 Clean and Jerks for time (135/95 lb)",
      time: "Sub 3:00",
      difficulty: "Intermediate",
      focus: "Olympic Lifting"
    },
    {
      name: "Cindy",
      description: "20 min AMRAP: 5 pull-ups, 10 push-ups, 15 squats",
      time: "20+ rounds",
      difficulty: "Beginner",
      focus: "Bodyweight Endurance"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High-Intensity Training",
      description: "Constantly varied, high-intensity functional movements for maximum results"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Train alongside a supportive community that pushes you to achieve your best"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competition Ready",
      description: "Prepare for CrossFit competitions with our advanced training protocols"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Elite Conditioning",
      description: "Develop the work capacity of elite athletes across all energy systems"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-orange-500/30">
            <Zap className="w-5 h-5 mr-2 text-orange-400" />
            <span className="text-orange-400 font-medium">HILUX FITNESS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            CROSS
            <span className="block text-orange-500">FIT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Forge elite fitness through constantly varied, high-intensity functional movement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to ="/contact" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group">
              Start Your WOD
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-1/4 left-16 animate-pulse">
          <div className="w-20 h-20 bg-orange-500/30 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-1/4 right-20 animate-bounce">
          <div className="w-16 h-16 bg-yellow-500/30 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-ping">
          <div className="w-12 h-12 bg-red-500/20 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              The CrossFit Difference
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the methodology that creates the fittest athletes on Earth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors">
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

      {/* Benchmark WODs Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Benchmark WODs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Test yourself against these legendary CrossFit workouts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wods.map((wod, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  activeWod === index ? 'border-orange-500 bg-orange-500/10' : ''
                }`}
                onClick={() => setActiveWod(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {wod.name}
                  </h3>
                  <Timer className="w-6 h-6 text-orange-500" />
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {wod.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Target Time:</span>
                    <span className="text-orange-400 font-semibold">{wod.time}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Level:</span>
                    <span className={`font-semibold ${
                      wod.difficulty === 'Beginner' ? 'text-green-400' :
                      wod.difficulty === 'Intermediate' ? 'text-yellow-400' :
                      wod.difficulty === 'Advanced' ? 'text-red-400' :
                      'text-purple-400'
                    }`}>
                      {wod.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Focus:</span>
                    <span className="text-blue-400 font-semibold">{wod.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our CrossFit Classes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From beginners to elite athletes, we have the perfect class for your level
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
                    ? 'bg-orange-600 text-white shadow-lg'
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
                    <Clock className="w-5 h-5 mr-3 text-orange-400" />
                    <span>{classes[activeClass].duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-orange-400" />
                    <span>{classes[activeClass].participants} people</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Star className="w-5 h-5 mr-3 text-orange-400" />
                    <span>{classes[activeClass].instructor}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Target className="w-5 h-5 mr-3 text-orange-400" />
                    <span>{classes[activeClass].time}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-white">What You'll Learn:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {classes[activeClass].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link to ="/contact" className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Join This Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-gray-300">Certified Coaches</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-300">Classes Per Week</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-gray-300">Member Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-800/20 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Join the Box?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the most effective fitness methodology on the planet. Your first class is free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to ="/contact" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Book Free Trial
              </Link>
              <Link to ="/pricing" className="border-2 border-gray-400 hover:border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                View Pricing
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

export default CrossFit;