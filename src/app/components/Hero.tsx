"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

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
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
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
  }, [services.length]);

  const stats = [
    { number: '3000+', label: 'Successful Placements', icon: Users, delay: '0s' },
    { number: '95%', label: 'Success Rate', icon: Award, delay: '0.2s' },
    { number: '35%', label: 'Salary Increase', icon: TrendingUp, delay: '0.4s' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden py-30">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-blue-600/20 to-violet-600/20 animate-pulse"></div>
      
      {/* Animated Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      {/* Floating Orbs with Different Colors */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      ></div>
      <div 
        className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}
      ></div>
      <div 
        className="absolute -bottom-8 left-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{ transform: `translate(-50%, ${mousePosition.y * 0.5}px)` }}
      ></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Diagonal Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(16,185,129,0.05)_49%,rgba(16,185,129,0.05)_51%,transparent_52%)] bg-[size:40px_40px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105 hover:border-emerald-400/40`}>
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-100 font-semibold">🇮🇳 India&apos;s #1 Career Transformation Partner</span>
          </div>

          {/* Main Heading with Animated Service */}
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-white mb-4">Your Career Deserves</span>
            <span className="block mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
                Expert
              </span>
            </span>
            {/* Animated Typing Service */}
            <div className="relative h-24 sm:h-28 md:h-32 lg:h-50 flex items-center justify-center">
              <span 
                key={currentService}
                className= " absolute inset-0 flex items-center justify-center bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-slideUp"
              >
                {services[currentService]}
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            From campus to corporate, we shape careers through personalized coaching,
            <br className="hidden md:block" />
            <span className="text-emerald-400 font-semibold"> industry-ready skills</span>, and 
            <span className="text-blue-400 font-semibold"> complete personality transformation</span>
          </p>
          
          {/* Trust Indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-500 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Trusted by Fortune 500 Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>ISO Certified Training</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span>15+ Years Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 text-lg">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </button>
            
            <button className="px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-emerald-400/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg group">
              <Users className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              Success Stories
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-emerald-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 overflow-hidden"
                  style={{ animationDelay: stat.delay }}
                >
                  {/* Animated Border Gradient */}
                  <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-600 rounded-2xl shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-semibold text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
          animation: blob 7s infinite;
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