import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  FileText, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  GitBranch,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const { personal, keyStats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Strategy whiteboard subtle grid pattern & glow */}
      <div className="absolute inset-0 whiteboard-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-electric-700/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-panel border border-panel-border text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personal.availability}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-panel border border-panel-border text-muted-slate">
                <MapPin className="w-3.5 h-3.5 text-electric-400" />
                {personal.location}
              </span>
            </div>

            {/* Main Grounded Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Translating real user problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-electric-400">clear digital solutions</span>.
            </h1>

            {/* Plain English grounded paragraph */}
            <p className="text-base sm:text-lg text-muted-slate max-w-2xl leading-relaxed">
              I am an undergraduate in <strong className="text-slate-200 font-semibold">Data Science and Artificial Intelligence</strong> at UWE Bristol with a computing and business management foundation. I look past buzzwords to map AS-IS processes, uncover why users drop off, and write structured requirements that teams can actually build.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-electric-700 hover:bg-electric-600 px-5 py-3 rounded-xl transition-all shadow-lg shadow-electric-900/40 hover:shadow-electric-700/50 hover:translate-y-[-1px]"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#artefacts"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-200 bg-panel hover:bg-panel-hover border border-panel-border hover:border-electric-600/50 px-5 py-3 rounded-xl transition-all"
              >
                <Layers className="w-4 h-4 text-electric-400" />
                <span>Inspect BA Artefacts</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border px-4 py-3 rounded-xl transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Review CV</span>
              </button>
            </div>

            {/* Trust and quick reference links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-slate border-t border-panel-border/60">
              <span className="font-medium text-slate-400">Verified Evidence:</span>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-electric-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub @wisemirza</span>
              </a>
              <span className="hidden sm:inline text-panel-border">•</span>
              <a 
                href="https://wisemirza.github.io/Capital-bikeshare-dashboard/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-electric-300 transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Capital Bikeshare Live</span>
              </a>
              <span className="hidden sm:inline text-panel-border">•</span>
              <a 
                href="https://studentrep.netlify.app" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-electric-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-electric-400" />
                <span>Student Voice Live</span>
              </a>
            </div>

          </div>

          {/* Profile Card & Avatar (4 cols on lg) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl glass-panel p-6 border border-panel-border shadow-2xl space-y-5">
              
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs text-muted-slate border-b border-panel-border/80 pb-3">
                <span className="font-mono text-slate-400">ID: 26041374 • UWE Bristol</span>
                <span className="text-electric-400 font-medium">BSc (Hons)</span>
              </div>

              {/* Avatar Image with electric accent ring */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-electric-600/60 p-0.5 bg-void-900 shadow-md shadow-electric-950">
                    <img 
                      src={personal.avatar} 
                      alt={personal.fullName}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        // fallback to a sleek avatar icon if image fails
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-panel flex items-center justify-center text-electric-400 font-bold text-2xl">WM</div>';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-void-950 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-void-950" />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-white text-base">
                    {personal.fullName}
                  </h3>
                  <p className="text-xs text-electric-400 font-medium">
                    Student Representative
                  </p>
                  <p className="text-xs text-muted-slate mt-0.5">
                    Data Science & AI Cohort
                  </p>
                </div>
              </div>

              {/* Core focus pills */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="text-[11px] uppercase tracking-wider text-muted-subtle font-semibold">
                  Core BA Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-panel-hover border border-panel-border text-slate-300">
                    AS-IS / TO-BE Flow
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-panel-hover border border-panel-border text-slate-300">
                    User Stories (Gherkin)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-panel-hover border border-panel-border text-slate-300">
                    UAT Test Scenarios
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-panel-hover border border-panel-border text-slate-300">
                    GA4 & Clarity Heatmaps
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-panel-hover border border-panel-border text-slate-300">
                    Tableau Dashboards
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-panel-hover border border-panel-border text-slate-300">
                    TreeSHAP Explainability
                  </span>
                </div>
              </div>

              {/* Quick direct contact */}
              <div className="pt-2 border-t border-panel-border/80 flex items-center justify-between text-xs">
                <span className="text-muted-slate truncate max-w-[180px]">
                  {personal.email}
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-electric-400 hover:text-electric-300 font-medium hover:underline"
                >
                  Email
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Real Metrics & Grounded Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyStats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl glass-panel border border-panel-border text-left space-y-1 hover:border-panel-border-light transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-200">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                {stat.label}
              </div>
              <p className="text-[11px] text-muted-slate leading-normal">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
