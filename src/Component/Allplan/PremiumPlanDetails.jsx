import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Users, Dumbbell, Heart, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


const PremiumPlanDetails = ({ onBack }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop'
  ];

  const benefits = [
    'Everything in Standard Plan',
    'Unlimited group fitness classes',
    'Monthly comprehensive health checkup',
    'Dedicated personal coach support',
    'Priority booking for all services',
    'Access to VIP lounge and amenities',
    'Complimentary sports massage (monthly)',
    'Advanced body composition analysis',
    'Customized meal planning',
    '24/7 gym access',
    'Guest passes (5 per month)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-black text-white">
     
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={images[activeImage]} 
                alt="Premium Plan Facility"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeImage === index ? 'ring-2 ring-purple-400 scale-105' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Plan Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-purple-400" size={32} />
                <h1 className="text-4xl font-bold">Premium Plan</h1>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  PREMIUM
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-purple-400">₹8999</div>
                <div className="text-gray-400">
                  <div className="line-through">₹10999</div>
                  <div className="text-sm">per month</div>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  33% OFF
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experience luxury fitness with our Premium Plan. Enjoy dedicated coaching, health monitoring, 
                and exclusive amenities designed for serious fitness enthusiasts and professionals.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Star className="text-purple-400" size={24} />
                What's Included
              </h3>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    <Check className="text-green-400 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to ="/contact" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                TRY FOR FREE
              </Link>
              <Link to ="/contact" className="flex-1 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                CONTACT US
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-3">Need Help? Contact Us</h4>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-purple-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-purple-400" />
                  <span>info@hiluxfitness.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPlanDetails