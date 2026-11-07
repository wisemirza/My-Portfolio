import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  BarChart, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Gauge
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsMatrix() {
  const { skillsMatrix } = portfolioData;

  const skillGroups = [
    {
      id: 'ba',
      title: 'Business Analysis & Requirements',
      icon: ClipboardCheck,
      description: 'Requirements engineering, process discovery, and functional documentation.',
      skills: skillsMatrix.businessAnalysis
    },
    {
      id: 'analytics',
      title: 'User Analytics & Insights',
      icon: BarChart,
      description: 'Traffic funnels, session replays, and executive dashboard design.',
      skills: skillsMatrix.analyticsAndInsights
    },
    {
      id: 'digital',
      title: 'Digital Delivery & Web Technologies',
      icon: Code2,
      description: 'Rapid prototyping, backend databases, and continuous deployment.',
      skills: skillsMatrix.digitalDelivery
    },
    {
      id: 'ai',
      title: 'AI Workflow & Model Explainability',
      icon: Cpu,
      description: 'Accelerated development tools, TreeSHAP auditing, and ethical safety.',
      skills: skillsMatrix.aiWorkflow
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-panel-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-panel border border-panel-border text-electric-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical skills applied in real projects.
          </h2>
          <p className="text-base text-muted-slate leading-relaxed">
            I combine structured business analysis methods with technical literacy in web technologies and data analytics to help cross-functional teams move faster with confidence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="rounded-2xl glass-panel border border-panel-border p-6 sm:p-7 space-y-5 hover:border-panel-border-light transition-all text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-panel-hover border border-panel-border flex items-center justify-center text-electric-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {group.title}
                      </h3>
                      <p className="text-xs text-muted-slate">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 pt-2">
                    {group.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-panel/70 border border-panel-border hover:border-panel-border-light transition-colors space-y-1"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-void-950 text-electric-300 border border-electric-900/40">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-slate leading-normal">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
