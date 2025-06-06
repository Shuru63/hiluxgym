import React, { useState } from 'react';
import MembershipCard from './MembershipCard';
import FeatureHighlight from './FeatureHighlight';
import AppDownload from './AppDownload';
import useIntersectionObserver from './useIntersectionObserver';

import {
  Dumbbell, Heart, Target, Shield, Zap
} from 'lucide-react';

const HiluxMembershipSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver(0.1);

  const membershipPlans = [
  {
    title: "Basic Plan",
    price: "₹499/month",
    features: [
      "Access to gym equipment",
      "Locker facility",
      "1 personal training session/month",
    ],
    highlight: "Ideal for beginners",
  },
  {
    title: "Standard Plan",
    price: "₹999/month",
    features: [
      "Everything in Basic",
      "Group fitness classes",
      "Diet consultation",
      "3 personal training sessions/month",
    ],
    highlight: "Popular choice",
  },
  {
    title: "Premium Plan",
    price: "₹1499/month",
    features: [
      "Everything in Standard",
      "Unlimited group classes",
      "Monthly health checkup",
      "Dedicated coach support",
    ],
    highlight: "Best results guaranteed",
  },
  {
    title: "Elite Plan",
    price: "₹2499/month",
    features: [
      "All Premium benefits",
      "Home workout sessions",
      "Nutrition tracking",
      "Mental wellness sessions",
    ],
    highlight: "Complete wellness package",
  },
];

  const specialPrograms = [
    { icon: Target, title: "hilux transform", description: "Get coached to lose weight for good" },
    { icon: Heart, title: "The .fit way", description: "Making health easy, one day at a time" },
    { icon: Dumbbell, title: "Workout Gear", description: "Everything you need for your workout" },
    { icon: Shield, title: "Sugar.fit", description: "Reverse Type 2 Diabetes and Prediabetes" },
    { icon: Zap, title: "Wellness Hub", description: "One place for all your well-being needs" }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background and overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transform transition-all duration-1000 ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">hilux course</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              One membership for all your fitness needs. Fun, trainer led group classes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {membershipPlans.map((plan, index) => (
              <MembershipCard key={index} {...plan} delay={index * 200} />
            ))}
          </div>

          {/* Special Programs */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Special Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialPrograms.map((program, index) => (
                <FeatureHighlight key={index} {...program} delay={index * 150} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiluxMembershipSection;
