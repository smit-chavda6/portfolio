import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Loader from "@/components/sections/Loader";
import Navbar from "@/components/sections/Navbar";
import CustomCursor from "@/components/sections/CustomCursor";
import ScrollProgress from "@/components/sections/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-indigo-500/30 selection:text-white">
      <ScrollProgress />
      <CustomCursor />
      <Loader />
      
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
