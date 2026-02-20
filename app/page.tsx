"use client";
import { useEffect, useState, useRef } from "react";
import { Github, Mail, Shield, BookOpen, Database, ArrowRight, Code2, Server, Terminal, Linkedin } from "lucide-react";

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

  return (
    <>
      <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="cursor-blob" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="mesh-gradient" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-mono text-xl font-bold text-accent">SJ_</span>
          <ul className="flex gap-8 text-sm font-medium text-gray-400 hidden md:flex">
            <li className="hover:text-white transition-colors"><a href="#about" className="cursor-none">ABOUT</a></li>
            <li className="hover:text-white transition-colors"><a href="#projects" className="cursor-none">PROJECTS</a></li>
            <li className="hover:text-white transition-colors"><a href="#skills" className="cursor-none">SKILLS</a></li>
            <li className="hover:text-white transition-colors"><a href="#contact" className="cursor-none">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <main className="font-sans pt-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] relative flex items-center px-6 md:px-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-transparent opacity-5 pointer-events-none select-none" style={{ WebkitTextStroke: "2px white" }}>
            SWE
          </div>
          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 font-mono text-sm text-accent mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Software Engineering Student & Dev</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              <span className="block">Shalom</span>
              <span className="block bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                Jedidiah
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Building secure, community-driven systems. Specializing in full-stack development, database management, and creative digital solutions. 
            </p>
            <div className="flex gap-6">
              <a href="#projects" className="bg-accent hover:bg-red-800 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-transform hover:-translate-y-1 cursor-none">
                View My Work <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="font-mono text-xs text-accent tracking-[0.2em] mb-4 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-accent" /> ABOUT ME
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Bridging Logic & Creativity</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a <span className="text-accent font-semibold">2nd-year Computing undergraduate at NIBM, Colombo</span>. My focus is on transforming complex requirements into functional, secure, and aesthetically pleasing systems.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Outside of my academic work, I work as a freelance developer and data administrator. As a trilingual communicator (English, Sinhala, Tamil) and a Youth Leader, I thrive on building technology that genuinely connects and serves communities.
              </p>
            </div>
            
            {/* Skill Pills (Theekshana Style) */}
            <div className="flex flex-col gap-4 sticky top-32">
              <div className="bg-surface border border-border rounded-full p-4 flex items-center gap-4 hover:border-accent hover:-translate-y-1 hover:bg-accent/5 transition-all cursor-none">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Code2 size={24} /></div>
                <div>
                  <h4 className="font-bold text-white">Full-Stack Development</h4>
                  <p className="text-sm text-gray-500">React, Next.js, HTML/CSS/JS</p>
                </div>
              </div>
              <div className="bg-surface border border-border rounded-full p-4 flex items-center gap-4 hover:border-accent hover:-translate-y-1 hover:bg-accent/5 transition-all cursor-none">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent"><Database size={24} /></div>
                <div>
                  <h4 className="font-bold text-white">Systems Engineering</h4>
                  <p className="text-sm text-gray-500">Java, Python, SQL, DBMS Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-32 bg-surface relative z-10">
          <div className="px-6 md:px-20 mb-12 max-w-7xl mx-auto">
            <div className="font-mono text-xs text-accent tracking-[0.2em] mb-4 flex items-center gap-4">
              <div className="w-10 h-[1px] bg-accent" /> RECENT WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>

          <div className="projects-scroll" ref={scrollRef}>
            {/* ScamGuard */}
            <div className="project-card bg-surface-2 border border-border rounded-[30px] p-8 hover:border-accent/50 transition-all group">
              <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-black rounded-xl mb-8 flex items-center justify-center text-accent">
                <Shield size={64} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block">CYBERSECURITY</span>
              <h3 className="text-2xl font-bold mb-4">ScamGuard-LK</h3>
              <p className="text-gray-400 mb-6">Real-time browser extension detecting localized 'Singlish' phishing scams using a custom trigger database.</p>
              <a href="https://github.com/shalom-jed/ScamGuard-LK" target="_blank" className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all cursor-none">
                View Source <ArrowRight size={16} />
              </a>
            </div>

            {/* Church DBMS */}
            <div className="project-card bg-surface-2 border border-border rounded-[30px] p-8 hover:border-accent/50 transition-all group">
              <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-black rounded-xl mb-8 flex items-center justify-center text-accent">
                <Server size={64} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block">DBMS | FREELANCE</span>
              <h3 className="text-2xl font-bold mb-4">Church DBMS & Portal</h3>
              <p className="text-gray-400 mb-6">A specialized management system and official digital presence for the Assembly of God Church, Ruwanwella.</p>
              <a href="https://github.com/shalom-jed/church-dbms" target="_blank" className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all cursor-none">
                View Source <ArrowRight size={16} />
              </a>
            </div>

            {/* Hymn Book */}
            <div className="project-card bg-surface-2 border border-border rounded-[30px] p-8 hover:border-accent/50 transition-all group">
              <div className="aspect-[16/10] bg-gradient-to-br from-accent/20 to-black rounded-xl mb-8 flex items-center justify-center text-accent">
                <BookOpen size={64} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-xs font-bold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block">REACT | FIREBASE</span>
              <h3 className="text-2xl font-bold mb-4">Hymn Book App</h3>
              <p className="text-gray-400 mb-6">Fast, searchable digital hymnal for active worship, natively storing both Sinhala and Tamil lyrics.</p>
              <a href="https://github.com/shalom-jed/hymn-book" target="_blank" className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all cursor-none">
                View Source <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-32 px-6 md:px-20 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="font-mono text-xs text-accent tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-accent" /> TECHNICAL EXPERTISE <div className="w-10 h-[1px] bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Core Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['TypeScript / JavaScript', 'Java & OOP', 'Python (Flask)', 'SQL & Databases', 'React & Next.js', 'HTML & Tailwind', 'Hardware (Arduino)', 'Git / Version Control'].map((skill) => (
              <div key={skill} className="bg-surface border border-border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-accent transition-all duration-300">
                <Terminal size={32} className="mx-auto text-accent mb-4" />
                <h3 className="font-bold text-lg text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 bg-surface text-center relative z-10 border-t border-border">
          <div className="max-w-2xl mx-auto px-6">
            <div className="font-mono text-xs text-accent tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
              <div className="w-10 h-[1px] bg-accent" /> GET IN TOUCH <div className="w-10 h-[1px] bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-gray-400 text-lg mb-10">
              Whether you need a custom system built or just want to connect, my inbox is always open.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a href="https://github.com/shalom-jed" target="_blank" className="w-16 h-16 bg-surface-2 border border-border rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:-translate-y-2 transition-all cursor-none">
                <Github size={24} />
              </a>
              <a href="mailto:shalomjedidiah339@gmail.com" className="w-16 h-16 bg-surface-2 border border-border rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:-translate-y-2 transition-all cursor-none">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/shalom-jed" target="_blank" className="w-16 h-16 bg-surface-2 border border-border rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:-translate-y-2 transition-all cursor-none">
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