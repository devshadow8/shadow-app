"use client";
import React, { useState, useEffect } from 'react';
import { X, Settings, Cookie, Shield, Eye, Users } from 'lucide-react';

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('enter');

  useEffect(() => {
    // Simulate the cookie banner appearing after page load
    const timer = setTimeout(() => {
      setAnimationPhase('visible');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    setAnimationPhase('exit');
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDeclineAll = () => {
    setAnimationPhase('exit');
    setTimeout(() => setIsVisible(false), 300);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none pb-8">
      {/* Cookie Consent Card */}
      <div 
        className={`
          relative max-w-md w-full mx-4 pointer-events-auto
          bg-white/95 backdrop-blur-xl 
          border-2 border-indigo-200
          rounded-3xl shadow-2xl overflow-hidden
          transform transition-all duration-700 ease-out
          ${animationPhase === 'enter' ? 'translate-y-full opacity-0' : 
            animationPhase === 'visible' ? 'translate-y-0 opacity-100' :
            'translate-y-full opacity-0'}
        `}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl from-pink-300 to-orange-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full blur-sm" />

        {/* Header */}
        <div className="relative p-6 pb-3">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Cookie Consent</h3>
                <p className="text-xs text-indigo-600 mt-0.5 font-medium">Your privacy matters</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 hover:bg-gray-200 rounded-full transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            We use cookies to enhance your browsing experience and analyze our traffic. 
            Choose your preferences below.
          </p>
        </div>

        {/* Details Section */}
        <div className={`
          relative overflow-hidden transition-all duration-500 ease-out
          ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-6 pb-4 space-y-3">
            <div className="grid gap-3">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                <Shield className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Essential</p>
                  <p className="text-xs text-gray-600">Always active</p>
                </div>
                <div className="w-10 h-5 bg-green-500 rounded-full relative shadow-inner">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-md" />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl">
                <Eye className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Analytics</p>
                  <p className="text-xs text-gray-600">Usage statistics</p>
                </div>
                <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer shadow-inner">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform shadow-md" />
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl">
                <Users className="w-5 h-5 text-purple-600" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Marketing</p>
                  <p className="text-xs text-gray-600">Personalized ads</p>
                </div>
                <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer shadow-inner">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="relative p-6 pt-2">
          <div className="flex flex-col gap-3">
            {/* Toggle Details Button */}
            <button
              onClick={toggleDetails}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all duration-200 border border-indigo-200"
            >
              <Settings className="w-4 h-4" />
              {showDetails ? 'Hide Details' : 'Customize Preferences'}
            </button>

            {/* Main Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleDeclineAll}
                className="flex-1 py-3 px-4 text-sm font-bold text-gray-700 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-xl transition-all duration-200 transform hover:scale-105 border border-gray-300"
              >
                Decline All
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;