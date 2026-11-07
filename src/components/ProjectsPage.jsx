import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Workflow, 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

export default function ProjectsPage({ onBack }) {
  const isArticleHash = (hash) => {
    return typeof hash === 'string' && hash.startsWith('#/projects/') && hash !== '#/projects';
  };

  const [activeProject, setActiveProject] = useState(() => {
    return isArticleHash(window.location.hash) ? 'student-voice' : null;
  });

  useEffect(() => {
    const handleHash = () => {
      if (isArticleHash(window.location.hash)) {
        setActiveProject('student-voice');
      } else {
        setActiveProject(null);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openProject = (id) => {
    window.location.hash = `#/projects/${id}`;
    setActiveProject(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeProject = () => {
    window.location.hash = '#/projects';
    setActiveProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ==============================================================
  // ARTICLE / DETAIL VIEW
  // ==============================================================
  if (activeProject) {
    return (
      <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-600 selection:text-white antialiased">
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-12">
          
          {/* Top Navigation Only */}
          <div className="flex items-center justify-between">
            <button
              onClick={closeProject}
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
              <span>Back to projects</span>
            </button>

            <span className="text-xs text-zinc-600 font-mono">
              Student Voice &middot; 2026
            </span>
          </div>

          {/* Project Article */}
          <article className="space-y-6 pt-2">
            
            {/* Header */}
            <div className="flex items-start gap-4">
              <img
                src="/icon.svg"
                alt="Student Voice Logo"
                className="w-12 h-12 flex-shrink-0"
              />

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Student Voice
                  </h1>
                  <span className="text-xs text-zinc-500 font-mono bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    2026
                  </span>
                </div>
                <p className="text-sm text-zinc-400">
                  Bilingual Student Feedback &amp; Voting Platform (UWE Bristol)
                </p>
              </div>
            </div>

            {/* Narrative: What it did, what was involved */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              <p>
                As student representative for the data science and AI cohort at UWE Bristol, I found that the majority of our cohort was Chinese and had to uninstall WhatsApp. WhatsApp was primarily used as a way to share feedback, but many of them did not participate because they were not familiar with the platform, they had language barriers, and they were shy to give feedback.
              </p>

              <p>
                International students, particularly Chinese speakers, often hesitated to post questions or raise issues due to English translation anxiety.
              </p>

              <p>
                Students also avoided giving honest feedback about course modules or assessment schedules because their phone numbers and personal identities were exposed to everyone in the chat. We were never able to run a successful WhatsApp group. In fact, we had difficulty even adding or getting any feedback on our WhatsApp group, and we were only able to add two or three students.
              </p>

              <p className="text-zinc-300 font-medium pt-1">
                Before jumping to write any code, I structured the solution through formal business analysis deliverables.
              </p>
            </div>

            {/* Interactive Miro Deliverables Embed */}
            <div className="space-y-3 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                  <Workflow className="w-4 h-4 text-blue-400" />
                  <span>Interactive BA Deliverables (Miro Board)</span>
                </div>
                <a
                  href="https://miro.com/app/live-embed/uXjVETfGO_E=/?embedMode=view_only_without_ui&moveToViewport=-1760,-1854,8746,4156&embedId=804057529450"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <span>Open full screen</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="relative w-full aspect-video sm:h-[432px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                <iframe
                  className="w-full h-full border-0"
                  src="https://miro.com/app/live-embed/uXjVETfGO_E=/?embedMode=view_only_without_ui&moveToViewport=-1760,-1854,8746,4156&embedId=804057529450"
                  frameBorder="0"
                  scrolling="no"
                  allow="fullscreen; clipboard-read; clipboard-write"
                  allowFullScreen
                  title="Student Voice Business Analysis Deliverables"
                />
              </div>

              <p className="text-xs text-zinc-500 leading-normal">
                You can pan, zoom, and explore all deliverables directly inside the board above, or click full screen to review the problem statement, AS-IS / TO-BE process flows, software requirements, user stories, and UAT test scenarios.
              </p>
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm border-t border-zinc-800/80">
              <a
                href="https://studentrep.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500 font-medium"
              >
                <span>Live Student Voice App</span>
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </a>

              <span className="text-zinc-700">&middot;</span>

              <a
                href="https://github.com/wisemirza/Studentrep"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-blue-500 font-medium"
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            </div>

          </article>

        </div>
      </div>
    );
  }

  // ==============================================================
  // PROJECTS OVERVIEW (No 'Projects' title, top nav only, clean button)
  // ==============================================================
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-blue-600 selection:text-white antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-8">
        
        {/* Top Navigation Only */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </button>

          <span className="text-xs text-zinc-600 font-mono">
            Waiz Mirza &middot; Projects
          </span>
        </div>

        {/* Project Card */}
        <div className="space-y-4 pt-2">
          
          {/* Visual Frame Container (Clickable, no blue outlines) */}
          <div 
            onClick={() => openProject('student-voice')}
            className="group cursor-pointer relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/90 bg-gradient-to-br from-zinc-900 via-[#101014] to-zinc-950 p-6 sm:p-8 flex items-center justify-center transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50"
          >
            {/* Subtle ambient background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Inner Mockup Frame */}
            <div className="relative w-full max-w-md rounded-xl bg-zinc-950/90 border border-zinc-800/80 p-5 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/icon.svg"
                    alt="Student Voice Icon"
                    className="w-7 h-7"
                  />
                  <span className="text-xs font-semibold text-white tracking-tight">
                    Student Voice
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  EN &middot; 中文
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="h-10 rounded-lg bg-zinc-900/80 border border-zinc-800/60 px-3 flex items-center text-xs text-zinc-500">
                  Anonymous cohort feedback &middot; Tap to read full project...
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                  <span>UWE Bristol &middot; Data Science &amp; AI</span>
                  <span className="text-zinc-300 group-hover:text-white">View Deliverables &rarr;</span>
                </div>
              </div>

            </div>
          </div>

          {/* Project Name and Year Row */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-400 px-1">
            <span className="text-zinc-200 font-medium">
              Bilingual student feedback &amp; voting platform
            </span>
            <span className="text-zinc-500 font-normal flex-shrink-0 ml-3">
              Student Voice &middot; 2026
            </span>
          </div>

          {/* Button: Learn more about this project (NO blue outline, subtle bg lightening only) */}
          <div className="pt-2 px-1">
            <button
              onClick={() => openProject('student-voice')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-transparent outline-none focus:outline-none focus:ring-0 transition-colors cursor-pointer group shadow-sm"
            >
              <span>Learn more about this project</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
