import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { academicBackground } = portfolioData;

  return (
    <section id="education" className="py-24 relative border-t border-panel-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-panel border border-panel-border text-electric-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Computing and business management foundations.
          </h2>
          <p className="text-base text-muted-slate leading-relaxed">
            Combining rigorous theoretical grounding in business operations and IT project management with advanced undergraduate studies in data science and machine learning.
          </p>
        </div>

        {/* Education Timeline / Cards Grid */}
        <div className="mt-12 space-y-6">
          {academicBackground.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-panel-border p-6 sm:p-7 hover:border-panel-border-light transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-panel-border pb-4">
                <div>
                  <span className="text-xs font-semibold text-electric-400 uppercase tracking-wider">
                    {edu.institution}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {edu.degree}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-panel border border-panel-border text-muted-slate">
                    <Calendar className="w-3.5 h-3.5 text-electric-400" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Core focus & details */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p className="font-medium text-slate-200">
                  {edu.highlight}
                </p>
                <p className="text-muted-slate leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {/* Identifiers if relevant */}
              {(edu.studentId || edu.candidateId) && (
                <div className="pt-2 text-[11px] font-mono text-muted-subtle flex gap-4">
                  {edu.studentId && <span>Student ID: {edu.studentId}</span>}
                  {edu.candidateId && <span>Candidate ID: {edu.candidateId}</span>}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
