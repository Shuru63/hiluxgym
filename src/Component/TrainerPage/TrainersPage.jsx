import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Award, 
  Clock, 
  Users, 
  Heart, 
  Target, 
  Zap, 
  Trophy,
  CheckCircle,
  ArrowRight,
  Play,
  Dumbbell,
  Shield,
  TrendingUp,
  MapPin,
  Calendar,
  Medal
} from 'lucide-react';
import Testnomial from './Testnomial';
import { Link } from 'react-router-dom';

const TrainersPage = () => {
  const [activeTrainer, setActiveTrainer] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      clearInterval(testimonialInterval);
    };
  }, []);

  const trainers = [
    {
      id: 1,
      name: "Karan Singh",
      title: "Head CrossFit Coach",
      image: "/api/placeholder/300/400",
      rating: 4.9,
      experience: "8+ Years",
      specialization: ["CrossFit", "Strength Training", "Olympic Lifting"],
      certifications: ["CrossFit Level-3", "NSCA-CSCS", "Olympic Weightlifting"],
      description: "Karan is the visionary founder of HiluxFitness with over 8 years of elite CrossFit coaching experience. His passion for functional fitness and community building has transformed hundreds of lives.",
      achievements: ["Regional CrossFit Competitor", "500+ Athletes Trained", "Nutrition Specialist"],
      clients: 150,
      workoutStyle: "High-intensity functional movements with perfect form focus"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Senior Fitness Coach",
      image: "/api/placeholder/300/400",
      rating: 4.8,
      experience: "6+ Years",
      specialization: ["HIIT", "Cardio Training", "Weight Loss"],
      certifications: ["ACSM Certified", "TRX Instructor", "Nutrition Coach"],
      description: "Priya specializes in high-intensity interval training and has helped over 200 members achieve their weight loss goals through her motivational coaching style.",
      achievements: ["HIIT Specialist", "Weight Loss Expert", "Women's Fitness Advocate"],
      clients: 120,
      workoutStyle: "Dynamic HIIT sessions combined with strength building"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      title: "Strength & Conditioning Coach",
      image: "/api/placeholder/300/400",
      rating: 4.9,
      experience: "7+ Years",
      specialization: ["Powerlifting", "Bodybuilding", "Sports Performance"],
      certifications: ["NSCA-CSCS", "Powerlifting Coach", "Sports Nutrition"],
      description: "Rohit brings elite-level strength training expertise, having coached national-level athletes and bodybuilding competitors to championship victories.",
      achievements: ["National Level Powerlifter", "Sports Performance Expert", "Bodybuilding Judge"],
      clients: 100,
      workoutStyle: "Progressive overload with scientific approach to strength gains"
    },
    {
      id: 4,
      name: "Anjali Patel",
      title: "Yoga & Mobility Specialist",
      image: "/api/placeholder/300/400",
      rating: 4.7,
      experience: "5+ Years",
      specialization: ["Yoga", "Flexibility Training", "Injury Prevention"],
      certifications: ["RYT-500", "Corrective Exercise Specialist", "Meditation Instructor"],
      description: "Anjali combines traditional yoga wisdom with modern mobility techniques to enhance performance and prevent injuries for all our CrossFit athletes.",
      achievements: ["Certified Yoga Therapist", "Injury Prevention Specialist", "Mindfulness Coach"],
      clients: 80,
      workoutStyle: "Holistic approach combining flexibility, strength, and mindfulness"
    }
  ];

  const gymAdvantages = [
    {
      icon: Trophy,
      title: "Award-Winning Facility",
      description: "Delhi's premier CrossFit box with state-of-the-art equipment and certified coaching staff.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Join a supportive fitness family that motivates and celebrates every achievement together.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Personalized Training",
      description: "Customized workout plans tailored to your fitness level, goals, and personal preferences.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Professional spotting, proper form coaching, and injury prevention protocols in every session.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of 95% member satisfaction and measurable fitness improvements within 3 months.",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "Latest Rogue fitness equipment, Olympic barbells, and specialized CrossFit gear.",
      color: "from-orange-400 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Software Engineer",
      content: "Karan's coaching transformed my fitness journey. Lost 25kg in 6 months and gained incredible strength!",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Sneha Gupta",
      role: "Marketing Executive",
      content: "Priya's HIIT classes are amazing! The energy and motivation she brings is unmatched.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Vikram Singh",
      role: "Business Owner",
      content: "Rohit helped me achieve my powerlifting goals. His technical knowledge is exceptional.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div 
          className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          id="hero"
          data-animate
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-purple-500/30">
            <Dumbbell className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Meet Our Expert Team</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            Elite Trainers
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            World-class certified trainers dedicated to transforming your fitness journey with personalized coaching and unwavering support.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="w-4 h-4 text-blue-400" />
              <span>450+ Happy Members</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span>Award Winning Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.trainersGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="trainersGrid"
            data-animate
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Your Champions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our certified trainers bring decades of combined experience and proven track records in transforming lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible.trainersGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setActiveTrainer(activeTrainer === trainer.id ? null : trainer.id)}
              >
                {/* Trainer Image */}
                <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {trainer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {trainer.name}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium">{trainer.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Experience</p>
                      <p className="text-white font-semibold">{trainer.experience}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {trainer.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <p className="text-white font-semibold">{trainer.clients}</p>
                      <p className="text-gray-400 text-xs">Clients</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <Medal className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <p className="text-white font-semibold">{trainer.certifications.length}</p>
                      <p className="text-gray-400 text-xs">Certifications</p>
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-2">Specializations</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialization.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-2 py-1 rounded-full text-xs border border-purple-500/30"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                    <span className="text-sm font-medium">
                      {activeTrainer === trainer.id ? 'Show Less' : 'Learn More'}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      activeTrainer === trainer.id ? 'rotate-90' : ''
                    }`} />
                  </button>

                  {/* Expanded Content */}
                  {activeTrainer === trainer.id && (
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Certifications</h4>
                        <ul className="space-y-1">
                          {trainer.certifications.map((cert, certIndex) => (
                            <li key={certIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {trainer.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <Trophy className="w-4 h-4 text-yellow-400" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Training Style</h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {trainer.workoutStyle}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Advantages */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.advantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="advantages"
            data-animate
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose HiluxFitness?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Experience the difference with our world-class facilities, expert coaching, and proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gymAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 ${
                    isVisible.advantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
   <Testnomial/>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="cta"
            data-animate
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Life?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of success stories and start your fitness journey with Delhi's best trainers today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </Link>
              
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Success Stories</span>
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">450+</div>
                <div className="text-gray-400">Happy Members</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TrainersPage;