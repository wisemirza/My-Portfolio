import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  FileCheck,
  Wrench,
  TrendingUp,
  Workflow
} from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-void-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-void-900 border border-panel-border rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-void-900/95 backdrop-blur-md border-b border-panel-border px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-electric-950 text-electric-300 border border-electric-700/50">
              {project.tag}
            </span>
            <span className="text-xs text-muted-slate">• {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-left">
          
          {/* Title & One-line Summary */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-muted-slate mt-2 leading-relaxed">
              {project.summary}
            </p>

            {/* Context meta */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400 bg-panel/60 p-3 rounded-xl border border-panel-border">
              {project.context && Object.entries(project.context).map(([key, value]) => (
                <div key={key} className="flex items-center gap-1.5">
                  <span className="uppercase text-[10px] tracking-wider text-muted-subtle font-semibold">
                    {key}:
                  </span>
                  <span className="text-slate-200 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links bar if available */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-electric-700 hover:bg-electric-600 px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border px-4 py-2.5 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          {/* AS-IS vs TO-BE Highlight Box */}
          {project.baDeepDive && (
            <div className="rounded-xl border border-electric-900/60 bg-electric-950/20 p-5 space-y-4">
              <div className="flex items-center gap-2 text-electric-300 font-semibold text-sm">
                <Workflow className="w-4 h-4 text-electric-400" />
                <span>Process Transformation (AS-IS vs. TO-BE)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-panel/80 border border-panel-border space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                    Broken AS-IS State
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {project.baDeepDive.asIs}
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-panel/80 border border-electric-800/40 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Optimised TO-BE State
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {project.baDeepDive.toBe}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section: The Problem */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>1. The Problem Identified</span>
            </div>
            <div className="p-4 rounded-xl bg-panel/70 border border-panel-border text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </div>
          </div>

          {/* Section: BA Steps Taken */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Layers className="w-4 h-4 text-electric-400" />
              <span>2. Steps Taken & Investigation</span>
            </div>
            <ul className="space-y-2.5">
              {project.keySteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-panel border border-panel-border flex items-center justify-center text-[10px] font-semibold text-electric-400 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Tools Used */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Wrench className="w-4 h-4 text-slate-400" />
              <span>3. Tools & Technologies Applied</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-panel border border-panel-border text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Artefacts Produced */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>4. BA Artefacts Produced</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.artefacts.map((art, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-panel/60 border border-panel-border text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{art}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Direct Outcomes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <TrendingUp className="w-4 h-4 text-electric-400" />
              <span>5. Direct Measurable Outcomes</span>
            </div>
            <div className="space-y-2">
              {project.outcomes.map((outcome, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-panel/80 border border-panel-border text-xs sm:text-sm text-slate-300 flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-void-900/95 backdrop-blur-md border-t border-panel-border px-6 py-4 flex items-center justify-between z-20">
          <span className="text-xs text-muted-slate">
            Mohammad Waiz Mirza • Portfolio Case Study
          </span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-300 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border px-4 py-2 rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
