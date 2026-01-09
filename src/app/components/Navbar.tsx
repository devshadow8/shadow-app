"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconX } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about-us" },
  { name: "Services", link: "/services" },
  { name: "Courses", link: "/certification" },
  // { name: "Gallery", link: "/gallery" },
];

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl"
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950/50 to-slate-900 opacity-80" />

      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{ left: `${p.left}%`, top: `${p.top}%` }}
              animate={{
                x: [0, i % 2 === 0 ? 30 : -30],
                y: [0, i % 3 === 0 ? 15 : -15],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + (i % 3),
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 py-4 relative z-10">
        <Link href="/">
          <Image
            src="/images/shadow_logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="h-20 w-20 rounded-xl shadow-lg ring-2 ring-blue-500/20"
            priority
          />
        </Link>

        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-slate-200 hover:text-white font-semibold px-3 py-2 rounded-lg hover:bg-slate-800/50 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            }}
          >
            Contact Us
          </motion.button>
        </Link>
      </div>

      {/* Mobile */}
      <div className="lg:hidden px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/shadow_logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-xl"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <IconX size={28} /> : <IconMenu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 bg-slate-800/95 rounded-xl p-4 space-y-3"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={closeMobileMenu}
                  className="block text-slate-200 hover:text-white font-semibold"
                >
                  {item.name}
                </Link>
              ))}

              <Link href="/contact" onClick={closeMobileMenu}>
                <button className="w-full mt-4 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
