import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  MapPin, 
  ArrowUpRight, 
  ExternalLink, 
  Workflow, 
  FileText, 
  Maximize2 
} from 'lucide-react';

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [iconLoaded, setIconLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-purple-600 selection:text-white antialiased">
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28 space-y-24">
        
        {/* ==============================================================
            SECTION 1: HERO (Simple, authentic, human)
           ============================================================== */}
        <section className="space-y-8">
          
          {/* Circular Profile Frame */}
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
              <span 
                className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-[#09090b]" 
                title="Active & Open to roles" 
              />
            </div>
          </div>

          {/* Heading */}
          <div className="fade-in-2 space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Hi, I'm Waiz.
            </h1>
            <p className="text-sm sm:text-base font-medium text-purple-400">
              Aspiring Business Analyst &middot; Data Science & AI Student
            </p>
          </div>

          {/* Description */}
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

          {/* Minimal touchpoints */}
          <div className="fade-in-4 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <a
              href="mailto:Mohammad2.Mirza@live.uwe.ac.uk"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Email me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
            </a>

            <a
              href="https://github.com/wisemirza"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500"
            >
              <Github className="w-4 h-4 text-zinc-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
            </a>

            <div className="inline-flex items-center gap-1.5 text-zinc-500 text-xs sm:text-sm ml-auto">
              <MapPin className="w-3.5 h-3.5 text-zinc-600" />
              <span>Bristol, UK</span>
            </div>
          </div>

        </section>


        {/* ==============================================================
            SECTION 2: SOME OF MY PROJECTS (Focused solely on Student Voice)
           ============================================================== */}
        <section id="projects" className="pt-8 border-t border-zinc-800/80 space-y-10">
          
          {/* Section Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Some of my projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              A look at how I identify user friction, map processes, and document real business analysis deliverables.
            </p>
          </div>

          {/* Project Card: Student Voice */}
          <div className="space-y-6">
            
            {/* Project Header with Logo */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden p-1 bg-zinc-900 border border-zinc-800 shadow-lg flex-shrink-0">
                <img
                  src="/icon.svg"
                  alt="Student Voice Logo"
                  onLoad={() => setIconLoaded(true)}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Student Voice
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-950/80 text-purple-300 border border-purple-800/40">
                    Cohort Initiative &middot; 2026
                  </span>
                </div>
                <p className="text-sm text-zinc-400">
                  Bilingual Student Feedback &amp; Voting Platform (UWE Bristol)
                </p>
              </div>
            </div>

            {/* Context & The Problem */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              <p>
                As Student Representative for our Data Science &amp; AI cohort, I noticed that all student communication was happening inside a 100+ member WhatsApp group. This created two serious barriers:
              </p>

              <ul className="space-y-2 pl-4 border-l-2 border-zinc-800 text-sm sm:text-base text-zinc-300">
                <li>
                  <strong className="text-white">Language barriers:</strong> Chinese-speaking international students frequently hesitated to ask questions or give feedback due to translation anxiety.
                </li>
                <li>
                  <strong className="text-white">Privacy &amp; exposure:</strong> Students avoided raising critical feedback about modules or assessments because their private phone numbers and personal names were visible to everyone in the chat.
                </li>
              </ul>

              <p>
                As a result, genuine feedback was either kept private or completely buried under casual chatter, leaving reps with little concrete evidence to take to faculty meetings.
              </p>
            </div>

            {/* What I did (The BA Deliverables) */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400">
                The Business Analysis Process
              </h4>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Rather than rushing into code, I carried out a structured business analysis process to ensure we solved the root problem:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 pt-1">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="font-semibold text-white">Problem &amp; Stakeholder Mapping</div>
                  <div className="text-zinc-400 text-xs">Identified student, rep, and course leader needs.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="font-semibold text-white">AS-IS vs. TO-BE Process Flows</div>
                  <div className="text-zinc-400 text-xs">Diagnosed WhatsApp friction vs. frictionless web flow.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="font-semibold text-white">User Stories &amp; Acceptance Criteria</div>
                  <div className="text-zinc-400 text-xs">Authored using Gherkin (Given-When-Then) syntax.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                  <div className="font-semibold text-white">User Acceptance Testing (UAT)</div>
                  <div className="text-zinc-400 text-xs">Verified anonymity, translation, and voting integrity.</div>
                </div>
              </div>
            </div>

            {/* Interactive Miro Deliverables Embed */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                  <Workflow className="w-4 h-4 text-purple-400" />
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
                You can pan, zoom, and inspect the deliverables directly inside the board above, including the Problem Statement, AS-IS / TO-BE maps, functional requirements, user stories, and UAT scenarios.
              </p>
            </div>

            {/* Quick Live & Source Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
              <a
                href="https://studentrep.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
              >
                <span>Live Student Voice App</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400" />
              </a>

              <span className="text-zinc-700">&middot;</span>

              <a
                href="https://github.com/wisemirza/Studentrep"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hover:underline underline-offset-4 decoration-purple-500 font-medium"
              >
                <Github className="w-4 h-4 text-zinc-400" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            </div>

          </div>

        </section>

        {/* Minimal Footer */}
        <footer className="pt-12 border-t border-zinc-800/80 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Mohammad Waiz Mirza &middot; Bristol, UK</p>
          <a
            href="mailto:Mohammad2.Mirza@live.uwe.ac.uk"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Mohammad2.Mirza@live.uwe.ac.uk
          </a>
        </footer>

      </div>
    </div>
  );
}
