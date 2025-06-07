import React, { useState } from 'react';
import { ArrowLeft, Check, Star, Users, Dumbbell, Heart, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElitePlanDetails = ({ onBack }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop'
  ];

  const benefits = [
    'All Premium Plan benefits included',
    'Home workout sessions (4 per month)',
    'Advanced nutrition tracking app',
    'Mental wellness & meditation sessions',
    'Personal chef consultation',
    'Recovery therapy sessions',
    'Priority access to new equipment',
    'Exclusive elite member events',
    'Concierge fitness services',
    '24/7 personal trainer on-call',
    'Unlimited guest passes',
    'Free fitness apparel quarterly'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700 text-white">
     

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={images[activeImage]} 
                alt="Elite Plan Facility"
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
                    activeImage === index ? 'ring-2 ring-yellow-400 scale-105' : 'opacity-70 hover:opacity-100'
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
                <Calendar className="text-yellow-400" size={32} />
                <h1 className="text-4xl font-bold">Elite Plan</h1>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-black">
                  ELITE
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-yellow-400">₹14999</div>
                <div className="text-gray-300">
                  <div className="line-through">₹15999</div>
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  33% OFF
                </div>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                The ultimate fitness experience for those who demand excellence. Enjoy personalized service, 
                cutting-edge technology, and comprehensive wellness support both in-gym and at home.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Star className="text-yellow-400" size={24} />
                What's Included
              </h3>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg backdrop-blur-sm">
                    <Check className="text-green-400 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to ="/contact" className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                TRY FOR FREE
              </Link>
              <Link to ="/contact" className="flex-1 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                CONTACT US
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-3">Need Help? Contact Us</h4>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-yellow-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-yellow-400" />
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

export default ElitePlanDetails;