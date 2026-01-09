"use client"
import React, { useState } from 'react';
import { MapPin, Mail, User, Clock, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ChevronRight } from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Who Can Join', href: '#' },
    { name: 'Why Choose Us', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const courses = [
    { name: 'Shadow Rise', href: '#' },
    { name: 'Shadow Prime', href: '#' },
    { name: 'Shadow Forever', href: '#' },
    { name: 'Corporate Training', href: '#' },
    { name: 'Personality Development', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500', bg: 'group-hover:from-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500', bg: 'group-hover:from-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500', bg: 'group-hover:from-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600', bg: 'group-hover:from-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500', bg: 'group-hover:from-red-500' }
  ];

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-purple-950/30 to-transparent"></div>
      
      {/* Floating Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[length:30px_30px]"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section with Wave Effect */}
        <div className="relative border-b border-white/10 overflow-hidden">
          {/* Animated Wave Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-wave"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left space-y-2">
                <h3 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
                  Stay Updated
                </h3>
                <p className="text-gray-400 text-lg">Subscribe to get the latest updates and career tips</p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex gap-3 max-w-md">
                  <div className="relative flex-1 group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                  </div>
                  <button className="group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <h2 className="text-3xl font-black mb-4 relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 inline-block transition-transform duration-300">
                    Shadow Recruiters
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Premium Training & Development Institute focused on building communication, confidence, personality, and career readiness for students, job seekers, and professionals.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`group relative w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                      >
                        <Icon className="w-5 h-5 relative z-10" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.bg} to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-current opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 group">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full group-hover:h-8 transition-all duration-300"></div>
                <span>Quick Links</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-1"
                    >
                      <ChevronRight className={`w-4 h-4 text-blue-500 transition-all duration-300 ${hoveredLink === `quick-${index}` ? 'translate-x-1 scale-110' : ''}`} />
                      <span className="relative">
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${hoveredLink === `quick-${index}` ? 'w-full' : 'w-0'}`}></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 group">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:h-8 transition-all duration-300"></div>
                <span>Courses</span>
              </h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      onMouseEnter={() => setHoveredLink(`course-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 py-1"
                    >
                      <ChevronRight className={`w-4 h-4 text-purple-500 transition-all duration-300 ${hoveredLink === `course-${index}` ? 'translate-x-1 scale-110' : ''}`} />
                      <span className="relative">
                        {course.name}
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${hoveredLink === `course-${index}` ? 'w-full' : 'w-0'}`}></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 group">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-red-500 rounded-full group-hover:h-8 transition-all duration-300"></div>
                <span>Contact Info</span>
              </h3>
              <ul className="space-y-4">
                <li className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="relative w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-pink-500/30 transition-all duration-300 overflow-hidden">
                    <MapPin className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium leading-tight">Konark Indrayu Mall, Kondhwa, Pune</p>
                  </div>
                </li>
                <li className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="relative w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                    <Mail className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">hr@shadowrecruiter.com</p>
                  </div>
                </li>
                <li className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="relative w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
                    <User className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Oves Shaikh</p>
                  </div>
                </li>
                <li className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                  <div className="relative w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-green-500/30 transition-all duration-300 overflow-hidden">
                    <Clock className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gradient Border */}
        <div className="border-t border-white/10 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 <span className="font-semibold text-gray-300">Shadow Recruiters</span> - Training & Development Institute. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
                <span className="text-gray-700">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 relative group">
                  Terms of Service
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
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
        
        @keyframes wave {
          0% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-25%) translateY(-10px); }
          100% { transform: translateX(0%) translateY(0); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        
        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;