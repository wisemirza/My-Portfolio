import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Github, 
  Mail, 
  ArrowUpRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'BA Artefacts', href: '#artefacts' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-void-950/90 backdrop-blur-md border-b border-panel-border py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Availability status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-panel border border-panel-border flex items-center justify-center text-electric-400 font-bold text-lg group-hover:border-electric-600 transition-colors">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-sm sm:text-base tracking-tight group-hover:text-electric-300 transition-colors">
                {portfolioData.personal.fullName}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-muted-slate">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>BA & Product Analyst</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-panel/70 border border-panel-border px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-panel-hover rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-panel hover:bg-panel-hover border border-panel-border hover:border-electric-600/50 px-3.5 py-2 rounded-lg transition-all"
              title="View full CV"
            >
              <FileText className="w-3.5 h-3.5 text-electric-400" />
              <span>View CV</span>
            </button>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-electric-700 hover:bg-electric-600 px-4 py-2 rounded-lg transition-colors shadow-sm shadow-electric-900/50"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-panel border border-panel-border"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-void-950/98 border-b border-panel-border px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-panel rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-panel-border flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex items-center justify-center gap-2 text-sm font-medium text-slate-200 bg-panel border border-panel-border py-2.5 rounded-lg"
            >
              <FileText className="w-4 h-4 text-electric-400" />
              <span>View Full CV</span>
            </button>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-electric-700 hover:bg-electric-600 py-2.5 rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Email Waiz</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
