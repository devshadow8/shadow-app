"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Phone,
  Mail,
  MessageSquare,
  Headphones,
  BarChart3,
  FileText,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Briefcase,
  HeadphonesIcon,
  Laptop,
  DollarSign,
  Award,
  Globe,
  Rocket,
  Star,
  CheckCheck,
} from "lucide-react";
import {
  roles,
  process,
  deliverables,
  benefits,
  engagementModels,
  metrics,
  faqs,
} from "../../data/services/index";

const BulkHiringPage = () => {
  const [showAllRoles, setShowAllRoles] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    company: "",
    roles: "",
    headcount: "",
    location: "",
    contact: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = () => {
    if (
      !formData.company ||
      !formData.roles ||
      !formData.headcount ||
      !formData.location ||
      !formData.contact
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you! We'll send you a hiring plan shortly.");
    setFormData({
      company: "",
      roles: "",
      headcount: "",
      location: "",
      contact: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden py-15">
      {/* Hero Section with Split Design */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20">
                <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span className="text-white">
                  Trusted by 100+ BPO Companies
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
                  Bulk Hiring
                </span>
                <br />
                <span className="text-white">Made Simple</span>
              </h1>

              <p className="text-xl text-blue-200 leading-relaxed">
                Hire{" "}
                <span className="text-yellow-300 font-bold">
                  10, 50, or 500
                </span>{" "}
                candidates in record time with our structured screening process
                that reduces dropouts by{" "}
                <span className="text-green-300 font-bold">60%</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/courses">
                  <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 flex items-center gap-2">
                    Get Hiring Plan
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                    Request Callback
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { num: "500+", label: "Placements/Month" },
                  { num: "85%", label: "Joining Ratio" },
                  { num: "7-15", label: "Days to Fill" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                  >
                    <div className="text-3xl font-black text-yellow-300">
                      {stat.num}
                    </div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Animated Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px]">
                {/* Floating Cards Animation */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl"
                    style={{
                      top: `${i * 15}%`,
                      left: `${i % 2 === 0 ? "0" : "40"}%`,
                      width: "280px",
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-white/30 rounded-full mb-2"></div>
                        <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                ))}

                {/* Pulse circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full animate-ping"></div>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
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
              transform: translateY(-20px) rotate(2deg);
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
        `}</style>
      </section>

      {/* What is Bulk Hiring */}
          <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
            {/* Icon */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                What is Bulk / Volume Hiring?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Bulk hiring means recruiting a large number of candidates in a
                short timeline, usually for customer support, sales,
                operations, and back-office processes. At{" "}
                <span className="font-bold text-yellow-300">
                  Shadow Recruiter
                </span>
                , we combine AI-powered sourcing, rapid screening, and strong
                follow-up so your hiring targets close faster with better
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Roles - Modern Grid */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Roles We Hire For
            </h2>
            <p className="text-xl text-gray-400">
              Specialized recruitment across all BPO functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.slice(0, showAllRoles ? roles.length : 6).map((role, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-xl">{role.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {!showAllRoles && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllRoles(true)}
                className="text-purple-400 font-bold hover:text-purple-300 flex items-center gap-2 mx-auto group"
              >
                View all roles
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Process - Unique Wave Design */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-blue-200">
              Seven structured steps to success
            </p>
          </div>

          {/* Wave SVG Path */}
          <div className="relative">
            <svg
              className="w-full h-64 mb-12 hidden lg:block"
              viewBox="0 0 1200 200"
            >
              <path
                d="M 0 100 Q 150 20, 300 100 T 600 100 T 900 100 T 1200 100"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {process.map((_, i) => {
                const xRaw = (i * 1200) / (process.length - 1);
                const yRaw = 100 + Math.sin((i * Math.PI) / 3) * 80;

                // ✅ Round to avoid hydration mismatch
                const x = Number(xRaw.toFixed(2));
                const y = Number(yRaw.toFixed(2));

                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={activeStep === i ? 20 : 12}
                    fill={activeStep === i ? "#FBBF24" : "#8B5CF6"}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            <div className="grid lg:grid-cols-7 gap-6">
              {process.map((step, i) => (
                <div
                  key={i}
                  className={`relative transition-all duration-500 transform ${
                    activeStep === i ? "scale-110 -translate-y-4" : "scale-100"
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br backdrop-blur-lg rounded-2xl p-6 border-2 transition-all ${
                      activeStep === i
                        ? "from-yellow-500/20 to-orange-500/20 border-yellow-400 shadow-2xl shadow-yellow-500/30"
                        : "from-white/10 to-white/5 border-white/20"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl mb-4 mx-auto transition-all ${
                        activeStep === i
                          ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg"
                          : "bg-gradient-to-br from-purple-500 to-blue-500 text-white"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-white text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-300 text-center">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Checkbox Style */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            What You Get
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all hover:shadow-xl hover:shadow-green-500/20"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-200 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Card Grid */}
      <section className="relative py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Why Shadow Recruiter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Engagement Models
            </h2>
            <p className="text-xl text-gray-400">Choose what fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/10 hover:border-purple-500 transition-all hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105"
              >
                <div className="absolute -top-4 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-black shadow-lg">
                  {model.highlight}
                </div>
                <h3 className="font-black text-3xl text-white mb-4 mt-6">
                  {model.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            Metrics We Track
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-yellow-400 hover:bg-white/20 transition-all hover:shadow-xl hover:shadow-yellow-500/20 transform hover:-translate-y-2"
              >
                <BarChart3 className="w-10 h-10 text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white font-bold text-lg">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-white text-center mb-16">
            FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-white text-left text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}
                  >
                    <ChevronDown className="w-6 h-6 text-purple-400" />
                  </div>
                </button>
                {expandedFaq === i && (
                  <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-6">
                <Rocket className="w-5 h-5 text-yellow-300" />
                <span className="text-yellow-300 font-bold">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-5xl font-black text-white mb-4">
                Need Bulk Hiring This Month?
              </h2>
              <p className="text-xl text-gray-300">
                Share your requirements. Get a custom hiring plan in 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Role(s) - e.g., Customer Support"
                  value={formData.roles}
                  onChange={(e) =>
                    setFormData({ ...formData, roles: e.target.value })
                  }
                  className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Headcount - e.g., 50"
                  value={formData.headcount}
                  onChange={(e) =>
                    setFormData({ ...formData, headcount: e.target.value })
                  }
                  className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Location - e.g., Mumbai"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
                />
              </div>

              <input
                type="tel"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-5 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-3 group"
              >
                Get Your Custom Hiring Plan
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="text-center text-gray-400 text-sm">
                <Shield className="w-4 h-4 inline mr-1" />
                100% Free Consultation • No Commitment Required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Bar */}
      <section className="relative py-12 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">
                Ready to scale your team?
              </h3>
              <p className="text-gray-400">
                Let&apos;s discuss your hiring needs today
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button className="bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BulkHiringPage;
