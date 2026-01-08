"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconX, IconChevronDown, IconExternalLink } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "/" },
  { 
    name: "About",
    link: "/about",
    submenu: [
      { name: "Who  We Are", link: "/about/who-we-are" },
      { name: "Contact", link: "/contact" },
    ],
  },
  { name: "Services", link: "/services" },
  {name: "Certifications", link: "/certification"},
  {
    name: "ReservationKart.com",
    link: "https://reservationkart.com",
    external: true,
  },
];

// Fixed particle positions to avoid hydration mismatch
const particlePositions = [
  { left: 15, top: 25 },
  { left: 85, top: 65 },
  { left: 35, top: 80 },
  { left: 75, top: 15 },
  { left: 55, top: 95 },
  { left: 95, top: 35 },
  { left: 5, top: 75 },
  { left: 65, top: 45 },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add scroll listener to detect when user has scrolled
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsAboutDropdownOpen(false);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300  ${
        isScrolled 
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl" 
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950/50 to-slate-900 opacity-80" />
      
      {/* Subtle animated particles in navbar - only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                x: [0, (i % 2 === 0 ? 1 : -1) * 30],
                y: [0, (i % 3 === 0 ? 1 : -1) * 15],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto py-4 px-6 relative z-10">
        {/* Logo with hover effect */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Image
              src="/images/earthconnlogo1.jpeg"
              alt="Logo"
              width={120}
              height={120}
              className="h-20 w-20 rounded-xl shadow-lg ring-2 ring-blue-500/20 hover:ring-blue-400/40 transition-all duration-300"
              priority
              style={{
                backgroundColor: 'transparent'
              }}
            />
            <motion.div
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 hover:opacity-100 blur-sm"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        {/* Navigation Items */}
        <div className="flex space-x-8 text-base font-semibold items-center" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", letterSpacing: '0.5px' }}>
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative">
                <motion.button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                  className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50 font-semibold tracking-wide"
                  style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  <motion.div
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconChevronDown size={18} />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-slate-800/95 backdrop-blur-xl shadow-2xl border border-slate-700/50 overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            <Link
                              href={subItem.link}
                              onClick={handleItemClick}
                              className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div key={item.name}>
                {item.external ? (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50 font-semibold tracking-wide"
                    style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                    <IconExternalLink size={16} className="opacity-60" />
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.link}
                      onClick={handleItemClick}
                      className="text-slate-200 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-slate-800/50 block font-semibold tracking-wide"
                      style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            )
          )}
        </div>

        {/* CTA Button */}
        <div>
          <Link href="/contact">
            <motion.button
              className="relative px-6 py-3 text-sm font-bold text-white rounded-xl overflow-hidden group tracking-wider"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                fontFamily: "'Montserrat', 'Poppins', sans-serif",
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
              </span>
              
              {/* Shimmer effect - only on client */}
              {isClient && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              )}
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/images/earthconnlogo1.jpeg"
                alt="Logo"
                width={80}
                height={80}
                className="h-16 w-16 rounded-xl shadow-lg ring-2 ring-blue-500/20"
                priority
                style={{
                  backgroundColor: 'transparent'
                }}
              />
            </motion.div>
          </Link>
          
          <motion.button
            className="relative p-2 text-white rounded-lg hover:bg-slate-800/50 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 rounded-xl bg-slate-800/95 backdrop-blur-xl shadow-2xl border border-slate-700/50 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) =>
                    item.submenu ? (
                      <div key={item.name}>
                        <button
                          className="flex w-full items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-700/50 transition-colors text-slate-200 hover:text-white font-semibold tracking-wide"
                          style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                          onClick={() => setIsAboutDropdownOpen((prev) => !prev)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <motion.div
                            animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconChevronDown size={20} />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isAboutDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <motion.div
                                  key={subItem.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIndex * 0.05 }}
                                >
                                  <Link
                                    href={subItem.link}
                                    onClick={handleItemClick}
                                    className="block rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/30 transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div
                        key={item.name}
                        className="px-4 py-3"
                      >
                        {item.external ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors font-semibold tracking-wide"
                            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                          >
                            {item.name}
                            <IconExternalLink size={16} className="opacity-60" />
                          </a>
                        ) : (
                          <Link
                            href={item.link}
                            onClick={handleItemClick}
                            className="text-slate-200 hover:text-white transition-colors font-semibold block tracking-wide"
                            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    )
                  )}
                  
                  <div className="pt-4 mt-4 border-t border-slate-700/50">
                    <Link href="/contact" onClick={handleItemClick}>
                      <motion.button
                        className="w-full px-6 py-4 text-center font-bold text-white rounded-xl overflow-hidden relative group tracking-wider"
                        style={{
                          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                          fontFamily: "'Montserrat', 'Poppins', sans-serif",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-active:opacity-100"
                          transition={{ duration: 0.2 }}
                        />
                        <span className="relative z-10">Contact Us</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}