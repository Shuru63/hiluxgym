import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Clock, Star, Users, Award, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronDown, Zap, Target, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { name: 'Home', icon: null, hasDropdown: false },
    { name: 'Classes', icon: Zap, hasDropdown: true, 
      dropdownItems: ['Cardio', 'Strength Training', 'Yoga', 'CrossFit', 'Boxing'] },
    { name: 'Trainers', icon: Users, hasDropdown: false },
    { name: 'Pricing', icon: Target, hasDropdown: false },
    { name: 'Contact', icon: Phone, hasDropdown: false }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl py-2 shadow-2xl border-b border-red-500/20' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Dumbbell className="h-10 w-10 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white group-hover:text-red-400 transition-all duration-300 tracking-wider">
                HILUX
              </span>
              <span className="text-xs text-red-400 font-medium tracking-widest -mt-1 opacity-80">
                FITNESS
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="relative group">
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => handleItemClick(item.name)}
                    onMouseEnter={() => item.hasDropdown && setShowDropdown(item.name)}
                    onMouseLeave={() => item.hasDropdown && setTimeout(() => setShowDropdown(false), 200)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                      activeItem === item.name
                        ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-700/20 transition-all duration-300"></div>
                    
                    {/* Icon */}
                    {Icon && (
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        activeItem === item.name 
                          ? 'text-white' 
                          : 'text-red-400 group-hover:text-red-300 group-hover:scale-110'
                      }`} />
                    )}
                    
                    {/* Text */}
                    <span className="relative z-10 tracking-wide">
                      {item.name}
                    </span>
                    
                    {/* Dropdown Arrow */}
                    {item.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        showDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && showDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-red-500/20 overflow-hidden animate-fade-in-down"
                      onMouseEnter={() => setShowDropdown(item.name)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <a
                          key={dropItem}
                          href={`#${dropItem.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-300 border-b border-white/5 last:border-b-0"
                          style={{ animationDelay: `${dropIndex * 50}ms` }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-red-500 opacity-50"></div>
                            <span className="text-sm font-medium">{dropItem}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* CTA Button */}
            <div className="ml-4">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105">
                <span className="relative z-10 flex items-center space-x-2">
                  <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Join Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 top-3 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.name}>
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    onClick={() => handleItemClick(item.name)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeItem === item.name
                        ? 'text-white bg-gradient-to-r from-red-600 to-red-700'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    {Icon && <Icon className="w-5 h-5 text-red-400" />}
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-auto" />}
                  </a>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdownItems.map((dropItem) => (
                        <a
                          key={dropItem}
                          href={`#${dropItem.toLowerCase().replace(' ', '-')}`}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Join Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;