import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ChevronUp, Heart, Zap, Users, Target, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Classes', path: '#classes', subItems: ['Cardio', 'Strength Training', 'Yoga', 'CrossFit'] },
    { name: 'Trainers', path: '#trainers' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'Contact', path: '#contact' }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "A-797, 3rd Floor, GD Colony, Mayur Vihar Phase-3, Delhi-110096",
      link: "https://maps.google.com/?q=A-797,3rd Floor,GD Colony,Mayur Vihar Phase-3,Delhi-110096"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(+91) 9301090000",
      link: "tel:+919301090000"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "karan.hiluxfitness@gmail.com",
      link: "mailto:karan.hiluxfitness@gmail.com"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-sky-400" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-400" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-500" }
  ];

  return (
    <>
      <footer
        id="footer"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Three Main Sections */}
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <div className={`space-y-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-all duration-300">
                  About HILUX
                </h3>
              </div>

              <div className="space-y-6 pl-2">
                {/* Brand Logo/Name */}
                <div className="group">
                  <h4 className="text-3xl font-black bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-500 transition-all duration-300">
                    HILUX FITNESS
                  </h4>
                  <div className="h-1 w-0 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-full transition-all duration-500 mt-1"></div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300 text-sm">
                  Delhi's premier CrossFit training facility dedicated to transforming lives through high-intensity functional fitness, expert coaching, and a supportive community atmosphere.
                </p>

                {/* Social Links */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-200">Follow Our Journey</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          className={`text-gray-400 transform hover:scale-125 transition-all duration-300 group`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25">
                            <IconComponent className="w-5 h-5 group-hover:text-white" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Links */}

              </div>
            </div>
            {/* Section 1: Contact Information */}


            {/* Section 2: Navigation Links */}
            <div className={`space-y-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-all duration-300">
                  Quick Links
                </h3>
              </div>

              <div className="space-y-4 pl-2">
                {navItems.map((item, index) => (
                  <div key={item.name} className="space-y-2">
                    <a
                      href={item.path}
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:translate-x-2 cursor-pointer group text-lg font-medium"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-red-400 transition-colors duration-300"></div>
                      <span>{item.name}</span>
                    </a>

                  </div>
                ))}
              </div>
            </div>

            <div className={`space-y-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-all duration-300">
                  Contact Info
                </h3>
              </div>

              <div className="space-y-6 pl-2">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.title} className="group cursor-pointer">
                      <a href={info.link} className="block hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                              {info.title}
                            </h4>
                            <p className="text-gray-300 group-hover:text-red-400 transition-colors duration-300 text-sm leading-relaxed">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-gray-200 mb-3">Legal</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              {['Privacy Policy', 'Terms of Service', 'Membership Agreement', 'Cancellation Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-1 cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-4 bg-gray-800 rounded-full">
                <Heart className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
            <p className="text-gray-400 text-sm">
              © 2025 HILUX FITNESS CrossFit. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-400 animate-pulse" />{' '}
              for your fitness journey. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              "Forge Elite Fitness" - Transform Your Body, Transform Your Life
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/25 transform hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </footer>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;