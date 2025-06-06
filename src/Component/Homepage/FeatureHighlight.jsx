import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const FeatureHighlight = ({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className={`group p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-500 transform hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-colors">
          <Icon className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
