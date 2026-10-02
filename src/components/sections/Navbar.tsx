"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Super simple scrollspy to update active tab based on scroll position
      const sections = links.map(l => document.querySelector(l.href));
      let current = "";
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 200) {
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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
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
      
      <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleSmoothScroll(e, link.href)}
            className="relative px-6 py-2 text-sm font-medium text-white transition-colors"
          >
            {activeTab === link.href && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-indigo-600 rounded-full z-0 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
