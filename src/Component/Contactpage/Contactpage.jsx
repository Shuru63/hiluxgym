import React, { useState, useEffect, useRef } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    CheckCircle,
    AlertCircle,
    User,
    MessageSquare,
    Calendar,
    Users,
    Target,
    Award,
    Heart,
    Navigation,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Dumbbell,
    Zap
} from 'lucide-react';

// EmailJS configuration (you'll need to replace these with your actual values)
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isVisible, setIsVisible] = useState({});
    const [activeTab, setActiveTab] = useState('contact');
    const mapRef = useRef(null);
const [isVisible20, setIsVisible20] = useState(false);

  useEffect(() => {
    setIsVisible20(true);
  }, []);

  const openDirections = () => {
    const address = "A-797, 3rd Floor, GD Colony, Mayur Vihar Phase-3, Delhi-110096";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };
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

        const sections = document.querySelectorAll('[data-animate]');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    // Form validation
    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^[+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
            errors.phone = 'Please enter a valid phone number';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS integration (you'll need to install emailjs-com: npm install emailjs-com)
            // For now, we'll simulate the email sending
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

            // Uncomment and configure when you have EmailJS set up:
            /*
            const result = await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
                inquiry_type: formData.inquiryType,
                to_email: 'karan.hiluxfitness@gmail.com'
              },
              EMAILJS_PUBLIC_KEY
            );
            */

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                inquiryType: 'general'
            });

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Our Gym",
            details: ["A-797, 3rd Floor, GD Colony,", "Mayur Vihar Phase-3", "Delhi-110096"],
            action: "Get Directions",
            link: "https://maps.google.com/?q=A-797,3rd Floor,GD Colony,Mayur Vihar Phase-3,Delhi-110096",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Phone,
            title: "Call Us Now",
            details: ["(+91) 9301090000", "Available 24/7", "Emergency Support"],
            action: "Call Now",
            link: "tel:+919301090000",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["karan.hiluxfitness@gmail.com", "Quick Response", "Professional Support"],
            action: "Send Email",
            link: "mailto:karan.hiluxfitness@gmail.com",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const businessHours = [
        { day: "Monday - Friday", hours: "5:00 AM - 11:00 PM" },
        { day: "Saturday", hours: "6:00 AM - 10:00 PM" },
        { day: "Sunday", hours: "7:00 AM - 9:00 PM" }
    ];

    const socialLinks = [
        { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-400" },
        { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-400" },
        { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-sky-400" },
        { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-500" }
    ];

    const inquiryTypes = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'membership', label: 'Membership Information' },
        { value: 'personal-training', label: 'Personal Training' },
        { value: 'group-classes', label: 'Group Classes' },
        { value: 'corporate', label: 'Corporate Packages' },
        { value: 'nutrition', label: 'Nutrition Consultation' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
                <div
                    className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    id="hero"
                    data-animate
                >
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-purple-500/30">
                        <Heart className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Let's Connect</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                        Get In Touch
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your fitness journey? We're here to help you every step of the way. Let's start your success story today.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                            <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-300">Award Winning Facility</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-300">Expert Trainers</p>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-300">Personalized Programs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="px-4 mb-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            { id: 'contact', label: 'Contact Form', icon: MessageSquare },
                            { id: 'location', label: 'Find Us', icon: MapPin },
                        ].map((tab) => {
                            const IconComponent = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5" />
                                    <span className="font-medium">{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-4 pb-20">
                <div className="max-w-6xl mx-auto">
                    {activeTab === 'contact' && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div
                                className={`transition-all duration-1000 ${isVisible.contactForm ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                    }`}
                                id="contactForm"
                                data-animate
                            >
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            Send Us a Message
                                        </h2>
                                        <p className="text-gray-300">
                                            Fill out the form below and we'll get back to you within 24 hours.
                                        </p>
                                    </div>

                                    {submitStatus === 'success' && (
                                        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3 animate-fadeIn">
                                            <CheckCircle className="w-5 h-5 text-green-400" />
                                            <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3 animate-fadeIn">
                                            <AlertCircle className="w-5 h-5 text-red-400" />
                                            <span className="text-red-300">Failed to send message. Please try again or contact us directly.</span>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${formErrors.name
                                                                ? 'border-red-500 focus:ring-red-500/50'
                                                                : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50'
                                                            }`}
                                                        placeholder="Your full name"
                                                    />
                                                </div>
                                                {formErrors.name && (
                                                    <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${formErrors.email
                                                                ? 'border-red-500 focus:ring-red-500/50'
                                                                : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50'
                                                            }`}
                                                        placeholder="your.email@example.com"
                                                    />
                                                </div>
                                                {formErrors.email && (
                                                    <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Phone Number *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className={`w-full pl-12 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${formErrors.phone
                                                                ? 'border-red-500 focus:ring-red-500/50'
                                                                : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50'
                                                            }`}
                                                        placeholder="+91 9301090000"
                                                    />
                                                </div>
                                                {formErrors.phone && (
                                                    <p className="mt-1 text-sm text-red-400">{formErrors.phone}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Inquiry Type
                                                </label>
                                                <select
                                                    name="inquiryType"
                                                    value={formData.inquiryType}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:border-purple-500 focus:ring-purple-500/50 transition-all duration-300"
                                                >
                                                    {inquiryTypes.map(type => (
                                                        <option key={type.value} value={type.value} className="bg-gray-800">
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${formErrors.subject
                                                        ? 'border-red-500 focus:ring-red-500/50'
                                                        : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50'
                                                    }`}
                                                placeholder="What's this about?"
                                            />
                                            {formErrors.subject && (
                                                <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows="5"
                                                className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${formErrors.message
                                                        ? 'border-red-500 focus:ring-red-500/50'
                                                        : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500/50'
                                                    }`}
                                                placeholder="Tell us about your fitness goals, questions, or how we can help you..."
                                            />
                                            {formErrors.message && (
                                                <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting
                                                    ? 'bg-gray-600 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 hover:scale-105 hover:shadow-xl'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div
                                className={`space-y-8 transition-all duration-1000 ${isVisible.contactInfo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                    }`}
                                id="contactInfo"
                                data-animate
                            >
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20`}
                                            style={{ animationDelay: `${index * 200}ms` }}
                                        >
                                            <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                                                {info.title}
                                            </h3>

                                            <div className="space-y-2 mb-6">
                                                {info.details.map((detail, detailIndex) => (
                                                    <p key={detailIndex} className="text-gray-300 text-lg">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>

                                            <a
                                                href={info.link}
                                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500 hover:to-pink-500 text-purple-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-transparent group-hover:scale-105"
                                            >
                                                <span>{info.action}</span>
                                                <Navigation className="w-4 h-4" />
                                            </a>
                                        </div>
                                    );
                                })}

                                {/* Social Media */}

                            </div>
                        </div>
                    )}

                    {/* Interactive Map Section */}
            <div className="relative">
              <div className="h-96 bg-gray-800 relative overflow-hidden rounded-b-2xl">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.31231635!3d28.619352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87b6b7c!2sMayur%20Vihar%20Phase%20III%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fitness Hub Location Map"
                  className="absolute inset-0"
                />

                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Get Directions Button */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={openDirections}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 backdrop-blur-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                  </button>
                </div>

                {/* Location Pin Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-red-500 animate-bounce" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      Fitness Hub
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative Map Button (fallback) */}
              <div className="absolute top-4 left-4">
                <button
                  onClick={() => window.open('https://maps.google.com/?q=Mayur+Vihar+Phase+III,+Delhi', '_blank')}
                  className="bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm transition-all duration-200 flex items-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View in Maps</span>
                </button>
              </div>
            </div>
          
                </div>
            </section>
        </div>
    );
}
export default ContactPage;