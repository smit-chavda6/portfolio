"use client";

import React from "react";
import AsciiWater from "../originkit/AsciiWater";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-32">
      
      {/* ASCII Water Background */}
      <AsciiWater className="z-0 opacity-80" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-6 max-w-4xl mx-auto">
        
        <div className="bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[2.5rem] shadow-2xl w-full text-center pointer-events-auto">
          
          <h2 className="text-sm uppercase tracking-[0.2em] bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep font-bold mb-4">Get In Touch</h2>
          
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Let's build something <br className="hidden md:block"/> <span className="bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">extraordinary.</span>
          </h3>
          
          <p className="text-lg text-[#a1a1aa] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I'm currently looking for AI engineering opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll get back to you.
          </p>
          
          {/* Small Pill Buttons Grid */}
          <div className="flex flex-col items-center gap-4">
            
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {/* Email */}
              <motion.a 
                href="mailto:smitchavda6756@gmail.com" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-[#111111] border border-[#333333] hover:border-[#6366f1]/50 text-white rounded-full font-medium text-sm flex items-center gap-3 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[#6366f1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#6366f1] transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="relative z-10">smitchavda6756@gmail.com</span>
              </motion.a>

              {/* Phone */}
              <motion.a 
                href="tel:+918780989600" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-[#111111] border border-[#333333] hover:border-[#c084fc]/50 text-white rounded-full font-medium text-sm flex items-center gap-3 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#c084fc] transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="relative z-10">+91 87809 89600</span>
              </motion.a>

              {/* Location */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="group relative px-6 py-3 bg-[#111111] border border-[#333333] hover:border-[#38bdf8]/50 text-white rounded-full font-medium text-sm flex items-center gap-3 overflow-hidden cursor-default shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[#38bdf8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#38bdf8] transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="relative z-10">Bhavnagar, Gujarat</span>
              </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 w-full">
              {/* LinkedIn */}
              <motion.a 
                href="https://www.linkedin.com/in/smit-chavda6/" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-[#111111] border border-[#333333] hover:border-[#0077b5]/50 text-white rounded-full font-medium text-sm flex items-center gap-3 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[#0077b5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#0077b5] transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span className="relative z-10">LinkedIn</span>
              </motion.a>

              {/* GitHub */}
              <motion.a 
                href="https://github.com/smit-chavda6" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-[#111111] border border-[#333333] hover:border-white/50 text-white rounded-full font-medium text-sm flex items-center gap-3 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-4 h-4 text-[#a1a1aa] group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                <span className="relative z-10">GitHub</span>
              </motion.a>
            </div>
            
          </div>
        </div>

      </div>
      
      {/* Footer pinned at bottom */}
      <footer className="absolute bottom-6 w-full text-center text-[#666666] text-xs font-mono">
        &copy; {new Date().getFullYear()} Smit Chavda. All rights reserved.
      </footer>
    </section>
  );
}
