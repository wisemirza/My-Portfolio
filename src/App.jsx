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
    primary: true,
    iconClass: 'text-amber-500/80 dark:text-amber-200/85 group-hover:text-amber-600 dark:group-hover:text-amber-200'
  },
  {
    label: 'My CV',
    href: '/Mohammad_Waiz_Mirza_Business_Analyst_CV.pdf',
    Icon: FileText,
    external: true,
    iconClass: 'text-sky-500/75 dark:text-sky-200/75 group-hover:text-sky-600 dark:group-hover:text-sky-200'
  },
  {
    label: 'Email me',
    href: 'mailto:Mohammad2.Mirza@live.uwe.ac.uk',
    Icon: Mail,
    iconClass: 'text-rose-500/75 dark:text-rose-200/75 group-hover:text-rose-600 dark:group-hover:text-rose-200'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/wisemirza',
    Icon: Github,
    external: true,
    iconClass: 'text-violet-500/75 dark:text-violet-200/75 group-hover:text-violet-600 dark:group-hover:text-violet-200'
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

function HomePage({ theme, onToggleTheme }) {
  return (
    <main className="relative min-h-screen bg-[#f5f4f0] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-start px-6 pb-20 antialiased overflow-x-clip transition-colors duration-300">
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
          <div className="reveal flex items-center justify-between gap-3" style={{ '--i': 0 }}>
            <div className="flex items-center gap-3 flex-wrap">
              <h1
                id="intro-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white inline-block"
              >
                Hi, I'm Waiz.
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/85 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-sm">
                <MapPin className="w-3 h-3 text-zinc-400 dark:text-zinc-400" />
                <span>Bristol, UK</span>
                <img
                  src="/uk-flag.png"
                  alt="United Kingdom flag"
                  className="w-3.5 h-3.5 inline-block select-none"
                  draggable={false}
                />
              </span>
            </div>

            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <p className="reveal text-sm font-medium text-zinc-500 dark:text-zinc-400" style={{ '--i': 1 }}>
            Aspiring Business Analyst &middot; Data Science &amp; AI Student
          </p>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          <p className="reveal" style={{ '--i': 2 }}>
            I'm currently an undergraduate studying{' '}
            <span className="text-zinc-900 dark:text-zinc-200 font-medium">
              Data Science and Artificial Intelligence
            </span>{' '}
            at the University of the West of England (UWE Bristol).
          </p>
          <p className="reveal" style={{ '--i': 3 }}>
            I'm passionate about becoming a{' '}
            <span className="text-zinc-900 dark:text-zinc-200 font-medium">Business Analyst</span>. I love identifying
            issues, creating solutions, outlining the process, and delivering results that actually work to make
            businesses and people's lives better.
          </p>
          <p className="reveal text-sm sm:text-base text-zinc-500 dark:text-zinc-500" style={{ '--i': 4 }}>
            Currently representing my cohort as an elected Student Representative, with a background in computing and
            business management.
          </p>
        </div>

        <nav
          aria-label="Links"
          className="reveal pt-5 border-t border-zinc-200/90 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
          style={{ '--i': 5 }}
        >
          {TOUCHPOINTS.map(({ label, href, Icon, external, iconClass, primary }) =>
            primary ? (
              <a
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-medium text-zinc-800 dark:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 transition-[background-color,border-color,color,transform] duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Icon className={`w-4 h-4 transition-colors duration-300 ${iconClass}`} />
                <span>{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 transition-[transform,color] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
              </a>
            ) : (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 transition-[color,transform] duration-300 ease-out hover:-translate-y-0.5"
              >
                <Icon className={`w-4 h-4 transition-colors duration-300 ${iconClass}`} />
                <span className="link-underline">{label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600 transition-[transform,color] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-300" />
              </a>
            )
          )}
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
  if (shown.name === 'project') page = <ProjectArticle id={shown.id} theme={theme} onToggleTheme={toggleTheme} />;
  else if (shown.name === 'projects') page = <ProjectList theme={theme} onToggleTheme={toggleTheme} />;
  else page = <HomePage theme={theme} onToggleTheme={toggleTheme} />;

  return (
    <div key={shown.key} className={leaving ? 'page-leaving' : undefined}>
      {page}
    </div>
  );
}
