import React from 'react';
import { Download, Smartphone } from 'lucide-react';
import useIntersectionObserver from './useIntersectionObserver';
import { Link } from 'react-router-dom';

const AppDownload = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 backdrop-blur-md transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-orange-500/20" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Download the most loved fitness app
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Start your fitness journey with us. Join the cult!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </button>
              <Link to ="/contact" className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                <Smartphone className="w-5 h-5" />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-24 h-24 text-white/80 animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
