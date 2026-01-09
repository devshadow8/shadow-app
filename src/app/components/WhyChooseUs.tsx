"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Star, Zap } from 'lucide-react';
import {features } from '../data/WhyChooseUs/data'

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-full">
            <Star className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-100 font-semibold">Our Unique Advantages</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white mb-2">Why Choose</span>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Shadow Recruiters
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full"></div>
            <Zap className="w-6 h-6 text-emerald-400" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-violet-400 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Shadow Recruiters the{' '}
            <span className="text-emerald-400 font-semibold">preferred choice</span> for{' '}
            <span className="text-blue-400 font-semibold">career development</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-white/20 overflow-hidden cursor-pointer">
                  
                  {/* Gradient Glow */}
                  <div className={`absolute -inset-px bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}></div>
                  
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-sm opacity-30`}></div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rotating Background Pattern */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-3xl group-hover:scale-150 group-hover:rotate-180 transition-all duration-700`}></div>

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.iconBg} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${feature.iconBg} rounded-2xl opacity-0 group-hover:opacity-30 group-hover:scale-150 blur-xl transition-all duration-500`}></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {feature.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 text-sm transition-all duration-300 ${isHovered ? 'translate-x-2 text-emerald-300' : 'text-gray-500'}`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:scale-150 transition-transform duration-300`}></div>
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hidden CTA on Hover */}
                    <div className={`flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                      Explore More
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Corner Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/30 font-black text-sm group-hover:bg-white/10 group-hover:text-white/60 group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Floating Icon on Hover */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${feature.iconBg} rounded-xl shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 rotate-12 group-hover:rotate-0`}>
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '3000+', label: 'Success Stories' },
            { number: '95%', label: 'Placement Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center group hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-12 py-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 text-lg">
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Zap className="w-5 h-5" />
              Start Your Transformation Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;