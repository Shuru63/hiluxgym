import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Clock, Star, Users, Award, Phone,Home, Mail, MapPin, Facebook, Instagram, Twitter, ChevronDown, Zap, Target, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { name: 'Home', icon: Home, hasDropdown: false, path: '/' },
    {
      name: 'Classes',
      icon: Zap,
      hasDropdown: true,
      path: '/classes',
      dropdownItems: [
        { name: 'Cardio', path: '/classes/cardio' },
        { name: 'Strength Training', path: "/classes/strengthtraning" },
        { name: 'Yoga', path: '/classes/yoga' },
        { name: 'CrossFit', path: '/classes/crossfit' }
      ]
    },
    { name: 'Trainers', icon: Users, hasDropdown: false, path: '/trainers' },
    { name: 'Pricing', icon: Target, hasDropdown: false, path: '/pricing' },

  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowDropdown(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  const handleDropdownToggle = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowDropdown(!showDropdown);
  };

  const handleMobileMenuClose = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  // Get active item based on current path
  const getActiveItem = () => {
    const currentPath = location.pathname;
    
    // Check dropdown items first
    for (const item of navItems) {
      if (item.hasDropdown && item.dropdownItems) {
        for (const dropItem of item.dropdownItems) {
          if (currentPath === dropItem.path) {
            return dropItem.name;
          }
        }
      }
      if (currentPath === item.path) {
        return item.name;
      }
    }
    return 'Home';
  };

  const activeItem = getActiveItem();

  // Check if a nav item is active
  const isItemActive = (item) => {
    const currentPath = location.pathname;
    if (currentPath === item.path) return true;
    
    if (item.hasDropdown && item.dropdownItems) {
      return item.dropdownItems.some(dropItem => currentPath === dropItem.path);
    }
    
    return false;
  };

  // Check if a dropdown item is active
  const isDropdownItemActive = (dropItem) => {
    return location.pathname === dropItem.path;
  };

  return (
    <div>
      <nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl py-2 shadow-2xl border-b border-red-500/20' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <Dumbbell className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 group-hover:text-red-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-white group-hover:text-red-400 transition-all duration-300 tracking-wider">HILUX</span>
                <span className="text-xs text-red-400 font-medium tracking-widest -mt-1 opacity-80">FITNESS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = isItemActive(item);
                
                return (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        onClick={handleDropdownToggle}
                        className={`flex items-center space-x-2 px-3 xl:px-4 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${isActive ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-700/20 transition-all duration-300"></div>
                        {Icon && <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-white' : 'text-red-400 group-hover:text-red-300 group-hover:scale-110'}`} />}
                        <span className="relative z-10 tracking-wide text-sm xl:text-base">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></div>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-2 px-3 xl:px-4 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${isActive ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-500/25' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-700/20 transition-all duration-300"></div>
                        {Icon && <Icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-white' : 'text-red-400 group-hover:text-red-300 group-hover:scale-110'}`} />}
                        <span className="relative z-10 tracking-wide text-sm xl:text-base">{item.name}</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></div>
                      </Link>
                    )}

                    {/* Desktop Dropdown Menu */}
                    {item.hasDropdown && showDropdown && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-red-500/20 overflow-hidden z-50"
                        style={{ animation: 'fadeInDown 0.3s ease-out' }}
                      >
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            onClick={() => setShowDropdown(false)}
                            className={`block w-full text-left px-4 py-3 transition-all duration-300 border-b border-white/5 last:border-b-0 ${isDropdownItemActive(dropItem) ? 'text-white bg-red-600/30' : 'text-gray-300 hover:text-white hover:bg-red-600/20'}`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full ${isDropdownItemActive(dropItem) ? 'bg-red-400' : 'bg-red-500 opacity-50'}`}></div>
                              <span className="text-sm font-medium">{dropItem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Desktop CTA */}
              <div className="ml-4">
                <Link 
                  to="/contact"
                  className="group relative px-4 xl:px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 inline-flex items-center space-x-2"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm xl:text-base">Contact us</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10  backdrop-blur-sm  flex items-center justify-center group hover:bg-red-600/20  transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 top-3 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
         <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md border-t border-white/10 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = isItemActive(item);
                
                return (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <button
                        onClick={handleDropdownToggle}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-white bg-gradient-to-r from-red-600 to-red-700' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                      >
                        <div className="flex items-center space-x-3">
                          {Icon && <Icon className="w-5 h-5 text-red-400" />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleMobileMenuClose}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive ? 'text-white bg-gradient-to-r from-red-600 to-red-700' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                      >
                        <div className="flex items-center space-x-3">
                          {Icon && <Icon className="w-5 h-5 text-red-400" />}
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    )}

                    {/* Mobile Dropdown */}
                    {item.hasDropdown && showDropdown && (
                      <div className="ml-8 mt-2 space-y-1 overflow-hidden" style={{ animation: 'slideDown 0.3s ease-out' }}>
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            onClick={handleMobileMenuClose}
                            className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-all duration-300 ${isDropdownItemActive(dropItem) ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${isDropdownItemActive(dropItem) ? 'bg-red-400' : 'bg-red-500 opacity-50'}`}></div>
                              <span>{dropItem.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Link 
                  to="/join"
                  onClick={handleMobileMenuClose}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:from-red-500 hover:to-red-600"
                >
                  <Heart className="w-5 h-5" />
                  <span>Join Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;