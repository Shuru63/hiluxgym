import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useIntersectionObserver from './useIntersectionObserver';

const MembershipCard = ({
  title,
  subtitle,
  features,
  isPopular = false,
  ctaText = "TRY FOR FREE",
  learnMore = true,
  delay = 0,
  bgImage = "",
  planType 
}) => {
  const [cardRef, isVisible] = useIntersectionObserver(0.1);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const getPlanRoute = (type) => {
    const routes = {
      'basic': '/plan/basic-plan',
      'standard': '/plan/standard-plan',
      'premium': '/plan/premium-plan',
      'elite': '/plan/elite-plan' // Fixed typo: 'elits-plan' to 'elite-plan'
    };
    return routes[type?.toLowerCase()] || '/plan/basic-plan';
  };

  const handleLearnMore = () => {
    const route = getPlanRoute(planType);
    navigate(route);
  };

  return (
    <div
      ref={cardRef}
      className={`relative group transform transition-all duration-700 hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {bgImage && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>
      )}

      <div
        className={`relative p-6 lg:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
          isPopular
            ? 'bg-gradient-to-br from-red-600/20 to-orange-600/20 border-red-500/50 shadow-2xl shadow-red-500/20'
            : 'bg-white/10 border-white/20 hover:bg-white/20'
        }`}
      >
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
              MOST POPULAR
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 text-sm lg:text-base">{subtitle}</p>
        </div>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 transform transition-all duration-300 ${
                isHovered ? 'translate-x-2' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-200 text-sm lg:text-base">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button
            onClick={handleLearnMore} // Now CTA button also navigates
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isPopular
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg hover:shadow-2xl hover:shadow-red-500/30'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
          >
            {ctaText}
          </button>
          {learnMore && (
            <button
              onClick={handleLearnMore}
              className="w-full py-3 px-6 rounded-lg font-semibold bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              LEARN MORE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
