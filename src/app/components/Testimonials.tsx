"use client"
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  Briefcase,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  IndianRupee
} from 'lucide-react';
import { testimonials, achievements } from '../data/testimonialsData/testimonial';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  const nextTestimonial = () => {
    setDirection('next');
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-emerald-100 font-semibold">🇮🇳 Real Stories, Real Success</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white mb-2">Student&apos;s</span>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Transformation Journey
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Listen to our students'{' '}
            <span className="text-emerald-400 font-semibold">success stories</span> and learn how they{' '}
            <span className="text-blue-400 font-semibold">transformed their careers</span>
          </p>
        </div>

        {/* Testimonial Card */}
        <div className={`max-w-5xl mx-auto mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-500`}>
              
              {/* Gradient Background */}
              <div className={`absolute -inset-px bg-gradient-to-r ${current.gradient} rounded-3xl opacity-10 blur-2xl`}></div>
              
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10">
                {/* User Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  {/* Avatar */}
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${current.gradient} rounded-2xl flex items-center justify-center text-5xl shadow-2xl`}>
                    {current.image}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${current.gradient} rounded-2xl opacity-50 blur-xl`}></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-black text-white">{current.name}</h3>
                      <div className={`px-4 py-1 bg-gradient-to-r ${current.gradient} rounded-full text-white text-sm font-bold`}>
                        <IndianRupee className="w-3 h-3 inline" /> {current.package}
                      </div>
                      <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-400 text-xs font-bold">
                        ↑ {current.increase} Hike
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold text-white">{current.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{current.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{current.location}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mt-3">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                    {current.review}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTestimonial 
                        ? 'w-8 h-3 bg-gradient-to-r from-emerald-400 to-blue-400' 
                        : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                 Our Achievements
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Our Journey in Numbers 📊</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: achievement.delay }}
                >
                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                    
                    {/* Gradient Glow */}
                    <div className={`absolute -inset-px bg-gradient-to-r ${achievement.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 bg-gradient-to-br ${achievement.gradient} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Number */}
                      <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.number}
                      </div>

                      {/* Label */}
                      <div className="text-sm font-bold text-white mb-1">
                        {achievement.label}
                      </div>

                      {/* Description */}
                      <div className="text-xs text-gray-500">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6 text-lg">
            You can be our next success story! 🌟
          </p>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 text-lg">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Book Free Career Counseling
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;