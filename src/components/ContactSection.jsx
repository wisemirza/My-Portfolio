import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Github, 
  BarChart, 
  Send, 
  FileText,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection({ onOpenCV }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentMessage, setSentMessage] = useState(false);

  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=Inquiry from Portfolio: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Contact: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setSentMessage(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-panel-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-panel border border-panel-border text-electric-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's discuss how I can contribute to your team.
          </h2>
          <p className="text-base text-muted-slate leading-relaxed">
            I am currently exploring Junior Business Analyst, Product Analyst, and Operations Analyst opportunities in Bristol, London/South West hybrid, or remote.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel border border-panel-border p-6 sm:p-7 space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-subtle">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-void-950/80 border border-panel-border">
                  <span className="text-xs sm:text-sm font-mono text-slate-200 select-all truncate">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white hover:bg-panel rounded-lg border border-transparent hover:border-panel-border transition-colors flex-shrink-0"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-400 font-medium pl-1">
                    Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Relocation */}
              <div className="space-y-2 text-xs text-muted-slate border-t border-panel-border/80 pt-4">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-electric-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-200 font-medium block">
                      Based in Bristol, UK
                    </span>
                    <span>Eligible to work in the UK; open to hybrid roles in Bristol, Bath, Cardiff, Reading, London, and remote.</span>
                  </div>
                </div>
              </div>

              {/* CV Action */}
              <div className="border-t border-panel-border/80 pt-4">
                <button
                  onClick={onOpenCV}
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 bg-panel hover:bg-panel-hover border border-panel-border hover:border-electric-600/50 py-3 rounded-xl transition-all"
                >
                  <FileText className="w-4 h-4 text-electric-400" />
                  <span>Inspect & Review Full CV</span>
                </button>
              </div>

              {/* Social Profiles */}
              <div className="border-t border-panel-border/80 pt-4 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-subtle block">
                  Public Portfolios
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-panel/60 border border-panel-border text-xs text-slate-300 hover:text-white hover:border-panel-border-light transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>GitHub: @wisemirza</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-slate" />
                  </a>

                  <a
                    href={personal.tableauPublic}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-panel/60 border border-panel-border text-xs text-slate-300 hover:text-white hover:border-panel-border-light transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BarChart className="w-4 h-4 text-emerald-400" />
                      <span>Tableau Public Work</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-slate" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel border border-panel-border p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Send a message
                </h3>
                <p className="text-xs text-muted-slate mt-1">
                  Leave a note with your project or opportunity details. Clicking Send will open your default email client with your message prepared.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-void-950 border border-panel-border text-white text-xs placeholder:text-muted-subtle focus:outline-none focus:border-electric-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Email / Organisation
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-void-950 border border-panel-border text-white text-xs placeholder:text-muted-subtle focus:outline-none focus:border-electric-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message / Opportunity Scope
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about the role, project, or process challenge you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-void-950 border border-panel-border text-white text-xs placeholder:text-muted-subtle focus:outline-none focus:border-electric-500 transition-colors resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-muted-slate">
                    Sent directly to <span className="font-mono text-slate-300">{personal.email}</span>
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-electric-700 hover:bg-electric-600 px-5 py-2.5 rounded-xl transition-all shadow-md shadow-electric-950"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              {sentMessage && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-xs text-emerald-300">
                  Email client opened! If it did not launch automatically, feel free to write directly to {personal.email}.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
