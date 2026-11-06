import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, MapPin, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CVModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-void-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-void-900 border border-panel-border rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto text-left">
        
        {/* Controls Bar */}
        <div className="sticky top-0 bg-void-900/95 backdrop-blur-md border-b border-panel-border px-6 py-4 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-sm">Curriculum Vitae</span>
            <span className="text-xs text-muted-slate">• Mohammad Waiz Mirza</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-panel hover:bg-panel-hover border border-panel-border transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-electric-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Readable CV Paper Surface */}
        <div className="p-6 sm:p-10 space-y-8 text-slate-200 bg-void-950/60 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-panel-border pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black">
              MOHAMMAD WAIZ MIRZA
            </h1>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-electric-400 uppercase">
              BUSINESS ANALYSIS &nbsp;|&nbsp; DIGITAL PRODUCTS &nbsp;|&nbsp; USER INSIGHTS
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-slate pt-1">
              <span>Bristol, UK</span>
              <span>•</span>
              <a href="mailto:Mohammad2.Mirza@live.uwe.ac.uk" className="hover:text-electric-300">
                Mohammad2.Mirza@live.uwe.ac.uk
              </a>
              <span>•</span>
              <a href="https://github.com/wisemirza" target="_blank" rel="noreferrer" className="hover:text-electric-300">
                GitHub: wisemirza
              </a>
              <span>•</span>
              <a href="https://public.tableau.com" target="_blank" rel="noreferrer" className="hover:text-electric-300">
                Tableau Public
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-electric-400 border-b border-panel-border/80 pb-1">
              PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-black">
              Data Science and AI undergraduate with a computing and business management background and hands-on experience developing digital products. Interested in junior Business Analyst roles focused on understanding user needs, analysing processes and translating business problems into practical digital solutions. Project experience includes stakeholder mapping, AS-IS/TO-BE process mapping, requirements documentation, user stories and UAT planning, alongside website behaviour analysis and AI-assisted prototyping.
            </p>
          </div>

          {/* Relevant Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-electric-400 border-b border-panel-border/80 pb-1">
              RELEVANT SKILLS
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p>
                <strong className="text-white print:text-black">Business analysis (project-based):</strong> Problem identification; stakeholder mapping; AS-IS/TO-BE process mapping; functional requirements; user stories and acceptance criteria; UAT planning; Miro.
              </p>
              <p>
                <strong className="text-white print:text-black">Analytics and reporting:</strong> Google Analytics; Microsoft Clarity; session recordings; heatmaps; Tableau; dashboard design; chart selection; presenting findings.
              </p>
              <p>
                <strong className="text-white print:text-black">Digital delivery:</strong> Web application concepts; interface design; iterative improvement; Firebase; Netlify; GitHub.
              </p>
              <p>
                <strong className="text-white print:text-black">AI-assisted workflow:</strong> ChatGPT; Gemini; Claude; Z.ai/GLM; Cursor; OpenCode; Google Antigravity; code generation, debugging and prototype refinement.
              </p>
              <p>
                <strong className="text-white print:text-black">Web technologies:</strong> Basic project-based familiarity with HTML, CSS and JavaScript; exposure to Tailwind CSS and Chart.js.
              </p>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-electric-400 border-b border-panel-border/80 pb-1">
              SELECTED PROJECTS
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold print:text-black">
                  <span>Student Voice — Bilingual Student Feedback Platform</span>
                  <span className="text-xs text-muted-slate font-normal">Independent cohort initiative, 2026 | Live project</span>
                </div>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 print:text-black text-xs leading-relaxed">
                  <li>Identified barriers in the cohort's WhatsApp-based feedback process, including different platform preferences, language needs and concerns about sharing phone numbers.</li>
                  <li>Developed an English and Simplified Chinese web platform for account-free feedback submission, public browsing and voting, with content reporting and administrative moderation; used Firebase for data storage and Netlify for hosting.</li>
                  <li>Produced retrospective BA artefacts covering stakeholder analysis, AS-IS/TO-BE process maps, functional requirements, user stories, acceptance criteria and UAT test scenarios.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold print:text-black">
                  <span>AI Image-Prompt Sharing Platform</span>
                  <span className="text-xs text-muted-slate font-normal">Independent digital product, 2025 – 2026</span>
                </div>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 print:text-black text-xs leading-relaxed">
                  <li>Reviewed website traffic and user sessions using Google Analytics and Microsoft Clarity after the platform attracted around 10,000 monthly visitors but relatively few prompt contributions.</li>
                  <li>Introduced options for creators to sell prompts or receive rewards for posting; 16 independent creators registered and began contributing.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold print:text-black">
                  <span>Capital Bikeshare — Operations & Demand Dashboard</span>
                  <span className="text-xs text-muted-slate font-normal">Portfolio project, 2026 | Live project</span>
                </div>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 print:text-black text-xs leading-relaxed">
                  <li>Created an interactive dashboard using the UCI Bike Sharing Dataset, presenting rental patterns through KPIs, charts, filters and a weekly/hourly demand heatmap.</li>
                  <li>Directed the visual structure and information choices for an Operations Manager audience; used AI assistance for code, calculations and debugging. Registered rentals represented approximately 81% of recorded trips.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold print:text-black">
                  <span>Tableau Data Visualisation Projects</span>
                  <span className="text-xs text-muted-slate font-normal">Portfolio work, 2026</span>
                </div>
                <ul className="list-disc pl-5 mt-1.5 space-y-1 text-slate-300 print:text-black text-xs leading-relaxed">
                  <li>Created dashboards exploring Bristol road safety, Cardiff climate trends and Alibaba sales across four quarters, practising chart selection, visual presentation and communicating findings.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-electric-400 border-b border-panel-border/80 pb-1">
              ADDITIONAL EXPERIENCE
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold print:text-black">
                  <span>Student Representative — Data Science & AI</span>
                  <span className="text-xs text-muted-slate font-normal">UWE Bristol, 2026 – present</span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-slate-300 print:text-black text-xs leading-relaxed">
                  <li>Represent cohort views and communicate student questions and concerns to the university, supporting communication between students and staff.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold print:text-black">
                  <span>Independent Digital Content & Product Creation</span>
                  <span className="text-xs text-muted-slate font-normal">Online projects, 2020 – present</span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-slate-300 print:text-black text-xs leading-relaxed">
                  <li>Built and managed the Secret Facts YouTube channel, reaching approximately 500,000 subscribers and 264 million total views; published reusable web components and interface templates on 21st.dev; produced short-form clips through Whop Content Rewards campaigns.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-electric-400 border-b border-panel-border/80 pb-1">
              EDUCATION
            </h2>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 print:text-black">
              <div>
                <strong className="text-white print:text-black">University of the West of England (UWE Bristol)</strong> — BSc (Hons) Data Science and Artificial Intelligence (Top-Up), 2026 – 2027 expected
              </div>
              <div>
                <strong className="text-white print:text-black">NCC Education</strong> — Level 5 Diploma in Computing (with Business Management), Pass (120 credits), 2026
              </div>
              <div>
                <strong className="text-white print:text-black">NCC Education</strong> — Level 4 Diploma in Computing (with Business Management), Pass, 2025
              </div>
              <div>
                <strong className="text-white print:text-black">NCC Education</strong> — Level 3 International Foundation Diploma for Higher Education Studies
              </div>
              <div className="text-xs text-muted-slate pt-1">
                <em>Selected NCC study:</em> Artificial Intelligence, Business IT Project, Principles of Business Operations, IT Project Management, eBusiness and Databases.
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 bg-void-900/95 backdrop-blur-md border-t border-panel-border px-6 py-4 flex items-center justify-between z-20 print:hidden">
          <span className="text-xs text-muted-slate">
            Mohammad Waiz Mirza • Bristol, UK
          </span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-300 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border px-4 py-2 rounded-lg transition-colors"
          >
            Close CV
          </button>
        </div>

      </div>
    </div>
  );
}
