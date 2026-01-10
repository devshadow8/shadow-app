"use client";
import React, { useState, useEffect } from 'react';
import {contactInfo, socialLinks, faqs} from "../data/contactData/contact"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, BookOpen, AlertCircle, CheckCircle, ChevronDown, Globe, HelpCircle } from 'lucide-react';
const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    course: '',
    trainer: 'Oves Shaikh',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          course: '',
          trainer: 'Oves Shaikh',
          message: ''
        });
        setErrors({});
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-24">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: `${mousePosition.y / 15}px`,
            right: `${mousePosition.x / 15}px`,
            transition: 'all 0.3s ease-out',
            animationDelay: '1s'
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0">
          <Mail className="absolute text-blue-400/30 w-12 h-12 animate-float" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
          <Phone className="absolute text-purple-400/30 w-10 h-10 animate-float" style={{ top: '25%', right: '20%', animationDelay: '1s' }} />
          <MapPin className="absolute text-orange-400/30 w-11 h-11 animate-float" style={{ top: '60%', left: '10%', animationDelay: '2s' }} />
          <Send className="absolute text-pink-400/30 w-14 h-14 animate-float" style={{ bottom: '20%', right: '15%', animationDelay: '1.5s' }} />
          <MessageSquare className="absolute text-green-400/30 w-9 h-9 animate-float" style={{ top: '40%', right: '30%', animationDelay: '0.5s' }} />
          <Globe className="absolute text-cyan-400/30 w-10 h-10 animate-float" style={{ bottom: '30%', left: '25%', animationDelay: '2.5s' }} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 animate-fadeIn">
            <Send className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">We&apos;re Here to Help You</span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY / 500)
            }}
          >
            Get In Touch
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-2xl`} />
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className={`inline-flex bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl items-center justify-center mb-4 transform transition-transform duration-500 group-hover:rotate-12`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-400 text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className="text-slate-400 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours</p>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-12 py-3 focus:outline-none focus:border-purple-500 transition-colors`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-12 py-3 focus:outline-none focus:border-purple-500 transition-colors`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-12 py-3 focus:outline-none focus:border-purple-500 transition-colors`}
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Input (Optional) */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Company Name (Optional)</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Course *</label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${errors.course ? 'border-red-500' : 'border-white/10'} rounded-xl px-12 py-3 focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-slate-900">Select a course</option>
                      <option value="Shadow Rise" className="bg-slate-900">Shadow Rise - 5 Days (₹2,000)</option>
                      <option value="Shadow Prime" className="bg-slate-900">Shadow Prime - 30-45 Days (₹7,000)</option>
                      <option value="Shadow Forever" className="bg-slate-900">Shadow Forever - 45+ Days (₹11,000)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                  {errors.course && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.course}
                    </p>
                  )}
                </div>

                {/* Trainer Info (Read-only) */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Trainer</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="trainer"
                      value={formData.trainer}
                      readOnly
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 text-slate-300 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Default trainer for all courses</p>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-12 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none`}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center gap-3 animate-fadeIn">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-400">Message Sent Successfully!</p>
                      <p className="text-sm text-green-300">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3 animate-fadeIn">
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-400">Failed to Send Message</p>
                      <p className="text-sm text-red-300">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map & Social Links */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden h-140">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2283876854385!2d73.88685727393441!3d18.473311270618584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebf919afac13%3A0x5542e7797de86660!2sShadow%20Recruiters!5e0!3m2!1sen!2sin!4v1768039215955!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shadow Recruiters Location"
              />
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
              <p className="text-slate-400 mb-6">Follow us on social media for updates and success stories</p>
              
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white/5 border border-white/10 rounded-xl w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/30 ${social.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-2">Quick Response Guarantee</h3>
              <p className="text-white/90">We typically respond within 2-4 hours during business hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 overflow-hidden relative">
          {/* Animated circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl text-white/90 mb-8">Join hundreds of successful professionals who have transformed their careers with Shadow Recruiters</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                Enroll Today
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:bg-white/20">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 animate-fadeIn">
            <HelpCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Got Questions?
          </h2>
          <p className="text-xl text-slate-300">
            Find answers to common questions about our training programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const Icon = faq.icon;
            const isOpen = openFaq === idx;
            
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`bg-gradient-to-r ${faq.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-slate-300 mb-6">
            Our team is here to help you make the right decision for your career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918483852326"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a 
              href="mailto:hr@shadowrecruiter.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:bg-white/20"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;