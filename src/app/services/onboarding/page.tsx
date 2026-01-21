"use client";
import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Users,
  FileText,
  Calendar,
  TrendingUp,
  Clock,
  MapPin,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import {
  faqs,
  dropoutSystem,
  roles,
  steps,
  deliverables,
  highlights,
} from "../../data/services/onboardig/index";
import Link from "next/link";
const OnboardingPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [stats, setStats] = useState({ selected: 0, joined: 0, ratio: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        selected: Math.min(prev.selected + 3, 100),
        joined: Math.min(prev.joined + 2.7, 90),
        ratio: Math.min(prev.ratio + 0.9, 90),
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden py-12">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in px-4">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <span className="text-blue-300 text-sm font-medium">
                🎯 Onboarding Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Onboarding Support for{" "}
              {/* <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                BPO Teams
              </span> */}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Reduce offer dropouts. Improve joining ratio.
            </p>

            <p className="text-lg text-gray-400">
              Shadow Recruiter helps you convert selected candidates into
              confirmed joiners with structured follow-ups, documentation
              support, and Day-1 coordination.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/918483852326"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2">
                  Request a Callback
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </Link>
              <Link
                href="https://wa.me/918483852326"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2">
                  Get Your Onboarding Plan
                  {/* <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  /> */}
                </button>
              </Link>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-20 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300`}
                  >
                    <item.icon
                      className="mb-2 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Animated Illustration */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Hub */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-pulse">
                <Users size={48} />
              </div>

              {/* Orbiting Elements */}
              {[0, 1, 2, 3, 4, 5].map((idx) => (
                <div
                  key={idx}
                  className="absolute w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-orbit"
                  style={{
                    animation: `orbit ${8 + idx}s linear infinite`,
                    animationDelay: `${idx * -1.3}s`,
                    transform: `rotate(${idx * 60}deg) translateX(150px) rotate(-${idx * 60}deg)`,
                  }}
                >
                  <CheckCircle size={32} />
                </div>
              ))}

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ animation: "spin 20s linear infinite" }}
              >
                <circle
                  cx="50%"
                  cy="50%"
                  r="150"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
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
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(30,41,59,0.5)"
          />
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="rgba(30,41,59,0.8)"
          />
        </svg>
      </div>

      {/* Problem + Solution Section */}
      <section id="section-problem" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Onboarding Support{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              There is no real challenge in BPO hiring, the challenge is
              offer-to-join dropouts.{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">
                The Problem
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Candidates back out at the last moment due to shift, location,
                salary clarity, documentation issues, or better offer.
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">
                Our Solution
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Shadow Recruiter&apos;s Onboarding Support keeps candidates
                engaged after selection and ensures they join on time with
                proper documentation and clear expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z"
            fill="rgba(30,41,59,0.5)"
          />
        </svg>
      </div>

      {/* What We Do Section */}
      <section
        id="section-deliverables"
        className="py-20 px-4 md:px-8 bg-slate-800/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Do
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              We act like an extended HR/TA onboarding team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(30,41,59,0.3)"
          />
        </svg>
      </div>

      {/* Dropout Control System */}
      <section id="section-system" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Dropout-Control
              </span>{" "}
              System
            </h2>
            <p className="text-xl text-gray-300">
              A simple but effective system that improves joining ratio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dropoutSystem.map((system, idx) => (
              <div key={idx} className="relative">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {system.num}
                    </div>
                    <h3 className="text-2xl font-bold">{system.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {system.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <CheckCircle
                          size={20}
                          className="text-cyan-400 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < dropoutSystem.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z"
            fill="rgba(30,41,59,0.5)"
          />
        </svg>
      </div>

      {/* Process Steps */}
      <section
        id="section-process"
        className="py-20 px-4 md:px-8 bg-slate-800/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Onboarding{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300">Step-by-step excellence</p>
          </div>

          <div className="relative">
            {/* Connecting Wave Line */}
            <svg
              className="absolute left-0 md:left-1/2 top-0 w-1 md:w-full h-full -translate-x-1/2 hidden md:block"
              style={{ zIndex: 0 }}
            >
              <path
                d="M 600,0 Q 550,100 600,200 T 600,400 T 600,600 T 600,800"
                stroke="url(#stepGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
              />
              <defs>
                <linearGradient
                  id="stepGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-8 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div
                      className={`inline-block p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 ${activeStep === idx ? "border-purple-500 scale-105" : "border-purple-500/20"} transition-all duration-500 hover:scale-105`}
                    >
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>

                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${activeStep === idx ? "bg-gradient-to-br from-purple-500 to-pink-500 scale-125 shadow-lg shadow-purple-500/50" : "bg-slate-700"}`}
                    >
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
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(30,41,59,0.5)"
          />
        </svg>
      </div>

      {/* Roles & Reporting Section */}
      <section id="section-roles" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Roles */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Roles We{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
            <div className="space-y-3">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:translate-x-2"
                >
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-lg">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reporting Dashboard Preview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Reporting You{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get
              </span>
            </h2>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Selected</span>
                  <span className="text-3xl font-bold text-blue-400">
                    {Math.round(stats.selected)}
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${stats.selected}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Confirmed Joined</span>
                  <span className="text-3xl font-bold text-green-400">
                    {Math.round(stats.joined)}
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${stats.joined}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Joining Ratio</span>
                  <span className="text-3xl font-bold text-purple-400">
                    {Math.round(stats.ratio)}%
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${stats.ratio}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,100 600,60 T1200,60 L1200,0 L0,0 Z"
            fill="rgba(30,41,59,0.3)"
          />
        </svg>
      </div>

      {/* FAQ Section */}
      <section id="section-faq" className="py-20 px-4 md:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
              >
                <summary className="cursor-pointer text-xl font-bold flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-300 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to improve your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              joining ratio
            </span>{" "}
            this month?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Share your headcount, joining date, and process details. We&apos;ll
            set up a simple onboarding plan and daily tracking.
          </p>

          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="px-6 py-4 rounded-xl bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Role"
                className="px-6 py-4 rounded-xl bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Headcount"
                className="px-6 py-4 rounded-xl bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Location"
                className="px-6 py-4 rounded-xl bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 outline-none transition-all"
              />
              <input
                type="date"
                placeholder="Joining Date"
                className="px-6 py-4 rounded-xl bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="px-6 py-4 rounded-xl bg-slate-800/50 border border-blue-500/30 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <Link
              href="https://wa.me/918483852326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2"
              >
                Get Your Onboarding Plan
                <ArrowRight size={24} />
              </button>
            </Link>
          </form>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-blue-400" />
              <span>+91 8483852326</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-blue-400" />
              <span>hr@shadowrecruiter.com</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(150px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(150px) rotate(-360deg);
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
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default OnboardingPage;
