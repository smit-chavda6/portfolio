"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Background", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingRef = React.useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isScrollingRef.current) return;

      const sections = links.map(l => document.querySelector(l.href));
      let current = "";
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 250) {
            current = section.getAttribute("id") || "";
          }
        }
      });
      setActiveTab(current ? `#${current}` : "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setActiveTab(href);
    isScrollingRef.current = true;
    
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      
      // Re-enable scrollspy after smooth scroll finishes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#050505]/70 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div 
        className="text-xl font-black tracking-tighter text-white cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        SMIT CHAVDA.
      </div>
      
      <div className="hidden md:flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className={`relative px-7 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full ${
              activeTab === link.href 
                ? "text-white" 
                : "text-[#a1a1aa] hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            {activeTab === link.href && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 rounded-full z-0 shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-white/10 backdrop-blur-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
