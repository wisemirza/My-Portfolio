import React, { useState, useEffect } from 'react';
import { Mail, Github, MapPin, ArrowUpRight, FolderKanban, FileText } from 'lucide-react';
import ProjectsPage from './components/ProjectsPage';

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#/projects' ? 'projects' : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash === '#/projects' ? 'projects' : 'home');
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
    <main className="min-h-screen bg-[#09090b] text-zinc-100 flex items-center justify-center px-6 py-16 selection:bg-blue-600 selection:text-white antialiased">
      <div className="w-full max-w-xl mx-auto space-y-8">
        
        {/* 1. Circular Profile Frame */}
        <div className="fade-in-1">
          <div className="relative inline-block">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-2xl ring-1 ring-zinc-800">
              <img
                src="/profile.jpg"
                alt="Waiz Mirza"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover rounded-full transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            {/* Subtle active status indicator */}
            <span 
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-[#09090b]" 
              title="Active & Open to roles" 
            />
          </div>
        </div>

        {/* 2. Heading */}
        <div className="fade-in-2 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Hi, I'm Waiz.
          </h1>
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

        {/* 4. Minimal touchpoints */}
        <div className="fade-in-4 pt-4 border-t border-zinc-800/80 space-y-3">
          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
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

          {/* Location cleanly positioned on the left directly underneath the links */}
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs sm:text-sm pt-0.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-600" />
            <span>Bristol, UK</span>
          </div>
        </div>

      </div>
    </main>
  );
}
