import React, { useState, useEffect } from 'react';
import { Mail, Github, MapPin, ArrowUpRight, FolderKanban, FileText } from 'lucide-react';
import ProjectsPage from './components/ProjectsPage';
import Lanyard from './components/Lanyard';

export default function App() {
  const isProjectsRoute = (hash) => {
    return typeof hash === 'string' && hash.startsWith('#/projects');
  };

  const [currentPage, setCurrentPage] = useState(() => {
    return isProjectsRoute(window.location.hash) ? 'projects' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(isProjectsRoute(window.location.hash) ? 'projects' : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    if (page === 'projects') {
      window.location.hash = '#/projects';
    } else {
      window.location.hash = '';
      if (window.history.pushState) {
        window.history.pushState('', document.title, window.location.pathname);
      }
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'projects') {
    return <ProjectsPage onBack={() => navigateTo('home')} />;
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col items-center justify-start px-6 pt-0 pb-20 selection:bg-blue-600 selection:text-white antialiased relative overflow-x-hidden">
      
      {/* 1. Lanyard Hanging ID Badge - Interactive 3D component starting from the top, full width, layered above text */}
      <div className="absolute top-0 left-0 right-0 w-full h-[520px] sm:h-[580px] z-20 pointer-events-none overflow-visible">
        <Lanyard 
          frontImage="/profile.jpg"
          backImage="/profile.jpg"
          cardColor="#ffffff"
          finish="metallic"
          metal="silver"
          strapColor="#18181b"
          size={0.38}
          strapLength={0.16}
          alignLeftWith="#intro-heading"
          interactive={true}
        />
      </div>

      <div className="w-full max-w-xl mx-auto space-y-8 pt-[310px] sm:pt-[330px] relative z-10">

        {/* 2. Heading with integrated Location Badge right beside name */}
        <div className="fade-in-2 space-y-2">
          <div className="flex items-center gap-3">
            <h1 id="intro-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white inline-block">
              Hi, I'm Waiz.
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span>Bristol, UK</span>
            </span>
          </div>
          <p className="text-sm font-medium text-blue-400">
            Aspiring Business Analyst &middot; Data Science &amp; AI Student
          </p>
        </div>

        {/* 3. Description (Clean, human, grounded) */}
        <div className="fade-in-3 space-y-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          <p>
            I'm currently an undergraduate studying <span className="text-zinc-200 font-medium">Data Science and Artificial Intelligence</span> at the University of the West of England (UWE Bristol).
          </p>
          <p>
            I'm passionate about becoming a <span className="text-zinc-200 font-medium">Business Analyst</span>. I love taking complex, messy problems, speaking with users to understand what's actually broken, and translating those needs into clear processes, user stories, and practical requirements that teams can build with confidence.
          </p>
          <p className="text-sm sm:text-base text-zinc-500">
            Currently representing my cohort as an elected Student Representative, with a background in computing and business management.
          </p>
        </div>

        {/* 4. Minimal touchpoints (Focused purely on actions) */}
        <div className="fade-in-4 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400">
          <button
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500 cursor-pointer"
          >
            <FolderKanban className="w-4 h-4 text-blue-400" />
            <span>Check out my projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
          </button>

          <a
            href="/Mohammad_Waiz_Mirza_Business_Analyst_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>My CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
          </a>

          <a
            href="mailto:Mohammad2.Mirza@live.uwe.ac.uk"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Email me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
          </a>

          <a
            href="https://github.com/wisemirza"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500"
          >
            <Github className="w-4 h-4 text-zinc-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
          </a>
        </div>

      </div>
    </main>
  );
}
