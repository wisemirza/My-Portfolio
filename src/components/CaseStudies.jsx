import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  FileText,
  Workflow,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'Business Analysis',
    'Operations Dashboards',
    'Explainable AI & ML',
    'User Insights'
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.caseStudies
    : portfolioData.caseStudies.filter(p => p.category === activeCategory);

  return (
    <section id="case-studies" className="py-24 relative border-t border-panel-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-panel border border-panel-border text-electric-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Real Projects & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical problems solved with clear requirements.
          </h2>
          <p className="text-base text-muted-slate leading-relaxed">
            Every project below is grounded in actual operational or student cohort challenges. No mock companies or placeholder data—just clear problems, methodical steps, and verified results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-panel-border pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-electric-700 text-white shadow-md shadow-electric-950 font-semibold'
                  : 'bg-panel text-slate-300 hover:text-white hover:bg-panel-hover border border-panel-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel p-6 border border-panel-border flex flex-col justify-between hover:border-panel-border-light transition-all hover:translate-y-[-2px] text-left"
            >
              <div className="space-y-4">
                
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-panel-hover text-electric-300 border border-electric-900/50">
                    {project.tag}
                  </span>
                  <span className="text-muted-slate text-xs">{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-electric-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted-slate line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Grounded Problem Highlight */}
                <div className="p-3 rounded-xl bg-panel/70 border border-panel-border/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs text-muted-slate line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                {/* Tools Applied */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-subtle">
                    Tools & Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-panel-hover border border-panel-border text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] text-muted-slate">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-panel-border/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-panel hover:bg-electric-700 border border-panel-border hover:border-electric-600 px-3.5 py-2 rounded-lg transition-all"
                >
                  <span>Deep Dive & Artefacts</span>
                  <ArrowRight className="w-3.5 h-3.5 text-electric-400 group-hover:text-white" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white hover:bg-panel rounded-lg border border-transparent hover:border-panel-border transition-colors"
                      title="Open Live App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white hover:bg-panel rounded-lg border border-transparent hover:border-panel-border transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Deep Dive Modal */}
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
