import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Users, Dumbbell, Heart, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Basic Plan Component
const BasicPlanDetails = ({ onBack }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop'
  ];

  const benefits = [
    'Access to all gym equipment',
    'Locker facility included',
    '1 personal training session per month',
    'Free fitness assessment',
    'Basic workout plan',
    'Monday to Friday access (6 AM - 10 PM)',
    'Weekend access (8 AM - 8 PM)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={images[activeImage]} 
                alt="Basic Plan Facility"
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
                    activeImage === index ? 'ring-2 ring-orange-400 scale-105' : 'opacity-70 hover:opacity-100'
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
                <Dumbbell className="text-orange-400" size={32} />
                <h1 className="text-4xl font-bold">Basic Plan</h1>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-orange-400">₹1999</div>
                <div className="text-gray-400">
                  <div className="line-through">₹2999</div>
                  <div className="text-sm">per month</div>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  33% OFF
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Perfect for beginners and fitness enthusiasts who want access to quality equipment 
                and professional guidance. Start your fitness journey with our most popular entry-level plan.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Star className="text-orange-400" size={24} />
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
              <Link to ="/contact" className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                TRY FOR FREE
              </Link>
              <Link to ="/contact" className="flex-1 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                CONTACT US
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-3">Need Help? Contact Us</h4>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-orange-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-orange-400" />
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
export default BasicPlanDetails