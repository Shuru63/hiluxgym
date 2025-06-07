import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Diamond,
  Dumbbell,
  Users,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Award,
  Clock,
  Calendar,
  User,
  Home,
  Activity,
  Brain,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle plan selection and routing
  const handlePlanSelection = (planId) => {
    const routes = {
      'basic': '/plan/basic-plan',
      'standard': '/plan/standard-plan',
      'premium': '/plan/premium-plan',
      'elite': '/plan/elits-plan' // Note: keeping your spelling "elits-plan"
    };
    const route = routes[planId];
    if (route) {
      navigate(route);
    }
  };

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      icon: Dumbbell,
      color: 'from-gray-600 to-gray-800',
      borderColor: 'border-gray-500/30',
      glowColor: 'shadow-gray-500/25',
      price: {
        monthly:1999,
      },
      popular: false,
      features: [
        { text: 'Access to gym equipment', icon: Dumbbell },
        { text: 'Locker facility', icon: Shield },
        { text: '1 personal training session/month', icon: User }
      ],
      badge: null
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      icon: Star,
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-500/30',
      glowColor: 'shadow-blue-500/25',
      price: {
        monthly: 4900,
      },
      popular: false,
      features: [
        { text: 'Everything in Basic', icon: Check },
        { text: 'Group fitness classes', icon: Users },
        { text: 'Diet consultation', icon: Heart },
        { text: '3 personal training sessions/month', icon: User }
      ],
      badge: null
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      icon: Crown,
      color: 'from-red-600 to-red-800',
      borderColor: 'border-red-500/30',
      glowColor: 'shadow-red-500/25',
      price: {
        monthly: 8900,
      },
      popular: true,
      features: [
        { text: 'Everything in Standard', icon: Check },
        { text: 'Unlimited group classes', icon: Users },
        { text: 'Monthly health checkup', icon: Activity },
        { text: 'Dedicated coach support', icon: Target }
      ],
      badge: 'Most Popular'
    },
    {
      id: 'elite',
      name: 'Elite Plan',
      icon: Diamond,
      color: 'from-purple-600 to-purple-800',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/25',
      price: {
        monthly: 14900,
      },
      popular: false,
      features: [
        { text: 'All Premium benefits', icon: Check },
        { text: 'Home workout sessions', icon: Home },
        { text: 'Nutrition tracking', icon: TrendingUp },
        { text: 'Mental wellness sessions', icon: Brain }
      ],
      badge: 'Ultimate'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Members', icon: Users },
    { number: '15+', label: 'Expert Trainers', icon: Award },
    { number: '24/7', label: 'Gym Access', icon: Clock },
    { number: '50+', label: 'Classes Monthly', icon: Calendar }
  ];

  const getDiscountPercentage = (monthly, yearly) => {
    const monthlyTotal = monthly * 12;
    const discount = ((monthlyTotal - yearly) / monthlyTotal) * 100;
    return Math.round(discount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <div className={`relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 mt-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8 group">
            <div className="relative">
              <Dumbbell className="h-12 w-12 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white group-hover:text-red-400 transition-all duration-300 tracking-wider">HILUX</span>
              <span className="text-sm text-red-400 font-medium tracking-widest -mt-1 opacity-80">FITNESS</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Choose Your
            <span className="block text-red-500">Fitness Journey</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your body, elevate your mind, and unlock your potential with our comprehensive fitness programs designed for every level.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={`text-lg font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-700 rounded-full transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <div className={`absolute w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full top-1 transition-all duration-300 ${billingCycle === 'yearly' ? 'right-1' : 'left-1'}`}></div>
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-lg font-medium transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`relative mb-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center group animate-pulse"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-red-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className={`relative px-4 sm:px-6 lg:px-8 pb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isHovered = hoveredPlan === plan.id;
              const discount = getDiscountPercentage(plan.price.monthly, plan.price.yearly);
              
              return (
                <div
                  key={plan.id}
                  className={`relative group transition-all duration-500 hover:scale-105 ${plan.popular ? 'xl:-mt-8' : ''}`}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`bg-gradient-to-r ${plan.color} px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg ${plan.glowColor} border ${plan.borderColor}`}>
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:shadow-2xl ${plan.borderColor} ${isHovered ? plan.glowColor : 'shadow-xl'} ${plan.popular ? 'ring-2 ring-red-500/30' : ''}`}>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Header */}
                    <div className="relative z-10 text-center mb-8">
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <Icon className={`w-12 h-12 transition-all duration-300 group-hover:scale-110 ${plan.id === 'basic' ? 'text-gray-400' : plan.id === 'standard' ? 'text-blue-400' : plan.id === 'premium' ? 'text-red-400' : 'text-purple-400'}`} />
                          <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${plan.id === 'basic' ? 'bg-gray-400/20' : plan.id === 'standard' ? 'bg-blue-400/20' : plan.id === 'premium' ? 'bg-red-400/20' : 'bg-purple-400/20'}`}></div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-3xl sm:text-4xl font-black text-white">
                          ₹{plan.price[billingCycle]}
                        </span>
                        <div className="flex flex-col text-left">
                          <span className="text-gray-400 text-sm">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                          {billingCycle === 'yearly' && (
                            <span className="text-green-400 text-xs font-medium">
                              Save {discount}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="relative z-10 space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-3 group/feature transition-all duration-300 hover:bg-white/5 rounded-lg p-2 -m-2"
                          >
                            <FeatureIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                            <span className="text-gray-300 text-sm sm:text-base group-hover/feature:text-white transition-colors">
                              {feature.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <div className="relative z-10">
                      <button 
                        onClick={() => handlePlanSelection(plan.id)}
                        className={`w-full py-3 sm:py-4 rounded-xl font-bold text-white transition-all duration-300 relative overflow-hidden group/btn ${plan.popular ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-500/25 hover:shadow-red-500/40' : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700'} hover:scale-105 hover:shadow-xl`}
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Get Started</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`relative px-4 sm:px-6 lg:px-8 pb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Transform?
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Join thousands of members who've already started their fitness journey with Hilux Fitness.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-500/30 hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                <Shield className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">No Commitment</h3>
                <p className="text-gray-400 text-sm">Cancel anytime, no questions asked</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-500/30 hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                <Award className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
                <p className="text-gray-400 text-sm">Certified trainers with 10+ years experience</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-500/30 hover:border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                <p className="text-gray-400 text-sm">Join a supportive fitness community</p>
              </div>
            </div>
          </div>

          <Link to ="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 text-lg">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Start Your Journey Today</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;