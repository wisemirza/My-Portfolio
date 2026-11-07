import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Workflow,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

const MIRO_URL =
  'https://miro.com/app/live-embed/uXjVETfGO_E=/?embedMode=view_only_without_ui&moveToViewport=-1760,-1854,8746,4156&embedId=804057529450';

// Wait for the entrance animation to finish before starting the heavy iframe request, so
// the third-party page never competes with the animation for the main thread.
const EMBED_DELAY_MS = 1100;

const PAGE_CLASS = 'min-h-screen bg-[#09090b] text-zinc-100 antialiased';

function BackLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-600 transition-colors duration-300"
    >
      <ArrowLeft className="w-4 h-4 text-zinc-500 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
      <span>{children}</span>
    </a>
  );
}

function ExternalTextLink({ href, children, icon, iconClass = 'w-4 h-4' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1.5 font-medium text-zinc-300 hover:text-white rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-600 transition-[color,transform] duration-300 ease-out hover:-translate-y-0.5"
    >
      {icon}
      <span className="link-underline">{children}</span>
      <ArrowUpRight
        className={`${iconClass} text-zinc-500 transition-[transform,color] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-300`}
      />
    </a>
  );
}

function MiroEmbed() {
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), EMBED_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video sm:h-[432px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl transition-colors duration-500 hover:border-zinc-700">
      <div
        className={`absolute inset-0 flex items-center justify-center text-xs text-zinc-600 transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Loading board...
      </div>
      {mounted && (
        <iframe
          className={`relative w-full h-full border-0 transition-opacity duration-700 ease-out ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={MIRO_URL}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          frameBorder="0"
          scrolling="no"
          allow="fullscreen; clipboard-read; clipboard-write"
          allowFullScreen
          title="Student Voice Business Analysis Deliverables"
        />
      )}
    </div>
  );
}

// ==============================================================
// PROJECTS OVERVIEW (no 'Projects' title, top nav only, clean button)
// ==============================================================
export function ProjectList() {
  return (
    <div className={PAGE_CLASS}>
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-8">
        {/* Top navigation only */}
        <div className="reveal flex items-center justify-between" style={{ '--i': 0 }}>
          <BackLink href="#/">Back to home</BackLink>
          <span className="text-xs text-zinc-600 font-mono">Waiz Mirza &middot; Projects</span>
        </div>

        {/* Project card */}
        <div className="space-y-4 pt-2">
          {/* Visual frame (clickable, no outlines) */}
          <a
            href="#/projects/student-voice"
            aria-label="Open the Student Voice project"
            className="reveal-scale group block cursor-pointer relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800/90 bg-gradient-to-br from-zinc-900 via-[#101014] to-zinc-950 p-6 sm:p-8 flex items-center justify-center outline-none transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50 active:scale-[0.995] focus-visible:border-zinc-600"
            style={{ '--i': 1 }}
          >
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-50 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Inner mockup frame */}
            <div className="relative w-full max-w-md rounded-xl bg-zinc-950/90 border border-zinc-800/80 p-5 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <div className="flex items-center gap-2.5">
                  <img src="/icon.svg" alt="" className="w-7 h-7" />
                  <span className="text-xs font-semibold text-white tracking-tight">Student Voice</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  EN &middot; 中文
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="h-10 rounded-lg bg-zinc-900/80 border border-zinc-800/60 px-3 flex items-center text-xs text-zinc-500">
                  Anonymous cohort feedback &middot; Tap to read full project...
                </div>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1">
                  <span>UWE Bristol &middot; Data Science &amp; AI</span>
                  <span className="text-zinc-300 transition-colors duration-300 group-hover:text-white">
                    View Deliverables &rarr;
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Project name and year row */}
          <div
            className="reveal flex items-center justify-between text-xs sm:text-sm text-zinc-400 px-1"
            style={{ '--i': 2 }}
          >
            <span className="text-zinc-200 font-medium">Bilingual student feedback &amp; voting platform</span>
            <span className="text-zinc-500 font-normal flex-shrink-0 ml-3">Student Voice</span>
          </div>

          {/* Learn more button (subtle background lightening only, no outline) */}
          <div className="reveal pt-2 px-1" style={{ '--i': 3 }}>
            <a
              href="#/projects/student-voice"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white outline-none focus-visible:bg-zinc-800 focus-visible:text-white shadow-sm transition-[background-color,color,transform] duration-300 ease-out active:scale-[0.98]"
            >
              <span>Learn more about this project</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 transition-[transform,color] duration-300 ease-out group-hover:translate-x-1 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==============================================================
