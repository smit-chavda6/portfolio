"use client"

import React from "react";
import { motion } from "motion/react";
import ReflectShader from "../originkit/ReflectShader";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-12 md:pt-20">
      
      {/* Reflect Shader Background */}
      <div className="absolute inset-0 z-0">
        <ReflectShader 
          background="#000000"
          tint="#6366f1"
          speed={40}
          brightness={120}
          thickness={15}
          chromatic={8}
          bandGap={15}
          zoom={250}
          hover={120}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl w-full">
        <h1 className="text-4xl sm:text-[2.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold tracking-tight text-white mb-4 md:mb-6 leading-[1.2] md:leading-[1.1] text-center">
          Building <br className="sm:hidden" /><span className="bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep font-extrabold drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">Generative-AI</span> Experiences
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-[#a1a1aa] text-center mb-10 md:mb-12 max-w-full px-2 sm:px-0 sm:max-w-[85%] leading-relaxed font-light">
          An AI Engineer building generative-AI features, multi-provider LLM gateways and automated pipelines for modern web products.
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full">
          <motion.a 
            href="#projects" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative px-8 py-3.5 bg-[#6366f1] text-white rounded-full font-semibold text-[15px] overflow-hidden"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-[#6366f1] blur-md opacity-70 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300" />
            
            {/* Shine sweep effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            
            <span className="relative z-10">View My Work</span>
          </motion.a>

          <motion.a 
            href="/Smit_Chavda_Resume_main.pdf" 
            target="_blank" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative px-8 py-3.5 bg-[#111111] border border-[#333333] hover:bg-[#1a1a1a] hover:border-[#6366f1]/50 text-white rounded-full font-medium text-[15px] overflow-hidden flex items-center gap-2"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-[#6366f1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10 flex items-center gap-2">
              Download CV
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors group-hover:translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
      
    </section>
  );
}
