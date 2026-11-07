import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Mail, Github, MapPin, ArrowUpRight, FolderKanban, FileText } from 'lucide-react';
import { useHashRoute } from './hooks/useHashRoute';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectList, ProjectArticle } from './components/ProjectsPage';

// three.js is ~550 kB. Loading it lazily keeps the first paint (and the text entrance
// animation) free from parsing that bundle, so the motion starts smooth instead of janky.
const Lanyard = lazy(() => import('./components/Lanyard'));

const EXIT_MS = 200;

const TOUCHPOINTS = [
  {
    label: 'Check out my projects',
    href: '#/projects',
    Icon: FolderKanban,
    badgeClass:
      'bg-amber-500/15 border-amber-500/30 text-amber-500 group-hover:bg-amber-500/25 group-hover:border-amber-500/50'
  },
  {
    label: 'My CV',
    href: '/Mohammad_Waiz_Mirza_Business_Analyst_CV.pdf',
    Icon: FileText,
    external: true,
    badgeClass:
      'bg-blue-500/15 border-blue-500/30 text-blue-500 group-hover:bg-blue-500/25 group-hover:border-blue-500/50'
  },
  {
    label: 'Email me',
    href: 'mailto:Mohammad2.Mirza@live.uwe.ac.uk',
    Icon: Mail,
    badgeClass:
      'bg-rose-500/15 border-rose-500/30 text-rose-500 group-hover:bg-rose-500/25 group-hover:border-rose-500/50'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/wisemirza',
    Icon: Github,
    external: true,
    badgeClass:
      'bg-purple-500/15 border-purple-500/30 text-purple-500 group-hover:bg-purple-500/25 group-hover:border-purple-500/50'
  }
];

/**
 * Keeps the previous page on screen just long enough to fade it out, then swaps in the new
 * one (which plays its own entrance). Rapid navigation simply restarts the timer.
 */
function usePageTransition(route) {
  const [shown, setShown] = useState(route);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (route.key === shown.key) {
      setLeaving(false);
      return undefined;
    }
    setLeaving(true);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setShown(route);
      setLeaving(false);
    }, EXIT_MS);
    return () => clearTimeout(timer);
  }, [route, shown.key]);

  return { shown, leaving };
}

function HomePage() {
  return (
    <main className="relative min-h-screen theme-page flex flex-col items-center justify-start px-6 pb-20 antialiased overflow-x-clip transition-colors duration-300">
      {/* Subtle overhead ambient studio light so the background feels dimensional and alive */}
      <div className="pointer-events-none absolute inset-0 ambient-spotlight" />

      {/* 3D badge layer: covers the page so the card can be dragged anywhere and always sits above text */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Suspense fallback={null}>
          <Lanyard
            frontImage="/profile.jpg"
            backImage="/profile.jpg"
            cardColor="#ffffff"
            finish="matte"
            metal="silver"
            strapColor="#18181b"
            cardPixelHeight={145}
            strapLengthPx={70}
            alignLeftWith="#intro-heading"
            breeze={0}
            interactive
          />
        </Suspense>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto space-y-8 pt-[255px] sm:pt-[265px]">
        <div className="space-y-2">
          <div className="reveal flex items-center gap-3 flex-wrap" style={{ '--i': 0 }}>
            <h1
              id="intro-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-strong)] inline-block"
            >
              Hi, I'm Waiz.
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-[var(--text-body)] border theme-surface shadow-sm">
              <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
              <span>Bristol, UK</span>
              <img
                src="/uk-flag.png"
                alt="United Kingdom flag"
                className="w-3.5 h-3.5 inline-block select-none"
                draggable={false}
              />
            </span>
          </div>

          <p className="reveal text-sm font-medium text-[var(--text-body)]" style={{ '--i': 1 }}>
            Aspiring Business Analyst &middot; Data Science &amp; AI Student
          </p>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-[var(--text-body)] leading-relaxed font-normal">
          <p className="reveal" style={{ '--i': 2 }}>
            I'm currently an undergraduate studying{' '}
            <span className="text-[var(--text-strong)] font-medium">
              Data Science and Artificial Intelligence
            </span>{' '}
            at the University of the West of England (UWE Bristol).
          </p>
          <p className="reveal" style={{ '--i': 3 }}>
            I'm passionate about becoming a{' '}
            <span className="text-[var(--text-strong)] font-medium">Business Analyst</span>. I love identifying
            issues, creating solutions, outlining the process, and delivering results that actually work to make
            businesses and people's lives better.
          </p>
          <p className="reveal text-sm sm:text-base text-[var(--text-muted)]" style={{ '--i': 4 }}>
            Currently representing my cohort as an elected Student Representative, with a background in computing and
            business management.
          </p>
        </div>

        <nav
          aria-label="Links"
          className="reveal pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
          style={{ '--i': 5 }}
        >
          {TOUCHPOINTS.map(({ label, href, Icon, external, badgeClass }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group inline-flex items-center gap-2 text-[var(--text-body)] hover:text-[var(--text-strong)] rounded-sm outline-none transition-[color,transform] duration-300 ease-out hover:-translate-y-0.5"
            >
              <span
                className={`w-6 h-6 rounded-md border inline-flex items-center justify-center transition-colors duration-300 ${badgeClass}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="link-underline font-medium">{label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] transition-[transform,color] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text-strong)]" />
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();
  const { shown, leaving } = usePageTransition(route);
  const { theme, toggleTheme } = useTheme();

  let page;
  if (shown.name === 'project') page = <ProjectArticle id={shown.id} />;
  else if (shown.name === 'projects') page = <ProjectList />;
  else page = <HomePage />;

  return (
    <>
      <ThemeToggle theme={theme} onToggle={toggleTheme} className="fixed top-6 left-6 z-30" />
      <div key={shown.key} className={leaving ? 'page-leaving' : undefined}>
        {page}
      </div>
    </>
  );
}
