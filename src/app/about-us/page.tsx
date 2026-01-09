"use client";
import React, { useState, useEffect } from 'react';
import { Users, Target, Eye, TrendingUp, Award, Heart, Lightbulb, Handshake, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import {stats, values, team} from "../data/aboutData/data"
const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
 // const [activeSection, setActiveSection] = useState(0);
  const [bgElements, setBgElements] = useState<Array<{width: number; height: number; left: number; top: number; delay: number; duration: number}>>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elements = [...Array(20)].map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 3
    }));
    setBgElements(elements);
  }, []);

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {bgElements.map((elem, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse"
              style={{
                width: `${elem.width}px`,
                height: `${elem.height}px`,
                left: `${elem.left}%`,
                top: `${elem.top}%`,
                animationDelay: `${elem.delay}s`,
                animationDuration: `${elem.duration}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div 
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming careers through excellence in training, development, and mentorship
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Shadow Recruiters is a premium Training & Development Institute based in Pune, dedicated to building communication, confidence, personality, interview skills, and corporate readiness.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Founded with the vision to bridge the gap between academic education and industry requirements, we provide career-oriented programs designed for students, job seekers, and professionals to excel in their chosen fields.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-10 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 h-full">
              <Target className="w-16 h-16 mb-6 text-blue-400" />
              <h3 className="text-4xl font-bold mb-4 text-blue-300">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower individuals with the skills and confidence needed to excel in their careers through personalized training and mentorship.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 h-full">
              <Eye className="w-16 h-16 mb-6 text-purple-400" />
              <h3 className="text-4xl font-bold mb-4 text-purple-300">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the leading institute for career development and personality enhancement, recognized for transforming lives and creating successful professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="group relative"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 text-center transform hover:-translate-y-2">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-xl text-center text-gray-400 mb-20">
            The principles that guide everything we do
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div 
                key={i}
                className="group relative"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-center text-gray-400 mb-20">
            The dedicated professionals behind Shadow Recruiters' success
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div 
                key={i}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/20`}>
                    {member.image ? (
                      <img
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML = `<span class="text-4xl font-bold">${member.name.charAt(0)}</span>`;
                        }}
                      />
                    ) : (
                      <span className="text-4xl font-bold">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-2">{member.name}</h3>
                  <p className={`text-center mb-4 font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-center leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-16 border border-white/20">
              <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of successful professionals who started their journey with Shadow Recruiters
              </p>
              <button className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                Explore Our Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;