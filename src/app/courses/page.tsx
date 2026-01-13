 "use client";
import React, { useState, useEffect } from 'react';
import { Check, X, ChevronDown, ChevronUp, Sparkles, Target, Award, TrendingUp, Clock, BookOpen, Users, MessageCircle, Globe, ThumbsUp, Headphones, Search, FileText, Mic } from 'lucide-react';
import Link from "next/link";
import { courses, comparisonFeatures, faqs } from '../data/courseData/course';
const CoursesPage = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
          <BookOpen className="absolute text-blue-400/30 w-12 h-12 animate-float" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
          <Users className="absolute text-cyan-400/30 w-10 h-10 animate-float" style={{ top: '25%', right: '20%', animationDelay: '1s' }} />
          <MessageCircle className="absolute text-purple-400/30 w-11 h-11 animate-float" style={{ top: '60%', left: '10%', animationDelay: '2s' }} />
          <Globe className="absolute text-pink-400/30 w-14 h-14 animate-float" style={{ bottom: '20%', right: '15%', animationDelay: '1.5s' }} />
          <ThumbsUp className="absolute text-green-400/30 w-9 h-9 animate-float" style={{ top: '40%', right: '30%', animationDelay: '0.5s' }} />
          <Headphones className="absolute text-orange-400/30 w-10 h-10 animate-float" style={{ bottom: '30%', left: '25%', animationDelay: '2.5s' }} />
          <Search className="absolute text-indigo-400/30 w-11 h-11 animate-float" style={{ top: '70%', right: '25%', animationDelay: '1s' }} />
          <FileText className="absolute text-teal-400/30 w-10 h-10 animate-float" style={{ top: '15%', right: '10%', animationDelay: '3s' }} />
          <Mic className="absolute text-yellow-400/30 w-12 h-12 animate-float" style={{ bottom: '15%', left: '20%', animationDelay: '0.8s' }} />
          <Award className="absolute text-red-400/30 w-9 h-9 animate-float" style={{ top: '50%', left: '5%', animationDelay: '2.2s' }} />
          <Target className="absolute text-blue-300/30 w-10 h-10 animate-float" style={{ bottom: '40%', right: '5%', animationDelay: '1.8s' }} />
          <BookOpen className="absolute text-purple-300/30 w-11 h-11 animate-float" style={{ top: '80%', left: '40%', animationDelay: '2.8s' }} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
            {/* Left side - Text content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Transform Your Career & Personality</span>
              </div>
              
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                  opacity: Math.max(0, 1 - scrollY / 500)
                }}
              >
                Our Courses
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Choose from our carefully designed programs to accelerate your growth
              </p>

              {/* Services List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Communication Mastery</h3>
                    <p className="text-sm text-slate-400">Build confidence & fluency</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Personality Development</h3>
                    <p className="text-sm text-slate-400">Transform your presence</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Career Readiness</h3>
                    <p className="text-sm text-slate-400">Interview & placement support</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Lifetime Support</h3>
                    <p className="text-sm text-slate-400">Continuous guidance & counseling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Animated illustration */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-80 h-80 border-4 border-purple-500/20 rounded-full animate-spin-slow" />
                  <div className="absolute w-96 h-96 border-4 border-blue-500/10 rounded-full animate-spin-reverse" />
                </div>

                {/* Main illustration */}
                <div className="relative z-10 animate-float">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Target */}
                    <circle cx="250" cy="150" r="60" fill="none" stroke="#EC4899" strokeWidth="8" className="animate-pulse" />
                    <circle cx="250" cy="150" r="40" fill="none" stroke="#EC4899" strokeWidth="6" opacity="0.6" />
                    <circle cx="250" cy="150" r="20" fill="#EC4899" />
                    <line x1="200" y1="150" x2="300" y2="150" stroke="#EC4899" strokeWidth="3" />
                    <polygon points="305,150 295,145 295,155" fill="#EC4899" />

                    {/* Person */}
                    <ellipse cx="150" cy="280" rx="40" ry="20" fill="#10B981" opacity="0.6" />
                    <rect x="130" y="220" width="40" height="60" fill="#EAB308" rx="5" />
                    <circle cx="150" cy="180" r="20" fill="#F0ABFC" />
                    <rect x="110" y="220" width="20" height="40" fill="#F0ABFC" rx="5" />
                    <rect x="170" y="220" width="20" height="40" fill="#F0ABFC" rx="5" />
                    <rect x="130" y="280" width="15" height="40" fill="#A78BFA" rx="5" />
                    <rect x="155" y="280" width="15" height="40" fill="#A78BFA" rx="5" />
                    <ellipse cx="140" cy="320" rx="12" ry="6" fill="#000" />
                    <ellipse cx="165" cy="320" rx="12" ry="6" fill="#000" />
                    <rect x="110" y="200" width="35" height="15" fill="#FFF" rx="3" />

                    {/* Dollar signs */}
                    <circle cx="80" cy="120" r="20" fill="none" stroke="#000" strokeWidth="2" />
                    <text x="80" y="130" fontSize="24" fill="#10B981" textAnchor="middle" fontWeight="bold">$</text>
                    
                    <circle cx="320" cy="280" r="20" fill="none" stroke="#000" strokeWidth="2" />
                    <text x="320" y="290" fontSize="24" fill="#10B981" textAnchor="middle" fontWeight="bold">$</text>

                    {/* Steps */}
                    <rect x="200" y="340" width="60" height="25" fill="#EAB308" />
                    <rect x="150" y="320" width="60" height="25" fill="#EAB308" />
                    <rect x="100" y="300" width="60" height="25" fill="#EAB308" />

                    {/* Briefcase */}
                    <rect x="110" y="195" width="35" height="20" fill="#E5E7EB" rx="2" />
                    <rect x="115" y="190" width="25" height="8" fill="#E5E7EB" rx="2" />
                    <circle cx="122" cy="205" r="2" fill="#666" />
                    <circle cx="133" cy="205" r="2" fill="#666" />
                  </svg>
                </div>

                {/* Floating elements */}
                <div className="absolute top-10 right-10 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full p-3 animate-bounce">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div className="absolute bottom-20 left-10 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full p-3 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Training Programs</h2>
        <p className="text-center text-slate-400 mb-12">Select the perfect program for your career goals</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-3xl`}
              />
              
              {/* Card */}
              <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transition-all duration-500 ${
                activeCard === idx ? 'transform scale-105 shadow-2xl' : ''
              }`}>
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`bg-gradient-to-r ${course.color} px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                      <Award className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-block bg-gradient-to-r ${course.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-500 ${
                    activeCard === idx ? 'rotate-12 scale-110' : ''
                  }`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      {/* <DollarSign className="w-4 h-4" /> */}
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Objective */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">OBJECTIVE</h4>
                  <p className="text-sm text-slate-300">{course.objective}</p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">HIGHLIGHTS</h4>
                  <div className="space-y-2">
                    {course.highlights.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-2 text-sm transform transition-transform duration-300"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                          transform: activeCard === idx ? 'translateX(8px)' : 'translateX(0)'
                        }}
                      >
                        <div className={`bg-gradient-to-r ${course.color} w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0`} />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">DELIVERABLES</h4>
                  <div className="space-y-2">
                    {course.deliverables.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-sm"
                        style={{
                          transitionDelay: `${i * 50}ms`,
                          opacity: activeCard === idx ? 1 : 0.7
                        }}
                      >
                        <Check className={`w-4 h-4 flex-shrink-0 bg-gradient-to-r ${course.color} bg-clip-text text-transparent`} />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href= "/contact" passHref>
                <button className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95`}>
                  Enroll Now
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Course Comparison</h2>
        <p className="text-center text-slate-400 mb-12">Compare programs to find your perfect fit</p>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 font-semibold text-slate-300">Features</th>
                  <th className="text-center p-6 font-semibold bg-gradient-to-r from-blue-500/10 to-cyan-500/10">Shadow Rise</th>
                  <th className="text-center p-6 font-semibold bg-gradient-to-r from-purple-500/10 to-pink-500/10">Shadow Prime</th>
                  <th className="text-center p-6 font-semibold bg-gradient-to-r from-orange-500/10 to-red-500/10">Shadow Forever</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr 
                    key={idx} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="p-6 font-medium text-slate-300">{feature.name}</td>
                    <td className="text-center p-6">
                      {typeof feature.rise === 'boolean' ? (
                        feature.rise ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-300">{feature.rise}</span>
                      )}
                    </td>
                    <td className="text-center p-6">
                      {typeof feature.prime === 'boolean' ? (
                        feature.prime ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-300">{feature.prime}</span>
                      )}
                    </td>
                    <td className="text-center p-6">
                      {typeof feature.forever === 'boolean' ? (
                        feature.forever ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-slate-300">{feature.forever}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Course FAQs</h2>
        <p className="text-center text-slate-400 mb-12">Find answers to common questions</p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-300">
                  {faq.a}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative max-w-5xl mx-auto px-4 py-20">
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 overflow-hidden">
          {/* Animated circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Transformation?</h2>
            <p className="text-xl text-white/90 mb-8">Join hundreds of successful students who have transformed their careers with Shadow Recruiters</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                Enroll Today
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 hover:bg-white/20">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
};

export default CoursesPage;