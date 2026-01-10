"use client";
import React, { useState, useEffect } from 'react';
import { Camera, Award, Users, Briefcase, TrendingUp, BookOpen, Mic, MessageCircle, Globe, ThumbsUp, Headphones, Search, FileText, Video, Play, X } from 'lucide-react';
import { galleryItems, achievements } from '../data/galleryData/data';
const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const filters = ['All', 'Training Sessions', 'Workshops', 'Student Achievements', 'Events'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-24">
      {/* Animated background orbs */}
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

        {/* Floating animated icons */}
        <div className="absolute inset-0">
          <Camera className="absolute text-blue-400/30 w-12 h-12 animate-float" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
          <Award className="absolute text-cyan-400/30 w-10 h-10 animate-float" style={{ top: '25%', right: '20%', animationDelay: '1s' }} />
          <Users className="absolute text-purple-400/30 w-11 h-11 animate-float" style={{ top: '60%', left: '10%', animationDelay: '2s' }} />
          <Briefcase className="absolute text-pink-400/30 w-14 h-14 animate-float" style={{ bottom: '20%', right: '15%', animationDelay: '1.5s' }} />
          <TrendingUp className="absolute text-green-400/30 w-9 h-9 animate-float" style={{ top: '40%', right: '30%', animationDelay: '0.5s' }} />
          <BookOpen className="absolute text-orange-400/30 w-10 h-10 animate-float" style={{ bottom: '30%', left: '25%', animationDelay: '2.5s' }} />
          <Mic className="absolute text-indigo-400/30 w-11 h-11 animate-float" style={{ top: '70%', right: '25%', animationDelay: '1s' }} />
          <Video className="absolute text-teal-400/30 w-10 h-10 animate-float" style={{ top: '15%', right: '10%', animationDelay: '3s' }} />
          <MessageCircle className="absolute text-yellow-400/30 w-12 h-12 animate-float" style={{ bottom: '15%', left: '20%', animationDelay: '0.8s' }} />
          <Globe className="absolute text-red-400/30 w-9 h-9 animate-float" style={{ top: '50%', left: '5%', animationDelay: '2.2s' }} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 animate-fadeIn">
                <Camera className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Moments of Success & Growth</span>
              </div>
              
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                  opacity: Math.max(0, 1 - scrollY / 500)
                }}
              >
                Our Gallery
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Take a look at our training sessions, student achievements, and success stories
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 px-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">1000+</h3>
                  <p className="text-sm text-slate-400">Photos Captured</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">50+</h3>
                  <p className="text-sm text-slate-400">Success Stories</p>
                </div>
              </div>
            </div>

            {/* Right side - Animated camera illustration */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-80 h-80 border-4 border-purple-500/20 rounded-full animate-spin-slow" />
                  <div className="absolute w-96 h-96 border-4 border-blue-500/10 rounded-full animate-spin-reverse" />
                </div>

                {/* Camera illustration */}
                <div className="relative z-10 animate-float">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Camera body */}
                    <rect x="100" y="150" width="200" height="140" rx="20" fill="#374151" />
                    <rect x="110" y="160" width="180" height="120" rx="15" fill="#4B5563" />
                    
                    {/* Lens */}
                    <circle cx="200" cy="220" r="50" fill="#1F2937" />
                    <circle cx="200" cy="220" r="40" fill="#374151" className="animate-pulse" />
                    <circle cx="200" cy="220" r="25" fill="#6366F1" opacity="0.6" className="animate-ping" />
                    <circle cx="200" cy="220" r="15" fill="#8B5CF6" />
                    
                    {/* Camera details */}
                    <rect x="120" y="170" width="30" height="10" rx="5" fill="#6366F1" />
                    <circle cx="270" cy="175" r="8" fill="#EF4444" className="animate-pulse" />
                    
                    {/* Flash */}
                    <rect x="130" y="130" width="40" height="20" rx="5" fill="#FCD34D" opacity="0.8" />
                    
                    {/* Photos floating around */}
                    <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                      <rect x="50" y="80" width="60" height="50" rx="5" fill="#EC4899" opacity="0.8" />
                      <rect x="55" y="85" width="50" height="40" rx="3" fill="#FFF" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDelay: '1s' }}>
                      <rect x="290" y="100" width="60" height="50" rx="5" fill="#3B82F6" opacity="0.8" />
                      <rect x="295" y="105" width="50" height="40" rx="3" fill="#FFF" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDelay: '1.5s' }}>
                      <rect x="320" y="250" width="60" height="50" rx="5" fill="#10B981" opacity="0.8" />
                      <rect x="325" y="255" width="50" height="40" rx="3" fill="#FFF" />
                    </g>
                  </svg>
                </div>

                {/* Floating photo badges */}
                <div className="absolute top-10 right-10 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-xl p-3 animate-bounce">
                  <Video className="w-6 h-6 text-pink-400" />
                </div>
                <div className="absolute bottom-20 left-10 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-3 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Play className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:border-purple-400/50 hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Photo Gallery</h2>
        <p className="text-center text-slate-400 mb-12">Capturing moments of learning, growth, and success at Shadow Recruiters</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-2xl`} />
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Image with gradient overlay */}
                <div className="h-64 relative overflow-hidden">
                  {/* Actual Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback gradient (hidden by default, shows if image fails) */}
                  <div className={`hidden absolute inset-0 bg-gradient-to-br ${item.color}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  
                  {/* Overlay icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Play className="w-5 h-5" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    backgroundClip: 'text'
                  }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Achievements Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Student Achievements</h2>
        <p className="text-center text-slate-400 mb-12">Celebrating the success stories of our students</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="group relative"
                style={{
                  animationDelay: `${idx * 150}ms`
                }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-3xl`} />
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className={`inline-flex bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-2xl items-center justify-center mb-4 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{achievement.label}</h3>
                  <p className="text-sm text-slate-400">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative max-w-5xl mx-auto px-4 py-20">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Success Story</h2>
            <p className="text-xl text-white/90 mb-8">Be part of our growing community of successful professionals</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                Enroll Today
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:bg-white/20">
                View More Photos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden animate-scaleIn">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {galleryItems.find(item => item.id === selectedImage) && (
              <>
                <div className="h-96 relative overflow-hidden">
                  <img 
                    src={galleryItems.find(item => item.id === selectedImage)?.image} 
                    alt={galleryItems.find(item => item.id === selectedImage)?.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback gradient */}
                  <div className={`hidden absolute inset-0 bg-gradient-to-br ${galleryItems.find(item => item.id === selectedImage)?.color} flex items-center justify-center`}>
                    <Camera className="w-32 h-32 text-white/30" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3">{galleryItems.find(item => item.id === selectedImage)?.title}</h3>
                  <p className="text-slate-400 text-lg">{galleryItems.find(item => item.id === selectedImage)?.description}</p>
                  <div className="mt-4 inline-block bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/10">
                    {galleryItems.find(item => item.id === selectedImage)?.category}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;