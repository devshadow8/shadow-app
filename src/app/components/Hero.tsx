/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';
import Link from "next/link"

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [counters, setCounters] = useState({ placements: 0, success: 0, salary: 0 });

  const services = [
    'Interview Preparation', 
    'Personality Development', 
    'Voice & Accent Training', 
    'Career Guidance', 
    'Resume Building',
    'Soft Skills Development',
    'Leadership Training',
    'Communication Skills'
  ];
  
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    // Counter Animation
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        placements: Math.floor(3000 * progress),
        success: Math.floor(95 * progress),
        salary: Math.floor(35 * progress)
      });
      
      if (currentStep >= steps) {
        setCounters({ placements: 3000, success: 95, salary: 35 });
        clearInterval(timer);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '3000+', actualNumber: counters.placements, label: 'Successful Placements', icon: Users, delay: '0s' },
    { number: '95%', actualNumber: counters.success, label: 'Success Rate', icon: Award, delay: '0.2s' },
    { number: '35%', actualNumber: counters.salary, label: 'Salary Increase', icon: TrendingUp, delay: '0.4s' }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden py-10">
      {/* Background Video with Better Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>

        {/* Lighter Overlay for Clearer Video */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />
      </div>

      {/* Reduced Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-blue-600/5 to-violet-600/5 z-[1]"></div>
      
      {/* Very Subtle Mesh Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)] z-[1]"></div>
      
      {/* Minimal Floating Orbs */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob z-[1]"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      ></div>
      <div 
        className="absolute top-40 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000 z-[1]"
        style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105 hover:border-emerald-400/50`}>
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-emerald-100 font-semibold">🇮🇳 India&apos;s #1 Career Transformation Partner</span>
          </div>

          {/* Main Heading with Animated Service */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-white mb-2 drop-shadow-2xl">Your Career Deserves</span>
            <span className="block mb-2">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                Expert
              </span>
            </span>
            {/* Animated Typing Service */}
            <div className="relative h-16 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center py-10">
              <span 
                key={currentService}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-slideUp drop-shadow-lg font-extrabold"
              >
                {services[currentService]}
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className={`text-sm sm:text-base md:text-lg text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} drop-shadow-lg`}>
            From campus to corporate, we shape careers through personalized coaching,
            <br className="hidden sm:block" />
            <span className="text-emerald-300 font-semibold"> industry-ready skills</span>, and 
            <span className="text-blue-300 font-semibold"> complete personality transformation</span>
          </p>
          
          {/* Trust Indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-4 mb-8 text-xs sm:text-sm text-gray-400 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></div>
              <span>15+ Years Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href="/contact" passHref>
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 text-sm sm:text-base">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            
            <Link href="/testimonials" passHref>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-emerald-400/40 text-white font-bold rounded-xl hover:bg-white/15 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base group">
                <Users className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                Success Stories
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Stats Section - Smaller Cards with Counter */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-4 sm:p-5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden"
                  style={{ animationDelay: stat.delay }}
                >
                  {/* Animated Border Gradient */}
                  <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-10 h-10 mb-3 bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-600 rounded-lg shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && `${stat.actualNumber}+`}
                      {index === 1 && `${stat.actualNumber}%`}
                      {index === 2 && `${stat.actualNumber}%`}
                    </div>
                    <div className="text-gray-300 font-semibold text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
            <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px);
          }
        }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 2.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;