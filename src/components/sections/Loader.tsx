"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const text = "SMIT CHAVDA".split("");

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.8 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Ribbon Glow Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen pointer-events-none">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-[120vw] md:w-[800px] h-[200px] bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-pink-600/40 blur-[80px] rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.5, 1] }} 
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute w-[100vw] md:w-[600px] h-[300px] bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-indigo-600/30 blur-[100px] rounded-full"
            />
          </div>

          <div className="relative z-10 flex space-x-1 md:space-x-2">
            {text.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ 
                  opacity: 0, 
                  filter: "blur(12px)", 
                  y: -60, 
                  scale: 1.5,
                  transition: { duration: 0.6, delay: i * 0.05, ease: "easeOut" } 
                }}
                className="text-3xl md:text-6xl font-bold tracking-[0.2em] inline-block bg-gradient-to-r from-white via-indigo-200 to-white animate-text-sweep drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
