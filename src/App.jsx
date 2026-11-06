import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ArtefactShowcase from './components/ArtefactShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import Education from './components/Education';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-void-950 text-slate-100 flex flex-col font-sans selection:bg-electric-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content Areas */}
      <main className="flex-1">
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <CaseStudies />
        <ArtefactShowcase />
        <SkillsMatrix />
        <Education />
        <Experience />
        <ContactSection onOpenCV={() => setIsCVOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenCV={() => setIsCVOpen(true)} />

      {/* Full-screen / In-browser CV Reader Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
