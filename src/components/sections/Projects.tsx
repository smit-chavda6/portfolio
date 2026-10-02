import React from "react";
import ShaderGroupSwitcher from "../originkit/ShaderGroupSwitcher";

const projects = [
  {
    title: "InferMesh",
    category: "LLM Gateway",
    description: "Multi-provider LLM gateway unifying OpenAI, Anthropic, and Gemini. Features pgvector semantic caching and a React 19 observability dashboard.",
    tech: ["FastAPI", "React 19", "PostgreSQL", "Redis", "Docker"]
  },
  {
    title: "ContextOS",
    category: "Browser Extension",
    description: "AI context-persistence extension bridging session states across ChatGPT, Claude, and DeepSeek with client-side, in-browser vector search.",
    tech: ["React", "Vite", "Chrome MV3", "Vector Search"]
  },
  {
    title: "ManProTech",
    category: "Full-Stack CMS",
    description: "Production React SPA with a custom PHP/MySQL backend, featuring a full admin CMS, custom auth, and server-side injected SEO tags.",
    tech: ["React 18", "PHP 8", "MySQL", "Tailwind"]
  },
  {
    title: "Home Decor Furniture",
    category: "E-Commerce + AI",
    description: "Full-stack e-commerce system featuring an AI-powered Gemini chatbot with intelligent caching and automated n8n order workflows.",
    tech: ["Node.js", "MongoDB", "Gemini API", "n8n"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#020202] py-20 md:py-32 flex flex-col items-center">
      <div className="absolute inset-0 z-0">
        <ShaderGroupSwitcher 
          background="#020202"
          tint="#6366f1"
          speed={40}
          brightness={70}
          thickness={15}
          chromatic={8}
          zoom={250}
          hover={120}
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="text-center mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#6366f1] font-semibold mb-4">Selected Work</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-[#6366f1] via-[#c084fc] to-[#6366f1] animate-text-sweep drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]">Featured Projects</h3>
          <p className="text-lg md:text-xl text-neutral-400 px-4 md:px-0">Four builds across LLM infrastructure, browser tooling and full-stack commerce.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm md:backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] md:text-xs font-medium text-indigo-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-indigo-300 transition-colors">{project.title}</h4>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-6">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="bg-indigo-500/20 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                  <a href="https://github.com/smit-chavda6" target="_blank" className="flex items-center">
                    <span>View on GitHub</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
