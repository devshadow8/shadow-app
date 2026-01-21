/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from 'react';
import { Target, Users, TrendingUp, CheckCircle, Clock, FileText, Calendar, BarChart, Zap, Shield, ArrowRight, Phone, Mail, ChevronDown, Briefcase, Search, UserCheck, ClipboardCheck } from 'lucide-react';
import Link from "next/link"
import {whyUs, faqs, models, metrics,deliverables, roles, workflow,benefits ,highlights, scope} from "../../data/services/rpo/index"
import { JSX } from 'react/jsx-runtime';
const RPOPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeMetric, setActiveMetric] = useState(0);
  const [counters, setCounters] = useState({ screened: 0, shared: 0, joined: 0 });
  const [activeModel, setActiveModel] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        screened: Math.min(prev.screened + 15, 500),
        shared: Math.min(prev.shared + 8, 250),
        joined: Math.min(prev.joined + 6, 180)
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const metricInterval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 7);
    }, 2500);
    return () => clearInterval(metricInterval);
  }, []);

 
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-4">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <span className="text-blue-300 text-sm font-medium">🚀 End-to-End Hiring Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              RPO for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                BPO Teams
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Scale hiring fast with a dedicated recruitment engine.
            </p>
            
            <p className="text-lg text-gray-400">
              Shadow Recruiter manages your complete recruitment lifecycle from sourcing to joining, so you can focus on operations while we deliver consistent closures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
               <Link
                href="https://wa.me/918483852326"
                target="_blank"
                rel="noopener noreferrer"
              >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2">
                Get an RPO Plan
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              </Link>
               <Link
                              href="https://wa.me/918483852326"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Request a Callback
              </button>
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300`}>
                    <item.icon className="mb-2 group-hover:scale-110 transition-transform" size={24} />
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Animated Illustration */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Recruitment Hub */}
              <div className="relative">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-pulse">
                  <Target size={64} />
                </div>
                
                {/* Animated Counter Ring */}
                <div className="absolute -inset-8">
                  <svg className="w-full h-full animate-spin-slow">
                    <circle cx="50%" cy="50%" r="80" fill="none" stroke="url(#rpoGradient)" strokeWidth="3" strokeDasharray="15,10" opacity="0.5" />
                    <defs>
                      <linearGradient id="rpoGradient">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Floating Process Icons */}
              {[
                { icon: Search, delay: 0, color: "from-blue-500 to-cyan-500" },
                { icon: ClipboardCheck, delay: 1, color: "from-green-500 to-emerald-500" },
                { icon: Calendar, delay: 2, color: "from-purple-500 to-pink-500" },
                { icon: FileText, delay: 3, color: "from-yellow-500 to-orange-500" },
                { icon: UserCheck, delay: 4, color: "from-red-500 to-pink-500" },
                { icon: CheckCircle, delay: 5, color: "from-indigo-500 to-purple-500" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}
                  style={{
                    animation: `float ${6 + idx}s ease-in-out infinite`,
                    animationDelay: `${item.delay * -1}s`,
                    transform: `rotate(${idx * 60}deg) translateX(180px) rotate(-${idx * 60}deg)`
                  }}
                >
                  <item.icon size={28} />
                </div>
              ))}

              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" strokeDasharray="10,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="30" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="50%" r="220" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" strokeDasharray="8,8">
                  <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(30,41,59,0.5)" />
          <path d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z" fill="rgba(30,41,59,0.8)" />
        </svg>
      </div>

      {/* What is RPO Section */}
      <section id="section-rpo" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">RPO</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">Recruitment Process Outsourcing</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                RPO means you outsource all or part of your recruitment process to a specialist team.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                For BPO hiring, it&apos;s the most effective way to handle high-volume requirements, maintain speed + quality, and keep a strong offer-to-join conversion.
              </p>
              <p className="text-lg text-blue-300 leading-relaxed font-medium">
                Shadow Recruiter works like your extended TA team, aligned with your SLAs, process needs, shifts, and ramp-up targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z" fill="rgba(30,41,59,0.5)" />
        </svg>
      </div>

      {/* Why Choose RPO Section */}
      <section id="section-why" className="py-20 px-4 md:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why BPO Teams Choose <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">RPO</span>
            </h2>
            <p className="text-xl text-gray-300">BPO hiring is not just finding candidates. It&apos;s about keeping a consistent funnel and controlling dropouts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(30,41,59,0.3)" />
        </svg>
      </div>

      {/* Scope Section */}
      <section id="section-scope" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Manage</span>
            </h2>
            <p className="text-xl text-gray-300">End-to-End Recruitment Scope</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {scope.map((item: { num: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; icon: React.ComponentType<any>; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; items: any[]; }, idx: React.Key | null | undefined) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon size={24} className="text-purple-400" />
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {item.items.map((subItem: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z" fill="rgba(30,41,59,0.5)" />
        </svg>
      </div>

      {/* Workflow Section */}
      <section id="section-workflow" className="py-20 px-4 md:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our RPO <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Workflow</span>
            </h2>
            <p className="text-xl text-gray-300">Step-by-step hiring excellence</p>
          </div>

          <div className="relative">
            {/* Connecting Wave Line */}
            <svg className="absolute left-0 md:left-1/2 top-0 w-1 md:w-full h-full -translate-x-1/2 hidden md:block" style={{ zIndex: 0 }}>
              <path
                d="M 600,0 Q 550,80 600,160 T 600,320 T 600,480 T 600,640"
                stroke="url(#workflowGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
              />
              <defs>
                <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-8 relative z-10">
              {workflow.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-500 hover:scale-105">
                      <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <step.icon size={28} className="text-cyan-400" />
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(30,41,59,0.5)" />
        </svg>
      </div>

      {/* Roles & Deliverables Section */}
      <section id="section-roles" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Roles */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Roles We <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Hire</span>
            </h2>
            <div className="space-y-3">
              {roles.map((role, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="text-lg">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What You <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get</span>
            </h2>
            <div className="space-y-3">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:translate-x-2">
                  <CheckCircle size={20} className="text-blue-400 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z" fill="rgba(30,41,59,0.3)" />
        </svg>
      </div>

      {/* Metrics Section */}
      <section id="section-metrics" className="py-20 px-4 md:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Performance</span> Metrics
            </h2>
            <p className="text-xl text-gray-300">Real numbers that matter</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 transition-all duration-500 ${
                  activeMetric === idx ? 'border-yellow-500 scale-110 shadow-2xl shadow-yellow-500/50' : 'border-white/10'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-4`}>
                  <metric.icon size={24} />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(30,41,59,0.5)" />
        </svg>
      </div>

      {/* Engagement Models Section */}
      <section id="section-models" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Engagement Models</span>
            </h2>
            <p className="text-xl text-gray-300">Choose what fits your hiring needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModel(idx)}
                className={`p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                  activeModel === idx
                    ? `bg-gradient-to-br ${model.color} border-white/50 scale-105 shadow-2xl`
                    : 'bg-slate-800/50 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="text-sm font-semibold text-gray-300 mb-2">{model.type}</div>
                <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                <div className="text-sm text-gray-300 mb-6 pb-6 border-b border-white/20">
                  <span className="font-semibold">Best for:</span> {model.best}
                </div>
                <ul className="space-y-3">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z" fill="rgba(30,41,59,0.3)" />
        </svg>
      </div>

      {/* Why Choose Us Section */}
      <section id="section-why-us" className="py-20 px-4 md:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Shadow Recruiter</span>
            </h2>
            <p className="text-xl text-gray-300">Built for BPO hiring challenges</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(30,41,59,0.5)" />
        </svg>
      </div>

      {/* FAQs Section */}
      <section id="section-faqs" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <span className="text-green-400 flex-shrink-0">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-300 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z" fill="rgba(30,41,59,0.3)" />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Target size={64} className="mx-auto text-blue-400 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Hiring?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how RPO can help you meet your hiring targets consistently.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
             <Link href="https://wa.me/918483852326"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2">
              Schedule a Call
              <Phone className="group-hover:rotate-12 transition-transform" size={20} />
            </button>
            </Link>

            <a href="mailto:hr@shadowrecruit.com">
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2">
              Email Us
              <Mail size={20} />
            </button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{counters.screened}</div>
              <div className="text-sm text-gray-400">Profiles Screened Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{counters.shared}</div>
              <div className="text-sm text-gray-400">Shortlists Shared</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">{counters.joined}</div>
              <div className="text-sm text-gray-400">Candidates Joined</div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RPOPage;