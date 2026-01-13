/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import {programs} from "../data/whoJoinData/data"
import Link from "next/link";

const WhoCanJoin = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-400/20 rounded-full">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-100 font-semibold">Programs for Everyone</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white mb-2">Who Can</span>
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Join Us
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our programs are designed for individuals at{' '}
            <span className="text-emerald-400 font-semibold">every stage</span> of their{' '}
            <span className="text-blue-400 font-semibold">career journey</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: program.delay }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-${program.glowColor}-400/30 overflow-hidden cursor-pointer ${isActive ? 'shadow-2xl shadow-' + program.glowColor + '-500/20' : ''}`}>
                  
                  {/* Animated Background Gradient */}
                  <div className={`absolute -inset-px bg-gradient-to-r ${program.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${program.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Benefits List */}
                    <div className={`space-y-3 mb-6 transition-all duration-500 ${isActive ? 'opacity-100 max-h-96' : 'opacity-60 max-h-96'}`}>
                      {program.benefits.map((benefit, i) => (
                        <div 
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-300 transform transition-all duration-300 hover:translate-x-2"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <CheckCircle2 className={`w-4 h-4 text-${program.glowColor}-400 flex-shrink-0`} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${program.gradient} text-white font-bold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.gradient} opacity-10 blur-2xl rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r ${program.gradient} text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg`}>
                  Popular
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6 text-lg">
            Not sure which program is right for you?
          </p>
           <Link href="contact" passHref>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-blue-600 to-violet-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 text-lg">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Talk to Our Career Counselor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default WhoCanJoin;