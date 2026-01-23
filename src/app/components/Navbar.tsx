/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu, IconX, IconChevronDown } from "@tabler/icons-react";

const servicesDropdown = [
  { name: "Bulk / Volume Hiring", link: "/services/bulk_hiring" },
  { name: "RPO (End-to-End Hiring)", link: "/services/rpo" },
  { name: "Onboarding Support", link: "/services/onboarding" },
];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about-us" },
  { name: "Services", link: "/services", dropdown: servicesDropdown },
  { name: "Courses", link: "/courses" },
  { name: "Gallery", link: "/gallery" },
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

const isHome = (href: string) => href === "/";

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Desktop dropdown state
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Mobile dropdown state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll(); // initial
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl"
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-blue-950/20 to-slate-900/40" />

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
        {/* Home should NOT open in new tab */}
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

        <div className="flex space-x-8 items-center">
          {navItems.map((item) => {
            const newTab = !isHome(item.link);

            if (item.dropdown) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    type="button"
                    className="text-slate-200 hover:text-white font-semibold px-3 py-2 rounded-lg hover:bg-slate-800/50 transition flex items-center gap-1"
                  >
                    {item.name}
                    <IconChevronDown
                      size={18}
                      className={`transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-2 w-64 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          <div className="h-px bg-slate-700/50 my-2" />

                          {/* Dropdown items should open in new tab */}
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.link}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                className="text-slate-200 hover:text-white font-semibold px-3 py-2 rounded-lg hover:bg-slate-800/50 transition"
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact"
        //  target="_blank" 
         rel="noopener noreferrer">
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
          {/* Home should NOT open in new tab */}
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
            aria-label="Toggle menu"
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
              {navItems.map((item) => {
                const newTab = !isHome(item.link);

                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-2">
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between text-slate-200 hover:text-white font-semibold"
                      >
                        <span>{item.name}</span>
                        <IconChevronDown
                          size={18}
                          className={`transition-transform ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-3 space-y-2 overflow-hidden"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="block text-slate-300 hover:text-white"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    target={newTab ? "_blank" : undefined}
                    rel={newTab ? "noopener noreferrer" : undefined}
                    onClick={closeMobileMenu}
                    className="block text-slate-200 hover:text-white font-semibold"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                // target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
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
