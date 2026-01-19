/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Eye,
  Lightbulb,
  Sparkles,
  Rocket,
  BookOpen,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { stats, values, team } from "../data/aboutData/data";
const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [floatingElements, setFloatingElements] = useState<
    Array<{ x: number; y: number; delay: number; duration: number }>
  >([]);
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Floating elements for background
    const elements = [...Array(15)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setFloatingElements(elements);

    // Particles for hero section
    const particleData = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setParticles(particleData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden py-24">
      {/* Enhanced Hero Section with Split Layout */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {floatingElements.map((elem, i) => (
            <div
              key={`float-${i}`}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                animation: `float ${elem.duration}s ease-in-out infinite`,
                animationDelay: `${elem.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className="space-y-6 transform transition-all duration-1000"
              style={{
                transform: `translateX(${Math.max(-50, -scrollY * 0.1)}px)`,
                opacity: Math.max(0.5, 1 - scrollY * 0.001),
              }}
            >
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-4">
                <span className="text-blue-300 font-semibold">
                  ✨ Premium Training Institute
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-white">Career Journey</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Empowering professionals with cutting-edge skills, personalized
                mentorship, and industry-ready training programs.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" passHref>
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    Get Started
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/" passHref>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { label: "Students", value: "5000+" },
                  { label: "Success Rate", value: "95%" },
                  { label: "Partners", value: "50+" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Animated Illustration */}
            <div
              className="relative h-[600px] transform transition-all duration-1000"
              style={{
                transform: `translateX(${Math.min(50, scrollY * 0.1)}px)`,
                opacity: Math.max(0.5, 1 - scrollY * 0.001),
              }}
            >
              {/* Main Circle with Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {/* Center Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />

                  {/* Rotating Rings */}
                  <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin-slow" />
                  <div className="absolute inset-8 border-2 border-purple-400/30 rounded-full animate-spin-reverse" />
                  <div className="absolute inset-16 border-2 border-pink-400/30 rounded-full animate-spin-slow" />

                  {/* Floating Icons */}
                  {[
                    {
                      Icon: BookOpen,
                      position: "top-0 left-1/2 -translate-x-1/2",
                      color: "from-blue-400 to-cyan-400",
                      delay: "0s",
                    },
                    {
                      Icon: Trophy,
                      position: "top-1/4 right-0",
                      color: "from-yellow-400 to-orange-400",
                      delay: "0.5s",
                    },
                    {
                      Icon: Users,
                      position: "bottom-1/4 right-0",
                      color: "from-purple-400 to-pink-400",
                      delay: "1s",
                    },
                    {
                      Icon: Target,
                      position: "bottom-0 left-1/2 -translate-x-1/2",
                      color: "from-green-400 to-emerald-400",
                      delay: "1.5s",
                    },
                    {
                      Icon: Sparkles,
                      position: "bottom-1/4 left-0",
                      color: "from-pink-400 to-rose-400",
                      delay: "2s",
                    },
                    {
                      Icon: Lightbulb,
                      position: "top-1/4 left-0",
                      color: "from-yellow-400 to-amber-400",
                      delay: "2.5s",
                    },
                  ].map(({ Icon, position, color, delay }, i) => (
                    <div
                      key={`icon-${i}`}
                      className={`absolute ${position} w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform`}
                      style={{
                        animation: `float 3s ease-in-out infinite`,
                        animationDelay: delay,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  ))}

                  {/* Center Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform">
                      <Rocket className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Particles - FIXED */}
              {particles.map((particle, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `ping ${particle.duration}s ease-in-out infinite`,
                    animationDelay: `${particle.delay}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Story Section with Slide Animation */}
      <div className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-500"
            style={{
              animation: "slideInLeft 1s ease-out",
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Story
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At Shadow Recruiter, we help companies hire smarter, faster, and
              better. As a modern recruitment agency in Pune, we connect the
              right talent with the right opportunities, whether you&apos;re a
              startup, a growing enterprise, or an established organization.
              <p className="text-xl text-gray-300 leading-relaxed">
                Our recruitment approach blends industry expertise, human
                insight, and data-driven hiring to ensure every placement adds
                real value. Our recruitment consultants work closely with
                employers to understand job roles, company culture, and future
                goals, helping us recommend candidates who are both skilled and
                culturally aligned.
              </p>
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Shadow Recruiters is a premium Training & Development Institute
              based in Pune, dedicated to building communication, confidence,
              personality, interview skills, and corporate readiness. 
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision with Slide Effects */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div
            className="group relative"
            style={{ animation: "slideInLeft 1s ease-out" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-10 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 h-full transform hover:-translate-y-2">
              <Target className="w-16 h-16 mb-6 text-blue-400" />
              <h3 className="text-4xl font-bold mb-4 text-blue-300">
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower individuals with the skills and confidence needed to
                excel in their careers through personalized training and
                mentorship.
              </p>
            </div>
          </div>

          <div
            className="group relative"
            style={{ animation: "slideInRight 1s ease-out" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 h-full transform hover:-translate-y-2">
              <Eye className="w-16 h-16 mb-6 text-purple-400" />
              <h3 className="text-4xl font-bold mb-4 text-purple-300">
                Our Vision
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the leading institute for career development and
                personality enhancement, recognized for transforming lives and
                creating successful professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Counter Animation */}
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
                style={{
                  animation: `slideInUp 0.8s ease-out ${i * 0.1}s backwards`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 text-center transform hover:-translate-y-2 hover:rotate-3">
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

      {/* Core Values with Stagger Animation */}
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
                style={{
                  animation: `fadeInScale 0.8s ease-out ${i * 0.15}s backwards`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full transform hover:-translate-y-2 hover:rotate-1">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}
                  >
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
            The dedicated professionals behind Shadow Recruiter&apos;s success
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative"
                style={{
                  animation: `slideInUp 0.8s ease-out ${i * 0.2}s backwards`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-white/20 transform group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-4xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-2">
                    {member.name}
                  </h3>
                  <p
                    className={`text-center mb-4 font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                  >
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {member.desc}
                  </p>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-16 border border-white/20">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
              <h2 className="text-5xl font-bold mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of successful professionals who started their
                journey with Shadow Recruiters
              </p>
              <Link href="/courses" passHref>
                <button className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
                  Explore Our Courses
                  <Rocket className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
