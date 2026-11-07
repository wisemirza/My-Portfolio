import React from 'react';
import { Briefcase, Users, Youtube, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative border-t border-panel-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-panel border border-panel-border text-electric-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Leadership & Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Proven communication, user advocacy, and digital execution.
          </h2>
          <p className="text-base text-muted-slate leading-relaxed">
            Real responsibilities representing diverse stakeholders and growing digital audiences through systematic retention analytics.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-12 space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel border border-panel-border p-6 sm:p-8 hover:border-panel-border-light transition-all space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-panel-border pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-electric-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-panel-border">•</span>
                    <span className="text-xs text-muted-slate flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">
                    {exp.organisation}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-panel border border-panel-border text-muted-slate self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-electric-400" />
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-subtle">
                  Key Achievements & Responsibilities
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-electric-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
