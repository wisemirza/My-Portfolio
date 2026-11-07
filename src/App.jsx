import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Mail, Github, MapPin, ArrowUpRight, FolderKanban, FileText } from 'lucide-react';
import { useHashRoute } from './hooks/useHashRoute';
import { ProjectList, ProjectArticle } from './components/ProjectsPage';

// three.js is ~550 kB. Loading it lazily keeps the first paint (and the text entrance
// animation) free from parsing that bundle, so the motion starts smooth instead of janky.
const Lanyard = lazy(() => import('./components/Lanyard'));

const EXIT_MS = 200;

const TOUCHPOINTS = [
  { label: 'Check out my projects', href: '#/projects', Icon: FolderKanban, hoverClass: 'group-hover:text-[#FFF197]' },
  { label: 'My CV', href: '/Mohammad_Waiz_Mirza_Business_Analyst_CV.pdf', Icon: FileText, external: true, hoverClass: 'group-hover:text-[#8EB9FC]' },
  { label: 'Email me', href: 'mailto:Mohammad2.Mirza@live.uwe.ac.uk', Icon: Mail, hoverClass: 'group-hover:text-[#FF513D]' },
  { label: 'GitHub', href: 'https://github.com/wisemirza', Icon: Github, external: true, hoverClass: 'group-hover:text-zinc-300' }
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
    <main className="relative min-h-screen bg-[#09090b] text-zinc-100 flex flex-col items-center justify-start px-6 pb-20 antialiased overflow-x-clip">
      {/* 3D badge layer: covers the page so the card can be dragged anywhere and always sits above text */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Suspense fallback={null}>
          <Lanyard
            frontImage="/officialcardimage-v3.png"
            backImage="/officialcardimage-v3.png"
            cardColor="#242424"
            finish="matte"
            metal="silver"
            strapColor="#18181b"
            cardPixelHeight={172}
            strapLengthPx={76}
            alignLeftWith="#intro-heading"
            breeze={0}
            interactive
          />
        </Suspense>
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto space-y-8 pt-[264px] sm:pt-[270px]">
        <div className="space-y-2">
          <div className="reveal flex items-center gap-3 flex-wrap" style={{ '--i': 0 }}>
            <h1 id="intro-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white inline-block">
              Hi, I'm Waiz.
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800">
              <MapPin className="w-3 h-3 text-zinc-400" />
              <span>Bristol, UK</span>
              <img
                src="/uk-flag.png"
                alt="United Kingdom flag"
                className="w-3.5 h-3.5 inline-block select-none"
                draggable={false}
              />
            </span>
          </div>

          <p className="reveal text-sm font-medium text-zinc-400" style={{ '--i': 1 }}>
            Aspiring Business Analyst &middot; Data Science &amp; AI Student
          </p>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          <p className="reveal" style={{ '--i': 2 }}>
            I'm currently an undergraduate studying{' '}
            <span className="text-zinc-200 font-medium">Data Science and Artificial Intelligence</span> at the
            University of the West of England (UWE Bristol).
          </p>
          <p className="reveal" style={{ '--i': 3 }}>
            I'm passionate about becoming a <span className="text-zinc-200 font-medium">Business Analyst</span>. I love
            identifying issues, creating solutions, outlining the process, and delivering results that actually work to
            make businesses and people's lives better.
          </p>
          <p className="reveal text-sm sm:text-base text-zinc-500" style={{ '--i': 4 }}>
            Currently representing my cohort as an elected Student Representative, with a background in computing and
            business management.
          </p>
        </div>

        <nav
          aria-label="Links"
          className="reveal pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-400"
          style={{ '--i': 5 }}
        >
          {TOUCHPOINTS.map(({ label, href, Icon, external, hoverClass }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group inline-flex items-center gap-1.5 text-zinc-300 hover:text-white rounded-sm outline-none focus-visible:ring-1 focus-visible:ring-zinc-600 transition-[color,transform] duration-300 ease-out hover:-translate-y-0.5"
            >
              <Icon className={`w-4 h-4 text-zinc-400 transition-colors duration-300 ${hoverClass}`} />
              <span className="link-underline">{label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 transition-[transform,color] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-300" />
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

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.removeAttribute('data-theme');
    try {
      localStorage.removeItem('theme');
    } catch {
      // ignore storage errors
    }
  }, []);

  let page;
  if (shown.name === 'project') page = <ProjectArticle id={shown.id} />;
  else if (shown.name === 'projects') page = <ProjectList />;
  else page = <HomePage />;

  return (
    <div key={shown.key} className={leaving ? 'page-leaving' : undefined}>
      {page}
    </div>
  );
}
