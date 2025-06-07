import React, { useState, useEffect } from 'react';
import { 
  Star, 
  
} from 'lucide-react';
const Testnomial = () => {
    const [isVisible, setIsVisible] = useState({});
      const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Software Engineer",
      content: "Karan's coaching transformed my fitness journey. Lost 25kg in 6 months and gained incredible strength!",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Sneha Gupta",
      role: "Marketing Executive",
      content: "Priya's HIIT classes are amazing! The energy and motivation she brings is unmatched.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Vikram Singh",
      role: "Business Owner",
      content: "Rohit helped me achieve my powerlifting goals. His technical knowledge is exceptional.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];
 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      clearInterval(testimonialInterval);
    };
  }, []);
  return (
    <div>
       <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="testimonials"
            data-animate
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-gray-300 text-lg">
              Hear from our members who transformed their lives with our trainers.
            </p>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute inset-0 translate-x-full'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl font-bold text-white mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testnomial
