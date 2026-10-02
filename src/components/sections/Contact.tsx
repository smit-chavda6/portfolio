import React from "react";
import AsciiWater from "../originkit/AsciiWater";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* ASCII Water Background */}
      <AsciiWater className="z-0 opacity-80" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-6">
        
        <div className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl max-w-3xl w-full text-center pointer-events-auto">
          
          <h2 className="text-sm uppercase tracking-[0.2em] bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep font-bold mb-4">Get In Touch</h2>
          
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Let's build something <br className="hidden md:block"/> <span className="bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">extraordinary.</span>
          </h3>
          
          <p className="text-lg text-[#a1a1aa] mb-12 max-w-xl mx-auto">
            Always up for interesting projects, collaborations, or just a chat about AI and tech. My inbox is open.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:smitchavda6756@gmail.com" 
              className="group relative px-8 py-4 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 hover:bg-[#0ea5e9]/20 hover:border-[#0ea5e9]/50 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Say Hello
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </a>
            
            <a 
              href="https://github.com/smit-chavda6" 
              target="_blank" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/smit-chavda6/" 
              target="_blank" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              LinkedIn
            </a>
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
