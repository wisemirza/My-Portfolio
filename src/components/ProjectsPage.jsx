import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Workflow, 
  ArrowUpRight 
} from 'lucide-react';

export default function ProjectsPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-purple-600 selection:text-white antialiased">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-12">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
            <span>Back to home</span>
          </button>

          <span className="text-xs text-zinc-600 font-mono">
            Waiz Mirza &middot; Projects
          </span>
        </div>

        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h1>
          <p className="text-sm sm:text-base text-zinc-400">
            A look at how I identify user friction, map processes, and document real business analysis deliverables.
          </p>
        </div>

        {/* ==============================================================
            PROJECT: STUDENT VOICE (ONLY PROJECT)
           ============================================================== */}
        <section className="space-y-6 pt-4 border-t border-zinc-800/80">
          
          {/* Project Title & Logo Header (Raw logo, no extra padded container) */}
          <div className="flex items-start gap-4">
            <img
              src="/icon.svg"
              alt="Student Voice Logo"
              className="w-12 h-12 flex-shrink-0"
            />

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Student Voice
                </h2>
                <span className="text-xs text-zinc-500 font-mono bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">
                  2026
                </span>
              </div>
              <p className="text-sm text-zinc-400">
                Bilingual Student Feedback &amp; Voting Platform (UWE Bristol)
              </p>
            </div>
          </div>

          {/* Context & The Problem (Plain English, authentic, no em-dashes) */}
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
          <div className="space-y-3 pt-2">
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
              You can pan, zoom, and explore all deliverables directly inside the board above, or click full screen to review the problem statement, AS-IS / TO-BE process flows, software requirements, user stories, and UAT test scenarios.
            </p>
          </div>

          {/* Direct Links */}
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

        </section>

        {/* Minimal Footer */}
        <footer className="pt-12 border-t border-zinc-800/80 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to home</span>
          </button>
          <span>&copy; {new Date().getFullYear()} Mohammad Waiz Mirza &middot; Bristol, UK</span>
        </footer>

      </div>
    </div>
  );
}
