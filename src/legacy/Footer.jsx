import React from 'react';
import { ArrowUp, Github, Mail, BarChart, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenCV }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-panel-border bg-void-950 py-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base">
                {portfolioData.personal.fullName}
              </span>
              <span className="text-xs text-muted-slate">• Junior Business Analyst</span>
            </div>
            <p className="text-xs text-muted-slate">
              Connecting user friction to practical digital solutions. Bristol, UK.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-slate">
            <button
              onClick={onOpenCV}
              className="hover:text-electric-300 transition-colors"
            >
              Curriculum Vitae
            </button>
            <span>•</span>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-electric-300 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://wisemirza.github.io/Capital-bikeshare-dashboard/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-electric-300 transition-colors"
            >
              Live Dashboard
            </a>
            <span>•</span>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-electric-300 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-panel border border-panel-border text-slate-400 hover:text-white hover:border-electric-600/50 transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-panel-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-subtle">
          <p>
            © {new Date().getFullYear()} Mohammad Waiz Mirza. Plain-English Business Analyst Portfolio.
          </p>
          <p>
            Built with React, Tailwind CSS, Lucide icons. Deployed to Netlify.
          </p>
        </div>
      </div>
    </footer>
  );
}
