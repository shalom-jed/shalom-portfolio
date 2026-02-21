"use client";
import { useEffect, useState, useRef } from "react";
import { 
  Github, 
  Mail, 
  Shield, 
  BookOpen, 
  Database, 
  ArrowRight, 
  Code2, 
  Server, 
  Linkedin, 
  Cpu, 
  Globe, 
  Layout 
} from "lucide-react";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { projects } from "./data/projects";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Helper to pick icons for each project dynamically
  const getProjectIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('scam') || t.includes('guard')) return <Shield size={64} />;
    if (t.includes('dbms') || t.includes('database')) return <Database size={64} />;
    if (t.includes('hymn') || t.includes('book')) return <BookOpen size={64} />;
    if (t.includes('trash') || t.includes('smart')) return <Cpu size={64} />;
    if (t.includes('website')) return <Globe size={64} />;
    return <Layout size={64} />;
  };

  return (
    <>
      {/* Background & Interactive Elements */}
      <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="cursor-blob" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="mesh-gradient" />

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#222]">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-mono text-xl font-bold text-[var(--color-accent)]">SJ_</span>
          <ul className="flex gap-8 text-sm font-medium text-gray-400 hidden md:flex">
            <li><a href="#about" className="hover:text-white transition-colors cursor-none">ABOUT</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors cursor-none">EXPERIENCE</a></li>
            <li><a href="#education" className="hover:text-white transition-colors cursor-none">EDUCATION</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors cursor-none">PROJECTS</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors cursor-none">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <main className="font-sans pt-32">
        
        {/* TEXT-ONLY RESPONSIVE HERO SECTION */}
        <section className="min-h-[80vh] md:min-h-[90vh] relative flex items-center px-6 md:px-20 overflow-hidden py-20 md:py-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[15vw] font-black text-transparent opacity-5 pointer-events-none select-none" style={{ WebkitTextStroke: "2px white" }}>
            SWE
          </div>

          <div className="relative z-10 max-w-5xl mx-auto w-full text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-[var(--color-accent)] mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>Software Engineering Student & Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6 md:mb-8">
              <span className="block">Shalom</span>
              <span className="block text-[var(--color-accent)]">Jedidiah</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10 mx-auto md:mx-0">
              Building secure, community-driven systems. Specializing in full-stack development, database management, and creative digital solutions.
            </p>
            
            <div className="flex gap-4 md:gap-6 justify-center md:justify-start">
              <a href="#projects" className="bg-[var(--color-accent)] hover:bg-blue-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center gap-3 transition-transform hover:-translate-y-1 cursor-none text-sm md:text-base">
                View My Work <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 px-6 md:px-20 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="font-mono text-xs text-[var(--color-accent)] tracking-[0.2em] mb-4 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[var(--color-accent)]" /> ABOUT ME
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Bridging Logic & Creativity</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a second-year Computing undergraduate at NIBM, Colombo. My focus is on transforming complex requirements into functional, secure, and aesthetically pleasing systems.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                As a freelance developer and data administrator, I thrive on building technology that genuinely connects and serves communities.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full p-4 flex items-center gap-4 hover:border-[var(--color-accent)] transition-all cursor-none">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]"><Code2 size={24} /></div>
                <div>
                  <h4 className="font-bold text-white">Full-Stack Development</h4>
                  <p className="text-sm text-gray-500">React, Next.js, HTML/CSS/JS</p>
                </div>
              </div>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full p-4 flex items-center gap-4 hover:border-[var(--color-accent)] transition-all cursor-none">
                <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]"><Database size={24} /></div>
                <div>
                  <h4 className="font-bold text-white">Systems Engineering</h4>
                  <p className="text-sm text-gray-500">Java, Python, SQL, DBMS Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT TIMELINE SECTION */}
        <section id="experience" className="py-20 bg-[var(--color-surface)] relative z-10 border-y border-[var(--color-border)]">
          <div className="px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="font-mono text-xs text-[var(--color-accent)] tracking-[0.2em] mb-4 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[var(--color-accent)]" /> CAREER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">Experience</h2>
              <ExperienceTimeline category="experience" />
            </div>
            <div id="education">
              <div className="font-mono text-xs text-[var(--color-accent)] tracking-[0.2em] mb-4 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[var(--color-accent)]" /> ACADEMICS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">Education</h2>
              <ExperienceTimeline category="education" />
            </div>
          </div>
        </section>

        {/* DYNAMIC PROJECTS SECTION */}
        <section id="projects" className="py-32 relative z-10">
          <div className="px-6 md:px-20 mb-12 max-w-7xl mx-auto">
            <div className="font-mono text-xs text-[var(--color-accent)] tracking-[0.2em] mb-4 flex items-center gap-4">
              <div className="w-10 h-[1px] bg-[var(--color-accent)]" /> RECENT WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>

          <div className="projects-scroll" ref={scrollRef}>
            {projects.map((project) => (
              <div key={project.id} className="project-card bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[30px] p-8 hover:border-[var(--color-accent)]/50 transition-all group">
                <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-accent)]/20 to-black rounded-xl mb-8 flex items-center justify-center text-[var(--color-accent)]">
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {getProjectIcon(project.title)}
                  </div>
                </div>
                <span className="text-xs font-bold tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full mb-4 inline-block uppercase">
                  {project.tags[0] || "DEVELOPMENT"}
                </span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-accent)] font-bold cursor-none transition-all hover:gap-3">
                  View Source <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 bg-[var(--color-surface)] text-center relative z-10 border-t border-[var(--color-border)]">
          <div className="max-w-2xl mx-auto px-6">
            <div className="font-mono text-xs text-[var(--color-accent)] tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-[var(--color-accent)]" /> GET IN TOUCH <div className="w-10 h-[1px] bg-[var(--color-accent)]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let us Work Together</h2>
            <div className="flex justify-center gap-6 mb-12 mt-10">
              <a href="https://github.com/shalom-jed" target="_blank" className="w-16 h-16 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-all cursor-none">
                <Github size={24} />
              </a>
              <a href="mailto:shalomjedidiah339@gmail.com" className="w-16 h-16 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-all cursor-none">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/shalom-jed" target="_blank" className="w-16 h-16 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-all cursor-none">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">Designed & Built by Shalom Jedidiah © 2026</p>
          </div>
        </section>

      </main>
    </>
  );
}