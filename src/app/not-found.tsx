"use client"

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import CustomCursor from "@/components/sections/CustomCursor";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-indigo-500/30 selection:text-white flex flex-col items-center justify-center overflow-hidden">
      <CustomCursor />
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 rounded-[100%] blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl md:text-[12rem] font-black bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(99,102,241,0.5)] mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6"
        >
          Entity Not Found
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#a1a1aa] mb-12 max-w-md mx-auto"
        >
          The page or resource you are looking for has either been moved, deleted, or never existed in this dimension.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-[#6366f1] text-white rounded-full font-semibold text-[15px] overflow-hidden inline-flex items-center"
            >
              <div className="absolute inset-0 rounded-full bg-[#6366f1] blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300" />
              <div className="absolute inset-0 -translate-x-full group-hover:animate-text-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to Base
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
