/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const ClientsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clients = [
    {
      name: "Aminfoweb",
      logo: "/images/client_logo/amp.png",
    },
    {
      name: "Credence",
      logo: "/images/client_logo/credence.png",
    },
    {
      name: "Bmap",
      logo: "/images/client_logo/bmap01.png",
    },
    {
      name: "Altruist",
      logo: "/images/client_logo/altruist.png",
    },
    {
      name: "Tech Mahindra",
      logo: "/images/client_logo/techmahindra.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
            <span className="text-blue-400 font-semibold">
              Our Recruitment Partners
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Trusted By Industry Leaders
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We provide exceptional talent acquisition and recruitment solutions
            for premier organizations across industries
          </p>
        </div>

        {/* Infinite Logo Carousel - Right to Left */}
        <div className="relative py-20">
          {/* Top gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div
              className="flex gap-16 items-center"
              style={{
                animation: "slideLeft 40s linear infinite",
                width: "fit-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...clients, ...clients, ...clients, ...clients].map(
                (client, idx) => (
                  <div key={idx} className="flex-shrink-0 group cursor-pointer">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

                      {/* Logo container */}
                      <div className="relative w-72 h-40 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 group-hover:border-blue-500/50 transition-all duration-500 flex items-center justify-center p-8 group-hover:scale-110 group-hover:shadow-2xl">
                        {/* Actual Logo Image */}
                        <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={200}
                            height={90}
                            className="object-contain opacity-90 group-hover:opacity-100 transition"
                          />
                        </div>

                        {/* Shine effect on hover */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            animation: "shimmer 2s infinite",
                            backgroundSize: "200% 100%",
                          }}
                        ></div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div
          className={`mt-24 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Recruitment Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👥",
                title: "Contract Staffing",
                desc: "Flexible hiring solutions for project-based needs",
              },
              {
                icon: "🎯",
                title: "Permanent Placement",
                desc: "Long-term talent acquisition for core positions",
              },
              {
                icon: "⚡",
                title: "IT Recruitment",
                desc: "Specialized tech talent sourcing and placement",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="h-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "500+", label: "Placements" },
            { number: "50+", label: "Clients" },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsShowcase;