// ARTICLE / DETAIL VIEW
// ==============================================================
export function ProjectArticle() {
  return (
    <div className={PAGE_CLASS}>
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-12">
        {/* Top navigation only */}
        <div className="reveal flex items-center justify-between" style={{ '--i': 0 }}>
          <BackLink href="#/projects">Back to projects</BackLink>
          <span className="text-xs text-zinc-600 font-mono">Student Voice</span>
        </div>

        <article className="space-y-6 pt-2">
          {/* Header */}
          <div className="reveal flex items-start gap-4" style={{ '--i': 1 }}>
            <img src="/icon.svg" alt="Student Voice Logo" className="w-12 h-12 flex-shrink-0" />

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Student Voice</h1>
              <p className="text-sm text-zinc-400">
                Bilingual Student Feedback &amp; Voting Platform (UWE Bristol)
              </p>
            </div>
          </div>

          {/* Narrative: what it did, what was involved */}
          <div className="space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            <p className="reveal" style={{ '--i': 2 }}>
              As student representative for the data science and AI cohort at UWE Bristol, I found that the majority of our cohort was Chinese and had to uninstall WhatsApp. WhatsApp was primarily used as a way to share feedback, but many of them did not participate because they were not familiar with the platform, they had language barriers, and they were shy to give feedback.
            </p>

            <p className="reveal" style={{ '--i': 3 }}>
              International students, particularly Chinese speakers, often hesitated to post questions or raise issues due to English translation anxiety.
            </p>

            <p className="reveal" style={{ '--i': 4 }}>
              Students also avoided giving honest feedback about course modules or assessment schedules because their phone numbers and personal identities were exposed to everyone in the chat. We were never able to run a successful WhatsApp group. In fact, we had difficulty even adding or getting any feedback on our WhatsApp group, and we were only able to add two or three students.
            </p>

            <p className="reveal text-zinc-300 font-medium pt-1" style={{ '--i': 5 }}>
              Before jumping to write any code, I structured the solution through formal business analysis deliverables.
            </p>
          </div>

          {/* Interactive Miro deliverables embed */}
          <div className="reveal-scale space-y-3 pt-4 border-t border-zinc-800/80" style={{ '--i': 6 }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                <Workflow className="w-4 h-4 text-zinc-400" />
                <span>Interactive BA Deliverables (Miro Board)</span>
              </div>
              <a
                href={MIRO_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-600 transition-colors duration-300"
              >
                <span>Open full screen</span>
                <ExternalLink className="w-3 h-3 text-zinc-500 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <MiroEmbed />

            <p className="text-xs text-zinc-500 leading-normal">
              You can pan, zoom, and explore all deliverables directly inside the board above, or click full screen to review the problem statement, AS-IS / TO-BE process flows, software requirements, user stories, and UAT test scenarios.
            </p>
          </div>

          {/* Action links */}
          <div
            className="reveal pt-4 flex flex-wrap items-center gap-4 text-sm border-t border-zinc-800/80"
            style={{ '--i': 7 }}
          >
            <ExternalTextLink href="https://studentrep.netlify.app">Live Student Voice App</ExternalTextLink>

            <span className="text-zinc-700">&middot;</span>

            <ExternalTextLink
              href="https://github.com/wisemirza/Studentrep"
              icon={<Github className="w-4 h-4 text-zinc-400" />}
              iconClass="w-3.5 h-3.5"
            >
              GitHub Repository
            </ExternalTextLink>
          </div>
        </article>
      </div>
    </div>
  );
}
